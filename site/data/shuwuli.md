# 数学物理方程

作者：雷震、王志强、华波波、曲鹏、黄耿耿

源文件：数学物理方程 (雷震 王志强 华波波 曲鹏 黄耿耿).pdf

> 175 页，5 章。扫描版，PDF 页 = 印刷页 + 15；章末习题与书后答案未收。第一章原书未分节，站点用 1.1 引言。

> 本文件由数学命题索引自动生成，包含正文陈述与已录入习题；习题可能尚未完全录入。

## 第1章 引言

### 1.1 引言（p2–6）

**定义 (偏微分方程)** @2

数学物理方程主要是指从物理学及其他各门自然科学中所产生的偏微分方程（有时也包括与此相关的积分方程、积分微分方程等），它们反映了未知函数及其偏导数（通常是关于时间和空间变量）的关系。

含有未知函数偏导数的方程称为**偏微分方程** (partial differential equation)。

设 $k$ 为正整数，$\Omega$ 为 $\mathbb{R}^n$ 中的连通区域，$u:\Omega\to\mathbb{R}$ 为未知函数，则 $\Omega$ 上的 $k$ 阶偏微分方程的一般表达式为$$F(D^k u,\cdots,u,x)=0,\quad x\in\Omega,$$这里 $F:\mathbb{R}^{n^k}\times\cdots\times\mathbb{R}\times\Omega\to\mathbb{R}$ 为给定的光滑函数，$D^k u$ 为 $u$ 的 $k$ 阶偏导数。

**定义 (线性偏微分方程)** @2

当 $F$ 关于 $D^k u,\cdots,Du,u$ 均线性时，方程$$\sum_{|\alpha|\le k}a_\alpha(x)D^\alpha u=f(x),\quad x\in\Omega$$称为 $k$ 阶**线性偏微分方程**，这里 $\alpha=(\alpha_1,\alpha_2,\cdots,\alpha_n)$，$|\alpha|=\alpha_1+\alpha_2+\cdots+\alpha_n$，$$D^\alpha u=\frac{\partial^{\alpha_1+\alpha_2+\cdots+\alpha_n}}{\partial x_1^{\alpha_1}\,\partial x_2^{\alpha_2}\cdots\partial x_n^{\alpha_n}}u.$$

**例 (线性偏微分方程与方程组)** @2

- 调和 (Laplace (拉普拉斯)) 方程$$\Delta u\equiv\sum_{i=1}^{n}\frac{\partial^2 u}{\partial x_i^2}=0,$$其中 $\Delta$ 称为 Laplace 算子。- Poisson (泊松) 方程$$-\Delta u=f.$$- 热方程$$\partial_t u-\Delta u=0.$$- 反应扩散方程$$\partial_t u-\Delta u=f.$$- 波方程$$\partial_t^2 u-\Delta u=f.$$- 弹性力学方程组$$\partial_t^2\boldsymbol{u}-\mu\Delta\boldsymbol{u}-(\lambda+\mu)\nabla\operatorname{div}\boldsymbol{u}=\boldsymbol{f}.$$- Schrödinger (薛定谔) 方程$$\mathrm{i}\partial_t u+\Delta u=0.$$- Maxwell (麦克斯韦) 方程组$$\begin{cases}\partial_t\boldsymbol{E}=\operatorname{curl}\boldsymbol{B},\\\partial_t\boldsymbol{B}=-\operatorname{curl}\boldsymbol{E},\\\operatorname{div}\boldsymbol{E}=\operatorname{div}\boldsymbol{B}=0.\end{cases}$$- Cauchy-Riemann (柯西-黎曼) 方程组$$\begin{cases}\partial_x u=\partial_y v,\\\partial_y u=-\partial_x v.\end{cases}$$

**定义 (半线性偏微分方程)** @3

若 $F$ 关于 $u$ 的最高阶导数项是线性的，非线性只出现在函数 $u$ 及其低阶导数项里，则称这类方程为**半线性偏微分方程**。

**例 (半线性偏微分方程)** @3

- Navier-Stokes (纳维-斯托克斯) 方程组 ($\mu>0$)$$\begin{cases}\partial_t\boldsymbol{u}+(\boldsymbol{u}\cdot\nabla)\boldsymbol{u}-\mu\Delta\boldsymbol{u}=-\nabla p,\\\operatorname{div}\boldsymbol{u}=0.\end{cases}$$- Korteweg-de Vries (KdV) (科尔泰沃赫-德弗里斯) 方程$$\partial_t u+u\partial_x u+\partial_x^3 u=0.$$- Black-Scholes (布莱克-斯科尔斯) 方程$$\partial_t V+\frac{1}{2}\sigma^2 S^2\partial_S^2 V+rS\partial_S V-rV=0.$$

**定义 (拟线性偏微分方程)** @3

若最高阶导数的系数仅依赖于函数 $u$ 及其低阶导数项，则称这类方程为**拟线性偏微分方程**。

**例 (拟线性偏微分方程)** @3

- 守恒律方程组$$\partial_t\boldsymbol{u}+\operatorname{div}\boldsymbol{F}(\boldsymbol{u})=0.$$- 极小曲面方程$$\operatorname{div}\left(\frac{D u}{(1+|Du|^2)^{\frac{1}{2}}}\right)=0.$$- Einstein (爱因斯坦) 场方程$$G_{\mu\nu}+\Lambda g_{\mu\nu}=\frac{8\pi G}{c^4}T_{\mu\nu}.$$- Yang-Mills (杨-米尔斯) 方程$$\partial^\mu F^a_{\mu\nu}+gf^{abc}A^{b\mu}F^c_{\mu\nu}=0.$$

**定义 (完全非线性偏微分方程)** @4

若 $F$ 关于 $u$ 的最高阶导数项也是非线性的，则称这类方程为**完全非线性偏微分方程**。

**例 (完全非线性偏微分方程)** @4

- Hamilton-Jacobi (哈密顿-雅可比) 方程$$\partial_t u+H(Du,x)=0.$$- Monge-Ampère (蒙日-安培) 方程$$\det D^2 u=f.$$

**注 (偏微分方程的来源)** @4

偏微分方程的来源非常广泛，其中最重要的来源是物理、力学（如弹性力学、流体力学、电动力学、量子力学等）等学科，以及来自数学学科的其他分支（如复变函数、微分几何、控制理论等）。偏微分方程已成为连接纯粹数学与各门自然科学及工程技术等领域的一个重要桥梁，是数学应用的一个重要工具。

**注 (偏微分方程研究的主要内容)** @4

一般来说，偏微分方程研究的主要内容是求偏微分方程的解和解的性质。

**定义 (经典解)** @4

对于一个偏微分方程来说，如果一个函数具有方程中所需要的各阶连续偏导数，且将其代入方程时恒成立，则称此函数为该偏微分方程的**经典解**，在本书中也简称为**解**。

除了经典解，人们还针对不同的偏微分方程拓展了解的范围，引入了**弱解**、**广义解**等概念，这使得数学理论更为完备，还可以解释经典解无法解释的现象（如激波现象）。

**定义 (定解问题与适定性)** @4

满足偏微分方程的解是不唯一的，为了确定一个偏微分方程的解，还需要给出一些**定解条件**。偏微分方程与定解条件一起组成**定解问题**。

要求偏微分方程定解问题的解并研究解的性质，首要的问题是：定解问题的提法是否合适？具体包括：

- **存在性问题**：这个定解问题的解是否一定存在？在什么函数空间中存在？- **唯一性问题**：这个定解问题的解如果存在，是否唯一？- **稳定性问题**（或称为对定解条件中出现的函数或者方程的参数或函数的连续依赖性）：当定解条件中出现的函数或方程的参数或函数作微小的变化时，问题的解是否也作很小的变化？

定解问题的存在性、唯一性和稳定性统称为定解问题的**适定性**。

**注 (解的性质)** @4

得到了解的适定性以后，人们往往还会进一步研究偏微分方程（定解问题）解的性质，例如：解有多么光滑，这就是解的**正则性**；由解定义的某种"物理量"是否会在有限时间内趋向于无穷，这就是解的**爆破**；解是否随着时间趋于无穷而衰减到 $0$ 或是趋向于某个平衡态，这就是解的**渐近性态**等。

**定义 (反问题)** @5

由于科学研究的自然逻辑演化，同时受到很多实际问题的驱动，人们一旦得到了数学物理方程解的适定性（可称为**正问题**）以后，还会继续研究相应的**反问题**。所谓反问题，一般是指根据事物的演化结果，由可观测的现象来探求事物的内部规律，例如**参数辨识**；也可指根据事物发展的需要或者目标，寻求系统参数所满足的条件，例如**控制问题**等。

**注 (数值解法)** @5

除了研究数学物理方程的正问题及反问题相关的数学理论，根据实际应用的需要，人们还研究数学物理方程的**数值解法**及计算方法。以上这些内容是数学物理方程，乃至一般的偏微分方程的基本研究对象。

**注 (研究偏微分方程的三点要领)** @5

李大潜提出，开展偏微分方程研究，要把握三点要领：1) 重视物理模型的驱动；2) 重视常微分方程的驱动；3) 重视科学计算的驱动。

**注 (本书的主要内容)** @5

本书的主要内容为三类典型的数学物理方程（调和方程、热方程、波方程）的物理来源，定解问题的提法与适定性理论，以及相应的（经典）解的性质，并介绍这些偏微分方程理论的一些现代应用。其中，将重点介绍研究偏微分方程的一些重要的思想和方法，如极值原理、Green (格林) 函数法、分离变量法、Fourier (傅里叶) 变换法、能量积分法等。

选择这三个二阶偏微分方程，是因为调和方程、热方程和波方程反映了三类不同的物理现象，最具典型意义，处理方法上也最具代表性。

**定义 (二阶线性偏微分方程)** @5

二阶线性偏微分方程的一般形式为$$\sum_{i,j=1}^{n}a_{ij}\partial_{x_i x_j}u+\sum_{k=1}^{n}b_k\partial_{x_k}u+cu=f,\quad x\in\Omega,$$其中 $a_{ij},b_k,c,f$ 是区域 $\Omega\subset\mathbb{R}^n$ 上适当光滑的函数，且满足 $a_{ij}=a_{ji}$。

对某点 $x_0\in\Omega$，作关于 $\lambda\in\mathbb{R}^n$ 的二次型$$A(\lambda)=\sum_{i,j=1}^{n}a_{ij}(x_0)\lambda_i\lambda_j.$$

**定义 (椭圆型)** @5

若 $A(\lambda)$ 在 $x_0$ 点为正定或负定的，则称该二阶偏微分方程在 $x_0$ 点为**椭圆型**的。

**定义 (抛物型)** @5

若 $A(\lambda)$ 在 $x_0$ 点为退化的（即矩阵 $(a_{ij}(x_0))$ 至少有一个零特征值），则称该二阶方程在 $x_0$ 点为**抛物型**的。

**注 (抛物型定义中的附加限制)** @6

二次型 $A(\lambda)$ 退化的情形很复杂，因此定义抛物型方程时，往往对方程系数再加上一些其他限制，以使其与具有 $n$ 个自变量的热方程有许多相似的性质。

**定义 (双曲型)** @6

若 $A(\lambda)$ 在 $x_0$ 点非退化，也不为正定或负定的，且矩阵 $(a_{ij}(x_0))$ 有 $n-1$ 个同号的特征值，则称该二阶方程在 $x_0$ 点为**双曲型**的。

**定义 (椭圆型、抛物型与双曲型方程)** @6

若该二阶方程在区域 $\Omega$ 中每点处都是椭圆型（或抛物型，或双曲型）的，则称该方程是**椭圆型**（或**抛物型**，或**双曲型**）方程。

**命题 (三类典型方程的类型)** @6

调和方程是典型的椭圆型方程，热方程是典型的抛物型方程，波方程是典型的双曲型方程。这三类数学物理方程分别描述了三种不同的物理现象，因此在定解问题的提法、解的性质及研究方法方面，三者之间有许多本质的差异。同时，这三个数学物理方程又分别反映了各自类型的偏微分方程所具有的一些共性特征，可以作为相应类型偏微分方程的典型代表。

## 第2章 调和方程

### 2.1 方程的物理背景和定解问题（p8–13）

本节主要通过静电场和定常位势流两个物理模型推导出调和方程和 Poisson 方程，并给出相应的定解问题。然后，我们说明利用变分原理也可以得到调和方程。

#### 2.1.1 静电场和定常位势流 @8

首先介绍物理学中的两个例子。为简单起见，我们假定所涉及的函数均光滑且平方可积。

**例 2.1.1 (静电场的电位势)** @8

在单连通区域 $\Omega\subset\mathbb{R}^{3}$ 内考察电荷密度为 $\rho(x_{1},x_{2},x_{3})$ 的静电场。设 $\boldsymbol{E}$ 为电场强度矢量，则由 Gauss（高斯）定律和 Coulomb（库仑）定律可得$$\operatorname{curl}\boldsymbol{E}=0,\qquad \operatorname{div}\boldsymbol{E}=\rho. \tag{2.1}$$

(2.1) 中第一个方程表明 $\boldsymbol{E}$ 是无旋场。由场论知识可知，$\boldsymbol{E}$ 为有势场，即存在静电位势 $u=u(x_{1},x_{2},x_{3})$ 使得$$\boldsymbol{E}=-\nabla u.$$

将上式代入 (2.1) 的第二个式子，我们得到静电位势 $u$ 满足方程$$-\Delta u=\rho, \tag{2.2}$$其中 $\Delta=\sum_{i=1}^{n}\frac{\partial^{2}}{\partial x_{i}^{2}}$ 称为 **Laplace 算子**，$n=3$。特别地，若在 $\Omega$ 内没有电荷存在，则在 $\Omega$ 内静电位势 $u$ 满足方程$$\Delta u=0. \tag{2.3}$$

**例 2.1.2 (定常位势流)** @9

设单连通区域 $\Omega\subset\mathbb{R}^{3}$ 内流体的速度场 $\boldsymbol{v}=\boldsymbol{v}(x_{1},x_{2},x_{3})$ 只依赖于空间位置 $(x_{1},x_{2},x_{3})$ 而不随时间变化。若流体是位势流，则存在势函数 $\varphi$ 使得$$\boldsymbol{v}=-\nabla\varphi.$$

进一步地，若流体是不可压缩的，即$$\operatorname{div}\boldsymbol{v}=0,$$则位势 $\varphi$ 满足如下的方程$$\Delta\varphi=0. \tag{2.4}$$

#### 2.1.2 调和方程和 Poisson 方程 @9

一般地，在考察区域 $\Omega\subset\mathbb{R}^{n}$ 上，我们把形如 (2.3) 和 (2.4) 的偏微分方程$$\Delta u\equiv\sum_{i=1}^{n}\frac{\partial^{2}u}{\partial x_{i}^{2}}=0 \tag{2.5}$$称为**调和方程**；把形如 (2.2) 的偏微分方程$$-\Delta u\equiv-\sum_{i=1}^{n}\frac{\partial^{2}u}{\partial x_{i}^{2}}=f(x) \tag{2.6}$$称为 **Poisson 方程**。我们可以把调和方程看成 Poisson 方程的特例，即齐次 Poisson 方程。

**定义 2.1.1** @9

若在考察区域 $\Omega\subset\mathbb{R}^{n}$ 内，$u\in C^{2}$ 且满足调和方程 (2.5)，则称 $u(x)$ 为**调和函数**。

显然，调和函数不是唯一的。例如，线性函数 $u(x)=a\cdot x+b$（$a\in\mathbb{R}^{n}$，$b\in\mathbb{R}$ 为常数）都是调和函数。

#### 2.1.3 边值问题 @9

我们知道，对给定的二阶常微分方程，需要给定区间两个端点（即区间的边界）的值才能确定方程的解。类似地，在区域 $\Omega\subset\mathbb{R}^{n}$（$n\geqslant 2$）上确定方程 (2.5) 和 (2.6) 的解，我们也在区域边界 $\partial\Omega$ 上给定**边界条件**。给定了边界条件的方程 (2.5) 和 (2.6) 的定解问题称为**边值问题**。本章主要讨论三类边值问题，分别称为第一边值问题、第二边值问题和第三边值问题。在本章的讨论中，如无特殊说明，$\Omega$ 总是 $\mathbb{R}^{n}$ 中足够光滑的有界区域。

**定义 (第一边值问题)** @10

Poisson 方程的第一边值问题是指求解 $u\in C^{2}(\Omega)\cap C(\overline{\Omega})$，使其满足下述方程：$$\begin{cases}-\Delta u=f(x), & x\in\Omega,\\u=g(x), & x\in\partial\Omega,\end{cases} \tag{2.7}$$其中 $\partial\Omega$ 为光滑闭曲面，$f\in C(\overline{\Omega})$，$g\in C(\partial\Omega)$。第一边值问题也称为 **Dirichlet 问题**。

**定义 (第二边值问题)** @10

Poisson 方程的第二边值问题是指求解 $u\in C^{2}(\Omega)\cap C^{1}(\overline{\Omega})$，使其满足下述方程：$$\begin{cases}-\Delta u=f(x), & x\in\Omega,\\\dfrac{\partial u}{\partial\boldsymbol{n}}=g(x), & x\in\partial\Omega,\end{cases} \tag{2.8}$$其中 $\boldsymbol{n}$ 表示边界 $\partial\Omega$ 的单位外法向量。这里 $g(x)$ 在静电场模型中表示电场沿着曲面 $\partial\Omega$ 向外穿出的强度。而在定常流模型中，$g$ 表示流体沿曲面 $\partial\Omega$ 流出的外法向速度。第二边值问题也称为 **Neumann 问题**。

**定义 (第三边值问题)** @10

Poisson 方程的第三边值问题是指求解 $u\in C^{2}(\Omega)\cap C^{1}(\overline{\Omega})$，使其满足下述方程：$$\begin{cases}-\Delta u=f(x), & x\in\Omega,\\\dfrac{\partial u}{\partial\boldsymbol{n}}+\sigma u=g(x), & x\in\partial\Omega,\end{cases} \tag{2.9}$$其中 $\sigma$ 为给定的正常数。第三边值问题也称为 **Robin（罗宾）问题**。

**注 2.1.1** @10

方程 (2.9) 中的 $\sigma>0$ 是必须的，否则 (2.9) 不一定适定。例如，$0,x_{1},x_{2},\cdots,x_{n}$ 均满足方程$$\begin{cases}-\Delta u=0, & x\in B_{1},\\\dfrac{\partial u}{\partial\boldsymbol{n}}-u=0, & x\in\partial B_{1}.\end{cases}$$

上述三类边值问题是有界区域上的边值问题。在实际应用中，还会经常遇到无界区域上的边值问题。例如，实心带电物体在其外部产生的电势，在礁石外的河流定常流动问题等。此时，类似有界区域的方式来定义的边值问题一般是不适定的。例如，考虑下述最简单的 Dirichlet 问题：

**例 (无界区域上 Dirichlet 问题解的不唯一)** @10

在$$\begin{cases}\Delta u(x)=0, & x\in H,\\u=0, & x\in\partial H\end{cases} \tag{2.10}$$中，先取 $H=\mathbb{R}^{n}\setminus B_{1}$。这里及以后，我们用 $B_{R}(x)$ 表示球心在 $x$、半径为 $R$ 的球。特别地，当球心为原点时，简记为 $B_{R}$。

显然，$u\equiv 0$ 是方程 (2.10) 的一个解。当 $n=2$ 时，$u(x)=\ln|x|$ 也是 (2.10) 的解且满足 $u(x)\to+\infty$ 当 $|x|\to+\infty$。当 $n=3$ 时，$u(x)=1-\frac{1}{|x|}$ 也是 (2.10) 的解且满足 $u(x)\to 1$ 当 $|x|\to+\infty$，这是一个有界解。若取 $H=\{x\in\mathbb{R}^{n}:x_{n}>0\}$，则 $u=0$ 仍是方程 (2.10) 的一个解，而 $u(x)=x_{n}$ 是 (2.10) 的一个无界解。

从上面的例子可以看到，无界区域上的边值问题我们还需要解在无穷远的条件，才能保证定解问题解的唯一性。无界区域上的边值问题的适定性比较复杂，下面仅针对无界区域 $\overline{\Omega}^{c}=\mathbb{R}^{n}\setminus\overline{\Omega}$ 上 Poisson 方程给出第一、第二类边值问题的提法。

**定义 (Dirichlet 外问题)** @11

Dirichlet 外问题是指求解 $u\in C^{2}(\overline{\Omega}^{c})\cap C(\Omega^{c})$，使其满足下述方程：$$\begin{cases}-\Delta u=f(x), & x\in\overline{\Omega}^{c},\\u=g(x), & x\in\partial\Omega,\\\lim\limits_{|x|\to+\infty}u(x)=0, & n\geqslant 3,\end{cases} \tag{2.11}$$其中 $\partial\Omega$ 为光滑闭曲面，$f\in C(\overline{\Omega}^{c})$，$g\in C(\partial\Omega)$。若上述问题定义在 2 维空间中，我们将条件 $\lim\limits_{|x|\to+\infty}u(x)=0$ 替换为$$\sup_{\Omega^{c}}|u|<+\infty. \tag{2.12}$$

**定义 (Neumann 外问题)** @11

Neumann 外问题是指求解 $u\in C^{2}(\overline{\Omega}^{c})\cap C^{1}(\Omega^{c})$，使其满足下述方程：$$\begin{cases}-\Delta u=f(x), & x\in\overline{\Omega}^{c},\\\dfrac{\partial u}{\partial\boldsymbol{n}}=g(x), & x\in\partial\Omega,\\\lim\limits_{|x|\to+\infty}u(x)=0, & n\geqslant 3,\end{cases} \tag{2.13}$$其中 $\boldsymbol{n}$ 表示边界 $\partial\Omega$ 的单位外法向量，$f\in C(\overline{\Omega}^{c})$，$g\in C(\partial\Omega)$。上述问题定义在 2 维空间中，则仍只要求 $u$ 为 $\Omega^{c}$ 上的有界函数，即 (2.12) 成立。

#### 2.1.4 变分原理 @11

在物理和力学中有几个关于能量极大或极小的定律，它们与描述质量、动量等物理量为守恒或平衡的其他物理定律具有同样的重要性。能量往往可以用积分表示。这种积分表达式的极值问题称为**变分问题**。某些物理问题的变分问题也会导出调和方程或 Poisson 方程的定解问题。

我们考察积分$$E(u)=\frac{1}{2}\int_{\Omega}|\nabla u|^{2}\,\mathrm{d}x, \tag{2.14}$$其中 $\Omega$ 为 $\mathbb{R}^{n}$ 中的有界光滑区域。上述积分在物理学中可表示势能，例如当 $u$ 表示弹性体的位移时，$E(u)$ 表示弹性体占据区域 $\Omega$ 的弹性势能。根据物理学的一般定律（最小作用原理，principle of least action），系统总是倾向于向能量最低的状态发展，这种状态称为**基态**。

现在我们固定边界状态，考虑上述系统所有的状态$$U=\{u\in C^{2}(\Omega)\cap C^{1}(\overline{\Omega}):\quad u|_{\partial\Omega}=g(x)\}, \tag{2.15}$$其中 $g$ 为给定的某个连续函数。根据上述的讨论，若 $u$ 为基态，则 $u\in U$ 且满足$$E(u)=\inf_{v\in U}E(v). \tag{2.16}$$

下面我们说明变分问题 (2.16) 和调和方程的 Dirichlet 问题有关。

**定理 2.1.1 (Dirichlet 原理)** @12

若满足 (2.16) 的基态 $u\in U$ 存在，则它必满足方程$$\begin{cases}\Delta u=0, & x\in\Omega,\\u=g, & x\in\partial\Omega.\end{cases} \tag{2.17}$$反之，若 $u\in U$ 为方程 (2.17) 的解，则 $u$ 必为变分问题 (2.16) 的解。

**引理 (基态的一阶变分为零)** @12

定义$$U_{0}=\{u\in C^{2}(\Omega)\cap C^{1}(\overline{\Omega}):\quad u|_{\partial\Omega}=0\}. \tag{2.18}$$若 $u$ 为变分问题 (2.16) 的解，任取 $w\in U_{0}$，令 $v=u+\varepsilon w$（$\varepsilon$ 为任意实数），则 $v\in U$，且由 $E(u+\varepsilon w)$ 在 $\varepsilon=0$ 处取到极小值可得$$\int_{\Omega}\nabla u\cdot\nabla w\,\mathrm{d}x=0. \tag{2.19}$$

**命题 (弱形式下的调和性)** @13

若 $u\in C^{2}(\Omega)\cap C^{1}(\overline{\Omega})$ 使得对任意给定的 $w\in U_{0}$ 成立$$\int_{\Omega}w\Delta u\,\mathrm{d}x=0, \tag{2.20}$$则 $\Delta u$ 在 $\Omega$ 中必为 $0$。

**命题 (能量差的非负性)** @13

设 $u\in U$ 为方程 (2.17) 的解。则对任意 $v\in U$，令 $w=v-u$，有 $w\in U_{0}$，且$$\int_{\Omega}\nabla w\cdot\nabla u\,\mathrm{d}x=0, \tag{2.21}$$从而$$E(v)=E(u)+\frac{1}{2}\int_{\Omega}|\nabla w|^{2}\,\mathrm{d}x\geqslant E(u),$$等号成立当且仅当 $w\equiv 0$。因此 $u$ 满足 (2.16)。

**注 (变分原理的局限)** @13

变分原理提供了研究偏微分方程边值问题的一个新观点。但是，定理 2.1.1 本身并没有说明 $E(v)$ 是否存在达到下确界的元素，更没有说明下确界是否在 $U$ 中可达。因此，要用变分法研究 Dirichlet 问题 (2.17)，尚有一些基础工作要做。随着近代数学理论的发展，泛函 (2.14) 在哪种函数类中确实存在极小值等问题都得到了严格论证，从而确立了变分原理在偏微分方程研究中的重要作用。

### 2.2 调和函数的基本性质与应用（p15–23）

前一节我们引入了调和方程和 Poisson 方程并讨论了相应的定解条件，同时在前一节我们还引入了调和函数的概念。本节主要介绍调和函数的基本性质（平均值性质、极值原理、Harnack 不等式），并给出这些性质的几个应用。

#### 2.2.1 调和函数的基本性质 @15

我们首先看两个简单的调和函数的例子。

**例 2.2.1** @15

$f(x_{1},x_{2})=x_{2}$，$(x_{1},x_{2})\in\mathbb{R}^{2}$。显然 $f$ 为 $\mathbb{R}^{2}$ 上的调和函数。任取圆盘 $B_{r}(y)\subset\mathbb{R}^{2}$，并记 $y=(y_{1},y_{2})$，则 $f$ 满足$$f(x_{1},x_{2})+f(x_{1},2y_{2}-x_{2})=2y_{2}=2f(y_{1},y_{2}).$$由此可知$$\frac{1}{|\partial B_{r}(y)|}\int_{\partial B_{r}(y)}f(x)\,\mathrm{d}S_{x}=y_{2}=f(y).$$

而 $f$ 在圆盘 $B_{r}(y)$ 的最大值、最小值显然在边界 $\partial B_{r}(y)$ 上取到。此外，若 $B_{r}(y)\subset\subset\mathbb{R}_{+}^{2}=\{(y_{1},y_{2})\in\mathbb{R}^{2}:y_{2}>0\}$，我们有 $y_{2}>r>0$。此时有$$\sup_{B_{\frac{r}{2}}(y)}f(x)\leqslant y_{2}+\frac{r}{2}\leqslant\frac{3}{2}y_{2},\qquad \inf_{B_{\frac{r}{2}}(y)}f(x)\geqslant y_{2}-\frac{r}{2}\geqslant\frac{1}{2}y_{2}>0,$$故$$\frac{\sup\limits_{B_{\frac{r}{2}}(y)}f(x)}{\inf\limits_{B_{\frac{r}{2}}(y)}f(x)}\leqslant 3.$$

注意：只要 $B_{r}(y)\subset\subset\mathbb{R}_{+}^{2}$，该估计式右端常数不依赖于圆心 $y$ 的位置和半径 $r$ 的选取。

**例 2.2.2** @16

平面上 $f(r,\theta)=\theta$，$r>0$，$\theta\in(0,\pi)$。由 Laplace 算子的极坐标形式（见习题 2.1 第 1 题）可知 $f$ 是上半平面 $\mathbb{R}_{+}^{2}=\{(r,\theta):r>0,\ \theta\in(0,\pi)\}$ 上的正调和函数。任取 $B_{r}(y)\subset\subset\mathbb{R}_{+}^{2}$，并记 $y=(r_{0},\theta_{0})$。注意到函数 $f$ 的取值和 $\partial B_{r}(y)$ 关于射线 $\theta=\theta_{0}$ 是镜像对称的，可以证明$$\frac{1}{|\partial B_{r}(y)|}\int_{\partial B_{r}(y)}f(x)\,\mathrm{d}S_{x}=\theta_{0}=f(y).$$

