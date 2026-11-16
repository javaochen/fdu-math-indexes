---
chapter: 3
chapter_title: 热方程
section: "3.3"
section_title: Fourier 变换和 Cauchy 问题解的存在性
pages: "65–73"
---


## 3.3.1 Fourier 变换及其性质 @65

在全空间 $\mathbb{R}^n$ 上没有 Fourier 级数，但可以利用与它性质密切相关的 Fourier 变换。

### 定义 （速降函数与 Schwartz 空间） @65

若函数 $\varphi(x)\in C^\infty(\mathbb{R}^n)$ 满足

$$\lim_{|x|\to\infty}(1+|x|^l)|\partial_x^\alpha\varphi(x)|=0,\qquad \forall l\in\mathbb{N},\ \forall\alpha=(\alpha_1,\alpha_2,\cdots,\alpha_n)\in\mathbb{N}^n,$$

其中 $\partial_x^\alpha=\partial_{x_1}^{\alpha_1}\partial_{x_2}^{\alpha_2}\cdots\partial_{x_n}^{\alpha_n}$，则称 $\varphi(x)$ 为速降函数。速降函数的全体组成的线性空间称为 Schwartz（施瓦茨）空间，记为 $\mathcal{S}(\mathbb{R}^n)$。

设 $\varphi_k,\varphi\in\mathcal{S}(\mathbb{R}^n)$，称 $\{\varphi_k\}$ 在 $\mathcal{S}(\mathbb{R}^n)$ 中收敛到 $\varphi$ 当且仅当对任意的 $l\in\mathbb{N}$ 及任意的多重指标 $\alpha$，成立

$$\lim_{k\to+\infty}\sup_{x\in\mathbb{R}^n}(1+|x|^l)|\partial_x^\alpha(\varphi_k-\varphi)(x)|=0,$$

记为 $\varphi_k\xrightarrow{\mathcal{S}(\mathbb{R}^n)}\varphi$。

### 例 3.3.1 @65

由速降函数的定义易知具有紧支集的 $C^\infty$ 函数空间 $C_0^\infty(\mathbb{R}^n)\subset\mathcal{S}(\mathbb{R}^n)$，且 $\mathrm{e}^{-|x|^2}\in\mathcal{S}(\mathbb{R}^n)$。

### 定义 （Fourier 变换与逆变换） @65

若 $f\in\mathcal{S}(\mathbb{R}_x^n)$，$g\in\mathcal{S}(\mathbb{R}_\xi^n)$，定义 Fourier 变换

$$F[f](\xi)=\int_{\mathbb{R}^n}f(x)\mathrm{e}^{-\mathrm{i}\xi\cdot x}\,\mathrm{d}x,$$

以及 Fourier 逆变换

$$F^{-1}[g](x)=\frac{1}{(2\pi)^n}\int_{\mathbb{R}^n}g(\xi)\mathrm{e}^{\mathrm{i}\xi\cdot x}\,\mathrm{d}\xi .$$

### 命题 3.3.1 @66

对任意的 $f_1,f_2\in\mathcal{S}(\mathbb{R}^n)$ 及 $a,b\in\mathbb{C}$，有

$$F[af_1+bf_2]=aF[f_1]+bF[f_2].$$

### 命题 3.3.2 @66

若 $f\in\mathcal{S}(\mathbb{R}^n)$，则

$$F[\partial_x^\alpha f](\xi)=(\mathrm{i}\xi)^\alpha F[f](\xi),$$

其中 $\alpha=(\alpha_1,\alpha_2,\cdots,\alpha_n)$ 为多重指标，$|\alpha|=\alpha_1+\alpha_2+\cdots+\alpha_n$，$\xi^\alpha=\xi_1^{\alpha_1}\xi_2^{\alpha_2}\cdots\xi_n^{\alpha_n}$。

### 命题 3.3.3 @66

若 $f(x)\in\mathcal{S}(\mathbb{R}^n)$，则

$$F[x^\alpha f(x)](\xi)=\mathrm{i}^{|\alpha|}\partial_\xi^\alpha(F[f](\xi)).$$

### 推论 3.3.1 @66

Fourier 变换和 Fourier 逆变换是 $\mathcal{S}(\mathbb{R}^n)$ 到 $\mathcal{S}(\mathbb{R}^n)$ 的同构。

