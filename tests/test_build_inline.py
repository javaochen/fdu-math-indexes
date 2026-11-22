"""Math-mode stars must not be turned into bold HTML by inline()."""
import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "tools"))
import build


class InlineMathTest(unittest.TestCase):
    def test_double_star_superscript_is_not_bold(self):
        html = build.inline(r"$X^{**}$ 与 $(c_0)^{**}=l^\infty$")
        self.assertNotIn("<strong>", html)
        self.assertEqual(html.count("$"), 4)

    def test_bold_outside_math_still_works(self):
        html = build.inline(r"**重点** 是 $X^{**}$")
        self.assertIn("<strong>重点</strong>", html)
        self.assertIn("$X^{**}$", html)

    def test_quadruple_star_superscript(self):
        html = build.inline(r"$X^{****}$")
        self.assertNotIn("<strong>", html)


class SectionPreambleTest(unittest.TestCase):
    def test_text_before_first_item_is_kept_as_lead_block(self):
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            (root / "_book.md").write_text(
                "---\nid: sample\ntitle: 样本\norder: 1\n---\n", encoding="utf-8")
            (root / "01-01.md").write_text(
                '---\nchapter: 1\nchapter_title: 章\nsection: "1.1"\nsection_title: 节\npages: "1–2"\n---\n'
                "\n节首导语，含公式 $x+y$。\n\n### 定理 1.1 @1\n\n陈述。\n", encoding="utf-8")
            problems = []
            book = build.load_book(root, problems)
            self.assertEqual(problems, [])
            section = book["chapters"][0]["sections"][0]
            self.assertEqual(len(section["items"]), 1)
            self.assertEqual(section["blocks"][0]["before"], 0)
            self.assertIn("节首导语", section["blocks"][0]["html"])
            self.assertIn("$x+y$", section["blocks"][0]["html"])


if __name__ == "__main__":
    unittest.main()
