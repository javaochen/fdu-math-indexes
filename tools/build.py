#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把 content/<书>/*.md 解析成 site/data/index.json（支持多本书）。

目录约定：

    content/
      fanyan/
        _book.md            # 书级元数据（front matter）
        01-01-度量空间.md    # 每节一个文件
      shibian/
        _book.md
        01-01-势.md

_book.md：

    ---
    id: fanyan
    title: 泛函分析
    author: 王凯
    source: 泛函王凯.pdf
    order: 1
    ---

节文件 front matter：chapter / chapter_title / section / section_title / pages。
条目头：### 类型 [编号] [(标题)] @书页码。

用法：
    python tools/build.py
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"
OUT = ROOT / "site" / "data" / "index.json"

TYPE_RE = re.compile(
    r"^###\s+(?P<type>\S+?)\s*(?P<number>\d+(?:\.\d+)*)?\s*(?:[（(](?P<title>[^（()）]*)[）)])?\s*@(?P<page>\d+)\s*$"
)
TYPES = {"定义", "定理", "命题", "引理", "推论", "例", "反例", "注", "构造", "公理"}
BIG_NUM = {"一": 1, "二": 2, "三": 3, "四": 4, "五": 5, "六": 6, "七": 7, "八": 8, "九": 9, "十": 10}


def parse_front(text: str) -> tuple[dict, str]:
    if not text.startswith("---"):
        return {}, text
    _, fm, body = text.split("---", 2)
    meta = {}
    for line in fm.strip().splitlines():
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        k, _, v = line.partition(":")
        meta[k.strip()] = v.strip().strip('"').strip("'")
    return meta, body


def escape_html(s: str) -> str:
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def inline(s: str) -> str:
    """仅支持 **粗体**，其余按 HTML 转义。公式原样保留，交给 KaTeX。"""
    s = escape_html(s)
    return re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)


def to_paragraphs(body: str) -> list[str]:
    paras, cur = [], []
    for raw in body.splitlines():
        line = raw.rstrip()
        if not line.strip():
            if cur:
                paras.append("".join(cur).strip())
                cur = []
            continue
        cur.append(line.strip())
    if cur:
        paras.append("".join(cur).strip())
    return [p for p in paras if p]


def slugify(item: dict) -> str:
    base = f"{item['type']}-{item['number']}" if item["number"] else f"{item['type']}-{item['title'] or 'x'}"
    return re.sub(r"[^\w\u4e00-\u9fff.-]+", "-", base).strip("-")


def check_math(text: str, where: str, problems: list[str]) -> None:
    if text.count("$$") % 2:
        problems.append(f"{where}: 块级公式 $$ 不成对")
    stripped = re.sub(r"\$\$.*?\$\$", "", text, flags=re.S)
    if stripped.count("$") % 2:
        problems.append(f"{where}: 行内公式 $ 不成对")


def sort_key(section_id: str) -> list[int]:
    return [int(x) for x in re.findall(r"\d+", section_id)] or [0]


def load_book(book_dir: Path, problems: list[str]) -> dict | None:
    meta_path = book_dir / "_book.md"
    if meta_path.exists():
        meta, _ = parse_front(meta_path.read_text(encoding="utf-8"))
    else:
        meta = {}
    book = {
        "id": meta.get("id") or book_dir.name,
        "title": meta.get("title") or book_dir.name,
        "author": meta.get("author", ""),
        "source": meta.get("source", ""),
        "order": int(meta.get("order") or 99),
        "chapters": [],
    }

    files = [p for p in sorted(book_dir.glob("*.md")) if not p.name.startswith("_")]
    if not files:
        print(f"注意 {book['id']}：还没有节文件，将在站点中显示为“待录入”")
        book["empty"] = True
        return book

    chapters: dict[str, dict] = {}
    for path in files:
        fm, body = parse_front(path.read_text(encoding="utf-8"))
        ch_no = fm.get("chapter", "?")
        sec_id = fm.get("section", path.stem)
        ch = chapters.setdefault(
            ch_no, {"no": ch_no, "title": fm.get("chapter_title", ""), "sections": []}
        )

        lines = body.split("\n")
        heads = [(i, m) for i, l in enumerate(lines) if (m := TYPE_RE.match(l))]
        if not heads:
            problems.append(f"{path.name}: 没有识别到任何条目头")
            continue

        section = {
            "id": sec_id,
            "title": fm.get("section_title", ""),
            "pages": fm.get("pages", ""),
            "items": [],
        }
        for n, (idx, m) in enumerate(heads):
            end = heads[n + 1][0] if n + 1 < len(heads) else len(lines)
            body_txt = "\n".join(lines[idx + 1:end])
            typ = m.group("type")
            if typ not in TYPES:
                problems.append(f"{path.name}: 未知类型“{typ}”")
            item = {
                "type": typ,
                "number": m.group("number") or "",
                "title": (m.group("title") or "").strip(),
                "page": int(m.group("page")),
            }
            html = "".join(f"<p>{inline(p)}</p>" for p in to_paragraphs(body_txt))
            if not html:
                problems.append(f"{path.name}: {typ} {item['number'] or item['title']} 正文为空")
            item["html"] = html
            # 原始 Markdown 源码，供页面切换查看/复制
            item["src"] = "\n\n".join(to_paragraphs(body_txt))
            item["anchor"] = slugify(item)
            check_math(html, f"{path.name} {typ} {item['number'] or item['title']}", problems)
            section["items"].append(item)

        ch["sections"].append(section)

    book["chapters"] = [
        {**c, "sections": sorted(c["sections"], key=lambda s: sort_key(s["id"]))}
        for c in sorted(
            chapters.values(),
            key=lambda c: (BIG_NUM.get(str(c["no"]), 0), int(c["no"]) if str(c["no"]).isdigit() else 99),
        )
    ]
    book["empty"] = not book["chapters"]
    return book


def main() -> int:
    if not CONTENT.is_dir():
        print("没有 content/ 目录", file=sys.stderr)
        return 1

    problems: list[str] = []
    books: list[dict] = []
    for d in sorted(CONTENT.iterdir()):
        if not d.is_dir():
            continue
        b = load_book(d, problems)
        if b:
            books.append(b)
    books.sort(key=lambda b: (b["order"], b["title"]))

    seen: dict[str, str] = {}
    total = 0
    for b in books:
        for ch in b["chapters"]:
            for s in ch["sections"]:
                for it in s["items"]:
                    key = f"{b['id']}/{it['anchor']}"
                    if key in seen:
                        problems.append(f"重复锚点 {key}（{seen[key]}）")
                    seen[key] = s["id"]
                    total += 1

    data = {
        "site": {"title": "数学命题索引", "subtitle": "教材命题 · 只含陈述，便于自测"},
        "books": books,
        "count": total,
    }

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding="utf-8")

    print(f"书 {len(books)} 本，条目 {total} 个 → {OUT.relative_to(ROOT)}")
    for b in books:
        n = sum(len(s["items"]) for c in b["chapters"] for s in c["sections"])
        print(f"  {b['id']:10s} {b['title']}  {n} 条 / {len(b['chapters'])} 章")
    if problems:
        print(f"\n发现问题 {len(problems)} 处：")
        for p in problems:
            print("  -", p)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
