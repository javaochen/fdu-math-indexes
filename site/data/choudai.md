# 抽象代数

作者：陈猛、王庆雪、李志远

源文件：抽象代数-陈猛王庆雪李志远(ocr,书签).pdf

> 有 OCR 文本层但错字多，一律以页面图像为准。目录中带 * 的小节为选学，仍收录。

> 本文件由数学命题索引自动生成，包含正文陈述与已录入习题；习题可能尚未完全录入。

## 第1章 群论

### 1.1 群与子群（p3–8）

**定义 (二元运算)** @3

设 $G$ 是一个非空集合，如 $f:G\times G\to G$ 为映射，则称 $f$ 为 $G$ 上的一个**二元运算**（binary operation）。对任意元素 $a,b\in G$，我们记 $a*b=f(a,b)$，该二元运算也可记为 $(G,*)$。

人们往往关注二元运算 $(G,*)$ 的下列特性：

(1) **结合律**：对任意 $a,b,c\in G$，$(a*b)*c=a*(b*c)$。

(2) **交换律**：对任意 $a,b\in G$，$a*b=b*a$。

(3) **恒等元**（identity）$e$：对任意 $a\in G$，$a*e=e*a=a$。

(4) 元素的**逆**：设 $(G,*)$ 有恒等元 $e$，对 $x\in G$，若存在 $y\in G$，使得 $x*y=y*x=e$，则称 $x,y$ 互为**逆**（inverse），或称 $x$ 可逆（invertible）。

**命题 1.1** @3

设 $(G,*)$ 具有结合律，则

(1) $(G,*)$ 中至多只有一个恒等元。

(2) 若 $(G,*)$ 含恒等元且 $x\in G$ 可逆，则 $x$ 的逆元是唯一的（记 $x$ 的逆为 $x^{-1}$）。

**定义 (半群与群)** @4

若二元运算 $(G,*)$ 满足结合律，则称其为**半群**（semi-group）。若半群中存在一个恒等元，则称其为**含幺半群**（monoid）。若含幺半群中的每个元素均可逆，则称其为**群**（group）。满足交换律的群被称为**交换群**，亦称为**阿贝尔群**或 **Abel 群**。

为了简化表示，我们在今后的叙述中将经常使用 "$G$ 在运算 $*$ 下是一个（含幺）半群或群" 或简称 "$G$ 是一个（含幺）半群或群" 的表述方式（当运算 $*$ 明确时），并将元素在 $*$ 运算下的乘积简记为 $ab=a*b$。

**例 1 (常见的半群与群)** @4

现提供几个常见的半群和群的例子。设 $K=\mathbb{Q}$、$\mathbb{R}$ 或者 $\mathbb{C}$。

(1) 非负偶数集 $2\mathbb{N}\cup\{0\}$ 在乘法运算 "$\times$" 下是半群，但不含恒等元。

(2) 非负整数集 $\mathbb{Z}_{\geqslant 0}$ 在加法运算 "$+$" 下是含幺半群，但不是群。

(3) $n$ 阶 $K$ 系数矩阵的全体 $M_n(K)$ 在矩阵乘法运算 "$\cdot$" 下是含幺半群，但不是群。

(4) 在加法运算下，$(\mathbb{Z},+)$，$(\mathbb{Q},+)$，$(\mathbb{R},+)$，$(\mathbb{C},+)$，$(M_{m\times n}(K),+)$ 都是交换群。

(5) 设$$\mathrm{GL}_n(K)\triangleq\{M\in M_n(K)\mid \det(M)\neq 0\},$$它在矩阵乘法运算下是一个群，称 $\mathrm{GL}_n(K)$ 为**一般线性群**。类似地，$$\mathrm{SL}_n(K)\triangleq\{M\in \mathrm{GL}_n(K)\mid \det(M)=1\}$$也是群，称其为**特殊线性群**。当 $n>1$ 时，$\mathrm{GL}_n(K)$ 和 $\mathrm{SL}_n(K)$ 都是非交换群。

(6) 闭区间 $[a,b]$ 上的连续函数全体按函数的加法运算构成交换群。

**例 2 (同余运算)** @4

给定 $m\in\mathbb{N}$，定义 $\mathbb{Z}_m\triangleq\{\overline{0},\overline{1},\overline{2},\cdots,\overline{m-1}\}$ 为模 $m$ 的同余类全体。我们可以定义一个模 $m$ 的同余加法运算 "$+$" 如下：$$\overline{a}+\overline{b}\triangleq\overline{a+b}\in\mathbb{Z}_m,\quad \forall \overline{a},\overline{b}\in\mathbb{Z}_m.$$容易验证 $(\mathbb{Z}_m,+)$ 是一个群。由于 $|\mathbb{Z}_m|=m$，这是一个有限 Abel 群。

类似地，我们可以考虑模 $m$ 的同余乘法运算 "$\times$"，其定义如下：$$\overline{a}\times\overline{b}\triangleq\overline{ab}\in\mathbb{Z}_m,\quad \forall \overline{a},\overline{b}\in\mathbb{Z}_m.$$可以验证该运算的定义是有意义的，并且我们有

(1) $(\mathbb{Z}_m,\times)$ 是含幺半群，其为群当且仅当 $m=1$。当 $m>1$ 时，$\overline{0}\in(\mathbb{Z}_m,\times)$ 无逆（$\overline{0}\neq\overline{1}$），故此时 $(\mathbb{Z}_m,\times)$ 不是群。

