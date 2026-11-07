#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""打印各书录入进度（从 site/data/books.json 读取，不写文件）。

用法：
    python tools/status.py
    python tools/status.py gailv
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "site" / "data" / "books.json"


def main() -> int:
    data = json.loads(DATA.read_text(encoding="utf-8"))
    only = sys.argv[1] if len(sys.argv) > 1 else None
    total = 0
    for b in data["books"]:
        if only and b["id"] != only:
            continue
        secs = [s for c in b["chapters"] for s in c["sections"]]
        total += b["count"]
        print(f"\n{b['title']}（{b['id']}）  {b['count']} 条 / {len(b['chapters'])} 章 / {len(secs)} 节")
        chapter_records = [c.get("exercises", {}) for c in b["chapters"]]
        chapter_ready = sum(e.get("status") == "ready" for e in chapter_records)
        chapter_none = sum(e.get("status") == "none" for e in chapter_records)
        independent = [s for s in secs if not s.get("exercises", {}).get("chapter_id")
                       or s.get("exercises", {}).get("status") in {"ready", "none"}]
        ready = sum(s.get("exercises", {}).get("status") == "ready" for s in independent)
        none = sum(s.get("exercises", {}).get("status") == "none" for s in independent)
        print(f"  习题：{b.get('exercise_count', 0)} 题，{chapter_ready} 章已整理 / {chapter_none} 章无独立习题；"
              f"{ready} 节已整理 / {none} 节无独立习题 / {len(independent)-ready-none} 节未录入")
        for c in b["chapters"]:
            got = [s for s in c["sections"] if s["count"]]
            print(f"  {c['no']:>3} {c['title']}：{sum(s['count'] for s in c['sections'])} 条，{len(got)}/{len(c['sections'])} 节有内容")
            ex = c.get("exercises", {})
            if ex.get("status") == "ready":
                print(f"      章习题：{ex['count']} 题 / {len(ex.get('groups', []))} 个主题 / 书内 p.{ex['pages']}")
    print(f"\n合计 {total} 条")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
