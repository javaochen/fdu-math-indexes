---
chapter: 11
chapter_title: Euclid 空间上的极限和连续
section: "11.1"
section_title: Euclid 空间上的基本定理
pages: "98–106"
---

### 定义 (Euclid 空间) @99

记 $\mathbb{R}$ 为实数全体，定义 $n$ 个 $\mathbb{R}$ 的 Descartes 乘积集为
$$\mathbb{R}^n=\mathbb{R}\times\mathbb{R}\times\cdots\times\mathbb{R}=\{(x_1,x_2,\cdots,x_n)\mid x_i\in\mathbb{R},\ i=1,2,\cdots,n\}.$$

$\mathbb{R}^n$ 中的元素 $x=(x_1,x_2,\cdots,x_n)$ 称为**向量**或**点**，$x_i$ 称为 $x$ 的第 $i$ 个**坐标**。特别地，$\mathbb{R}^n$ 中的零元素记为 $\mathbf{0}=(0,0,\cdots,0)$。

设 $x=(x_1,x_2,\cdots,x_n)$，$y=(y_1,y_2,\cdots,y_n)$ 为 $\mathbb{R}^n$ 中任意两个向量，$\lambda$ 为任意实数，定义 $\mathbb{R}^n$ 中的加法和数乘运算：
$$x+y=(x_1+y_1,x_2+y_2,\cdots,x_n+y_n),\qquad \lambda x=(\lambda x_1,\lambda x_2,\cdots,\lambda x_n),$$
$\mathbb{R}^n$ 就成为向量空间。

如果再在 $\mathbb{R}^n$ 上引入内积运算
$$\langle x,y\rangle=x_1y_1+x_2y_2+\cdots+x_ny_n=\sum_{k=1}^{n}x_ky_k,$$
那么它就被称为 **Euclid 空间**。

### 命题 (内积的基本性质) @99

设 $x,y,z\in\mathbb{R}^n$，$\lambda,\mu\in\mathbb{R}$，则内积满足

1°（正定性）$\langle x,x\rangle\geqslant 0$，而 $\langle x,x\rangle=0$ 当且仅当 $x=\mathbf{0}$；

2°（对称性）$\langle x,y\rangle=\langle y,x\rangle$；

3°（线性性）$\langle \lambda x+\mu y,z\rangle=\lambda\langle x,z\rangle+\mu\langle y,z\rangle$；

4°（Schwarz 不等式）$\langle x,y\rangle^2\leqslant\langle x,x\rangle\langle y,y\rangle$。

### 定义 11.1.1 (距离与 Euclid 范数) @99

Euclid 空间 $\mathbb{R}^n$ 中任意两点 $x=(x_1,x_2,\cdots,x_n)$ 和 $y=(y_1,y_2,\cdots,y_n)$ 的距离定义为
$$\|x-y\|=\sqrt{(x_1-y_1)^2+(x_2-y_2)^2+\cdots+(x_n-y_n)^2};$$
并称
$$\|x\|=\sqrt{\langle x,x\rangle}=\sqrt{\sum_{k=1}^{n}x_k^2}$$
为 $x$ 的 **Euclid 范数**（简称**范数**）。

显然，$x$ 的范数 $\|x\|$ 就是 $x$ 到 $\mathbf{0}$ 的距离（即 $x$ 的模长）。

### 定理 11.1.1 (距离的基本性质) @99

距离满足以下性质：

（1）（正定性）$\|x-y\|\geqslant 0$，而 $\|x-y\|=0$ 当且仅当 $x=y$；

（2）（对称性）$\|x-y\|=\|y-x\|$；

（3）（三角不等式）$\|x-z\|\leqslant\|x-y\|+\|y-z\|$。

### 定义 11.1.2 ($\delta$ 邻域) @100

设 $a=(a_1,a_2,\cdots,a_n)\in\mathbb{R}^n$，$\delta>0$，则点集
$$O(a,\delta)=\{x\in\mathbb{R}^n\mid \|x-a\|<\delta\}=\left\{x\in\mathbb{R}^n\ \middle|\ \sqrt{(x_1-a_1)^2+(x_2-a_2)^2+\cdots+(x_n-a_n)^2}<\delta\right\}$$
称为点 $a$ 的 $\delta$ **邻域**，$a$ 称为这个邻域的**中心**，$\delta$ 称为邻域的**半径**。

特别地，$O(a,\delta)$ 在 $\mathbb{R}$ 上就是开区间，在 $\mathbb{R}^2$ 上是开圆盘，在 $\mathbb{R}^3$ 上则是开球。

### 定义 11.1.3 (点列的极限) @100