(2) 记 $\mathbb{Z}_m^{\#}\triangleq\mathbb{Z}_m\backslash\{\overline{0}\}$。当 $m$ 是合数时，比如 $m=q_1q_2$，$q_1>1$，$q_2>1$，则有 $\overline{q_1}\times\overline{q_2}=\overline{0}$，所以此时 $\mathbb{Z}_m^{\#}$ 在运算 "$\times$" 下不封闭。当 $m$ 是素数时，可以验证 $(\mathbb{Z}_m^{\#},\times)$ 是群。

(3) 设 $\mathbb{Z}_m^{*}\triangleq\{\overline{j}\mid m>j>0,\ \gcd(m,j)=1\}\subseteq\mathbb{Z}_m$，则 $(\mathbb{Z}_m^{*},\times)$ 总是群。对 $n\in\mathbb{N}$，令 $\varphi(n)\triangleq|\mathbb{Z}_n^{*}|$，$\varphi(\cdot)$ 称为 **Euler 函数**。

**定义 (元素的阶)** @5

设 $G$ 是群，$g\in G$。若存在 $m\in\mathbb{N}$，使得 $g^m=e$，则称 $g$ 为**有限阶元素**且称$$o(g)\triangleq\min\{m>0\mid g^m=e\}$$为 $g$ 的**阶**（order）。若对任意 $m\in\mathbb{N}$，都有 $g^m\neq e$，则称 $g$ 为**无限阶**的，记作 $o(g)=\infty$。

**命题 (群的基本性质)** @5

在群 $G$ 中，容易得出下列三条重要性质：

(1) **消去律**：对任意 $a,b,c\in G$，若 $ab=ac$（或 $ba=ca$），则 $b=c$。

(2) 乘积的逆：对任意 $a,b\in G$，$(ab)^{-1}=b^{-1}a^{-1}$。归纳法可得，对 $a_1,a_2,\cdots,a_n\in G$，则 $(a_1a_2\cdots a_n)^{-1}=a_n^{-1}a_{n-1}^{-1}\cdots a_2^{-1}a_1^{-1}$。

(3) 若对 $g\in G$ 及 $n\in\mathbb{N}$，$g^n=e$，则有 $o(g)\mid n$。特别地，$o(g)=1$ 当且仅当 $g=e$。

**例 3 (映射构成的群)** @5

设 $G$ 为一个群，对任意非空集合 $S$，记$$M(S,G)\triangleq\{f:S\to G\mid f\ \text{是一个映射}\}.$$$M(S,G)$ 上可以定义乘法运算 "$*$" 如下：$$\text{对任意}\ x\in S,\quad (f*g)(x)\triangleq f(x)g(x),$$则 $(M(S,G),*)$ 是一个群，该群的恒等元即为将 $S$ 中每个元素都映为 $G$ 的恒等元的那个常值映射。

**定义 (子群)** @6

设 $G$ 为群且 $H$ 为 $G$ 的非空子集。若 $H$ 关于 $G$ 的运算构成群，则称 $H$ 是 $G$ 的**子群**（subgroup），记作 $H<G$。

**例 4 (平凡子群)** @6

由定义可知，$\{e\}$ 与 $G$ 是 $G$ 的子群，称为 $G$ 的**平凡子群**。若 $H<G$ 且 $H\neq G$，则称 $H$ 是 $G$ 的**真子群**。

**命题 1.2** @6

设 $G$ 是群，$H$ 是 $G$ 的非空子集，则下列 3 个命题等价：

(1) $H$ 是 $G$ 的子群；

(2) 对任意的 $a,b\in H$，$ab\in H$ 且 $a^{-1}\in H$；

(3) 对任意的 $a,b\in H$，$ab^{-1}\in H$。

**例 5 (中心与中心化子)** @6

这里介绍两类重要子群。

(1) 定义群 $G$ 的**中心**（center）为$$C(G)\triangleq\{g\in G\mid \forall a\in G,\ ag=ga\}.$$显然 $e\in C(G)$。对任意的 $g_1,g_2\in C(G)$ 及任意的 $a\in G$，有$$a(g_1g_2^{-1})=(ag_1)g_2^{-1}=g_1(ag_2^{-1})=g_1(g_2^{-1}a)=(g_1g_2^{-1})a,$$其中，由 $ag_2=g_2a$ 可得 $g_2^{-1}a=ag_2^{-1}$。所以 $g_1g_2^{-1}\in C(G)$，故根据命题 1.2，$C(G)<G$。明显地，$G$ 是 Abel 群当且仅当 $G=C(G)$。

(2) 定义 $g\in G$ 的**中心化子**（centralizer）为$$C_G(g)\triangleq\{x\in G\mid gx=xg\}\subseteq G.$$类似地，对任意的 $x_1,x_2\in C_G(g)$，有$$g(x_1x_2^{-1})=(gx_1)x_2^{-1}=x_1(gx_2^{-1})=x_1(x_2^{-1}g)=(x_1x_2^{-1})g,$$即 $x_1x_2^{-1}\in C_G(g)$，故 $C_G(g)<G$。明显地，$C_G(g)=G$ 当且仅当 $g\in C(G)$。

**命题 1.3** @7

设 $G$ 是群，$\{H_\alpha\}_{\alpha\in\Lambda}$ 是 $G$ 的子群，$\Lambda$ 是非空指标集，则 $\bigcap_{\alpha\in\Lambda}H_\alpha$ 是 $G$ 的子群。

**定义 (生成子群)** @7

设 $G$ 是群，$S$ 是 $G$ 的非空子集，$\Lambda(S)=\{H<G\mid H\ \text{包含}\ S\}$。记$$\langle S\rangle\triangleq\bigcap_{H\in\Lambda(S)}H$$为包含 $S$ 的最小子群，$\langle S\rangle$ 也被称为由子集 $S$ 生成的子群。

**命题 1.4** @7

设 $G$ 是群，$S$ 是 $G$ 的非空子集，则$$\langle S\rangle=\{a_1^{\varepsilon_1}a_2^{\varepsilon_2}\cdots a_n^{\varepsilon_n}\mid n\in\mathbb{N},\ \forall i,\ a_i\in S,\ \varepsilon_i=\pm 1\}.$$

**定义 (循环群)** @7

若群 $G=\langle g\rangle$，则称 $G$ 为**循环群**（cyclic group）。我们常称 $g$ 是 $G$ 的一个**生成元**，当然循环群的生成元不一定是唯一的。

**例 6 (循环群的例子)** @7

$(\mathbb{Z},+)=\langle 1\rangle=\langle -1\rangle$，$(\mathbb{Z}_m,+)=\langle\overline{1}\rangle$ 都是循环群。本书后文将证明，从结构上看，循环群就只有这两个类型。

### 1.2 对称群（p9–12）

**定义 (集合的对称群)** @9

设 $X$ 为一个非空集合。令 $S_X=\{\sigma:X\to X\mid \sigma \text{ 是一个双射}\}$。由映射的复合可以定义 $S_X$ 上的一个二元运算 "$\circ$"，即对任意元素 $\sigma,\tau\in S_X$，我们有 $\sigma\tau\in S_X$。集合 $S_X$ 在该运算下是一个群，即 $X$ 上的**对称群**。该群中的每个元素也被称为 $X$ 上的**置换**。注意本书中映射的复合运算是从右向左定义的，即对任意的 $x\in X$，$$(\sigma\circ\tau)(x)\triangleq\sigma(\tau(x)).$$

若 $X=\{1,2,\cdots,n\}$ 是一个有限集，我们记 $S_n=S_X$，称 $S_n$ 为 $n$ 元对称群，并称 $S_n$ 中的元素为 $n$-置换（$n$-permutation）。对任意的 $\sigma\in S_n$，它可以被表示为$$\sigma=\begin{pmatrix}1&2&\cdots&n\\ \sigma(1)&\sigma(2)&\cdots&\sigma(n)\end{pmatrix}.$$易见 $S_n$ 是一个有限群且 $|S_n|=n!$。我们用 $(1)$ 表示 $S_n$ 的恒等元。

**定义 (轮换与对换)** @9

设有 $\{1,2,\cdots,n\}$ 中的不同元素 $i_1,i_2,\cdots,i_d$，其中 $d\geqslant 2$。若 $n$-置换 $\sigma$ 满足 $\sigma(i_1)=i_2,\ \sigma(i_2)=i_3,\ \cdots,\ \sigma(i_d)=i_1$，且对于所有 $j\notin\{i_1,i_2,\cdots,i_d\}$，有 $\sigma(j)=j$，则称 $\sigma$ 为一个 $d$-轮换（$d$-cycle），并记作 $\sigma=(i_1i_2\cdots i_d)$。特别地，$2$-轮换通常被称为**对换**（transposition）。由定义我们看出一个 $d$-轮换的阶等于 $d$。

给定轮换 $\sigma=(i_1i_2\cdots i_d)$ 和 $\tau=(j_1j_2\cdots j_r)$，若 $\{i_1,i_2,\cdots,i_d\}\cap\{j_1,j_2,\cdots,j_r\}=\varnothing$，则称这两个轮换是**不相交的**。反之，则称它们为**相交的**。例如，轮换 $(123)$ 与 $(45)$ 是不相交的，而轮换 $(123)$ 与 $(12)$ 则是相交的。根据定义，容易验证若 $\sigma,\tau$ 为两个不相交的轮换，则有 $\sigma\tau=\tau\sigma$。但对于相交的轮换，可以轻易地找到不满足交换律的例子。比如在 $S_n\ (n\geqslant 3)$ 中，我们有$$(123)(12)=\begin{pmatrix}1&2&3\\3&2&1\end{pmatrix}=(13),$$$$(12)(123)=\begin{pmatrix}1&2&3\\1&3&2\end{pmatrix}=(23),$$

**注 (对称群的交换性)** @10

由上式知 $(123)(12)\neq(12)(123)$。特别地，当 $n\geqslant 3$ 时，$S_n$ 都不是 Abel 群。

**命题 2.1 (轮换分解)** @10

（轮换分解）对于任意非恒等元素 $\sigma\in S_n$，不考虑轮换出现的顺序，$\sigma$ 可唯一地表示为有限多个两两不相交的轮换之积，即 $\sigma=\prod\limits_{i=1}^{m}\sigma_i$，这里每个 $\sigma_i$ 为轮换，且对 $i\neq j$，$\sigma_i$ 与 $\sigma_j$ 互不相交。称这个分解为 $\sigma$ 的**轮换分解**。

对 $d\geqslant 2$，令 $\lambda_d$ 表示 $\sigma$ 的轮换分解式中的 $d$-轮换的个数，用 $\lambda_1$ 表示 $\sigma$ 的不动点的个数，即 $\lambda_1=|\{1\leqslant i\leqslant n\mid \sigma(i)=i\}|$。这时我们可以称 $\sigma$ 具有**轮换结构** $[1^{\lambda_1}2^{\lambda_2}\cdots n^{\lambda_n}]$，或者说 $\sigma$ 的**型**为 $[1^{\lambda_1}2^{\lambda_2}\cdots n^{\lambda_n}]$。由定义，每个 $\lambda_i$ 是一个非负整数，且 $n=\sum\limits_{i=1}^{n}i\cdot\lambda_i$。当某个 $\lambda_i=0$ 时，我们在表示 $\sigma$ 的型时通常会省略 $i^{\lambda_i}$ 这一项。

**例 1 (九元置换的轮换分解)** @10

考虑对称群 $S_9$ 中的置换$$\sigma=\begin{pmatrix}1&2&3&4&5&6&7&8&9\\4&3&9&7&8&6&1&5&2\end{pmatrix}.$$下面我们来计算 $\sigma$ 的轮换分解。首先，$1\to\sigma(1)=4$，然后 $4\to\sigma(4)=7$，$7\to\sigma(7)=1$，即 $1\to4\to7\to1$，故有 $3$-轮换 $(147)$；类似地，我们有 $2\to3\to9\to2$，故有 $3$-轮换 $(239)$；$5\to8\to5$，故有对换 $(58)$；$6\to6$ 即 $6$ 是 $\sigma$ 的不动点。因此我们得到 $\sigma$ 的轮换分解：$$\sigma=(147)(239)(58),$$进而 $\sigma$ 的型为 $[1^12^13^2]$。由于不相交的轮换的复合是交换的，由 $\sigma$ 的轮换分解我们可以计算 $\sigma$ 的阶等于 $6=\operatorname{lcm}(2,3,3)$。这里 $\operatorname{lcm}$ 表示最小公倍数。

**命题 2.2 (对换分解)** @11

在对称群 $S_n$ 中，任何 $d$-轮换可表示为 $d-1$ 个对换之积。任意 $n$-置换可表示为有限个对换之积。

**注 (对换分解的奇偶性)** @11

命题 2.2 中的对换分解并不是唯一的（见习题 1.2 第 7 题），然而，我们将看到该分解给出的对换的个数的奇偶性却是不变的。为了叙述得更加清晰，我们接下来引入奇（偶）置换的概念。

**定义 (奇偶置换)** @11

对任意 $\sigma\in S_n$，若有序列 $\sigma(1),\sigma(2),\cdots,\sigma(n)$ 是奇（偶）排列，我们称 $\sigma$ 为**奇（偶）置换**。按照定义，$\sigma$ 的奇偶性与排列 $\sigma(1)\sigma(2)\cdots\sigma(n)$ 的逆序数的奇偶性相同。我们记$$A_n\triangleq\{\sigma\in S_n\mid \sigma \text{ 为偶置换}\}.$$

**引理 2.3** @11

对任意 $\sigma\in S_n$，设 $1\leqslant i<j\leqslant n$，则 $\sigma\circ(ij)$ 与 $\sigma$ 的奇偶性相反。

**推论 2.4** @11

(1) 对 $n\geqslant 2$，$S_n$ 中奇、偶置换各占一半，$|A_n|=\dfrac{1}{2}n!$。

(2) 对任意 $\sigma\in S_n$，$\sigma$ 是奇（偶）置换当且仅当 $\sigma$ 可表示为奇（偶）数个对换之积。

(3) $A_n<S_n$。称 $A_n$ 为**交错群**（alternating group）。

**例 2 (三次对称群的子群)** @12

$S_3=\{(1),(12),(13),(23),(123),(132)\}$。通过观察可知，$S_3$ 所有的真子群为

(1) 平凡真子群：$\{(1)\}$；

(2) $2$ 阶子群：$\{(1),(12)\}$，$\{(1),(13)\}$，$\{(1),(23)\}$；

(3) $3$ 阶子群：$\{(1),(123),(132)\}$。

**例 3 (二面体群)** @12

平面上正 $n$ 边形的全等变换可以构成一个群，称为**二面体群**（dihedral group），记该群为 $D_n$。将 $n$ 个顶点依次编号为 $1,2,\cdots,n$，在 $D_n$ 的元素作用下，顶点对 $(1,2)$ 只可映为 $(1,2),(2,3),\cdots,(n,1)$；或 $(2,1),(3,2),\cdots,(1,n)$。注意到 $(1,2)$ 的映照方式可唯一确定 $D_n$ 中所有元素，故 $|D_n|=2n$。容易看出，当 $n\geqslant 3$ 时，$D_n$ 是非交换群，它是 $S_n$ 的一个子群。

### 1.3 陪集、正规子群、商群（p13–19）

**定义 (左陪集与右陪集)** @13

设 $G$ 是群，$H$ 是 $G$ 的子群。对 $a\in G$，定义$$aH\triangleq\{ah\mid h\in H\}.$$通常称 $aH$ 为 $H$ 的**左陪集** (left coset)，同理可定义**右陪集** (right coset)：$$Ha\triangleq\{ha\mid h\in H\}.$$

**引理 1.1 (陪集的基本性质)** @13

设 $G$ 是群，$H$ 是 $G$ 的子群，则对任意 $a,b\in G$，

(1) $aH\cap bH=\varnothing$ 或 $aH=bH$。特别地，存在子集 $S\subset G$ 使得$$G=\bigcup_{a\in G}aH=\coprod_{a'\in S}a'H,$$其中 $\coprod$ 表示无交并。

(2) $aH=bH$ 的充分必要条件是 $a^{-1}b\in H$。特别地，对每个 $c\in aH$，都有 $cH=aH$，我们称 $c$ 是左陪集 $aH$ 的一个**代表元**。

群 $G$ 可以写成若干互不相交的左陪集的并，这样 $H$ 按左陪集给出了 $G$ 的一个划分。上述性质对于右陪集也相应成立。

**定义 (左指数与右指数)** @14

设 $G$ 是群，$H<G$，定义 $G$ 关于 $H$ 的左指数和右指数为$$[G:H]_{l}\triangleq|\{aH\mid a\in G\}|,\qquad [G:H]_{r}\triangleq|\{Ha\mid a\in G\}|,$$其中 $|\cdot|$ 表示集合的基数 (cardinality)。

**引理 3.2 (左右指数相等)** @14

$[G:H]_{l}=[G:H]_{r}$。

从现在起，群 $G$ 关于子群 $H$ 的左、右指数统一记作 $[G:H]$，称其为 $G$ 关于 $H$ 的**指数** (index)。

**定理 3.3 (Lagrange 定理)** @14

如果 $G$ 是有限群，$H<G$，则$$[G:H]=\frac{|G|}{|H|}.$$

上式亦被称为 Lagrange 公式。

**推论 (阶与指数的整除性)** @14

关于有限群 $G$，Lagrange 定理有下列直接推论：

(1) 若 $H<G$，则 $|H|$ 是 $|G|$ 的因子；

(2) 对任意 $a\in G$，设 $H=\langle a\rangle$，则 $|H|=o(a)$，故 $o(a)$ 必定是 $|G|$ 的因子；

(3) 如果 $|G|=p$ 为素数，对任意 $a\in G$ 且 $a\neq e$，必有 $G=\langle a\rangle$，因为循环子群 $\langle a\rangle$ 的阶数只能为 $p$。特别地，$G$ 是一个循环群。

**定义 (子集的乘积与逆)** @14

设 $H$ 和 $K$ 为群 $G$ 的子集，定义$$HK\triangleq\{hk\mid h\in H,\ k\in K\},\qquad H^{-1}\triangleq\{h^{-1}\mid h\in H\}.$$

根据此符号约定，群 $G$ 的一个子集 $H$ 为子群当且仅当$$HH^{-1}=H.$$

**引理 3.4 (子集运算的规则)** @15

设 $H,K,J$ 是群 $G$ 的子集，则有

(1) $(HK)J=H(KJ)$；

(2) $(HK)^{-1}=K^{-1}H^{-1}$。

**命题 3.5 (子群乘积的条件)** @15

设 $G$ 是群，$H<G$，$K<G$。则下列命题等价：

(1) $HK<G$；

(2) $HK=KH$；

(3) $KH<G$。

**命题 3.6 (子群乘积的阶)** @15

设 $G$ 是群，$H$，$K$ 均为 $G$ 的有限子群，则$$|HK|=\frac{|H|\cdot|K|}{|H\cap K|}.$$

**定义 (正规子群)** @16

设 $G$ 是群，$H<G$。若对任意 $a\in G$，$h\in H$，都有 $a^{-1}ha\in H$，则称 $H$ 是 $G$ 的**正规子群** (normal subgroup)，记作 $H\triangleleft G$。

**命题 3.7 (商群)** @16

设 $H$ 是群 $G$ 的正规子群，则 $(G/H,*)$ 构成一个群，称为 $G$ 关于 $H$ 的**商群**，通常简记为 $G/H$；它的恒等元是 $H$，对 $aH\in G/H$，其逆元 $(aH)^{-1}=a^{-1}H$。

其中 $G/H=\{aH\mid a\in G\}$ 为 $H$ 所有不同左陪集所组成的集合，乘法 $*$ 由 $G$ 自然诱导：对任意 $a_{1},a_{2}\in G$，$$(a_{1}H)*(a_{2}H)=(a_{1}a_{2})H.$$该运算有意义是指它不依赖于陪集代表元的选取。

**命题 3.8 (正规子群的等价条件)** @16

设 $G$ 为群，$H<G$，则下列命题等价：

(1) $H\triangleleft G$。

(2) 对任意 $a\in G$，$a^{-1}Ha=H$。

(3) 对任意 $a\in G$，$aH=Ha$。

(4) 对任意 $a\in G$，$aH\subset Ha$。

(5) 对任意 $a\in G$，$Ha\subset aH$。

**例 1 (平凡子群与 S3 的反例)** @17

平凡子群 $\{e\}$ 与 $G$ 是 $G$ 的正规子群。另一方面，并非所有子群都是正规子群。比如在 $S_{3}$ 中，考察子群 $H=\{(1),(12)\}$，因 $(23)^{-1}(12)(23)=(13)\notin H$，故 $H$ 不是 $G$ 的正规子群。

**例 2 (Abel 群的子群)** @17

Abel 群的每个子群都是正规子群。我们有下面的例子：

(1) $m\mathbb{Z}\triangleleft(\mathbb{Z},+)$，$\mathbb{Z}/m\mathbb{Z}=\{m\mathbb{Z},1+m\mathbb{Z},\cdots,(m-1)+m\mathbb{Z}\}$。读者可以对比 1.1 节例 2 中定义的群 $(\mathbb{Z}_{m},+)$。

(2) $(\mathbb{Z},+)\triangleleft(\mathbb{Q},+)$，$\mathbb{Q}/\mathbb{Z}=\left\{\frac{a}{b}+\mathbb{Z}\ \middle|\ \frac{a}{b}\in\mathbb{Q}\right\}$。这是一个无限群，但其每个元素都是有限阶的。

**例 3 (常见的正规子群)** @17

(1) 若 $H$ 是 $G$ 中指数为 $2$ 的子群，则 $H\triangleleft G$。事实上，对任意 $a\notin H$，$G=H\amalg aH=H\amalg Ha$，故对任意 $b\in G$，$bH=Hb$，因此 $H\triangleleft G$。特别地，对 $n\geqslant 2$，$A_{n}\triangleleft S_{n}$。

(2) $G$ 的中心 $C(G)\triangleleft G$。

**例 4 (正规化子)** @17

设 $H<G$，令$$N_{G}(H)=\{x\in G\mid x^{-1}Hx=H\},$$$N_{G}(H)$ 称为 $H$ 在 $G$ 中的**正规化子** (normalizer)。可以看出 $N_{G}(H)<G$，此外显然有 $H\triangleleft N_{G}(H)$。

**例 5 (生成子群的正规性)** @17

设 $S$ 为群 $G$ 的一个非空子集，满足：对任意 $a\in G$，$s\in S$，有 $a^{-1}sa\in S$，则 $\langle S\rangle\triangleleft G$。特别地，若取 $S_{0}=\{x^{-1}y^{-1}xy\mid x,y\in G\}$，记 $[G,G]\triangleq\langle S_{0}\rangle$，我们称 $[G,G]$ 为 $G$ 的**换位子群**。当然有 $[G,G]\triangleleft G$，这是群论中一个重要的正规子群。

**命题 3.9 (换位子群与交换商群)** @18

设 $G$ 是群，则

(1) $G/[G,G]$ 是 Abel 群。

(2) 若 $H\triangleleft G$ 使得 $G/H$ 为 Abel 群，则 $[G,G]\subset H$。

上述命题说明换位子群是使得商群为交换群的最小正规子群。

**定义 (共轭)** @18

设 $G$ 是群，$a,b\in G$，若存在 $g\in G$ 使得 $b=g^{-1}ag$，则称 $a$ 与 $b$ 是**共轭的** (conjugate)；称 $b$ 是 $a$ 的一个**共轭元**。

当 $G=\mathrm{GL}_{n}(\mathbb{C})$ 时，$A,B\in\mathrm{GL}_{n}(\mathbb{C})$ 是共轭的，与高等代数课上所定义的 $A,B$ 是相似的是相同的。

**例 6 (共轭元的个数)** @18

设群 $G$ 的换位子群 $[G,G]$ 为 $m$ 阶群，$a\in G$，记 $T_{a}=\{g^{-1}ag\mid g\in G\}$ 是 $a$ 的所有共轭元的集合。则 $|T_{a}|\leqslant m$，即与 $a$ 共轭的元素至多有 $m$ 个。

### 1.4 单群、交错群（p20–23）

**定义 (单群)** @20

如果群 $G\neq\{e\}$ 且除 $\{e\}$ 和 $G$ 外没有其他正规子群，则称 $G$ 为**单群**（simple group）。

**例 1 (最简单的单群实例)** @20

(1) 对素数 $p$，$p$ 阶群必为单群。

(2) $(\mathbb{Z},+)$ 不是单群，对任意正整数 $m$，$m\mathbb{Z}$ 均为正规子群。

(3) 对称群 $S_2$ 是单群。对 $n\geqslant 3$，$A_n\triangleleft S_n$，$|A_n|=\dfrac{n!}{2}>1$，故当 $n\geqslant 3$ 时，$S_n$ 不是单群。

**注 (有限单群的分类)** @20

有限单群的分类工作于 2008 年完成，它是数学史上的一个重要里程碑。本节的一个主要目的是弄清楚交错群 $A_n$ 何时为单群。

**引理 4.1 (共轭的轮换型)** @20

对 $n\geqslant 2$，$1\leqslant r\leqslant n$，设 $\sigma=(i_1i_2\cdots i_r)\in S_n$，则对任意的 $\tau\in S_n$，有$$\tau\sigma\tau^{-1}=(\tau(i_1)\tau(i_2)\cdots\tau(i_r)).$$

**引理 4.2 (交错群的生成元)** @20

对 $n\geqslant 2$，下列命题成立：

(1) $S_n=\langle(12),(13),\cdots,(1n)\rangle=\langle(12),(12\cdots n)\rangle$。

(2) 如果 $n\geqslant 3$，那么 $A_n=\langle(123),(124),\cdots,(12n)\rangle$。

**定理 4.3 (交错群的单性)** @21

由定义，$A_1=A_2=\{(1)\}$。设 $n\geqslant 3$，对交错群 $A_n$：

(1) $A_4$ 不是单群；

(2) 当 $n\geqslant 3$ 且 $n\neq 4$ 时，$A_n$ 是单群。

### 1.5 群同态与同构（p24–30）

**定义 (群同态与同构)** @24

设 $G_1,G_2$ 是群，$f:G_1\to G_2$ 为映射。若对任意的 $a,b\in G_1$，$f(ab)=f(a)f(b)$，则称 $f$ 为**群同态**（homomorphism）。若 $f:G_1\to G_2$ 为群同态且是双射（bijection），则称 $f$ 为**群同构**（isomorphism），记为 $G_1\cong G_2$。若群同态 $f:G_1\to G_2$ 作为映射是单（满）的，则称 $f$ 是**单（满）同态**。

**注 (同构的等价刻画)** @24

若 $f:G_1\to G_2$ 为群同态，则可证明（见本节习题）：$f$ 为群同构当且仅当存在同态 $g:G_2\to G_1$ 使得 $g\circ f=\mathrm{id}_{G_1}$，$f\circ g=\mathrm{id}_{G_2}$。

**例 1 (常见群同态)** @24

(1) 若 $H\triangleleft G$，则 $j:G\to G/H$（$g\mapsto gH$）是满同态。

(2) 指数映射 $\exp:\mathbb{Z}\to\mathbb{R}^{*}$，$\exp(m)=e^{m}$，$\forall m\in\mathbb{Z}$，这是一个单同态。

(3) 记

$$ H=\left\{\begin{pmatrix}a&b\\-b&a\end{pmatrix}\Biggm| a,b\in\mathbb{R},\ a^{2}+b^{2}\neq 0\right\}\quad(< \mathrm{GL}_2(\mathbb{R})), $$

定义映射 $\theta:\mathbb{C}^{*}\to H$，$\theta(a+b\mathrm{i})=\begin{pmatrix}a&b\\-b&a\end{pmatrix}\in H$。可以验证 $\theta$ 是群同态，而且是双射。因此，$\theta$ 是群同构。

(4) 设 $G$ 为群，定义

$$ \mathrm{Aut}(G)=\{f:G\to G\mid f\text{ 是群同构}\}, $$

$f\in\mathrm{Aut}(G)$ 称为群 $G$ 的**自同构**（automorphism），$\mathrm{Aut}(G)$ 按照映射的复合运算构成群，其恒等元为恒等映射，逆映射即为群中的逆元。$\mathrm{Aut}(G)$ 称为群 $G$ 的**自同构群**。

**注 (同态保持单位元与逆元)** @24

若 $f:G_1\to G_2$ 为群同态，则 $f(e_1)=f(e_1\cdot e_1)=f(e_1)\cdot f(e_1)$，故 $f(e_1)=e_2$。又因 $f(a)\cdot f(a^{-1})=f(a\cdot a^{-1})=f(e_1)=e_2$，故 $f(a^{-1})=f(a)^{-1}$。

**定义 (内自同构)** @24

对任意 $g\in G$，作映射 $\theta_g:G\to G$ 使 $\theta_g(x)=g^{-1}xg$，$\forall x\in G$。则对任意 $y\in G$，

$$ \theta_g(xy)=g^{-1}xyg=(g^{-1}xg)(g^{-1}yg)=\theta_g(x)\theta_g(y), $$

故 $\theta_g$ 为群同态。因为 $\theta_{g^{-1}}$ 为 $\theta_g$ 的逆映射，$\theta_g$ 为同构，故 $\theta_g\in\mathrm{Aut}(G)$。若 $g\in C(G)$，则 $\theta_g=\mathrm{id}_G$。通常称 $\theta_g$ 为**内自同构**（inner automorphism）。记

$$ \mathrm{Inn}(G)=\{\theta_g\mid g\in G\} $$

为内自同构的全体，$\mathrm{Inn}(G)\subset\mathrm{Aut}(G)$。

**引理 5.1 (内自同构群正规)** @25

$\mathrm{Inn}(G)\triangleleft\mathrm{Aut}(G)$。

**定义 (同态的核与像)** @25

设 $f:G_1\to G_2$ 为群同态，定义 $f$ 的**核**（kernel）和**像**（image）为

$$ \mathrm{Ker}\,f=\{x\in G_1\mid f(x)=e_2\},\qquad \mathrm{Im}\,f=\{f(x)\mid x\in G_1\}. $$

由定义可知，$\mathrm{Ker}\,f\triangleleft G_1$，$\mathrm{Im}\,f<G_2$，但 $\mathrm{Im}\,f$ 不一定是 $G_2$ 的正规子群（见本节习题）。

**定理 5.2 (同态基本定理)** @25

设 $f:G_1\to G_2$ 为群同态，它自然诱导了一个群同构

$$ \mathrm{Im}\,f\cong G_1/\mathrm{Ker}\,f. $$

**例 2 (循环群的结构)** @26

设 $G=\langle g\rangle$，总可作群同态 $f:(\mathbb{Z},+)\to G$ 使得对任意 $m\in\mathbb{Z}$，$f(m)=g^{m}$。$f$ 是满同态，根据定理 5.2，$G\cong\mathbb{Z}/\mathrm{Ker}\,f$。作为 $\mathbb{Z}$ 的子群，存在 $n\geqslant 0$，使得 $\mathrm{Ker}\,f=n\mathbb{Z}$。如果 $n=0$，则 $G\cong\mathbb{Z}$。如果 $n\neq 0$，则 $G\cong\mathbb{Z}/n\mathbb{Z}\cong\mathbb{Z}_n$。

**例 3 (内自同构群的结构)** @26

设 $G$ 是群，作映射 $\varphi:G\to\mathrm{Inn}(G)$ 使 $\varphi(g)=\theta_{g^{-1}}\in\mathrm{Inn}(G)$，$\forall g\in G$。则对任意 $g_1,g_2\in G$ 及任意 $x\in G$，总有

$$ \begin{aligned} \varphi(g_1g_2)(x)&=\theta_{(g_1g_2)^{-1}}(x)=(g_1g_2)x(g_1g_2)^{-1}=g_1(g_2xg_2^{-1})g_1^{-1}\\ &=\theta_{g_1^{-1}}\bigl(\theta_{g_2^{-1}}(x)\bigr)=\bigl(\varphi(g_1)\varphi(g_2)\bigr)(x), \end{aligned} $$

所以 $\varphi$ 是群同态且 $\varphi$ 是满的。注意到 $K=\mathrm{Ker}\,\varphi=\{g\in G\mid \theta_{g^{-1}}=\mathrm{id}_G\}=C(G)$，故 $\mathrm{Inn}(G)\cong G/C(G)$。

**定理 5.3 (子群对应定理)** @26

设 $G$ 是群，$H\triangleleft G$，$j:G\to G/H$ 为自然同态。令

$$ \Gamma_1\triangleq\{H_1<G\mid H\subset H_1\},\qquad \Gamma_2\triangleq\{\bar H_2\mid \bar H_2<G/H\}, $$

则 $j$ 可以诱导 $\Gamma_1$ 和 $\Gamma_2$ 之间的一一对应。

**例 4 (循环群的子群)** @27

设 $n>1$ 是正整数，下面我们用子群对应定理 5.3 来确定 $\mathbb{Z}/n\mathbb{Z}$ 的子群。我们有商同态 $j:\mathbb{Z}\to\mathbb{Z}/n\mathbb{Z}$。由习题 1.1 第 1 题，$(\mathbb{Z},+)$ 的所有子群是 $m\mathbb{Z}=\{mt\mid t\in\mathbb{Z}\}$，$m\in\mathbb{Z}_{\geqslant 0}$。设 $m\mathbb{Z}$ 是 $\mathbb{Z}$ 的子群，则 $n\mathbb{Z}\subset m\mathbb{Z}$ 当且仅当 $m\mid n$。由定理 5.3，$\mathbb{Z}/n\mathbb{Z}$ 的子群是

$$ T_m=\left\{0+n\mathbb{Z},\ m+n\mathbb{Z},\ 2m+n\mathbb{Z},\ \cdots,\ \left(\frac{n}{m}-1\right)m+n\mathbb{Z}\right\}. $$

这里 $m\mid n$ 取遍 $n$ 的正因子。由定义可知，每个 $T_m=\langle m+n\mathbb{Z}\rangle$ 是 $\frac{n}{m}$ 阶循环群。

**定理 5.4 (第一同构定理)** @27

设 $G$ 是群，$H\triangleleft G$，$N\triangleleft G$ 且 $H\subset N$，则 $H\triangleleft N$，$N/H\triangleleft G/H$ 且

$$ (G/H)/(N/H)\cong G/N. $$

**定理 5.5 (第二同构定理)** @27

设 $G$ 是群，$H\triangleleft G$，$K<G$，则 $HK<G$，$H\triangleleft HK$，$H\cap K\triangleleft K$ 且

$$ HK/H\cong K/(H\cap K). $$

**例 5 (互素阶与正规子群)** @27

设 $N\triangleleft G$，$[G:N]<+\infty$，$H<G$ 且 $H$ 是有限群。若 $[G:N]$ 和 $|H|$ 互素，则 $H<N$。

**例 6 (循环群的自同构群)** @28

设 $G=\langle a\rangle$ 为 $n$ 阶循环群，求 $\mathrm{Aut}(G)$。

对任意 $\sigma\in\mathrm{Aut}(G)$，$\sigma$ 由 $\sigma(a)=a^{m}$，$0<m<n$ 完全确定。由于 $\sigma$ 是自同构，必有 $o(a^{m})=o(\sigma(a))=o(a)=n$。若 $\gcd(m,n)=d>1$，则 $m=dm_1$，$n=dn_1$，$(a^{m})^{n_1}=a^{dm_1n_1}=(a^{n})^{m_1}=e$，故 $o(a^{m})\leqslant n_1<n$，矛盾！故 $\gcd(m,n)=1$。

反之，若 $\gcd(m,n)=1$，定义同态 $\sigma_m:G\to G$，使得 $\sigma_m(a)=a^{m}$，则对 $k\in\mathbb{Z}$，$\sigma_m(a^{k})=a^{mk}$。若 $\sigma_m(a^{k})=e$，则 $n\mid km$，故 $n\mid k$，$a^{k}=e$，故 $\sigma_m$ 是单射，进而双射，故 $\sigma_m\in\mathrm{Aut}(G)$。

记 $\mathbb{Z}_n^{*}=\{t\in\mathbb{Z}\mid 0<t<n,\ \gcd(t,n)=1\}$，$\mathbb{Z}_n^{*}$ 在模 $n$ 乘法下构成群。上述讨论表明映射 $\theta:\mathbb{Z}_n^{*}\to\mathrm{Aut}(G)$ 是双射，其中对任意 $m\in\mathbb{Z}_n^{*}$，$\theta(m)=\sigma_m$，又对任意 $s,t\in\mathbb{Z}_n^{*}$，$\sigma_{st}(a^{k})=a^{kst}=\sigma_s\bigl(\sigma_t(a^{k})\bigr)$，所以 $\theta$ 是群同构。故 $\mathrm{Aut}(G)\cong\mathbb{Z}_n^{*}$。

我们知道 $|\mathbb{Z}_n^{*}|=\varphi(n)$。由 Lagrange 定理，对 $\bar m\in\mathbb{Z}_n^{*}$，有 $\bar m^{\varphi(n)}=\bar 1$，也即 $m^{\varphi(n)}\equiv 1\pmod n$。此即著名的 Euler 定理。

**例 7 (自同构的不动点)** @28

设 $G$ 为群，$\varphi\in\mathrm{Aut}(G)$，且对任意 $a\in G$，$\varphi(a)=a$ 当且仅当 $a=e$。试证明：

(1) 映射 $\theta:G\to G$ 为单射，这里 $\theta(a)\triangleq\varphi(a)\cdot a^{-1}$，$\forall a\in G$。若 $|G|<+\infty$，则 $G$ 中任意元素都形如 $\varphi(a)\cdot a^{-1}$。

(2) 设 $|G|<+\infty$。已知 $\varphi^{2}=\mathrm{id}_G$，则 $G$ 为奇数阶 Abel 群。

**例 8 (极大正规子群)** @28

设 $G$ 是群，$H\triangleleft G$ 且 $H\neq G$。如果对任意满足 $H<H'<G$ 的真子群 $H'$，总有 $H'=H$，那么称 $H$ 为 $G$ 的**极大正规子群**。如果 $H\triangleleft G$，证明 $H$ 是 $G$ 的极大正规子群的充分必要条件是 $G/H$ 为单群。

### 1.6 群的直积（p31–35）

**定义 (外直积的定义)** @31

设 $G_1,\cdots,G_n$ 为群，其笛卡儿积为$$G\triangleq G_1\times\cdots\times G_n=\{(g_1,\cdots,g_n)\mid g_i\in G_i,\ 1\leqslant i\leqslant n\}.$$在 $G$ 上有一个自然的乘法运算：对任意 $(a_1,\cdots,a_n),(b_1,\cdots,b_n)\in G$，定义$$(a_1,\cdots,a_n)(b_1,\cdots,b_n)\triangleq(a_1b_1,\cdots,a_nb_n).$$此运算满足结合律，且存在恒等元 $e_G=(e_1,\cdots,e_n)$，其中 $e_i$ 是 $G_i$ 的恒等元．对任意元素 $(a_1,\cdots,a_n)\in G$，其逆元为 $(a_1^{-1},\cdots,a_n^{-1})$．因此 $G$ 构成一个群，称为 $G_1,\cdots,G_n$ 的**外直积**（external direct product）．

对 $i=1,2,\cdots,n$，定义映射 $j_i:G_i\to G$ 使对任意 $a\in G_i$，$j_i(a)\triangleq(e_1,\cdots,a,\cdots,e_n)$，即 $j_i(a)$ 的第 $i$ 个位置上的元素为 $a$，其余位置为各群的恒等元，则 $j_i$ 为单同态．定义第 $i$ 个投影映射 $p_i:G\to G_i$ 使 $p_i(a_1,\cdots,a_n)=a_i$，则 $p_i$ 是满同态．记 $H_i=j_i(G_i)\lhd G$．

**注 (外直积的性质)** @31

上述外直积结构有如下性质：

(1) 对 $1\leqslant i\leqslant n$，$p_i\circ j_i=\mathrm{id}_{G_i}$．

(2) 对 $i_1\neq i_2$，$H_{i_1}$ 与 $H_{i_2}$ 中元素可交换相乘．事实上，对 $x\in G_{i_1}$，$y\in G_{i_2}$，$$j_{i_1}(x)j_{i_2}(y)=j_{i_2}(y)j_{i_1}(x)=(e_1,\cdots,x,\cdots,y,\cdots,e_n),$$其中第 $i_1$ 个位置上的元素为 $x$，第 $i_2$ 个位置上的元素为 $y$，其余位置为各相应群的恒等元．

(3) 对 $1\leqslant i\leqslant n$，$H_i\lhd G$．事实上，对任意 $g=(a_1,\cdots,a_n)\in G$ 及任意 $x_i\in H_i$，$$g^{-1}j_i(x_i)g=(a_1^{-1}a_1,\cdots,a_i^{-1}x_ia_i,\cdots,a_n^{-1}a_n)=(e_1,\cdots,a_i^{-1}x_ia_i,\cdots,e_n)\in H_i.$$

(4) $G=H_1H_2\cdots H_n$．对任意 $g=(a_1,\cdots,a_n)\in G$，$g=j_1(a_1)\cdots j_n(a_n)\in H_1\cdots H_n$．

(5) 对 $1\leqslant i\leqslant n$，$H_i\cap(H_1\cdots\hat{H}_i\cdots H_n)=\{e_G\}$，其中 $\hat{H}_i$ 表示乘积中不含 $H_i$ 项．

(6) 群 $G$ 中元素表示为 $H_1,H_2,\cdots,H_n$ 之积的表示法唯一，即如果 $g=h_1\cdots h_n=h_1'\cdots h_n'$，其中对每个 $i$，$h_i,h_i'\in H_i$，那么 $h_i=h_i'$．

**定义 (内直积的定义)** @32

设 $G$ 是群，设对 $1\leqslant i\leqslant n$，$H_i\lhd G$ 且 $H_i\cap(H_1\cdots\hat{H}_i\cdots H_n)=\{e_G\}$．若 $G=H_1H_2\cdots H_n$，则称 $G$ 为子群 $H_1,\cdots,H_n$ 的**内直积**（internal direct product）．

**定理 6.1 (外直积与内直积)** @32

设 $G,G_1,\cdots,G_n$ 是群，则 $G\cong G_1\times\cdots\times G_n$（外直积）的充分必要条件是对任意 $i=1,\cdots,n$，存在正规子群 $H_i\lhd G$，使得 $H_i\cong G_i$ 且 $G$ 是 $H_1,\cdots,H_n$ 的内直积．

**注 (直和的记号)** @32

如果 $G$ 是一个加法群，我们通常将直积叫做**直和**，用记号 $\oplus$ 表示，例如 $G=\bigoplus_{i=1}^{n}G_i$．

**例 1 (内直积的等价刻画)** @32

设 $G$ 是群，$H_1,\cdots,H_n<G$，则 $G$ 是 $H_1,\cdots,H_n$ 的内直积的充分必要条件是对 $i\neq j$，$H_i$ 和 $H_j$ 乘法可交换，且映射 $\varphi:\prod_{i=1}^{n}H_i\to G$ 是双射，其中对任意 $(a_1,\cdots,a_n)\in\prod_{i=1}^{n}H_i$，$\varphi(a_1,\cdots,a_n)=a_1a_2\cdots a_n$．

**例 2 (四元群的分类)** @33

只有两种不同构的四元群，即 $\mathbb{Z}_4$ 和 $\mathbb{Z}_2\oplus\mathbb{Z}_2$．

### 1.7 群在集合上的作用（p36–42）

**定义 (群作用)** @36

设 $G$ 为群，$X$ 为非空集合。设有一个映射 $\sigma:G\times X\to X$，若 $\sigma$ 满足以下两个条件：

(1) 对任意 $x\in X$，$\sigma(e,x)=x$；

(2) 对任意 $g,h\in G$，$x\in X$，总有 $\sigma(gh,x)=\sigma(g,\sigma(h,x))$，

则称 $\sigma$ 是 $G$ 在集合 $X$ 上的一个作用。为便于表示，通常采用简写形式 $g\cdot x\triangleq\sigma(g,x)$。

**例 1** @36

(1) 设群 $G$ 作用于集合 $X$。如果对任意的 $g\in G$，$x\in X$，都有 $g\cdot x=x$，那么称此作用是平凡作用。

(2) 群 $G$ 可以自然地左乘作用于自身：

$$ G\times G\to G,\qquad (g,x)\mapsto gx. $$

(3) 群 $G$ 可以共轭地作用于自身，即有映射

$$ *:G\times G\to G,\qquad (g,x)\mapsto g*x\triangleq gxg^{-1}. $$

这是一个群作用，因为 $e*x=x$ 并且

$$ (g_1g_2)*x=(g_1g_2)x(g_1g_2)^{-1}=g_1(g_2xg_2^{-1})g_1^{-1}=g_1*(g_2*x). $$

(4) 若 $H<G$，则 $G$ 有在集合 $G/H=\{aH\mid a\in G\}$ 上的如下作用：$g\cdot aH=(ga)H$。若对任意 $a,a'\in G$，$aH=a'H$，即 $a^{-1}a'\in H$，那么 $(ga)^{-1}(ga')=a^{-1}g^{-1}ga'=a^{-1}a'\in H$，故 $(ga)H=(ga')H$，这是一个有意义的映射。另一方面，对任意 $g_1,g_2,a\in G$，总有 $(g_1g_2)aH=g_1(g_2a)H$。

**命题 7.1** @37

设 $G$ 是群，$X$ 是集合。

(1) 若 $\sigma:G\times X\to X$ 是一个群作用，则映射

$$ \rho_\sigma:G\to S_X,\qquad g\mapsto(x\mapsto g\cdot x) $$

是一个群同态，且 $G=\operatorname{Ker}\rho_\sigma$ 当且仅当 $\sigma$ 是平凡作用。

(2) 若 $\rho:G\to S_X$ 是同态，则

$$ \tilde{\rho}:G\times X\to X,\qquad (g,x)\mapsto\rho(g)(x) $$

是一个群作用。

**例 2** @38

设 $G$ 为群，$H<G$，$[G:H]=n$。若 $H$ 不含 $G$ 的任何非平凡正规子群，则 $G$ 同构于 $S_n$ 的某个子群。

**定义 (轨道与稳定子)** @38

设群 $G$ 作用于集合 $X$。对任意 $x\in X$，集合

$$ Gx\triangleq\{g\cdot x\mid g\in G\}\subseteq X $$

称为经过 $x$ 的轨道（orbit）；集合

$$ \operatorname{Stab}(x)\triangleq\{g\in G\mid g\cdot x=x\} $$

称为 $x$ 的稳定子（stabilizer）。只有一条轨道的作用称为是可迁的（transitive）。

**例 3** @38

(1) 非平凡 Abel 群 $G$ 上的共轭作用不可迁，且对任意 $x\in G$，$\operatorname{Stab}(x)=G$。

(2) $S_n$ 可迁地作用于 $X=\{x_1,x_2,\cdots,x_n\}$。

(3) $\mathrm{GL}_n(K)$ 在 $V=K^n$ 上作用不可迁：设 $0\in V$ 是零向量，由于对任意 $A\in\mathrm{GL}_n(K)$，$A\cdot 0=0$，故 $\{0\}$ 是单点轨道。

**命题 7.2** @39

设群 $G$ 作用于集合 $X$。对于任意 $x\in X$，有

(1) $\operatorname{Stab}(x)<G$ 是一个子群；

(2) 轨道 $Gx$ 与稳定子群 $\operatorname{Stab}(x)$ 的所有陪集全体 $G/\operatorname{Stab}(x)$ 有一一对应的关系。特别地，若 $Gx$ 为有限集，则 $|Gx|=[G:\operatorname{Stab}(x)]$。

**例 4** @39

设 $H$ 为有限群 $G$ 的一个子群。记 $X=\{gHg^{-1}\mid g\in G\}$ 是 $H$ 的共轭子群的集合。$G$ 共轭作用在 $X$ 上：

$$ G\times X\to X,\qquad (g,T)\mapsto gTg^{-1}. $$

由定义可以验证这是一个可迁作用。$H\in X$，且 $\operatorname{Stab}(H)=\{g\in G\mid gHg^{-1}=H\}=N_G(H)$。因此，$|X|=[G:N_G(H)]=|G|/|N_G(H)|$。

**定理 7.3 (群作用的轨道计算公式)** @39

群 $G$ 在集合 $X$ 上的作用的所有轨道给出集合 $X$ 的一个划分，即 $X$ 可以写成一些不相交轨道的并集。若 $X$ 为有限集，设 $Gx_i$（$1\leqslant i\leqslant n$）为该群作用下的全部不同轨道，则有

$$ |X|=\sum_{i=1}^{n}|Gx_i|=\sum_{i=1}^{n}[G:\operatorname{Stab}(x_i)]. $$

**例 5 (共轭类方程)** @40

考虑 $G$ 在自身上的共轭作用

$$ g\cdot a=gag^{-1},\qquad \forall g,a\in G. $$

对任意 $a\in G$，其稳定子群为

$$ \operatorname{Stab}(a)=\{g\in G\mid g\cdot a=gag^{-1}=a\}=C_G(a), $$

并且我们有 $G=\operatorname{Stab}(a)$ 当且仅当 $a\in C(G)$。若 $G$ 为有限群，我们可以通过共轭作用的轨道计算公式给出下面的共轭类方程

$$ |G|=|C(G)|+\sum_{i=1}^{m}[G:\operatorname{Stab}(x_i)], \tag{1.3} $$

这里 $x_i\notin C(G)$ 在不同的共轭类中。特别地，设 $G$ 是有限群，对 $a\in G$，记 $T_a=\{gag^{-1}\mid g\in G\}$ 是 $a$ 所在的共轭类，则 $T_a$ 是上述共轭作用的一条轨道。因此，我们有

$$ |T_a|=[G:\operatorname{Stab}(a)]=[G:C_G(a)]. $$

**例 6** @40

设 $p$ 为素数。如果 $|G|=p^m$，$m>0$，那么通常称 $G$ 为 $p$-群。证明：群 $G$ 的中心 $C(G)$ 满足：$|C(G)|\neq 1$。

**例 7** @40

$p^2$ 阶群必是 Abel 群。

**例 8** @40

设 $\gamma=(12\cdots n)\in S_n$。证明：$\gamma$ 的共轭类集合 $T=\{\sigma\gamma\sigma^{-1}\mid\sigma\in S_n\}$ 满足 $|T|=(n-1)!$ 且 $C_{S_n}(\gamma)=\langle\gamma\rangle$。

### 1.8 Sylow 子群和 Sylow 定理（p43–48）

**例 1** @43

设 $n\geqslant 5$，考虑交错群 $A_n$，我们有 $\lvert A_n\rvert=\frac{1}{2}n!$。由于 $A_n$ 是单群，$A_n$ 中肯定没有阶为 $\frac{1}{4}n!$ 的子群。

**定义 (Sylow p-子群)** @43

设 $\lvert G\rvert=p^rs$，其中 $p$ 是素数，$r>0$，$s>1$，$p\nmid s$。$G$ 中的一个 $p^r$ 阶子群称为 $G$ 的一个 **Sylow $p$-子群**。

**引理 8.1** @43

设 $n=p^rs$，其中 $p$ 是素数，$r>0$，$s>1$，$p\nmid s$，则$$\binom{n}{p^r}\equiv s\pmod p.$$

**定义 (共轭子群)** @43

设 $G$ 为群，$H<G$，$a\in G$，则从定义直接可知 $aHa^{-1}<G$，我们称 $aHa^{-1}$ 与 $H$ **共轭**。

**定理 8.2 (Sylow 定理)** @44

设 $G$ 为有限群，$\lvert G\rvert=p^rs$，其中 $p$ 是素数，$r>0$，$s>1$，$p\nmid s$。则

(1) $G$ 中存在 Sylow $p$-子群。

(2) 设 $m$ 是 $G$ 中 Sylow $p$-子群的个数，则 $m\equiv 1\pmod p$。

(3) $G$ 中任意两个 Sylow $p$-子群互相共轭。

(4) 设 $P$ 是一个 Sylow $p$-子群，则 $m=[G:N_G(P)]$ 且 $m\mid s$。

**注 (p-子群的嵌入)** @45

定理 8.2 的证明蕴含如下结论：$G$ 的任一 $p$-子群都包含于某个 Sylow $p$-子群中。特别地，如果 $m=1$，那么这个唯一的 Sylow $p$-子群恰为 $G$ 的正规子群，这样的群 $G$ 一定不是单群。

**例 2 (Cauchy 定理)** @45

设 $p$ 是素数，如果群 $G$ 的阶可以被 $p$ 整除，那么 $G$ 中必有 $p$ 阶元。

**例 3 (十阶群)** @45

讨论 10 阶群中 Sylow 2-子群、Sylow 5-子群的个数。

解：$10=2\cdot 5$，由同余性条件，$m_2=1$ 或 $5$，$m_5=1$。

(1) 如果 $m_2=1$，$G$ 有唯一的 Sylow 2-子群 $H_2$ 和 Sylow 5-子群 $H_5$。于是 $H_2\cap H_5=\{e\}$，$\lvert H_2H_5\rvert=\dfrac{\lvert H_2\rvert\lvert H_5\rvert}{\lvert H_2\cap H_5\rvert}=10$，故 $G=H_2\cdot H_5$ 为内直积，即 $G\cong \mathbb{Z}_2\oplus\mathbb{Z}_5$。

(2) 如果 $m_2=5$，这种情形是可能出现的。比如，二面体群 $D_5$ 是非交换群，是平面上正五边形的对称群。沿正五边形的 5 条对称轴翻转给出了 5 个对合，分别生成了 $D_5$ 的五个 Sylow 2-子群。

事实上，可以证明 10 阶群只有两个同构类：$\mathbb{Z}_2\oplus\mathbb{Z}_5$ 和 $D_5$。

**注 (Sylow 子群唯一判据)** @46

如果 $\lvert G\rvert=p^rs$（$p$ 是素数，$r>0$，$s>1$，$p\nmid s$）且 $p>s$，那么 $m_p=1$，即 $G$ 有唯一的 Sylow $p$-子群 $H_p$，且 $H_p$ 为 $G$ 的正规子群。

**例 4 (7225 阶群)** @46

证明 $7225=5^2\cdot 17^2$ 阶群必为 Abel 群。

**例 5 (77 阶商群)** @46

设 $G$ 为群，证明 $\lvert G/C(G)\rvert\neq 77$。

**例 6 (Sylow 子群内直积)** @46

设 $G$ 是有限群，如果对 $\lvert G\rvert$ 的每个素因子 $p$，$G$ 的 Sylow $p$-子群均唯一，那么 $G$ 是其所有 Sylow 子群之内直积。

特别地，有限 Abel 群满足上例条件，因此每个有限 Abel 群都是其 Sylow 子群的内直和。

**例 7 (6 阶群分类)** @46

设 $G$ 是 6 阶群，证明 $G$ 同构于 $\mathbb{Z}_6$ 或 $S_3$。

### 1.9 可解群、半直积及群的进一步讨论（p49–54）

**定义 (正规群列与合成群列)** @49

设 $G$ 是群，如果真子群序列 $\{G_i\}$ 满足

$$ \{e\}=G_0\triangleleft G_1\triangleleft\cdots\triangleleft G_n=G, $$

那么称 $\{G_i\}_{i=0}^n$ 为 $G$ 的一个长度为 $n$ 的**正规群列**。对任意 $i=1,\cdots,n$，$G_i/G_{i-1}$ 称为该群列的**商因子**。进一步，如果对任意 $i>0$，$G_i/G_{i-1}$ 是单群，那么称 $\{G_i\}$ 为 $G$ 的**合成群列**（composition series）。

**例 1** @49

(1) 设 $G=\mathbb{Z}_2\oplus\mathbb{Z}_3$，则 $\{0\}\triangleleft\mathbb{Z}_2\triangleleft G$ 和 $\{0\}\triangleleft\mathbb{Z}_3\triangleleft G$ 都是 $G$ 的合成群列。在这个例子中，两个合成群列的商因子组均为 $\mathbb{Z}_2,\mathbb{Z}_3$。

(2) $\mathbb{Z}$ 的子群都形如 $m\mathbb{Z}\ (m\geqslant 0)$，除非 $m=0$，它们都同构于 $\mathbb{Z}$，故 $\mathbb{Z}$ 无合成群列。

(3) 任意有限群 $G$ 都有合成群列。事实上，依次取上一级群的极大正规子群即可。

**定理 9.1 (Jordan-Hölder 定理)** @49

设 $G$ 为有限群，且有两个不同的合成群列：

$$ \{e\}=G_0\triangleleft G_1\triangleleft\cdots\triangleleft G_r=G, $$

$$ \{e\}=H_0\triangleleft H_1\triangleleft\cdots\triangleleft H_s=G, $$

则 $r=s$，且存在 $\sigma\in S_r$，对任意 $i>0$，有 $G_i/G_{i-1}\cong H_{\sigma(i)}/H_{\sigma(i)-1}$。

**定义 (可解群)** @50

设 $G$ 是群，如果 $\{G_i\}$ 是 $G$ 的一个正规群列，且其每个商因子均为 Abel 群，那么称 $G$ 为**可解群**（solvable group），$\{G_i\}$ 为 $G$ 的**可解群列**。

**命题 9.2** @50

有限可解群的合成群列的每个商因子都是素数阶循环群。

**推论 9.3** @50

$S_n$ 为可解群当且仅当 $n\leqslant 4$。

**例 2** @51

设 $p,q$ 为素数，$p\neq q$，则 $p^2q$ 阶群为可解群。

**定义 (半直积)** @51

若 $G$ 是群，$H<G$，$N\triangleleft G$，$G=NH$ 且 $N\cap H=\{e\}$，则称 $G$ 是 $H,N$ 的**半直积**，记作 $G=N\rtimes H$ 或 $H\ltimes N$。

**例 3** @51

$D_5=H_5\rtimes H_2$ 是其 Sylow $5$-子群 $H_5$ 和一个 Sylow $2$-子群的半直积，但非直积。由于 $D_5$ 是非交换的，$D_5$ 一定不是直积结构。当然，直积结构一定是半直积。

**命题 9.4** @51

设 $G$ 是群，$H<G$，$N\triangleleft G$。若 $H\cap N=\{e\}$，则

$$ \theta:H\times N\to HN,\qquad (x,y)\mapsto xy $$

是一一对应，且 $\theta$ 是群同构当且仅当同态

$$ f:H\to \operatorname{Aut}(N),\qquad x\mapsto r_x,\quad \forall x\in H,\ r_x(y)=xyx^{-1},\ \forall y\in N $$

是平凡的，即对任意 $x\in H$，$f(x)=\operatorname{id}_N$。

**定理 9.5** @52

(1) 设 $G$ 是群，则存在单同态

$$ \theta_L:G\to S_G,\qquad a\mapsto a_L\ (\forall a\in G),\quad a_L(b)=ab\ (\forall b\in G). $$

(2) 如 $|G|=n<+\infty$，则 $G$ 同构于 $S_n$ 的子群。

**定理 9.6** @52

每个有限群都同构于一般线性群的一个子群。

**定义 (有限生成自由 Abel 群)** @53

设 $G$ 是 Abel 群（以下用加法记号）。

(1) 如果存在 $G$ 中元素 $x_1,\cdots,x_n$ 使得 $G=\langle x_1,\cdots,x_n\rangle$，即群 $G$ 中任意元素 $x$ 都可以表示成 $x_1,\cdots,x_n$ 的 $\mathbb{Z}$-线性组合

$$ x=m_1x_1+m_2x_2+\cdots+m_nx_n, $$

其中 $m_1,\cdots,m_n\in\mathbb{Z}$，则称 $G$ 是一个**有限生成 Abel 群**，$x_1,\cdots,x_n$ 为其**生成元**。

(2) 如果 $G=\langle x_1,\cdots,x_n\rangle$，且群 $G$ 中的任一元素可唯一地表示为 $x_1,\cdots,x_n$ 的线性组合，那么称 $G$ 是以 $x_1,\cdots,x_n$ 为**基**的**自由 Abel 群**，且 $n=\operatorname{rank}(G)$ 称为 $G$ 的**秩**。可以证明 $G$ 的秩不依赖于基的选取。

**定理 9.7** @53

群 $G$ 是秩 $n$ 的自由 Abel 群当且仅当 $G\cong\mathbb{Z}^n=\underbrace{\mathbb{Z}\oplus\cdots\oplus\mathbb{Z}}_{n\text{ 个}}$。

## 第2章 环论初步

### 2.1 环的概念及基本性质（p57–61）

**定义 (环的定义)** @57

设 $R$ 是一个非空集合且 $R$ 上有两个二元运算 "$+$" 和 "$\cdot$"，分别称为加法与乘法。若下列性质成立：

(1) $(R,+)$ 是一个 Abel 群，它的恒等元（记为 $0$）称为 $R$ 的零元素；

(2) $(R,\cdot)$ 具有结合律；

(3) $R$ 的加法与乘法满足分配律，即对任意的 $a,b,c\in R$，都有

$$ a\cdot(b+c)=a\cdot b+a\cdot c,\qquad (a+b)\cdot c=a\cdot c+b\cdot c, $$

则称 $(R,+,\cdot)$ 是一个**环**（ring）。

通常我们省略运算符号，直接将环记为 $R$，并且将用 $ab=a\cdot b$ 来表示两个元素的乘积。

**定义 (交换环与含幺环)** @57

设 $R$ 为环，若对于任意元素 $a,b\in R$，均有 $ab=ba$ 成立，则称 $R$ 为**交换环**；反之，则称之为**非交换环**。若环 $R$ 为有限集，则称 $R$ 为**有限环**；反之，则称之为**无限环**。若环 $R$ 中存在元素 $u$，使得对于任意 $r\in R$，均有 $ur=ru=r$ 成立，则称 $u$ 为 $R$ 的**幺元**，简记为 $1$，此时 $R$ 被称为**含幺环**。根据第一章的结论，幺元若存在，则必然是唯一的。本书将聚焦于对含幺环的探讨。

**例 1 (零环)** @57

设 $R=\{x\}$ 由一个元素 $x$ 构成。定义 $x+x=x$，$x\cdot x=x$，则 $R$ 构成一个含幺环，称为**零环**。$x$ 既是零元素也是幺元，即 $x=0=1$。

**例 2 (数环)** @57

$\mathbb{Z},\mathbb{Q},\mathbb{R},\mathbb{C}$ 在数的加法、乘法下构成含幺交换环。

**例 3 (矩阵环)** @57

设 $R$ 是含幺环，$n$ 是正整数。定义

$$ M_n(R)=\{A=(a_{ij})\mid a_{ij}\in R,\ 1\leqslant i,j\leqslant n\}. $$

与 $n$ 阶复方阵的加法与乘法的定义相同，对 $A,B\in M_n(R)$，$A=(a_{ij})$，$B=(b_{ij})$，定义 $A+B=(a_{ij}+b_{ij})$，$A\times B=(c_{ij})$，这里

$$ c_{ij}=\sum_{k=1}^{n}a_{ik}b_{kj}. $$

可以验证 $M_n(R)$ 是含幺环，称为 $R$ 上的 $n$ 阶**矩阵环**；它的零元为 $n$ 阶零方阵，幺元为 $n$ 阶单位矩阵

$$ I_n=\begin{pmatrix}1&0&\cdots&0\\0&1&\cdots&0\\\vdots&\vdots&&\vdots\\0&0&\cdots&1\end{pmatrix}, $$

这里 $1$ 是 $R$ 的幺元。当 $n\geqslant 2$ 且 $R$ 不是零环时，$M_n(R)$ 都是非交换环。

**例 4 (自同态环)** @58

设 $A$ 是一个加法 Abel 群，$R=\operatorname{End}(A)=\{f:A\to A\mid f\text{ 是群同态}\}$。$A$ 上的加法运算诱导了群同态的加法，即对 $f,g\in R$，可以定义群同态 $f+g$ 为

$$ (f+g)(a)=f(a)+g(a),\quad \forall a\in A. $$

另一方面，群同态的复合给了 $R$ 上另一个自然的二元运算 "$\circ$"。容易验证 $R$ 在这两种运算下是一个含幺环，零元为零映射，幺元为恒等映射 $\mathrm{id}_A$。

**例 5 (连续函数环)** @58

设 $C^0(\mathbb{R})=\{f:\mathbb{R}\to\mathbb{R}\mid f\text{ 是连续函数}\}$。对 $f,g\in C^0(\mathbb{R})$，定义它们的和与乘积

$$ (f+g)(a)=f(a)+g(a),\quad (fg)(a)=f(a)g(a),\quad \forall a\in\mathbb{R}, $$

可以验证 $C^0(\mathbb{R})$ 在这两个运算下是一个含幺交换环，零元为零函数，幺元为恒等函数 $\mathrm{id}_{\mathbb{R}}$。

**例 6 (环的直积)** @58

设 $R_1,R_2,\cdots,R_n$ 为环。定义

$$ R_1\times R_2\times\cdots\times R_n=\{(r_1,r_2,\cdots,r_n)\mid r_i\in R_i,\ 1\leqslant i\leqslant n\}, $$

对任意 $x=(x_1,x_2,\cdots,x_n),\ y=(y_1,y_2,\cdots,y_n)\in R_1\times R_2\times\cdots\times R_n$，定义

$$ x+y=(x_1+y_1,x_2+y_2,\cdots,x_n+y_n),\quad x\cdot y=(x_1\cdot y_1,x_2\cdot y_2,\cdots,x_n\cdot y_n), $$

则可以验证 $R_1\times R_2\times\cdots\times R_n$ 在上述加法与乘法下构成一个环，称为 $R_1,R_2,\cdots,R_n$ 的**直积**。

易知 $R_1\times R_2\times\cdots\times R_n$ 的零元为 $(0_{R_1},0_{R_2},\cdots,0_{R_n})$，这里 $0_{R_i}$ 是 $R_i$ 的零元。若每个 $R_i$ 都是含幺环，则 $R_1\times R_2\times\cdots\times R_n$ 也是含幺环，其幺元为 $(1_{R_1},1_{R_2},\cdots,1_{R_n})$，这里 $1_{R_i}$ 是 $R_i$ 的幺元。

**注 (元素的整数倍)** @59

若 $R$ 是一个环，$n\in\mathbb{Z}$，$a\in R$，我们记

$$ na=\begin{cases}\underbrace{a+\cdots+a}_{n\text{ 个}}, & n>0,\\ 0, & n=0,\\ \underbrace{(-a)+\cdots+(-a)}_{-n\text{ 个}}, & n<0.\end{cases} $$

**命题 1.1 (环的基本运算性质)** @59

设 $R$ 是一个环，则

(1) 对任意 $a\in R$，$0a=a0=0$。

(2) 设 $a\in R$，记 $-a$ 是 $a$ 在加法下的逆元，即 $a+(-a)=0$，则对任意 $a,b\in R$，有 $(-a)b=a(-b)=-(ab)$，$(-a)(-b)=ab$。若 $R$ 有幺元 $1$，则 $-a=(-1)a$。

(3) 设 $a_1,\cdots,a_m\in R$，$b_1,\cdots,b_n\in R$，则有

$$ \sum_{i=1}^{m}a_i\cdot\sum_{j=1}^{n}b_j=\sum_{i=1}^{m}\sum_{j=1}^{n}a_ib_j. $$

(4) 若 $R$ 是交换环，则对任意正整数 $n$，有

$$ (a+b)^n=\sum_{i=0}^{n}\binom{n}{i}a^{i}b^{n-i}=a^n+\binom{n}{n-1}a^{n-1}b+\cdots+\binom{n}{1}ab^{n-1}+b^n, $$

这里 $\binom{n}{i}=\dfrac{n!}{i!\,(n-i)!}$。

**定义 (子环的定义)** @59

设 $R$ 是一个环，$S$ 是 $R$ 的一个非空子集。若 $S$ 满足下列条件：

(1) $(S,+)$ 是 $(R,+)$ 的子群；

(2) $S$ 对乘法封闭，即对任意 $a,b\in S$，$ab\in S$，

则称 $S$ 是 $R$ 的**子环**（subring）。由定义知，$S$ 在 $R$ 的加法、乘法下构成一个环。在含幺环 $R$ 中（记 $1_R$ 为其幺元），若子环 $S$ 含 $1_R$，则称 $S$ 是 $R$ 的**含幺子环**。在本书中，为了方便起见，若 $R$ 是含幺环，我们通常默认 $R$ 的子环即为含幺子环。作为子结构，子环可以类比于群的子群。

**例 7 (常见的子环)** @59

(1) 设 $S$ 是整数环 $\mathbb{Z}$ 的子环，由于它是加法子群，故 $S=m\mathbb{Z}$，$m$ 是非负整数。特别地，$\mathbb{Z}$ 只有一个含幺子环，即 $\mathbb{Z}$ 本身。

(2) $M_n(\mathbb{R})$ 是 $M_n(\mathbb{C})$ 的子环。

(3) $\mathbb{Z}[\mathrm{i}]=\{a+b\mathrm{i}\in\mathbb{C}\mid a,b\in\mathbb{Z}\}$ 是 $\mathbb{C}$ 的子环，称为**高斯整数环**。

**定义 (环的中心)** @60

设 $R$ 是一个环。定义 $Z(R)=\{a\in R\mid ab=ba,\ \forall b\in R\}$，称 $Z(R)$ 为 $R$ 的**中心**。容易验证，$R$ 的中心 $Z(R)$ 是 $R$ 的一个交换的子环。

**例 8 (中心的例子)** @60

(1) $R$ 是交换环等价于 $Z(R)=R$。

(2) 设 $R_1,\cdots,R_n$ 是环，则 $Z(R_1\times\cdots\times R_n)=Z(R_1)\times\cdots\times Z(R_n)$。

(3) $Z(M_n(\mathbb{C}))=\{\lambda\cdot I_n\mid \lambda\in\mathbb{C}\}$（见本节习题）。

**定义 (幂零元的定义)** @60

设 $R$ 是一个环。对 $a\in R$，若存在正整数 $n$ 使得 $a^n=0$，则称 $a$ 为**幂零元**。

**例 9 (幂零元的例子)** @60

在矩阵环 $M_2(\mathbb{R})$ 中，$A=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ 是幂零元，而 $B=\begin{pmatrix}1&1\\0&1\end{pmatrix}$ 不是幂零元。

### 2.2 整环、可除环和域（p62–65）

**定义 (零因子与可逆元)** @62

设 $R$ 是一个环，$a\in R\setminus\{0\}$。

(1) 若存在非零元 $b\in R$ 使得 $ab=0$ 或 $ba=0$，则称 $a$ 是一个**零因子**（zero divisor）。否则，称 $a$ 不是零因子。

(2) 若 $R$ 为含幺环，且存在 $b\in R$，使得 $ab=ba=1$，则我们称 $a$ 是一个**单位**（unit）或**可逆元**。此时，$b$ 被称为 $a$ 的**逆元**，记为 $a^{-1}$。

**命题 2.1 (乘法消去律)** @62

设 $R$ 为环，$a\in R\setminus\{0\}$ 不是零因子，$b,c\in R$。若 $ab=ac$（或 $ba=ca$），则必有 $b=c$。

**命题 2.2 (可逆元构成单位群)** @62

设 $R$ 是一个含幺环。记

$$ R^{*}=\{a\in R\mid a\text{ 是可逆元}\}, $$

则 $R^{*}$ 在 $R$ 的乘法下构成一个群，称为 $R$ 的**单位群**或**乘法群**。

**定义 (整环、可除环与域)** @62

设 $R$ 是一个含幺环，且不是零环。

(1) 若 $R$ 没有零因子，则称 $R$ 为**整环**。交换的整环称为**整区**（integral domain）。

(2) 若 $R$ 的所有非零元都是可逆的，即 $R^{*}=R\setminus\{0\}$，则称 $R$ 为**可除环**（divisible ring）或**斜域**（skew field）或**体**。

(3) 若 $R$ 是交换的可除环，则称 $R$ 为**域**（field）。

(4) 若 $R$ 的含幺子环 $F$ 是域，则称 $F$ 是 $R$ 的**子域**。

**例 1 (整环与可除环的实例)** @62

(1) $\mathbb{Q},\mathbb{R},\mathbb{C}$ 都是域，$\mathbb{Z}$ 不是可除环，因为 $\mathbb{Z}^{*}=\{1,-1\}$。

(2) 矩阵环 $M_n(\mathbb{C})$ 在 $n\geqslant 2$ 时不是整环：对 $0<m<n$，有

$$ \begin{pmatrix}I_{n-m}&0\\0&0\end{pmatrix} \begin{pmatrix}0&0\\0&I_m\end{pmatrix} =\begin{pmatrix}0&0\\0&0\end{pmatrix}. $$

(3) 两个及以上非零环的直积一定不是整环。若 $R_1,R_2$ 是非零环，取 $a\in R_1\setminus\{0\}$，$b\in R_2\setminus\{0\}$，则 $(a,0)(0,b)=(0,0)$。

**例 2 (矩阵环的行列式与一般线性群)** @63

设 $R$ 是含幺交换环，$A=(a_{ij})\in M_n(R)$，用高等代数中的方法定义 $A$ 的行列式：

$$ \det(A)=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)a_{1,\sigma(1)}a_{2,\sigma(2)}\cdots a_{n,\sigma(n)}\in R. $$

记 $B=(A_{ij})$ 是 $A$ 的**伴随矩阵**，这里 $A_{ij}$ 是 $a_{ji}$ 的代数余子式，则

$$ AB=BA=\det(A)I_n. $$

由此

$$ \mathrm{GL}_n(R)=M_n(R)^{*}=\{A\in M_n(R)\mid \det(A)\in R^{*}\}. $$

特别地，若 $R=F$ 是域，则 $\mathrm{GL}_n(F)=\{A\in M_n(F)\mid \det(A)\neq 0\}$；若 $R=\mathbb{Z}$，则 $\mathrm{GL}_n(\mathbb{Z})=\{A\in M_n(\mathbb{Z})\mid \det(A)=\pm 1\}$。

**例 3 (四元数体)** @63

设 $\mathbb{H}$ 是一个 $4$ 维实向量空间，$\{1,\mathrm{i},\mathrm{j},\mathrm{k}\}$ 是其一组基，故

$$ \mathbb{H}=\{a+b\mathrm{i}+c\mathrm{j}+d\mathrm{k}\mid a,b,c,d\in\mathbb{R}\}. $$

$\mathbb{H}$ 上已有加法（即向量的加法），定义 $\mathbb{H}$ 上的乘法如下：

$$ \begin{aligned} &(a_1+b_1\mathrm{i}+c_1\mathrm{j}+d_1\mathrm{k})(a_2+b_2\mathrm{i}+c_2\mathrm{j}+d_2\mathrm{k})\\ ={}&(a_1a_2-b_1b_2-c_1c_2-d_1d_2)+(a_1b_2+a_2b_1+c_1d_2-c_2d_1)\mathrm{i}\\ &+(a_1c_2+a_2c_1+b_2d_1-b_1d_2)\mathrm{j}+(a_1d_2+a_2d_1+b_1c_2-b_2c_1)\mathrm{k}. \end{aligned} $$

特别地，有

$$ \mathrm{i}^{2}=\mathrm{j}^{2}=\mathrm{k}^{2}=-1,\qquad \mathrm{ij}=\mathrm{k},\ \mathrm{jk}=\mathrm{i},\ \mathrm{ki}=\mathrm{j},\qquad \mathrm{ji}=-\mathrm{k},\ \mathrm{kj}=-\mathrm{i},\ \mathrm{ik}=-\mathrm{j}. $$

现在验证 $(\mathbb{H},+,\cdot)$ 构成一个非交换的可除环。首先可以看出，$\mathbb{H}$ 在这两种运算下是一个含幺环，幺元是 $1$。由于 $\mathrm{ij}\neq\mathrm{ji}$，$\mathbb{H}$ 是非交换的。其次可以证明 $\mathbb{H}^{*}=\mathbb{H}\setminus\{0\}$。对 $x=a+b\mathrm{i}+c\mathrm{j}+d\mathrm{k}\in\mathbb{H}$，定义共轭 $\bar{x}=a-b\mathrm{i}-c\mathrm{j}-d\mathrm{k}$。由乘法定义直接计算得

$$ x\bar{x}=\bar{x}x=a^{2}+b^{2}+c^{2}+d^{2}\geqslant 0, $$

从而 $x=0$ 当且仅当 $x\bar{x}=0$。对任意 $x\in\mathbb{H}\setminus\{0\}$，令 $y=\dfrac{1}{x\bar{x}}\cdot\bar{x}$，则有 $yx=xy=1$，即 $x^{-1}=y$。综上所述，$\mathbb{H}$ 是非交换的可除环。

**命题 2.3 (有限整区必为域)** @64

若 $R$ 是一个有限整区，则 $R$ 是一个域。

**注 (有限情形的等价性)** @64

事实上，Wedderburn 证明了一个有限可除环一定是域，具体内容请见 2.10 节。若 $R$ 是有限整环，由命题 2.3 的证明知 $R$ 是有限可除环。因此，在环的元素个数有限的情况下，整环、整区、可除环和域实际上没有任何区别。

### 2.3 理想与商环（p66–71）

**定义 (理想)** @66

设 $R$ 是一个环，$I$ 是 $R$ 的一个非空子集。若 $I$ 满足下列条件：

(1) $I$ 是 $R$ 的一个加法子群；

(2) 对任意 $r\in R$ 和 $a\in I$，有 $ra\in I$ 且 $ar\in I$，

则称 $I$ 是 $R$ 的一个（双边）**理想**（ideal）。

我们也可以相应地定义左理想和右理想，但它们不是本教材重点关注的对象。

设 $I$ 为环 $R$ 的一个理想，由于 $I$ 构成 $R$ 的一个加法子群，因此可构建加法商群 $R/I=\{\bar r=r+I\mid r\in R\}$。鉴于 $(R,+)$ 是 Abel 群，加法商群 $R/I$ 同样也是 Abel 群。接下来探讨 $R/I$ 是否可以定义一种"自然的"乘法运算，从而使其构成一个环。此处的"自然乘法"定义如下：对于任意 $r+I$ 和 $s+I\in R/I$，总有

$$ (r+I)\cdot(s+I)=rs+I. $$

由于此乘法运算依赖于陪集代表元的选取，因此需验证其合理性。具体而言，若 $r+I=\tilde r+I$，$s+I=\tilde s+I$，则需证明

$$ rs+I=\tilde r\tilde s+I, $$

即 $rs-\tilde r\tilde s\in I$。根据既有假设，$r-\tilde r\in I$，$s-\tilde s\in I$，这意味着存在 $a,b\in I$ 使得 $r=\tilde r+a$，$s=\tilde s+b$。因此 $rs=(\tilde r+a)(\tilde s+b)=\tilde r\tilde s+\tilde rb+a\tilde s+ab$。由于 $I$ 是理想，故 $\tilde rb,a\tilde s,ab$ 均属于 $I$。因此 $rs-\tilde r\tilde s=\tilde rb+a\tilde s+ab\in I$。这表明在 $I$ 为理想的条件下，可以在商群 $R/I$ 上定义自然的乘法运算。

**命题 3.1** @66

设 $R$ 是环，$I$ 是 $R$ 的一个理想，则加法商群 $R/I$ 按上述乘法构成一个环，称为 $R$ 关于理想 $I$ 的**商环**。$R/I$ 的零元为 $\bar 0=I$。若 $R$ 是含幺环，$1$ 是幺元，则 $R/I$ 也是含幺环，幺元为 $\bar 1=1+I$。

**例 1 (平凡理想)** @66

设 $R$ 是环，则 $\{0\}$ 与 $R$ 是 $R$ 的理想，称为 $R$ 的**平凡理想**。

若 $I=R$，则 $R/I$ 只有一个元素 $R$，故 $R/I$ 是零环。若 $I=\{0\}$，则对任意 $r\in R$，$\bar r=r+\{0\}=\{r\}$，所以 $R/\{0\}$ 与 $R$ 的环结构是一样的。我们有 $R/\{0\}=\{\{r\}\mid r\in R\}$，$\{r\}+\{s\}=\{r+s\}$，$\{r\}\{s\}=\{rs\}$。

**例 2 (剩余类环)** @67

我们知道 $\mathbb{Z}$ 的加法子群是 $n\mathbb{Z}=\{nl\mid l\in\mathbb{Z}\}$，$n=0,1,2,\cdots$，由理想定义知 $n\mathbb{Z}$（$n=0,1,2,\cdots$）是 $\mathbb{Z}$ 的理想，它们构成 $\mathbb{Z}$ 的全部理想。由命题 3.1，我们有商环 $\mathbb{Z}/n\mathbb{Z}=\{\bar 0,\bar 1,\bar 2,\cdots,\overline{n-1}\}$，我们称之为**模 $n$ 的剩余类环**。注意 $\mathbb{Z}$ 是无限环，而对 $n\geqslant 1$，$\mathbb{Z}/n\mathbb{Z}$ 是有限环。记号 $\bar a=\bar b$ 意味着 $a\equiv b\pmod n$。一般地，在商环 $R/I$ 中，$\bar a=\bar b$ 也记为 $a\equiv b\pmod I$。

**命题 3.2** @67

设 $R$ 是环，$\{I_\alpha\}_{\alpha\in\Lambda}$ 是 $R$ 的理想，$\Lambda$ 是非空指标集，则 $\bigcap\limits_{\alpha\in\Lambda}I_\alpha$ 是 $R$ 的理想。

**命题 3.3** @67

设 $R$ 是含幺环，$I$ 是 $R$ 的一个理想，则 $I=R$ 当且仅当幺元 $1\in I$。

**定义 (生成理想)** @67

设 $R$ 是环，$S$ 是 $R$ 的一个子集。记 $\Lambda=\{I\mid I\text{ 是 }R\text{ 的理想且包含 }S\}$，定义 $(S)=\bigcap\limits_{I\in\Lambda}I$。做如下定义：

(1) 根据命题 3.2，$(S)$ 是理想，而且是包含集合 $S$ 的最小的理想，称为由 $S$ **生成的理想**。

(2) 对 $R$ 的一个理想 $I$，若存在一个有限子集 $S=\{a_1,a_2,\cdots,a_n\}$，使得 $I=(S)$，则称 $I$ 是**有限生成**的，记为 $I=(a_1,a_2,\cdots,a_n)$。

(3) 若 $I=(a)$ 可由一个元素生成，则称 $I$ 为**主理想**（principal ideal），且称 $a$ 为 $I$ 的生成元。

**例 3 (生成理想的例子)** @67

若 $S=\varnothing$，则 $(\varnothing)=\{0\}$。若 $S$ 含有 $R$ 中的单位元，即 $S\cap R^*\neq\varnothing$，则 $(S)=R$。我们已经知道，$\mathbb{Z}$ 的每个理想都是主理想，它们形如 $n\mathbb{Z}=(n)$，$n=0,1,2,\cdots$。

**命题 3.4** @67

设 $R$ 是含幺环，$S$ 是 $R$ 的一个非空子集，我们有

$$ (S)=\left\{\sum_{i=1}^{m}a_is_ib_i\Biggm| a_i,b_i\in R,\ s_i\in S,\ 1\leqslant i\leqslant m,\ m\in\mathbb{N}\right\}. $$

**推论 3.5** @68

设 $R$ 是含幺交换环，$S$ 是 $R$ 的一个非空子集，则有

$$ (S)=\left\{\sum_{i=1}^{m}a_is_i\Biggm| a_i\in R,\ s_i\in S,\ 1\leqslant i\leqslant m,\ m\in\mathbb{N}\right\}. $$

**定义 (理想的加法与乘法)** @68

设 $R$ 是环，$n$ 是一个正整数，$I_1,I_2,\cdots,I_n$ 是 $R$ 的 $n$ 个理想。记 $S=\left\{\prod\limits_{i=1}^{n}b_i=b_1b_2\cdots b_n\Bigm| b_i\in I_i,\ 1\leqslant i\leqslant n\right\}$。定义：

(1) $\sum\limits_{i=1}^{n}I_i=I_1+I_2+\cdots+I_n=\left\{\sum\limits_{i=1}^{n}a_i\Bigm| a_i\in I_i,\ 1\leqslant i\leqslant n\right\}$，称为理想 $I_1,I_2,\cdots,I_n$ 的**和**。

(2) $\prod\limits_{i=1}^{n}I_i=I_1I_2\cdots I_n=\left\{\sum\limits_{i=1}^{m}c_i\Bigm| c_i\in S,\ 1\leqslant i\leqslant m,\ m\in\mathbb{N}\right\}$，称为理想 $I_1,I_2,\cdots,I_n$ 的**乘积**。

不难验证，$\sum\limits_{i=1}^{n}I_i$ 和 $\prod\limits_{i=1}^{n}I_i$ 均为 $R$ 的理想且它们满足如下性质：

(1)' $\sum\limits_{i=1}^{n}I_i=\left(\bigcup\limits_{i=1}^{n}I_i\right)$，

(2)' $\prod\limits_{i=1}^{n}I_i\subseteq\bigcap\limits_{i=1}^{n}I_i$。

**例 4 (整数环中的理想运算)** @68

由例 2 知，$\mathbb{Z}$ 的所有理想是 $n\mathbb{Z}=(n)$，$n=0,1,2,\cdots$。设 $a,b$ 是正整数，我们有

$$ a\mathbb{Z}+b\mathbb{Z}=d\mathbb{Z}, $$

$$ (a\mathbb{Z})(b\mathbb{Z})=(ab)\mathbb{Z}, $$

$$ a\mathbb{Z}\cap b\mathbb{Z}=c\mathbb{Z}, $$

其中 $d=\gcd(a,b)$，即 $a,b$ 的最大公因子；$c=\operatorname{lcm}(a,b)$，即 $a,b$ 的最小公倍数。

**定理 3.6 (理想对应定理)** @68

考虑商映射 $j:R\to R/I$，$j(r)=\bar r=r+I$，$\forall r\in R$。

(1) 设 $T$ 是 $R/I$ 的一个理想，记 $j^{-1}(T)=\{r\in R\mid j(r)\in T\}$，则 $j^{-1}(T)$ 是包含 $I$ 的理想；设 $J$ 是 $R$ 的理想，记 $J/I=\{a+I\mid a\in J\}\subseteq R/I$，则 $J/I$ 是 $R/I$ 的理想。

(2) 我们有如下一一对应关系：

$$ \begin{aligned} \{T\mid T\text{ 为 }R/I\text{ 的理想}\}&\longleftrightarrow\{J\mid J\text{ 是 }R\text{ 的理想且 }J\supseteq I\},\\ T&\longmapsto j^{-1}(T),\\ J/I&\longleftarrow J. \end{aligned} $$

**例 5 (商环的理想)** @69

设 $n$ 是正整数，则 $\{\mathbb{Z}/n\mathbb{Z}\text{ 的理想}\}=\{J/n\mathbb{Z}\mid J\text{ 是 }\mathbb{Z}\text{ 的理想且 }J\supseteq n\mathbb{Z}\}$。$J=m\mathbb{Z}\supseteq n\mathbb{Z}$ 等价于 $n\in J=m\mathbb{Z}$，也等价于 $m\mid n$ 且 $m$ 是正整数。所以 $\mathbb{Z}/n\mathbb{Z}$ 的理想都形如 $\{m\mathbb{Z}/n\mathbb{Z}\mid m\text{ 是正整数},\ m\mid n\}$。

设 $p$ 是一个素数，则 $\mathbb{Z}/p\mathbb{Z}$ 只有两个理想 $\{\bar 0\}$，$\mathbb{Z}/p\mathbb{Z}$。这是因为若 $m\mid p$ 且 $m$ 是正整数，则 $m=1$ 或 $p$。

**命题 3.7** @69

设 $R$ 是一个非零含幺交换环，则下列命题等价：

(1) $R$ 是一个域；

(2) $R$ 只有 $2$ 个理想 $\{0\}$ 与 $R$。

**例 6 (素域)** @69

设 $p$ 是一个素数，则 $\mathbb{Z}/p\mathbb{Z}$ 是一个域。这是命题 3.7 的直接推论。

**定义 (极大理想)** @69

设 $R$ 是环，$I$ 是 $R$ 的一个理想，若 $I$ 满足下列条件：

(1) $I\neq R$；

(2) 设 $J$ 是 $R$ 的理想且 $J\supseteq I$，则 $J=I$ 或 $J=R$，

则称 $I$ 是 $R$ 的一个**极大理想**（maximal ideal）。

**命题 3.8** @70

设 $R$ 是一个含幺交换环，$I$ 是 $R$ 的理想，则 $I$ 是极大理想当且仅当商环 $R/I$ 是域。

**例 7 (整数环的极大理想)** @70

对整数环 $\mathbb{Z}$，主理想 $(n)=n\mathbb{Z}$ 是极大理想当且仅当 $n$ 是素数。

**定义 (素理想)** @70

设 $R$ 是环，$P$ 是 $R$ 的一个理想，若 $P$ 满足下列两个条件：

(1) $P\neq R$；

(2) 对任意 $a,b\in R$，$a\notin P$，$b\notin P$，总有 $ab\notin P$，

则称 $P$ 是一个**素理想**（prime ideal）。

**命题 3.9** @70

设 $R$ 是含幺交换环，$I$ 是 $R$ 的理想，则 $I$ 是素理想当且仅当商环 $R/I$ 是整区。特别地，$R$ 的每个极大理想都是素理想。

命题 3.9 可由定义直接验证，详细证明留作练习。与交换环的情形完全不同，在一个非交换环中，极大理想并不一定是素理想（参见习题 2.3）。

**例 8 (整数环的素理想)** @70

对整数环 $\mathbb{Z}$，主理想 $(n)=n\mathbb{Z}$ 是素理想当且仅当 $n=0$ 或者 $n$ 是素数。

**例 9 (剩余类环的素理想)** @70

对剩余类环 $\mathbb{Z}/8\mathbb{Z}$，主理想 $(\bar 2)=\{\bar 2,\bar 4,\bar 6,\bar 0\}$ 是素理想；因 $\bar 2\cdot\bar 4=\bar 0$，$\mathbb{Z}/8\mathbb{Z}$ 不是整区，因此零理想不是素理想。

### 2.4 环的同态与同构（p72–78）

**定义 (环同态与环同构)** @72

设 $R_1,R_2$ 是环，若映射 $f:R_1\to R_2$ 满足下列条件：对任意 $a,b\in R_1$，

(1) $f(a+b)=f(a)+f(b)$；

(2) $f(ab)=f(a)f(b)$；

(3) 当 $R_1,R_2$ 均含幺元时，$f(1_{R_1})=1_{R_2}$ 或 $0$，这里 $1_{R_1},1_{R_2}$ 分别表示 $R_1,R_2$ 的幺元，

则称 $f:R_1\to R_2$ 为**环同态**。若 $f$ 既是环同态又是双射，则称 $f:R_1\to R_2$ 为**环同构**。若存在环同构 $f:R_1\to R_2$，则称 $R_1$ 与 $R_2$ 是同构的，记为 $R_1\cong R_2$。

**注 (零同态与同态的基本性质)** @72

我们将同构的环视为是结构"相同"的。按照上述定义，若环同态 $f$ 满足 $f(1)=0$，这个环同态实际上为零映射，称为**零同态**。当环 $R_1,R_2$ 中有一个不含幺元时，只要求环同态 $f:R_1\to R_2$ 满足上述定义中的 (1) 和 (2)，但在本教材中，我们主要关注含幺环之间的同态。此外，正如本节习题中提到：映射 $f:R_1\to R_2$ 为环同构当且仅当存在环同态 $g:R_2\to R_1$ 使得 $g\circ f=\mathrm{id}_{R_1}$ 且 $f\circ g=\mathrm{id}_{R_2}$。

设 $f:R_1\to R_2$ 是环同态，根据定义，$f$ 是相应的加法群同态，故有 $f(0)=0$，$f(-a)=-f(a)$，$\forall a\in R_1$。对任意有限多个元素 $a_1,a_2,\cdots,a_n\in R_1$，我们有

$$ f(a_1+a_2+\cdots+a_n)=f(a_1)+f(a_2)+\cdots+f(a_n),\qquad f(a_1\cdot a_2\cdots a_n)=f(a_1)\cdot f(a_2)\cdots f(a_n). $$

**例 1 (商映射与嵌入映射)** @72

设 $I$ 是环 $R$ 的理想，则商映射 $j:R\to R/I$（$r\mapsto\bar r=r+I$）是满的环同态。设 $S$ 是 $R$ 的子环，则嵌入映射 $i:S\to R$（$i(a)=a$，$\forall a\in S$）是单的环同态。

**例 2 (整数环到含幺环的同态)** @72

设 $R$ 是含幺环且幺元是 $1$，定义映射 $i:\mathbb{Z}\to R$ 如下：对任意 $n\in\mathbb{Z}$，

$$ i(n)=\begin{cases} \underbrace{1+\cdots+1}_{n\text{ 个}}, & n>0,\\[4pt] 0, & n=0,\\[4pt] \underbrace{(-1)+\cdots+(-1)}_{-n\text{ 个}}, & n<0. \end{cases} $$

则 $i$ 是环同态，它是从 $\mathbb{Z}$ 到 $R$ 唯一的非零环同态。

**例 3 (多项式求值同态)** @72

记 $\mathbb{C}[x]$ 为复数域 $\mathbb{C}$ 上的一元多项式环，设 $a\in\mathbb{C}$，定义映射 $e_a:\mathbb{C}[x]\to\mathbb{C}$，

$$ e_a(f)=f(a),\qquad \forall f(x)\in\mathbb{C}[x], $$

则 $e_a$ 是环同态。

**例 4 (零理想的商环)** @73

设 $I=\{0\}$ 是环 $R$ 的零理想，则商环 $R/I=\{\{r\}\mid r\in R\}$。定义映射 $f:R\to R/I$，$f(r)=\{r\}$，$\forall r\in R$，则 $f$ 是环同构。

**例 5 (恒等映射与同态的复合)** @73

恒等映射 $\mathrm{id}:R\to R$ 是环同构。若 $f:R_1\to R_2$，$g:R_2\to R_3$ 是环同态，则 $g\circ f:R_1\to R_3$ 也是环同态。

**例 6 (平方和不能同余于 3)** @73

设 $a$ 是整数且 $a\equiv 3\pmod 4$，则方程 $x^2+y^2=a$ 没有整数解。事实上，若它有整数解，应用环同态 $\mathbb{Z}\to\mathbb{Z}/4\mathbb{Z}$，我们有方程 $u^2+v^2=\bar 3$ 在剩余类环 $\mathbb{Z}/4\mathbb{Z}$ 中有解。直接计算我们有对 $u\in\mathbb{Z}/4\mathbb{Z}$，$u^2=\bar 0$ 或 $\bar 1$，故对任意 $u,v\in\mathbb{Z}/4\mathbb{Z}$，$u^2+v^2\neq\bar 3$。因此，方程 $x^2+y^2=a$ 没有整数解。

**定义 (核与像)** @73

设 $R_1,R_2$ 是环，$f:R_1\to R_2$ 是环同态。定义

$$ \mathrm{Ker}\,f=\{a\in R_1\mid f(a)=0\}, $$

称为 $f$ 的**核**。定义

$$ \mathrm{Im}\,f=\{f(a)\mid a\in R_1\}, $$

称为 $f$ 的**像**。

**命题 4.1 (核是理想、像是子环)** @73

设 $f:R_1\to R_2$ 是非零环同态，则 $\mathrm{Ker}\,f$ 是 $R_1$ 的理想；若 $R_1,R_2$ 均为含幺环，$\mathrm{Im}\,f$ 是 $R_2$ 的子环。

**定理 4.2 (环同态基本定理)** @73

设 $R_1,R_2$ 是含幺环，$f:R_1\to R_2$ 是环同态，则有

(1) 若 $f$ 是零同态，则 $\mathrm{Ker}\,f=R_1$，$\mathrm{Im}\,f=\{0\}$；

(2) 若 $f$ 是非零环同态，则有自然环同构 $\tilde f:R_1/\mathrm{Ker}\,f\to\mathrm{Im}\,f$，满足 $\tilde f(a+\mathrm{Ker}\,f)=f(a)$，$\forall a\in R_1$。

**例 7 (复数域与实矩阵环)** @73

在这个例子中我们将看到复数域 $\mathbb{C}$ 同构于 $2$ 阶实矩阵环 $M_2(\mathbb{R})$ 的一个子环。定义映射 $f:\mathbb{C}\to M_2(\mathbb{R})$ 如下：对 $z=a+b\mathrm{i}\in\mathbb{C}$，$a,b\in\mathbb{R}$，

$$ f(z)=\begin{pmatrix}a&-b\\ b&a\end{pmatrix}\in M_2(\mathbb{R}). $$

由定义直接验证得，$f$ 是单的环同态，且

$$ \mathrm{Im}\,f=\left\{\begin{pmatrix}a&-b\\ b&a\end{pmatrix}\Biggm| a,b\in\mathbb{R}\right\}. $$

由定理 4.2，$\mathrm{Im}\,f$ 是 $M_2(\mathbb{R})$ 的子环，且复数域 $\mathbb{C}$ 同构于 $\mathrm{Im}\,f$。我们进一步可以观察到对 $z=a+b\mathrm{i}\in\mathbb{C}$，记 $\bar z=a-b\mathrm{i}$，则有

$$ \det(f(z))=a^2+b^2=|z|^2=z\cdot\bar z. $$

**定理 4.3 (商环的商)** @74

设 $I,J$ 是含幺环 $R$ 的两个理想，且 $I\subseteq J$，则 $J/I=\{a+I\mid a\in J\}$ 是商环 $R/I$ 的理想，且 $(R/I)/(J/I)\cong R/J$。

**例 8 (整数环商环的商)** @74

设 $m,n$ 是正整数且 $m\mid n$，$I=n\mathbb{Z}$，$J=m\mathbb{Z}$，则有 $I\subseteq J$，且有环同构

$$ (\mathbb{Z}/n\mathbb{Z})/(m\mathbb{Z}/n\mathbb{Z})\cong\mathbb{Z}/m\mathbb{Z}, $$

从而 $|m\mathbb{Z}/n\mathbb{Z}|=\dfrac{n}{m}$。

**定理 4.4 (子环与理想的和)** @74

设 $R$ 是一个含幺环，$S$ 是 $R$ 的一个子环，$I$ 是 $R$ 的一个理想，则有

(1) $S+I=\{a+b\mid a\in S,\ b\in I\}$ 是 $R$ 的子环，$I$ 是 $S+I$ 的理想，$S\cap I$ 是 $S$ 的理想；

(2) 有自然的环同构 $f:(S+I)/I\cong S/(S\cap I)$，满足：对任意 $a\in S$，$b\in I$ 有 $f(a+b+I)=a+S\cap I$。

**定理 4.5 (中国剩余定理)** @74

设 $m_1,m_2,\cdots,m_t$ 是 $t$ 个两两互素的整数，则有自然的环同构

$$ g:\mathbb{Z}/m_1m_2\cdots m_t\mathbb{Z}\to\mathbb{Z}/m_1\mathbb{Z}\times\mathbb{Z}/m_2\mathbb{Z}\times\cdots\times\mathbb{Z}/m_t\mathbb{Z}, $$

满足 $g(a+m_1m_2\cdots m_t\mathbb{Z})=(a+m_1\mathbb{Z},a+m_2\mathbb{Z},\cdots,a+m_t\mathbb{Z})$。

**推论 4.6 (素因子分解对应的同构)** @75

设 $n>1$ 是正整数，$n=p_1^{e_1}p_2^{e_2}\cdots p_t^{e_t}$ 是 $n$ 的素因子分解，即 $p_1,p_2,\cdots,p_t$ 是两两不同的素数，$e_1,e_2,\cdots,e_t$ 是正整数。则

(1) 有自然的环同构

$$ \mathbb{Z}/n\mathbb{Z}\cong\mathbb{Z}/p_1^{e_1}\mathbb{Z}\times\mathbb{Z}/p_2^{e_2}\mathbb{Z}\times\cdots\times\mathbb{Z}/p_t^{e_t}\mathbb{Z}, $$

(2) 单位群

$$ (\mathbb{Z}/n\mathbb{Z})^*\cong(\mathbb{Z}/p_1^{e_1}\mathbb{Z})^*\times(\mathbb{Z}/p_2^{e_2}\mathbb{Z})^*\times\cdots\times(\mathbb{Z}/p_t^{e_t}\mathbb{Z})^*. $$

**注 (单位群与环直积)** @76

(1) 若非零含幺环 $R_1$ 与 $R_2$ 是同构的，则 $R_1^*\cong R_2^*$；

(2) 对环直积有 $(R_1\times R_2\times\cdots\times R_n)^*=R_1^*\times R_2^*\times\cdots\times R_n^*$。

由定义可以直接验证性质 (1) 与 (2)，细节留作习题。

**例 9 (中国剩余定理的算例)** @76

求最小的正整数 $a$，满足 $a\equiv 2\pmod 3$，$a\equiv 3\pmod 5$，$a\equiv 2\pmod 7$。

解：我们有

$$ \begin{cases} 70\equiv 1\ (\mathrm{mod}\ 3),\quad 70\equiv 0\ (\mathrm{mod}\ 5),\quad 70\equiv 0\ (\mathrm{mod}\ 7),\\ 21\equiv 0\ (\mathrm{mod}\ 3),\quad 21\equiv 1\ (\mathrm{mod}\ 5),\quad 21\equiv 0\ (\mathrm{mod}\ 7),\\ 15\equiv 0\ (\mathrm{mod}\ 3),\quad 15\equiv 0\ (\mathrm{mod}\ 5),\quad 15\equiv 1\ (\mathrm{mod}\ 7), \end{cases} $$

所以 $2\times 70+3\times 21+2\times 15=233$ 满足所求的同余式。而 $233\equiv 23\pmod{105}$，其中 $105=3\times 5\times 7$。所以 $a=23$。

**定义 (互素的理想)** @76

设 $R$ 是含幺环，$I,J$ 是 $R$ 的理想。若 $I+J=R$，则称 $I$ 与 $J$ 是**互素**的。

由定义，整数环 $\mathbb{Z}$ 的两个非平凡理想 $I=n\mathbb{Z}$，$J=m\mathbb{Z}$ 是互素的当且仅当 $\gcd(n,m)=1$，即 $n$ 与 $m$ 互素。

**定理 4.7 (中国剩余定理：环论版本)** @76

设 $R$ 为一个含幺交换环，且 $I_1,I_2,\cdots,I_t$ 为 $R$ 中两两互素的非平凡理想，则有自然的环同构

$$ g:R/(I_1I_2\cdots I_t)\to R/I_1\times R/I_2\times\cdots\times R/I_t, $$

其定义如下：对于任意 $r\in R$，有 $g(r+I_1I_2\cdots I_t)=(r+I_1,r+I_2,\cdots,r+I_t)$。

定理 4.5 是上述定理的一个特例。

**命题 4.8 (域到环的非零同态)** @76

设 $F$ 是一个域，$R$ 是一个含幺环，$f:F\to R$ 是非零环同态，则有

(1) $f$ 是单射，$R$ 的子环 $\mathrm{Im}\,f$ 同构于 $F$；

(2) 对任意 $0\neq a\in F$，$f(a^{-1})=f(a)^{-1}$，$F^*$ 同构于 $R^*$ 的子群 $f(F^*)$。

### 2.5 多项式环（p79–86）

**命题 5.1 (一元多项式环)** @79

设 $R$ 是一个环，考虑集合

$$R[x]=\left\{\sum_{i=0}^{n}a_ix^i\ \middle|\ a_i\in R,\ 0\leqslant i\leqslant n,\ n\in\mathbb{Z}_{\geqslant 0}\right\},$$

其中 $x$ 是一个未定元。在 $R[x]$ 上自然地定义多项式加法

$$\sum_{i=0}^{n}a_ix^i+\sum_{i=0}^{n}b_ix^i\triangleq\sum_{i=0}^{n}(a_i+b_i)x^i,$$

（这里可以让 $a_i$ 或 $b_i$ 取 $0$ 来定义不同次数多项式之间的加法）以及多项式乘法

$$\left(\sum_{i=0}^{n}a_ix^i\right)\left(\sum_{i=0}^{m}b_ix^i\right)\triangleq\sum_{k=0}^{n}\sum_{l=0}^{m}a_kb_lx^{k+l}=\sum_{i=0}^{n+m}c_ix^i,\qquad c_i=\sum_{k+l=i}a_kb_l.$$

则 $R[x]$ 在上述运算下是一个环，称为环 $R$ 上的**一元多项式环**，且满足如下性质：

(1) 若 $R$ 是含幺环，幺元为 $1$，则 $R[x]$ 也是含幺环，幺元是 $f(x)=1$。

(2) $R[x]$ 是交换环 $\Longleftrightarrow$ $R$ 是交换环。

对任意 $a\in R$，$f(x)=a$ 称为**常多项式**。$R[x]$ 中所有常多项式构成了一个子环，其同构于 $R$。因此可以自然地将 $R$ 视为 $R[x]$ 的一个子环。

**定义 (次数与首项系数)** @79

设多项式 $f(x)=a_nx^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0\in R[x]$，$a_n$ 称为 $f(x)$ 的**首项系数**。若 $a_n=1$，则称 $f(x)$ 是**首一多项式**。若 $f(x)\neq 0$，则定义 $f(x)$ 的**次数**

$$\deg f\triangleq\max_{0\leqslant m\leqslant n}\{m\mid a_m\neq 0\}.$$

根据定义，$\deg f=0$ 等价于 $f$ 是非零常多项式。

**命题 5.2 (次数可加性)** @80

设 $R$ 是含幺环，$f(x)=a_nx^n+\cdots+a_1x+a_0\in R[x]$，且 $a_n$ 非零因子。若 $0\neq g\in R[x]$，则

$$\deg(fg)=\deg(gf)=\deg f+\deg g.$$

**命题 5.3 (整区上多项式环)** @80

设 $R$ 是整区，$f,g\in R[x]$，$f\neq 0$，$g\neq 0$，$\deg f=n$，$\deg g=m$，则

(1) $\deg(fg)=n+m=\deg f+\deg g$，从而 $R[x]$ 也是整区；

(2) 若 $f+g\neq 0$，则 $\deg(f+g)\leqslant\max\{\deg f,\deg g\}$；

(3) $R[x]^{*}=R^{*}$。

**命题 5.4 (系数模理想)** @80

设 $R$ 是含幺交换环，$I$ 是 $R$ 的理想，记 $j\colon R\to R/I$ 是自然的商同态，$j(r)=\bar r=r+I$。通过"系数模 $I$"，$j$ 诱导出自然映射 $\tilde j\colon R[x]\to(R/I)[x]$：设 $f(x)=a_nx^n+\cdots+a_1x+a_0\in R[x]$，则

$$\tilde j(f(x))=j(a_n)x^n+\cdots+j(a_1)x+j(a_0).$$

则：

(1) 映射 $\tilde j\colon R[x]\to(R/I)[x]$ 是满的环同态；

(2) 记 $I[x]=\{f(x)=a_nx^n+\cdots+a_1x+a_0\in R[x]\mid a_i\in I,\ 0\leqslant i\leqslant n\}$，则 $\operatorname{Ker}\tilde j=I[x]$，且 $\tilde j$ 诱导环同构

$$R[x]/I[x]\cong(R/I)[x];$$

(3) $I$ 是 $R$ 的素理想当且仅当 $I[x]$ 是 $R[x]$ 的素理想。

**定理 5.5 (带余除法)** @81

设 $R$ 是含幺交换环，$0\neq f(x)\in R[x]$，设 $f(x)=a_nx^n+\cdots+a_1x+a_0$，且 $a_n\in R^{*}$，则对任意多项式 $g(x)\in R[x]$，存在唯一多项式 $q(x),r(x)\in R[x]$，使得

$$g(x)=q(x)f(x)+r(x),$$

且 $r(x)=0$ 或 $\deg r(x)<\deg f(x)$。称 $q(x)$ 是**商式**，$r(x)$ 是**余式**。

**定义 (多项式的整除)** @81

设 $R$ 是含幺交换环，$g(x)\in R[x]$，$0\neq f(x)\in R[x]$。若存在 $q(x)\in R[x]$，使得 $g(x)=q(x)f(x)$，则称 $f(x)$ **整除** $g(x)$，记作 $f(x)\mid g(x)$。否则称 $f(x)$ **不整除** $g(x)$，记作 $f(x)\nmid g(x)$。

由定理 5.5 知，若 $f$ 满足定理 5.5 的条件，则 $f(x)\mid g(x)$ 等价于余式 $r(x)=0$。

**注 (首项系数可逆)** @81

定理 5.5 中的条件 $a_n\in R^{*}$ 是不能缺少的。例如考虑 $R=\mathbb{Z}$，$f(x)=2x$，$g(x)=x^2+1$，则不存在 $q(x),r(x)\in\mathbb{Z}[x]$，$\deg r(x)<2$，使得 $x^2+1=q(x)\cdot(2x)+r(x)$。另一方面，如果 $R$ 是一个域，有 $R^{*}=R\setminus\{0\}$，故此时定理 5.5 对任意 $0\neq f(x)\in R[x]$ 都成立。

**定理 5.6 (主理想整环)** @82

设 $F$ 是一个域，$I$ 是 $F[x]$ 的一个理想，则 $I$ 是主理想，即存在 $f(x)\in I$，使得 $I=(f(x))$。

**定义 (多元多项式环)** @82

设 $R$ 是环，$x_1,x_2,\cdots,x_n$ 是未定元。定义以 $R$ 为系数的 **$n$ 元多项式环**

$$R[x_1,x_2,\cdots,x_n]\triangleq(R[x_1,x_2,\cdots,x_{n-1}])[x_n],$$

即以 $n-1$ 元多项式环 $R[x_1,x_2,\cdots,x_{n-1}]$ 为系数的一元多项式环。

**例 1 (二元多项式展开)** @82

假设 $R$ 是含幺环，由定义 $R[x_1,x_2]=R[x_1][x_2]$，$x_1\cdot x_2=x_2\cdot x_1$。设 $f(x_1,x_2)\in R[x_1,x_2]$，则

$$f(x_1,x_2)=a_n(x_1)\cdot x_2^n+\cdots+a_1(x_1)\cdot x_2+a_0(x_1),$$

其中 $a_0(x_1),a_1(x_1),\cdots,a_n(x_1)\in R[x_1]$。展开后

$$f(x_1,x_2)=\sum_{i=0}^{n_1}\sum_{j=0}^{n}a_{i,j}x_1^ix_2^j,\qquad a_{i,j}\in R.$$

一般地，对 $f\in R[x_1,x_2,\cdots,x_n]$，有

$$f(x_1,x_2,\cdots,x_n)=\sum_{i=0}^{m_n}a_i(x_1,x_2,\cdots,x_{n-1})\cdot x_n^i=\sum_{i_1=0}^{m_1}\sum_{i_2=0}^{m_2}\cdots\sum_{i_n=0}^{m_n}a_{i_1,i_2,\cdots,i_n}x_1^{i_1}x_2^{i_2}\cdots x_n^{i_n},$$

且对任意 $1\leqslant i,j\leqslant n$，$x_i\cdot x_j=x_j\cdot x_i$。

**定义 (单项式与次数)** @82

称形如 $cx_1^{i_1}x_2^{i_2}\cdots x_n^{i_n}$（$c\in R\setminus\{0\}$ 且 $i_1,i_2,\cdots,i_n$ 是非负整数）的多项式为**单项式**，这里 $x_i^0=1$，$i_1+i_2+\cdots+i_n$ 是其**次数**。

对任意 $0\neq f\in R[x_1,x_2,\cdots,x_n]$，$f$ 是有限多个单项式之和，定义 $f$ 的次数为出现在 $f$ 中的单项式的最大次数，记为 $\deg f$。

**例 2 (三元多项式的次数)** @82

设 $f(x_1,x_2,x_3)=x_1^2x_2+x_2^3+2x_1x_2+1\in\mathbb{Z}[x_1,x_2,x_3]$，则 $\deg f=3$。

**命题 5.7 (多元多项式整区)** @82

设 $R$ 是整区，则多元多项式环 $R[x_1,x_2,\cdots,x_n]$ 也是整区。

**定义 (零点与求值)** @83

设 $R$ 是一个交换环，$f(x)=a_nx^n+\cdots+a_1x+a_0\in R[x]$ 是 $R$ 上的一个一元多项式。对于任意 $u\in R$，定义 $f(u)=a_nu^n+\cdots+a_1u+a_0\in R$，这样每个 $f(x)\in R[x]$ 定义了一个"函数" $f\colon R\to R$，$u\mapsto f(u)$。若 $f(u)=0$，则称 $u\in R$ 是 $f(x)$ 在 $R$ 上的一个**零点**（或**根**）。

**命题 5.8 (零点与一次因式)** @83

设 $R$ 是含幺交换环，$a\in R$，$f(x)\in R[x]$，则 $(x-a)\mid f(x)$ 等价于 $f(a)=0$，即 $a$ 是 $f(x)$ 的零点。

**命题 5.9 (零点个数上界)** @83

设 $F$ 是一个域，$0\neq f(x)\in F[x]$，$n=\deg f$，则 $f(x)$ 在 $F$ 中至多有 $n$ 个不同的零点。

**推论 5.10 (无限域上恒等)** @83

设 $F$ 是一个无限域，$f(x)\in F[x]$，满足对于任意 $u\in F$，都有 $f(u)=0$，则 $f(x)$ 是零多项式。

**例 3 (有限域上的零点)** @83

设 $F$ 是一个有限域，$\lvert F\rvert=q$，考虑非零多项式 $f(x)=x^q-x\in F[x]$，则对任意 $a\in F$，都有 $f(a)=0$。首先 $f(0)=0$；对于任意 $u\in F^{*}=F\setminus\{0\}$，由于 $F^{*}$ 是一个 $q-1$ 阶 Abel 群，故 $u^{q-1}=1$，即 $u^q=u$，$u$ 是 $f(x)$ 的零点。这个例子说明推论 5.10 对有限域是不成立的。

**定义 (重零点与重数)** @84

设 $F$ 是一个域，$0\neq f(x)\in F[x]$，$a\in F$ 是 $f(x)$ 的零点，若 $(x-a)^n\mid f(x)$ 且 $(x-a)^{n+1}\nmid f(x)$，则称 $a$ 是 $f(x)$ 的一个 **$n$ 重零点**，$n$ 称为零点 $a$ 的**重数**。

**定义 (不可约多项式)** @84

设 $R$ 是整区，$0\neq f\in R[x]$ 且 $f\notin R[x]^{*}$。如果 $f$ 满足下列条件：若 $f=f_1\cdot f_2$，$f_1,f_2\in R[x]$，则有 $f_1\in R[x]^{*}$ 或 $f_2\in R[x]^{*}$，那么称 $f$ 为 $R$ 上的**不可约**（irreducible）多项式；否则称 $f$ 为 $R$ 上的**可约**（reducible）多项式。

**例 4 (低次不可约判据)** @84

设 $F$ 是域。

(1) $F[x]$ 中的一次多项式都是不可约的。

(2) 设 $f\in F[x]$，$\deg f=2$ 或 $\deg f=3$，则 $f$ 是 $F$ 上的不可约多项式当且仅当 $f$ 在 $F$ 上没有零点。若 $f$ 有零点 $a\in F$，由命题 5.8，$(x-a)\mid f$，故 $f$ 可约；反之若 $f$ 可约，由于 $\deg f=2$ 或 $3$，一定有 $h\in F[x]$，$\deg h=1$，使得 $h\mid f$，而一次多项式在 $F$ 上有零点，故 $f$ 在 $F$ 上有零点。

**例 5 (四次多项式不可约)** @84

考察 $\mathbb{Z}$ 上多项式 $f(x)=5x^4+21x^3+36x^2+45x+3$。首先由命题 5.3，$\mathbb{Z}[x]^{*}=\mathbb{Z}^{*}=\{\pm 1\}$。若 $f$ 可约，设 $f=f_1f_2$，$f_1,f_2\in\mathbb{Z}[x]\setminus\{\pm 1\}$。由于 $f$ 的系数的最大公因子是 $1$，故 $\deg f_i$ 均大于 $0$。记

$$f_1(x)=a_nx^n+\cdots+a_1x+a_0,\qquad f_2(x)=b_mx^m+\cdots+b_1x+b_0,$$

$m,n>0$ 且 $m+n=4$。由 $a_0b_0=3$，不妨设 $a_0=3$，$b_0=1$。则 $45=3b_1+a_1$，从而 $3\mid a_1$；同理可知 $a_2\neq 0$ 时 $3\mid a_2$，$a_3\neq 0$ 时 $3\mid a_3$。无论 $n$ 取 $1,2$ 或 $3$，这都与 $a_n\mid 5$ 矛盾。故 $f(x)$ 不可约。

**命题 5.11 (不可约与极大理想)** @84

设 $F$ 是域，$f\in F[x]$，则主理想 $I=(f)$ 是 $F[x]$ 的极大理想当且仅当 $f$ 是 $F$ 上的不可约多项式。

**推论 5.12 (商环为域判据)** @84

设 $F$ 是域，$0\neq f\in F[x]$，则商环 $F[x]/(f)$ 是域当且仅当 $f$ 是不可约多项式。

**例 6 (复数的代数构造)** @84

设 $f(x)=x^2+1$，由于 $f(x)$ 在实数域上无零点，$f(x)$ 是 $\mathbb{R}[x]$ 中的不可约多项式。因此主理想 $I=(f(x))$ 是极大理想，$\mathbb{R}[x]/I$ 是域。由带余除法，对任意 $h(x)\in\mathbb{R}[x]$，存在唯一的 $a,b\in\mathbb{R}$ 使得 $\overline{h(x)}=h(x)+I=\overline{a+bx}$。由此可以证明 $\mathbb{R}[x]/I$ 同构于复数域 $\mathbb{C}$。

**例 7 (整系数与模二)** @85

设 $f(x)=x^2+3x+1\in\mathbb{Z}[x]$，$I=(2,f(x))$ 是由 $2$ 与 $f(x)$ 生成的理想，则 $I$ 是 $\mathbb{Z}[x]$ 的一个极大理想。事实上，由命题 5.4，"系数模 $2$"映射 $\tilde j\colon\mathbb{Z}[x]\to(\mathbb{Z}/2\mathbb{Z})[x]$ 诱导出环同构 $\alpha\colon\mathbb{Z}[x]/(2)\to(\mathbb{Z}/2\mathbb{Z})[x]$，这里 $(2)$ 是由 $2$ 生成的 $\mathbb{Z}[x]$ 的主理想。$(2)\subset I$，由定理 4.3 有环同构

$$\mathbb{Z}[x]/I\cong(\mathbb{Z}[x]/(2))\big/(I/(2)).$$

注意到在环同构 $\alpha\colon\mathbb{Z}[x]/(2)\to(\mathbb{Z}/2\mathbb{Z})[x]$ 下，理想 $I/(2)$ 的像恰好等于 $(\mathbb{Z}/2\mathbb{Z})[x]$ 的主理想 $(\bar f(x))$，这里 $\bar f(x)=\tilde j(f(x))=x^2+x+1$。因此

$$(\mathbb{Z}[x]/(2))\big/(I/(2))\cong(\mathbb{Z}/2\mathbb{Z})[x]/(\bar f(x)).$$

由于 $\bar f(x)$ 在域 $\mathbb{Z}/2\mathbb{Z}$ 中没有零点，$\bar f(x)$ 不可约，由推论 5.12，$(\mathbb{Z}/2\mathbb{Z})[x]/(\bar f(x))$ 是域，故 $\mathbb{Z}[x]/I$ 是域，$I$ 是极大理想。

### 2.6 分式域、欧氏整区和 PID（p87–94）

**定义 (分式域的等价关系)** @87

设 $R$ 是一个整区，在集合 $R\times(R\setminus\{0\})=\{(a,b)\mid a,b\in R,\ b\neq 0\}$ 上定义一个二元关系 "$\sim$" 如下：对 $(a,b),(c,d)\in R\times(R\setminus\{0\})$，若 $ad=bc$，则定义 $(a,b)\sim(c,d)$。

容易验证上述二元关系 "$\sim$" 满足下列性质：

(1) $(a,b)\sim(a,b)$；

(2) 若 $(a,b)\sim(c,d)$，则有 $(c,d)\sim(a,b)$；

(3) 若 $(a,b)\sim(c,d)$，$(c,d)\sim(e,f)$，则有 $(a,b)\sim(e,f)$。

由此可知 "$\sim$" 定义了 $R\times(R\setminus\{0\})$ 上的一个等价关系。

**定义 (分式域与商域)** @87

令

$$ K(R)\triangleq \bigl(R\times(R\setminus\{0\})\bigr)/\sim $$

为 $R\times(R\setminus\{0\})$ 关于 $\sim$ 的所有等价类的集合。对任意 $(a,b)\in R\times(R\setminus\{0\})$，我们记 $\dfrac{a}{b}\in K(R)$ 为其在 "$\sim$" 下的等价类。

**命题 6.1 (分式域为域)** @87

$K(R)$ 在如下加法和乘法运算下是一个域：

$$ \forall\ \frac{a}{b},\frac{c}{d}\in K(R),\qquad \frac{a}{b}+\frac{c}{d}\triangleq\frac{ad+bc}{bd},\qquad \frac{a}{b}\cdot\frac{c}{d}\triangleq\frac{ac}{bd}. $$

其零元为 $\dfrac{0}{1}$，幺元为 $\dfrac{1}{1}$。称 $K(R)$ 为 $R$ 的**分式域**（fractional field）或**商域**。

**例 1 (常见分式域)** @88

下面是一些常见的分式域。

(1) $K(\mathbb{Z})=\mathbb{Q}$。

(2) 高斯整数环 $\mathbb{Z}[\mathrm{i}]$ 的分式域是 $\mathbb{Q}[\mathrm{i}]=\{u+v\mathrm{i}\mid u,v\in\mathbb{Q}\}$。

(3) 设 $F$ 是域，则

$$ K(F[x])=\left\{\frac{g}{f}\ \middle|\ f,g\in F[x],\ f\neq 0\right\}, $$

称为以 $F$ 为系数的**一元有理函数域**。由分式域的定义，$\dfrac{g_1}{f_1}=\dfrac{g_2}{f_2}$ 等价于 $g_1\cdot f_2=f_1\cdot g_2$。通常记 $F(x)=K(F[x])$。对一般的正整数 $n$，$F(x_1,x_2,\cdots,x_n)=K(F[x_1,x_2,\cdots,x_n])$ 称为以 $F$ 为系数的 $n$ 元有理函数域。

**定义 (特征零)** @88

设 $F$ 是域，$1_F$ 是幺元。考虑由整数环 $\mathbb{Z}$ 到 $F$ 的环同态

$$ f:\mathbb{Z}\to F,\qquad f(n)=n\cdot 1_F, $$

则 $\operatorname{Ker}f=\{n\in\mathbb{Z}\mid n\cdot 1_F=0\}$ 是一个理想，故 $\operatorname{Ker}f=\{0\}$ 或 $m\mathbb{Z}$（$m$ 是正整数）。

若 $\operatorname{Ker}f=\{0\}$，则称域 $F$ 的**特征为零**，记为 $\operatorname{char}F=0$。

**命题 6.2 (特征零域的性质)** @88

设域 $F$ 的特征为零，则

(1) $F$ 有一个最小的子域同构于有理数域 $\mathbb{Q}$；特别地，$F$ 一定是无限域；

(2) 设 $n\in\mathbb{Z}$，$a\in F$，则 $na=0$ 当且仅当 $n=0$ 或者 $a=0$。

**命题 6.3 (特征为素数)** @88

如果 $\operatorname{Ker}f=m\mathbb{Z}$（$m\geqslant 1$），则 $m$ 一定是一个素数。

**定义 (特征 p)** @89

若 $\operatorname{Ker}f=p\mathbb{Z}$，$p$ 是素数，则称域 $F$ 的特征是 $p$，记为 $\operatorname{char}F=p$。

**命题 6.4 (特征 p 域的性质)** @89

设域 $F$ 的特征为 $p$，$p$ 是素数，则

(1) $F$ 有一个最小的子域同构于 $\mathbb{Z}/p\mathbb{Z}$；

(2) 设 $n\in\mathbb{Z}$，$a\in F$，则 $na=0$ 当且仅当 $p\mid n$ 或者 $a=0$。

**注 (域特征的取值)** @89

综上所述，对一个域 $F$，其特征或者是零，或者是一个素数 $p$。由命题 6.2 知，特征零的域一定是无限域；有限域一定是特征 $p$ 的。

**例 2 (特征举例)** @89

$\mathbb{Q}$，$\mathbb{R}$，$\mathbb{C}$，$\mathbb{Q}(x)$ 均为特征零的域。对素数 $p$，$\mathbb{F}_p=\mathbb{Z}/p\mathbb{Z}$，$\mathbb{F}_p(x)$ 是特征 $p$ 的域。这里注意 $\mathbb{F}_p(x)$ 是无限域。

**定理 6.5 (Frobenius 同态)** @89

设 $F$ 是域，$p$ 为素数，$\operatorname{char}F=p$，则对任意 $a,b\in F$ 及正整数 $n$ 有

$$ (a+b)^{p^{n}}=a^{p^{n}}+b^{p^{n}}. $$

**推论 6.6 (多项式环上的 Frobenius)** @90

设 $F$ 是域，$\operatorname{char}F=p$（$p$ 为素数），$F[x]$ 是 $F$ 上的一元多项式环。对任意 $f(x),g(x)\in F[x]$ 及正整数 $n$，都有

$$ (f(x)+g(x))^{p^{n}}=(f(x))^{p^{n}}+(g(x))^{p^{n}}. $$

**例 3 (组合数同余)** @90

我们给出第一章引理 8.1 的另一个证明。设 $n=p^{r}s$，其中 $p$ 是素数，$r>0$，$s>1$，$p\nmid s$，则

$$ \binom{n}{p^{r}}\equiv s \pmod p. $$

记 $\mathbb{F}_p=\mathbb{Z}/p\mathbb{Z}$，考虑系数模 $p$ 映射 $\alpha:\mathbb{Z}[x]\to\mathbb{F}_p[x]$：对 $f(x)=a_nx^{n}+\cdots+a_1x+a_0\in\mathbb{Z}[x]$，定义

$$ \alpha(f(x))=\overline{a_n}x^{n}+\cdots+\overline{a_1}x+\overline{a_0}, $$

这里 $\overline{a_i}$ 表示模 $p$ 的剩余类 $a_i+p\mathbb{Z}$，$0\leqslant i\leqslant n$。由命题 5.4，$\alpha$ 是环同态。考虑整系数多项式 $f(x)=(1+x)^{n}=\sum\limits_{i=0}^{n}\binom{n}{i}x^{i}$，记 $\bar f(x)=\alpha(f(x))$。由 $\alpha$ 是环同态与推论 6.6，

$$ \bar f(x)=\sum_{i=0}^{n}\overline{\binom{n}{i}}x^{i}=(\bar 1+x)^{n}=\bigl((\bar 1+x)^{p^{r}}\bigr)^{s}=(\bar 1+x^{p^{r}})^{s}=\sum_{j=0}^{s}\overline{\binom{s}{j}}(x^{p^{r}})^{j}. $$

比较 $x^{p^{r}}$ 的系数，我们有 $\binom{n}{p^{r}}\equiv s\pmod p$。

**定义 (欧几里得整区)** @90

设 $R$ 是整区，若存在一个函数 $\varphi:R\setminus\{0\}\to\mathbb{Z}_{\geqslant 0}$ 满足下列条件：对任意 $a,b\in R$，$b\neq 0$，存在 $q,r\in R$ 使得 $a=bq+r$ 且 $r=0$ 或 $\varphi(r)<\varphi(b)$，则称 $(R,\varphi)$ 是**欧几里得整区**（Euclidean domain）或**欧氏整区**。等式中 $q$ 可以称为 $a$ 除以 $b$ 的**商**，$r$ 可以称为其**余数**。若函数 $\varphi$ 在上下文中是清楚的，我们将欧氏整区 $(R,\varphi)$ 简记为 $R$。

直观地讲，欧氏整区就是可以做带余除法的环。

**例 4 (欧氏整区举例)** @91

(1) 设 $F$ 是域，由于非零元素之间都可以做除法，不存在非零余数。因此，如取常值函数 $\varphi:F\setminus\{0\}\to\mathbb{Z}_{\geqslant 0}$ 使得 $\varphi(a)=1$（$\forall a$），则可知 $F$ 是一个欧氏整区。

(2) 定义函数 $\varphi:\mathbb{Z}\setminus\{0\}\to\mathbb{Z}_{\geqslant 0}$，$\varphi(n)=|n|$。可知 $\mathbb{Z}$ 是欧氏整区。

(3) 设 $F$ 是域，$F[x]$ 为一元多项式环。定义函数 $\varphi:F[x]\setminus\{0\}\to\mathbb{Z}_{\geqslant 0}$，$\varphi(f)=\deg f$，$\forall f\in F[x]$。根据定理 5.5 可知，$F[x]$ 是欧氏整区。

**例 5 (高斯整数环)** @91

考虑高斯整数环 $\mathbb{Z}[\mathrm{i}]=\{a+b\mathrm{i}\mid a,b\in\mathbb{Z}\}\subset\mathbb{C}$。此时，在复平面上的范数 $\|z\|^{2}=z\bar z$ 诱导了一个函数：

$$ \varphi:\mathbb{Z}[\mathrm{i}]\to\mathbb{Z}_{\geqslant 0},\qquad \varphi(a+b\mathrm{i})=\|a+b\mathrm{i}\|^{2}=a^{2}+b^{2},\quad \forall\, a+b\mathrm{i}\in\mathbb{Z}[\mathrm{i}]. $$

下面我们验证 $\mathbb{Z}[\mathrm{i}]$ 可以通过 $\varphi$ 做带余除法，即对任意非零元 $a+b\mathrm{i},c+d\mathrm{i}\in\mathbb{Z}[\mathrm{i}]$，存在 $q\in\mathbb{Z}[\mathrm{i}]$ 使得

$$ \varphi\bigl(a+b\mathrm{i}-q(c+d\mathrm{i})\bigr)<\varphi(c+d\mathrm{i}). $$

注意到复平面上的范数保持乘法，故 $\varphi$ 是一个保持乘法的函数，即 $\varphi(z_1z_2)=\varphi(z_1)\varphi(z_2)$ 对任意 $z_1,z_2\in\mathbb{Z}[\mathrm{i}]$ 成立。通过两边同除 $\varphi(c+d\mathrm{i})$，我们只需找到 $q\in\mathbb{Z}[\mathrm{i}]$ 使得 $\varphi\left(\dfrac{a+b\mathrm{i}}{c+d\mathrm{i}}-q\right)<1$ 即可。记 $\dfrac{a+b\mathrm{i}}{c+d\mathrm{i}}=u+v\mathrm{i}$，这里 $u,v\in\mathbb{Q}$。取 $q=m+n\mathrm{i}\in\mathbb{Z}[\mathrm{i}]$ 满足 $|m-u|\leqslant\dfrac{1}{2}$，$|n-v|\leqslant\dfrac{1}{2}$，则

$$ \varphi\left(\frac{a+b\mathrm{i}}{c+d\mathrm{i}}-q\right)=(m-u)^{2}+(n-v)^{2}\leqslant\frac{1}{4}+\frac{1}{4}<1. $$

下面我们计算一个具体的例子。设 $x=2+\mathrm{i}$，$y=1+\mathrm{i}$，$\dfrac{x}{y}=\dfrac{3}{2}-\dfrac{1}{2}\mathrm{i}$，由上面的讨论，我们有带余除法

$$ x=2y-\mathrm{i}=(1-\mathrm{i})y+\mathrm{i}. $$

这里第一个等式表示商是 $2$，余数是 $-\mathrm{i}$；第二个等式表示商是 $1-\mathrm{i}$，余数是 $\mathrm{i}$。这个例子也说明，对于一般的欧氏整区，带余除法的商和余数不一定是唯一的。

**定理 6.7 (欧氏整区是 PID)** @91

设 $(R,\varphi)$ 是欧氏整区，则 $R$ 的每个理想都是主理想。

**定义 (主理想整区)** @92

设 $R$ 是一个整区，若 $R$ 的每个理想都是主理想，则称 $R$ 为**主理想整区**（principal ideal domain）。通常简记主理想整区为 PID。

根据定理 6.7，每个欧氏整区都是主理想整区。因此主理想整区的性质都对欧氏整区成立。由例 4 与例 5，我们知道一个域 $F$，整数环 $\mathbb{Z}$，域 $F$ 上的一元多项式环 $F[x]$，以及高斯整数环 $\mathbb{Z}[\mathrm{i}]$ 都是主理想整区。

**命题 6.8 (PID 的非零素理想)** @92

若 $R$ 是一个主理想整区，则 $R$ 的所有非零素理想都是极大理想。

**例 6 (非主理想整区)** @92

(1) 环 $\mathbb{Z}[\sqrt{-5}]=\{a+b\sqrt{-5}\mid a,b\in\mathbb{Z}\}$ 不是 PID，因为理想 $(2,1+\sqrt{-5})$ 不是主理想。

(2) 整系数多项式环 $\mathbb{Z}[x]$ 不是 PID，因为理想 $(2,x)$ 不是主理想。

更一般地，以下命题表明无法通过多项式环构造出更多 PID 的例子。

**命题 6.9 (多项式环何时为 PID)** @92

若 $R$ 是一个整区，则 $R[x]$ 是 PID 当且仅当 $R$ 是一个域。

**注 (PID 但非欧氏整区)** @94

实际上，$R=\mathbb{Z}\left[\dfrac{1+\sqrt{-19}}{2}\right]$ 是一个 PID。因而 $R$ 提供了一个是 PID 但不是欧氏整区的例子。读者可参阅 David S. Dummit 与 Richard M. Foote 所著的 *Abstract Algebra* 第 282 页的例子。

### 2.7 整区上的因式分解（p95–103）

**定义 (整除相伴与不可约)** @95

设 $R$ 是整区，$a,b\in R$。

(1) 设 $a\neq 0$，若存在 $c\in R$ 使得 $b=ac$，则称 $a$ **整除** $b$ 或 $a$ 是 $b$ 的**因子**，记为 $a\mid b$；否则称 $a$ 不整除 $b$，记为 $a\nmid b$。

(2) 设 $a,b$ 是非零元，若 $a\mid b$ 且 $b\mid a$，则称 $a$ 与 $b$ **相伴**。

(3) 将 2.5 节中定义的不可约多项式的概念推广到整区上。设 $a\neq 0$，若 $a$ 不是可逆元，且 $a$ 的所有非可逆元因子都与 $a$ 相伴，则称 $a$ 是**不可约元**。换言之，对非零元 $a\notin R^{*}$，$a$ 是不可约元当且仅当对任何分解式 $a=bc$，总有 $b\in R^{*}$ 或 $c\in R^{*}$。

**例 1 (不可约元举例)** @95

(1) 设 $R=\mathbb{Z}$，则 $a\in\mathbb{Z}$ 是不可约元当且仅当 $a=p$ 或 $-p$，其中 $p$ 是素数。

(2) 设 $R$ 是整区，$a\in R$ 是不可约元，则对任意 $u\in R^{*}$，$ua$ 也是不可约元。

(3) 设 $R=F[x]$，其中 $F$ 是一个域，则 $R$ 中每个一次多项式都是不可约元。

(4) $f(x)=2x+2=2(x+1)$ 在 $\mathbb{Z}[x]$ 中不是不可约元，但在 $\mathbb{Q}[x]$ 中是不可约元。

**注 (整除性质的理想刻画)** @95

用理想的语言，$a\mid b$ 等价于 $(b)\subset(a)$；$a\in R^{*}$ 等价于 $(a)=R$；$a$ 与 $b$ 相伴等价于 $(b)=(a)$。

**引理 7.1 (相伴的刻画)** @95

设 $R$ 是整区，非零元 $a,b\in R$ 相伴的当且仅当存在可逆元 $u\in R^{*}$ 使得 $b=ua$。

**定义 (最大公因子与最小公倍数)** @95

设 $R$ 是整区，$a_1,a_2,\cdots,a_n\in R$ 不全为 $0$，$c,d\in R$。

(1) 若对每个 $1\leqslant i\leqslant n$，都有 $d\mid a_i$，则称 $d$ 为 $a_1,a_2,\cdots,a_n$ 的一个**公因子**。若 $d$ 满足下列条件：

(a) $d$ 是 $a_1,a_2,\cdots,a_n$ 的公因子；

(b) 对 $a_1,a_2,\cdots,a_n$ 的任一公因子 $t$，都有 $t\mid d$，

则称 $d$ 是 $a_1,a_2,\cdots,a_n$ 的一个**最大公因子**，记为 $d=\gcd(a_1,a_2,\cdots,a_n)$。若 $d$ 是可逆元，则称 $a_1,a_2,\cdots,a_n$ **互素**（coprime）。

(2) 若对每个 $1\leqslant i\leqslant n$，都有 $a_i\mid c$，则称 $c$ 为 $a_1,a_2,\cdots,a_n$ 的一个**公倍式**。若 $c$ 满足下列条件：

(a) $c$ 是 $a_1,a_2,\cdots,a_n$ 的一个公倍式；

(b) 对 $a_1,a_2,\cdots,a_n$ 的任一公倍式 $t$，都有 $c\mid t$，

则称 $c$ 为 $a_1,a_2,\cdots,a_n$ 的**最小公倍式**，记为 $c=\operatorname{lcm}(a_1,a_2,\cdots,a_n)$。

**引理 7.2 (最大公因子的性质)** @96

设 $R$ 是整区，$a_1,a_2,\cdots,a_n\in R$ 不全为 $0$。

(1) 若 $d$ 是 $a_1,a_2,\cdots,a_n$ 的一个最大公因子，则对任意 $u\in R^{*}$，$ud$ 也是 $a_1,a_2,\cdots,a_n$ 的一个最大公因子；

(2) 若 $d_1,d_2$ 是 $a_1,a_2,\cdots,a_n$ 的最大公因子，则 $d_1$ 与 $d_2$ 相伴；

(3) $\gcd(a_1,a_2,\cdots,a_n)=1$ 当且仅当 $a_1,a_2,\cdots,a_n$ 的每个公因子都是 $R$ 的可逆元；

(4) 设 $d$ 是 $a_1,a_2,\cdots,a_n$ 的一个最大公因子，则 $\gcd\left(\dfrac{a_1}{d},\dfrac{a_2}{d},\cdots,\dfrac{a_n}{d}\right)=1$。

**命题 7.3 (主理想整区的最大公因子)** @96

设 $R$ 是主理想整区，$a_1,a_2,\cdots,a_n\in R$ 不全为 $0$。

(1) $a_1,a_2,\cdots,a_n$ 的最大公因子与最小公倍数都存在；

(2) 设 $d$ 是 $a_1,a_2,\cdots,a_n$ 的最大公因子，则存在 $r_1,r_2,\cdots,r_n\in R$ 使得 $d=r_1a_1+r_2a_2+\cdots+r_na_n$；

(3) $a_1,a_2,\cdots,a_n$ 互素当且仅当存在 $r_1,r_2,\cdots,r_n\in R$ 使得 $r_1a_1+r_2a_2+\cdots+r_na_n=1$。

**例 2 (辗转相除法)** @97

设 $(R,\varphi)$ 是欧氏整区，$a,b\in R\setminus\{0\}$，不妨设 $\varphi(b)\leqslant\varphi(a)$。由定义，存在 $q,r_1\in R$ 使得 $a=qb+r_1$，$r_1=0$ 或 $\varphi(r_1)<\varphi(b)$。注意到此时由 $a,b$ 生成的理想 $(a,b)$ 等于由 $b,r_1$ 生成的理想 $(b,r_1)$，由命题 7.3 的证明，$\gcd(a,b)$ 与 $\gcd(b,r_1)$ 相伴。若 $r_1=0$，则 $b\mid a$，$b=\gcd(a,b)$。否则，记 $r_0=b$，则存在 $q_1,r_2\in R$ 使得 $b=r_0=q_1r_1+r_2$，$r_2=0$ 或 $\varphi(r_2)<\varphi(r_1)$。重复之前的论证，$\gcd(r_0,r_1)$ 与 $\gcd(r_1,r_2)$ 相伴。由于每进行一次上面的操作，$\varphi(r_i)$ 的值是严格减小的，经过有限步后，我们有 $r_{n+1}=0$，即 $r_n\mid r_{n-1}$，$r_n=\gcd(a,b)$。

**定义 (唯一分解整区)** @97

设 $R$ 是整区，如果它满足下列条件：

(1) 对任意非零不可逆元 $a\in R$，存在 $R$ 中有限多个不可约元 $p_1,p_2,\cdots,p_n$，使得

$$ a=p_1p_2\cdots p_n; $$

(2) 若存在另一个分解 $a=q_1q_2\cdots q_m$，这里 $q_j$ 均为不可约元，则有 $n=m$ 且存在一个置换 $\sigma\in S_n$，使得对每个 $i=1,2,\cdots,n$，$p_i$ 与 $q_{\sigma(i)}$ 相伴，

那么称 $R$ 是**唯一分解整区**（unique factorization domain），简记为 UFD。

**命题 7.4 (唯一分解整区的性质)** @97

设 $R$ 是 UFD，$a,b,c\in R\setminus\{0\}$。

(1) $\gcd(a,b)$ 和 $\operatorname{lcm}(a,b)$ 都存在。

(2) 若 $\gcd(a,b)=1$ 且 $a\mid bc$，则 $a\mid c$。

(3) 设 $a$ 是不可约元，若 $a\mid bc$，则 $a\mid b$ 或者 $a\mid c$。

(4) $a$ 是不可约元当且仅当主理想 $(a)$ 是素理想。

**注 (贝祖等式未必成立)** @98

命题 7.3 的 (2)，(3) 对唯一分解整区不一定成立。例如，本节我们将会证明 $\mathbb{Z}[x]$ 是 UFD，由上一节例 5 知，$\mathbb{Z}[x]$ 不是 PID。读者可以验证在 $\mathbb{Z}[x]$ 中，$2$ 与 $x$ 互素，但不存在 $g(x),h(x)\in\mathbb{Z}[x]$ 使得 $2g(x)+xh(x)=1$。

**命题 7.5 (不可约元与极大理想)** @98

设 $R$ 是一个主理想整区，$p\in R$ 是不可约元当且仅当主理想 $(p)$ 是极大理想。若 $p$ 是不可约元且 $p\mid ab$，则 $p\mid a$ 或者 $p\mid b$。

**定理 7.6 (主理想整区是唯一分解整区)** @98

若 $R$ 是主理想整区，则 $R$ 是唯一分解整区。

**定义 (本原多项式)** @100

设 $R$ 是 UFD，$f(x)=a_nx^n+\cdots+a_1x+a_0\in R[x]$ 为非零多项式。若 $a_n,a_{n-1},\cdots,a_0$ 互素，则称 $f(x)$ 是一个**本原**（primitive）多项式。

**例 3 (本原多项式的例子)** @100

(1) 首一多项式自然是本原的。

(2) 对于任意 $0\neq f(x)=a_nx^n+\cdots+a_1x+a_0\in R[x]$，记 $d=\gcd(a_n,\cdots,a_0)\in R$，

$$ \tilde{f}(x)=\frac{a_n}{d}x^n+\cdots+\frac{a_1}{d}x+\frac{a_0}{d}\in R[x], $$

由定义可知，$\tilde{f}(x)$ 是本原的。而且我们有 $f(x)=d\tilde{f}(x)$。

**命题 7.7 (高斯引理)** @100

设 $R$ 是一个 UFD，其分式域为 $F$，令 $f(x)\in R[x]$。

(1) 若存在 $A(x),B(x)\in F[x]$ 使得 $f(x)=A(x)B(x)$，那么存在非零元素 $r,s\in F$ 使得 $rA(x),sB(x)\in R[x]$ 且 $rs=1$。特别地，$f(x)$ 在 $R[x]$ 中可分解成两个多项式 $rA(x),sB(x)$ 的乘积。

(2) 若 $f(x)$ 是本原多项式，则 $f(x)$ 在 $R[x]$ 中不可约当且仅当 $f(x)$ 在 $F[x]$ 中不可约。

**定理 7.8 (多项式环保持唯一分解)** @101

设 $R$ 为一个整区，则 $R$ 是 UFD 当且仅当 $R[x]$ 是 UFD。

**推论 7.9 (多元多项式环是唯一分解整区)** @101

设 $n$ 是正整数，$R$ 是 UFD，则 $R$ 上的 $n$ 元多项式环 $R[x_1,x_2,\cdots,x_n]$ 也是 UFD。

**例 4 (常见唯一分解整区)** @102

(1) $\mathbb{Z}[x_1,x_2,\cdots,x_n]$ 是唯一分解整区。

(2) 设 $F$ 为域，则 $F[x_1,x_2,\cdots,x_n]$ 是唯一分解整区。

### 2.8 模（p104–113）

**定义 (左模与右模)** @104

设 $R$ 是含幺环，$(M,+)$ 是一个 Abel 群，若存在映射 $R\times M\to M$，$(r,m)\mapsto r\cdot m$ 满足下列条件：对于任意 $r,r_1,r_2\in R$，$m,m_1,m_2\in M$，有

(1) $r\cdot(m_1+m_2)=r\cdot m_1+r\cdot m_2$；

(2) $(r_1+r_2)\cdot m=r_1\cdot m+r_2\cdot m$；

(3) $(r_1\cdot r_2)\cdot m=r_1\cdot(r_2\cdot m)$；

(4) $1\cdot m=m$，

则称 $M$ 是一个左 $R$-模 (module)。由定义可验证对任意 $m\in M$ 及 $r\in R$，有 $0\cdot m=0$ 和 $r\cdot 0=0$。类似地可定义右 $R$-模及左右 $R$-双模；除特别指出外，书中总将左 $R$-模简称为 $R$-模。

**例 1** @104

(1) 如果 $R$ 是含幺环，那么由 $R$ 上的乘法，$R$ 自然地成为左 $R$-模、右 $R$-模、左右 $R$-双模。

(2) 每个 Abel 群 $M$ 上都有唯一的一个 $\mathbb{Z}$-模结构。设 $M$ 是 $\mathbb{Z}$-模，对任意 $x\in M$ 有 $1\cdot x=x$，则对任意正整数 $n$，$n\cdot x=\underbrace{(1+1+\cdots+1)}_{n\text{个}}\cdot x=\underbrace{x+x+\cdots+x}_{n\text{个}}$。由 $0=0\cdot x=(1+(-1))\cdot x$ 可得 $(-1)\cdot x=-x$。故对任意 $n\in\mathbb{Z}$，$x\in M$ 有

$$n\cdot x=\begin{cases}\underbrace{x+x+\cdots+x}_{n\text{个}}, & n>0,\\ 0, & n=0,\\ \underbrace{(-x)+(-x)+\cdots+(-x)}_{-n\text{个}}, & n<0.\end{cases}$$

另一方面，设 $M$ 是一个 Abel 群（加法群），用上式定义映射 $\mathbb{Z}\times M\to M$，$(n,x)\mapsto n\cdot x$，则可以验证 $M$ 是一个 $\mathbb{Z}$-模。

**例 2** @105

设 $D$ 是一个可除环，一个 $D$-模也称为一个 $D$-向量空间 (vector space)。设 $M$ 是一个 $D$-模，$\lambda\in D$，$x\in M$，若 $\lambda\cdot x=0$，则有 $\lambda=0$ 或 $x=0$。事实上，若 $\lambda\neq 0$，由于 $D$ 是可除环，$\lambda$ 有乘法逆元 $\lambda^{-1}$，所以 $x=\lambda^{-1}\cdot(\lambda\cdot x)=\lambda^{-1}\cdot 0=0$。当 $D=k$ 是一个域时，将专门讨论 $k$-向量空间的性质。

**定义 (子模的定义)** @105

设 $M$ 是一个 $R$-模，$N\subset M$ 是一个非空子集，若

(1) $N$ 是 $M$ 的加法子群；

(2) 对任意 $r\in R$ 和 $y\in N$，都有 $r\cdot y\in N$，

则称 $N$ 是 $M$ 的一个子模 (submodule)。

**例 3** @105

设 $R$ 是含幺环。

(1) 若 $M$ 是 $R$-模，则 $\{0\}$ 和 $M$ 是 $M$ 的子模，称为平凡子模。

(2) 若将 $R$ 看作 $R$-模，则子模相当于左理想。

(3) 设 $M$ 是 Abel 群，作为 $\mathbb{Z}$-模，$M$ 的子模相当于子群。

**定义 (商模的构造)** @105

设 $N$ 是 $M$ 的一个 $R$-子模，考虑其加法商群 $M/N=\{x+N\mid x\in M\}$。定义映射 $f\colon R\times M/N\to M/N$ 如下：

$$(r,x+N)\mapsto r\cdot(x+N)=r\cdot x+N,\quad \forall r\in R,\ x+N\in M/N.$$

首先 $f$ 与陪集代表元选取无关。事实上，设 $x+N=\tilde{x}+N$，则存在 $u\in N$ 使得 $\tilde{x}=x+u$，于是 $r\cdot\tilde{x}=r\cdot x+r\cdot u$，$r\cdot\tilde{x}-r\cdot x=r\cdot u$。因为 $N$ 是子模，所以 $r\cdot u\in N$，因而 $r\cdot x+N=r\cdot\tilde{x}+N$。可以验证映射 $f$ 满足 $R$-模定义中的条件，故 $M/N$ 在上述意义下构成一个 $R$-模，称为 $M$ 关于 $N$ 的商模。

**定义 (模同态与同构)** @105

设 $M_1,M_2$ 都是 $R$-模，若映射 $f\colon M_1\to M_2$ 满足下列条件：

(1) $f$ 是加法群同态，即对任意 $x,y\in M_1$，$f(x+y)=f(x)+f(y)$；

(2) 对任意 $r\in R$，$x\in M_1$，都有 $f(r\cdot x)=r\cdot f(x)$，

则称 $f$ 是一个 $R$-模同态。若 $f$ 既是 $R$-模同态，又是一个双射，则称 $f$ 是 $R$-模同构，记为 $M_1\xrightarrow[f]{\ \cong\ }M_2$。

**例 4** @105

设 $M$ 是一个 $R$-模，$N$ 是 $M$ 的子模，则包含映射 $i\colon N\hookrightarrow M$ 是单的 $R$-模同态，商映射 $j\colon M\to M/N$，$j(x)=x+N$，$\forall x\in M$ 是满的 $R$-模同态。恒等映射 $\mathrm{id}_M\colon M\to M$ 是 $R$-模同构。

**定义 (同态的核与像)** @106

设 $f\colon M_1\to M_2$ 是 $R$-模同态，定义 $f$ 的核 $\operatorname{Ker}f=\{a\in M_1\mid f(a)=0\}$；$f$ 的像 $\operatorname{Im}f=\{f(a)\mid a\in M_1\}$。

**命题 8.1** @106

设 $f\colon M_1\to M_2$ 是 $R$-模同态，则

(1) $\operatorname{Ker}f$ 是 $M_1$ 的子模；

(2) $\operatorname{Im}f$ 是 $M_2$ 的子模；

(3) $f$ 是单同态当且仅当 $\operatorname{Ker}f=\{0\}$；

(4) $f$ 是满同态当且仅当 $\operatorname{Im}f=M_2$。

**定理 8.2 (模同态基本定理)** @106

设 $f\colon M\to T$ 是 $R$-模同态，则 $f$ 诱导出 $R$-模同构 $\tilde{f}\colon M/\operatorname{Ker}f\to\operatorname{Im}f$，对任意 $x\in M$，$\tilde{f}(x+\operatorname{Ker}f)=f(x)$。

**定义 (生成的子模)** @106

设 $M$ 是一个 $R$-模，$S$ 是 $M$ 的一个子集，$T(S)=\{W\mid W \text{ 是 } M \text{ 的子模且 } S\subseteq W\}$，定义 $\langle S\rangle=\bigcap_{W\in T(S)}W$，称为由 $S$ 生成的子模。若 $S=\{s_1,s_2,\cdots,s_l\}$ 是有限集，记 $\langle S\rangle=\langle s_1,s_2,\cdots,s_l\rangle$。若存在有限子集 $S$，使得 $M=\langle S\rangle$，则称 $M$ 是有限生成的。若 $M=\langle s\rangle$ 是由一个元素 $s$ 生成的，则称 $M$ 是循环模 (cyclic module)。

**命题 8.3** @106

设 $M$ 是 $R$-模，$S$ 是 $M$ 的一个非空子集，则

$$\langle S\rangle=\left\{\left.\sum_{i=1}^{t}r_i\cdot m_i\ \right|\ r_i\in R,\ m_i\in S,\ 1\leqslant i\leqslant t,\ t\in\mathbb{N}\right\}.$$

特别地，若 $S=\{m_1,m_2,\cdots,m_l\}$，则

$$\langle m_1,m_2,\cdots,m_l\rangle=\left\{\left.\sum_{i=1}^{l}r_i\cdot m_i\ \right|\ r_i\in R,\ 1\leqslant i\leqslant l\right\}.$$

**定义 (线性相关与无关)** @106

设 $M$ 是 $R$-模，$m_1,m_2,\cdots,m_t\in M$，若存在不全为零的元素 $r_1,r_2,\cdots,r_t\in R$，使得 $r_1m_1+r_2m_2+\cdots+r_tm_t=0$，则称 $m_1,m_2,\cdots,m_t$ 是 $R$-线性相关的。否则，称 $m_1,m_2,\cdots,m_t$ 是 $R$-线性无关的。

设 $S\subset M$ 是一个子集，若 $S$ 中任意有限多个两两不同的元素都是 $R$-线性无关的，则称 $S$ 是 $R$-线性无关的。

**例 5** @107

在 $R$-模 $M$ 中，设 $0\neq m\in M$，则 $\{m\}$ 是 $R$-线性无关的当且仅当对任意 $0\neq r\in R$，都有 $r\cdot m\neq 0$。

**定义 (基与自由模)** @107

设 $M$ 是 $R$-模，$B\subset M$ 是一个子集。若 $B$ 和 $M$ 满足下列条件：

(1) $B$ 是 $R$-线性无关的；

(2) 由 $B$ 生成的子模 $\langle B\rangle=M$，

则称 $B$ 是 $M$ 的一组基。若 $M$ 存在一组基，则称 $M$ 是一个自由 $R$-模。

**例 6** @107

(1) 零模 $\{0\}$ 可看作是以 $B=\varnothing$ 为基的自由 $R$-模。

(2) $R^n=\{(x_1,x_2,\cdots,x_n)\mid x_i\in R,\ 1\leqslant i\leqslant n\}$ 是 $n$ 个 $R$ 的直和，对任意 $\lambda\in R$，$(x_1,x_2,\cdots,x_n)\in R^n$，由 $\lambda\cdot(x_1,x_2,\cdots,x_n)=(\lambda x_1,\lambda x_2,\cdots,\lambda x_n)$ 定义了 $R^n$ 的 $R$-模结构。记 $e_i=(0,\cdots,1,\cdots,0)$（其中第 $i$ 个位置为 $1$），$1\leqslant i\leqslant n$，则 $\{e_i\mid 1\leqslant i\leqslant n\}$ 构成 $R^n$ 的一组基，因此 $R^n$ 是一个自由 $R$-模。

(3) 对 Abel 群 $A$ 而言，$A$ 是秩 $n$ 的自由 Abel 群当且仅当 $A$ 是具有由 $n$ 个元素组成的基的自由 $\mathbb{Z}$-模。

(4) 设 $(A,+)$ 是一个有限 Abel 群，$|A|>1$，则作为 $\mathbb{Z}$-模，$A$ 不是自由模。事实上，设 $N=|A|$，由 Lagrange 定理，对任意 $a\in A$，$N\cdot a=0$，因此 $A$ 的任意非空子集都是 $\mathbb{Z}$-线性相关的，故 $A$ 没有基。

**定理 8.4** @107

设 $M$ 是一个自由 $R$-模，$B$ 是其一组基。设 $T$ 是任一 $R$-模，对任意给定的映射 $f_0\colon B\to T$，存在唯一的 $R$-模同态 $f\colon M\to T$ 使得对任意 $b\in B$ 都有 $f(b)=f_0(b)$。

**定理 8.5** @108

设 $R$ 是主理想整区，$M$ 是有限生成 $R$-模，则存在唯一的非负整数 $n$，非平凡主理想 $(d_1),(d_2),\cdots,(d_l)$，且 $d_1\mid d_2\mid\cdots\mid d_l$，使得

$$M\cong R^n\oplus R/(d_1)\oplus R/(d_2)\oplus\cdots\oplus R/(d_l).$$

定理中的 $n$ 称为 $M$ 的秩 (rank)。对 $R=\mathbb{Z}$ 整数环，$M$ 是有限生成 Abel 群时，将在 2.9 节中证明定理 8.5；对一般的情况，证明从略。

**定义 (向量空间)** @108

设 $F$ 是一个域，若 $V$ 是一个 $F$-模，则称 $V$ 是域 $F$ 上的向量空间 (vector space)。对 $\lambda\in F$，$v\in V$，称 $\lambda\cdot v$ 是 $\lambda$ 与向量 $v$ 的数乘。$V$ 的子模 $W$ 称为 $V$ 的子空间 (subspace)，它的商模 $V/W$ 称为 $V$ 关于 $W$ 的商空间 (quotient space)。

设 $V_1,V_2$ 是 $F$-向量空间，若映射 $f\colon V_1\to V_2$ 是一个 $F$-模同态，则称 $f$ 是一个 $F$-线性映射；若 $f$ 是一个 $F$-模同构，则称 $f$ 是一个 $F$-线性同构。若存在 $F$-线性同构 $f\colon V_1\to V_2$，则称 $V_1$ 与 $V_2$ 是同构的。

若域 $F$ 上的向量空间 $V$ 有一个由 $n$ 个元素（也称为向量）组成的基，则称 $V$ 是 $F$ 上的一个 $n$ 维向量空间，维数记为 $\dim_F(V)$。

**定理 8.6** @108

设 $V$ 是一个 $n$ 维 $F$-向量空间，若 $B_1$，$B_2$ 是 $V$ 的两组基，则 $B_1$，$B_2$ 是有限集且 $|B_1|=|B_2|=n$。

**命题 8.7** @109

设 $V_1,V_2$ 是有限维 $F$-向量空间，则 $V_1$ 同构于 $V_2$ 当且仅当 $\dim_F(V_1)=\dim_F(V_2)$。

**例 7** @109

设 $V$ 是一个 $n$ 维 $F$-向量空间，则 $V\cong F^n$。

**命题 8.8** @109

设 $F$ 是一个域，$V$ 是一个 $F$-向量空间，则 $V$ 是有限维的当且仅当 $V$ 是有限生成的。

**例 8** @109

设 $K$ 是一个有限域，其特征 $\operatorname{char}K=p$ 是一个素数且 $K$ 有一个（最小）子域 $K_0\cong\mathbb{F}_p=\mathbb{Z}/p\mathbb{Z}$。$K$ 是有限集，故作为 $K_0$-向量空间是有限生成的；由命题 8.8，$K$ 是有限维 $K_0$-向量空间，设 $n=\dim_{K_0}K$，则 $K\cong K_0^n\cong\mathbb{F}_p^n$，$|K|=|K_0|^n=p^n$。综上，任一有限域的阶均为一个素数的幂次，这个素数是其特征。例如，不存在含 $6$ 个元素的域。

**命题 8.9** @109

设 $F$ 是域，$V$ 是 $n$ 维 $F$-向量空间，$W$ 是 $V$ 的子空间。

(1) $W$ 也是有限维 $F$-向量空间且 $m=\dim_F W\leqslant n$；设 $T=\{w_1,w_2,\cdots,w_m\}$ 是 $W$ 的一组基，则可以将其扩展成 $V$ 的一组基 $\{w_1,w_2,\cdots,w_m,u_{m+1},\cdots,u_n\}$。

(2) 对 $v\in V$，记 $\bar{v}=v+W\in V/W$，则 $\{\bar{u}_{m+1},\cdots,\bar{u}_n\}$ 是商空间 $V/W$ 的一组基；故 $V/W$ 是有限维的，且 $\dim_F(V/W)=\dim_F V-\dim_F W$。

**定理 8.10 (同态基本定理)** @110

设 $F$ 是域，$f\colon V_1\to V_2$ 是 $F$-线性映射，则 $f$ 诱导出 $F$-线性同构 $\tilde{f}\colon V_1/\operatorname{Ker}f\to\operatorname{Im}f$，$\tilde{f}(v+\operatorname{Ker}f)=f(v)$，$\forall v\in V_1$。特别地，若 $V_1$ 是有限维的，则有 $\dim_F V_1=\dim_F(\operatorname{Ker}f)+\dim_F(\operatorname{Im}f)$。

**命题 8.11** @110

对域 $F$ 上的齐次线性方程组

$$\begin{cases}a_{11}x_1+a_{12}x_2+\cdots+a_{1n}x_n=0,\\ a_{21}x_1+a_{22}x_2+\cdots+a_{2n}x_n=0,\\ \cdots\cdots\cdots\cdots\cdots\cdots\\ a_{m1}x_1+a_{m2}x_2+\cdots+a_{mn}x_n=0,\end{cases}\tag{2.1}$$

当未知元的个数大于方程的个数（即 $n>m$）时，它在 $F$ 中一定有非零解。

**定义 (自同态代数)** @111

设 $V$ 是一个 $F$-向量空间，记 $\operatorname{End}_F(V)=\{f\colon V\to V\mid f \text{ 是 } F\text{-线性映射}\}$。对 $f,g\in\operatorname{End}_F(V)$，定义

$$(f+g)(v)=f(v)+g(v),\qquad (f\circ g)(v)=f(g(v)),$$

则 $\operatorname{End}_F(V)$ 在 $(+,\circ)$ 下构成一个含幺环，零元是零映射 $0\colon V\to V$（$0(v)=0$，$\forall v\in V$），幺元为恒等映射 $1=1_V\colon V\to V$（$1_V(x)=x$，$\forall x\in V$）。对任意 $\lambda\in F$，$f\in\operatorname{End}_F(V)$，定义 $(\lambda\cdot f)(v)=\lambda\cdot f(v)$（$\forall v\in V$），则 $\lambda\cdot f\in\operatorname{End}_F(V)$，故 $\operatorname{End}_F(V)$ 也是一个 $F$-向量空间，且对任意 $\lambda\in F$，$f,g\in\operatorname{End}_F(V)$，有 $(\lambda\cdot f)\circ g=\lambda\cdot(f\circ g)=f\circ(\lambda\cdot g)$。称 $\operatorname{End}_F(V)$ 是 $V$ 在 $F$ 上的自同态代数，其乘法群

$$\operatorname{End}_F(V)^*=\{f\in\operatorname{End}_F(V)\mid f \text{ 是同构}\}=\mathrm{GL}(V)$$

称为 $V$ 在 $F$ 上的自同构群，也称为 $V$ 在 $F$ 上的一般线性群。

设 $n=\dim_F V$，取定 $V$ 的一组基 $\{e_1,e_2,\cdots,e_n\}$，对于任意 $f\in\operatorname{End}_F(V)$，对每个 $1\leqslant j\leqslant n$，设 $f(e_j)=\sum\limits_{i=1}^{n}a_{ij}e_i$，$a_{ij}\in F$，记 $A_f=(a_{ij})_{n\times n}\in M_n(F)$，则映射

$$\alpha\colon\operatorname{End}_F(V)\to M_n(F),\qquad f\mapsto A_f$$

给出了一个 $F$-向量空间同构且 $\alpha(f\circ g)=\alpha(f)\alpha(g)$，

$$\alpha(\mathrm{GL}(V))=\mathrm{GL}_n(F)=\{A\in M_n(F)\mid A \text{ 可逆}\}.$$

当 $F$ 是有限域时，$M_n(F)$，$\mathrm{GL}_n(F)$ 都是有限群。

**例 9** @111

设 $F$ 是有限域，$|F|=q$，则 $|\mathrm{GL}_2(F)|=(q^2-1)(q^2-q)$。

事实上，$A=\begin{pmatrix}a_{11} & a_{12}\\ a_{21} & a_{22}\end{pmatrix}\in\mathrm{GL}_2(F)$ 当且仅当 $A$ 的两行 $r_1=(a_{11},a_{12})\in F^2$，$r_2=(a_{21},a_{22})\in F^2$ 是 $F$-线性无关的。故 $r_1\in F^2\setminus\{0\}$ 有 $q^2-1$ 种可能，取定 $r_1$ 后，$r_2\notin\langle r_1\rangle$，$\langle r_1\rangle$ 是由 $r_1$ 生成的子空间，故 $r_2$ 有 $q^2-q$ 种可能，所以 $|\mathrm{GL}_2(F)|=(q^2-1)(q^2-q)$。

**定义 (射影空间)** @111

设 $V$ 是一个 $n$ 维 $F$-向量空间，定义 $\mathbb{P}(V)=\{V \text{ 的一维线性子空间}\}$，称为 $V$ 上的射影空间。

**例 10** @111

(1) 设 $F=\mathbb{R}$，$V=\mathbb{R}^2$，$\mathbb{P}(V)=S^1$（一维圆周）。

(2) 设 $F$ 是有限域，$|F|=q$，则 $\mathbb{P}(V)$ 是有限集，$|\mathbb{P}(V)|=\dfrac{q^n-1}{q-1}=1+q+q^2+\cdots+q^{n-1}$。事实上，对于任意 $0\neq v\in V$，$l_v=\langle v\rangle$ 是一维子空间。对 $v_1\neq v_2\in V\setminus\{0\}$，$l_{v_1}=l_{v_2}$ 当且仅当存在 $\lambda\in F^*$，使得 $v_2=\lambda v_1$，所以 $|\mathbb{P}(V)|=\dfrac{q^n-1}{q-1}=1+q+q^2+\cdots+q^{n-1}$。

### 2.9 有限生成 Abel 群的结构（p114–119）

**定义 (扭子群与扭元素)** @114

设 $G$ 是有限生成 Abel 群，定义 $G$ 的**扭子群**（或称**挠子群**，torsion subgroup）如下：

$$ \operatorname{Tor}(G)\triangleq\{a\in G\mid o(a)<\infty\}. $$

运用第一章命题 1.2，容易验证 $\operatorname{Tor}(G)$ 确实是 $G$ 的子群，其中的元素称为**扭元素**（torsion element）。

**引理 9.1** @114

设整数 $m_1,m_2,\cdots,m_n$ 不全为 $0$ 且 $\gcd(m_1,m_2,\cdots,m_n)=1$。则存在矩阵 $M=(a_{ij})\in M_n(\mathbb{Z})$ 满足 $|M|=\pm 1$，且对 $1\leqslant j\leqslant n$，都有 $a_{1j}=m_j$。

**命题 9.2** @114

设 $m,n$ 是正整数，则 $\mathbb{Z}^n$ 同构于 $\mathbb{Z}^m$ 当且仅当 $n=m$。

**命题 9.3** @115

设 $G$ 是有限生成 Abel 群，则存在唯一的非负整数 $n$ 满足下面的条件：存在 $G$ 的子群 $F\cong\mathbb{Z}^n$，使得 $G$ 有内直和分解

$$ G=F\oplus\operatorname{Tor}(G), $$

其中 $F$ 称为 $G$ 的**自由部分**，$n$ 称为 $G$ 的**秩**。特别地，$\operatorname{Tor}(G)$ 是有限 Abel 群。

**定理 9.4** @116

设 $p$ 为一个素数，$A$ 为有限 Abel $p$-群。则存在正整数 $t$、正整数列 $l_1\geqslant l_2\geqslant\cdots\geqslant l_t$ 及内直和分解

$$ A=\bigoplus_{i=1}^{t}A_i, $$

其中 $A_i\cong\mathbb{Z}_{p^{l_i}}$，对 $1\leqslant i\leqslant t$。

**定理 9.5 (标准分解定理)** @117

设 $A$ 为非零有限 Abel 群，则存在唯一的正整数组 $(m,d_1,d_2,\cdots,d_m)$ 使得 $A$ 有内直和分解

$$ A=\bigoplus_{i=1}^{m}A_i, $$

其中 $A_i\cong\mathbb{Z}_{d_i}$，$1<d_m\mid d_{m-1}\mid\cdots\mid d_1$。

**注 (结构小结)** @117

对于有限生成 Abel 群 $G$，存在内直和分解

$$ G=N\oplus\operatorname{Tor}(G), $$

其中 $N\cong\mathbb{Z}^n$ 为自由部分，扭子群 $\operatorname{Tor}(G)$ 为有限 Abel 群且它有标准分解式

$$ \operatorname{Tor}(G)=\bigoplus_{i=1}^{m}A_i, $$

其中 $A_i\cong\mathbb{Z}_{d_i}$，$1<d_m\mid d_{m-1}\mid\cdots\mid d_1$，并且数组 $(m,d_1,d_2,\cdots,d_m)$ 由 $A$ 唯一确定。

**例 1** @118

确定所有 $72$ 阶 Abel 群的结构。

解：即寻找所有的 $(m,d_1,d_2,\cdots,d_m)$ 使 $1<d_m\mid d_{m-1}\mid\cdots\mid d_1$，$d_1d_2\cdots d_m=72=2^33^2$。枚举指数 $3$ 和指数 $2$ 的划分：$3=3+0=2+1=1+1+1$（三种），$2=2+0=1+1$（两种），故 $72$ 阶群 $G$ 共有 $3\times 2=6$ 种结构如下：

$$ \mathbb{Z}_{72},\ \mathbb{Z}_{24}\oplus\mathbb{Z}_3,\ \mathbb{Z}_{36}\oplus\mathbb{Z}_2,\ \mathbb{Z}_{12}\oplus\mathbb{Z}_6,\ \mathbb{Z}_{18}\oplus\mathbb{Z}_2^2,\ \mathbb{Z}_6^2\oplus\mathbb{Z}_2. $$

**例 2** @118

设 $p^n$ 是素数幂，证明 $\mathbb{Z}_{p^n}$ 不可分解。

证明：在结构定理中，$\mathbb{Z}_{p^n}$ 对应 $m=1$，$d_1=p^n$ 的分解。由分解的唯一性，$\mathbb{Z}_{p^n}$ 不可再被分解为 $\displaystyle\bigoplus_{i=1}^{t}\mathbb{Z}_{p^{l_i}}$，$l_1\geqslant l_2\geqslant\cdots\geqslant l_t$。

**例 3** @118

设 $m>1$，$n>1$，求 $\mathbb{Z}_m\oplus\mathbb{Z}_n$ 的标准分解式。

证明：设素因数分解 $m=p_1^{\alpha_1}p_2^{\alpha_2}\cdots p_k^{\alpha_k}$，$n=p_1^{\beta_1}p_2^{\beta_2}\cdots p_k^{\beta_k}$。考虑最小公倍数

$$ d_1=[m,n]=p_1^{\max\{\alpha_1,\beta_1\}}p_2^{\max\{\alpha_2,\beta_2\}}\cdots p_k^{\max\{\alpha_k,\beta_k\}}, $$

最大公约数

$$ d_2=(m,n)=p_1^{\min\{\alpha_1,\beta_1\}}p_2^{\min\{\alpha_2,\beta_2\}}\cdots p_k^{\min\{\alpha_k,\beta_k\}}. $$

则 $\mathbb{Z}_m\oplus\mathbb{Z}_n=\mathbb{Z}_{[m,n]}\oplus\mathbb{Z}_{(m,n)}$ 是标准分解。

**例 4** @118

求 $\mathbb{Z}^2/B$，$B=\langle(6,30)\rangle$ 的结构。

证明：考虑 $u=(1,5)$，$v=(0,1)$，则 $\{u,v\}$ 是 $\mathbb{Z}^2$ 的一组基。故有自同构 $\mathbb{Z}^2\cong\mathbb{Z}^2$ 将 $u$ 映到 $(1,0)$，$v$ 映到 $(0,1)$，从而将 $B$ 映到 $\langle(6,0)\rangle$。于是

$$ \mathbb{Z}^2/B\cong\mathbb{Z}_6\oplus\mathbb{Z}. $$

**例 5** @118

设

$$ A=\{(p,q)\in\mathbb{Q}^2\mid \forall(x,y)\in\mathbb{Z}^2,\ 4px+2py+2qx+4qy\in\mathbb{Z}\}, $$

求商群 $A/\mathbb{Z}^2$ 的结构。

证明：条件式可用二次型写为：$\forall(x,y)\in\mathbb{Z}^2$，

$$ (p,q)\begin{pmatrix}4&2\\2&4\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}=(4p+2q,\,2p+4q)\begin{pmatrix}x\\y\end{pmatrix}\in\mathbb{Z}. $$

