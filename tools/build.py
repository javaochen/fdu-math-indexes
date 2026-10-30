#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把 content/*.md 解析成 site/data/index.json。

条目格式（行首 ###）：

    ### 定理 1.3.5 (投影定理) @29
    ### 例 1.1.1 @2
    ### 定理 (Hölder 不等式) @3

即：类型 [编号] [(标题)] @书页码。
正文到下一个 ### 或文件尾；正文中空行分段，段内被硬换行拆开的行会合并。

用法：
    python tools/build.py            # 生成 site/data/index.json
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"
OUT = ROOT / "site" / "data" / "index.json"

TYPE_RE = re.compile(r"^###\s+(?P<type>\S+?)\s*(?P<number>\d+(?:\.\d+)*)?\s*(?:[（(](?P<title>[^（()）]*)[）)])?\s*@(?P<page>\d+)\s*$")
TYPES = {"定义", "定理", "命题", "引理", "推论", "例", "反例", "注", "构造"}


def parse_front(text: str) -> tuple[dict, str]:
    if not text.startswith("---"):
        return {}, text
    _, fm, body = text.split("---", 2)
    meta = {}
    for line in fm.strip().splitlines():
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        k, _, v = line.partition(":")
        v = v.strip().strip('"').strip("'")
        meta[k.strip()] = v
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
    base = re.sub(r"[^\w\u4e00-\u9fff.-]+", "-", base).strip("-")
    return base


def check_math(text: str, where: str, problems: list[str]) -> None:
    if text.count("$$") % 2:
        problems.append(f"{where}: 块级公式 $$ 不成对")
    stripped = re.sub(r"\$\$.*?\$\$", "", text, flags=re.S)
    if stripped.count("$") % 2:
        problems.append(f"{where}: 行内公式 $ 不成对")


def main() -> int:
    files = sorted(CONTENT.glob("*.md"))
    if not files:
        print("content/ 下没有 .md 文件", file=sys.stderr)
        return 1

    chapters: dict[str, dict] = {}
    problems: list[str] = []
    seen_ids: dict[str, str] = {}
    total = 0

    for path in files:
        meta, body = parse_front(path.read_text(encoding="utf-8"))
        ch_no = meta.get("chapter", "?")
        sec_id = meta.get("section", path.stem)
        ch = chapters.setdefault(ch_no, {"no": ch_no, "title": meta.get("chapter_title", ""), "sections": []})

        lines = body.split("\n")
        heads = [(i, m) for i, l in enumerate(lines) if (m := TYPE_RE.match(l))]
        if not heads:
            problems.append(f"{path.name}: 没有识别到任何条目头")
            continue

        section = {
            "id": sec_id,
            "title": meta.get("section_title", ""),
            "pages": meta.get("pages", ""),
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
            item["anchor"] = slugify(item)
            if item["anchor"] in seen_ids:
                problems.append(f"重复锚点 {item['anchor']}（{seen_ids[item['anchor']]} 与 {path.name}）")
            seen_ids[item["anchor"]] = path.name
            check_math(html, f"{path.name} {typ} {item['number'] or item['title']}", problems)
            section["items"].append(item)
            total += 1

        ch["sections"].append(section)

    data = {
        "book": {"title": "泛函分析", "author": "王凯"},
        "chapters": [
            {**ch, "sections": sorted(ch["sections"], key=lambda s: [int(x) for x in re.findall(r"\d+", s["id"])] or [0])}
            for ch in sorted(chapters.values(), key=lambda c: int(c["no"]) if str(c["no"]).isdigit() else 99)
        ],
        "count": total,
    }

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding="utf-8")

    print(f"条目 {total} 个 → {OUT.relative_to(ROOT)}")
    if problems:
        print(f"\n发现问题 {len(problems)} 处：")
        for p in problems:
            print("  -", p)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