另外，下式显然成立：$$\sup_{B_{r}(y)}f(x)=\theta_{0}+\theta_{1}=\max_{\partial B_{r}(y)}f(x),\qquad \inf_{B_{r}(y)}f(x)=\theta_{0}-\theta_{1}=\min_{\partial B_{r}(y)}f(x),$$其中 $\theta_{1}=\arcsin\frac{r}{r_{0}}$。此外，对于任意 $B_{r}(y)\subset\subset\mathbb{R}_{+}^{2}$，成立$$\frac{\sup\limits_{B_{\frac{r}{2}}(y)}f}{\inf\limits_{B_{\frac{r}{2}}(y)}f}=\frac{\theta_{0}+\theta_{2}}{\theta_{0}-\theta_{2}},$$其中 $\theta_{2}=\arcsin\frac{r}{2r_{0}}$。由于 $B_{r}(y)\subset\subset\mathbb{R}_{+}^{2}$，$\frac{r}{r_{0}}<\arcsin\frac{r}{r_{0}}<\theta_{0}$，因此$$\frac{2}{\pi}\theta_{2}\leqslant\sin\theta_{2}=\frac{r}{2r_{0}}\leqslant\frac{1}{2}\arcsin\frac{r}{r_{0}}\leqslant\frac{1}{2}\theta_{0},$$从而$$\frac{\sup\limits_{B_{\frac{r}{2}}(y)}f}{\inf\limits_{B_{\frac{r}{2}}(y)}f}=\frac{1+\frac{\theta_{2}}{\theta_{0}}}{1-\frac{\theta_{2}}{\theta_{0}}}\leqslant\frac{1+\frac{\pi}{4}}{1-\frac{\pi}{4}}.$$这个估计式右端的常数，不依赖于 $B_{r}(y)$ 的圆心 $y$ 和半径 $r$ 的选取。

**例 2.2.3** @17

$f(x)=\dfrac{1}{|x|}$ 在 $\mathbb{R}^{3}\setminus\{0\}$ 中调和。令 $B_{r}(x_{0})\subset\mathbb{R}^{3}\setminus\{0\}$ 及 $a=|x_{0}|$，记 $\theta$ 为向量 $\overrightarrow{x_{0}x}$ 和 $\overrightarrow{x_{0}O}$ 之间的夹角，其中 $x\in S_{r}(x_{0})$。由余弦定理得 $|x|=\sqrt{a^{2}+r^{2}-2ar\cos\theta}$。因此$$\frac{1}{|S_{r}(x_{0})|}\int_{S_{r}(x_{0})}\frac{1}{|x|}\,\mathrm{d}\sigma=\frac{1}{a}=\frac{1}{|x_{0}|}.$$

由于$$\sup_{B_{r}(x_{0})}f=\frac{1}{|x_{0}|-r},\qquad \inf_{B_{r}(x_{0})}f=\frac{1}{|x_{0}|+r},$$因此当 $|x_{0}|\geqslant 2r$ 时，$$\frac{\sup\limits_{B_{r}(x_{0})}f}{\inf\limits_{B_{r}(x_{0})}f}\leqslant 3.$$

实际上，上面三个例子所呈现出的性质对一般的调和函数也是成立的。

#### 1 . 平均值性质 @17

**定理 2.2.1 (平均值性质)** @17

令 $u(x)\in C^{2}(\Omega)$ 是 $\mathbb{R}^{n}$ 中区域 $\Omega$ 上的调和函数，$B_{r}(x^{0})\subset\subset\Omega$，则成立$$u(x^{0})=\frac{1}{|\partial B_{r}(x^{0})|}\int_{\partial B_{r}(x^{0})}u(x)\,\mathrm{d}S_{x}. \tag{2.22}$$

**引理 (球面平均值为常数)** @18

设 $u\in C^{2}(\Omega)$ 为调和函数，$B_{r}\subset\subset\Omega$。记$$\bar{u}(r)=\frac{1}{2\pi r}\int_{\partial B_{r}}u(x)\,\mathrm{d}S_{x}=\frac{1}{2\pi}\int_{0}^{2\pi}u(r,\theta)\,\mathrm{d}\theta,$$则对任意使 $B_{r}\subset\subset\Omega$ 的 $r>0$ 有 $\dfrac{\mathrm{d}\bar{u}(r)}{\mathrm{d}r}=0$，即 $\bar{u}(r)$ 与 $r$ 无关；再由 $u$ 的连续性知$$\bar{u}(r)=\lim_{r\to 0}\bar{u}(r)=u(0).$$

**注 2.2.1** @18

调和函数的平均值性质的另一种写法为（证明留作本节习题第 2 题）：$$u(x^{0})=\frac{1}{|B_{r}(x^{0})|}\int_{B_{r}(x^{0})}u(x)\,\mathrm{d}x. \tag{2.25}$$

#### 2 . 极值原理 @18

**定理 2.2.2 (极值原理)** @18

若 $u(x)\in C^{2}(\Omega)\cap C(\overline{\Omega})$ 为 $\mathbb{R}^{n}$ 中的区域 $\Omega$ 上的调和函数，则成立$$\max_{\overline{\Omega}}u(x)=\max_{\partial\Omega}u(x),\qquad \min_{\overline{\Omega}}u(x)=\min_{\partial\Omega}u(x). \tag{2.26}$$

并且，若 $u$ 在 $\Omega$ 内达到其在 $\overline{\Omega}$ 上的最大值或最小值，则 $u$ 在 $\Omega$ 上恒为常数。

**注 2.2.2** @19

满足极值原理的调和函数最直观的例子是线性函数 $a\cdot x+b$，$a\in\mathbb{R}^{n}$，$b\in\mathbb{R}$，若它的最大值或者最小值在 $\Omega$ 内部取到，则它在 $\Omega$ 上恒为常数。

#### 3 . Harnack 不等式 @19

**定理 2.2.3 (Harnack 不等式)** @19

若 $u(x)\in C^{2}(\Omega)$ 为 $\mathbb{R}^{n}$ 中区域 $\Omega$ 上的非负调和函数，则对任意的区域 $\Omega'\subset\subset\Omega$，存在常数 $C=C(\Omega,\Omega')>0$ 使得$$\frac{1}{C}u(y)\leqslant u(x)\leqslant Cu(y),\qquad \forall x,y\in\overline{\Omega}'. \tag{2.28}$$

**注 2.2.3** @20

在 Harnack 不等式的证明过程中，我们可以看到若 $u$ 为 $B_{4R}(x^{0})$ 上的非负调和函数，则成立$$\frac{1}{C(n)}u(y)\leqslant u(x)\leqslant C(n)u(y),\qquad \forall x,y\in B_{R}(x^{0}), \tag{2.30}$$其中 $C(n)$ 为只依赖于空间维数的常数，不依赖于球心 $x^{0}$ 的位置及 $R$ 的大小。

#### 2.2.2 基本性质的应用 @20

基于上述调和函数的基本性质，我们给出一些应用。

#### 1 . 调和函数的梯度估计 @20

**定理 2.2.4 (梯度估计)** @20

若 $u\in C^{3}(B_{R})\cap C^{1}(\overline{B_{R}})$ 为球 $B_{R}$ 上的非负调和函数，则成立$$|\nabla u(0)|\leqslant\frac{n}{R}u(0).$$

**注 2.2.4** @21

对于非负调和函数，梯度估计可以很简单地利用平均值性质证明。这种方法具有特殊性，不便于推广到一般的椭圆型方程情形。在后面的章节里，我们会利用 Bochner（博赫纳）技巧给出调和函数的一个新的梯度估计，且不要求调和函数的非负性。

#### 2 . Dirichlet 问题解的唯一性和稳定性 @21

**定理 2.2.5** @21

方程 (2.7) 的解 $u\in C^{2}(\Omega)\cap C(\overline{\Omega})$ 若存在，则必是唯一的，并且连续地依赖于所给的边界值 $g$。

**定理 2.2.6** @22

Dirichlet 外问题 (2.11) 的解若存在，则必是唯一的。

**注 2.2.5** @22

在学习了 2.3 节有关极值原理的内容之后，我们可以证明 Poisson 方程 Dirichlet（外）问题的解对右端项 $f$ 也是连续依赖的。

#### 3 . Liouville 定理 @22

**定理 2.2.7 (Liouville 定理)** @22

若 $u(x)$ 为 $\mathbb{R}^{n}$ 上的下有界的调和函数，则 $u$ 恒为常数。

**推论 2.2.1** @23

若 $u(x)$ 为 $\mathbb{R}^{n}$ 上的（上）有界的调和函数，则 $u$ 恒为常数。

### 2.3 极值原理及其应用（p24–28）

本节主要介绍调和方程的弱极值原理和强极值原理并给出极值原理的一些应用。本节中证明极值原理的方法适用于一般的变系数椭圆型方程。

#### 2.3.1 极值原理 @24

首先介绍弱极值原理。

**定理 2.3.1** @24

若 $u\in C^2(B_1)\cap C(\overline{B}_1)$ 满足 $-\Delta u(x)\leqslant 0$，$x\in B_1$，则成立

$$\max_{\overline{B}_1}u=\max_{\partial B_1}u. \tag{2.33}$$

**注 2.3.1** @25

满足定理 2.3.1 条件的函数称为**下调和函数**。由于 $-\Delta|x|^2=-2n<0$，故 $u=|x|^2$ 是一个典型的下调和函数。它在单位球 $\overline{B}_1$ 上的最大值（$=1$）在单位球面 $\partial B_1$ 上达到，而最小值（$=0$）只在原点达到。

**推论 2.3.1** @25

若 $u\in C^2(B_1)\cap C(\overline{B}_1)$ 满足 $-\Delta u(x)\geqslant 0$，$x\in B_1$，则

$$\min_{\overline{B}_1}u=\min_{\partial B_1}u. \tag{2.35}$$

**注 2.3.2** @25

满足推论 2.3.1 条件的函数称为**上调和函数**。

**注 2.3.3** @25

对一般光滑有界区域 $\Omega$，弱极值原理仍成立。上（下）调和函数的弱极值原理可利用习题 2.2 得到。定理 2.3.1 的证明方法可以推广到一般的椭圆型方程。

下面介绍强极值原理。

**定理 2.3.2** @25

设 $u\in C^2(B_1)\cap C(\overline{B}_1)$ 满足 $-\Delta u(x)\leqslant 0$，$x\in B_1$。若 $x^0\in\partial B_1$，使得

$$u(x)<u(x^0),\quad \forall x\in B_1, \tag{2.36}$$

则有

$$\liminf_{t\to 0^+}\frac{u(x^0)-u(x^0-t\boldsymbol{n})}{t}>0, \tag{2.37}$$

其中 $\boldsymbol{n}$ 为 $x^0$ 处的单位外法向量。特别地，当 $\dfrac{\partial u}{\partial\boldsymbol{n}}(x^0)$ 存在时，$\dfrac{\partial u}{\partial\boldsymbol{n}}(x^0)>0$。

**注 2.3.4** @26

典型的下调和函数 $u=|x|^2$ 在单位球面 $\partial B_1$ 上的外法向导数处处满足 $\dfrac{\partial u}{\partial\boldsymbol{n}}=2>0$。

**注 2.3.5** @27

若在 (2.37) 中将单位外法向量 $\boldsymbol{n}$ 换成满足 $\boldsymbol{\nu}\cdot\boldsymbol{n}>0$ 的单位向量 $\boldsymbol{\nu}$，则结论仍成立。

**注 2.3.6** @27

对一般光滑有界区域 $\Omega$，强极值原理仍成立。

**注 2.3.7** @27

当 $u$ 满足 $\Delta u\leqslant 0$ 时，有相应的强极值原理成立，请读者自行写出。

以上极值原理我们称之为 **Hopf（霍普夫）极值原理**。

#### 2.3.2 极值原理的应用 @27

下面我们给出极值原理的几个应用。

#### Bochner 技巧与梯度估计 @27

**定理 2.3.3** @27

若 $u\in C^3(B_1)\cap C(\overline{B}_1)$ 为调和函数，则成立

$$\sup_{B_{\frac{1}{2}}}|\nabla u|\leqslant c(n)\sup_{\partial B_1}|u|, \tag{2.41}$$

其中 $c(n)$ 为只依赖于空间维数 $n$ 的正常数。

这种证明梯度估计的方式称为 **Bochner 技巧**。它是一种常用的估计技巧，通过导出待估计量所满足的偏微分方程，再利用极值原理等方程的性质，得到估计。有时为建立局部估计，往往需对估计量作截断后再讨论。Bochner 技巧对一般的椭圆型方程也适用。

#### Neumann 问题解的唯一性 @28

**定理 2.3.4** @28

Neumann 问题 (2.8) 的解若存在，则在相差一个常数意义下，解必是唯一的。

#### Neumann 外问题的唯一性 @28

**定理 2.3.5** @28

设 $n\geqslant 3$，$\Omega$ 为 $\mathbb{R}^n$ 上的光滑有界区域，则 Neumann 外问题 (2.13) 的解若存在，必是唯一的。

证明留作本节习题。

### 2.4 Green 函数法（p29–40）

本节主要介绍如何求解有界区域上的 Poisson 方程的 Dirichlet 问题。我们首先介绍基本解、Green 恒等式、Green 函数的概念和性质。然后，我们通过求解特殊区域上的 Green 函数，给出球上的 Poisson 方程的 Dirichlet 问题解的表达式。最后，利用解的表达式给出调和函数进一步的性质。

#### 2.4.1 基本解和 Green 函数 @29

考虑一个调和函数 $u(x)$，它仅仅是关于 $r=|x|$ 的函数。记 $v(r)=u(x)$，则 $v$ 满足

$$\Delta v=v''+\frac{n-1}{r}v'=0,\quad r>0.$$

易得上述常微分方程的通解表达式：

$$v(r)=\begin{cases}c_1+c_2\ln r, & n=2,\\[4pt] c_3+c_4 r^{2-n}, & n\geqslant 3,\end{cases}\quad r>0,$$

其中 $c_i\ (i=1,2,3,4)$ 为常数。当 $c_1=c_3=0$ 时，选取 $c_2,c_4$ 分别使得

$$\int_{\partial B_r}\frac{\partial v}{\partial r}\,\mathrm{d}S=-1.$$

**定义 (基本解)** @30

我们将所得到的解称为**基本解**，并记

$$\Gamma(x)=\begin{cases}\dfrac{1}{2\pi}\ln\dfrac{1}{|x|}, & n=2,\\[10pt] \dfrac{1}{(n-2)\omega_{n-1}}\dfrac{1}{|x|^{n-2}}, & n\geqslant 3,\end{cases} \tag{2.45}$$

其中 $\omega_{n-1}$ 表示 $n-1$ 维球面 $\mathbb{S}^{n-1}\subset\mathbb{R}^n$ 的面积。特别地，当 $n=3$ 时，$\omega_2=4\pi$，$\Gamma(x)=\dfrac{1}{4\pi|x|}$。显然，基本解 $\Gamma(x)$ 在任意不含 $0$ 点的开区域内是调和函数。

#### Green 公式 @30

设 $\Omega\subset\mathbb{R}^n$ 为光滑有界区域，$u(x),v(x)\in C^2(\Omega)\cap C^1(\overline{\Omega})$。我们知道成立如下公式：

$$\int_\Omega u\,\partial_{x_i}v\,\mathrm{d}x=-\int_\Omega v\,\partial_{x_i}u\,\mathrm{d}x+\int_{\partial\Omega}uv n_i\,\mathrm{d}S, \tag{2.46}$$

其中 $n_i$ 表示边界 $\partial\Omega$ 的单位外法向量 $\boldsymbol{n}$ 的第 $i$ 个坐标分量。利用 (2.46)，我们可以推出以下两个公式。

**定理 (Green 第一公式)** @30

$$\int_\Omega u\Delta v\,\mathrm{d}x+\int_\Omega \nabla u\cdot\nabla v\,\mathrm{d}x=\int_{\partial\Omega}u\frac{\partial v}{\partial\boldsymbol{n}}\,\mathrm{d}S. \tag{2.47}$$

**定理 (Green 第二公式)** @30

$$\int_\Omega (u\Delta v-v\Delta u)\,\mathrm{d}x=\int_{\partial\Omega}\left(u\frac{\partial v}{\partial\boldsymbol{n}}-v\frac{\partial u}{\partial\boldsymbol{n}}\right)\mathrm{d}S. \tag{2.48}$$

下面我们利用上述两个 Green 公式推导 Green 恒等式。

**定理 2.4.1 (Green 恒等式)** @31

若 $\Omega$ 为 $\mathbb{R}^n$ 中的光滑有界区域，$u\in C^2(\Omega)\cap C^1(\overline{\Omega})$，则 $\forall x\in\Omega$，成立如下 Green 恒等式

$$u(x)=\int_\Omega\Gamma(x-y)(-\Delta u(y))\,\mathrm{d}y+\int_{\partial\Omega}\left(\Gamma(x-y)\frac{\partial u}{\partial\boldsymbol{n}_y}(y)-u(y)\frac{\partial\Gamma}{\partial\boldsymbol{n}_y}(x-y)\right)\mathrm{d}S_y. \tag{2.49}$$

特别地，当 $u$ 为 $\Omega$ 上的调和函数时，(2.49) 就化为

$$u(x)=\int_{\partial\Omega}\left(\Gamma(x-y)\frac{\partial u}{\partial\boldsymbol{n}_y}(y)-u(y)\frac{\partial\Gamma}{\partial\boldsymbol{n}_y}(x-y)\right)\mathrm{d}S_y. \tag{2.52}$$

公式 (2.52) 说明调和函数 $u(x)$ 在区域 $\Omega$ 内部的值可以由 $u$ 以及法向导数 $\dfrac{\partial u}{\partial\boldsymbol{n}}$ 在边界 $\partial\Omega$ 上的值确定。而 Dirichlet 问题和 Neumann 问题分别只给定调和函数 $u$ 在边界 $\partial\Omega$ 上的值和法向导数 $\dfrac{\partial u}{\partial\boldsymbol{n}}$ 在边界 $\partial\Omega$ 上的值。因此，我们还不能直接应用该公式求解这两个定解问题。特别地，我们已经知道 Dirichlet 问题的解是唯一的，我们希望通过消去 (2.52) 中的 $\dfrac{\partial u}{\partial\boldsymbol{n}}$ 项，从而给出 Dirichlet 问题的解的表达式，这正是 Green 函数法的基本出发点。

**定义 (Green 函数)** @32

任意取定 $x\in\Omega$，令

$$G(x,y)=\Gamma(x-y)-\gamma(x,y), \tag{2.53}$$

其中 $\gamma(x,\cdot)\in C^2(\Omega)\cap C^1(\overline{\Omega})$ 且 $-\Delta_y\gamma(x,y)=0$，$y\in\Omega$。为了消去边界积分中的 $\dfrac{\partial u}{\partial\boldsymbol{n}}$ 这项，我们进一步要求调和函数 $\gamma(x,y)$ 满足 $\gamma(x,y)=\Gamma(x-y)$，$y\in\partial\Omega$，即 $\gamma(x,y)$ 由下式定义：

$$\begin{cases}\Delta_y\gamma(x,y)=0, & y\in\Omega,\\ \gamma(x,y)=\Gamma(x-y), & y\in\partial\Omega.\end{cases} \tag{2.54}$$

我们称由 (2.53) 定义的函数 $G(x,y)$ 为 **Green 函数**。若这样的 Green 函数 $G(x,y)$ 存在，则 Dirichlet 问题 (2.7) 的解可以表示为

$$u(x)=\int_\Omega G(x,y)(-\Delta u(y))\,\mathrm{d}y-\int_{\partial\Omega}u(y)\frac{\partial G}{\partial\boldsymbol{n}_y}(x,y)\,\mathrm{d}S_y=\int_\Omega G(x,y)f(y)\,\mathrm{d}y-\int_{\partial\Omega}g(y)\frac{\partial G}{\partial\boldsymbol{n}_y}(x,y)\,\mathrm{d}S_y,\quad x\in\Omega. \tag{2.55}$$

特别地，若 $u$ 为调和函数，则

$$u(x)=-\int_{\partial\Omega}g(y)\frac{\partial G}{\partial\boldsymbol{n}_y}(x,y)\,\mathrm{d}S_y,\quad x\in\Omega. \tag{2.56}$$

在上面的讨论中，虽然我们已经给出了 Dirichlet 问题解的表达式，但是对于一般区域 $\Omega$ 上的 Green 函数 $G(x,y)$ 的求解本身也是非常困难的（存在与否也并没有在前面的讨论中给出）。下面我们将对球和半空间的情形导出 Green 函数的具体表达式。

**定理 (Green 函数的性质)** @32

Green 函数满足如下性质（证明留作习题）：

1. $G(x,y)=0$，$x\in\Omega$，$y\in\partial\Omega$。

2. 在区域 $\Omega\times\Omega\setminus\{x=y\}$ 中成立

$$0<G(x,y)<\begin{cases}\Gamma(x-y)+\dfrac{1}{2\pi}\ln\operatorname{diam}(\Omega), & n=2,\\[8pt] \Gamma(x-y), & n\geqslant 3,\end{cases}$$

当 $y\to x$ 时，$G(x,y)\to+\infty$，其阶数和 $\Gamma(x-y)$ 相同。

3. $G(x,y)=G(y,x)$，$\forall x,y\in\Omega$，$y\neq x$。

4. $\displaystyle\int_{\partial\Omega}\frac{\partial G(x,y)}{\partial\boldsymbol{n}_y}\,\mathrm{d}S_y=-1$，$\forall x\in\Omega$。

Green 函数在静电学中有明显的物理意义。设在点 $x$ 有一单位点电荷，那么它在 $3$ 维空间 $y$ 处的电势为 $\Gamma(x-y)=\dfrac{1}{4\pi|x-y|}$。若在 $x$ 点的点电荷被一个封闭的金属面 $\partial\Omega$ 包围，而且金属面是接地的，此时在金属面内的电势就可以用 Green 函数

$$G(x,y)=\frac{1}{4\pi|x-y|}-\gamma(x,y),\quad y\in\Omega$$

表示，它在金属面 $\partial\Omega$ 上恒为 $0$，而函数 $-\gamma(x,y)$ 正好表示金属面 $\partial\Omega$ 上的感应电荷在 $y$ 处产生的电势。因此，Green 函数的性质 3 在静电学中可表述为：$x$ 处的单位点电荷在 $y$ 处产生的电势等于 $y$ 处的单位点电荷在 $x$ 处产生的电势。类似于这样的原理在物理中称为**互易原理**。

#### 2.4.2 特殊区域上的 Green 函数 @33

本小节给出球和半空间上的 Green 函数的具体表达式。我们利用静电源像法求解球上的 Green 函数。

**命题 2.4.1** @33

设 $B_R$ 为 $\mathbb{R}^n$ 中半径为 $R$ 的球，则对任意给定的 $x\in B_R$，我们有

$$G(x,y)=\frac{1}{(n-2)\omega_{n-1}}\left(|x-y|^{-(n-2)}-\left|\frac{Rx}{|x|}-\frac{|x|}{R}y\right|^{-(n-2)}\right),\quad y\in B_R,\ n\geqslant 3, \tag{2.57}$$

$$G(x,y)=\frac{1}{2\pi}\left(\ln\frac{1}{|x-y|}+\ln\left|\frac{R}{|x|}x-\frac{|x|}{R}y\right|\right),\quad y\in B_R,\ n=2. \tag{2.58}$$

求 $B_R$ 上的 Green 函数归结为求函数 $\gamma(x,y)$，即求感应电荷所产生的电势。假设在球 $B_R$ 外也有一个点电荷，它也产生一个电势，若两个点电荷产生的电势在球面上处处相互抵消，这个假想的点电荷在 $B_R$ 内的电势就等于球面上的感应电荷的电势。由于球的对称性，我们可以想象该点电荷的位置与球里面的点电荷的位置关于球面是某种对称点。这种利用对称性求 Green 函数的方法称为**静电源像法**。

考虑 $0\neq x\in B_R$ 关于 $\partial B_R$ 的反演点 $\tilde{x}$（如图 2.7(a)），则

$$\tilde{x}=\frac{R^2x}{|x|^2}.$$

反演点 $\tilde{x}$ 处的单位点电荷在 $y$ 点处产生的电势为 $\Gamma(\tilde{x}-y)=\dfrac{1}{4\pi|\tilde{x}-y|}$。当 $y$ 位于球面上时，由反演点 $\tilde{x}$ 的定义知，$\triangle Oxy$ 和 $\triangle Oy\tilde{x}$ 为相似三角形，因此成立

$$\frac{|x|}{R}=\frac{R}{|\tilde{x}|}=\frac{|x-y|}{|\tilde{x}-y|},$$

从而 $\Gamma(\tilde{x}-y)=\dfrac{|x|}{R}\Gamma(x-y)$。因此在 $\tilde{x}$ 处的点电荷带有电量 $\dfrac{R}{|x|}$ 时，它产生的电势和 $x$ 处单位点电荷产生的电势在 $\partial B_R$ 上恰好相等，于是

$$\gamma(x,y)=\frac{R}{4\pi|x|}\frac{1}{|\tilde{x}-y|}=\frac{1}{4\pi}\frac{1}{\left|\frac{R}{|x|}x-\frac{|x|}{R}y\right|}.$$

当 $x=0\in B_R$ 时，$\gamma(x,y)=\dfrac{1}{4\pi R}$。这样 $3$ 维球上的 Green 函数公式为

$$G(x,y)=\frac{1}{4\pi}\left(\frac{1}{|x-y|}-\frac{1}{\left|\frac{R}{|x|}x-\frac{|x|}{R}y\right|}\right),\quad y\in B_R. \tag{2.59}$$

$n=2$ 和 $n>3$ 维的球 $B_R$ 上的 Green 函数也可以用类似的办法得到。

**命题 2.4.2** @34

设 $H=\{(x_1,x_2,\cdots,x_n)\in\mathbb{R}^n:x_n>0\}$，则对给定的 $x\in H$，$H$ 上的 Green 函数为

$$G(x,y)=\Gamma(x-y)-\Gamma(\tilde{x}-y), \tag{2.60}$$

其中 $\tilde{x}=(x_1,\cdots,x_{n-1},-x_n)$ 为 $x$ 关于轴 $\{x_n=0\}$ 的对称点，$\Gamma$ 为 $\mathbb{R}^n$ 上的基本解，由 (2.45) 给出。

**注 2.4.1** @35

关于一般的无界区域上的 Green 函数讨论非常复杂。在讨论有界区域的外区域上的 Green 函数时，需要引起注意的是 Green 恒等式 (2.49) 成立需要条件。事实上，一般需要对 $u$ 的无穷远加衰减性条件。一个合理的衰减性条件如下：存在常数 $a>0$ 及 $C>0$，使得

$$|x|^a|u(x)|+|x|^{1+a}|Du(x)|+|x|^{2+a}|D^2u(x)|\leqslant C,\quad |x|\geqslant 1. \tag{2.61}$$

在用 Green 函数构造 Dirichlet 问题解的时候，我们是在解 $u\in C^2(\Omega)\cap C^1(\overline{\Omega})$ 以及 $\Gamma(x-y)\in C^2(\Omega)\cap C^1(\overline{\Omega})$ 的情形下，推导 Dirichlet 问题的解的积分表达式的。而 Dirichlet 问题的解只需要 $u\in C^2(\Omega)\cap C(\overline{\Omega})$，因此我们需要验证 (2.55)、(2.56) 确实是 Dirichlet 问题的解。

#### 2.4.3 球上 Poisson 方程的解 @35

在本小节，我们证明 (2.55) 给出了球上 Poisson 方程 Dirichlet 问题的解。

**定理 2.4.2** @35

令

$$u(x)=-\int_{\partial B_1}g(y)\frac{\partial G}{\partial\boldsymbol{n}_y}(x,y)\,\mathrm{d}S_y,\quad x\in B_1, \tag{2.62}$$

其中 $G(x,y)$ 为命题 2.4.1 给出的 Green 函数，$g\in C(\partial B_1)$，则 $u$ 为下述调和方程 Dirichlet 问题的解

$$\begin{cases}\Delta u=0, & x\in B_1,\\ u=g, & x\in\partial B_1.\end{cases}$$

**注 2.4.2** @35

上述积分表达式 (2.62)，我们称为 **Poisson 公式**。

**定理 2.4.3** @36

令

$$u(x)=\int_{B_1}G(x,y)f(y)\,\mathrm{d}y,\quad x\in B_1, \tag{2.64}$$

其中 $G(x,y)$ 为命题 2.4.1 给出的 Green 函数，$f\in C^1(\overline{B}_1)$，则 $u\in C^2(B_1)\cap C(\overline{B}_1)$ 为下述方程的解

$$\begin{cases}-\Delta u=f, & x\in B_1,\\ u=0, & x\in\partial B_1.\end{cases}$$

结合定理 2.4.2 和定理 2.4.3，我们给出了球上 Poisson 方程 Dirichlet 问题的解。

**注 2.4.3** @38

事实上，若要定理 2.4.3 成立，我们只需要 $f\in C^\alpha(\overline{B}_1)$，$\alpha\in(0,1)$。

**注 2.4.4** @39

对一般的光滑有界区域 $\Omega$，若其上的 Green 函数 $G$ 存在，则定理 2.4.2 和定理 2.4.3 也成立。

#### 2.4.4 奇点可去性和解析性 @39

在介绍了调和函数的基本解以及 Green 函数之后，我们给出几个应用。

#### 奇点可去性 @39

