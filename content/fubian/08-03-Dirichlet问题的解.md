---
chapter: 8
chapter_title: Dirichlet 问题
section: "8.3"
section_title: Dirichlet 问题的解
pages: "232–234"
---

那么，如果 $\varphi(\zeta)$ 在 $\partial\Omega$ 上连续，$\Omega$ 上关于 $\varphi(\zeta)$ 的 Perron 函数 $u(z)$ 是否就是以 $\varphi(\zeta)$ 为边值的 Dirichlet 问题的解呢？一般并非如此。事实上，对于一般区域，Dirichlet 问题未必有解。

### 例 (Dirichlet 问题未必有解) @232

对区域 $\Omega=\mathbb{D}\setminus\{0\}$，令 $\varphi(\zeta)=0$，$|\zeta|=1$；$\varphi(0)=1$。如果存在 $u(z)$ 在 $\Omega$ 上调并且
$$\lim_{|z|\to1}u(z)=0,\qquad \lim_{z\to0}u(z)=1.$$
则 $0$ 是 $u(z)$ 的可去奇点，令 $u(0)=1$ 得 $u(z)$ 在整个 $\mathbb{D}$ 上调和。但此时，$u(z)$ 在圆心的值大于在圆周 $|z|=1$ 上的值，与最大值原理矛盾。因此，这样的调和函数 $u(z)$ 是不存在的。

### 定义 (正则边界点) @232

设 $\zeta_0\in\partial\Omega$，如果对 $\partial\Omega$ 上任意在 $\zeta_0$ 处连续的有界实值函数 $\varphi(\zeta)$，关于 $\varphi(\zeta)$ 的 Perron 函数 $u(z)$ 满足
$$\lim_{z\to\zeta_0}u(z)=\varphi(\zeta_0),$$
则称 $\zeta_0$ 是 $\Omega$ 的一个正则边界点。如果 $\Omega$ 的每个边界点都是正则边界点，则称 $\Omega$ 为正则区域。此时，$\Omega$ 上的任意 Dirichlet 问题都可解，也称该区域为 Dirichlet 区域。为说明怎样的边界点为正则边界点，我们引入闸函数概念。

### 定义 (闸函数) @232

设 $\zeta_0$ 是有界区域 $\Omega$ 的一个边界点。如果对任意充分小的 $\delta>0$，存在 $\zeta_0$ 的邻域 $U_\delta\subset D(\zeta_0,\delta)$ 使得在 $\Omega\cap U_\delta$ 上存在调和函数 $b_\delta(z)$ 满足

(1) $0<b_\delta(z)<1$，

(2) $\lim_{z\to\zeta_0}b_\delta(z)=0$，

(3) $\lim_{z\to\zeta}b_\delta(z)=1$，$\forall\,\zeta\in\partial U_\delta\setminus\Omega$。

那么，称 $b_\delta(z)$ 是 $\Omega$ 在 $\zeta_0\in\partial\Omega$ 处的闸函数。

### 注 (闸函数的延拓) @233

类似于定理 8.3 的证明，如果 $b_\delta(z)$ 是 $\zeta_0\in\partial\Omega$ 处的闸函数，定义
$$\hat{b}_\delta(z)=\begin{cases}b_\delta(z), & z\in\Omega\cap U_\delta,\\ 1, & z\in\Omega\setminus U_\delta,\end{cases}\tag{8.6}$$
那么，$-\hat{b}_\delta(z)$ 是 $\Omega$ 上的次调和函数。

### 定理 8.5 @233

设区域 $\Omega$ 在其边界点 $\zeta_0$ 处有闸函数 $t_\delta(z)$，则 $\zeta_0$ 是 $\Omega$ 的正则边界点。

### 注 (充要条件) @234

事实上，上述条件是充要条件，即 $\zeta_0\in\Omega$ 是正则边界点，当且仅当 $\Omega$ 在 $\zeta_0$ 处有闸函数。下面考虑怎样的边界点有闸函数。

### 定理 8.6 @234

设 $\zeta_0$ 是区域 $\Omega\subset\mathbb{C}$ 的一个边界点，如果 $\mathbb{C}_\infty\setminus\Omega$ 的包含 $\zeta_0$ 的连通分支不是单点（即为联络），则 $\Omega$ 在 $\zeta_0$ 处有闸函数。
