"""习题 Markdown 的缺省状态、完整编号、书内页码与公式校验。"""
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "tools"))
import exercises


class ExerciseMarkdownTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.patcher = patch.object(exercises, "ROOT", self.root)
        self.patcher.start()
        self.addCleanup(self.patcher.stop)
        self.body = "### 习题 1 @8\n\n证明 $x=x$。\n\n### 习题 2* (标题) @9\n\n求 $y$。\n"

    def write(self, body=None, status="ready", pages="8–9", sid="1.1", filename="01-01.md"):
        path = self.root / "exercises/sample" / filename
        path.parent.mkdir(parents=True, exist_ok=True)
        text = f'---\nsection: "{sid}"\npages: "{pages}"\nstatus: {status}\n---\n\n'
        path.write_text(text + (self.body if body is None else body), encoding="utf-8")

    def test_missing_is_unrecorded(self):
        self.assertIsNone(exercises.build_data("sample", {"1.1"}))
        self.assertEqual(exercises.summary(None)["status"], "unrecorded")

    def test_none_is_explicit_and_cannot_hide_questions(self):
        self.write(body="", status="none", pages="")
        data = exercises.build_data("sample", {"1.1"})["sections"]["1.1"]
        self.assertEqual(data, {"status": "none", "count": 0, "pages": "", "items": []})
        self.write(status="none")
        with self.assertRaisesRegex(ValueError, "必须为空"):
            exercises.build_data("sample", {"1.1"})

    def test_text_star_numbers_and_printed_pages(self):
        self.write()
        data = exercises.build_data("sample", {"1.1"})["sections"]["1.1"]
        self.assertEqual(data["count"], 2)
        self.assertEqual([it["page"] for it in data["items"]], [8, 9])
        self.assertEqual(data["items"][1]["number"], "2*")
        self.assertEqual(data["items"][1]["anchor"], "习题-2-star")
        self.assertIn("$x=x$", data["items"][0]["src"])
        self.assertIn("<p>", data["items"][0]["html"])
        self.assertNotIn("scans", data)

    def test_missing_question_and_duplicate_section(self):
        self.write(self.body.replace("习题 2*", "习题 3"))
        with self.assertRaisesRegex(ValueError, "题号缺漏"):
            exercises.build_data("sample", {"1.1"})
        self.write()
        self.write(filename="duplicate.md")
        with self.assertRaisesRegex(ValueError, "重复的习题节"):
            exercises.build_data("sample", {"1.1"})

    def test_page_bounds_and_unknown_section(self):
        self.write()
        with self.assertRaisesRegex(ValueError, "对应正文节"):
            exercises.build_data("sample", {"2.1"})
        self.write(self.body.replace("@9", "@10"))
        with self.assertRaisesRegex(ValueError, "越界"):
            exercises.build_data("sample", {"1.1"})
        self.write(self.body.replace("@8", "@9").replace("@9\n\n求", "@8\n\n求"))
        with self.assertRaisesRegex(ValueError, "倒退"):
            exercises.build_data("sample", {"1.1"})

    def test_reject_empty_body_broken_math_and_image_substitution(self):
        for body, message in [("### 习题 1 @8\n", "题干为空"),
                              ("### 习题 1 @8\n\n$x\n", "不成对"),
                              ("### 习题 1 @8\n\n![题目](scan.webp)\n", "文字与公式")]:
            self.write(body)
            with self.assertRaisesRegex(ValueError, message):
                exercises.build_data("sample", {"1.1"})


if __name__ == "__main__":
    unittest.main()
