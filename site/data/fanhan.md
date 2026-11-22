# 泛函分析

作者：王凯

源文件：泛函王凯.pdf

> 本文件由数学命题索引自动生成，包含正文陈述与已录入习题；习题可能尚未完全录入。

## 第1章 度量空间

### 1.1 度量空间（p2–8）

#### 定义与例子 @2

**定义 1.1.1 (度量空间)** @2

设 $X$ 是一个非空集合，若对于 $X$ 中任意两个元素 $x,y$，都有一个实数 $d(x,y)$ 与它们对应，而且满足下面条件：

（i）（非负性与正定性）对任意 $x,y\in X$，$d(x,y)\geqslant 0$，并且 $d(x,y)=0$ 的充要条件是 $x=y$；

（ii）（对称性）对任意 $x,y\in X$，$d(x,y)=d(y,x)$；

（iii）（三角不等式）对任意 $x,y,z\in X$，$d(x,y)\leqslant d(x,z)+d(z,y)$，

则称 $(X,d)$ 是一个**度量空间**（或距离空间），$d$ 为 $X$ 上的**度量**（或距离），$d(x,y)$ 为点 $x,y$ 之间的距离。

**例 1.1.1 (实数直线度量)** @2

在直线 $\mathbb{R}$ 上，定义$$d(x,y)=|x-y|,\quad \forall x,y\in\mathbb{R},$$则 $(\mathbb{R},d)$ 是度量空间。

**例 1.1.2 (欧几里得空间度量)** @2

在 $n$ 个有序实数组 $x=(x_1,x_2,\cdots,x_n)$ 全体组成的集合 $X$ 中，定义$$d(x,y)=\sqrt{\sum_{i=1}^{n}(x_i-y_i)^2},$$则 $(X,d)$ 是度量空间，称为 $n$ 维 **Euclid**（欧几里得）空间，通常记为 $\mathbb{R}^n$。

**例 1.1.3 (幂次和度量)** @2

固定 $p\geqslant 1$。在 $n$ 个有序实数组构成的集合 $X$ 中，定义$$d_p(x,y)=\left(\sum_{i=1}^{n}|x_i-y_i|^p\right)^{\frac{1}{p}},\tag{1.1}$$那么 $(X,d_p)$ 是度量空间，记为 $\mathbb{R}_p^n$。

**定理 (Hölder 不等式)** @3

设 $1<p,q<\infty$，$\dfrac{1}{p}+\dfrac{1}{q}=1$。对于 Lebesgue 测度空间 $(\mathbb{R}^n,\mathrm{d}m)$ 中的可测集 $E$ 及其上的 Lebesgue 可测函数 $f,g$，若 $|f|^p,|g|^q$ 可积，则 $fg$ 可积且$$\left|\int_E f(t)g(t)\,\mathrm{d}m(t)\right|\leqslant\left(\int_E|f(t)|^p\,\mathrm{d}m(t)\right)^{\frac{1}{p}}\left(\int_E|g(t)|^q\,\mathrm{d}m(t)\right)^{\frac{1}{q}}.\tag{1.4}$$等号成立当且仅当 $fg$ 几乎处处符号不变，且存在不全为零的常数 $a,b$ 使得 $a|f|^p$ 几乎处处等于 $b|g|^q$。

**定理 (Minkowski 不等式)** @4

对 $p\geqslant 1$，若 $E$ 上可测函数 $f,g$ 是 $p$ 次可积的，则$$\left(\int_E|f(t)+g(t)|^p\,\mathrm{d}m(t)\right)^{\frac{1}{p}}\leqslant\left(\int_E|f(t)|^p\,\mathrm{d}m(t)\right)^{\frac{1}{p}}+\left(\int_E|g(t)|^p\,\mathrm{d}m(t)\right)^{\frac{1}{p}}.\tag{1.6}$$等号成立当且仅当存在非负常数 $a,b$ 使得 $ag\stackrel{m}{=}bf$（即 $ag$ 几乎处处等于 $bf$）。

**例 1.1.4 (绝对值和度量)** @4

在 $n$ 个有序实数组全体构成的集合 $X$ 中，令$$d_1(x,y)=\sum_{i=1}^{n}|x_i-y_i|,$$则 $\mathbb{R}_1^n=(X,d_1)$ 也是度量空间。

**例 1.1.5 (最大坐标度量)** @4

在 $n$ 个有序实数组全体构成的集合 $X$ 中，令$$d_\infty(x,y)=\max_{1\leqslant i\leqslant n}|x_i-y_i|,$$则 $\mathbb{R}_\infty^n=(X,d_\infty)$ 是度量空间。

**例 1.1.6 (连续函数最大模度量)** @4

在闭区间 $[a,b]$ 上的一切连续实（或复）值函数的集 $C[a,b]$ 中，定义$$d(f,g)=\max_{a\leqslant t\leqslant b}|f(t)-g(t)|.\tag{1.7}$$它是 $C[a,b]$ 上的度量。此空间在分析学中起着极为重要的作用。

同一个集合中可以引进不同的度量，得到不同的度量空间。

**例 1.1.7 (平凡的例子)** @4

设 $X$ 是一个非空的集合，定义如下的度量：$$d_0(x,y)=\begin{cases}0, & x=y,\\ 1, & x\neq y.\end{cases}$$则 $(X,d_0)$ 是度量空间。

**定义 (子空间与乘积度量)** @5

设 $(X,d)$ 是度量空间，$A$ 是 $X$ 的非空子集。若对于 $A$ 中的任意两点 $x,y\in A$，规定$$d_A(x,y)=d(x,y),$$则 $(A,d_A)$ 是度量空间，称为 $(X,d)$ 的一个**子空间**。

设 $(X_1,d_1),(X_2,d_2)$ 是两个度量空间，乘积空间 $X=X_1\times X_2=\{(x_1,x_2):x_1\in X_1,x_2\in X_2\}$ 上可以用以下三个式子之一来定义度量：$$d_2\big((x_1,x_2),(y_1,y_2)\big)=\sqrt{d_1^2(x_1,y_1)+d_2^2(x_2,y_2)},$$$$d_1\big((x_1,x_2),(y_1,y_2)\big)=d_1(x_1,y_1)+d_2(x_2,y_2),$$$$d_\infty\big((x_1,x_2),(y_1,y_2)\big)=\max\{d_1(x_1,y_1),d_2(x_2,y_2)\}.$$

#### 极限 @5

**定义 1.1.2 (极限)** @5

设 $(X,d)$ 是度量空间，$\{x_n\}_{n=1}^{\infty}$ 是 $X$ 中点列，$x_0\in X$，若$$\lim_{n\to\infty}d(x_n,x_0)=0,$$则称点列 $\{x_n\}_{n=1}^{\infty}$ **按照度量 $d$ 收敛于** $x_0$，记为 $\lim\limits_{n\to\infty}x_n=x_0$。

**定义 (基本点列与完备性)** @5

对于度量空间 $(X,d)$ 中的点列 $\{x_n\}_{n=1}^{\infty}$，如果对于任何正数 $\varepsilon$，存在正整数 $N$，使得当 $n,m\geqslant N$ 时$$d(x_n,x_m)<\varepsilon,$$就称 $\{x_n\}_{n=1}^{\infty}$ 是 $X$ 中的**基本点列**，或者称为 **Cauchy（柯西）点列**。显然收敛点列必然是基本点列。

如果 $X$ 中任何基本点列都收敛于 $X$ 中的点，就称 $(X,d)$ 为**完备的**度量空间。

**例 1.1.8 (实数空间完备性)** @5

例 1.1.1 中的度量空间 $(\mathbb{R},d)$ 的完备性即为实数理论中的 Cauchy 收敛原理。

**例 1.1.9 (坐标收敛与完备性)** @5

考虑例 1.1.2、例 1.1.4 及例 1.1.5，在 $n$ 个有序实数组全体构成的集合 $X$ 中，点列 $\{x^{(k)}\}$ 按度量 $d,d_1$ 或 $d_\infty$ 收敛于 $x^{(0)}$ 都等价于 $\{x^{(k)}\}$ 按坐标收敛于 $x^{(0)}$，即每个分量 $\{x_i^{(k)}\}$ 收敛于 $x_i^{(0)}$（$i=1,2,\cdots,n$）。同时，点列 $\{x^{(k)}\}$ 按度量 $d,d_1$ 或 $d_\infty$ 是 Cauchy 收敛的，等价于每个分量 $\{x_i^{(k)}\}$ 是 $\mathbb{R}$ 中的 Cauchy 点列。故由例 1.1.8 知，$X$ 在度量 $d,d_1$ 或 $d_\infty$ 下均是完备的。

**例 1.1.10 (连续函数空间完备)** @6

$C[a,b]$ 是完备的度量空间。

并且，$C[a,b]$ 中点列按度量 $d$ 收敛等价于区间 $[a,b]$ 上的函数列一致收敛。

**例 1.1.11 (等价度量构造)** @6

设 $(X,d)$ 是度量空间，在 $X$ 上还可以定义新的度量$$d'(x,y)=\frac{d(x,y)}{1+d(x,y)},\qquad d''(x,y)=\ln\big(1+d(x,y)\big),\quad \forall x,y\in X.$$它们是不同的度量，但容易验证，对于空间 $X$ 中的点列 $\{x_n\}$，$$\lim_{n\to\infty}x_n\stackrel{d}{=}x_0\iff\lim_{n\to\infty}x_n\stackrel{d'}{=}x_0\iff\lim_{n\to\infty}x_n\stackrel{d''}{=}x_0.$$即三个度量给出相同的收敛性。

**例 1.1.12 (依测度收敛度量)** @6

对于有限区间 $[a,b]$，记 $\mathfrak{G}=\{[a,b]\text{ 上几乎处处有限的 Lebesgue 可测函数}\}$。$\mathfrak{G}$ 中两个函数 $f,g$ 是等价的，是指它们满足 $f\stackrel{m}{=}g$。仍以 $f$ 表示 Lebesgue 可测函数 $f$ 在 $\mathcal{S}=\mathfrak{G}/\sim$ 中对应的等价类。对于 $f,g\in\mathcal{S}$，定义$$d(f,g)=\int_{[a,b]}\frac{|f(t)-g(t)|}{1+|f(t)-g(t)|}\,\mathrm{d}m(t).$$容易验证这是一个度量，并且 $[a,b]$ 上可测函数列的依测度收敛等价于 $\mathcal{S}$ 中按照度量 $d$ 的收敛；此外，度量空间 $(\mathcal{S},d)$ 是完备的。

**例 1.1.13 (坐标收敛度量)** @7

在空间$$\mathbb{R}^{\infty}=\{x=(x_1,x_2,\cdots,x_n,\cdots):x_n\in\mathbb{R},\ \forall n\in\mathbb{N}_+\}$$中，定义度量$$d(x,y)=\sum_{n=1}^{\infty}\frac{1}{2^n}\cdot\frac{|x_n-y_n|}{1+|x_n-y_n|},$$那么 $(\mathbb{R}^{\infty},d)$ 是一个度量空间。并且 $(\mathbb{R}^{\infty},d)$ 中的点列 $\{x^{(k)}\}$ 收敛于 $\{x^{(0)}\}$ 等价于其按坐标收敛，即 $\lim\limits_{k\to\infty}x_n^{(k)}=x_n^{(0)}$（$n=1,2,\cdots$）。从而 $(\mathbb{R}^{\infty},d)$ 是一个完备的度量空间。

**例 1.1.14 (全纯函数内闭一致收敛)** @8

设 $\Omega$ 是复平面中的开集，记 $H(\Omega)$ 为 $\Omega$ 上全纯函数全体构成的集合。取 $\Omega$ 中单调递增的紧集族 $K_n$，使得 $K_n$ 的内部 $U_n$ 满足 $\bigcup_n U_n=\Omega$。定义$$d(f,g)=\sum_{n=0}^{\infty}\frac{1}{2^n}\frac{\max\limits_{x\in K_n}|f(x)-g(x)|}{1+\max\limits_{x\in K_n}|f(x)-g(x)|}.$$则 $d$ 是一个度量，并且 $d(f_n,f)\to 0$ 当且仅当 $f_n$ 内闭一致收敛于 $f$。

**命题 1.1.1 (收敛点列极限唯一)** @8

在度量空间 $(X,d)$ 中，收敛点列 $\{x_n\}$ 的极限是唯一的。

这一性质给出了可测函数列依测度收敛、序列按坐标收敛以及解析函数列内闭一致收敛的极限唯一性的统一处理。

#### 习题（p8–10）

**习题 1** @8

在 $l^2=\{\text{数列 }x=(x_1,x_2,\cdots):\sum_{k=1}^{\infty}|x_k|^2<+\infty\}$ 上，令

$$d(x,y)=\left(\sum_{k=1}^{\infty}|x_k-y_k|^2\right)^{1/2},\qquad \forall x,y\in l^2.$$

证明 $d$ 是 $l^2$ 上的度量。若 $\{x^{(m)}\}$ 是 $l^2$ 中点列，$x^{(0)}\in l^2$，证明：如果 $\lim_{m\to\infty}d(x^{(m)},x^{(0)})=0$，那么对于任何 $k$，$\lim_{m\to\infty}|x_k^{(m)}-x_k^{(0)}|=0$，并举例说明逆命题不正确。

**习题 2** @8

设 $(X,d)$ 是度量空间，证明：例 1.1.11 引进的 $d'$ 和 $d''$ 也是 $X$ 上的度量，并且 $(X,d')$、$(X,d'')$ 中点列的收敛性和在 $(X,d)$ 中是一致的。

**习题 3** @8

若度量空间 $(X,d)$ 中点列 $\{x_n\}$、$\{y_n\}$ 分别收敛于点 $x,y$，证明：

$$\lim_{n\to\infty}d(x_n,y_n)=d(x,y).$$

**习题 4** @8

设 $X$ 是 $[0,1]$ 上多项式全体。对于 $P,Q\in X$，$P(x)-Q(x)=\sum_{i=0}^n a_i x^i$，令

$$d_1(P,Q)=\max_{x\in[0,1]}|P(x)-Q(x)|,\qquad d_2(P,Q)=\sum_{i=0}^n|a_i|.$$

证明：

(i) $d_1,d_2$ 都是 $X$ 上的度量。

(ii) 多项式按 $d_1$ 收敛等价于在 $[0,1]$ 上一致收敛于某一多项式。

(iii) 按 $d_2$ 收敛可以推出按 $d_1$ 收敛，但反之不真（即存在多项式列 $\{P_k\}$，$d_1(P_k,0)\to0$，但 $d_2(P_k,0)\not\to0$）。

**习题 5** @9

对 $0<p<1$，记 $\mathcal{L}^p[0,1]$ 是区间 $[a,b]$ 上 Lebesgue 可测且 $p$ 次可积的函数全体。令

$$d(f,g)=\int_0^1|f(t)-g(t)|^p\,\mathrm{d}t.$$

证明：

(i) 当数 $a,b>0$ 时，$(a+b)^p\leqslant a^p+b^p$。

(ii) $d$ 是伪度量，即 $d$ 是非负的且满足定义 1.1.1(ii) 及 (iii)。

(iii) 若等价关系 $f\sim g$ 是指两个函数 $f,g$ 满足 $f\stackrel{m}{=}g$，仍以 $f$ 来表示 $p$ 次可积函数 $f$ 在 $L^p[a,b]=\mathcal{L}^p[a,b]/{\sim}$ 中对应的等价类，则 $(L^p[a,b],d)$ 是度量空间。

**习题 6** @9

图 $G=(V,E)$ 是指如下的集合对：$V$ 是一个点集，$E$ 是 $V\times V\setminus\{(x,x):x\in V\}$ 的子集，且当 $(x,y)\in E$ 时，$(y,x)\in E$。称 $V$ 是顶点集，$V$ 中元素称为顶点；称 $E$ 为边集，$E$ 中元素称为边。如果两个顶点有一条边相连，即 $(x,y)\in E$，那么称它们为邻居（neighbour），记为 $x\sim y$。如果 $V$ 中任意两点 $x,y$ 之间，都存在一条路径 $x=z_0\sim z_1\sim\cdots\sim z_n=y$ 连接 $x,y$，就称图是连通的。对 $V$ 上不同两点 $x,y$，令

$$d(x,y)=\min\{n:\text{存在路径 }x=z_0\sim z_1\sim\cdots\sim z_n=y\},$$

并定义 $d(x,x)=0$。证明：对于连通图 $G$，$(V,d)$ 是一个度量空间。

**习题 7** @9

在三维 Euclid 空间 $\mathbb{R}^3$ 中，考虑单位球面

$$S^2=\{x\in\mathbb{R}^3:x=(x_1,x_2,x_3),\ x_1^2+x_2^2+x_3^2=1\}.$$

对于 $x,y\in S^2$，规定 $d(x,y)$ 为过 $x,y$ 两点的大圆以 $x,y$ 为端点的劣弧的弧长，它在三维 Euclid 空间的正交变换下是保持不变的。

(i) 对于 $x_1^2+x_2^2=1$，计算 $d((1,0,0),(x_1,x_2,0))$。

(ii) 如果用 $\rho(x,y)$ 表示 Euclid 距离，证明：

$$\rho(x,y)\leqslant d(x,y)\leqslant\frac{\pi}{2}\rho(x,y).$$

(iii) 证明：$d$ 是 $S^2$ 上的度量。

**习题 8** @9

证明：例 1.1.14 中的 $d$ 是一个度量，并且 $d(f_n,f)\to0$ 当且仅当 $f_n$ 内闭一致收敛于 $f$。

**习题 9** @9

对复数 $z$，$|z|<1$，由复分析知识 $\psi_z(w)=\dfrac{w-z}{1-\overline{z}w}$ 是复平面单位圆盘 $\mathbb{D}=\{z\in\mathbb{C}:|z|<1\}$ 的解析自同构。令

$$d(z,w)=\ln\frac{1+|\psi_z(w)|}{1-|\psi_z(w)|}.$$

(i) 对于 $a,z,w\in\mathbb{D}$，证明：$d(z,w)=d(\psi_a(z),\psi_a(w))$。

(ii) 证明：$d$ 是 $\mathbb{D}$ 上的一个度量（称为 Poincaré（庞加莱）度量）。

(iii) 画出 $B(\frac12,10)=\{w\in\mathbb{D}:d(\frac12,w)\leqslant10\}$ 的示意图。

**习题 10** @10

称群 $G$ 是有限生成的，是指存在 $G$ 中不含单位元 $e$ 的有限子集 $S$，使得

$$\forall x\in G,\ \exists n\in\mathbb{N},\ \varepsilon_i=\pm1,\ s_i\in S,\quad x=s_1^{\varepsilon_1}s_2^{\varepsilon_2}\cdots s_n^{\varepsilon_n}.$$

此时称 $S$ 为 $G$ 的一个生成集。

(i) 对于群 $G$ 及其有限生成集 $S$，它产生了一个 Cayley（凯莱）图 $\Gamma=(G,E)$，这里 $G\times G$ 中元素 $(x,y)\in E$ 当且仅当存在 $g\in S$ 使得 $xg=y$ 或者 $xg^{-1}=y$。证明：Cayley 图是连通图。

我们将这个 Cayley 图所给出的 $G$ 的度量记作 $d_S$（见题 6）：对于 $u,v\in G$，

$$d_S(u,v)=\min\{n\in\mathbb{N}:\exists\varepsilon_i=\pm1,\ s_i\in S\text{ 使得 }v=us_1^{\varepsilon_1}s_2^{\varepsilon_2}\cdots s_n^{\varepsilon_n}\}.$$

(ii) 证明：$d_S$ 是 $G$（左作用）不变度量，即

$$d_S(x,y)=d_S(gx,gy),\qquad\forall x,y,g\in G.$$

(iii) 若 $S_1,S_2$ 是 $G$ 的两个生成集，证明：度量 $d_{S_1},d_{S_2}$ 是等价的，即存在正数 $C_1,C_2$ 使得

$$C_1d_{S_1}(x,y)\leqslant d_{S_2}(x,y)\leqslant C_2d_{S_1}(x,y),\qquad\forall x,y\in G.$$

(iv) 自由群 $\mathbb{F}_2$ 定义如下：它由两个元素 $a,b$ 生成，其中的元素为由 $a,b$ 排列成的单词 $s_1^{\varepsilon_1}s_2^{\varepsilon_2}\cdots s_n^{\varepsilon_n}$，其中 $n=0,1,2,\cdots$，$\varepsilon_i=\pm1$，$s_i\in\{a,b\}$；词 $w,v$ 的乘法定义为 $wv$，且当 $a$ 与 $a^{-1}$ 或 $b$ 与 $b^{-1}$ 相邻时消除。当 $n=0$ 时的单词记为 $e$，它是 $\mathbb{F}_2$ 的单位元。画出 $\mathbb{F}_2$ 关于生成集 $\{a,b\}$ 的 Cayley 图的示意图。

### 1.2 赋范线性空间及内积空间（p10–19）

#### 线性空间 @11

**例 1.2.1 (实数组线性空间)** @10

所有 $n$ 个有序实数组 $x=(x_1,x_2,\cdots,x_n)$ 构成的集合是线性空间，其中加法与数乘运算按下列公式定义：$$(x_1,x_2,\cdots,x_n)+(y_1,y_2,\cdots,y_n)=(x_1+y_1,x_2+y_2,\cdots,x_n+y_n),$$$$\alpha(x_1,x_2,\cdots,x_n)=(\alpha x_1,\alpha x_2,\cdots,\alpha x_n).$$这个空间记作 $\mathbb{R}^n$。类似地，复线性空间 $\mathbb{C}^n$ 定义为所有 $n$ 个有序复数组（具有复数数乘运算）构成的线性空间。

**例 1.2.2 (函数空间)** @11

设 $S$ 是集合，$\mathcal{F}$ 是 $S$ 上某些实（或复）函数所成的函数族。在函数族中，我们按通常方法规定加法运算及数乘运算如下：$$(f+g)(s)=f(s)+g(s),\quad \forall f,g\in\mathcal{F},\ s\in S;$$$$(\alpha f)(s)=\alpha f(s),\quad \forall f\in\mathcal{F},\ s\in S,\ \alpha\ \text{是数}.$$如果当 $f,g\in\mathcal{F}$，$\alpha,\beta$ 是任意实（或复）数时，$\alpha f+\beta g\in\mathcal{F}$，那么 $\mathcal{F}$ 成为一个线性空间。以后如果不另外说明，函数空间总是采取上述的加法及数乘运算。$S$ 上的实值函数全体成为实空间，而复值函数全体成为复空间。

**例 1.2.3 (常用函数空间)** @11

（i）$C(E)$：$\mathbb{R}^n$ 中子集 $E$ 上的连续实（或复）函数全体，这是分析学中最重要的空间之一。

（ii）$P[x]$：一元多项式 $p(x)$ 全体。

（iii）$B[a,b]$：区间 $[a,b]$ 上有界函数全体。

（iv）$C^{\infty}(U)$，$C_c(U)$ 与 $C_c^{\infty}(U)$：对于 $\mathbb{R}^n$ 中开集 $U$，其上的无限次可微函数全体记为 $C^{\infty}(U)$。对于 $U$ 中函数 $f$，若它的**支撑集**$$\operatorname{supp} f \stackrel{\text{def}}{=} \text{子集 } \{x\in U: f(x)\neq 0\}\ \text{在}\ \mathbb{R}^n\ \text{中的闭包}$$是 $U$ 的一个紧子集，则称 $f$ 是**紧支撑**的。$U$ 上紧支撑的连续函数全体记作 $C_c(U)$。对于 $C_c(U)$ 中一个函数 $f$，如果延拓定义 $f$ 在 $U$ 外的值总为零，那么可以将其视为 $C_c(\mathbb{R}^n)$ 中的一个元素。令 $C_c^{\infty}(U)=C_c(U)\cap C^{\infty}(U)$ 为无限次可微的紧支撑函数。利用零延拓可将 $C_c^{\infty}(U)$ 视为 $C^{\infty}(\mathbb{R}^n)$ 的一个线性子空间。

**例 1.2.4 (数列空间)** @11

（i）$\mathbb{R}^{\infty}$：数列 $(x_1,x_2,\cdots,x_n,\cdots)$ 全体，按坐标进行加法和数乘运算，即$$(x_1,x_2,\cdots)+(y_1,y_2,\cdots)=(x_1+y_1,x_2+y_2,\cdots);\qquad \alpha(x_1,x_2,\cdots)=(\alpha x_1,\alpha x_2,\cdots),$$是线性空间。我们也可以将它看成正整数集合 $\mathbb{N}_+$ 上的函数空间。如果 $f$ 是 $\mathbb{N}_+$ 上的一个函数，那么它对应一个数列 $(f(1),f(2),\cdots,f(n),\cdots)$；反之，数列 $(x_1,x_2,\cdots,x_n,\cdots)$ 可以看成 $\mathbb{N}_+$ 上的函数 $f: n\mapsto x_n$。

（ii）$l^{\infty}$：有界数列全体。

（iii）$c$：收敛数列 $x=(x_1,x_2,\cdots,x_n,\cdots)$（即 $\lim\limits_{n\to\infty}x_n$ 存在）的全体。

（iv）$c_0$：收敛于 $0$ 的数列全体。

（v）$c_{00}$：只有有限项非零的数列全体。

（vi）$l^p$：$l^p=\left\{x: x=(x_1,x_2,\cdots),\ \sum\limits_{n=1}^{\infty}|x_n|^p<\infty\right\}\ (1\leqslant p<\infty)$。

显然，$c_{00}\subset l^p\subset c_0\subset c\subset l^{\infty}\subset\mathbb{R}^{\infty}$。

**定义 1.2.1 (Hamel 基)** @12

对于线性空间 $X$，$X$ 中的**线性无关组**是指 $X$ 中的一些元素构成的子集 $A$，使得子集 $A$ 中任意一个元素都不能被 $A$ 中其他有限个元素线性表出。这也是说，子集 $\{x_\lambda\}$ 是 $X$ 的线性无关组当且仅当 $\{x_\lambda\}$ 的任意有限子集 $\{x_{\lambda_1},x_{\lambda_2},\cdots,x_{\lambda_n}\}$ 是线性无关组。

我们称线性空间 $X$ 上的一个极大线性无关组为空间 $X$ 的一组 **Hamel（哈梅尔）基**。若 $X$ 的某个 Hamel 基中只有有限个元素，则称 $X$ 是**有限维线性空间**，否则称其为**无限维线性空间**。

**例 1.2.5 (多项式基与极大性)** @12

$\mathcal{F}=\{1,x,\cdots,x^n,\cdots\}$ 是多项式空间 $P[x]$ 的一个线性无关组，并且可以表示 $P[x]$ 的所有元素，因此 $\mathcal{F}$ 是 $P[x]$ 的一个 Hamel 基。同样地，$\mathcal{F}$ 也是 $C[a,b]$ 的线性无关组，但不能线性表示形如 $e^x$ 等大量函数，因此在 $C[a,b]$ 中不是极大的。

#### 赋范线性空间 @12

**定义 1.2.2 (半范数与范数)** @12

记 $\mathbb{K}$ 是实数域 $\mathbb{R}$ 或复数域 $\mathbb{C}$。对于 $\mathbb{K}$ 上的线性空间 $X$，若 $X$ 中的每个向量 $x$ 都对应一个实数 $\|x\|$，且满足如下条件：

（i）对任意 $x\in X$，$\|x\|\geqslant 0$；

（ii）对数 $\alpha$ 与 $x\in X$，$\|\alpha x\|=|\alpha|\,\|x\|$；

（iii）对任意 $x,y\in X$，$\|x+y\|\leqslant\|x\|+\|y\|$，

则称 $\|\cdot\|$ 为 $X$ 上的**半范数**，$X$ 称为**半赋范空间**。若 $\|\cdot\|$ 还满足$$\|x\|=0\quad\text{当且仅当}\quad x=0,$$则称 $\|\cdot\|$ 为 $X$ 上的**范数**，$(X,\|\cdot\|)$ 称为**赋范线性空间**。

线性空间上的范数诱导了这个空间上的度量 $d(x,y)=\|x-y\|$。显然这个度量具有平移不变性，即 $d(x,y)=d(x+z,y+z)$。而且，若 $x_n$ 按度量 $d$ 收敛于 $x_0$，由三角不等式可得 $\|x_n\|\to\|x_0\|$。换言之，$\|\cdot\|$ 在度量 $d$ 给出的拓扑下是连续的。

**例 1.2.6 (连续函数最大模范数)** @12

$C[a,b]$ 是有界闭区间 $[a,b]$ 上连续的实（或复）值函数 $f(x)$ 全体。定义范数$$\|f\|=\max_{x\in[a,b]}|f(x)|.$$容易验证，它是 $C[a,b]$ 上的范数。这个范数诱导了 $C[a,b]$ 上的度量（见例 1.1.6）$$d(f,g)=\max_{x\in[a,b]}|f(x)-g(x)|.$$

**例 1.2.7 (高阶连续可微范数)** @13

$C^{(k)}[a,b]$ 是区间 $[a,b]$ 中具有连续的 $k$ 阶导函数的函数全体，以$$\|x\|=\max_{0\leqslant j\leqslant k}\max_{t\in[a,b]}|x^{(j)}(t)|$$为范数。

**例 1.2.8 (可积函数半范数)** @13

设 $E$ 是 Euclid 空间 $\mathbb{R}^k$ 的 Lebesgue 可测集。对 $1\leqslant p<\infty$，定义$$\mathcal{L}^p(E)=\left\{f: f\ \text{是}\ E\ \text{上 Lebesgue 可测函数},\ \|f\|_p=\left(\int_E|f|^p\,\mathrm{d}m\right)^{\frac{1}{p}}<+\infty\right\}.$$容易验证，$\|\cdot\|_p$ 满足定义 1.2.2 的（i）和（ii），由 Minkowski 不等式得 $\|\cdot\|_p$ 也满足定义中的（iii）。那么 $\|\cdot\|_p$ 是 $\mathcal{L}^p(E)$ 的半范数，但不是范数。因为 $\|f\|_p=0$ 时并不能得到 $f=0$，而只能得出 $f\stackrel{m}{=}0$。

如果把满足 $f\stackrel{m}{=}g$ 的两个函数 $f,g$ 视为同一个函数（即把 $f\stackrel{m}{=}0$ 的函数 $f$ 视为恒等于零的函数），那么我们就得到 $\mathcal{L}^p(E)$ 上的一个等价关系 $\sim$。我们仍以 $f$ 来表示函数 $f$ 在 $L^p(E)=\mathcal{L}^p(E)/\sim$ 中对应的等价类，$\|\cdot\|_p$ 便是 $L^p(E)$ 上的一个范数。

由范数诱导的度量$$d(f,g)=\|f-g\|_p=\left(\int_E|f-g|^p\,\mathrm{d}m\right)^{\frac{1}{p}}$$也是完备的：对于 $L^p(E)$ 中的 Cauchy 点列 $\{f_n\}$，则对任意 $\varepsilon>0$，存在 $N$，当 $n,m>N$ 时 $\|f_n-f_m\|_p^p=\int_E|f_n(x)-f_m(x)|^p\,\mathrm{d}m(x)\leqslant\varepsilon$。由 Chebyshev（切比雪夫）不等式，这个函数序列也是依测度 Cauchy 收敛的。由实变函数的理论，可取可测函数 $f_0$ 为 $\{f_n\}$ 的依测度收敛极限。由 Fatou（法图）引理，$\|f_n-f_0\|_p^p\leqslant\varliminf\limits_{m\to\infty}\int_E|f_n(x)-f_m(x)|^p\,\mathrm{d}m(x)\leqslant\varepsilon$，从而 $f_0\in L^p(E)$ 且为 $\{f_n\}$ 的极限（另一个更完整的证明可见例 1.4.13）。

**例 1.2.9 (本性有界函数范数)** @13

设 $E$ 是 Euclid 空间 $\mathbb{R}^k$ 中的 Lebesgue 可测集。定义$$\mathcal{L}^{\infty}(E)=\{f: f\ \text{是}\ E\ \text{上 Lebesgue 可测函数},\ \text{存在实数}\ M\ \text{使得}\ m(|f|>M)=0\}.$$我们常称 $\mathcal{L}^{\infty}(E)$ 中的函数为**本性有界函数**。如果定义等价关系 $f\sim g$ 为 $f\stackrel{m}{=}g$，那么$$\|f\|_{\infty}=\inf_{m(E_0)=0}\ \sup_{x\in E\setminus E_0}|f(x)|$$是 $L^{\infty}(E)=\mathcal{L}^{\infty}(E)/\sim$ 上的一个范数。对它的完备性的证明留作练习。

**例 1.2.10 (空间 $V[a,b]$)** @14

设 $V[a,b]$ 是区间 $[a,b]$ 上的实（或复）有界变差函数的全体，依照通常的线性运算，它是一个线性空间。对于 $f\in V[a,b]$，规定$$\|f\|=|f(a)|+\bigvee_{a}^{b}(f),$$那么 $V[a,b]$ 按范数 $\|f\|$ 成为赋范线性空间。我们令$$V_0[a,b]=\{f: f\in V[a,b],\ f(a)=0,\ f\ \text{在}\ (a,b)\ \text{中任一点是右连续的}\},$$它是 $V[a,b]$ 的线性子空间。在 $V_0[a,b]$ 上，范数 $\|f\|$ 等于全变差 $\bigvee_a^b(f)$。

实（或复）值有界变差函数与广义（复）测度有密切联系。设 $\mathfrak{B}$ 是 $[a,b]$ 中的 Borel（博雷尔）集全体，$M([a,b])$ 是 $([a,b],\mathfrak{B})$ 上有限值广义（复）测度全体。在它上定义加法和数乘为$$(\mu+\nu)(A)=\mu(A)+\nu(A),\quad \forall\mu,\nu\in M([a,b]),\ A\in\mathfrak{B};$$$$(\alpha\mu)(A)=\alpha\mu(A),\quad \forall\mu\in M([a,b]),\ A\in\mathfrak{B},\ \alpha\ \text{为数},$$并规定$$\|\mu\|=\sup\left\{\sum_{i=1}^{\infty}|\mu(E_i)|: E_i\in\mathfrak{B},\ \text{当}\ i\neq j\ \text{时},\ E_i\cap E_j=\varnothing,\ \bigcup_{i=1}^{\infty}E_i=[a,b]\right\},$$则 $\|\cdot\|$ 是 $M([a,b])$ 上的范数。

由实变函数的理论知，对于 $\mu\in M([a,b])$，令$$f_\mu(x)=\begin{cases}0, & x=a,\\ \mu([a,x]), & a<x\leqslant b,\end{cases}$$则 $\mu\to f_\mu$ 为 $M([a,b])$ 到 $V_0[a,b]$ 上保持范数的线性空间同构。

**定义 (Banach 空间)** @14

若赋范线性空间 $X$ 在诱导度量 $d(x,y)=\|x-y\|$ 下是完备的，则称 $X$ 是 **Banach（巴拿赫）空间**。

**例 1.2.11 (欧几里得空间完备)** @14

$n$ 维 Euclid 空间 $\mathbb{R}^n$ 是 Banach 空间。

**例 1.2.12 (连续函数空间完备性)** @14

由例 1.1.6，$C[a,b]$ 是 Banach 空间。

**例 1.2.13 (序列空间完备性)** @14

令 $1\leqslant p<\infty$。对于 $x=(x_1,x_2,\cdots,x_n,\cdots)\in l^p$，定义 $\|x\|_p=\left(\sum\limits_{n=1}^{\infty}|x_n|^p\right)^{\frac{1}{p}}$。由此易得 $\|\cdot\|_p$ 是 $l^p$ 上的范数。下面我们来说明 $l^p$ 是完备的。

**例 1.2.14 (有界序列空间完备)** @15

令 $p=\infty$。对于 $x=(x_1,x_2,\cdots,x_n,\cdots)\in l^{\infty}$，定义$$\|x\|_{\infty}=\sup_{n\in\mathbb{N}_+}|x_n|,$$则 $\|\cdot\|_{\infty}$ 是 $l^{\infty}$ 上的范数。容易说明 $l^{\infty}$ 也是完备的。

**引理 1.2.1 (子空间完备的判据)** @15

设 $A$ 为完备的度量空间 $(X,d)$ 的一个子集。度量空间 $(A,d)$ 是完备的当且仅当 $A$ 是 $X$ 的一个闭子集，即：若 $A$ 中点列 $\{x_n\}$ 收敛于 $X$ 中点 $x_0$，则 $x_0\in A$。

**例 1.2.15 (零收敛序列空间完备)** @16

由于 $c_0$ 可视为 $l^{\infty}$ 的线性子空间，$\|\cdot\|_{\infty}$ 同样给出了 $c_0$ 上的一个范数。赋范线性空间 $(c_0,\|\cdot\|_{\infty})$ 也是 Banach 空间。

**定义 1.2.3 (内积)** @16

记 $\mathbb{K}$ 是实数域 $\mathbb{R}$ 或复数域 $\mathbb{C}$。对于 $\mathbb{K}$ 上的线性空间 $H$，如果 $H$ 中任何两个向量 $x,y$ 都对应着一个数 $\langle x,y\rangle\in\mathbb{K}$，满足条件：

（i）（共轭对称性）对任意 $x,y\in H$，$\langle x,y\rangle=\overline{\langle y,x\rangle}$；

（ii）（对第一变元的线性）对任意 $x,y,z\in H$，$\alpha,\beta\in\mathbb{K}$，$\langle\alpha x+\beta y,z\rangle=\alpha\langle x,z\rangle+\beta\langle y,z\rangle$；

（iii）（正定性）对任意 $x\in H$，$\langle x,x\rangle\geqslant 0$，且 $\langle x,x\rangle=0$ 的充要条件是 $x=0$，

那么称 $\langle\cdot,\cdot\rangle$ 是 $H$ 中的**内积**，称 $H$ 是实（或复）**内积空间**。

**例 1.2.16 (复欧几里得空间内积)** @16

设 $\mathbb{C}^n$ 是 $n$ 维的复 Euclid 空间，对于 $\mathbb{C}^n$ 中任意两个向量 $x=(x_1,x_2,\cdots,x_n)$，$y=(y_1,y_2,\cdots,y_n)$，定义$$\langle x,y\rangle=x_1\bar{y}_1+x_2\bar{y}_2+\cdots+x_n\bar{y}_n.$$显然 $\langle\cdot,\cdot\rangle$ 构成一个内积。并且 $\mathbb{C}^n$ 上的范数满足$$\|x\|^2=\left(\sum_{i=1}^{n}|x_i|^2\right)^{\frac{1}{2}}=\langle x,x\rangle^{\frac{1}{2}}.$$

**例 1.2.17 ($l^2$ 空间)** @16

在 $l^2$ 中，对于 $x=(x_1,x_2,\cdots)$，$y=(y_1,y_2,\cdots)\in l^2$，规定$$\langle x,y\rangle=\sum_{n=1}^{\infty}x_n\bar{y}_n.$$容易证明 $\langle\cdot,\cdot\rangle$ 满足内积的三个条件，今后在 $l^2$ 中都取这个内积。同样，我们有 $\|x\|_2^2=\langle x,x\rangle$。

**例 1.2.18 ($L^2$ 空间)** @16

设 $E$ 是 $\mathbb{R}^n$ 的一个 Lebesgue 可测子集。对于 $f,g\in L^2(E)$，定义$$\langle f,g\rangle=\int_E f(t)\overline{g(t)}\,\mathrm{d}t.$$容易验证这是一个内积。

#### 内积空间 @17

**引理 1.2.2 (对第二变元的共轭线性)** @17

设 $x,y_1,y_2\in H$，则$$\langle x,\lambda y_1+\mu y_2\rangle=\bar{\lambda}\langle x,y_1\rangle+\bar{\mu}\langle x,y_2\rangle.$$

**引理 1.2.3 (Cauchy–Schwarz 不等式)** @17

设 $x,y\in H$，则成立不等式$$|\langle x,y\rangle|^2\leqslant\langle x,x\rangle\langle y,y\rangle.\tag{1.10}$$

**例 1.2.19 (柯西施瓦茨不等式)** @17

在空间 $L^2(E)$ 中，根据 Cauchy–Schwarz 不等式，我们有$$\left|\int_E f\bar{g}\,\mathrm{d}m\right|\leqslant\left(\int_E|f|^2\,\mathrm{d}m\right)^{\frac{1}{2}}\left(\int_E|g|^2\,\mathrm{d}m\right)^{\frac{1}{2}}.$$同理，在空间 $l^2$ 中，我们有$$\left|\sum_{i=1}^{\infty}x_i\bar{y}_i\right|^2\leqslant\sum_{i=1}^{\infty}|x_i|^2\sum_{i=1}^{\infty}|y_i|^2.$$

**定理 1.2.1 (内积导出范数)** @17

设 $x\in H$，定义 $\|x\|=\sqrt{\langle x,x\rangle}$，那么 $\|\cdot\|$ 是 $H$ 上的一个范数。

我们称 $\|x\|=\sqrt{\langle x,x\rangle}$ 是由内积导出的范数。于是 $H$ 在这个范数下成为赋范线性空间，进而这个范数又导出了空间上的度量。之后，内积空间中的极限、收敛等拓扑概念，如无特殊申明都是指在这个度量的意义下。

**定义 (Hilbert 空间)** @18

若内积空间 $H$ 所导出的度量是完备的，则称 $H$ 是一个 **Hilbert（希尔伯特）空间**。

Cauchy–Schwarz 不等式的一个直接的推论是，若 $x$ 和 $y$ 均非零，则$$\frac{|\langle x,y\rangle|}{\|x\|\,\|y\|}\leqslant 1.$$因此，存在唯一角度 $\theta\in\left[0,\frac{\pi}{2}\right]$ 使得 $\cos\theta=\dfrac{|\langle x,y\rangle|}{\|x\|\,\|y\|}$，我们称 $\theta$ 为 $x$ 和 $y$ 的 **Hermite（埃尔米特）夹角**。$\theta=\frac{\pi}{2}$ 即为最要紧的垂直情形。

**定义 1.2.4 (正交)** @18

如果内积空间 $(H,\langle\cdot,\cdot\rangle)$ 中两个向量 $x,y$ 满足 $\langle x,y\rangle=0$，就说 $x$ 与 $y$ **正交**，记作 $x\perp y$。

**定理 1.2.2 (勾股定理)** @18

对内积空间 $H$ 中两个元素 $x,y$，若 $x\perp y$，则有$$\|x+y\|^2=\|x\|^2+\|y\|^2.$$

**引理 1.2.4 (内积的连续性)** @18

设 $H$ 是内积空间，那么内积关于两个变元是连续的。即：当 $x_n\to x$，$y_n\to y$ 时，有 $\langle x_n,y_n\rangle\to\langle x,y\rangle$。

**定理 (极化恒等式)** @18

当 $H$ 是内积空间，$\|\cdot\|$ 是由内积所导出的范数时，内积也可以用范数来表达。设 $x,y\in H$。当 $H$ 是实内积空间时，成立$$\langle x,y\rangle=\frac{1}{4}\left(\|x+y\|^2-\|x-y\|^2\right).\tag{1.12}$$而当 $H$ 是复内积空间时，成立$$\langle x,y\rangle=\frac{1}{4}\left(\|x+y\|^2+\mathrm{i}\|x+\mathrm{i}y\|^2-\|x-y\|^2-\mathrm{i}\|x-\mathrm{i}y\|^2\right).\tag{1.13}$$等式（1.12）及（1.13）称为**极化恒等式**，是非常重要的等式。

**引理 1.2.5 (平行四边形公式)** @18

设 $H$ 是内积空间，$\|\cdot\|$ 是由内积决定的范数，则对任何 $x,y\in H$，成立$$\|x+y\|^2+\|x-y\|^2=2(\|x\|^2+\|y\|^2).\tag{1.14}$$若 $H$ 是二维实空间，则等式（1.14）的几何意义是，平行四边形中对角线长度的平方和等于四边的长度平方和，称其为平行四边形公式。对一般的内积空间，等式（1.14）也称为平行四边形公式。引理 1.2.5 说明，由内积决定的范数必须适合平行四边形公式。

**定理 1.2.3 (平行四边形公式刻画内积)** @19

设 $(X,\|\cdot\|)$ 是赋范线性空间。如果对 $X$ 中任何元素 $x,y$，都成立平行四边形公式（1.14），那么可以在 $X$ 中定义内积 $\langle\cdot,\cdot\rangle$ 使得 $\|\cdot\|$ 是由内积 $\langle\cdot,\cdot\rangle$ 诱导的范数。

平行四边形公式是内积空间中范数的特征性质。

**例 1.2.20 (有界函数空间非内积)** @19

考虑空间 $L^{\infty}[0,1]$。取 $f=1+x$，$g=1-x$，则$$\|f+g\|_{\infty}^2+\|f-g\|_{\infty}^2\neq 2(\|f\|_{\infty}^2+\|g\|_{\infty}^2).$$从而空间 $L^{\infty}[0,1]$ 不满足平行四边形法则，其范数不能由内积诱导。

#### 习题（p19–20）

**习题 1** @19

证明：一个赋范线性空间上由范数定义的拓扑和线性空间结构是相适应的，即：加法运算和数乘运算都是连续的。

**习题 2** @19

取 $p\geqslant1$。设 $R_1,R_2,\cdots,R_n,\cdots$ 是一列赋范线性空间，$x=\{x_n\}$ 是一列元素，其中 $x_n\in R_n$，$n=1,2,\cdots$，且 $\sum_{n=1}^{\infty}\|x_n\|^p<\infty$。这种元素列的全体记作 $R$，类似通常的数列的加法及数乘运算，在 $R$ 中引入线性运算，证明 $R$ 是一线性空间。如果又规定

$$\|x\|=\left(\sum_{n=1}^{\infty}\|x_n\|^p\right)^{1/p},$$

证明：$R$ 按范数 $\|\cdot\|$ 成为赋范线性空间。

**习题 3** @19

设 $L$ 是赋范线性空间，$L\times L$ 按照线性运算

$$\alpha(x_1,y_1)+\beta(x_2,y_2)=(\alpha x_1+\beta x_2,\alpha y_1+\beta y_2)$$

成为线性空间。在 $L\times L$ 上定义两个范数如下：

$$\|(x,y)\|_1=\sqrt{\|x\|^2+\|y\|^2},\qquad\|(x,y)\|_2=\max\{\|x\|,\|y\|\}.$$

(i) 证明：$(L\times L,\|\cdot\|_1)$ 和 $(L\times L,\|\cdot\|_2)$ 都是赋范线性空间。

(ii) 作 $(L\times L,\|\cdot\|_1)$ 到 $(L\times L,\|\cdot\|_2)$ 的映射：

$$\varphi:(x,y)\mapsto(x',y'),\qquad(x',y')=(x,y)\begin{pmatrix}a&b\\c&d\end{pmatrix},$$

其中矩阵 $\begin{pmatrix}a&b\\c&d\end{pmatrix}$ 是非奇异的。证明：$\varphi$ 是拓扑同胚（即 $\varphi$ 是到上的一一对应，且 $\varphi$ 和 $\varphi^{-1}$ 都是连续的）。

**习题 4** @19

证明：赋范线性空间 $C^{(k)}[a,b],L^{\infty}[a,b],l^{\infty}$ 是完备的。

**习题 5** @20

证明：赋范线性空间 $c$ 是完备的。

**习题 6** @20

设 $C_b(0,1]$ 表示在半开半闭区间 $(0,1]$ 上处处连续且有界的函数全体，对于每个 $x\in C_b(0,1]$，令 $\|x\|=\sup_{0<t\leqslant1}|x(t)|$。证明：

(i) $\|x\|$ 是空间 $C_b(0,1]$ 上的范数；$C_b(0,1]$ 按 $\|\cdot\|$ 成为赋范线性空间；

(ii) 在 $C_b(0,1]$ 中点列 $\{x_n\}$ 按范数 $\|\cdot\|$ 收敛于 $x_0$ 的充要条件是 $\{x_n\}$ 在 $(0,1]$ 上一致收敛于 $x_0$。

**习题 7** @20

定义（等距映射）：设 $(X,d_X),(Y,d_Y)$ 是两个度量空间，$f$ 是从 $X$ 到 $Y$ 的映射，如果

$$d_Y(f(x),f(x'))=d_X(x,x'),\qquad\forall x,x'\in X,$$

就称 $f$ 是等距映射。如果存在一个从 $X$ 到 $Y$ 中一一对应的、到上的等距映射，就称度量空间 $X$ 和 $Y$ 是等距同构的。

证明：有界实数列全体所成的赋范线性空间 $l^{\infty}$ 与空间 $C_b(0,1]$ 的一个子空间是等距同构的。

**习题 8** @20

举出五个赋范线性空间的例子，它们的范数都不能由内积诱导出。

**习题 9** @20

设 $R$ 是 $n$ 维线性空间，$\{e_1,e_2,\cdots,e_n\}$ 是 $R$ 的一组基，证明 $\langle\cdot,\cdot\rangle$ 成为 $R$ 的内积的充要条件是存在 $n$ 阶正定方阵 $A=(a_{ij})$，使得

$$\left\langle\sum_{i=1}^n x_i e_i,\sum_{j=1}^n y_j e_j\right\rangle=\sum_{i,j=1}^n a_{ij}x_i\overline{y_j}.$$

**习题 10** @20

设 $H$ 是内积空间。如果 $x_1,x_2,\cdots,x_n$ 是 $H$ 中的向量，它们满足条件 $\langle x_i,x_j\rangle=\delta_{ij}$，证明：$x_1,x_2,\cdots,x_n$ 是一组线性无关的向量。

**习题 11** @20

证明定理 1.2.3。

**习题 12** @20

定义：设 $H$ 是内积空间，对于 $x\in H$，$A\subset H$，若对每个 $y\in A$ 有 $x\perp y$，则称 $x\perp A$，并记

$$A^{\perp}=\{x\in H:x\perp A\}.$$

设 $H$ 是一个 Hilbert 空间。

(i) 对于 $x\in H$，$x\perp H$ 的充要条件是 $x=0$。

(ii) 对 $H$ 中的子集 $A$，$A^{\perp}$ 是闭的线性子空间。

(iii) 若子集 $M\subset N\subset H$，则 $M^{\perp}\supset N^{\perp}$。

(iv) 对线性空间 $M\subset H$，$M\cap M^{\perp}=\{0\}$。

(v) 设 $L$ 是由 $H$ 的两个子集 $M$ 和 $N$ 张成的线性子空间，证明 $L^{\perp}=M^{\perp}\cap N^{\perp}$。

**习题 13** @20

设 $R_1,R_2,\cdots,R_n,\cdots$ 是一列内积空间。令

$$R=\left\{\{x_n\}:x_n\in R_n,\ \sum_{n=1}^{\infty}\|x_n\|^2<\infty\right\},$$

当 $\{x_n\},\{y_n\}\in R$ 时，规定

$$\alpha\{x_n\}+\beta\{y_n\}=\{\alpha x_n+\beta y_n\},\qquad\alpha,\beta\text{ 是数},$$

$$\langle\{x_n\},\{y_n\}\rangle=\sum_{n=1}^{\infty}\langle x_n,y_n\rangle.$$

证明 $R$ 是内积空间。如果 $R_n$（$n=1,2,\cdots$）都是 Hilbert 空间，证明 $R$ 也是 Hilbert 空间。（空间 $R$ 常记为 $\bigoplus_n R_n$。）

### 1.3 Hilbert 空间的正交系（p21–29）

**定义 1.3.1 (正交系)** @21

设 $\mathcal{E}$ 是 Hilbert 空间 $H$ 中的一族非零向量。

（i）如果 $\mathcal{E}$ 中任何两个不同的向量都正交，就称 $\mathcal{E}$ 是 $H$ 的**正交系**。

（ii）如果正交系 $\mathcal{E}$ 中每个向量的范数都等于 $1$，就称 $\mathcal{E}$ 是**标准正交系**（或规范正交系）。

由定义立即可知，如果 $\mathcal{E}$ 是 Hilbert 空间 $H$ 中的正交系（标准正交系），那么 $\mathcal{E}$ 的任何子集也是 $H$ 中的正交系（标准正交系）。

**例 1.3.1 (标准正交系)** @21

在 $n$ 维 Euclid 空间 $\mathbb{R}^n$ 中，$$e_1=(1,0,\cdots,0),\quad e_2=(0,1,0,\cdots,0),\cdots,e_n=(0,0,0,\cdots,1)$$组成标准正交系。

**例 1.3.2 (平方和空间标准正交系)** @21

在 $l^2$ 中，令 $e_n$ 为在位置 $n$ 取 $1$ 其他位置取 $0$ 的点列，则 $\{e_1,e_2,\cdots,e_n,\cdots\}$ 为 $l^2$ 的标准正交系。

**例 1.3.3 (三角函数标准正交系)** @21

在实（或复）周期函数空间 $L^2[0,2\pi]$ 中，规定内积为$$\langle f,g\rangle=\frac{1}{2\pi}\int_0^{2\pi}f(x)\overline{g(x)}\,\mathrm{d}x,\quad \forall f,g\in L^2[0,2\pi].$$这时 $\{1,\sqrt{2}\cos x,\sqrt{2}\sin x,\sqrt{2}\cos 2x,\sqrt{2}\sin 2x,\cdots,\sqrt{2}\cos nx,\sqrt{2}\sin nx,\cdots\}$ 组成 $L^2[0,2\pi]$ 的标准正交系。

**例 1.3.4 (复指数标准正交系)** @21

在复空间 $L^2[0,2\pi]$ 中，直接计算可得 $\{\mathrm{e}^{\mathrm{i}nx}: n\in\mathbb{Z}\}$ 组成一组标准正交系。

另一个常用的研究周期函数的模型是圆周 $\mathbb{T}=\{z=\mathrm{e}^{\mathrm{i}x}: 0\leqslant x<2\pi\}$ 上的函数理论。取 $\mathbb{T}$ 上标准化的弧长测度 $\dfrac{\mathrm{d}x}{2\pi}$，容易证明 $L^2\left(\mathbb{T},\dfrac{\mathrm{d}x}{2\pi}\right)$ 按内积$$\langle f,g\rangle\overset{\text{def}}{=}\int_{x\in[0,2\pi)}f(\mathrm{e}^{\mathrm{i}x})\overline{g(\mathrm{e}^{\mathrm{i}x})}\,\frac{\mathrm{d}x}{2\pi},\quad \forall f,g\in L^2\left(\mathbb{T},\frac{\mathrm{d}x}{2\pi}\right)$$构成 Hilbert 空间，且 $\{z^n=\mathrm{e}^{\mathrm{i}nx}: n\in\mathbb{Z}\}$ 是标准正交系。

**定义 1.3.2 (Fourier 系数)** @22

设 $\mathcal{E}$ 是 Hilbert 空间 $H$ 的一组标准正交系，$x\in H$，数集$$\{\langle x,e\rangle: e\in\mathcal{E}\}$$称为向量 $x$ 关于标准正交系 $\mathcal{E}$ 的 **Fourier 系数集**，而 $\langle x,e\rangle$ 称为 $x$ 关于 $e\ (e\in\mathcal{E})$ 的 **Fourier 系数**。

在数学分析中，对于函数 $f\in L^2[0,2\pi]$，$$a_0(f)=\frac{1}{2\pi}\int_0^{2\pi}f(t)\,\mathrm{d}t=\langle f,1\rangle,$$$$a_n(f)=\frac{1}{2\pi}\int_0^{2\pi}f(t)\sqrt{2}\cos nt\,\mathrm{d}t=\langle f,\sqrt{2}\cos nx\rangle,$$$$b_n(f)=\frac{1}{2\pi}\int_0^{2\pi}f(t)\sqrt{2}\sin nt\,\mathrm{d}t=\langle f,\sqrt{2}\sin nx\rangle$$就是 $f$ 关于三角函数系的 Fourier 系数，而部分和 $(S_nf)(x)=a_0(f)+\sum\limits_{k=1}^{n}\left(a_k(f)\sqrt{2}\cos kx+b_k(f)\sqrt{2}\sin kx\right)$ 的收敛性正是 Fourier 级数的中心问题。

**定理 1.3.1 (Bessel 不等式)** @22

设 $\mathcal{E}=\{e_\lambda:\lambda\in\Lambda\}$ 是 Hilbert 空间 $H$ 中的标准正交系。那么，对于每个 $x\in H$，它的 Fourier 系数 $\{\langle x,e_\lambda\rangle:\lambda\in\Lambda\}$ 中最多只有可列个不为零，并且还成立如下的 **Bessel 不等式**：$$\sum_{\lambda\in\Lambda}|\langle x,e_\lambda\rangle|^2\leqslant\|x\|^2.\tag{1.15}$$

Bessel 不等式表示向量 $x$ 在 $\mathcal{E}$ 中每个标准向量 $e_\lambda$ 上投影 $\langle x,e_\lambda\rangle e_\lambda$ 的"长度"平方的和不超过 $x$ 的"长度"平方。

**推论 1.3.1 (黎曼勒贝格引理)** @23

设 $\{e_n\}$ 是 Hilbert 空间 $H$ 中的标准正交系，那么对任何 $x\in H$，有$$\lim_{n\to\infty}\langle x,e_n\rangle=0.$$这个推论在 $L^2[0,2\pi]$ 中用于标准正交三角函数系的情况下，就是 **Riemann–Lebesgue（黎曼–勒贝格）引理**。

#### 1.3.1 Hilbert空间的正交基 @23

**定义 1.3.3 (Fourier 级数)** @23

设 $\mathcal{E}=\{e_\lambda:\lambda\in\Lambda\}$ 是 Hilbert 空间 $H$ 中的标准正交系，对于 $x\in H$，级数 $\sum\limits_{\lambda\in\Lambda}\langle x,e_\lambda\rangle e_\lambda$ 称为向量 $x$ 关于 $\mathcal{E}$ 的 **Fourier 级数**，或 Fourier 展开式。当 $x=\sum\limits_{\lambda\in\Lambda}\langle x,e_\lambda\rangle e_\lambda$ 成立时，就称 $x$ 关于 $\mathcal{E}$ **可以展开成 Fourier 级数**。

**注 1.3.1 (任意指标的和)** @23

对于任意指标的求和 $\sum\limits_{\lambda\in\Lambda}c_\lambda$，一般性的定义为：取定向集 $A=\{\Lambda\text{ 中的有限子集}\}$ 以及定义 $A$ 上的序关系"$F_1\prec F_2$"为 $F_1\subseteq F_2$，那么$$\sum_{\lambda\in\Lambda}c_\lambda=\lim_{F\in A}\sum_{\lambda\in F}c_\lambda.$$在定义 1.3.3 的使用中，为避免使用太多定向集和网的讨论，注意到 $\{e_\lambda:\langle x,e_\lambda\rangle\neq 0\}$ 是可数集，将其排列为一个序列 $\{e_{\lambda_1},e_{\lambda_2},\cdots,e_{\lambda_n},\cdots\}$。根据 Bessel 不等式 $\sum\limits_{n=1}^{\infty}|\langle x,e_{\lambda_n}\rangle|^2<\infty$，可知 $\left\{\sum\limits_{k=1}^{n}\langle x,e_{\lambda_k}\rangle e_{\lambda_k}\right\}_n$ 是 $H$ 中的基本点列，因此其极限存在，并且这个极限与可数集 $\{e_\lambda:\langle x,e_\lambda\rangle\neq 0\}$ 所取的排列顺序无关。

**定理 1.3.2 (标准正交基的等价刻画)** @24

设 $\mathcal{E}=\{e_\lambda:\lambda\in\Lambda\}$ 是 Hilbert 空间 $H$ 中的标准正交系，下列命题等价：

（i）对 $H$ 中任意元素 $x$，有 $x=\sum\limits_{\lambda\in\Lambda}\langle x,e_\lambda\rangle e_\lambda$；

（ii）$\overline{\operatorname{span}}\{e_\lambda:\lambda\in\Lambda\}=H$；

（iii）$\{e_\lambda:\lambda\in\Lambda\}$ 是**完全的**，即：若 $x\in H$ 满足 $x\perp e_\lambda\ (\forall\lambda\in\Lambda)$，则 $x=0$；

（iv）$\{e_\lambda:\lambda\in\Lambda\}$ 是完备的，即：对 $H$ 中任意元素 $x$，**Parseval（帕塞瓦尔）等式** $\|x\|^2=\sum\limits_{\lambda\in\Lambda}|\langle x,e_\lambda\rangle|^2$ 成立。

我们称满足上述条件之一的标准正交系为 Hilbert 空间 $H$ 中的一组**标准正交基**（或规范正交基）。

**例 1.3.5 (完全标准正交系)** @25

在 $l^2$ 中，令 $e_n$ 为在位置 $n$ 取 $1$ 其他位置取 $0$ 的数列，则标准正交系 $\{e_1,e_2,\cdots,e_n,\cdots\}$ 是完全的，因此为 $l^2$ 的一组标准正交基。实际上，若 $x$ 垂直于这组标准正交系，则对任意正整数 $n$，有 $x_n=\langle x,e_n\rangle=0$，即 $x=0$。

**例 1.3.6 (三角函数标准正交基)** @25

$L^2[0,2\pi]$ 中 $\mathcal{E}=\{1,\cdots,\sqrt{2}\sin nx,\sqrt{2}\cos nx,\cdots\}$ 是一组标准正交基。从而，我们有$$\|f\|^2=\sum_{e\in\mathcal{E}}|\langle f,e\rangle|^2,\quad \forall f\in L^2[0,2\pi]$$成立，这就是数学分析中所陈述的 Parseval 等式。而右端和的通项收敛于 $0$，就是 Fourier 级数的 Riemann–Lebesgue 引理：$$\lim_{n\to\infty}\int_0^{2\pi}f(x)\sin nx\,\mathrm{d}x=0;\qquad \lim_{n\to\infty}\int_0^{2\pi}f(x)\cos nx\,\mathrm{d}x=0.\tag{1.17}$$

**注 (Luzin 猜想)** @26

根据定理 1.3.2，对任何 $f\in L^2[0,2\pi]$，有$$f=a_0+\sqrt{2}\sum_{n=1}^{\infty}(a_n\cos nt+b_n\sin nt).\tag{1.18}$$（1.18）式右边级数的部分和是按照 Hilbert 空间 $L^2[0,2\pi]$ 中的范数收敛于 $f$ 的，换言之，$f$ 的 Fourier 级数的部分和**平方平均收敛**于 $f$。按定义，这并不意味着下式成立：$$\lim_{n\to\infty}\left[a_0+\sqrt{2}\sum_{k=1}^{n}(a_k\cos kt+b_k\sin kt)\right]\stackrel{m}{=}f.\tag{1.19}$$1915 年，Luzin（卢津）猜测：对 $L^2(\mathbb{T})$ 中的函数 $f$，（1.19）式是成立的。Kolmogorov（科尔莫哥罗夫）首先于 1923 年构造性地给出了一个 $L^1(\mathbb{T})$ 的函数，它的部分和是几乎处处点发散的。1966 年，L. Carleson（卡勒松）证明了 Luzin 猜测是正确的。紧接着在 1967 年，R. A. Hunt（亨特）证明：对于 $L^p[0,2\pi]\ (p>1)$ 中的函数，它的 Fourier 级数也是几乎处处收敛的。

**例 1.3.7 (复指数标准正交基)** @26

由例 1.3.6 与 Euler（欧拉）公式，在复空间 $L^2[0,2\pi]$ 中，$\{\mathrm{e}^{\mathrm{i}nx}: n\in\mathbb{Z}\}$ 是一组标准正交基。这也就是说，$\{z^n=\mathrm{e}^{\mathrm{i}nx}: n\in\mathbb{Z}\}$ 也是 $L^2\left(\mathbb{T},\dfrac{\mathrm{d}x}{2\pi}\right)$ 的标准正交基。

对于 $f\in L^2[0,2\pi]$，若令$$\hat{f}(n)=\langle f,\mathrm{e}^{\mathrm{i}nx}\rangle=\int_0^{2\pi}f(x)\mathrm{e}^{-\mathrm{i}nx}\,\frac{\mathrm{d}x}{2\pi},$$则有 $\|f\|^2=\sum\limits_{n=-\infty}^{\infty}|\hat{f}(n)|^2$。这说明 $f\mapsto\{\hat{f}(n): n\in\mathbb{Z}\}$ 是 $L^2[0,2\pi]$ 到 $l^2(\mathbb{Z})$ 上的一个同构。

**例 1.3.8 (Legendre 多项式)** @26

在 $L^2[-1,1]$ 中，函数列 $g_k(x)=x^k\ (k=0,1,2,\cdots)$ 是线性无关的。因此可以用 Gram–Schmidt（格拉姆–施密特）方法将 $\{g_k\}$ 化成标准正交的：$$h_0=\frac{g_0}{\|g_0\|},\qquad h_1=\frac{g_1-\langle g_1,h_0\rangle h_0}{\|g_1-\langle g_1,h_0\rangle h_0\|},\cdots.$$显然 $h_k$ 依旧是 $k$ 次的多项式。

实际上，可以证明 **Legendre 多项式**$$P_0(x)=1,\quad P_n(x)=\frac{1}{2^nn!}\frac{\mathrm{d}^n}{\mathrm{d}x^n}(x^2-1)^n,\quad n=1,2,\cdots$$是 $L^2[-1,1]$ 中的正交多项式系。将 Legendre 多项式单位化得到$$h_0(x)=\frac{1}{\sqrt{2}},\qquad h_n(x)=\frac{1}{2^nn!}\sqrt{\frac{2n+1}{2}}\frac{\mathrm{d}^n}{\mathrm{d}x^n}(x^2-1)^n,\quad n=1,2,\cdots$$就是 $\{g_n\}$ 经过 Gram–Schmidt 过程得到的正交向量系。又由于多项式全体在 $L^2[-1,1]$ 中稠密，因此 $\{h_n: n=0,1,\cdots\}$ 构成了一组标准正交基。

**例 1.3.9 (Hermite 与 Laguerre 多项式)** @27

令 $H_n$ 为 Hermite 多项式 $(-1)^n\mathrm{e}^{t^2}\dfrac{\mathrm{d}^n}{\mathrm{d}t^n}\mathrm{e}^{-t^2}$，作$$\psi_n(t)=(2^nn!\sqrt{\pi})^{-\frac{1}{2}}\mathrm{e}^{-\frac{t^2}{2}}H_n(t),$$则 $\psi_n(t)\ (n=0,1,2,\cdots)$ 组成 $L^2(\mathbb{R},\mathrm{e}^{-x^2}\mathrm{d}m(x))$ 中的完备标准正交系。

令 $L_n(t)$ 为 Laguerre（拉盖尔）多项式 $\mathrm{e}^{t}\dfrac{\mathrm{d}^n}{\mathrm{d}t^n}(t^n\mathrm{e}^{-t})$，则$$\frac{1}{n!}\mathrm{e}^{-\frac{t}{2}}L_n(t)\quad(n=0,1,\cdots)$$组成 $L^2((0,\infty),\mathrm{e}^{-x}\mathrm{d}m(x))$ 中的完备标准正交系。

**定理 1.3.3 (正交系的扩张)** @27

设 $A$ 是 Hilbert 空间 $H$ 的标准正交系，则 $A$ 可扩张为 $H$ 的一组标准正交基。

一个 Hilbert 空间上可以有很多组不同的标准正交基，但是由集合论的知识可知，两组标准正交基的势总是一样的。而且，Hilbert 空间本质上由标准正交基的势唯一确定。具体来说，两个 Hilbert 空间 $H_1$ 与 $H_2$ 是（保持内积线性）空间同构的充要条件是它们的标准正交基的势是相同的。

#### 1.3.2 投影定理 @28

**定理 1.3.4 (投影定理)** @28

设 $M$ 是 Hilbert 空间 $H$ 的闭线性子空间，那么，对任何 $x\in H$，存在唯一 $x_0\in M$，$x_1\perp M$ 使 $x=x_0+x_1$。这种分解称为**正交分解**，$x_0$ 称为 $x$ 在 $M$ 上的**正交投影**。特别地，当 $x\in M$ 时，$x_0=x$。

由投影定理，我们可以得到：Hilbert 空间 $H$ 可以分解成正交和 $H=M\oplus M^{\perp}$。

$M$ 在 $H$ 中的正交补空间 $M^{\perp}$ 经常记为 $H\ominus M$。更一般地，如果 $M,N$ 为 $H$ 的两个闭线性子空间，$M\subset N$，定义 $N\ominus M=N\cap M^{\perp}$，那么我们有 $N=M\oplus(N\ominus M)$。

**推论 1.3.2 (真子空间正交补非零)** @28

设 $M$ 是 Hilbert 空间 $H$ 中的闭线性子空间，而且 $M\neq H$，那么 $M^{\perp}$ 中有非零元素。

**推论 1.3.3 (正交补的闭包)** @28

设 $H$ 是 Hilbert 空间，$M$ 是 $H$ 的线性子空间，那么 $\overline{M}=(M^{\perp})^{\perp}$。特别地，$M^{\perp}=\{0\}$ 的充要条件是 $M$ 在 $H$ 中稠密。

**定义 1.3.4 (凸集)** @29

设 $A$ 是线性空间 $X$ 的一个子集，若对于任意的 $x,y\in A$ 以及 $0<t<1$，都有 $tx+(1-t)y\in A$，则称 $A$ 是一个**凸集**。

**定理 1.3.5 (闭凸集的最佳逼近)** @29

设 $M$ 是 Hilbert 空间 $H$ 的一个闭凸子集，则对任意 $x\in H$，存在唯一的 $x_0\in M$，使得$$\|x-x_0\|=\inf_{y\in M}\|x-y\|.$$

**推论 1.3.4 (投影定理)** @29

设 $M$ 是 Hilbert 空间 $\mathcal{H}$ 的一个闭线性子空间，则对于任意的 $x\in\mathcal{H}$，存在唯一的 $x_0\in M$，使得 $\|x-x_0\|=d(x,M)$，并且 $x_0\perp x-x_0$。

推论 1.3.4 说明用 $M$ 中的元 $y$ 来逼近 $x$ 时，当且仅当 $y$ 等于 $x$ 在 $M$ 上的投影 $x_0$ 时，逼近的程度最好。投影的这个性质常常被用来研究最佳逼近问题，也是凸分析理论的基础之一。

#### 习题（p30–31）

**习题 1** @30

设 $\mathfrak{F}=\{e_{\lambda}:\lambda\in\Lambda\}$ 是 Hilbert 空间 $H$ 的标准正交基。证明：对任何 $x,y\in H$，

$$\langle x,y\rangle=\sum_{\lambda\in\Lambda}\langle x,e_{\lambda}\rangle\overline{\langle y,e_{\lambda}\rangle}.$$

**习题 2** @30

设 $\{e_{\lambda}:\lambda\in\Lambda\}$ 是 Hilbert 空间 $H$ 上的标准正交基。定义线性空间

$$\widetilde{H}=\left\{f\text{ 是 }\Lambda\text{ 上函数}:\sum_{\lambda\in\Lambda}|f(\lambda)|^2<\infty\right\},$$

并规定 $\widetilde{H}$ 上内积为

$$\langle f,g\rangle=\sum_{\lambda\in\Lambda}f(\lambda)\overline{g(\lambda)},\qquad\forall f,g\in\widetilde{H}.$$

证明 $\widetilde{H}$ 按 $\langle\cdot,\cdot\rangle$ 成为 Hilbert 空间，并且和 $H$ 是（保持内积线性）同构的。从而说明，两个 Hilbert 空间 $H_1$ 与 $H_2$ 是（保持内积线性）空间同构的充要条件是它们的标准正交基的势相同。

**习题 3** @30

令 $L^2([0,2\pi]\times[0,2\pi])$ 上的内积为

$$\langle f,g\rangle=\iint_{[0,2\pi]\times[0,2\pi]}f(x,y)\overline{g(x,y)}\frac{\mathrm{d}x\mathrm{d}y}{4\pi^2}.$$

证明：$\{e^{imx}e^{iny}:m,n\in\mathbb{Z}\}$ 构成 $L^2([0,2\pi]\times[0,2\pi])$ 的一组标准正交基。

**习题 4** @30

设 $X$ 是一个线性空间，证明：$X$ 中存在一组 Hamel 基。

**习题 5** @30

基本假设如例 1.3.8，证明：

(i) $\{h_n:n=0,1,\cdots,n\}$ 是一组标准正交系；

(ii) $\{h_n:n=0,1,\cdots,n\}$ 是一组标准正交基。

**习题 6** @30

设 $\mathbb{D}=\{z:z\in\mathbb{C},|z|<1\}$ 是复平面中的单位圆盘。令

$$L_a^2(\mathbb{D})=\left\{f:f\text{ 在 }\mathbb{D}\text{ 中解析，并且 }\frac1\pi\int_{\mathbb{D}}|f(z)|^2\,\mathrm{d}A(z)<+\infty\right\}.$$

在 $L_a^2(\mathbb{D})$ 中定义内积：

$$\langle f,g\rangle=\frac1\pi\int_{\mathbb{D}}f(z)\overline{g(z)}\,\mathrm{d}A(z).$$

证明 $L_a^2(\mathbb{D})$ 是 Hilbert 空间（称为 Bergman（伯格曼）空间），并且有标准正交基：

$$e_n(z)=\sqrt{n+1}\,z^n,\qquad n=0,1,2,\cdots.$$

**习题 7** @30

设 $\omega(t)$ 是 $\mathbb{R}$ 上 Lebesgue 可积的非负函数。令

$$H=\left\{f\text{ 是 }\mathbb{R}\text{ 上 Lebesgue 可测函数}:\int_{\mathbb{R}}|f(t)|^2\omega(t)\,\mathrm{d}t<\infty\right\}.$$

证明：$H$ 按通常函数的线性运算以及内积

$$\langle f,g\rangle=\int_{\mathbb{R}}f(t)\overline{g(t)}\omega(t)\,\mathrm{d}t,\qquad\forall f,g\in H$$

成为 Hilbert 空间。

**习题 8** @31

设 $\mathcal{F}=\{e_1,e_2,\cdots,e_n,\cdots\}$ 是 Hilbert 空间 $(H,\langle\cdot,\cdot\rangle)$ 的一组标准正交系。将 $\mathcal{F}$ 重排成另一个序列 $\{e'_1,e'_2,\cdots,e'_n,\cdots\}$。证明：对于 $x\in H$，

$$\lim_{n\to\infty}\sum_{k=1}^n\langle x,e_k\rangle e_k=\lim_{n\to\infty}\sum_{k=1}^n\langle x,e'_k\rangle e'_k.$$

**习题 9** @31

设 $H$ 是 Hilbert 空间，$L$ 是一个可数维的（即 Hamel 基的势是可数的）线性子空间，若 $\overline{L}=H$，则 $H$ 存在由 $L$ 中的向量组成的标准正交基。

**习题 10** @31

令 $f_0=1+\sum_{n=1}^{\infty}\frac1n(\cos nx+\sin nx)$。设 $H$ 是 $L^2[0,2\pi]$ 中由

$$\{f_0,\cos x,\sin x,\cdots,\cos nx,\sin nx,\cdots\}$$

张成的线性子空间。给出 $H$ 中的一组完全标准正交系，但不是完备的。

**习题 11** @31

设 $(\mathcal{H},\langle\cdot,\cdot\rangle)$ 是内积空间，$\{e_{\lambda}\}_{\lambda\in\Lambda}$ 是内积空间中的一组标准正交系，则下列条件等价：

(i) $\overline{\operatorname{span}\{e_{\lambda}\}_{\lambda\in\Lambda}}=\mathcal{H}$；

(ii) 对任意 $x\in H$，$\sum_{\lambda\in\Lambda}|\langle x,e_{\lambda}\rangle|^2$ 存在且等于 $\|x\|^2$；

(iii) 对任意 $x\in H$，$\sum_{\lambda\in\Lambda}\langle x,e_{\lambda}\rangle e_{\lambda}$ 存在且等于 $x$。

**习题 12** @31

设 $\{x_0^i,x_1^i,\cdots,x_n^i\}$（$i=1,2,\cdots,m$）是已知的实数组。利用投影定理求实数 $\alpha_1,\alpha_2,\cdots,\alpha_n$ 使得

$$\sum_{i=1}^m\left(x_0^i-\sum_{j=1}^n x_j^i\alpha_j\right)^2$$

达到极小。

**习题 13** @31

举例说明投影定理 1.3.4 对于一般的内积空间不成立。

### 1.4 度量空间中的点集（p31–44）

**定义 1.4.1 (内点、内部与开集)** @31

设 $A$ 是度量空间 $(X,d)$ 中的点集，$x_0\in A$。

（i）如果存在 $r>0$ 使得 $\{x\in X: d(x,x_0)<r\}\subseteq A$，则称 $x_0$ 是 $A$ 的**内点**。

（ii）$A$ 的内点全体构成的点集称为 $A$ 的（拓扑）**内部**，记作 $A^\circ$。

（iii）如果 $A$ 中每一点都是 $A$ 的内点，就称 $A$ 是**开集**。

（iv）规定空集也是开集。

**例 1.4.1 (开球)** @32

在度量空间 $(X,d)$ 中，对于 $x_0\in X$，$r>0$，集 $O(x_0,r)=\{x\in X: d(x,x_0)<r\}$ 称为**开球**，也叫做 $x_0$ 的 $r$-邻域。容易看出，开球 $O(x_0,r)$ 是开集。

**定义 1.4.2 (邻域)** @32

设 $(X,d)$ 是度量空间，$x_0\in X$。$X$ 中包含 $x_0$ 的任何开集 $G$ 都称为 $x_0$ 的**邻域**。

用邻域的概念，我们可把收敛点列的概念改述如下：点列 $\{x_n\}_{n=1}^{\infty}$ 收敛于点 $x_0$ 等价于对于 $x_0$ 的任何 $\varepsilon$-邻域 $O(x_0,\varepsilon)$，存在自然数 $N$，使得当 $n\geqslant N$ 时，$x_n\in O(x_0,\varepsilon)$。

**注 (可数邻域基)** @32

对度量空间 $(X,d)$ 中点 $x_0$，容易看出 $\left\{O\left(x_0,\dfrac{1}{n}\right): n=1,2,\cdots\right\}$ 是 $x_0$ 的一组**邻域基**，即任何含有点 $x_0$ 的开集都包含了一个半径足够小的开球 $O\left(x_0,\dfrac{1}{n}\right)$。特别地，度量空间的任意一点均存在一个可数的邻域基，这是度量空间区别于一般拓扑空间的主要特性。例如，$C[a,b]$ 按点态收敛诱导的拓扑就不存在可数邻域基，因此这个拓扑是不可度量化的。

**定义 1.4.3 (极限点、导集、闭包与闭集)** @32

设 $X$ 是度量空间，$A$ 是 $X$ 的子集。

（i）设 $x_0\in X$，如果存在一点列 $\{x_n\}_{n=1}^{\infty}$ 使得 $x_n\neq x_0$ 且 $x_n\to x_0$，那么称 $x_0$ 是点集 $A$ 的**极限点**。

（ii）$A$ 的极限点全体构成的集称为 $A$ 的**导集**，记作 $A'$。称 $\overline{A}=A\cup A'$ 是 $A$ 的**闭包**。

（iii）如果集合 $A$ 的极限点全体 $A'$ 都包含在 $A$ 中，就称 $A$ 为**闭集**。

**例 1.4.2 (闭球)** @32

在度量空间 $(X,d)$ 中，对于 $x_0\in X$，$r>0$，集 $B(x_0,r)=\{x\in X: d(x,x_0)\leqslant r\}$ 称为**闭球**。显然闭球 $B(x_0,r)$ 是闭集。

**定义 1.4.4 (连续映射)** @32

设 $X$ 和 $Y$ 是度量空间，$f$ 是 $X$ 到 $Y$ 中的映射。

（i）对于 $X$ 中任意收敛于 $x_0$ 的点列 $\{x_n\}_{n=1}^{\infty}$，成立$$\lim_{n\to\infty}f(x_n)=f(x_0),$$则称映射 $f$ 在点 $x_0$ 是**连续的**。

（ii）假如映射 $f$ 在 $X$ 的每一点都连续，就称 $f$ 是 $X$ 上的**连续映射**。

特别地，当空间 $Y$ 是实数域 $\mathbb{R}$（或复数域 $\mathbb{C}$）时，称 $f$ 为连续实（复）函数。

**例 1.4.3 (距离函数)** @32

设 $F$ 是度量空间 $(X,d)$ 的非空子集，定义**距离函数**$$d(x,F)=\inf_{z\in F}d(x,z).$$由度量的三角不等式可得$$|d(x_1,F)-d(x_2,F)|\leqslant d(x_1,x_2),$$故 $x\mapsto d(x,F)$ 是 $X$ 上的连续函数。显然它还是一致连续的，即对于任意 $\varepsilon>0$，存在一致的 $\delta>0$（此处取 $\delta=\varepsilon$ 即可），使得当 $d(x_1,x_2)<\delta$ 时，$|d(x_1,F)-d(x_2,F)|<\varepsilon$。

**定理 1.4.1 (连续映射的等价刻画)** @33

设 $f$ 是度量空间 $X$ 到度量空间 $Y$ 中的映射，那么下面条件等价：

（i）映射 $f$ 是连续的。

（ii）对于任意 $x_0\in X$，$\varepsilon>0$，存在 $\delta>0$，使得对 $x_0$ 在 $X$ 中的邻域 $O(x_0,\delta)$，有$$f(O(x_0,\delta))\subset O(f(x_0),\varepsilon).$$

（iii）空间 $Y$ 中的任一开集 $O$ 的原像 $f^{-1}(O)$ 是 $X$ 中的开集。

（iv）空间 $Y$ 中的任一闭集 $F$ 的原像 $f^{-1}(F)$ 是 $X$ 中的闭集。

#### 1.4.1 稠密性和可分性 @33

**定义 1.4.5 (稠密)** @33

在度量空间 $(X,d)$ 中，对于 $B$ 中一个子集 $A$，我们称 $A$ 在 $B$ 中**稠密**是指 $B\subseteq\overline{A}$。

**例 1.4.4 (有理数稠密)** @33

$\mathbb{Q}$ 是 $\mathbb{R}$ 中的稠密子集。

**例 1.4.5 (Weierstrass 第一逼近定理)** @33

对直线上的有界闭区间 $[a,b]$，由数学分析中的 Weierstrass（魏尔斯特拉斯）第一逼近定理，多项式全体 $P$ 在 $C[a,b]$ 中是稠密的。

**例 1.4.6 (可积函数空间稠密子集)** @33

对直线上有界闭区间 $[a,b]$ 及 $1\leqslant p<\infty$，$L^p[a,b]$ 中的简单函数全体、阶梯函数全体、$C_c^{\infty}(a,b)$、$C[a,b]$ 以及多项式全体 $P$ 均是 $L^p[a,b]$ 的稠密子集。

**注 1.4.1 (有界函数空间稠密性)** @34

（i）类似地，可得 $L^p(\mathbb{R})\ (1\leqslant p<\infty)$ 中的简单函数全体、阶梯函数全体以及 $C_c^{\infty}(\mathbb{R})$ 均是稠密子集。

（ii）然而，在 $L^{\infty}[a,b]$ 中，只有简单函数全体是稠密子集。

**定义 1.4.6 (可分空间)** @34

设 $X$ 是度量空间。如果存在某个可数子集在 $X$ 中稠密，就称 $X$ 是**可分空间**。

**例 1.4.7 (欧几里得空间可分)** @34

$n$ 维 Euclid 空间 $\mathbb{R}^n$ 按通常度量是可分空间。这是因为坐标为有理数的点的全体是可列集，并且在 $\mathbb{R}^n$ 中稠密。

**例 1.4.8 (序列空间可分)** @34

空间 $l^p\ (1\leqslant p<\infty)$ 是可分的。因为集合$$A=\{(x_1,x_2,\cdots,x_n,0,0,\cdots): x_i\in\mathbb{Q},\ i=1,2,\cdots,n\}$$是可列集，它在 $l^p$ 中稠密。

**例 1.4.9 (连续函数空间可分)** @35

$C[a,b]$ 和 $L^p[a,b]\ (1\leqslant p<\infty)$ 是可分空间。这是因为多项式全体在 $C[a,b]$ 和 $L^p[a,b]$ 中稠密，而对任意的多项式 $P(x)$，存在以有理数为系数的多项式 $p(x)$ 满足 $\|P-p\|_{\infty}<\varepsilon$ 或者 $\|P-p\|_p<\varepsilon$。

**命题 1.4.1 (可分空间的子空间可分)** @35

设度量空间 $(X,d)$ 是可分的，$A$ 为 $X$ 的子集，则度量空间 $(A,d)$ 也是可分的。

**例 1.4.10 (有界数列空间不可分)** @35

有界数列全体组成的空间 $l^{\infty}$ 是不可分的。

**例 1.4.11 (有界函数空间不可分)** @35

空间 $L^{\infty}[a,b]$ 是不可分的。

#### 1.4.2 完备性 @35

**定义 1.4.7 (完备性)** @35

设 $(X,d)$ 是度量空间。

（i）设 $\{x_n\}_{n=1}^{\infty}$ 是 $X$ 中的点列。如果对于任一正数 $\varepsilon$，存在正整数 $N$，使得当 $n,m\geqslant N$ 时，$$d(x_n,x_m)<\varepsilon,$$就称 $\{x_n\}_{n=1}^{\infty}$ 是 $X$ 中的**基本点列**，或者称为 **Cauchy 点列**。

（ii）若度量空间 $X$ 中每个基本点列都收敛，则称 $X$ 是**完备度量空间**。

（iii）完备的赋范线性空间称为 **Banach 空间**。

（iv）完备的内积空间称为 **Hilbert 空间**。

（v）设 $A$ 是 $X$ 的子空间，如果 $A$ 作为度量空间是完备的，那么称 $A$ 是 $X$ 的**完备子空间**。

**例 1.4.12 (子空间完备性例子)** @36

（i）有理数集作为直线的子空间不是完备的。例如 $\left\{\left(1+\dfrac{1}{n}\right)^n\right\}$ 是基本列，但是在有理数空间中它不收敛。

（ii）作为直线的子空间，集合 $\left\{\dfrac{1}{n}: n=1,2,\cdots\right\}$ 不是完备的度量空间。而集合 $\left\{\dfrac{1}{n}: n=1,2,\cdots\right\}\cup\{0\}$ 是完备的度量空间。

（iii）作为直线 $(\mathbb{R},d_1)$ 的子空间，正整数集 $\mathbb{N}_+$ 是完备的度量空间。然而，若在 $\mathbb{N}_+$ 上定义新度量 $d(n,m)=\left|\dfrac{1}{n}-\dfrac{1}{m}\right|$，容易看出在 $(\mathbb{N}_+,d_1)$ 和 $(\mathbb{N}_+,d)$ 中收敛性是一致的，但 $(\mathbb{N}_+,d)$ 不是完备的。

**引理 1.4.1 (基本列与完备性)** @36

（i）度量空间 $X$ 中收敛点列是基本点列。

（ii）设 $\{x_n\}_{n=1}^{\infty}$ 是度量空间 $X$ 中基本点列，如果 $\{x_n\}_{n=1}^{\infty}$ 有子列 $\{x_{n_k}\}_{k=1}^{\infty}$ 收敛于 $X$ 中的点 $x$，那么 $\{x_n\}_{n=1}^{\infty}$ 也收敛于 $x$。

（iii）完备度量空间的闭子集是完备子空间。

（iv）任何度量空间的完备子空间是闭子集。

**注 1.4.2 (不完备空间的完备子空间)** @36

一个不完备的度量空间可以有完备的子空间。例如，有理数组成的度量空间 $\mathbb{Q}$ 不是完备的，但是其中的子空间 $\mathbb{Z}$ 是完备的。再如，区间 $[0,1]$ 上的多项式全体 $P$，以最大模为范数，是一个不完备的赋范线性空间，但是由 $n$ 个向量 $1,x,x^2,\cdots,x^{n-1}$ 生成的 $n$ 维子空间是完备的。

**例 1.4.13 (可积函数空间完备)** @36

设 $E$ 是 $\mathbb{R}^n$ 的一个 Lebesgue 可测集，则空间 $L^p(E)\ (1\leqslant p<\infty)$ 是 Banach 空间。特别地，$L^2(E)$ 是 Hilbert 空间。

**例 1.4.14 (商空间)** @37

设 $X$ 是线性空间，$M$ 是 $X$ 的一个线性子空间。对 $x\in X$，我们考虑 $X$ 的子集 $\{x+y: y\in M\}$，这个子集随着 $x$ 变化而变化。记 $X$ 中这种子集的全体构成的集合为 $X/M$。将子集 $\{x+y: y\in M\}$ 记为 $[x]$，称 $x$ 为子集 $[x]$ 的代表元。那么，$[x]=[x']$ 的充要条件是 $x-x'\in M$。

在 $X/M$ 中可自然地规定线性运算如下：$$[x]+[y]=[x+y],\quad \forall x,y\in X,$$$$\alpha[x]=[\alpha x],\quad \forall \alpha \text{ 是数}.$$容易验证，这样定义的线性运算是有确定的意义的，$X/M$ 按这样规定的线性运算成为线性空间，称 $X/M$ 为 $X$ 关于 $M$ 的**商空间**。如果定义从 $X$ 到 $X/M$ 的映射 $\pi: x\mapsto[x]$，容易验证 $\pi$ 是线性空间 $X$ 到商空间 $X/M$ 的线性映射，这个映射称为**商映射**。

设 $M$ 是赋范线性空间 $X$ 的闭的线性子空间。在商空间 $X/M$ 上定义范数为：对 $X/M$ 中的元素 $[x]$，任取代表元 $x\in[x]$，定义$$\|[x]\|=d(x,M)=\inf_{y\in M}\|x+y\|,$$显然这一定义与 $x$ 的选取无关，是良定义的。容易验证 $\|\cdot\|$ 满足范数的条件，从而 $(X/M,\|\cdot\|)$ 构成了一个赋范线性空间。特别地，当 $X$ 是 Banach 空间时，商空间 $(X/M,\|\cdot\|)$ 也是一个 Banach 空间。而且，容易验证商映射 $\pi(x)=[x]: X\to X/M$ 将 $X$ 的开单位球映为商空间 $X/M$ 的开单位球，从而将 $X$ 中的开集映为开集，故它是一个开映射。

**定理 1.4.2 (有限维赋范空间完备)** @38

有限维的赋范线性空间是完备的。

设 $X$ 是 $n$ 维的赋范线性空间，取其一组线性无关基 $e_1,e_2,\cdots,e_n$，则存在正实数 $c_1,c_2$，使得对于 $X$ 中的每个 $x=\sum\limits_{i=1}^{n}x_ie_i$，成立$$c_1\sqrt{\sum_{i=1}^{n}|x_i|^2}\leqslant\|x\|\leqslant c_2\sqrt{\sum_{i=1}^{n}|x_i|^2}.\tag{1.21}$$

**推论 1.4.1 (有限维子空间闭)** @38

赋范线性空间 $X$ 的有限维线性子空间在 $X$ 中是闭的。

**例 1.4.15 (连续函数空间不完备)** @38

如果在连续函数空间 $C[0,1]$ 上定义范数$$\|f\|_1=\int_0^1|f(x)|\,\mathrm{d}x,$$就是把 $C[a,b]$ 看成 $L^1[a,b]$ 的子空间，那么 $(C[a,b],\|\cdot\|_1)$ 不是完备的空间。

**定义 1.4.8 (完备化空间)** @39

设 $(X,d)$ 是度量空间，称 $(Y,\tilde{d})$ 是 $X$ 的一个**完备化空间**，是指：$Y$ 是完备度量空间，且存在一个嵌入单射 $j: X\hookrightarrow Y$，满足下列条件：

（i）嵌入 $j$ 是等距：对于任意 $x_1,x_2\in X$，$\tilde{d}(j(x_1),j(x_2))=d(x_1,x_2)$；

（ii）$j(X)$ 在 $Y$ 中稠密。

**定理 1.4.3 (度量空间的完备化定理)** @39

任意的度量空间 $(X,d)$ 都有唯一（在等距同构意义下）的完备化度量空间。

**例 1.4.16 (连续函数空间完备化)** @40

由例 1.4.15 知，$C[a,b]$ 按 $\|\cdot\|_1$ 不是完备的。此时，将 $C[a,b]$ 自然嵌入到 $L^1[a,b]$，那么这个嵌入是一个等距映射，而且像集在 $L^1[a,b]$ 中稠密。因此 $(C[a,b],\|\cdot\|_1)$ 的完备化空间就是 $L^1[a,b]$。

#### 1.4.3 闭球套定理 @41

**定理 1.4.4 (闭球套定理)** @41

设 $X$ 是完备的度量空间，$B_n=\{x\in X: d(x,x_n)\leqslant\varepsilon_n\}$ 是 $X$ 中的一列单调下降的闭球：$$B_1\supset B_2\supset\cdots\supset B_n\supset\cdots.$$如果球的半径 $\varepsilon_n\to 0$，则有唯一的点 $x\in\bigcap\limits_{n=1}^{\infty}B_n$。

**例 1.4.17 (闭球套半径条件)** @41

条件中 $\varepsilon_n\to 0$ 是必须的。考虑 $l^2$ 的子空间$$X=\left\{x_n=\left(0,0,\cdots,0,\frac{n+1}{n},0,\cdots\right): n=1,2,\cdots\right\}.$$于是当 $n\neq m$ 时，$$d(x_n,x_m)=\sqrt{\left(\frac{n+1}{n}\right)^2+\left(\frac{m+1}{m}\right)^2}\geqslant\sqrt{2}.$$因此 $X$ 中没有非平凡的基本点列，当然 $X$ 就成为完备的度量空间。取 $\varepsilon_n=\sqrt{2}\,\dfrac{n+1}{n}$，在 $X$ 中作闭球$$B_n=\{x\in X: d(x_n,x)\leqslant\varepsilon_n\},\quad n=1,2,\cdots,$$那么 $B_n=\{x_n,x_{n+1},\cdots\}$，所以 $B_1\supset B_2\supset\cdots$，但是，交集 $\bigcap\limits_{n=1}^{\infty}B_n$ 是空集。

**定理 1.4.5 (闭球套定理与完备性)** @42

设 $X$ 是度量空间。如果在 $X$ 上闭球套定理成立，那么 $X$ 是完备的。

其实，闭球套定理是与度量空间的完备性等价的，定理 1.4.4 与定理 1.4.5 合起来给出了这一等价性。

#### 习题（p42–45）

**习题 1** @42

举例说明，存在度量空间 $X$ 及点 $x_1,x_2\in X$，使得 $B(x_1,3)\subsetneq O(x_2,2)$。

**习题 2** @42

设 $B$ 是度量空间中的闭集，证明存在一个递减开集列 $\{O_1,O_2,\cdots,O_n,\cdots\}$，使得每个 $O_n$ 包含 $B$ 且 $\bigcap_{n=1}^{\infty}O_n=B$。

**习题 3** @42

设 $B\subset[0,1]$，$a>0$，证明度量空间 $C[0,1]$ 中的子集

$$\{x:|x(t)|<a,\ \forall t\in B\}$$

为开集的充要条件是：$B$ 为闭集。

**习题 4** @42

设 $E,F$ 是度量空间 $X$ 中的两个子集并且

$$d(E,F)\stackrel{\mathrm{def}}{=}\inf_{x\in E,y\in F}d(x,y)>0.$$

证明：存在两个互不相交的开集 $O,G$ 分别包含 $E$ 和 $F$。

**习题 5** @42

设 $f(x)$ 是度量空间 $X$ 上的实函数。如果对于任意点 $x_0\in X$，有

$$\lim_{r\to0}\sup_{x\in O(x_0,r)}f(x)\leqslant f(x_0),$$

就称 $f(x)$ 在 $X$ 上是上半连续的。证明：当 $f(x)$ 是 $X$ 上的上半连续函数时，对任何常数 $a$，集合

$$X(f\geqslant a)\stackrel{\mathrm{def}}{=}\{x:f(x)\geqslant a\}$$

是闭集。反之也真。

**习题 6** @42

设 $S_1,S_2$ 是度量空间 $(X,d)$ 中两个子集，并且

$$d(S_1,S_2)\stackrel{\mathrm{def}}{=}\inf_{x\in S_1,y\in S_2}d(x,y)>0.$$

构造 $X$ 上一个具体的连续函数 $f$，使得 $0\leqslant f\leqslant1$，且满足

$$f(x)=\begin{cases}0,&x\in S_1,\\1,&x\in S_2.\end{cases}$$

**习题 7** @43

设 $X$ 是可分的度量空间，$A\subset X$，$\{O_{\lambda}:\lambda\in\Lambda\}$ 是 $A$ 的开覆盖。证明：可从 $\{O_{\lambda}:\lambda\in\Lambda\}$ 中选出至多可列个开集 $\{O_{\lambda_n}\}$，使得 $\bigcup_n O_{\lambda_n}\supset A$。

**习题 8** @43

在直线 $\mathbb{R}$ 上，证明：

(i) $C_c^{\infty}(\mathbb{R})$ 在 $L^p(\mathbb{R})$（$1\leqslant p<\infty$）中稠密。

(ii) $C_c^{\infty}(\mathbb{R})$ 不在 $L^{\infty}(\mathbb{R})$ 中稠密。

(iii) 多项式全体不在 $L^p(\mathbb{R})$（$1\leqslant p<\infty$）中稠密。

**习题 9** @43

对 $1\leqslant p<\infty$，定义 Banach 空间

$$L^p(\mathbb{R},e^{-t^2}\mathrm{d}t)=\left\{f\text{ 在 }\mathbb{R}\text{ 上 Lebesgue 可测}:\|f\|_p=\left(\int_{\mathbb{R}}|f(t)|^pe^{-t^2}\,\mathrm{d}t\right)^{1/p}<\infty\right\}.$$

证明：$C_c^{\infty}(\mathbb{R})$ 在 $L^p(\mathbb{R},e^{-t^2}\mathrm{d}t)$ 中稠密。判断多项式全体是否为稠密集（无须证明）。

**习题 10** @43

设 $C_{2\pi}=\{f\in C[0,2\pi]:f(0)=f(2\pi)\}$，并按范数 $\|f\|=\max_{0\leqslant t\leqslant2\pi}|f(t)|$ 成一赋范空间。证明：

(i) 令 $\mathcal{P}=\{f\in C_{2\pi}:\text{存在多项式 }P\text{ 使得 }f(t)=P(t),\ \forall0\leqslant t\leqslant2\pi\}$，则 $\mathcal{P}$ 在 $C_{2\pi}$ 中稠密。

(ii) $C_{2\pi}$ 在 $L^p[0,2\pi]$（$1\leqslant p<\infty$）中稠密，但不在 $L^{\infty}[0,2\pi]$ 中稠密。

(iii) 将 $C_{2\pi}$ 中函数零延拓为 $[0,4\pi]$ 上的函数，则 $C_{2\pi}$ 在 $L^p[0,4\pi]$（$1\leqslant p<\infty$）中不稠密。

**习题 11** @43

证明：$L^p(\mathbb{R})$（$1\leqslant p<\infty$）是可分空间。

**习题 12** @43

令 $C_b(\mathbb{R})$ 为 $\mathbb{R}$ 上有界的连续函数全体构成的 Banach 空间，它的范数 $\|x\|=\sup_{t\in\mathbb{R}}|x(t)|$。令

$$C_0(\mathbb{R})=\{f\in C_b(\mathbb{R}):\lim_{t\to\pm\infty}x(t)=0\}$$

为 $C_b(\mathbb{R})$ 的线性子空间。证明：

(i) $C_0(\mathbb{R})$ 是可分的。

(ii) $C_b(\mathbb{R})$ 不是可分的。

**习题 13** @43

设 $H$ 是 Hilbert 空间，证明 $H$ 可分等价于 $H$ 存在一组可数的正交基。

**习题 14 (Fourier变换的Riemann-Lebesgue引理)** @43

对 $f\in L^1(\mathbb{R})$，证明：

$$\lim_{|t|\to\infty}\int_{\mathbb{R}}f(x)e^{-i2\pi tx}\,\mathrm{d}x=0.$$

**习题 15 (平均连续性)** @43

对 $f\in L^p(\mathbb{R})$，$1\leqslant p<\infty$，证明：

$$\lim_{|h|\to0}\int_{\mathbb{R}}|f(x+h)-f(x)|^p\,\mathrm{d}x=0.$$

**习题 16** @43

对赋范线性空间 $X$，证明：$X$ 是完备的当且仅当对任意 $X$ 中点列 $\{x_n\}$，当 $\sum_{n=1}^{\infty}\|x_n\|<\infty$ 时，$\sum_{n=1}^{\infty}x_n$ 在 $X$ 中收敛。

**习题 17** @44

证明：$V[a,b],V_0[a,b]$ 是 Banach 空间（见例 1.2.10）。

**习题 18** @44

设 $H$ 是直线上 Lebesgue 平方可积，且导函数也平方可积的绝对连续函数全体，按通常的线性运算及范数

$$\|f\|=\sqrt{\int_{\mathbb{R}}|f(t)|^2\,\mathrm{d}t+\int_{\mathbb{R}}|f'(t)|^2\,\mathrm{d}t},$$

$H$ 成为赋范线性空间。证明：$H$ 是 Hilbert 空间。

**习题 19** @44

如果 $X$ 是赋范线性空间，$M$ 是 $X$ 的闭线性子空间。在商空间 $X/M$ 上定义

$$\vert\!\vert\!\vert x\vert\!\vert\!\vert=\inf\{\|x+y\|:y\in M\}.$$

证明：

(i) $\vert\!\vert\!\vert x\vert\!\vert\!\vert$ 是线性空间 $X/M$ 上的范数。举例说明，若 $M$ 不是闭的线性子空间，则这个结论不正确。

(ii) 若 $X$ 是内积空间，则 $X/M$ 也是内积空间，并且与 $M^{\perp}$ 是内积空间同构。

(iii) 若 $X$ 是 Banach 空间，则 $X/M$ 也是 Banach 空间。

**习题 20** @44

定义（开映射）：设 $X,Y$ 是度量空间，如果映射 $g:X\to Y$ 把定义域 $X$ 中的每个开集映射成值域 $Y$ 中的开集，那么就称 $g$ 是开映射。

如果 $E$ 是赋范线性空间，$M$ 是 $E$ 的线性子空间。证明商映射 $\pi:E\to E/M$ 是开映射。

**习题 21** @44

设 $\langle\cdot,\cdot\rangle_0$ 是线性空间 $H$ 上的二元函数，满足内积条件中的 (i)、(ii) 以及 (iii) 中 $\langle x,x\rangle_0\geqslant0$（$\forall x\in H$）。如记 $p(x)=\langle x,x\rangle_0^{1/2}$，证明：

(i) $p(x)$ 是 $H$ 中的半范数。

(ii) $\ker p=\{x:p(x)=0\}$ 是线性空间。

(iii) 在商空间 $L=H/\ker p$ 上规定

$$\langle\widetilde{x},\widetilde{y}\rangle=\langle x,y\rangle_0,\qquad\forall\widetilde{x}\in L,\ \widetilde{y}\in L,\ x\in\widetilde{x},\ y\in\widetilde{y}.$$

证明 $\langle\cdot,\cdot\rangle$ 是 $L$ 上的内积。

**习题 22** @44

令 $P$ 是多项式全体，定义范数

$$\left\|\sum_{i=0}^n a_i x^i\right\|=\sum_{i=0}^n|a_i|.$$

证明：$(P,\|\cdot\|)$ 不是完备的度量空间。并求它的完备化空间。

**习题 23** @44

证明：任何赋范线性空间都可以完备化成 Banach 空间，内积空间都可以完备化成 Hilbert 空间。

**习题 24 (再生核Hilbert空间)** @44

设集合 $X$ 上一族复值函数族 $\{K_x(\cdot):x\in X\}$ 满足：

$$\sum_{i,j=1}^n c_i\overline{c_j}K_{x_i}(x_j)>0,\qquad\forall n\in\mathbb{N}_+,\ c_i\in\mathbb{C},\ c_i\text{ 不全为零},\ x_i\neq x_j\text{ 若 }i\neq j.$$

证明：存在 Hilbert 空间 $(H,\langle\cdot,\cdot\rangle)$，使得

(i) $H$ 由 $X$ 上的一些函数组成；

(ii) 对任意 $f\in H$，$x\in X$，有 $f(x)=\langle f,K_x\rangle$。

(iii) 线性空间 $\operatorname{span}\{K_x(\cdot):x\in X\}$ 在 $H$ 中稠密。

**习题 25** @45

设 $\{F_n\}$（$n=1,2,\cdots$）是完备度量空间 $X$ 中一列单调下降的非空闭集，且 $F_n$ 的直径 $d_n=\sup_{x,y\in F_n}d(x,y)\to0$，则 $\bigcap_{n=1}^{\infty}F_n$ 非空。

**习题 26** @45

对于 Banach 空间 $X$，若 $\{B(x_n,r_n)\}$ 是一列单调下降的闭球，证明：$\bigcap_{n=1}^{\infty}B(x_n,r_n)\neq\varnothing$。

**习题 27** @45

定义：设 $X$ 是赋范线性空间，映射 $f:[a,b]\to X$ 有界。若存在 $A\in X$，使得对任意 $\varepsilon>0$，存在 $\delta>0$，使得对任意划分 $P:a=x_0<x_1<\cdots<x_n=b$ 及任取的 $\xi_i\in[x_i,x_{i+1}]$（$i=0,1,\cdots,n-1$），当 $\delta(P)=\max_{0\leqslant i\leqslant n-1}(x_{i+1}-x_i)<\delta$ 时，均有

$$\left\|A-\sum_{i=0}^{n-1}f(\xi_i)(x_{i+1}-x_i)\right\|<\varepsilon,$$

则称 $f$ 是（Riemann）可积的，记作 $A=\int_a^b f(x)\,\mathrm{d}x$。

设 $X$ 是 Banach 空间，映射 $f:[0,1]\to X$ 连续。证明：

(i) 映射 $f$ 是一致连续的。

(ii) 对正整数 $n$，将 $[0,1]$ 作 $\frac1{2^n}$ 等分，记 Riemann 和

$$a_n=\sum_{i=0}^{2^n-1}\frac1{2^n}f\left(\frac{i}{2^n}\right),$$

则 $\{a_n\}$ 在 $X$ 中收敛。记它的极限为 $A$。

(iii) $f$ 是可积的，且积分值为 $A$。

### 1.5 压缩映射原理（p45–53）

**定义 1.5.1 (不动点)** @45

设 $X$ 为一集合，$\phi$ 是 $X$ 到自身的映射。如果 $x^*\in X$，使得 $\phi(x^*)=x^*$，那么称 $x^*$ 为映射 $\phi$ 的一个**不动点**。

**定义 1.5.2 (压缩映射)** @45

设 $(X,d)$ 是度量空间，$\phi$ 是 $X$ 到它自身的一个映射。如果存在数 $\alpha$，$0\leqslant\alpha<1$，使得对一切 $x,y\in X$，成立$$d(\phi(x),\phi(y))\leqslant\alpha d(x,y),$$就称 $\phi$ 是 $X$ 上的**压缩映射**，对于线性空间 $X$ 上的情况往往称之为**压缩算子**。

经压缩映射后，集合中任意两点的距离被缩短了，至多等于原像距离的 $\alpha\ (\alpha<1)$ 倍。

**注 (压缩映射的连续性)** @46

压缩映射是连续的，即对任何收敛点列 $x_n\to x_0$，有 $\phi(x_n)\to\phi(x_0)$。事实上，由压缩映射定义有$$d(\phi(x_n),\phi(x_0))\leqslant\alpha d(x_n,x_0),$$当 $n\to\infty$ 时，由 $d(x_n,x_0)\to 0$ 就得到 $d(\phi(x_n),\phi(x_0))\to 0$。

对于 $X$ 上的映射 $\phi$，$\phi^2$ 表示 $x\mapsto\phi(\phi(x))$，由此可以逐次定义映射 $\phi^n$。

**定理 1.5.1 (Banach)** @46

完备度量空间 $X$ 到自身的压缩映射 $\phi$ 有唯一不动点。

**注 1.5.1 (迭代法与误差估计)** @47

不动点定理的证明不仅给出了压缩映射的不动点的存在性和唯一性，同时也提供了求不动点的一种方法——**迭代法**。就是说，在完备度量空间中，从任取的"初值" $x_0$ 出发，逐次作点列 $x_n=\phi^n(x_0),\ n=1,2,\cdots$，它收敛到方程 $\phi(x)=x$ 的解。这种方法也称为**逐次逼近法**。在迭代估计式中令 $p\to\infty$，得到$$d(x^*,x_n)\leqslant\frac{\alpha^n}{1-\alpha}d(x_1,x_0).\tag{1.25}$$

上式告诉我们"近似解" $x_n$ 与所求准确解 $x^*$ 的逼近程度，以及方程 $\phi(x)=x$ 的解可能坐落的范围。例如当 $n=0$ 时，由（1.25）式得到$$d(x^*,x_0)\leqslant\frac{1}{1-\alpha}d(x_1,x_0).$$

**注 1.5.2 (完备性条件不可去)** @47

应该注意，上述定理 1.5.1 中，空间 $X$ 的完备性条件不能除去。例如考察 $\mathbb{R}$ 的子空间 $(0,\infty)$ 到它自身的映射$$\phi(x)=\alpha x,$$其中 $\alpha$ 是小于 $1$ 的正数。$\phi$ 显然是压缩映射，但是它在 $(0,\infty)$ 中没有不动点。

**注 1.5.3 (压缩常数条件不可减)** @47

条件 $0\leqslant\alpha<1$ 不能减弱为 $\alpha=1$。例如在 $\mathbb{R}$ 的闭子空间 $[0,\infty)$ 中$$\phi(x)=x+\frac{1}{1+x},$$容易验证这个映射 $\phi$ 满足$$d(\phi(x),\phi(y))<d(x,y),\qquad\text{对于 } x\neq y.\tag{1.26}$$但 $\phi$ 在 $[0,\infty)$ 中没有不动点。

**定理 1.5.2 (迭代压缩映射不动点)** @47

设度量空间 $X$ 是完备的，$\phi$ 是 $X$ 到自身的映射。如果存在一个自然数 $n$ 使得 $\phi^n$ 是 $X$ 上的压缩映射，那么映射 $\phi$ 在 $X$ 中有唯一的不动点。

#### 应用 @47

**例 1.5.1 (隐函数存在定理)** @48

设函数 $f(x,y)$ 在条形闭区域$$\{(x,y): a\leqslant x\leqslant b,\ -\infty<y<\infty\}$$上处处连续，关于 $y$ 的偏导数 $f_y'(x,y)$ 有常数 $m<M$ 使得在上述条形区域中$$0<m\leqslant f_y'(x,y)\leqslant M.$$那么方程 $f(x,y)=0$ 在闭区间 $[a,b]$ 上有唯一的连续解 $y=\varphi(x)$。

**定理 1.5.3 (常微分方程初值问题)** @49

假设 $f(x,y)$ 是平面上某单连通区域 $\mathcal{D}$ 上的二元连续函数，我们考虑一阶常微分方程初值问题$$\begin{cases}\dfrac{\mathrm{d}y}{\mathrm{d}x}=f(x,y),\\[4pt] y|_{x=x_0}=y_0.\end{cases}\tag{1.28}$$

假设 $f(x,y)$ 在 $\mathcal{D}$ 的一个矩形子集 $D=\{(x,y): |x-x_0|\leqslant a,\ |y-y_0|\leqslant\lambda\}$ 上对 $y$ 满足 Lipschitz 条件，即存在常数 $L>0$，使得当 $(x,y_i)\in D\ (i=1,2)$ 时，$$|f(x,y_1)-f(x,y_2)|\leqslant L|y_1-y_2|.\tag{1.29}$$记 $M=\max\limits_{(x,y)\in D}|f(x,y)|$，则当 $h<\min\left\{a,\dfrac{\lambda}{M},\dfrac{1}{L}\right\}$ 时，初值问题（1.28）在区间 $[x_0-h,x_0+h]$ 上有唯一解。

**定理 1.5.4 (积分方程唯一解)** @50

设 $f(s)$ 为 $[a,b]$ 上的连续函数，$K(s,t)$ 为正方形 $[a,b]\times[a,b]$ 上的连续函数，令$$M=\sup_{a\leqslant s\leqslant b}\int_a^b|K(s,t)|\,\mathrm{d}t<\infty,$$则当 $|\lambda|<\dfrac{1}{M}$ 时，有唯一的 $\varphi\in C[a,b]$ 适合方程$$\varphi(s)=f(s)+\lambda\int_a^b K(s,t)\varphi(t)\,\mathrm{d}t.\tag{1.32}$$

**定理 1.5.5 (沃尔泰拉积分方程)** @50

设 $f(x)$ 是区间 $[a,b]$ 上的连续函数，$K(x,y)$ 是三角形 $D=\{(x,y): a\leqslant x\leqslant b,\ a\leqslant y\leqslant x\}$ 上的连续函数，那么对于任何常数 $\lambda$，方程$$\varphi(x)=f(x)+\lambda\int_a^x K(x,y)\varphi(y)\,\mathrm{d}y\tag{1.33}$$在 $[a,b]$ 上有唯一的连续函数解 $\varphi(x)$。

形如（1.33）的方程称为 **Volterra（沃尔泰拉）型积分方程**。某些数学物理问题和某些变分问题均可归结为解这种积分方程。

#### 习题（p51–54）

**习题 1** @51

若 $T$ 是度量空间上的压缩映射，证明：对任意正整数 $n$，$T^n$ 也是压缩映射，并说明逆命题不一定成立。

**习题 2** @51

设 $X$ 为完备度量空间，$\varphi$ 是 $X$ 到自身的映射，记

$$\alpha_n=\sup_{x\neq y}\frac{d(\varphi^n(x),\varphi^n(y))}{d(x,y)}.$$

(i) 若级数 $\sum_{n=1}^{\infty}\alpha_n<\infty$，则对任何一个初值 $x_0$，迭代程序 $\{\varphi^n(x_0)\}$ 收敛于映射 $\varphi$ 的唯一不动点，并求出第 $n$ 次近似解与准确解 $\varphi(x)=x$ 的逼近程度。

(ii) 若 $\inf_n\alpha_n<1$，则 $\varphi$ 有唯一的不动点。并给出一种收敛于准确解 $\varphi(x)=x$ 的迭代程序以及 $n$ 次近似解与准确解的逼近程度。

**习题 3** @52

设 $\alpha_{jk}$（$j,k=1,2,\cdots,n$）为一组实数，适合条件

$$\sum_{j,k=1}^n(\alpha_{jk}-\delta_{jk})^2<1,$$

其中 $\delta_{jk}$ 是 Kronecker（克罗内克）符号。那么代数方程

$$\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\a_{21}&a_{22}&\cdots&a_{2n}\\\vdots&\vdots&&\vdots\\a_{n1}&a_{n2}&\cdots&a_{nn}\end{pmatrix}\begin{pmatrix}x_1\\x_2\\\vdots\\x_n\end{pmatrix}=\begin{pmatrix}b_1\\b_2\\\vdots\\b_n\end{pmatrix}$$

对任何一组固定的 $b_1,b_2,\cdots,b_n$ 有唯一的解 $x_1,x_2,\cdots,x_n$。给出迭代程序以及 $n$ 次近似解与准确解的逼近程度。

**习题 4** @52

写出并利用不动点原理证明，关于方程组

$$\frac{\mathrm{d}y_k}{\mathrm{d}x}=f_k(x,y_1,y_2,\cdots,y_n),\qquad k=1,2,\cdots,n$$

的解的存在性与唯一性定理。

**习题 5** @52

设从完备度量空间 $X$ 到自身的映射 $T$ 满足如下条件：在开球 $O(x_0,r)$（$r>0$）内成立

$$d(Tx,Tx')<\theta d(x,x'),\qquad0<\theta<1,\ x\neq x',$$

并且

$$d(x_0,Tx_0)\leqslant\alpha r.$$

那么，

(ii) 当 $\alpha$ 满足怎样的条件时，$T$ 在 $O(x_0,r)$ 内有不动点，并且唯一？

(ii) 当 $\alpha\leqslant1-\theta$ 时，若 $T$ 在闭球 $B(x_0,r)$ 上连续，则 $T$ 在 $B(x_0,r)$ 内有不动点。这时唯一性是否成立？证明你的结论。

**习题 6** @52

设 $F$ 是 $n$ 维 Euclid 空间 $\mathbb{R}^n$ 中的有界闭集，$\varphi$ 是 $F$ 到自身的映射并且满足如下条件：对于任何 $x,y\in F$（$x\neq y$），有

$$d(\varphi(x),\varphi(y))<d(x,y),\qquad x\neq y.$$

证明：映射 $\varphi$ 在 $F$ 中存在唯一的不动点。对于不闭的有界集这个事实能否成立？

**习题 7 (Newton迭代法)** @52

设 $f$ 是定义在 $[a,b]$ 上的二次连续可微实函数，$[a,b]$ 中点 $x$ 满足 $f(x)=0$，$f'(x)\neq0$。证明：存在点 $x$ 的一个邻域 $U$，使得对任意 $x_0\in U$，迭代序列

$$x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)},\qquad n=0,1,2,\cdots$$

都收敛于 $x$。

**习题 8 (隐函数存在定理)** @52

设函数 $F:U\times V\mapsto\mathbb{R}^m$，其中 $U$ 和 $V$ 分别是 $\mathbb{R}^n$ 和 $\mathbb{R}^m$ 中的开区域，$(x_0,y_0)\in U\times V$。如果 $F$ 在 $U\times V$ 中连续，并且对于任意的 $x\in U$，$F(x,\cdot)$ 在 $V$ 中是连续可微的，同时满足

$$F(x_0,y_0)=0,\qquad\det\left(\frac{\partial F}{\partial y}\right)(x_0,y_0)\neq0.$$

其中 $\dfrac{\partial F}{\partial y}$ 是 $F$ 关于 $y$ 的 Jacobi（雅可比）矩阵。对于 $r>0$，令 $C(B(x_0,r),\mathbb{R}^m)$ 表示定义在闭球 $B(x_0,r)$ 上取值在 $\mathbb{R}^m$ 中的向量值连续函数空间，它按范数

$$\|\phi\|=\max_{x\in B(x_0,r),\ i=1,2,\cdots,m}|\phi_i(x)|,\qquad\forall\phi=(\phi_1,\phi_2,\cdots,\phi_m)\in C(B(x_0,r),\mathbb{R}^m)$$

构成了一个 Banach 空间。证明

(i) 存在 $r,\delta>0$，使得在 $C(B(x_0,r),\mathbb{R}^m)$ 的子集

$$E\stackrel{\mathrm{def}}{=}\{\phi\in C(B(x_0,r),\mathbb{R}^m):\phi(x_0)=y_0,\ |\phi(x)-y_0|\leqslant\delta,\ \forall x\in B(x_0,r)\}$$

中，

$$(T\phi)(x)\stackrel{\mathrm{def}}{=}\phi(x)-\left(\frac{\partial F}{\partial y}(x_0,y_0)\right)^{-1}F(x,\phi(x))$$

是良定义的压缩映射。

(ii) 存在 $x_0$ 的邻域 $U_0\subset U$ 以及唯一的连续函数 $\varphi:U_0\mapsto\mathbb{R}^m$，满足

$$\begin{cases}F(x,\varphi(x))=0,&\forall x\in U_0,\\\varphi(x_0)=y_0.\end{cases}$$

**习题 9** @53

设 $\operatorname{Iso}(\mathbb{R}^n)=\{f:f\text{ 是 }\mathbb{R}^n\text{ 上等距的双射}\}$ 是 Euclid 空间 $\mathbb{R}^n$ 的自同构群，一个群 $G$ 在 $\mathbb{R}^n$ 的作用即为一个群同态 $\phi:G\to\operatorname{Iso}(\mathbb{R}^n)$。我们首先来看 Kakutani（角谷静夫）不动点定理的一个特殊情况。

(i) 设 $G$ 是一个有限群，$G$ 在 $\mathbb{R}^n$ 的作用由同态 $\phi:G\to\operatorname{Iso}(\mathbb{R}^n)$ 给出。取一点 $v\in\mathbb{R}^n$。证明：函数 $f(x)=\sum_{g\in G}d(x,\phi(g)v)$ 存在可达的最小值。

(ii) 设 $G$ 是一个有限群，$G$ 在 $\mathbb{R}^n$ 的作用由同态 $\phi:G\to\operatorname{Iso}(\mathbb{R}^n)$ 给出。证明：存在点 $v\in\mathbb{R}^n$，使得对任意 $g\in G$ 有 $\phi(g)v=v$。

称群 $G$ 在 $\mathbb{R}^n$ 的作用 $\phi:G\to\operatorname{Iso}(\mathbb{R}^n)$ 是自由的，是指对于 $g\in G$，若存在 $v\in\mathbb{R}^n$ 使得 $\phi(g)v=v$，则 $g$ 是 $G$ 的单位元 $e$。称群 $G$ 是无挠的，是指若 $g\in G$ 及存在正整数 $m$ 使得 $g^m=e$，则 $g=e$。

(iii) 证明：若群 $G$ 存在一个在 $\mathbb{R}^n$ 上的自由等距群作用，则 $G$ 是无挠的。

在几何群论中，经常使用群 $G$ 在一些几何对象如 $G$ 的 Cayley 图及相应的 Hilbert 空间上的作用，刻画群 $G$ 的代数性质。更多内容可参阅 Clay（克莱）与 Margalit（马加利特）的几何群论著作 [11]。

**习题 10** @53

设 $G=\mathbb{Z}_2*\mathbb{Z}_3$ 为 $\mathbb{Z}_2$ 与 $\mathbb{Z}_3$ 的自由积。容易验证，群 $G$ 可如此显式表达：取生成集 $S=\{a,b\}$，$G$ 中元素 $u$ 可唯一写成有限长度的单词：

$$ab^{\varepsilon_1}ab^{\varepsilon_2}\cdots\quad\text{或}\quad b^{\varepsilon_1}ab^{\varepsilon_2}a\cdots,\qquad\varepsilon_i=\pm1,$$

单词长度正好为 Cayley 图上度量 $d_S(e,u)$（定义见习题 1.1 第 6、10 题）。对于 $u,v\in G$，它们的乘积为单词 $uv$，并对相邻 $b$ 与 $b$、$b^{-1}$ 与 $b^{-1}$ 分别用 $b^{-1},b$ 代替，且消除相邻的 $a$ 与 $a$、$b$ 与 $b^{-1}$。设 $H$ 是 $G$ 中的一个有限子群。

(i) 画出 Cayley 图 $\Gamma=(G,E)$ 中涉及顶点 $B(e,3)=\{u\in G:d_S(e,u)\leqslant3\}$ 的部分。

(ii) 对于 $u\in G$，$d_S(e,u)\geqslant2$，设 $v=a,b$ 或 $b^{-1}$ 为连接 $e,u$ 最短路径中的第一个顶点。对顶点 $P\in G$ 及正整数 $r$，若 $d(e,P)\leqslant r$，$d(u,P)\leqslant r$，证明：$d(v,P)\leqslant r-1$。

(iii) 令

$$r_0=\min\{r\in\mathbb{N}_+:\exists b\in G,\ H\subset B(b,r)\}.$$

令 $B$ 为达到最小值的 $G$ 中元素全体：$b\in B$ 当且仅当 $H\subset B(b,r_0)$。证明：$B$ 是 $H$ 的一个（左作用）不变集，即 $gB=B$，$\forall g\in H$。

(iv) 令 $d_B=\max\{d_S(b_1,b_2):b_1,b_2\in B\}$ 为集合 $B$ 的直径。证明：存在元素 $b\in G$，使得其共轭子群 $b^{-1}Hb\subset B(e,d_B)$。

(v) 列举 $d_B$ 可能的取值，由此证明：有限子群 $H$ 必为 $\{e\}$、$\{e,a\}$ 或者 $\{e,b,b^{-1}\}$ 的共轭子群。

实际上，由几何群论可得，双曲群（Hyperbolic Group）均有类似的结果。

### 1.6 列紧性（p54–64）

#### 1.6.1 相对列紧集 @54

**定义 1.6.1 (相对列紧集)** @54

设 $X$ 是度量空间，$A$ 是 $X$ 的子集。如果 $A$ 中的任何点列都有在 $X$ 中收敛的子列，就称 $A$ 是（$X$ 中的）**相对列紧集**。如果 $X$ 自身是相对列紧集，就称 $X$ 是**列紧空间**。

**定义 1.6.2 (列紧集)** @54

度量空间中闭的相对列紧集，即 $A$ 中任一点列有收敛子点列收敛到 $A$ 中的一点，称为**列紧集**。

**命题 (相对列紧集的基本性质)** @54

容易看出相对列紧集有下面的几点性质：

（1）有限点集是相对列紧集。

（2）有限个相对列紧集的并集是相对列紧集。

（3）相对列紧集的子集是相对列紧集，因此，任意一族相对列紧集的交集是相对列紧集。

（4）相对列紧集的闭包是相对列紧集，从而是列紧集。

（5）相对列紧集中的基本点列都收敛。因此，列紧的度量空间是完备的。

**例 1.6.1 (有限维有界即列紧)** @55

由 Bolzano–Weierstrass 定理，$\mathbb{R}^n$（或 $\mathbb{C}^n$）中的子集 $A$ 是相对列紧集等价于 $A$ 是有界的。再由定理 1.4.2 的讨论知，对任意的有限维赋范线性空间 $X$，它的子集 $A$ 是相对列紧等价于 $A$ 是有界集。

然而，对于无穷维的赋范线性空间，情况就变得非常复杂了。

**例 1.6.2 (单位向量列不列紧)** @55

空间 $l^2$ 中的一列向量 $\{e_n: e_n=(0,0,\cdots,0,1,0,\cdots)\}$ 构成的子集 $X$，其中的任何两个不同的元素之间的距离都等于 $\sqrt{2}$，这是 $l^2$ 中的有界点列。但是，点列 $\{e_n\}$ 没有收敛的子点列。

另外，开集族 $\left\{O\left(e_n,\dfrac{1}{2}\right): n=1,2,\cdots\right\}$ 显然覆盖 $X$，但是每个开集 $O\left(e_n,\dfrac{1}{2}\right)$ 都只包含一个元素 $e_n$，因此它没有包含 $X$ 的任何有限子覆盖。

**引理 1.6.1 (F. Riesz)** @55

设 $A$ 是赋范线性空间 $X$ 的闭线性子空间，并且 $A\neq X$。那么对于任一 $\varepsilon\ (0<\varepsilon<1)$，存在 $X$ 中的单位向量 $x_0$，$\|x_0\|=1$，使得$$d(x_0,A)>\varepsilon.$$

**定理 1.6.1 (无限维单位球不列紧)** @56

如果赋范线性空间 $X$ 是无限维的，那么 $X$ 的单位球不是相对列紧的。

**定理 1.6.2 (列紧与紧等价)** @56

设 $A$ 是度量空间 $X$ 中的点集。$A$ 是列紧的充要条件是 $X$ 中每个覆盖 $A$ 的开集族中都有有限个开集覆盖 $A$。

这就是说，在度量空间中（覆盖）紧集和列紧集是等价的。因此，在度量空间中，不需再区分列紧集和（覆盖）紧集。

**定义 1.6.3 ($\varepsilon$ 网与完全有界集)** @56

设 $A$ 是度量空间 $X$ 中点集，$B$ 是 $A$ 的子集。

（i）如果有正数 $\varepsilon$，使得以 $B$ 中各点为球心，以 $\varepsilon$ 为半径的开球全体覆盖 $A$，即$$\bigcup_{x\in B}O(x,\varepsilon)\supset A,$$那么称 $B$ 是 $A$ 的 **$\varepsilon$ 网**。

（ii）如果对任何 $\varepsilon>0$，集 $A$ 总有有限的 $\varepsilon$ 网 $\{x_1,x_2,\cdots,x_n\}\subset A$（点的个数 $n$ 随 $\varepsilon$ 而变），那么称 $A$ 是**完全有界的集**。

**注 1.6.1 (完全有界集定义放宽)** @56

在完全有界集定义中的 $B$ 要求是 $A$ 的子集，但实际上无须这个条件。这一事实留作读者练习。

**例 1.6.3 (有界集完全有界)** @56

$n$ 维 Euclid 空间 $\mathbb{R}^n$ 中的有界集是完全有界的。从而，我们也可得到有限维赋范线性空间中的有界集是完全有界的。

**定理 1.6.3 (Hausdorff)** @57

（i）度量空间中相对列紧集是完全有界集。

（ii）在完备度量空间中，完全有界集是相对列紧集。因此，在完备度量空间中，完全有界集和相对列紧集是相同的。

**反例 (完备性条件不可去)** @57

定理 1.6.3 中（ii）的完备性条件能否除去？即在赋范线性空间 $(C[0,1],\|\cdot\|_1)$ 中，是否存在完全有界但却不是相对列紧的集？

**定理 1.6.4 (完全有界蕴含完备)** @57

如果度量空间 $X$ 中每个完全有界集都是相对列紧集，那么 $X$ 是完备的。

**推论 1.6.1 (相对列紧集可分有界)** @57

相对列紧集是可分的有界集。

#### 1.6.2 Arzelà-Ascoli定理 @57

**定义 1.6.4 (等度连续的函数族)** @57

设 $A$ 是 $[a,b]$ 上的一族连续函数，$A\subset C[a,b]$。若对任何一个正数 $\varepsilon$，有 $\delta>0$，使得对于区间 $[a,b]$ 中任何两点 $x,x'\in[a,b]$，当 $|x-x'|<\delta$ 时，对 $A$ 中每个函数 $f$，都成立$$|f(x)-f(x')|<\varepsilon$$（即 $\delta$ 不依赖于 $A$ 中个别的 $f$），那么称 $A$ 是**等度连续的函数族**。

"等度"的意思是族 $A$ 中各个函数的连续程度是同等的。

**例 1.6.4 (赫尔德连续函数族)** @58

设 $L$ 和 $\alpha$ 是两个正数，$A$ 是 $C[a,b]$ 中满足 Hölder 连续性条件：$$|f(x)-f(y)|\leqslant L|x-y|^{\alpha},\qquad x,y\in[a,b]$$的函数 $f$ 所成的函数族，$A$ 是等度连续的函数族。

**例 1.6.5 (积分算子像集等度连续)** @58

设 $K(s,t)$ 是 $[a,b]\times[a,b]$ 上的连续函数，设 $C[a,b]$ 的子集$$A=\left\{\int_a^b K(s,t)\varphi(t)\,\mathrm{d}t:\ \varphi\in C[a,b],\ \|\varphi\|\leqslant 1\right\},$$则 $A$ 是等度连续的。

**定理 1.6.5 (Arzelà–Ascoli)** @58

$C[a,b]$ 的子集 $A$ 为相对列紧的充要条件是 $A$ 为有界的、等度连续的函数族。

**定理 1.6.6 (序列空间相对列紧判据)** @59

对 $1\leqslant p<\infty$，空间 $l^p$ 中的集 $A$ 成为相对列紧的充要条件是 $A$ 为有界集且对任何正数 $\varepsilon$，存在正整数 $N$，使得对一切 $x=(x_1,x_2,\cdots,x_n,\cdots)\in A$，$$\sum_{n=N+1}^{\infty}|x_n|^p<\varepsilon.\tag{1.36}$$

条件（1.36）对应于 $C[a,b]$ 中的等度连续性，可以称为"等度收敛"。

**定理 1.6.7 (Kolmogorov–Riesz–Frèchet)** @61

空间 $L^p(\mathbb{R})$ 中的集 $A$ 是完全有界集的充要条件是

（i）$A$ 为有界集。

（ii）（等度 $L^p$ 胎紧）对于任意的 $\varepsilon>0$，存在正数 $M$，使得对于任意的 $f\in A$，都有$$\int_{|x|>M}|f(x)|^p\,\mathrm{d}m(x)<\varepsilon^p.\tag{1.37}$$

（iii）（等度 $L^p$ 范数连续）对于任意的 $\varepsilon>0$，存在 $\delta>0$，对于任意的 $f\in A$，当 $|h|<\delta$ 时，一定有$$\|f(\cdot+h)-f(\cdot)\|_p\leqslant\varepsilon.\tag{1.38}$$

#### 1.6.3 紧度量空间 @61

**定理 1.6.8 (连续映射保持紧性)** @61

设 $K$ 是紧集，$f$ 是 $K$ 上的连续映射，那么 $K$ 的像 $E=f(K)$ 也是紧集。

**推论 1.6.2 (连续映射保持相对列紧)** @61

度量空间 $X$ 上的连续映射把相对列紧集映射成相对列紧集。

**推论 1.6.3 (紧集上连续函数有界)** @61

度量空间 $X$ 的紧子集 $K$ 上的连续函数 $f$ 是有界的，且上、下确界可达。

**推论 1.6.4 (紧集间连续双射同胚)** @61

紧集之间一对一的、到上的连续映射是拓扑同胚。

**定义 1.6.5 (一致连续与等度连续)** @62

设 $X$ 是度量空间。

（i）设 $f$ 是定义在 $X$ 上的函数。如果对于任意的 $\varepsilon>0$，存在 $\delta>0$，使得当 $d(x,y)<\delta$ 时，有 $|f(x)-f(y)|<\varepsilon$，则称 $f$ 在 $X$ 上**一致连续**。

（ii）$X$ 上连续函数的全体记为 $C(X)$，设 $A\subset C(X)$。如果对于任意的 $\varepsilon>0$，存在 $\delta>0$，使得当 $d(x,x')<\delta$ 时，有$$|f(x)-f(x')|<\varepsilon,\qquad \forall f\in A,$$则称集合 $A$ 是**等度连续的**。

**定理 1.6.9 (紧空间连续函数性质)** @62

设 $X$ 是紧度量空间。

（i）如果 $f$ 是定义在 $X$ 上的连续函数，那么 $f$ 在 $X$ 上是一致连续的。

（ii）对于任意的 $f\in C(X)$，定义 $\|f\|=\max\limits_{x\in X}|f(x)|$，那么 $C(X)$ 是 Banach 空间。

（iii）（Arzelà–Ascoli）$C(X)$ 中的子集 $A$ 是相对列紧的充要条件为 $A$ 是等度连续的有界集。

**定义 (子代数)** @62

对 $C(X)$ 中子集 $A$，如果 $A$ 对数乘运算和函数加法及乘法都是封闭的，则称 $A$ 是一个**子代数**，此时若 $A$ 还含有常数函数 $f(x)\equiv 1$，则称 $A$ 是**带单位元的子代数**。若对任意 $f\in A$ 都有 $\bar{f}\in A$，则称 $A$ 是**自伴的**。而 $A$ **分离** $X$ 中的点，则意味着：对任意 $x\neq y\in X$，可找到函数 $f\in A$ 使得 $f(x)\neq f(y)$。

**定理 1.6.10 (Stone–Weierstrass)** @62

设 $X$ 是紧度量空间。若带单位元的子代数 $A$ 是自伴的，且 $A$ 分离 $X$ 中点，则 $A$ 在 $C(X)$ 中稠密。

**定理 1.6.11 (Weierstrass 第二逼近定理)** @62

在单位圆周 $\mathbb{T}=\{z=\mathrm{e}^{\mathrm{i}x}:0\leqslant x<2\pi\}$ 上，三角多项式$$\mathcal{P}=\left\{\sum_{k=-n}^{n}a_n\mathrm{e}^{\mathrm{i}nx}:\ n\in\mathbb{N},\ a_n\in\mathbb{C}\right\}$$在 Banach 空间 $C(\mathbb{T})$ 中稠密。

**例 1.6.6 (复指数系正交基)** @62

利用 Weierstrass 第二逼近定理，也可以证明例 1.3.6、例 1.3.7 的结果。即 $\{z^n=\mathrm{e}^{\mathrm{i}nx}: n\in\mathbb{Z}\}$ 是 $L^2\left(\mathbb{T},\dfrac{\mathrm{d}x}{2\pi}\right)$ 的标准正交基。

**定理 1.6.12 (Schauder 不动点定理)** @63

设 $X$ 是 Banach 空间，$K\subset X$ 是空间中的紧凸集。若 $f:K\to K$ 是连续函数，则存在不动点 $x\in K$ 使得 $f(x)=x$。

#### 习题（p63–64）

**习题 1** @63

设 $A$ 是紧的度量空间，$\{F_{\lambda}\}$ 是 $A$ 的一族闭子集，如果 $\{F_{\lambda}\}$ 中任意有限个 $F_{\lambda_1},F_{\lambda_2},\cdots,F_{\lambda_n}$ 的交集都不空，那么 $\bigcap_{\lambda}F_{\lambda}$ 也不空。

反之，如果度量空间 $A$ 具有如下性质：对于 $A$ 中任意的闭子集族 $\{F_{\lambda}\}$，从任意有限交集不空可推出 $\bigcap_{\lambda}F_{\lambda}$ 不空，那么 $A$ 是紧的度量空间。

**习题 2** @63

验证注 1.6.1。

**习题 3** @63

对 $\mathbb{R}^n$ 的有界子集 $E$ 及数 $\varepsilon>0$，给出它的一个有限 $\varepsilon$-网。

**习题 4** @63

若度量空间 $(X,d)$ 中的子集 $A$ 是完全有界的，证明：$A$ 的任一子集 $B$ 也是完全有界的。

**习题 5** @63

设 $L$ 是赋范线性空间，$A$ 是 $L$ 的有界子集。证明：$A$ 是完全有界集的充要条件是：对任何 $\varepsilon>0$，存在 $L$ 的有限维子空间 $M$，使 $A$ 中每个点与 $M$ 的距离都小于 $\varepsilon$。

**习题 6** @63

设 $C_{\alpha}[a,b]$（$0<\alpha\leqslant1$）是 $[a,b]$ 上满足 Hölder 连续性条件：

$$|f(x)-f(x')|\leqslant M_f|x-x'|^{\alpha},\qquad x,x'\in[a,b]$$

且 $f(a)=0$ 的函数全体，这里 $M_f$ 是正的常数。在 $C_{\alpha}[a,b]$ 中规定范数如下：

$$\|f\|=\sup_{\substack{x,x'\in[a,b]\\x\neq x'}}\frac{|f(x)-f(x')|}{|x-x'|^{\alpha}}.$$

写出 $C_{\alpha}[a,b]$ 中的点集是完全有界集的一些条件。

**习题 7** @63

证明定理 1.6.7 中的必要性。

**习题 8** @63

对于 Banach 空间

$$C_0(\mathbb{R})=\{f\text{ 在 }\mathbb{R}\text{ 上连续}:\lim_{|x|\to\infty}f(x)=0\},$$

子集 $A$ 相对列紧的充要条件是 $A$ 是有界、等度连续的，且对任意 $\varepsilon>0$，存在数 $N$ 使得

$$|f(x)|\leqslant\varepsilon,\qquad\forall|x|>N,\ f\in A.$$

**习题 9** @63

设 $X$ 是 Banach 空间，$A$ 是 $X$ 的子集。如果 $A$ 是相对列紧集，那么 $A$ 的凸包

$$\operatorname{co}(A)=\left\{\sum_{i=1}^n\alpha_i x_i:n\in\mathbb{N}_+;\ \forall1\leqslant i\leqslant n,\ x_i\in A,\ 0\leqslant\alpha_i\leqslant1;\ \sum_{i=1}^n\alpha_i=1\right\}$$

是相对列紧的。

**习题 10 (Grothendieck（格罗滕迪克）)** @64

对 Banach 空间 $X$ 中的相对列紧集 $K$，证明：存在 $X$ 中一个点列 $\{x_n\}$，使得 $\lim_n x_n=0$ 且

$$K\subset\left\{\sum_{n=1}^{\infty}a_n x_n:\sum_{n=1}^{\infty}|a_n|\leqslant1\right\}.$$

**习题 11** @64

令 $B_1=\{f\in L^1[a,b]:\|f\|_1\leqslant1\}$ 为实 $L^1[a,b]$ 的单位球。对实值 $g\in L^{\infty}[a,b]$，定义 $F_g:B_1\to\mathbb{R}$ 为

$$F_g(f)=\int_a^b fg\,\mathrm{d}m.$$

证明：$F_g$ 是 $B_1$ 上的连续函数，且 $\sup_{f\in B_1}F_g=\|g\|_{\infty}$，并说明，当 $g(x)=x-a$ 时，上界 $\sup_{f\in B_1}F_g$ 是不可达的。

**习题 12** @64

证明定理 1.6.9。

**习题 13** @64

设 $F_1$ 是度量空间 $X$ 的紧子集，$F_2$ 是 $X$ 的闭子集，$F_1\cap F_2=\varnothing$。证明：

$$d(F_1,F_2)=\inf\{d(x,y):x\in F_1,y\in F_2\}$$

是一个正数。

**习题 14** @64

设 $X$ 是 Banach 空间，$M$ 和 $N$ 是 $X$ 的闭线性子空间，其中 $N$ 是有限维的。证明 $M+N$ 是 $X$ 的闭线性子空间。

**习题 15** @64

定义：对度量空间 $(X,d)$，称函数 $f:X\to\mathbb{R}$ 下半连续是指对于 $x\in X$，

$$f(x)\leqslant\lim_{r\to0}\inf_{y\in O(x,r)}f(y).$$

对于 $X$ 的一个开覆盖 $\{U_i\}_i$，定义 Lebesgue 函数

$$L(x)=\sup\{r\in\mathbb{R}:0<r<1,\ \text{存在某个 }U_i\text{ 使得 }O(x,r)\subseteq U_i\}.$$

证明：

(i) $L$ 下半连续。

(ii) 若 $X$ 是紧的，则 $L$ 达到下界：即存在 $x_0\in X$ 使得 $L(x_0)=\inf_{x\in X}L(x)$。

**习题 16** @64

定义：设 $X$ 和 $Y$ 是度量空间，$f$ 是从 $X$ 到 $Y$ 的映射，如果对于任一正数 $\varepsilon$，存在正数 $\delta$，当 $d(x,x')<\delta$ 时，有 $d(f(x),f(x'))<\varepsilon$，就称 $f$ 在 $X$ 上是一致连续的。

设 $X$ 是紧度量空间，$f$ 是 $X$ 上的连续映射。证明：$f$ 是一致连续的。

**习题 17 (Dini定理)** @64

设 $X$ 为紧度量空间，$\{f_k\}$ 是 $X$ 上一个实值的递增连续函数列：对任意 $x\in X$ 及正整数 $k$，有 $f_k(x)\leqslant f_{k+1}(x)$。若 $\{f_k\}$ 点态收敛于连续函数 $f$，证明：$\{f_k\}$ 一致收敛于 $f$。

## 第2章 线性泛函

### 2.1 赋范线性空间上的线性算子（p66–73）

#### 线性算子的概念与例子 @66

**定义 2.1.1 (线性算子)** @66

设 $\mathbb{K}$ 是实数或复数域，$X$ 及 $Y$ 是域 $\mathbb{K}$ 上的两个线性空间，$D$ 是 $X$ 的线性子空间，$T$ 是从 $D$ 到 $Y$ 中的映射。如果对任何 $x,y\in D$ 及数 $\alpha,\beta\in\mathbb{K}$，成立$$T(\alpha x+\beta y)=\alpha T(x)+\beta T(y),$$就称 $T$ 是**线性算子**，称 $D$ 是 $T$ 的**定义域**，也记为 $\mathcal{D}(T)$。而称集 $T(D)=\{Tx:\ x\in D\}$ 是 $T$ 的**值域**（或**像**），记为 $\mathfrak{R}(T)$。$X$ 的子空间$$\ker T\stackrel{\text{def}}{=}T^{-1}(0)=\{x\in D:\ Tx=0\}$$称为**核**（或**零空间**）。

今后所讨论的算子都是线性算子。特别地，当 $Y=X$ 时，称 $T$ 是 $X$ 上的线性算子；当 $Y=\mathbb{K}$ 时，称 $T$ 是 $X$ 上的**线性泛函**。

**例 2.1.1 (矩阵与线性变换)** @66

设 $\mathbb{K}^n$ 是 $n$ 维（实或复系数）向量空间，在 $\mathbb{K}^n$ 中取一组基 $\{e_1,e_2,\cdots,e_n\}$。相应于任意一个 $n$ 阶方阵 $(t_{ji})$，作 $\mathbb{K}^n\mapsto\mathbb{K}^n$ 的算子 $T$ 如下：当 $x=\sum\limits_{i=1}^{n}x_ie_i$ 时，$$y=Tx=\sum_{j=1}^{n}y_je_j,$$其中 $y_j=\sum\limits_{i=1}^{n}t_{ji}x_i\ (j=1,2,\cdots,n)$。这样定义的 $T$ 是一个线性算子，这个算子在线性代数中称为线性变换。算子 $T$ 显然由矩阵 $(t_{ji})$ 唯一确定，有时就直接记为 $T=(t_{ji})$。

反过来，设 $T$ 是 $\mathbb{K}^n\mapsto\mathbb{K}^n$ 的线性算子，由于 $Te_i$ 是 $e_1,e_2,\cdots,e_n$ 的线性组合，所以存在矩阵 $(t_{ji})$，使得$$Te_i=t_{1i}e_1+t_{2i}e_2+\cdots+t_{ni}e_n.\tag{2.1}$$因此 $T$ 是对应于矩阵 $(t_{ji})$ 的算子。

由此可知，在有限维线性空间上，当基选定后，线性算子与矩阵是相对应的。

**注 (有限维空间上的线性泛函)** @66

类似地，对线性泛函 $f:\mathbb{K}^n\to\mathbb{K}$，存在唯一的 $a\in\mathbb{K}^n$ 使得$$f(x)=a\cdot x,\qquad x\in\mathbb{K}^n.$$

**例 2.1.2 (多项式微分算子)** @67

设 $P(t)=\sum\limits_{i=0}^{k}a_ix^i$ 是常系数多项式，那么将函数 $x(t)$ 映射成 $P\left(\dfrac{\mathrm{d}}{\mathrm{d}t}\right)x(t)$ 的算子$$P\left(\frac{\mathrm{d}}{\mathrm{d}t}\right):\ x(t)\mapsto P\left(\frac{\mathrm{d}}{\mathrm{d}t}\right)x(t)$$是 $C^{(k)}[a,b]$ 到 $C[a,b]$ 的线性算子。

**例 2.1.3 (积分运算)** @67

积分运算$$F(f)=\int_a^b f(t)\,\mathrm{d}t,\qquad \forall f\in L^1[a,b]$$是 $L^1[a,b]$ 上的线性泛函。

**例 2.1.4 (纯量算子)** @67

设 $E$ 是线性空间，给定数 $\alpha$。映射$$T:\ x\mapsto \alpha x,\qquad \forall x\in E$$是 $E$ 上的线性算子，记作 $\alpha I$，称为**纯量算子**（或称为**倍单位算子**）。当 $\alpha=0$ 时，$T$ 是**零算子**，记作 $0$。当 $\alpha=1$ 时，称为**单位算子**或恒等算子，记作 $I$。

**例 2.1.5 (Fourier 级数)** @67

对于 $f\in L^1(\mathbb{T})$，它的第 $n$ 个 Fourier 系数为$$\hat{f}(n)=\langle f,\mathrm{e}^{\mathrm{i}n\theta}\rangle=\int_{[0,2\pi]}f(\mathrm{e}^{\mathrm{i}\theta})\mathrm{e}^{-\mathrm{i}n\theta}\,\frac{\mathrm{d}\theta}{2\pi}.\tag{2.2}$$则映射 $\tau(f)=\{\hat{f}(n)\}_{n\in\mathbb{Z}}$ 是从 $L^1(\mathbb{T})$ 到 $l^\infty(\mathbb{Z})$ 的线性算子。再由 Riemann–Lebesgue 引理知道当 $|n|\to\infty$ 时，$|\hat{f}(n)|\to 0$，故 $\tau$ 是从 $L^1(\mathbb{T})$ 到 $c_0(\mathbb{Z})$ 的线性算子。

**例 2.1.6 (Fourier 变换)** @67

对 $f\in L^1(\mathbb{R})$，定义它的 Fourier 变换 $\mathcal{F}(f)$（或记作 $\hat{f}$）为$$\mathcal{F}(f)(t)=\int_{\mathbb{R}}f(x)\mathrm{e}^{-2\pi\mathrm{i}tx}\,\mathrm{d}x,\qquad f\in L^1(\mathbb{R}).\tag{2.3}$$$\hat{f}$ 是 $\mathbb{R}$ 上的连续函数。再由 Riemann–Lebesgue 引理知，当 $|t|\to\infty$ 时，有 $\hat{f}(t)\to 0$。因此 $\mathcal{F}:f\mapsto \hat{f}$ 是 $L^1(\mathbb{R})$ 到 $c_0(\mathbb{R})$ 的线性算子。

**例 2.1.7 (Hilbert 空间上的投影算子)** @67

设 $L$ 是 Hilbert 空间 $H$ 的闭子空间，对 $H$ 中元 $x$，记它在 $L$ 上的投影为 $x_L$。那么，从 $H$ 到 $L$ 上的投影算子 $P$ 定义为$$P:\ x\mapsto x_L,$$当强调空间 $L$ 时，常常将其记为 $P_L$。显然 $P_L^2=P_L$。

#### 线性算子的有界性与连续性 @68

**例 2.1.8 (有限维赋范空间中的线性算子)** @68

有限维赋范空间中的线性算子都是连续算子。

**定理 2.1.1 (有界线性算子等价连续)** @68

设 $(X,\|\cdot\|),(Y,\|\cdot\|)$ 是赋范线性空间，$T:X\to Y$ 是线性映射，则下列命题等价：

（i）$T$ 是连续映射。

（ii）$T$ 在点 $0$ 连续。

（iii）存在 $M>0$，使得 $\|Tx\|\leqslant M\|x\|$。

**定义 (有界算子与无界算子)** @68

如果算子 $T$ 满足定理 2.1.1 中任一条件，就称 $T$ 是**有界算子**。否则就称 $T$ 为**无界算子**。显然，并非每个算子都是有界的。

**例 2.1.9 (无界的微分算子)** @68

设 $X=C^{(1)}[a,b]$，视 $X$ 为 $C[a,b]$ 的子空间（就是说，$X$ 中的范数取为 $C[a,b]$ 中的范数）时，$X$ 也成为一个赋范线性空间。定义算子 $D:X\to C[a,b]$ 如下：$$(Dx)(t)=\frac{\mathrm{d}}{\mathrm{d}t}x(t),\qquad \forall x\in X.$$那么 $D$ 显然是线性算子，$D$ 是无界的。

**定义 2.1.2 (算子范数)** @68

设 $T$ 为赋范线性空间 $X$ 到赋范线性空间 $Y$ 的有界算子，称$$\|T\|=\sup_{x\neq 0}\frac{\|Tx\|}{\|x\|}$$为算子 $T$ 的**范数**。对有界线性算子 $T$，成立$$\|Tx\|\leqslant \|T\|\,\|x\|,\qquad \forall x\in X.\tag{2.4}$$

**命题 (算子范数的等价表示)** @69

若称 $\dfrac{\|Tx\|}{\|x\|}$ 为 $T$ 在 $x$ 方向的**伸长系数**，则可以看出 $\|T\|$ 的几何意义是一切方向伸长系数的上确界。容易看出，$\|T\|$ 有如下简单性质：$$\|T\|=\sup_{x\neq 0}\frac{\|Tx\|}{\|x\|}=\sup_{\|x\|=1}\|Tx\|=\sup_{\|x\|\leqslant 1}\|Tx\|=\sup_{\|x\|<1}\|Tx\|.\tag{2.5}$$显然，当 $T=I$（单位算子）时，$\|I\|=1$。

算子范数本质上是线性算子的 Lipschitz 常数。

**定理 (稠密子空间上有界算子的延拓)** @69

在具体问题中，我们经常知道线性变换 $T$ 在赋范线性空间 $X$ 的一个稠密子空间 $M$ 上是如何定义的。如果我们还知道 $T$ 在 $M$ 上是有界的，值域落在 Banach 空间 $Y$ 中，那么 $T$ 可以自动延拓到 $X$ 上：对于 $x\in X$，取一个 $M$ 中的点列 $\{x_n\}$ 收敛到 $x$，则 $\{Tx_n\}$ 是 $Y$ 中的 Cauchy 点列，从而可定义$$Tx=\lim_{n\to\infty}Tx_n.$$容易验证，此时 $T$ 是 $X$ 上一个良定义的有界算子。

**例 2.1.10 (积分算子的范数)** @69

对任意 $f\in L^1[a,b]$，作$$(Tf)(x)=\int_a^x f(t)\,\mathrm{d}t.\tag{2.6}$$把 $T$ 视为 $L^1[a,b]\mapsto C[a,b]$ 的算子时，那么 $\|T\|=1$。如将 $T$ 看成 $L^1[a,b]\mapsto L^1[a,b]$ 的算子，那么 $\|T\|=b-a$。

**例 2.1.11 (乘积算子)** @70

设 $X=L^1[a,b]$。取 $x\in L^\infty[a,b]$，作 $X\to X$ 的线性算子如下：$$M_x:\ f(t)\mapsto x(t)f(t),\qquad \forall f\in L^1[a,b].$$显然，算子 $M_x$ 是 $X\mapsto X$ 的线性算子，通常称它为**乘积算子**。那么 $M_x$ 是有界算子，并且$$\|M_x\|=\|x\|_\infty.\tag{2.7}$$

**例 2.1.12 (商算子)** @71

设 $X,Y$ 是赋范线性空间，$T$ 是 $X$ 到 $Y$ 上的有界线性算子。那么，核空间 $\ker T$ 是 $X$ 的闭线性子空间。并且，$T$ 诱导出的算子$$\tilde{T}([x])\stackrel{\text{def}}{=}T(x)$$是从 $X/\ker T$ 到 $\mathfrak{R}(T)$ 的一一到上的有界线性算子，且 $\|\tilde{T}\|=\|T\|$。

**构造 (有界线性算子全体构成的空间)** @71

设 $X,Y$ 是赋范线性空间，以 $\mathfrak{B}(X,Y)$ 表示由 $X$ 到 $Y$ 的有界线性算子的全体。设 $A,B\in\mathfrak{B}(X,Y)$，$\alpha$ 是数，作算子 $A+B,\alpha A$ 如下：对于任意 $x\in X$，规定$$(A+B)(x)=Ax+Bx,\qquad (\alpha A)(x)=\alpha Ax.$$容易验证$$\|A+B\|\leqslant \|A\|+\|B\|,\qquad \|\alpha A\|=|\alpha|\,\|A\|.$$显然 $\|A\|\geqslant 0$，而 $\|A\|=0$ 当且仅当 $A=0$。

**定理 2.1.2 (有界算子空间完备)** @71

设 $X,Y$ 是赋范线性空间，$\mathfrak{B}(X,Y)$ 是 $X$ 到 $Y$ 的有界线性算子全体，那么

（i）按上述线性运算及算子范数，$\mathfrak{B}(X,Y)$ 成为赋范线性空间；

（ii）当 $Y$ 是 Banach 空间时，$\mathfrak{B}(X,Y)$ 是 Banach 空间。

**构造 (算子的乘法与 $\mathfrak{B}(X)$ 的代数结构)** @72

除了线性运算之外，我们还可以定义算子的乘法运算（即复合运算）。设 $X,Y,Z$ 都是赋范线性空间，$A\in\mathfrak{B}(X,Y)$，$B\in\mathfrak{B}(Y,Z)$，规定$$(BA)(x)=B(Ax),\qquad x\in X,$$则 $BA\in\mathfrak{B}(X,Z)$，并且 $\|BA\|\leqslant \|B\|\,\|A\|$。

特别地，将 $\mathfrak{B}(X,X)$ 记为 $\mathfrak{B}(X)$，则 $\mathfrak{B}(X)$ 在上述乘法的意义下构成一个代数。

#### 习题（p72–73）

**习题 1** @72

设 $T$ 是赋范线性空间 $X$ 到赋范线性空间 $Y$ 的线性算子。如果零空间 $\ker(T)=\{x:Tx=0\}$ 是闭集，问 $T$ 是否有界？

**习题 2** @72

设 $E$ 是 Hilbert 空间 $H$ 的一个稠密的线性子空间，$T\in\mathfrak{B}(H)$。证明：

$$\|T\|=\sup\{|\langle Tx,y\rangle|:x,y\in E,\|x\|=\|y\|=1\}.$$

**习题 3** @72

在例 2.1.1 中，如果规定向量 $x=\sum_{i=1}^n x_i e_i$ 的范数为 $\|x\|=\max_{1\leqslant i\leqslant n}|x_i|$，求出例 2.1.1 中算子 $T$ 的范数；如果规定向量 $x$ 的范数为 $\|x\|=(\sum_{i=1}^n|x_i|^2)^{1/2}$，证明例 2.1.1 中算子的范数满足

$$\max_{1\leqslant i\leqslant n}\left(\sum_{j=1}^n|t_{ji}|^2\right)^{1/2}\leqslant\|T\|\leqslant\left(\sum_{i,j=1}^n|t_{ji}|^2\right)^{1/2}.$$

**习题 4** @72

作赋范线性空间 $l^p$（$1<p<\infty$）中算子 $T$ 如下：当 $x=\{x_\nu\}\in l^p$ 时，$Tx=\{y_\mu\}$，其中

$$y_\mu=\sum_{\nu=1}^\infty t_{\mu\nu}x_\nu,\qquad\mu=1,2,\cdots.$$

且 $\sum_{\mu=1}^\infty(\sum_{\nu=1}^\infty|t_{\mu\nu}|^q)^{p/q}<\infty$，$\frac1p+\frac1q=1$。证明 $T$ 是 $l^p$ 上有界线性算子。又问 $l^p$ 上有界线性算子是否都是这种形式？

**习题 5** @73

$T$ 是 $C[a,b]$ 到自身的积分算子：

$$(T\varphi)(s)=\int_a^b K(s,t)\varphi(t)\,\mathrm{d}t,\qquad\varphi\in C[a,b],$$

其中 $K(s,t)$ 是 $[a,b]\times[a,b]$ 上二元连续函数。证明

$$\|T\|=\max_{a\leqslant s\leqslant b}\int_a^b|K(s,t)|\,\mathrm{d}t.$$

**习题 6** @73

证明 $\frac{\mathrm{d}}{\mathrm{d}x}$ 是 $C^{(k)}[a,b]$（$k\geqslant1$）到 $C[a,b]$ 的连续线性算子，并求出它的范数。其中 $C^{(k)}[a,b]$ 是区间 $[a,b]$ 中具有连续的 $k$ 阶导函数的函数全体，以

$$\|x\|=\max_{0\leqslant j\leqslant k}\max_{t\in[a,b]}|x^{(j)}(t)|$$

为范数。

**习题 7** @73

令 $X$ 是赋范线性空间，$L$ 是 $X$ 的稠密线性子空间，$Y$ 是 Banach 空间。设 $\{T_n\}$ 是 $\mathfrak{B}(X,Y)$ 中的一致有界算子列：即存在 $M>0$ 使得 $\|T_n\|\leqslant M$。且对每个 $x\in L$，$T_nx$ 都在 $Y$ 中收敛。那么，存在 $T\in\mathfrak{B}(X,Y)$，使得对 $x\in X$，都有 $\lim_{n\to\infty}\|T_nx-Tx\|=0$。

**习题 8** @73

令 $A$ 为 $L^2(\mathbb{R})$ 中阶梯函数全体，那么 $A$ 中的函数也是 $L^1(\mathbb{R})$ 的，它们的 Fourier 变换可以使用例 2.1.6 中给出的定义。

(i) 证明：存在有界线性算子 $T:L^2(\mathbb{R})\to L^2(\mathbb{R})$，使得 $T$ 是等距的：即 $\|Tf\|=\|f\|$，且对于 $f\in A$ 有 $T(f)=\widehat f$。

(ii) 对 $L^2(\mathbb{R})$ 中函数，如何合理定义 $\widehat f$？

**习题 9** @73

对于图 $\Gamma=(V,E)$（定义见 2.1 节题 6），令 $m_x=\{y\in V:y\sim x\}$ 为与顶点 $x$ 相邻的顶点个数。假设对任一顶点 $x\in V$，$m_x<\infty$（称图是局部有限的）。令 $l^2(\Gamma)$ 为 Hilbert 空间：

$$l^2(\Gamma)=\left\{f\text{ 是 }V\text{ 上复值函数}:\|f\|^2=\sum_{x\in V}m_x|f(x)|^2<\infty\right\},$$

对于 $V$ 上函数 $f$，定义离散 Laplace（拉普拉斯）算子 $\Delta$ 为

$$(\Delta f)(x)=\frac1{m_x}\sum_{y\in V:x\sim y}(f(y)-f(x)).$$

(i) 设 $c_c(V)$ 是只在有限个顶点取值非零的复值函数全体。证明：$c_c(V)$ 在 $l^2(\Gamma)$ 中稠密。

(ii) 证明：$\Delta$ 是 $l^2(\Gamma)$ 上的有界算子。

**习题 10** @73

设 $X=L^2[a,b]$。取 $x\in L^\infty[a,b]$，作 $X\to X$ 的线性算子如下：

$$M_x:\ f(x)\mapsto x(t)f(t),\qquad\forall f\in L^2[a,b].$$

求 $M_x$ 的算子范数，并证明 $M_x$ 是 Hilbert 空间 $X$ 上的投影算子当且仅当存在 Lebesgue 可测集 $E$ 使得 $x\stackrel{m}{=}\chi_E$。

### 2.2 有界线性泛函（p74–81）

#### 线性泛函 @74

**定义 (对偶空间)** @74

对于赋范线性空间 $X$，全体有界线性泛函 $\mathfrak{B}(X,\mathbb{K})$ 简记为 $X^*$，称为 $X$ 的**对偶空间**。由 $\mathbb{K}$ 的完备性可得 $X^*$ 是一个 Banach 空间。这时，对于 $f\in X^*$，$$\|f\|=\sup_{x\neq 0}\frac{|f(x)|}{\|x\|}=\sup_{\|x\|=1}|f(x)|=\sup_{\|x\|<1}|f(x)|.\tag{2.8}$$

**例 2.2.1 (线性泛函的核)** @74

（i）$n$ 维线性空间 $\mathbb{R}^n$ 上线性泛函 $f(x)=\sum\limits_{i=1}^{n}a_ix_i$（$\forall x=(x_1,x_2,\cdots,x_n)\in\mathbb{R}^n$），其中 $a=(a_1,a_2,\cdots,a_n)\in\mathbb{R}^n$，则$$\ker f=\left\{x:\ \sum_{i=1}^{n}a_ix_i=0\right\},$$即 $\mathbb{R}^n$ 中的超平面。

（ii）空间 $C[0,1]$ 上的线性泛函 $f(\varphi)=\int_0^1\varphi(t)\,\mathrm{d}t$（$\varphi\in C[0,1]$），它的核是$$\ker f=\left\{\varphi\in C[0,1]:\ \int_0^1\varphi(t)\,\mathrm{d}t=0\right\}.$$

（iii）空间 $C[0,1]$ 上的线性泛函 $\delta_0(\varphi)=\varphi(0)$（$\varphi\in C[0,1]$），它的核是$$\ker\delta_0=\{\varphi\in C[0,1]:\varphi(0)=0\}.$$

（iv）设 $1\leqslant q\leqslant\infty$，$\dfrac{1}{q}+\dfrac{1}{p}=1$。对于 $\phi\in L^q[a,b]$，令$$F_\phi(\varphi)=\int_{[a,b]}\varphi(t)\overline{\phi(t)}\,\mathrm{d}t,$$由 Hölder 不等式，$F_\phi$ 为 $L^p[0,1]$ 上的有界线性泛函，且 $\|F_\phi\|=\|\phi\|_q$。它的核$$\ker F_\phi=\left\{\varphi\in L^p[0,1]:\ \int_0^1\varphi(t)\overline{\phi(t)}\,\mathrm{d}t=0\right\}.$$

（v）对于 Hilbert 空间 $H$ 中一元素 $x$，令$$F_x(y)=\langle y,x\rangle,\qquad \forall y\in H.$$由 Cauchy–Schwarz 不等式，我们有 $|\langle y,x\rangle|\leqslant\|x\|\|y\|$，并且当 $x=y$ 时等号成立。故 $F_x\in H^*$ 且 $\|F_x\|=\|x\|$。它的核$$\ker F_x=\{x\}^{\perp}.$$

线性泛函的很多性质都由它的核决定。

**命题 (非零线性泛函的核)** @75

设 $f$ 是线性空间 $V$ 上的非零线性泛函，那么 $f$ 的核 $\ker f$ 的余维数是 $1$。

反之，设 $V'$ 是 $V$ 的余维数为 $1$ 的线性子空间（即商空间 $V/V'$ 的维数等于 $1$，注意 $V'$ 不一定是闭的），则存在 $V$ 上的线性泛函 $f$ 使得 $\ker f=V'$。

**定义 2.2.1 (超平面)** @75

设 $f$ 是线性空间 $V$ 上非零的线性泛函，$c$ 是给定常数，集合$$M_c=\{x:f(x)=c,\ x\in V\}$$称为 $V$ 中的一个**超平面**。它决定的半空间 $\{x:f(x)\geqslant c\}$ 与 $\{x:f(x)\leqslant c\}$ 称为**闭半平面**；$\{x:f(x)>c\}$ 与 $\{x:f(x)<c\}$ 称为**开半平面**。

任取一个 $y_0\in V$ 使得 $f(y_0)=c$，则 $M_c=y_0+\ker f$。

如果 $V'$ 是线性空间 $V$ 中余维数为 $1$ 的子空间，则 $y_0+V'$，$y_0\in V$ 是超平面。事实上，取非零线性泛函 $f$ 使得 $\ker f=V'$。如果 $y_0\in V'$，则 $y_0+V'=M_0$；如果 $y_0\notin V'$，令 $f(y_0)=c$，则 $y_0+V'=M_c$。

**定理 2.2.1 (泛函有界等价核闭)** @75

设 $f$ 是赋范线性空间 $X$ 上的线性泛函，则 $f$ 有界的充要条件是 $\ker f$ 是闭的。

#### Hilbert 空间上连续线性泛函 @76

**定义 2.2.2 (保范算子与同构)** @76

设 $X,Y$ 是两个赋范线性空间，$U$ 是 $X$ 到 $Y$ 的映射。

（i）如果对一切 $x\in X$，有 $\|Ux\|=\|x\|$，那么称 $U$ 是 $X$ 到 $Y$ 的**保范算子**。

（ii）如果 $U$ 不但是保范的，又是线性的，而且还实现 $X$ 到 $Y$ 上的一一对应，那么我们就称 $U$ 是 $X$ 到 $Y$ 上的（保范）**同构映射**。

（iii）若空间 $X,Y$ 之间存在一个从 $X$ 到 $Y$ 上的（保范）同构映射，就称 $X$ 和 $Y$ **同构**，记为 $X\cong Y$。

如果$$U:X\to Y$$是 $X$ 到 $Y$ 的一个同构，我们把 $x$ 与 $Ux$ 同一化（即把 $x$ 与 $Ux$ 视为同一的），那么就可以把 $X$ 和 $Y$ 同一化而不加区别。

在泛函分析中，常把两个同构的空间同一化，这是泛函分析中一个基本的观念。

**命题 (由向量导出的有界线性泛函)** @76

设 $H$ 是一个 Hilbert 空间，任意取 $H$ 中一个固定向量 $y$，可以在 $H$ 上作泛函 $F_y$ 如下：$$F_y(x)=\langle x,y\rangle,\qquad \forall x\in H,\tag{2.9}$$则 $F_y\in H^*$ 且 $\|F_y\|=\|y\|$。我们称 $F_y$ 是向量 $y$ **导出的有界线性泛函**。

**定理 2.2.2 (F. Riesz)** @77

设 $H$ 是 Hilbert 空间，$F$ 是 $H$ 上的连续线性泛函，那么存在唯一的向量 $y\in H$，使得$$F(x)=\langle x,y\rangle,\qquad \forall x\in H\tag{2.10}$$并且 $\|F\|=\|y\|$。

**命题 (Hilbert 空间与其对偶空间的共轭同构)** @77

作 Hilbert 空间 $H$ 到它的对偶空间 $H^*$ 的映射 $U$ 如下：$$U:y\mapsto F_y,$$其中 $F_y$ 是由等式（2.9）规定的泛函。那么由 F. Riesz 定理 2.2.2，$U$ 是 $H$ 到 $H^*$ 上的一一对应。

当 $H$ 是复空间时，映射 $U$ 是共轭线性的，即$$U(\alpha x+\beta y)=\overline{\alpha}U(x)+\overline{\beta}U(y),\qquad x,y\in H,\ \alpha,\beta\in\mathbb{C}.$$此外，映射 $U$ 保持范数不变。

总之，对于复空间，映射 $U$ 是 $H$ 到 $H^*$ 上的一一对应，共轭线性的，而且保持范数不变，这时映射 $U$ 不是 $H$ 到 $H^*$ 之间的保范线性同构，而称为"复共轭"保范线性同构。在这种同构方式下，今后我们将把 $y$ 和 $F_y$ 看成一致的，即把向量 $y$ 看成泛函 $F_y$，把泛函 $F_y$ 看成向量 $y$。这样，$H$ 和 $H^*$ 就同一化了。

#### $l^p$ 上连续线性泛函 @77

**定理 2.2.3 (F. Riesz)** @77

设 $1\leqslant p<\infty$，$\dfrac{1}{p}+\dfrac{1}{q}=1$。若 $f$ 是 $l^p$ 上的连续线性泛函，那么存在唯一的向量 $\eta\in l^q$，使得$$f(x)=\sum_{\nu=1}^{\infty}x_\nu\eta_\nu,\qquad \forall x\in l^p,$$并且 $\|f\|=\|\eta\|_q$。故此，$(l^p)^*\cong l^q$。

**注 (对偶空间的例子)** @78

特别地，我们有 $(l^2)^*\cong l^2$。用类似的方法也可以证明 $c_0^*\cong l^1$。

**定义 2.2.3 (共轭双线性泛函与 Hermite 泛函)** @78

设 $H$ 是内积空间，$\varphi(x,y)$ 是 $H$ 上的二元泛函。

（i）如果对于任何 $x,y,z\in H$ 及 $\alpha,\beta\in\mathbb{C}$，都成立$$\varphi(\alpha x+\beta y,z)=\alpha\varphi(x,z)+\beta\varphi(y,z),$$$$\varphi(z,\alpha x+\beta y)=\overline{\alpha}\varphi(z,x)+\overline{\beta}\varphi(z,y),$$那么称 $\varphi(\cdot,\cdot)$ 是 $H$ 上的**共轭双线性泛函**。

（ii）如果对任何 $x,y\in H$ 成立 $\varphi(x,y)=\overline{\varphi(y,x)}$，那么称 $\varphi(x,y)$ 是 $H$ 上的 **Hermite 泛函**。

（iii）对共轭双线性泛函 $\varphi$，如果有正常数 $c$ 使得$$|\varphi(x,y)|\leqslant c\|x\|\|y\|,\qquad \forall x,y\in H,$$那么称 $\varphi$ 是 $H$ 上**有界的**共轭双线性泛函，$\|\varphi\|=\sup\limits_{\|x\|=\|y\|=1}|\varphi(x,y)|$ 称为泛函 $\varphi$ 的**范数**。

**例 2.2.2 (算子导出的双线性泛函)** @79

设 $T$ 是 $H$ 上的线性算子，则 $T$ 导出的泛函 $\varphi(x,y)=\langle Tx,y\rangle$ 是共轭双线性泛函。如果 $T$ 还是有界的，那么 $\varphi$ 也是有界的共轭双线性泛函且 $\|\varphi\|=\|T\|$。

**定理 2.2.4 (共轭双线性泛函表示)** @79

设 $H$ 是 Hilbert 空间，$\varphi(\cdot,\cdot)$ 是 $H$ 上有界的共轭双线性泛函，那么存在 $H$ 上唯一的有界线性算子 $T$，使得 $\varphi$ 是由 $T$ 导出的共轭双线性泛函。

由此可见，Hilbert 空间上的共轭双线性有界泛函相当于有界线性算子。

**定理 2.2.5 (埃尔米特泛函判据)** @79

设 $H$ 是复 Hilbert 空间，$\varphi(\cdot,\cdot)$ 是 $H$ 上共轭双线性泛函。那么，$\varphi$ 是 Hermite 泛函的充要条件是 $\varphi(x,x)$ 对一切 $x\in H$ 都是实数。

**定理 2.2.6 (埃尔米特泛函有界性)** @80

设 $\varphi(\cdot,\cdot)$ 是复 Hilbert 空间 $H$ 上的共轭双线性 Hermite 泛函，且存在常数 $c$ 使得$$|\varphi(x,x)|\leqslant c\|x\|^2,\qquad \forall x\in H,\tag{2.13}$$那么 $\varphi$ 是有界的，且 $\|\varphi\|\leqslant c$。

**推论 (Hermite 算子的范数)** @80

对复 Hilbert 空间 $H$ 上的有界线性算子 $T$，若对任何 $x\in H$，$\langle Tx,x\rangle$ 都是实数，则称 $T$ 是 **Hermite 算子**。那么上述结果即为：$H$ 上有界的共轭双线性 Hermite 泛函 $\varphi(\cdot,\cdot)$ 都是由一个 Hermite 算子诱导的。并且，对于复 Hilbert 空间上的 Hermite 算子 $T$，$$\|T\|=\sup_{\|x\|=1}|\langle Tx,x\rangle|.$$

#### 习题（p80–82）

**习题 1** @80

对例 2.2.1(iv)，证明 $\|F_\phi\|=\|\phi\|_q$。

**习题 2** @80

设 $X$ 是赋范线性空间，$f$ 是 $X$ 上的无界线性泛函。证明：$\ker f=\{x:f(x)=0\}$ 在 $X$ 中稠密。这样的无界线性泛函存在吗？

**习题 3** @80

对线性空间 $L$ 上的线性泛函 $f,f_1,f_2,\cdots,f_n$，假设由 $f_1(x)=0,f_2(x)=0,\cdots,f_n(x)=0$ 可推得 $f(x)=0$。证明：存在常数 $a_1,a_2,\cdots,a_n$，使得 $f=\sum_{k=1}^n a_k f_k$。

**习题 4** @80

证明：$(l^1)^*=l^\infty$。

**习题 5** @80

(i) $c$ 是收敛数列 $x=\{x_n\}$ 的全体在范数 $\|x\|=\sup_{n\geqslant1}|x_n|$ 下的 Banach 空间。证明：

$$c^*=\{\eta+\alpha f_0:\eta\in l^1,\alpha\text{ 是数}\},$$

其中 $f_0(x)=\lim_{n\to\infty}x_n$，$\forall x\in c$。即：对于任意的 $f\in c^*$，都存在 $\eta\in l^1$ 以及数 $\alpha$，使得

$$f(x)=\sum_{n=1}^\infty x_n\eta_n+\alpha f_0(x),\qquad\forall x\in c,$$

且 $\|f\|=\|\eta\|_1+|\alpha|$。

(ii) $c_0$ 是极限为 $0$ 的数列 $x=\{x_n\}$ 的全体在范数 $\|x\|=\sup_{n\geqslant1}|x_n|$ 下的 Banach 空间。证明：$c_0^*=l^1$。

这说明 $c^*$ 与 $c_0^*$ 是 Banach 空间同构的。

**习题 6 (Bergman 再生核)** @81

由 1.3 节习题 6，开单位圆盘 $\mathbb{D}$ 上的 Bergman 空间 $L_a^2(\mathbb{D})$ 定义为

$$L_a^2(\mathbb{D})=\left\{f:f\text{ 在 }\mathbb{D}\text{ 中解析，并且 }\frac1\pi\int_{\mathbb{D}}|f(z)|^2\,\mathrm{d}A(z)<\infty\right\}.$$

(i) 对任意 $z\in\mathbb{D}$，证明：$f\mapsto f(z)$ 是一个有界线性泛函。

(ii) 任取 $L_a^2(\mathbb{D})$ 中的完备标准正交系 $e_n(z)$（$n=1,2,\cdots$），证明当 $|z|<1,|w|<1$ 时，

$$\sum_{n=1}^\infty e_n(z)\overline{e_n(w)}=\frac1{(1-z\overline w)^2}.$$

函数 $K(z,w)=\frac1{(1-z\overline w)^2}$ 被称为 Bergman 空间的再生核函数。

(iii) 证明：对任意两两不同的 $z_1,z_2,\cdots,z_n\in\mathbb{D}$，和不全为零的复数 $\alpha_1,\alpha_2,\cdots,\alpha_n$，成立

$$\sum_{i,j=1}^n\alpha_i\overline{\alpha_j}K(z_i,z_j)>0.$$

**习题 7** @81

令 $L^2(\mathbb{R},\mathrm{e}^{-t^2}\mathrm{d}t)$ 为 Hilbert 空间：

$$L^2(\mathbb{R},\mathrm{e}^{-t^2}\mathrm{d}t)\overset{\mathrm{def}}{=}\left\{f\text{ 在 }\mathbb{R}\text{ 上 Lebesgue 可测}:\|f\|_2=\left(\int_{\mathbb{R}}|f(t)|^2\mathrm{e}^{-t^2}\mathrm{d}t\right)^{1/2}<+\infty\right\}.$$

证明：多项式全体在 $L^2(\mathbb{R},\mathrm{e}^{-t^2}\mathrm{d}t)$ 中稠密。

**习题 8** @81

设 $\mathcal{R}$ 是集合 $X$ 上的一个 $\sigma$-代数，$\mu$ 是可测空间 $(X,\mathcal{R})$ 上的 $\sigma$-有限测度，$\nu$ 是 $(X,\mathcal{R})$ 上的一个全有限测度。令 $\pi=\mu+\nu$，定义泛函 $\tau_\nu:L^2(X,\pi)\to\mathbb{R}$ 为

$$\tau_\nu(f)=\int_X f\,\mathrm{d}\nu.$$

(i) 证明：$\tau_\nu$ 是 Hilbert 空间 $L^2(X,\pi)$ 上的有界线性泛函；

(ii) 证明 Radon-Nikodym-Lebesgue（拉东-尼科迪姆-勒贝格）定理：存在非负可测函数 $f\in L^1(X,\mu)$，以及可测集 $B\in\mathcal{R}$，$\mu(B)=0$，使得

$$\nu(A)=\int_A f\,\mathrm{d}\mu+\nu(A\cap B).$$

**习题 9** @81

证明：Hilbert 空间 $H$ 上共轭双线性泛函 $\varphi(\cdot,\cdot)$ 有界的充要条件是 $\varphi$ 是 $H$ 上二元连续函数（即当 $x_n\to0,y_n\to0$ 时，$\varphi(x_n,y_n)\to0$）。

**习题 10** @81

设 $\varphi(\cdot,\cdot)$ 是实 Hilbert 空间 $H$ 上的共轭双线性泛函。如果

$$\sup_{\|x\|=1}|\varphi(x,x)|<\infty,$$

问 $\varphi$ 是否为有界的？并说明理由。

**习题 11** @82

设 $\varphi(\cdot,\cdot)$ 是复 Hilbert 空间 $H$ 上的共轭双线性泛函。如果对一切 $x\in H$，$\varphi(x,x)$ 的实部 $\operatorname{Re}\varphi(x,x)=0$，问是否成立等式：

$$\sup_{\|x\|=1,\|y\|=1}|\varphi(x,y)|=\sup_{\|x\|=1}|\varphi(x,x)|?$$

**习题 12 (Lax-Milgram（拉克斯-米尔格拉姆）定理)** @82

设 $\phi(x,y)$ 是 Hilbert 空间 $H$ 上的一个共轭双线性泛函，且满足下面两个条件：

(1) 连续性：存在 $M>0$，使得 $|\phi(x,y)|\leqslant M\|x\|\|y\|$，$\forall x,y\in H$；

(2) 强制性：存在 $c>0$，使得 $|\phi(x,x)|\geqslant c\|x\|^2$。

则对任意 $f\in H^*$，存在唯一 $y_f\in H$，使得 $\phi(x,y_f)=f(x)$。

### 2.3 Hahn-Banach 延拓定理（p82–88）

**定义 2.3.1 (延拓)** @82

设 $L$ 是实线性空间，$L_0$ 是它的线性子空间，又设在子空间 $L_0$ 上给定一线性泛函 $f_0$。在全空间 $L$ 上定义的线性泛函 $f$ 叫做泛函 $f_0$ 的**延拓**，如果$$f(x)=f_0(x),\qquad \forall x\in L_0.$$

**定理 2.3.1 (Hahn–Banach)** @82

设 $L_0$ 是实赋范线性空间 $L$ 的线性子空间。若 $f_0$ 是 $L_0$ 上的有界线性泛函，则存在 $L$ 上的有界线性泛函 $f$，$f|_{L_0}=f_0$，且 $\|f\|=\|f_0\|$。

**例 2.3.1 (保范延拓的例子)** @82

设 $X=\mathbb{R}^2$，$X$ 中点 $x=(x_1,x_2)$ 的范数规定为 $\|x\|=|x_1|+|x_2|$。又设 $G=\{(x_1,0):x_1\in\mathbb{R}\}$，$f$ 是定义在 $G$ 上的泛函：$f((x_1,0))=x_1$。显然 $f$ 是 $G$ 上连续线性泛函，且 $\|f\|_G=1$。对任何数 $\beta$，$X$ 上的连续线性泛函 $F((x_1,x_2))=x_1+\beta x_2$ 都是 $f$ 的延拓，并且$$|F((x_1,x_2))|=|x_1+\beta x_2|\leqslant\max\{1,|\beta|\}\,\|(x_1,x_2)\|.$$所以只要 $|\beta|\leqslant 1$，$F$ 都是 $f$ 的保持范数不变的延拓。

**注 2.3.1 (不保范的平凡延拓)** @83

如果不需要保持范数的要求，延拓子空间上泛函是平凡的。考虑 $L_0$ 的一组 Hamel 基 $\{y_\lambda\}_{\lambda\in\Lambda}$，把它扩充为 $L$ 上的一组 Hamel 基，在扩充的基元素上确定 $f$ 的取值就得到 $f_0$ 的延拓。

**定义 (次线性函数)** @83

线性空间 $L$ 上的泛函 $p:L\to\mathbb{R}$ 称为**次线性函数**（sublinear functional），若$$p(x+y)\leqslant p(x)+p(y),\qquad \forall x,y\in L;$$$$p(tx)=tp(x),\qquad \forall x\in L,\ t\geqslant 0.$$

**例 2.3.2 (次线性泛函的例子)** @83

显然，$p(\{a_n\})=\varlimsup\limits_{n\to\infty}\operatorname{Re}a_n$ 是 $l^\infty$ 上的次线性泛函，其中 $\operatorname{Re}a_n$ 代表 $a_n$ 的实部。而 $p(f)=|f(0)|$ 是 $C[0,1]$ 上的次线性函数，实际上它还是个半范数。

**定理 2.3.2 (Hahn–Banach)** @83

设 $p$ 是定义在实线性空间 $L$ 上的次线性函数，$L_0$ 是 $L$ 的线性子空间。如果 $f_0$ 是 $L_0$ 上的线性泛函，满足$$f_0(x)\leqslant p(x),\qquad \forall x\in L_0 \tag{2.14}$$（满足这个条件的泛函 $f_0$ 称为**从属于**泛函 $p$），则 $f_0$ 可以延拓为 $L$ 上的线性泛函 $f$，并且 $f$ 在全空间 $L$ 上从属于 $p$。

**注 (实线性泛函与复线性泛函的关系)** @84

设 $f$ 是复线性空间 $L$ 上的实线性泛函，记 $f_R=\operatorname{Re}f$ 是 $f$ 的实部，$f_I=\operatorname{Im}f$ 是 $f$ 的虚部，则 $f$ 是复线性泛函当且仅当$$f_I(\mathrm{i}x)=f_R(x)$$成立，这也等价于 $f_R(\mathrm{i}x)=-f_I(x)$ 成立。

**定理 2.3.3 (Hahn–Banach)** @84

设 $L_0$ 是复线性空间 $L$ 的子空间，$p$ 是复线性空间 $L$ 上的半范数，$f_0$ 是子空间 $L_0$ 上的线性泛函，且在 $L_0$ 上满足条件$$|f_0(x)|\leqslant p(x),\qquad \forall x\in L_0,$$则存在定义在全空间 $L$ 上的线性泛函 $f$ 满足如下条件：$$|f(x)|\leqslant p(x),\ \ \forall x\in L;\qquad \text{并且}\qquad f(x)=f_0(x),\ \ \forall x\in L_0.$$

**推论 2.3.1 (存在保范泛函)** @85

对赋范线性空间 $X$ 中的非零元素 $x_0$，存在 $f\in X^*$ 使得 $\|f\|=1$ 且 $f(x_0)=\|x_0\|$。

**推论 2.3.2 (对偶空间分离点)** @85

对赋范线性空间 $X$ 中两个不同元素 $x_1,x_2$，存在 $f\in X^*$ 使得 $f(x_1)\neq f(x_2)$。

这个推论说明 $X^*$ 分离 $X$ 中的点。

**推论 2.3.3 (范数的对偶表示)** @86

对赋范线性空间 $X$ 中的元素 $x$，我们有$$\|x\|=\max_{\|f\|=1}|f(x)|.$$

**推论 2.3.4 (分离闭子空间与点)** @86

设 $M$ 是赋范线性空间 $(X,\|\cdot\|)$ 的闭线性子空间，$x\notin M$，则存在 $f\in X^*$ 使得$$\|f\|=1,\qquad f(M)=0,\qquad f(x)=d(x,M).$$

这个推论说明 $X^*$ 也可以用来分离 $X$ 中的闭线性子空间和点。

**推论 2.3.5 (零化子刻画闭包)** @86

设 $M$ 为赋范线性空间 $(X,\|\cdot\|)$ 中一个子集，则元素 $x\in\overline{\operatorname{span}}M$ 当且仅当对任意满足 $f(M)=0$ 的线性泛函 $f\in X^*$，有 $f(x)=0$。

#### 线性泛函的零化子 @86

**定义 2.3.2 (零化子与预零化子)** @86

对于赋范线性空间 $X$ 的子集 $M$，定义 $M$ 的**零化子**为$$M^{\perp}=\{f\in X^*:\ f(x)=0,\ \forall x\in M\}; \tag{2.18}$$对于对偶空间 $X^*$ 的子集 $N$，定义 $N$ 的**预零化子**为$${}^{\perp}N=\{x\in X:\ f(x)=0,\ \forall f\in N\}. \tag{2.19}$$显然 $M^{\perp}$ 是 $X^*$ 的闭线性子空间，${}^{\perp}N$ 是 $X$ 的闭线性子空间。零化子和预零化子可以视为正交补空间在 Banach 空间情形的推广。

**定理 2.3.4 (商空间与对偶同构)** @86

设 $M$ 是赋范线性空间 $X$ 的闭线性子空间。

（i）对于任一 $m^*\in M^*$，定义$$\sigma(m^*)=[x^*],$$这里 $x^*$ 是 $m^*$ 在 $X$ 上的一个保范延拓，$[x^*]$ 是 $x^*$ 在商空间 $X^*/M^{\perp}$ 中的等价类。则映射 $\sigma:M^*\to X^*/M^{\perp}$ 是一个良定义的保范同构。

（ii）令 $\pi:x\to[x]$ 是 $X$ 到 $X/M$ 的商映射。对 $f\in(X/M)^*$，定义$$\tau(f)=f\circ\pi.$$则 $\tau$ 是 $(X/M)^*$ 到 $M^{\perp}$ 的一个保范同构。

#### 习题（p87–89）

**习题 1** @87

设 $E$ 是赋范线性空间，$x_1,x_2,\cdots,x_k\in E$，$\alpha_1,\alpha_2,\cdots,\alpha_k$ 是一组数，证明：在 $E$ 上存在线性泛函 $f$，使得 $f(x_\nu)=a_\nu$，$\nu=1,2,\cdots,k$，且 $\|f\|\leqslant M$ 的充要条件是：对于任意的一组数 $t_1,t_2,\cdots,t_k$，成立

$$\left|\sum_{\nu=1}^k t_\nu a_\nu\right|\leqslant M\left\|\sum_{\nu=1}^k t_\nu x_\nu\right\|.$$

**习题 2** @87

设 $\{x_\alpha:\alpha\in\Lambda\}$，$\{f_\alpha:\alpha\in\Lambda\}$ 分别是赋范线性空间 $X$ 与 $X^*$ 中的两族向量。若满足 $f_\alpha(x_\beta)=\delta_{\alpha\beta}$，$\alpha,\beta\in\Lambda$，则称 $\{x_\alpha\}$ 和 $\{f_\alpha\}$ 是对偶族。证明：

(i) 当 $\{x_\alpha\},\{f_\alpha\}$ 是对偶族时，$\{x_\alpha\},\{f_\alpha\}$ 必分别是 $X$ 和 $X^*$ 中的线性无关组。

(ii) 若 $\{x_\alpha\}$ 满足：$x_\alpha\notin\overline{\operatorname{span}}\{x_\beta\}_{\beta\neq\alpha}$，$\alpha\in\Lambda$，则必存在 $\{f_\alpha\}$，使得 $\{x_\alpha\},\{f_\alpha\}$ 是对偶族。

(iii) 在 $X$ 是线性空间的情况下，对任何一族线性无关向量 $\{x_\alpha\}$，必存在一族相应的线性泛函 $\{f_\alpha\}$，使得 $f_\alpha(x_\beta)=\delta_{\alpha\beta}$，并且 $\{f_\alpha\}$ 必也是线性无关的。

**习题 3** @87

(i) 设 $X,Y$ 是两个赋范线性空间，在 $X\times Y$ 上定义 $\|(x,y)\|=\max(\|x\|,\|y\|)$。证明：对于任意的 $F\in(X\times Y)^*$，必定存在唯一的一对 $f\in X^*$，$g\in Y^*$，使得 $F(x,y)=f(x)+g(y)$。如果在 $X^*\times Y^*$ 上定义 $\|(f,g)\|=\|f\|+\|g\|$，那么 $F\mapsto(f,g)$ 的映射是 $(X\times Y)^*$ 到 $X^*\times Y^*$ 的保范线性同构。

(ii) 设 $\|\cdot\|_1,\|\cdot\|_2$ 是线性空间 $X$ 上的两个范数，记 $(X,\|\cdot\|_i)$（$i=1,2$）的对偶空间为 $X_i^*$，并在 $X$ 上赋范数 $\|\cdot\|=(\|x\|_1^2+\|x\|_2^2)^{1/2}$。证明：$F\in(X,\|\cdot\|)^*$ 的充要条件是存在 $f_i\in X_i^*$，使得 $F=f_1+f_2$。

**习题 4** @88

对于赋范线性空间 $X$，证明：$X$ 是无穷维空间当且仅当 $X^*$ 是无穷维空间。

**习题 5** @88

设 $X,Y$ 是两个赋范线性空间。证明：若 $X\neq\{0\}$，并且 $\mathfrak{B}(X,Y)$ 是 Banach 空间，则 $Y$ 必是 Banach 空间。

**习题 6** @88

设 $L$ 是赋范线性空间 $X$ 的子空间，$T\in\mathfrak{B}(L,l^\infty)$，证明：存在线性延拓 $\widetilde T\in\mathfrak{B}(X,l^\infty)$，使得 $\widetilde T|_L=T$ 且 $\|T\|=\|\widetilde T\|$。

**习题 7** @88

若 $E$ 是赋范线性空间 $X$ 中的有限维子空间，证明：存在闭线性子空间 $L$，使得 $L\cap E=\{0\}$ 且 $X=L+E$。

**习题 8** @88

证明定理 2.3.4 中 (ii)。

**习题 9 (Banach 极限)** @88

证明：在有界数列空间 $l^\infty$ 上存在如下线性泛函 $F$：对于任意的 $\{a_n\},\{b_n\}\in l^\infty$，

(i) $F(\{a_n\})=F(\{a_{n+1}\})$。

(ii) 若 $a_n\geqslant0$，$n=1,2,\cdots$，则 $F(\{a_n\})\geqslant0$。

(iii) $F(\alpha\{a_n\}+\beta\{b_n\})=\alpha F(\{a_n\})+\beta F(\{b_n\})$，$\alpha,\beta$ 是数。

(iv) 若 $\{a_n\}$ 是实数列，则 $\liminf_{n\to\infty}a_n\leqslant F(\{a_n\})\leqslant\limsup_{n\to\infty}a_n$。

(v) 若 $\lim_{n\to\infty}a_n$ 存在，则 $F(\{a_n\})=\lim_{n\to\infty}a_n$。

一般称 $F(\{a_n\})$ 为 $\{a_n\}$ 的 Banach 极限，记作 $\operatorname{Lim}\{a_n\}$。

**习题 10** @88

证明：$l^\infty$ 中的序列

$$y=(1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,\cdots)$$

的 Banach 极限 $\operatorname{Lim}y$（见第 9 题）可以取到不同的值。

**习题 11** @88

对于任意的 $\alpha=(\alpha_1,\alpha_2,\cdots)\in l^1$，证明：

$$f(x)=\sum_{n=1}^\infty x_n\alpha_n,\qquad\forall x=(x_1,x_2,\cdots)\in l^\infty$$

给出了 $l^\infty$ 上的一个连续线性泛函。举例说明 $l^\infty$ 上存在连续线性泛函不能表示成上述形式。

**习题 12 (Green（格林）函数)** @88

令 $\Delta=\frac{\partial^2}{\partial x^2}+\frac{\partial^2}{\partial y^2}$。设 $\Omega$ 是平面上有界开区域，它的边界 $\partial\Omega$ 是光滑的。对于带有 Dirichlet（狄利克雷）边界值条件的 Laplace 方程

$$\begin{cases}\Delta u(x)=0,\ x\in\Omega,\\u|_{\partial\Omega}=f,\end{cases}$$

一个重要的解法是寻找 $\overline\Omega$ 上的一类 Green 函数 $G(x,y)$，使得

$$\int_\Omega h(x)G(x,y)\,\mathrm{d}m(x)=h(y);\quad G(x,y)=0,\quad\forall y\in\partial\Omega.$$

令 $\mathcal{B}=C(\partial D)$ 是 $\partial D$ 上连续函数全体。设 $\mathcal{B}_0=\{g\in\mathcal{B}:\Delta u(x)=0,u|_{\partial\Omega}=g\text{ 有解}\}$，由调和函数的极大模定理容易得到，对于 $g\in\mathcal{B}_0$ 解 $u$ 是唯一的。对于 $P\in\Omega$，定义 $\mathcal{B}_0$ 上的线性泛函 $l_P$ 如下：

$$l_P(g)=u(P),$$

这里 $u$ 是边值为 $g$ 的调和函数。

(i) 证明：$l_P$ 是一个有界线性泛函，计算其范数。

(ii) 证明：$l_P$ 可以保范地延拓到整个 $\mathcal{B}$ 上。

我们仍然用 $l_P$ 来表示这个延拓。对任意一点 $(a,b)\notin\partial\Omega$，考虑 $\mathcal{B}$ 中的函数

$$\psi_{(a,b)}(x,y)=\ln|d((a,b),(x,y))|.$$

这里 $d((a,b),(x,y))=\sqrt{(a-x)^2+(b-y)^2}$ 为 Euclid 空间度量。

(iii) 证明：$\psi$ 关于变量 $(a,b)$ 满足 Laplace 方程 $\frac{\partial^2\psi_{(a,b)}}{\partial a^2}+\frac{\partial^2\psi_{(a,b)}}{\partial b^2}=0$。

(iv) 令 $k_P((a,b))=\frac1{2\pi}l_P(\psi_{(a,b)})$。证明：$k_P((a,b))$ 在 $\partial\Omega$ 的补集上是调和函数。

(v) 当 $(a,b)\notin\overline\Omega$ 即在 $\Omega$ 外时，计算 $k_P((a,b))$。

对于 $\Omega$ 中离边界足够近的点 $Q=(a,b)$，我们承认，$Q$ 关于边界上到它最近的那一点处的切线的对称点 $Q'$ 在 $\Omega$ 外。且当 $Q$ 到边界的距离趋于 $0$ 时，

$$\frac{d(z,Q)}{d(z,Q')}$$

在 $z\in\partial\Omega$ 上是一致趋于 $1$ 的（这一结论来自边界 $\partial\Omega$ 是光滑的）。

(vi) 证明：当 $Q$ 到边界的距离趋于 $0$ 时，$\|\psi_Q-\psi_{Q'}\|$ 趋于 $0$，且 $k_P(Q)-k_P(Q')$ 趋于 $0$。

(vii) 证明：$k_P(Q)$ 是一个 $\Omega$ 上的调和函数，且在 $\overline\Omega$ 上连续，在边界上的值为 $\frac1{2\pi}\ln d(P,Q)$。

实际上，由边界的光滑性我们能得到 $k_P(Q)$ 在 $\overline\Omega$ 上二阶连续可微。记 $g_0(P,Q)=k_P(Q)$，令

$$G(P,Q)=-\frac1{2\pi}\ln d(P,Q)+g_0(P,Q).$$

(viii) 若 $h$ 在 $\overline\Omega$ 上二阶连续可微，在 $\Omega$ 内 $\Delta h=0$，证明：$h(P)=\int_{\partial\Omega}h(Q)\frac{\partial G(P,Q)}{\partial n}\,\mathrm{d}Q$（$\forall P\in\Omega$），其中 $\frac{\partial G}{\partial n}$ 是沿外法线方向的方向导数。

**习题 13*** @89

是否存在 $L^\infty(\mathbb{R})$ 上的一个泛函 $f\mapsto M(f)$，满足

(i) 如果 $f$ 是非负的，那么 $M(f)\geqslant0$。

(ii) 如果 $f\equiv1$，那么 $M(f)=1$。

(iii) 如果 $g(x)=f(x+1)$，那么 $M(g)=M(f)$。

要是再加上 $M(f(ax))=M(f)$ 的条件呢？

### 2.4 几何形式——凸集分离定理（p89–95）

#### 2.4.1 凸集 @89

**定义 2.4.1 (凸集)** @90

设 $V$ 是线性空间，$M$ 是 $V$ 的一个子集。如果对于任意的 $x,y\in M$，及 $\alpha\in[0,1]$，有 $\alpha x+(1-\alpha)y\in M$，就称 $M$ 是一个**凸集**。

**例 2.4.1 (常见凸集例子)** @90

在三维 Euclid 空间 $\mathbb{R}^3$ 中，线段、平面、三角形、立方体、球、四面体以及半空间等都是凸集。

**例 2.4.2 (凸函数上方图凸)** @90

若 $\varphi$ 是直线 $\mathbb{R}$ 上的凸函数，即

$$\varphi(tx+(1-t)y)\leqslant t\varphi(x)+(1-t)\varphi(y),\qquad \forall x,y\in\mathbb{R},\ t\in(0,1),$$

那么图形 $\{(x,y)\in\mathbb{R}^2:\ y\geqslant\varphi(x)\}$ 是平面中的一个凸集。

**例 2.4.3 (连续函数单位球凸)** @90

$C[a,b]$ 的子集 $A=\{f:\ |f|\leqslant 1\}$ 是凸集。

**例 2.4.4 (加权平方和凸集)** @90

$l^2$ 中的集合

$$A=\left\{x:\ x=(x_1,x_2,\cdots)\in l^2,\ \sum_{n=1}^{\infty}n^2x_n^2\leqslant 1\right\}$$

是凸集。

**例 2.4.5 (凸集内部仍凸)** @90

若 $M$ 是赋范线性空间 $X$ 中的凸子集，则 $M$ 的内部 $M^\circ$ 也是凸的。

**命题 2.4.1 (凸集之交仍凸)** @90

线性空间 $V$ 中的任意多个凸集的交仍是凸集。

**定义 (凸包)** @90

在线性空间 $V$ 中，对于任意的子集 $A$，存在包含它的最小凸集：包含 $A$ 的所有凸集的交是最小凸集。我们称包含 $A$ 的最小凸集为集 $A$ 的**凸包**，记为 $co(A)$。容易验证：

$$co(A)=\left\{\sum\alpha_i x_i:\ x_i\in A,\ \alpha_i\geqslant 0,\ \sum\alpha_i=1,\ \text{其中 } \alpha_i \text{ 有限非零}\right\}.$$

**定义 (单纯形)** @90

当 $x_0,x_1,\cdots,x_n$ 是线性空间 $V$ 中的 $n+1$ 个点，并且向量组 $x_1-x_0,x_2-x_0,\cdots,x_n-x_0$ 线性无关时，则称 $co(x_0,x_1,\cdots,x_n)$ 为 $n$ 维**单纯形**。

#### 2.4.2 Minkowski泛函 @90

**例 2.4.6 (线性泛函绝对值半范数)** @90

设 $f$ 是线性空间 $V$ 上的线性泛函，则 $|f|$ 是半范数。

**例 2.4.7 (二次型半范数)** @90

定义线性空间 $\mathbb{R}^2$ 上的泛函：

$$p(x,y)=\sqrt{ax^2+by^2},\qquad (x,y)\in\mathbb{R}^2,$$

其中 $a,b\geqslant 0$，则 $p(x,y)$ 是 $\mathbb{R}^2$ 上的半范数。

**命题 2.4.2 (半范数单位集性质)** @91

设 $p(x)$ 是线性空间 $V$ 上的半范数，则 $M=\{x\in V:\ p(x)\leqslant 1\}$ 具有下列性质：

（i）$0\in M$；

（ii）$M$ 是凸的：若 $x,y\in M$ 且 $0<\alpha<1$，则 $\alpha x+(1-\alpha)y\in M$；

（iii）$M$ 是均衡的：若 $x\in M$ 且 $|\alpha|=1$，则 $\alpha x\in M$；

（iv）$M$ 是吸收的：对任何 $x\in X$，总存在 $\alpha>0$，使得 $\alpha^{-1}x\in M$；

（v）

$$p(x)=\inf_{\alpha>0,\ \alpha^{-1}x\in M}\alpha.$$

**定义 2.4.2 (Minkowski 泛函)** @91

设 $M$ 是线性空间 $V$ 中吸收的凸集。对于任意的 $x\in V$，定义

$$p_M(x)=\inf_{\alpha>0,\ \alpha^{-1}x\in M}\alpha,$$

称 $p_M$ 为 $M$ 的 **Minkowski 泛函**。

**命题 2.4.3 (闵可夫斯基泛函)** @91

设 $M$ 是线性空间 $V$ 中的一个吸收凸子集，那么 $M$ 的 Minkowski 泛函 $p_M(x)$ 是 $V$ 上的一个次线性函数，并且

$$\{x:\ p_M(x)<1\}\subset M\subset\{x:\ p_M(x)\leqslant 1\}.$$

如果 $M$ 还是均衡的，那么 $p_M(x)$ 是 $V$ 上的一个半范数。

**例 2.4.8 (全空间泛函为零)** @91

当 $M=V$ 时，显然 $p_M(x)=0$。

**例 2.4.9 (球上的闵氏泛函)** @91

设 $M=B(0,r)$ 是 $n$ 维 Euclid 空间 $\mathbb{R}^n$ 中，中心为 $0$、半径为 $r$ 的球，则

$$p_M(x)=\frac{\|x\|}{r}.$$

**例 2.4.10 (坐标半空间泛函)** @92

在空间 $l^2$ 中，设 $M=\{x:\ x=(x_1,x_2,\cdots),\ -1\leqslant x_1\leqslant 1\}$，则

$$p_M(x)=|x_1|.$$

**命题 2.4.4 (闵氏泛函连续性判据)** @92

如果 $L$ 是赋范线性空间，$M$ 是 $L$ 中的一个吸收凸子集，则 $p_M(x)$ 是连续函数当且仅当 $0$ 为 $M$ 的内点。

#### 2.4.3 凸集的分离性 @92

**定义 2.4.3 (分离与严格分离)** @92

设 $V$ 是实线性空间，$M$ 与 $N$ 是它的子集，$f$ 是 $V$ 上的线性泛函。

（i）如果存在常数 $C$，使得

$$f(x)\leqslant C,\quad \forall x\in M;\qquad f(y)\geqslant C,\quad\forall y\in N,$$

即

$$\sup\{f(x):\ x\in M\}\leqslant\inf\{f(x):\ x\in N\},$$

则称线性泛函 $f$ **分离**集 $M$ 与 $N$。

（ii）如果线性泛函 $f$ 满足

$$\sup\{f(x):\ x\in M\}<\inf\{f(x):\ x\in N\},$$

称线性泛函 $f$ **严格分离**集 $M$ 与 $N$。

**命题 (分离性的等价表述)** @92

从分离性定义容易看出以下两个事实：

（i）线性泛函 $f$ 分离集 $M$ 与 $N$ 当且仅当它分离集 $M-N=\{x-y:\ x\in M,\ y\in N\}$ 与 $\{0\}$。

（ii）线性泛函 $f$ 分离集 $M$ 与 $N$ 当且仅当对于每一个 $x\in V$，它分离集 $M-x$ 与 $N-x$。

**引理 2.4.1 (凸集与点的分离)** @93

设 $A$ 是实赋范线性空间 $L$ 中的凸子集，如果 $A$ 的内部 $A^\circ$ 是非空的，并且 $y_0\notin A^\circ$，则 $L$ 上存在非零的连续线性泛函分离 $A$ 与 $\{y_0\}$。

**注 2.4.1 (复空间的实部分离)** @93

对于 $X$ 是复赋范线性空间的情形，通常可用复线性泛函 $f$ 的实部 $\operatorname{Re}f$ 分离集合。例如，上面的结果在复线性空间情形的陈述如下：设 $A$ 是复赋范线性空间 $L$ 中的凸子集，如果 $A^\circ$ 是非空的，并且 $y_0\notin A^\circ$，则 $L$ 上存在非零的连续线性泛函 $f$ 使得

$$\sup_{x\in A}\operatorname{Re}f(x)\leqslant \operatorname{Re}f(y_0).$$

其他的凸集分离结果可作类似的修改。

**注 2.4.2 (开凸集的严格分离)** @93

若 $A$ 是一个开凸子集，$x\notin A$，由上面的证明还可得到

$$f(x)<\sup_{y\in A}f(y)\leqslant f(y_0),\qquad \forall x\in A.$$

**定理 2.4.1 (凸集分离定理)** @93

设 $M$ 与 $N$ 是实赋范线性空间 $L$ 中的凸集，如果 $M$ 的内部 $M^\circ$ 是非空的，并且 $M^\circ\cap N=\varnothing$，则存在 $L$ 上非零的连续线性泛函分离 $M$ 与 $N$。

**推论 2.4.1 (闭凸集的严格分离)** @94

设 $M,N$ 是实赋范线性空间 $L$ 中的闭凸集，$d(M,N)=\inf\limits_{x\in M,\ y\in N}d(x,y)>0$，则存在 $L$ 上的非零连续线性泛函 $f$ 严格分离 $M$ 和 $N$。

**推论 (紧凸集与闭凸集的严格分离)** @94

当 $M$ 是闭凸子集，$N$ 是紧的凸子集（或者单点集），且当 $M\cap N=\varnothing$ 时，显然推论 2.4.1 中的距离条件成立，故存在非零的连续线性泛函严格分离 $M$ 和 $N$。

#### 习题（p94–96）

**习题 1** @94

在 Euclid 空间 $\mathbb{R}^n$ 中，闭集的凸包是否一定是闭集？凸集的闭包是否是凸集？

**习题 2** @94

设 $f$ 是实赋范线性空间 $V$ 上的线性泛函，$c$ 为实数。证明：

(i) 超平面 $V_c(f)=\{x:f(x)=c\}$ 和它决定的半空间 $\{x:f(x)\geqslant c\}$，$\{x:f(x)\leqslant c\}$，$\{x:f(x)>c\}$，$\{x:f(x)<c\}$ 都是凸集。

(ii) 当 $f$ 连续时，$\{x:f(x)\geqslant c\}$，$\{x:f(x)\leqslant c\}$ 是闭的，$\{x:f(x)>c\}$，$\{x:f(x)<c\}$ 是开的。

(iii) $V_c(f)$ 和半空间中任何一个具有内点时，$f$ 是连续的。

**习题 3** @94

设 $V$ 是实赋范线性空间，$M$ 是 $V$ 的吸收闭凸集，那么 $0\in M$。如果 $p(x)$ 是 $M$ 的 Minkowski 泛函，那么 $p(x)$ 是下半连续的，且有

$$M=\{x:x\in X,p(x)\leqslant1\}.$$

此外，如果 $M$ 还是有界的，那么 $p(x)$ 满足

$$p(x)=0\Longleftrightarrow x=0.$$

**习题 4** @95

设 $V$ 是实赋范线性空间，$M$ 是 $X$ 的凸子集，$0\in M^\circ$，$p(x)$ 是 $M$ 的 Minkowski 泛函，证明：

(i) $x\in M^\circ\Longleftrightarrow p(x)<1$。

(ii) $\overline{M^\circ}=\overline M$。

**习题 5** @95

设 $A$ 是 $\mathbb{R}^2$ 中有界闭凸集。$B$ 是 $A$ 在 $x$ 轴上的投影。证明：$B$ 是一个闭区间，且存在两个 $B$ 上的凸函数 $f_1(x)$ 和 $f_2(x)$，使得

$$A=\{(x,y):x\in B,-f_2(x)\leqslant y\leqslant f_1(x)\}.$$

**习题 6** @95

设 $\varphi$ 是直线 $\mathbb{R}$ 上的凸函数。使用凸集分离定理证明：对任意点 $x\in\mathbb{R}$，存在常数 $m$ 使得

$$\varphi(y)-\varphi(x)\geqslant m(y-x),\qquad\forall y\in\mathbb{R}.$$

**习题 7** @95

设 $V$ 是实赋范线性空间，$M$ 是 $V$ 的凸子集，$M^\circ$ 非空，$F$ 是 $V$ 的线性子空间，$M^\circ\cap F=\varnothing$。则存在非零的 $f\in V^*$，满足：

$$f(x)\leqslant0,\quad\forall x\in M;\qquad f(x)=0,\quad\forall x\in F.$$

**习题 8** @95

设 $V$ 是实赋范线性空间，$M$ 是 $V$ 的凸子集。证明：

(i) 若 $M$ 是闭的，则 $M$ 是一些闭半空间的交。

(ii) 若 $M$ 是开的，则 $M$ 是一些开半空间的交。

**习题 9** @95

设集合 $A$ 是复赋范线性空间 $V$ 中的一个均衡凸开集，$B$ 是一个和 $A$ 不相交的非空凸子集。证明：存在一个复线性泛函 $f$ 和 $c>0$，使得在 $A$ 上 $|f(x)|<c$，在 $B$ 上 $|f(x)|\geqslant c$。

**习题 10** @95

令实 Banach 空间 $l^2$ 中的一个子集

$$E=\{x=(x_1,x_2,\cdots,x_n,\cdots)\in l^2:\text{只有有限个 }x_n\text{ 非零，且最后一个非零的 }x_n\text{ 是正数}\}.$$

证明：$E$ 是凸子集且 $0\notin E$，且不存在 $l^2$ 上的非零连续线性泛函 $f$ 分离 $E$ 与 $\{0\}$。

**习题 11** @95

设 $M$ 是实赋范线性空间 $X$ 的凸子集。

(i) 证明：若 $M$ 是闭的，则对任意 $x\notin M$，我们有

$$d(x,M)=\sup_{f\in X^*,\|f\|=1}\left(f(x)-\sup_{z\in M}f(z)\right).$$

(ii) 当 $M$ 不是闭的时候，(i) 的结论是否成立？（参考第 10 题）

**习题 12** @95

设 $M$ 是 Euclid 空间 $\mathbb{R}^n$ 中的紧凸子集。

(i) 若 $M$ 是吸收的，$p(x)$ 是 $M$ 的 Minkowski 泛函。证明：$p(x)$ 在 Euclid 空间 $\mathbb{R}^n$ 的单位球面 $S=\{x\in\mathbb{R}^n:|x|_2=1\}$ 有非零的上界与下界。

(ii) 在 (ii) 的条件下，证明：$0$ 是 $M$ 的内点，并且 $M$ 同胚于 $\mathbb{R}^n$ 的闭单位球。

(iii) 若假设 $0\in M$，$E$ 是 $M$ 张成的 $m$ 维子空间，证明：存在 $e\in M$，使得 $M-e$ 在空间 $E$ 中是吸收的。

(iv) 证明：存在正整数 $m\leqslant n$，使得 $M$ 同胚于 $\mathbb{R}^m$ 的单位球。

**习题 13 (复线性空间中的凸锥)** @95

在一个线性空间中，一个锥 $C$ 是指一族过原点的射线的并集，即 $v\in C\Longleftrightarrow\lambda v\in C$，$\forall\lambda>0$。令 $X$ 为在 $\mathbb{C}^n$ 中包含 $\{(z,z^2,\cdots,z^n)\in\mathbb{C}^n:|z|\leqslant1\}$ 的最小凸锥。

(i) 证明：复线性空间中的凸集在复线性泛函 $f$ 映射下的像集是 $\mathbb{C}$ 中的凸集。

(ii) 证明：如果 $\overline X\neq\mathbb{C}^n$，那么存在一个非零复线性泛函 $f$，使得 $f$ 在 $\overline X$ 上的取值都是实部非负的复数。

(iii) 利用复数的指数形式，证明 (ii) 中的 $f$ 在 $\{(z,z^2,\cdots,z^n)\in\mathbb{C}^n:|z|=1\}$ 上的取值的实部都是 $0$。

(iv) 利用复变函数的知识推出 (iii) 的结果是不成立的，从而 $\overline X=\mathbb{C}^n$。

(v) 证明：$\mathbb{R}^n$ 中的稠密凸集一定是全空间。

(vi) 证明：$X=\mathbb{C}^n$。

**习题 14*** @96

设 $A$ 是 Euclid 空间 $\mathbb{R}^2$ 中的一个闭集，具有如下性质：对于任意 $x\in\mathbb{R}^2$，有且只有一点 $y\in A$，使得 $d(x,y)=d(x,A)$。证明：$A$ 是一个凸集。

### 2.5 对偶空间（p96–110）

#### 2.5.1 $L^p[a,b]$ 和 $C[a,b]$ 的对偶空间 @96

**定理 (L^p[a,b] 的对偶空间)** @96

对于赋范线性空间 $L^p[a,b]$（$1\leqslant p<\infty$），它的对偶空间是$$(L^p[a,b])^*\cong L^q[a,b],\qquad \frac{1}{p}+\frac{1}{q}=1.$$

设 $p>1$，这时 $1<q<\infty$。利用积分的 Hölder 不等式，易知对任意给定的 $\beta(t)\in L^q[a,b]$，$$f(x)=\int_a^b x(t)\beta(t)\,\mathrm{d}t,\qquad \forall x\in L^p[a,b]\tag{2.20}$$是 $L^p[a,b]$ 上的连续线性泛函，并且 $\|f\|=\|\beta\|_q$。反之，$L^p[a,b]$ 上连续线性泛函均有这样的形式：映射 $f\mapsto\beta$ 是一对一的、到上的、保持范数的线性映射，即 $(L^p[a,b])^*$ 与 $L^q[a,b]$ 保范线性同构。

$p=1$，$q=\infty$ 的情况可以完全类似地证明。特别地，$(L^2[a,b])^*=L^2[a,b]$。

**注 2.5.1 (一般测度空间的对偶)** @98

对一般的测度空间，上述结果也是成立的。设 $(X,\mathcal{R})$ 是一个可测空间，$\mu$ 是它的一个全 $\sigma$-有限测度。对赋范线性空间 $L^p(X,\mu)$（$1\leqslant p<\infty$）上的一个连续线性泛函 $\psi$，都存在唯一的 $g\in L^q(X,\mu)$（$\dfrac{1}{p}+\dfrac{1}{q}=1$），使得$$\psi(f)=\int_X f(x)g(x)\,\mathrm{d}\mu(x),\qquad \forall f\in L^p(X,\mu),$$且此时 $\|\psi\|=\|g\|_q$。

**构造 (由 $V_0[a,b]$ 生成的 $C[a,b]$ 上的泛函)** @98

$V_0[a,b]$ 是赋范线性空间 $V[a,b]$ 的线性子空间（例 1.2.10）。对于任何 $g\in V_0[a,b]$（即 $g$ 是满足 $g(a)=0$、且在 $(a,b)$ 上右连续的有界变差函数），作 $C[a,b]$ 上的泛函 $F_g$ 如下：$$F_g(x)=\int_a^b x(t)\,\mathrm{d}g(t),\qquad \forall x\in C[a,b],\tag{2.23}$$其中 $\mathrm{d}g(t)$ 是由 $g$ 诱导的符号（复）测度。那么 $F_g$ 是 $C[a,b]$ 上的线性泛函，且$$|F_g(x)|\leqslant\int_a^b|x(t)|\,|\mathrm{d}g|(t)\leqslant\|x\|\bigvee_a^b(g),$$即 $|F_g(x)|\leqslant\|x\|\,\|g\|$，这里 $\|g\|=\bigvee\limits_a^b(g)$。所以 $F_g$ 是有界泛函，即 $F_g\in C[a,b]^*$，且 $\|F_g\|\leqslant\|g\|$。也就是说，$U:g\mapsto F_g$ 是 $V_0[a,b]$ 到 $C[a,b]^*$ 的线性算子，且 $\|Ug\|\leqslant\|g\|$。

**定理 2.5.1 (F. Riesz)** @99

设 $f$ 是 $C[a,b]$ 上的连续线性泛函，则存在唯一的 $g\in V_0[a,b]$，使得$$f(x)=\int_a^b x(t)\,\mathrm{d}g(t),\qquad \forall x\in C[a,b],\tag{2.24}$$且 $\|g\|=\|f\|$。

**定理 (Riesz 表示定理的测度形式)** @101

由实（复）有界变差函数与广义测度（复测度）之间的对应可得 $V_0[a,b]\cong M[a,b]$（见例 1.2.10），因此可以将 Riesz 表示定理写成测度的形式：$$(C[a,b])^*=M[a,b].$$也就是说，对实（复）连续函数空间 $C[a,b]$ 上的一个连续线性泛函 $f$，存在 $[a,b]$ 上唯一的全有限广义测度（复测度）$\mu$，使得$$f(x)=\int_{[a,b]}x(t)\,\mathrm{d}\mu(t),\qquad \forall x\in C[a,b].$$

**定理 2.5.2 (Riesz 表示定理)** @101

设 $X$ 是紧度量空间。对实（复）连续函数空间 $C(X)$ 上的一个连续线性泛函 $f$，存在 $X$ 上唯一的全有限广义测度（复测度）$\mu$，使得$$f(x)=\int_X x(t)\,\mathrm{d}\mu(t),\qquad \forall x\in C(X),$$并且 $\|f\|=|\mu|(X)$，这里 $|\mu|$ 是 $\mu$ 的全变差测度。

#### 2.5.2 二次对偶空间与自反 @101

**定义 (二次对偶空间)** @101

设 $X$ 是赋范线性空间，$X^*$ 是它的对偶空间。由于 $X^*$ 也是赋范线性空间，它也有对偶空间 $(X^*)^*$，把它记为 $X^{**}$，称 $X^{**}$ 是 $X$ 的**二次对偶空间**。类似地，可定义 $X^{***}$，$X^{****}$，$\cdots$。

**例 2.5.1 (二次对偶的例子)** @101

（i）我们知道 $(c_0)^*=l^1$，$(l^1)^*=l^\infty$，所以 $(c_0)^{**}=l^\infty$。

（ii）$(l^p)^*=l^q$（$1<p<\infty$，$\dfrac{1}{q}+\dfrac{1}{p}=1$），所以 $(l^p)^{**}=l^p$；同样有 $(L^p[a,b])^{**}=L^p[a,b]$。

**定义 (典范映射)** @101

对每个 $x\in X$，作 $X^*$ 上的泛函 $x^{**}$：$$x^{**}(f)=f(x),\qquad \forall f\in X^*.$$显然这样的 $x^{**}$ 是 $X^*$ 上的线性泛函。又由于$$|x^{**}(f)|\leqslant\|f\|\,\|x\|,$$所以 $x^{**}$ 是有界泛函，并且 $\|x^{**}\|\leqslant\|x\|$，称泛函 $x^{**}$ 为 $x$ 生成的。由此得到一个映射 $J:X\to X^{**}$，通常称它为**典范映射**（或**自然嵌入**）。

**定理 2.5.3 (自然嵌入与完备化)** @102

设 $X$ 是赋范线性空间，映射 $J:x\mapsto x^{**}$ 是从 $X$ 到 $X^{**}$ 的保范的线性算子，即

（i）$(\alpha x+\beta y)^{**}=\alpha x^{**}+\beta y^{**}$；

（ii）$\|x^{**}\|=\|x\|$。

因此，赋范线性空间 $X$ 可以线性、保范地映射到它的二次对偶空间 $X^{**}$ 中；当 $X$ 不完备时，$JX$ 在 $X^{**}$ 中的闭包就自动给出了 $X$ 的一个完备化。

**定义 2.5.1 (自反空间)** @102

设 $X$ 是赋范线性空间。如果 $J:X\to X^{**}$ 是同构，就称 $X$ 是**自反的**。

**注 2.5.2 (自反性的定义)** @102

必须强调的是，自反指的是映射 $J$ 是同构。实际上，存在赋范线性空间 $X$，使得 $J$ 不是满射，但 $X^{**}\cong X$。（见汪林 [8, 184 页, 例 4]）

**例 2.5.2 (自反空间的对偶自反)** @102

当 $X$ 是自反空间时，$X^*$ 也是自反的。事实上，这时 $(X^*)^{**}=(X^{**})^*=X^*$。

**例 2.5.3 (可积函数空间自反)** @102

例如当 $1<p<\infty$ 且 $q$ 是 $p$ 的对偶数，即 $\dfrac{1}{p}+\dfrac{1}{q}=1$ 时，那么 $(L^p[a,b])^*=L^q[a,b]$，$(L^q[a,b])^*=L^p[a,b]$，即 $L^p[a,b]$ 是自反的。

类似地，$l^p$（$1<p<\infty$）也是自反的。

**定理 2.5.4 (自反空间的子空间自反)** @102

$M$ 是 $X$ 的闭线性子空间。若 $X$ 是自反的，则 $M$ 与 $X/M$ 是自反的。

**定理 2.5.5 (对偶可分蕴含原空间可分)** @102

设 $X$ 是赋范线性空间，如果 $X^*$ 是可分的，那么 $X$ 是可分的。

**例 2.5.4 (一次可积空间不自反)** @103

$L^1[a,b]$ 不是自反的。

事实上，如果 $L^1[a,b]$ 是自反的，即 $(L^1[a,b])^{**}=L^1[a,b]$。由于 $L^1[a,b]$ 是可分的，所以 $(L^1[a,b])^*=L^\infty[a,b]$ 也是可分的，这与例 1.4.11 的结论矛盾。因而 $L^1[a,b]$ 不是自反的。

**命题 2.5.1 (自反空间范数可达)** @103

若 $X$ 是自反空间，对于任意 $f\in X^*$，都存在 $x\in X$，使得 $\|x\|=1$，$f(x)=\|f\|$。

**定理 2.5.6 (零化子的二次零化子)** @103

设 $X$ 是赋范线性空间，则

（i）对于 $X$ 中的线性子空间 $M$，${}^{\perp}(M^{\perp})=\overline{M}$；

（ii）若 $X$ 还是自反的，$G$ 是 $X^*$ 的线性子空间，则 $({}^{\perp}G)^{\perp}=\overline{G}$。

**注 2.5.3 (自反条件的必要性)** @103

在定理 2.5.6（ii）中，$X$ 是自反的是必须的条件。例如，令 $X=l^1$，则 $X^*=l^\infty$。取 $X^*$ 的子空间 $c_0$，易证 ${}^{\perp}c_0=\{0\}$，从而 $({}^{\perp}c_0)^{\perp}=l^\infty\neq c_0$。

#### 2.5.3 弱拓扑 @103

**定义 2.5.2 (弱收敛与弱* 收敛)** @104

设 $X$ 是赋范线性空间，$X^*$ 是它的对偶空间。

（i）称 $X$ 中的点列 $\{x_n\}_{n=1}^{\infty}$ **弱收敛**于 $X$ 中点 $x$（记作 $x_n\xrightarrow{w}x$）是指：对于任意的 $f\in X^*$，$f(x_n)$ 收敛到 $f(x)$；

（ii）称 $X^*$ 中的点列 $\{f_n\}_{n=1}^{\infty}$ **弱* 收敛**到 $X^*$ 中点 $f$（记作 $f_n\xrightarrow{w^*}f$）是指：对于任意的 $x\in X$，$f_n(x)$ 收敛到 $f(x)$。

由于 $X^*$ 分离 $X$ 中的点，所以可得弱收敛的极限必然唯一。类似地，弱* 收敛的极限也是唯一的。

**例 2.5.5 (弱收敛与范数收敛)** @104

（i）若 $x_n$ 按范数收敛于 $x$，则对 $f\in X^*$，有 $|f(x_n)-f(x)|\leqslant\|f\|\,\|x_n-x\|\to0$，故 $x_n\xrightarrow{w}x$。反之则不成立。如考虑 $X=L^2[0,2\pi]$，则当 $n\to\pm\infty$ 时，$\mathrm{e}^{\mathrm{i}n\theta}\xrightarrow{w}0$，这等价于 Riemann–Lebesgue 引理；但是 $\mathrm{e}^{\mathrm{i}n\theta}$ 并不按范数收敛。

（ii）在对偶空间 $X^*$ 中，若 $f_n$ 按范数收敛于 $f$，则 $f_n\xrightarrow{w^*}f$，反之则不成立。例如，取 $l^\infty$ 中点列 $\{e_n\}_{n=1}^{\infty}$，$e_n$ 在第 $n$ 个位置为 $1$、其他为 $0$，则 $e_n\xrightarrow{w^*}0$，但 $e_n$ 并不按范数收敛。

（iii）赋范线性空间 $X$ 中序列 $x_n\xrightarrow{w}x$，等价于在二次对偶空间 $X^{**}$ 中 $Jx_n\xrightarrow{w^*}Jx$。例如：对于 $c_0$ 中序列 $x^{(n)}$，它弱收敛于 $x$ 是指对任意 $\eta\in l^1$，$$\sum_{k=1}^{\infty}x_k^{(n)}\eta_k\to\sum_{k=1}^{\infty}x_k\eta_k,$$这恰好是说 $x^{(n)}$ 在 $l^\infty$ 中弱* 收敛于 $x$。

（iv）在对偶空间 $X^*$ 上，现在有三种收敛性：按范数收敛 $(X^*,\|\cdot\|)$，弱收敛 $(X^*,w)$，弱* 收敛 $(X^*,w^*)$。按定义易得，按范数收敛蕴涵弱收敛，弱收敛蕴涵弱* 收敛，反之则不成立。例如，考虑 $X=c_0$，则 $X^*=l^1$，$X^{**}=l^\infty$，取 $l^1$ 中序列 $\{e_n\}_{n=1}^{\infty}$，$e_n$ 在第 $n$ 个位置为 $1$、其他为 $0$，则 $e_n\xrightarrow{w^*}0$；但若取 $\eta=\{1,1,\cdots\}\in l^\infty$，显然有 $\eta(e_n)=1\neq\eta(0)$，故 $e_n$ 不是弱收敛于 $0$。进一步，这样也能说明 $e_n$ 不是弱收敛序列。

（v）当 $X$ 是自反空间时，由定义易得 $X^*$ 的弱收敛 $(X^*,w)$ 与弱* 收敛 $(X^*,w^*)$ 是一致的。

（vi）对于 Hilbert 空间 $H$，它的弱收敛 $(H,w)$ 与弱* 收敛 $(H,w^*)$ 是一致的。

**定义 2.5.3 (弱拓扑与弱* 拓扑)** @104

对赋范线性空间 $X$ 和它的对偶空间 $X^*$，

（i）固定 $x_0\in X$，对于 $f_1,f_2,\cdots,f_n\in X^*$，$\varepsilon_1,\varepsilon_2,\cdots,\varepsilon_n>0$，令$$U_{f_1,f_2,\cdots,f_n}^{\varepsilon_1,\varepsilon_2,\cdots,\varepsilon_n}(x_0)=\{x\in X:\ |f_1(x-x_0)|<\varepsilon_1,|f_2(x-x_0)|<\varepsilon_2,\cdots,|f_n(x-x_0)|<\varepsilon_n\}.$$则 $\{U_{f_1,f_2,\cdots,f_n}^{\varepsilon_1,\varepsilon_2,\cdots,\varepsilon_n}(x_0):\ f_1,f_2,\cdots,f_n\in X^*,\ \varepsilon_1,\varepsilon_2,\cdots,\varepsilon_n>0,\ n\in\mathbb{N}_+\}$ 构成 $x_0$ 的一组拓扑基。子集 $U$ 为 $X$ 的**弱拓扑**的开集，是指对任意 $x_0\in U$，存在某个 $U_{f_1,f_2,\cdots,f_n}^{\varepsilon_1,\varepsilon_2,\cdots,\varepsilon_n}(x_0)\subset U$，这也等价于 $U$ 是某些 $U_{f_1,f_2,\cdots,f_n}^{\varepsilon_1,\varepsilon_2,\cdots,\varepsilon_n}(x_0)$ 的并集。

（ii）固定 $f_0\in X^*$，对于 $x_1,x_2,\cdots,x_n\in X$，$\varepsilon_1,\varepsilon_2,\cdots,\varepsilon_n>0$，令$$U_{x_1,x_2,\cdots,x_n}^{\varepsilon_1,\varepsilon_2,\cdots,\varepsilon_n}(f_0)=\{f\in X^*:\ |(f-f_0)(x_1)|<\varepsilon_1,|(f-f_0)(x_2)|<\varepsilon_2,\cdots,|(f-f_0)(x_n)|<\varepsilon_n\}.$$则 $\{U_{x_1,x_2,\cdots,x_n}^{\varepsilon_1,\varepsilon_2,\cdots,\varepsilon_n}(f_0):\ x_1,x_2,\cdots,x_n\in X,\ \varepsilon_1,\varepsilon_2,\cdots,\varepsilon_n>0,\ n\in\mathbb{N}_+\}$ 构成 $f_0$ 的一组拓扑基。子集 $U$ 为 $X^*$ 的**弱* 拓扑**的开集，是指对任意 $f_0\in U$，存在某个 $U_{x_1,x_2,\cdots,x_n}^{\varepsilon_1,\varepsilon_2,\cdots,\varepsilon_n}(f_0)\subset U$，这也等价于 $U$ 是某些 $U_{x_1,x_2,\cdots,x_n}^{\varepsilon_1,\varepsilon_2,\cdots,\varepsilon_n}(f_0)$ 的并集。

**定理 2.5.7 (Mazur)** @105

设赋范线性空间 $X$ 中的点列 $\{x_n\}_{n=1}^{\infty}$ 弱收敛于 $x$，则存在 $\{y_n\}_{n=1}^{\infty}$，其中的每个 $y_n$ 是有限个 $x_{n_1},x_{n_2},\cdots,x_{n_k}$ 的凸组合，使得 $y_n\xrightarrow{\|\cdot\|}x$。

**推论 2.5.1 (凸集弱闭包相同)** @105

设 $M$ 是赋范线性空间 $X$ 中的凸子集，则 $M$ 在范数拓扑下的闭包和在弱拓扑下的闭包相同。

**定理 2.5.8 (Banach–Alaoglu)** @105

对于赋范线性空间 $X$，它的对偶空间 $X^*$ 中的闭单位球是弱* 紧的。

**定理 2.5.9 (Banach–Alaoglu)** @105

若 $X$ 可分，$\{f_n\}_{n=1}^{\infty}$ 是 $X^*$ 中有界序列，则存在子列 $\{f_{n_k}\}$ 在 $X^*$ 中弱* 收敛。

**构造 (可分 $X$ 时 $X_1^*$ 上的度量)** @106

在 $X$ 可分的情况下，设 $\{x_1,x_2,\cdots\}$ 是 $X$ 的单位闭球中的稠密子集。定义 $X^*$ 的闭单位球 $X_1^*=\{f\in X^*:\ \|f\|\leqslant1\}$ 上的度量为$$d(f,g)=\sum_{k=1}^{\infty}\frac{|f(x_k)-g(x_k)|}{2^k},\qquad \forall f,g\in X_1^*.$$使用拓扑知识容易证明，$X_1^*$ 上由 $d$ 诱导的拓扑恰为其上的 $w^*$ 拓扑。换言之，$(X_1^*,w^*)$ 是可度量化的。因此对可分赋范线性空间 $X$，在对 $X^*$ 中的有界集上弱* 拓扑的讨论中，可以不引入网收敛而只使用序列收敛的概念。特别地，在此情形下上述两个版本的 Banach–Alaoglu 定理是一致的。

**推论 2.5.2 (自反空间弱紧性)** @106

若 $X$ 是可分自反空间，对于 $X$ 中有界序列 $\{x_n\}_{n=1}^{\infty}$，存在子列在 $X$ 中弱收敛。

**定义 2.5.4 (端点)** @106

设 $A$ 是线性空间 $V$ 中的凸集，$x\in A$。称 $x$ 为 $A$ 的**端点**，是指不能表示为 $A$ 中不同两点的凸组合，也就是说：若存在 $0<t<1$ 与 $y,z\in A$ 使得 $x=(1-t)y+tz$，则 $x=y=z$。集合 $A$ 的端点全体记为 $\operatorname{Ext}A$。

显然，凸多边形的端点就是其顶点；Euclid 空间单位球 $\{x\in\mathbb{R}^n:\ \|x\|_2=1\}$ 的端点正好为单位球面上的点。但是，无穷维空间的单位球未必有端点。

**定理 2.5.10 (Kreĭn–Mil'man 定理)** @106

设 $X$ 是赋范线性空间，$A$ 是 $X^*$ 中凸的弱* 紧集，则 $A$ 的端点集 $\operatorname{Ext}A$ 非空，且 $A$ 是包含凸包 $\operatorname{co}\operatorname{Ext}A$ 的最小弱* 闭集。

**注 (L^1 的单位球没有端点)** @106

$L^1[0,1]$ 的单位闭球没有端点：对于 $f\in L^1[0,1]$，$\|f\|_1\leqslant1$，取点 $a\in(0,1)$ 使得$$\int_{[0,a]}|f(x)|\,\mathrm{d}m(x)=\frac{\|f\|_1}{2},$$令 $g=2f\chi_{[0,a]}$，$h=2f\chi_{[a,1]}$，则 $g,h$ 也在单位闭球中且 $f=\dfrac{g+h}{2}$。

作为一个直接的推论，由于 $L^1[0,1]$ 单位闭球的端点集是空集，因此不存在赋范空间 $X$ 使得 $X^*=L^1[0,1]$。

#### 习题（p107–109）

**习题 1** @107

设 $F\in L^p(\mathbb{R})^*$（$1\leqslant p<\infty$），证明：存在唯一的 $\beta\in L^q(\mathbb{R})$（$\frac1p+\frac1q=1$），使得

$$F(f)=\int_{\mathbb{R}}f(t)\beta(t)\,\mathrm{d}t,\qquad\forall f\in L^p(\mathbb{R}),$$

并且 $\|F\|=\|\beta\|_q$，从而映射 $F\mapsto\beta$ 是 $L^p(\mathbb{R})^*$ 到 $L^q(\mathbb{R})$ 的保范线性同构，即在这个意义下 $L^p(\mathbb{R})^*=L^q(\mathbb{R})$。

**习题 2** @107

设 $S$ 是区间 $[0,1]$ 上几乎处处有限可测函数的全体组成的线性空间（见例 1.1.12），如果对于任意的 $f,h\in S$，定义度量

$$d(f,g)=\int_0^1\frac{|f(t)-g(t)|}{1+|f(t)-g(t)|}\,\mathrm{d}t.$$

证明：

(i) $L^1[0,1]$ 在 $(S,d)$ 中稠密。

(ii) $(S,d)$ 上不存在非零的连续线性泛函。

**习题 3** @107

设 $(a,b)$ 是有限区间，令 $C_0(a,b)=\{f\text{ 在 }[a,b]\text{ 上连续}:f(a)=f(b)=0\}$，它按范数 $\|f\|=\sup_{x\in(a,b)}|f(x)|$ 构成 Banach 空间。对 $C_0(a,b)$ 上的连续线性泛函 $F$，证明：存在唯一的 $g\in V_0[a,b]$，使得 $g$ 在点 $a$ 右连续，点 $b$ 左连续，且

$$F(x)=\int_a^b x(t)\,\mathrm{d}g(t),\qquad\forall x\in C_0(a,b),$$

且 $\|g\|=\|F\|$。这也等价于存在 $(a,b)$ 上唯一的广义（复）测度 Borel 测度 $\mu$，使得对于 $x\in C_0(a,b)$，有 $F(x)=\int_a^b x(t)\,\mathrm{d}\mu(t)$，且 $\|\mu\|=\|F\|$。

**习题 4** @107

对 Banach 空间 $C_0(\mathbb{R})=\{f\in C(\mathbb{R}):\lim_{|x|\to\infty}f(x)=0\}$，设 $F\in C_0(\mathbb{R})^*$，证明：存在直线上的有界变差函数 $\alpha(x)$，使得

$$F(f)=\int_{\mathbb{R}}f(x)\,\mathrm{d}\alpha(x),\qquad\forall f\in C_0(\mathbb{R}).$$

**习题 5** @107

设 $[a,b]$ 是有限区间，$F$ 是 Banach 空间 $C[a,b]$ 上的有界线性泛函。证明下列条件等价：

(i) 当 $x\in C[a,b],x\geqslant0$ 时，$F(x)\geqslant0$；（此时称 $F$ 是正线性泛函）

(ii) 当 $x_1,x_2\in C[a,b],x_1\geqslant x_2$ 时，$F(x_1)\geqslant F(x_2)$；

(iii) 存在单调递增函数 $g\in V_0[a,b]$，使得 $F(x)=\int_a^b x(t)\,\mathrm{d}g(t)$；

(iv) 存在 $[a,b]$ 上的一个全有限 Borel 正测度 $\mu$，使得 $F(x)=\int_a^b x(t)\,\mathrm{d}\mu(t)$。

**习题 6** @107

(i) 对 $[0,2\pi]$ 上的全有限广义（复）Borel 测度 $\mu$，定义它的 Fourier 系数为

$$\widehat\mu(n)=\int_{[0,2\pi]}\mathrm{e}^{-in\theta}\,\mathrm{d}\mu(\theta).$$

若 $\widehat\mu(n)=0$，$\forall n\in\mathbb{Z}$，且 $\mu(\{0\})=\mu(\{2\pi\})=0$，证明：$\mu$ 是零测度。

(ii) 证明：Fourier 系数是从 $L^1([0,2\pi])$ 到 $c_0(\mathbb{Z})$ 的一个单射。（定义见例 2.1.5）

(iii) 设 $f\in L^1(\mathbb{R})$，对正整数 $k$，记 $f_k(x)=\sum_{m\in\mathbb{Z}}f(kx+2mk\pi)$。证明：$f_k(x)\in L^1([0,2\pi])$；并且当 $k$ 趋于无穷时，$L^1(\mathbb{R})$ 中函数列 $f_k(\frac{x}{k})\chi_{[-\pi,\pi]}(\frac{x}{k})$ 依范数收敛于 $f(x)$。

(iv) 证明：Fourier 变换是从 $L^1(\mathbb{R})$ 到 $c_0(\mathbb{R})$ 的一个单射。（定义见例 2.1.6）

**习题 7 (定理 2.5.2 的间接证明)** @108

令 $K$ 为闭区间 $[0,1]$ 中的 Cantor（康托尔）三分集。

(i) 对于 $f\in C(K)$，在 $[0,1]\setminus K$ 的每个构成区间用线段连接，所得函数即为 $\widetilde f$。证明：$f\mapsto\widetilde f$ 是 $C(K)$ 到 $C[0,1]$ 的一个等距线性映射。

(ii) 证明：当 $X$ 是 Cantor 三分集 $K$ 时，定理 2.5.2 成立。

(iii)* 对任意紧度量空间 $X$，证明：存在一个从 $K$ 到 $X$ 的连续满射。

(iv) 证明定理 2.5.2 成立。

**习题 8** @108

$X$ 是有限维赋范线性空间，证明：$X$ 是自反空间。

**习题 9** @108

设 $X$ 是 Banach 空间，证明：$X$ 是自反的充要条件是 $X^*$ 是自反的。

**习题 10** @108

证明定理 2.5.6(i)。

**习题 11** @108

设 $X$ 是自反空间，$M$ 是 $X$ 的闭子空间。证明：商空间 $X/M$ 也是自反的。

**习题 12** @108

对 $C[a,b]$ 中一致有界点列 $\{x_n\}$，证明：$x_n$ 弱收敛于 $x_0$ 的充要条件是对任意的 $t\in[a,b]$，$\lim_{n\to\infty}x_n(t)=x_0(t)$。

**习题 13** @108

设 $\{f_n\}$ 是 $L^1[0,1]$ 中的一致有界点列，证明：$f_n$ 弱收敛于一个可积函数 $f$，当且仅当对任意 $[0,1]$ 中 Lebesgue 可测集 $E$ 成立：

$$\lim_{n\to\infty}\int_E f_n\,\mathrm{d}m=\int_E f\,\mathrm{d}m.$$

**习题 14** @108

对 $l^\infty$ 中元素 $x$，给出 $l^\infty$ 中的一个点列 $\{x_n\}$，使得 $x_n\in c_0$ 且 $x_n$ 弱 $*$ 收敛于 $x$。

**习题 15** @108

(i) 对一个 $L^\infty[a,b]$ 函数 $f$，给出一个 $C[a,b]$ 中的函数列 $\{f_n\}$，使得 $\{f_n\}$ 在 $L^\infty[a,b]$ 弱 $*$ 收敛于 $f$。

(ii) 在第 6 题中，我们证明了：若一个 $L^1[0,2\pi]$ 函数 $f$ 的 Fourier 系数全为零，则 $f$ 是零函数。使用 (i) 给出这个结果的直接证明。

**习题 16** @108

对 Hilbert 空间 $H$，证明：$H$ 上的范数拓扑和弱拓扑是一致的，当且仅当 $H$ 是有限维空间。

**习题 17** @108

若赋范线性空间 $X$ 上的有界线性泛函序列 $f_n$ 弱 $*$ 收敛于 $f$，证明：$\liminf_{n\to\infty}\|f_n\|\geqslant\|f\|$。

**习题 18** @108

对 Hilbert 空间 $X$ 中点列 $\{x_n\}$，证明：$\{x_n\}$ 按范数收敛于 $x$，当且仅当 $\{x_n\}$ 弱收敛于 $x$ 且 $\lim_{n\to\infty}\|x_n\|=\|x\|$。

**习题 19** @108

设 $X$ 是自反 Banach 空间，$M$ 是 $X$ 的闭凸子集。证明：存在 $x_0\in M$，使得

$$\|x_0\|=\inf\{\|x\|:x\in M\}.$$

**习题 20** @108

对于一个双向序列 $\{a_n\}_{n\in\mathbb{Z}}$，记 $\mathbb{T}$ 上函数 $S_N(\theta)=\sum_{n=-N}^N a_n\mathrm{e}^{2\pi in\theta}$。对于 $1<p\leqslant\infty$，若 $\sup_N\|S_N\|_p<\infty$，证明：存在 $f\in L^p(\mathbb{T})$，使得其 Fourier 系数为 $a_n$。

**习题 21** @108

对于一个度量空间 $X$，令 $\operatorname{Iso}(X)=\{f:X\to X\text{ 是等距的双射}\}$。称 $X$ 是有限 $\operatorname{Iso}(X)$ 可分解的，是指存在 $X=\bigcup_{i=1}^{m+n}A_i$，$m,n$ 为有限数，$A_i$ 两两不交，以及 $g_1,g_2,\cdots,g_{m+n}\in\operatorname{Iso}(X)$ 使得

$$X=\bigcup_{i=1}^n g_iA_i=\bigcup_{i=n+1}^{m+n}g_iA_i.$$

(i) 对于整数集 $\mathbb{Z}$，问：若 $\phi:\mathbb{Z}\to\mathbb{Z}$ 是等距双射，那么 $\phi$ 可能是什么形式，什么样的 $\phi$ 满足 $\phi(0)=0$？

(ii) 令 $F_n=[-n,n]\cap\mathbb{Z}$，对任意 $k\in\mathbb{Z}$，证明：$\lim_{n\to\infty}\frac{|(F_n+k)\cap F_n|}{|F_n|}=1$。这里 $|A|$ 表示子集 $A$ 中的元素个数。

(iii) 证明：存在 $\tau\in l^\infty(\mathbb{Z})^*$，使得 $\tau(1)=1$，且对任意 $f(x)\in l^\infty(\mathbb{Z}),k\in\mathbb{Z}$ 成立 $\tau(f(x))=\tau(f(x+k)),\tau(f(x))=\tau(f(-x))$。

(iv) 证明：存在 $\mathbb{Z}$ 上非负实值集函数 $\mu:2^{\mathbb{Z}}\to\mathbb{R}$ 使得 $\mu(\mathbb{Z})=1$，对 $E\subset\mathbb{Z}$ 与 $k\in\mathbb{Z}$，有 $\mu(E)=\mu(E+k),\mu(E)=\mu(-E)$，且

$$\mu(A)=\sum_{i=1}^m\mu(A_i),\qquad\forall m\in\mathbb{N}_+,\ A=\bigcup_{i=1}^m A_i,\ A_i\text{ 两两不交}.$$

(v) 证明：$\mathbb{Z}$ 不是 $\operatorname{Iso}(\mathbb{Z})$ 可分解的。

$\mathbb{Z}$ 的这个性质来自于 $\operatorname{Iso}(\mathbb{Z})$ 的顺从性（Amenable）。而由 Banach-Tarski（巴拿赫-塔斯基）悖论，$\mathbb{R}^3$ 是 $\operatorname{Iso}(\mathbb{R}^3)$ 可分解的。更多内容可阅读 Clay 与 Margalit 的几何群论著作 [11]。

**习题 22** @109

对于 $\mathbb{R}^n$ 中的一个闭凸集 $A$，若 $A$ 中一点 $x$ 是一列端点的极限，$x$ 是否一定是 $A$ 的端点？

**习题 23** @109

证明 $l^\infty$ 的单位球 $B_1$ 的端点全体

$$E=\{x=\{x_1,x_2,\cdots,x_n,\cdots\}:|x_n|=1\},$$

并直接验证包含凸包 $\operatorname{co}E$ 的最小弱 $*$ 闭包是单位球 $B_1$。

**习题 24** @109

证明：$c_0$ 的闭单位球无端点，并且不存在赋范线性空间 $X$ 使得 $X^*=c_0$。

## 第3章 有界线性算子的基本定理

### 3.1 Baire 纲定理（p112–116）

完备度量空间中的 Baire（贝尔）纲定理是一个很不平凡的结果，也将是证明线性算子的几个基本定理的出发点。

**定义 3.1.1 (疏朗集)** @112

设 $A$ 是度量空间 $X$ 的一个子集，如果 $A$ 的闭包 $\overline{A}$ 不含有 $X$ 的非空开集，即 $\overline{A}$ 没有内点，则称 $A$ 在 $X$ 中是**疏朗**的。

**注 3.1.1 (疏朗集的等价刻画)** @112

从定义可以看出，$A$ 是疏朗集当且仅当 $\overline{A}$ 是疏朗的。由此易得 $A$ 是疏朗集也等价于 $\overline{A}$ 的余集 $\overline{A}^{c}=X\setminus\overline{A}$ 是稠密的：若 $A$ 是疏朗集，则对任意一点 $x_0$ 及其邻域 $V_0$，由于 $V_0$ 不包含于 $\overline{A}$，故 $V_0\cap\overline{A}^{c}\neq\varnothing$，这也就是说 $\overline{A}^{c}$ 是稠密的。反之亦然。

**例 3.1.1 (疏朗集的例子)** @112

（i）集合 $A=\left\{\dfrac{1}{n}:\ n=1,2,\cdots\right\}$ 作为直线的子集是疏朗集。

（ii）单点集作为直线的子集是疏朗集。

（iii）Cantor 集是 $\mathbb{R}$ 中不含内点的闭集，因此是一个疏朗集。

（iv）整数集 $\mathbb{Z}$ 作为直线的子集是疏朗集。

（v）对于平凡的度量空间，由于每个点都是开集，所以它的任何子集都不是疏朗的。例如 $\mathbb{Z}$ 在度量空间 $(\mathbb{Z},|\cdot|)$ 中不是疏朗集。

（vi）如果赋范线性空间 $X$ 的一个线性子空间 $L$ 包含零点的一个开邻域，那么 $L$ 是吸收的，从而 $L=X$。所以，$X$ 的真闭线性子空间是不含内点的，是疏朗集。

**定义 (第一纲集与第二纲集)** @112

在度量空间 $X$ 中，若子集 $A$ 可以表示成可数个疏朗集的并，就称 $A$ 是**第一纲**的；否则，就称 $A$ 是**第二纲**的。特别地，若全集 $X$ 是第一纲（第二纲）的，就称 $X$ 是第一纲（第二纲）的度量空间。

**例 3.1.2 (第一纲与第二纲例子)** @112

（i）有理数集 $\mathbb{Q}$ 作为度量空间是第一纲的，因为单点集在有理数集中也是疏朗集，有理数集是可数集。

（ii）$(\mathbb{Z},|\cdot|)$ 中没有非平凡的疏朗集，所以在此度量下 $\mathbb{Z}$ 是第二纲的。但 $\mathbb{Z}$ 在 $(\mathbb{R},|\cdot|)$ 中是第一纲的。

**定理 3.1.1 (Baire)** @112

完备度量空间是第二纲的。

**例 3.1.3 (无理数集第二纲)** @113

无理数集在度量空间 $(\mathbb{R},|\cdot|)$ 中是第二纲集。否则，存在可数个疏朗集 $\{E_n\}$，使得若 $\mathbb{R}\setminus\mathbb{Q}=\bigcup_n E_n$，则 $\mathbb{R}=\bigcup_{r\in\mathbb{Q}}\{r\}\cup\bigcup_n E_n$，这就是说 $\mathbb{R}$ 也是第一纲集，这与 Baire 纲定理矛盾。同理可得，超越数集也是第二纲集。

**定理 3.1.2 (稠密开集之交)** @113

设 $(X,d)$ 是完备的度量空间，若 $\{U_n\}$ 是一列 $X$ 中的稠密开集，则它们的交集 $\bigcap_n U_n$ 是第二纲的稠密集。

**例 3.1.4 (有理数集不是开集之交)** @113

由于 $\mathbb{Q}$ 是 $(\mathbb{R},|\cdot|)$ 中的第一纲集，因此它不是 $\mathbb{R}$ 中的 $G_\delta$ 集，即不能表示为一列开集交的形式。否则，设 $\mathbb{Q}=\bigcap_n U_n$，这里 $\{U_n\}$ 是 $\mathbb{R}$ 中的一族开集。由于每个 $U_n$ 都包含 $\mathbb{Q}$，是 $\mathbb{R}$ 中的一个稠密开集，由定理 3.1.2 知 $\bigcap_n U_n$ 是第二纲的，这与 $\mathbb{Q}$ 是第一纲集矛盾。再注意到 $\mathbb{Q}$ 是 $F_\sigma$ 集，所以 $F_\sigma$ 与 $G_\delta$ 是 $\mathbb{R}$ 上两个不同的集类。

此外，在实变函数中为了证明 $\mathbb{Q}$ 是 Lebesgue 零测集，我们取了一族开集：

$$E_k=\bigcup_{r_n\in\mathbb{Q}}\left(r_n-\frac{1}{k2^n},\ r_n+\frac{1}{k2^n}\right).$$

根据定理 3.1.2，$\bigcap_k E_k$ 是第二纲集，但是 $\mathbb{Q}$ 是第一纲集，从而我们可以看到 $\bigcap_k E_k\supsetneq\mathbb{Q}$ 成立。同时，由

$$m\left(\bigcap_k E_k\right)=m(\mathbb{Q})=0$$

知，Lebesgue 测度为零的集合也可能是第二纲的。

**例 3.1.5 (类康托尔集)** @114

类 Cantor 集是直线 $\mathbb{R}$ 中没有内点的闭集，因此是一个疏朗集，从而也是第一纲的。但它的 Lebesgue 测度是可能大于零的。

**例 3.1.6 (区间不可列)** @114

利用 Baire 定理可以给出区间 $[0,1]$ 不是可列集的另一个证明：因为每个单元集 $\{x\}$ 显然是度量空间 $([0,1],|\cdot|)$ 中的疏朗集。由于

$$[0,1]=\bigcup_{0\leqslant x\leqslant 1}\{x\},$$

而 $[0,1]$ 是完备空间，由 Baire 纲定理可知 $\bigcup\limits_{0\leqslant x\leqslant 1}\{x\}$ 的指标集不可能是可列的。所以 $[0,1]$ 不是可列集。

**例 3.1.7 (处处不可微函数众多)** @114

在数学分析中，根据 Weierstrass 的构造知存在处处不可微的连续函数，但是构造过程是很不平凡的。我们可以用 Baire 纲定理来证明：$C[0,1]$ 中处处不可微的函数是第二纲的，因此这类函数不光存在，而且还不少。

**例 3.1.8 (连续点集的性质)** @115

在数学分析中，我们知道 Riemann 函数是在有理数点不连续且在无理点连续的函数，那么是否有函数恰好它的连续点是有理数集呢？使用 Baire 纲定理我们能证明这样的函数不存在。

具体说来，有如下结论成立：若 $f:[0,1]\to\mathbb{R}$ 的连续点集 $C_f$ 在 $[0,1]$ 中稠密，那么 $C_f$ 是第二纲的。

#### 习题（p116）

**习题 1** @116

设 $A$ 是度量空间 $(X,d)$ 的子集。证明：$A$ 是疏朗集的充要条件是对任意非空开集 $U$，存在一个非空开子集 $V$ 使得 $V\cap A=\varnothing$。

**习题 2** @116

设 $A$ 是完备度量空间 $(X,d)$ 中的闭疏朗集。证明：存在开集 $U$ 以及闭集 $V$，使得 $A=\partial U=\partial V$。

**习题 3** @116

设 $A$ 是区间 $[a,b]$ 中的非空完全集（即 $A'=A$，这也是说 $A$ 无孤立点）。证明：$A$ 不是可数集。

**习题 4** @116

证明无限维的 Banach 空间不能分解成可列个相对列紧集的并集。

**习题 5** @116

设 $X$ 是无限维的 Banach 空间。证明不存在一列有限维的子空间 $\{L_n\}$，使得

$$X=\bigcup_{n=1}^{\infty}L_n.$$

由此证明 $X$ 没有可数势的 Hamel 基。

**习题 6** @116

证明：不存在可数个线性子空间 $\{L_n:n=1,2,\cdots\}\subset\mathbb R^m$，使得 $\dim L_n<m$，并且满足

$$\mathbb R^m=\bigcup_{n=1}^{\infty}L_n.$$

**习题 7** @116

设 $[0,1]$ 上的连续函数序列 $f_n$ 点态收敛于 $f$。

(i) 对于 $x\in[0,1]$，令

$$w_f(x)=\lim_{\delta\to+0}\sup_{y,z\in O(x,\delta)}|f(y)-f(z)|.$$

证明：$f$ 在 $x$ 处连续当且仅当 $w_f(x)=0$。

(ii) 对于 $\varepsilon>0$，证明：$\{x\in[0,1]:w_f(x)<\varepsilon\}$ 是 $[0,1]$ 的一个开集。

(iii) 证明：$f$ 的不连续点全体是一个第一纲集。

**习题 8** @116

设 $L$ 是线性空间，$p$ 是 $L$ 上函数，如果满足

(1) $p(x)\geqslant0$，$p(x)=0$ 当且仅当 $x=0$；

(2) $p(x+y)\leqslant p(x)+p(y)$；

(3) $p(-x)=p(x)$，并且 $\lim_{\alpha_n\to0}p(\alpha_nx)=0$，$\lim_{p(x_n)\to0}p(\alpha x_n)=0$（$\alpha_n,\alpha$ 是数），

则称 $p$ 是拟范数，$(L,p)$ 为拟赋范空间。

(i) 在线性空间 $\mathbb R^{\infty}$ 中定义

$$p(x)=\sum_{n=1}^{\infty}\frac{1}{2^n}\frac{|x_n|}{1+|x_n|},\qquad x=(x_1,x_2,\cdots)\in\mathbb R^{\infty}.$$

证明：$p$ 是 $\mathbb R^{\infty}$ 上的拟范数。

(ii) 记 $S$ 是区间 $[a,b]$ 中 Lebesgue 可测的实（复）函数全体，定义

$$p(f)=\int_a^b\frac{|f(t)|}{1+|f(t)|}\,\mathrm dt,\qquad\forall f\in S.$$

证明：$p$ 是 $S$ 上的拟范数。

(iii)* 如果 $\lim_{n\to\infty}\alpha_n=\alpha$，$\lim_{n\to\infty}p(x_n-x)=0$，证明：$\lim_{n\to\infty}p(\alpha_nx_n-\alpha x)=0$。

### 3.2 开映射定理、逆算子定理、闭图像定理和共鸣定理（p117–129）

#### 3.2.1 开映射定理和逆算子定理 @117

**定义 3.2.1 (单射、满射与可逆算子)** @117

设 $X,Y$ 是两个赋范线性空间，$T\in\mathfrak{B}(X,Y)$。

（i）如果 $T$ 是一对一的，即如果 $Tx=0$，则 $x=0$，就称 $T$ 为**单射**。

（ii）如果 $T$ 的值域 $\mathfrak{R}(T)=Y$，则称 $T$ 是**满射**，或者**到上的**。

（iii）如果 $T$ 既是单射又是满射，并且 $T^{-1}\in\mathfrak{B}(Y,X)$，那么称 $T$ 是**可逆算子**。

**引理 3.2.1 (可逆算子的充要条件)** @117

设 $X,Y$ 是两个赋范线性空间，$T\in\mathfrak{B}(X,Y)$，$T$ 为可逆算子的充要条件是存在 $C\in\mathfrak{B}(Y,X)$ 满足$$CT=I_X,\qquad TC=I_Y.$$

**例 3.2.1 (左、右移位算子)** @117

对有限维线性空间上的线性算子 $T$，由高等代数的知识，验证 $T$ 可逆只需要证明 $T$ 左可逆或者右可逆即可。但无穷维的时候结论并不成立。例如，考虑 $l^2$ 上的左移位算子 $S$ 和右移位算子 $T$，它们定义为$$S:(x_1,x_2,\cdots)\mapsto(x_2,x_3,\cdots);\qquad T:(x_1,x_2,\cdots)\mapsto(0,x_1,x_2,\cdots).$$显然有 $ST=I_{l^2}$，但 $TS\neq I_{l^2}$。

**例 3.2.2 (逆算子可以无界)** @117

设 $T$ 是定义在 $C[a,b]$ 中的积分算子：$$(T\varphi)(t)=\int_a^t\varphi(s)\,\mathrm{d}s,$$而 $Y$ 是 $C[a,b]$ 中具有连续导函数 $y'(t)\in C[a,b]$，且 $y(a)=0$ 的函数 $y(t)$ 的全体，它按照 $C[a,b]$ 中的范数成为赋范线性空间。这时 $T$ 是由 Banach 空间 $C[a,b]$ 到 $Y$ 上的一对一的有界线性算子。但是 $T^{-1}$ 是微分算子 $D$，它不是有界的。

**定理 3.2.1 (开映射定理)** @117

设 $X,Y$ 是 Banach 空间，$T\in\mathfrak{B}(X,Y)$。如果 $TX=Y$，那么 $T$ 是开映射，即 $T$ 将 $X$ 的开集映射成 $Y$ 的开集。

**注 (商映射是开映射)** @118

商映射是开映射的一个典型例子（参见 1.4 节例 1.4.14 与习题 1.4 第 20 题）。若 $X$ 是赋范线性空间，$M$ 是 $X$ 的闭线性子空间，则商映射 $\pi:X\to X/M$ 是开映射。

**定理 3.2.2 (Banach 逆算子定理)** @118

设 $X$ 和 $Y$ 都是 Banach 空间，$T$ 是 $X$ 到 $Y$ 上的有界线性算子，并且实现 $X$ 到 $Y$ 的一一对应。那么，逆算子 $T^{-1}$ 是有界算子。

**引理 3.2.2 (满射算子的像稠密)** @118

设 $T$ 是 Banach 空间 $X$ 到 Banach 空间 $Y$ 的有界线性算子，且 $TX=Y$。那么，存在 $\delta>0$，使得对任意的 $a>0$，$TB_X(0,a)$ 在 $O_Y(0,a\delta)$ 中稠密。

**引理 3.2.3 (稠密像蕴含包含)** @118

设 $T$ 是 Banach 空间 $X$ 到 Banach 空间 $Y$ 的有界线性算子，若存在数 $\delta>0$，使得 $TB_X(0,1)$ 在 $O_Y(0,\delta)$ 中稠密，则对于任意的 $a>0$，$$TB_X(0,a)\supset O_Y\left(0,\frac{a\delta}{2}\right).$$

**注 3.2.1 (开映射定理的定量形式)** @119

从引理 3.2.3 我们可以得到下面的结论：设 $X,Y$ 都是 Banach 空间，$T\in\mathfrak{B}(X,Y)$，并且 $TX=Y$，那么存在一个 $M>0$，对于任意的 $y\in Y$，都存在 $x\in X$，使得 $Tx=y$ 并且 $\|x\|\leqslant M\|y\|$。

**注 3.2.2 (完备性假设的减弱)** @119

仔细检查上述证明可以看出 $Y$ 的完备性可以减弱为 $TX$ 是第二纲的。也就是说，定理可以修改如下：设 $X,Y$ 是两个 Banach 空间，$T\in\mathfrak{B}(X,Y)$，若 $TX$ 在 $Y$ 中为第二纲集，则 $T$ 为开映射且 $TX=Y$。

**例 3.2.3 (非零连续线性泛函是开映射)** @119

设 $f$ 是赋范线性空间 $X$ 上的非零连续线性泛函，由于 $f$ 是到值域的满射，故 $f$ 是一个开映射。

**定义 3.2.2 (两个范数的强弱与等价)** @119

设 $X$ 是线性空间，在 $X$ 上赋予两个范数 $\|\cdot\|_1,\|\cdot\|_2$。

（i）如果存在正数 $c$，使得$$\|x\|_1\leqslant c\|x\|_2,\qquad \forall x\in X,\tag{3.1}$$就称 $\|\cdot\|_1$ 对 $\|\cdot\|_2$ 是**连续的**，也称 $\|\cdot\|_1$ **弱于** $\|\cdot\|_2$ 或 $\|\cdot\|_2$ **强于** $\|\cdot\|_1$。

（ii）如果 $\|\cdot\|_1$ 既弱于 $\|\cdot\|_2$ 又强于 $\|\cdot\|_2$（即 $\|\cdot\|_2$ 弱于 $\|\cdot\|_1$），就称 $\|\cdot\|_1,\|\cdot\|_2$ **等价**。

**例 ($C[a,b]$ 上两个不等价的范数)** @120

在 $C[a,b]$ 中取$$\|x\|_2=\max_{a\leqslant t\leqslant b}|x(t)|,\qquad \|x\|_1=\int_a^b|x(t)|\,\mathrm{d}t,$$由于$$\|x\|_1=\int_a^b|x(t)|\,\mathrm{d}t\leqslant(b-a)\|x\|_2,$$所以 $\|\cdot\|_1$ 弱于 $\|\cdot\|_2$，但是它们不等价。

**定理 3.2.3 (范数等价定理)** @120

设 $\|\cdot\|_1,\|\cdot\|_2$ 是线性空间 $X$ 上的两个范数。如果 $X$ 按这两个范数都成为 Banach 空间，并且 $\|\cdot\|_1$ 弱于 $\|\cdot\|_2$，那么 $\|\cdot\|_1,\|\cdot\|_2$ 等价。

**定理 3.2.4 (单射算子的值域为闭集的判据)** @120

设 $X,Y$ 是两个 Banach 空间，$T\in\mathfrak{B}(X,Y)$。若 $T$ 为单射，则 $T$ 的值域 $\mathfrak{R}(T)$ 是闭的，当且仅当 $T$ 是**下有界的**：即存在 $c>0$，使得对任意 $x\in X$，有$$\|Tx\|\geqslant c\|x\|.$$

#### 3.2.2 闭图像定理 @120

**定义 3.2.3 (算子的图像)** @120

设 $X$ 和 $Y$ 是两个集，$T$ 是 $\mathcal{D}(T)(\subset X)$ 到 $Y$ 中的映射（算子）。作 $X$ 和 $Y$ 的乘积集$$X\times Y=\{(x,y):\ x\in X,\ y\in Y\},$$称 $X\times Y$ 的子集$$\mathcal{G}(T)=\{(x,Tx):\ x\in\mathcal{D}(T)\}$$为映射（算子）$T$ 的**图像**。

当 $X$ 和 $Y$ 是实直线，$T$ 是通常的函数时，这里的图像就是通常的函数图像。当 $(X,d_1),(Y,d_2)$ 是两个度量空间时，可以在 $X\times Y$ 上引进度量$$d((x_1,y_1),(x_2,y_2))=\sqrt{d_1(x_1,x_2)^2+d_2(y_1,y_2)^2},$$这样得到一个**乘积度量空间** $(X\times Y,d)$。

**定义 3.2.4 (闭算子)** @121

设 $(X,d_1),(Y,d_2)$ 是两个度量空间，$T$ 是 $\mathcal{D}(T)(\subset X)$ 到 $Y$ 中的映射（算子），如果 $T$ 的图像$$\mathcal{G}(T)=\{(x,Tx):\ x\in\mathcal{D}(T)\}$$是乘积度量空间 $(X\times Y,d)$ 中的闭集，那么称 $T$ 是**闭算子**。

**引理 3.2.4 (闭算子的点列刻画)** @121

设 $X,Y$ 是两个度量空间，$T$ 是 $\mathcal{D}(T)(\subset X)$ 到 $Y$ 中的算子。那么，$T$ 成为闭算子的充要条件是对任何点列 $\{x_n\}\subset\mathcal{D}(T)$，当 $x_n\to x_0$，$y_n=Tx_n\to y_0$ 时，有 $x_0\in\mathcal{D}(T)$，而且 $Tx_0=y_0$。

**引理 3.2.5 (定义域闭的连续算子是闭算子)** @121

定义域是闭集的连续算子是闭算子。

**例 3.2.4 (求导算子是闭算子但无界)** @121

考察 Banach 空间 $C[a,b]$ 的子空间 $C^{(1)}[a,b]$。作 $C^{(1)}[a,b]$ 到 $C[a,b]$ 的求导算子 $T$ 如下：$$(Tx)(t)=\frac{\mathrm{d}}{\mathrm{d}t}x(t),\qquad \forall x\in C^{(1)}[a,b],$$则 $T$ 是闭算子，但不是有界算子。

**定理 3.2.5 (闭图像定理)** @122

设 $X,Y$ 是两个 Banach 空间，$T$ 是 $\mathcal{D}(T)\subset X$ 到 $Y$ 的闭线性算子，如果 $\mathcal{D}(T)$ 是 $X$ 中的闭线性子空间，那么 $T$ 是连续的。

**例 3.2.5 (乘法算子的 $L^2$ 判据)** @122

设 $f$ 为 $[0,1]$ 上可测函数，若对于任意 $g\in L^2[0,1]$ 都有 $fg\in L^1[0,1]$，那么我们有 $f\in L^2[0,1]$。

**例 3.2.6 (Toeplitz-Hellinger)** @123

设 $X,Y$ 是 Banach 空间，若 $T$ 是 $X$ 到 $Y$ 的映射，$S$ 是 $Y^*$ 到 $X^*$ 的映射，且对任意 $x\in X$，$y^*\in Y^*$ 有$$y^*(Tx)=(Sy^*)(x),\tag{3.2}$$则 $T,S$ 都是有界线性算子。

#### 3.2.3 共鸣定理 @123

**定理 3.2.6 (共鸣定理、一致有界原理、Banach-Steinhaus 定理)** @123

设 $X$ 是 Banach 空间，$Y$ 是赋范线性空间，$\{T_\lambda:\lambda\in\Lambda\}$ 是从 $X$ 到 $Y$ 的一族有界线性算子。如果对每个 $x\in X$，$$\sup_{\lambda\in\Lambda}\|T_\lambda x\|<\infty,\tag{3.3}$$那么数集 $\{\|T_\lambda\|:\lambda\in\Lambda\}$ 是有界的。

**定理 3.2.7 (共鸣定理的另一形式)** @124

设 $X,Y$ 是赋范线性空间，$\{T_\lambda:\lambda\in\Lambda\}\subset\mathfrak{B}(X,Y)$。如果$$R\stackrel{\text{def}}{=}\left\{x\in X:\ \sup_{\lambda\in\Lambda}\|T_\lambda x\|<+\infty\right\}$$是 $X$ 中的第二纲集，那么数集 $\{\|T_\lambda\|:\lambda\in\Lambda\}$ 有界。

**定理 3.2.8 (Banach-Steinhaus 定理的算子列形式)** @125

设 $X$ 是 Banach 空间，$Y$ 是赋范线性空间，$\{T_n\}$ 是 $\mathfrak{B}(X,Y)$ 中的一个算子列。若对任意 $x\in X$，$\{T_nx\}$ 都在 $Y$ 中收敛，那么存在 $T\in\mathfrak{B}(X,Y)$，使得对 $x\in X$，$\lim\limits_{n\to\infty}\|T_nx-Tx\|=0$，且$$\|T\|\leqslant\varliminf_{n\to\infty}\|T_n\|.$$

**例 3.2.7 (弱*有界与弱有界)** @125

设 $X$ 是 Banach 空间，$\{f_\lambda:\lambda\in\Lambda\}$ 是 $X^*$ 中一族线性泛函。若它是**弱*有界的**，即对任意 $x\in X$，有$$\sup_{\lambda\in\Lambda}|f_\lambda(x)|<\infty,$$由共鸣定理得 $\{f_\lambda:\lambda\in\Lambda\}$ 是一致有界的。特别地，弱*收敛序列 $\{f_n\}$ 是有界序列。

类似地，如果 $\{x_\lambda:\lambda\in\Lambda\}$ 是赋范线性空间 $X$ 中一个**弱有界**的子集：即对任意 $f\in X^*$，有 $\sup\limits_{\lambda\in\Lambda}|f(x_\lambda)|<\infty$，那么 $\{Jx_\lambda:\lambda\in\Lambda\}$ 在二次对偶空间 $X^{**}$ 中弱*有界。因此 $\{Jx_\lambda:\lambda\in\Lambda\}$ 以及 $\{x_\lambda:\lambda\in\Lambda\}$ 是（依范数）有界的。特别地，弱收敛序列 $\{x_n\}$ 是有界序列。

**定义 3.2.5 (强算子收敛与弱算子收敛)** @125

（i）**强算子收敛**（SOT）：称有界线性算子列 $\{T_n\}$ **强算子收敛**到有界线性算子 $T$，是指对任意 $x\in X$，有 $\lim\limits_{n\to\infty}\|T_nx-Tx\|_Y=0$；

（ii）**弱算子收敛**（WOT）：称有界线性算子列 $\{T_n\}$ **弱算子收敛**到有界线性算子 $T$，是指对任意 $x\in X$，有 $T_nx\overset{w}{\longrightarrow}Tx\ (n\to\infty)$。

**注 (三种收敛性的强弱关系)** @126

显然依范数收敛强于强算子收敛，强算子收敛强于弱算子收敛。反之则不然。例如，设 $S$ 为 $l^2$ 上左移位算子，即 $S(x_1,x_2,\cdots)=(x_2,x_3,\cdots)$，则算子列 $\{S^n\}$ 强算子收敛到 $0$：$$\forall x\in l^2,\quad \|S^nx\|=\left(\sum_{k=n+1}^{\infty}|x_k|^2\right)^{\frac{1}{2}}\to 0\quad (n\to\infty).$$但是，$\|S^n\|=1$，故 $S^n$ 不范数收敛到 $0$，这也说明 $S^n$ 不是范数收敛算子列。

再考虑等距算子 $T(x_1,x_2,\cdots)=(0,x_1,x_2,\cdots)$。由于对任意的 $x\in l^2$，有 $\|T^nx\|=\|x\|$ 成立，所以 $T^n$ 不强算子收敛到 $0$。但是，对于任意的 $x,y\in l^2$，有$$|\langle T^nx,y\rangle|=|\langle x,S^ny\rangle|\leqslant\|x\|\,\|S^ny\|\to 0\quad (n\to\infty),$$所以 $T^n$ 弱算子收敛到 $0$。

**例 3.2.8 (弱算子收敛序列的一致有界性)** @126

若 $X,Y$ 是 Banach 空间，$\{T_n\}$ 为 $\mathfrak{B}(X,Y)$ 中弱算子收敛序列。那么对 $x\in X$，$\{T_nx\}$ 为 $Y$ 中的弱收敛序列，故 $\sup\limits_n\|T_nx\|<\infty$。再对 $X$ 使用一次共鸣定理，即得 $\sup\limits_n\|T_n\|<\infty$。

**例 3.2.9 (积分的存在性蕴含乘子属于 $L^q$)** @126

设 $p\geqslant 1$，$\alpha(t)$ 是实直线 $\mathbb{R}$ 中闭区间 $[a,b]$ 上可测函数。若对任何 $x\in L^p[a,b]$，积分$$\int_a^b\alpha(t)x(t)\,\mathrm{d}t$$存在，那么 $\alpha(t)\in L^q[a,b]$，其中 $\dfrac{1}{p}+\dfrac{1}{q}=1$。

**例 3.2.10 ($L^2[0,1]$ 是 $L^1[0,1]$ 的第一纲集)** @126

由 Hölder 不等式，我们知道 $L^2[0,1]$ 是 $L^1[0,1]$ 的子集。实际还可以说明 $L^2[0,1]$ 也是 $L^1[0,1]$ 的第一纲集，所以 $L^1[0,1]$ 中的 $L^2[0,1]$ 函数是“稀少”的。

#### 习题（p127–130）

**习题 1** @127

设 $X,Y$ 是 Banach 空间，$T\in\mathcal B(X,Y)$。证明：$\mathfrak R(T)$ 是闭的当且仅当存在 $c>0$，使得对任意 $x\in X$，有 $c\|Tx\|\geqslant d(x,\ker T)$。

**习题 2** @127

用范数等价定理证明：$C[0,1]$ 按范数

$$\|f\|_1=\int_{[0,1]}|f(t)|\,\mathrm dm(t)$$

不是 Banach 空间。

**习题 3** @127

对于 Lebesgue 可测函数 $\varphi\in L^{\infty}[0,1]$，定义 $L^2[0,1]$ 上的有界线性算子 $M_\varphi$ 为

$$M_\varphi(f)=\varphi f,\qquad\forall f\in L^2[0,1].$$

证明：$\|M_\varphi\|=\|\varphi\|_{\infty}$。并且 $M_\varphi$ 是可逆算子当且仅当存在正数 $c>0$，使得对几乎处处的 $x\in[0,1]$，成立不等式 $|\varphi(x)|>c$。

**习题 4** @127

设 $X,Y$ 是 Banach 空间，$T\in\mathcal B(X,Y)$，$T$ 是满射。$T$ 是否一定为闭映射（即 $T$ 将 $X$ 中的闭集映成 $Y$ 中的闭集）？说明理由。

**习题 5** @127

设 $X,Y$ 是 Banach 空间，$T\in\mathcal B(X,Y)$，并且 $TX=Y$。证明：存在常数 $N$，使得对 $Y$ 中任何收敛于 $y_0$ 的点列 $\{y_n\}$，都可找到 $X$ 中的一个点列 $\{x_n\}$，$\|x_n\|\leqslant N\|y_n\|$，$Tx_n=y_n$（$n=0,1,2,\cdots$），且 $x_n\to x_0$。

**习题 6** @127

设 $X,Y$ 是 Banach 空间，$T\in\mathcal B(X,Y)$。若存在 $Y$ 中的一个闭线性子空间 $M$ 使得 $\mathfrak R(T)\cap M=\{0\}$，$\mathfrak R(T)+M=Y$，证明：$T$ 的值域 $\mathfrak R(T)$ 是闭的。

**习题 7** @127

在习题 2.5 第 6 题中证明了 Fourier 变换 $\mathcal F:f\mapsto\hat f$ 是从 $L^1(\mathbb R)$ 到 $c_0(\mathbb R)$ 的单射。

(i) 令 $f(x)=\chi_{[-n,n]}(x)\sin x$，计算它的 Fourier 变换 $\hat f$。

(ii) 证明：$\mathcal F:f\mapsto\hat f$ 不是满射。

**习题 8** @127

设 $\{x_n\}$ 是 Banach 空间 $X$ 中的点列，如果对任意的 $x\in X$，都存在唯一数列 $\{\alpha_i(x)\}$，使得

$$\lim_{n\to\infty}\left\|x-\sum_{i=1}^n\alpha_ix_i\right\|=0,\qquad\text{也即 }x=\sum_{i=1}^{\infty}\alpha_ix_i,$$

则称 $\{x_n\}$ 为 $X$ 的 Schauder 基，并称 $X$ 是具有基的 Banach 空间。证明：在有基 $\{x_n\}$ 的 Banach 空间 $X$ 中，展开式 $x=\sum_{i=1}^{\infty}\alpha_i(x)x_i$ 中的 $\alpha_i(x)\in X^*$。

**习题 9** @128

定义：设 $X$ 是线性空间，$P$ 是定义在 $X$ 上的线性算子。

(i) 如果 $P^2=P$，那么称 $P$ 是 $X$ 上的幂等算子。

(ii) 当 $X$ 是赋范线性空间时，满足 $P^2=P$ 的有界线性算子称为幂等算子。

定义：设 $X$ 是线性空间，$E,L$ 是 $X$ 的两个线性子空间。如果 $X$ 中的任何 $x$ 都可唯一地分解成 $x=y+z$，$y\in E$，$z\in L$，那么称 $X$ 是 $E,L$ 的直和，记为 $X=E\oplus L$。

设 $X$ 为线性空间，$P$ 为 $X$ 上幂等算子。

(i) 证明：$I-P$ 也是 $X$ 上幂等算子。

(ii) 记 $L_P=\{x:Px=x,x\in X\}$，$L_{(I-P)}=\{x:Px=0,x\in X\}$。证明：

$$X=L_P\oplus L_{(I-P)}.$$

(iii) 设 $E,L$ 是 $X$ 的线性子空间，并且 $X=E\oplus L$，作 $X$ 上的算子 $P_E$：当 $x=y+z$ 时，规定 $P_Ex=y$。证明：$P_E$ 是 $X$ 上幂等算子，并且 $E=\mathfrak R(P_E)$，$L=\ker P_E$。

**习题 10** @128

设 $X$ 是赋范线性空间。

(i) 设 $P$ 是幂等算子（按定义，它是有界线性算子，并且 $P^2=P$）。证明：$L_P,L_{(I-P)}$ 都是 $X$ 的闭线性子空间。

(ii) 当 $E,F$ 是 Banach 空间 $X$ 的两个闭线性子空间，并且 $X=E\oplus F$ 时，并按第 9 题 (iii) 方式定义算子 $P_E$ 和 $P_F$。证明：算子 $P_E,P_F$ 是 $X$ 上的幂等算子，并且 $I=P_E+P_F$。

**习题 11** @128

试举一例：$X$ 是 Banach 空间，$E$ 是 $X$ 的闭线性子空间，$F$ 是 $X$ 的线性子空间，并且 $X=E\oplus F$，但 $F$ 不是闭线性子空间。

**习题 12** @128

设 $X,Y$ 都是 Banach 空间，$T$ 是 $X\mapsto Y$ 的线性算子。证明：如果对每个 $f\in Y^*$，$f(Tx)$ 作为空间 $X$ 上的泛函是连续线性泛函，那么 $T\in\mathcal B(X,Y)$。

**习题 13** @128

设 $(E,\|\cdot\|)$ 是 Banach 空间，$(F,\|\cdot\|_1)$ 是赋范线性空间。若 $F$ 上有第二个范数 $\|\cdot\|_2$ 使得 $(F,\|\cdot\|_2)$ 是 Banach 空间，且 $\|\cdot\|_2$ 强于 $\|\cdot\|_1$，证明：任何 $E\mapsto(F,\|\cdot\|_1)$ 的有界线性算子 $T$ 也是 $E\mapsto(F,\|\cdot\|_2)$ 上的有界线性算子。

**习题 14** @128

设 $T$ 是 $L^2[0,1]$ 上有界线性算子。如果 $T$ 把 $L^2[0,1]$ 中连续函数映射成连续函数，证明：$T$ 是 $C[0,1]$ 上有界线性算子。

**习题 15** @128

设 $X$ 为线性空间，$\|\cdot\|_1,\|\cdot\|_2$ 是 $X$ 上的两个范数。如果凡对 $\|\cdot\|_1$ 为连续的线性泛函，也为 $\|\cdot\|_2$ 连续，那么存在数 $c>0$，使得对一切 $x\in X$，$\|x\|_1\leqslant c\|x\|_2$。

**习题 16** @128

举例说明共鸣定理中空间完备性的假设不可除去。

**习题 17** @128

设 $\{e_\lambda\}_{\lambda\in\Gamma}$ 是 Hilbert 空间 $H$ 的一组标准正交基。对 $H$ 中的一个点列，证明：$x_n$ 弱收敛于一点 $x$ 当且仅当点列 $\{x_n\}$ 有界且

$$\lim_{n\to\infty}\langle x_n,e_\lambda\rangle=\langle x,e_\lambda\rangle,\qquad\forall\lambda\in\Gamma.$$

**习题 18** @128

设 $X$ 是 Banach 空间，$Y,Z$ 都是赋范线性空间，$\Phi(x,y)$ 是 $X\times Y$ 到 $Z$ 中的双线性映射，即：固定 $x$，$\Phi(x,y)$ 是 $Y\mapsto Z$ 中的线性映射；固定 $y$，$\Phi(x,y)$ 是 $X\mapsto Z$ 中的线性映射。若 $\Phi(x,y)$ 对变量 $x,y$ 是分别连续的：对 $x\in X$，$\Phi(x,\cdot)\in\mathcal B(Y,Z)$；对 $y\in Y$，$\Phi(\cdot,y)\in\mathcal B(X,Z)$，证明：存在常数 $M$，使得 $\|\Phi(x,y)\|\leqslant M\|x\|\|y\|$。

**习题 19 (Gel'fand（盖尔范德）引理)** @128

设 $X$ 是 Banach 空间，$p(x)$ 是 $X$ 上的泛函，它满足下面的条件：

(i) $p(x)\geqslant0$；

(ii) 当 $\alpha$ 为非负数时，$p(\alpha x)=\alpha p(x)$；

(iii) $p(x+y)\leqslant p(x)+p(y)$，$\forall x,y\in X$；

(iv) 当 $x,x_n\ (n=1,2,\cdots)\in X$，$\lim_{n\to\infty}x_n=x$ 时，$\underline{\lim}_{n\to\infty}p(x_n)\geqslant p(x)$。

证明：存在正数 $M$，使得对一切 $x\in X$，$p(x)\leqslant M\|x\|$。这个结果说明了 Banach 空间吸收闭凸子集的什么性质？

**习题 20** @129

设 $C_{2\pi}$ 是直线上周期为 $2\pi$ 的连续函数全体组成的 Banach 空间。对于任意的 $x(t)\in C_{2\pi}$，令

$$a_n=\frac1\pi\int_0^{2\pi}x(t)\cos nt\,\mathrm dt,\qquad b_n=\frac1\pi\int_0^{2\pi}x(t)\sin nt\,\mathrm dt\quad(n=0,1,2,\cdots),$$

则 $x(t)$ 有 Fourier 展开：

$$x(t)\sim\frac{a_0}{2}+\sum_{n=1}^{\infty}(a_n\cos nt+b_n\sin nt).$$

记部分和 $S_n(x)(t)=\frac{a_0}{2}+\sum_{k=1}^n(a_k\cos kt+b_k\sin kt)$。证明：

(i)

$$S_n(x)(s)=\frac1{2\pi}\int_0^{2\pi}x(t)\frac{\sin\left[(2n+1)\frac{t-s}{2}\right]}{\sin\frac{t-s}{2}}\,\mathrm dt.$$

(ii) $S_n$ 是从 $C_{2\pi}$ 到 $C_{2\pi}$ 的有界线性算子，并且

$$\|S_n\|=\frac1\pi\int_0^\pi\left|\frac{\sin(2n+1)t}{\sin t}\right|\,\mathrm dt.$$

(iii) $\lim_{n\to\infty}\|S_n\|=\infty$。

(iv) 存在连续周期函数，其 Fourier 级数不是一致收敛的。

(v) 将 $S_n$ 看成从 $L^1[0,2\pi]$ 到 $L^1[0,2\pi]$ 的线性算子，利用同样的方法证明：存在可积函数，其 Fourier 级数在 $L^1[0,2\pi]$ 中不是收敛的。

**习题 21** @129

在习题 2.5 第 6 题与习题 2.5 第 15 题中证明了 Fourier 级数 $f\mapsto\{\hat f(n)\}_{n\in\mathbb Z}$ 是从 $L^1([0,2\pi])$ 到 $c_0(\mathbb Z)$ 的单射。证明这个映射不是满射。

对 Fourier 级数与 Fourier 变换的收敛性质的研究，在泛函分析的发展中起了重要的作用。更多内容参见文献 [12]。

**习题 22** @129

设 $\{e_1,e_2,\cdots,e_n,\cdots\}$ 是 Hilbert 空间 $H$ 的一组标准正交基，$L_n$ 是 $e_n$ 生成的线性子空间，$P_n$ 是 $H$ 到 $L_n$ 上的投影。证明：当 $n$ 趋于无穷时，$P_n$ 强算子收敛于 $0$，$\sum_{i=1}^nP_i$ 强算子收敛于 $I$。

**习题 23** @129

设 Hilbert 空间 $H$ 上有界线性算子列 $\{A_n\},\{B_n\}$ 分别强算子收敛于 $A,B$。证明：算子列 $\{A_nB_n\}$ 强算子收敛于 $AB$。在弱算子收敛下，相应的结论是否成立？并说明理由。

**习题 24** @129

使用下面的方法给出 $L^2[0,1]$ 是 $L^1[0,1]$ 第一纲子集的两种不同的证明。

(i) $\{f\in L^2[0,1]:\|f\|_2\leqslant n\}$ 在 $L^1[0,1]$ 中是不含内点的闭子集。

(ii) 从 $L^2[0,1]$ 到 $L^1[0,1]$ 的嵌入映射不是满的。

**习题 25 (Toeplitz)** @129

对于一个无穷阶数值矩阵 $A=(a_{i,j})_{1\leqslant i,j\leqslant\infty}$，可引入 $A$-求和法：令 $s_n=x_1+x_2+\cdots+x_n$ 为数项级数 $\sum_{n=1}^{\infty}x_n$ 的部分和。若 Cauchy 和

$$\sigma_n=a_{n1}s_1+a_{n2}s_2+\cdots\tag{3.4}$$

都存在，且 $\lim_{n\to\infty}\sigma_n$ 收敛，则称其极限 $\sigma$ 为数项级数 $\sum_{n=1}^{\infty}x_n$ 按求和矩阵 $A$ 的广义和，记为 $A-\sum_{n=1}^{\infty}x_n$。证明下面两个条件是等价的：

(i) $A$-求和法是正则的，即：若 $\sum_{n=1}^{\infty}x_n$ 收敛，则 $A-\sum_{n=1}^{\infty}x_n$ 存在且与 $\sum_{n=1}^{\infty}x_n$ 相等。

(ii)

$$\lim_{n\to\infty}a_{nj}=0,\qquad\lim_{n\to\infty}\sum_{j=1}^{\infty}a_{nj}=1,\qquad\text{且 }b\stackrel{\mathrm{def}}{=}\sup_n\sum_{j=1}^{\infty}|a_{nj}|<\infty.$$

同时证明：由 (3.4) 式定义的线性变换 $T(\{s_n\})=\{\sigma_n\}$ 是 $c$ 上的有界线性算子，且 $\|T\|=b$。

对于数项级数和积分，寻找各种正则求和法讨论相互之间的联系是 Tauber（陶伯）型定理的主要内容。对发散级数的处理也经常使用正则求和法。对数项级数 $\sum_{n=1}^{\infty}x_n$ 及部分和 $s_n=x_1+x_2+\cdots+x_n$，设 $\sigma_n=\frac{s_1+s_2+\cdots+s_n}{n}$，再令 $n$ 趋于无穷即为 Cesàro（切萨罗）的 $(C,1)$-求和法。而 Abel（阿贝尔）求和法则是研究 $|z|<1$ 时的幂级数 $\sum_{n=1}^{\infty}x_nz^n$，再取 $z$ 趋于 $1$ 的极限。这些求和算法在 Fourier 级数的分析中起了重要的作用。

**习题 26 (Grothendieck（格罗滕迪克）)** @130

设 $1\leqslant p<\infty$，$E$ 是 $L^p[0,1]$ 的闭线性子空间，且 $E$ 是 $L^{\infty}[0,1]$ 的子集。

(i) 证明：$E$ 也是 $L^{\infty}[0,1]$ 的一个闭线性子空间。

(ii) 证明：存在 $C>0$ 使得 $\|f\|_{\infty}\leqslant C\|f\|_p$。

(iii) 证明：存在 $A>0$ 使得 $\|f\|_{\infty}\leqslant A\|f\|_2$。

(iv) 固定 $E$ 中的一个标准正交系 $\{f_1,f_2,\cdots,f_n\}$，证明：存在常数 $M$ 以及 $[0,1]$ 中 Lebesgue 可测集 $H$，$m(H)=1$，使得对满足 $|a_1|^2+|a_2|^2+\cdots+|a_n|^2=1$ 的数组 $(a_1,a_2,\cdots,a_n)$ 和 $x\in H$，有

$$|a_1f_1(x)+a_2f_2(x)+\cdots+a_nf_n(x)|\leqslant M.$$

(v) 固定 $E$ 中的一个标准正交系 $\{f_1,f_2,\cdots,f_n\}$，证明：存在常数 $B$，使得对几乎处处的 $x\in[0,1]$，都有 $\sum_{i=1}^n|f_i(x)|^2\leqslant B^2$。

(vi) 证明：$E$ 是有限维的。

### 3.3 共轭算子（p130–138）

#### 3.3.1 赋范线性空间中的共轭算子 @130

**定义 3.3.1 (共轭算子)** @130

设 $T$ 是赋范线性空间 $X$ 到赋范线性空间 $Y$ 的有界线性算子，如果有 $Y^*$ 到 $X^*$ 的算子 $T^*$，使得$$(T^*f)(x)=f(Tx),\qquad \forall x\in X,\ f\in Y^*,\tag{3.5}$$那么就称 $T^*$ 是 $T$ 的**共轭算子**，或**伴随算子**。

**例 3.3.1 (线性算子的矩阵表示)** @130

设 $E$ 是 $n$ 维赋范线性空间，$F$ 是 $m$ 维赋范线性空间，$T$ 是从 $E$ 到 $F$ 的一个线性算子。如果 $\{e_1,e_2,\cdots,e_n\}$ 是 $E$ 的一组基，$\{f_1,f_2,\cdots,f_m\}$ 是 $F$ 的一组基，那么 $Te_i$（$i=1,2,\cdots,n$）可以写成 $\{f_1,f_2,\cdots,f_m\}$ 的线性组合，即$$Te_i=\sum_{j=1}^{m}\alpha_{ji}f_j,\qquad i=1,2,\cdots,n,$$或者写成$$T(e_1,e_2,\cdots,e_n)=(f_1,f_2,\cdots,f_m)\begin{pmatrix}\alpha_{11}&\alpha_{12}&\cdots&\alpha_{1n}\\ \alpha_{21}&\alpha_{22}&\cdots&\alpha_{2n}\\ \vdots&\vdots&&\vdots\\ \alpha_{m1}&\alpha_{m2}&\cdots&\alpha_{mn}\end{pmatrix}.$$

定义 $e_i^*(e_j)=\delta_{ij}$（$1\leqslant i,j\leqslant n$）和 $f_\mu^*(f_\nu)=\delta_{\mu\nu}$（$1\leqslant\mu,\nu\leqslant m$）（$\{e_1^*,e_2^*,\cdots,e_n^*\}$ 称为 $\{e_1,e_2,\cdots,e_n\}$ 的**对偶基**），那么 $T$ 的共轭算子 $T^*$ 为$$T^*(f_1^*,f_2^*,\cdots,f_m^*)=(e_1^*,e_2^*,\cdots,e_n^*)\begin{pmatrix}\alpha_{11}&\alpha_{21}&\cdots&\alpha_{m1}\\ \alpha_{12}&\alpha_{22}&\cdots&\alpha_{m2}\\ \vdots&\vdots&&\vdots\\ \alpha_{1n}&\alpha_{2n}&\cdots&\alpha_{mn}\end{pmatrix}.$$

因此，在对偶基下，算子 $T$ 的共轭算子 $T^*$ 的矩阵表示相应于转置矩阵。

**例 3.3.2 (积分算子的共轭)** @131

例 2.1.10 中的算子 $T$ 视为从 $L^1[a,b]$ 到 $C[a,b]$ 上的算子时，它的共轭算子 $T^*$ 是从 $V_0[a,b]$ 到 $L^\infty[a,b]$ 的算子：$$(T^*\varphi)(x)=\int_x^b\mathrm{d}\varphi(t),\qquad \forall\varphi\in V_0[a,b].$$

如果视 $T$ 为 $L^1[a,b]\to L^1[a,b]$ 的算子，它的共轭算子 $T^*$ 是从 $L^\infty[a,b]$ 到 $L^\infty[a,b]$ 的算子：$$(T^*\varphi)(x)=\int_x^b\varphi(t)\,\mathrm{d}t,\qquad \forall\varphi\in L^\infty[a,b].$$

**定理 3.3.1 (共轭算子的性质)** @131

设 $X$ 和 $Y$ 是赋范线性空间，那么

（i）对每个 $T\in\mathfrak{B}(X,Y)$，共轭算子 $T^*$ 存在且唯一；

（ii）映射 $T\mapsto T^*$ 是由 $\mathfrak{B}(X,Y)$ 到 $\mathfrak{B}(Y^*,X^*)$ 的保范线性算子；

（iii）$I_{X^*}=(I_X)^*$；

（iv）又设 $Z$ 是赋范线性空间，$S\in\mathfrak{B}(Y,Z)$，那么 $(ST)^*=T^*S^*$；

（v）若 $T\in\mathfrak{B}(X,Y)$ 可逆，则共轭算子 $T^*$ 也可逆，它的逆为 $(T^{-1})^*$；

（vi）若 $T\in\mathfrak{B}(X,Y)$，则 $T^{**}\overset{\mathrm{def}}{=}(T^*)^*\in\mathfrak{B}(X^{**},Y^{**})$。使用典范映射将 $X,Y$ 分别视为 $X^{**},Y^{**}$ 的子空间，那么 $T^{**}|_X=T$。

**定理 3.3.2 (希尔伯特空间共轭算子)** @132

设 $G,H$ 是 Hilbert 空间，$T\in\mathfrak{B}(H,G)$，那么有唯一的有界线性算子 $S\in\mathfrak{B}(G,H)$，使得$$\langle Tx,y\rangle=\langle x,Sy\rangle,\qquad \forall x\in H,\ y\in G,\tag{3.6}$$并且 $\|S\|=\|T\|$。

#### 3.3.2 Hilbert空间中的共轭算子 @132

**定义 3.3.2 (Hilbert 空间中的共轭算子)** @133

设 $H$ 和 $G$ 是两个 Hilbert 空间，$T\in\mathfrak{B}(H,G)$，又设 $T^*\in\mathfrak{B}(G,H)$ 适合$$\langle Tx,y\rangle=\langle x,T^*y\rangle,\qquad \forall x\in H,\ y\in G,\tag{3.8}$$那么称 $T^*$ 是 $T$ 的**共轭算子**或**伴随算子**。

定理 3.3.2 说明对任何 $T\in\mathfrak{B}(H,G)$，存在唯一的共轭算子 $T^*\in\mathfrak{B}(G,H)$。

这个共轭算子与赋范线性空间上有界线性算子的共轭算子在形式上有些差别。对于实 Hilbert 空间，两者是完全一致的；而对于复空间，两个共轭算子稍有不同，Hilbert 空间上的共轭算子对应于高等代数中矩阵的共轭转置。

**例 3.3.3 (矩阵的共轭转置)** @133

设 $\mathbb{C}^n$ 是 $n$ 维复 Hilbert 空间，$e_1,e_2,\cdots,e_n$ 是 $\mathbb{C}^n$ 的标准正交基，设 $T$ 是 $\mathbb{C}^n$ 到 $\mathbb{C}^n$ 的线性算子（这时 $T$ 是有界的）。由于 $e_1,e_2,\cdots,e_n$ 是 $\mathbb{C}^n$ 的基，$T$ 是线性算子，所以 $Te_\mu$（$\mu=1,2,\cdots,n$）的值就决定了算子 $T$。如果$$T\begin{pmatrix}e_1\\ e_2\\ \vdots\\ e_n\end{pmatrix}=\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\ a_{21}&a_{22}&\cdots&a_{2n}\\ \vdots&\vdots&&\vdots\\ a_{n1}&a_{n2}&\cdots&a_{nn}\end{pmatrix}\begin{pmatrix}e_1\\ e_2\\ \vdots\\ e_n\end{pmatrix},\tag{3.9}$$当 $x\in\mathbb{C}^n$，$y=Tx$，$x,y$ 用 $e_1,e_2,\cdots,e_n$ 表示时，即 $x=\sum\limits_{\nu=1}^{n}x_\nu e_\nu$，$y=\sum\limits_{\nu=1}^{n}y_\nu e_\nu$ 时，由 (3.9) 式就得到$$(y_1,y_2,\cdots,y_n)=(x_1,x_2,\cdots,x_n)\begin{pmatrix}a_{11}&a_{12}&\cdots&a_{1n}\\ a_{21}&a_{22}&\cdots&a_{2n}\\ \vdots&\vdots&&\vdots\\ a_{n1}&a_{n2}&\cdots&a_{nn}\end{pmatrix}.\tag{3.10}$$

$\mathbb{C}^n$ 中的线性算子 $T$ 由 $n$ 阶方阵 $(a_{\mu\nu})$ 决定。而给定任何一个 $n$ 阶方阵 $(a_{\mu\nu})$，由 (3.9) 式决定了一个线性算子 $T$。我们把 $n$ 阶方阵 $(a_{\mu\nu})$ 称为线性算子 $T$ 在标准正交基 $e_1,e_2,\cdots,e_n$ 下的**表示矩阵**。由 (3.9) 式知道$$a_{\mu\nu}=\langle Te_\mu,e_\nu\rangle.$$

容易知道，在取定的标准正交基下，线性算子 $T$ 与它的表示矩阵 $(a_{\mu\nu})$ 之间的这种对应关系是算子与 $n$ 阶方阵之间的一一对应。

$T$ 的共轭算子 $T^*$ 的表示矩阵 $(a_{\mu\nu}^*)$ 为$$a_{\mu\nu}^*=\langle T^*e_\mu,e_\nu\rangle=\langle e_\mu,Te_\nu\rangle=\overline{\langle Te_\nu,e_\mu\rangle}=\overline{a_{\nu\mu}}.$$

因此 $T^*$ 在 $\{e_i\}$ 下的表示矩阵 $(\overline{a_{\nu\mu}})$ 就是 $T$ 的表示矩阵 $(a_{\mu\nu})$ 的**共轭矩阵**。

**例 3.3.4 (积分算子的共轭核)** @134

设 $H=L^2[a,b]$，$T$ 是 Fredholm（弗雷德霍姆）型积分算子：$$(Tx)(s)=\int_a^bK(s,t)x(t)\,\mathrm{d}t,\qquad \forall x\in L^2[a,b],\tag{3.11}$$其中 $K(s,t)$ 是矩形 $[a,b]\times[a,b]$ 上的连续函数。$T$ 是 $H$ 上的有界线性算子，$T^*$ 为$$(T^*x)(s)=\int_a^b\overline{K(t,s)}x(t)\,\mathrm{d}t,\qquad \forall x\in L^2[a,b].\tag{3.12}$$

由等式 (3.11) 和 (3.12) 定义的 $H$ 上的算子 $T,T^*$ 都是有界线性算子。如果令 $K^*(s,t)=\overline{K(t,s)}$，那么$$(T^*x)(s)=\int_a^bK^*(s,t)x(t)\,\mathrm{d}t,$$所以 $T^*$ 也是 Fredholm 型积分算子。称 $K^*(s,t)$ 为 $K(s,t)$ 的**共轭核**。

**定理 3.3.3 (共轭算子的性质)** @134

设 $H,K,G$ 都是 Hilbert 空间，$S,T\in\mathfrak{B}(H,G)$，$\alpha,\beta$ 是复数，又 $U\in\mathfrak{B}(K,H)$。那么

（i）$(T^*)^*=T$；

（ii）$\|T^*\|^2=\|T\|^2=\|T^*T\|$；

（iii）$(\alpha S+\beta T)^*=\overline{\alpha}S^*+\overline{\beta}T^*$；

（iv）$(TU)^*=U^*T^*$；

（v）$T$ 为可逆算子的充要条件是 $T^*$ 是可逆算子，这时 $(T^{-1})^*=(T^*)^{-1}$。因此，$T$ 可逆当且仅当 $T^*$ 可逆。

**定理 3.3.4 (共轭算子的值域与核)** @135

设 $H,G$ 为 Hilbert 空间，$T\in\mathfrak{B}(H,G)$，那么$$\ker T=\mathfrak{R}(T^*)^\perp,\qquad \ker(T^*)=\mathfrak{R}(T)^\perp;$$$$\overline{\mathfrak{R}(T)}=\ker(T^*)^\perp,\qquad \overline{\mathfrak{R}(T^*)}=\ker T^\perp.$$

**例 3.3.5 (正规自伴与酉算子)** @135

设 $T\in\mathfrak{B}(H)$，那么

（i）如果 $T^*T=TT^*$，则称 $T$ 是**正规算子**。它是复内积空间 $\mathbb{C}^n$ 上的正规矩阵的推广。

（ii）如果 $T^*=T$，则称 $T$ 是**自伴算子**（或**自共轭算子**、**Hermite 算子**）。它是复内积空间 $\mathbb{C}^n$ 上的 Hermite 矩阵的推广。

（iii）如果 $T^*T=TT^*=I$，则称 $T$ 是**酉算子**。它是复内积空间 $\mathbb{C}^n$ 上的酉矩阵的推广。

显然，自伴算子和酉算子都是特殊的正规算子。

#### 3.3.3 闭值域定理 @136

**定理 3.3.5 (闭值域定理)** @136

若 $X$ 和 $Y$ 是 Banach 空间，$T\in\mathfrak{B}(X,Y)$，则下列命题等价：

（i）$\mathfrak{R}(T)$ 是闭的；

（ii）$\mathfrak{R}(T^*)$ 是闭的；

（iii）$\mathfrak{R}(T)={}^{\perp}\ker(T^*)$；

（iv）$\mathfrak{R}(T^*)=\ker T^\perp$。

**引理 3.3.1 (共轭算子核与值域)** @136

若 $X$ 和 $Y$ 是 Banach 空间，$T\in\mathfrak{B}(X,Y)$，则 $\ker T^*=\mathfrak{R}(T)^\perp$，$\ker T={}^{\perp}\mathfrak{R}(T^*)$。从而 $\overline{\mathfrak{R}(T)}={}^{\perp}\ker T^*$。

**注 (稠值域与单射)** @136

一个直接的推论是：若 $T$ 是稠值域的（即 $\overline{\mathfrak{R}(T)}=Y$），则 $\ker T^*=Y^\perp=\{0\}$，$T^*$ 是单射；类似地，若 $T^*$ 是稠值域的（即 $\overline{\mathfrak{R}(T^*)}=X^*$），则 $T$ 是单射。

反之，若 $T^*$ 是单射，那么 $\overline{\mathfrak{R}(T)}={}^{\perp}\{0\}=Y$，即 $T$ 是稠值域的。

**引理 3.3.2 (共轭单射蕴含满射)** @136

设 $X,Y$ 是 Banach 空间，$T\in\mathfrak{B}(X,Y)$。若 $T^*$ 是单射，且 $\mathfrak{R}(T^*)$ 是闭的，则 $T$ 是满射。

**推论 3.3.1 (算子可逆与共轭可逆)** @137

设 $X$ 和 $Y$ 是 Banach 空间，$T\in\mathfrak{B}(X,Y)$，则 $T$ 是可逆的当且仅当 $T^*$ 是可逆的。

#### 习题（p137–138）

**习题 1** @137

对 Banach 空间 $X$ 上有界线性算子 $T$ 和解析多项式 $p(z)=\sum_{k=0}^na_kz^k$，记 $p(T)=\sum_{k=0}^na_kT^k$。证明：$[p(T)]^*=p(T^*)$。

**习题 2** @137

设 $K(s,t)\in C([0,1]\times[0,1])$，作 Banach 空间 $L^2[0,1]$ 上有界线性算子

$$(Kf)(s)=\int_0^1K(s,t)f(t)\,\mathrm dt,\qquad\forall f\in L^2[0,1].$$

求出 $K^*$ 的表达式，并将结果与例 3.3.4 比较。

**习题 3** @138

设 $T$ 是 Hilbert 空间 $l^2$ 上的有界线性算子。当 $x=(x_\nu)\in l^2$ 时，记 $Tx=(y_\nu)$，其中

$$y_\mu=\sum_{\nu=1}^{\infty}a_{\mu\nu}x_\nu,\qquad\mu=1,2,\cdots.$$

设 $T^*x=(y_\nu^*)$，$y_\mu^*=\sum_{\nu=1}^{\infty}a_{\mu\nu}^*x_\nu$，$\mu=1,2,\cdots$。证明 $a_{\mu\nu}^*=\overline{a_{\nu\mu}}$。

**习题 4** @138

对 Lebesgue 可测函数 $\phi\in L^{\infty}([0,1])$，定义 $M_\phi$ 为

$$M_\phi f=\phi f,\qquad\forall f\in L^2([0,1]),$$

这里 $L^2([0,1])$ 为 $[0,1]$ 上复值平方可积空间。分别在 $L^2([0,1])$ 视为 Banach 空间与 Hilbert 空间的两种情况下，计算 $M_\phi^*$。

**习题 5** @138

设 $T$ 是 $l^p\ (1\leqslant p<\infty)$ 上有界线性算子，且 $Te_n=e_{n+1}\ (n=1,2,\cdots)$。其中 $e_n$ 为第 $n$ 个位置为 $1$，其他为 $0$ 的数列。求出 $\|T\|$ 及 $T^*$。

**习题 6** @138

设 $U$ 是 Hilbert 空间 $H$ 上的有界算子。证明：$U$ 是酉算子当且仅当 $U$ 是一个满射且 $U$ 是等距（即 $\|Ux\|=\|x\|$，$\forall x\in H$）。

**习题 7** @138

设 $T$ 是复线性 Hilbert 空间 $H$ 上的有界算子。证明：$T$ 是自伴算子当且仅当对任意 $x\in H$，$\langle Tx,x\rangle$ 都是实值的。

**习题 8** @138

设 $P$ 是 Hilbert 空间 $H$ 到闭线性子空间 $L$ 的投影，证明 $P$ 是自伴算子。

**习题 9** @138

若 $\{U_n\},U$ 都是 Hilbert 空间 $H$ 上的酉算子。证明：$U_n$ 强算子收敛于 $U$ 当且仅当 $U_n$ 弱算子收敛于 $U$。

**习题 10 (Cotlar（科特勒）)** @138

设 $T_1,T_2,\cdots,T_m$ 是 Hilbert 空间 $H$ 上的有界线性算子，非负数组 $\{\alpha_{1-m},\alpha_{2-m},\cdots,\alpha_{m-1}\}$，$\{\beta_{1-m},\beta_{2-m},\cdots,\beta_{m-1}\}$ 满足

$$\|T_j^*T_k\|\leqslant\alpha_{j-k}^2,\qquad\|T_jT_k^*\|\leqslant\beta_{j-k}^2,\qquad1\leqslant j,k\leqslant m.$$

记 $A=\sum_{k=1-m}^{m-1}\alpha_k$，$B=\sum_{k=1-m}^{m-1}\beta_k$，$C=\sup_{1\leqslant k\leqslant m}\|T_k\|$，$T=T_1+T_2+\cdots+T_m$。

(i) 对任意正整数 $n=2^k$，证明 $\|(T^*T)^n\|\leqslant mCA^nB^{n-1}$；

(ii) 证明 $\|T\|\leqslant\sqrt{AB}$。

**习题 11** @138

证明推论 3.3.1。

**习题 12** @138

设 $X,Y$ 是 Banach 空间，$T\in\mathcal B(X,Y)$。证明：$T$ 是满射当且仅当 $T^*$ 是下有界的，即存在正数 $c$ 使得对任意 $y^*\in Y^*$，有 $\|T^*y^*\|\geqslant c\|y^*\|$。

**习题 13** @138

举例说明：存在 Banach 空间 $X$ 上的有界算子 $T$，使得 $T$ 是单射，但是 $T^*$ 的值域在 $X^*$ 中不稠密。

## 第4章 谱理论初步

### 4.1 预解集与谱集（p140–153）

在对有限维空间上线性变换与矩阵理论的研究中，最核心的一个想法是寻找矩阵的特征值、特征向量，从而将矩阵表示为对角矩阵、Jordan（若尔当）块等简便的形式．在泛函分析中，我们也根据线性算子谱（特征值）研究算子的性质．下面我们将对这方面最基本的概念作一简单介绍．

为简化叙述，在本章中若无特别注释，我们总假设所涉及的赋范线性空间是复线性且完备的．

**定义 4.1.1 (特征值与特征向量)** @140

设 $X$ 是赋范线性空间，$\lambda$ 为一数，$T\in\mathfrak{B}(X,X)$．

（i）如果存在 $X$ 中非零向量 $x$，使得$$Tx=\lambda x,\tag{4.1}$$那么就称 $\lambda$ 是 $T$ 的**特征值**（或**本征值**），而称 $x$ 为 $T$（相应于特征值 $\lambda$）的**特征向量**（或**本征向量**）．

（ii）记 $E_\lambda=\{x:Tx=\lambda x\}$ 是算子 $T$ 的（相应于特征值 $\lambda$ 的）特征向量全体，再加入零向量，称 $E_\lambda$ 为算子 $T$ 的（相应于特征值 $\lambda$ 的）**特征向量空间**．$E_\lambda$ 是闭子空间．

（iii）称 $E_\lambda$ 的维数 $\dim E_\lambda$ 为特征值 $\lambda$ 的**重复度**，这就是方程 (4.1) 的最大线性无关解组中向量的个数．

**例 4.1.1 (有限维特征值)** @140

设 $X$ 是 $n$ 维向量空间，$T$ 为 $X$ 上的线性算子．在 $X$ 中任取一组基 $\{e_1,e_2,\cdots,e_n\}$，设 $T$ 相应的矩阵是 $(a_{\mu\nu})$．这也就是说，如果记 $Tx=y$，其中$$x=\sum_{\nu=1}^n x_\nu e_\nu,\qquad y=\sum_{\mu=1}^n y_\mu e_\mu,$$那么 $y_\mu=\sum_{\nu=1}^n a_{\mu\nu}x_\nu$．这时方程 (4.1) 可改写成线性方程组$$\sum_{\nu=1}^n a_{\mu\nu}x_\nu=\lambda x_\mu,\qquad \mu=1,2,\cdots,n.\tag{4.2}$$因此，$\lambda$ 为算子 $T$ 的特征值的充要条件是 $\lambda$ 为矩阵 $(a_{\mu\nu})$ 的特征值，且 $\lambda$ 的重复度就是线性方程组 (4.2) 的线性独立的最大解组中解的个数．如果系数矩阵 $(\lambda\delta_{\mu\nu}-a_{\mu\nu})$ 的秩为 $n-r$，那么重复度就是 $r$．

**例 4.1.2 (投影算子的谱)** @141

设 $P$ 是 Hilbert 空间 $H$ 到非平凡闭线性子空间 $M$ 上的投影．那么，$0,1$ 是 $P$ 的两个特征值，对应的特征向量空间分别为 $M^\perp,M$．

而对任意数 $\lambda\neq 0,1$，$\lambda I-P$ 均是可逆的．

**例 4.1.3 (积分算子无特征值)** @141

令 $X=L^2[a,b]$．有界线性算子 $T:X\to X$ 为$$(Tx)(t)=\int_a^t x(s)\,\mathrm{d}s,\qquad x\in L^2[a,b].$$方程 (4.1) 即为$$\int_a^t x(s)\,\mathrm{d}s=\lambda x(t),\qquad x\in L^2[a,b].\tag{4.3}$$对任何 $\lambda$，(4.3) 式只有零解，所以 $T$ 没有特征值．

从这个例子我们可以认识到，在无穷维空间上直接使用特征值的概念是不太适当的．

#### 4.1.1 算子的正则点与谱点 @141

**定义 4.1.2 (正则点与谱点)** @141

设 $X$ 是复赋范线性空间，$T$ 是 $X$ 上的有界线性算子，$\lambda$ 是一复数．

（i）如果 $\lambda I-T$ 是 $X$ 上的可逆算子，即 $\lambda I-T$ 是 $X$ 上的双射，且它的逆算子 $(\lambda I-T)^{-1}$ 是 $X$ 上的有界线性算子，则称 $\lambda$ 是 $T$ 的**正则点**，并称 $R_\lambda(T)=(\lambda I-T)^{-1}$ 是 $T$ 的**预解算子**．

（ii）不是正则点的复数 $\lambda$ 称为 $T$ 的**谱点**．

（iii）复平面上正则点全体称为 $T$ 的**预解集**，记为 $\rho(T)$．

（iv）谱点全体称为 $T$ 的**谱集**（或称为**谱**），记为 $\sigma(T)$．

显然 $\rho(T)\cup\sigma(T)$ 就是整个复平面．

**引理 4.1.1 (正则点的判据)** @141

设 $T$ 是复赋范线性空间 $X$ 上的有界线性算子．

（i）$\lambda$ 是 $T$ 的正则点的充要条件是方程$$(\lambda I-T)x=y\tag{4.4}$$对任何 $y$ 都有解，且存在正的常数 $m$，使得 $\|x\|\leqslant m\|y\|$．

（ii）$\lambda$ 不是 $T$ 的特征值的充要条件是 $\lambda I-T$ 是 $X$ 到 $X$ 中的单射．此时，如果 $X$ 还是有限维空间，那么 $\lambda$ 是 $T$ 的正则点．

**例 4.1.4 (谱的常用性质)** @142

（i）设 $T$ 是 Banach 空间 $X$ 上的有界线性算子．对于数 $a\neq 0,b$，由于 $\lambda I-(b+aT)$ 可逆当且仅当 $\dfrac{\lambda-b}{a}I-T$ 可逆，故$$\rho(b+aT)=b+a\rho(T),\qquad \sigma(b+aT)=b+a\sigma(T).$$

（ii）设 $T_1,T_2$ 是 Banach 空间 $X$ 上的有界线性算子，若 $T_1$ 和 $T_2$ 同时可逆，则乘积 $T_1T_2$ 也是可逆的，$T_2^{-1}T_1^{-1}$ 就是 $T_1T_2$ 的逆．逆命题一般不成立（见例 3.2.1）．

但在 $T_1T_2=T_2T_1$ 的情况下，$T_1T_2$ 可逆当且仅当 $T_1$ 和 $T_2$ 同时可逆．

（iii）设 $X$ 为 Banach 空间，$T\in\mathfrak{B}(X)$．由于 $\lambda I_X-T$ 可逆等价于 $\lambda I_{X^*}-T^*$ 可逆，故 $\rho(T)=\rho(T^*)$，$\sigma(T)=\sigma(T^*)$．对于 Hilbert 空间 $H$ 上有界线性算子 $T$，类似可得 $\rho(T)=\rho(T^*)$ 及 $\sigma(T)=\sigma(T^*)$．

（iv）对 Banach 空间 $X$ 上可逆算子 $T$，由于 $\lambda\neq 0$ 时，$\lambda I_X-T^{-1}$ 可逆当且仅当 $T-\dfrac1\lambda I_X$ 可逆，故$$\sigma(T^{-1})=\left\{\lambda\in\mathbb{C}:\frac1\lambda\in\sigma(T)\right\}.$$

**注 (线性算子谱的分类)** @142

对无限维空间中算子 $T$ 而言，它的谱点不仅限于特征值．如例 4.1.3 中算子 $T$ 就没有特征值，但是 $0I-T$ 不是到上的映射，因此 $0$ 并不是正则点．所以，在无限维空间中算子谱的情况是复杂的．下面介绍在理论研究和应用中使用较为广泛的对谱的一种分类．

设 $X$ 是复 Banach 空间，$T$ 为 $X$ 上的有界线性算子，$\lambda\in\sigma(T)$．由逆算子定理，这也就是说 $\lambda I-T$ 不是单射或者满射．

（i）$\lambda$ 是算子 $T$ 的特征值，即 $\ker(\lambda I-T)\neq\{0\}$．这时算子 $\lambda I-T$ 不是单的，因而特征值是谱点．特征值全体称为算子的**点谱**，记作 $\sigma_p(T)$．

（ii）$\lambda$ 不是算子 $T$ 的特征值，即 $\ker(\lambda I-T)=\{0\}$，然而算子的值域 $\overline{\mathfrak{R}(\lambda I-T)}\neq X$，则称 $\lambda$ 为 $T$ 的**剩余谱**，其全体记作 $\sigma_r(T)$．这时算子 $\lambda I-T$ 是单的．但是如果从它的共轭算子来看，$T$ 的值域不稠密，即$$\ker(\lambda I-T)^*=\overline{\mathfrak{R}(\lambda I-T)}^{\perp}\neq\{0\}.$$

（iii）$\lambda$ 不是算子 $T$ 的特征值，算子的值域 $\overline{\mathfrak{R}(\lambda I-T)}=X$，然而 $\mathfrak{R}(\lambda I-T)\neq X$．这类谱点称为**连续谱点**，其全体记作 $\sigma_c(T)$．产生这种情况缘于 $\lambda I-T$ 虽然是单射且稠值域的，但 $\lambda I-T$ 不是下有界的．在这种情况下，可以取到 $X$ 中一个序列 $\{x_n\}$，$\|x_n\|=1$，虽然 $(\lambda I-T)x_n\neq 0$，但 $(\lambda I-T)x_n\to 0$（$n\to\infty$）．

**例 4.1.5 (乘法算子谱)** @143

定义 $C[0,1]$ 上的线性算子 $T$ 为$$T:x(t)\mapsto tx(t),$$容易证明 $T$ 是有界线性算子，$\|T\|=1$．它的谱 $\sigma(T)=\sigma_r(T)=[0,1]$．

**例 4.1.6 (乘法算子连续谱)** @143

令 $L^2[0,1]$ 上有界线性算子 $T$ 为$$T:x(t)\mapsto tx(t).$$则它的谱 $\sigma(T)=\sigma_c(T)=[0,1]$．

#### 4.1.2 谱的初步性质 @143

**引理 4.1.2 (诺伊曼级数)** @143

设 $X$ 为 Banach 空间，$T\in\mathfrak{B}(X)$．如果 $\|T\|<1$，那么算子 $I-T$ 可逆，并且$$(I-T)^{-1}=\sum_{n=0}^\infty T^n.$$

**推论 4.1.1 (可逆性的开性)** @144

设 $X$ 为 Banach 空间，$T$ 在 $\mathfrak{B}(X)$ 中可逆．若 $S\in\mathfrak{B}(X)$，且 $\|S-T\|\leqslant\dfrac1{2\|T^{-1}\|}$，那么 $S$ 也是可逆的，且$$\|S^{-1}-T^{-1}\|\leqslant 2\|T^{-1}\|^2\|T-S\|.$$

**注 (可逆算子全体是开集)** @144

由此可知，可逆元全体 $\mathfrak{B}(X)^{-1}$ 是 $\mathfrak{B}(X)$ 中的开集，并且映射 $T\to T^{-1}$ 在 $\mathfrak{B}(X)^{-1}$ 上连续．

**定理 4.1.1 (预解集与谱集性质)** @144

设 $X$ 为 Banach 空间，$T\in\mathfrak{B}(X)$，则

（i）当 $|\lambda|>\|T\|$ 时，$\lambda\in\rho(T)$；

（ii）$\rho(T)$ 是开集；

（iii）$\sigma(T)$ 是一个紧集．

**定义 4.1.3 (谱半径)** @144

设 $X$ 为 Banach 空间，$T\in\mathfrak{B}(X)$．定义 $T$ 的**谱半径**$$r(T)=\sup_{\lambda\in\sigma(T)}|\lambda|.$$

由定理 4.1.1 知 $r(T)\leqslant\|T\|$．

**例 4.1.7 (谱半径小于范数)** @145

设 $A=\begin{pmatrix}0&1\\0&0\end{pmatrix}$，则 $r(A)=0\neq\|A\|=1$．

**例 4.1.8 (移位算子的谱)** @145

令 $S,T$ 分别是 Hilbert 空间 $l^2$ 的左移位算子与右移位算子，$$S(x_1,x_2,\cdots)\mapsto(x_2,x_3,\cdots);\qquad T(x_1,x_2,\cdots)\mapsto(0,x_1,x_2,\cdots).$$对它们的谱作讨论可得，$\sigma(T)=\sigma(S)=\overline{\mathbb{D}}$．

**例 4.1.9 (酉算子的谱在单位圆)** @145

设 $H$ 为 Hilbert 空间，$U\in\mathfrak{B}(H)$ 为**酉算子**：$UU^*=U^*U=I$，即 $U^{-1}=U^*$．它是酉矩阵在无限维情形的推广．

由此可得 $\sigma(U)\subset\{z:|z|=1\}$．

**例 4.1.10 (自伴算子谱为实)** @146

若 $T$ 是 Hilbert 空间 $H$ 上的自伴算子，可以证明 $\sigma(T)\subset\mathbb{R}$．证明留作练习（见习题 4.1 第 8 题）．

Gel'fand 在 Banach 代数的框架下给出了谱半径的准确公式．

#### 4.1.3 谱半径公式 @146

**定义 4.1.4 (Banach 代数)** @146

设 $\mathcal{A}$ 是复 Banach 空间．如果 $\mathcal{A}$ 还是一个代数，并且满足$$\|TS\|\leqslant\|T\|\,\|S\|,\qquad \forall T,S\in\mathcal{A},$$就称 $\mathcal{A}$ 是一个（复）**Banach 代数**．

如果 $\mathcal{A}$ 具有代数单位元 $e$，并且 $\|e\|=1$，就称 $\mathcal{A}$ 是**具有单位元的 Banach 代数**．

**例 4.1.11 (有界算子代数)** @146

对于 Banach 空间 $X$，它的有界线性算子全体 $\mathfrak{B}(X)$ 就是一个 Banach 代数．恒等算子 $I$ 是它的单位元．

**例 4.1.12 (连续函数代数)** @146

设 $K$ 是紧的度量空间，$C(K)$ 是 $K$ 上复值连续函数的全体，则 $C(K)$ 是一个具有单位元的 Banach 代数．常数函数 $f\equiv 1$ 是它的单位元．

**例 4.1.13 (算子生成的闭代数)** @146

设 $T$ 是 Banach 空间 $X$ 上的有界线性算子，则 $\mathfrak{B}(X)$ 中包含 $\{I,T\}$ 的最小闭子代数 $\mathcal{A}$ 是 Banach 代数．由于 $\{p(T):p\text{ 为多项式}\}$ 在 $\mathcal{A}$ 中稠密，故 $\mathcal{A}$ 是有单位元的交换 Banach 代数．

**例 4.1.14 (整数群上的卷积代数)** @146

设 $\mathbb{Z}$ 是整数集，则$$l^1(\mathbb{Z})=\left\{x=\{x_n\}_{n\in\mathbb{Z}}:\sum_{n\in\mathbb{Z}}|x_n|<\infty\right\}$$按范数 $\|x\|=\sum\limits_{n\in\mathbb{Z}}|x_n|$ 构成一个 Banach 空间．我们定义 $l^1(\mathbb{Z})$ 上乘法：$$xy=\{z_n\}_{n\in\mathbb{Z}},\qquad\text{这里 }z_n=\sum_{k=-\infty}^{\infty}x_ky_{n-k},\quad \forall n\in\mathbb{Z}.$$这个乘法是交换的．若记 $e$ 为在 0 位置取 1，其他位置取 0 的元素，则 $e$ 为 $l^1(\mathbb{Z})$ 的单位元．因此，$l^1(\mathbb{Z})$ 是有单位元的交换 Banach 代数．

**例 4.1.15 (实数群上的卷积代数)** @146

对于 Banach 空间 $L^1(\mathbb{R})$，如果以卷积运算$$(f*g)(x)=\int_{\mathbb{R}}f(x-t)g(t)\,\mathrm{d}m(t)$$作为乘积，可以证明它是没有单位元的交换 Banach 代数．这个 Banach 代数在 Fourier 变换的发展中发挥了重要的作用，对它与 $l^1(\mathbb{Z})$ 的研究是提出与发展 Banach 代数理论的一个重要因素．

**注 (Banach 代数中的谱)** @147

我们只考虑具有单位元 $e$ 的 Banach 代数 $\mathcal{A}$．此时，对于元素 $T\in\mathcal{A}$，我们称 $T$ 是**可逆的**是指存在 $S\in\mathcal{A}$ 使得 $TS=ST=e$．对于 $\lambda\in\mathbb{C}$，若 $\lambda e-T$ 在 $\mathcal{A}$ 中可逆，则称 $\lambda$ 为**正则点**；否则，称 $\lambda$ 为**谱点**．正则点全体记为 $\rho(T)$，称为 $T$ 的**预解集**；谱点全体记为 $\sigma(T)$．使用定理 4.1.1 和推论 4.1.1 中的讨论，可类似证明可逆元全体 $\mathcal{A}^{-1}$ 是 $\mathcal{A}$ 中的一个开集，映射 $T\to T^{-1}$ 在 $\mathcal{A}^{-1}$ 上连续；并且 $\rho(T)$ 是 $\mathbb{C}$ 中的开集，$\sigma(T)$ 是紧集．记$$r(T)=\sup\{|\lambda|:\lambda\in\sigma(T)\}$$为 $T$ 的**谱半径**．下面将证明谱半径公式 $r(T)=\lim\limits_{n\to\infty}\|T^n\|^{\frac1n}$．

**定理 4.1.2 (谱半径极限公式)** @147

设 $\mathcal{A}$ 是具有单位元的 Banach 代数，那么对任意 $T\in\mathcal{A}$，都有$$\varliminf_{n\to\infty}\|T^n\|^{\frac1n}=\inf_{n\geqslant1}\|T^n\|^{\frac1n}.$$

**定理 4.1.3 (谱半径与预解式)** @147

设 $\mathcal{A}$ 是 Banach 代数，$T\in\mathcal{A}$，令 $a=\lim\limits_{n\to\infty}\|T^n\|^{\frac1n}$．那么

（i）当 $|\lambda|>a$ 时，$\lambda\in\rho(T)$．

（ii）当 $|\lambda|>a$ 时，$$(\lambda e-T)^{-1}=\sum_{n=0}^\infty\frac{T^n}{\lambda^{n+1}}.$$

（iii）当 $|\lambda|>\|T\|$ 时，$$\|(\lambda e-T)^{-1}\|\leqslant\frac1{|\lambda|-\|T\|}.$$

**定理 4.1.4 (预解式的解析性)** @148

设 $\mathcal{A}$ 是 Banach 代数，$T\in\mathcal{A}$，若 $f$ 是 $\mathcal{A}$ 上的连续线性泛函，那么 $f((\lambda e-T)^{-1})$ 是 $\rho(T)$ 上的解析函数．

**定义 4.1.5 (弱解析函数)** @148

设 $\Omega$ 是复平面中的开集，$X$ 是复赋范线性空间．对于函数 $\phi:\Omega\to X$，如果对于任意 $f\in X^*$，$f\circ\phi:\Omega\to\mathbb{C}$ 都是 $\Omega$ 上的解析函数，则称 $\phi$ 是（**弱**）**解析的**．

定理 4.1.4 就是说，$\lambda\to(\lambda e-T)^{-1}$ 是 $\rho(T)$ 上的向量值解析函数．

**推论 4.1.2 (谱集非空)** @148

设 $\mathcal{A}$ 是 Banach 代数，$T\in\mathcal{A}$，则 $\sigma(T)$ 是非空的．

**定理 4.1.5 (Gel'fand)** @149

设 $\mathcal{A}$ 是 Banach 代数，$T\in\mathcal{A}$，那么$$r(T)=\lim_{n\to\infty}\|T^n\|^{\frac1n}.$$

**定理 4.1.6 (Gel'fand–Mazur)** @149

设 $\mathcal{A}$ 是 Banach 代数，如果 $\mathcal{A}$ 的每个非零元都是可逆的，那么 $\mathcal{A}$ 等距同构于 $\mathbb{C}$．

**例 4.1.16 (沃尔泰拉算子谱为零)** @149

设 $K(x,y)$ 是三角形 $D=\{(x,y):a\leqslant x\leqslant b,\ a\leqslant y\leqslant x\}$ 上的连续函数，定义 $C[a,b]$ 上的线性算子$$(Tf)(x)=\int_a^x K(x,y)f(y)\,\mathrm{d}y.$$由定理 1.5.5 的计算得 $|(T^nf)(x)|\leqslant\dfrac{M^n(x-a)^n}{n!}\|f\|_\infty$，故此 $\|T^n\|\leqslant\dfrac{M^n(b-a)^n}{n!}$．从而可知$$r(T)=\lim_{n\to\infty}\|T^n\|^{\frac1n}\leqslant\lim_{n\to\infty}\frac{M(b-a)}{\sqrt[n]{n!}}=0.$$这就是说 $\sigma(T)\subset\{0\}$，又由谱非空性质得 $\sigma(T)=\{0\}$．

**定义 4.1.6 (广义幂零算子)** @150

对于 Banach 空间 $X$ 上的有界线性算子 $T$，若 $\lim\limits_{n\to\infty}\|T^n\|^{\frac1n}=0$，则称 $T$ 为**广义幂零算子**．

**例 4.1.17 (自伴算子谱半径)** @150

设 $T$ 为 Hilbert 空间 $H$ 上的自伴算子，即 $T=T^*$．它可视为 Hermite 矩阵在无穷维空间上的推广．那么，我们有 $r(T)=\|T\|$．事实上，由于$$\|T^2\|^{\frac12}=\|T^*T\|^{\frac12}=(\|T\|^2)^{\frac12}=\|T\|,$$继续递归可得$$\|T^4\|^{\frac14}=\|T^2\|^{\frac12}=\|T\|,\cdots,\|T^{2^n}\|^{\frac1{2^n}}=\|T^{2^{n-1}}\|^{\frac1{2^{n-1}}}=\cdots=\|T\|.$$因此，$r(T)=\lim\limits_{n\to\infty}\|T^n\|^{\frac1n}=\|T\|$．

使用类似的技巧，可以说明这个结果对于正规算子也是成立的．读者可以作为练习自行验证．

**注 (谱映射定理)** @150

设 $T$ 是带单位元的 Banach 代数 $\mathcal{A}$ 中元素．若 $p$ 是一个多项式，则有 $\sigma(p(T))=p(\sigma(T))$（见习题 4.1 第 1 题）．这一结果对更多的解析函数也是成立的，通常称之为**谱映射定理**．

设 $\Omega$ 是包含 $\{z\in\mathbb{C}:|z|\leqslant r(T)\}$ 的区域，$f$ 在 $\Omega$ 上解析，$f(z)=\sum\limits_{n=0}^\infty a_nz^n$ 是 $f$ 在点 $0$ 处的 Taylor（泰勒）展开．那么，可取某个严格大于 $r(T)$ 的正数 $R$ 使得 $\sum\limits_{n=0}^\infty a_nz^n$ 在 $|z|\leqslant R$ 时收敛，因此 $M=\sup_n|a_n|R^n<+\infty$．由此可得$$\sum_{n=0}^\infty\|a_nT^n\|\leqslant M\sum_{n=0}^\infty\frac{\|T^n\|}{R^n}=M\sum_{n=0}^\infty\frac{\|T^n\|}{r(T)^n}\left(\frac{r(T)}{R}\right)^n<+\infty.$$从而，算子 $T$ 关于函数 $f$ 的**函数演算** $f(T)=\sum\limits_{n=0}^\infty a_nT^n$ 是合理定义的．

**定理 4.1.7 (谱映射定理)** @150

设 $T$ 是带单位元的 Banach 代数 $\mathcal{A}$ 中元素，$\Omega$ 是包含 $\{z\in\mathbb{C}:|z|\leqslant r(T)\}$ 的区域，$f$ 在 $\Omega$ 上解析．那么$$\sigma(f(T))=f(\sigma(T)).$$

**注 (Riesz 函数演算)** @151

上述定理在更弱的条件下也是成立的．设 $f$ 在谱集 $\sigma(T)$ 的一个邻域 $G$ 上解析，取 $G$ 中一组正定向的简单闭曲线 $\Gamma$，$\Gamma$ 内部包含 $\sigma(T)$，我们可如下定义 **Riesz 函数演算**：$$f(T)=\frac1{2\pi\mathrm{i}}\int_\Gamma f(z)(z-T)^{-1}\,\mathrm{d}z,\quad(\text{积分定义见习题 1.4 第 27 题})$$则有谱映射定理 $\sigma(f(T))=f(\sigma(T))$．（参见文献 [5, 4.3 节]．）

**定义 4.1.7 (不变子空间)** @151

设 $T$ 是赋范线性空间 $X$ 上的有界线性算子，$L$ 是 $X$ 的一个线性子空间．如果 $TL\subset L$，则称 $L$ 是 $T$ 的**不变子空间**．

**例 4.1.18 (不变子空间例子)** @151

设 $X$ 为复 Banach 空间，$T\in\mathfrak{B}(X)$，则 $\ker(\lambda I-T)^n$ 及 $\mathfrak{R}((\lambda I-T)^n)$ 为不变子空间．

**例 4.1.19 (不变子空间运算)** @151

设 $T$ 是复 Banach 空间 $X$ 上有界线性算子，若 $M_1,M_2$ 是 $T$ 的不变子空间，则 $\overline{M_1+M_2}$ 与 $M_1\cap M_2$ 也是 $T$ 的不变子空间．

**注 (不变子空间问题)** @151

显然，子空间 $\{0\}$ 和全空间 $X$ 是 $T$ 的不变子空间，称为**平凡的不变子空间**．人们感兴趣的是，有界线性算子是否有非平凡的、闭的不变子空间．

我们知道，对于有限维线性空间 $X$ 上的线性算子 $T$，有 Jordan 块的理论，根据这个理论，可以把 $X$ 分解成 $T$ 的不变子空间 $X_1,X_2,\cdots,X_n$ 的和使得当我们把 $T$ 限制在 $X_i$ 上时，所得到的线性算子 $T_i$ 只有一个谱点——就是特征值 $\lambda_i$，这时 $X_i$ 包含算子 $T$ 的特征向量空间 $E_{\lambda_i}$，而且 $T_i$ 有很简单的结构．这就是有限维空间上一般线性算子的谱分析．

我们自然希望对照这个理论，对于无限维 Banach 空间上的有界线性算子搞清楚算子的结构，建立起相应的谱分析，这个问题的研究一直是泛函分析的一个重要课题．20 世纪二三十年代已经在两个方面建立起基本理论，其一是相当于是有限维空间中的自共轭矩阵，酉矩阵，正常矩阵的对角化，建立起 Hilbert 空间中正常算子（特别是自伴算子、酉算子）的谱分解理论，其二是由对积分方程的研究产生的紧算子的谱分析．对于一般的有界线性算子，有下面的基本问题：

问题 I：在无限维的复 Banach 空间中，是否每个有界线性算子都一定存在非平凡的不变闭子空间？

这个问题在 1975 年由 P. Enflo（恩弗洛）给出否定的回答．

#### 习题（p152–154）

**习题 1** @152

设 $T$ 是复 Banach 空间 $X$ 上的有界线性算子。对于 $\mathbb C$ 上的一个多项式 $p(z)=\sum_{k=0}^na_kz^k$，定义 $p(T)=\sum_{k=0}^na_kT^k$。证明：

$$\sigma(p(T))=p(\sigma(T)).$$

**习题 2** @152

设 $T$ 是复 Banach 空间 $X$ 上的有界线性算子。若存在正整数 $m$ 使得 $\|T^m\|<1$，证明 $I-T$ 可逆。

**习题 3** @152

设 $T$ 是复 Banach 空间 $X$ 上的有界线性算子，$\lambda_1,\lambda_2,\cdots,\lambda_n$ 为 $T$ 的特征值，对每个 $i\ (i=1,2,\cdots,n)$，设 $x_i$ 是对应于 $\lambda_i$ 的特征向量。证明：$x_1,x_2,\cdots,x_n$ 是线性无关的。

**习题 4** @152

设 $A,B$ 是复 Banach 空间 $X$ 上的有界线性算子。证明：$I-AB$ 可逆当且仅当 $I-BA$ 可逆。

**习题 5** @152

对 Lebesgue 可测函数 $\varphi\in L^{\infty}[0,1]$，定义 $L^2[0,1]$ 上的有界线性算子 $M_\varphi$ 为

$$M_\varphi(f)=\varphi f.$$

求 $\sigma(M_\varphi),\sigma_p(M_\varphi),\sigma_c(M_\varphi),\sigma_r(M_\varphi)$。

**习题 6** @152

对于有界序列 $\{a_n\}$，定义 $l^2$ 上的有界线性算子 $T$ 为

$$T(x_1,x_2,\cdots)=(a_1x_1,a_2x_2,\cdots).$$

求 $\sigma(T),\sigma_p(T),\sigma_c(T),\sigma_r(T)$。

**习题 7** @152

令 $S$ 是 Hilbert 空间上 $l^2$ 的左移位算子，

$$S:(x_1,x_2,\cdots)\mapsto(x_2,x_3,\cdots).$$

求 $\sigma_p(S),\sigma_c(S),\sigma_r(S)$。

**习题 8** @152

设 $T$ 是复 Hilbert 空间 $H$ 上的有界算子。若 $T$ 为自伴算子，即 $T=T^*$，证明：

(i) 对任意 $x\in H$，成立 $\|(T+iI)x\|\geqslant\|x\|$，$\|(T-iI)x\|\geqslant\|x\|$。

(ii) $T\pm iI$ 均是可逆的。

(iii) $\sigma(T)\subset\mathbb R$。

**习题 9** @153

设 $T,S$ 是复 Banach 空间 $X$ 上的有界线性算子，$T$ 可逆，$\|S-T\|<\frac1{\|T^{-1}\|}$。证明：$S$ 可逆，且

$$\|S^{-1}-T^{-1}\|\leqslant\frac{\|T^{-1}\|^2\|S-T\|}{1-\|T^{-1}\|\|S-T\|}.$$

**习题 10** @153

设 $T$ 是复 Banach 空间 $X$ 上的有界线性算子。若预解集 $\rho(T)$ 中的一个点列 $\{\lambda_n\}$ 收敛于点 $\lambda$，证明：$\lambda\in\sigma(T)$ 当且仅当 $\|(\lambda_nI-T)^{-1}\|\to\infty\ (n\to\infty)$。

**习题 11** @153

设 $T$ 是复 Banach 空间 $X$ 上的有界线性算子，$\lambda\in\rho(T)$。若 $\mathcal B(X)$ 中算子列 $\{T_n\}$ 收敛于 $T$，证明：当 $n$ 充分大时，$\lambda\in\rho(T_n)$。

**习题 12** @153

验证例 4.1.14，$l^1(\mathbb Z)$ 是一个具有单位元的交换 Banach 代数。

**习题 13** @153

验证例 4.1.15，$L^1(\mathbb R)$ 是一个交换 Banach 代数，且不具有单位元。

**习题 14** @153

对于矩阵 $A\in M_2(\mathbb C)$，直接计算验证 $r(A)=\lim_{n\to\infty}\|A^n\|^{1/n}$。

**习题 15** @153

设 $A,B$ 是复 Banach 空间 $X$ 上的有界线性算子。证明：

(i) $r(AB)=r(BA)$。

(ii) 当 $A,B$ 可交换时，$r(A+B)\leqslant r(A)+r(B)$。并举例说明，对非交换的情况不等式不成立。

**习题 16** @153

设 $T$ 是有单位元 $e$ 的 Banach 代数 $\mathcal A$ 中元素，$\lambda_0\in\rho(T)$。记 $r_0=\lim_{n\to\infty}\|(\lambda_0e-T)^{-n}\|^{1/n}$。证明：当 $\lambda$ 满足 $|\lambda-\lambda_0|<\frac1{r_0}$ 时，有 $\lambda\in\rho(T)$，且

$$(\lambda e-T)^{-1}=\sum_{n=0}^{\infty}(-1)^n(\lambda_0e-T)^{-(n+1)}(\lambda-\lambda_0)^n.$$

**习题 17** @153

令 $\Gamma=(V,E)$ 是一个局部有限图，$\Delta$ 是 $l^2(\Gamma)$ 上的离散 Laplace 算子（定义见习题 2.1 第 9 题）。对 $f\in l^2(\Gamma)$，令

$$|\nabla f|^2=\frac12\sum_{x\sim y}|f(x)-f(y)|^2.$$

(i) 对于 $u\in C_c(V)$，证明 $\langle\Delta u,u\rangle=\langle u,\Delta u\rangle=-|\nabla u|^2$。并说明当 $u\in l^2(\Gamma)$ 时，公式也是成立的。

(ii) 证明：$\Delta$ 是 $l^2(\Gamma)$ 上的自伴算子。

(iii) 若 $u\in\ker\Delta$，证明：$u$ 是一个常数函数。若 $V$ 是无限集，那么 $u$ 恒为 $0$。

(iv) 证明：$\sigma(-\Delta)\subset[0,2]$。

更多对图、群上的分析等离散几何理论可参见论著 [15]。

**习题 18** @153

设 $\Gamma=(\mathbb Z,E)$，其中 $(x,y)\in E$ 当且仅当 $|x-y|=1$。$\Delta$ 是 $l^2(\Gamma)$ 上的离散 Laplace 算子。

(i) 对于 $f\in l^2(\Gamma)$，计算 $(\Delta+I)f$。

(ii) 证明：$\sigma(-\Delta)=[0,2]$。

**习题 19** @153

令 $\Gamma=(V,E)$ 是一个局部有限图，$\Delta$ 是 $l^2(\Gamma)$ 上的离散 Laplace 算子。

(i) 对于 $t\in\mathbb R$，证明

$$\sum_{k\geqslant0}\frac{i^kt^k\Delta^k}{k!}$$

给出了 $l^2(\Gamma)$ 上的一个有界线性算子。我们将这个算子记作 $\mathrm e^{it\Delta}$。

(ii) 证明：$\mathrm e^{it\Delta}$ 是 $l^2(\Gamma)$ 上的酉算子。

(iii) 对于 $f\in l^2(\Gamma)$，证明：$u(x,t)\stackrel{\mathrm{def}}{=}\mathrm e^{it\Delta}f$ 满足 Schrödinger（薛定谔）方程

$$\begin{cases}i\partial_tu(x,t)=-\Delta u(x,t),&\forall(x,t)\in V\times\mathbb R,\\u(x,0)=f(x),&\forall x\in V.\end{cases}$$

**习题 20** @154

设 $T,S$ 是复 Hilbert 空间 $H$ 上的有界线性算子。

(i) 若 $TS=ST$，证明：$\mathrm e^T\mathrm e^S=\mathrm e^{T+S}$。

(ii) 若 $T$ 是自伴算子，证明 $\mathrm e^{iT}$ 是酉算子。反之，结论是否成立？

**习题 21** @154

设 $T$ 是复 Banach 空间 $X$ 上的有界线性算子，区域 $\Omega$ 包含了闭圆盘 $\{z\in\mathbb C:|z|\leqslant r(T)\}$，函数 $f$ 在 $\Omega$ 上解析。

(i) 取某个严格大于 $r(T)$ 的正数 $R$，使得 $\{z\in\mathbb C:|z|\leqslant R\}$ 包含在 $\Omega$ 中。证明：

$$f(T)=\frac1{2\pi i}\int_{|z|=R}f(z)(z-T)^{-1}\,\mathrm dz.$$

(ii) 设 $\Gamma$ 是 $\Omega$ 中的一条光滑正定向简单闭曲线，$\Gamma$ 内部包含 $\sigma(T)$。证明：

$$f(T)=\frac1{2\pi i}\int_\Gamma f(z)(z-T)^{-1}\,\mathrm dz.$$

注：积分定义见习题 1.4.27。

### 4.2 紧算子（p154–161）

**定义 4.2.1 (有限秩算子)** @154

设 $T$ 是线性空间 $X$ 到线性空间 $Y$ 的线性算子。如果 $TX$ 是 $Y$ 中有限维子空间，就称 $T$ 为**有限秩算子**。

**例 4.2.1 (有限秩算子的表示)** @154

设 $f_1,f_2,\cdots,f_n$ 为 $X$ 上线性泛函，从 $Y$ 中取 $n$ 个向量 $y_1,y_2,\cdots,y_n$，作算子 $T$：$$T(x)=f_1(x)y_1+f_2(x)y_2+\cdots+f_n(x)y_n,\qquad \forall x\in X.\tag{4.5}$$这个算子 $T$ 就是 $X\to Y$ 的有限秩算子。

反过来，$X\to Y$ 的任何有限秩算子 $T$ 都可以写成 (4.5) 式的形式。事实上，因为 $TX$ 是 $Y$ 中有限维的线性子空间，从中可以取出极大的线性无关向量组 $y_1,y_2,\cdots,y_n$。由于 $T(x)=\alpha_1(x)y_1+\alpha_2(x)y_2+\cdots+\alpha_n(x)y_n\in Y$，并由 $\{y_k\}$ 的线性无关性，容易验证 $\alpha_k(x)$ 看作 $X$ 上泛函时是线性的。

如果 $X,Y$ 是赋范线性空间，$f_1,f_2,\cdots,f_n$ 是 $X^*$ 中的 $n$ 个向量，按 (4.5) 式所作算子 $T$ 是 $X\to Y$ 的有限秩的、有界线性算子。事实上，从$$\|Tx\|=\left\|\sum_{k=1}^{n}f_k(x)y_k\right\|\leqslant\left(\sum_{k=1}^{n}\|f_k\|\,\|y_k\|\right)\|x\|$$得到线性算子 $T$ 是有界的。

反之，$X\to Y$ 的任何有限秩的有界线性算子 $T$ 都是 (4.5) 式的形式，其中 $f_1,f_2,\cdots,f_n\in X^*$。利用 Hahn-Banach 延拓定理：令 $y_1,y_2,\cdots,y_{n-1}$ 张成的子空间为 $L_{n-1}$，则 $y_n\notin L_{n-1}$，所以存在连续线性泛函 $f_n\in Y^*$，使得 $f_n(y)=0$（$\forall y\in L_{n-1}$），而 $f_n(y_n)=1$。因而$$f_n(Tx)=f_n\left(\sum_{k=1}^{n}\alpha_k(x)y_k\right)=\alpha_n(x)f_n(y_n)=\alpha_n(x).$$因此 $|\alpha_n(x)|\leqslant\|f_n\|\,\|T\|\,\|x\|$，即 $\alpha_n$ 是 $X$ 上的连续线性泛函；同样可证 $\alpha_1,\alpha_2,\cdots,\alpha_{n-1}\in X^*$。

**例 4.2.2 (有限秩算子的谱)** @155

设 $X$ 是无限维的 Banach 空间，$\{x_1,x_2,\cdots,x_n\}$ 是 $X$ 中 $n$ 个线性无关的向量，$T$ 是 $X$ 上有限秩的、有界线性算子，$$Tx=\alpha_1(x)x_1+\alpha_2(x)x_2+\cdots+\alpha_n(x)x_n,\tag{4.6}$$其中 $\alpha_j(x)\in X^*$（$j=1,2,\cdots,n$）。

如果 $\lambda\in\mathbb{C}$，$\lambda\neq0$ 是 $T$ 的特征值，那么 $Tx=\lambda x$，则 $x$ 是 $x_1,x_2,\cdots,x_n$ 的线性组合。设$$x=a_1x_1+a_2x_2+\cdots+a_nx_n,$$将它代入方程 (4.6)，得到方程组$$\sum_{i=1}^{n}a_i\alpha_j(x_i)=\lambda a_j\quad(j=1,2,\cdots,n).$$即 $\lambda$ 是矩阵 $(\alpha_j(x_i))_{n\times n}$ 的特征值，$(a_1,a_2,\cdots,a_n)$ 是相应的特征向量。

如果 $\lambda=0$，那么 $Tx=0$ 的所有向量就是满足方程组$$\alpha_j(x)=0\quad(j=1,2,\cdots,n)$$的所有向量。不妨假设 $\alpha_1,\alpha_2,\cdots,\alpha_n$ 中极大线性无关组的个数为 $k$，并且就是 $\alpha_1,\alpha_2,\cdots,\alpha_k$，使用高等代数中的方法容易证明存在 $X$ 中的线性无关向量 $z_1,z_2,\cdots,z_k$，使得 $\alpha_j(z_i)=\delta_{ji}$（$1\leqslant j,i\leqslant k$），那么对于任意的 $x\in X$，向量 $y=x-\sum\limits_{j=1}^{k}\alpha_j(x)z_j$ 都满足 $\alpha_i(y)=0$（$i=1,2,\cdots,n$），即 $Ty=0$，这是一个无限维的子空间。除了这些特征值之外，根据下一节中有关紧算子的谱的定理，有限秩算子没有其他的谱点。

**定义 4.2.2 (紧算子)** @156

设 $T$ 是赋范线性空间 $X$ 映射到赋范线性空间 $Y$ 中的线性算子。如果它把 $X$ 中任何有界集映射成 $Y$ 的相对列紧集，则称 $T$ 是**紧算子**。

由于赋范空间中相对列紧集是有界的，所以紧算子是有界的。

**例 4.2.3 (有限秩算子紧)** @156

赋范线性空间 $X$ 到赋范线性空间 $Y$ 中的有限秩的、有界线性算子 $T$ 是紧算子。

事实上，根据 $T$ 是有界的，$X$ 中有界集 $A$ 的像 $TA$ 是 $Y$ 中有界集，并且它包含在 $Y$ 的一个有限维子空间中。任何有限维赋范线性空间中的有界集一定是相对列紧集，因此 $T$ 是紧算子。

**例 4.2.4 (Fredholm 算子)** @156

设 $K(s,t)$ 是 $[a,b]\times[a,b]$ 上二元连续函数。我们作 $C[a,b]$ 到 $C[a,b]$ 中的算子 $K$ 如下：$$(K\varphi)(s)=\int_a^bK(s,t)\varphi(t)\,\mathrm{d}t,\qquad \forall\varphi\in C[a,b].\tag{4.7}$$这个算子 $K$ 称为**Fredholm 算子**，或称为**积分算子**。它是积分方程论中非常重要的研究对象。容易看出 $K$ 一般不是有限秩算子。然而，$K$ 是 $C[a,b]$ 上的紧算子。

**定理 4.2.1 (紧算子空间的性质)** @157

设 $X,Y$ 是两个赋范线性空间，那么

（i）$\mathcal{K}(X,Y)$ 是 $\mathfrak{B}(X,Y)$ 的线性子空间；

（ii）设 $T\in\mathcal{K}(X,Y)$。如果 $Z$ 是赋范线性空间，且 $S\in\mathfrak{B}(Y,Z)$，$S'\in\mathfrak{B}(Z,X)$，那么 $ST\in\mathcal{K}(X,Z)$，$TS'\in\mathcal{K}(Z,Y)$；

（iii）如果 $Y$ 是 Banach 空间，那么 $\mathcal{K}(X,Y)$ 是 Banach 空间 $\mathfrak{B}(X,Y)$ 的闭子空间。

**注 4.2.1 (紧算子构成闭理想)** @158

上述性质说明，$\mathfrak{B}(X)$ 中的紧算子全体 $\mathcal{K}(X)$ 是 $\mathfrak{B}(X)$ 的一个闭子理想。

**例 4.2.5 (Fredholm 型算子)** @158

设 $K(s,t)\in L^2(E)$，其中 $E=[a,b]\times[a,b]$（$-\infty<a<b<\infty$）。在 $L^2[a,b]$ 上，作算子$$(K\varphi)(s)=\int_a^bK(s,t)\varphi(t)\,\mathrm{d}t,\qquad \forall\varphi\in L^2[a,b],\tag{4.8}$$则 $K$ 是 $L^2[a,b]$ 上的有界线性算子，并且还是紧算子，称 $K$ 为 **Fredholm 型算子**。

由 Schwarz 不等式和 Fubini 定理可得范数估计$$\|K\|\leqslant\left(\iint_E|K(s,t)|^2\,\mathrm{d}t\,\mathrm{d}s\right)^{\frac12}.\tag{4.9}$$

**例 4.2.6 (投影逼近紧算子)** @159

设 $H$ 是一个可分的 Hilbert 空间，$\{e_1,e_2,\cdots,e_n,\cdots\}$ 为其正交基。令 $P_n$ 为从 $H$ 到子空间 $\operatorname{span}\{e_1,e_2,\cdots,e_n\}$ 的投影算子，即 $P_n(x)=\sum\limits_{i=1}^{n}\langle x,e_i\rangle e_i$。如果 $H$ 上算子列 $\{P_nT\}_n$ 依算子范数收敛于 $T$，则 $T$ 是紧的。这个结论的逆命题也是正确的，证明留作练习。

**命题 4.2.1 (紧算子的弱收敛刻画)** @159

设 $T$ 是可分自反空间 $X$ 上的有界线性算子。那么 $T$ 是紧的充要条件是对 $X$ 中任意弱收敛序列 $x_n\xrightharpoonup{x}$（$n\to\infty$），都有 $Tx_n\to Tx$（$n\to\infty$）。

**注 4.2.2 (紧性判据的简化)** @159

（i）命题 4.2.1 中的判定条件显然可改写为：若序列 $x_n\xrightharpoonup{0}$（$n\to\infty$），则 $Tx_n\to0$（$n\to\infty$）。

（ii）由附录中的定理 D.2 可得，$X$ 的可分性并不是必需的。

**命题 4.2.2 (紧算子的像可分)** @159

设 $X,Y$ 是赋范线性空间，$T\in\mathcal{K}(X,Y)$，那么 $TX$ 是 $Y$ 中的可分子集。

**定理 4.2.2 (紧算子的共轭紧)** @159

设 $X,Y$ 是赋范线性空间，$T\in\mathfrak{B}(X,Y)$。若 $T$ 是紧算子，那么 $T^*\in\mathcal{K}(Y^*,X^*)$。如果 $Y$ 是 Banach 空间，则逆命题也正确。

#### 习题（p161–162）

**习题 1** @161

设 $K(s,t)$ 是全平面上 Lebesgue 可测函数，且

$$\iint_{\mathbb R\times\mathbb R}|K(s,t)|^2\,\mathrm ds\,\mathrm dt<\infty.$$

作 $L^2(\mathbb R)$ 上线性算子 $T$：

$$(Tf)(s)=\int_{\mathbb R}K(s,t)f(t)\,\mathrm dt,$$

问 $T$ 是否 $L^2(\mathbb R)$ 上的紧算子？

**习题 2** @161

设 $T$ 是 Banach 空间 $X$ 上有界线性算子，$L$ 是 $T$ 的不变子空间。对于 $x\in X$，记等价类 $[x]=x+L$。在 Banach 空间 $\widetilde X=X/L$ 上作算子 $\widetilde T:[x]\mapsto[Tx]$。

(i) 证明：$\widetilde T$ 是 Banach 空间 $\widetilde X$ 上有界线性算子。

(ii) 若 $T$ 是 $X$ 上的紧算子，证明：$\widetilde T$ 也是 $\widetilde X$ 上的紧算子。

**习题 3** @161

设 $T$ 为 $l^2(\mathbb Z)$ 上的有界线性算子。记 $e_n=(0,0,\cdots,0,1,0,\cdots)$（第 $n$ 个坐标为 $1$，其他为 $0$），则

$$Te_k=\sum_{j=-\infty}^{\infty}a_{jk}e_j,\qquad k\in\mathbb Z.$$

如果 $\sum_{j,k=-\infty}^{\infty}|a_{jk}|^2<\infty$，证明：$T$ 是 $l^2(\mathbb Z)$ 上的紧算子。

**习题 4** @161

设 $1<p<\infty$，$\frac1p+\frac1q=1$，$K(i,j)$ 满足

$$\sum_{i=1}^{\infty}\left(\sum_{j=1}^{\infty}|K(i,j)|^q\right)^{p/q}<\infty.$$

证明：$l^p$ 上的线性算子

$$(Tx)(i)=\sum_{j=1}^{\infty}K(i,j)x(j),\qquad\forall x\in l^p$$

为 $l^p$ 上的紧算子。

**习题 5** @161

对于有界数列 $\{a_n\}$，Hilbert 空间 $l^2$ 上的有界线性算子

$$(x_1,x_2,\cdots,x_n,\cdots)\mapsto(a_1x_1,a_2x_2,\cdots,a_nx_n,\cdots)$$

何时是紧的？

**习题 6** @162

对 Lebesgue 可测函数 $\varphi\in L^{\infty}[0,1]$，定义 $L^2[0,1]$ 上的有界线性算子 $M_\varphi$ 为

$$M_\varphi(f)=\varphi f.$$

证明：$M_\varphi$ 是紧算子当且仅当 $\varphi=0$。

**习题 7** @162

设 $T$ 是可分的 Hilbert 空间 $H$ 上有界线性算子。证明：$T$ 是紧算子当且仅当 $T^*T$ 是紧的，也当且仅当 $TT^*$ 是紧的。

**习题 8** @162

设 $\{e_1,e_2,\cdots,e_n,\cdots\}$ 是 Hilbert 空间 $H$ 的一个正交基。令

$$P_n(x)=\sum_{k=1}^n\langle x,e_n\rangle e_n$$

是到子空间 $\operatorname{span}\{e_1,e_2,\cdots,e_n\}$ 上的投影算子。若 $H$ 上有界线性算子 $T$ 是紧的，证明：$P_nT$ 按范数收敛于 $T$。

**习题 9** @162

设 $1<p<\infty$，$\frac1p+\frac1q=1$，$K(s,t)$ 是正方形 $[a,b]\times[a,b]$ 上的可测函数且满足

$$\int_a^b\left(\int_a^b|K(s,t)|^q\,\mathrm dt\right)^{p/q}\,\mathrm ds<\infty.$$

证明：$L^p[a,b]$ 上的线性算子

$$(Tf)(s)=\int_a^bK(s,t)f(t)\,\mathrm dt,\qquad\forall f\in L^p[a,b]$$

为 $L^p[a,b]$ 上的紧算子。

**习题 10** @162

设 $X,Y$ 是 Banach 空间，$A,B\in\mathcal B(X,Y)$，且 $\mathfrak R(A)\subset\mathfrak R(B)$。

(i)（Douglas（道格拉斯））若 $B$ 是单射，那么存在 $C\in\mathcal B(X)$ 使得 $A=BC$。

(ii) 证明：若 $B$ 是紧算子，则 $A$ 也是紧的。

### 4.3 紧算子的谱（p162–168）

有限维赋范线性空间上的线性算子是最简单的紧算子，这种算子的谱的许多性质都已经知道，例如每个谱点都是特征值（特征向量空间当然是有限维的）等。本节研究如何把有限维空间上线性算子的这些性质和结构推广到 Banach 空间（主要是无限维）上的紧算子，中心是 Riesz-Schauder 关于紧算子的特征值和特征向量空间的理论。

**定理 4.3.1 (Riesz-Schauder)** @162

设 $X$ 是复 Banach 空间，$T$ 是 $X$ 上紧算子。

（i）当 $X$ 是无限维空间时，$0$ 是 $T$ 的谱点。

（ii）紧算子 $T$ 的非零谱点是 $T$ 的特征值。即：如果 $\lambda\neq 0$，$\lambda$ 不是 $T$ 的特征值，那么 $\lambda\in\rho(T)$。

（iii）当 $\lambda\neq 0$，且是 $T$ 的特征值时，$\lambda$ 的特征向量空间是有限维的。

（iv）设 $\lambda_1,\lambda_2,\cdots,\lambda_n$ 是 $T$ 的不同的特征值，$x_1,x_2,\cdots,x_n$ 是相应的特征向量，那么 $x_1,x_2,\cdots,x_n$ 是线性无关的。

（v）$\sigma(T)$ 的极限点只可能是 $0$（因而 $\sigma(T)$ 是有限集或可列集）。

**例 4.3.1 (沃尔泰拉算子的谱)** @163

令 $L^2[0,1]$ 上 Volterra 算子 $T$ 为$$(Tf)(x)=\int_0^x f(y)\,\mathrm{d}y,$$我们使用 Riesz-Schauder 定理来计算 $T$ 的谱。由于 $T$ 是积分核为 $K(x,y)=\chi_{y\leqslant x}(x,y)$ 的积分算子，由例 4.2.5，$T$ 为紧算子，故 $0\in\sigma(T)$。当 $\lambda\neq 0$ 时，考虑特征方程$$(Tf)(x)=\lambda f(x)=\int_0^x f(y)\,\mathrm{d}y.$$这个积分方程等价于微分方程$$\begin{cases}\lambda f(0)=0,\\ \lambda f'(x)=f(x).\end{cases}$$从而可得 $f\equiv 0$。这说明 $\lambda\notin\sigma_p(T)$，即 $\sigma(T)=\{0\}$。

从而可得 $r(T)=0$。由谱半径公式，$$\lim_{n\to\infty}\|T^n\|^{1/n}=r(T)=0,$$即 $T$ 是**广义幂零算子**（如何直接验证）。

**引理 4.3.1 (满射紧算子正则点)** @164

设 $T$ 是复 Banach 空间 $X$ 上的紧算子，$\lambda$ 是非零复数，如果 $(\lambda I-T)X=X$，那么 $\lambda$ 是算子 $T$ 的正则点。

**引理 4.3.2 (紧算子值域闭)** @165

设 $T$ 是 Banach 空间 $X$ 上的紧算子，$\lambda$ 是非零复数，那么 $\mathfrak{R}(\lambda I-T)$ 是 $X$ 的闭子空间。

**定理 4.3.2 (Riesz-Schauder)** @165

设 $X$ 为复 Banach 空间，$T$ 为 $X$ 上紧算子，那么

（i）$\sigma(T^*)=\sigma(T)$。

（ii）当 $\lambda\in\sigma(T)$，并且 $\lambda\neq 0$ 时，空间 $\ker(\lambda I-T)$ 与 $\ker(\lambda I-T^*)$ 具有相同的维数；它也是 $X/\mathfrak{R}(\lambda I-T)$ 和 $X^*/\mathfrak{R}(\lambda I-T^*)$ 的维数。

（iii）如果 $\lambda\neq\mu$，那么 $T$ 的相应于 $\lambda$ 的特征向量 $x$ 与 $T^*$ 的相应于 $\mu$ 的特征向量 $f$ 正交，即 $f(x)=0$。

（iv）假设 $\lambda$ 是 $T$ 的非零特征值，那么方程 $(\lambda I-T)x=y$ 可解的充要条件是：$y$ 与 $T^*$ 的任一相应于 $\lambda$ 的特征向量 $f$ 正交。

（v）如果 $\lambda$ 为 $T$ 的非零特征值，那么共轭方程 $(\lambda I-T^*)g=f$ 可解的充要条件是：$f$ 与 $T$ 的任一相应于 $\lambda$ 的特征向量 $x$ 正交。

**例 4.3.2 (弗雷德霍姆方程)** @167

设积分核 $K(x,y)\in L^2(E)$，其中 $E=[a,b]\times[a,b]$，则 $L^2[a,b]$ 上算子$$(Tf)(x)=\int_{[a,b]}K(x,y)f(y)\,\mathrm{d}y,\qquad \forall f\in L^2[a,b]$$是紧的。那么对固定的 $g(x)\in L^2[a,b]$ 及 Fredholm 方程$$\lambda\int_{[a,b]}K(x,y)f(y)\,\mathrm{d}y+g(x)=f(x),\tag{4.15}$$显然只需讨论 $\lambda\neq 0$ 的情况。

若齐次方程$$\lambda\int_{[a,b]}K(x,y)f(y)\,\mathrm{d}y=f(x)$$只有零解，即 $\ker(I-\lambda T)=\{0\}$，则 $I-\lambda T$ 是可逆的。从而，对任意 $f\in L^2[a,b]$，方程 (4.15) 都有唯一的 $L^2[a,b]$ 解。

而当 $\ker(I-\lambda T)\neq\{0\}$ 时，注意到 $\mathfrak{R}(I-\lambda T)={}^\perp\ker(I-\overline{\lambda}T^*)$，故先求解齐次方程$$\overline{\lambda}\int_{[a,b]}\overline{K(y,x)}f(y)\,\mathrm{d}y=f(x),$$取得 $m$ 个线性无关解后，使用 Gram-Schmidt 正交化方法可得 $\ker(I-\overline{\lambda}T^*)$ 中的一组标准正交基 $\{\phi_1,\phi_2,\cdots,\phi_m\}$，则对于 $g\in L^2[a,b]$，方程 (4.15) 有解当且仅当$$\int_{[a,b]}g(y)\overline{\phi_k(y)}\,\mathrm{d}y=0,\qquad k=1,2,\cdots,m.$$

**注 (紧算子的不变子空间)** @167

若 Banach 空间上的紧算子 $T$ 没有特征值，则 $\sigma(T)=\{0\}$，此时从谱分析得不到太多算子的结构信息。幸运的是，紧算子 $T$ 有非常多的不变子空间。

**定理 4.3.3 (Lomonosov（罗蒙诺索夫）不变子空间定理)** @167

设 $X$ 是无限维的复 Banach 空间，$T\in\mathfrak{B}(X)$ 是非零的紧算子。那么，存在 $X$ 的一个非平凡闭子空间 $M$，对于每个与 $T$ 可交换的算子 $S\in\mathfrak{B}(X)$，都有$$S(M)\subset M.$$

**例 4.3.3 (沃尔泰拉算子不变子空间)** @168

对于例 4.3.1 中的 Volterra 算子 $T$：$$(Tf)(x)=\int_0^x f(y)\,\mathrm{d}y,\qquad \forall f\in L^2[0,1],$$容易验证 $L^2[t,1]$（$0\leqslant t\leqslant 1$）是 $T$ 的不变子空间。实际上，这也是 $T$ 的所有不变子空间，并且将这些不变子空间按 $t$ 的大小排序为 $\{L^2[t,1]\}_{0\leqslant t\leqslant 1}$，$T$ 有接近于上三角形矩阵形式的结构。

#### 习题（p168–169）

**习题 1** @168

证明定理 4.3.2 (iii)、(iv) 及 (v)。

**习题 2** @168

设 $T$ 是 Banach 空间 $X$ 上的紧算子，$\lambda$ 是非零复数。记 $S=\lambda I-T$，$N(S)=\ker S$。那么

(i)

$$N(S)\subset N(S^2)\subset\cdots\subset N(S^n)\subset N(S^{n+1})\subset\cdots,$$

并且存在 $K$，使得 $N(S^K)=N(S^{K+1})=N(S^{K+2})=\cdots$。记 $m$ 为最小的非负整数，使得 $N(S^m)=N(S^{m+1})$，如果 $N(S)=0$，设 $m=0$。

(ii)

$$\mathfrak R(S)\supset\mathfrak R(S^2)\supset\cdots\supset\mathfrak R(S^n)\supset\mathfrak R(S^{n+1})\supset\cdots,$$

并且存在 $L$，使得 $\mathfrak R(S^L)=\mathfrak R(S^{L+1})=\mathfrak R(S^{L+2})=\cdots$。记 $r$ 为最小的非负整数，使得 $\mathfrak R(S^r)=\mathfrak R(S^{r+1})$，如果 $\mathfrak R(S)=X$，设 $r=0$。

**习题 3** @168

$X,T,S,r$ 如第 2 题，记 $X_1=\mathfrak R(S^r)$，$X_2=N(S^r)$，证明：

(iii) 算子 $S$ 将 $X_1$ 一对一到上映射到自身。

(iv) $X_2$ 是有限维的，$S$ 将 $X_2$ 映射到 $X_2$。

(v) $X$ 中的每个向量都可以唯一地表示成：

$$x=x_1+x_2,\qquad\text{其中 }x_1\in X_1,\ x_2\in X_2,$$

并且存在常数 $M>0$，使得 $\|x_1\|\leqslant M\|x\|$，$\|x_2\|\leqslant M\|x\|$，即 $X=X_1\oplus X_2$。

(vi) 算子 $T$ 可以表示成

$$T=T_1+T_2,$$

其中 $T_1$ 是从 $X$ 到 $X_1$ 的紧算子，$T_2$ 是从 $X$ 到 $X_2$ 的紧算子，$T_1T_2=0$。将算子 $S_1=\lambda I-T_1$ 看成从 $X_1$ 到 $X_1$ 的算子是可逆的。

**习题 4** @168

$X,T,S,r,m$ 如第 2 题，证明：$r=m$。

**习题 5** @168

设 $T$ 是复 Banach 空间 $X$ 上的紧算子。若 $T^2=T$，证明：$T$ 为有限秩算子。

**习题 6** @168

设 $p$ 是常数项非零的多项式，$T$ 为无穷维 Banach 空间上的有界线性算子。若 $p(T)=0$，证明：$T$ 不是紧算子。

**习题 7** @168

设 $T$ 是无限维 Banach 空间 $X$ 上的有界算子。假设 $T$ 是下有界的：存在数 $c>0$ 使得对任意 $x\in X$ 成立 $\|Tx\|\geqslant c\|x\|$。证明：$T$ 不是紧的。

**习题 8** @168

设 $X$ 是 Banach 空间，$A,K\in\mathcal B(X)$。若 $K$ 还是紧算子，证明：

$$\sigma(A+K)\subset\sigma_p(A+K)\cup\sigma(A).$$

**习题 9** @169

设 Hilbert 空间 $l^2$ 上的有界线性算子 $W$ 定义为

$$W(x_1,x_2,\cdots,x_n,\cdots)=\left(0,x_1,\frac12x_2,\cdots,\frac1n x_n,\cdots\right).$$

(i) 证明：$W$ 是紧算子。

(ii) 求 $\sigma(W),\sigma_p(W)$。

(iii) 给出 $W$ 的一个非平凡不变子空间。

**习题 10** @169

设 $C[0,1]$ 上的有界线性算子 $T$ 定义为

$$(Tf)(x)=\int_0^1[\sin(x-y)\pi]f(y)\,\mathrm dy.$$

证明：$T$ 为紧算子，并求 $\sigma(T),\sigma_p(T)$。

**习题 11** @169

设 $C[0,1]$ 上的有界线性算子 $T$ 定义为

$$(Tf)(x)=\int_0^{1-x}f(y)\,\mathrm dy.$$

证明：$T$ 为紧算子，并求 $\sigma(T),\sigma_p(T)$。

**习题 12** @169

令 $[0,1]\times[0,1]$ 上二元函数

$$K(x,y)=\begin{cases}(1-x)y,&y\leqslant x,\\(1-y)x,&x\leqslant y.\end{cases}$$

它给出的 $L^2[0,1]$ 上的有界 Fredholm 积分算子为

$$(Tf)(x)=\int_0^1K(x,y)f(y)\,\mathrm dy.$$

(i) 证明：$T$ 是 $L^2[0,1]$ 上的紧的自伴算子。

(ii) 证明 $\sigma_p(T)=\left\{\frac1{(n\pi)^2}:n=1,2,\cdots\right\}$，并求 $\lambda=\frac1{(n\pi)^2}$ 时的 $\ker(\lambda I-T)$。

(iii) 求 $\|T\|$。

### 4.4 自伴紧算子（p169–176）

对于 Hilbert 空间紧算子 $T$，若 $T$ 还是自伴的，即 $T^*=T$，那么 $T$ 有非常清晰的算子结构。我们先给出自伴紧算子特征值和特征空间的性质。

**引理 4.4.1 (自伴算子特征值实)** @169

若 $T$ 是 Hilbert 空间自伴算子，$\mu$ 为 $T$ 的特征值，则 $\mu\in\mathbb{R}$。

**引理 4.4.2 (不同特征向量正交)** @170

若 $T$ 是 Hilbert 空间上的自伴算子，$f_1,f_2$ 分别为不同特征值 $\mu,\nu$ 的特征向量，则 $f_1\perp f_2$。

**引理 4.4.3 (自伴紧算子范数)** @170

若 $T$ 是 Hilbert 空间自伴紧算子，则$$\|T\|=\max_{x\in\sigma_p(T)}|x|.$$

**定理 4.4.1 (自伴紧算子正交基)** @170

若 $T$ 是 Hilbert 空间 $H$ 上的自伴紧算子，则存在 $T$ 的一些特征向量 $\{e_\lambda\}$ 构成 $H$ 的一组标准正交基。

**定理 4.4.2 (自伴紧算子谱分解)** @170

若 $T$ 是 Hilbert 空间 $H$ 上的自伴紧算子，将 $T$ 的非零特征值按绝对值从大到小排列为$$|\lambda_1|\geqslant|\lambda_2|\geqslant\cdots\geqslant|\lambda_n|\geqslant\cdots,$$记 $E_n=\ker(\lambda_n-T)$ 为特征空间，那么$$T=\sum_n\lambda_nP_{E_n}\quad(\text{求和按范数收敛}).$$

在上述定理给出的标准正交基下，算子 $T$ 可表示为对角矩阵。我们也可将这一结果改写为投影算子的形式。

**例 4.4.1 (自伴积分算子谱分解)** @171

设积分核 $K(x,y)\in L^2(E)$ 满足 $K(x,y)=\overline{K(y,x)}$，其中 $E=[a,b]\times[a,b]$，则 $L^2[a,b]$ 上算子$$(Tf)(x)=\int_{[a,b]}K(x,y)f(y)\,\mathrm{d}y,\qquad \forall f\in L^2[a,b]$$是自伴的紧算子。取 $T$ 的特征向量构成的一组正交基 $\{e_n\}$，设对应特征值为 $\lambda_n$，即 $Te_n=\lambda_ne_n$。令 $E_n=\mathbb{C}e_n$ 为对应的特征空间，则 $P_n(x)=\langle x,e_n\rangle e_n$ 为 $H$ 到 $E_n$ 的投影算子，且 $H=\bigoplus_nE_n$。

那么，对固定的 $g(x)\in L^2[a,b]$ 及 Fredholm 方程$$\lambda\int_{[a,b]}K(x,y)f(y)\,\mathrm{d}y+g(x)=f(x),\tag{4.16}$$令 $f=\sum\limits_nf_ne_n$、$g=\sum\limits_ng_ne_n$ 为 $f,g$ 在此基底下的 Fourier 展开，则方程 (4.16) 等价于$$\sum_n(\lambda_n\lambda f_n+g_n)e_n=\sum_nf_ne_n,$$这意味着对于 $n$，有 $(\lambda_n\lambda f_n+g_n)=f_n$，由此容易求出系数 $f_n$ 以及方程的解 $f$。例如，若对每个 $n$ 均有 $\lambda_n\lambda\neq1$，则可解得 $f_n=\dfrac{g_n}{1-\lambda_n\lambda}$ 以及 $f=\sum\limits_n\dfrac{g_n}{1-\lambda_n\lambda}e_n$。

**注 (自伴紧算子的函数演算)** @172

对于 Hilbert 空间 $H$ 上的自伴紧算子 $T$，可将其对角化成定理 4.4.2 中的形式。那么，对任何 $\sigma(T)$ 上的函数 $f$，函数演算 $f(T)$ 可定义为$$f(T)=\sum_nf(\lambda_n)P_{E_n}.$$容易看出，这一定义与 4.1 节的定义是一致的。

**构造 (算子 $T$ 的绝对值)** @172

对一般的紧算子 $T$，显然 $T^*T$ 是自伴的，且 $T^*T$ 的任何点谱都是非负的：实际上，若 $T^*Tx=\lambda x$，则$$\lambda=\frac{\langle T^*Tx,x\rangle}{\langle x,x\rangle}=\frac{\|Tx\|^2}{\|x\|^2}\geqslant0.$$注意到 $f(x)=\sqrt{x}$ 是 $\sigma(T^*T)$ 上的函数，就可得到算子 $T$ 的**绝对值**$$|T|=\sqrt{T^*T}.$$显然 $|T|$ 是自伴的紧算子，并且 $|T|^2=T^*T$。下面的结果给出了 $T$ 与 $|T|$ 的直接联系。

**定理 4.4.3 (极分解)** @172

设 $T$ 是 Hilbert 空间 $H$ 上的紧算子。那么存在 $W\in\mathfrak{B}(H)$ 使得$$T=W|T|,\qquad |T|=W^*T.$$

**注 (Hilbert-Schmidt 算子与迹类算子)** @172

在积分方程和量子统计力学中，Hilbert-Schmidt 算子和迹类算子是经常出现的紧算子类。为引出它们的定义，我们需要下面的引理。

**引理 4.4.4 (希尔伯特施密特范数)** @172

设 $\{e_n\},\{f_m\}$ 是 Hilbert 空间 $H$ 的两组标准正交基，$T\in B(H)$。那么$$\sum_n\|Te_n\|^2=\sum_m\|T^*f_m\|^2.$$

由引理 4.4.4 可知，$\sum\limits_n\|Te_n\|^2$ 与标准正交基 $\{e_n\}$ 的选取无关，实际上是算子 $T$ 的一个固有属性。

**定义 4.4.1 (Hilbert-Schmidt 算子)** @173

若 Hilbert 空间 $H$ 上的有界线性算子 $T$ 满足 $\|T\|_2<\infty$，则称 $T$ 是 **Hilbert-Schmidt 算子**，其中$$\|T\|_2=\sqrt{\sum_n\|Te_n\|^2}$$称为 $T$ 的 **Hilbert-Schmidt 范数**。$H$ 上的 Hilbert-Schmidt 算子全体记作 $S_2(H)$（或简写为 $S_2$）。

由引理 4.4.4，若 $T$ 是 Hilbert-Schmidt 算子，显然 $T^*$ 也是 Hilbert-Schmidt 算子，并且 $\|T\|_2=\|T^*\|_2$。因此 $S_2(H)$ 是一个自伴的算子类。

**定理 4.4.4 (希尔伯特施密特空间)** @173

设 $H$ 是 Hilbert 空间。

（i）对于 $T\in S_2$，有 $\|T\|\leqslant\|T\|_2$。

（ii）$S_2$ 依范数 $\|\cdot\|_2$ 构成一个 Banach 空间。

（iii）对于 $T,S\in S_2$ 和任取的一组标准正交基 $\{e_n\}$，令$$\langle T,S\rangle_2=\sum_n\langle Te_n,Se_n\rangle,$$则 $\langle\cdot,\cdot\rangle_2$ 与标准正交基 $\{e_n\}$ 的选取无关。在此内积下，$S_2$ 是一个 Hilbert 空间。

（iv）对于 $T\in S_2$，$S\in\mathfrak{B}(H)$，有 $TS,ST\in S_2$，并且$$\|TS\|_2\leqslant\|S\|\,\|T\|_2,\qquad \|ST\|_2\leqslant\|S\|\,\|T\|_2.$$

（v）有限秩算子全体在 $(S_2,\|\cdot\|_2)$ 中稠密。因此，$S_2$ 中元素都是紧算子。

**例 4.4.2 (积分算子的平方可和性)** @174

对 $[a,b]\times[a,b]$ 上的平方可积函数 $K$，由例 4.2.5，$$(T_Kf)(x)=\int_a^bf(y)K(x,y)\,\mathrm{d}y$$定义的积分算子 $T_K$ 是 $L^2[a,b]$ 上的有界线性算子。下面说明 $T_K$ 还是 Hilbert-Schmidt 算子：将 $K(x,y)$ 在标准正交基 $\{e_m(x)\overline{e_n(y)}\}$ 下展开，可得$$\|T_K\|_2^2=\sum_{n,m}|\langle T_K(e_n),e_m\rangle|^2=\sum_{n,m}|a_{n,m}|^2=\|K\|_2^2,$$其中 $a_{n,m}=\langle K(x,y),e_m(x)\overline{e_n(y)}\rangle$。这说明 $T_K$ 是 Hilbert-Schmidt 算子，并且 $\|T_K\|_2=\|K\|_2$。

**例 4.4.3 (自伴紧算子的迹)** @174

设 $T$ 是 Hilbert 空间 $H$ 上的自伴紧算子。由定理 4.4.1 与定理 4.4.2，可取一组标准正交基 $\{e_n\}$ 与实数列 $\{\mu_n\}$ 使得$$T(e_n)=\mu_ne_n,\qquad n=1,2,\cdots.$$其中，每个 $\lambda\in\sigma_p(T)$ 在实数列 $\{\mu_n\}$ 中恰好出现 $\dim\ker(\lambda I-T)$ 次。那么$$\sum_n\|Te_n\|^2=\sum_n|\lambda_n|=\sum_{\lambda\in\sigma(T)}|\lambda|^2\dim\ker(\lambda I-T),$$（原文中间一项印作 $\sum_n|\lambda_n|$，按上下文应为 $\sum_n|\lambda_n|^2$。）从而 $T$ 是 Hilbert-Schmidt 算子当且仅当 $\{\lambda_n\}\in l^2$，也即$$\sum_{\lambda\in\sigma(T)}|\lambda|^2\dim\ker(\lambda I-T)<\infty.$$

**注 (紧算子的 Hilbert-Schmidt 判据)** @175

而对一般的紧算子 $T$，使用定理 4.4.4 的（iv）和定理 4.4.3，注意到 $\|W\|=\|W^*\|\leqslant1$，容易得到 $T$ 是 Hilbert-Schmidt 算子当且仅当 $|T|$ 是 Hilbert-Schmidt 的，此时 $\|T\|_2=\||T|\|_2$。另一个转化的方式是考虑它的实部 $\operatorname{Re}T=\dfrac{T+T^*}{2}$ 和虚部 $\operatorname{Im}T=\dfrac{T-T^*}{2\mathrm{i}}$，显然 $\operatorname{Re}T$ 和 $\operatorname{Im}T$ 都是自伴的，并且 $T\in S_2$ 等价于 $\operatorname{Re}T\in S_2$，$\operatorname{Im}T\in S_2$。

**定义 4.4.2 (迹类算子)** @175

设 $T$ 是 Hilbert 空间 $H$ 上的自伴紧算子，将 $T$ 对角化为定理 4.4.2 的形式，若$$\sum_n|\lambda_n|\dim E_n<\infty,$$则称 $T$ 是一个**迹类算子**。而对一般的紧算子 $T$，当 $\operatorname{Re}T$ 和 $\operatorname{Im}T$ 都是迹类算子时，称 $T$ 是**迹类算子**。

迹类算子全体记作 $S_1$。

**定理 4.4.5 (迹的良定义)** @175

设 $T$ 是 Hilbert 空间 $H$ 上的迹类算子。选取 $H$ 的一组标准正交基 $\{e_n\}$，令$$\operatorname{tr}(T)=\sum_n\langle Te_n,e_n\rangle,$$则 $\operatorname{tr}(T)$ 是良定义的，且与标准正交基 $\{e_n\}$ 的选取无关。

**例 4.4.4 (正自伴紧算子迹类)** @175

对于 Hilbert 空间 $H$ 上的自伴紧算子 $T$，若 $\sigma(T)\subset\mathbb{R}_+$，由定义易知 $T$ 是迹类算子当且仅当 $\operatorname{tr}(T)<\infty$。

**注 (紧算子与迹类算子)** @175

而对一般的紧算子 $T$，由于迹类算子也是 $\mathfrak{B}(H)$ 的理想，可以说明 $T$ 是迹类算子当且仅当 $|T|$ 是迹类算子，也等价于 $\operatorname{tr}(|T|)<\infty$（可见习题 4.4 第 6，7 题）。

**例 4.4.5 (积分算子迹公式)** @175

设 $T$ 是习题 4.3 第 12 题中紧的自伴积分算子，$K(x,y)$ 是积分核。注意到$$\sigma_p(T)=\left\{\frac{1}{(n\pi)^2}:n=1,2,\cdots\right\},$$并且对每个 $\lambda\in\sigma_p(T)$ 都有 $\dim\ker(\lambda I-T)=1$。所以 $T$ 是迹类算子，并且$$\operatorname{tr}(T)=\sum_{n=1}^{\infty}\frac{1}{(n\pi)^2}=\frac{1}{6}.$$而 $K(x,x)=x-x^2$，显然$$\operatorname{tr}(T)=\int_0^1K(x,x)\,\mathrm{d}x.$$

在非常一般情形下，例如 $K(x,y)$ 是二元连续函数时，这一等式也是成立的，证明可见 [16，30.5 节定理 12]。

#### 习题（p176–177）

**习题 1** @176

设 $N$ 是无限维可分 Hilbert 空间 $H$ 上的紧正规算子。令 $R=\frac{N+N^*}{2}$，$S=\frac{N-N^*}{2i}$。证明：

(i) $R,S$ 是自伴紧算子，且 $RS=SR$。

(ii) 存在 $H$ 中的一组标准正交基 $\{u_n\}$ 与实数列 $\{\alpha_n\},\{\beta_n\}$ 使得

$$Rx=\sum_{n=1}^{\infty}\alpha_n\langle x,u_n\rangle u_n,\qquad\forall x\in H$$

以及

$$Sx=\sum_{n=1}^{\infty}\beta_n\langle x,u_n\rangle u_n,\qquad\forall x\in H.$$

且

$$Nx=\sum_{n=1}^{\infty}(\alpha_n+\beta_ni)\langle x,u_n\rangle u_n,\qquad\forall x\in H.$$

**习题 2** @176

设 $H$ 是无限维可分 Hilbert 空间，$T$ 是 $H$ 中的紧算子。

(i) 证明：存在 $H$ 中的一组标准正交基 $\{u_n\}$ 与非负数列 $\{\lambda_n\}$ 使得

$$T^*Tx=\sum_{n=1}^{\infty}\lambda_n^2\langle x,u_n\rangle u_n,\qquad\forall x\in H.$$

这里我们假设 $\{\lambda_n\}$ 是按绝对值从大到小排列的。

(ii) 当 $\lambda_n\ne0$ 时，记 $v_n=\frac{Tu_n}{\lambda_n}$。证明：$\{v_n:\lambda_n\ne0\}$ 是一组标准正交系。

(iii) 证明：$Tx=\sum_{\lambda_n\ne0}\lambda_n\langle x,u_n\rangle v_n\ (\forall x\in H)$。

**习题 3** @176

验证定理 4.4.4 中的 (i)、(iv) 以及 $S_2$ 的完备性。

**习题 4** @176

证明例 4.4.2 中给出的映射 $K\mapsto T_K$ 是从 $L^2([a,b]\times[a,b])$ 到 $S_2$ 的 Hilbert 空间同构。

**习题 5** @176

若 $T$ 是 Hilbert 空间 $H$ 上的迹类算子，则 $T$ 也是 Hilbert-Schmidt 的。

**习题 6** @176

设 $H$ 是 Hilbert 空间，$T\in\mathcal B(H)$。证明下列三个条件等价：

(i) $T\in S_1$。

(ii) 存在 $T_1,T_2\in S_2$ 使得 $T=T_1T_2$。

(iii) 存在数 $M$，使得对 $H$ 中任意两组标准正交系 $\{e_n\},\{f_n\}$，有 $\sum_n|\langle Te_n,f_n\rangle|\leqslant M$。

并说明若 $T$ 满足上述条件之一，$S\in\mathcal B(H)$，那么 $TS$ 和 $ST$ 也都是迹类算子。

**习题 7** @176

设 $H$ 是 Hilbert 空间，对于 $T\in S_1$，规定

$$\|T\|_1=\sup\left\{\sum_n|\langle Te_n,f_n\rangle|:\{e_n\},\{f_n\}\text{ 是 }H\text{ 的标准正交系}\right\}.$$

证明：

(i) 若 $T\in S_1$，则 $\|T\|\leqslant\|T\|_1$。

(ii) $(S_1,\|\cdot\|_1)$ 是 Banach 空间，并且有限秩算子全体在它中稠密。

(iii) 若 $T_1,T_2\in S_2$，则 $\|T_1T_2\|_1\leqslant\|T_1\|_2\|T_2\|_2$。

(iv) 若 $T\in S_1$，则 $\|T\|_1=\operatorname{tr}(|T|)$。

(v) 若 $T_1\in\mathcal B(H)$，$T_2\in S_1$，则 $\|T_1T_2\|_1\leqslant\|T_1\|\|T_2\|_1$。

(vi) 若 $T_1,T_2\in S_1$，则 $\operatorname{tr}(|T_1+T_2|)\leqslant\operatorname{tr}(|T_1|)+\operatorname{tr}(|T_2|)$。

**习题 8** @177

若 $H$ 是 Hilbert 空间，$T_1\in\mathcal B(H)$，$T_2\in S_1$，那么

$$\operatorname{tr}(T_1T_2)=\operatorname{tr}(T_2T_1).$$

**习题 9 (Lidskii（里德斯基）)** @177

设 $H$ 是 Hilbert 空间，$T\in S_1$。

(i) 若空间 $M=\operatorname{span}\{f\in H:\text{存在非零 }\lambda\text{ 使得 }Tf=\lambda f\}$ 在 $H$ 中稠密，证明

$$\operatorname{tr}(T)=\sum_{\lambda\in\sigma_p(T)}\lambda\dim E_\lambda,$$

其中 $E_\lambda=\ker(\lambda I-T)$。

(ii) 当 $T$ 的谱半径 $r(T)=0$ 时，可以说明 $\operatorname{tr}(T)=0$。基于这一事实，证明 $\operatorname{tr}(T)=\sum_{\lambda\in\sigma_p(T)}\lambda\dim E_\lambda$ 总是成立的。

### 4.5 Fredholm 算子与指标（p177–183）

Fredholm 算子及其指标有着广泛的应用，为简化叙述，我们只介绍 Hilbert 空间上的情形。

**定义 4.5.1 (Fredholm 算子与指标)** @177

对于 Hilbert 空间 $H$ 上算子 $T$，如果它的值域 $\mathfrak{R}(T)$ 是闭的，并且 $\ker T$ 和 $H\ominus\mathfrak{R}(T)$ 都是有限维空间，则称它是一个 **Fredholm 算子**。此时，定义它的**指标**$$\operatorname{ind}T=\dim\ker T-\dim H\ominus\mathfrak{R}(T).$$

**注 4.5.1 (指标的另一表示)** @177

此时由于 $\ker T^*=H\ominus\mathfrak{R}(T)$，因此也经常使用 $\operatorname{ind}T=\dim\ker T-\dim\ker T^*$。

**例 4.5.1 (可逆算子指标为零)** @177

设 $T$ 是 Hilbert 空间 $H$ 上的可逆算子，则 $T$ 是 Fredholm 算子，并且 $\operatorname{ind}T=0$。

**例 4.5.2 (紧扰动指标为零)** @177

设 $T$ 是 Hilbert 空间 $H$ 上的紧算子。由 Riesz-Schauder 定理可知，若 $\lambda\neq 0$，则 $\lambda I-T$ 是 Fredholm 算子，且$$\operatorname{ind}(\lambda I-T)=\dim\ker(\lambda I-T)-\dim\ker(\lambda I-T)^*=0.$$

**例 4.5.3 (移位算子指标)** @177

设 $S,T$ 是 Hilbert 空间 $l^2$ 上的左移位算子与右移位算子：$$S(x_1,x_2,\cdots,x_n,\cdots)=(x_2,x_3,\cdots,x_n,\cdots);$$$$T(x_1,x_2,\cdots,x_n,\cdots)=(0,x_1,x_2,\cdots,x_n,\cdots).$$令 $e_n$ 为第 $n$ 个位置取 $1$、其他位置为 $0$ 的数列。那么 $\ker S$ 是一维子空间 $\mathbb{C}e_1$，且 $S$ 是满射。从而 $S$ 是 Fredholm 算子，并且 $\operatorname{ind}S=1$。而 $T$ 是等距单射，$\mathfrak{R}(T)^\perp=\mathbb{C}e_1$，故 $T$ 也是 Fredholm 算子，并且 $\operatorname{ind}T=-1$。

更一般地，对任意 $n\in\mathbb{N}$，$S^n$ 是满射，$\ker S^n=\operatorname{span}\{e_1,e_2,\cdots,e_n\}$，因此 $S^n$ 是 Fredholm 算子且 $\operatorname{ind}S^n=n$。类似地，$T^n$ 也是 Fredholm 算子且 $\operatorname{ind}T^n=-n$。

**定理 4.5.1 (Fredholm 算子的特征)** @178

设 $T$ 是 Hilbert 空间 $H$ 上的有界线性算子。那么

（i）若 $T$ 是 Fredholm 算子，那么存在 $S\in\mathfrak{B}(H)$，使得 $I-TS$ 和 $I-ST$ 都是有限秩算子。

（ii）若存在 $S\in\mathfrak{B}(H)$ 使得 $I-TS$ 和 $I-ST$ 都是紧算子，那么 $T$ 是 Fredholm 算子。

**注 4.5.2 (广义逆与紧扰动)** @178

在（i）证明中出现的算子 $S$ 也是 Fredholm 算子，在计算数学中经常称之为 $T$ 的**广义逆**。又由（ii）的证明知，如果存在 $S_1,S_2\in\mathfrak{B}(H)$ 使得 $I-TS_1$ 和 $I-S_2T$ 都是紧算子，那么 $T$ 是 Fredholm 算子。

**定理 4.5.2 (Fredholm 算子的乘积)** @178

若 $T_1,T_2$ 都是 Hilbert 空间 $H$ 上的 Fredholm 算子，那么 $T_1T_2$ 也是 Fredholm 算子，并且$$\operatorname{ind}T_1T_2=\operatorname{ind}T_1+\operatorname{ind}T_2.$$

#### 指标的扰动不变性

**定理 4.5.3 (指标在紧扰动下的不变性)** @180

设 $T$ 是 Hilbert 空间 $H$ 上的 Fredholm 算子。若 $S$ 为 $H$ 上紧算子，则 $T+S$ 也是 Fredholm 算子并且$$\operatorname{ind}T=\operatorname{ind}(T+S).$$

**定理 4.5.4 (指标在范数扰动下的不变性)** @180

设 $T$ 是 Hilbert 空间 $H$ 上的 Fredholm 算子，则存在 $\varepsilon>0$ 使得对于 $S\in\mathfrak{B}(H)$，$\|S\|<\varepsilon$，$T+S$ 也是 Fredholm 算子并且$$\operatorname{ind}T=\operatorname{ind}(T+S).$$

**推论 4.5.1 (指标的同伦不变性)** @181

设 $H$ 是 Hilbert 空间，$F:[0,1]\to\mathfrak{B}(H)$ 是一个连续的算子道路（这里 $\mathfrak{B}(H)$ 取范数拓扑）。若对每个 $t\in[0,1]$，$F(t)$ 都是 $H$ 上的 Fredholm 算子，则$$\operatorname{ind}F(0)=\operatorname{ind}F(1).$$

**构造 (圆周上的 Toeplitz 算子)** @181

对于单位圆周 $\mathbb{T}=\{z=\mathrm{e}^{\mathrm{i}\theta}:0\leqslant\theta<2\pi\}$，$L^2(\mathbb{T})$ 按内积$$\langle f,g\rangle=\int_{[0,2\pi]}f(\mathrm{e}^{\mathrm{i}\theta})\overline{g(\mathrm{e}^{\mathrm{i}\theta})}\,\frac{\mathrm{d}\theta}{2\pi},\qquad \forall f,g\in L^2(\mathbb{T})$$构成一个 Hilbert 空间。$\{z^n=\mathrm{e}^{\mathrm{i}n\theta}:n\in\mathbb{Z}\}$ 是 $L^2(\mathbb{T})$ 的一组正交基。它的子空间 $H^2(\mathbb{T})$ 定义为 $\{\mathrm{e}^{\mathrm{i}n\theta}:n=-1,-2,-3,\cdots\}$ 的零化子空间，即$$H^2(\mathbb{T})=\left\{f\in L^2(\mathbb{T}):\ \langle f,\mathrm{e}^{\mathrm{i}n\theta}\rangle=\int_{[0,2\pi]}f(\mathrm{e}^{\mathrm{i}\theta})\mathrm{e}^{-\mathrm{i}n\theta}\,\mathrm{d}\theta=0,\ n=-1,-2,-3,\cdots\right\}.$$显然 $\{\mathrm{e}^{\mathrm{i}n\theta}:n=0,1,2,\cdots\}$ 构成 $H^2(\mathbb{T})$ 的一组标准正交基。特别地，对 $H^2(\mathbb{T})$ 中元素 $f$，其展开式是 $f(\mathrm{e}^{\mathrm{i}\theta})=\sum\limits_{n=0}^{\infty}\langle f,\mathrm{e}^{\mathrm{i}n\theta}\rangle\mathrm{e}^{\mathrm{i}n\theta}$，并且 $\|f\|^2=\sum\limits_{n=0}^{\infty}|\langle f,\mathrm{e}^{\mathrm{i}n\theta}\rangle|^2$。令 $P$ 是从 $L^2(\mathbb{T})$ 到 $H^2(\mathbb{T})$ 上的正交投影，即$$P(f)=\sum_{n=0}^{\infty}\langle f,\mathrm{e}^{\mathrm{i}n\theta}\rangle\mathrm{e}^{\mathrm{i}n\theta},\qquad \forall f\in L^2(\mathbb{T}).$$对于 $f\in C(\mathbb{T})$，定义 **Toeplitz 算子** $T_f$ 为$$T_f(g)=P(fg),\qquad \forall g\in H^2(\mathbb{T}),$$则 $T_f$ 是 $H^2(\mathbb{T})$ 上的有界线性算子。实际上，$$\|T_f\|=\sup_{\|g\|=1}\|P(fg)\|\leqslant\sup_{\|g\|=1}\|fg\|=\sup_{\|g\|=1}\left(\int_{[0,2\pi]}|f(\mathrm{e}^{\mathrm{i}\theta})g(\mathrm{e}^{\mathrm{i}\theta})|^2\,\frac{\mathrm{d}\theta}{2\pi}\right)^{1/2}$$$$\leqslant\|f\|_\infty\sup_{\|g\|=1}\left(\int_{[0,2\pi]}|g(\mathrm{e}^{\mathrm{i}\theta})|^2\,\frac{\mathrm{d}\theta}{2\pi}\right)^{1/2}=\|f\|_\infty.\tag{4.19}$$

**例 4.5.4 (常值函数算子为单位)** @181

对常值函数 $f(z)=1\in C(\mathbb{T})$，显然有$$T_1\mathrm{e}^{\mathrm{i}n\theta}=P(\mathrm{e}^{\mathrm{i}n\theta})=\mathrm{e}^{\mathrm{i}n\theta},\qquad n=0,1,2,\cdots,$$即 $T_1=I$。

**例 (单项式符号的 Toeplitz 算子)** @182

对于恒等映射 $f(z)=z\in C(\mathbb{T})$，容易验证$$T_z\mathrm{e}^{\mathrm{i}n\theta}=P(\mathrm{e}^{\mathrm{i}(n+1)\theta})=\mathrm{e}^{\mathrm{i}(n+1)\theta},\qquad n=0,1,2,\cdots.$$所以，$T_z$ 可看作在标准正交基 $\{\mathrm{e}^{\mathrm{i}n\theta}:n=0,1,2,\cdots\}$ 下的右移位算子。再考虑 $\bar{z}\in C(\mathbb{T})$，直接计算得$$T_{\bar{z}}\mathrm{e}^{\mathrm{i}0\theta}=P(\mathrm{e}^{-\mathrm{i}\theta})=0,\qquad T_{\bar{z}}\mathrm{e}^{\mathrm{i}n\theta}=P(\mathrm{e}^{\mathrm{i}(n-1)\theta})=\mathrm{e}^{\mathrm{i}(n-1)\theta},\qquad n=1,2,\cdots,$$从而可以认为 $T_{\bar{z}}$ 是在标准正交基 $\{\mathrm{e}^{\mathrm{i}n\theta}:n=0,1,2,\cdots\}$ 下的左移位算子。容易验证$$T_zT_{\bar{z}}\mathrm{e}^{\mathrm{i}0\theta}=0,\qquad T_zT_{\bar{z}}\mathrm{e}^{\mathrm{i}n\theta}=\mathrm{e}^{\mathrm{i}n\theta},\qquad n=1,2,\cdots,$$因此 $T_zT_{\bar{z}}=I-P_0$，这里 $P_0$ 是到常数函数全体 $\mathbb{C}\mathrm{e}^{\mathrm{i}0\theta}$ 的正交投影。类似地，也可以验证 $T_{\bar{z}}T_z=I$。由定理 4.5.1 即得，$T_z$ 和 $T_{\bar{z}}$ 都是 Fredholm 的。并且由 $\ker T_z=\{0\}$，$\mathfrak{R}(T_z)^\perp=\mathbb{C}\mathrm{e}^{\mathrm{i}0\theta}$ 可得$$\operatorname{ind}T_z=\dim\ker T_z-\dim\mathfrak{R}(T_z)^\perp=-1,$$类似地也可以说明 $\operatorname{ind}T_{\bar{z}}=1$。

对于 $f(z)=z^k$，由于$$T_{z^k}\mathrm{e}^{\mathrm{i}n\theta}=\mathrm{e}^{\mathrm{i}(n+k)\theta}=(T_z)^k(\mathrm{e}^{\mathrm{i}n\theta}),\qquad n=0,1,2,\cdots,$$故 $T_{z^k}=(T_z)^k$。因此，$T_{z^k}$ 也是 Fredholm 算子并且$$\operatorname{ind}T_{z^k}=k\operatorname{ind}T_z=-k.$$$T_{z^k}$ 的 Fredholm 性也可通过$$T_{\bar{z}^k}T_{z^k}=I,\qquad T_{z^k}T_{\bar{z}^k}=I-P_0-\cdots-P_{k-1}$$得到，这里 $P_n$ 是到 $\mathbb{C}\mathrm{e}^{\mathrm{i}n\theta}$ 的秩 $1$ 投影。

**引理 4.5.1 (托普利茨算子交换子紧)** @182

设 $f,g\in C(\mathbb{T})$，则 $T_fT_g-T_{fg}$ 是 $H^2(\mathbb{T})$ 上的紧算子。

**定理 4.5.5 (Toeplitz 算子的 Fredholm 性)** @183

若 $C(\mathbb{T})$ 中函数 $f$ 在圆周 $\mathbb{T}$ 上不取零值，则 $T_f$ 是 Fredholm 的。

**定理 4.5.6 (Brouwer 不动点定理)** @183

若 $f$ 是单位圆盘 $\overline{\mathbb{D}}=\{z\in\mathbb{C}:|z|\leqslant 1\}$ 上的连续自映射，则存在不动点 $z\in\overline{\mathbb{D}}$ 使得 $f(z)=z$。

**注 (指标的几何意义：绕数)** @183

$T_f$ 的 Fredholm 指标也有明显的几何意义。当 $f$ 在 $\overline{\mathbb{D}}$ 上连续可导时，令 $f$ 的**绕数**$$\omega(f)=\frac{1}{2\pi\mathrm{i}}\int_{\mathbb{T}}\frac{f'(z)}{f(z)}\,\mathrm{d}z,$$它表示封闭曲线 $f(\mathbb{T})$ 绕零点逆时针走的圈数。那么可以证明此时$$\operatorname{ind}T_f=-\omega(f).$$这一指标结果可以看作著名的 Atiyah-Singer（阿蒂亚-辛格）定理在单位圆周这个简单情况下的具体形式。

#### 习题（p184）

**习题 1** @184

设 $T$ 是复 Hilbert 空间 $X$ 上的 Fredholm 算子。那么 $T^*$ 是 Fredholm 算子且 $\operatorname{ind}T^*=-\operatorname{ind}T$。

**习题 2** @184

设 $X,Y$ 是复的 Hilbert 空间，$T$ 与 $S$ 分别是 $X,Y$ 上的 Fredholm 算子。在 Hilbert 空间 $X\times Y$ 上，定义 $T\times S$ 为 $(T\times S)(x,y)=(Tx,Sy)$。证明：

(i) $T\times S$ 是 $X\times Y$ 上的 Fredholm 算子。

(ii) $\operatorname{ind}(T\times S)=\operatorname{ind}T+\operatorname{ind}S$。

**习题 3** @184

设 $H$ 是复的 Hilbert 空间，$T\in\mathcal B(H)$。若 $\dim\ker T<\infty$，且线性空间 $H/\mathfrak R(T)$ 的维数是有限的，那么 $T$ 是 Fredholm 算子。

**习题 4** @184

设 $H$ 是复的 Hilbert 空间，$A,B\in\mathcal B(H)$ 且 $BA$ 是 Fredholm 的。若 $\dim\ker B<\infty$，证明：$A,B$ 都是 Fredholm 算子。

**习题 5** @184

设 $T$ 是复 Hilbert 空间 $H$ 上的有界算子。若对某个正整数 $n$，$I-T^n$ 紧，那么 $T$ 是 Fredholm 算子。

**习题 6** @184

证明：Hilbert 空间 $H$ 中的 Fredholm 算子全体是 $\mathcal B(H)$ 中的一个开集。

**习题 7** @184

设 $X$ 是复的 Hilbert 空间，对于 $T\in\mathcal B(H)$，定义 $T$ 的本质谱为

$$\sigma_e(T)=\{\lambda\in\mathbb C:\lambda I-T\text{ 不是 Fredholm 的}\}.$$

证明：

(i) $\sigma_e(T)$ 是一个有界闭集。

(ii) $\sigma_e(T)\subset\bigcap_{K\in\mathcal K(X)}\sigma(T+K)$。

**习题 8** @184

对于 $l^2$ 上算子 $S(x_1,x_2,\cdots)=(0,x_1,x_2,\cdots)$，计算 $\sigma_e(S)$，并对每个 $\lambda\in\mathbb C\setminus\sigma_e(S)$，给出 $\operatorname{ind}(\lambda I-S)$。

**习题 9** @184

对于某个固定的 $k\in\mathbb Z$，令 $f(z)=z^k$。证明：

$$\operatorname{ind}(T_f)=-k=-\frac1{2\pi i}\int_{\mathbb T}\frac{f'(z)}{f(z)}\,\mathrm dz.$$

### 4.6 正规算子的谱分解（p184–194）

在线性代数中，使用特征值、特征向量将正规矩阵对角化的方法在理论和应用中都有重要价值。它实际上就是根据正规矩阵的特性，将空间分解成一些子空间，使得正规矩阵在每个子空间上有比较简单的形式。这也等价于正规矩阵写成了一些投影矩阵的加权和。延续这一路径研究无穷维空间上的算子，就产生了正规算子的谱分解理论。特别地，我们将正规算子分解成投影算子的组合形式。

#### 投影算子的性质 @185

我们首先给出投影算子的一些常用的性质。

**命题 4.6.1 (投影算子的刻画)** @185

设 $H$ 是 Hilbert 空间，$P\in\mathfrak{B}(H,H)$，那么 $P$ 成为投影算子的充要条件是$$P=P^*=P^2.$$

**注 (投影子空间)** @185

如果 $P$ 是到 $L$ 上的投影算子，则称 $L$ 为 $P$ 的**投影子空间**。

**命题 4.6.2 (投影算子的运算)** @185

设 $P_M,P_N$ 分别为 Hilbert 空间 $H$ 到子空间 $M$ 与 $N$ 上的投影，那么我们有

（i）$P_MP_N=0$ 当且仅当 $M\perp N$，此时称 $P_M$ 与 $P_N$ 是**垂直**的。

（ii）$P_M+P_N$ 是投影算子当且仅当 $M\perp N$。此时 $P_MP_N=P_NP_M=0$ 且 $P_M+P_N$ 是 $H$ 到子空间 $M\oplus N$ 上的投影。

（iii）$P_MP_N$ 是投影算子当且仅当 $P_MP_N=P_NP_M$。此时 $P_MP_N$ 是 $H$ 到子空间 $M\cap N$ 上的投影，且 $M\ominus(M\cap N)\perp N\ominus(M\cap N)$。

（iv）$P_M-P_N$ 为投影算子当且仅当 $M\supset N$，此时 $P_M-P_N$ 为 $H$ 到子空间 $M\ominus N$ 上的投影。

（v）设 $M_n$ 是一列两两正交的子空间，$P_n$ 是 $H$ 到子空间 $M_n$ 上的投影算子，那么 $\sum\limits_{n=1}^{\infty}P_n$ 强算子收敛于投影算子 $P$，并且 $P$ 是到 $M=\overline{\operatorname{span}}\{M_n\}_{n=1}^{\infty}$ 上的投影算子。

不变子空间和约化子空间也可以用投影算子刻画，具体论证留给读者作为练习。

**命题 4.6.3 (不变与约化子空间)** @186

设 $T$ 是 Hilbert 空间 $H$ 上的有界线性算子，$P_M$ 是 $H$ 到子空间 $M$ 上的投影。

（i）$M$ 是 $T$ 的不变子空间当且仅当 $P_MTP_M=TP_M$。

（ii）$M$ 是 $T$ 的约化子空间当且仅当 $P_MT=TP_M$。

#### 谱测度和积分 @186

**定义 4.6.1 (谱测度)** @186

设 $\Omega$ 是 $\mathbb{C}$ 中一个 Borel 集，$\mathcal{R}$ 是 $\Omega$ 的一些子集组成的 $\sigma$ 代数，$H$ 为复 Hilbert 空间。$\mathcal{P}$ 是 $H$ 上的投影算子全体，如果算子值函数 $E:\mathcal{R}\to\mathcal{P}$ 满足

（i）$E(\Omega)=I$；

（ii）若 $\mathcal{R}$ 中序列 $\{S_n\}$ 两两不交，$S=\bigcup\limits_{n=1}^{\infty}S_n$，则 $E(S)=(\mathrm{SOT})\sum\limits_{n=1}^{\infty}E(S_n)$，则称 $(\Omega,\mathcal{R},E)$ 为**谱测度空间**，$E$ 为 $\mathcal{R}$ 上的**谱测度**。

**注 (谱测度的乘法性质)** @186

对于谱测度 $E$，一个基本的事实是，对于 $S_1,S_2\in\mathcal{R}$，有$$E(S_1)E(S_2)=E(S_2)E(S_1).$$实际上，当 $S_1\cap S_2=\varnothing$ 时，由 $E(S_1)+E(S_2)=E(S_1\cup S_2)$ 及命题 4.6.2（ii）知 $E(S_1)E(S_2)=E(S_2)E(S_1)=0$。对于一般的情况，有$$E(S_1)E(S_2)=(E(S_1\setminus S_2)+E(S_1\cap S_2))(E(S_2\setminus S_1)+E(S_1\cap S_2))=E(S_1\cap S_2),$$同理又有 $E(S_1)E(S_2)=E(S_2)E(S_1)$。

**定理 4.6.1 (谱测度积分表示)** @187

对于 Hilbert 空间 $H$ 上的谱测度空间 $(\Omega,\mathcal{R},E)$，$x,y\in H$，则 $\mathcal{R}$ 上集函数$$S\mapsto E_{x,y}(S)=\langle E(S)x,y\rangle$$是一个全有限复测度。对于 $\Omega$ 上的有界可测函数 $f$，存在 $T\in\mathfrak{B}(H)$ 使得$$\langle Tx,y\rangle=\int_{\Omega}f\,\mathrm{d}E_{x,y},\qquad\forall x,y\in H,$$并且 $\|T\|\leqslant\|f\|_{\infty}$，我们将积分值 $T$ 记为 $\int_{\Omega}f\,\mathrm{d}E$。

若记 $B(\Omega)$ 为 $\Omega$ 上的有界可测函数全体，则 $f\mapsto\int_{\Omega}f\,\mathrm{d}E$ 是一个代数同态，且$$\int_{\Omega}\bar f\,\mathrm{d}E=\left(\int_{\Omega}f\,\mathrm{d}E\right)^*.$$若可测函数列 $\{f_n\}$ 一致有界且点态收敛于 $f$，则算子列 $\int_{\Omega}f_n\,\mathrm{d}E$ 强收敛于算子 $\int_{\Omega}f\,\mathrm{d}E$。

**例 4.6.1 (正规矩阵的谱分解)** @189

设 $A$ 是内积空间 $\mathbb{C}^n$ 上的正规矩阵，所有相异的特征值为 $\{\lambda_1,\lambda_2,\cdots,\lambda_k\}$。对每个 $i$，记 $E_i=\ker(\lambda_i-A)$，$P_i$ 是到 $E_i$ 的投影。则有$$A=\lambda_1P_1+\lambda_2P_2+\cdots+\lambda_kP_k.$$并且对任意多项式 $P$，易得$$P(A)=P(\lambda_1)P_1+P(\lambda_2)P_2+\cdots+P(\lambda_k)P_k.$$若令 $\Omega=\{\lambda_1,\lambda_2,\cdots,\lambda_k\}$，$\mathcal{R}$ 为 $\Omega$ 中的子集全体，定义$$E(S)=\sum_{\lambda_i\in S}P_i,$$则 $(\Omega,\mathcal{R},E)$ 是一个测度空间。对 $x,y\in\mathbb{C}^n$，$i=1,2,\cdots,k$，记 $y^H$ 是 $y$ 的共轭转置向量，则$$E_{x,y}(\{\lambda_i\})=\langle P_ix,y\rangle=y^HP_ix$$为高等代数中出现过的二次型。对任意 $\Omega$ 上的有界函数 $f$，令矩阵 $T$ 为$$T=f(\lambda_1)P_1+f(\lambda_2)P_2+\cdots+f(\lambda_k)P_k,$$则对任意 $x,y\in\mathbb{C}^n$，$$\langle Tx,y\rangle=y^HTx=\sum_{i=1}^{k}f(\lambda_i)y^HP_ix=\int_{\Omega}f\,\mathrm{d}E_{x,y}.$$

对于一般的正规算子 $N$，我们有如下的谱分解定理。证明可见附录定理 G.11。对多项式 $p(z)=\sum\limits_{\text{有限个 }n,m}a_{n,m}z^n\bar z^m$，我们记 $p(N)=\sum\limits_{\text{有限个 }n,m}a_{n,m}N^nN^{*m}$。

**定理 4.6.2 (正规算子的谱分解定理)** @189

设 $N$ 是 Hilbert 空间 $H$ 上的正规算子，记 $\mathcal{R}$ 是 $\sigma(N)$ 中的 Borel 子集全体。那么存在 $\mathcal{R}$ 上唯一的谱测度 $E$，使得$$N=\int_{\sigma(N)}z\,\mathrm{d}E.$$从而，对于任意多项式 $p$，$$p(N)=\int_{\sigma(N)}p\,\mathrm{d}E.$$

**例 4.6.2 (正规算子函数演算)** @189

对于 Hilbert 空间 $H$ 上的正规算子 $T$，对任意 $\sigma(T)$ 上的有界 Borel 可测函数 $f$，$f(T)$ 是一个良定义的算子，这就是所谓的正规算子的**函数演算**。

**例 4.6.3 (正算子与平方根)** @189

若正规算子 $T$ 的谱集 $\sigma(T)\subset[0,\infty)$，则称 $T$ 是**正算子**。令 $E$ 是定理 4.6.2 中谱集 $\sigma(T)$ 上的谱测度。对定义在 $[0,\infty)$ 上的有界可测函数 $f$，它的函数演算为 $f(T)=\int_{[0,\infty)}f\,\mathrm{d}E$。特别地，取 $f(x)=\sqrt{x}$，记所得算子为 $\sqrt{T}=\int_{[0,\infty)}\sqrt{x}\,\mathrm{d}E(x)$。由谱积分的代数性质可得$$(\sqrt{T})^2=\int_{[0,\infty)}x\,\mathrm{d}E(x)=T.$$

**例 4.6.4 (酉算子的谱测度)** @190

设 $U$ 是 Hilbert 空间 $H$ 上的酉算子，存在 $\sigma(U)$ 上谱测度 $E$ 使得定理 4.6.2 成立。取有界可测函数 $p=\chi_{\{1\}}$，由谱积分的定义可得$$p(U)=\int_{\sigma(U)}\chi_{\{1\}}\,\mathrm{d}E=E(\{1\}).$$我们断言：$1\in\sigma_p(U)$ 当且仅当 $E(\{1\})\neq0$，此时 $E(\{1\})$ 的值域为 $U$ 在 $1$ 处的特征空间。

#### 习题（p192–193）

**习题 1** @192

证明命题 4.6.2 中的 (i)、(iii)、(iv)。

**习题 2** @192

设 $H$ 是复 Hilbert 空间，$P\in\mathcal B(H,H)$，那么 $P$ 成为投影算子的充要条件是

$$\langle Px,x\rangle=\|Px\|^2,\qquad\forall x\in H.$$

**习题 3** @192

证明命题 4.6.3。

**习题 4** @192

证明定理 4.6.1 中谱积分 $f\mapsto\int_\Omega f\,\mathrm dE$ 是保持线性和数乘的。

**习题 5** @192

设 $(X,\mathcal R,E)$ 是 Hilbert 空间 $H$ 中的谱测度空间，$f$ 是 $(X,\mathcal R)$ 上的有界可测函数，记谱积分 $T=\int_X f\,\mathrm dE$。证明：$\lambda\in\rho(T)$ 当且仅当存在 $S\in\mathcal R$，$E(S)=0$ 使得

$$\inf_{x\in X\setminus S}|f(x)-\lambda|>0.$$

**习题 6** @192

对于 Hilbert 空间 $H$ 上正规算子 $N$，令 $E$ 为 $\sigma(N)$ 上谱测度，使得

$$\phi(N)=\int_{\sigma(N)}\phi\,\mathrm dE,\qquad\forall\phi\in C(\sigma(N)).$$

证明：$\lambda\in\sigma_p(N)$ 当且仅当 $E(\{\lambda\})\ne0$。

**习题 7** @192

对 Hilbert 空间 $H$ 上正规算子 $N$，证明：$N$ 是自伴算子当且仅当 $\sigma(N)\subset\mathbb R$。

**习题 8** @192

对 Hilbert 空间 $H$ 上正规算子 $N$，$f\in C(\sigma(N))$，证明：

$$\sigma(f(N))=f(\sigma(N)).$$

**习题 9** @192

设 $T$ 是 Hilbert 空间 $H$ 上有界线性算子。

(i) 若 $T$ 是正算子，证明：存在自伴算子 $F\in\mathcal B(H)$ 使得 $F^2=T$。

(ii) 证明：$T$ 是正算子当且仅当 $\langle Tx,x\rangle\geqslant0\ (\forall x\in H)$。

**习题 10** @192

设 $T$ 是 Hilbert 空间 $H$ 上有界线性算子。证明：$T$ 是紧算子当且仅当 $T$ 的值域 $\mathfrak R(T)$ 不包含一个闭的无穷维线性子空间。

**习题 11 (von Neumann 不等式)** @192

设 $T$ 是 Hilbert 空间 $H$ 上的一个有界线性算子。对 $\mathbb C$ 上解析多项式 $p(z)=\sum_{n=0}^Na_nz^n$，令 $p(T)=\sum_{n=0}^Na_nT^n$，记 $\|p\|_{\infty}=\sup_{|z|\leqslant1}|p(z)|$。

(i) 若 $\|T\|\leqslant1$，证明：$T^*T$ 是一个自伴算子，且 $\sigma(T^*T)\subset[0,1]$。

(ii) 设 $\|T\|\leqslant1$。令 $D$ 为 $\sqrt{I-T^*T}$ 的值域在 $H$ 中的闭包，$\widetilde H\stackrel{\mathrm{def}}{=}H\oplus D\oplus D\oplus\cdots$ 是 $H$ 和可列个 $D$ 的直和给出的 Hilbert 空间（见习题 1.3 第 13 题）。在 $\widetilde H$ 上定义

$$\widetilde T(x_1,x_2,\cdots)=(Tx_1,\sqrt{I-T^*T}\,x_1,x_2,\cdots),\qquad\forall x_1\in H,\ x_n\in D,\quad n=2,3,\cdots.$$

证明：$\widetilde T$ 是一个等距算子（即 $\|\widetilde Tx\|=\|x\|$，$\forall x\in\widetilde H$）。

(iii) 如果 $T$ 是一个余等距算子（即 $T^*$ 是等距算子），那么 (ii) 中定义的算子 $\widetilde T$ 还是酉算子。

(iv) 若 $T$ 是酉算子，$p$ 是解析多项式，证明：$\|p(T)\|\leqslant\|p\|_{\infty}$。

(v) 若 $T$ 是余等距算子，$p$ 是解析多项式，证明：$\|p(T)\|\leqslant\|p\|_{\infty}$。

(vi) 若 $T$ 是等距算子，$p$ 是解析多项式，证明：$\|p(T)\|\leqslant\|p\|_{\infty}$。

(vii) 若 $\|T\|\leqslant1$，$p$ 是解析多项式，证明：$\|p(T)\|\leqslant\|p\|_{\infty}$。

**习题 12*** @193

设 $T_1,T_2$ 是 Hilbert 空间 $H$ 上的两个 Fredholm 算子。证明：$\operatorname{ind}T_1=\operatorname{ind}T_2$ 当且仅当存在连续的 Fredholm 路径 $F:[0,1]\to H$ 上的 Fredholm 算子使得 $F(0)=T_1$，$F(1)=T_2$。

## 第5章 附录

### A 度量空间中的拓扑性质（p196–202）

本节罗列度量空间中开集与闭集的常用性质，以便不熟悉拓扑知识的读者学习。

**定义 A.1 (开球与闭球)** @196

设 $X$ 是度量空间，$x_0$ 是 $X$ 中的点。对于有限的正数 $r$，

（i）集 $O(x_0,r)=\{x:d(x,x_0)<r,\ x\in X\}$ 称为**开球**，也叫做 $x_0$ 的 $r$ 邻域。

（ii）集 $B(x_0,r)=\{x:d(x,x_0)\leqslant r,\ x\in X\}$ 称为**闭球**。

$x_0$ 为球心，$r$ 为半径。

对于实直线或者 $n$ 维 Euclid 空间，开球、闭球是大家熟悉的。在 $\mathbb{R}_1^2$ 中，开球 $O(0,1)$ 是以点 $(0,1)$，$(1,0)$，$(0,-1)$，$(-1,0)$ 为顶点的正方形，而在 $\mathbb{R}_\infty^2$ 中，开球 $O(0,1)$ 是以点 $(1,1)$，$(-1,1)$，$(-1,-1)$，$(1,-1)$ 为顶点的正方形。

对于一般的度量空间，有几点需要我们注意的：

（i）在一般的度量空间中，可能 $O(x_0,r)=B(x_0,r)$。例如：在平凡的度量空间中，取 $r=\dfrac{1}{2}$，那么 $O(x_0,r)=B(x_0,r)=\{x_0\}$。

（ii）$n$ 维 Euclid 空间中包含在闭球中的点列都存在收敛子列，一般的度量空间没有这个性质。例如 $l^2$ 中的点列 $\{e_n:n=1,2,\cdots\}$，每个 $e_n$ 都落在闭球 $B(0,1)$ 中，而 $\|e_n-e_m\|=\sqrt{2}\ (n\neq m)$。

（iii）一般度量空间中半径小的球可以包含半径大的球。例如，考虑度量空间 $X=[0,1]$，作为直线的子空间。对于闭球 $B\left(0,\dfrac{1}{2}\right)=\left[0,\dfrac{1}{2}\right]$，取其中的一个点 $y_0=\dfrac{1}{4}$，则以 $y_0$ 为中心，$\dfrac{1}{3}$ 为半径的闭球 $B\left(y_0,\dfrac{1}{3}\right)=\left[0,\dfrac{7}{12}\right]\supset B\left(0,\dfrac{1}{2}\right)$。

**定义 A.2 (有界集)** @196

设 $A$ 是度量空间 $X$ 中的点集，$x_0\in X$。如果存在 $r\geqslant 0$ 使得 $A\subset B(x_0,r)$，就称 $A$ 是 $X$ 的**有界集**。

**注 A.1 (有界性与球心无关)** @196

有界集与点 $x_0$ 的选取无关，即如果集合 $A$ 对于点 $x_0$ 是有界集，那么它对于任何的 $y\in X$ 都是有界集。如果 $A\subset B(x_0,r)$，那么令 $r'=r+d(y,x_0)$，则 $A\subset B(y,r')$。

#### 内点、开集 @196

**定义 A.3 (内点与开集)** @196

设 $A$ 是度量空间 $(X,d)$ 中的点集，$x_0\in A$。

（i）如果存在 $r>0$ 使得 $O(x_0,r)\subset A$，就称 $x_0$ 是 $A$ 的**内点**。

（ii）如果 $A$ 中每一点都是 $A$ 的内点，就称 $A$ 是**开集**。

（iii）规定空集也是开集。

**例 A.1 (开球是开集)** @197

度量空间 $(X,d)$ 中的开球 $O(x_0,r)\ (r>0)$ 是开集。

因为，如果 $z\in O(x_0,r)$，那么 $d(z,x_0)<r$。取正数 $\varepsilon<r-d(z,x_0)$，那么当 $d(x,z)<\varepsilon$ 时，$d(x,x_0)\leqslant d(x,z)+d(z,x_0)<r$，因此 $O(z,\varepsilon)\subset O(x_0,r)$。因而 $O(x_0,r)$ 中每一点都是自己的内点，所以球 $O(x_0,r)$ 是开集。

$O(x_0,r)$ 的每一点都是 $B(x_0,r)$ 的内点。对于一般的度量空间，逆命题不正确。例如，在度量空间 $\mathbb{Z}$（作为直线的子空间）中，我们考虑 $B(0,1)=\{-1,0,1\}$，它的每一点都是内点，而 $O(0,1)=\{0\}$。

**例 A.2 (连续函数空间的内点)** @197

$C[0,1]$ 作为度量空间 $L^1[0,1]$ 的子集，其中的任何点都不是内点。

**例 A.3 (端点函数构成开集)** @197

度量空间 $C[0,1]$ 的子集 $A=\{f:f\in C[0,1],\ f|_{[0,\frac{1}{2}]}\neq 0\}$ 是开集。

**例 A.4 (离散点集的开子集)** @197

直线 $\mathbb{R}$ 的子集 $X=\left\{\dfrac{1}{n}:n=1,2,\cdots\right\}$ 作为度量空间，其中的每个点构成的子集 $A=\left\{\dfrac{1}{n}\right\}$ 都是 $X$ 的开子集。

**定理 A.1 (开集的拓扑性质)** @197

设 $(X,d)$ 是度量空间，那么

（i）空集和全空间都是开集。

（ii）任意个开集的并集是开集。

（iii）有限个开集的交集是开集。

度量空间以及它的开子集族构成一个拓扑空间，我们称为**由度量诱导的拓扑**。它是一个 Hausdorff 空间。以后凡是遇到度量空间的拓扑，我们都是指诱导拓扑。不同的度量可能诱导相同的拓扑空间。

**例 A.5 (等价度量)** @197

在 $n$ 维线性空间中，分别定义度量

$$d_1(x,y)=\sqrt{\sum_{i=1}^{n}(x_i-y_i)^2},$$

$$d_2(x,y)=\sum_{i=1}^{n}|x_i-y_i|,$$

$$d_3(x,y)=\max_{1\leqslant i\leqslant n}|x_i-y_i|,$$

$$d_4(x,y)=\left(\sum_{i=1}^{n}|x_i-y_i|^p\right)^{\frac{1}{p}}\qquad(p>1),$$

它们在 $\mathbb{R}^n$ 中诱导的拓扑都是一致的。

**例 A.6 (两种度量诱导不同拓扑)** @198

在集合 $C[0,1]$ 中，定义度量

$$d_1(x,y)=\max_{0\leqslant t\leqslant 1}|x(t)-y(t)|,$$

$$d_2(x,y)=\int_0^1|x(t)-y(t)|\,\mathrm{d}t,$$

它们在 $C[0,1]$ 上诱导的拓扑是不相同的。考虑下面的函数列：

$$g_n(x)=\begin{cases}n^3\left(\dfrac{1}{n^2}-x\right),&0\leqslant x\leqslant\dfrac{1}{n^2},\\[6pt] 0,&\dfrac{1}{n^2}\leqslant x\leqslant 1.\end{cases}$$

这个函数列在度量 $d_2$ 下收敛于 $0$，但是在度量 $d_1$ 下，$d_1(0,g_n)=n$ 是无界的函数列，它不是收敛的。

**定义 A.4 (邻域)** @198

设 $(X,d)$ 是度量空间，$x_0\in X$。$X$ 中包含 $x_0$ 的任何开集 $G$ 都称为 $x_0$ 的**邻域**。

对度量空间 $(X,d)$ 中点 $x_0$，容易看出 $\left\{O\left(x_0,\dfrac{1}{n}\right):n=1,2,\cdots\right\}$ 是 $x_0$ 的一组邻域基。特别地，度量空间的任意一点均存在一个可数的邻域基，这是度量空间区别于一般拓扑空间的主要特性。例如，$C[a,b]$ 按点态收敛诱导的拓扑就不存在可数邻域基，因此这个拓扑是不可度量化的。这个事实留给读者验证。

**注 A.2 (内点的邻域刻画)** @198

设 $A$ 是度量空间 $X$ 中的点集，那么 $x_0$ 成为 $A$ 的内点的充要条件是，$x_0$ 有一个邻域包含在 $A$ 中。

**定义 A.5 (内部)** @198

设 $A$ 是度量空间 $(X,d)$ 中的点集。$A$ 的内点全体构成的点集称为 $A$ 的（拓扑）**内部**，记作 $A^\circ$。

**定理 A.2 (内部的性质)** @198

设 $A$ 是度量空间 $X$ 的子集，则

（i）$A$ 的内部 $A^\circ$ 是开集。

（ii）如果 $G$ 是 $X$ 的开子集，并且 $G\subset A$，那么 $G\subset A^\circ$。

（iii）$A$ 成为开集的充要条件是 $A=A^\circ$，即 $A$ 的每一点都是它的内点。

点集 $A$ 的内部 $A^\circ$ 是包含在 $A$ 中的最大开集。

**例 A.7 (集合的内部)** @199

在复平面上（按照 Euclid 度量），考察集合

$$A=\{z:|z|<1\}\cup\{z:1\leqslant |z|<2,\ z=x+\mathrm{i}y,\ x\ \text{是有理数}\}.$$

容易明白，只有在单位圆盘 $\{z:|z|<1\}$ 内的点是 $A$ 的内点，即 $A^\circ=\{z:|z|<1\}$。而圆环 $\{z:1\leqslant |z|<2\}$ 中属于 $A$ 的点都不是 $A$ 的内点。

我们注意，本节中所述的内点以及后面的各种概念，都是相对于给定的度量空间而言。例如开区间 $(a,b)$，作为直线 $\mathbb{R}$ 中的点集，其中每个点都是内点；但如果把它放在二维平面 $\mathbb{R}^2$ 中考察，即将它看成 $\mathbb{R}^2$ 的子集，那么其中每个点就都不是内点了。因为随着空间的改变，邻域的含义也改变了。

**引理 A.1 (收敛的等价刻画)** @199

设 $(X,d)$ 是度量空间，$\{x_n\}_{n=1}^{\infty}$ 是 $X$ 中的点列，又设 $x_0\in X$。那么下面三条等价：

（i）点列 $\{x_n\}_{n=1}^{\infty}$ 收敛于点 $x_0$，即 $\lim\limits_{n\to\infty}d(x_n,x_0)=0$。

（ii）对于 $x_0$ 的任何邻域 $O(x_0)$，存在自然数 $N$，使得当 $n\geqslant N$ 时，$x_n\in O(x_0)$。

（iii）对于 $x_0$ 的任何 $\varepsilon$ 邻域 $O(x_0,\varepsilon)$，存在自然数 $N$，使得当 $n\geqslant N$ 时，$x_n\in O(x_0,\varepsilon)$。

#### 极限点、闭集 @199

**定义 A.6 (极限点、导集与闭包)** @199

设 $X$ 是度量空间，$A$ 是 $X$ 中的子集。

（i）设 $x_0\in X$，如果 $x_0$ 的每个 $r$ 邻域中都含有 $A$ 中无限个点，那么称 $x_0$ 是点集 $A$ 的**极限点**。

（ii）$A$ 的极限点全体构成的集合称为 $A$ 的**导集**，记作 $A'$。称 $\overline{A}=A\cup A'$ 是 $A$ 的**闭包**。

（iii）如果集合 $A$ 的极限点全体 $A'$ 都包含在 $A$ 中，就称 $A$ 为**闭集**。

（iv）设 $x_0\in A$，如果存在 $x_0$ 的一个邻域 $O(x_0)$，在其中除 $x_0$ 外不含有 $A$ 的点，就称 $x_0$ 是 $A$ 的**孤立点**。

**引理 A.2 (极限点的等价刻画)** @200

设 $A$ 是度量空间 $X$ 中的点集，$x_0\in X$，那么下面四个命题是彼此等价的：

（i）$x_0$ 是集合 $A$ 的极限点。

（ii）$x_0$ 的任何一个邻域 $O(x_0)$ 中含有 $A$ 中异于 $x_0$ 的点，即 $(O(x_0)\setminus\{x_0\})\cap A\neq\varnothing$。

（iii）在集合 $A$ 中存在一列点 $\{x_n\}_{n=1}^{\infty}$，满足 $x_n\neq x_0$ 且 $x_n\to x_0\ (n\to\infty)$。

（iv）在集合 $A$ 中存在一列互不相同的点 $\{x_n\}_{n=1}^{\infty}$，满足 $x_n\neq x_0$，且 $x_n\to x_0\ (n\to\infty)$。

从上面的性质，我们可以看出孤立点和极限点是相对立的概念，即集合 $A$ 中的点要么是 $A$ 的极限点，要么是孤立点。

**例 A.8 (离散点列的极限点)** @200

集合 $A=\left\{\dfrac{1}{n}:n=1,2,\cdots\right\}$ 为直线的子集，它有唯一的极限点 $0\notin A$，$A$ 中的点都是孤立点。

**例 A.9 (集合的导集)** @200

考虑例 A.7 中的复平面上的集合

$$A=\{z:|z|<1\}\cup\{z:1\leqslant |z|<2,\ z=x+\mathrm{i}y,\ x\ \text{是有理数}\}.$$

容易看出，$A$ 的极限点的集合——导集 $A'=\{z:|z|\leqslant 2\}$，$A\subset A'$，所以 $\overline{A}=A'\cup A=A'$。

**引理 A.3 (闭包的等价刻画)** @200

设 $A$ 是度量空间 $X$ 中的点集，$x\in X$，那么下列三个命题彼此等价：

（i）$x\in\overline{A}$。

（ii）$x$ 的每个邻域 $O(x)$ 中都有 $A$ 的点。

（iii）存在点列 $\{x_n\}_{n=1}^{\infty}\subset A$ 使得 $x_n\to x\ (n\to\infty)$。

在离散的度量空间中，任一点集都没有极限点。因而每个点集都是闭集，同时还是开集。由此可见，在有的度量空间中，既开又闭的集可能很多。

**定理 A.3 (闭集的等价刻画)** @201

设 $A$ 是度量空间 $X$ 的子集，则下面命题等价：

（i）$A$ 是闭集，即 $A'\subset A$。

（ii）$A$ 中任何一个收敛点列收敛于 $A$ 中的一点。

（iii）$A$ 的余集 $A^c=X\setminus A$ 是开集。

**定理 A.4 (闭集的拓扑性质)** @201

在度量空间中下列命题成立：

（i）空集及全空间是闭集。

（ii）任意个闭集的交集是闭集。

（iii）有限个闭集的并集是闭集。

**推论 A.1 (开集与闭集的差)** @201

闭集减开集的差集是闭集，而开集减闭集的差集是开集。

**定理 A.5 (导集与闭包的闭性)** @201

集合 $A$ 的导集 $A'$ 和闭包 $\overline{A}$ 都是闭集。

我们之所以把 $\overline{A}$ 称为 $A$ 的闭包，这是因为 $\overline{A}$ 是包含着 $A$ 的最小闭集。换句话说，有下述推论：

**推论 A.2 (闭包是最小闭集)** @201

在度量空间 $X$ 中，如果闭集 $F$ 包含集 $A$，那么 $F\supset\overline{A}$。

由此得到，$A$ 的闭包就是 $X$ 中所有包含 $A$ 的闭集的交集：

$$\overline{A}=\bigcap_{F\supset A,\ F'\subset F}F.$$

**定理 A.6 (闭集的闭包刻画)** @201

$A$ 成为闭集的充要条件是 $A=\overline{A}$。

#### 连续映射 @201

**定义 A.7 (连续映射)** @201

设 $X$ 和 $Y$ 是度量空间，$f$ 是 $X$ 到 $Y$ 中的映射。

（i）对于 $X$ 中任意收敛于 $x_0$ 的点列 $\{x_n\}_{n=1}^{\infty}$，若成立

$$\lim_{n\to\infty}f(x_n)=f(x_0),$$

则称映射 $f$ 在点 $x_0$ 是**连续**的。

（ii）假如映射 $f$ 在 $X$ 的每一点都连续，就称 $f$ 是 $X$ 上的**连续映射**。

特别地，当像空间 $Y$ 是实数域 $\mathbb{R}$ 或复数域 $\mathbb{C}$ 时，称 $f$ 为连续实（复）函数。

**定理 A.7 (连续性的等价刻画)** @202

设 $f$ 是度量空间 $X$ 到度量空间 $Y$ 中的映射，那么下面命题等价：

（i）映射 $f$ 在点 $x_0$ 是连续的。

（ii）对于 $\varepsilon>0$ 及 $f(x_0)$ 的邻域 $O(f(x_0),\varepsilon)$，存在 $\delta>0$，使得对 $x_0$ 在 $X$ 中的邻域 $O(x_0,\delta)$，有

$$f(O(x_0,\delta))\subset O(f(x_0),\varepsilon).$$

（iii）对于 $X$ 中任意一列收敛于 $x_0$ 的点列 $\{x_n\}_{n=1}^{\infty}$，成立

$$\lim_{n\to\infty}f(x_n)=f(x_0).$$

显然，$X$ 中的孤立点是任何映射的连续点。

**定理 A.8 (连续与开集原像)** @202

设 $X,Y$ 是度量空间，映射 $f:X\to Y$。那么映射 $f$ 在 $X$ 上连续的充要条件是：像空间 $Y$ 中的任一开集 $O$ 的原像 $G=\{x\mid f(x)\in O\}$（常常记为 $f^{-1}(O)$，甚至简记为 $f^{-1}O$）是 $X$ 中的开集。

### B 度量空间中的紧集（p203–208）

本节详细给出度量空间中列紧集、紧集、完全有界集的概念、性质与定理，供不熟悉的读者阅读。

**定义 B.1 (相对列紧集)** @203

设 $X$ 是度量空间，$A$ 是 $X$ 的子集。如果 $A$ 中的任何点列都有在 $X$ 中收敛的子点列，就称 $A$ 是（$X$ 中的）**相对列紧集**。如果 $X$ 自身是相对列紧集，就称 $X$ 是**列紧空间**。

**定义 B.2 (列紧集)** @203

度量空间中闭的相对列紧集，即 $A$ 中任一点列有收敛子点列收敛到 $A$ 中的一点，称为**列紧集**。

**定义 B.3 (ε 网与完全有界集)** @203

设 $A$ 是度量空间 $X$ 中点集，$B$ 是 $A$ 的子集。

（i）如果有正数 $\varepsilon$，使得以 $B$ 中各点为球心、以 $\varepsilon$ 为半径的开球全体覆盖 $A$，即

$$\bigcup_{x\in B}O(x,\varepsilon)\supset A,$$

那么称 $B$ 是 $A$ 的 $\varepsilon$ **网**。

（ii）如果对任何 $\varepsilon>0$，集合 $A$ 总有有限的 $\varepsilon$ 网 $\{x_1,x_2,\cdots,x_n\}\subset A$（点的个数 $n$ 随 $\varepsilon$ 而变），则称 $A$ 是**完全有界集**。

**注 (完全有界集的基本性质)** @203

完全有界集有以下基本性质：

1. 有限点集是完全有界集。2. 有限个完全有界集的并集是完全有界集。3. 基本点列构成的集合是完全有界的。4. 完全有界集的子集是完全有界集，因此任意一族完全有界集的交集是完全有界集。5. 完全有界集的闭包是完全有界集。6. 完全有界集是有界集，但是反过来不对。

对于直线上的有界闭集 $F$，由 Heine–Borel 定理，$F$ 的任何开覆盖都有有限的子覆盖。特别地，对于任意的 $\varepsilon>0$，考虑 $F$ 的开覆盖 $\{O(x,\varepsilon):x\in F\}$，得到有限个 $\{x_1,x_2,\cdots,x_n\}\subset F$，使得 $\bigcup_{i=1}^n O(x_i,\varepsilon)\supset F$。因此有如下定理。

**定理 B.1 (Euclid 空间的有界集)** @204

$n$ 维 Euclid 空间 $\mathbb{R}^n$ 中的有界集是完全有界的。

下面利用完全有界集给出相对列紧集的一个切实可行的刻画。

**引理 B.1 (完全有界的序列刻画)** @204

设 $A$ 是度量空间 $X$ 中的一个子集，则 $A$ 完全有界当且仅当对 $A$ 中任一序列 $\{y_n\}$，都存在一个子列 $\{y_{n_k}\}$ 是 Cauchy（收敛）的。

使用这个引理，容易看出完全有界集和相对列紧集有下面的关系。

**定理 B.2 (Hausdorff)** @205

（i）度量空间中相对列紧集是完全有界集。

（ii）在完备度量空间中，完全有界集是相对列紧集。因此，在完备度量空间中，完全有界集和相对列紧集是相同的。

下面把直线上的 Heine–Borel 有限覆盖定理拓广到一般的度量空间，进而推出列紧集的特征性质。

**定理 B.3 (Gross 有限覆盖定理)** @205

设 $A$ 是度量空间 $X$ 中的列紧集，$\mathfrak{U}$ 是 $X$ 中的一族开集。如果 $\mathfrak{U}$ 覆盖 $A$：即 $\bigcup_{O\in\mathfrak{U}}O\supset A$，那么存在 $\mathfrak{U}$ 中的有限个开集 $O_1,O_2,\cdots,O_n$ 覆盖 $A$：

$$\bigcup_{i=1}^n O_i\supset A.$$

证明中的正数 $\rho_0=\inf\limits_{x\in A}\rho(x)$ 称为列紧集 $A$ 的 **Lebesgue 数**。这个定理也称为有限覆盖定理，它的逆命题也正确。

**定理 B.4 (有限覆盖推出列紧)** @206

设 $A$ 是度量空间 $X$ 中的点集。如果 $X$ 中每个覆盖 $A$ 的开集族中都有有限个开集覆盖 $A$，那么 $A$ 是列紧集。

**定义 B.4 (紧集)** @206

设 $A$ 是度量空间 $X$ 的子集，如果集合 $A$ 的任何一族开覆盖都有有限的子覆盖，就称 $A$ 是 $X$ 的（覆盖）**紧集**。

根据上面两个定理，证明了在度量空间中紧集和列紧集是等价的。因此，在度量空间中，不需再区分（覆盖）紧集和列紧集。

下面讨论 $L^p(\mathbb{R})$ 中的完全有界集。

**定理 B.5 (Lp 完全有界判据)** @206

（Kolmogorov–Riesz–Frèchet 定理）设 $1\leqslant p<\infty$，$-\infty<a<b<\infty$，则空间 $L^p[a,b]$ 中的集合 $A$ 是完全有界集的充要条件是

（i）$A$ 为有界集：存在 $M>0$，使得对于任意的 $f\in A$ 有 $\|f\|_p\leqslant M$。

（ii）（等度 $L^p$ 范数连续）对于任意的 $\varepsilon>0$，存在 $\delta(\varepsilon)>0$，对于任意的 $f\in A$，当 $|h|\leqslant\delta(\varepsilon)$ 时，

$$\int_{\mathbb{R}}|f(x+h)-f(x)|^p\,\mathrm{d}x\leqslant\varepsilon^p,\tag{B.1}$$

这里延拓定义 $f(x)=0\ (\forall x\notin[a,b])$。

**注 B.1** @208

（i）对卷积理论熟悉的读者容易看出，这里实际上是通过 $f*\dfrac{\chi_{[-\delta,\delta]}}{2\delta}$ 提升了光滑性，并逼近 $f$。

（ii）由定理 B.5 充分性的证明可以看到：对于条件（ii），$f$ 在 $[a,b]$ 外的定义并不一定要取零延拓，只需要存在一个在 $\mathbb{R}$ 上的延拓，使得延拓后的函数满足条件（ii）即可。

对于直线 $\mathbb{R}$ 上的情况，结论略微复杂一点。不仅需要范数的等度连续性，还必须对无穷远处的积分收敛速度也是"等度"的。

**定理 B.6 (全直线完全有界判据)** @208

（Kolmogorov–Riesz–Frèchet 定理）空间 $L^p(\mathbb{R})$ 中的集合 $A$ 是完全有界集的充要条件是

（i）$A$ 为有界集。

（ii）（等度 $L^p$ 胎紧）对于任意的 $\varepsilon>0$，存在正数 $M$，使得对于任意的 $f\in A$，都有

$$\int_{|x|>M}|f(x)|^p\,\mathrm{d}m(x)<\varepsilon^p.$$

（iii）（等度 $L^p$ 范数连续）对于任意的 $\varepsilon>0$，存在 $\delta>0$，对于任意的 $f\in A$，当 $|h|<\delta$ 时，一定有

$$\|f(\cdot+h)-f(\cdot)\|_p\leqslant\varepsilon.$$

然而，对一般度量空间 $X$ 上的 $L^p$ 空间，判定它中子集是否完全有界是不容易的。

### C Stone-Weierstrass 定理（p209–210）

设 $K$ 是紧 Hausdorff 空间，那么连续函数全体 $C(K)$ 按范数

$$\|f\|=\max_{x\in K}|f(x)|$$

构成一个 Banach 空间。

对 $C(K)$ 中子集 $A$，如果 $A$ 对数乘运算和函数加法及乘法都是封闭的，则称 $A$ 是一个**子代数**；此时若 $A$ 还含有常数函数 $f(x)\equiv 1$，则称 $A$ 是**单位子代数**。若对任意 $f\in A$，都有 $\bar f\in A$，则称 $A$ 是**自伴的**。而 $A$ **分离** $K$ 中的点，则意味着：对任意 $x\neq y\in K$，可找到函数 $f\in A$，使得 $f(x)\neq f(y)$。

**定理 C.1 (Stone-Weierstrass)** @209

设 $K$ 是紧 Hausdorff 空间。如果 $A$ 是 $C(K)$ 中含有单位元的、闭的、自伴子代数，并且它分离 $K$，那么 $A=C(K)$。

#### 习题（p210）

**习题 1** @210

设 $X$ 是紧度量空间，$A$ 是 $C(X)$ 中的一个子代数。证明：$A$ 在 $C(X)$ 中的闭包也是一个代数。

**习题 2** @210

对 $[a,b]$ 上连续函数 $f$ 及 $\varepsilon>0$，证明：存在一些数 $c_0,c_1,\cdots,c_n$ 使得

$$\left|f(x)-\sum_{k=0}^n c_k\mathrm{e}^{kx}\right|\leqslant\varepsilon,\qquad\forall x\in[a,b].$$

**习题 3** @210

设 $X,Y$ 都是紧度量空间，$f$ 是乘积空间 $X\times Y$ 上的连续函数。对任意 $\varepsilon>0$，证明：存在一些 $C(X)$ 中函数 $f_1,f_2,\cdots,f_n$ 及 $C(Y)$ 中函数 $g_1,g_2,\cdots,g_n$ 使得

$$\left|f(x,y)-\sum_{k=1}^n f_k(x)g_k(y)\right|\leqslant\varepsilon,\qquad\forall x\in X,\ y\in Y.$$

**习题 4** @210

对紧度量空间 $X$，设 $A$ 是实值连续函数空间 $C(X)$ 中分离 $X$ 中点的闭子代数。证明：$A=C(X)$ 或存在一点 $x_0\in X$ 使得

$$A=\{f\in C(X):f(x_0)=0\}.$$

**习题 5** @210

对于 Banach 空间

$$C_0(\mathbb{R})=\left\{f\text{ 在 }\mathbb{R}\text{ 上连续}:\lim_{|x|\to\infty}f(x)=0\right\},$$

设 $A$ 是 $C_0(\mathbb{R})$ 中的自伴闭子代数，分离 $\mathbb{R}$ 中的点，并在任意点 $x\in\mathbb{R}$ 有 $f\in A$ 使得 $f(x)\neq0$。证明：$A=C_0(\mathbb{R})$。

### D 弱拓扑中的一些定理（p211–213）

本节给出 2.5 节中提及的弱拓扑的一些定理的证明。

**定理 D.1 (Banach-Alaoglu)** @211

对于赋范线性空间 $X$，$X^*$ 的单位闭球 $B_1^*$ 在 $w^*$ 拓扑下是（覆盖）紧的。

**定理 D.2 (Eberlein（埃伯莱因）)** @211

设 $\{x_n\}_{n=1}^{\infty}$ 是自反空间 $X$ 中有界序列，则它存在子列在 $X$ 中弱收敛。

**定理 D.3 (Goldstine（戈尔德斯坦）)** @211

记 $X$ 中的单位球为 $B_1=\{x\in X:\|x\|\leqslant 1\}$，则 $JB_1$ 在二次对偶空间 $X^{**}$ 的单位闭球

$$B_1^{**}\stackrel{\mathrm{def}}{=}\{x^{**}\in X^{**}:\|x^{**}\|\leqslant 1\}$$

中弱$^*$稠密。

**例 D.1** @212

$c_0$ 在 $l^{\infty}$ 中弱$^*$稠密（见习题 2.5 第 14 题）。

更一般的结论可见引理 E.1。

**定理 D.4 (Krein-Mil'man 定理)** @212

设 $X$ 是赋范线性空间，$A$ 是 $X^*$ 中的凸的弱$^*$紧集，则 $A$ 的端点集 $\operatorname{Ext}A$ 非空，且 $A$ 是包含凸包 $\operatorname{co}\operatorname{Ext}A$ 的最小弱$^*$闭集。

为陈述端点与面的关系，先引入下面的概念。对于 $A$ 的一个非空凸子集 $S$，如果 $x,y\in A$ 且 $tx+(1-t)y\in S$ 时有 $x,y\in S$，则称 $S$ 是 $A$ 的一个**面**。如果 $S$ 还是弱$^*$闭（从而弱$^*$紧）的，则称 $S$ 是一个**闭面**。显然，端点构成一个特殊的面；反之，如果单点集 $\{x\}$ 是 $A$ 的面，则 $x$ 是端点。对于 Euclid 空间中的多面体，它的每一个侧面都是一个面。容易证明：若 $B$ 是 $A$ 的面，$C$ 是 $B$ 的面，那么 $C$ 也是 $A$ 的一个面。

#### 凸分析中的应用 @213

使用 Krein-Mil'man 定理，可以给出凸分析中一些基本结果。

**推论 D.1** @213

设 $A$ 是 Euclid 空间中的一个凸多面体，$E=\{e_1,e_2,\cdots,e_k\}$ 是 $A$ 的顶点。

(i) 对一次函数 $f(x)=a_1x_1+a_2x_2+\cdots+a_nx_n+c$，

$$\max_{x\in A}f(x)=\max\{f(e_1),f(e_2),\cdots,f(e_k)\},$$

$$\min_{x\in A}f(x)=\min\{f(e_1),f(e_2),\cdots,f(e_k)\}.$$

(ii) 设 $f$ 是 $A$ 上的一个凸函数：对于 $x,y\in A$ 及 $0\leqslant t\leqslant 1$，有 $f((1-t)x+ty)\leqslant (1-t)f(x)+tf(y)$。那么，

$$\max_{x\in A}f(x)=\max\{f(e_1),f(e_2),\cdots,f(e_k)\}.$$

#### 遍历测度的存在性 @213

我们介绍下这个定理在拓扑动力系统中的一个应用。设 $X$ 是一个紧的 Hausdorff 的拓扑空间，$T:X\to X$ 是一个连续满射，则称 $(X,T)$ 是一个**拓扑动力系统**。令 $\mathcal{B}$ 是由 $X$ 中的开集生成的 $\sigma$ 代数，定义在 $\mathcal{B}$ 上的测度称为 **Borel 测度**，若测度 $\mu$ 还满足 $\mu(X)=1$，则将它叫做 **Borel 概率测度**。$X$ 上的 Borel 概率测度 $\mu$ 称做**不变的**，是指：对任意 $E\in\mathcal{B}$，有 $\mu(T^{-1}(E))=\mu(T)$。不变测度 $\mu$ 称为**遍历的**，是指：对任一 Borel 集 $A$，若 $\mu(A\triangle T^{-1}A)=0$，则有 $\mu(A)=0$ 或 $1$。拓扑动力系统一个重要的问题是研究不变测度全体 $\mathcal{P}_T$ 与其中的遍历测度。例如

**例 D.2 (Furstenberg（福斯滕伯格）×2×3 猜想)** @213

令 $S:z\mapsto z^2$，$T:z\mapsto z^3$ 为单位圆周 $\mathbb{T}$ 上的自映射。设 $\mathbb{T}$ 上的 Borel 概率测度 $\mu$ 是 $S$-不变与 $T$-不变的，且对每一点 $x$ 有 $\mu(\{x\})=0$，则 $\mu=\dfrac{\mathrm{d}\theta}{2\pi}$。

这一问题与数论、表示论都有深刻的联系，目前还看不到解决的希望。

#### 习题（p214）

**习题 1** @214

设 $X$ 是 Banach 空间，数 $\gamma\geqslant0$，$f_1,f_2,\cdots,f_n$ 是 $X$ 上的 $n$ 个有界线性泛函，$\alpha_1,\alpha_2,\cdots,\alpha_n$ 是 $n$ 个给定的数。那么对于任意的 $\varepsilon>0$，存在 $x_\varepsilon\in X$ 使得

$$f_i(x_\varepsilon)=\alpha_i\ (i=1,2,\cdots,n),\qquad\text{以及}\quad\|x_\varepsilon\|\leqslant\gamma+\varepsilon$$

的充要条件是不等式

$$\left|\sum_{i=1}^n\beta_i\alpha_i\right|\leqslant\gamma\left\|\sum_{i=1}^n\beta_i f_i\right\|$$

对于任意的 $n$ 个数 $\beta_1,\beta_2,\cdots,\beta_n$ 都成立。

**习题 2** @214

设 $X$ 为赋范线性空间，$L$ 为 $X^*$ 的线性子空间，证明：$L$ 在 $({}^\perp L)^\perp$ 中弱 $*$ 稠密。

**习题 3** @214

若赋范线性空间 $X$ 的单位球 $B_1(X)$ 是弱紧的，证明：自然映射 $J:X\to X^{**}$ 是满射，即 $X$ 是自反的。

### E 局部凸空间（p214–220）

赋范线性空间概括了很多重要的研究对象，但仍有很多对象不能纳入，例如弱拓扑等就不能由一个范数导出，为此又发展出了拓扑线性空间以及局部凸空间理论。

**定义 E.1 (拓扑向量空间)** @214

设 $X$ 是一个线性空间，若赋予拓扑 $\tau$ 使得 $X$ 上加法与数乘都是连续的，即两个二元运算

$$+:X\times X\to X,\quad (x,y)\mapsto x+y,$$

$$\times:\mathbb{K}\times X\to X,\quad (\alpha,x)\mapsto \alpha x$$

都是连续的，则称 $X$ 是一个**拓扑向量空间**。

显然赋范线性空间是拓扑线性空间。

**例 E.1** @215

在例 1.1.12 中，我们介绍了线性空间

$$S=\{[a,b]\ \text{上几乎处处有限的 Lebesgue 可测函数}\}/\sim.$$

注意到依度量

$$d(f,g)=\int_{[a,b]}\frac{|f(t)-g(t)|}{1+|f(t)-g(t)|}\,\mathrm{d}m(t),\quad \forall f,g\in S$$

收敛恰好为依测度收敛。在度量 $d$ 诱导的拓扑下，$S$ 的加法和数乘都是连续的。然而 $S$ 上并不存在非平凡的连续线性泛函（见习题 2.5 第 2 题），因此拓扑不能由范数诱导。

连续线性泛函的缺乏导致难以从泛函分析的角度处理上述例子。下面我们将只限于在局部凸空间中讨论。

**定义 E.2 (局部凸空间)** @215

设 $X$ 是线性空间，$\{p_i\}_{i\in I}$ 是 $X$ 上一族半范数，$\tau$ 是使得每个 $p_i$ 都连续的最小拓扑，则称 $(X,\{p_i\}_{i\in I},\tau)$ 是一个**局部凸空间**。

对于局部凸空间 $(X,\{p_i\}_{i\in I})$ 中一点 $x_0$，半范数 $p_{i_1},p_{i_2},\cdots,p_{i_n}$ 及正数 $\varepsilon_1,\varepsilon_2,\cdots,\varepsilon_n$，令

$$U_{p_{i_1},p_{i_2},\cdots,p_{i_n}}^{\varepsilon_1,\varepsilon_2,\cdots,\varepsilon_n}(x_0)=\{x\in X:p_{i_1}(x-x_0)<\varepsilon_1,p_{i_2}(x-x_0)<\varepsilon_2,\cdots,p_{i_n}(x-x_0)<\varepsilon_n\}$$

$$=\bigcap_{m=1}^{n}p_{i_m}^{(-1)}(O(p_{i_m}(x_0),\varepsilon_m)).$$

则 $\{U_{p_{i_1},p_{i_2},\cdots,p_{i_n}}^{\varepsilon_1,\varepsilon_2,\cdots,\varepsilon_n}(x_0)\}$ 是 $x_0$ 的一组拓扑基。拓扑 $\tau$ 中开集就是一些形如 $U_{p_{i_1},p_{i_2},\cdots,p_{i_n}}^{\varepsilon_1,\varepsilon_2,\cdots,\varepsilon_n}(x)$ 的并集。

容易看出，点 $0$ 的邻域基 $\{U_{p_{i_1},p_{i_2},\cdots,p_{i_n}}^{\varepsilon_1,\varepsilon_2,\cdots,\varepsilon_n}(0)\}$ 都是凸的。由 2.4 节中 Minkowski 泛函的结果，可以证明拓扑线性空间是局部凸空间的充要条件是它在点 $0$ 有一组由凸集组成的邻域基（参见 [4, 第一章] 或习题 E 第 1 题）。

由拓扑理论可知，$(X,\{p_i\}_{i\in I})$ 中的网 $x_\lambda$ 收敛到 $x$ 当且仅当对每个 $p_i$，$p_i(x_\lambda)\to p_i(x)$。因此局部凸空间是拓扑线性空间。称 $X$ 中的子集 $E$ 是**有界的**，若对每个 $p_i$，$\sup\limits_{x\in E}p_i(x)<+\infty$。

称半范数族 $\{p_i\}_{i\in I}$ 是**分离点的**，若 $\bigcap\limits_{i\in I}p_i^{(-1)}(\{0\})=\{0\}$。也就是说，两点 $x,y$ 相同当且仅当对每个 $p_i$，$p_i(x-y)=0$。由 $\tau$ 中邻域基的形式，容易看出

**命题 E.1 (分离点与 Hausdorff)** @215

局部凸空间 $(X,\{p_i\}_{i\in I})$ 是 Hausdorff 的当且仅当半范数族 $\{p_i\}_{i\in I}$ 是分离点的。

下面给出局部凸空间的一些典型例子。

**例 E.2** @216

设 $C^{\infty}[0,1]$ 是 $[0,1]$ 上无穷次可微函数全体。定义它上的半范数

$$p_i(f)=\max_{x\in[0,1]}|f^{(i)}(x)|,\quad i=1,2,\cdots,$$

则 $(C^{\infty}[0,1],\{p_i\}_{i\in\mathbb{N}})$ 是一个 Hausdorff 的局部凸空间。它上的拓扑也可由一列递增的半范数 $\{\max\limits_{1\leqslant i\leqslant n}p_i:n\in\mathbb{N}\}$ 诱导而出。显然，函数列 $\{f_n\}$ 依此拓扑收敛于 $f$ 的充要条件是 $f_n$ 的各阶导数一致收敛于 $f$。

**例 E.3** @216

设 $\Omega$ 是 $\mathbb{R}^n$ 中的开子集，$C(\Omega)$ 是其上的连续函数全体。对每个紧集 $K\subset\Omega$，定义半范数

$$p_K(f)=\max_{x\in K}|f(x)|,\quad \forall f\in C(\Omega),$$

则 $(C(\Omega),\{p_K\}_{K\text{紧}})$ 是一个 Hausdorff 的局部凸空间。相应的拓扑意味着在 $\Omega$ 的任何一个紧集上一致收敛。

类似地，例 1.1.14 的 $H(\Omega)$ 也在此半范数族下构成局部凸空间。

**例 E.4** @216

设 $E$ 是线性空间，$F$ 是 $E$ 上一些线性函数构成的线性空间。对每个 $f\in F$，定义 $E$ 上的半范数为

$$p_f(x)=|f(x)|,\quad \forall x\in E.$$

那么，$E$ 在半范数族 $\{p_f\}_{f\in F}$ 下构成局部凸空间。显然所诱导的拓扑是使得每个 $f\in F$ 都连续的最小拓扑，我们将其记作 $(E,\sigma(E,F))$。

若 $X$ 是赋范线性空间，$(X,\sigma(X,X^*))$ 即为 $X$ 上的弱拓扑，$(X^*,\sigma(X^*,X))$ 是 $X^*$ 上的弱$^*$拓扑。

**例 E.5** @216

固定一点 $x\in[0,1]$。在 $C[0,1]$ 上，定义半范数

$$p_x(f)=|f(x)|,\quad \forall f\in C[0,1].$$

那么，局部凸空间 $(C[0,1],\{p_x\}_{x\in[0,1]})$ 上的拓扑意味着 $C[0,1]$ 中函数列的点态收敛。

#### 局部凸空间的度量化 @216

若局部凸空间 $(X,\tau)$ 上存在一个度量 $d$，使得 $d$ 诱导的拓扑与 $\tau$ 一致，则称 $X$ 是**可度量化的**。若度量空间 $X$ 还是完备的，则称 $X$ 是 **Fréchet 空间**。

**定理 E.1 (可度量化判据)** @216

设 $(X,\{p_i\}_{i\in I},\tau)$ 是局部凸空间。那么，$X$ 是可度量化的当且仅当存在 $I$ 的一个可数指标集 $J$，使得半范数列 $\{p_i\}_{i\in J}$ 是可分离点的，并且诱导的拓扑与 $\tau$ 一致。

**注 E.1** @217

定理 E.1 充分性证明中的度量可取为

$$d(x,y)=\sum_{i\in J}\frac{1}{2^i}\frac{p_i(x-y)}{1+p_i(x-y)},\quad \forall x,y\in X. \tag{E.1}$$

这一度量 $d$ 是平移不变的，即

$$d(x+y,x+z)=d(y,z),\quad \forall x,y,z\in X.$$

显然 $X$ 中子集 $E$ 是有界的当且仅当 $\sup\limits_{x\in E}d(x,0)<+\infty$。

**例 E.6** @217

容易看出，例 E.2 中的 $C^{\infty}[0,1]$ 与例 E.3 中的 $C(\Omega)$ 都是可度量化的，并且是完备的，所以都是 Fréchet 空间。而在例 E.5 中，局部凸空间 $(C[0,1],\{p_x\}_{x\in[0,1]})$ 不是可度量化的。否则，存在 $[0,1]$ 中的点列 $\{x_1,x_2,\cdots,x_n,\cdots\}$，使得半范数 $\{p_{x_i}:i=1,2,\cdots\}$ 诱导的拓扑 $\sigma$ 给出 $[0,1]$ 上的点态收敛。固定不同于 $\{x_i:i=1,2,\cdots\}$ 的点 $x\in[0,1]$。令 $D$ 是 $\{x_i:i=1,2,\cdots\}$ 的有限子集全体，它在包含关系下构成一个定向集，对任意 $\lambda\in D$，取 $C[0,1]$ 中函数 $f$ 在每个 $x_i\in\lambda$ 处为 $0$，在 $x$ 处为 $1$，那么 $f_\lambda$ 在拓扑 $\sigma$ 下收敛于 $0$，但不是点态收敛于 $0$ 的。

局部凸空间上半范数的连续性也可使用如下的方法判定：

**命题 E.2 (半范数的连续性)** @217

设 $p$ 是局部凸空间 $(X,\{p_i\}_{i\in I})$ 上的半范数，$p$ 在 $X$ 上连续的充要条件是存在有限个 $i_1,i_2,\cdots,i_m$ 及正数 $c_1,c_2,\cdots,c_m$ 使得

$$p(x)\leqslant \sup_{1\leqslant j\leqslant m}c_jp_{i_j}(x),\quad \forall x\in X.$$

由此可知，有界集的概念不依赖于定义中连续半范数的选取。

**推论 E.1** @217

设 $f$ 是局部凸空间 $(X,\{p_i\}_{i\in I})$ 上的线性泛函。$f$ 在 $X$ 上连续的充要条件是存在有限个 $i_1,i_2,\cdots,i_m$ 及正数 $c_1,c_2,\cdots,c_m$ 使得

$$|f(x)|\leqslant \sup_{1\leqslant j\leqslant m}c_jp_{i_j}(x),\quad \forall x\in X.$$

#### 局部凸空间上的线性算子 @219

对于局部凸空间 $X,Y$，记 $\mathfrak{B}(X,Y)$ 是从 $X$ 到 $Y$ 上连续函数全体。

**定理 E.2 (线性映射的连续性)** @219

设 $(X,\{p_i\})$，$(Y,\{q_k\})$ 是局部凸空间。线性映射 $T:X\to Y$ 是连续的当且仅当对每个 $q_k$，存在有限个指标 $i_1,i_2,\cdots,i_m$ 及正数 $c_1,c_2,\cdots,c_m$ 使得

$$|q_k(T(x))|\leqslant \sup_{1\leqslant j\leqslant m}c_jp_{i_j}(x),\quad \forall x\in X.$$

由定理 E.2，若 $T\in\mathfrak{B}(X,Y)$，$T$ 将 $X$ 中的有界集映成有界集。若 $X$ 是可度量化的，那么定理的逆命题也是成立的（见习题 E 第 4 题）。

若可度量化的局部凸空间还是完备的，即它是 Fréchet 空间，由 Baire 纲定理，它是第二纲的。直接采用 3.2 节的证明，无须大的修改，即可将 Banach 空间的基本定理推广至 Fréchet 空间。因此我们只给出定理的陈述，证明留作练习。

**定理 E.3 (开映射定理)** @219

设 $X,Y$ 是 Fréchet 空间，$T\in\mathfrak{B}(X,Y)$。若 $T$ 是满射，则 $T$ 是开映射。

**定理 E.4 (逆算子定理)** @219

设 $X,Y$ 是 Fréchet 空间，$T\in\mathfrak{B}(X,Y)$。若 $T$ 是一一到上的，则 $T^{-1}\in\mathfrak{B}(Y,X)$。

**定理 E.5 (闭图像定理)** @219

设 $X,Y$ 是两个 Fréchet 空间，$T$ 是 $\mathfrak{D}(T)\subset X$ 到 $Y$ 的闭线性算子，如果 $\mathfrak{D}(T)$ 是 $X$ 中的闭线性子空间，那么 $T$ 是连续的。

**定理 E.6 (共鸣定理)** @219

设 $X,Y$ 是 Fréchet 空间，$\{T_\lambda:\lambda\in\Gamma\}$ 是从 $X$ 到 $Y$ 的连续线性算子族。若对任意 $x\in X$，$\{T_\lambda x:\lambda\in\Gamma\}$ 是 $Y$ 中的有界集，那么 $\{T_\lambda:\lambda\in\Gamma\}$ 是等度连续的。

对于更一般拓扑线性空间上的基本定理，可参见 [4, 第二章]。

#### 局部凸空间上的线性泛函 @219

依旧记 $X^*$ 是局部凸空间 $X$ 上由所有连续线性泛函组成的对偶空间。

**推论 E.2 (连续泛函的延拓)** @219

设 $L$ 是局部凸空间 $(X,\{p_i\})$ 中的线性子空间，$f_0\in L^*$，则存在延拓 $f\in X^*$ 使得 $f|_L=f_0$。

**推论 E.3 (非零泛函的存在性)** @220

设 $(X,\{p_i\})$ 是 Hausdorff 局部凸空间，$x_0\neq 0$，则存在 $f\in X^*$ 使得 $f(x_0)\neq 0$。

局部凸空间上也有相近的凸集分离定理。

**定理 E.7** @220

设 $X$ 是 Hausdorff 的实局部凸空间，$A,B$ 是 $X$ 的不交非空凸子集。若 $A^\circ$ 是开集，则存在 $X$ 上的非零连续线性泛函 $f$ 使得

$$\sup_{x\in A}f(x)\leqslant \inf_{y\in B}f(y).$$

证明与赋范线性空间的情形类似，留作练习。“严格”分离的定理通常有以下两种形式：

**定理 E.8** @220

设 $X$ 是 Hausdorff 的实局部凸空间，$A,B$ 是 $X$ 中不交的非空开凸子集，则存在 $X$ 上的非零连续线性泛函 $f$ 及实数 $\alpha$ 使得

$$f(x)<\alpha<f(y),\quad \forall x\in A,\ y\in B.$$

**定理 E.9** @220

设 $X$ 是 Hausdorff 的实局部凸空间，$A,B$ 是 $X$ 中不交的非空凸子集。若 $A$ 是紧集而 $B$ 是闭集，则存在 $X$ 上的非零连续线性泛函严格分离 $A$ 和 $B$。

#### 习题（p222）

**习题 1** @222

设 $V$ 是一个拓扑线性空间，$U$ 是点 $0$ 的一个邻域。证明：

(i) $U$ 是吸收的。

(ii) 存在点 $0$ 的一个邻域 $W$，使得 $W+W\subset U$。

(iii) 存在点 $0$ 的一个邻域 $W$，使得 $W\subset U$，且 $W$ 是均衡的。

**习题 2** @222

设 $X$ 是局部凸空间。证明：$X$ 的拓扑可由一个范数诱导当且仅当 $X$ 中有一个有界的开集。

**习题 3** @222

例 E.4 的局部凸空间 $(E,\sigma(E,F))$ 何时可以度量化？

**习题 4** @222

设 $X,Y$ 是局部凸空间，线性映射 $T:X\to Y$ 将 $X$ 中的有界集映成有界集。若 $X$ 可度量化，证明 $T$ 是连续的。若 $X$ 不可度量化，情况又如何？

**习题 5** @222

证明定理 E.3。

**习题 6** @222

证明定理 E.4。

**习题 7** @222

证明定理 E.5。

**习题 8** @222

证明定理 E.6。

**习题 9** @222

设 $f$ 是局部凸空间 $X$ 上的线性泛函。证明：$f$ 连续当且仅当 $\ker f$ 是闭的。

**习题 10** @222

证明双极定理 E.10。

**习题 11** @222

证明 Krein-Mil'man 定理 E.11。

### F Lomonosov 不变子空间定理（p222–222）

本节给出 Lomonosov 不变子空间定理。它说明：无限维复 Banach 空间上的非零紧算子，必定存在非平凡的闭不变子空间，而且这个子空间对与该紧算子交换的所有有界线性算子都不变。

**定理 F.1 (Lomonosov 不变子空间定理)** @222

设 $X$ 是无限维的复 Banach 空间，$T$ 是非零的紧算子。那么，存在 $X$ 的一个非平凡闭子空间 $M$，对于每个与 $T$ 可交换的有界线性算子 $S$，都有 $S(M)\subset M$。

定理的证明思路是反证法：若不存在这样的非平凡闭子空间，则对任意 $x\neq 0$，由 $T$ 生成的交换子代数的轨道闭包 $\overline{A(x)}$ 必等于全空间 $X$，由此可以构造出一列被紧性压到某个不含零点的开集内的点，最终导出 $T$ 有非零特征值，其特征子空间即为所需的不变子空间。

### G C* 代数与正规算子谱理论（p223–234）

本节采用交换 $C^*$ 代数的理论证明正规算子谱理论。先引入交换 Banach 代数的极大理想空间，再引入 $C^*$ 代数，最后用 Gel'fand–Naimark 定理与函数演算给出正规算子的谱分解。

#### 交换 Banach 空间的极大理想空间 @223

先介绍交换代数中的概念与方法。

**定义 G.1 (可乘线性泛函)** @223

设 $\mathcal{A}$ 是 Banach 代数，$\varphi$ 是 $\mathcal{A}$ 上非零的线性泛函。如果

$$\varphi(xy)=\varphi(x)\varphi(y),\quad \forall x,y\in\mathcal{A},$$

则称 $\varphi$ 是 $\mathcal{A}$ 上的**可乘线性泛函**（同态）。

**定理 G.1 (可乘泛函自动连续)** @224

设 $\mathcal{A}$ 是有单位元 $e$ 的 Banach 代数，$\varphi$ 是 $\mathcal{A}$ 的可乘线性泛函。那么，对于任意 $x\in\mathcal{A}$，当 $\|x\|<1$ 时，有 $|\varphi(x)|<1$。从而 $\varphi$ 是有界的，且 $\|\varphi\|=1$。

**定义 G.2 (理想与极大理想)** @224

设 $J$ 是 Banach 代数 $\mathcal{A}$ 的子集。如果 $J$ 是 $\mathcal{A}$ 的子代数，并且对于任意 $x\in\mathcal{A}$，$y\in J$ 都有 $xy\in J$，就称 $J$ 是 $\mathcal{A}$ 的**理想**。

如果 $J\neq\mathcal{A}$，就称 $J$ 是 $\mathcal{A}$ 的**真理想**。如果 $J$ 是 $\mathcal{A}$ 的真理想，并且不包含在其他的真理想中，就称 $J$ 是**极大理想**。

**命题 G.1 (真理想的闭包)** @224

设 $\mathcal{A}$ 是具有单位元 $e$ 的 Banach 代数。如果 $J$ 是真理想，则 $J$ 的闭包 $\overline{J}$ 也是真理想。

由此性质可知，极大理想是自动闭的。

**定理 G.2 (极大理想的存在性)** @224

设 $\mathcal{A}$ 是具有单位元 $e$ 的 Banach 代数，则 $\mathcal{A}$ 的每个真理想 $J$ 都包含在一个极大理想中。

**定理 G.3 (极大理想与可乘泛函)** @224

设 $\mathcal{A}$ 是具有单位元 $e$ 的交换 Banach 代数，记 $M$ 是 $\mathcal{A}$ 上非零可乘线性泛函的全体。

（i）每个极大理想都是一个可乘线性泛函的核。

（ii）可乘线性泛函的核是极大理想。

（iii）$x\in\mathcal{A}$ 是可逆元的充要条件是对于每个 $\varphi\in M$，$\varphi(x)\neq 0$。

（iv）$x\in\mathcal{A}$ 是可逆元的充要条件是 $x$ 不包含在 $\mathcal{A}$ 的任何真理想中。

（v）$\lambda\in\sigma(x)$ 的充要条件是存在 $\varphi\in M$ 使得 $\varphi(x)=\lambda$。

因此 $M$ 也称为**极大理想空间**。注意到它是 $\mathcal{A}^*$ 闭单位球的子集，可以在 $M$ 上引入弱 $^*$ 拓扑，由 Banach–Alaoglu 定理，它是紧 Hausdorff 空间。

**例 G.1 (连续函数代数)** @225

设 $K$ 是紧 Hausdorff 拓扑空间，$C(K)$ 是 $K$ 上复值连续函数的全体。规定 $C(K)$ 上的范数 $\|f\|=\sup\limits_{x\in K}|f(x)|$。那么 $C(K)$ 是 Banach 代数，它的极大理想空间同胚于 $K$。

具体地，对每个 $x\in K$，$\varphi_x(f)=f(x)$ 是 $C(K)$ 上的可乘线性泛函，映射 $\Psi(x)=\varphi_x$ 是 $K$ 到极大理想空间 $M$ 的连续单射；再由 $K$ 的紧性，$\Psi$ 是同胚。

**例 G.2 (卷积代数)** @226

设 $\mathbb{Z}$ 是整数集，

$$l^1(\mathbb{Z})=\Big\{x=\{x_n:n\in\mathbb{Z}\}:\sum_{n\in\mathbb{Z}}|x_n|<\infty\Big\}.$$

在 $l^1(\mathbb{Z})$ 上定义乘法为卷积：对 $x=\{x_n\}$，$y=\{y_n\}$，

$$xy=\{z_n:n\in\mathbb{Z}\},\quad \text{其中}\ z_n=\sum_{k=-\infty}^{\infty}x_ky_{n-k}\ (\forall n\in\mathbb{Z}),$$

并令 $\|x\|=\sum\limits_{n\in\mathbb{Z}}|x_n|$，那么 $l^1(\mathbb{Z})$ 是交换的 Banach 代数。它的极大理想空间 $M$ 同胚于单位圆周 $\mathbb{T}$。

同胚由 $\varphi_z(x)=\sum\limits_{n=-\infty}^{\infty}x_nz^n$（$z\in\mathbb{T}$）给出，即 $\Psi:\mathbb{T}\to M$，$z\mapsto\varphi_z$。

**例 G.3 (圆盘代数)** @226

设 $\overline{\mathbb{D}}$ 是复平面上闭的单位圆盘，$\mathbb{T}$ 是单位圆周。令 $A(\mathbb{T})$ 是 $C(\mathbb{T})$ 中所有形如 $\sum\limits_{k=0}^{n}a_kz^k$ 的解析多项式生成的闭子空间，则 $A(\mathbb{T})$ 是一个 Banach 子代数，它的极大理想空间同胚于 $\overline{\mathbb{D}}$。

**定理 G.4 (Wiener)** @227

设 $f$ 是 $\mathbb{R}^n$ 上的函数，如果

$$f(x)=\sum_{m\in\mathbb{Z}^n}a_m\mathrm{e}^{\mathrm{i}m\cdot x},\quad \text{其中}\ \sum_{m\in\mathbb{Z}^n}|a_m|<\infty,$$

并且对于任意的 $x\in\mathbb{R}^n$，$f(x)\neq 0$。那么我们也可将 $\dfrac{1}{f(x)}$ 展开为级数

$$\frac{1}{f(x)}=\sum_{m\in\mathbb{Z}^n}b_m\mathrm{e}^{\mathrm{i}m\cdot x},\quad \text{其中}\ \sum_{m\in\mathbb{Z}^n}|b_m|<\infty.$$

**定义 G.3 (Gel'fand 变换)** @227

设 $M$ 是 Banach 代数 $\mathcal{A}$ 的可乘线性泛函全体。对于 $x\in\mathcal{A}$，定义 $M$ 上的函数

$$\hat{x}(\varphi)=\varphi(x),\quad \forall\varphi\in M.$$

称 $\hat{x}$ 为 $x$ 的 **Gel'fand 映射**，记为 $\Gamma(x)$。

**定理 G.5 (Gel'fand 变换的性质)** @227

设 $\mathcal{A}$ 是具有单位元的交换 Banach 代数。

（i）对于 $x\in\mathcal{A}$，$\hat{x}$ 的值域等于 $x$ 的谱集 $\sigma(x)$。因此，$x$ 在 $\mathcal{A}$ 中可逆的充要条件是 $\hat{x}$ 在 $C(M)$ 中可逆，并且

$$\|\hat{x}\|_\infty=r(x)\leqslant\|x\|.$$

（ii）$\Gamma$ 是 $\mathcal{A}$ 到 $C(M)$ 中的同态，它的值域是 $\Gamma(\mathcal{A})$，核 $\ker\Gamma$ 是 $\mathcal{A}$ 的**根理想** $\operatorname{rad}\mathcal{A}$（即 $\mathcal{A}$ 的所有极大理想的交）。也即，$x\in\operatorname{rad}\mathcal{A}$ 的充要条件是 $r(x)=0$。

从而，Gel'fand 映射 $\Gamma$ 是单的充要条件是 $\mathcal{A}$ 是半单的。

**定理 G.6 (等距的判定)** @228

设 $\mathcal{A}$ 是具有单位元的交换 Banach 代数，则 Gel'fand 映射是等距映射的充要条件是对任意的 $x\in\mathcal{A}$，$\|x^2\|=\|x\|^2$。

**定理 G.7 (谱映射定理)** @228

设 $\mathcal{A}$ 是具有单位元的 Banach 代数，$x\in\mathcal{A}$，$\varphi$ 在 $\{z\in\mathbb{C}:|z|\leqslant r(x)\}$ 的一个邻域解析，那么

$$\sigma(\varphi(x))=\varphi(\sigma(x)).$$

#### C* 代数与谱理论 @228

**定义 G.4 (对合)** @228

设 $\mathcal{A}$ 是代数，若映射 $*:\mathcal{A}\to\mathcal{A}$ 满足以下三个条件：

（i）$(\alpha x+\beta y)^*=\bar{\alpha}x^*+\bar{\beta}y^*$；

（ii）$(xy)^*=y^*x^*$；

（iii）$x^{**}=x$，

则称 $*$ 为 $\mathcal{A}$ 上的一个**对合**。

如果 $x^*=x$，就称 $x$ 是**自共轭元**。

**定理 G.8 (自共轭元的性质)** @228

设 $\mathcal{A}$ 是带对合的具有单位元的 Banach 代数，$x\in\mathcal{A}$，那么

（i）$x+x^*$，$\dfrac{x-x^*}{\mathrm{i}}$ 以及 $x^*x$，$xx^*$ 都是自共轭元。

（ii）$x$ 可以唯一地分解成 $x=u+\mathrm{i}v$，其中 $u=\dfrac{1}{2}(x+x^*)$，$v=\dfrac{1}{2\mathrm{i}}(x-x^*)$ 都是自共轭元。

（iii）由于单位元是唯一的，故单位元 $e$ 是自共轭元。

（iv）$x$ 可逆的充要条件是 $x^*$ 可逆，这时 $(x^*)^{-1}=(x^{-1})^*$。

（v）$\lambda\in\sigma(x)$ 的充要条件是 $\bar{\lambda}\in\sigma(x^*)$。

**定义 G.5 (C* 代数)** @229

设 $\mathcal{A}$ 是具有对合的 Banach 代数，并且

$$\|x^*x\|=\|x\|^2,\quad \forall x\in\mathcal{A},$$

就称 $\mathcal{A}$ 是 **$C^*$ 代数**。

**例 G.4 (函数代数)** @229

设 $K$ 是紧的 Hausdorff 空间，$C(K)$ 是 $K$ 上复值连续函数的全体。定义 $*$ 运算

$$*:f\mapsto\bar{f},$$

则 $C(K)$ 是具有单位元的 $C^*$ 代数。

如果 $K$ 是局部紧的、非紧的 Hausdorff 空间，$C_0(K)$ 是 $K$ 上在无穷远处为零的连续函数全体，则 $C_0(K)$ 是没有单位元的 $C^*$ 代数。

**例 G.5 (算子代数)** @229

设 $H$ 是 Hilbert 空间，定义 $\mathfrak{B}(H)$ 上 $*$ 运算

$$*:T\mapsto T^*,$$

则 $\mathfrak{B}(H)$ 是具有单位元的非交换 $C^*$ 代数。

$\mathfrak{B}(H)$ 的一个 $*$ 运算封闭的闭子代数也是一个 $C^*$ 代数。

**例 G.6 (正规算子生成的代数)** @229

设 $N$ 是 Hilbert 空间 $H$ 上的正规算子，那么

$$\Big\{p(N):p(z)=\sum_{n,m=0}^{k}a_{n,m}z^n\bar{z}^m,\ k\in\mathbb{N},\ a_{n,m}\in\mathbb{C}\Big\}$$

在 $\mathfrak{B}(H)$ 中的范数闭包是一个具有单位元的交换 $C^*$ 代数，它是包含 $N$ 的最小具有单位元的 $C^*$ 子代数。

**引理 G.1 (自共轭元的谱)** @229

设 $x$ 是具有单位元的 $C^*$ 代数 $\mathcal{A}$ 的自共轭元，那么 $x$ 的谱都是实数。

**定理 G.9 (Gel'fand–Naimark)** @229

设 $\mathcal{A}$ 是具有单位元的交换 $C^*$ 代数，$M$ 是它的极大理想空间，则 Gel'fand 映射 $\Gamma:\mathcal{A}\to C(M)$ 是等距同构，并且保持 $*$ 运算，即

$$\Gamma(x^*)=\overline{\Gamma(x)}\quad(\forall x\in\mathcal{A}).$$

特别地，$x$ 是自共轭的充要条件是 $\Gamma(x)$ 是实函数。

由这一定理，交换的 $C^*$ 代数等同于一个紧 Hausdorff 拓扑空间，因此可以把一般的 $C^*$ 代数看作一个「虚拟」拓扑空间上的连续函数空间，从而将拓扑空间及度量空间等理论「搬」进 $C^*$ 代数研究中，这就是非交换分析理论及非交换几何的基本出发点。

**定理 G.10 (抽象正规算子谱理论)** @230

设 $\mathcal{A}$ 是由元素 $x$ 生成的、交换的、具有单位元的 $C^*$ 代数。那么，$\sigma(x)$ 与 $M$ 同胚，由它以及 Gel'fand 逆映射定义的 $\Psi:C(\sigma(x))\to\mathcal{A}$ 是 $*$ 等距同构。它将 $\sigma(x)$ 上的恒等函数映成 $x$。

**注 (正规算子的函数演算)** @230

对于 Hilbert 空间 $H$ 上正规算子 $N$，令 $\mathcal{A}$ 为 $N$ 在 $\mathfrak{B}(H)$ 中生成的 $C^*$ 代数（见例 G.6），则 $\mathcal{A}$ 是一个具有单位元的 $C^*$ 代数。由定理 G.10，映射 $f\mapsto\Phi(f)$ 给出了 $C(\sigma(N))$ 到 $\mathcal{A}$ 的 $C^*$ 代数同态。$f(N)\stackrel{\mathrm{def}}{=}\Phi(f)$ 称为正规算子的**函数演算**。

函数演算也可由如下办法较为直接地定义：由于 $\Phi$ 是代数 $*$ 同态，并将恒等函数 $z$ 映为 $N$，故对于多项式 $p(z)=\sum\limits_{n,m=0}^{k}a_{n,m}z^n\bar{z}^m$ 有

$$p(N)=\Phi(p)=\sum_{n,m=0}^{k}a_{n,m}N^nN^{*m}.$$

而对一般的连续函数 $f$，取多项式序列 $p_n$ 一致收敛于 $f$，那么 $f(N)=\lim\limits_{n\to\infty}p_n(N)$。

**引理 G.2 (子代数的谱)** @230

设 $\mathcal{A}$ 是一个具有单位元的 $C^*$ 代数，$\mathcal{B}$ 是 $\mathcal{A}$ 中的包含单位元的 $C^*$ 子代数，则对于 $x\in\mathcal{B}$，$x$ 在 $\mathcal{B}$ 中的谱 $\sigma_{\mathcal{B}}(x)$ 等于 $x$ 在 $\mathcal{A}$ 中的谱 $\sigma_{\mathcal{A}}(x)$。

因此，对于 Hilbert 空间 $H$ 上正规算子 $N$，它作为 $H$ 上算子的谱 $\sigma_{\mathfrak{B}(H)}(N)$ 与它在由 $N$ 生成的 $C^*$ 子代数 $\mathcal{A}$ 中的谱 $\sigma_{\mathcal{A}}(N)$ 是一致的，无须区分这两个概念。

**定理 G.11 (正规算子的谱分解定理)** @231

设 $N$ 是 Hilbert 空间 $H$ 上的正规算子，$\mathcal{R}$ 是 $\sigma(N)$ 中的 Borel 子集全体，那么存在 $\mathcal{R}$ 上唯一的谱测度 $E$，使得

$$N=\int_{\sigma(N)}z\,\mathrm{d}E.$$

此时，由谱积分性质易知，对于任意多项式 $p(z)=\sum\limits_{n,m=0}^{k}a_{n,m}z^n\bar{z}^m$，有

$$p(N)=\int_{\sigma(N)}p\,\mathrm{d}E.$$

谱测度 $E$ 由 $E(S)=\chi_S(N)$（$S$ 为 Borel 集）给出，其中 $\chi_S$ 是 $S$ 的示性函数；由于 $\chi_S$ 是实值函数，$E(S)$ 是自伴的，又由函数演算的可乘性得 $E(S)^2=\chi_S^2(N)=\chi_S(N)=E(S)$，即 $E(S)$ 是投影算子。

#### 习题（p233–234）

**习题 1** @233

设 $\mathcal{A}=\left\{\begin{pmatrix}a&b\\0&a\end{pmatrix}:a,b\in\mathbb{C}\right\}$ 为 $M_2(\mathbb{C})$ 的 Banach 子代数，求 $\mathcal{A}$ 的非零可乘线性泛函。

**习题 2** @233

对于带单位元的 Banach 代数 $\mathcal{A}$，若 $\mathcal{A}$ 的极大理想空间能分离 $\mathcal{A}$ 中元素：若 $a\neq b$，则有可乘线性泛函 $\phi$ 使得 $\phi(a)\neq\phi(b)$。证明 $\mathcal{A}$ 是交换 Banach 代数。

**习题 3** @233

设 $C^{(1)}[0,1]=\{f\in C[0,1]:f\text{ 在 }[0,1]\text{ 上连续可导}\}$，其上范数定义为

$$\|f\|=\sup_{x\in[0,1]}(|f(x)|+|f'(x)|).$$

证明：$C^{(1)}[0,1]$ 依此范数构成 Banach 代数。并求 $C^{(1)}[0,1]$ 的极大理想空间。

**习题 4** @233

令 $\Omega=\{z\in\mathbb{C}:1\leqslant|z|\leqslant2\}$，设 $\mathcal{A}=\{f\in C(\Omega):f\text{ 在 }\Omega\text{ 内部解析}\}$，$\mathcal{A}$ 上范数取极大范数 $\|f\|=\sup_{x\in\Omega}|f(x)|$。令 $\mathcal{B}$ 为形如 $\sum_{k=0}^n a_kz^k$ 的解析多项式全体在 $\mathcal{A}$ 中的闭包。

(i) 证明：$\mathcal{A}$ 的极大理想空间 $M_{\mathcal{A}}$ 拓扑等价于 $\Omega$。

(ii) 证明：$\mathcal{B}$ 的极大理想空间 $M_{\mathcal{B}}$ 拓扑等价于 $\{z\in\mathbb{C}:|z|\leqslant2\}$。

(iii) 对于 $\Omega$ 上恒等函数 $f(z)=z$，求其在 $\mathcal{A}$ 中的谱 $\sigma_{\mathcal{A}}(f)$ 与在 $\mathcal{B}$ 中的谱 $\sigma_{\mathcal{B}}(f)$。

**习题 5** @233

下面来看 $L^1(\mathbb{R})$ 的极大理想空间和 Gel'fand 变换。

(i) 令 $\mathbb{R}$ 为赋予加法结构的实数群，$\mathbb{T}=\{z\in\mathbb{C}:|z|=1\}$ 为赋予乘法运算结构的酉群。若连续群同态 $h:\mathbb{R}\to\mathbb{T}$ 不是常值映射，证明：加法子群 $h^{(-1)}(\{1\})$ 为 $\mathbb{R}$ 的离散子集。并说明 $h^{(-1)}(\{1\})\setminus\{0\}$ 到点 $0$ 距离严格大于 $0$ 且是可达的。

(ii) 令 $\widehat{\mathbb{R}}=\{h:h\text{ 是从 }\mathbb{R}\text{ 到 }\mathbb{T}\text{ 的连续群同态}\}$。证明：$\widehat{\mathbb{R}}=\{h_t(x)=\mathrm{e}^{itx}:t\in\mathbb{R}\}$。并且证明 $\widehat{\mathbb{R}}$ 在乘法作用 $(h_1\times h_2)(x)=h_1(x)h_2(x)$ 下构成乘法群。

(iii) 任取一个 $h\in\widehat{\mathbb{R}}$。证明：

$$\phi(f)=\int_{\mathbb{R}}f(x)\overline{h(x)}\,\mathrm{d}m(x)$$

为 Banach 代数 $L^1(\mathbb{R})$ 上非零可乘线性泛函。

(iv) 设 $\phi:L^1(\mathbb{R})\to\mathbb{C}$ 是 $L^1(\mathbb{R})$ 上非零可乘线性泛函。证明：存在 $h\in L^\infty(\mathbb{R})$ 使得

$$\phi(f)=\int_{\mathbb{R}}f(x)\overline{h(x)}\,\mathrm{d}m(x),$$

且对几乎处处 $x,y\in\mathbb{R}$，有 $h(x+y)=h(x)h(y)$。

(v) 为说明 (iv) 中 $h$ 的连续性，对于 (iv) 中的 $\phi$，取定一个 $g\in L^1(\mathbb{R})$，$\phi(g)=1$。证明：$h(x)=\phi(g(\cdot-x))$ 对几乎处处 $x\in\mathbb{R}$ 成立。

(vi) 证明 (iv) 中 $h\in\widehat{\mathbb{R}}$。

(vii) 对于 $f\in L^1(\mathbb{R})$，定义 $L^1(\mathbb{R})$ 极大理想空间 $M_{L^1(\mathbb{R})}$ 函数 $\Gamma f$ 为

$$(\Gamma f)(\phi)=\phi(f),\qquad\forall\phi\in M_{L^1(\mathbb{R})}.$$

证明：$\Gamma f\in C(M_{L^1(\mathbb{R})})$。

**习题 6** @233

设 $\mathcal{A}$ 是带单位元的 Banach 代数。若 $x,y\in\mathcal{A}$，$xy=yx$，证明：

$$\sigma_{\mathcal{A}}(x+y)\subset\sigma_{\mathcal{A}}(x)+\sigma_{\mathcal{A}}(y),\qquad\sigma_{\mathcal{A}}(xy)\subset\sigma_{\mathcal{A}}(x)\sigma_{\mathcal{A}}(y).$$

**习题 7** @234

设 $\mathcal{A}$ 是一个带单位元的交换 Banach 代数，$\mathcal{B}$ 是一个半单的带单位元的交换 Banach 代数。证明：任一同态 $\varphi:\mathcal{A}\to\mathcal{B}$ 是连续的。

**习题 8** @234

设 $\mathcal{A}$ 是一个带单位元的 Banach 代数。若 $\mathcal{A}$ 中两个元素 $x,y$ 满足 $xy=yx,x^2=x,y^2=y,x\neq y$，证明：$\|x-y\|\geqslant1$。

**习题 9** @234

设 $H$ 是 Hilbert 空间，$\mathcal{A}$ 是 $\mathfrak{B}(H)$ 的一个 $C^*$ 子代数。证明：$\mathcal{B}=\{T\in\mathfrak{B}(H):TA=AT,\forall A\in\mathcal{A}\}$ 也是一个 $C^*$ 子代数。

**习题 10** @234

设 $\mathcal{A}$ 是一个带单位元 $e$ 的 $C^*$ 代数。若 $\mathcal{A}$ 中元素 $x$ 满足 $xx^*=x^*x=e$，则称 $x$ 是一个酉元。证明：$\mathcal{A}$ 中任何元素可表示为四个酉元的线性组合。

**习题 11** @234

若 $T$ 是自伴的，证明：存在正算子 $T_+$ 与 $T_-$ 使得 $T=T_+-T_-$，$|T|=T_++T_-$，$T_+T_-=0$。

**习题 12** @234

设 $N$ 是 Hilbert 空间 $H$ 上的正规算子，$E$ 是 $N$ 的谱测度（见定理 G.11）。若 $f\in C(\sigma(N))$，$S=f^{(-1)}(\{0\})$，证明：$E(S)$ 是从 $H$ 到子空间 $\ker f(N)$ 的正交投影。

**习题 13** @234

设 $N$ 是 Hilbert 空间 $H$ 上的紧正规算子。若 $f\in C(\sigma(N))$，$f(0)=0$。证明 $f(N)$ 也是紧的。
