# 数学命题索引

把本科数学教材正文中有讲解的定义、定理、命题、推论与例整理成可检索、可自测的网页。只保留**陈述**，不含证明，不收录习题与解答。

线上：<https://javaochen.github.io/fdu-math-indexes/>

## 收录

| 书 | 作者 | 源文件 | 状态 |
| --- | --- | --- | --- |
| 泛函分析 | 王凯 | `泛函王凯.pdf`（328 页，正文 p13–p246） | 1.1–1.2 已录（56 条） |
| 实变函数（2023） | 待确认 | `实变函数2023版.pdf`（192 页，正文 p8–p192） | 1.1 已录（49 条） |

## 用法

```powershell
python tools/build.py                 # 生成 site/data/index.json
python -m http.server 8000 -d site    # 本地预览 http://127.0.0.1:8000/
```

`site/` 下没有构建步骤，改完 JSON 直接刷新即可；推 `main` 后 GitHub Actions 自动发布。

## 目录结构

```
content/
  fanyan/_book.md              书级元数据（id / title / author / source / order）
  fanyan/01-01-度量空间.md      每节一个文件
  shibian/_book.md
tools/
  build.py                     解析 + 校验 + 生成 JSON
  pdf_pages.py                 按页渲染扫描 PDF
site/                          index.html + assets/ + vendor/katex/ + data/index.json
docs/提取规范.md                收录范围、页码偏移、校对清单
```

## 条目格式

节文件：

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
正文空行分段，段内换行会被自动合并，可以手工折行。
公式用 `$...$` / `$$...$$`，原书编号用 `\tag{1.20}` 保留。

`build.py` 会检查：未知类型、空正文、重复锚点、`$`/`$$` 不成对。

## 新增一本书

1. 建 `content/<id>/`，写 `_book.md`（`order` 决定切换顺序）。
2. 按节放 Markdown，front matter 填 chapter / section / pages。
3. `python tools/build.py`，推 `main`。

## 版权

各书版权归作者与出版方所有。本仓库只收录数学命题的**陈述**（不含证明、不含习题与解答），用于个人复习自测，并标注原书页码；如权利人提出异议将立即下架。

## 声明

内容由扫描页经视觉识别后人工校对，可能存在公式或文字错误；发现错误请提 issue。页面与数据由 AI 辅助生成。
