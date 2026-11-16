---
chapter: 2
chapter_title: 调和方程
section: "2.4"
section_title: Green 函数法
pages: "29–40"
---

本节主要介绍如何求解有界区域上的 Poisson 方程的 Dirichlet 问题。我们首先介绍基本解、Green 恒等式、Green 函数的概念和性质。然后，我们通过求解特殊区域上的 Green 函数，给出球上的 Poisson 方程的 Dirichlet 问题解的表达式。最后，利用解的表达式给出调和函数进一步的性质。

## 2.4.1 基本解和 Green 函数 @29

考虑一个调和函数 $u(x)$，它仅仅是关于 $r=|x|$ 的函数。记 $v(r)=u(x)$，则 $v$ 满足

$$\Delta v=v''+\frac{n-1}{r}v'=0,\quad r>0.$$

易得上述常微分方程的通解表达式：

$$v(r)=\begin{cases}c_1+c_2\ln r, & n=2,\\[4pt] c_3+c_4 r^{2-n}, & n\geqslant 3,\end{cases}\quad r>0,$$

其中 $c_i\ (i=1,2,3,4)$ 为常数。当 $c_1=c_3=0$ 时，选取 $c_2,c_4$ 分别使得

$$\int_{\partial B_r}\frac{\partial v}{\partial r}\,\mathrm{d}S=-1.$$

### 定义 (基本解) @30

我们将所得到的解称为**基本解**，并记

$$\Gamma(x)=\begin{cases}\dfrac{1}{2\pi}\ln\dfrac{1}{|x|}, & n=2,\\[10pt] \dfrac{1}{(n-2)\omega_{n-1}}\dfrac{1}{|x|^{n-2}}, & n\geqslant 3,\end{cases} \tag{2.45}$$

其中 $\omega_{n-1}$ 表示 $n-1$ 维球面 $\mathbb{S}^{n-1}\subset\mathbb{R}^n$ 的面积。特别地，当 $n=3$ 时，$\omega_2=4\pi$，$\Gamma(x)=\dfrac{1}{4\pi|x|}$。显然，基本解 $\Gamma(x)$ 在任意不含 $0$ 点的开区域内是调和函数。

## Green 公式 @30

设 $\Omega\subset\mathbb{R}^n$ 为光滑有界区域，$u(x),v(x)\in C^2(\Omega)\cap C^1(\overline{\Omega})$。我们知道成立如下公式：

$$\int_\Omega u\,\partial_{x_i}v\,\mathrm{d}x=-\int_\Omega v\,\partial_{x_i}u\,\mathrm{d}x+\int_{\partial\Omega}uv n_i\,\mathrm{d}S, \tag{2.46}$$

其中 $n_i$ 表示边界 $\partial\Omega$ 的单位外法向量 $\boldsymbol{n}$ 的第 $i$ 个坐标分量。利用 (2.46)，我们可以推出以下两个公式。

### 定理 (Green 第一公式) @30

$$\int_\Omega u\Delta v\,\mathrm{d}x+\int_\Omega \nabla u\cdot\nabla v\,\mathrm{d}x=\int_{\partial\Omega}u\frac{\partial v}{\partial\boldsymbol{n}}\,\mathrm{d}S. \tag{2.47}$$

### 定理 (Green 第二公式) @30

$$\int_\Omega (u\Delta v-v\Delta u)\,\mathrm{d}x=\int_{\partial\Omega}\left(u\frac{\partial v}{\partial\boldsymbol{n}}-v\frac{\partial u}{\partial\boldsymbol{n}}\right)\mathrm{d}S. \tag{2.48}$$

下面我们利用上述两个 Green 公式推导 Green 恒等式。

### 定理 2.4.1 (Green 恒等式) @31

若 $\Omega$ 为 $\mathbb{R}^n$ 中的光滑有界区域，$u\in C^2(\Omega)\cap C^1(\overline{\Omega})$，则 $\forall x\in\Omega$，成立如下 Green 恒等式

$$u(x)=\int_\Omega\Gamma(x-y)(-\Delta u(y))\,\mathrm{d}y+\int_{\partial\Omega}\left(\Gamma(x-y)\frac{\partial u}{\partial\boldsymbol{n}_y}(y)-u(y)\frac{\partial\Gamma}{\partial\boldsymbol{n}_y}(x-y)\right)\mathrm{d}S_y. \tag{2.49}$$

特别地，当 $u$ 为 $\Omega$ 上的调和函数时，(2.49) 就化为

$$u(x)=\int_{\partial\Omega}\left(\Gamma(x-y)\frac{\partial u}{\partial\boldsymbol{n}_y}(y)-u(y)\frac{\partial\Gamma}{\partial\boldsymbol{n}_y}(x-y)\right)\mathrm{d}S_y. \tag{2.52}$$

