---
chapter: 1
chapter_title: 度量空间
section: "1.3"
section_title: Hilbert 空间的正交系
pages: "21–29"
---

### 定义 1.3.1 (正交系) @21

设 $\mathcal{E}$ 是 Hilbert 空间 $H$ 中的一族非零向量。

（i）如果 $\mathcal{E}$ 中任何两个不同的向量都正交，就称 $\mathcal{E}$ 是 $H$ 的**正交系**。

（ii）如果正交系 $\mathcal{E}$ 中每个向量的范数都等于 $1$，就称 $\mathcal{E}$ 是**标准正交系**（或规范正交系）。

由定义立即可知，如果 $\mathcal{E}$ 是 Hilbert 空间 $H$ 中的正交系（标准正交系），那么 $\mathcal{E}$ 的任何子集也是 $H$ 中的正交系（标准正交系）。

### 例 1.3.1 (标准正交系) @21

在 $n$ 维 Euclid 空间 $\mathbb{R}^n$ 中，
$$e_1=(1,0,\cdots,0),\quad e_2=(0,1,0,\cdots,0),\cdots,e_n=(0,0,0,\cdots,1)$$
组成标准正交系。

### 例 1.3.2 (平方和空间标准正交系) @21

在 $l^2$ 中，令 $e_n$ 为在位置 $n$ 取 $1$ 其他位置取 $0$ 的点列，则 $\{e_1,e_2,\cdots,e_n,\cdots\}$ 为 $l^2$ 的标准正交系。

### 例 1.3.3 (三角函数标准正交系) @21

在实（或复）周期函数空间 $L^2[0,2\pi]$ 中，规定内积为
$$\langle f,g\rangle=\frac{1}{2\pi}\int_0^{2\pi}f(x)\overline{g(x)}\,\mathrm{d}x,\quad \forall f,g\in L^2[0,2\pi].$$
这时 $\{1,\sqrt{2}\cos x,\sqrt{2}\sin x,\sqrt{2}\cos 2x,\sqrt{2}\sin 2x,\cdots,\sqrt{2}\cos nx,\sqrt{2}\sin nx,\cdots\}$ 组成 $L^2[0,2\pi]$ 的标准正交系。

### 例 1.3.4 (复指数标准正交系) @21

在复空间 $L^2[0,2\pi]$ 中，直接计算可得 $\{\mathrm{e}^{\mathrm{i}nx}: n\in\mathbb{Z}\}$ 组成一组标准正交系。

另一个常用的研究周期函数的模型是圆周 $\mathbb{T}=\{z=\mathrm{e}^{\mathrm{i}x}: 0\leqslant x<2\pi\}$ 上的函数理论。取 $\mathbb{T}$ 上标准化的弧长测度 $\dfrac{\mathrm{d}x}{2\pi}$，容易证明 $L^2\left(\mathbb{T},\dfrac{\mathrm{d}x}{2\pi}\right)$ 按内积
$$\langle f,g\rangle\overset{\text{def}}{=}\int_{x\in[0,2\pi)}f(\mathrm{e}^{\mathrm{i}x})\overline{g(\mathrm{e}^{\mathrm{i}x})}\,\frac{\mathrm{d}x}{2\pi},\quad \forall f,g\in L^2\left(\mathbb{T},\frac{\mathrm{d}x}{2\pi}\right)$$
构成 Hilbert 空间，且 $\{z^n=\mathrm{e}^{\mathrm{i}nx}: n\in\mathbb{Z}\}$ 是标准正交系。

### 定义 1.3.2 (Fourier 系数) @22

设 $\mathcal{E}$ 是 Hilbert 空间 $H$ 的一组标准正交系，$x\in H$，数集
$$\{\langle x,e\rangle: e\in\mathcal{E}\}$$
称为向量 $x$ 关于标准正交系 $\mathcal{E}$ 的 **Fourier 系数集**，而 $\langle x,e\rangle$ 称为 $x$ 关于 $e\ (e\in\mathcal{E})$ 的 **Fourier 系数**。

