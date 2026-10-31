---
chapter: 16
chapter_title: Fourier 级数
section: "16.2"
section_title: Fourier 级数的收敛判别法
pages: "731–740"
---

### 注 (Dirichlet 积分的引入) @731

仔细观察上一节中的几幅图像后可能会产生这样的直觉：对于一般的以 $2\pi$ 为周期的函数 $f(x)$，除了个别点之外（看来是不连续点），当 $m\to\infty$ 时，它的 Fourier 级数的部分和函数序列 $\{S_m(x)\}$，
$$S_m(x)=\frac{a_0}{2}+\sum_{n=1}^{m}(a_n\cos nx+b_n\sin nx)$$
是收敛于 $f(x)$ 的。下面从理论上探讨这个问题。

与 Taylor 级数相比，Fourier 级数尽管具有对 $f(x)$ 的要求较弱，以及它的部分和在整区间上与 $f(x)$ 逼近得较好等优点，但在收敛性问题的讨论上，Taylor 级数相对比较简单：对它只要确定收敛半径，并在收敛区间的端点讨论余项的收敛情况就行了，而 Fourier 级数却要复杂得多。由于级数的收敛情况就是部分和函数序列的极限情况，下面的讨论就从部分和函数序列 $\{S_m(x)\}$ 入手。

将 Euler–Fourier 公式
$$a_n=\frac{1}{\pi}\int_{-\pi}^{\pi}f(t)\cos nt\,\mathrm{d}t,\qquad b_n=\frac{1}{\pi}\int_{-\pi}^{\pi}f(t)\sin nt\,\mathrm{d}t$$
代入 $S_m(x)$，得
$$S_m(x)=\frac{1}{2\pi}\int_{-\pi}^{\pi}f(t)\,\mathrm{d}t+\frac{1}{\pi}\sum_{n=1}^{m}\left[\left(\int_{-\pi}^{\pi}f(t)\cos nt\,\mathrm{d}t\right)\cos nx+\left(\int_{-\pi}^{\pi}f(t)\sin nt\,\mathrm{d}t\right)\sin nx\right].$$
交换求和与积分次序，并利用三角函数的积化和差公式，有
$$S_m(x)=\frac{1}{\pi}\int_{-\pi}^{\pi}f(t)\left[\frac{1}{2}+\sum_{n=1}^{m}\bigl(\cos nt\cos nx+\sin nt\sin nx\bigr)\right]\mathrm{d}t=\frac{1}{\pi}\int_{-\pi}^{\pi}f(t)\left[\frac{1}{2}+\sum_{n=1}^{m}\cos n(t-x)\right]\mathrm{d}t.$$
当 $\theta\ne 0$ 时，由三角函数的积化和差公式，有
$$\frac{1}{2}+\sum_{n=1}^{m}\cos n\theta=\frac{\sin\dfrac{2m+1}{2}\theta}{2\sin\dfrac{\theta}{2}};$$
而当 $\theta=0$ 时，若将右端理解为当 $\theta\to 0$ 时的极限值，则等式依然成立。因此上式对任意 $\theta\in[-\pi,\pi]$ 都是正确的。

于是
$$S_m(x)=\frac{1}{\pi}\int_{-\pi}^{\pi}f(t)\,\frac{\sin\dfrac{2m+1}{2}(t-x)}{2\sin\dfrac{t-x}{2}}\,\mathrm{d}t\qquad(\text{作代换 }t-x=u),$$
$$S_m(x)=\frac{1}{\pi}\int_{-\pi-x}^{\pi-x}f(x+u)\,\frac{\sin\dfrac{2m+1}{2}u}{2\sin\dfrac{u}{2}}\,\mathrm{d}u=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x+u)\,\frac{\sin\dfrac{2m+1}{2}u}{2\sin\dfrac{u}{2}}\,\mathrm{d}u.$$
最后一个等式利用了“周期函数在任何一个长度等于其周期的区间上的积分值相等”的性质。这样就把部分和转化成了积分形式，这个积分称为 **Dirichlet 积分**，是研究 Fourier 级数敛散性的重要工具。

