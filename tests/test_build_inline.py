"""Math-mode stars must not be turned into bold HTML by inline()."""
import sys
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


if __name__ == "__main__":
    unittest.main()