由基本解的定义 (2.45) 知，$\Gamma(x)$ 除原点 $x=0$ 外是调和的，并且原点是不可去奇点。事实上，关于调和函数的奇性，我们有如下结论。

**定理 2.4.4** @39

设 $u\in C(B_2\setminus\{0\})$ 为 $B_1\setminus\{0\}$ 上的调和函数，若满足

$$\begin{cases}\lim\limits_{x\to 0}|x|^{n-2}u(x)=0, & n\geqslant 3,\\[6pt] \lim\limits_{x\to 0}\dfrac{u(x)}{\ln|x|}=0, & n=2,\end{cases}$$

则可以补充定义 $u$ 在 $0$ 点的值，并且这样得到的函数 $u$ 在 $B_1$ 上为调和函数。

#### 调和函数的解析性 @40

光滑有界区域 $\Omega$ 上的调和函数，例如 $x_1^2-x_2^2$，$\mathrm{e}^{kx_1}\sin kx_2$，$\Gamma(x)$ 等都是 $\Omega$ 上的解析函数。事实上，利用 Poisson 积分公式，我们有如下定理。

**定理 2.4.5** @40

设 $u$ 为 $B_1$ 上的调和函数且连续到边界，则 $u$ 为 $B_1$ 上的解析函数。

由解析函数的性质，我们立即得到

**推论 2.4.1** @40

若 $u$ 为区域 $\Omega$ 上的调和函数且 $u$ 在 $\Omega$ 的一个非空开子集上恒为 $0$，则 $u$ 在 $\Omega$ 上恒为 $0$。

**注 2.4.5** @40

由推论可知，若 $u_1,u_2$ 为区域 $\Omega$ 上的调和函数，且 $u_1$ 与 $u_2$ 在一个非空开子集上相等，则在 $\Omega$ 上 $u_1\equiv u_2$。该性质称为调和函数的**唯一延拓性**，类似于全纯函数解析延拓的唯一性。

### 2.5 特征值问题（p41–50）

在本节中，我们研究 Laplace 算子的特征值和特征函数相关问题。更准确地说，本节研究关于 $-\Delta$ 的特征值问题，但为方便起见，我们仍称其为 Laplace 算子的特征值问题。

首先，我们回顾矩阵最基本的特征值理论。设 $A$ 是一个 $n$ 阶半正定矩阵，则 $A$ 有 $n$ 个非负实特征值 $\{\lambda_i\}_{i=1}^n$，对应有 $n$ 个特征（列）向量 $\{u_i\}_{i=1}^n$，满足

$$\begin{cases}0 \leqslant \lambda_1 \leqslant \lambda_2 \leqslant \cdots \leqslant \lambda_n, \\Au_i = \lambda_i u_i, \\\langle u_i, u_j \rangle = \delta_{ij},\end{cases}$$

其中

$$\delta_{ij} :=\begin{cases}1, & i = j, \\0, & i \ne j.\end{cases}$$

故 $\{u_i\}_{i=1}^n$ 组成 $\mathbb{R}^n$ 的一组标准正交基。由谱定理，$A = \sum_{i=1}^{n} \lambda_i u_i u_i^{\mathrm{T}}$，故矩阵 $A$ 及其对应的线性算子完全由特征值和特征向量决定。

对算子特征值的研究不仅在数学上有重要的理论意义，而且在物理学和现实中也有着重要的应用。例如，在（非相对论）量子力学中，用于描述粒子运动的波函数满足 Schrödinger 方程。Schrödinger 算子 $-\Delta + V$（其中 $V$ 是给定的势函数）的特征值 $\lambda$ 表示粒子在某个状态下所具有的能量，而这个粒子出现在空间位置 $x$ 处的概率可以由 $|u(x)|^2$ 来表示，这里的 $u(x)$ 为相应于 $\lambda$ 的特征函数。又例如，在声学中，敲打鼓膜产生的声波可由不同频率的简单波叠加而成。这些简单波的频率为鼓膜形状 $\Omega \subset \mathbb{R}^2$ 上带 Dirichlet 边界条件的 Laplace 算子特征值的正平方根。

设 $\Omega \subset \mathbb{R}^n$ 为有界光滑区域，我们考虑 $\Omega$ 上的 Laplace 算子的特征值问题。

**定义 2.5.1** @42

如果非零函数 $u \in C^2(\Omega) \cap C^1(\overline{\Omega})$ 和 $\lambda \in \mathbb{R}$ 满足

$$\begin{cases}-\Delta u(x) = \lambda u(x), & x \in \Omega, \\u(x) = 0, & x \in \partial\Omega,\end{cases} \tag{I}$$

或

$$\begin{cases}-\Delta u(x) = \lambda u(x), & x \in \Omega, \\\dfrac{\partial u}{\partial \boldsymbol{n}}(x) = 0, & x \in \partial\Omega,\end{cases} \tag{II}$$

或

$$\begin{cases}-\Delta u(x) = \lambda u(x), & x \in \Omega, \\\dfrac{\partial u}{\partial \boldsymbol{n}}(x) + \sigma u = 0, & x \in \partial\Omega, \quad \sigma > 0,\end{cases} \tag{III}$$

那么分别称 $\lambda$ 是 $\Omega$ 上具有（齐次）Dirichlet 边界条件、Neumann 边界条件或者 Robin 边界条件（对应第一、第二、第三类边界条件 (2.7)、(2.8) 和 (2.9)）的算子 $-\Delta$ 的特征值，$u$ 是对应的特征函数。我们称 $(\lambda, u)$ 是 $\Omega$ 上 Laplace 算子的特征对。

**注 2.5.1** @42

由于方程是线性的，通过归一化，我们只需考虑满足 $\displaystyle\int_\Omega u^2 \mathrm{d}x = 1$ 的特征函数。

**定义 2.5.2** @43

若 $\{u_i\}_{i=1}^\infty \subset L^2(\Omega)$ 满足

$$\int_\Omega u_i u_j \mathrm{d}x = \delta_{ij}, \qquad \overline{\operatorname{Span}\left(\{u_i\}_{i=1}^\infty\right)} = L^2(\Omega),$$

则称 $\{u_i\}_{i=1}^\infty$ 是 $L^2(\Omega)$ 的一组完备标准正交基，其中 $\operatorname{Span}\left(\{u_i\}_{i=1}^\infty\right)$ 是指由 $\{u_i\}_{i=1}^\infty$ 生成的线性空间，$\overline{X}$ 表示 $X$ 在 $L^2(\Omega)$ 拓扑下的闭包。

#### 2.5.1 一维情形 @43

我们首先研究简单的一维情形，先讨论带 Dirichlet 边界条件的 Laplace 算子 $-\dfrac{\mathrm{d}^2}{\mathrm{d}x^2}$ 的特征值问题。

**例 2.5.1** @43

设 $\Omega = (0, \pi) \subset \mathbb{R}$。求解如下 Dirichlet 边界条件的特征值问题：

$$\begin{cases}-u''(x) = \lambda u(x), & x \in (0, \pi), \\u(0) = u(\pi) = 0.\end{cases} \tag{2.66}$$

由常微分方程理论可知：方程 $-u''(x) = \lambda u(x)$ 的通解为

$$u(x) =\begin{cases}A\cos\sqrt{\lambda}x + B\sin\sqrt{\lambda}x, & \lambda > 0, \\Ax + B, & \lambda = 0, \\A\mathrm{e}^{\sqrt{-\lambda}x} + B\mathrm{e}^{-\sqrt{-\lambda}x}, & \lambda < 0,\end{cases}\qquad A, B \in \mathbb{R}.$$

注意到边界条件 $u(0) = u(\pi) = 0$，当 $\lambda \leqslant 0$ 时，方程只有零解；当 $\lambda > 0$ 时，方程有非零解当且仅当 $\lambda = \lambda_k = k^2\ (k \in \mathbb{N}_+)$，此时方程的解为 $u_k(x) = \sqrt{\dfrac{2}{\pi}} \sin kx$。这个例子中，所有的特征值都是非负的，且当 $k \to +\infty$ 时，$\lambda_k \to +\infty$。进一步地，

$$\int_0^\pi u_i(x) u_j(x) \mathrm{d}x = \delta_{ij}, \qquad i, j \in \mathbb{N}_+.$$

我们断言 $\{u_k(x)\}_{k=1}^\infty$ 构成 $L^2(0, \pi)$ 的完备标准正交基。

**例 2.5.2** @44

设 $\Omega = (0, \pi) \subset \mathbb{R}$。求解如下 Neumann 边界条件的特征值问题：

$$\begin{cases}-u''(x) = \lambda u(x), & x \in (0, \pi), \\u'(0) = u'(\pi) = 0.\end{cases} \tag{2.67}$$

由常微分方程理论，只有当 $\lambda = \lambda_k = (k-1)^2\ (k \in \mathbb{N}_+)$ 时，方程有非零解

$$u_k(x) =\begin{cases}\dfrac{1}{\sqrt{\pi}}, & k = 1, \\\sqrt{\dfrac{2}{\pi}} \cos(k-1)x, & k \geqslant 2.\end{cases}$$

注意到，与 Dirichlet 边界条件不同，Neumann 条件的特征值包含 $0$。另外，$\{u_k(x)\}_{k=1}^\infty$ 也构成 $L^2(0, \pi)$ 的完备标准正交基。

**定理 2.5.1 (Sturm-Liouville 定理)** @44

更一般地，我们不加证明地给出如下 Sturm-Liouville（施图姆–刘维尔）定理。考虑 $\Omega = (0, L) \subset \mathbb{R}$ 上的 Sturm-Liouville 特征值问题：

$$\begin{cases}-u''(x) = \lambda u(x), & x \in (0, L), \\-\alpha_1 u'(0) + \beta_1 u(0) = 0, \\\alpha_2 u'(L) + \beta_2 u(L) = 0,\end{cases} \tag{2.68}$$

其中 $\alpha_i \geqslant 0$，$\beta_i \geqslant 0$，$\alpha_i + \beta_i \ne 0\ (i = 1, 2)$。我们有如下结论成立：

1. 所有的特征值 $\lambda$ 都是非负的，且构成趋于 $+\infty$ 的单调递增序列，可记为

$$0 \leqslant \lambda_1 \leqslant \lambda_2 \leqslant \cdots \leqslant \lambda_k \leqslant \cdots \to +\infty,$$

特别地，$\lambda_1 = 0$ 当且仅当 $\beta_1 = \beta_2 = 0$。

2. 存在一列特征函数 $\{u_k\}_{k=1}^\infty \subset C^\infty([0, L])$（对应特征值 $\lambda_k$），构成 $L^2(0, L)$ 的完备标准正交基。从而任意 $f \in L^2(0, L)$ 可以表示为

$$f(x) = \sum_{k=1}^\infty a_k u_k(x), \tag{2.69}$$

右端在 $L^2(0, L)$ 意义下收敛。

3. 如果 $f \in C^2([0, L])$ 且满足 Sturm-Liouville 问题的边界条件 (2.68)，则 (2.69) 的右端绝对收敛，且一致收敛到 $f$。

**注 2.5.2** @45

Sturm-Liouville 问题中的常数 $(\alpha_1, \alpha_2, \beta_1, \beta_2)$ 取不同值时，可分别对应三类边界条件：

1. 当 $\alpha_1 = \alpha_2 = 0$ 时，对应 Dirichlet 边界条件 (2.7)。2. 当 $\beta_1 = \beta_2 = 0$ 时，对应 Neumann 边界条件 (2.8)。3. 当 $\alpha_1, \alpha_2, \beta_1, \beta_2$ 都不为零时，对应 Robin 边界条件 (2.9)。

**注 2.5.3** @45

Sturm-Liouville 定理是分离变量法（method of separation of variables）的理论基础，后续我们会介绍这个方法，并用它来求某些偏微分方程的边值问题的解。

我们总结以上一维例子的 Laplace 算子特征值和特征函数的性质：

1. 所有的特征值都是非负的，且为可列的。2. 特征函数列 $\{u_k\}_{k=1}^\infty$ 构成 $L^2(\Omega)$ 的一组完备的标准正交基。

#### 2.5.2 高维情形 @45

实际上，这些性质是 Laplace 算子特征值和特征函数的普遍性质，对一般有界光滑区域 $\Omega \subset \mathbb{R}^n$ 都成立。首先，特征值的非负性可以通过分部积分得到。

**命题 2.5.1** @45

设 $(\lambda, u)$ 是区域 $\Omega$ 上 Laplace 算子的特征对，则

(1) 对于 Dirichlet 和 Neumann 边界条件，

$$\lambda = \frac{\displaystyle\int_\Omega |\nabla u|^2 \mathrm{d}x}{\displaystyle\int_\Omega u^2 \mathrm{d}x} \geqslant 0;$$

并且当且仅当 Neumann 边界条件情形，$\lambda$ 可以取零值。

(2) 对于 Robin 边界条件，

$$\lambda = \frac{\displaystyle\int_\Omega |\nabla u|^2 \mathrm{d}x + \sigma\int_{\partial\Omega} u^2 \mathrm{d}x}{\displaystyle\int_\Omega u^2 \mathrm{d}x} > 0.$$

**定理 2.5.2** @46

进一步，由泛函分析中的紧算子理论和椭圆型方程的估计，可以证明如下结论。区域 $\Omega \subset \mathbb{R}^n$ 上三类边界条件的 Laplace 算子所有特征值是离散集，且按照大小可排列为

$$0 \leqslant \lambda_1 \leqslant \lambda_2 \leqslant \lambda_3 \leqslant \cdots \leqslant \lambda_k \leqslant \cdots \to \infty.$$

其相应的特征函数 $\{u_k\}_{k=1}^\infty$ 满足

(1) $\{u_k\}_{k=1}^\infty$ 构成 $L^2(\Omega)$ 的一组完备的标准正交基；

(2) 特征空间都是有限维的，即对于任一特征值 $\lambda$，$\dim\{u \in L^2(\Omega) : -\Delta u = \lambda u\} < +\infty$。

**注 2.5.4** @46

Laplace 算子的特征值和特征函数的上述性质，在研究高维空间中偏微分方程定解问题（比如，在后续讨论高维热方程和波方程解的初边值问题的适定性时有重要的作用）的适定性时有重要的作用。著名的 Galerkin（伽辽金）方法，就是将偏微分方程在有限维子空间（比如由 Laplace 算子的特征函数所张成的有限维空间）中投影，求得有限维近似解，再结合偏微分方程解的先验估计，通过求极限的方式，得到原偏微分方程的解。

**定义 2.5.3** @46

在 Dirichlet 边界条件下，$\lambda_1$ 称为第一特征值，对应的特征函数称为第一特征函数。

第一特征值可由如下的极小原理刻画：

**定理 2.5.3** @46

在 Dirichlet 边界条件下，

$$\lambda_1 = \inf_{\substack{u \in C^\infty(\overline{\Omega}) \\ u|_{\partial\Omega} = 0,\ u \ne 0}} \frac{\displaystyle\int_\Omega |\nabla u|^2 \mathrm{d}x}{\displaystyle\int_\Omega u^2 \mathrm{d}x}.$$

**定理 2.5.4 (Poincaré 不等式)** @47

极小原理可用来研究 Poincaré（庞加莱）不等式中的最佳常数。首先，我们证明一般区域上的 Poincaré 不等式：对于任意 $u \in C^1(\overline{\Omega})$，$u|_{\partial\Omega} = 0$，成立

$$\int_\Omega |\nabla u|^2 \mathrm{d}x \geqslant \frac{1}{D^2}\int_\Omega u^2 \mathrm{d}x,$$

其中 $D := \sup\limits_{x, y \in \Omega} |x - y|$ 为 $\Omega$ 的直径。

**推论 2.5.1** @47

由定理 2.5.3 和定理 2.5.4，得到如下推论。第一特征值 $\lambda_1$ 为使得 Poincaré 不等式

$$\int_\Omega |\nabla u|^2 \mathrm{d}x \geqslant c\int_\Omega u^2 \mathrm{d}x, \qquad u \in C^1(\overline{\Omega}),\ u|_{\partial\Omega} = 0$$

成立的最佳（最大）常数，并且成立如下估计：

$$\lambda_1 \geqslant \frac{1}{D^2},$$

这里 $D$ 为区域 $\Omega$ 的直径。

下面研究 2 维矩形区域上 Laplace 算子的特征值问题。为了求解该问题，我们介绍一种重要的方法，称为分离变量法。分离变量法的基本思想是，把所要求解的高维函数分解成若干个低维函数的乘积，代入原方程后得到若干常微分方程或维数降低了的偏微分方程，从而求解得到原方程的特解。需要说明的是，这种方法找到的特解全体张成了原有问题的所有解，这就需要用到 Sturm-Liouville 定理关于特征函数全体构成 $L^2$ 空间的一组完备标准正交基的结论。

**例 2.5.3** @48

设矩形区域 $\Omega = (0, a) \times (0, b) \subset \mathbb{R}^2$。假设 $u(x, y) = v(x)w(y)$，且 $v$ 是 $(0, a)$ 上 Dirichlet 边界条件的 Laplace 算子对应于特征值 $\mu$ 的特征函数，$w$ 是 $(0, b)$ 上 Dirichlet 边界条件的 Laplace 算子对应于特征值 $\rho$ 的特征函数，则

$$-\Delta u = -(v''w + vw'') = (\mu + \rho)u.$$

从而 $u$ 是 $\Omega$ 上的特征函数，其相应的特征值为 $(\mu + \rho)$。类似于例 2.5.1，我们容易得到特征对 $(\mu, v)$ 与 $(\rho, w)$，进而得到 $\Omega = (0, a) \times (0, b)$ 上 Laplace 算子的特征对

$$\left( \pi^2\left(\frac{i^2}{a^2} + \frac{j^2}{b^2}\right),\ \sqrt{\frac{4}{ab}}\sin\frac{i\pi}{a}x\,\sin\frac{j\pi}{b}y \right), \qquad i, j \in \mathbb{N}_+. \tag{2.70}$$

由于

$$\left\{ \sqrt{\frac{4}{ab}}\sin\frac{i\pi}{a}x\,\sin\frac{j\pi}{b}y \right\}_{i, j \in \mathbb{N}_+}$$

构成 $L^2((0, a) \times (0, b))$ 的一组完备标准正交基，故 (2.70) 给出了所有的特征函数及特征值。

**例 2.5.4** @48

下面我们研究平面中单位圆盘上 Laplace 算子的特征值与特征函数。在单位圆盘 $B_1 \subset \mathbb{R}^2$ 上求解带 Dirichlet 边界条件的 Laplace 算子的特征值。令 $(r, \theta)$ 是平面的极坐标，则

$$\Delta u = \frac{\partial^2}{\partial r^2}u + \frac{1}{r}\frac{\partial}{\partial r}u + \frac{1}{r^2}\frac{\partial^2}{\partial\theta^2}u.$$

构造形如 $u(r, \theta) = v(r)w(\theta)$ 的解，其中 $w$ 是以 $2\pi$ 为周期的周期函数。从而特征方程 $-\Delta u = \lambda u$ 化为

$$\begin{cases}v'' + \dfrac{1}{r}v' + \left(\lambda - \dfrac{k}{r^2}\right)v = 0, \\w'' + kw = 0.\end{cases} \tag{2.71}$$

注意到边界条件 $u|_{\partial B_1} = 0$ 和 $u$ 的连续性，得到 $v(1) = 0$ 且 $v(0)$ 有界。由 (2.71) 的第二个方程以及 $w$ 的周期性，得到 $k = n^2$，$n \in \mathbb{N}$，且相应的解为

$$w =\begin{cases}\dfrac{1}{\sqrt{2\pi}}, & k = 0, \\\dfrac{1}{\sqrt{\pi}}\cos n\theta,\ \dfrac{1}{\sqrt{\pi}}\sin n\theta, & k = n^2,\ n \geqslant 1.\end{cases}$$

代入第一个方程，得到

$$v'' + \frac{1}{r}v' + \left(\lambda - \frac{n^2}{r^2}\right)v = 0,$$

作变换 $\tau = \sqrt{\lambda}r$，$v(r) = f(\sqrt{\lambda}r)$，我们得到

$$f'' + \frac{1}{\tau}f' + \left(1 - \frac{n^2}{\tau^2}\right)f = 0,$$

这是 $n$ 阶 Bessel（贝塞尔）方程。该方程有两个线性无关的解，由于 $f(0)$ 有界（因为 $v(0)$ 有界），其中的一个解有意义（另一个解在零点有奇性）。有意义的解（差一个常数因子）称为第一类 $n$ 阶 Bessel 函数，记为 $J_n(r)$。则原方程的解为 $v(r) = CJ_n(\sqrt{\lambda}r)$。第一类 $n$ 阶 Bessel 函数 $J_n(r)$ 是振荡函数，图像如图 2.8 所示。它有无穷多个正零点，记 $j_{n,l}$ 为第 $l$ 个正零点，$l \geqslant 1$。由边界条件 $v(1) = 0$，$v(1) = CJ_n(\sqrt{\lambda}) = 0$，故 $\lambda = j_{n,l}^2$。

1. $k = 0$。这时 $w$ 是常数，则 $u(r, \theta) = Cv(r)$ 是径向函数。对于 $l \geqslant 1$，得到特征值 $j_{0,l}^2$，其对应的特征函数为 $u(r) = CJ_0(j_{0,l}r)$。这些特征值是单的，且特征函数都是径向的。其中 $\lambda_1(B_1) = j_{0,1}^2 \approx 5.7831$。

2. $k = n^2 \geqslant 1$。对于 $l \geqslant 1$，特征值 $j_{n,l}^2$ 对应的特征空间由以下函数张成，

$$CJ_n(j_{n,l}r)\cos n\theta, \qquad CJ_n(j_{n,l}r)\sin n\theta.$$

对于给定的正整数 $n$，考虑带权的 $L^2$ 空间 $L^2((0, 1), r\,\mathrm{d}r)$，可以证明 $\{J_n(j_{n,l}r)\}_{l \in \mathbb{N}_+}$ 构成它的一组完备标准正交基。另外，三角函数系

$$\left\{ \frac{1}{\sqrt{2\pi}} \right\} \cup \left\{ \frac{1}{\sqrt{\pi}}\cos n\theta,\ \frac{1}{\sqrt{\pi}}\sin n\theta \right\}_{n \in \mathbb{N}_+}$$

构成 $L^2(0, 2\pi)$ 的一组完备标准正交基。由于任意可积函数 $g$，

$$\int_{B_1} g(x)\mathrm{d}x = \int g(r\cos\theta, r\sin\theta)\, r\,\mathrm{d}r\,\mathrm{d}\theta,$$

$$\frac{1}{\sqrt{2\pi}}J_0(j_{0,l}r),\quad \frac{1}{\sqrt{\pi}}J_n(j_{n,l}r)\cos n\theta,\quad \frac{1}{\sqrt{\pi}}J_n(j_{n,l}r)\sin n\theta \qquad (n \geqslant 1,\ l \geqslant 1)$$

构成 $L^2(B_1, \mathrm{d}x)$ 的完备标准正交基。从而，我们得到了 $B_1$ 上所有的特征值和对应的特征函数。

### 2.6 一般的椭圆型方程（p51–52）

**定理 2.6.1 (弱极值原理)** @51

设 $u \in C^2(\Omega) \cap C(\overline{\Omega})$ 满足 (2.72)，$c(x) \leqslant 0$，$f(x) \geqslant 0$，$\forall x \in \Omega$，则 $u$ 的非负极大值在边界上达到，即

$$\sup_{\Omega} u \leqslant \sup_{\partial\Omega} u^+,$$

其中 $u^+ = \max\{u, 0\}$。

**注 2.6.1** @51

定理 2.6.1 对应调和方程定理 2.3.1 的结论。特别地，若 $c(x) \equiv 0$，定理 (2.6.1) 中的“非负极大值”可以换为“极大值”。

**定理 2.6.2 (Hopf 极值原理)** @51

设 $u \in C^2(\Omega) \cap C(\overline{\Omega})$ 满足 (2.72)，$c(x) \leqslant 0$，$f(x) \geqslant 0$，$\forall x \in \Omega$。设 $x_0 \in \partial\Omega$ 使得

(1) $u(x_0) \geqslant 0$；

(2) $u(x_0) > u(x)$，$\forall x \in \Omega$；

(3) $\Omega$ 在 $x_0$ 处满足内球条件，即存在包含于 $\Omega$ 的球 $B$，使得 $x_0 \in \partial B$。

设 $\boldsymbol{n}$ 为 $x_0$ 处的外法向量，则

$$\liminf_{t \to 0^+} \frac{u(x_0) - u(x_0 - t\boldsymbol{\nu})}{t} > 0 \tag{2.74}$$

对任意 $\boldsymbol{\nu} \cdot \boldsymbol{n} > 0$ 成立。

**注 2.6.2** @52

定理 2.6.2 对应调和方程定理 2.3.2 的结论。特别地，若 $c(x) \equiv 0$，则条件 $u(x_0) \geqslant 0$ 可以去掉。

**注 2.6.3** @52

定理 2.6.1 和定理 2.6.2 均可通过构造合适的闸函数，类似调和方程定理 2.3.1 和定理 2.3.2 的方式加以证明。

事实上，利用定理 2.6.2，可以证明如下的强极值原理。

**定理 2.6.3 (强极值原理)** @52

设 $u \in C^2(\Omega) \cap C(\overline{\Omega})$ 满足 (2.72)，$c(x) \leqslant 0$，$f(x) \geqslant 0$，$\forall x \in \Omega$。若 $u$ 在 $\Omega$ 内取到非负极大值，则 $u$ 必为常数。

**注 2.6.4** @52

对于调和方程的情形，可利用调和函数的平均值性质给出强极值原理的证明，但对于一般的椭圆型方程，解不一定满足平均值性质，需采用别的方法来证明。

在系数满足光滑性条件的时候，一般椭圆型方程的梯度估计和 Harnack 不等式依然成立。若要得到形如定理 1.2.4 的梯度估计，一般要对系数加额外的结构性条件（对应于流形上的曲率有下界的条件），这里就不具体展开了。对如 (2.72) 的非散度型的椭圆型方程，要得到类似于调和方程的 Harnack 不等式，可以采用 Krylov-Safonov（克雷洛夫–萨弗诺夫）估计技巧。而对于如下散度型的椭圆型方程

$$\sum_{i,j=1}^{n} \partial_{x_i}\left(a_{ij}\partial_{x_j}u\right) + \sum_{i=1}^{n} b_i \partial_{x_i}u + cu = f(x), \qquad x \in \Omega, \tag{2.75}$$

要得到类似于调和方程的 Harnack 不等式，采用的是 De Giorgi-Nash-Moser（德乔吉–纳什–莫泽）迭代技巧。通过建立梯度估计或者 Harnack 不等式，可以对适当条件下的一般椭圆型方程给出全空间有界函数的 Liouville 型定理。

显然，散度型的椭圆型方程 (2.75) 与非散度型的椭圆型方程 (2.72) 可以根据需要，互相转化。

对一般的椭圆型方程，也可以定义 Green 函数，并且 Green 函数 $G(x, y)$ 在 $x = y$ 附近的奇异性和基本解 $\Gamma(x, y)$ 的奇异性是一致的。如果系数具有解析性，(2.72) 的解也是解析的，从而唯一延拓性成立。一般来说，(2.72) 解的唯一延拓性可以在系数满足 Lipschitz 条件下得到，并不需要用到系数的解析性这么强的性质。

## 第3章 热方程

### 3.1 方程的物理背景和定解问题（p54–56）

**构造 (热方程)** @54

设光滑函数 $u(t,x)$ 表示物体内 $t$ 时刻 $x$ 位置处的温度。假设物体是均匀的、各向同性的，其密度 $\rho$、比热容 $c$ 均为正常数。考察小区域 $V$ 内热量的变化，对任意 $t_2>t_1$，其热量的增量为

$$\int_V \rho c u(t_2,x)\,\mathrm{d}x-\int_V \rho c u(t_1,x)\,\mathrm{d}x=\int_{t_1}^{t_2}\int_V \rho c\,\partial_t u(t,x)\,\mathrm{d}x\,\mathrm{d}t .$$

若不考虑内部热源，上述增量与边界 $\partial V$ 上流入的热量

$$-\int_{t_1}^{t_2}\int_{\partial V} \boldsymbol{q}\cdot\boldsymbol{n}\,\mathrm{d}S$$

相等，其中 $\boldsymbol{n}$ 是 $\partial V$ 的外法向量，$\boldsymbol{q}$ 是热量传导的流向。根据 Fourier 实验定律：热量沿着其变化最大的方向（即梯度方向）由高向低流动，且

$$\boldsymbol{q}=-k\nabla u,\qquad k>0 .$$

利用 Gauss-Green 公式得

$$\int_{t_1}^{t_2}\int_V \rho c\,\partial_t u(t,x)\,\mathrm{d}x\,\mathrm{d}t=\int_{t_1}^{t_2}\int_V k\Delta u\,\mathrm{d}x\,\mathrm{d}t .$$

由 $t_1,t_2$ 和区域 $V$ 的任意性，得到热方程

$$\partial_t u-a^2\Delta u=0, \tag{3.1}$$

其中 $a=\sqrt{\dfrac{k}{\rho c}}>0$。

**构造 (非齐次热方程)** @55