将积分区间 $[-\pi,\pi]$ 分成 $[-\pi,0]$ 和 $[0,\pi]$，稍加整理，就得到了 Dirichlet 积分的惯用形式
$$S_m(x)=\frac{1}{\pi}\int_0^{\pi}\bigl[f(x+u)+f(x-u)\bigr]\,\frac{\sin\dfrac{2m+1}{2}u}{2\sin\dfrac{u}{2}}\,\mathrm{d}u.$$
由前面的三角函数关系式，有
$$\frac{2}{\pi}\int_0^{\pi}\frac{\sin\dfrac{2m+1}{2}u}{2\sin\dfrac{u}{2}}\,\mathrm{d}u=\frac{2}{\pi}\int_0^{\pi}\left(\frac{1}{2}+\sum_{n=1}^{m}\cos nu\right)\mathrm{d}u=1,$$
因此，对任意给定的函数 $\sigma(x)$，有
$$S_m(x)-\sigma(x)=\frac{1}{\pi}\int_0^{\pi}\bigl[f(x+u)+f(x-u)-2\sigma(x)\bigr]\,\frac{\sin\dfrac{2m+1}{2}u}{2\sin\dfrac{u}{2}}\,\mathrm{d}u.$$

### 注 (收敛性的等价表述) @732

记
$$\varphi_\sigma(u,x)=f(x+u)+f(x-u)-2\sigma(x),$$
则 $f(x)$ 的 Fourier 级数是否收敛于某个 $\sigma(x)$，就等价于极限
$$\lim_{m\to\infty}\int_0^{\pi}\varphi_\sigma(u,x)\,\frac{\sin\dfrac{2m+1}{2}u}{2\sin\dfrac{u}{2}}\,\mathrm{d}u$$
是否存在且等于 $0$。

### 定理 16.2.1 (Riemann 引理) @733

设函数 $\psi(x)$ 在 $[a,b]$ 上可积或绝对可积，则成立
$$\lim_{p\to+\infty}\int_a^b\psi(x)\sin px\,\mathrm{d}x=\lim_{p\to+\infty}\int_a^b\psi(x)\cos px\,\mathrm{d}x=0.$$

### 推论 16.2.1 (局部性原理) @734

可积或绝对可积函数 $f(x)$ 的 Fourier 级数在 $x$ 点是否收敛，只与 $f(x)$ 在 $(x-\delta,x+\delta)$ 的性质有关，这里 $\delta$ 是任意小的正常数。

### 推论 16.2.2 (两个积分极限相等) @734

设函数 $\psi(u)$ 在 $[0,\delta]$ 上可积或绝对可积，则成立
$$\lim_{m\to\infty}\int_0^{\delta}\psi(u)\,\frac{\sin\dfrac{2m+1}{2}u}{2\sin\dfrac{u}{2}}\,\mathrm{d}u=\lim_{m\to\infty}\int_0^{\delta}\psi(u)\,\frac{\sin\dfrac{2m+1}{2}u}{u}\,\mathrm{d}u.$$

### 注 (Dini 条件) @735

以上推论进一步告诉我们：如果对点 $x$，能找到适当的 $\sigma(x)$，使得对于充分小的定数 $\delta>0$，有
$$\lim_{m\to\infty}\int_0^{\delta}\frac{\varphi_\sigma(u,x)}{u}\cdot\sin\frac{2m+1}{2}u\,\mathrm{d}u=0,$$
则 $f(x)$ 的 Fourier 级数在 $x$ 点必定收敛于这个 $\sigma(x)$。

