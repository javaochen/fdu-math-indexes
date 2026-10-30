#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""按 PDF 页码渲染成 PNG，供人工/模型逐页提取命题。

用法：
    python tools/pdf_pages.py 14-21            # 渲染 PDF 第 14–21 页（1 起算）
    python tools/pdf_pages.py 14-21 -o out    # 指定输出目录
    python tools/pdf_pages.py 41 --dpi 200    # 单页、更高分辨率
"""
from __future__ import annotations

import argparse
import os
from pathlib import Path

import pymupdf

DEFAULT_PDF = r"C:\Users\lenovo\Downloads\复旦数学本科\泛函王凯.pdf"
DEFAULT_OUT = Path(os.environ.get("TEMP", ".")) / "opencode" / "fa_pages"


def parse_range(s: str) -> list[int]:
    if "-" in s:
        a, b = s.split("-", 1)
        return list(range(int(a), int(b) + 1))
    return [int(s)]


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("pages", help="如 14-21 或 41")
    ap.add_argument("-o", "--out", default=str(DEFAULT_OUT))
    ap.add_argument("--pdf", default=DEFAULT_PDF)
    ap.add_argument("--dpi", type=int, default=140)
    args = ap.parse_args()

    doc = pymupdf.open(args.pdf)
    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    for p in parse_range(args.pages):
        if not 1 <= p <= doc.page_count:
            print(f"跳过 {p}：超出范围 1–{doc.page_count}")
            continue
        pix = doc[p - 1].get_pixmap(dpi=args.dpi)
        f = out / f"p{p:03d}.png"
        pix.save(f)
        print(f"{f}  {pix.width}x{pix.height}  {f.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