设 $\{x_k\}$ 是 $\mathbb{R}^n$ 中的一个点列。若存在定点 $a\in\mathbb{R}^n$，对于任意给定的 $\varepsilon>0$，存在正整数 $K$，使得当 $k>K$ 时，
$$\|x_k-a\|<\varepsilon\quad(\text{即 }x_k\in O(a,\varepsilon)),$$
则称点列 $\{x_k\}$ **收敛于** $a$，记为 $\lim\limits_{k\to\infty}x_k=a$，而称 $a$ 为点列 $\{x_k\}$ 的**极限**。

一个点列不收敛就称其**发散**。

### 定理 11.1.2 (点列收敛的分量刻画) @100

设 $x_k=(x_k^1,x_k^2,\cdots,x_k^n)$，$a=(a_1,a_2,\cdots,a_n)$，则 $\lim\limits_{k\to\infty}x_k=a$ 的充分必要条件是
$$\lim_{k\to\infty}x_k^i=a_i\quad(i=1,2,\cdots,n).$$

### 定义 11.1.4 (有界集) @100

设 $S$ 是 $\mathbb{R}^n$ 上的点集。若存在正数 $M$，使得对于任意 $x\in S$，
$$\|x\|\leqslant M,$$
（或等价地，存在正数 $M'$ 使得 $S\subset O(\mathbf{0},M')$）则称 $S$ 为**有界集**。

### 定义 (内点、外点、边界点) @100

设 $S$ 是 $\mathbb{R}^n$ 上的点集，它在 $\mathbb{R}^n$ 上的补集 $\mathbb{R}^n\setminus S$ 记为 $S^c$。对于任意 $x\in\mathbb{R}^n$，从其邻域与 $S$ 的关系来分，无非是下列三种情况之一：

（1）存在 $x$ 的一个 $\delta$ 邻域 $O(x,\delta)$ 完全落在 $S$ 中（注意：这时 $x$ 必属于 $S$），这时称 $x$ 是 $S$ 的**内点**。$S$ 的内点全体称为 $S$ 的**内部**，记为 $S^\circ$；

（2）存在 $x$ 的一个 $\delta$ 邻域 $O(x,\delta)$ 完全不落在 $S$ 中，这时称 $x$ 是 $S$ 的**外点**；

（3）不存在 $x$ 的具有上述性质的 $\delta$ 邻域，即 $x$ 的任意 $\delta$ 邻域既包含 $S$ 中的点，又包含不属于 $S$ 的点，那么就称 $x$ 是 $S$ 的**边界点**。$S$ 的边界点的全体称为 $S$ 的**边界**，记为 $\partial S$。

要注意的是，内点必属于 $S$，外点必不属于 $S$（或者说必属于 $S^c$），但边界点可能属于 $S$，也可能不属于 $S$。

### 定义 (孤立点与聚点) @101

若存在 $x$ 的一个邻域，其中只有 $x$ 点属于 $S$，则称 $x$ 是 $S$ 的**孤立点**。显然，孤立点必是边界点。

若 $x$ 的任意邻域都含有 $S$ 中的无限个点，则称 $x$ 是 $S$ 的**聚点**。$S$ 的聚点的全体记为 $S'$。显然，$S$ 的内点必是 $S$ 的聚点；$S$ 的边界点，只要不是 $S$ 的孤立点，也必是 $S$ 的聚点。因此 $S$ 的聚点可能属于 $S$，也可能不属于 $S$。例如在 $\mathbb{R}$ 中，$0$ 是点集 $\left\{\dfrac{1}{n}\ \middle|\ n=1,2,\cdots\right\}$ 的聚点，但它不属于这个点集。

### 定理 11.1.3 (聚点的点列刻画) @101

$x$ 是点集 $S\,(\subset\mathbb{R}^n)$ 的聚点的充分必要条件是：存在点列 $\{x_k\}$ 满足 $x_k\in S$，$x_k\neq x\ (k=1,2,\cdots)$，使得 $\lim\limits_{k\to\infty}x_k=x$。

### 定义 11.1.5 (开集、闭集与闭包) @101

设 $S$ 是 $\mathbb{R}^n$ 上的点集。若 $S$ 中的每一个点都是它的内点，则称 $S$ 为**开集**；若 $S$ 中包含了它的所有的聚点，则称 $S$ 为**闭集**。

$S$ 与它的聚点全体 $S'$ 的并集称为 $S$ 的**闭包**，记为 $\overline{S}$。

### 例 11.1.1 (圆环的内外与闭包) @101