该二次型属于 $A$ 的充分必要条件为 $(4p+2q,2p+4q)\in\mathbb{Z}^2$。求逆，这等价于

$$ (p,q)=\left(\frac{2m-n}{6},\,\frac{2n-m}{6}\right),\quad (m,n)\in\mathbb{Z}^2. $$

故有同构 $A\cong\mathbb{Z}^2$，$(p,q)\mapsto(m,n)$ 将 $(1,0)$ 映到 $(4,2)$，将 $(0,1)$ 映到 $(2,4)$。那么 $A/\mathbb{Z}^2\cong\mathbb{Z}^2/B$，其中 $B=\langle(4,2),(2,4)\rangle$。

考虑 $u=(1,1)$，$v=(2,1)$，则 $\{u,v\}$ 是 $\mathbb{Z}^2$ 的一组基。故有自同构 $\mathbb{Z}^2\cong\mathbb{Z}^2$，将 $u$ 映到 $(1,0)$，$v$ 映到 $(0,1)$，从而将 $B$ 映到

$$ \langle(0,2),(6,-2)\rangle=6\mathbb{Z}\oplus2\mathbb{Z}\subset\mathbb{Z}\oplus\mathbb{Z}. $$

于是 $A/\mathbb{Z}^2\cong\mathbb{Z}_6\oplus\mathbb{Z}_2$。