若系统内部具有热源，即在 $t$ 时刻 $x$ 位置处单位体积上产生热量 $F(t,x)$，则得到非齐次热方程

$$\partial_t u-a^2\Delta u=f(t,x), \tag{3.2}$$

其中 $f(t,x)=\dfrac{F(t,x)}{\rho c}$。

为叙述方便，考察热方程 (3.1) 或 (3.2) 时总不妨假设 $a=1$：否则作时间变量代换 $\bar t=a^2t$，在 $(\bar t,x)$ 坐标下可化为 $a=1$ 情形下的热方程。

**定义 (Cauchy 问题)** @55

给定初值条件

$$u\big|_{t=0}=\varphi, \tag{3.3}$$

在全空间上考虑热方程 (3.1) 或 (3.2) 的定解问题，就是热方程的 Cauchy 问题。

**定义 (边界条件)** @55

若在有界区域 $\Omega\subset\mathbb{R}^n$ 上研究 (3.1)，需要在边界 $\partial\Omega$ 上给定合适的条件。

若在 $\partial\Omega$ 上每个点 $x\in\partial\Omega$ 都给定温度 $g(t,x)$，则得到第一类边界条件（Dirichlet 边界条件）

$$u\big|_{\partial\Omega}=g. \tag{3.4}$$

特别地，若 $g$ 是常数，(3.4) 指边界上温度保持不变，则称为恒温条件。

若知道传导出边界的热量 $\boldsymbol{q}\cdot\boldsymbol{n}$，则可再次利用 Fourier 定律得到第二类边界条件（Neumann 边界条件）

$$\left.\frac{\partial u}{\partial\boldsymbol{n}}\right|_{\partial\Omega}=g. \tag{3.5}$$

特别地，$\left.\dfrac{\partial u}{\partial\boldsymbol{n}}\right|_{\partial\Omega}=0$ 是指热量既不流出也不流入 $\partial\Omega$，称为绝热条件。

若所讨论的物体在边界上接触温度为 $u_*$ 的另一种物体，由于热量的流量一般与温度差成正比，即

$$\left.\frac{\partial u}{\partial\boldsymbol{n}}\right|_{\partial\Omega}=\sigma(u_*-u),$$

此即第三类边界条件（Robin 边界条件）

$$\left.\left(\frac{\partial u}{\partial\boldsymbol{n}}+\sigma u\right)\right|_{\partial\Omega}=g, \tag{3.6}$$

其中 $\sigma>0$ 表示若外界物体温度较高，则热量由外向内流入。

**定义 (初边值问题)** @55

在 (3.4)、(3.5)、(3.6) 中的一个边界条件以及初值条件 (3.3) 下考虑方程 (3.1) 或 (3.2) 的定解问题，就是热方程的初边值问题。

**例 3.1.1** @55

在 $t>0$ 时，考虑满足一维热方程 $\partial_t u-\partial_x^2u=0$ 的解，直接计算易得

$$u(t,x)=\frac{1}{2\sqrt{\pi t}}\,\mathrm{e}^{-\frac{|x|^2}{4t}}. \tag{3.7}$$

在 $t>0$ 时这是一个光滑的 Gauss 函数（以 $0$ 为均值、$2t$ 为方差的 Gauss 分布（正态分布）的密度函数），而在 $t\to0^+$ 时它具有奇性；在适当的（广义函数）意义下可以说明此极限是 Dirac 函数。(3.7) 实际上就是一维热方程的基本解。

**例 3.1.2** @56

对任意的 $A,B,C\in\mathbb{R}$，$B>0$，函数

$$u(t,x)=\frac{A}{2\sqrt{\pi(t+B)}}\,\mathrm{e}^{-\frac{x^2}{4(t+B)}}+C \tag{3.8}$$

是一维热方程 $\partial_t u-\partial_x^2u=0$ 的一个特解，它的初值为

$$u(0,x)=\frac{A}{2\sqrt{\pi B}}\,\mathrm{e}^{-\frac{x^2}{4B}}+C .$$

当 $A>0$ 时，

$$\max_{x\in\mathbb{R}}u(t,x)=\frac{A}{2\sqrt{\pi(t+B)}}+C<\max_{x\in\mathbb{R}}u(0,x)=\frac{A}{2\sqrt{\pi B}}+C,$$

$$\inf_{x\in\mathbb{R}}u(t,x)=C=\inf_{x\in\mathbb{R}}u(0,x).$$

$A<0$ 也可类似讨论。由此注意到这一特解的极值总在初值取到。

当 $C=0$ 时，初值 $u(0,x)$ 是 $\mathbb{R}$ 上的可积函数，

$$\int_{\mathbb{R}}u(0,x)\,\mathrm{d}x=A . \tag{3.9}$$

此时解 $u(t,x)$ 关于空间变量的 $L^\infty$ 范数

$$\|u(t,\cdot)\|_{L^\infty(\mathbb{R})}=\frac{|A|}{2\sqrt{\pi(t+B)}}$$

不仅有界，而且随着 $t\to+\infty$ 以 $t^{-\frac12}$ 的速度衰减。

**例 3.1.3** @56

考虑一维热方程的初边值问题

$$\begin{cases}\partial_t u=\partial_x^2u, & (t,x)\in(0,+\infty)\times(0,\pi),\\u(0,x)=\sin kx, & x\in(0,\pi),\\u(t,0)=u(t,\pi)=0, & t\in(0,+\infty),\end{cases} \tag{3.10}$$

其中 $k\in\mathbb{Z}$。易见

$$u(t,x)=\mathrm{e}^{-k^2t}\sin kx$$

是该定解问题的解。当 $k\ne0$ 时，由于 $k^2$ 是正整数，它的 $L^\infty$ 范数关于 $t\to+\infty$ 是指数衰减的，

$$\|u(t,\cdot)\|_{L^\infty(0,\pi)}\leqslant \mathrm{e}^{-k^2t}\|u(0,\cdot)\|_{L^\infty(0,\pi)} .$$

### 3.2 分离变量法和初边值问题解的存在性（p57–64）

**构造 (分离变量法)** @57

分离变量法的第一步是寻找形如

$$u(t,x)=T(t)X(x)$$

的非零特解。代入方程得

$$T'(t)X(x)-T(t)X''(x)=0 .$$

当 $T(t)X(x)\ne0$ 时，

$$\frac{T'(t)}{T(t)}=\frac{X''(x)}{X(x)} .$$

等式左边仅是 $t$ 的函数，右边仅是 $x$ 的函数，两者相等当且仅当两边均为常数，即存在常数 $-\lambda\in\mathbb{R}$ 使得

$$\frac{T'(t)}{T(t)}=-\lambda=\frac{X''(x)}{X(x)} .$$

当 $\lambda=0$ 时，$X(x)=C_0+C_1x$，考虑到边界条件，此时没有非零解 $X(x)$；当 $\lambda<0$ 时，类似可得也没有非零解 $X(x)$；当 $\lambda>0$ 时，$T(t)=T_0\mathrm{e}^{-\lambda t}$，$X(x)=C_1\sin\sqrt{\lambda}x+C_2\cos\sqrt{\lambda}x$。考虑到边界条件，可得非平凡且满足 (3.11) 中边界条件的特解为

$$u_k(t,x)=C_k\mathrm{e}^{-\lambda_kt}\sin\sqrt{\lambda_k}x,\qquad \lambda_k=\left(\frac{k\pi}{L}\right)^2,\quad k\in\mathbb{N}_+ .$$

**构造 (形式解)** @58

利用方程和边界条件的线性性质，对 $a_k\in\mathbb{R}$，这组特解的有限项线性组合

$$u(t,x)=\sum_{k=1}^{K}a_k\mathrm{e}^{-\lambda_kt}\sin\sqrt{\lambda_k}x$$

也是初边值问题 (3.11) 满足边界条件的特解，其对应的初值为

$$u(0,x)=\sum_{k=1}^{K}a_k\sin\frac{k\pi x}{L} .$$

为求解 (3.11)，需选取适当的系数 $a_k$ 使得 $u(0,x)=\varphi(x)$。将 $\varphi(x)$ 展开为 Fourier 级数

$$\varphi(x)=\sum_{k=1}^{\infty}\varphi_k\sin\frac{k\pi x}{L}, \tag{3.12}$$

其中 $\varphi_k$ 由下式给出：

$$\varphi_k=\frac{2}{L}\int_0^L\varphi(x)\sin\frac{k\pi x}{L}\,\mathrm{d}x . \tag{3.13}$$

由定理 2.5.1，当 $\varphi\in C^2(\bar I)$ 时，级数 (3.12) 是一致收敛的。因此，若级数

$$u(t,x)=\sum_{k=1}^{\infty}a_k\mathrm{e}^{-\lambda_kt}\sin\sqrt{\lambda_k}x \tag{3.14}$$

在 $(0,+\infty)\times(0,L)$ 上 $C^2$ 内闭一致收敛，且 $\lim\limits_{t\to0}u(t,x)=\varphi(x)$，$x\in I$，则它给出了定解问题 (3.11) 的一个解。

**命题 3.2.1** @59

在 (3.14) 中令 $a_k=\varphi_k$，$k\geqslant1$。当 $\varphi\in C^0([0,L])$ 时，(3.14) 及其导数在 $(0,+\infty)\times[0,L]$ 上内闭一致收敛。

**命题 3.2.2** @59

在 (3.14) 中令 $a_k=\varphi_k$，$k\geqslant1$。若 $\varphi\in C^0([0,L])$，则

$$\lim_{t\to0^+}\|u(t,\cdot)-\varphi\|_{L^2(0,L)}=0 .$$

**命题 3.2.3** @60

在 (3.14) 中令 $a_k=\varphi_k$，$k\geqslant1$。若 $\varphi\in C^1([0,L])$ 满足 $C^0$ 相容性条件 $\varphi(0)=\varphi(L)=0$，则

$$\lim_{t\to0^+}\|u(t,\cdot)-\varphi\|_{C^0([0,L])}=0 .$$

**注 (经典解的正则性条件)** @60

若进一步有 $\varphi\in C^3([0,L])$ 且满足 $C^2$ 相容性条件

$$\varphi(0)=\varphi(L)=0,\qquad \varphi''(0)=\varphi''(L)=0,$$

则可以证明形式解 (3.14) 为原问题的经典解，即 $u\in C_t^1C_x^2$ 在 $[0,+\infty)\times[0,L]$ 上逐点满足方程和初边值条件。

**构造 (高维区域上的形式解)** @61

设 $\Omega\subset\mathbb{R}^n$ 是有界区域，$\partial\Omega$ 是 $C^2$ 光滑的，考虑热方程的初边值问题

$$\begin{cases}\partial_t u-\Delta u=0, & (t,x)\in(0,+\infty)\times\Omega,\\u(0,x)=\varphi(x), & x\in\Omega,\\u(t,x)=0, & (t,x)\in(0,+\infty)\times\partial\Omega,\end{cases} \tag{3.15}$$

其中 $\varphi\in C^2(\Omega)\cap C^1(\bar\Omega)$ 满足相容性条件 $\varphi|_{\partial\Omega}=0$。

若 $(\lambda_k,u_k)$ 是 $\Omega$ 上具有 Dirichlet 边界条件的 $-\Delta$ 算子的特征对，取 $u_k$ 为初边值问题的特殊初值。特征函数 $u_k$ 满足

$$\begin{cases}-\Delta u_k=\lambda_ku_k,\\u_k|_{\partial\Omega}=0,\\\displaystyle\int_\Omega u_k^2(x)\,\mathrm{d}x=1 .\end{cases}$$

因此，以 $u_k$ 为初值的齐次 Dirichlet 初边值问题的解具有变量分离形式 $\mathrm{e}^{-\lambda_kt}u_k(x)$。

由于

$$\varphi(x)=\sum_{k=1}^{\infty}\varphi_ku_k(x),$$

其中 $\varphi_k=\displaystyle\int_\Omega\varphi(x)u_k(x)\,\mathrm{d}x$，可知

$$u(t,x)=\sum_{k=1}^{\infty}\varphi_k\mathrm{e}^{-\lambda_kt}u_k(x)$$

就是初边值问题 (3.15) 的形式解（由椭圆型方程理论关于特征函数的估计，上述级数一致收敛，故 $u$ 就是热方程的解）。

**构造 (齐次化原理（Duhamel 原理）)** @62

考虑区域内部有热源的非齐次方程的初边值问题

$$\begin{cases}\partial_t u-\Delta u=f(t,x), & (t,x)\in(0,+\infty)\times\Omega,\\u(0,x)=\varphi(x), & x\in\Omega,\\u(t,x)=0, & (t,x)\in(0,+\infty)\times\partial\Omega .\end{cases} \tag{3.16}$$

考察一维情形，先分析具零初边值的如下非齐次热方程定解问题：

$$\begin{cases}\partial_t u-\partial_x^2u=f(t,x), & (t,x)\in(0,+\infty)\times I,\\u(0,x)=0, & x\in I,\\u(t,0)=u(t,L)=0, & t\in(0,+\infty).\end{cases} \tag{3.17}$$

记 $w=w(t,x;\tau)$ 是一组以参数 $\tau>0$ 为初始时刻、以 $f(\tau,x)$ 为相应初值的齐次热方程的初边值问题

$$\begin{cases}\partial_t w-\partial_x^2w=0, & (t,x)\in(\tau,+\infty)\times I,\\w(\tau,x;\tau)=f(\tau,x), & x\in I,\\w(t,0;\tau)=w(t,L;\tau)=0, & t\in(\tau,+\infty)\end{cases} \tag{3.18}$$

的解。由 (3.15) 的求解过程，要求 $f(t,x)\in C_tC_x^2([0,+\infty)\times\bar I)$ 且满足相容性条件

$$f(t,0)=f(t,L)=0 .$$

由 (3.14)，

$$w(t,x;\tau)=\sum_{k=1}^{\infty}f_k(\tau)\mathrm{e}^{-\lambda_k(t-\tau)}\sin\sqrt{\lambda_k}x,$$

其中

$$f_k(\tau)=\frac{2}{L}\int_0^Lf(\tau,x)\sin\frac{k\pi x}{L}\,\mathrm{d}x,\qquad \lambda_k=\left(\frac{k\pi}{L}\right)^2 .$$

则 (3.17) 的解可写为

$$u(t,x)=\int_0^tw(t,x;\tau)\,\mathrm{d}\tau=\int_0^t\sum_{k=1}^{\infty}f_k(\tau)\mathrm{e}^{-\lambda_k(t-\tau)}\sin\sqrt{\lambda_k}x\,\mathrm{d}\tau . \tag{3.19}$$

**构造 (非齐次初边值问题的解)** @63

对非零初值问题

$$\begin{cases}\partial_t u-\partial_x^2u=f(t,x), & (t,x)\in(0,+\infty)\times I,\\u(0,x)=\varphi(x), & x\in I,\\u(t,0)=u(t,L)=0, & t\in(0,+\infty),\end{cases} \tag{3.20}$$

利用方程的线性性质，将齐次方程具一般初值问题的解与非齐次方程具零初值问题对应的解叠加，即得到 (3.20) 的解：

$$u(t,x)=\sum_{k=1}^{\infty}\varphi_k\mathrm{e}^{-\lambda_kt}\sin\sqrt{\lambda_k}x+\int_0^t\sum_{k=1}^{\infty}f_k(\tau)\mathrm{e}^{-\lambda_k(t-\tau)}\sin\sqrt{\lambda_k}x\,\mathrm{d}\tau,$$

其中

$$\lambda_k=\left(\frac{k\pi}{L}\right)^2,\qquad\varphi_k=\frac{2}{L}\int_0^L\varphi(x)\sin\frac{k\pi x}{L}\,\mathrm{d}x,\qquadf_k(\tau)=\frac{2}{L}\int_0^Lf(\tau,x)\sin\frac{k\pi x}{L}\,\mathrm{d}x .$$

**注 (齐次化原理的微元解释)** @63

从微元法的角度解释齐次化原理的过程：把时间区间 $[0,t]$ 分成若干段

$$0=\tau_0<\tau_1<\tau_2<\cdots<\tau_N=t,$$

在时间区间 $[\tau_k,\tau_{k+1}]$ 上把热源 $f(t,x)$ 的持续影响近似地看作系统在 $\tau_k$ 时刻受热 $f(\tau_k,x)\Delta\tau_k$（$\Delta\tau_k=\tau_{k+1}-\tau_k$）。若只考虑在 $\tau_k$ 时刻以 $f(\tau_k,x)\Delta\tau_k$ 为初值的热方程，得到相应的解 $w(t,x;\tau_k)\Delta\tau_k$，由方程的线性性质，把各时段的解叠加可得

$$\sum_{k=0}^{N-1}w(t,x;\tau_k)\Delta\tau_k$$

是近似解。令 $\max\limits_{k=0,1,\cdots,N-1}\Delta\tau_k\to0$，即得极限 $\displaystyle\int_0^tw(t,x;\tau)\,\mathrm{d}\tau$。从而 (3.19) 是问题 (3.17) 的解。（对于高维情形，热方程的 Duhamel 原理也成立。）

### 3.3 Fourier 变换和 Cauchy 问题解的存在性（p65–73）

#### 3.3.1 Fourier 变换及其性质 @65

在全空间 $\mathbb{R}^n$ 上没有 Fourier 级数，但可以利用与它性质密切相关的 Fourier 变换。

**定义 (速降函数与 Schwartz 空间)** @65

若函数 $\varphi(x)\in C^\infty(\mathbb{R}^n)$ 满足

$$\lim_{|x|\to\infty}(1+|x|^l)|\partial_x^\alpha\varphi(x)|=0,\qquad \forall l\in\mathbb{N},\ \forall\alpha=(\alpha_1,\alpha_2,\cdots,\alpha_n)\in\mathbb{N}^n,$$

其中 $\partial_x^\alpha=\partial_{x_1}^{\alpha_1}\partial_{x_2}^{\alpha_2}\cdots\partial_{x_n}^{\alpha_n}$，则称 $\varphi(x)$ 为速降函数。速降函数的全体组成的线性空间称为 Schwartz（施瓦茨）空间，记为 $\mathcal{S}(\mathbb{R}^n)$。

设 $\varphi_k,\varphi\in\mathcal{S}(\mathbb{R}^n)$，称 $\{\varphi_k\}$ 在 $\mathcal{S}(\mathbb{R}^n)$ 中收敛到 $\varphi$ 当且仅当对任意的 $l\in\mathbb{N}$ 及任意的多重指标 $\alpha$，成立

$$\lim_{k\to+\infty}\sup_{x\in\mathbb{R}^n}(1+|x|^l)|\partial_x^\alpha(\varphi_k-\varphi)(x)|=0,$$

记为 $\varphi_k\xrightarrow{\mathcal{S}(\mathbb{R}^n)}\varphi$。

**例 3.3.1** @65

由速降函数的定义易知具有紧支集的 $C^\infty$ 函数空间 $C_0^\infty(\mathbb{R}^n)\subset\mathcal{S}(\mathbb{R}^n)$，且 $\mathrm{e}^{-|x|^2}\in\mathcal{S}(\mathbb{R}^n)$。

**定义 (Fourier 变换与逆变换)** @65

若 $f\in\mathcal{S}(\mathbb{R}_x^n)$，$g\in\mathcal{S}(\mathbb{R}_\xi^n)$，定义 Fourier 变换

$$F[f](\xi)=\int_{\mathbb{R}^n}f(x)\mathrm{e}^{-\mathrm{i}\xi\cdot x}\,\mathrm{d}x,$$

以及 Fourier 逆变换

$$F^{-1}[g](x)=\frac{1}{(2\pi)^n}\int_{\mathbb{R}^n}g(\xi)\mathrm{e}^{\mathrm{i}\xi\cdot x}\,\mathrm{d}\xi .$$

**命题 3.3.1** @66

对任意的 $f_1,f_2\in\mathcal{S}(\mathbb{R}^n)$ 及 $a,b\in\mathbb{C}$，有

$$F[af_1+bf_2]=aF[f_1]+bF[f_2].$$

**命题 3.3.2** @66

若 $f\in\mathcal{S}(\mathbb{R}^n)$，则

$$F[\partial_x^\alpha f](\xi)=(\mathrm{i}\xi)^\alpha F[f](\xi),$$

其中 $\alpha=(\alpha_1,\alpha_2,\cdots,\alpha_n)$ 为多重指标，$|\alpha|=\alpha_1+\alpha_2+\cdots+\alpha_n$，$\xi^\alpha=\xi_1^{\alpha_1}\xi_2^{\alpha_2}\cdots\xi_n^{\alpha_n}$。

**命题 3.3.3** @66

若 $f(x)\in\mathcal{S}(\mathbb{R}^n)$，则

$$F[x^\alpha f(x)](\xi)=\mathrm{i}^{|\alpha|}\partial_\xi^\alpha(F[f](\xi)).$$

**推论 3.3.1** @66

Fourier 变换和 Fourier 逆变换是 $\mathcal{S}(\mathbb{R}^n)$ 到 $\mathcal{S}(\mathbb{R}^n)$ 的同构。

进一步地，$\mathcal{S}(\mathbb{R}^n)$ 上 $F^{-1}\circ F=I$，且当 $\varphi_k\xrightarrow{\mathcal{S}(\mathbb{R}^n)}\varphi$ 时，$F[\varphi_k]\xrightarrow{\mathcal{S}(\mathbb{R}^n)}F[\varphi]$。因此 Fourier 变换是从 $\mathcal{S}(\mathbb{R}^n)$ 到 $\mathcal{S}(\mathbb{R}^n)$ 的拓扑同构。

**定义 (卷积)** @67

对 $f_1,f_2\in\mathcal{S}(\mathbb{R}^n)$，称

$$f(x)=\int_{\mathbb{R}^n}f_1(x-y)f_2(y)\,\mathrm{d}y=\int_{\mathbb{R}^n}f_1(y)f_2(x-y)\,\mathrm{d}y$$

为 $f_1$ 与 $f_2$ 的卷积，记为 $f_1*f_2$。

**命题 3.3.4** @67

若 $f_1,f_2\in\mathcal{S}(\mathbb{R}^n)$，则

$$F[f_1*f_2]=F[f_1]\cdot F[f_2],$$

$$F^{-1}[f_1f_2]=F^{-1}[f_1]*F^{-1}[f_2].$$

**命题 3.3.5 (Plancherel（普朗谢雷尔）等式)** @67

若 $f,g\in\mathcal{S}(\mathbb{R}^n)$，则

$$\int_{\mathbb{R}^n}f\bar g\,\mathrm{d}x=\frac{1}{(2\pi)^n}\int_{\mathbb{R}^n}F[f]\overline{F[g]}\,\mathrm{d}\xi .$$

**注 ($L^1$ 与 $L^2$ 上的 Fourier 变换)** @68

由于 $\mathcal{S}(\mathbb{R}^n)$ 在 $L^1(\mathbb{R}^n)$ 和 $L^2(\mathbb{R}^n)$ 中的稠密性，Fourier 变换可以自然地在 $L^1(\mathbb{R}^n)$ 及 $L^2(\mathbb{R}^n)$ 上定义。进一步地，由对偶空间的方法，可以在更大的一类空间（如 $\mathcal{S}(\mathbb{R}^n)$ 的对偶空间 $\mathcal{S}'(\mathbb{R}^n)$ 甚至 $C_c^\infty(\mathbb{R}^n)$ 的对偶空间 $\mathcal{D}'(\mathbb{R}^n)$）中定义 Fourier 变换，且其基本性质仍然成立。

#### 3.3.2 Cauchy 问题解的存在性 @68

**构造 (Cauchy 问题解的形式表达式)** @68

考虑 $n$ 维热方程的 Cauchy 问题

$$\begin{cases}\partial_t u=\Delta_xu, & (t,x)\in(0,+\infty)\times\mathbb{R}^n,\\u(0,x)=\varphi(x), & x\in\mathbb{R}^n .\end{cases} \tag{3.21}$$

假设初值 $\varphi(x)$ 以及对固定 $t$，$u(t,x)$ 均属于速降函数空间，则可以在方程和初值两侧关于 $x$ 进行 Fourier 变换。记

$$\hat u(t,\xi)=F[u(t,\cdot)](\xi),\qquad \hat\varphi(\xi)=F[\varphi](\xi).$$

由命题 3.3.2 得

$$\begin{cases}\dfrac{\mathrm{d}}{\mathrm{d}t}\hat u(t,\xi)=-|\xi|^2\hat u(t,\xi),\\\hat u(0,\xi)=\hat\varphi(\xi).\end{cases}$$

Fourier 变换将原线性偏微分方程问题转化成了线性常微分方程问题，其解为

$$\hat u(t,\xi)=\mathrm{e}^{-|\xi|^2t}\hat\varphi(\xi).$$

对上式两边取 Fourier 逆变换，利用命题 3.3.4 及命题 3.3.5 得

$$\begin{aligned}u(t,x)&=F^{-1}[\hat u(t,\cdot)](x)\\&=F^{-1}[\mathrm{e}^{-|\xi|^2t}](x)*\varphi .\end{aligned} \tag{3.22}$$

**构造 (热核函数与基本解)** @69

由 Fourier 逆变换的定义与复变函数的围道积分理论可得

$$F^{-1}[\mathrm{e}^{-|\xi|^2t}](x)=\frac{1}{(4\pi t)^{\frac n2}}\mathrm{e}^{-\frac{|x|^2}{4t}} . \tag{3.23}$$

通常记

$$H(t,x)=\frac{1}{(4\pi t)^{\frac n2}}\mathrm{e}^{-\frac{|x|^2}{4t}},\qquad t>0,\ x\in\mathbb{R}^n, \tag{3.24}$$

并称之为热核函数。这样，就形式地得到了 Cauchy 问题 (3.21) 的解

$$\begin{aligned}u(t,x)&=[H(t,\cdot)*\varphi](x)\\&=\frac{1}{(4\pi t)^{\frac n2}}\int_{\mathbb{R}^n}\mathrm{e}^{-\frac{|x-y|^2}{4t}}\varphi(y)\,\mathrm{d}y .\end{aligned} \tag{3.25}$$

$H(t,x)$ 给出了求解方程和分析解的性质的极大便利，称为 $n$ 维热方程 Cauchy 问题 (3.21) 的基本解，也称热核函数；热核函数在 $t\to0^+$ 时作为一组卷积核收敛于 Dirac 函数 $\delta(x)$。

**定理 3.3.1** @69

设 $\varphi$ 是 $\mathbb{R}^n$ 上的有界连续函数，则 (3.25) 式给出了 $n$ 维热方程 Cauchy 问题 (3.21) 的解。

**定义 3.3.1** @71

令 $1\leqslant p\leqslant+\infty$，$\varphi\in L^p(\mathbb{R}^n)$。记

$$P_t\varphi(x)=H(t,x)*\varphi,\qquad \forall t>0,\ x\in\mathbb{R}^n .$$

**定理 3.3.2** @71

令 $1\leqslant p\leqslant+\infty$。对于 $\varphi\in L^p(\mathbb{R}^n)$，有

(1) $u=P_t\varphi$ 满足方程 $\partial_tu=\Delta u$；

(2) 对任意 $t>0$，有 $\|P_t\varphi\|_{L^p(\mathbb{R}^n)}\leqslant\|\varphi\|_{L^p(\mathbb{R}^n)}$；

(3) 对任意 $t,s>0$，有 $P_{t+s}\varphi=P_t(P_s\varphi)$；

(4) 如果 $1\leqslant p<+\infty$，那么 $\lim\limits_{t\to0^+}\|P_t\varphi-\varphi\|_{L^p(\mathbb{R}^n)}=0$。

**注 3.3.1** @71

定理 3.3.2 (3) 表明，定义在 $[0,+\infty)$ 上的 $P_t\varphi$ 具有半群性质，故称为热半群。

**注 (解的无限传播速度)** @72

由表达式 (3.25) 可以看出，热方程在 $t>0$ 时的解 $u$ 在 $x$ 处的值可以看作是以热核函数 $H(t,x-y)$ 为权的初值 $\varphi$ 对 $y$ 在 $\mathbb{R}^n$ 上的加权平均。因此，即使初值具有紧支集，例如

$$\varphi(x)\geqslant0,\qquad \operatorname{supp}\varphi\subset B_R(x_0),\qquad \varphi\not\equiv0,$$

由表达式 (3.25)，对任意 $t>0$ 也成立

$$u(t,x)>0,\qquad \text{即}\ \operatorname{supp}u(t,\cdot)=\mathbb{R}^n,$$

这说明初值信息可以瞬间传递给 $\mathbb{R}^n$ 上所有的位置。这一现象表明热方程的解具有无限传播速度。

**构造 (非齐次热方程 Cauchy 问题的解)** @72

利用齐次化原理，非齐次热方程 Cauchy 问题

$$\begin{cases}\partial_tu-\Delta u=f(t,x), & (t,x)\in(0,+\infty)\times\mathbb{R}^n,\\u(0,x)=\varphi(x), & x\in\mathbb{R}^n\end{cases} \tag{3.27}$$

的解可表示为

$$u(t,x)=\frac{1}{(4\pi t)^{\frac n2}}\int_{\mathbb{R}^n}\varphi(y)\mathrm{e}^{-\frac{|x-y|^2}{4t}}\,\mathrm{d}y+\int_0^t\int_{\mathbb{R}^n}\frac{1}{(4\pi(t-\tau))^{\frac n2}}f(\tau,y)\mathrm{e}^{-\frac{|x-y|^2}{4(t-\tau)}}\,\mathrm{d}y\,\mathrm{d}\tau . \tag{3.28}$$

### 3.4 极值原理及其应用（p74–92）

与调和方程类似，热方程的解也满足极值原理和 $L^\infty$ 范数估计，但具体形式有所不同，证明也略为复杂。本节主要阐述热方程的解所满足的极值原理以及相应的范数估计。

#### 3.4.1 弱极值原理和初边值问题解的唯一性 @74

设 $\Omega\subset\mathbb{R}^n$ 为光滑区域，$T>0$。如图 3.1，记 $\Omega_T=(0,T]\times\Omega$，$\Gamma_T=\overline{\Omega_T}\setminus\Omega_T$。这里 $\Gamma_T$ 称为抛物区域 $\Omega_T$ 的抛物边界。注意：$\{T\}\times\Omega$ 属于 $\Omega_T$ 的边界，而不属于 $\Omega_T$ 的抛物边界。

**定义 (热方程的经典解)** @74

我们用 $C_t^1C_x^2(\Omega_T)$ 表示 $\Omega_T$ 上关于时间 $t$ 一阶连续可导、关于空间 $x$ 二阶连续可导的函数类。若 $u(t,x)\in C_t^1C_x^2(\Omega_T)\cap C(\overline{\Omega_T})$ 在 $\Omega_T$ 上满足 $\partial_t u=\Delta u$，则称 $u$ 是 $\Omega_T$ 上热方程的（经典）解，并在不引起混淆的情况下可简称为 $\Omega$ 上热方程的解。

**定理 3.4.1 (弱极值原理)** @75

设 $\Omega$ 是有界光滑区域，$u\in C_t^1C_x^2(\Omega_T)\cap C(\overline{\Omega_T})$ 满足

$$(\partial_t-\Delta)u=0,\qquad (t,x)\in\Omega_T,$$

则 $u$ 的最值可在抛物边界 $\Gamma_T$ 上达到，即

$$\max_{\overline{\Omega_T}}u=\max_{\Gamma_T}u,\qquad\min_{\overline{\Omega_T}}u=\min_{\Gamma_T}u. \tag{3.29}$$

**注 3.4.1** @76

由定理 3.4.1 的证明过程可知，若 $u\in C_t^1C_x^2(\Omega_T)\cap C(\overline{\Omega_T})$ 在 $\Omega_T$ 上满足 $\partial_t u-\Delta u\leqslant 0$，则仍成立

$$\max_{\overline{\Omega_T}}u=\max_{\Gamma_T}u.$$

**推论 3.4.1 (比较原理)** @76

设 $\Omega$ 是有界光滑区域，$f\in C(\Omega_T)$。设 $u_1,u_2\in C_t^1C_x^2(\Omega_T)\cap C(\overline{\Omega_T})$ 是 $\partial_t u-\Delta u=f$ 在 $\Omega_T$ 上的两个解。如果

$$u_1(t,x)\leqslant u_2(t,x),\qquad \forall (t,x)\in\Gamma_T,$$

则在 $\overline{\Omega_T}$ 上 $u_1\leqslant u_2$。

**定理 3.4.2 (初边值问题解的唯一性)** @76

设 $\Omega$ 是有界光滑区域，$f\in C(\Omega_T)$，$g\in C(\Gamma_T)$，则初边值问题

$$\begin{cases}\partial_t u-\Delta u=f, & (t,x)\in\Omega_T,\\u(t,x)=g(t,x), & (t,x)\in\Gamma_T\end{cases}$$

在 $C_t^1C_x^2(\Omega_T)\cap C(\overline{\Omega_T})$ 中若存在解，则解必唯一。

#### 3.4.2 梯度估计和古代解 @76

本节中，我们研究热方程正解的梯度估计。热核函数

$$H(t,x)=\frac{1}{(4\pi t)^{\frac{n}{2}}}\mathrm{e}^{-\frac{|x|^2}{4t}}$$

是热方程典型的正解。定义

$$h(t,x)=\ln(H(t,x))=-\frac{|x|^2}{4t}-\frac{n}{2}\ln(4\pi t),$$

计算得到

$$|\nabla h|^2=\frac{|x|^2}{4t^2},\qquad \partial_t h=\frac{|x|^2}{4t^2}-\frac{n}{2t}.$$

从而，$\forall t>0$，$x\in\mathbb{R}^n$，

$$\frac{|\nabla H|^2}{H^2}-\frac{\partial_t H}{H}=\frac{n}{2t}. \tag{3.30}$$

由此，我们得到了热核函数 $H$ 的空间梯度和时间导数所满足的一个恒等式。注意到，对于任意给定的 $y\in\mathbb{R}^n$，以上恒等式对于 $H(t,x-y)$ 也成立。

但是对于一般热方程的正解，我们并不期望得到这样好的恒等式。考虑 $u(t,x)=|x|^2+2nt$，容易验证这是热方程的正解。通过计算可得，对于任意 $t>0$，$x\in\mathbb{R}^n$，

$$\frac{|\nabla u|^2}{u^2}-\frac{\partial_t u}{u}=\frac{4|x|^2}{(|x|^2+2nt)^2}-\frac{2n}{|x|^2+2nt}\leqslant\frac{4|x|^2}{(|x|^2+2nt)^2}\leqslant\frac{1}{2nt}\leqslant\frac{n}{2t}.$$

因此，我们退而求其次，希望得到关于热方程正解梯度满足的不等式。对于特殊的热方程正解 $u=H*\varphi$，通过热核 $H$ 的表达式，我们可以得到相应的梯度估计。

**定理 3.4.3 (热核卷积的梯度估计)** @77

对于 $\mathbb{R}^n$ 上任意不恒等于零的非负有界连续函数 $\varphi$，$u(t,x)=P_t\varphi=H(t,\cdot)*\varphi$ 满足

$$\frac{|\nabla u|^2}{u^2}-\frac{\partial_t u}{u}\leqslant\frac{n}{2t}.$$

**定理 3.4.4 (正解的梯度估计)** @77

设 $u$ 是 $\mathbb{R}^n_T$ 上热方程的正解，则对于任意 $(t,x)\in(0,T]\times\mathbb{R}^n$，

$$\frac{|\nabla u|^2}{u^2}-\frac{\partial_t u}{u}\leqslant\frac{n}{2t}.$$

**注 3.4.2** @78

对于热核 $u=H(t,x)$，以上不等式能取到等号 (3.30)，故该梯度估计是最优的。

**定理 3.4.5 (局部梯度估计)** @78

设 $u$ 是 $(0,T]\times B_R$ 上热方程 $\partial_t u=\Delta u$ 的正解，$\alpha>1$。对于任意 $(t,x)\in(0,T]\times B_{\frac{R}{\alpha}}$，成立

$$\frac{|\nabla u|^2}{u^2}-\alpha\frac{\partial_t u}{u}\leqslant\frac{n\alpha^2}{2t}+\frac{C\alpha^2}{R^2}\left(1+\frac{\alpha^2}{\alpha-1}\right), \tag{3.31}$$

其中 $C=C(n)$。

**注 3.4.3** @78

由以上定理，令 $R\to+\infty$，再让 $\alpha\to1$，即可证明定理 3.4.4。

证明定理 3.4.5 的主要方法是用 Bochner 技巧来估计热方程解的梯度，类似于调和方程梯度估计中的 Bochner 技巧。为叙述方便，只证 $\alpha=2$ 的情形。为此记 $f=\ln u$，则 (3.31) 左端为 $|\nabla f|^2-2\partial_t f$；构造

$$F=t\left(|\nabla f|^2-2\partial_t f\right), \tag{3.32}$$

问题化为给出 $F$ 的上界。由于 $u$ 是热方程的正解，$f=\ln u$ 满足

$$\partial_t f=\Delta f+|\nabla f|^2,$$

从而

$$\Delta f=-|\nabla f|^2+\partial_t f=-\frac{F}{2t}-\frac{|\nabla f|^2}{2}. \tag{3.33}$$

以下是著名的 Bochner 公式：对于任意的 $g\in C^3$，

$$\frac{1}{2}\Delta|\nabla g|^2=|\nabla^2 g|^2+\langle\nabla g,\nabla\Delta g\rangle, \tag{3.34}$$

其中 $|\nabla^2 g|^2=\sum\limits_{i,j=1}^{n}(\partial_{ij}g)^2$，$\langle\cdot,\cdot\rangle$ 表示向量的内积。易知，对于任意 $n\times n$ 矩阵 $A$，

$$|A|^2\geqslant\sum_i a_{ii}^2\geqslant\frac{(\operatorname{tr}A)^2}{n},$$

对 $\nabla^2 g$ 应用这个结论，得到 Bochner 不等式：

$$\frac{1}{2}\Delta|\nabla g|^2\geqslant\frac{|\Delta g|^2}{n}+\langle\nabla g,\nabla\Delta g\rangle. \tag{3.35}$$

**引理 3.4.1** @79

由 (3.32) 定义的函数 $F$ 满足不等式

$$(\partial_t-\Delta)F\leqslant-\frac{F^2}{2nt}-\frac{1}{n}|\nabla f|^2F+2\langle\nabla f,\nabla F\rangle+\frac{F}{t}.$$

**命题 3.4.1 (截断函数的存在性)** @79

存在截断函数 $\eta\in C_c^\infty(B_R)$，$0\leqslant\eta\leqslant1$，在 $B_{\frac{R}{2}}$ 上恒为 $1$，且对于任意 $x\in\mathbb{R}^n$，

$$|\nabla\eta|(x)\leqslant\frac{c}{R}\eta^{\frac{1}{2}},\qquad \Delta\eta(x)\geqslant-\frac{c}{R^2}, \tag{3.36}$$

其中 $c$ 只依赖于维数 $n$。

**命题 ($F$ 的上界)** @81

在定理 3.4.5 的证明中不妨设 $R=1$。对任意 $T'\in(0,T]$ 与 $(t,x)\in(0,T']\times B_{\frac{1}{2}}$，成立

$$F(t,x)\leqslant 2n+c_3T',$$

其中 $c_3$ 只依赖于 $n$。

**定义 3.4.1 (古代解)** @81

若 $u(t,x)$ 在 $(-\infty,0]\times\Omega$ 上满足热方程 $\partial_t u=\Delta u$，则称 $u$ 是 $\Omega$ 上热方程的古代解。

热方程的古代解出现于某些有限时间爆破的非线性热方程的爆破极限研究中，分类热方程的古代解，可以帮助理解爆破时的渐近行为，具有重要的理论意义。对于热方程的古代解，我们尝试将它的性质与调和函数的相关性质作比较。由正调和函数的 Liouville 定理，不存在非常数的 $\mathbb{R}^n$ 上的正调和函数。但是对于热方程情形，存在非常数的正古代解，例如：

**例 3.4.1** @81

$u(t,x)=\mathrm{e}^{t+x_1}$ 是 $\mathbb{R}^n$ 上的正古代解。

利用热方程的梯度估计，我们可得到正古代解关于时间的单调性。

**定理 3.4.6 (古代解的时间单调性)** @81

设 $u$ 是 $\mathbb{R}^n$ 上热方程的正古代解，则

$$\partial_t u\geqslant0,\qquad \forall t\in(-\infty,0],$$

即函数 $u$ 关于 $t$ 是单调不减的。

**定理 3.4.7 (古代解的 Liouville 定理)** @82

$\mathbb{R}^n$ 上热方程的有界古代解是常数。

#### 3.4.3 Harnack 不等式和强极值原理 @82

由热方程正解的梯度估计，我们可得到其正解满足如下形式的 Harnack 不等式。

**定理 3.4.8 (Harnack 不等式)** @82

设 $u$ 是 $(0,T]\times B_R$ 上热方程的正解。对于任意的 $0<t_1<t_2\leqslant T$，$x,y\in B_{\frac{R}{2}}$，成立

$$u(t_1,x)\leqslant u(t_2,y)\left(\frac{t_2}{t_1}\right)^n\mathrm{e}^{\frac{R^2}{2(t_2-t_1)}+c\frac{t_2-t_1}{R^2}}, \tag{3.40}$$

其中 $c=c(n)$ 为只依赖于维数 $n$ 的正常数。

**推论 3.4.2** @83

设 $\Omega$ 是有界光滑连通区域，$u$ 是 $\Omega_T$ 上热方程的正解。则对于任意 $\Omega'\Subset\Omega$，$0<t_1<t_2\leqslant T$，存在不依赖于 $u$ 的常数 $C=C(n,\Omega',\Omega,t_1,t_2)$ 使得