对 $x\in[-\pi,\pi]$，只要存在某个 $\delta>0$，使
$$\frac{\varphi_\sigma(u,x)}{u}=\frac{f(x+u)+f(x-u)-2\sigma(x)}{u}$$
关于 $u$ 在 $[0,\delta]$ 上可积或绝对可积（这被称为 **Dini 条件**），就可以由 Riemann 引理导出上面的结果。现假设点 $x$ 是 $f(x)$ 的连续点或第一类不连续点，而上述积分的极限存在与否只涉及 $\dfrac{\varphi_\sigma(u,x)}{u}$ 当 $u\to 0$ 时的性质，显然要满足 Dini 条件首先必须有
$$\lim_{u\to 0}\bigl[f(x+u)+f(x-u)-2\sigma(x)\bigr]=0,$$
即必须有 $\sigma(x)=\dfrac{f(x+)+f(x-)}{2}$（显然当 $f(x)$ 在点 $x$ 连续时，有 $\sigma(x)=f(x)$）。于是问题最终转化为研究使得
$$\lim_{p\to+\infty}\int_0^{\delta}\left[f(x+u)+f(x-u)-2\,\frac{f(x+)+f(x-)}{2}\right]\frac{\sin pu}{u}\,\mathrm{d}u=0$$
成立的条件——这是探索 Fourier 级数收敛性的一把钥匙。

德国数学家 Dirichlet 在 1829 年——Fourier 级数问世约四分之一个世纪之后，首先得到了一个函数的 Fourier 级数的收敛条件；又过了约半个世纪，另一位德国数学家 Lipschitz 得到了与之不同的收敛条件。他们的结果经后人完善，可以表述为如下定理。

### 定理 16.2.2 (傅里叶级数的收敛判别) @735

设函数 $f(x)$ 在 $[-\pi,\pi]$ 上可积或绝对可积，且满足下列两个条件之一，则 $f(x)$ 的 Fourier 级数在点 $x$ 处收敛于 $\dfrac{f(x+)+f(x-)}{2}$。

（1）（**Dirichlet–Jordan 判别法**）$f(x)$ 在点 $x$ 的某个邻域 $O(x,\delta)$ 上是分段单调有界函数；

（2）（**Dini–Lipschitz 判别法**）$f(x)$ 在点 $x$ 处满足指数为 $\alpha\in(0,1]$ 的 Hölder 条件。

### 定义 16.2.1 (分段单调函数) @736

设函数 $f$ 在 $[a,b]$（或 $(a,b)$）上有定义。如果在 $[a,b]$（或 $(a,b)$）上存在有限个点
$$a=x_0<x_1<x_2<\cdots<x_N=b,$$
使得 $f$ 在每个区间 $(x_{i-1},x_i)$（$i=1,2,\cdots,N$）上是单调函数，则称 $f$ 在 $[a,b]$（或 $(a,b)$）上**分段单调**。

### 定义 16.2.2 (Hölder 条件) @736

设点 $x$ 是函数 $f(x)$ 的连续点或第一类不连续点，若对于充分小的正数 $\delta$，存在常数 $L>0$ 和 $\alpha\in(0,1]$，使得成立
$$|f(x\pm u)-f(x\pm)|<Lu^{\alpha}\qquad(0<u<\delta),$$
则称 $f(x)$ 在点 $x$ 处满足指数为 $\alpha\in(0,1]$ 的 **Hölder 条件**（当 $\alpha=1$ 也称为 **Lipschitz 条件**）。

### 定理 16.2.3 (Dirichlet 引理) @736

设函数 $\psi(u)$ 在 $[0,\delta]$ 上单调，则成立
$$\lim_{p\to+\infty}\int_0^{\delta}\frac{\psi(u)-\psi(0+)}{u}\sin pu\,\mathrm{d}u=0.$$

### 注 (Dirichlet 引理的等价形式) @737

Dirichlet 引理也经常表达为等价形式
$$\lim_{p\to+\infty}\int_0^{\delta}\psi(u)\,\frac{\sin pu}{u}\,\mathrm{d}u=\frac{\pi}{2}\psi(0+).$$
如果 $\psi(u)$ 是分段单调有界函数，易知 Dirichlet 引理依然成立。

### 推论 16.2.3 (单侧导数与收敛性) @737

