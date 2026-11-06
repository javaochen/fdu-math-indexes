"""习题清单读取与校验；没有清单表示未录入，不能推断原书无习题。"""
from __future__ import annotations

import json
import hashlib
import math
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def image_path(book_id: str, section_id: str, pdf_page: int) -> str:
    return f"assets/exercises/{book_id}/{section_id}-p{pdf_page:03d}.webp"


def load_manifest(book_id: str, section_ids: set[str] | None = None) -> dict | None:
    path = ROOT / "exercises" / f"{book_id}.json"
    if not path.exists():
        return None
    data = json.loads(path.read_text(encoding="utf-8"))
    if data.get("book") != book_id or not re.fullmatch(r"[A-Za-z0-9_-]+", book_id):
        raise ValueError(f"{path.name}: book 与书 id 不一致或不安全")
    if not isinstance(data.get("source"), str) or not data["source"]:
        raise ValueError(f"{path.name}: 缺少 source")
    offset = data.get("page_offset")
    if type(offset) is not int or offset < 0:
        raise ValueError(f"{path.name}: page_offset 必须是非负整数")
    if not isinstance(data.get("sections"), dict):
        raise ValueError(f"{path.name}: 缺少 sections 对象")
    for sid, section in data["sections"].items():
        where = f"{path.name}/{sid}"
        if not re.fullmatch(r"[A-Za-z0-9.]+", sid):
            raise ValueError(f"{where}: 不安全的节 id")
        if section_ids is not None and sid not in section_ids:
            raise ValueError(f"{where}: 找不到对应正文节")
        if not isinstance(section, dict):
            raise ValueError(f"{where}: 节记录必须是对象")
        status, count, scans = section.get("status"), section.get("count"), section.get("scans")
        if status not in {"ready", "none"}:
            raise ValueError(f"{where}: status 只能为 ready 或 none；未录入请省略记录")
        if type(count) is not int or count < 0 or not isinstance(scans, list):
            raise ValueError(f"{where}: count 或 scans 格式错误")
        if status == "none":
            if count or scans or section.get("pages"):
                raise ValueError(f"{where}: 无习题记录的题数、页码和图片必须为空")
            continue
        if not count or not scans:
            raise ValueError(f"{where}: 已录入习题必须有题数和图片")
        pages = section.get("pages", "")
        if not isinstance(pages, str) or not re.fullmatch(r"\d+(?:[–-]\d+)?", pages):
            raise ValueError(f"{where}: pages 必须为印刷页码或范围")
        prev = 0
        for scan in scans:
            page, crop = scan.get("pdf_page"), scan.get("crop")
            if type(page) is not int or page <= offset or page <= prev:
                raise ValueError(f"{where}: PDF 页码必须递增且大于偏移")
            if prev and page != prev + 1:
                raise ValueError(f"{where}: 习题扫描页不连续，可能漏掉跨页题")
            prev = page
            if not isinstance(crop, list) or len(crop) != 4 or not all(
                type(n) in (int, float) and math.isfinite(n) for n in crop
            ) or not (0 <= crop[0] < crop[2] <= 1 and 0 <= crop[1] < crop[3] <= 1):
                raise ValueError(f"{where}: crop 必须为归一化 [左,上,右,下]")
        lo, *rest = re.split("[–-]", pages)
        hi = rest[0] if rest else lo
        if (int(lo), int(hi)) != (scans[0]["pdf_page"] - offset, scans[-1]["pdf_page"] - offset):
            raise ValueError(f"{where}: 印刷页范围与 PDF 页码/偏移不一致")
    return data


def summary(section: dict | None) -> dict:
    if section is None:
        return {"status": "unrecorded", "count": 0, "pages": ""}
    return {key: section[key] for key in ("status", "count", "pages")}


def build_data(book_id: str, section_ids: set[str]) -> dict | None:
    """只使用已生成的图片，无需 CI 访问本地 PDF 或安装 PDF 库。"""
    manifest = load_manifest(book_id, section_ids)
    if manifest is None:
        return None
    sections = {}
    for sid, section in manifest["sections"].items():
        scans = []
        for scan in section["scans"]:
            src = image_path(book_id, sid, scan["pdf_page"])
            image = ROOT / "site" / src
            if not image.is_file():
                raise ValueError(f"习题图片缺失：{src}，请运行 tools/export_exercises.py")
            # VP8X/VP8L/VP8 WebP 的尺寸由导出侧记录；这里只需 stdlib。
            size_path = image.with_suffix(".json")
            size = json.loads(size_path.read_text(encoding="utf-8"))
            if any(type(size.get(key)) is not int or size[key] <= 0 for key in ("width", "height")):
                raise ValueError(f"图片尺寸无效：{size_path}")
            if size.get("crop") != scan["crop"] or size.get("sha256") != hashlib.sha256(image.read_bytes()).hexdigest():
                raise ValueError(f"裁切清单或图片已变更，请重新导出：{src}")
            scans.append({"src": src, "page": scan["pdf_page"] - manifest["page_offset"],
                          "pdf_page": scan["pdf_page"], "width": size["width"], "height": size["height"]})
        sections[sid] = {**summary(section), "scans": scans}
    return {"book": book_id, "source": manifest["source"], "sections": sections}
