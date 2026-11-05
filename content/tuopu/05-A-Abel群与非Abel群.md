---
chapter: 5
chapter_title: 附录
section: "A"
section_title: Abel 群与非 Abel 群
pages: "287–299"
---

## A.I 群的概念

### 定义 A.1 (群与交换群) @287

设在集合 $G$ 上定义了运算 $\varphi:G\times G\to G$，$\varphi(a,b)$ 记作 $ab$ 或 $a\cdot b$，如果满足：

（$\mathrm{G}_1$）对任意 $a,b,c\in G$，有 $(ab)c=a(bc)$；

（$\mathrm{G}_2$）存在 $e\in G$，使得对任意 $a\in G$，有 $ae=ea=a$，$e$ 称为**幺元**；

（$\mathrm{G}_3$）对任意 $a\in G$，存在 $b\in G$，使得 $ab=ba=e$，$b$ 称为 $a$ 的**逆元**，记作 $a^{-1}$，

则称 $(G,\cdot)$ 为**群**，简记为 $G$，"$\cdot$" 称为 $G$ 上的乘法，$n$ 个 $a$ 的积记为 $a^n$。若群的运算还满足

$$\forall a,b\in G,\ ab=ba,$$

则称 $G$ 为**交换群**或 **Abel 群**。这时运算相应改用加法记号"$+$"，幺元 $e$、逆元 $a^{-1}$ 相应地记作 $0$、$-a$。$n$ 个 $a$ 之和记作 $na$ 等等。

设 $A,B$ 为 $G$ 的子集，则 $A$ 与 $B$ 中元素乘积的全体记作

$$AB=\{ab\mid a\in A,\ b\in B\}.$$

若 $G$ 的子集 $A$ 关于 $G$ 的运算成群，则称 $A$ 为 $G$ 的**子群**，此时 $gA$、$Ag$ 分别称为 $g$ 关于 $A$ 的左、右**旁集**。设 $A$ 是 $G$ 的子群，若对任意 $g\in G$，有 $g^{-1}Ag\subset A$，则称 $A$ 为 $G$ 的**正规子群**，这时 $gA=Ag$。

显然，关于子群 $A$ 的不同旁集无公共元。Abel 群的任意子群均为正规子群。

仅含幺元的群称为**平凡群**，记为"$1$"或"$0$"。

### 例 (常见 Abel 群) @287

整数全体 $\mathbb{Z}$，有理数全体 $\mathbb{Q}$，实数全体 $\mathbb{R}$ 以及复数全体 $\mathbb{C}$ 关于普通加法构成 Abel 群；

$\mathbb{Q}\setminus\{0\}$，$\mathbb{R}\setminus\{0\}$，$\mathbb{C}\setminus\{0\}$ 关于普通乘法构成 Abel 群；

$\mathbb{Z}^n=\{(a_1,\cdots,a_n)\mid a_i\in\mathbb{Z}\}$ 关于向量加法构成 Abel 群。

### 例 (整数模 n 加群) @288

$\mathbb{Z}_n=\{0,1,\cdots,n-1\}$ 关于模 $n$ 的加法构成 Abel 群。即对任意 $a,b\in\mathbb{Z}_n$，设 $a+b=qn+d$，其中 $q,d\in\mathbb{Z}$，$0\leqslant d<n$，则定义

$$a+b=d,$$

称 $\mathbb{Z}_n$ 为**整数模 $n$ 加群**。

### 定义 A.2 (同态与同构) @288

设 $\varphi:G\to H$ 是群 $G$ 到群 $H$ 的映射，若对任意 $a,b\in G$，满足

$$\varphi(ab)=\varphi(a)\varphi(b),$$

则称 $\varphi$ 为 $G$ 到 $H$ 的**同态**。这时

$$\operatorname{Ker}\varphi=\varphi^{-1}(e)=\{a\in G\mid\varphi(a)=e\}$$

是 $G$ 的正规子群，称为 $\varphi$ 的**核**。而

$$\operatorname{Im}\varphi=\varphi(G)=\{\varphi(a)\mid a\in G\}$$