**例 6** @119

设 $G$ 是 $24$ 阶循环群，求自同构群 $\operatorname{Aut}(G)$ 的结构。

证明：由第一章 1.6 节的例 3，我们知道 $\operatorname{Aut}(G)\cong\mathbb{Z}_{24}^{*}$。由中国剩余定理 $\mathbb{Z}_{24}\cong\mathbb{Z}_8\times\mathbb{Z}_3$，所以 $\mathbb{Z}_{24}^{*}\cong\mathbb{Z}_8^{*}\times\mathbb{Z}_3^{*}$。由于 $\mathbb{Z}_8^{*}\cong\{\bar1,\bar3,\bar5,\bar7\}\cong\mathbb{Z}_2\oplus\mathbb{Z}_2$（所有非平凡元素都二阶），$\mathbb{Z}_3^{*}=\{\bar1,\bar2\}\cong\mathbb{Z}_2$，得

$$ \operatorname{Aut}(G)\cong\mathbb{Z}_2\oplus\mathbb{Z}_2\oplus\mathbb{Z}_2. $$

### 2.10 环的进一步讨论（p120–124）

**注 (n 次单位根群)** @120

设 $n$ 是一个正整数，令

$$ \mu_n=\{z\in\mathbb{C}\mid z^{n}=1\} $$