在数学分析中，对于函数 $f\in L^2[0,2\pi]$，
$$a_0(f)=\frac{1}{2\pi}\int_0^{2\pi}f(t)\,\mathrm{d}t=\langle f,1\rangle,$$
$$a_n(f)=\frac{1}{2\pi}\int_0^{2\pi}f(t)\sqrt{2}\cos nt\,\mathrm{d}t=\langle f,\sqrt{2}\cos nx\rangle,$$
$$b_n(f)=\frac{1}{2\pi}\int_0^{2\pi}f(t)\sqrt{2}\sin nt\,\mathrm{d}t=\langle f,\sqrt{2}\sin nx\rangle$$
就是 $f$ 关于三角函数系的 Fourier 系数，而部分和 $(S_nf)(x)=a_0(f)+\sum\limits_{k=1}^{n}\left(a_k(f)\sqrt{2}\cos kx+b_k(f)\sqrt{2}\sin kx\right)$ 的收敛性正是 Fourier 级数的中心问题。

### 定理 1.3.1 (Bessel 不等式) @22

设 $\mathcal{E}=\{e_\lambda:\lambda\in\Lambda\}$ 是 Hilbert 空间 $H$ 中的标准正交系。那么，对于每个 $x\in H$，它的 Fourier 系数 $\{\langle x,e_\lambda\rangle:\lambda\in\Lambda\}$ 中最多只有可列个不为零，并且还成立如下的 **Bessel 不等式**：
$$\sum_{\lambda\in\Lambda}|\langle x,e_\lambda\rangle|^2\leqslant\|x\|^2.\tag{1.15}$$

Bessel 不等式表示向量 $x$ 在 $\mathcal{E}$ 中每个标准向量 $e_\lambda$ 上投影 $\langle x,e_\lambda\rangle e_\lambda$ 的"长度"平方的和不超过 $x$ 的"长度"平方。

### 推论 1.3.1 (黎曼勒贝格引理) @23

设 $\{e_n\}$ 是 Hilbert 空间 $H$ 中的标准正交系，那么对任何 $x\in H$，有
$$\lim_{n\to\infty}\langle x,e_n\rangle=0.$$
这个推论在 $L^2[0,2\pi]$ 中用于标准正交三角函数系的情况下，就是 **Riemann–Lebesgue（黎曼–勒贝格）引理**。

### 定义 1.3.3 (Fourier 级数) @23

设 $\mathcal{E}=\{e_\lambda:\lambda\in\Lambda\}$ 是 Hilbert 空间 $H$ 中的标准正交系，对于 $x\in H$，级数 $\sum\limits_{\lambda\in\Lambda}\langle x,e_\lambda\rangle e_\lambda$ 称为向量 $x$ 关于 $\mathcal{E}$ 的 **Fourier 级数**，或 Fourier 展开式。当 $x=\sum\limits_{\lambda\in\Lambda}\langle x,e_\lambda\rangle e_\lambda$ 成立时，就称 $x$ 关于 $\mathcal{E}$ **可以展开成 Fourier 级数**。

### 注 1.3.1 (任意指标的和) @23

对于任意指标的求和 $\sum\limits_{\lambda\in\Lambda}c_\lambda$，一般性的定义为：取定向集 $A=\{\Lambda\text{ 中的有限子集}\}$ 以及定义 $A$ 上的序关系"$F_1\prec F_2$"为 $F_1\subseteq F_2$，那么
$$\sum_{\lambda\in\Lambda}c_\lambda=\lim_{F\in A}\sum_{\lambda\in F}c_\lambda.$$
在定义 1.3.3 的使用中，为避免使用太多定向集和网的讨论，注意到 $\{e_\lambda:\langle x,e_\lambda\rangle\neq 0\}$ 是可数集，将其排列为一个序列 $\{e_{\lambda_1},e_{\lambda_2},\cdots,e_{\lambda_n},\cdots\}$。根据 Bessel 不等式 $\sum\limits_{n=1}^{\infty}|\langle x,e_{\lambda_n}\rangle|^2<\infty$，可知 $\left\{\sum\limits_{k=1}^{n}\langle x,e_{\lambda_k}\rangle e_{\lambda_k}\right\}_n$ 是 $H$ 中的基本点列，因此其极限存在，并且这个极限与可数集 $\{e_\lambda:\langle x,e_\lambda\rangle\neq 0\}$ 所取的排列顺序无关。

