"""读取每节习题 Markdown；校对来源只使用书内印刷页码。"""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HEAD_RE = re.compile(r"^###\s+习题\s+(?P<number>\d+\*?)\s*(?:[（(](?P<title>.*)[）)])?\s*@(?P<page>\d+)\s*$")


def summary(section: dict | None) -> dict:
    if section is None:
        return {"status": "unrecorded", "count": 0, "pages": ""}
    return {key: section[key] for key in ("status", "count", "pages")}


def build_data(book_id: str, section_ids: set[str]) -> dict | None:
    import build

    files = sorted((ROOT / "exercises" / book_id).glob("*.md"))
    if not files:
        return None
    sections = {}
    for path in files:
        fm, body = build.parse_front(path.read_text(encoding="utf-8"))
        sid, status, pages = fm.get("section", ""), fm.get("status", ""), fm.get("pages", "")
        where = str(path.relative_to(ROOT))
        if sid not in section_ids:
            raise ValueError(f"{where}: 找不到对应正文节 {sid!r}")
        if sid in sections:
            raise ValueError(f"{where}: 重复的习题节 {sid}")
        if status not in {"ready", "none"}:
            raise ValueError(f"{where}: status 只能为 ready 或 none；未录入请省略文件")
        if status == "none":
            if body.strip() or pages:
                raise ValueError(f"{where}: 无独立习题的正文与页码必须为空")
            sections[sid] = {"status": status, "count": 0, "pages": "", "items": []}
            continue
        match = re.fullmatch(r"(\d+)(?:[–-](\d+))?", pages)
        if not match:
            raise ValueError(f"{where}: pages 必须为书内印刷页码或范围")
        lo, hi = int(match[1]), int(match[2] or match[1])
        if lo > hi:
            raise ValueError(f"{where}: 印刷页码范围倒置")
        lines = body.splitlines()
        heads = []
        for i, line in enumerate(lines):
            if line.startswith("### "):
                head = HEAD_RE.fullmatch(line)
                if not head:
                    raise ValueError(f"{where}: 无法解析习题头 {line}")
                heads.append((i, head))
        if not heads or "\n".join(lines[:heads[0][0]]).strip():
            raise ValueError(f"{where}: 必须有题目，且必要定义应放入对应题干")
        items, previous = [], lo
        for n, (start, head) in enumerate(heads):
            number, title, page = head["number"], (head["title"] or "").strip(), int(head["page"])
            if int(number.rstrip("*")) != n + 1:
                raise ValueError(f"{where}: 题号缺漏或重复，期望 {n+1}，实际 {number}")
            if not (previous <= page <= hi):
                raise ValueError(f"{where}: 习题 {number} 印刷页码越界或倒退")
            previous = page
            end = heads[n+1][0] if n+1 < len(heads) else len(lines)
            paras = build.to_paragraphs("\n".join(lines[start+1:end]))
            if not paras:
                raise ValueError(f"{where}: 习题 {number} 题干为空")
            src = "\n\n".join(paras)
            problems = []
            build.check_math(src, f"{where} 习题 {number}", problems)
            if problems:
                raise ValueError("；".join(problems))
            if re.search(r"!\[|<img\b|pdf_page|assets/exercises", src):
                raise ValueError(f"{where}: 习题应为文字与公式，来源只保留书内页码")
            items.append({"type": "习题", "number": number, "title": title, "page": page,
                          "anchor": "习题-" + number.replace("*", "-star"),
                          "src": src, "html": "".join(f"<p>{build.inline(p)}</p>" for p in paras)})
        sections[sid] = {"status": status, "count": len(items), "pages": pages, "items": items}
    return {"book": book_id, "sections": sections}