是 $H$ 的子群，称为 $\varphi$ 的**象**。特别地，

当 $\operatorname{Ker}\varphi=\{e\}$ 时，称 $\varphi$ 为**单同态**。单同态必为单射。

当 $\operatorname{Im}\varphi=H$ 时，称 $\varphi$ 为**满同态**。

当 $\varphi$ 为既单且满的同态时，称 $\varphi$ 为 $G$ 到 $H$ 的**同构**，记作 $\varphi:G\cong H$。这时称群 $G$ 与 $H$ 是同构的，记作 $G\cong H$。同构必是双射。

特别地，恒同映射 $1_G:G\to G$ 是 $G$ 到自身的同构，称为**恒同同构**。

$$\begin{array}{ccc}
G & \xrightarrow{\ \varphi\ } & H\\
& \searrow{\scriptstyle \psi\varphi} & \downarrow{\scriptstyle \psi}\\
& & K
\end{array}$$

设 $\varphi:G\to H$，$\psi:H\to K$ 是同态，则 $\psi\varphi:G\to K$ 也是同态。而当 $\psi\varphi$ 是单同态时，$\varphi$ 也是单同态；$\psi\varphi$ 是满同态时，$\psi$ 也是满同态。

特别地，当 $\psi\varphi:G\to K$ 是同构时，$\varphi$ 为单同态，$\psi$ 为满同态。

### 定义 A.3 (商群) @288

设 $N$ 是 $G$ 的正规子群，则 $N$ 的左旁集全体关于下述运算：

$$aN\cdot bN=abN,\quad a,b\in G$$

成群，称为 $G$ 的（模 $N$）**商群**，记作 $G/N$。特别地，当 $N=\{e\}$ 时，$G/N=G$。

定义映射

$$\pi:G\to G/N$$

为 $\pi(a)=aN$，则 $\pi$ 是同态，称为**自然射影**。

设 $\varphi:G_1\to G_2$ 是同态，$H_1,H_2$ 分别是群 $G_1,G_2$ 的正规子群，且 $\varphi(H_1)\subset H_2$。对 $a\in G$，定义

$$\varphi_*(aH_1)=\varphi(a)H_2,$$

则 $\varphi_*:G_1/H_1\to G_2/H_2$ 是同态，称为 $\varphi$ 所**诱导的商群** $G_1/H_1$ 到 $G_2/H_2$ 的同态。若 $\pi_i:G_i\to G_i/H_i\ (i=1,2)$ 为自然射影，则下列图表可交换：

$$\begin{array}{ccc}
G_1 & \xrightarrow{\ \varphi\ } & G_2\\
{\scriptstyle \pi_1}\downarrow & & \downarrow{\scriptstyle \pi_2}\\
G_1/H_1 & \xrightarrow{\ \varphi_*\ } & G_2/H_2
\end{array}$$

特别地有

### 定理 A.4 (第一同态定理) @289

设 $\varphi:G\to H$ 是满同态，则

$$H\cong G/\operatorname{Ker}\varphi.$$

### 定义 A.5 (元素的阶) @289

设 $a\in G$，使 $a^n=e$ 的最小正整数 $n$ 称为 $a$ 的**阶**，记作 $o(a)=n$；这样的正整数不存在，则称 $a$ 的阶为 $\infty$，记作 $o(a)=\infty$。

群 $G$ 的元素个数称为 $G$ 的**阶**，记作 $o(G)$。阶为有限的群称为**有限群**。

### 定理 A.6 (Lagrange 定理) @289

设 $G$ 为有限群，$H$ 为 $G$ 的子群，则 $o(H)$ 整除 $o(G)$，所得的商称为 $H$ 在 $G$ 中的**指数**。

### 定义 A.7 (生成子群) @290

群 $G$ 的元素 $g_1,\cdots,g_k$ 的所有整数幂的乘积构成 $G$ 的子群 $H$，称为由 $g_1,\cdots,g_k$ **生成的子群**，记作

$$H=[g_1,\cdots,g_k].$$