### 定理 1.3.2 (标准正交基的等价刻画) @24

设 $\mathcal{E}=\{e_\lambda:\lambda\in\Lambda\}$ 是 Hilbert 空间 $H$ 中的标准正交系，下列命题等价：

（i）对 $H$ 中任意元素 $x$，有 $x=\sum\limits_{\lambda\in\Lambda}\langle x,e_\lambda\rangle e_\lambda$；

（ii）$\overline{\operatorname{span}}\{e_\lambda:\lambda\in\Lambda\}=H$；

（iii）$\{e_\lambda:\lambda\in\Lambda\}$ 是**完全的**，即：若 $x\in H$ 满足 $x\perp e_\lambda\ (\forall\lambda\in\Lambda)$，则 $x=0$；

（iv）$\{e_\lambda:\lambda\in\Lambda\}$ 是完备的，即：对 $H$ 中任意元素 $x$，**Parseval（帕塞瓦尔）等式** $\|x\|^2=\sum\limits_{\lambda\in\Lambda}|\langle x,e_\lambda\rangle|^2$ 成立。

我们称满足上述条件之一的标准正交系为 Hilbert 空间 $H$ 中的一组**标准正交基**（或规范正交基）。

### 例 1.3.5 (完全标准正交系) @25

在 $l^2$ 中，令 $e_n$ 为在位置 $n$ 取 $1$ 其他位置取 $0$ 的数列，则标准正交系 $\{e_1,e_2,\cdots,e_n,\cdots\}$ 是完全的，因此为 $l^2$ 的一组标准正交基。实际上，若 $x$ 垂直于这组标准正交系，则对任意正整数 $n$，有 $x_n=\langle x,e_n\rangle=0$，即 $x=0$。

### 例 1.3.6 (三角函数标准正交基) @25

$L^2[0,2\pi]$ 中 $\mathcal{E}=\{1,\cdots,\sqrt{2}\sin nx,\sqrt{2}\cos nx,\cdots\}$ 是一组标准正交基。从而，我们有
$$\|f\|^2=\sum_{e\in\mathcal{E}}|\langle f,e\rangle|^2,\quad \forall f\in L^2[0,2\pi]$$
成立，这就是数学分析中所陈述的 Parseval 等式。而右端和的通项收敛于 $0$，就是 Fourier 级数的 Riemann–Lebesgue 引理：
$$\lim_{n\to\infty}\int_0^{2\pi}f(x)\sin nx\,\mathrm{d}x=0;\qquad \lim_{n\to\infty}\int_0^{2\pi}f(x)\cos nx\,\mathrm{d}x=0.\tag{1.17}$$

### 注 (Luzin 猜想) @26

根据定理 1.3.2，对任何 $f\in L^2[0,2\pi]$，有
$$f=a_0+\sqrt{2}\sum_{n=1}^{\infty}(a_n\cos nt+b_n\sin nt).\tag{1.18}$$
（1.18）式右边级数的部分和是按照 Hilbert 空间 $L^2[0,2\pi]$ 中的范数收敛于 $f$ 的，换言之，$f$ 的 Fourier 级数的部分和**平方平均收敛**于 $f$。按定义，这并不意味着下式成立：
$$\lim_{n\to\infty}\left[a_0+\sqrt{2}\sum_{k=1}^{n}(a_k\cos kt+b_k\sin kt)\right]\stackrel{m}{=}f.\tag{1.19}$$
1915 年，Luzin（卢津）猜测：对 $L^2(\mathbb{T})$ 中的函数 $f$，（1.19）式是成立的。Kolmogorov（科尔莫哥罗夫）首先于 1923 年构造性地给出了一个 $L^1(\mathbb{T})$ 的函数，它的部分和是几乎处处点发散的。1966 年，L. Carleson（卡勒松）证明了 Luzin 猜测是正确的。紧接着在 1967 年，R. A. Hunt（亨特）证明：对于 $L^p[0,2\pi]\ (p>1)$ 中的函数，它的 Fourier 级数也是几乎处处收敛的。