若 $f(x)$ 在 $[-\pi,\pi]$ 上可积或绝对可积，在点 $x$ 处两个单侧导数 $f'_+(x)$ 和 $f'_-(x)$ 都存在，或更进一步，只要两个拟单侧导数
$$\lim_{h\to 0+}\frac{f(x\pm h)-f(x\pm)}{h}$$
存在，则 $f(x)$ 的 Fourier 级数在点 $x$ 处收敛于 $\dfrac{f(x+)+f(x-)}{2}$。

### 注 (判别法的适用范围) @738

Dirichlet–Jordan 判别法和 Dini–Lipschitz 判别法都是 Fourier 级数收敛的充分条件。尽管在物理、化学、工程等领域的实际问题中，出现的函数一般都同时满足这两个判别法的条件（上节例子和习题中的 $f(x)$ 均是如此），但可以构造例子说明它们确实是互不包含的。附带指出，直至今天，还没有找到一个判别 Fourier 级数敛散性的既充分又必要的条件。

定理 16.2.2 告诉我们，若收敛条件满足，则 $f(x)$ 的 Fourier 级数在连续点收敛于函数值本身，而在第一类不连续点收敛于它左右极限的算术平均值。所以对于连续的周期函数 $f(x)$，应将 $f(x)$ 与它的（收敛的）Fourier 级数间的“$\sim$”改为“$=$”。若周期函数 $f(x)$ 有第一类不连续点，那么展成 Fourier 级数后，要对这些点予以特别说明，画图时也要将它们的函数值标为其左右极限的算术平均值。

### 例 (由收敛性求数项级数) @738

如例 16.1.2 中 $f(x)$ 的余弦级数可以直接了当地写成
$$\frac{\pi}{2}-\frac{4}{\pi}\left(\cos x+\frac{\cos 3x}{3^2}+\frac{\cos 5x}{5^2}+\cdots+\frac{\cos(2k+1)x}{(2k+1)^2}+\cdots\right)=x,\qquad x\in[0,\pi].$$

如例 16.1.1，应该写成
$$f(x)\sim\frac{1}{2}-\frac{2}{\pi}\left(\sin x+\frac{\sin 3x}{3}+\cdots+\frac{\sin(2k+1)x}{2k+1}+\cdots\right)$$
$$=\begin{cases}1, & x\in(-\pi,0),\\ \dfrac{1}{2}, & x=0,\pm\pi,\\ 0, & x\in(0,\pi).\end{cases}$$
Fourier 级数的图像如图 16.2.1 所示。

因 $x=\dfrac{\pi}{2}$ 属于 Fourier 级数收敛范围，因此有
$$\left.\left[\frac{1}{2}-\frac{2}{\pi}\left(\sin x+\frac{\sin 3x}{3}+\frac{\sin 5x}{5}+\cdots+\frac{\sin(2k+1)x}{2k+1}+\cdots\right)\right]\right|_{x=\frac{\pi}{2}}=f\!\left(\frac{\pi}{2}\right)=0,$$
整理后便有熟知的
$$\frac{\pi}{4}=1-\frac{1}{3}+\frac{1}{5}-\cdots+(-1)^k\frac{1}{2k+1}+\cdots,$$
在 Fourier 级数的研究中，我们殊途同归，得到了与在 $y=\arctan x$ 的幂级数中取 $x=1$ 时的相同结果。

例 16.1.2 中 $f(x)$ 的正弦级数应该写成
$$f(x)\sim 2\left(\sin x-\frac{\sin 2x}{2}+\cdots+(-1)^{n+1}\frac{\sin nx}{n}+\cdots\right)=\begin{cases}x, & x\in(-\pi,\pi),\\ 0, & x=0,\pm\pi.\end{cases}$$
Fourier 级数的图像如图 16.2.2 所示。它在 $[0,\pi]$ 上与余弦级数表示的是同一个函数，这正是上一节中指出的结果。