公式 (2.52) 说明调和函数 $u(x)$ 在区域 $\Omega$ 内部的值可以由 $u$ 以及法向导数 $\dfrac{\partial u}{\partial\boldsymbol{n}}$ 在边界 $\partial\Omega$ 上的值确定。而 Dirichlet 问题和 Neumann 问题分别只给定调和函数 $u$ 在边界 $\partial\Omega$ 上的值和法向导数 $\dfrac{\partial u}{\partial\boldsymbol{n}}$ 在边界 $\partial\Omega$ 上的值。因此，我们还不能直接应用该公式求解这两个定解问题。特别地，我们已经知道 Dirichlet 问题的解是唯一的，我们希望通过消去 (2.52) 中的 $\dfrac{\partial u}{\partial\boldsymbol{n}}$ 项，从而给出 Dirichlet 问题的解的表达式，这正是 Green 函数法的基本出发点。

### 定义 (Green 函数) @32

任意取定 $x\in\Omega$，令

$$G(x,y)=\Gamma(x-y)-\gamma(x,y), \tag{2.53}$$

其中 $\gamma(x,\cdot)\in C^2(\Omega)\cap C^1(\overline{\Omega})$ 且 $-\Delta_y\gamma(x,y)=0$，$y\in\Omega$。为了消去边界积分中的 $\dfrac{\partial u}{\partial\boldsymbol{n}}$ 这项，我们进一步要求调和函数 $\gamma(x,y)$ 满足 $\gamma(x,y)=\Gamma(x-y)$，$y\in\partial\Omega$，即 $\gamma(x,y)$ 由下式定义：

$$\begin{cases}\Delta_y\gamma(x,y)=0, & y\in\Omega,\\ \gamma(x,y)=\Gamma(x-y), & y\in\partial\Omega.\end{cases} \tag{2.54}$$

我们称由 (2.53) 定义的函数 $G(x,y)$ 为 **Green 函数**。若这样的 Green 函数 $G(x,y)$ 存在，则 Dirichlet 问题 (2.7) 的解可以表示为

$$u(x)=\int_\Omega G(x,y)(-\Delta u(y))\,\mathrm{d}y-\int_{\partial\Omega}u(y)\frac{\partial G}{\partial\boldsymbol{n}_y}(x,y)\,\mathrm{d}S_y=\int_\Omega G(x,y)f(y)\,\mathrm{d}y-\int_{\partial\Omega}g(y)\frac{\partial G}{\partial\boldsymbol{n}_y}(x,y)\,\mathrm{d}S_y,\quad x\in\Omega. \tag{2.55}$$

特别地，若 $u$ 为调和函数，则

$$u(x)=-\int_{\partial\Omega}g(y)\frac{\partial G}{\partial\boldsymbol{n}_y}(x,y)\,\mathrm{d}S_y,\quad x\in\Omega. \tag{2.56}$$

在上面的讨论中，虽然我们已经给出了 Dirichlet 问题解的表达式，但是对于一般区域 $\Omega$ 上的 Green 函数 $G(x,y)$ 的求解本身也是非常困难的（存在与否也并没有在前面的讨论中给出）。下面我们将对球和半空间的情形导出 Green 函数的具体表达式。

### 定理 (Green 函数的性质) @32

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

## 2.4.2 特殊区域上的 Green 函数 @33

本小节给出球和半空间上的 Green 函数的具体表达式。我们利用静电源像法求解球上的 Green 函数。

### 命题 2.4.1 @33

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

### 命题 2.4.2 @34

设 $H=\{(x_1,x_2,\cdots,x_n)\in\mathbb{R}^n:x_n>0\}$，则对给定的 $x\in H$，$H$ 上的 Green 函数为

$$G(x,y)=\Gamma(x-y)-\Gamma(\tilde{x}-y), \tag{2.60}$$

其中 $\tilde{x}=(x_1,\cdots,x_{n-1},-x_n)$ 为 $x$ 关于轴 $\{x_n=0\}$ 的对称点，$\Gamma$ 为 $\mathbb{R}^n$ 上的基本解，由 (2.45) 给出。

### 注 2.4.1 @35

关于一般的无界区域上的 Green 函数讨论非常复杂。在讨论有界区域的外区域上的 Green 函数时，需要引起注意的是 Green 恒等式 (2.49) 成立需要条件。事实上，一般需要对 $u$ 的无穷远加衰减性条件。一个合理的衰减性条件如下：存在常数 $a>0$ 及 $C>0$，使得