$$\sup_{x\in\Omega'}u(t_1,x)\leqslant C\inf_{x\in\Omega'}u(t_2,x). \tag{3.41}$$

**定理 3.4.9 (强极值原理)** @84

$u$ 是 $\Omega_T$ 上热方程的解，若存在 $(t_0,x_0)\in\Omega_T$，使得

$$u(t_0,x_0)=\max_{\overline{\Omega_T}}u,$$

则 $u$ 在 $\overline{\Omega}_{t_0}$ 上是常数。

#### 3.4.4 Cauchy 问题解的唯一性 @85

我们考虑热方程的 Cauchy 问题

$$\begin{cases}\partial_t u-\Delta u=f, & (t,x)\in\mathbb{R}^n_T,\\u(0,x)=g(x), & x\in\mathbb{R}^n\end{cases}$$

解的唯一性问题。

先考虑一维的简单情形：

$$\begin{cases}\partial_t u-\partial_x^2 u=0, & (t,x)\in\mathbb{R}_T,\\u(0,x)=0, & x\in\mathbb{R}.\end{cases}$$

显然 $u\equiv0$ 是方程的一个解。我们用级数的方法，试图构造另一个非平凡解。假设 $u$ 有形式幂级数表示

$$u(t,x)=\sum_{j=0}^{\infty}u_j(t)x^j,\qquad (t,x)\in\mathbb{R}_T.$$

进一步假设 $u$ 是关于 $x$ 的偶函数，即 $u_{2k+1}\equiv0$，$\forall k\in\mathbb{N}$。作形式计算，通过比较 $x^j$ 前面的系数，热方程 $\partial_t u-\partial_x^2 u=0$ 等价于

$$u'_{2k}=(2k+2)(2k+1)u_{2k+2},\qquad k\in\mathbb{N}.$$

因此，只要选定 $u_0(t)$，由上述关系式，有

$$u_{2k}=\frac{u_0^{(k)}(t)}{(2k)!},\qquad k=1,2,\cdots.$$

从而有

$$u(t,x)=\sum_{k=0}^{\infty}\frac{u_0^{(k)}(t)}{(2k)!}x^{2k},\qquad (t,x)\in\mathbb{R}_T. \tag{3.42}$$

我们选取适当的 $u_0(t)$ 使得上述幂级数一致收敛。取

$$u_0(t)=\begin{cases}\mathrm{e}^{-t^{-a}}, & t>0,\\0, & t\leqslant0,\end{cases}$$

其中 $a>1$。可以证明：存在常数 $c(a)>0$，使得

$$\left|u_0^{(k)}(t)\right|\leqslant\frac{k!}{(ct)^k}\mathrm{e}^{-\frac{1}{2t^a}},\qquad \forall t>0,\ k\in\mathbb{N}. \tag{3.43}$$

从而 (3.42) 绝对收敛，且 $u,\partial_t u,\partial_x^2u$ 在 $t>0$，$x\in\mathbb{R}$ 上内闭一致收敛，并满足 $\partial_t u-\partial_x^2u=0$。注意到 $u(0,x)\equiv0$，即函数 $u(t,x)$ 满足初值条件。我们得到了一个非零解。

对于 $\mathbb{R}^n$ 上的热方程，设 $v(t,x)=u(t,x_1)$，则 $v$ 是 $\mathbb{R}^n$ 上热方程 Cauchy 问题的初值为零的非平凡解。从而 $\mathbb{R}^n$ 上热方程 Cauchy 问题的解是不唯一的。如果将 $v(t,x)$ 理解为全空间的热分布，初始时刻全空间的热分布为零，然而对于任意 $t>0$ 时刻，全空间产生了非零热分布（有正有负）。这是违背物理实际的，现实世界中，热量不会无中生有。这种奇怪的解 $v$ 称为"非物理解"。

为了在一定条件下排除此类"非物理解"，进而得到热方程 Cauchy 问题解的唯一性，我们介绍如下极值原理。

**定理 3.4.10 (Cauchy 问题解的极值原理)** @86

设 $u(t,x)$ 是 $\mathbb{R}^n_T$ 上热方程的解，若存在 $A>0$，$C>0$ 使得

$$u(t,x)\leqslant C\mathrm{e}^{A|x|^2},\qquad \forall (t,x)\in[0,T]\times\mathbb{R}^n, \tag{3.44}$$

则

$$\sup_{\mathbb{R}^n_T}u\leqslant\sup_{\mathbb{R}^n}u(0,\cdot).$$

**注 3.4.4** @86

前面构造的"非物理解"满足：对任意的 $\varepsilon>0$，存在常数 $C,A>0$，使得

$$|u(t,x)|\leqslant C\mathrm{e}^{A|x|^{2+\varepsilon}},\qquad \forall (t,x)\in[0,T]\times\mathbb{R}^n.$$

故定理中增长条件 $\mathrm{e}^{A|x|^2}$ 的阶数是最优的。

**推论 3.4.3 (Cauchy 问题解的唯一性)** @87

设 $f\in C([0,T]\times\mathbb{R}^n)$，$g\in C(\mathbb{R}^n)$，则 Cauchy 问题

$$\begin{cases}\partial_t u-\Delta u=f, & (t,x)\in(0,T)\times\mathbb{R}^n,\\u(0,x)=g(x), & x\in\mathbb{R}^n\end{cases}$$

至多存在一个满足

$$|u(t,x)|\leqslant C\mathrm{e}^{A|x|^2},\qquad \forall (t,x)\in[0,T]\times\mathbb{R}^n$$

的解 $u$，其中 $C,A>0$。

**推论 3.4.4** @88

若 $P_t\varphi$ 是 Cauchy 问题 (3.21) 的解，且存在 $A>0$，$C>0$ 使得

$$|P_t\varphi(x)|\leqslant C\mathrm{e}^{A|x|^2},\qquad \forall (t,x)\in[0,T]\times\mathbb{R}^n, \tag{3.46}$$

则 $P_t\varphi(x)$ 给出该问题满足增长性条件 (3.46) 的唯一解。

**定理 3.4.11** @88

设 $\varphi$ 为 $\mathbb{R}^n$ 上的有界连续函数，则 $P_t\varphi=H(t,\cdot)*\varphi$ 给出了 Cauchy 问题 (3.21) 满足增长性条件 (3.46) 的唯一解。

#### 3.4.5 热半群的基本性质和应用 @88

在这一小节，我们来说明热方程的解关于时间的衰减性质。

**定理 3.4.12 ($L^2$ 衰减估计)** @88

设 $\Omega$ 是有界光滑区域，$u$ 是 $\Omega_T$ 上热方程的解，满足 $u(t,x)=0$，$\forall t\in[0,T]$，$x\in\partial\Omega$，则

$$\int_{\Omega}u^2(t,x)\,\mathrm{d}x\leqslant\mathrm{e}^{-2\lambda_1 t}\int_{\Omega}u^2(0,x)\,\mathrm{d}x.$$

这里 $\lambda_1$ 是 $\Omega$ 上 Dirichlet 边界条件下，算子 $-\Delta$ 的第一特征值。

**定理 3.4.13** @89

若 $u$ 是 $\mathbb{R}^n_T$ 上热方程的有界解，且 $u(0,x)=\varphi(x)$ 是有界连续函数，满足 $\|\varphi\|_{L^1(\mathbb{R}^n)}<+\infty$，则 $\forall t>0$，$x\in\mathbb{R}^n$，

$$|u(t,x)|\leqslant\frac{1}{(4\pi t)^{\frac{n}{2}}}\|\varphi\|_{L^1(\mathbb{R}^n)},$$

$$|\nabla u(t,x)|\leqslant\frac{C(n)}{\sqrt{t}}\|\varphi\|_{L^\infty(\mathbb{R}^n)}.$$

**定理 3.4.14** @89

对于 $f\in\mathcal{S}(\mathbb{R}^n)$，对于任意 $t>0$，$x\in\mathbb{R}^n$，

$$\nabla P_tf(x)=P_t(\nabla f)(x),$$

其中

$$P_t(\nabla f)(x)=\left(P_t\partial_{x_1}f(x),P_t\partial_{x_2}f(x),\cdots,P_t\partial_{x_n}f(x)\right).$$

进一步地，对于任意 $1\leqslant p<+\infty$，

$$|\nabla P_tf|^p\leqslant P_t\left(|\nabla f|^p\right)(x).$$

以上关于梯度的不等式称为热半群的梯度不等式，在概率论和半群理论中有重要应用。

**命题 3.4.2** @90

对于任意 $f\in C_c^\infty(\mathbb{R}^n)$，

$$2t|\nabla P_tf|^2\leqslant P_t(f^2)-(P_tf)^2\leqslant 2tP_t|\nabla f|^2.$$

**定理 3.4.15 (有界调和函数的 Liouville 定理)** @90

$\mathbb{R}^n$ 上的有界调和函数是常数。

### 3.5 能量方法和解的唯一性（p93–97）

除了与调和方程类似的极值原理与 $L^\infty$ 范数估计外，热方程这类与时间有关的偏微分方程还可以利用能量方法得到 $L^2$ 范数估计，并用它来分析解的性质。

#### 3.5.1 能量方法和初边值问题解的唯一性 @93

对热方程$$\partial_t u-\Delta u=0,$$常用的能量方法是将方程两边同时乘解 $u$，并对空间变量积分，从而得到解的 $L^2$ 范数随时间的变化规律。

考虑初边值问题$$\begin{cases}\partial_t u-\Delta u=f(t,x), & (t,x)\in(0,+\infty)\times\Omega,\\u(0,x)=\varphi(x), & x\in\Omega,\\u(t,x)=g, & (t,x)\in(0,+\infty)\times\partial\Omega,\end{cases}\tag{3.48}$$其中 $\Omega\subset\mathbb{R}^n$ 是具有光滑边界的有界区域，$\varphi\in C^2(\Omega)\cap C(\overline{\Omega})$ 满足相容性条件 $\varphi|_{\partial\Omega}=g|_{\{0\}\times\partial\Omega}$。

**定理 (初边值问题解的唯一性)** @93

初边值问题 (3.48) 至多有一个解。

**命题 (差函数的能量恒等式)** @94

设 $w$ 满足$$\begin{cases}\partial_t w-\Delta w=0, & (t,x)\in(0,+\infty)\times\Omega,\\w(0,x)=0, & x\in\Omega,\\w(t,x)=0, & (t,x)\in(0,+\infty)\times\partial\Omega,\end{cases}\tag{3.49}$$则$$\frac{1}{2}\frac{\mathrm{d}}{\mathrm{d}t}\int_\Omega w^2\,\mathrm{d}x+\int_\Omega|\nabla w|^2\,\mathrm{d}x=0,$$从而关于 $t$ 积分得$$\frac{1}{2}\int_\Omega w^2(t,x)\,\mathrm{d}x+\int_0^t\int_\Omega|\nabla w(\tau,x)|^2\,\mathrm{d}x\,\mathrm{d}\tau=\frac{1}{2}\int_\Omega w^2(0,x)\,\mathrm{d}x.$$特别地，当 $w(0,x)=0$ 时 $w\equiv 0$。

#### 3.5.2 倒向唯一性 @94

利用能量方法并附加一定的分析技巧，有时能够得到用其他方法很难获取的解的性质，例如下面热方程解的倒向唯一性。

**定理 3.5.1** @94

若 $u_1(t,x)$ 及 $u_2(t,x)$ 分别是热方程初边值问题$$\begin{cases}\partial_t u_i-\Delta u_i=f(t,x), & (t,x)\in(0,+\infty)\times\Omega,\\u_i(0,x)=\varphi_i(x), & x\in\Omega,\\u_i(t,x)=g(t,x), & (t,x)\in(0,+\infty)\times\partial\Omega\end{cases}$$的解，其中 $i=1,2$，并且存在 $T>0$，使得$$u_1(T,x)=u_2(T,x),\qquad \forall x\in\Omega,$$则有$$u_1(t,x)=u_2(t,x),\qquad \forall (t,x)\in[0,T]\times\Omega.$$

**引理 (能量的对数凸性)** @95