而例 16.1.3 的式子也应相仿地写成
$$f(x)\sim\frac{1}{6}+\frac{2}{\pi^2}\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}\cos n\pi x+\frac{1}{\pi}\sum_{n=1}^{\infty}\left[\frac{(-1)^{n+1}}{n}+2\,\frac{(-1)^n-1}{n^3\pi^2}\right]\sin n\pi x$$
$$=\begin{cases}0, & x\in(-1,0],\\ \dfrac{1}{2}, & x=\pm 1,\\ x^2, & x\in(0,1).\end{cases}$$
Fourier 级数的图像如图 16.2.3 所示。

### 注 (由 Fourier 级数导出 $\zeta(2)$ 等) @739

在证实了这个 Fourier 级数收敛的前提下，可以导出一个非常重要的结果。令 $x=1$，注意到这个点是 $f(x)$ 的不连续点，其 Fourier 级数应收敛于 $\dfrac{f(1+)+f(1-)}{2}=\dfrac{1}{2}$；而在上面级数的第一个和式中有 $\cos n\pi=(-1)^n$，第二个和式显然为零。因此稍加整理就可得到
$$\sum_{n=1}^{\infty}\frac{1}{n^2}=1+\frac{1}{2^2}+\frac{1}{3^2}+\frac{1}{4^2}+\cdots=\frac{\pi^2}{6}.$$
由它还可以导出一系列类似级数的值，如
$$1-\frac{1}{2^2}+\frac{1}{3^2}-\frac{1}{4^2}+\cdots=\frac{\pi^2}{12},$$
$$1+\frac{1}{3^2}+\frac{1}{5^2}+\frac{1}{7^2}+\cdots=\frac{\pi^2}{8}$$
等（留作习题）。

这些等式可以用来进行某些特殊的计算，如历史上曾有人用这些等式计算过 $\pi$ 的近似值。而对某些原函数并非初等函数的积分，如 $\displaystyle\int_0^1\frac{\ln(1-x)}{x}\,\mathrm{d}x$，将被积函数 Taylor 展开，易知该级数在 $[0,1]$ 可以逐项积分，因此
$$\int_0^1\frac{\ln(1-x)}{x}\,\mathrm{d}x=-\int_0^1\left(\sum_{n=1}^{\infty}\frac{x^{n-1}}{n}\right)\mathrm{d}x=-\sum_{n=1}^{\infty}\int_0^1\frac{x^{n-1}}{n}\,\mathrm{d}x=-\sum_{n=1}^{\infty}\left.\left(\frac{x^n}{n^2}\right)\right|_0^1=-\sum_{n=1}^{\infty}\frac{1}{n^2}=-\frac{\pi^2}{6},$$
这正是 §8.1 关于反常积分的数值计算中提到的结果。

这些等式也经常用来检验展开的 Fourier 级数的正确性。比如令例 16.1.2 的余弦级数中的 $x=0$，就得到
$$\left.\left[\frac{\pi}{2}-\frac{4}{\pi}\left(\cos x+\frac{\cos 3x}{3^2}+\frac{\cos 5x}{5^2}+\cdots+\frac{\cos(2k+1)x}{(2k+1)^2}+\cdots\right)\right]\right|_{x=0}=f(0)=0,$$
即上面的最后一个等式
$$\sum_{k=1}^{\infty}\frac{1}{(2k-1)^2}=\frac{\pi^2}{8}.$$

### 注 ($\cos x$ 零点倒数的平方和) @740

还可以获得一些其他的有趣结果。如 $\cos x$ 的全部零点为
$$\pm\frac{\pi}{2},\ \pm\frac{3\pi}{2},\ \cdots,\ \pm\frac{(2k-1)\pi}{2},\ \cdots,$$
而
$$\sum_{k=1}^{\infty}\frac{1}{\left[\dfrac{(2k-1)\pi}{2}\right]^2}+\sum_{k=1}^{\infty}\frac{1}{\left[-\dfrac{(2k-1)\pi}{2}\right]^2}=2\cdot\frac{4}{\pi^2}\sum_{k=1}^{\infty}\frac{1}{(2k-1)^2}=2\cdot\frac{4}{\pi^2}\cdot\frac{\pi^2}{8}=1,$$
即 $\cos x$ 全部零点的倒数的平方和恰为 $1$。