$\{g_1,\cdots,g_k\}$ 称为群 $H$ 的**母元组**。存在仅包含有限个元的母元组的群称为**有限生成群**。

特别地，$[g]$ 称为**循环群**。

Abel 群 $\mathbb{Z}$ 与 $\mathbb{Z}_n$ 是循环群。

由 Lagrange 定理，有限群 $G$ 的任意元素 $a$ 的阶 $o(a)=o([a])$ 是群 $G$ 的阶的一个因子。

## A.II Abel 群的直和与正合序列

本节中所有的群都假设为有限生成的 Abel 群。

### 定义 A.8 (直和) @290

设 $G$ 和 $H$ 是两个 Abel 群，在笛氏积 $G\times H=\{(a,b)\mid a\in G,b\in H\}$ 中定义加法"$+$"如下：

$$(a_1,b_1)+(a_2,b_2)=(a_1+a_2,\ b_1+b_2),\quad a_i\in G,\ b_i\in H,\ i=1,2,$$

则 $G\times H$ 关于"$+$"为群，称为 $G$ 与 $H$ 的**直和**，记作 $G\oplus H$。

$n$ 个 $G$ 的直和记作 $G^n$。

设 $H_1$ 和 $H_2$ 是群 $G$ 的子群，则 $K=\{a_1+a_2\mid a_1\in H_1,a_2\in H_2\}$ 也是 $G$ 的子群，称为 $H_1$ 与 $H_2$ 之**和**。如果 $K$ 中任意元素 $x$ 有唯一的表示法 $x=a_1+a_2$，$a_1\in H_1$，$a_2\in H_2$，则称 $K$ 为 $H_1$ 与 $H_2$ 的**内直和**，也记作 $H_1\oplus H_2$。

容易证明，$H_1$ 与 $H_2$ 之和是内直和的充要条件为：$H_1\cap H_2=\{0\}$。这时对应 $(a_1,a_2)\mapsto a_1+a_2$ 给出了 $H_1$ 与 $H_2$ 的直和到内直和的同构。

内直和也简称直和。

### 定义 A.9 (正合序列) @291

设有 Abel 群与同态的序列

$$\cdots\longrightarrow K\xrightarrow{\ \varphi\ }G\xrightarrow{\ \psi\ }H\longrightarrow\cdots,$$

如果满足

$$\operatorname{Im}\varphi=\operatorname{Ker}\psi,$$

则称上述序列**正合于** $G$。如果除了两端（若存在的话）外，序列正合于它的每一个群，则称序列为**正合的**。形如

$$0\longrightarrow K\xrightarrow{\ \varphi\ }G\xrightarrow{\ \psi\ }H\longrightarrow 0$$

的正合序列称为**短正合序列**。容易验证：

（1）$0\longrightarrow G\xrightarrow{\ \varphi\ }H$ 正合等价于 $\varphi$ 是单同态；$G\xrightarrow{\ \varphi\ }H\longrightarrow 0$ 正合等价于 $\varphi$ 是满同态；从而 $0\longrightarrow G\xrightarrow{\ \varphi\ }H\longrightarrow 0$ 正合等价于 $\varphi$ 是同构。

（2）对任意同态 $\varphi:G\to H$，都有短正合序列：