进一步地，$\mathcal{S}(\mathbb{R}^n)$ 上 $F^{-1}\circ F=I$，且当 $\varphi_k\xrightarrow{\mathcal{S}(\mathbb{R}^n)}\varphi$ 时，$F[\varphi_k]\xrightarrow{\mathcal{S}(\mathbb{R}^n)}F[\varphi]$。因此 Fourier 变换是从 $\mathcal{S}(\mathbb{R}^n)$ 到 $\mathcal{S}(\mathbb{R}^n)$ 的拓扑同构。

### 定义 （卷积） @67

对 $f_1,f_2\in\mathcal{S}(\mathbb{R}^n)$，称

$$f(x)=\int_{\mathbb{R}^n}f_1(x-y)f_2(y)\,\mathrm{d}y=\int_{\mathbb{R}^n}f_1(y)f_2(x-y)\,\mathrm{d}y$$

为 $f_1$ 与 $f_2$ 的卷积，记为 $f_1*f_2$。

### 命题 3.3.4 @67

若 $f_1,f_2\in\mathcal{S}(\mathbb{R}^n)$，则

$$F[f_1*f_2]=F[f_1]\cdot F[f_2],$$

$$F^{-1}[f_1f_2]=F^{-1}[f_1]*F^{-1}[f_2].$$

### 命题 3.3.5 (Plancherel（普朗谢雷尔）等式) @67

若 $f,g\in\mathcal{S}(\mathbb{R}^n)$，则

$$\int_{\mathbb{R}^n}f\bar g\,\mathrm{d}x=\frac{1}{(2\pi)^n}\int_{\mathbb{R}^n}F[f]\overline{F[g]}\,\mathrm{d}\xi .$$

### 注 （$L^1$ 与 $L^2$ 上的 Fourier 变换） @68

由于 $\mathcal{S}(\mathbb{R}^n)$ 在 $L^1(\mathbb{R}^n)$ 和 $L^2(\mathbb{R}^n)$ 中的稠密性，Fourier 变换可以自然地在 $L^1(\mathbb{R}^n)$ 及 $L^2(\mathbb{R}^n)$ 上定义。进一步地，由对偶空间的方法，可以在更大的一类空间（如 $\mathcal{S}(\mathbb{R}^n)$ 的对偶空间 $\mathcal{S}'(\mathbb{R}^n)$ 甚至 $C_c^\infty(\mathbb{R}^n)$ 的对偶空间 $\mathcal{D}'(\mathbb{R}^n)$）中定义 Fourier 变换，且其基本性质仍然成立。

## 3.3.2 Cauchy 问题解的存在性 @68

### 构造 （Cauchy 问题解的形式表达式） @68

考虑 $n$ 维热方程的 Cauchy 问题

$$\begin{cases}
\partial_t u=\Delta_xu, & (t,x)\in(0,+\infty)\times\mathbb{R}^n,\\
u(0,x)=\varphi(x), & x\in\mathbb{R}^n .
\end{cases} \tag{3.21}$$

假设初值 $\varphi(x)$ 以及对固定 $t$，$u(t,x)$ 均属于速降函数空间，则可以在方程和初值两侧关于 $x$ 进行 Fourier 变换。记

$$\hat u(t,\xi)=F[u(t,\cdot)](\xi),\qquad \hat\varphi(\xi)=F[\varphi](\xi).$$

由命题 3.3.2 得

$$\begin{cases}
\dfrac{\mathrm{d}}{\mathrm{d}t}\hat u(t,\xi)=-|\xi|^2\hat u(t,\xi),\\
\hat u(0,\xi)=\hat\varphi(\xi).
\end{cases}$$

Fourier 变换将原线性偏微分方程问题转化成了线性常微分方程问题，其解为

$$\hat u(t,\xi)=\mathrm{e}^{-|\xi|^2t}\hat\varphi(\xi).$$

对上式两边取 Fourier 逆变换，利用命题 3.3.4 及命题 3.3.5 得

$$\begin{aligned}
u(t,x)&=F^{-1}[\hat u(t,\cdot)](x)\\
&=F^{-1}[\mathrm{e}^{-|\xi|^2t}](x)*\varphi .
\end{aligned} \tag{3.22}$$

### 构造 （热核函数与基本解） @69

由 Fourier 逆变换的定义与复变函数的围道积分理论可得

$$F^{-1}[\mathrm{e}^{-|\xi|^2t}](x)=\frac{1}{(4\pi t)^{\frac n2}}\mathrm{e}^{-\frac{|x|^2}{4t}} . \tag{3.23}$$

