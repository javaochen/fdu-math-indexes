"""读取节/章习题 Markdown 与章内主题分组；来源只使用书内印刷页码。"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HEAD_RE = re.compile(r"^###\s+习题\s+(?P<number>\d+\*?)\s*(?:[（(](?P<title>.*)[）)])?\s*@(?P<page>\d+)\s*$")


def summary(section: dict | None) -> dict:
    if section is None:
        return {"status": "unrecorded", "count": 0, "pages": ""}
    result = {key: section[key] for key in ("status", "count", "pages")}
    if section.get("scope") == "chapter":
        result.update({"scope": "chapter", "chapter": section["chapter"],
                       "id": "chapter-" + section["chapter"], "groups": section["groups"]})
    return result


def chapter_groups(config: object, chapter: str, items: list[dict], where: str) -> list[dict]:
    """主题仅引用原题号；不复制题目，也不改变原题顺序。"""
    if not isinstance(config, list) or not config:
        raise ValueError(f"{where}: 第 {chapter} 章必须有非空主题分组")
    known = {int(item["number"].rstrip("*")) for item in items}
    seen_numbers, seen_ids, groups = set(), set(), []
    for group in config:
        if not isinstance(group, dict):
            raise ValueError(f"{where}: 第 {chapter} 章主题必须为对象")
        gid, title, numbers = group.get("id"), group.get("title"), group.get("numbers")
        if not isinstance(gid, str) or not re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9_-]*", gid):
            raise ValueError(f"{where}: 第 {chapter} 章主题 id 格式无效")
        if gid in seen_ids:
            raise ValueError(f"{where}: 第 {chapter} 章重复主题 id {gid}")
        seen_ids.add(gid)
        if not isinstance(title, str) or not title.strip():
            raise ValueError(f"{where}: 第 {chapter} 章主题 {gid} 标题为空")
        if not isinstance(numbers, list) or not numbers:
            raise ValueError(f"{where}: 第 {chapter} 章主题 {gid} 不能是空组")
        for number in numbers:
            if type(number) is not int or number not in known:
                raise ValueError(f"{where}: 第 {chapter} 章主题 {gid} 引用未知题号 {number!r}")
            if number in seen_numbers:
                raise ValueError(f"{where}: 第 {chapter} 章题号 {number} 重复分组")
            seen_numbers.add(number)
        groups.append({"id": gid, "title": title.strip(), "numbers": sorted(numbers), "count": len(numbers)})
    missing = sorted(known - seen_numbers)
    if missing:
        raise ValueError(f"{where}: 第 {chapter} 章主题分组未覆盖题号 {missing}")
    return groups


def build_data(book_id: str, section_ids: set[str], chapter_ids: set[str] | None = None) -> dict | None:
    import build

    directory = ROOT / "exercises" / book_id
    files = sorted(directory.glob("*.md"))
    groups_path = directory / "_groups.json"
    if not files:
        if groups_path.exists():
            raise ValueError(f"{groups_path.relative_to(ROOT)}: 分组配置没有对应的章习题")
        return None
    sections = {}
    for path in files:
        fm, body = build.parse_front(path.read_text(encoding="utf-8"))
        sid, chapter = fm.get("section", ""), fm.get("chapter", "")
        status, pages = fm.get("status", ""), fm.get("pages", "")
        where = str(path.relative_to(ROOT))
        if bool(sid) == bool(chapter):
            raise ValueError(f"{where}: 必须且只能填写 section 或 chapter")
        extra = {}
        if chapter:
            if not re.fullmatch(r"[\w.-]+", chapter) or chapter_ids is not None and chapter not in chapter_ids:
                raise ValueError(f"{where}: 找不到对应正文章 {chapter!r}")
            sid = "chapter-" + chapter
            if sid in section_ids:
                raise ValueError(f"{where}: 章习题 id {sid} 与正文节冲突")
            extra = {"scope": "chapter", "chapter": chapter, "groups": []}
        elif sid not in section_ids:
            raise ValueError(f"{where}: 找不到对应正文节 {sid!r}")
        if sid in sections:
            raise ValueError(f"{where}: 重复的习题节 {sid}")
        if status not in {"ready", "none"}:
            raise ValueError(f"{where}: status 只能为 ready 或 none；未录入请省略文件")
        if status == "none":
            if body.strip() or pages:
                raise ValueError(f"{where}: 无独立习题的正文与页码必须为空")
            sections[sid] = {"status": status, "count": 0, "pages": "", "items": [], **extra}
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
        sections[sid] = {"status": status, "count": len(items), "pages": pages, "items": items, **extra}
    config = json.loads(groups_path.read_text(encoding="utf-8")) if groups_path.exists() else {}
    group_where = str(groups_path.relative_to(ROOT))
    if not isinstance(config, dict):
        raise ValueError(f"{group_where}: 顶层必须是按章编号索引的对象")
    ready_chapters = {record["chapter"]: record for record in sections.values()
                      if record.get("scope") == "chapter" and record["status"] == "ready"}
    for chapter in config:
        if chapter not in ready_chapters:
            raise ValueError(f"{group_where}: 第 {chapter} 章分组没有对应的已录入章习题")
    for chapter, record in ready_chapters.items():
        record["groups"] = chapter_groups(config.get(chapter), chapter, record["items"], group_where)
    return {"book": book_id, "sections": sections}