为 $f(x)=x^{n}-1$ 在复数域 $\mathbb{C}$ 上的零点集，则 $\mu_n$ 是 $\mathbb{C}^{*}$ 的一个 $n$ 阶循环子群。具体地，我们有 $\mu_n=\{\mathrm{e}^{\frac{2\pi l}{n}\mathrm{i}}\mid 1\leqslant l\leqslant n\}$，这里 $\mathrm{e}^{\frac{2\pi l}{n}\mathrm{i}}=\cos\frac{2\pi l}{n}+\mathrm{i}\sin\frac{2\pi l}{n}$。记 $\zeta=\mathrm{e}^{\frac{2\pi}{n}\mathrm{i}}$，则 $\zeta$ 是 $\mu_n$ 的一个生成元。进一步，$\zeta^{l}\,(1\leqslant l\leqslant n)$ 是 $\mu_n$ 的生成元（即 $o(\zeta^{l})=n$）当且仅当 $\gcd(l,n)=1$，即 $l$ 与 $n$ 互素。

**定义 (分圆多项式)** @120

称

$$ \Phi_n(x)=\prod_{\substack{1\leqslant l\leqslant n\\ \gcd(l,n)=1}}(x-\zeta^{l}) $$

为第 $n$ 个**分圆多项式**（cyclotomic polynomial）。

