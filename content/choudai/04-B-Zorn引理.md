---
chapter: 4
chapter_title: 附录 集合
section: "B"
section_title: Zorn 引理
pages: "186–187"
---

### 定义 (偏序) @186

一个非空集合 $A$ 上的**偏序**（partial order）是一个关系 $\leqslant$，它满足以下性质：

(1) $x\leqslant x$，对所有 $x\in A$（自反性）；

(2) 如果 $x\leqslant y$ 且 $y\leqslant x$，那么 $x=y$，对所有 $x,y\in A$（反对称性）；

(3) 如果 $x\leqslant y$ 且 $y\leqslant z$，那么 $x\leqslant z$，对所有 $x,y,z\in A$（传递性）。

通常称 $A$ 在 $\leqslant$ 下是一个偏序集。

### 定义 (链与上界) @186

设非空集合 $A$ 具有偏序 $\leqslant$：

(1) 子集 $B$ 是 $A$ 的一个**链**（chain），如果对于所有 $x,y\in B$，要么 $x\leqslant y$，要么 $y\leqslant x$。

(2) 子集 $B$ 的**上界**（upper bound）是集合 $A$ 中的一个元素 $u$，使得对于所有 $b\in B$，都有 $b\leqslant u$。

(3) 集合 $A$ 的一个**极大元**（maximal element）是集合 $A$ 中的一个元素 $m$，使得如果对于任何 $x\in A$ 有 $m\leqslant x$，那么 $m=x$。

### 注 (链的别名) @186

在文献中，链也称为塔（tower）、全序（totally ordered）、线性序（linearly ordered）或简单序（simply ordered）子集。

### 例 1 @186

本例说明了上界与极大元之间的区别。注意，如果 $m$ 是 $A$ 的一个极大元，那么不一定有 $x\leqslant m$ 对所有 $x\in A$（即 $m$ 不一定是最大元）。

(1) 设 $A$ 为某个集合 $X$ 的幂集（即所有子集的集合），并且 $\leqslant$ 是子集包含关系 $\subseteq$。这只是一个偏序，因为 $X$ 的一些子集可能不可比较，例如单元素集合：如果 $x\neq y$，那么 $\{x\}\not\subseteq\{y\}$ 且 $\{y\}\not\subseteq\{x\}$。在这种情况下，一个链的示例是 $X$ 的一系列子集

$$
X_1\subseteq X_2\subseteq X_3\subseteq\cdots.
$$

集合 $A$ 的任何子集 $B$ 都有一个上界 $b$，具体为

$$
b=\bigcup_{x\in B}x.
$$

这个偏序集 $A$ 有一个（唯一的）极大元 $X$。在许多情况下，集合 $A$ 由集合 $X$ 的一些（但不一定是全部）子集组成（即 $A$ 是 $X$ 的幂集的子集），且 $A$ 上的偏序再次是包含关系，上界和极大元的存在性取决于 $A$ 的性质。

(2) 设 $A$ 是所有正整数集合 $\mathbb{N}$ 的真子集的集合，按包含关系 $\subseteq$ 排序。在这种情况下，链不一定有极大元，例如链

$$
\{1\}\subseteq\{1,2\}\subseteq\{1,2,3\}\subseteq\cdots
$$

没有上界。集合 $A$ 仍然有极大元，例如 $\mathbb{N}\setminus\{n\}$ 是 $A$ 的一个极大元，对于任意 $n\in\mathbb{N}$。

(3) 设 $A=\mathbb{R}$ 且按通常的 $\leqslant$ 关系排序。在此示例中，$A$ 的每个子集都是一个链（包括 $A$ 本身）。$A$ 的子集具有上界的概念与实数集合 $\mathbb{R}$ 中"被某个实数从上界定"的常规概念相同（因此某些集合，例如有限长度的区间，有上界，而其他集合，例如正实数集合，没有上界）。集合 $A$ 没有极大元。

### 引理 (Zorn 引理) @187

如果 $A$ 是一个非空的偏序集，且其中的每个链都有一个上界，则 $A$ 中必存在一个极大元。

### 注 (Zorn 引理的独立性) @187

Zorn 引理独立于通常的 Zermelo–Fraenkel 集合论公理体系，这并非显而易见的。具体而言，如果集合论公理是自洽的，那么这些公理与 Zorn 引理一起也是自洽的；反之，如果集合论公理不是自洽的，那么这些公理与 Zorn 引理的否定也同样是自洽的。这里的"引理"一词在 Zorn 引理中只是历史沿用的术语。为了完整起见，下面给出 Zorn 引理的另外两个等价表述。

### 公理 (选择公理) @187

**选择公理**（the axiom of choice）：设 $\{A_i\}_{i\in I}$ 是一族非空集合，这里 $I$ 是一个非空指标集，那么存在一个映射 $f:I\to\bigcup_{i\in I}A_i$，使得对每个 $i\in I$ 都有 $f(i)\in A_i$。换言之，笛卡儿积 $\prod_{i\in I}A_i$ 是非空集合。

### 定理 (良序原理) @187

**良序原理**（the well ordering principle）：每个非空集合 $A$ 都有一个良序，即 $A$ 上存在一个全序 $\leqslant$，使得 $A$ 的每个非空子集都有一个最小元；也就是说，对于每个非空子集 $B\subseteq A$，存在 $s\in B$，使得 $s\leqslant b$ 对所有 $b\in B$ 都成立。