通常记

$$H(t,x)=\frac{1}{(4\pi t)^{\frac n2}}\mathrm{e}^{-\frac{|x|^2}{4t}},\qquad t>0,\ x\in\mathbb{R}^n, \tag{3.24}$$

并称之为热核函数。这样，就形式地得到了 Cauchy 问题 (3.21) 的解

$$\begin{aligned}
u(t,x)&=[H(t,\cdot)*\varphi](x)\\
&=\frac{1}{(4\pi t)^{\frac n2}}\int_{\mathbb{R}^n}\mathrm{e}^{-\frac{|x-y|^2}{4t}}\varphi(y)\,\mathrm{d}y .
\end{aligned} \tag{3.25}$$

$H(t,x)$ 给出了求解方程和分析解的性质的极大便利，称为 $n$ 维热方程 Cauchy 问题 (3.21) 的基本解，也称热核函数；热核函数在 $t\to0^+$ 时作为一组卷积核收敛于 Dirac 函数 $\delta(x)$。

### 定理 3.3.1 @69

设 $\varphi$ 是 $\mathbb{R}^n$ 上的有界连续函数，则 (3.25) 式给出了 $n$ 维热方程 Cauchy 问题 (3.21) 的解。

### 定义 3.3.1 @71

令 $1\leqslant p\leqslant+\infty$，$\varphi\in L^p(\mathbb{R}^n)$。记

$$P_t\varphi(x)=H(t,x)*\varphi,\qquad \forall t>0,\ x\in\mathbb{R}^n .$$

### 定理 3.3.2 @71

令 $1\leqslant p\leqslant+\infty$。对于 $\varphi\in L^p(\mathbb{R}^n)$，有

(1) $u=P_t\varphi$ 满足方程 $\partial_tu=\Delta u$；

(2) 对任意 $t>0$，有 $\|P_t\varphi\|_{L^p(\mathbb{R}^n)}\leqslant\|\varphi\|_{L^p(\mathbb{R}^n)}$；

(3) 对任意 $t,s>0$，有 $P_{t+s}\varphi=P_t(P_s\varphi)$；

(4) 如果 $1\leqslant p<+\infty$，那么 $\lim\limits_{t\to0^+}\|P_t\varphi-\varphi\|_{L^p(\mathbb{R}^n)}=0$。

### 注 3.3.1 @71

定理 3.3.2 (3) 表明，定义在 $[0,+\infty)$ 上的 $P_t\varphi$ 具有半群性质，故称为热半群。

### 注 （解的无限传播速度） @72

由表达式 (3.25) 可以看出，热方程在 $t>0$ 时的解 $u$ 在 $x$ 处的值可以看作是以热核函数 $H(t,x-y)$ 为权的初值 $\varphi$ 对 $y$ 在 $\mathbb{R}^n$ 上的加权平均。因此，即使初值具有紧支集，例如

$$\varphi(x)\geqslant0,\qquad \operatorname{supp}\varphi\subset B_R(x_0),\qquad \varphi\not\equiv0,$$

由表达式 (3.25)，对任意 $t>0$ 也成立

$$u(t,x)>0,\qquad \text{即}\ \operatorname{supp}u(t,\cdot)=\mathbb{R}^n,$$

这说明初值信息可以瞬间传递给 $\mathbb{R}^n$ 上所有的位置。这一现象表明热方程的解具有无限传播速度。

### 构造 （非齐次热方程 Cauchy 问题的解） @72

利用齐次化原理，非齐次热方程 Cauchy 问题

$$\begin{cases}
\partial_tu-\Delta u=f(t,x), & (t,x)\in(0,+\infty)\times\mathbb{R}^n,\\
u(0,x)=\varphi(x), & x\in\mathbb{R}^n
\end{cases} \tag{3.27}$$

的解可表示为

$$u(t,x)=\frac{1}{(4\pi t)^{\frac n2}}\int_{\mathbb{R}^n}\varphi(y)\mathrm{e}^{-\frac{|x-y|^2}{4t}}\,\mathrm{d}y+\int_0^t\int_{\mathbb{R}^n}\frac{1}{(4\pi(t-\tau))^{\frac n2}}f(\tau,y)\mathrm{e}^{-\frac{|x-y|^2}{4(t-\tau)}}\,\mathrm{d}y\,\mathrm{d}\tau . \tag{3.28}$$
