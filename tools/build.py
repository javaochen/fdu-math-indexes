#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把 content/<书>/*.md 解析成站点数据（按书拆分，避免首屏加载全量）。

输出（site/data/）：
    books.json       目录元数据：书、章、节、条目数（不含正文）
    <book>.json      单本书的全部章节与条目（含渲染 HTML 与 Markdown 源码）
    search.json      检索索引：[书, 节, 锚点, 类型, 编号, 标题, 正文摘要]

content/<书>/_book.md：

    ---
    id: fanhan
    title: 泛函分析
    short: 泛函          # 侧栏短名，可省
    author: 王凯
    source: 泛函王凯.pdf
    note: 书页说明，可省
    order: 1
    ---

节文件 front matter：chapter / chapter_title / section / section_title / pages。
条目头：### 类型 [编号] [(标题)] @书页码。

用法：
    python tools/build.py
"""
from __future__ import annotations

import html as html_lib
import json
import re
import sys
from pathlib import Path

import exercises

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"
DATA = ROOT / "site" / "data"

TYPE_RE = re.compile(
    r"^###\s+(?P<type>\S+?)\s*(?P<number>(?:[A-Z]\.)?\d+(?:\.\d+)*(?:[′'])?)?\s*(?:[（(](?P<title>.*)[）)])?\s*@(?P<page>\d+)\s*$"
)
TYPES = {"定义", "定理", "命题", "引理", "推论", "例", "反例", "注", "构造", "算法", "公理", "附录"}
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
    return re.sub(r"[^\w\u4e00-\u9fff.′]+", "-", base).strip("-")


def plain_text(html: str, limit: int = 240, strip_math: bool = True) -> str:
    t = re.sub(r"<[^>]+>", " ", html)
    t = html_lib.unescape(t)
    if strip_math:
        # 摘要里只去掉块级公式，行内公式保留并在页面渲染
        t = re.sub(r"\$\$.*?\$\$", " ⋯ ", t, flags=re.S)
    t = re.sub(r"\s+", " ", t).strip()
    if len(t) > limit:
        t = t[:limit]
        if t.count("$") % 2:          # 截断落在公式中间时，退回到公式开头
            t = t[:t.rfind("$")].rstrip() + " …"
    return t


def search_key(*parts: str, limit: int | None = 2000) -> str:
    value = re.sub(r"\s+", " ", " ".join(parts).lower().replace("\\", "").replace("$", " ")).strip()
    return value[:limit] if limit is not None else value


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
        "short": meta.get("short") or meta.get("title") or book_dir.name,
        "author": meta.get("author", ""),
        "author_img": meta.get("author_img", ""),
        "source": meta.get("source", ""),
        "note": meta.get("note", ""),
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
        heads = []
        for i, l in enumerate(lines):
            if not l.startswith("### "):
                continue
            m = TYPE_RE.match(l)
            if m:
                heads.append((i, m))
            else:
                problems.append(f"{path.name}: 条目头无法解析「{l[:48]}」")
        if not heads:
            problems.append(f"{path.name}: 没有识别到任何条目头")
            continue

        section = {
            "id": sec_id,
            "title": fm.get("section_title", ""),
            "pages": fm.get("pages", ""),
            "items": [],
        }
        used_anchors: dict[str, int] = {}
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
            paras = to_paragraphs(body_txt)
            html = "".join(f"<p>{inline(p)}</p>" for p in paras)
            if not html:
                problems.append(f"{path.name}: {typ} {item['number'] or item['title']} 正文为空")
            item["html"] = html
            item["src"] = "\n\n".join(paras)
            check_math(html, f"{path.name} {typ} {item['number'] or item['title']}", problems)
            base = slugify(item)
            k = used_anchors.get(base, 0) + 1
            used_anchors[base] = k
            item["anchor"] = base if k == 1 else f"{base}-{k}"
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


def write_json(path: Path, obj) -> int:
    path.write_text(json.dumps(obj, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    return path.stat().st_size


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

    # 习题独立存储，不混入正文条目或随机自测。
    exercise_books = {}
    for b in books:
        ids = {s["id"] for c in b["chapters"] for s in c["sections"]}
        try:
            data = exercises.build_data(b["id"], ids)
        except (ValueError, OSError, KeyError, TypeError) as err:
            print(f"习题校验失败：{err}", file=sys.stderr)
            return 1
        exercise_books[b["id"]] = data
        for c in b["chapters"]:
            for s in c["sections"]:
                record = data["sections"].get(s["id"]) if data else None
                s["exercises"] = exercises.summary(record)

    seen: dict[str, str] = {}
    total = 0
    for b in books:
        for ch in b["chapters"]:
            for s in ch["sections"]:
                for it in s["items"]:
                    key = f"{b['id']}/{s['id']}/{it['anchor']}"
                    if key in seen:
                        problems.append(f"重复锚点 {key}（{seen[key]}）")
                    seen[key] = s["id"]
                    total += 1

    if problems:
        print("构建校验失败，未写入站点数据：", file=sys.stderr)
        for problem in problems:
            print(f"  - {problem}", file=sys.stderr)
        return 1

    DATA.mkdir(parents=True, exist_ok=True)
    stale = DATA / "index.json"
    if stale.exists():
        stale.unlink()

    search: list[list] = []
    meta_books: list[dict] = []
    for b in books:
        count = 0
        chapters_meta = []
        for ch in b["chapters"]:
            secs = []
            for s in ch["sections"]:
                for it in s["items"]:
                    disp = plain_text(it["html"], 180)
                    if len(disp) < 24:
                        disp = plain_text(it["html"], 180, strip_math=False)
                    search.append([
                        b["id"], s["id"], it["anchor"], it["type"],
                        it["number"], it["title"], disp,
                        search_key(it["type"], it["number"], it["title"],
                                   plain_text(it["html"], 1200, strip_math=False)),
                    ])
                    count += 1
                secs.append({"id": s["id"], "title": s["title"], "pages": s["pages"], "count": len(s["items"]),
                             "exercises": s["exercises"]})
            chapters_meta.append({"no": ch["no"], "title": ch["title"], "sections": secs})
        size = write_json(DATA / f"{b['id']}.json", {"id": b["id"], "chapters": b["chapters"]})
        ex_data = exercise_books[b["id"]]
        if ex_data is not None:
            write_json(DATA / f"{b['id']}-exercises.json", ex_data)
            for sid, record in ex_data["sections"].items():
                for it in record["items"]:
                    search.append([
                        b["id"], sid, "exercises/" + it["anchor"], "习题", it["number"], it["title"],
                        plain_text(it["html"], 180), search_key("习题", it["number"], it["title"], it["src"], limit=None),
                    ])
        else:
            (DATA / f"{b['id']}-exercises.json").unlink(missing_ok=True)
        meta_books.append({
            "id": b["id"], "title": b["title"], "short": b["short"], "author": b["author"],
        "author_img": b["author_img"],
            "note": b["note"], "order": b["order"], "count": count, "chapters": chapters_meta,
            "size": size,
            "exercise_count": sum(s["exercises"]["count"] for ch in b["chapters"] for s in ch["sections"]),
        })

    books_size = write_json(DATA / "books.json", {
        "site": {"title": "数学命题索引", "subtitle": "教材命题 · 只含陈述，便于自测"},
        "books": meta_books,
        "count": total,
    })
    search_size = write_json(DATA / "search.json", search)

    print(f"书 {len(books)} 本，条目 {total} 个 → {DATA.relative_to(ROOT)}")
    print(f"  books.json {books_size // 1024} KB，search.json {search_size // 1024} KB")
    for b in meta_books:
        print(f"  {b['id']:12s} {b['title']:12s} {b['count']:4d} 条  {b['size'] // 1024:4d} KB")
    if problems:
        print(f"\n发现问题 {len(problems)} 处：")
        for p in problems:
            print("  -", p)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