在 $\mathbb{R}^2$ 上，设
$$S=\{(x,y)\mid 1\leqslant x^2+y^2<4\},$$
那么
$$S^\circ=\{(x,y)\mid 1<x^2+y^2<4\};$$
$$\partial S=\{(x,y)\mid x^2+y^2=1\}\cup\{(x,y)\mid x^2+y^2=4\};$$
$$S'=\{(x,y)\mid 1\leqslant x^2+y^2\leqslant 4\}=\overline{S}.$$

### 例 11.1.2 (邻域是开集) @101

证明邻域是开集。即：设邻域为 $O(a,r)$，$q$ 为 $O(a,r)$ 上的任一点，则 $\|q-a\|<r$，因此存在正数 $h$ 使得 $\|q-a\|<r-h$，于是对任意 $x\in O(q,h)$ 成立 $\|x-a\|\leqslant\|x-q\|+\|q-a\|<r$，即 $q$ 是 $O(a,r)$ 的内点，由定义，$O(a,r)$ 是开集。

### 例 ($n$ 维矩形与 $n$ 维球) @102

集合 $\{x\in\mathbb{R}^n\mid a_i<x_i<b_i,\ i=1,2,\cdots,n\}$ 和 $\left\{x\in\mathbb{R}^n\ \middle|\ \sum\limits_{i=1}^{n}(x_i-a_i)^2<r^2\right\}$ 都是开集，它们分别称为 **$n$ 维开矩形**和 **$n$ 维开球**；集合 $\{x\in\mathbb{R}^n\mid a_i\leqslant x_i\leqslant b_i,\ i=1,2,\cdots,n\}$ 和 $\left\{x\in\mathbb{R}^n\ \middle|\ \sum\limits_{i=1}^{n}(x_i-a_i)^2\leqslant r^2\right\}$ 都是闭集，它们分别称为 **$n$ 维闭矩形**和 **$n$ 维闭球**。

### 定理 11.1.4 (闭集与开集的对偶) @102

$\mathbb{R}^n$ 上的点集 $S$ 为闭集的充分必要条件是 $S^c$ 是开集。

### 推论 (开集的补集刻画) @102

$\mathbb{R}^n$ 上的点集 $S$ 为开集的充分必要条件是 $S^c$ 是闭集。

### 引理 11.1.1 (De Morgan 公式) @102

设 $\{S_\alpha\}$ 是 $\mathbb{R}^n$ 中的一组（有限或无限多个）子集，则

（1）$\left(\bigcup_{\alpha}S_\alpha\right)^c=\bigcap_{\alpha}S_\alpha^{\,c}$；

（2）$\left(\bigcap_{\alpha}S_\alpha\right)^c=\bigcup_{\alpha}S_\alpha^{\,c}$。

### 定理 11.1.5 (开集与闭集的运算) @102

（1）任意一组开集 $\{S_\alpha\}$ 的并集 $\bigcup\limits_{\alpha}S_\alpha$ 是开集；

（2）任意一组闭集 $\{T_\alpha\}$ 的交集 $\bigcap\limits_{\alpha}T_\alpha$ 是闭集；

（3）任意有限个开集 $S_1,S_2,\cdots,S_k$ 的交集 $\bigcap\limits_{i=1}^{k}S_i$ 是开集；

（4）任意有限个闭集 $T_1,T_2,\cdots,T_k$ 的并集 $\bigcup\limits_{i=1}^{k}T_i$ 是闭集。

### 定理 11.1.6 (闭矩形套定理) @103

设 $\Delta_k=[a_k,b_k]\times[c_k,d_k]\ (k=1,2,\cdots)$ 是 $\mathbb{R}^2$ 上一列闭矩形，如果

（1）$\Delta_{k+1}\subset\Delta_k$，即 $a_k\leqslant a_{k+1}<b_{k+1}\leqslant b_k$，$c_k\leqslant c_{k+1}<d_{k+1}\leqslant d_k$，$k=1,2,\cdots$；

（2）$\sqrt{(b_k-a_k)^2+(d_k-c_k)^2}\to 0\ (k\to\infty)$，

则存在唯一的点 $a=(\xi,\eta)$ 属于 $\bigcap\limits_{k=1}^{\infty}\Delta_k$，且
$$\lim_{k\to\infty}a_k=\lim_{k\to\infty}b_k=\xi,\qquad \lim_{k\to\infty}c_k=\lim_{k\to\infty}d_k=\eta.$$

### 定理 11.1.6′ (Cantor 闭区域套定理) @103

设 $\{S_k\}$ 是 $\mathbb{R}^n$ 上的非空闭集序列，满足
$$S_1\supset S_2\supset\cdots\supset S_k\supset S_{k+1}\supset\cdots,$$
以及 $\lim\limits_{k\to\infty}\operatorname{diam}S_k=0$，则存在唯一一点属于 $\bigcap\limits_{k=1}^{\infty}S_k$。

