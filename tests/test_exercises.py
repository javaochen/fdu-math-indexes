"""习题清单的缺省状态、关联节、跨页完整性及裁切产物校验。"""
import copy
import hashlib
import json
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "tools"))
import exercises


class ExerciseManifestTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.patch = patch.object(exercises, "ROOT", self.root)
        self.patch.start()
        self.addCleanup(self.patch.stop)
        self.data = {"book": "sample", "source": "book.pdf", "page_offset": 12,
                     "sections": {"1.1": {"status": "ready", "count": 2, "pages": "8–9",
                         "scans": [{"pdf_page": 20, "crop": [0, .5, 1, 1]},
                                   {"pdf_page": 21, "crop": [0, 0, 1, .7]}]}}}

    def write(self):
        path = self.root / "exercises/sample.json"
        path.parent.mkdir(exist_ok=True)
        path.write_text(json.dumps(self.data), encoding="utf-8")

    def assets(self):
        for scan in self.data["sections"]["1.1"]["scans"]:
            image = self.root / "site" / exercises.image_path("sample", "1.1", scan["pdf_page"])
            image.parent.mkdir(parents=True, exist_ok=True)
            image.write_bytes(b"test-image")
            image.with_suffix(".json").write_text(json.dumps({"width": 100, "height": 120,
                "crop": scan["crop"], "sha256": hashlib.sha256(b"test-image").hexdigest()}), encoding="utf-8")

    def test_missing_is_unrecorded_not_none(self):
        self.assertIsNone(exercises.build_data("sample", {"1.1"}))
        self.assertEqual(exercises.summary(None)["status"], "unrecorded")

    def test_explicit_none_needs_no_images(self):
        self.data["sections"]["1.1"] = {"status": "none", "count": 0, "pages": "", "scans": []}
        self.write()
        self.assertEqual(exercises.build_data("sample", {"1.1"})["sections"]["1.1"]["status"], "none")

    def test_reject_unknown_section_and_false_none(self):
        self.write()
        with self.assertRaisesRegex(ValueError, "对应正文节"):
            exercises.load_manifest("sample", {"2.1"})
        self.data["sections"]["1.1"]["status"] = "none"
        self.write()
        with self.assertRaisesRegex(ValueError, "必须为空"):
            exercises.load_manifest("sample")

    def test_reject_missing_continuation_and_wrong_offset(self):
        self.data["sections"]["1.1"]["scans"][1]["pdf_page"] = 22
        self.write()
        with self.assertRaisesRegex(ValueError, "不连续"):
            exercises.load_manifest("sample")
        self.data["sections"]["1.1"]["scans"][1]["pdf_page"] = 21
        self.data["page_offset"] = 11
        self.write()
        with self.assertRaisesRegex(ValueError, "偏移不一致"):
            exercises.load_manifest("sample")

    def test_reject_invalid_crop(self):
        original = copy.deepcopy(self.data)
        for crop in ([0, .8, 1, .3], [0, 0, 1.1, 1], [0, float("nan"), 1, 1]):
            self.data = copy.deepcopy(original)
            self.data["sections"]["1.1"]["scans"][0]["crop"] = crop
            self.write()
            with self.assertRaisesRegex(ValueError, "crop"):
                exercises.load_manifest("sample")

    def test_build_requires_exported_images_and_rejects_stale_crop(self):
        self.write()
        with self.assertRaisesRegex(ValueError, "图片缺失"):
            exercises.build_data("sample", {"1.1"})
        self.assets()
        result = exercises.build_data("sample", {"1.1"})
        scans = result["sections"]["1.1"]["scans"]
        self.assertEqual([s["page"] for s in scans], [8, 9])
        self.assertEqual(scans[0]["width"], 100)
        self.data["sections"]["1.1"]["scans"][0]["crop"][1] = .4
        self.write()
        with self.assertRaisesRegex(ValueError, "重新导出"):
            exercises.build_data("sample", {"1.1"})


if __name__ == "__main__":
    unittest.main()