$$0\longrightarrow\operatorname{Ker}\varphi\xrightarrow{\ i\ }G\xrightarrow{\ \varphi'\ }\operatorname{Im}\varphi\longrightarrow 0,$$

其中 $i$ 是包含同态，$\varphi'$ 由 $\varphi$ 确定，即对任意 $a\in G$，$\varphi'(a)=\varphi(a)$。

（3）设 $K$ 是 $G$ 的子群，则有短正合序列

$$0\longrightarrow K\xrightarrow{\ i\ }G\xrightarrow{\ \pi\ }G/K\longrightarrow 0,$$

其中 $i$ 是包含同态，$\pi$ 是自然射影。反之，设有短正合序列

$$0\longrightarrow K\xrightarrow{\ \varphi\ }G\xrightarrow{\ \psi\ }H\longrightarrow 0,$$

则有

$$H\cong G/\operatorname{Im}\varphi.$$

### 定义 A.10 (基与自由 Abel 群) @291

设 $G$ 是有限生成的 Abel 群，$\{g_1,\cdots,g_n\}$ 是 $G$ 的一个母元组，如果它们**线性无关**，即由

$$\lambda_1g_1+\cdots+\lambda_ng_n=0,\quad \lambda_1,\cdots,\lambda_n\in\mathbb{Z}$$

可推得 $\lambda_1=\cdots=\lambda_n=0$，则称这母元组为 $G$ 的**基**，而称 $G$ 为 $n$ 维**自由 Abel 群**。$G$ 的维数为 $n$，记作 $n=\dim G$。这时有

$$G\cong\underbrace{\mathbb{Z}\oplus\cdots\oplus\mathbb{Z}}_{n\ \text{个}}.$$

容易证明维数是自由 Abel 群的完全不变量。对于自由 Abel 群 $G_1$ 和 $G_2$，易见

$$\dim(G_1\oplus G_2)=\dim G_1+\dim G_2.$$

为方便起见，平凡群也称为零维自由 Abel 群。

### 引理 A.11 (分裂引理) @292

设有短正合序列

$$0\longrightarrow K\xrightarrow{\ \varphi\ }G\xrightarrow{\ \psi\ }H\longrightarrow 0$$

$1^\circ$ 若存在同态 $\rho:H\to G$，使得 $\psi\rho=1_H$，则有

$$G\cong\operatorname{Im}\varphi\oplus\operatorname{Im}\rho\cong K\oplus H,$$

这时称 $\rho$ 为**分裂同态**，上述短正合序列称为**可分裂的**。

$2^\circ$ 若 $H$ 为自由 Abel 群，则分裂同态必存在。

### 定理 A.12 (子群仍自由) @293

设 $G$ 是 $n$ 维自由 Abel 群，$H$ 是 $G$ 的子群，则 $H$ 是自由 Abel 群，且 $\dim H\leqslant n$。

## A.III 有限生成的 Abel 群的基本定理

为了决定有限生成的 Abel 群的构造，需要下面两个引理：

### 引理 A.13 (整数矩阵引理) @293

设 $a_1,\cdots,a_n\ (n>1)$ 是不全为零的整数，它们的最大公因子为 $1$，则存在行列式为 $1$ 的 $n$ 阶整数矩阵 $A$，以 $a_1,\cdots,a_n$ 为第 $1$ 行。

### 引理 A.14 (母元组的替换) @294

设 $\{g_1,\cdots,g_n\}$ 为 Abel 群 $G$ 的母元组。$a_1,\cdots,a_n$ 为不全为零的整数，它们的最大公因子为 $1$。则可选取 $G$ 的另一组 $n$ 个元素的母元组，使它包含 $a_1g_1+\cdots+a_ng_n$。

### 推论 A.15 (无有限阶即自由) @294

设 $G$ 是有限生成的 Abel 群，$G$ 中除零元外没有有限阶元素，则 $G$ 是自由 Abel 群。

### 推论 A.16 (全为有限阶的分解) @295

设 $G$ 是有限生成的 Abel 群，$G$ 中元素都是有限阶的，则

$$G\cong\mathbb{Z}_{\theta_1}\oplus\cdots\oplus\mathbb{Z}_{\theta_\tau},$$

其中 $\theta_i\in\mathbb{Z}$，$\theta_i>1$ 且 $\theta_i\mid\theta_{i+1}$，$i=1,\cdots,\tau-1$（$\theta_i\mid\theta_{i+1}$ 表示 $\theta_i$ 整除 $\theta_{i+1}$）。

### 定义 A.17 (挠子群) @296

设 $G$ 为有限生成的 Abel 群，$G$ 中所有有限阶元素组成 $G$ 的子群，称为 $G$ 的**挠子群**。

### 引理 A.18 (挠子群的直和项) @296

设 $G$ 为有限生成的 Abel 群，$T$ 是 $G$ 的挠子群，则 $G/T$ 是自由 Abel 群，且

$$G\cong T\oplus G/T.$$

由上面诸推论和引理，立即可得下面重要定理的存在性部分之证明，唯一性部分之证明请参阅 [1]。

### 定理 A.19 (基本定理) @296

设 $G$ 是有限生成的 Abel 群，则有同构

$$G\cong\underbrace{\mathbb{Z}\oplus\cdots\oplus\mathbb{Z}}_{r\ \text{个}}\oplus\mathbb{Z}_{\theta_1}\oplus\cdots\oplus\mathbb{Z}_{\theta_\tau},$$

其中 $\tau\geqslant 0$；当 $\tau>0$ 时，$\theta_i\in\mathbb{Z}_+$，$\theta_i>1$，且 $\theta_i$ 整除 $\theta_{i+1}$。诸 $\theta_i$ 称为**挠系数**，$r$ 称为 $G$ 的**秩**，记作 $\operatorname{rank}G$。上述分解称为 $G$ 的**标准分解**。进一步，$r,\theta_1,\cdots,\theta_\tau$ 是群 $G$ 的不变量完全组，即 $G$ 的任意两个标准分解都有相同的秩和挠系数。

由秩的定义，自由 Abel 群的秩等于它的维数。

### 推论 A.20 (秩的可加性) @297

设存在有限生成的 Abel 群的短正合序列

$$0\longrightarrow K\xrightarrow{\ \varphi\ }G\xrightarrow{\ \psi\ }H\longrightarrow 0,$$

则有

$$\operatorname{rank}G=\operatorname{rank}K+\operatorname{rank}H.$$

### 推论 A.21 (秩的公式) @297

（1）设 $H$ 是 $G$ 的子群，则

$$\operatorname{rank}G=\operatorname{rank}H+\operatorname{rank}G/H;$$

（2）设 $G$ 和 $H$ 是群，则

$$\operatorname{rank}(G\oplus H)=\operatorname{rank}G+\operatorname{rank}H.$$

## A.IV 自由群与群的表示

### 定义 A.22 (字母与字) @297

设 $A$ 是一集合，$A\times\mathbb{Z}$ 的元素称为 $A$ 上的**字母**，$(a,n)$ 记作 $a^n$，字母的有限序列称为**字**。没有字母的空字记作 $1$。

集合 $A$ 上的字的全体关于下列运算构成带幺元 $1$ 的半群，称为**字半群**，记为 $W(A)$：

$$(a_1^{n_1}a_2^{n_2}\cdots a_p^{n_p})\cdot(b_1^{m_1}b_2^{m_2}\cdots b_q^{m_q})=a_1^{n_1}a_2^{n_2}\cdots a_p^{n_p}b_1^{m_1}b_2^{m_2}\cdots b_q^{m_q}.$$

设 $a\in A$，$w_1,w_2\in W(A)$，若

$$w=w_1a^0w_2,\quad u=w_1w_2,\quad t=w_1a^na^mw_2,\quad s=w_1a^{n+m}w_2,$$

则称 $u$ 为 $w$ 经 I 型**初等缩并**得到，$w$ 为由 $u$ 经 I 型**初等展开**得到；$s$ 为由 $t$ 经 II 型初等缩并得到，$t$ 为由 $s$ 经 II 型初等展开得到。

设 $w,u\in W(A)$，若 $w$ 可由 $u$ 经有限次 I 型或 II 型的初等展开或缩并得到，则称 $w$ 与 $u$ **等价**，记作 $w\sim u$。显然，对任意 $a\in A$，$a^0\sim 1$。

上述等价 $\sim$ 是一种等价关系，并且它与 $W(A)$ 上的乘法相容：即若 $w_1\sim w_2$，$w_3\sim w_4$，则有 $w_1w_3\sim w_2w_4$。

### 定义 A.23 (自由群) @298

设 $A$ 是一个集合，$w$ 是 $A$ 上的字，由上述等价关系 $\sim$ 决定的 $w$ 的等价类记作 $[w]$，其全体 $F[A]=\{[w]\mid w\in W(A)\}$ 按下述乘法构成群，称为集合 $A$ 上的**自由群**：

$$[w]\cdot[u]=[w\cdot u].$$

### 例 (空集上的自由群) @298

设 $A=\varnothing$，则 $W(A)=\{1\}$，$F[A]=\{[1]\}$ 是平凡群。

### 例 (单点集上的自由群) @298

设 $A=\{a\}$，则 $F(A)=\{[a]^n\mid n\in\mathbb{Z}\}\cong\mathbb{Z}$ 是无限循环群。

设 $A$ 是一个集合，则 $\{[a]\mid a\in A\}$ 是 $F[A]$ 的母元组，以下就以 $a$ 表示等价类 $[a]$。

### 命题 A.24 (自由群的满同态) @298

设 $G$ 是一个群，$A$ 是 $G$ 的母元组，则存在满同态

$$\varphi:F[A]\to G.$$

由同态定理得 $G\cong F[A]/\operatorname{Ker}\varphi$。即任何群均同构于自由群的商群。$F[A]$ 和 $\operatorname{Ker}\varphi$ 完全决定了 $G$。设 $R\subset F[A]$，以 $\langle R\rangle$ 记 $F[A]$ 的包含 $R$ 的最小正规子群，$\{A;R\}$ 记商群 $F[A]/\langle R\rangle$。

### 定义 A.25 (群的表示) @299

设 $G,A,\varphi,R$ 如前。当 $\langle R\rangle=\operatorname{Ker}\varphi$ 时，$\{A;R\}\cong G$，称为 $G$ 的一个**表示**，$A$ 称为 $G$ 的**母元组**，$R$ 称为**关系组**，$r\in R$ 称为**关系**，$q\in\langle R\rangle$ 称为 $R$ 的**推论**。

$R\subset\operatorname{Ker}\varphi$ 是 $G$ 的关系组的充要条件为：对任意 $q\in\operatorname{Ker}\varphi$，$q$ 可表示为有限个形如 $g_ir_ig_i^{-1}$ 的元素的积，$g_i\in F[A]$，$r_i\in R$，即消去有限个 $r_i\in R$ 后成为 $F[A]$ 的幺元。我们也称 $q$ 由诸 $r_i$ 导出。

$$\begin{array}{ccc}
& F[A] &\\
& {\scriptstyle \pi}\downarrow\ \searrow{\scriptstyle \varphi} &\\
& F[A]/\operatorname{Ker}\varphi & \xrightarrow{\ \varphi_*\ } G
\end{array}$$

以 $\pi:F[A]\to F[A]/\operatorname{Ker}\varphi$ 记自然射影。对任意 $g\in F[A]$，仍以 $g$ 记 $\pi(g)$，则对 $r\in\operatorname{Ker}\varphi$，有 $r=1$。因此为方便起见，将关系组表示为 $R=\{r=1\}$。

对任意群 $G$，$G$ 是母元组，设 $\varphi:F[G]\to G$ 定义如前。令 $R=\{r=1\mid r\in\operatorname{Ker}\varphi\}$，则 $\{G;R\}$ 是 $G$ 的一个表示。群的表示不是唯一的。

设 $G$ 是一个群，若存在母元组 $A$，使得 $G\cong F[A]$，则称 $G$ 为**自由群**。

### 例 (自由群与循环群表示) @299

$\{A;\varnothing\}$ 是 $A$ 上的自由群。特别地 $\{x;\varnothing\}$ 是 $\mathbb{Z}$ 的表示；$\{x,y;x=1\}$ 也是 $\mathbb{Z}$ 的表示。

### 例 (整数模 n 群的表示) @299

$\{x;x^n=1\}$ 是 $\mathbb{Z}_n$ 的表示。

### 例 (自由 Abel 群的表示) @299

$\{x,y;xyx^{-1}y^{-1}=1\}$ 是两个母元的自由 Abel 群的表示，它不是自由群。
