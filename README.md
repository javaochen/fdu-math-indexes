# 泛函分析 · 命题索引

把王凯《泛函分析》正文中有讲解的定义、定理、命题、推论与例整理成可检索、可自测的网页。只保留**陈述**，不含证明，不收录习题与解答。

- 源文件：`content/*.md`（人工校对后的 Markdown + LaTeX）
- 构建：`tools/build.py` → `site/data/index.json`
- 页面：`site/`（纯静态，KaTeX 已本地化，可直接托管在 GitHub Pages 子路径下）

## 用法

```powershell
python tools/build.py                 # 生成 site/data/index.json
python -m http.server 8000 -d site    # 本地预览 http://127.0.0.1:8000/
```

`site/` 下没有构建步骤，改完 JSON 直接刷新即可。发布时把 `site/` 目录内容作为站点根。

## 目录结构

```
content/     按节拆分的命题源文件（一章一节一个文件）
tools/       build.py 解析校验；pdf_pages.py 按页渲染扫描 PDF
site/        index.html + assets/ + vendor/katex/ + data/index.json
docs/        提取与校对规范
```

## 条目格式

`content/01-01-度量空间.md`：

```markdown
---
chapter: 1
chapter_title: 度量空间
section: "1.1"
section_title: 度量空间
pages: "2–8"
---

### 定理 1.3.5 (投影定理) @29

设 $M$ 是 Hilbert 空间 $H$ 的一个闭凸子集，……
```

条目头：`### 类型 [编号] [(标题)] @书页码`。类型限
`定义 / 定理 / 命题 / 引理 / 推论 / 例 / 反例 / 注 / 构造`。
正文中空行分段；段内换行会被自动合并，所以可以放心手工折行。
公式用 `$...$` 与 `$$...$$`，原书编号用 `\tag{1.20}` 保留。

`python tools/build.py` 会检查：未知类型、空正文、重复锚点、`$` / `$$` 不成对。

## 录入进度

| 章 | 节 | 状态 |
| --- | --- | --- |
| 1 度量空间 | 1.1 | 已完成（21 条） |
| 1 | 1.2–1.6 | 待录入 |
| 2–4 | 全部 | 待录入 |
| 附录 A–G | — | 待定 |

## 版权

本书版权归作者与出版方所有。本仓库只收录数学命题的陈述（不含证明、不含习题与解答），用于个人复习自测，并标注原书页码；如权利人提出异议将立即下架。

## 声明

内容由扫描页经视觉识别后人工校对，可能存在公式或文字错误；发现错误请提 issue。页面与数据由 AI 辅助生成。