### 定义 (直径) @103

$$\operatorname{diam}S=\sup\{\|x-y\|\mid x,y\in S\}$$
称为 $S$ 的**直径**。

### 例 11.1.3 (三角形的中线交于一点) @103

证明：三角形的中线交于一点。

以 $A,B,C$ 为顶点、加上边界的三角形记为 $\triangle ABC$，它是闭集。显然 $\triangle ABC$ 的三条中线 $AA_1,BB_1,CC_1$ 包含在 $\triangle ABC$ 中，因此它们的两两交点也包含在 $\triangle ABC$ 中，且 $\triangle A_1B_1C_1\subset\triangle ABC$。注意三条中线 $AA_1,BB_1,CC_1$ 上各有一段 $A_1A_2,B_1B_2,C_1C_2$ 成为 $\triangle A_1B_1C_1$ 的三条中线，所以 $\triangle ABC$ 的三条中线的两两交点也就是 $\triangle A_1B_1C_1$ 的三条中线的两两交点，且交点也包含在 $\triangle A_1B_1C_1$ 中，同时又有 $\triangle A_2B_2C_2\subset\triangle A_1B_1C_1$。

如此做下去，就得到三角形组成的闭集序列
$$\triangle ABC\supset\triangle A_1B_1C_1\supset\triangle A_2B_2C_2\supset\cdots,$$
显然它们满足 $\lim\limits_{k\to\infty}\operatorname{diam}\triangle A_kB_kC_k=0$，因此存在唯一的公共点 $O$ 属于所有这些三角形。因为 $\triangle ABC$ 的三条中线的两两交点始终包含在每一个三角形内，所以三条中线必定交于一点，而 $O$ 点就是它们的交点。

### 注 (高维情形成立的等价定理) @104

第二章中给出的从实数的连续性到实数的完备性的 $5$ 个等价定理中，除了「确界存在定理」和「单调有界数列收敛定理」由于涉及点之间的大小关系而在高维空间中不再有意义之外，其余的结论在高维空间依然成立。

### 定理 11.1.7 (Bolzano–Weierstrass 定理) @104

$\mathbb{R}^n$ 上的有界点列 $\{x_k\}$ 中必有收敛子列。

### 推论 11.1.1 (有界无限点集必有聚点) @104

$\mathbb{R}^n$ 上的有界无限点集至少有一个聚点。

### 定义 11.1.6 (基本点列) @104

若 $\mathbb{R}^n$ 上的点列 $\{x_k\}$ 满足：对于任意给定的 $\varepsilon>0$，存在正整数 $K$，使得对任意 $k,l>K$，成立
$$\|x_l-x_k\|<\varepsilon,$$
则称 $\{x_k\}$ 为**基本点列**（或 **Cauchy 点列**）。

### 定理 11.1.8 (Cauchy 收敛原理) @104

$\mathbb{R}^n$ 上的点列 $\{x_k\}$ 收敛的充分必要条件是：$\{x_k\}$ 为基本点列。

### 定义 11.1.7 (开覆盖与紧集) @105

设 $S$ 为 $\mathbb{R}^n$ 上的点集。如果 $\mathbb{R}^n$ 中的一组开集 $\{U_\alpha\}$ 满足 $\bigcup\limits_{\alpha}U_\alpha\supset S$，那么称 $\{U_\alpha\}$ 为 $S$ 的一个**开覆盖**。

如果 $S$ 的任意一个开覆盖 $\{U_\alpha\}$ 中总存在一个有限子覆盖，即存在 $\{U_\alpha\}$ 中的有限个开集 $\{U_{\alpha_i}\}_{i=1}^{p}$，满足 $\bigcup\limits_{i=1}^{p}U_{\alpha_i}\supset S$，则称 $S$ 为**紧集**。

### 定理 11.1.9 (Heine–Borel 定理) @105

$\mathbb{R}^n$ 上的点集 $S$ 是紧集的充分必要条件为：它是有界闭集。

### 定理 11.1.10 (紧性的等价刻画) @106

设 $S$ 是 $\mathbb{R}^n$ 上的点集，那么以下三个命题等价：

（1）$S$ 是有界闭集；

（2）$S$ 是紧集；

（3）$S$ 的任一无限子集在 $S$ 中必有聚点。

### 注 (Euclid 空间上的基本定理) @106

Cantor 闭区域套定理、Bolzano–Weierstrass 定理、Cauchy 收敛原理和 Heine–Borel 定理称为 **Euclid 空间上的基本定理**，它们是相互等价的。