**例 1 (前六个分圆多项式)** @120

$$ \Phi_1(x)=x-1,\ \Phi_2(x)=x+1,\ \Phi_3(x)=x^{2}+x+1,\ \Phi_4(x)=x^{2}+1, $$$$ \Phi_5(x)=x^{4}+x^{3}+x^{2}+x+1,\ \Phi_6(x)=x^{2}-x+1. $$

由定义，$\Phi_n(x)$ 是一个首一复系数多项式，下面我们将证明 $\Phi_n(x)$ 是首一整数系数多项式。

**引理 10.1 (首一因子仍整系数)** @120

设 $f(x)\in\mathbb{Z}[x]$，$\deg f\geqslant 1$，$g(x)\in\mathbb{Z}[x]$ 首一。若存在 $h(x)\in\mathbb{C}[x]$ 使得 $f(x)=g(x)h(x)$，则 $h(x)\in\mathbb{Z}[x]$。

**命题 10.2 (分圆多项式的性质)** @120

(1) $\forall n\in\mathbb{N}$，$x^{n}-1=\prod\limits_{0<d\mid n}\Phi_d(x)$；

(2) $\Phi_n(x)\in\mathbb{Z}[x]$，$\forall n\in\mathbb{N}$。

**注 (整除的等价条件)** @121

设 $m,n\in\mathbb{N}$ 且 $m\mid n$，设 $q=\frac{n}{m}$，则 $x^{n}-1=(x^{m})^{q}-1=(x^{m}-1)\bigl((x^{m})^{q-1}+\cdots+x^{m}+1\bigr)$，即在 $\mathbb{Z}[x]$ 中 $(x^{m}-1)\mid(x^{n}-1)$，记其商为 $\frac{x^{n}-1}{x^{m}-1}\in\mathbb{Z}[x]$。反过来，如果已知 $(x^{m}-1)\mid(x^{n}-1)$，那么也能知道必有 $m\mid n$（见本节习题）。

**命题 10.3 (分圆多项式的整除性)** @121

设正整数 $n\geqslant 2$，$m\mid n$，且 $m<n$，则在 $\mathbb{Z}[x]$ 中，$\Phi_n(x)$ 整除 $\frac{x^{n}-1}{x^{m}-1}$。

特别地，对于任意正整数 $a\geqslant 2$，$\Phi_n(a)\mid\frac{a^{n}-1}{a^{m}-1}$。

**定理 10.4 (有限除环必是域)** @121

设 $D$ 是一个有限可除环，则 $D$ 是一个域。

**定义 (多元多项式的零点)** @123

设 $F$ 是域，考虑多项式

$$ f(x_1,\cdots,x_n)=\sum_{i_1=0}^{m_1}\cdots\sum_{i_n=0}^{m_n}a_{i_1\cdots i_n}x_1^{i_1}\cdots x_n^{i_n}\in F[x_1,\cdots,x_n], $$

其中 $a_{i_1\cdots i_n}\in F$。对 $(u_1,\cdots,u_n)\in F^{n}$，定义

$$ f(u_1,\cdots,u_n)=\sum_{i_1=0}^{m_1}\cdots\sum_{i_n=0}^{m_n}a_{i_1\cdots i_n}u_1^{i_1}\cdots u_n^{i_n}\in F, $$

这样 $f$ 定义了一个函数 $f:F^{n}\to F$（$(u_1,\cdots,u_n)\mapsto f(u_1,\cdots,u_n)$）。同样地，若 $f(u_1,\cdots,u_n)=0$，则称 $(u_1,\cdots,u_n)\in F^{n}$ 是 $f(x_1,\cdots,x_n)$ 的一个**零点**（zero）。记

$$ V(f)\triangleq\{(u_1,\cdots,u_n)\in F^{n}\mid f(u_1,\cdots,u_n)=0\} $$

为 $f$ 的**零点集**（zero set），

$$ D(f)\triangleq F^{n}\setminus V(f)=\{(u_1,\cdots,u_n)\in F^{n}\mid f(u_1,\cdots,u_n)\neq 0\} $$

为 $f$ 的**非零点集**。我们看到，$F^{n}=V(f)\cup D(f)$，且 $V(f)\cap D(f)=\varnothing$。

**命题 10.5 (无限域上非零多项式的非零点集)** @123

设 $F$ 是无限域，$0\neq f(x_1,\cdots,x_n)\in F[x_1,\cdots,x_n]$，则 $D(f)$ 是无限集。

**命题 10.6 (复域上二元多项式的零点集)** @124

设 $\mathbb{C}$ 是复数域，$f(x_1,x_2)\in\mathbb{C}[x_1,x_2]$ 且 $\deg f\geqslant 1$，则 $f(x_1,x_2)$ 的零点集 $V(f)$ 是无限集。

**注 (实数域上的零点集)** @124

运用数学归纳法，我们可以证明：若 $f\in\mathbb{C}[x_1,\cdots,x_n]$，$n\geqslant 2$，$\deg f\geqslant 1$，则 $V(f)$ 是无限集，证明留作练习。另一方面，命题 10.6 对一般的无限域 $F$ 不一定成立，例如对实数域 $\mathbb{R}$，考虑 $f(x_1,x_2)=x_1^{2}+x_2^{2}$，则 $f$ 在 $\mathbb{R}^{2}$ 上只有一个零点 $(0,0)$；设 $g(x_1,x_2)=x_1^{2}+x_2^{2}+1$，则 $g$ 在 $\mathbb{R}^{2}$ 上无零点；设 $h(x_1,x_2)=x_1^{2}+x_2^{2}-1$，则 $h$ 在 $\mathbb{R}^{2}$ 上有无限多个零点。由命题 10.6，$f,g,h$ 在复数域 $\mathbb{C}$ 上的零点集都是无限集。如果读者继续探究产生这个现象的原因，不难发现，$\mathbb{C}$ 上的代数基本定理才是关键，我们在第三章会讨论类似于复数域的域——代数闭域。

## 第3章 域论

### 3.1 域扩张的定义（p127–132）

**定义 (域的扩张)** @127

当 $F$ 是域 $K$ 的子域时，我们称 $K$ 是 $F$ 的**扩域**（field extension），并用 $K/F$ 表示，或者通过以下图形来表示：

$$ \begin{array}{c} K\\[2pt] |\\[2pt] F \end{array} $$

域 $F$ 有时也被称作扩域的**基域**（base field）。在讨论域扩张时，记号 "$/$" 不表示商运算。如果存在三个域 $F\subset E\subset K$，则称 $E$ 是 $F$ 和 $K$ 的**中间域**（intermediate field），其图形表示为：

$$ \begin{array}{ccccc} & & K & & \\ & \swarrow & & \searrow & \\ E & & & & \\ & \nwarrow & & \nearrow & \\ & & F & & \end{array} $$

（即 $K$ 在上，$E$ 在中间偏右，$F$ 在下，$F\subset E\subset K$。）

**注 (素域与特征)** @127

任意域 $F$ 都包含一个由其乘法单位元 $1_F$ 生成的子域，这个子域被称为**素域**（prime field）。素域要么与有理数域 $\mathbb{Q}$ 同构（当 $F$ 的特征为零时），要么与有限域 $\mathbb{F}_p$ 同构（当 $F$ 的特征为某个素数 $p$ 时）。因此，在同构的意义下，每个域 $F$ 都可以看作是有理数域或某个有限域的扩域。

**定义 (域扩张的次数)** @127

对于任意域扩张 $K/F$，$K$ 上的乘法运算使得 $K$ 成为 $F$ 上的向量空间。这意味着 $K$ 中存在一组基，使得 $K$ 中的任意元素 $x$ 都可以表示为这组基的 $F$-线性组合。基于此，我们可以定义域扩张次数的概念：

对于域扩张 $K/F$，$K$ 作为 $F$ 上向量空间的维数被称为该域扩张的**次数**（或相对次数、指数），记作 $[K:F]=\dim_F K$。如果 $[K:F]$ 是有限的，则称该域扩张为**有限域扩张**；否则，称为**无限域扩张**。

**定理 1.1 (扩张次数的可乘性)** @127

设域扩张 $F\subseteq K\subseteq L$，则

$$ [L:F]=[L:K][K:F], $$

即扩张次数是可乘的。特别地，$L/F$ 是无限扩张当且仅当 $L/K$ 或 $K/F$ 是无限扩张。

**例 1 (素数次的扩张)** @128

若域扩张 $K/F$ 的次数 $[K:F]$ 是一个素数，则 $K/F$ 没有非平凡的中间域，即 $K/F$ 的中间域只有 $K$ 和 $F$。

**定义 (生成的子域)** @129

设 $F$ 是域 $K$ 的一个子域，$S$ 是 $K$ 的一个子集。我们定义 $F(S)$ 为所有包含 $S$ 且位于 $F$ 和 $K$ 之间的中间域的交集，即

$$ F(S)=\bigcap_{\substack{F\subseteq E\subseteq K\\ S\subseteq E}} E. $$

可以明显看出，$F(S)$ 是一个中间域，我们称之为由 $S$ 生成的 $F$ 的扩域，而 $S$ 中的元素则被称为域扩张 $F(S)/F$ 的**生成元**。

**命题 1.2 (最小中间域)** @129

设 $K/F$ 为域扩张，$S\subset K$。

(1) $F(S)$ 是 $F$ 和 $K$ 之间且包含 $S$ 的最小中间域。

(2)$$ F(S)=\left\{\frac{f(a_1,\cdots,a_n)}{g(a_1,\cdots,a_n)}\ \middle|\ n\in\mathbb{N},\ a_i\in S\ (\forall i),\ f,g\in F[x_1,\cdots,x_n],\ g(a_1,\cdots,a_n)\neq 0\right\}. $$

**定义 (有限生成与单扩张)** @129

对于一个域扩张 $K/F$，如果在 $K$ 中存在一个有限集 $S=\{\alpha_1,\alpha_2,\cdots,\alpha_k\}$ 使得 $K=F(S)$（也记为 $K=F(\alpha_1,\alpha_2,\cdots,\alpha_k)$），则称域扩张 $K/F$ 是**有限生成的**。特别地，我们称 $F(\alpha)$ 是域 $F$ 上的一个**单扩张**，元素 $\alpha$ 被称为该域扩张的**本原元素**（primitive）。

例如，复数域 $\mathbb{C}$ 就是 $\mathbb{R}$ 关于虚根 $\mathrm{i}$ 的单扩张。（实际上，后文中会提及：任何特征零的域上的有限扩张都是单扩张。）

**定义 (合成域的构造)** @129

设 $K_1$ 和 $K_2$ 是域扩张 $K/F$ 的两个中间域，它们的**合成域**即为 $F(S)$，其中 $S=K_1\cup K_2$，该合成域也记为 $K_1K_2$，它是包含 $K_1$ 和 $K_2$ 的最小中间域。

根据定义，$K_1K_2$ 即为由 $K_1$ 和 $K_2$ 在 $K$ 中所生成的子域。下列引理将揭示，有限生成的域扩张都可以由一系列单扩张的合成获得。

**引理 1.3 (单扩张的合成)** @129

设 $K/F$ 为域扩张，$F(\alpha,\beta)/F$ 为中间域，则

$$ F(\alpha,\beta)=F(\alpha)F(\beta)=F(\alpha)(\beta), $$

即由 $\alpha$ 和 $\beta$ 生成的域扩张等于两个单扩张的合成。

**例 2 (平方根与立方根)** @130

两个域 $\mathbb{Q}(\sqrt{2})$ 和 $\mathbb{Q}(\sqrt[3]{2})$ 的合成域是域 $\mathbb{Q}(\sqrt[6]{2})$。首先，$\mathbb{Q}(\sqrt[6]{2})$ 包含了这两个子域（$(\sqrt[6]{2})^3=\sqrt{2}$ 和 $(\sqrt[6]{2})^2=\sqrt[3]{2}$）；其次包含 $\sqrt{2}$ 和 $\sqrt[3]{2}$ 的任何域都包含它们的商

$$ \frac{\sqrt{2}}{\sqrt[3]{2}}=\sqrt[6]{2}. $$

**命题 1.4 (合成域的次数估计)** @130

设 $L/F$ 是域扩张，$K_1$ 和 $K_2$ 是两个中间域，且 $K_1/F$ 和 $K_2/F$ 均为有限扩张，则

$$ [K_1K_2:F]\leqslant [K_1:F][K_2:F], $$

且等式成立当且仅当 $K_2$（或 $K_1$）的一组 $F$-基在 $K_1$（或 $K_2$）上保持线性无关。

**例 3 (二次根式合成域)** @131

考虑域 $\mathbb{Q}(\sqrt{2},\sqrt{3})$，它是由 $\sqrt{2}$ 和 $\sqrt{3}$ 生成的 $\mathbb{C}$ 的子域，也可以看成是 $\mathbb{Q}(\sqrt{2})$ 和 $\mathbb{Q}(\sqrt{3})$ 的合成域。根据命题 1.4，我们有

$$ [\mathbb{Q}(\sqrt{2},\sqrt{3}):\mathbb{Q}]\leqslant 4, $$

且等号成立当且仅当 $\mathbb{Q}(\sqrt{3})$ 的基 $\{1,\sqrt{3}\}$ 在 $\mathbb{Q}(\sqrt{2})$ 上线性无关。假设 $\sqrt{3}\in\mathbb{Q}(\sqrt{2})$，则 $\sqrt{3}=a+b\sqrt{2}$，其中 $a,b\in\mathbb{Q}$。我们得到 $(a^2+2b^2)+2ab\sqrt{2}=3$，注意到 $a,b$ 不同时为 $0$，上式会导出矛盾。这表明 $\sqrt{3}\notin\mathbb{Q}(\sqrt{2})$，从而我们有

$$ [\mathbb{Q}(\sqrt{2},\sqrt{3}):\mathbb{Q}]=4. $$

$\mathbb{Q}(\sqrt{2},\sqrt{3})$ 中的元素包括了 $1,\sqrt{2},\sqrt{3},\sqrt{6}$。通过计算发现，这些元素构成了它的一组 $\mathbb{Q}$-基：

$$ \mathbb{Q}(\sqrt{2},\sqrt{3})=\{a+b\sqrt{2}+c\sqrt{3}+d\sqrt{6}\mid a,b,c,d\in\mathbb{Q}\}. $$

命题 1.4 揭示了如下关系：设 $[K_1:F]=n$，$[K_2:F]=m$，则 $K_1K_2$ 相对 $K_1$、$K_2$ 的次数分别不超过 $m$、$n$，即

$$ \begin{array}{ccccc} & & K_1K_2 & & \\ & \swarrow{\scriptstyle \leqslant n} & & \searrow{\scriptstyle \leqslant m} & \\ K_1 & & & & K_2\\ & \searrow{\scriptstyle n} & & \swarrow{\scriptstyle m} & \\ & & F & & \end{array} $$

**推论 1.5 (互素次数的合成)** @131

假设同命题 1.4。若 $[K_1:F]=n$，$[K_2:F]=m$，且 $n$ 和 $m$ 互素，则

$$ [K_1K_2:F]=[K_1:F][K_2:F]=nm. $$

### 3.2 代数扩张（p133–139）

**定义 (代数元与超越元)** @133

设 $F$ 是域，$K/F$ 是一个域扩张。

(1) 对元素 $\alpha\in K$，如果存在非零多项式 $f(x)\in F[x]$ 使得 $\alpha$ 是 $f(x)=0$ 的根，那么称 $\alpha$ 在 $F$ 上是**代数元**（algebraic）；否则，称 $\alpha$ 在 $F$ 上是**超越元**（transcendental）。

(2) 设 $\alpha$ 在 $F$ 上是代数元，则存在次数最小的首一多项式 $m_{\alpha}(x)\in F[x]$ 使得 $m_{\alpha}(\alpha)=0$，称 $m_{\alpha}(x)$ 为 $\alpha$ 在 $F$ 上的**极小多项式**，其次数被称为 $\alpha$ 在 $F$ 上的**次数**。根据极小多项式次数最小的定义要求，容易知道首一极小多项式 $m_{\alpha}(x)$ 必是唯一的且必为不可约多项式。

**命题 2.1 (极小多项式的刻画)** @133

设 $F$ 是域，$K/F$ 是一个域扩张。设 $\alpha\in K$ 是 $F$ 上的代数元，且 $\alpha$ 在 $F$ 上的极小多项式为 $m_{\alpha}(x)$。则 $\alpha$ 是多项式 $f(x)\in F[x]$ 的根当且仅当 $m_{\alpha}(x)$ 在环 $F[x]$ 中整除 $f(x)$。

**命题 2.2 (单代数扩张的结构)** @133

设 $F$ 是一个域，$K/F$ 是一个域扩张且 $\alpha\in K$。

(1) 若 $\alpha$ 在 $F$ 上是代数元，$m_{\alpha}(x)$ 为 $\alpha$ 在 $F$ 上的极小多项式，则有域同构

$$ F(\alpha)\cong F[x]/(m_{\alpha}(x)), $$

且 $[F(\alpha):F]=\deg m_{\alpha}(x)$。