$$|x|^a|u(x)|+|x|^{1+a}|Du(x)|+|x|^{2+a}|D^2u(x)|\leqslant C,\quad |x|\geqslant 1. \tag{2.61}$$

在用 Green 函数构造 Dirichlet 问题解的时候，我们是在解 $u\in C^2(\Omega)\cap C^1(\overline{\Omega})$ 以及 $\Gamma(x-y)\in C^2(\Omega)\cap C^1(\overline{\Omega})$ 的情形下，推导 Dirichlet 问题的解的积分表达式的。而 Dirichlet 问题的解只需要 $u\in C^2(\Omega)\cap C(\overline{\Omega})$，因此我们需要验证 (2.55)、(2.56) 确实是 Dirichlet 问题的解。

## 2.4.3 球上 Poisson 方程的解 @35

在本小节，我们证明 (2.55) 给出了球上 Poisson 方程 Dirichlet 问题的解。

### 定理 2.4.2 @35

令

$$u(x)=-\int_{\partial B_1}g(y)\frac{\partial G}{\partial\boldsymbol{n}_y}(x,y)\,\mathrm{d}S_y,\quad x\in B_1, \tag{2.62}$$

其中 $G(x,y)$ 为命题 2.4.1 给出的 Green 函数，$g\in C(\partial B_1)$，则 $u$ 为下述调和方程 Dirichlet 问题的解

$$\begin{cases}\Delta u=0, & x\in B_1,\\ u=g, & x\in\partial B_1.\end{cases}$$

### 注 2.4.2 @35

上述积分表达式 (2.62)，我们称为 **Poisson 公式**。

### 定理 2.4.3 @36

令

$$u(x)=\int_{B_1}G(x,y)f(y)\,\mathrm{d}y,\quad x\in B_1, \tag{2.64}$$

其中 $G(x,y)$ 为命题 2.4.1 给出的 Green 函数，$f\in C^1(\overline{B}_1)$，则 $u\in C^2(B_1)\cap C(\overline{B}_1)$ 为下述方程的解

$$\begin{cases}-\Delta u=f, & x\in B_1,\\ u=0, & x\in\partial B_1.\end{cases}$$

结合定理 2.4.2 和定理 2.4.3，我们给出了球上 Poisson 方程 Dirichlet 问题的解。

### 注 2.4.3 @38

事实上，若要定理 2.4.3 成立，我们只需要 $f\in C^\alpha(\overline{B}_1)$，$\alpha\in(0,1)$。

### 注 2.4.4 @39

对一般的光滑有界区域 $\Omega$，若其上的 Green 函数 $G$ 存在，则定理 2.4.2 和定理 2.4.3 也成立。

## 2.4.4 奇点可去性和解析性 @39

在介绍了调和函数的基本解以及 Green 函数之后，我们给出几个应用。

## 奇点可去性 @39

由基本解的定义 (2.45) 知，$\Gamma(x)$ 除原点 $x=0$ 外是调和的，并且原点是不可去奇点。事实上，关于调和函数的奇性，我们有如下结论。

### 定理 2.4.4 @39

设 $u\in C(B_2\setminus\{0\})$ 为 $B_1\setminus\{0\}$ 上的调和函数，若满足

$$\begin{cases}\lim\limits_{x\to 0}|x|^{n-2}u(x)=0, & n\geqslant 3,\\[6pt] \lim\limits_{x\to 0}\dfrac{u(x)}{\ln|x|}=0, & n=2,\end{cases}$$

则可以补充定义 $u$ 在 $0$ 点的值，并且这样得到的函数 $u$ 在 $B_1$ 上为调和函数。

## 调和函数的解析性 @40

光滑有界区域 $\Omega$ 上的调和函数，例如 $x_1^2-x_2^2$，$\mathrm{e}^{kx_1}\sin kx_2$，$\Gamma(x)$ 等都是 $\Omega$ 上的解析函数。事实上，利用 Poisson 积分公式，我们有如下定理。

### 定理 2.4.5 @40

设 $u$ 为 $B_1$ 上的调和函数且连续到边界，则 $u$ 为 $B_1$ 上的解析函数。

由解析函数的性质，我们立即得到

### 推论 2.4.1 @40

若 $u$ 为区域 $\Omega$ 上的调和函数且 $u$ 在 $\Omega$ 的一个非空开子集上恒为 $0$，则 $u$ 在 $\Omega$ 上恒为 $0$。

### 注 2.4.5 @40

由推论可知，若 $u_1,u_2$ 为区域 $\Omega$ 上的调和函数，且 $u_1$ 与 $u_2$ 在一个非空开子集上相等，则在 $\Omega$ 上 $u_1\equiv u_2$。该性质称为调和函数的**唯一延拓性**，类似于全纯函数解析延拓的唯一性。
