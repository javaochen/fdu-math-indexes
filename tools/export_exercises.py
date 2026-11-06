"""按经人工核对的裁切清单导出习题图片，不识别、改写或生成题目。

python tools/export_exercises.py fanhan --pdf "../泛函王凯.pdf"
需要 PyMuPDF 与 Pillow（PDF 阅读环境已有）；站点构建无需这些库或原 PDF。
"""
from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path

import pymupdf

from exercises import ROOT, image_path, load_manifest


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("book")
    parser.add_argument("--pdf", type=Path, required=True)
    parser.add_argument("--dpi", type=int, default=180)
    args = parser.parse_args()
    manifest = load_manifest(args.book)
    if manifest is None:
        parser.error("找不到习题清单")
    if not 100 <= args.dpi <= 400:
        parser.error("dpi 应在 100–400 之间")
    with pymupdf.open(args.pdf) as doc:
        # 先校验所有源页，再写入输出。
        if any(scan["pdf_page"] > len(doc) for s in manifest["sections"].values() for scan in s["scans"]):
            parser.error("清单中的 PDF 页码超出源文件")
        for sid, section in manifest["sections"].items():
            for scan in section["scans"]:
                page = doc[scan["pdf_page"] - 1]
                x0, y0, x1, y1 = scan["crop"]
                r = page.rect
                clip = pymupdf.Rect(r.x0 + x0*r.width, r.y0 + y0*r.height,
                                    r.x0 + x1*r.width, r.y0 + y1*r.height)
                pix = page.get_pixmap(dpi=args.dpi, clip=clip, alpha=False)
                target = ROOT / "site" / image_path(args.book, sid, scan["pdf_page"])
                target.parent.mkdir(parents=True, exist_ok=True)
                pix.pil_save(str(target), format="WEBP", quality=92, method=6)
                target.with_suffix(".json").write_text(json.dumps({
                    "width": pix.width, "height": pix.height,
                    "crop": scan["crop"],
                    "sha256": hashlib.sha256(target.read_bytes()).hexdigest(),
                }, separators=(",", ":")), encoding="utf-8")
                print(f"{sid:>4} PDF {scan['pdf_page']:3} → {target.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