(2) 若 $\alpha$ 在 $F$ 中是超越的，则有域同构

$$ F(\alpha)\cong F(x), $$

这里 $F(x)$ 为有理函数域，即 $F[x]$ 的分式域。

**例 1 (极小多项式举例)** @134

(1) $\sqrt{2}$ 在 $\mathbb{Q}$ 上的极小多项式为 $x^{2}-2$，且 $[\mathbb{Q}(\sqrt{2}):\mathbb{Q}]=2$。

(2) $\sqrt[3]{2}$ 在 $\mathbb{Q}$ 上的极小多项式为 $x^{3}-2$，且 $[\mathbb{Q}(\sqrt[3]{2}):\mathbb{Q}]=3$。

(3) 对于任意 $n>1$，根据 Eisenstein 判别法，多项式 $x^{n}-2$ 在 $\mathbb{Q}$ 上是不可约的。设 $\xi$ 是它的一个根，此时有 $[\mathbb{Q}(\xi):\mathbb{Q}]=n$。

(4) 元素 $\alpha$ 在 $F$ 上的次数与基域 $F$ 有关。例如，可以取 (3) 中 $\xi\in\mathbb{R}$，此时 $\xi$ 在 $\mathbb{R}$ 中的极小多项式为 $x-\xi$，所以 $\xi$ 在 $\mathbb{R}$ 上的次数为 $1$。

(5) 考虑 $\mathbb{Q}$-系数多项式 $p(x)=x^{3}-3x-1$。由于它在 $\mathbb{Q}$ 上没有有理根，所以它在 $\mathbb{Q}$ 上是不可约多项式。因此对于 $p(x)$ 的任一根 $\alpha$，$[\mathbb{Q}(\alpha):\mathbb{Q}]=3$。此外，注意到 $p(x)$ 仅有唯一的实数根。

**推论 2.3 (代数元与有限扩张)** @134

设 $F$ 是域，$K/F$ 是域扩张，$\alpha\in K$。则元素 $\alpha$ 在 $F$ 上是代数的当且仅当单扩张 $F(\alpha)/F$ 是有限扩张。

**例 2 (低次幂的表示)** @135

设 $u$ 是 $\mathbb{Q}$ 上的方程 $x^{3}-6x^{2}+9x+3=0$ 的一个根，则 $[\mathbb{Q}(u):\mathbb{Q}]=3$。试用 $1,u,u^{2}$ 表示 $u^{4},u^{5},(1+u)^{-1}$。

由 Eisenstein 判别法知 $x^{3}-6x^{2}+9x+3$ 在 $\mathbb{Q}$ 上不可约，故 $[\mathbb{Q}(u):\mathbb{Q}]=3$。由 $u^{3}-6u^{2}+9u+3=0$ 知 $u^{3}=6u^{2}-9u-3$，故

$$ u^{4}=u(6u^{2}-9u-3)=6(6u^{2}-9u-3)-9u^{2}-3u=27u^{2}-57u-18, $$

$$ u^{5}=u(27u^{2}-57u-18)=27(6u^{2}-9u-3)-57u^{2}-18u=105u^{2}-261u-81. $$

至于 $(1+u)^{-1}$，使用带余除法得

$$ u^{3}-6u^{2}+9u+3=(u+1)(u^{2}-7u+16)-13=0, $$

从而 $(1+u)^{-1}=\dfrac{1}{13}(u^{2}-7u+16)$。

**定义 (二次扩张)** @135

设 $F$ 是特征不为 $2$ 的域，$K$ 是 $F$ 的二次扩域，即 $[K:F]=2$。设 $\alpha$ 是 $K$ 中不包含在 $F$ 中的任意元素，则 $\alpha$ 满足一个关于 $F$ 的最高次数不超过 $2$ 的方程；该方程不能是一次方程，因为 $\alpha$ 不是 $F$ 的元素。因此 $\alpha$ 的极小多项式是一个首一的二次多项式

$$ m_{\alpha}(x)=x^{2}+bx+c,\quad b,c\in F. $$

由 $F\subset F(\alpha)\subseteq K$ 及 $[K:F]=2$ 得 $K=F(\alpha)$。由求根公式

$$ \alpha=\frac{-b\pm\sqrt{b^{2}-4c}}{2} $$

可以证明 $F(\alpha)=F\bigl(\sqrt{b^{2}-4c}\bigr)$。由此可知，$F$ 的任意次数为 $2$ 的域扩张 $K$ 都具有形式 $F(\sqrt{D})$，其中 $D$ 在 $F$ 中非完全平方；反之亦然。为此，域 $F$ 的次数为 $2$ 的扩张被称为 $F$ 的**二次扩张**（quadratic extension）。

**定义 (代数扩张)** @135

设 $K/F$ 为域扩张，如果 $K$ 中的元素在 $F$ 上都是代数的，那么称 $K/F$ 是**代数扩张**（algebraic extension）。

**命题 2.4 (有限扩张必代数)** @136

如果域扩张 $K/F$ 是有限的，那么它必是代数的。

**例 3 (有理数域的扩张)** @136

(1) 设 $\alpha$ 是 $f(x)=x^{3}-3x-1$ 在 $0$ 到 $2$ 之间的实根，则 $\sqrt{2}\notin\mathbb{Q}(\alpha)$。这是因为 $[\mathbb{Q}(\sqrt{2}):\mathbb{Q}]=2$ 且 $[\mathbb{Q}(\alpha):\mathbb{Q}]=3$，而 $2$ 不能整除 $3$。另一方法是直接证明 $\sqrt{2}$ 不能写成 $1,\alpha,\alpha^{2}$ 的有理线性组合。

(2) 用 $\sqrt[6]{2}$ 表示 $2$ 的正实数六次根，有 $[\mathbb{Q}(\sqrt[6]{2}):\mathbb{Q}]=6$。由于 $(\sqrt[6]{2})^{3}=\sqrt{2}$，我们有 $\mathbb{Q}(\sqrt{2})\subset\mathbb{Q}(\sqrt[6]{2})$ 且 $[\mathbb{Q}(\sqrt[6]{2}):\mathbb{Q}(\sqrt{2})]=3$。这给出了域图

$$ \mathbb{Q}\ \xrightarrow{\ 2\ }\ \mathbb{Q}(\sqrt{2})\ \xrightarrow{\ 3\ }\ \mathbb{Q}(\sqrt[6]{2}), $$

其中两段扩张的次数分别为 $2$ 和 $3$，合起来为 $6$。

特别地，这表明 $\sqrt[6]{2}$ 在 $\mathbb{Q}(\sqrt{2})$ 上的极小多项式的次数为 $3$，也即该多项式就是 $x^{3}-\sqrt{2}$。

**定理 2.5 (有限扩张的刻画)** @136

设 $K/F$ 是域扩张，则 $K/F$ 是有限扩张当且仅当 $K/F$ 是有限生成的代数扩张。特别地，若 $a_{1},a_{2},\cdots,a_{n}$ 是 $F$ 上次数为 $m_{1},m_{2},\cdots,m_{n}$ 的代数元，则 $F(a_{1},a_{2},\cdots,a_{n})/F$ 是有限扩张，并且

$$ [F(a_{1},a_{2},\cdots,a_{n}):F]\leqslant m_{1}m_{2}\cdots m_{n}. $$

**推论 2.6 (代数元的封闭性)** @136

设 $K/F$ 为域扩张。

(1) 若 $\alpha\in K$ 和 $\beta\in K$ 是 $F$ 上的代数元，则 $\alpha\pm\beta,\alpha\beta,\alpha\beta^{-1}$（对于 $\beta\neq 0$）都是 $F$ 上的代数元。

(2) $K$ 中在 $F$ 上代数元的集合构成了一个中间域 $L$。

**命题 2.7 (代数扩张的传递性)** @137

设 $K/L$，$L/F$ 均为代数扩张，则 $K/F$ 为代数扩张。

**注 (超越元的判定)** @137

通过计算域扩张次数，容易验证

$$ \text{代数元}\pm\text{超越元}=\text{超越元}. $$

但如何判断两个超越元在加减运算之后的代数性或超越性则是当今数学中的一个公认难题。人们甚至无法证明 $\mathrm{e}+\pi$ 是否为一个无理数。

**例 4 (代数数域)** @137

(1) 考虑扩域 $\mathbb{C}/\mathbb{Q}$，并令 $\overline{\mathbb{Q}}$ 表示所有在 $\mathbb{Q}$ 上代数的复数构成的子域。特别地，元素 $\sqrt[n]{2}$ 都是 $\overline{\mathbb{Q}}$ 中的元素，因此对于所有整数 $n>1$，$[\overline{\mathbb{Q}}:\mathbb{Q}]\geqslant n$。因此 $\overline{\mathbb{Q}}$ 是 $\mathbb{Q}$ 上一个无限代数扩张，称 $\overline{\mathbb{Q}}$ 为**代数数域**。

(2) 考虑域 $\overline{\mathbb{Q}}\cap\mathbb{R}$。由于域 $\mathbb{Q}$ 是可数的，因此有理系数的多项式全体也是可数的。$\mathbb{R}$ 中的所有代数元子集是可数个有限集合的并集，因而也是可数的。由于 $\mathbb{R}$ 是不可数的，因此 $\mathbb{R}$ 中存在不可数多个超越元。特别地，代数元素的子域 $\overline{\mathbb{Q}}\cap\mathbb{R}$ 是 $\mathbb{R}$ 的一个真子域，故 $\overline{\mathbb{Q}}$ 也是 $\mathbb{C}$ 的一个真子域。

证明一个给定的实数为超越数是非常困难的。例如，已知 $\pi=3.14159\cdots$ 和 $\mathrm{e}=2.71828\cdots$ 是 $\mathbb{R}/\mathbb{Q}$ 的超越元。

### 3.3 分裂域与代数闭域（p140–148）

**定义 (多项式的分裂域)** @140

设 $F$ 是域，$f(x)\in F[x]$，$\deg f(x)\geqslant 1$。如果存在域扩张 $K/F$ 满足下列条件：

(1) 在 $K[x]$ 中，$f(x)$ 可分解为

$$ f(x)=c(x-a_1)(x-a_2)\cdots(x-a_n),\quad a_i\in K\ (\forall i), $$

其中 $c$ 是 $f(x)$ 的首项系数；

(2) $K=F(a_1,a_2,\cdots,a_n)$，

则称域 $K$ 是多项式 $f(x)$ 在 $F$ 上的**分裂域**（splitting field）。

**例 1 (分裂域的判定)** @140

$F$ 是 $f(x)$ 在 $F$ 上的分裂域当且仅当 $f(x)$ 在 $F[x]$ 中分解成一次因子的乘积。

**例 2 (二次多项式的分裂域)** @140

设 $f(x)=x^2+1\in\mathbb{Q}[x]$，则 $K=\mathbb{Q}(\mathrm{i},-\mathrm{i})=\mathbb{Q}(\mathrm{i})$ 是 $f(x)$ 在 $\mathbb{Q}$ 上的分裂域。另一方面，如果我们将 $f(x)$ 看成 $\mathbb{R}[x]$ 中的元素，那么它在 $\mathbb{R}$ 上的分裂域 $K=\mathbb{R}(\mathrm{i},-\mathrm{i})=\mathbb{R}(\mathrm{i})=\mathbb{C}$。

**定理 3.1 (分裂域的存在性)** @140

设 $F$ 为域，$f(x)\in F[x]$ 且 $n=\deg f(x)\geqslant 1$，则 $f(x)$ 在 $F$ 上的分裂域 $K/F$ 存在且扩张次数 $[K:F]\leqslant n!$。

**引理 3.2 (同构的多项式延拓)** @141

设 $F,\tilde{F}$ 是两个域，$\varphi:F\to\tilde{F}$ 是一个域同构。定义映射 $\tilde{\varphi}:F[x]\to\tilde{F}[x]$ 如下：对 $f(x)=a_0+a_1x+\cdots+a_nx^n\in F[x]$，

$$ \tilde{\varphi}(f(x))=\varphi(a_0)+\varphi(a_1)x+\cdots+\varphi(a_n)x^n. $$

设 $f(x),p(x)\in F[x]$，记 $\tilde{f}(x)=\tilde{\varphi}(f(x))$，$\tilde{p}(x)=\tilde{\varphi}(p(x))\in\tilde{F}[x]$。下列结论成立：

(1) 上面定义的 $\tilde{\varphi}$ 是环同构，$\deg f(x)=\deg\tilde{f}(x)$ 且 $p(x)\mid f(x)$ 当且仅当 $\tilde{p}(x)\mid\tilde{f}(x)$；

(2) 若 $p(x)$ 是一个不可约多项式，则 $\tilde{p}(x)$ 也是不可约多项式；且此时有域同构 $\bar{\varphi}:F[x]/(p(x))\to\tilde{F}[x]/(\tilde{p}(x))$，满足

$$ \bar{\varphi}\bigl(h(x)+(p(x))\bigr)=\tilde{\varphi}(h(x))+(\tilde{p}(x)),\quad \forall h(x)\in F[x]. $$

**定理 3.3 (分裂域的唯一性)** @141

(1) 记号同引理 3.2。设 $K/F$ 是 $f(x)\in F[x]$ 在 $F$ 上的分裂域，$\tilde{f}(x)=\tilde{\varphi}(f(x))$，$\tilde{K}/\tilde{F}$ 是 $\tilde{f}(x)$ 在 $\tilde{F}$ 上的分裂域，则存在域同构 $\alpha:K\to\tilde{K}$ 使得 $\alpha|_{F}=\varphi$，即 $\alpha(u)=\varphi(u)$，$\forall u\in F$。

(2) 设 $K_1/F$，$K_2/F$ 是 $f(x)\in F[x]$ 在 $F$ 上的两个分裂域，则存在域同构 $\alpha:K_1\to K_2$ 使得 $\alpha|_{F}=\mathrm{id}_{F}$。

**定义 (重根与无重根)** @143

设 $F$ 是域，$f(x)\in F[x]$，$n=\deg f(x)\geqslant 1$，$K$ 是 $f(x)$ 在 $F$ 上的分裂域。设

$$ f(x)=c(x-a_1)(x-a_2)\cdots(x-a_n), $$

$c$ 是 $f(x)$ 的首项系数，$a_i\in K$，$1\leqslant i\leqslant n$。如果 $a_1,a_2,\cdots,a_n$ 是两两不同的，我们称 $f(x)$ 是**无重根**的；否则，称 $f(x)$ 是**有重根**的。

**例 3 (重根举例)** @143

$f(x)=x^2+1\in\mathbb{Q}[x]$ 是无重根的，$g(x)=x^2-2x+1=(x-1)^2$ 是有重根的。

**定义 (导数多项式)** @143

设 $F$ 是域，$f(x)=a_nx^n+\cdots+a_1x+a_0\in F[x]$，定义映射 $D:F[x]\to F[x]$ 如下：

$$ D(f(x))=na_nx^{n-1}+(n-1)a_{n-1}x^{n-2}+\cdots+2a_2x+a_1. $$

称 $D(f(x))$ 为 $f(x)$ 的**导数多项式**，记为 $f'(x)$。

**引理 3.4 (导数多项式性质)** @143

上述映射 $D:F[x]\to F[x]$ 满足下列性质：

(1) $D$ 是 $F$-线性映射，即对 $f(x),g(x)\in F[x]$，$a,b\in F$，我们有

$$ D\bigl(af(x)+bg(x)\bigr)=aD(f(x))+bD(g(x)); $$

(2) 对 $f(x),g(x)\in F[x]$，我们有

$$ D\bigl(f(x)g(x)\bigr)=f(x)D(g(x))+D(f(x))g(x). $$

**命题 3.5 (无重根的判定)** @143

设 $F$ 是域，$f(x)\in F[x]$，则 $f(x)$ 无重根当且仅当在 $F[x]$ 中 $f(x)$ 与其导数 $f'(x)$ 互素，即 $\gcd(f(x),f'(x))=1$。

**例 4 (单位根多项式的重根)** @144

设 $F$ 是域，$n$ 是正整数，$f(x)=x^n-1\in F[x]$。我们有 $f'(x)=nx^{n-1}$，则

