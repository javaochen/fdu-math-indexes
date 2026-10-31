#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""录入质量静态检查：不修改内容，只报告可疑处。

检查项：
  1. 条目页码是否落在该节 front matter 的 pages 范围内、是否递增
  2. 相邻条目页码跨度过大（可能漏页）
  3. \\tag 编号的前缀是否与所在节一致、是否重复或倒退
  4. 数学模式里出现未包 \\text{} 的中文
  5. 同一章的节号是否连续、文件名前缀与节号是否一致

用法：
    python tools/lint.py            # 全部书
    python tools/lint.py gaodai     # 只查一本书
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import build  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content"

PAGES_RE = re.compile(r"^\s*(\d+)\s*[–\-~]\s*(\d+)\s*$")
TAG_RE = re.compile(r"\\tag\{([\d.]+)\}")
MATH_RE = re.compile(r"\$\$(.+?)\$\$|\$([^$]+)\$", re.S)
CJK_RE = re.compile(r"[\u4e00-\u9fff]")


def strip_text_wrappers(s: str) -> str:
    return re.sub(r"\\text\{[^{}]*\}", "", s)


def lint_file(path: Path, sec_id: str, chapter: str, tag_style: str) -> list[str]:
    warn: list[str] = []
    fm, body = build.parse_front(path.read_text(encoding="utf-8"))
    pages = fm.get("pages", "")
    m = PAGES_RE.match(pages)
    if not m:
        warn.append(f"pages 字段无法解析：{pages!r}")
        lo = hi = None
    else:
        lo, hi = int(m.group(1)), int(m.group(2))

    lines = body.split("\n")
    heads = [(i, mm) for i, l in enumerate(lines) if (mm := build.TYPE_RE.match(l))]
    prev_page = None
    tags: list[str] = []
    for n, (idx, mm) in enumerate(heads):
        end = heads[n + 1][0] if n + 1 < len(heads) else len(lines)
        chunk = "\n".join(lines[idx + 1:end])
        page = int(mm.group("page"))
        label = f"{mm.group('type')} {mm.group('number') or mm.group('title') or ''}".strip()

        if lo is not None and not (lo <= page <= hi):
            warn.append(f"{label}: 页码 {page} 超出本节范围 {lo}–{hi}")
        if prev_page is not None:
            if page < prev_page:
                warn.append(f"{label}: 页码 {page} 小于前一条 {prev_page}")
            elif page - prev_page >= 4:
                warn.append(f"{label}: 与上一条页码相差 {page - prev_page} 页，可能漏读")
        prev_page = page

        for t in TAG_RE.findall(chunk):
            tags.append(t)
            parts = t.split(".")
            if chapter and str(chapter) != "?" and parts and parts[0] != str(chapter):
                warn.append(f"{label}: 公式编号 ({t}) 不属于第 {chapter} 章")
            elif tag_style == "section" and sec_id and len(parts) >= 2:
                prefix = ".".join(sec_id.split(".")[:2])
                if ".".join(parts[:2]) != prefix:
                    warn.append(f"{label}: 公式编号 ({t}) 与本节 {sec_id} 不一致")

        for block in MATH_RE.findall(chunk):
            expr = block[0] or block[1]
            if CJK_RE.search(strip_text_wrappers(expr)):
                warn.append(f"{label}: 数学模式里出现未加 \\text{{}} 的中文")

    seen: dict[str, int] = {}
    for t in tags:
        seen[t] = seen.get(t, 0) + 1
    for t, c in seen.items():
        if c > 1:
            warn.append(f"公式编号 ({t}) 在本节重复出现 {c} 次")
    return warn


def main() -> int:
    only = sys.argv[1] if len(sys.argv) > 1 else None
    total_warn = 0
    for book_dir in sorted(p for p in CONTENT.iterdir() if p.is_dir()):
        if only and book_dir.name != only:
            continue
        files = [p for p in sorted(book_dir.glob("*.md")) if not p.name.startswith("_")]
        if not files:
            continue
        print(f"\n== {book_dir.name} ==")
        bmeta: dict = {}
        bpath = book_dir / "_book.md"
        if bpath.exists():
            bmeta, _ = build.parse_front(bpath.read_text(encoding="utf-8"))
        tag_style = bmeta.get("tag_style", "chapter")
        sections_by_chapter: dict[str, list[float]] = {}
        for path in files:
            fm, _ = build.parse_front(path.read_text(encoding="utf-8"))
            sec_id = fm.get("section", "")
            warns = lint_file(path, sec_id, fm.get("chapter", "?"), tag_style)
            # 文件名与节号一致性：01-03-x.md -> 1.3
            mname = re.match(r"^(\d+)-(\d+)-", path.name)
            if mname and sec_id:
                expect = f"{int(mname.group(1))}.{int(mname.group(2))}"
                if expect != sec_id:
                    warns.append(f"文件名前缀 {mname.group(1)}-{mname.group(2)} 与 section {sec_id} 不一致")
            if warns:
                print(f"  {path.name}")
                for w in warns:
                    print(f"    - {w}")
                total_warn += len(warns)
            if sec_id:
                parts = sec_id.split(".")
                if len(parts) == 2:
                    sections_by_chapter.setdefault(parts[0], []).append(float(sec_id))

        for ch, ids in sections_by_chapter.items():
            ids = sorted(ids)
            for a, b in zip(ids, ids[1:]):
                if round(b - a, 1) > 1.0:
                    print(f"  [章 {ch}] 节号从 {a} 跳到 {b}，中间可能有未录入的节")
                    total_warn += 1
                if b == a:
                    print(f"  [章 {ch}] 节 {a} 重复")
                    total_warn += 1

    print(f"\n共 {total_warn} 条提示")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