设 $w=u_1-u_2$，记能量$$e(t)=\int_\Omega w^2(t,x)\,\mathrm{d}x, \tag{3.50}$$则$$e'(t)=2\int_\Omega w\Delta w\,\mathrm{d}x \tag{3.51}$$及$$e'(t)=-2\int_\Omega|\nabla w|^2\,\mathrm{d}x. \tag{3.52}$$又由 Cauchy-Schwarz 不等式与$$\int_\Omega(\Delta w)^2\,\mathrm{d}x=\frac{1}{4}e''(t)$$可得$$(e'(t))^2\leqslant e(t)e''(t). \tag{3.53}$$因此在 $e(t)>0$ 处，$\ln e(t)$ 是凸函数。

**引理 (对数凸能量的零点传播)** @96

设 $e$ 在 $[t_1,t_2]$ 上非负，$\ln e$ 在 $e>0$ 处为凸函数，且 $e(t_2)=0$，则$$e(t)\equiv 0,\qquad \forall t\in[t_1,t_2].$$

**注 (倒向 Cauchy 问题)** @96

上述定理描述了热方程倒向问题解的唯一性，但由于热方程本身描述了热的传导与物质的扩散，从物理现象上可以猜测热方程的倒向 Cauchy 问题（即其古代解）$$\begin{cases}\partial_t u-\Delta u=0, & (t,x)\in(-\infty,0)\times\mathbb{R}^n,\\u(0,x)=\varphi(x), & x\in\mathbb{R}^n\end{cases}\tag{3.54}$$应当是不适定的。若 (3.54) 的解 $u=u(t,x)$ 在 $t\in[-\tau,0]$ 上存在，则 $u$ 也是以 $u(\tau_0,x)$ 为初值、在 $t\in[-\tau_0,0]$（$\tau_0\in[-\tau,0)$）上正向热方程 Cauchy 问题的解；正向热方程的解关于空间是解析的（热方程 Cauchy 问题的显示表达式可以证明解是解析的），因此对于一般的非解析的 $\varphi(x)$，倒向热方程 Cauchy 问题的解不存在。

**命题 (倒向热方程的不稳定性)** @97

对于解析的 $\varphi(x)$，即使倒向热方程的解存在，它也是不稳定的。考虑倒向热方程的初边值问题$$\begin{cases}\partial_t u-\partial_x^2 u=0, & (t,x)\in(-\infty,0)\times(0,\pi),\\u(0,x)=\varphi(x), & x\in(0,\pi),\\u(t,0)=u(t,\pi)=0, & t\in(-\infty,0).\end{cases}\tag{3.55}$$$u\equiv 0$ 是对应 $\varphi(x)\equiv 0$ 的一个特解，但它在 $L^2$ 空间中关于小扰动是不稳定的：对任意给定的一组 $\varepsilon>0$，$M>0$，$t_0>0$，是否存在 $\varphi(x)$ 及问题 (3.55) 的解 $u=u(t,x)$，使得$$\|\varphi\|_{L^2(0,\pi)}\leqslant\varepsilon,\qquad \|u(-t_0,\cdot)\|_{L^2(0,\pi)}\geqslant M\ ?$$

**注 (时间不可逆)** @97

上述讨论说明热方程正向问题与倒向问题具有截然不同的性质，这表明热方程是“时间不可逆”的；从之前的极值原理、能量估计等性质中均能看到这一现象。

### 3.6 一般的抛物型方程（p98–100）

**定义 (一般二阶线性抛物型算子)** @98

设区域 $\Omega\subset\mathbb{R}^n$，设算子$$Lu=\sum_{i,j=1}^{n}\partial_{x_i}\big(a_{ij}\partial_{x_j}u\big)+\sum_{i=1}^{n}b_i\partial_{x_i}u+cu,$$其中 $a_{ij},b_i,c\in C^\infty(\overline{\Omega})$，$a_{ij}=a_{ji}$（$i,j=1,2,\cdots,n$），且存在 $\lambda>0$，使得$$\sum_{i,j=1}^{n}a_{ij}(x)\xi_i\xi_j\geqslant\lambda|\xi|^2,\qquad \forall\xi\in\mathbb{R}^n,\ x\in\overline{\Omega}.$$

首先讨论有界区域 $\Omega$ 上一般抛物型方程的初边值问题$$\begin{cases}\partial_t u=Lu+f, & x\in\Omega,\ 0<t\leqslant T,\\u(0,x)=g(x), & x\in\Omega,\\u(t,x)=0, & 0\leqslant t\leqslant T,\ x\in\partial\Omega.\end{cases}\tag{3.56}$$

记 $H^{-1}(\Omega)$ 为 $H_0^1(\Omega)$ 的对偶空间。

**定义 (空间 $L^2(0,T;X)$)** @99

对于 Banach（巴拿赫）空间 $X$，记$$L^2(0,T;X)=\big\{u(t):[0,T]\to X,\ \|u(t)\|_X\in L^2(0,T)\big\}.$$

**定义 3.6.1 (弱解)** @99

若 $u\in L^2(0,T;H_0^1(\Omega))$，$\partial_t u\in L^2(0,T;H^{-1}(\Omega))$，且满足$$\langle\partial_t u,v\rangle_{H^{-1}(\Omega)\times H_0^1(\Omega)}+\int_\Omega\Big(\sum_{i,j}a_{ij}\partial_{x_i}u\,\partial_{x_j}v-\sum_i b_i\partial_{x_i}u\,v-cuv-fv\Big)\mathrm{d}x=0$$对于任意的测试函数 $v\in H_0^1(\Omega)$ 以及几乎所有的 $t\in(0,T)$ 都成立，以及$$u(0,\cdot)=g\in L^2(\Omega),$$则称 $u$ 为 (3.56) 的弱解。

**定理 3.6.1 (弱解的存在唯一性)** @99

若 $g\in L^2(\Omega)$，$f\in L^2(\Omega_T)$，则 (3.56) 存在唯一的满足定义 3.6.1 的弱解。

对于一般抛物型方程 (3.56) 的经典解，可得如下的强极值原理。

**定理 3.6.2 (强极值原理)** @99

设$$u(t,x)\in C_t^1C_x^2(\Omega_T)\cap C(\overline{\Omega_T}),$$且 $c(x)\leqslant 0$。若$$\partial_t u\leqslant Lu,\qquad (t,x)\in\Omega_T,$$且存在 $(t_0,x_0)\in\Omega_T$，使得$$0\leqslant u(t_0,x_0)=\max_{\overline{\Omega_T}}u,$$则 $u$ 在 $\Omega_{t_0}$ 上为常数。

**注 (Harnack 不等式与梯度估计)** @99

一般抛物型方程的正解也成立 Harnack 不等式；而在二阶项系数 $(a_{ij})$ 满足某些结构性条件时，一般抛物型方程的精确梯度估计 (3.31) 也是成立的。

**定义 3.6.2 (分布解)** @100

设 $U\subset\mathbb{R}\times\mathbb{R}^n$ 是某个时空区域，若 $u(t,x),f(t,x)\in L^1_{loc}(U)$ 满足$$\int_U u\,\partial_t\phi\,\mathrm{d}x\,\mathrm{d}t+\int_U u\Delta\phi\,\mathrm{d}x\,\mathrm{d}t+\int_U f\phi\,\mathrm{d}x\,\mathrm{d}t=0,\qquad \forall\phi\in C_c^\infty(U),$$则称 $u$ 为方程 $\partial_t u=\Delta u+f$ 在 $U$ 上的分布解（即在分布意义下满足方程）。

**定理 3.6.3 (分布解的光滑性)** @100

对于 $\partial_t u=\Delta u+f$ 在 $U$ 上的分布解 $u$，若 $f\in C^\infty(U)$，则 $u\in C^\infty(U)$。特别地，当 $f\equiv 0$ 时，齐次方程 $\partial_t u=\Delta u$ 的分布解是光滑解。

**注 (关于空间变量的解析性)** @100

可以进一步证明，$u(t,x)$ 关于 $x$ 是解析函数（固定 $t$），但是关于 $t$ 的解析性往往不成立。

**反例 (Kovalevskaya 反例)** @100

以下是 Kovalevskaya（柯瓦列夫斯卡娅）给出的反例的变形：$$\begin{cases}\partial_t u=\partial_x^2 u, & (t,x)\in(0,T)\times\mathbb{R},\\u(0,x)=\dfrac{1}{1+x^2}, & x\in\mathbb{R}.\end{cases}$$对于以上方程的有界解 $u(t,x)$，$u(t,0)$ 在 $t=0$ 处是否解析？

## 第4章 波方程

### 4.1 方程的物理背景和定解问题（p102–105）

#### 4.1.1 弦振动方程和力的平衡方程 @102

**构造 (弦振动方程)** @102

考虑一根绷紧的作微小横振动的均匀柔软的弹性弦。记其在 $t$ 时刻、$x$ 位置处的位移为 $u(t,x)$，并假设其为光滑函数。

若忽略重力，在适当的物理假设下，可认为在弦上任一点处所受弹性张力为一常值 $T>0$，并且一段微小的弦 $[x,x+\Delta x]$ 仅受其左右两侧的竖直方向的张力$$T\bigl(\partial_x u(t,x+\Delta x)-\partial_x u(t,x)\bigr)$$的作用。其在时段 $[t,t+\Delta t]$ 内的冲量为$$\int_t^{t+\Delta t}T\bigl(\partial_x u(s,x+\Delta x)-\partial_x u(s,x)\bigr)\,\mathrm{d}s,$$而此段弦的动量增量为$$\int_x^{x+\Delta x}\rho\bigl(\partial_t u(t+\Delta t,y)-\partial_t u(t,y)\bigr)\,\mathrm{d}y.$$

这里 $\rho>0$ 为此弹性弦的线密度，即单位长度的质量。根据 Newton（牛顿）第二定律可得$$\frac{1}{\Delta t\,\Delta x}\int_t^{t+\Delta t}\!\!\int_x^{x+\Delta x}T\partial_x^2u(s,y)\,\mathrm{d}y\,\mathrm{d}s=\frac{1}{\Delta t\,\Delta x}\int_t^{t+\Delta t}\!\!\int_x^{x+\Delta x}\rho\partial_t^2u(s,y)\,\mathrm{d}y\,\mathrm{d}s.$$

令 $\Delta t\to0$，$\Delta x\to0$，即可得不受外力作用时，弦振动的位移 $u(t,x)$ 满足$$\partial_t^2u-a^2\partial_x^2u=0,\tag{4.1}$$其中 $a=\sqrt{T/\rho}$，这就是弦振动方程。

**构造 (非齐次弦振动方程)** @103

当存在外力作用时，我们可以导出如下的非齐次弦振动方程$$\partial_t^2u-a^2\partial_x^2u=f.\tag{4.2}$$

**构造 (弹性体的波方程)** @103

考虑占据 $\mathbb{R}^n$ 中光滑连通区域 $\Omega$ 的弹性体的受力平衡。记 $u(t,x)$ 为位移函数，则由 Newton 第二定律知，对 $\Omega$ 的任一子区域 $V$，$$\int_V\rho\partial_t^2u\,\mathrm{d}x=\int_{\partial V}\boldsymbol{F}\cdot\boldsymbol{n}\,\mathrm{d}S,$$其中左边表示质量乘加速度，$\rho$ 为质量密度，右边表示 $\partial V$ 上所受到的弹性张力的合力，$\boldsymbol{n}$ 表示 $\partial V$ 上的单位外法向量。

对弹性介质而言，$\boldsymbol{F}=\boldsymbol{F}(\nabla u)$，其线性部分通常与 $\nabla u$ 成正比。因此，若仅考虑 $\boldsymbol{F}$ 为线性的情形，即 $\boldsymbol{F}=k\nabla u$（$k>0$ 为常数）时，成立$$\int_V\rho\partial_t^2u\,\mathrm{d}x=k\int_{\partial V}\frac{\partial u}{\partial\boldsymbol{n}}\,\mathrm{d}S=k\int_V\Delta u\,\mathrm{d}x.$$

由 $V$ 的任意性，可得不受外力时，位移函数 $u(t,x)$ 满足如下波方程$$\partial_t^2u-a^2\Delta u=0,\tag{4.3}$$其中 $a=\sqrt{k/\rho}>0$。而当存在外力作用时，我们可以导出非齐次波方程$$\partial_t^2u-a^2\Delta u=f.\tag{4.4}$$

**注 (一维波方程与波的传播速度)** @103

弦振动方程可视为上述弹性运动方程的一维特例，因此亦可称为一维波方程。而上述波方程中的系数 $a>0$ 称为波的传播速度，其含义在后文中会进一步阐述。

#### 4.1.2 定解问题 @103

**构造 (初值条件与 Cauchy 问题)** @103

如同热方程，为求解波方程，我们需要初值条件。根据波方程的物理意义，要完全确定波的传播，即位移 $u(t,x)$，我们需要知道初始的位移和速度，即需要两个初值条件：$$u(0,x)=\varphi(x),\qquad \partial_tu(0,x)=\psi(x).\tag{4.5}$$

这里称 $\varphi$ 为初始位移，$\psi$ 为初始速度。将波方程 (4.4) 与初值条件 (4.5) 结合起来，就得到波方程的初值问题或者 Cauchy 问题。

**构造 (第一类边界条件（Dirichlet 边界条件）)** @104

当我们在有界光滑区域 $\Omega\subset\mathbb{R}^n$ 内求解波方程时，类似于调和方程与热方程，也需要一定的边界条件。典型的具有物理意义的边界条件有如下四类。第一类边界条件（Dirichlet 边界条件）为$$u=g(t,x),\qquad (t,x)\in(0,+\infty)\times\partial\Omega.\tag{4.6}$$

**构造 (第二类边界条件（Neumann 边界条件）)** @104

$$\frac{\partial u}{\partial\boldsymbol{n}}=g(t,x),\qquad (t,x)\in(0,+\infty)\times\partial\Omega.\tag{4.7}$$

**构造 (第三类边界条件（Robin 边界条件）)** @104

$$\frac{\partial u}{\partial\boldsymbol{n}}+\alpha u=g(t,x),\qquad (t,x)\in(0,+\infty)\times\partial\Omega\quad(\alpha>0).\tag{4.8}$$

**构造 (第四类边界条件（耗散边界条件）)** @104

$$\frac{\partial u}{\partial\boldsymbol{n}}+\beta\partial_tu=g(t,x),\qquad (t,x)\in(0,+\infty)\times\partial\Omega\quad(\beta>0).\tag{4.9}$$

**构造 (初边值问题)** @104

将波方程 (4.4)、初值条件 (4.5) 以及边界条件 (4.6)—(4.9) 之一结合起来，就得到波方程的初边值问题。

**定义 (相容性条件)** @104

与 Cauchy 问题不同，为得到波方程的初边值问题存在光滑的解，就要求初值与边值必须满足一定的相容性条件。以如下的齐次波方程 Dirichlet 边值问题为例：$$\begin{cases}\partial_t^2u-a^2\Delta u=0, & (t,x)\in(0,+\infty)\times\Omega,\\u(0,x)=\varphi(x),\ \partial_tu(0,x)=\psi(x), & x\in\Omega,\\u(t,x)=0, & (t,x)\in(0,+\infty)\times\partial\Omega.\end{cases}$$

在时空的边界点 $(0,x_0)$，$x_0\in\partial\Omega$，由于初值与边值均应与解相等，故需要如下的 $C^0$ 及 $C^1$ 相容性条件：$$\varphi(x_0)=u(0,x_0)=0,\qquad \psi(x_0)=\partial_tu(0,x_0)=0,\qquad x_0\in\partial\Omega.$$

此外，为保证解 $u(t,x)$ 二阶连续可微，方程在时空的边界处的限制也应有意义，故此时还需要如下的 $C^2$ 相容性条件：$$0=\partial_t^2u(0,x_0)-a^2\Delta u(0,x_0)=-a^2\Delta\varphi(x_0),\qquad x_0\in\partial\Omega.$$

**定义 (经典解)** @104

波方程的初边值问题在 $C^2\bigl([0,T]\times\overline{\Omega}\bigr)$ 空间中的解称为经典解。

**例 4.1.1** @104

设 $F$ 是 $\mathbb{R}$ 上的 $C^2$ 函数，则 $F(x+at)$ 及 $F(x-at)$ 均为弦振动方程 $\partial_t^2u-a^2\partial_x^2u=0$ 的解。

**例 4.1.2** @105

设函数 $\Phi\in C^2(\mathbb{R})$，向量 $\boldsymbol{\alpha}\in\mathbb{S}^{n-1}$，则 $\Phi(\boldsymbol{\alpha}\cdot x+t)$ 满足波方程 $\partial_t^2u-\Delta u=0$。这种形式的解称为平面波解。

**例 4.1.3** @105

考虑下述一维弦振动方程的初边值问题：$$\begin{cases}\partial_t^2u-\partial_x^2u=0, & (t,x)\in(0,+\infty)\times(0,\pi),\\u(0,x)=\sin kx,\ \partial_tu(0,x)=0, & x\in(0,\pi),\\u(t,0)=u(t,\pi)=0,\end{cases}$$其中 $k\in\mathbb{Z}$。易见 $u(t,x)=\cos kt\sin kx$ 为该定解问题的解，且其能量$$E(t)=\frac12\int_0^{\pi}\bigl[(\partial_tu)^2+(\partial_xu)^2\bigr]\mathrm{d}x$$满足 $E(t)=E(0)=\dfrac12\int_0^{\pi}k^2\cos^2kx\,\mathrm{d}x=\dfrac{k^2\pi}{4}$，$\forall t\geqslant0$。

### 4.2 波方程的 Cauchy 问题（p106–116）

**注 (化一般波方程为标准形式)** @106

本节介绍 $a=1$ 时波方程的 Cauchy 问题$$\begin{cases}\partial_t^2u-\Delta u=f(t,x), & (t,x)\in(0,+\infty)\times\mathbb{R}^n,\\u(0,x)=\varphi(x),\ \partial_tu(0,x)=\psi(x), & x\in\mathbb{R}^n\end{cases}\tag{4.10}$$的求解。对 $a\neq1$ 的一般波方程 $\partial_t^2u-a^2\Delta u=0$，可以通过自变量变换 $\tilde{t}=at$，把方程化为 $\partial_t^2u-\Delta u=0$，即 $a=1$ 的情形。

**定义 (波算子 $S(t)$)** @106

形式地定义波算子 $S(t):\psi\mapsto u(t,x)=[S(t)\psi](x)$，其中 $u(t,x)$ 是如下波方程的 Cauchy 问题的解：$$\begin{cases}\partial_t^2u-\Delta u=0, & (t,x)\in(0,+\infty)\times\mathbb{R}^n,\\u(0,x)=0,\ \partial_tu(0,x)=\psi(x), & x\in\mathbb{R}^n.\end{cases}\tag{4.11}$$波算子 $S(t)$ 定义的合理性将在后面说明。

**命题 (由波算子表示零初速 Cauchy 问题的解)** @106

令 $v(t,x)=[S(t)\varphi](x)$，则形式验证可知 $u=\partial_tv(t,x)$ 是如下波方程的 Cauchy 问题的解：$$\begin{cases}\partial_t^2u-\Delta u=0, & (t,x)\in(0,+\infty)\times\mathbb{R}^n,\\u(0,x)=\varphi,\ \partial_tu(0,x)=0, & x\in\mathbb{R}^n.\end{cases}\tag{4.12}$$

**命题 (齐次化原理)** @107

受热方程章节中介绍的齐次化原理的启发，可进一步形式地验证$$u(t,x)=\int_0^{t}S(t-\tau)f(\tau,x)\,\mathrm{d}\tau,\qquad (t,x)\in(0,+\infty)\times\mathbb{R}^n\tag{4.13}$$是如下非齐次波方程 Cauchy 问题的解：$$\begin{cases}\partial_t^2u-\Delta u=f, & (t,x)\in(0,+\infty)\times\mathbb{R}^n,\\u(0,x)=0,\ \partial_tu(0,x)=0, & x\in\mathbb{R}^n.\end{cases}\tag{4.14}$$

**注 (齐次化原理的物理解释)** @107

任意给定 $t>0$，将时间区间 $[0,t]$ 作如下划分：$$0=\tau_0<\tau_1<\tau_2<\cdots<\tau_N=t.$$当 $\max\limits_{k=0,1,\cdots,N-1}\Delta\tau_k=\max\limits_{k=0,1,\cdots,N-1}(\tau_{k+1}-\tau_k)$ 充分小时，在 $x$ 位置处，我们可以将时间区间 $[\tau_k,\tau_{k+1}]$ 上外力 $f(s,x)$ 的持续作用近似地看作在 $\tau_k$ 时刻给予系统一个瞬时冲量 $f(\tau_k,x)\Delta\tau_k$。因此外力 $f|_{[\tau_k,\tau_{k+1}]}$ 所产生的受迫振动可近似地由$$\begin{cases}\partial_t^2w-\Delta w=0, & (t,x)\in(\tau_k,+\infty)\times\mathbb{R}^n,\\w(\tau_k,x)=0,\ \partial_tw(\tau_k,x)=f(\tau_k,x)\Delta\tau_k, & x\in\mathbb{R}^n\end{cases}\tag{4.15}$$描述。利用方程的线性性质，将各时间段上由 $f$ 的作用所产生的振动相叠加，可得$$\sum_{k=0}^{N-1}w(t,x;\tau_k)=\sum_{k=0}^{N-1}S(t-\tau_k)f(\tau_k,x)\Delta\tau_k$$是 (4.14) 的近似解；令 $\max\limits_{k=0,1,\cdots,N-1}\Delta\tau_k\to0$，即得 $\int_0^{t}S(t-\tau)f(\tau,x)\,\mathrm{d}\tau$。

为得到波方程的 Cauchy 问题的解，下面将主要求解波算子 $S(t)$。为方便起见，本节仅讨论空间维数 $n=1,2$ 及 $3$ 的物理情形，一般的高维情形留作习题讨论。

#### 4.2.1 一维波方程的 d'Alembert 公式 @107

**命题 (一维齐次波方程的通解)** @108

由于$$\partial_t^2u-\partial_x^2u=(\partial_t+\partial_x)(\partial_t-\partial_x)u,$$引入新的自变量$$\xi=x+t,\qquad \eta=x-t,$$则有$$\partial_t+\partial_x=2\partial_\xi,\qquad \partial_t-\partial_x=-2\partial_\eta,$$从而在 $(\xi,\eta)$ 坐标下，$u$ 满足$$-4\partial_{\xi\eta}u=0.$$故$$u(t,x)=F(\xi)+G(\eta)=F(x+t)+G(x-t),\tag{4.16}$$其中 $F,G$ 为任意二阶连续可微函数。

**注 (行波与行波法)** @109

形如 $F(x+t)$、$G(x-t)$ 的函数在每个时刻 $t$ 具有相同的波形，随时间按某一速度传播，被称为"行波"。上述将解写为两个行波之和从而求解初值问题的方法，称为行波法。

**定理 4.2.1** @109

设 $\varphi\in C^2(\mathbb{R})$，$\psi\in C^1(\mathbb{R})$，则弦振动方程的 Cauchy 问题$$\begin{cases}\partial_t^2u-\partial_x^2u=0, & (t,x)\in(0,+\infty)\times\mathbb{R},\\u(0,x)=\varphi(x),\ \partial_tu(0,x)=\psi(x), & x\in\mathbb{R}\end{cases}$$存在唯一的经典解，且它由 d'Alembert（达朗贝尔）公式$$u(t,x)=\frac12\bigl[\varphi(x+t)+\varphi(x-t)\bigr]+\frac12\int_{x-t}^{x+t}\psi(y)\,\mathrm{d}y,\qquad (t,x)\in(0,+\infty)\times\mathbb{R}\tag{4.18}$$给出。

从表达式 (4.18) 可以看出弦振动方程的解 $u$ 在 $(t,x)$ 的取值仅依赖于初值 $(\varphi,\psi)$ 在区间 $[x-t,x+t]$ 上的取值。

**命题 (非齐次一维 Cauchy 问题的解)** @109

利用齐次化原理可得$$u(t,x)=\frac12\bigl[\varphi(x+t)+\varphi(x-t)\bigr]+\frac12\int_{x-t}^{x+t}\psi(y)\,\mathrm{d}y+\frac12\int_0^{t}\!\!\int_{x-(t-\tau)}^{x+(t-\tau)}f(\tau,y)\,\mathrm{d}y\,\mathrm{d}\tau,\qquad (t,x)\in(0,+\infty)\times\mathbb{R}$$为非齐次方程 Cauchy 问题$$\begin{cases}\partial_t^2u-\partial_x^2u=f, & (t,x)\in(0,+\infty)\times\mathbb{R},\\u(0,x)=\varphi(x),\ \partial_tu(0,x)=\psi(x), & x\in\mathbb{R}\end{cases}$$的解。

**例 4.2.1** @109

求解描述一端固定的半无界弦自由振动的初边值问题$$\begin{cases}\partial_t^2u-\partial_x^2u=0, & (t,x)\in(0,+\infty)\times(0,+\infty),\\u(0,x)=\varphi(x),\ \partial_tu(0,x)=\psi(x), & x\in(0,+\infty),\\u(t,0)=0, & t\in(0,+\infty),\end{cases}\tag{4.19}$$其中 $\varphi$ 及 $\psi$ 满足相容性条件$$\varphi(0)=\varphi''(0)=0,\qquad \psi(0)=0.$$

将初值 $(\varphi,\psi)$ 在 $\mathbb{R}$ 上作奇延拓成为 $(\Phi,\Psi)$，即$$\Phi(x)=\begin{cases}\varphi(x), & x\geqslant0,\\ -\varphi(-x), & x<0,\end{cases}\qquad\Psi(x)=\begin{cases}\psi(x), & x\geqslant0,\\ -\psi(-x), & x<0,\end{cases}$$并要求以 $(\Phi,\Psi)$ 作初值的 Cauchy 问题在 $(0,+\infty)\times\mathbb{R}$ 上的解满足 $x=0$ 处的边界条件。由 d'Alembert 公式，以 $(\Phi,\Psi)$ 作初值的 Cauchy 问题的解为$$U(t,x)=\frac12\bigl[\Phi(x+t)+\Phi(x-t)\bigr]+\frac12\int_{x-t}^{x+t}\Psi(y)\,\mathrm{d}y.\tag{4.20}$$

于是，将上述 $\Phi,\Psi$ 代入 (4.20)，就得到原混合初边值问题 (4.19) 的解$$u(t,x)=\begin{cases}\dfrac12\bigl[\varphi(x+t)+\varphi(x-t)\bigr]+\dfrac12\displaystyle\int_{x-t}^{x+t}\psi(y)\,\mathrm{d}y, & 0\leqslant t\leqslant x,\\[2ex]\dfrac12\bigl[\varphi(x+t)-\varphi(t-x)\bigr]+\dfrac12\displaystyle\int_{t-x}^{t+x}\psi(y)\,\mathrm{d}y, & 0\leqslant x<t.\end{cases}\tag{4.21}$$

#### 4.2.2 三维波方程的球平均法 @111

**构造 (球平均函数)** @111

考虑三维波方程的如下 Cauchy 问题：$$\begin{cases}\partial_t^2u-\Delta u=0, & (t,x)\in(0,+\infty)\times\mathbb{R}^3,\\u(0,x)=0,\ \partial_tu(0,x)=\psi(x), & x\in\mathbb{R}^3.\end{cases}\tag{4.22}$$

我们希望将求解上述问题转化为求解一个一维波方程的定解问题。为此，引入 $u$ 及 $\psi$ 的球平均函数$$\begin{cases}M_u(t,\rho;x)=\dfrac{1}{|\partial B_\rho(x)|}\displaystyle\int_{\partial B_\rho(x)}u(t,y)\,\mathrm{d}S_y,\\[2ex]M_\psi(\rho;x)=\dfrac{1}{|\partial B_\rho(x)|}\displaystyle\int_{\partial B_\rho(x)}\psi(y)\,\mathrm{d}S_y,\end{cases}$$这里参数 $\rho>0$，$\partial B_\rho(x)$ 是 $\mathbb{R}^3$ 中以 $x$ 为心、$\rho$ 为半径的球面。相应地，$$M_u(0,\rho;x)=0,\qquad \partial_tM_u(0,\rho;x)=M_\psi(\rho;x),$$且$$\lim_{\rho\to0}M_u(t,\rho;x)=u(t,x),\qquad \lim_{\rho\to0}M_\psi(\rho;x)=\psi(x).$$

因此，为求解 $u(t,x)$，仅需先求解 $M_u(t,\rho;x)$。将 $M_u(t,\rho;x)$ 视为以 $x$ 为参数、以 $(t,\rho)$ 为自变量的函数，即可推导其满足的方程。

**引理 (球平均函数满足的方程)** @112

直接计算可得$$\partial_\rho^2M_u(t,\rho;x)=-\frac{2}{\rho}\partial_\rho M_u(t,\rho;x)+\partial_t^2M_u(t,\rho;x).\tag{4.23}$$

**命题 (三维波方程初值为零情形的解)** @112

令$$V(t,\rho;x):=\rho M_u(t,\rho;x),\qquad (t,\rho;x)\in(0,+\infty)\times(0,+\infty)\times\mathbb{R}^3,$$则对任意给定的 $x\in\mathbb{R}^3$，$V$ 关于 $(t,\rho)$ 在第一象限满足如下混合初边值问题：$$\begin{cases}\partial_t^2V-\partial_\rho^2V=0, & (t,\rho)\in(0,+\infty)\times(0,+\infty),\\V(0,\rho;x)=0,\ \partial_tV(0,\rho;x)=\rho M_\psi(\rho;x), & \rho\in(0,+\infty),\\V(t,0;x)=0, & t\in(0,+\infty).\end{cases}\tag{4.24}$$

由 4.2.1 小节例 4.2.1 可得，对 $t>0$，$$V(t,\rho;x)=\frac12\int_{t-\rho}^{t+\rho}rM_\psi(r;x)\,\mathrm{d}r,\qquad (t,\rho;x)\in(0,+\infty)\times(0,t]\times\mathbb{R}^3.\tag{4.25}$$故$$u(t,x)=\lim_{\rho\to0^+}M_u(t,\rho;x)=\lim_{\rho\to0^+}\frac{V(t,\rho;x)}{\rho}=tM_\psi(t;x)=\frac{1}{|\partial B_t(x)|}\int_{\partial B_t(x)}t\psi(y)\,\mathrm{d}S_y,\qquad (t,x)\in(0,+\infty)\times\mathbb{R}^3.\tag{4.26}$$

当 $\psi\in C^2(\mathbb{R}^3)$ 时，(4.26) 所得出的解确实满足 Cauchy 问题 (4.22)，这样就得到了该问题解的存在性。

**定理 4.2.2** @113

设 $\varphi\in C^3(\mathbb{R}^3)$，$\psi\in C^2(\mathbb{R}^3)$，则三维波方程的 Cauchy 问题$$\begin{cases}\partial_t^2u-\Delta u=0, & (t,x)\in(0,+\infty)\times\mathbb{R}^3,\\u(0,x)=\varphi(x),\ \partial_tu(0,x)=\psi(x), & x\in\mathbb{R}^3\end{cases}\tag{4.27}$$存在唯一的解$$u(t,x)=\partial_t\left(\frac{1}{|\partial B_t(x)|}\int_{\partial B_t(x)}t\varphi(y)\,\mathrm{d}S_y\right)+\frac{1}{|\partial B_t(x)|}\int_{\partial B_t(x)}t\psi(y)\,\mathrm{d}S_y,\qquad (t,x)\in(0,+\infty)\times\mathbb{R}^3.\tag{4.28}$$

从解的表达式 (4.28) 可以看出，三维波方程的解 $u$ 在 $(t,x)$ 的取值只依赖于初值 $(\varphi,\psi)$ 以及 $\nabla\varphi$ 在 $\partial B_t(x)$ 上的取值（唯一性见 4.5 节）。对于非齐次方程 Cauchy 问题，可以利用定理 4.2.2 及齐次化原理给出解的显式表示。

#### 4.2.3 二维波方程的降维法 @113

**构造 (降维法)** @113

考虑$$\begin{cases}\partial_t^2u-\Delta u=0, & (t,x)\in(0,+\infty)\times\mathbb{R}^2,\\u(0,x)=0,\ \partial_tu(0,x)=\psi(x), & x\in\mathbb{R}^2.\end{cases}\tag{4.29}$$

记 $\tilde{\psi}(z)=\psi(y)$，$z=(y,y_3)\in\mathbb{R}^2\times\mathbb{R}$，我们以之为初值解三维的波方程，可得$$\tilde{u}(t,x,0)=\frac{1}{|\partial B_t(x,0)|}\int_{\partial B_t(x,0)}t\tilde{\psi}(z)\,\mathrm{d}S_z,\qquad t>0,\ x\in\mathbb{R}^2,$$其中$$\partial B_t(x,0)=\{z=(y,y_3):|y-x|^2+|y_3|^2=t^2\}.$$

记 $\mathrm{d}y_1\mathrm{d}y_2$ 为 $\mathrm{d}S_z$ 在二维圆盘 $D_t(x)=\{y\in\mathbb{R}^2:|y-x|<t\}$ 内的投影，则$$\frac{\mathrm{d}y_1\mathrm{d}y_2}{\mathrm{d}S_z}=\left|\boldsymbol{e}_3\cdot\left(\frac{y-x}{y_3-0}\right)\frac{1}{t}\right|=\frac{|y_3|}{t}=\frac{\sqrt{t^2-|y-x|^2}}{t}.$$

再注意到 $n=2$ 时，$|\partial B_t(x,0)|=4\pi t^2$，$|D_t(x)|=\pi t^2$，则$$\begin{aligned}\tilde{u}(t,x,0)&=\frac{1}{|\partial B_t(x,0)|}\cdot2\int_{D_t(x)}t\psi(y)\frac{t}{\sqrt{t^2-|y-x|^2}}\,\mathrm{d}y\\&=\frac{1}{|D_t(x)|}\int_{D_t(x)}t\psi(y)\frac{t}{2\sqrt{t^2-|y-x|^2}}\,\mathrm{d}y.\end{aligned}\tag{4.30}$$

因 $\tilde{u}(t,x,0)$ 满足 (4.29)，故 $u(t,x)=\tilde{u}(t,x,0)$ 是 Cauchy 问题 (4.29) 的解，这样就得到了 (4.29) 的解的存在性。

**定理 4.2.3** @114

设 $\varphi\in C^3(\mathbb{R}^2)$，$\psi\in C^2(\mathbb{R}^2)$，则二维波方程的 Cauchy 问题$$\begin{cases}\partial_t^2u-\Delta u=0, & (t,x)\in(0,+\infty)\times\mathbb{R}^2,\\u(0,x)=\varphi(x),\ \partial_tu(0,x)=\psi(x), & x\in\mathbb{R}^2\end{cases}\tag{4.31}$$存在唯一的解$$\begin{aligned}u(t,x)={}&\partial_t\left(\frac{1}{|D_t(x)|}\int_{D_t(x)}t\varphi(y)\frac{t}{2\sqrt{t^2-|y-x|^2}}\,\mathrm{d}y\right)\\&+\frac{1}{|D_t(x)|}\int_{D_t(x)}t\psi(y)\frac{t}{2\sqrt{t^2-|y-x|^2}}\,\mathrm{d}y,\qquad (t,x)\in(0,+\infty)\times\mathbb{R}^2.\end{aligned}\tag{4.32}$$

由表达式 (4.32) 可见，二维波方程的解 $u$ 在 $(t,x)$ 处的取值只依赖于初值 $(\varphi,\psi)$ 在圆盘 $D_t(x)$ 上的取值（唯一性见 4.5 节）。

对于一般高维波方程 Cauchy 问题的求解，采用球平均法可求得奇数维问题的解，再用降维法可求得偶数维问题的解。对于非齐次方程的 Cauchy 问题，则可利用定理 4.2.3 及齐次化原理给出解的显式表示。

### 4.3 波的传播和解关于时间的衰减性（p117–122）

在本节中，我们利用三维及二维波方程 Cauchy 问题的解的表达式，揭示波的传播及其随时间趋于 $+\infty$ 时的衰减性质。

#### 4.3.1 依赖区域、影响区域和决定区域 @117

由 d'Alembert 公式 (4.18) 立即可看出，Cauchy 问题

$$\begin{cases}\partial_t^2u-\partial_x^2u=0, & (t,x)\in(0,+\infty)\times\mathbb{R},\\u(0,x)=\varphi(x),\ \partial_tu(0,x)=\psi(x), & x\in\mathbb{R}\end{cases}$$

的解在上半平面 $\mathbb{R}_+\times\mathbb{R}$ 中的点 $(t_0,x_0)$ 处的值 $u(t_0,x_0)$ 由 $\varphi,\psi$ 在区间 $[x_0-t_0,x_0+t_0]$ 上的值所唯一确定，而与 $\varphi,\psi$ 在该区间外的取值无关。

**定义 (依赖区间)** @117

对一维波方程的上述 Cauchy 问题，区间 $\{x:|x-x_0|\leqslant t_0\}$ 称为点 $(t_0,x_0)$ 的**依赖区间**。它是过点 $(t_0,x_0)$ 的斜率为 $\pm1$ 的直线在 $x$ 轴上所截得的闭区间（图 4.3）。

**定义 (决定区域)** @118

对 $x$ 轴上的区间 $[x_1,x_2]$，它和直线 $x=x_1+t$ 与 $x=x_2-t$ 共同围成一个三角形区域

$$\{(t,x):x_1+t\leqslant x\leqslant x_2-t,\ t\geqslant0\}.$$

此区域内任何一点 $(t,x)$ 的依赖区间都落在 $[x_1,x_2]$ 内，因此 Cauchy 问题在此区域内的取值就完全由 $[x_1,x_2]$ 上的初值决定，而与此区间外的初值无关。该区域称为 $[x_1,x_2]$ 的**决定区域**（图 4.4）。若记此区域的顶点为 $(t_0,x_0)$，则此区域为

$$\{(t,x):|x-x_0|\leqslant t_0-t,\ 0\leqslant t\leqslant t_0\}.$$

**定义 (影响区域)** @118

如果初值 $(\varphi,\psi)$ 在区间 $[x_1,x_2]$ 上有扰动，那么经过时间 $t$ 后该扰动所影响的范围不超过

$$x_1-t\leqslant x\leqslant x_2+t,$$

在此范围外则不受影响。在上半平面 $(0,+\infty)\times\mathbb{R}$ 中，该区域 $\{(t,x):x_1-t\leqslant x\leqslant x_2+t,\ t\geqslant0\}$ 称为 $[x_1,x_2]$ 的**影响区域**（图 4.5）。

**注 (特征线)** @118

直线 $x=x_0\pm t$ 对波方程的研究起到了重要的作用，它们称为一维波方程的**特征线**，扰动实际上沿特征线传播。

**定义 (二维的依赖区域与决定区域)** @118

再考察二维情形（图 4.6）。任取 $(t_0,x_0)\in(0,+\infty)\times\mathbb{R}^2$，由 4.2 节得到的解的表达式 (4.32)，解在该点的值仅依赖 $(\varphi,\psi)$ 在初始平面上的圆盘

$$\{x:|x-x_0|\leqslant t_0\} \tag{4.33}$$

内的取值。因此该区域就称为 $(t_0,x_0)$ 的**依赖区域**。反之，$(\varphi,\psi)$ 在圆盘 (4.33) 中的值也唯一决定了上半空间中以 $(t_0,x_0)$ 为顶点、以该区域为底面的圆锥体区域

$$\{(t,x):|x-x_0|\leqslant t_0-t,\ 0\leqslant t\leqslant t_0\} \tag{4.34}$$

上的解，(4.34) 就称为 (4.33) 的**决定区域**。

**定义 (二维点的影响区域)** @119

对于初始平面上的点 $(0,x_0)$（图 4.7），其影响区域为

$$\{(t,x):|x-x_0|\leqslant t,\ t\geqslant0\}.$$

**定义 (三维的依赖区域、决定区域与影响区域)** @119

在三维情形，任取 $(t_0,x_0)\in(0,+\infty)\times\mathbb{R}^3$。由解的表达式 (4.28)，解在点 $(t_0,x_0)$ 的取值由初始平面上以 $(0,x_0)$ 为球心、$t_0$ 为半径的球面上 $\varphi,\psi$ 的值所决定。因此超平面 $t=0$ 上的球面

$$\{x\in\mathbb{R}^3:|x-x_0|=t_0\}$$

就是点 $(t_0,x_0)$ 的**依赖区域**。球面的内部区域 $\{x\in\mathbb{R}^3:|x-x_0|\leqslant t_0\}$ 的**决定区域**为以该区域为底、以 $(t_0,x_0)$ 为顶点的圆锥体区域

$$\{(t,x)\in(0,+\infty)\times\mathbb{R}^3:|x-x_0|\leqslant t_0-t,\ 0\leqslant t\leqslant t_0\}.$$

相应地，初始平面上一点 $(0,x_0)$ 的**影响区域**为锥面

$$\{(t,x)\in(0,+\infty)\times\mathbb{R}^3:|x-x_0|=t,\ t\geqslant0\}.$$

初始平面上任一给定区域的影响区域就是过其上每一点所作锥面的全体所形成的区域。

**定义 (特征锥)** @119

由以上过程可以看到，锥面

$$\{(t,x)\in(0,+\infty)\times\mathbb{R}^3:|x-x_0|=|t-t_0|\}$$

在波方程的研究中起重要作用，它称为波方程的**特征锥**。

#### 4.3.2 有限传播速度和 Huygens 原理 @119

对波方程的 Cauchy 问题

$$\begin{cases}\partial_t^2u-\Delta u=0, & (t,x)\in(0,+\infty)\times\mathbb{R}^n,\\u(0,x)=0,\ \partial_tu(0,x)=\psi(x), & x\in\mathbb{R}^n.\end{cases} \tag{4.35}$$

**命题 (有限传播速度)** @120

若 $\psi(x)$ 具有紧支集 $\operatorname{supp}\psi\subset B_R$，则对任意满足 $|x|>R+t$ 的 $x$，均有 $B_t(x)\cap B_R=\varnothing$。利用 4.2 节得到的 $n=1,2,3$ 时的表达式 (4.18)、(4.32)、(4.28)，此时均有 $u(t,x)=0$。

即 $B_R$ 中的初值至少要经过时间 $t$ 才能影响到解 $u$ 在 $\partial B_{R+t}$ 上各点的值，这表明此时波的传播速度为 $1$。这一有限传播速度性质与热方程是完全不同的。

对一般的波方程 $\partial_t^2u-a^2\Delta u=f$，其波的传播速度为 $a$。

**注 (Huygens 原理)** @120

进一步观察三维情形的表达式 (4.28) 会发现，$x_0$ 处初值 $\psi(x_0)$ 在 $t$ 时刻仅会在计算 $\partial B_t(x_0)$ 这一球面上解的值时出现，不会影响球面内和球面外其他点的值。这样，当初始扰动发生在三维空间中某一局部范围内时，波的传播会形成清晰的前阵面和后阵面。这个现象在物理学中被称为 **Huygens 原理**。

**注 (波的弥散)** @120

二维情形 (4.32) 则完全不同：$x_0$ 处初值 $\psi(x_0)$ 在 $t$ 时刻会影响到解在圆盘 $D_t(x_0)$ 上所有点的值，且随着时间 $t$ 的增加，扰动的影响会越来越弱，但永远不会消失。这样，在二维情形，局部范围中的初始扰动导致波的传播形成清晰的前阵面，但没有后阵面，Huygens 原理不成立。这个现象称为**波的弥散**，这是二维波方程与三维波方程的一个本质区别。

#### 4.3.3 特征曲面与弱间断解 @120

**例 (弦振动方程的弱间断解)** @120

设 $u(t,x)=\varphi(x-t)$，其中

$$\varphi(x)=\begin{cases}(x^2-1)^2, & |x|\leqslant1,\\[2pt] 0, & |x|>1.\end{cases}$$

注意，函数 $\varphi\in C^1(\mathbb{R})$ 但其二阶导数在 $x=\pm1$ 处有间断。显然

$$u(t,x)=\begin{cases}[(x-t)^2-1]^2, & |x-t|\leqslant1,\\[2pt] 0, & |x-t|>1.\end{cases}$$

它的二阶导数在特征线 $x-t=\pm1$ 处有间断，因此不是一维波方程的经典解。但从弦振动方程的导出过程可以看出，这种解也是有物理意义的。

**定义 4.3.1 (弱间断解)** @120

对于 $n$ 维连通区域 $\Omega$ 中的二阶线性方程

$$\sum_{i,j=1}^{n}a_{ij}\partial_{x_ix_j}u+\sum_{k=1}^{n}b_k\partial_{x_k}u+cu=f, \tag{4.36}$$

其中 $a_{ij},b_k,c,f$ 是 $\Omega$ 中充分光滑的函数。设 $S$ 为由 $\varphi\in C^1(\Omega)$ 所决定的 $n-1$ 维曲面

$$S=\{x\in\Omega:\varphi(x)=0,\ \nabla\varphi\neq0\}.$$

如果 $u\in C^1(\overline{\Omega})$ 在 $\Omega$ 中除了 $n-1$ 维曲面 $S$ 之外都有二阶连续偏导数，且处处满足方程，并且 $u$ 的二阶偏导数在 $S$ 上有第一类间断，则称 $u$ 为方程 (4.36) 的**弱间断解**，$S$ 为 $u$ 的**弱间断面**（一维时称为弱间断线）。

在上面的例子中，弱间断线恰好是特征线，即弱间断沿特征线发生，这反映了一个很重要的事实。

**定义 4.3.2 (特征曲面)** @121

对于区域 $\Omega$ 中的方程 (4.36) 和超曲面 $S=\{x\in\Omega:\varphi(x)=0,\ \nabla\varphi\neq0\}$，其中 $\varphi\in C^1(\Omega)$，如果在 $S$ 上处处成立

$$\sum_{i,j=1}^{n}a_{ij}\partial_{x_i}\varphi\,\partial_{x_j}\varphi=0, \tag{4.37}$$

则称 $S$ 为方程 (4.36) 的**特征曲面**。

对于一个固定的点 $x$，如果过该点的非零向量 $\boldsymbol{\alpha}=(\alpha_1,\alpha_2,\cdots,\alpha_n)$ 满足特征方程

$$\sum_{i,j=1}^{n}a_{ij}\alpha_i\alpha_j=0,$$

则称 $\boldsymbol{\alpha}$ 为该点的**特征方向**。特征曲面就是每点的法向都是该点的特征方向的曲面。

**定理 4.3.1** @121

方程 (4.36) 的弱间断解的弱间断面 $S=\{\varphi=0:\varphi\in C^1(\Omega),\nabla\varphi\neq0\}$ 必为其特征曲面。

**注 4.3.1** @122

定理 4.3.1 仅表明弱间断解的弱间断面是特征曲面，对于其他形式的间断解，其间断未必沿特征曲面发生。

#### 4.3.4 解关于时间的衰减性 @122

**定理 4.3.2** @122

设 $\varphi\in C^3(\mathbb{R}^3)$，$\psi\in C^2(\mathbb{R}^3)$ 具有紧支集，即存在 $\rho>0$，使得 $\operatorname{supp}\varphi,\operatorname{supp}\psi\subset B_\rho$，则三维波方程的 Cauchy 问题 (4.27) 的解满足如下衰减估计：

$$\sup_{x\in\mathbb{R}^3}|u(t,x)|\leqslant\frac{C}{t}\bigl[\|\varphi\|_{L^\infty(\mathbb{R}^3)}+\|\nabla\varphi\|_{L^\infty(\mathbb{R}^3)}+\|\psi\|_{L^\infty(\mathbb{R}^3)}\bigr],\quad\forall t\geqslant1,$$

其中常数 $C=C(\rho)>0$。

定理 4.3.2 表明，当 $t\to+\infty$ 时，三维波方程具有光滑紧支集初值 Cauchy 问题的解将以 $t^{-1}$ 的速度一致趋于 $0$。对于二维波方程，若初值具有紧支集，则其 Cauchy 问题的解在 $t\to+\infty$ 时，将以 $t^{-\frac12}$ 的速度一致趋于 $0$。而对于一维波方程，即弦振动方程，由 d'Alembert 公式可知其 Cauchy 问题的解不会在 $t\to+\infty$ 时衰减为 $0$（其证明留作习题）。

### 4.4 分离变量法和初边值问题解的存在性（p123–128）

**构造 (分离变量求非零特解)** @124

仿照热方程情形，先求可以分离变量的非零特解

$$u(t,x)=T(t)X(x).$$

将其代入方程，可得 $T''(t)X(x)-T(t)X''(x)=0$，从而

$$\frac{T''(t)}{T(t)}=\frac{X''(x)}{X(x)}=-\lambda, \tag{4.40}$$

其中 $\lambda$ 为一常数。另外，$u$ 满足齐次 Dirichlet 边界条件，则

$$X(0)=X(L)=0. \tag{4.41}$$

**命题 (一维 Dirichlet 特征值问题)** @124

结合 (4.40)、(4.41) 可得：当 $\lambda<0$ 或 $\lambda=0$ 时，$X(x)\equiv0$；而当 $\lambda>0$ 时，$-X''(x)=\lambda X(x)$ 的通解为

$$X(x)=C_1\cos\sqrt{\lambda}\,x+C_2\sin\sqrt{\lambda}\,x,$$

只有当

$$\lambda=\frac{k^2\pi^2}{L^2},\quad k\in\mathbb{N}_+$$

时，特征值问题 (4.40)、(4.41) 存在非平凡解

$$X_k(x)=C_k\sin\frac{k\pi x}{L}.$$

**构造 (特解与形式级数解)** @124

将特征值 $\lambda=\dfrac{k^2\pi^2}{L^2}$ 代入 $-T''(t)=\lambda T(t)$，就相应地得到

$$T_k(t)=A_k\cos\frac{k\pi t}{L}+B_k\sin\frac{k\pi t}{L}.$$

这样我们得到了弦振动方程满足齐次 Dirichlet 边界条件的一列特解

$$u_k(t,x)=\left(A_k\cos\frac{k\pi t}{L}+B_k\sin\frac{k\pi t}{L}\right)\sin\frac{k\pi x}{L},\quad k\in\mathbb{N}_+.$$

我们希望这些特解的线性组合能给出初边值问题 (4.39) 的解，即要给定两列常数 $A_k,B_k$，使

$$u(t,x)=\sum_{k=1}^{\infty}\left(A_k\cos\frac{k\pi t}{L}+B_k\sin\frac{k\pi t}{L}\right)\sin\frac{k\pi x}{L} \tag{4.42}$$

满足初值条件。作形式计算，

$$\partial_tu(t,x)=\sum_{k=1}^{\infty}\frac{k\pi}{L}\left(-A_k\sin\frac{k\pi t}{L}+B_k\cos\frac{k\pi t}{L}\right)\sin\frac{k\pi x}{L}, \tag{4.43}$$

从而

$$u(0,x)=\sum_{k=1}^{\infty}A_k\sin\frac{k\pi x}{L}=\varphi(x),\qquad\partial_tu(0,x)=\sum_{k=1}^{\infty}B_k\frac{k\pi}{L}\sin\frac{k\pi x}{L}=\psi(x).$$

**构造 (由正交性确定系数)** @125

注意到 $\left\{\sin\dfrac{k\pi x}{L}\right\}_{k=1}^{\infty}$ 为 $L^2(I)$ 上的一组正交基，因此

$$A_k=\frac{2}{L}\int_0^L\varphi(y)\sin\frac{k\pi y}{L}\,\mathrm{d}y,\qquadB_k=\frac{2}{k\pi}\int_0^L\psi(y)\sin\frac{k\pi y}{L}\,\mathrm{d}y,\quad k\in\mathbb{N}_+, \tag{4.44}$$

将其代入 (4.42)，就得到级数形式的初边值问题 (4.39) 的解。为了说明此级数解确实是原问题的解，我们需要假设初值 $\varphi$ 及 $\psi$ 满足一定的条件。

**定理 4.4.1** @125

若初值 $\varphi\in C^3(I)$，$\psi\in C^2(I)$，并且满足 $C^2$ 相容性条件

$$\varphi(0)=\varphi(L)=0,\quad\psi(0)=\psi(L)=0,\quad\varphi''(0)=\varphi''(L)=0,$$

则弦振动方程的初边值问题 (4.39) 的解是存在的，并且它可以由 (4.42) 给出，其中 $A_k,B_k$ 由 (4.44) 给出。

**注 4.4.1** @126

为了得到初边值问题 (4.39) 的 $C^2$ 解，我们需要对初值 $\varphi,\psi$ 提出一定的正则性要求以及恰当的相容性条件。当初值不满足这样的正则性以及相容性条件时，例如仅仅要求 $\varphi\in L^2(I),\varphi'\in L^2(I),\psi\in L^2(I)$ 及 $\varphi(0)=\varphi(L)=0$，级数解 (4.42) 显然不是初边值问题 (4.39) 的经典解，但仍是适当意义下的合理的解。

**注 4.4.2** @126

利用分离变量法，我们将弦振动方程的解表示为一系列特解之和。这与物理学上将一个复杂的振动视为若干简单振动的叠加是吻合的。

**例 4.4.1** @126

用分离变量法求解如下弦振动方程的初边值问题：

$$\begin{cases}\partial_t^2u-\partial_x^2u=0, & (t,x)\in(0,+\infty)\times(0,1),\\u(0,x)=\varphi(x),\ \partial_tu(0,x)=0, & x\in(0,1),\\u(t,0)=u(t,1)=0, & t\in(0,+\infty),\end{cases}$$

其中

$$\varphi(x)=\begin{cases}2\varepsilon x, & x\in\left(0,\dfrac12\right],\\[6pt] 2\varepsilon(1-x), & x\in\left(\dfrac12,1\right),\end{cases}$$

其图像如图 4.8 所示。

**解** 利用分离变量法，该初边值问题的解 $u(t,x)$ 可由级数解 (4.42) 来表示。由于初值 $\psi(x)=0,\ x\in(0,1)$，则 $B_k=0,\ k\in\mathbb{N}_+$。又由 (4.44) 知

$$A_k=2\int_0^1\varphi(y)\sin k\pi y\,\mathrm{d}y=\frac{8\varepsilon}{k^2\pi^2}\sin\frac{k\pi}{2},$$

于是

$$u(t,x)=\frac{8\varepsilon}{\pi^2}\sum_{k=1}^{\infty}\frac{1}{k^2}\sin\frac{k\pi}{2}\sin k\pi x\cos k\pi t,\quad (t,x)\in[0,+\infty)\times(0,1).$$

**构造 (非齐次方程的齐次化)** @127

接下来讨论非齐次弦振动方程的初边值问题

$$\begin{cases}\partial_t^2u-\partial_x^2u=f(t,x), & (t,x)\in(0,+\infty)\times I,\\u(0,x)=0,\ \partial_tu(0,x)=0, & x\in I,\\u(t,0)=u(t,L)=0, & t\in(0,+\infty).\end{cases} \tag{4.45}$$

类似于非齐次方程的 Cauchy 问题，此时齐次化原理也适用，即

$$u(t,x)=\int_0^tw(t,x;\tau)\,\mathrm{d}\tau$$

为 (4.45) 的解，其中 $w(t,x;\tau)$ 为齐次方程的初边值问题

$$\begin{cases}\partial_t^2w-\partial_x^2w=0, & (t,x)\in(\tau,+\infty)\times I,\\w(\tau,x;\tau)=0,\ \partial_tw(\tau,x;\tau)=f(\tau,x), & x\in I,\\w(t,0;\tau)=w(t,L;\tau)=0, & t\in(\tau,+\infty)\end{cases}$$

的解。利用 (4.42)，我们得到

$$w(t,x;\tau)=\sum_{k=1}^{\infty}B_k(\tau)\sin\frac{k\pi(t-\tau)}{L}\sin\frac{k\pi x}{L}, \tag{4.46}$$

其中

$$B_k(\tau)=\frac{2}{k\pi}\int_0^Lf(\tau,y)\sin\frac{k\pi y}{L}\,\mathrm{d}y,\quad k\in\mathbb{N}_+.$$

这样，我们就得到了非齐次方程初边值问题的解。

**命题 (非齐次方程级数解的存在性)** @127

类似于定理 4.4.1，可以证明：当 $f\in C^2([0,+\infty)\times I)$，且满足

$$f(t,0)=f(t,L)=0,\quad t\in[0,+\infty)$$

时，级数

$$u(t,x)=\sum_{k=1}^{\infty}\int_0^tB_k(\tau)\sin\frac{k\pi(t-\tau)}{L}\,\mathrm{d}\tau\,\sin\frac{k\pi x}{L}$$

确实是初边值问题 (4.45) 的解。

**构造 (非齐次边值条件的齐次化)** @127

最后讨论带有非齐次边值条件的弦振动方程的初边值问题

$$\begin{cases}\partial_t^2u-\partial_x^2u=f(t,x), & (t,x)\in(0,+\infty)\times I,\\u(0,x)=\varphi(x),\ \partial_tu(0,x)=\psi(x), & x\in I,\\u(t,0)=g_0(t),\ u(t,L)=g_1(t), & t\in(0,+\infty).\end{cases} \tag{4.47}$$

首先可以通过未知函数变换，将 (4.47) 转化为齐次边值问题。令

$$u^*(t,x)=g_0(t)+\frac{x}{L}\left[g_1(t)-g_0(t)\right],\quad (t,x)\in[0,+\infty)\times I,$$

及 $\tilde{u}(t,x)=u(t,x)-u^*(t,x)$，则函数 $\tilde{u}$ 满足齐次边值问题

$$\begin{cases}\partial_t^2\tilde{u}-\partial_x^2\tilde{u}=\tilde{f}(t,x), & (t,x)\in(0,+\infty)\times I,\\\tilde{u}(0,x)=\tilde{\varphi}(x),\ \partial_t\tilde{u}(0,x)=\tilde{\psi}(x), & x\in I,\\\tilde{u}(t,0)=\tilde{u}(t,L)=0, & t\in(0,+\infty),\end{cases}$$

其中

$$\tilde{f}(t,x)=f(t,x)-g_0''(t)+\frac{x}{L}\left[g_0''(t)-g_1''(t)\right],$$

$$\tilde{\varphi}(x)=\varphi(x)-g_0(0)-\frac{x}{L}\left[g_1(0)-g_0(0)\right],$$

$$\tilde{\psi}(x)=\psi(x)-g_0'(0)-\frac{x}{L}\left[g_1'(0)-g_0'(0)\right].$$

**构造 (叠加原理与解的表达)** @128

进一步地，由叠加原理我们可以分别求解带非齐次初值的齐次方程的初边值问题

$$\begin{cases}\partial_t^2v-\partial_x^2v=0, & (t,x)\in(0,+\infty)\times I,\\v(0,x)=\tilde{\varphi}(x),\ \partial_tv(0,x)=\tilde{\psi}(x), & x\in I,\\v(t,0)=v(t,L)=0, & t\in(0,+\infty),\end{cases}$$

及带齐次初值的非齐次方程的初边值问题

$$\begin{cases}\partial_t^2w-\partial_x^2w=\tilde{f}(t,x), & (t,x)\in(0,+\infty)\times I,\\w(0,x)=0,\ \partial_tw(0,x)=0, & x\in I,\\w(t,0)=w(t,L)=0, & t\in(0,+\infty).\end{cases}$$

最终，我们得到初边值问题 (4.47) 的解为

$$u(t,x)=u^*(t,x)+v(t,x)+w(t,x),\quad (t,x)\in[0,+\infty)\times\bar{I}.$$

对于高维情形，可以利用 2.5 节调和方程的特征值理论，类似于热方程的讨论，得到高维波方程初边值问题解的表示。

### 4.5 能量方法和解的唯一性与稳定性（p129–135）

在本节中，我们将采用能量方法得到波方程的解的能量估计，从而得到波方程定解问题（包括初边值问题和 Cauchy 问题）解的唯一性和稳定性。

#### 4.5.1 初边值问题解的唯一性和稳定性 @130

**定义 (能量与初边值问题)** @130

结合波方程的物理背景，弹性体在光滑有界区域 $\Omega\subset\mathbb{R}^n$ 上的能量 $E(t)$ 由动能 $\frac{1}{2}\int_\Omega(\partial_t u)^2\mathrm{d}x$ 及弹性势能 $\frac{1}{2}\int_\Omega|\nabla u|^2\mathrm{d}x$ 组成，即

$$E(t)=\frac{1}{2}\int_\Omega\left[(\partial_t u)^2+|\nabla u|^2\right]\mathrm{d}x,\qquad t\in[0,+\infty). \tag{4.48}$$

记 $\Omega_T:=(0,T)\times\Omega$，我们首先对初边值问题

$$\begin{cases}\partial_t^2 u-\Delta u=f(t,x), & (t,x)\in\Omega_T,\\u(0,x)=\varphi(x),\ \partial_t u(0,x)=\psi(x), & x\in\Omega,\\u(t,x)=0, & (t,x)\in(0,T)\times\partial\Omega\end{cases} \tag{4.49}$$

的解建立关于 $E(t)$ 的估计。

**定理 4.5.1 (能量估计)** @130

若 $u\in C^2([0,T]\times\overline{\Omega})$ 为初边值问题 (4.49) 的解，则如下能量估计成立：

$$E(t)\leqslant C\left[\|\psi\|_{L^2(\Omega)}^2+\|\nabla\varphi\|_{L^2(\Omega)}^2+\|f\|_{L^2(\Omega_T)}^2\right],\qquad \forall t\in[0,T], \tag{4.50}$$

其中 $C=C(T)>0$ 为不依赖于 $u$ 的常数。

**推论 4.5.1 (能量守恒)** @131

当 $f$ 恒为零时，初边值问题 (4.49) 的能量 $E(t)$ 为常数。也就是说，对于边界固定的自由振动过程，其能量是守恒的。

**定理 4.5.2 (唯一性与连续依赖性)** @131

(4.49) 的解若存在，则必是唯一的，并且该解关于初值 $\varphi,\psi$ 以及右端项 $f$ 是连续依赖的。

**例 4.5.1 (用能量方法证明唯一性)** @132

用能量方法证明如下初边值问题解的唯一性：

$$\begin{cases}\partial_t^2 u-\Delta u=0, & (t,x)\in\Omega_T,\\u(0,x)=\varphi(x),\ \partial_t u(0,x)=\psi(x), & x\in\Omega,\\\dfrac{\partial u}{\partial\boldsymbol{n}}+\sigma u=0, & (t,x)\in(0,T)\times\partial\Omega.\end{cases}$$

设 $u\in C^2(\Omega_T)\cap C^1(\overline{\Omega_T})$ 为该初边值问题的解。取

$$E_\sigma(t)=\frac{1}{2}\int_\Omega\left(|\partial_t u|^2+|\nabla u|^2\right)\mathrm{d}x+\frac{\sigma}{2}\int_{\partial\Omega}u^2\mathrm{d}S,$$

则 $\dfrac{\mathrm{d}E_\sigma(t)}{\mathrm{d}t}=0,\ \forall t\geqslant 0$，从而

$$E_\sigma(t)\equiv E_\sigma(0)=\frac{1}{2}\int_\Omega\left(|\psi|^2+|\nabla\varphi|^2\right)\mathrm{d}x+\frac{\sigma}{2}\int_{\partial\Omega}\varphi^2\mathrm{d}S,\qquad \forall t\geqslant 0.$$

由此能量估计可得，当初始值 $\varphi\equiv 0,\ \psi\equiv 0$ 时，能量 $E_\sigma(t)\equiv 0$。因此解 $u$ 恒为常数，于是由边界条件知 $u\equiv 0$。最后利用方程的线性叠加性，易得该初边值问题解的唯一性。

**定义 (耗散边界条件下的初边值问题与能量)** @132

当弹性体振动时，若在边界上受到阻尼力的作用，弹性体会渐渐趋于静止。下面我们用能量方法，在数学上严格证明这一点。

考虑如下带有耗散边界条件的弦振动方程的初边值问题：

$$\begin{cases}\partial_t^2 u-\partial_x^2 u=0, & (t,x)\in(0,+\infty)\times(0,1),\\u(0,x)=\varphi(x),\ \partial_t u(0,x)=\psi(x), & x\in(0,1),\\u(t,0)=0, & t\in(0,+\infty),\\\partial_x u(t,1)+\alpha\partial_t u(t,1)=0, & t\in(0,+\infty),\end{cases} \tag{4.52}$$

其中 $\alpha>0$。定义能量函数

$$E(t)=\frac{1}{2}\int_0^1\left(|\partial_t u|^2+|\partial_x u|^2\right)\mathrm{d}x. \tag{4.53}$$

**定理 4.5.3 (能量的指数衰减)** @133

设 $u$ 为初边值问题 (4.52) 的经典解，则其能量随时间 $t\to+\infty$ 是指数衰减的，即存在常数 $C>0,\ \mu>0$，使得

$$E(t)\leqslant Ce^{-\mu t}E(0),\qquad t\in[0,+\infty).$$

#### 4.5.2 Cauchy 问题解的唯一性 @134

**定义 (锥形区域上的能量与流出能量)** @134

以三维情形为例，考虑波方程的 Cauchy 问题

$$\begin{cases}\partial_t^2 u-\Delta u=0, & (t,x)\in(0,+\infty)\times\mathbb{R}^3,\\u(0,x)=\varphi(x),\ \partial_t u(0,x)=\psi(x), & x\in\mathbb{R}^3.\end{cases} \tag{4.56}$$

设 $(t_0,x_0)\in(0,+\infty)\times\mathbb{R}^3$，对任意 $t\in[0,t_0]$，定义

$$E(t)=\frac{1}{2}\int_{B_{t_0-t}(x_0)}\left[(\partial_t u)^2+|\nabla u|^2\right]\mathrm{d}x,$$

$$F(t)=\frac{1}{2}\int_0^t\int_{\partial B_{t_0-s}(x_0)}\left|\boldsymbol{n}\partial_t u(s,x)-\nabla u(s,x)\right|^2\mathrm{d}S_x\mathrm{d}s.$$

通常如图 4.9 所示，$E(t)$ 称为 $B_{t_0-t}(x_0)$ 上的能量，$F(t)$ 称为 $\Sigma_t(x_0)=\{(s,x):0\leqslant s\leqslant t,\ x\in\partial B_{t_0-s}(x_0)\}$ 上流出的能量。

**命题 (Cauchy 问题的能量等式)** @135

对上述 Cauchy 问题，成立

$$E(t)+F(t)=E(0),\qquad \forall t\in[0,t_0].$$

这表明没有外力作用时，波方程的能量守恒。利用这一点，我们容易得到 Cauchy 问题解的唯一性。

**定理 4.5.4 (三维波方程 Cauchy 问题解的唯一性)** @135

三维波方程的 Cauchy 问题

$$\begin{cases}\partial_t^2 u-\Delta u=f(t,x), & (t,x)\in(0,+\infty)\times\mathbb{R}^3,\\u(0,x)=\varphi(x),\ \partial_t u(0,x)=\psi(x), & x\in\mathbb{R}^3\end{cases} \tag{4.57}$$

的 $C^2(\mathbb{R}_+\times\mathbb{R}^3)$ 解若存在，则必是唯一的。

### 4.6 一般的双曲型方程（p137–139）

**定义 (一般的线性双曲型方程)** @137

在这一章中，我们讨论了常系数波方程的物理背景、解的表达式和解的性质。对于更一般的线性双曲型方程，我们可以把它写成

$$\partial_t^2 u=Lu+f, \tag{4.58}$$

其中

$$Lu=\sum_{i,j=1}^n\partial_{x_i}\left(a_{ij}\partial_{x_j}u\right)+\sum_{i=1}^n b_i\partial_{x_i}u+cu.$$

这里，$a_{ij},b_i,c\in C^\infty(\overline{U})$，$a_{ij}=a_{ji},\ i,j=1,2,\cdots,n$。进一步，我们要求算子 $L$ 满足一致椭圆性条件，即存在 $\lambda>0$，使得

$$\sum_{i,j=1}^n a_{ij}(t,x)\xi_i\xi_j\geqslant\lambda|\xi|^2,\qquad \forall\xi\in\mathbb{R}^n,\ \forall(t,x)\in U,$$

这里 $U$ 为具体的时空区域。

一般形式的线性双曲型方程可以描述波在非均匀介质中的传播或随时空变化的波动现象等。此外，对于拟线性波方程

$$\partial_t^2 u-a^2(u,\partial_t u,\nabla u)\Delta u=f(u,\partial_t u,\nabla u),$$

也可以通过线性化迭代的方法

$$\partial_t^2 u^{(m)}-a^2\left(u^{(m-1)},\partial_t u^{(m-1)},\nabla u^{(m-1)}\right)\Delta u^{(m)}=f\left(u^{(m-1)},\partial_t u^{(m-1)},\nabla u^{(m-1)}\right)$$

得到近似解序列 $\{u^{(m)}\}$。因此，研究满足 (4.58) 形式的线性波方程，为我们提供了一个研究更复杂的拟线性波方程的思路。

**定义 (Cauchy 问题与初边值问题)** @138

对于一般的双曲型方程，我们仍然可以提相应的 Cauchy 问题

$$\begin{cases}\partial_t^2 u=Lu+f, & (t,x)\in(0,T)\times\mathbb{R}^n,\\u(0,x)=\varphi(x),\ \partial_t u(0,x)=\psi(x), & x\in\mathbb{R}^n,\end{cases} \tag{4.59}$$

以及有界区域上的初边值问题

$$\begin{cases}\partial_t^2 u=Lu+f, & (t,x)\in(0,T)\times\Omega,\\u(0,x)=\varphi(x),\ \partial_t u(0,x)=\psi(x), & x\in\Omega,\\u(t,x)=g(t,x), & (t,x)\in(0,T)\times\partial\Omega.\end{cases} \tag{4.60}$$

这里我们选取了 Dirichlet 边界条件。事实上，我们也可以考虑 Neumann 边界条件、Robin 边界条件、耗散边界条件，以及相对应的初边值问题。

对于问题 (4.59) 和 (4.60)，通常无法直接写出解的表达式，进而由表达式得到解的性质。但我们在这一章的前几节学习的定性分析方法，特别是能量方法仍然适用，并可以帮助我们得到波方程的很多重要性质，例如解的正则性、衰减性以及波的有限传播速度等。

**定理 4.6.1 (有限传播速度)** @138

波方程 (4.58) 的经典解具有有限传播速度。也就是说，若 $u_1,u_2$ 是 (4.58) 的经典解，且满足

$$u_1(0,x)=u_2(0,x),\qquad \partial_t u_1(0,x)=\partial_t u_2(0,x),\qquad \forall x\in B_R(x_0),$$

则存在常数 $A>0$，使得

$$u_1(t,x)=u_2(t,x),\qquad \forall(t,x)\in\left\{|x-x_0|<R-At,\ 0\leqslant t<\frac{R}{A}\right\}.$$

**注 4.6.1 (有限传播速度的含义)** @139

这一结论表明，初值在 $B_R(x_0)$ 以外发生的变化不会马上对 $x_0$ 处的解产生影响，而至少要等到 $t\geqslant\dfrac{R}{A}$ 之后。

**注 (唯一性与存在性)** @139

利用这个结论，我们还可以直接得到 Cauchy 问题 (4.59) 经典解的唯一性。请读者尝试利用能量方法分析各类初边值问题经典解的唯一性。

值得注意的是，采用 Galerkin 方法，并利用能量方法建立双曲型方程解的先验估计，还能得到解的存在性。

## 第5章 偏微分方程的应用

### 5.1 电磁学与 Maxwell 方程组（p142–144）

**定义 (真空中的 Maxwell 方程组)** @143

Maxwell 方程组在不同应用需求下往往写作不同的等价形式，其中真空中 Maxwell 方程组的微分形式为

$$\begin{cases}\operatorname{div}\boldsymbol{E}=\dfrac{\rho}{\varepsilon_0}, & \tag{5.1}\\\operatorname{div}\boldsymbol{B}=0, & \tag{5.2}\\\operatorname{curl}\boldsymbol{E}=-\dfrac{\partial \boldsymbol{B}}{\partial t}, & \tag{5.3}\\\operatorname{curl}\boldsymbol{B}=\mu_0\left(\varepsilon_0\dfrac{\partial \boldsymbol{E}}{\partial t}+\boldsymbol{j}\right). & \tag{5.4}\end{cases}$$

这是一组一阶线性偏微分方程组，其中 $\boldsymbol{E}=(E_1,E_2,E_3)^{\mathrm{T}}$ 为电场强度向量，$\boldsymbol{B}=(B_1,B_2,B_3)^{\mathrm{T}}$ 为磁感应强度向量，$\rho$ 为电荷密度函数，$\boldsymbol{j}=(j_1,j_2,j_3)^{\mathrm{T}}$ 为电流密度函数，它们都是时间变量 $t$ 和空间变量 $x$ 的函数，$\varepsilon_0$ 为真空中的介电常数，$\mu_0$ 为真空中的磁导率。

**命题 (电场的 Gauss 定律)** @143

方程组中的第一个方程 $\operatorname{div}\boldsymbol{E}=\rho/\varepsilon_0$ 称为电场的 Gauss 定律。对任意具有光滑边界的有界区域 $\Omega$，将方程两边关于 $x$ 在 $\Omega$ 上积分并使用 Gauss-Green 公式，可得

$$\int_{\partial\Omega}\boldsymbol{E}\cdot\boldsymbol{n}\,\mathrm{d}S=\frac{1}{\varepsilon_0}\int_{\Omega}\rho\,\mathrm{d}x,$$

即通过任意封闭曲面 $\partial\Omega$ 向外的电通量等于此曲面内部所包含的电荷的代数和（正负电荷相互抵消）除以 $\varepsilon_0$。

**命题 (磁场的 Gauss 定律)** @143

第二个方程 $\operatorname{div}\boldsymbol{B}=0$ 称为磁场的 Gauss 定律，类似可得

$$\int_{\partial\Omega}\boldsymbol{B}\cdot\boldsymbol{n}\,\mathrm{d}S=0,$$

即通过任意封闭曲面 $\partial\Omega$ 的磁感应通量为 $0$，磁场是一个无源场。时空之中是否存在像电荷一样的磁单极子，一直是物理学中的重要问题：如果磁单极子得以发现，整个 Maxwell 方程组都要进行变化调整。

**命题 (Faraday 电磁感应定律)** @143

方程组中的第三个方程 $\operatorname{curl}\boldsymbol{E}=-\partial\boldsymbol{B}/\partial t$ 为 Faraday 电磁感应定律，它定量地表示了变化磁场与其所感应的电场之间的关系。对于任意光滑曲面 $S$，将方程在 $S$ 上作第二类曲面积分并利用 Stokes 公式，有

$$\oint_{\partial S}\boldsymbol{E}\cdot\mathrm{d}\boldsymbol{l}=-\int_{S}\frac{\partial\boldsymbol{B}}{\partial t}\cdot\boldsymbol{n}\,\mathrm{d}S,$$

即任何封闭曲线 $\partial S$ 的电场环量，正比于以此曲线为边缘的任一曲面 $S$ 上的磁感应通量的减少率，其中 $\boldsymbol{n}$ 的方向由 $l$ 以右手系决定。

**命题 (推广的 Ampère 定律)** @144

方程组中的第四个方程 $\operatorname{curl}\boldsymbol{B}=\mu_0\left(\varepsilon_0\partial\boldsymbol{E}/\partial t+\boldsymbol{j}\right)$ 是推广的 Ampère 定律。类似上文有

$$\oint_{\partial S}\boldsymbol{B}\cdot\mathrm{d}\boldsymbol{l}=\mu_0\varepsilon_0\int_{S}\frac{\partial\boldsymbol{E}}{\partial t}\cdot\boldsymbol{n}\,\mathrm{d}S+\mu_0\int_{S}\boldsymbol{j}\cdot\boldsymbol{n}\,\mathrm{d}S .$$

若电磁场定常，即方程组中各个函数均不依赖于 $t$，则稳定电流磁场的环量正比于通过相应曲面上的电流，这就是 Ampère 定律。

**注 (位移电流)** @144

Maxwell 利用方程组的数学结构深刻地考虑了电磁感应之间的联系：如同变化的磁场能激发电场，他认为变化的电场也应当会激发磁场，由此提出了位移电流的概念，为方程增加了一个新的 $\partial\boldsymbol{E}/\partial t$ 项。

**命题 (电磁场的波动方程)** @144

利用后两个方程分别关于 $x$ 求旋度和关于 $t$ 求偏导后消去磁感应强度 $\boldsymbol{B}$，有

$$\frac{1}{c^{2}}\frac{\partial^{2}\boldsymbol{E}}{\partial t^{2}}+\operatorname{curl}\operatorname{curl}\boldsymbol{E}=-\mu_0\frac{\partial \boldsymbol{j}}{\partial t},$$

其中 $c=(\varepsilon_0\mu_0)^{-1/2}$。再由

$$\operatorname{curl}\operatorname{curl}\boldsymbol{E}=\nabla\operatorname{div}\boldsymbol{E}-\Delta\boldsymbol{E},$$

得到一组三个波方程

$$\frac{\partial^{2}\boldsymbol{E}}{\partial t^{2}}-c^{2}\Delta\boldsymbol{E}=-\frac{c^{2}}{\varepsilon_0}\nabla\rho-c^{2}\mu_0\frac{\partial \boldsymbol{j}}{\partial t}.$$

类似地，对磁场可得到另一组三个波方程

$$\frac{\partial^{2}\boldsymbol{B}}{\partial t^{2}}-c^{2}\Delta\boldsymbol{B}=\frac{1}{\varepsilon_0}\operatorname{curl}\boldsymbol{j}.$$

**命题 (电磁波与光速)** @144

即使在时空的某个子集上 $\rho=0$、$\boldsymbol{j}=\mathbf{0}$，即没有电荷或电流来产生电磁场，电场和磁场仍然可以通过相互感应激发，按第四章中介绍的波方程的形式进行传播，这就是电磁波。电磁波的传播速度为 $c$，通过计算这个数值恰好是真空中的光速。由此 Maxwell 预言电磁波广泛存在、可以用 Maxwell 方程组描述，并且光也是一种电磁波。20 多年后，Hertz 通过实验定律确定了电磁波的存在，这也标志着以 Maxwell 方程组为核心的电磁场理论开始被广泛地接受和应用。

### 5.2 最优传输问题与 Monge-Ampère 方程（p145–147）

**定义 5.2.1 (前推测度)** @145

对于可测映射 $T:\mathbb{R}^{n}\to\mathbb{R}^{m}$ 和 $\mathbb{R}^{n}$ 上的测度 $\mu$，定义测度

$$T_{\#}\mu(B)=\mu\left(T^{-1}(B)\right),\quad \forall B\subset\mathbb{R}^{m},$$

称 $T_{\#}\mu$ 为测度 $\mu$ 沿映射 $T$ 的前推测度。

**定义 (Monge 最优传输问题)** @145

运送方案 $T$ 要满足约束条件 $T_{\#}\mu=\nu$。对于给定的运送方案 $T$，总花费为 $\int c(x,Tx)\,\mathrm{d}\mu$。Monge 问题即为求解最小化问题

$$\inf_{T}\int c(x,Tx)\,\mathrm{d}\mu,$$

其中 $T$ 取遍所有将 $\mu$ 运送至 $\nu$ 的运送方案。

**引理 5.2.1 (前推测度的密度公式)** @145

设 $T:\mathbb{R}^{n}\to\mathbb{R}^{n}$ 为 $C^{1}$ 映射，概率测度 $\mu(x)=f(x)\,\mathrm{d}x$，$\nu(x)=g(x)\,\mathrm{d}x$ 满足 $\nu=T_{\#}\mu$，则对几乎处处的 $x\in\mathbb{R}^{n}$，

$$f(x)=g(Tx)\left|\operatorname{det}JT(x)\right|,$$

其中 $JT$ 是映射 $T$ 的 Jacobi 矩阵。

**定义 (Kantorovich 问题)** @146

Monge 的传输映射 $T:\mathbb{R}^{n}\to\mathbb{R}^{n}$ 无法分离质量，即 $x$ 处的沙子质量无法运送到不同的目的地。Kantorovich（康托罗维奇）推广了 Monge 的问题：设 $\pi$ 为 $\mathbb{R}^{n}\times\mathbb{R}^{n}$ 上的概率测度，将 $\pi(x,y)$ 理解为从 $x$ 处运送到 $y$ 处的质量，允许 $x$ 处的质量分别送到不同的目的地 $y$。Kantorovich 问题为

$$\inf_{\pi}\int c(x,y)\,\mathrm{d}\pi(x,y),$$

其中 $\pi$ 取遍所有允许的传输方案。

**定理 5.2.1 (最优传输方案的存在性)** @146

对于 $\mathbb{R}^{n}$ 上的概率测度 $\mu$、$\nu$，存在最优传输方案 $\pi$。

**定理 5.2.2 (Brenier 定理)** @146

对于满足一定条件的 $\mu$、$\nu$，对于 $c(x,y)=|x-y|^{2}$，存在唯一的最优传输方案 $\pi$，满足

$$\pi=\left(\operatorname{Id}\times\nabla\varphi\right)_{\#}\mu,$$

其中 $\varphi:\mathbb{R}^{n}\to(-\infty,+\infty]$ 为凸函数。

**定义 (Brenier 势函数)** @146

对于 $c(x,y)=|x-y|^{2}$ 的情形，Brenier（布雷尼尔）证明了最优传输方案可表达为传输映射 $\nabla\varphi$，即一个凸函数的梯度映射。$\varphi$ 称为 Brenier 势函数。

**定理 5.2.3 (等周不等式)** @146

设 $\Omega$ 是 $\mathbb{R}^{n}$ 中的有界光滑区域，则

$$P(\Omega)\geqslant P(B_{r}), \tag{5.5}$$

其中 $|B_{r}|=|\Omega|$。等号成立当且仅当在差一个零测集的意义下，$\Omega=B_{r}(x_{0})$，$x_{0}\in\mathbb{R}^{n}$。

这里 $|\Omega|$ 为 $\Omega$ 的体积，$P(\Omega)$ 为 $\Omega$ 的表面积。等周问题的古典形式是：在周长相等的平面区域中圆的面积最大；等价地，在面积相等的平面区域中圆的周长最短。推广到 $\mathbb{R}^{n}$ 即问体积相等的区域中是否球的表面积最小。

**命题 (Monge-Ampère 方程)** @147

设 $|B_{r}|=|\Omega|=\omega_{n}$，并考虑概率测度

$$\mu=\frac{\chi_{\Omega}}{|\Omega|}\,\mathrm{d}x=:f\,\mathrm{d}x,\qquad \nu=\frac{\chi_{B_{1}}}{|B_{1}|}\,\mathrm{d}x=:g\,\mathrm{d}x .$$

由 Brenier 定理，存在凸函数 $\varphi:\mathbb{R}^{n}\to(-\infty,+\infty]$ 使得 $(\nabla\varphi)_{\#}\mu=\nu$，再由引理 5.2.1，对几乎处处的 $x\in\Omega$，

$$g(\nabla\varphi(x))\left|\operatorname{det}\nabla^{2}\varphi(x)\right|=f(x). \tag{5.6}$$

这是一个关于 $\varphi$ 的二阶非线性椭圆型方程，是 Monge-Ampère 方程的一种特殊形式。由于 $\varphi$ 为凸函数，对几乎处处的 $x\in\Omega$ 都有 $\nabla^{2}\varphi(x)\geqslant0$。

**引理 (梯度的一致界)** @147

对几乎处处的 $x\in\Omega$，$\left|\nabla\varphi(x)\right|\leqslant1$。

**命题 (Hessian 行列式与 Laplacian 的下界)** @147

对几乎处处的 $x\in\Omega$，

$$\operatorname{det}\nabla^{2}\varphi(x)=\frac{f(x)}{g(\nabla\varphi(x))}=1 .$$

设 $\lambda_{k}$ 为 $\nabla^{2}\varphi(x)$ 的特征值，则对几乎处处的 $x\in\Omega$，

$$\Delta\varphi(x)=\sum_{k}\lambda_{k}\geqslant n\left(\prod_{k}\lambda_{k}\right)^{\frac{1}{n}}=n\left(\operatorname{det}\nabla^{2}\varphi(x)\right)^{\frac{1}{n}}\geqslant n .$$

由 Green 公式，

$$P(\Omega)=\int_{\partial\Omega}1\geqslant\int_{\partial\Omega}\left\langle\nabla\varphi,\boldsymbol{n}_{\partial\Omega}\right\rangle=\int_{\Omega}\Delta\varphi\geqslant n\int_{\Omega}1=n|\Omega|=n|\Omega|^{\frac{n-1}{n}}\omega_{n}^{\frac{1}{n}},$$

从而得到等周不等式。对于等号情形 $P(\Omega)=P(B_{1})$，所有不等号都是等号，特别地 $\nabla^{2}\varphi(x)$ 的特征值相等，且由 $\operatorname{det}\nabla^{2}\varphi(x)=1$ 知所有特征值均为 $1$，故对几乎处处的 $x\in\Omega$ 有 $\nabla^{2}\varphi(x)=\operatorname{Id}$，即 $\nabla\varphi$ 为平移映射，从而 $\Omega=B_{1}(x_{0})$。

**注 (最优传输与深度学习)** @147

最优传输理论在人工智能领域的深度学习（机器学习）中有重要应用，为该领域提供了数学理论基础。深度学习的目标是学习流形上的概率分布，分为两步：学习流形的结构和学习概率分布。以手写数字识别和人脸识别为例：有大量的原始图像资料（样本集），每个图像表示为 $\mathbb{R}^{N}$ 中的一个点（向量），$N$ 为像素，坐标值表示颜色，维数 $N$ 往往非常大。所有图像构成的点云分布在某个低维流形附近，且点云在数据流形上的分布可以用概率测度来描述。最优传输理论提供了强有力的工具来学习概率分布。

### 5.3 最优控制问题与 HJB 方程（p148–150）

**定义 (受控系统与成本泛函)** @148

考虑一个由常微分方程刻画的受控系统

$$\begin{cases}\dot{x}(s)=f(x(s),\alpha(s)), & t<s<T,\\x(t)=x\in\mathbb{R}^{n},\end{cases} \tag{5.7}$$

其中 $T>0$ 是给定的终端时刻，$x(s)$ 和 $\alpha(s)$ 分别是时刻 $s$ 的系统状态和控制量，$f:\mathbb{R}^{n}\times A\to\mathbb{R}^{n}$ 是给定的有界 Lipschitz 连续函数，集合 $A$ 是控制集。用 $\mathcal{A}$ 表示取值于 $A$ 的可测函数全体，称其为可允许控制集。对于每一个可允许控制 $\alpha(\cdot)\in\mathcal{A}$，定义成本泛函

$$J(\alpha(\cdot);t,x)=\int_{t}^{T}r(x(s),\alpha(s))\,\mathrm{d}s+g(x(T)).$$

**定义 (最优控制问题)** @148

最优控制的目标是对于给定初始时刻 $t\in[0,T]$ 和初始状态 $x\in\mathbb{R}^{n}$，找到一个控制 $\alpha^{*}(\cdot)\in\mathcal{A}$ 使得上述成本泛函达到最小值，即

$$J(\alpha^{*}(\cdot);t,x)=\min_{\alpha(\cdot)\in\mathcal{A}}J(\alpha(\cdot);t,x).$$

**定理 (Bellman 最优化原理)** @148

一个过程的最优决策具有这样的性质：即无论其初始状态和初始决策如何，其今后诸策略对以第一个决策所形成的状态作为初始状态的过程而言，必须构成最优策略。

为给出这个原理的数学表达，引入值函数的概念，即定义

$$V(t,x)=\inf_{\alpha(\cdot)\in\mathcal{A}}J(\alpha(\cdot);t,x).$$

在本书的设定下，Bellman 最优化原理可以如下叙述：对于 $t,h>0$，只要 $t+h\leqslant T$，则

$$V(t,x)=\inf_{\alpha(\cdot)\in\mathcal{A}}\left\{\int_{t}^{t+h}r(x(s),\alpha(s))\,\mathrm{d}s+V\left(t+h,x(t+h)\right)\right\}, \tag{5.8}$$

其中 $x(\cdot)$ 是系统 (5.7) 在控制 $\alpha(\cdot)$ 下的状态。

**命题 5.3.1 (HJB 方程)** @149

假设值函数 $V\in C^{1}\left([0,T]\times\mathbb{R}^{n}\right)$，则 $V$ 满足如下偏微分方程终值问题：

$$\begin{cases}\partial_{t}V+\inf\limits_{a\in A}H\left(x,\partial_{x}V,a\right)=0, & (t,x)\in[0,T]\times\mathbb{R}^{n},\\V(T,x)=g(x), & x\in\mathbb{R}^{n},\end{cases} \tag{5.9}$$

其中

$$H(x,p,a)=f(x,a)\cdot p+r(x,a),\qquad x,p\in\mathbb{R}^{n},\ a\in A .$$

**命题 (由 HJB 方程构造最优控制)** @149

HJB 方程可以帮助寻找最优控制。假设已经通过求解 HJB 方程 (5.9) 获得值函数 $V\in C^{1}\left([0,T]\times\mathbb{R}^{n}\right)$，并且对任意 $(t,x)\in[0,T]\times\mathbb{R}^{n}$ 都存在 $\alpha^{*}(t,x)\in A$ 使得

$$H\left(x,\partial_{x}V(t,x),\alpha^{*}(t,x)\right)=\min_{a\in A}H\left(x,\partial_{x}V(t,x),a\right).$$

进一步假设对任意 $(t,x)\in[0,T]\times\mathbb{R}^{n}$，存在 $x^{*}(\cdot)=x^{*}(\cdot\,;t,x)$ 满足方程

$$\begin{cases}\dot{x}^{*}(s)=f\left(x^{*}(s),\alpha^{*}\left(s,x^{*}(s)\right)\right), & t<s<T,\\x^{*}(t)=x .\end{cases}$$

记 $\alpha^{*}(s)=\alpha^{*}\left(s,x^{*}(s)\right)$，则

$$\frac{\mathrm{d}}{\mathrm{d}s}V\left(s,x^{*}(s)\right)=\partial_{t}V\left(s,x^{*}(s)\right)+f\left(x^{*}(s),\alpha^{*}(s)\right)\cdot\partial_{x}V\left(s,x^{*}(s)\right)=-r\left(x^{*}(s),\alpha^{*}(s)\right),$$

对 $s$ 从 $t$ 到 $T$ 积分即得

$$V(t,x)=h\left(x^{*}(T)\right)+\int_{t}^{T}r\left(x^{*}(s),\alpha^{*}(s)\right)\mathrm{d}s=J\left(\alpha^{*}(\cdot);t,x\right),$$

这表明如上获得的控制 $\alpha^{*}(\cdot)$ 是原问题的最优控制。值得注意的是，通过 HJB 方程构造的最优控制可以表示成时间和状态的函数，即所谓的反馈控制，这在应用中具有非常重要的意义。

**注 (粘性解)** @150

以上分析是在理想条件下进行的，但是对于许多应用问题，这些条件并不能满足。一般说来，值函数往往不具备全局可微性，而 HJB 方程也可能不存在经典解。值函数的存在性通常可以保证，但如何在正则性不足的情况下建立其与 HJB 方程的关系？一个自然的想法是拓展 HJB 方程的解的定义。20 世纪 80 年代，Crandall（克兰德尔）和 Lions（莱昂斯）引入了偏微分方程粘性解的概念，并成功地应用于最优控制问题。粗略地说，在非常一般的条件下，最优控制问题的值函数是 HJB 方程的粘性解；反过来，由于 HJB 方程的粘性解通常具有唯一性，因此 HJB 方程的粘性解一定是值函数；可以说，HJB 方程给出了最优控制的完整刻画。动态规划原理可以推广到随机最优控制问题，相应的 HJB 方程则是二阶非线性偏微分方程，其粘性解与最优控制问题的值函数亦有类似的联系。

> 本书尚未录入习题。
