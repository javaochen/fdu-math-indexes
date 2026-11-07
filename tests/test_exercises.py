"""习题 Markdown 的缺省状态、完整编号、书内页码与公式校验。"""
import contextlib
import io
import json
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "tools"))
import exercises
import build


class ExerciseMarkdownTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.patcher = patch.object(exercises, "ROOT", self.root)
        self.patcher.start()
        self.addCleanup(self.patcher.stop)
        self.body = "### 习题 1 @8\n\n证明 $x=x$。\n\n### 习题 2* (标题) @9\n\n求 $y$。\n"

    def write(self, body=None, status="ready", pages="8–9", sid="1.1", filename="01-01.md", chapter=None):
        path = self.root / "exercises/sample" / filename
        path.parent.mkdir(parents=True, exist_ok=True)
        owner = f'chapter: "{chapter}"' if chapter is not None else f'section: "{sid}"'
        text = f'---\n{owner}\npages: "{pages}"\nstatus: {status}\n---\n\n'
        path.write_text(text + (self.body if body is None else body), encoding="utf-8")

    def write_groups(self, config):
        path = self.root / "exercises/sample/_groups.json"
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(json.dumps(config, ensure_ascii=False), encoding="utf-8")

    def chapter_data(self):
        return exercises.build_data("sample", {"2.1", "2.2"}, {"2"})

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

    def test_chapter_groups_preserve_question_order_and_star_anchors(self):
        self.write(chapter="2", filename="02.md")
        self.write_groups({"2": [{"id": "events", "title": "  事件  ", "numbers": [2, 1]}]})
        record = self.chapter_data()["sections"]["chapter-2"]
        self.assertEqual(record["scope"], "chapter")
        self.assertEqual(record["chapter"], "2")
        self.assertEqual(record["groups"], [{"id": "events", "title": "事件", "numbers": [1, 2], "count": 2}])
        self.assertEqual([item["number"] for item in record["items"]], ["1", "2*"])
        self.assertEqual(record["items"][1]["anchor"], "习题-2-star")
        self.assertEqual(exercises.summary(record)["id"], "chapter-2")
        self.assertNotIn("2.1", self.chapter_data()["sections"])

    def test_chapter_belongs_to_existing_chapter(self):
        self.write(chapter="3", filename="03.md")
        with self.assertRaisesRegex(ValueError, "对应正文章"):
            self.chapter_data()
        self.write_groups({"3": [{"id": "all", "title": "全部", "numbers": [1, 2]}]})
        self.assertIn("chapter-3", exercises.build_data("sample", set())["sections"])

    def test_reject_ambiguous_scope_and_chapter_section_collision(self):
        self.write(chapter="2", filename="02.md")
        path = self.root / "exercises/sample/02.md"
        text = path.read_text(encoding="utf-8")
        path.write_text(text.replace('chapter: "2"', 'chapter: "2"\nsection: "2.1"'), encoding="utf-8")
        with self.assertRaisesRegex(ValueError, "只能填写"):
            self.chapter_data()
        self.write(chapter="2", filename="02.md")
        with self.assertRaisesRegex(ValueError, "与正文节冲突"):
            exercises.build_data("sample", {"chapter-2"}, {"2"})

    def test_chapter_groups_require_exact_unique_coverage(self):
        self.write(chapter="2", filename="02.md")
        cases = [
            ({}, "非空主题分组"),
            ({"2": []}, "非空主题分组"),
            ({"2": [{"id": "a", "title": "甲", "numbers": []}]}, "空组"),
            ({"2": [{"id": "a", "title": "甲", "numbers": [1]}]}, "未覆盖"),
            ({"2": [{"id": "a", "title": "甲", "numbers": [1, 3]}]}, "未知题号"),
            ({"2": [{"id": "a", "title": "甲", "numbers": [True, 2]}]}, "未知题号"),
            ({"2": [{"id": "a", "title": "甲", "numbers": [1, 1, 2]}]}, "重复分组"),
            ({"2": [{"id": "a", "title": "甲", "numbers": [1]},
                    {"id": "b", "title": "乙", "numbers": [1, 2]}]}, "重复分组"),
            ({"2": [{"id": "a", "title": "甲", "numbers": [1]},
                    {"id": "a", "title": "乙", "numbers": [2]}]}, "重复主题"),
            ({"2": [{"id": "a", "title": "", "numbers": [1, 2]}]}, "标题为空"),
            ({"2": [{"id": "../a", "title": "甲", "numbers": [1, 2]}]}, "id 格式"),
            ({"3": [{"id": "a", "title": "甲", "numbers": [1, 2]}]}, "没有对应"),
            ([], "顶层必须"),
        ]
        for config, message in cases:
            with self.subTest(config=config):
                self.write_groups(config)
                with self.assertRaisesRegex(ValueError, message):
                    self.chapter_data()

    def test_chapter_none_is_explicit_and_has_no_groups(self):
        self.write(body="", status="none", pages="", chapter="2", filename="02.md")
        record = self.chapter_data()["sections"]["chapter-2"]
        self.assertEqual(record["status"], "none")
        self.assertEqual(record["groups"], [])
        self.write_groups({"2": [{"id": "a", "title": "甲", "numbers": [1]}]})
        with self.assertRaisesRegex(ValueError, "没有对应"):
            self.chapter_data()

    def test_groups_without_chapter_source_cannot_be_silently_ignored(self):
        self.write_groups({"2": [{"id": "a", "title": "甲", "numbers": [1, 2]}]})
        with self.assertRaisesRegex(ValueError, "没有对应"):
            self.chapter_data()

    def test_build_chapter_metadata_search_and_total_without_fake_sections(self):
        self.write(chapter="2", filename="02.md")
        self.write(sid="2.1", filename="02-01.md")
        self.write_groups({"2": [{"id": "events", "title": "事件", "numbers": [1, 2]}]})
        content = self.root / "content/sample"
        content.mkdir(parents=True)
        (content / "02-01.md").write_text(
            '---\nchapter: 2\nchapter_title: 章\nsection: "2.1"\nsection_title: 节\npages: "8–9"\n---\n'
            '\n### 定理 1 @8\n\n$x=x$。\n', encoding="utf-8")
        data_path = self.root / "site/data"
        with patch.multiple(build, ROOT=self.root, CONTENT=self.root / "content", DATA=data_path):
            with contextlib.redirect_stdout(io.StringIO()):
                self.assertEqual(build.main(), 0)
        book = json.loads((data_path / "books.json").read_text(encoding="utf-8"))["books"][0]
        self.assertEqual(book["exercise_count"], 4)
        self.assertEqual(book["chapters"][0]["exercises"]["count"], 2)
        self.assertEqual([s["id"] for s in book["chapters"][0]["sections"]], ["2.1"])
        entry = book["chapters"][0]["sections"][0]["exercises"]
        self.assertEqual(entry["chapter_id"], "chapter-2")
        self.assertEqual(entry["count"], 2)
        search = json.loads((data_path / "search.json").read_text(encoding="utf-8"))
        self.assertEqual(len([it for it in search if it[1] == "chapter-2"]), 2)
        self.assertTrue(all(it[2].startswith("exercises/") for it in search if it[1] == "chapter-2"))


class ExistingFunctionalAnalysisTests(unittest.TestCase):
    def test_all_existing_section_exercises_still_load(self):
        root = Path(__file__).resolve().parents[1]
        problems = []
        book = build.load_book(root / "content/fanhan", problems)
        self.assertEqual(problems, [])
        ids = {s["id"] for c in book["chapters"] for s in c["sections"]}
        result = exercises.build_data("fanhan", ids, {c["no"] for c in book["chapters"]})
        records = list(result["sections"].values())
        self.assertEqual(sum(record["count"] for record in records), 315)
        self.assertEqual(len(records), 27)
        self.assertFalse(any(record.get("scope") == "chapter" for record in records))
        self.assertEqual(sum(record["status"] == "none" for record in records), 3)


if __name__ == "__main__":
    unittest.main()