### 例 1.3.7 (复指数标准正交基) @26

由例 1.3.6 与 Euler（欧拉）公式，在复空间 $L^2[0,2\pi]$ 中，$\{\mathrm{e}^{\mathrm{i}nx}: n\in\mathbb{Z}\}$ 是一组标准正交基。这也就是说，$\{z^n=\mathrm{e}^{\mathrm{i}nx}: n\in\mathbb{Z}\}$ 也是 $L^2\left(\mathbb{T},\dfrac{\mathrm{d}x}{2\pi}\right)$ 的标准正交基。

对于 $f\in L^2[0,2\pi]$，若令
$$\hat{f}(n)=\langle f,\mathrm{e}^{\mathrm{i}nx}\rangle=\int_0^{2\pi}f(x)\mathrm{e}^{-\mathrm{i}nx}\,\frac{\mathrm{d}x}{2\pi},$$
则有 $\|f\|^2=\sum\limits_{n=-\infty}^{\infty}|\hat{f}(n)|^2$。这说明 $f\mapsto\{\hat{f}(n): n\in\mathbb{Z}\}$ 是 $L^2[0,2\pi]$ 到 $l^2(\mathbb{Z})$ 上的一个同构。

### 例 1.3.8 (Legendre 多项式) @26

在 $L^2[-1,1]$ 中，函数列 $g_k(x)=x^k\ (k=0,1,2,\cdots)$ 是线性无关的。因此可以用 Gram–Schmidt（格拉姆–施密特）方法将 $\{g_k\}$ 化成标准正交的：
$$h_0=\frac{g_0}{\|g_0\|},\qquad h_1=\frac{g_1-\langle g_1,h_0\rangle h_0}{\|g_1-\langle g_1,h_0\rangle h_0\|},\cdots.$$
显然 $h_k$ 依旧是 $k$ 次的多项式。

实际上，可以证明 **Legendre 多项式**
$$P_0(x)=1,\quad P_n(x)=\frac{1}{2^nn!}\frac{\mathrm{d}^n}{\mathrm{d}x^n}(x^2-1)^n,\quad n=1,2,\cdots$$
是 $L^2[-1,1]$ 中的正交多项式系。将 Legendre 多项式单位化得到
$$h_0(x)=\frac{1}{\sqrt{2}},\qquad h_n(x)=\frac{1}{2^nn!}\sqrt{\frac{2n+1}{2}}\frac{\mathrm{d}^n}{\mathrm{d}x^n}(x^2-1)^n,\quad n=1,2,\cdots$$
就是 $\{g_n\}$ 经过 Gram–Schmidt 过程得到的正交向量系。又由于多项式全体在 $L^2[-1,1]$ 中稠密，因此 $\{h_n: n=0,1,\cdots\}$ 构成了一组标准正交基。

### 例 1.3.9 (Hermite 与 Laguerre 多项式) @27

令 $H_n$ 为 Hermite 多项式 $(-1)^n\mathrm{e}^{t^2}\dfrac{\mathrm{d}^n}{\mathrm{d}t^n}\mathrm{e}^{-t^2}$，作
$$\psi_n(t)=(2^nn!\sqrt{\pi})^{-\frac{1}{2}}\mathrm{e}^{-\frac{t^2}{2}}H_n(t),$$
则 $\psi_n(t)\ (n=0,1,2,\cdots)$ 组成 $L^2(\mathbb{R},\mathrm{e}^{-x^2}\mathrm{d}m(x))$ 中的完备标准正交系。