$$ \gcd(f(x),f'(x))= \begin{cases} x^n-1, & \operatorname{char}(F)=p\mid n,\\ 1, & \text{其他}, \end{cases} $$

因此 $f(x)=x^n-1$ 有重根当且仅当 $F$ 的特征是一个素数 $p$ 且 $p\mid n$。

**定理 3.6 (代数基本定理)** @144

对于域 $F=\mathbb{C}$，下列命题成立并互相等价：

(1) $F[x]$ 中不存在次数大于 $1$ 的不可约多项式。

(2) $F[x]$ 中任一正次数多项式在 $F[x]$ 中都可分解为一次因式的乘积。

(3) $F[x]$ 中任一正次数多项式在 $F$ 中都至少有一个根。

(4) $F$ 无真代数扩张，即若 $E/F$ 是代数扩张，则 $E=F$。

基于 $\mathbb{C}$ 的上述性质，人们提出了代数闭域的概念。

**定义 (代数闭域)** @144

满足定理 3.6 等价条件的域 $F$ 称为**代数闭域**（algebraically closed field）。

**例 5 (代数数域是代数闭域)** @144

3.2 节例 4 中定义的代数数域 $\overline{\mathbb{Q}}$ 是代数闭域。

**例 6 (代数闭域是无限域)** @144

代数闭域是无限域。

**定义 (代数闭包)** @145

设 $F$ 是域。若 $L/F$ 是代数扩张，且 $L$ 是代数闭域，则称 $L$ 为 $F$ 的一个**代数闭包**（algebraic closure）。

考虑 $\mathbb{Q}\subset\mathbb{C}$，$\mathbb{C}$ 是代数闭域，但 $\mathbb{C}/\mathbb{Q}$ 不是代数扩张，故 $\mathbb{C}$ 不是 $\mathbb{Q}$ 的代数闭包。但是我们可以取 $\mathbb{C}$ 中在 $\mathbb{Q}$ 上的代数元全体来得到 $\mathbb{Q}$ 的代数闭包 $\overline{\mathbb{Q}}$。正如定理 3.7 所言，任何域上都存在在同构意义下唯一的代数闭包。

**定理 3.7 (代数闭包的存在性)** @145

设 $F$ 是一个域，则 $F$ 必有一个代数闭包 $L$。

**命题 3.8 (嵌入在根上的延拓)** @145

设 $F(\alpha)/F$ 是代数扩张，$f(x)\in F[x]$ 是 $\alpha$ 的极小多项式。设 $\varphi_0:F\to E$ 是一个域的嵌入，下列结论成立：

(1) $\varphi_0$ 可诱导环同态 $\tilde{\varphi}_0:F[x]\to E[x]$，这里 $\tilde{\varphi}_0$ 保持未定元 $x$ 不变，但对每一个系数 $a\in F$，$\tilde{\varphi}_0(a)=\varphi(a)\in E$。

(2) $\varphi_0$ 在 $F[\alpha]$ 上的延拓

$$ \varphi:F[\alpha]\to E\quad(\varphi|_{F}=\varphi_0) $$

的集合与 $\tilde{\varphi}_0(f(x))$ 在 $E$ 中的不同根的集合一一对应。

**命题 3.9 (代数闭包的包罗万象性)** @146

设 $F$ 是一个域，而 $L$ 是 $F$ 的一个代数闭包。记 $i:F\hookrightarrow L$ 是自然的包含映射。若有一个域嵌入 $j:F\hookrightarrow E$ 且 $E$ 是 $j(F)$ 的代数扩张，则存在一个域嵌入 $\varphi:E\to L$，满足 $\varphi\circ j=i$，即有如下交换图：

$$ \begin{array}{ccc} F & \xrightarrow{\ j\ } & E\\ & \searrow{\ i\ } & \downarrow{\ \varphi\ }\\ & & L \end{array} $$

特别地，若存在一个域同构 $\sigma:F\cong F'$，并且 $L'$ 是 $F'$ 的任意一个代数闭包，则存在一个域同构 $\varphi:L\to L'$，使得 $\varphi$ 在 $F$ 上的限制等于 $\sigma$。

**注 (代数闭包的选取)** @147

由于代数闭包在同构意义下是唯一的，对给定的域 $F$，我们通常取定 $F$ 的一个代数闭包 $\overline{F}$。

**例 7 (有理函数域不是代数闭域)** @147

设 $\mathbb{Q}(x)$ 为有理数域上的有理函数域。证明：$\overline{\mathbb{Q}}\not\cong\overline{\mathbb{Q}(x)}$。

**定理 3.10 (分裂域的存在唯一性)** @147

给定域 $F$ 及 $f(x)\in F[x]$，则 $f(x)$ 在 $F$ 上的分裂域存在且在同构意义下唯一。

**例 8 (几个分裂域的计算)** @147

直接计算可知：

(1) $\mathbb{Q}$ 上多项式 $x^2-2$ 的分裂域为 $\mathbb{Q}(\sqrt{2})$。

(2) $\mathbb{Q}$ 上多项式 $(x^2-2)(x^2-3)$ 的分裂域为 $\mathbb{Q}(\sqrt{2},\sqrt{3})$。

(3) $\mathbb{Q}$ 上多项式 $x^3-2$ 的分裂域为 $\mathbb{Q}(\sqrt[3]{2},\sqrt{-3})$。

**定义 (分圆域与分圆多项式)** @147

**分圆域**（cyclotomic field）是通过在有理数域中引入复数单位根而形成的扩展域。简单地讲，多项式 $x^n-1$ 在复数域 $\mathbb{C}$ 上是完全分裂的，故可以将多项式 $x^n-1$ 的分裂域实现为由 $n$ 次本原单位根 $\zeta_n=\mathrm{e}^{\frac{2\pi\mathrm{i}}{n}}$ 生成的子域 $\mathbb{Q}(\zeta_n)$，称为 $n$ 次单位根的**分圆域**。

在第二章 2.10 节中，我们知道分圆多项式

$$ \Phi_n(x)=\prod_{\substack{d=1\\ \gcd(d,n)=1}}^{n}(x-\zeta_n^d)\in\mathbb{Z}[x], $$

且 $\deg\Phi_n(x)=\varphi(n)$，其中 $\varphi$ 是 Euler 函数。在 $\mathbb{Z}[x]$ 中 $\Phi_n(x)\mid(x^n-1)$。在本书习题中，读者将证明 $\Phi_n(x)$ 在 $\mathbb{Q}[x]$ 上不可约，故它是 $\zeta_n$ 在 $\mathbb{Q}$ 上的极小多项式，因而

$$ [\mathbb{Q}(\zeta_n):\mathbb{Q}]=\varphi(n). $$

特别地，$\varphi(n)$ 也是 $n$ 次本原单位根的个数。

### 3.4 域扩张嵌入（p149–152）

**定义 (域扩张嵌入)** @149

设 $E/F$ 和 $L/F$ 均为域扩张，如果 $\sigma:E\to L$ 是环同态且 $\sigma|_{F}=\mathrm{id}_{F}$，那么称 $\sigma$ 是一个**域扩张嵌入**（field extension embedding），记为 $\sigma:E/F\to L/F$。由定义，一个域扩张嵌入是单射。特别地，取定 $E$ 的一个代数闭包 $\overline{E}$，则

$$ \operatorname{Emb}(E/F)\triangleq\{\sigma:E/F\to\overline{E}/F\mid\sigma\ \text{是域扩张嵌入}\}. $$

**定义 (域扩张的自同构群)** @149

设 $E/F$ 为域扩张。我们用 $\operatorname{Aut}(E)$ 表示 $E$ 的自同构全体，它在自同构的复合作用下是一个群。记

$$ \operatorname{Aut}(E/F)\triangleq\{\sigma\in\operatorname{Aut}(E)\mid\sigma(a)=a,\ \forall a\in F\}. $$

$\operatorname{Aut}(E/F)$ 称为域扩张 $E/F$ 的**自同构群**（automorphism group），也称 $\sigma\in\operatorname{Aut}(E/F)$ 为 $E$ 在 $F$ 上的自同构。

**引理 4.1** @149

设 $E/F$ 为有限扩张，且 $K$ 为中间域，则有

$$ |\operatorname{Emb}(E/F)|=|\operatorname{Emb}(K/F)|\cdot|\operatorname{Emb}(E/K)|, $$

这里 $|\cdot|$ 代表集合的基数。

**引理 4.2 (Artin 引理)** @150

设 $\sigma_{i}\,(1\leqslant i\leqslant m)$ 是从群 $G$ 到域 $E$ 的乘法群 $E^{*}$ 的两两不同的群同态，$\lambda_{i}\,(1\leqslant i\leqslant m)$ 是 $E$ 中不全为 $0$ 的元素，则存在 $g\in G$ 使得

$$ \sum_{i=1}^{m}\lambda_{i}\sigma_{i}(g)\neq 0. $$

**定理 4.3 (自同构群的上界)** @150

若 $E/F$ 为有限扩张，则有

$$ |\operatorname{Aut}(E/F)|\leqslant|\operatorname{Emb}(E/F)|\leqslant[E:F]. $$

**注 (不等式取等的条件)** @151

基于上述不等式 $|\operatorname{Aut}(E/F)|\leqslant|\operatorname{Emb}(E/F)|\leqslant[E:F]$，我们自然地提问：在什么条件下等式成立。这也是我们研究正规扩张和可分扩张的依据。

### 3.5 正规扩张与可分扩张（p153–157）

**定义 (正规扩张)** @153

设 $E/F$ 为代数扩张，若 $F$ 上的每一个在 $E$ 中有根的不可约多项式在 $E[x]$ 中总可以分解为一次因式之积，则称 $E/F$ 为**正规扩张**（normal extension）。

**定理 5.1 (正规扩张的等价条件)** @153

设 $E/F$ 为有限域扩张，则下列命题等价：

(1) $E/F$ 是正规扩张；

(2) $E$ 是 $F$ 上某个多项式的分裂域；

(3) $|\operatorname{Aut}(E/F)|=|\operatorname{Emb}(E/F)|$。

**推论 5.2 (中间域上的正规性)** @154

设 $E/F$ 是有限正规扩张，$K$ 是 $E/F$ 的中间域，那么 $E/K$ 也是正规扩张。

**例 1 (立方根扩张非正规)** @154

设 $E=\mathbb{Q}(\sqrt[3]{2})$，那么 $E/\mathbb{Q}$ 不是正规扩张。这是因为 $\sqrt[3]{2}$ 的极小多项式是 $x^{3}-2$，它的另外两个根 $\sqrt[3]{2}\omega$ 和 $\sqrt[3]{2}\omega^{2}$ 不在 $E$ 中，其中

$$ \omega=\cos\left(\frac{2\pi}{3}\right)+\mathrm{i}\sin\left(\frac{2\pi}{3}\right) $$

是三次本原单位根。因此 $x^{3}-2$ 的分裂域是 $\mathbb{Q}(\sqrt[3]{2},\omega)$，它真包含 $E$。

**推论 5.3 (中间域正规的等价条件)** @154

设 $E/F$ 是有限正规扩张，$K$ 是中间域，则下列命题等价：

(1) $K/F$ 是正规扩张；

(2) $\forall\sigma\in\operatorname{Aut}(E/F)$，$\sigma(K)\subset K$；

(3) $\forall\sigma\in\operatorname{Aut}(E/F)$，$\sigma(K)=K$。

**定义 (正规闭包)** @155

设 $E/F$ 是有限扩张。如果 $E$ 上一个代数扩张 $K/E$ 满足：

(1) $K/F$ 是正规扩张；

(2) 对于任意中间域 $E\subseteq L\subseteq K$，若 $L/F$ 正规，则 $L=K$，

我们称 $K/F$ 是 $E/F$ 的一个**正规闭包**（normal closure）。

**命题 5.4 (正规闭包的存在唯一性)** @155

对于任意有限扩张 $E/F$，其正规闭包存在且在同构的意义下唯一。

**定义 (可分多项式与可分扩张)** @155

设 $E/F$ 为代数扩张。

(1) 如果 $f(x)\in F[x]$ 的每个不可约因子都没有重根，那么称 $f(x)$ 为**可分的**（separable）。

(2) 对 $u\in E$，若 $u$ 在 $F$ 上的极小多项式是可分的，则称 $u$ 是 $F$ 上的**可分元**或称 $u$ 在 $F$ 上是可分的。

(3) 如果 $E$ 中的每个元素都可分，那么称 $E/F$ 是**可分扩张**（separable extension）。

**定理 5.5 (可分扩张的嵌入数)** @155

设 $E/F$ 是有限扩张，则 $E/F$ 是可分扩张当且仅当

$$ |\operatorname{Emb}(E/F)|=[E:F]. $$

**推论 5.6 (可分性的传递)** @156

设 $E/F$ 为有限扩张，$K$ 为中间域，则 $E/F$ 是可分扩张，当且仅当 $K/F$ 和 $E/K$ 都是可分扩张。

**注 (正规扩张无传递性)** @156

正规扩张不一定具有类似于推论 5.6 的性质。例如 $\mathbb{Q}(\sqrt[3]{2},\omega)/\mathbb{Q}$ 是正规扩张，但中间域 $\mathbb{Q}(\sqrt[3]{2})/\mathbb{Q}$ 不是正规扩张。

**命题 5.7 (不可约多项式不可分判别)** @156

设 $F$ 为域，若 $0\neq f(x)\in F[x]$ 是一个不可约多项式，则 $f(x)$ 是不可分的当且仅当 $\operatorname{char}F=p>0$ 且

$$ f(x)=a_{0}+a_{p}x^{p}+\cdots+a_{mp}x^{mp}. $$

**定义 (完全域)** @156

若域 $F$ 上的每个不可约多项式都是可分的，则称 $F$ 是**完全域**（perfect field）。

**例 2 (非完全域实例)** @156

考虑 $\mathbb{F}_{p}$ 上的有理函数域 $F=\mathbb{F}_{p}(t)$。对于多项式

$$ f(x)=x^{p}-t\in F[x], $$

根据命题 5.7，$f(x)$ 不可分。此外，$f(x)$ 在其分裂域中只有一个根（重根），容易检验 $f(x)$ 在 $F[x]$ 上不可约（见本节习题）。因此 $F$ 不是完全域。

### 3.6 Galois 扩张（p158–163）

**定义 (Galois 扩张)** @158

设 $E/F$ 是代数扩张. 若 $E/F$ 既可分又正规，则称 $E/F$ 为 **Galois 扩张**（Galois extension）. 此时它的自同构群 $\mathrm{Aut}(E/F)$ 称为 **Galois 群**（Galois group），又记 $\mathrm{Gal}(E/F)\triangleq\mathrm{Aut}(E/F)$.

**命题 6.1 (自同构群的阶)** @158

设 $E/F$ 是有限扩张，则 $E/F$ 是 Galois 扩张当且仅当

$$ |\mathrm{Aut}(E/F)|=[E:F]. $$

**例 1 (三次多项式的分裂域)** @158

设 $E$ 是 $\mathbb{Q}$ 上多项式 $x^{3}-2$ 的分裂域，由于 $E$ 是特征零的，故 $E/\mathbb{Q}$ 是可分且正规的，从而是 Galois 扩张. 由 3.3 节例 8 知 $[E:\mathbb{Q}]=6$，故 $\mathrm{Gal}(E/\mathbb{Q})$ 是 6 阶群.

**定义 (G-不变子域)** @158

设 $E$ 是域，$G<\mathrm{Aut}(E)$ 为有限子群. 令

$$ E^{G}=\{a\in E\mid \forall\sigma\in G,\ \sigma(a)=a\}, $$

用定义容易验证 $E^{G}$ 是 $E$ 的子域，称 $E^{G}$ 为 $E$ 的 **$G$-不变子域**（$G$-invariant subfield）.

**引理 6.2 (Artin 引理)** @158

设 $E$ 是域，$G$ 是 $\mathrm{Aut}(E)$ 的有限子群，$F=E^{G}$，则

$$ [E:F]\leqslant |G|. $$

特别地，$E/F$ 是 Galois 扩张且 $G=\mathrm{Gal}(E/F)$.

**定理 6.3 (有限扩张的等价刻画)** @159

设 $E/F$ 是域扩张，下列命题等价：

(1) $E/F$ 是有限 Galois 扩张；

(2) $E$ 是 $F$ 上的一个可分多项式的分裂域；

(3) 存在 $\mathrm{Aut}(E)$ 的有限子群 $G$，使 $F=E^{G}$.

在上述等价条件成立时，有 $G=\mathrm{Aut}(E/F)$.

**定理 6.4 (Galois 对应定理)** @160

设 $E/F$ 为有限 Galois 扩张，$G\triangleq\mathrm{Aut}(E/F)$，则有如下两个集合之间的一一对应：

$$ \begin{array}{ccc} \{H\mid H\text{ 是 }G\text{ 的子群}\} & \longleftrightarrow & \{K\mid K\text{ 是 }E/F\text{ 的中间域}\}\\[2pt] \text{子群 }H<G & \longmapsto & E^{H},\\ \mathrm{Aut}(E/K)<G & \longleftarrow & \text{中间域 }K. \end{array} $$

上述对应具有以下性质：

(1) $H_1\subset H_2$ 当且仅当 $E^{H_1}\supset E^{H_2}$；$K_1\subset K_2$ 当且仅当 $\mathrm{Gal}(E/K_1)\supset\mathrm{Gal}(E/K_2)$.

(2) $|H|=[E:E^{H}]$，$[G:H]=[E^{H}:F]$.

(3) $H\triangleleft G$ 当且仅当 $E^{H}/F$ 是正规扩张. 此时 $\mathrm{Gal}(E^{H}/F)\cong G/H$.

(4) $H\triangleleft G$ 当且仅当 $E^{H}/F$ 是 Galois 扩张. 此时 $\mathrm{Gal}(E^{H}/F)\cong G/H$.

**例 2 (三次扩张的伽罗瓦群)** @161

考虑域扩张 $\mathbb{Q}(\sqrt[3]{2},\omega)/\mathbb{Q}$，其中 $\omega=\cos\left(\frac{2\pi}{3}\right)+\sin\left(\frac{2\pi}{3}\right)\mathrm{i}$ 是三次本原单位根，$\rho=\omega\sqrt[3]{2}$ 为多项式 $x^{3}-2$ 的另一个非平凡根. 这也是一个 Galois 扩张，它的 Galois 群为 $S_{3}$，记两个生成元分别为 $\sigma$ 与 $\tau$，它们分别是 3 阶和 2 阶的，具体地说，它们在 $\omega$ 与 $\sqrt[3]{2}$ 上的作用分别为：

$$ \sigma(\omega)=\omega,\quad \sigma(\sqrt[3]{2})=\omega\sqrt[3]{2}; $$

$$ \tau(\omega)=\omega^{2},\quad \tau(\sqrt[3]{2})=\omega\sqrt[3]{2}. $$

于是我们有如下关于 Galois 群的子群的关系图：$\{1\}$ 在最上层，第二层为 $\langle\sigma\rangle$、$\langle\tau\rangle$、$\langle\tau\sigma\rangle$、$\langle\tau\sigma^{2}\rangle$，最下层为 $\langle\sigma,\tau\rangle$；相应地，还有子域之间的关系图：$\mathbb{Q}(\sqrt[3]{2},\omega)$ 在最上层，第二层为 $\mathbb{Q}(\omega)$、$\mathbb{Q}(\omega^{2}\sqrt[3]{2})$、$\mathbb{Q}(\omega\sqrt[3]{2})$、$\mathbb{Q}(\sqrt[3]{2})$，最下层为 $\mathbb{Q}$.

上面给出了 $\mathbb{Q}(\sqrt[3]{2},\omega)$ 的所有子域，但由于 $S_{3}$ 的唯一非平凡正规子群是 3 阶子群 $\langle\sigma\rangle$，因此只有 $\mathbb{Q}(\omega)$ 是 $\mathbb{Q}$ 上的 Galois 扩张，其 Galois 群为二阶循环群 $S_{3}/\langle\sigma\rangle$. $\mathbb{Q}(\omega)$ 上非平凡的自同构是由 $\langle\sigma\rangle$ 的非平凡陪集 $\{\tau,\tau\sigma,\tau\sigma^{2}\}$ 中的元素（如 $\tau$）的限制所诱导的，它们均将 $\omega$ 映到 $\omega^{2}$.

**命题 6.5 (复合域与交域)** @162

设 $L/F$ 为域扩张，$E,K$ 均为中间域，$E/F$ 是有限 Galois 扩张，则 $EK/K$ 与 $E/E\cap K$ 均为有限 Galois 扩张，其 Galois 群为

$$ \mathrm{Gal}(EK/K)\cong\mathrm{Gal}(E/E\cap K). $$

### 3.7 有限域（p164–171）

**定理 7.1 (有限域的存在唯一性)** @164

设 $n\in\mathbb{N}$，则

(1) $\overline{\mathbb{F}}_p$ 中必有唯一的阶为 $p^n$ 的有限域；

(2) 任意两个阶为 $p^n$ 的域一定相互同构。

**推论 7.2 (有限子域的包含关系)** @165

对 $\overline{\mathbb{F}}_p$ 中的两个有限域 $F=\mathbb{F}_{p^n}$ 与 $E=\mathbb{F}_{p^m}$，其中 $n,m\in\mathbb{N}$，$F\subset E$ 当且仅当 $n\mid m$。此时 $[E:F]=\dfrac{m}{n}$。

**例 1 (Wilson 定理)** @165

设 $p$ 是一个素数，$F=\mathbb{F}_p=\mathbb{Z}/p\mathbb{Z}=\{\overline{0},\overline{1},\overline{2},\cdots,\overline{p-1}\}$，对 $x^p-x\in\mathbb{F}_p[x]$，我们有

$$ x^p-x=x(x-\overline{1})\cdots(x-\overline{p-1}), $$

$$ x^{p-1}-\overline{1}=(x-\overline{1})\cdots(x-\overline{p-1}). $$

取 $x=\overline{0}$，在 $\mathbb{Z}/p\mathbb{Z}$ 中有

$$ -\overline{1}=(-\overline{1})(-\overline{2})\cdots(-\overline{p-1}), $$

即

$$ -1\equiv(-1)^{p-1}(p-1)!\pmod p. $$

由于 $(-1)^{p-1}\equiv 1\pmod p$，于是有

$$ (p-1)!\equiv -1\pmod p. $$

这是初等数论中的 Wilson 定理。

**定义 (Frobenius 同态)** @165

设域 $F$ 的特征为 $p$。考虑映射

$$ \operatorname{Frob}_F:F\to F,\qquad a\mapsto a^p, \tag{3.3} $$

$\forall a,b\in F$，$(a+b)^p=a^p+b^p$，即 $\operatorname{Frob}_F$ 保持加法，并且 $\operatorname{Frob}_F$ 保持乘法和乘法幺元，故它是域的单同态，称为域 $F$ 上的 **Frobenius 同态**。当 $F$ 是有限域时，$\operatorname{Frob}_F\in\operatorname{Aut}(F)$。

**定理 7.3 (有限扩张的 Galois 性)** @166

设 $F$ 为有限域，$E/F$ 是一个有限扩张，则 $E/F$ 是 Galois 扩张且 Galois 群 $\operatorname{Gal}(E/F)$ 由 $\operatorname{Frob}_E$ 的某个幂次生成。

**命题 7.4 (完全域的刻画)** @166

设域 $F$ 的特征为 $p$，则 $F$ 是完全域当且仅当 $\operatorname{Frob}_F$ 是满射。特别地，有限域是完全域。

**例 2 (Frobenius 的非满射)** @166

$\operatorname{Frob}_{\mathbb{F}_p(t)}:\mathbb{F}_p(t)\to\mathbb{F}_p(t)$ 不是满射，因为多项式 $x^p-t\in\mathbb{F}_p(t)[x]$ 是不可约且不可分的。

**引理 7.5 (有限 Abel 群的循环判据)** @166

设 $A$ 是有限 Abel 群，则 $A$ 是循环群当且仅当对于每个自然数 $n$，$A$ 中至多有一个阶为 $n$ 的子群。

**定理 7.6 (乘法群的结构)** @166

取代数闭包 $\mathbb{F}_p\hookrightarrow\overline{\mathbb{F}}_p$，则有乘法群的包含关系：$\mathbb{F}_p^{*}\hookrightarrow\overline{\mathbb{F}}_p^{*}$。下列结论成立：

(1) $\forall n\in\mathbb{N}$，若 $p\mid n$，则 $\overline{\mathbb{F}}_p^{*}$ 中不存在阶为 $n$ 的子群。

(2) $\forall n\in\mathbb{N}$，若 $p\nmid n$，则 $\overline{\mathbb{F}}_p^{*}$ 中存在唯一的阶为 $n$ 的子群，且它是循环群。

(3) $\mathbb{F}_{p^n}^{*}$ 是循环群。

**推论 7.7 (有限扩张是单扩张)** @167

设 $F$ 是有限域，$E/F$ 是有限扩张，则 $E/F$ 是单扩张。

**推论 7.8 (不可约多项式的存在)** @167

有限域上存在任意次数的不可约多项式。

**例 3 (非单有限扩张)** @168

考虑二元有理函数域 $E=\mathbb{F}_p(s,t)$ 和其子域 $F=\mathbb{F}_p(s^p,t^p)$，我们有 $[E:F]=p^2$。对于任意元素 $u\in E$，它满足 $u^p\in F$，故 $u$ 是 $F[x]$ 上 $p$ 次多项式方程

$$ x^p-u^p=0 $$

的根，它在 $F$ 上的次数不大于 $p$。所以 $E/F$ 不可能是单扩张。

**命题 7.9 (本原元素定理)** @168

设 $E/F$ 是一个有限可分扩张，则存在 $\alpha\in E$ 使得 $E=F(\alpha)$。特别地，有限 Galois 扩张是单扩张。

**注 (不可约多项式的商环)** @168

对于 $q$ 元域 $\mathbb{F}_q$ 及 $\mathbb{F}_q[x]$ 中的一个 $d$ 次不可约多项式 $f(x)$，存在同构

$$ \mathbb{F}_q[x]/(f(x))\cong\mathbb{F}_{q^d}. \tag{3.4} $$

**命题 7.10 (不可约因子的判据)** @169

有限域 $\mathbb{F}_p$ 上的 $n$ 次不可约多项式 $f(x)$ 是多项式 $x^{p^m}-x$ 的不可约因子当且仅当 $n\mid m$。

**例 4 (不可约多项式的个数)** @169

求 $\mathbb{F}_p$ 上不可约 $n$ 次首一多项式的个数。

记 $N_p(n)$ 表示 $\mathbb{F}_p$ 上的 $n$ 次不可约首一多项式的个数，则

$$ x^{p^n}-x=\prod_{d\mid n}\prod_{\deg p(x)=d}p(x),\qquad p^n=\sum_{d\mid n}dN_p(d), $$

其中 $p(x)$ 为 $\mathbb{F}_p$ 上的不可约多项式。根据 Möbius 反演公式，得到 $\mathbb{F}_p$ 上 $n$ 次不可约首一多项式的个数的计算公式：

$$ N_p(n)=\frac{1}{n}\sum_{d\mid n}\mu\left(\frac{n}{d}\right)p^d. $$

**例 5 (x^p-x-1 的不可约性)** @169

多项式 $f(x)=x^p-x-1$ 在 $\mathbb{F}_p$ 上不可约。

**例 6 (F8 中方程的根的个数)** @170

在 $\mathbb{F}_8$ 中方程 $f(x)=x^6+x^4+x+1=0$ 共有 $4$ 个根。

取 $\mathbb{F}_8=\mathbb{F}_2(\alpha)$，其中 $\alpha$ 的极小多项式为 $\mathbb{F}_2$ 上的三次不可约多项式 $x^3+x+1$，则 $f(x)=0$ 在 $\mathbb{F}_8$ 中的根为 $1,\alpha,\alpha^2,\alpha^4$。

**注 (根的表达依赖生成元)** @170

若改取 $\mathbb{F}_8=\mathbb{F}_2(\beta)$，其中 $\beta$ 的极小多项式是 $x^3+x^2+1$，则这些根的表达式会发生变化。事实上由同构 $\mathbb{F}_2(\alpha)\to\mathbb{F}_2(\beta)$，$\alpha\mapsto\beta^3=\beta^2+1$，故在 $\mathbb{F}_8=\mathbb{F}_2(\beta)$ 中这四个根是 $1,\beta^3,\beta^5,\beta^6$。

### 3.8 多项式 Galois 群的计算（p172–177）

**定义 (多项式的Galois群)** @172

对一个可分多项式 $f(x)\in F[x]$，设 $E$ 为 $f(x)$ 在 $F$ 上的分裂域. 我们记$$\operatorname{Gal}_F(f)\triangleq \operatorname{Gal}(E/F),$$称 $\operatorname{Gal}_F(f)$ 为 $f(x)$ 在 $F$ 上的 **Galois 群**.

**引理 8.1** @172

若域 $F$ 上可分多项式 $f(x)$ 满足 $\deg f=n$，则 $\operatorname{Gal}_F(f)$ 是对称群 $S_n$ 的一个子群.

**命题 8.2** @172

设 $F$ 为域，$f(x)\in F[x]$ 为可分多项式. 则 $f(x)$ 是不可约的当且仅当 $\operatorname{Gal}_F(f)$ 在 $f(x)$ 的根集上的作用是可迁的.

**例 1** @172

考虑 $f(x)=(x^2-2)(x^2-3)\in\mathbb{Q}[x]$，求 $\operatorname{Gal}_{\mathbb{Q}}(f)$.

$E=\mathbb{Q}(\sqrt{2},\sqrt{3})$，$[E:\mathbb{Q}]=4$. $E/\mathbb{Q}$ 上的自同构 $\eta$ 被 $\eta(\sqrt{2})$ 与 $\eta(\sqrt{3})$ 所唯一确定，故 $\eta(\sqrt{2})$ 只能为 $\pm\sqrt{2}$，$\eta(\sqrt{3})$ 只能为 $\pm\sqrt{3}$. 四个自同构为$$\begin{aligned} \operatorname{id}=\eta_1&:\sqrt{2}\mapsto\sqrt{2};\ \sqrt{3}\mapsto\sqrt{3},\\ \eta_2&:\sqrt{2}\mapsto\sqrt{2};\ \sqrt{3}\mapsto-\sqrt{3},\\ \eta_3&:\sqrt{2}\mapsto-\sqrt{2};\ \sqrt{3}\mapsto\sqrt{3},\\ \eta_4&:\sqrt{2}\mapsto-\sqrt{2};\ \sqrt{3}\mapsto-\sqrt{3}. \end{aligned}$$由于 $\eta_2,\eta_3,\eta_4$ 都是二阶元，又因 4 阶群一定是交换群，故 $\operatorname{Gal}(E/\mathbb{Q})\cong\mathbb{Z}_2\oplus\mathbb{Z}_2$.

**例 2** @173

设 $E$ 为不可约多项式 $f(x)=x^4-2$ 在 $\mathbb{Q}$ 上的分裂域，求 $\operatorname{Gal}(E/\mathbb{Q})$.

$E=\mathbb{Q}(\sqrt[4]{2},\mathrm{i})$，因此 $[E:\mathbb{Q}]=8$. $\operatorname{Gal}(E/\mathbb{Q})$ 中任意元素 $\eta$ 被 $\eta(\sqrt[4]{2})$ 与 $\eta(\mathrm{i})$ 确定，其中 $\eta(\sqrt[4]{2})$ 只能为 $\pm\sqrt[4]{2},\pm\mathrm{i}\sqrt[4]{2}$ 之一，$\eta(\mathrm{i})$ 只能为 $\pm\mathrm{i}$ 之一. 八个自同构为$$\begin{aligned} \operatorname{id}&:\sqrt[4]{2}\mapsto\sqrt[4]{2};\ \mathrm{i}\mapsto\mathrm{i},\\ r&:\sqrt[4]{2}\mapsto\sqrt[4]{2}\,\mathrm{i};\ \mathrm{i}\mapsto\mathrm{i},\\ r^2&:\sqrt[4]{2}\mapsto-\sqrt[4]{2};\ \mathrm{i}\mapsto\mathrm{i},\\ r^3&:\sqrt[4]{2}\mapsto-\sqrt[4]{2}\,\mathrm{i};\ \mathrm{i}\mapsto\mathrm{i},\\ \sigma&:\sqrt[4]{2}\mapsto\sqrt[4]{2};\ \mathrm{i}\mapsto-\mathrm{i},\\ \sigma r&:\sqrt[4]{2}\mapsto-\sqrt[4]{2}\,\mathrm{i};\ \mathrm{i}\mapsto-\mathrm{i},\\ \sigma r^2&:\sqrt[4]{2}\mapsto-\sqrt[4]{2};\ \mathrm{i}\mapsto-\mathrm{i},\\ \sigma r^3&:\sqrt[4]{2}\mapsto\sqrt[4]{2}\,\mathrm{i};\ \mathrm{i}\mapsto-\mathrm{i}. \end{aligned}$$故 $\operatorname{Gal}(E/\mathbb{Q})\cong D_4$.

**定义 (一般n次多项式)** @173

设 $F$ 为一个域，定义 $F$ 上的一般 $n$ 次多项式为$$f(x)=x^n-a_{n-1}x^{n-1}+a_{n-2}x^{n-2}-\cdots+(-1)^n a_0.$$它也可以视为以 $a_i$ 为变量的函数域 $F(a_0,a_1,\cdots,a_{n-1})$ 上的多项式.

**定理 8.3** @174

一般 $n$ 次多项式 $f(x)$ 在域 $F(a_0,a_1,\cdots,a_{n-1})$ 上的 Galois 群为$$\operatorname{Gal}_{F(a_0,a_1,\cdots,a_{n-1})}(f)\cong S_n.$$

**命题 8.4** @174

设 $r_1,r_2,\cdots,r_n$ 为域 $F$ 上的可分多项式 $f(x)$ 的所有不同根，其中域 $F$ 的特征不为 $2$. 令$$\Delta(f)=\prod_{i<j}(r_i-r_j),$$若 $\sigma\in\operatorname{Gal}_F(f)$ 在集合 $\{r_1,r_2,\cdots,r_n\}$ 上的作用保持 $\Delta(f)$ 不变，则 $\sigma$ 是一个偶置换.

**命题 8.5** @175

设 $F$ 为特征不为 $2$ 的域，$f(x)\in F[x]$ 为 $n$ 次可分多项式，则 $\operatorname{Gal}_F(f)\subseteq A_n$ 当且仅当 $\Delta(f)\in F$.

**例 3 (三次多项式的Galois群)** @175

设 $\operatorname{char}F\neq 2$. 若 $f(x)\in F[x]$ 为三次可分多项式，则 $\operatorname{Gal}_F(f)$ 有如下情形：

(1) $f(x)$ 是可约的，则它可分解成三个线性因式或者一个线性因式与一个二次因式的乘积. 在前一种情况下 Galois 群是平凡群，在第二种情形下 Galois 群是二阶群；

(2) $f(x)$ 是不可约的，则其任一根均生成 $F$ 的一个三次扩张，因此 $f(x)$ 在 $F$ 上的分裂域的次数一定被 $3$ 整除. 于是 $\operatorname{Gal}_F(f)$ 要么是 $S_3$，要么是 $A_3$. 根据命题 8.5，我们有 $\operatorname{Gal}_F(f)=A_3$ 当且仅当 $\Delta(f)\in F$.

上述例子中，若不可约三次多项式 $f(x)\in\mathbb{Q}[x]$ 有复根，则它的 Galois 群 $\operatorname{Gal}_F(f)$ 中存在着复共轭作用. 由于该作用是一个 $2$ 阶元，这使得 $\operatorname{Gal}_{\mathbb{Q}}(f)$ 只能是 $S_3$.

**命题 8.6** @175

设 $f(x)\in\mathbb{Q}[x]$ 是 $n$ 次不可约多项式且恰好只有两个复根. 若 $n$ 为素数，则 $\operatorname{Gal}_{\mathbb{Q}}(f)=S_n$.

**命题 8.7** @175

设 $f(x)\in\mathbb{Z}[x]$ 为 $m$ 次首一多项式，$\bar f(x)\in\mathbb{F}_p[x]$ 是 $f(x)$ 在模 $p$ 之后的多项式. 若 $\bar f=\prod_{i=1}^{r}\bar f_i$ 为可分多项式，其中 $\bar f_i$ 为 $\mathbb{F}_p[x]$ 中的 $m_i$ 次不可约多项式，则存在 $\sigma=\sigma_1\sigma_2\cdots\sigma_k\in\operatorname{Gal}_{\mathbb{Q}}(f)$，这里 $\sigma_i$ 为互不相交的 $m_i$ 阶轮换.

**例 4** @176

计算 $4$ 次整系数多项式 $f(x)=x^4-12x-21$ 在 $\mathbb{Q}$ 上的 Galois 群.

根据 Eisenstein 判别法易知，$f(x)$ 是 $\mathbb{Q}$ 上的不可约多项式.

(1) 由于 $f(x)$ 不可约，$\operatorname{Gal}_{\mathbb{Q}}(f)$ 不包含在 $S_3$ 中；

(2) 通过计算导数 $f'(x)$，可知 $f(x)=0$ 有两个实根和两个复根. 于是 $\operatorname{Gal}_{\mathbb{Q}}(f)$ 包含一个长度为 $2$ 的轮换，从而 $\operatorname{Gal}_{\mathbb{Q}}(f)$ 不包含在 $A_4$ 中；

(3) $f(x)\equiv x(x^3-5)\pmod 7$ 可以分解为 $\mathbb{F}_7$ 上一个 $1$ 次多项式与一个 $3$ 次不可约多项式的乘积，于是 $\operatorname{Gal}_{\mathbb{Q}}(f)$ 中包含长度为 $3$ 的轮换.

综合上述结果，我们可推出 $\operatorname{Gal}_{\mathbb{Q}}(f)\cong S_4$.

**例 5** @176

计算 $5$ 次整系数多项式 $f(x)=x^5-x-1$ 在 $\mathbb{Q}$ 上的 Galois 群.

Eisenstein 判别法不适用，但我们有

(1) $f(x)$ 模 $3$ 不可约，因为 $f(x)=0$ 在 $\mathbb{F}_3$ 中无解，故 $\operatorname{Gal}_{\mathbb{Q}}(f)$ 包含一个 $5$ 阶轮换；

(2) $f(x)\equiv(x^2+x+1)(x^3+x^2+1)\pmod 2$，因此 $\operatorname{Gal}_{\mathbb{Q}}(f)$ 包含不相交的 $2$-轮换和 $3$-轮换的乘积，继而知道它包含一个 $2$-轮换.

综上可得，$\operatorname{Gal}_F(f)=S_5$，因为 $S_5$ 可由一个 $5$-轮换和一个 $2$-轮换生成.

**命题 8.8** @176

设 $f(x)\in\mathbb{Z}[x]$ 为不可约多项式. 若存在两个素数 $p,q\in\mathbb{Z}$ 使得

(1) $f(x)\equiv(x-a)g(x)\pmod p$，其中 $g(x)$ 在 $\mathbb{F}_p$ 上不可约，

(2) $f(x)\equiv\prod_{i=0}^{m}g_i(x)\pmod q$，其中 $g_i(x)$ 在 $\mathbb{F}_q$ 上均不可约，且 $\deg g_0(x)=2$，当 $i>0$ 时，$\deg g_i(x)$ 为奇数，

则 $\operatorname{Gal}_{\mathbb{Q}}(f)\cong S_n$.

### 3.9 可解扩张与方程的可解性（p178–182）

**定义 (循环扩张)** @178

如果有限 Galois 扩张 $K/F$ 的 Galois 群是循环群，那么称 $K/F$ 为**循环扩张**（cyclic extension）。

**定理 9.1** @178

给定域 $F$ 以及与其特征互素的整数 $n$，假设 $F$ 中包含所有 $n$ 次单位根。设 $K/F$ 是 $n$ 次有限扩张，则 $K/F$ 是循环扩张当且仅当存在 $0\neq a\in F$ 使得 $K=F(\sqrt[n]{a})$。

**定义 (根式扩张)** @179

设 $K/F$ 为域扩张，如果 $F$ 与 $K$ 之间有一系列单扩张：

$$ F=K_0\subset K_1\subset\cdots\subset K_i\subset K_{i+1}\subset\cdots\subset K_s=K, $$

满足：$K_{i+1}=K_i(\sqrt[n_i]{a_i}),\ i=0,1,\cdots,s-1$，其中 $a_i\in K_i$，$\sqrt[n_i]{a_i}$ 是多项式 $x^{n_i}-a_i$ 的某个根，那么称 $K$ 是 $F$ 的**根式扩张**（radical extension）。

**引理 9.2** @179

任意两个根式扩张的合成扩张仍然是根式扩张。

**定义 (根式可表)** @179

若域 $F$ 上的一个代数元 $\alpha$ 落在 $F$ 的某个根式扩张中，则称 $\alpha$ 为**根式可表**的。

**引理 9.3** @179

若 $\alpha$ 在域 $F$ 上根式可表，则可以找到 $F$ 的一个包含 $\alpha$ 的根式扩张 $K/F$，它是 Galois 扩张，且每个中间扩张 $K_{i+1}/K_i$ 的 Galois 群都是循环群。

**定义 (根式可解)** @180

如果多项式 $f(x)\in F[x]$ 的每个根都是根式可表的，那么称它**根式可解**。

**定理 9.4** @180

多项式 $f(x)\in F[x]$ 根式可解当且仅当它的 Galois 群是可解群。

**推论 9.5** @181

次数为 $n$ 的一般多项式方程在 $n\geqslant 5$ 时不是根式可解的。

**例 1 (可解五次方程)** @181

对于 5 次不可约多项式 $f(x)\in F[x]$，若 $f(x)=0$ 有根式解，则 $\mathrm{Gal}_F(f)$ 为 $S_5$ 的可解子群。由于 $f(x)$ 不可约，$\mathrm{Gal}_F(f)$ 含有 5 阶元。故由 $\mathrm{Gal}_F(f)$ 的可解性得到以下几种可能：

(1) 若 $|\mathrm{Gal}_F(f)|=5$，则 $\mathrm{Gal}_F(f)\cong\mathbb{Z}_5$，由 5 阶轮换生成；

(2) 若 $|\mathrm{Gal}_Q(f)|=10$，由于 $S_5$ 中没有 10 阶元，$\mathrm{Gal}_F(f)$ 只能是 2 面体群 $D_5$；它是由一个 5 阶轮换和一个非轮换 2 阶元生成的；

(3) 若 $|\mathrm{Gal}_Q(f)|=20$，$\mathrm{Gal}_Q(f)$ 由一个 5 阶轮换和一个 4 阶轮换生成，称为 20 阶 Frobenius 群 $F_{20}$。

下面我们给出一些 5 次不可约可解方程的例子：

(1) $f(x)=x^{5}-110x^{3}-55x^{2}+2310x+979$ 的 Galois 群为 $\mathbb{Z}_5$；

(2) $f(x)=x^{5}-5x+12$ 的 Galois 群是 $D_5$；

(3) $f(x)=x^{5}+15x+12$ 的 Galois 群为 $F_{20}$。

## 第4章 附录 集合

### A 集合上的等价关系（p185–186）

**定义 (二元关系)** @185

设 $A$ 是一个非空集合。$A$ 上的一个**二元关系**（binary relation）是指 $A\times A$ 的一个子集 $R$；如果 $(a,b)\in R$，那么我们记作 $a\sim b$，并称 $R$ 为 $A$ 上的关系 $\sim$。

**定义 (等价关系)** @185

$A$ 上的关系 $\sim$ 称为：

(a) **自反的**（reflexive），如果 $a\sim a$，对所有 $a\in A$；

(b) **对称的**（symmetric），如果 $a\sim b$ 蕴含 $b\sim a$，对所有 $a,b\in A$；

(c) **传递的**（transitive），如果 $a\sim b$ 且 $b\sim c$ 蕴含 $a\sim c$，对所有 $a,b,c\in A$。

如果 $A$ 上的关系 $\sim$ 是自反的、对称的且传递的，那么称它为 $A$ 上的一个**等价关系**（equivalence relation）。

**定义 (等价类)** @185

如果 $A$ 上的关系 $\sim$ 是一个等价关系，那么 $a\in A$ 的**等价类**（equivalence class）定义为子集

$$ \{x\in A \mid x\sim a\}. $$

等价类中任意元素称为等价于 $a$。如果 $C$ 是等价类，$C$ 中的任意元素称为该类 $C$ 的**代表元**。

**定义 (划分)** @185

$A$ 的一个**划分**（partition）是指 $A$ 的一个非空子集的集合 $\{A_i \mid i\in I\}$（$I$ 是指标集），满足下面两个条件：

(a) $A=\bigcup\limits_{i\in I}A_i$，

(b) $A_i\cap A_j=\varnothing$，对于所有 $i,j\in I$ 且 $i\neq j$，

即 $A$ 是这些划分中集合的不交并。

**命题 1.1** @185

设 $A$ 是一个非空集合：

(1) 如果 $\sim$ 在 $A$ 上定义了一个等价关系，则 $\sim$ 的等价类集合构成 $A$ 的一个划分。

(2) 如果 $\{A_i \mid i\in I\}$ 是 $A$ 的一个划分，那么存在唯一的等价关系，使得其等价类恰好是这些集合 $A_i,\ i\in I$。

### B Zorn 引理（p186–187）

**定义 (偏序)** @186

一个非空集合 $A$ 上的**偏序**（partial order）是一个关系 $\leqslant$，它满足以下性质：

(1) $x\leqslant x$，对所有 $x\in A$（自反性）；

(2) 如果 $x\leqslant y$ 且 $y\leqslant x$，那么 $x=y$，对所有 $x,y\in A$（反对称性）；

(3) 如果 $x\leqslant y$ 且 $y\leqslant z$，那么 $x\leqslant z$，对所有 $x,y,z\in A$（传递性）。

通常称 $A$ 在 $\leqslant$ 下是一个偏序集。

**定义 (链与上界)** @186

设非空集合 $A$ 具有偏序 $\leqslant$：

(1) 子集 $B$ 是 $A$ 的一个**链**（chain），如果对于所有 $x,y\in B$，要么 $x\leqslant y$，要么 $y\leqslant x$。

(2) 子集 $B$ 的**上界**（upper bound）是集合 $A$ 中的一个元素 $u$，使得对于所有 $b\in B$，都有 $b\leqslant u$。

(3) 集合 $A$ 的一个**极大元**（maximal element）是集合 $A$ 中的一个元素 $m$，使得如果对于任何 $x\in A$ 有 $m\leqslant x$，那么 $m=x$。

**注 (链的别名)** @186

在文献中，链也称为塔（tower）、全序（totally ordered）、线性序（linearly ordered）或简单序（simply ordered）子集。

**例 1** @186

本例说明了上界与极大元之间的区别。注意，如果 $m$ 是 $A$ 的一个极大元，那么不一定有 $x\leqslant m$ 对所有 $x\in A$（即 $m$ 不一定是最大元）。

(1) 设 $A$ 为某个集合 $X$ 的幂集（即所有子集的集合），并且 $\leqslant$ 是子集包含关系 $\subseteq$。这只是一个偏序，因为 $X$ 的一些子集可能不可比较，例如单元素集合：如果 $x\neq y$，那么 $\{x\}\not\subseteq\{y\}$ 且 $\{y\}\not\subseteq\{x\}$。在这种情况下，一个链的示例是 $X$ 的一系列子集

$$ X_1\subseteq X_2\subseteq X_3\subseteq\cdots. $$

集合 $A$ 的任何子集 $B$ 都有一个上界 $b$，具体为

$$ b=\bigcup_{x\in B}x. $$

这个偏序集 $A$ 有一个（唯一的）极大元 $X$。在许多情况下，集合 $A$ 由集合 $X$ 的一些（但不一定是全部）子集组成（即 $A$ 是 $X$ 的幂集的子集），且 $A$ 上的偏序再次是包含关系，上界和极大元的存在性取决于 $A$ 的性质。

(2) 设 $A$ 是所有正整数集合 $\mathbb{N}$ 的真子集的集合，按包含关系 $\subseteq$ 排序。在这种情况下，链不一定有极大元，例如链

$$ \{1\}\subseteq\{1,2\}\subseteq\{1,2,3\}\subseteq\cdots $$

没有上界。集合 $A$ 仍然有极大元，例如 $\mathbb{N}\setminus\{n\}$ 是 $A$ 的一个极大元，对于任意 $n\in\mathbb{N}$。

(3) 设 $A=\mathbb{R}$ 且按通常的 $\leqslant$ 关系排序。在此示例中，$A$ 的每个子集都是一个链（包括 $A$ 本身）。$A$ 的子集具有上界的概念与实数集合 $\mathbb{R}$ 中"被某个实数从上界定"的常规概念相同（因此某些集合，例如有限长度的区间，有上界，而其他集合，例如正实数集合，没有上界）。集合 $A$ 没有极大元。

**引理 (Zorn 引理)** @187

如果 $A$ 是一个非空的偏序集，且其中的每个链都有一个上界，则 $A$ 中必存在一个极大元。

**注 (Zorn 引理的独立性)** @187

Zorn 引理独立于通常的 Zermelo–Fraenkel 集合论公理体系，这并非显而易见的。具体而言，如果集合论公理是自洽的，那么这些公理与 Zorn 引理一起也是自洽的；反之，如果集合论公理不是自洽的，那么这些公理与 Zorn 引理的否定也同样是自洽的。这里的"引理"一词在 Zorn 引理中只是历史沿用的术语。为了完整起见，下面给出 Zorn 引理的另外两个等价表述。

**公理 (选择公理)** @187

**选择公理**（the axiom of choice）：设 $\{A_i\}_{i\in I}$ 是一族非空集合，这里 $I$ 是一个非空指标集，那么存在一个映射 $f:I\to\bigcup_{i\in I}A_i$，使得对每个 $i\in I$ 都有 $f(i)\in A_i$。换言之，笛卡儿积 $\prod_{i\in I}A_i$ 是非空集合。

**定理 (良序原理)** @187

**良序原理**（the well ordering principle）：每个非空集合 $A$ 都有一个良序，即 $A$ 上存在一个全序 $\leqslant$，使得 $A$ 的每个非空子集都有一个最小元；也就是说，对于每个非空子集 $B\subseteq A$，存在 $s\in B$，使得 $s\leqslant b$ 对所有 $b\in B$ 都成立。

> 本书尚未录入习题。