令 $L_n(t)$ 为 Laguerre（拉盖尔）多项式 $\mathrm{e}^{t}\dfrac{\mathrm{d}^n}{\mathrm{d}t^n}(t^n\mathrm{e}^{-t})$，则
$$\frac{1}{n!}\mathrm{e}^{-\frac{t}{2}}L_n(t)\quad(n=0,1,\cdots)$$
组成 $L^2((0,\infty),\mathrm{e}^{-x}\mathrm{d}m(x))$ 中的完备标准正交系。

### 定理 1.3.3 (正交系的扩张) @27

设 $A$ 是 Hilbert 空间 $H$ 的标准正交系，则 $A$ 可扩张为 $H$ 的一组标准正交基。

一个 Hilbert 空间上可以有很多组不同的标准正交基，但是由集合论的知识可知，两组标准正交基的势总是一样的。而且，Hilbert 空间本质上由标准正交基的势唯一确定。具体来说，两个 Hilbert 空间 $H_1$ 与 $H_2$ 是（保持内积线性）空间同构的充要条件是它们的标准正交基的势是相同的。

### 定理 1.3.4 (投影定理) @28

设 $M$ 是 Hilbert 空间 $H$ 的闭线性子空间，那么，对任何 $x\in H$，存在唯一 $x_0\in M$，$x_1\perp M$ 使 $x=x_0+x_1$。这种分解称为**正交分解**，$x_0$ 称为 $x$ 在 $M$ 上的**正交投影**。特别地，当 $x\in M$ 时，$x_0=x$。

由投影定理，我们可以得到：Hilbert 空间 $H$ 可以分解成正交和 $H=M\oplus M^{\perp}$。

$M$ 在 $H$ 中的正交补空间 $M^{\perp}$ 经常记为 $H\ominus M$。更一般地，如果 $M,N$ 为 $H$ 的两个闭线性子空间，$M\subset N$，定义 $N\ominus M=N\cap M^{\perp}$，那么我们有 $N=M\oplus(N\ominus M)$。

### 推论 1.3.2 (真子空间正交补非零) @28

设 $M$ 是 Hilbert 空间 $H$ 中的闭线性子空间，而且 $M\neq H$，那么 $M^{\perp}$ 中有非零元素。

### 推论 1.3.3 (正交补的闭包) @28

设 $H$ 是 Hilbert 空间，$M$ 是 $H$ 的线性子空间，那么 $\overline{M}=(M^{\perp})^{\perp}$。特别地，$M^{\perp}=\{0\}$ 的充要条件是 $M$ 在 $H$ 中稠密。

### 定义 1.3.4 (凸集) @29

设 $A$ 是线性空间 $X$ 的一个子集，若对于任意的 $x,y\in A$ 以及 $0<t<1$，都有 $tx+(1-t)y\in A$，则称 $A$ 是一个**凸集**。

### 定理 1.3.5 (闭凸集的最佳逼近) @29

设 $M$ 是 Hilbert 空间 $H$ 的一个闭凸子集，则对任意 $x\in H$，存在唯一的 $x_0\in M$，使得
$$\|x-x_0\|=\inf_{y\in M}\|x-y\|.$$

### 推论 1.3.4 (投影定理) @29

设 $M$ 是 Hilbert 空间 $\mathcal{H}$ 的一个闭线性子空间，则对于任意的 $x\in\mathcal{H}$，存在唯一的 $x_0\in M$，使得 $\|x-x_0\|=d(x,M)$，并且 $x_0\perp x-x_0$。

推论 1.3.4 说明用 $M$ 中的元 $y$ 来逼近 $x$ 时，当且仅当 $y$ 等于 $x$ 在 $M$ 上的投影 $x_0$ 时，逼近的程度最好。投影的这个性质常常被用来研究最佳逼近问题，也是凸分析理论的基础之一。
