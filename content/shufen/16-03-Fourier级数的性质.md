---
chapter: 16
chapter_title: Fourier 级数
section: "16.3"
section_title: Fourier 级数的性质
pages: "359–366"
---

## Fourier 级数的分析性质

为简单起见，假定 $f(x)$ 的周期为 $2\pi$。首先，利用 Riemann 引理可以直接得出

### 定理 16.3.1 (傅里叶系数趋于零) @359

设 $f(x)$ 在 $[-\pi,\pi]$ 上可积或绝对可积，则对于 $f(x)$ 的 Fourier 系数 $a_n$ 与 $b_n$，有
$$\lim_{n\to\infty}a_n=0,\qquad \lim_{n\to\infty}b_n=0.$$

对于函数的 Fourier 级数表示，有必要讨论它的逐项微分和逐项积分问题。关于逐项积分，Fourier 级数有非常好的性质。

### 定理 16.3.2 (Fourier 级数的逐项积分定理) @359

设 $f(x)$ 在 $[-\pi,\pi]$ 上可积或绝对可积，
$$f(x)\sim \frac{a_0}{2}+\sum_{n=1}^{\infty}(a_n\cos nx+b_n\sin nx),$$
则 $f(x)$ 的 Fourier 级数可以逐项积分，即对于任意 $c,x\in[-\pi,\pi]$，
$$\int_c^x f(t)\,\mathrm{d}t=\int_c^x\frac{a_0}{2}\,\mathrm{d}t+\sum_{n=1}^{\infty}\int_c^x(a_n\cos nt+b_n\sin nt)\,\mathrm{d}t.$$

由于尚未具备足够的数学工具，这里仅对 $f(x)$ 在 $[-\pi,\pi]$ 上只有有限个第一类不连续点的情况加以证明，$f(x)$ 为一般的可积或绝对可积函数的情况留待今后学习其他课程时解决。

这就是说，只要 $f(x)$ 可以展成 Fourier 级数 $\dfrac{a_0}{2}+\displaystyle\sum_{n=1}^{\infty}(a_n\cos nx+b_n\sin nx)$，哪怕这个级数并不表示 $f(x)$，甚至根本不收敛，它的逐项积分级数也一定能收敛于 $f(x)$ 的积分。从定理 16.3.2 的证明，我们还顺便得到了判断一个三角级数是否为 Fourier 级数的一个必要条件。

### 推论 16.3.1 (傅里叶级数的必要条件) @360

$\dfrac{a_0}{2}+\displaystyle\sum_{n=1}^{\infty}(a_n\cos nx+b_n\sin nx)$ 是某个在 $[-\pi,\pi]$ 上可积或绝对可积函数的 Fourier 级数的必要条件是 $\displaystyle\sum_{n=1}^{\infty}\frac{b_n}{n}$ 收敛。

证明留作习题。因此，并不是随便拿来一个收敛的三角级数就能说它一定是某个函数的 Fourier 级数的。比如三角级数 $\displaystyle\sum_{n=2}^{\infty}\frac{\sin nx}{\ln n}$，由 Dirichlet 判别法可知它是点点收敛的，但由于 $\displaystyle\sum_{n=2}^{\infty}\frac{1}{n\ln n}$ 发散，它不可能是某个可积或绝对可积函数的 Fourier 级数。

但是，Fourier 级数逐项微分的结果就远没有这么好了。一般说来，Fourier 级数是不能逐项微分的，除非是加上特别的条件。

### 定理 16.3.3 (Fourier 级数的逐项微分定理) @361

设 $f(x)$ 在 $[-\pi,\pi]$ 上连续，
$$f(x)\sim \frac{a_0}{2}+\sum_{n=1}^{\infty}(a_n\cos nx+b_n\sin nx),$$
$f(-\pi)=f(\pi)$，且除了有限个点外 $f(x)$ 可导。进一步假设 $f'(x)$ 在 $[-\pi,\pi]$ 上可积或绝对可积（注意：$f'(x)$ 在有限个点可能无定义，但这并不影响其可积性），则 $f'(x)$ 的 Fourier 级数可由 $f(x)$ 的 Fourier 级数逐项微分得到，即
$$f'(x)\sim \frac{\mathrm{d}}{\mathrm{d}x}\left(\frac{a_0}{2}\right)+\sum_{n=1}^{\infty}\frac{\mathrm{d}}{\mathrm{d}x}(a_n\cos nx+b_n\sin nx)=\sum_{n=1}^{\infty}(-a_nn\sin nx+b_nn\cos nx).$$

## Fourier 级数的逼近性质

现在我们来讨论 Fourier 级数的逼近性质。

### 定义 16.3.1 (最佳平方逼近元素) @361

设 $S$ 是一个定义了内积运算 $(\,\cdot\,,\,\cdot\,)$ 的线性空间，取 $S$ 中的范数为
$$\|\,\cdot\,\|=\sqrt{(\,\cdot\,,\,\cdot\,)},$$
$T$ 是 $S$ 的一个 $n$ 维子空间，记 $T$ 的一组正交基为 $\varphi_1,\varphi_2,\cdots,\varphi_n$，即
$$T=\operatorname{span}\{\varphi_1,\varphi_2,\cdots,\varphi_n\},$$
若对于 $x\in S$，有 $x_T=c_1\varphi_1+c_2\varphi_2+\cdots+c_n\varphi_n\in T$，使得
$$\|x-x_T\|=\min_{y\in T}\|x-y\|,$$
则称 $x_T$ 是 $x$ 在 $T$ 中的最佳平方逼近元素。

### 引理 16.3.1 (最佳平方逼近的性质) @362

在上述假定下

（1）对于任意 $x\in S$，$x$ 在 $T$ 中的最佳平方逼近元素 $x_T$ 存在且惟一；

（2）$x_T\in T$ 是 $x$ 在 $T$ 中的最佳平方逼近元素的充分必要条件是 $x-x_T\perp T$，即
$$(x-x_T,\varphi_k)=0,\qquad k=1,2,\cdots,n,$$
或者等价地，$x_T$ 的组合系数
$$c_k=\frac{(x,\varphi_k)}{(\varphi_k,\varphi_k)},\qquad k=1,2,\cdots,n;$$

（3）最佳平方逼近的余项满足估计式
$$\|x-x_T\|^2=\|x\|^2-\|x_T\|^2=\|x\|^2-\sum_{k=1}^{n}c_k^2\|\varphi_k\|^2.$$

图 16.3.1 给出了引理 16.3.1 结论的一个简单示意。

现在，具体地取 $S$ 为 $[-\pi,\pi]$ 上 Riemann 可积或在反常积分意义下平方可积（为方便起见，以下都简称为"可积或平方可积"）的函数 $f(x)$ 全体；$S$ 中的内积 $(\,\cdot\,,\,\cdot\,)$ 和范数 $\|\,\cdot\,\|$ 定义为
$$(f,g)=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)g(x)\,\mathrm{d}x,\qquad \|f\|=\sqrt{(f,f)}.$$
记 $T$ 为 $n$ 阶三角多项式 $\dfrac{A_0}{2}+\displaystyle\sum_{k=1}^{n}(A_k\cos kx+B_k\sin kx)$ 的全体，利用前面已得到的正交性，可将 $T$ 表示为
$$T=\operatorname{span}\{1,\cos x,\sin x,\cos 2x,\sin 2x,\cdots,\cos nx,\sin nx\},$$
这时，有 $\|1\|^2=2$ 和
$$\|\cos kx\|^2=\|\sin kx\|^2=1,\qquad k=1,2,\cdots,n.$$
由 Fourier 系数的 Euler–Fourier 公式，得到
$$(f,\cos kx)=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\cos kx\,\mathrm{d}x=a_k,\qquad k=0,1,2,\cdots,n,$$
$$(f,\sin kx)=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\sin kx\,\mathrm{d}x=b_k,\qquad k=1,2,\cdots,n,$$
于是，由引理 16.3.1 即得到下面的重要结论。

### 定理 16.3.4 (Fourier 级数的平方逼近性质) @363

设 $f(x)$ 在 $[-\pi,\pi]$ 上可积或平方可积，则 $f(x)$ 在 $T$ 中的最佳平方逼近元素恰为 $f(x)$ 的 Fourier 级数的部分和函数
$$S_n(x)=\frac{a_0}{2}+\sum_{k=1}^{n}(a_k\cos kx+b_k\sin kx),$$
逼近的余项为
$$\|f-S_n\|^2=\frac{1}{\pi}\int_{-\pi}^{\pi}f^2(x)\,\mathrm{d}x-\left[\frac{a_0^2}{2}+\sum_{k=1}^{n}(a_k^2+b_k^2)\right].$$

因为 $\|f-S_n\|^2\geqslant 0$，在余项中令 $n\to\infty$，即得到

### 推论 16.3.2 (Bessel 不等式) @363

设 $f(x)$ 在 $[-\pi,\pi]$ 上可积或平方可积，则 $f(x)$ 的 Fourier 系数满足不等式
$$\frac{a_0^2}{2}+\sum_{k=1}^{\infty}(a_k^2+b_k^2)\leqslant \frac{1}{\pi}\int_{-\pi}^{\pi}f^2(x)\,\mathrm{d}x.$$

这表示 Fourier 系数的平方组成了一个收敛的级数。进一步的研究表明，上面的不等式实际上是一个等式，称为 Parseval 等式（又称能量恒等式），它在理论和实际问题中都具有重要作用。

### 定理 16.3.5 (Parseval 等式) @364

设 $f(x)$ 在 $[-\pi,\pi]$ 上可积或平方可积，则成立等式
$$\frac{a_0^2}{2}+\sum_{k=1}^{\infty}(a_k^2+b_k^2)=\frac{1}{\pi}\int_{-\pi}^{\pi}f^2(x)\,\mathrm{d}x.$$

证明从略。

### 定义 16.3.2 (平方收敛) @364

若函数序列 $\{\psi_n(x)\}$ 满足
$$\lim_{n\to\infty}\|f(x)-\psi_n(x)\|^2=0,$$
这里 $f(x)$ 是某一个固定函数，则称 $\{\psi_n(x)\}$ 按范数 $\|\,\cdot\,\|$ 平方收敛于 $f(x)$，简称 $\psi_n(x)$ 平方收敛于 $f(x)$。

由 Parseval 等式
$$\lim_{n\to\infty}\|f-S_n\|^2=\frac{1}{\pi}\int_{-\pi}^{\pi}f^2(x)\,\mathrm{d}x-\left[\frac{a_0^2}{2}+\sum_{k=1}^{\infty}(a_k^2+b_k^2)\right]=0,$$
即得到一个精彩而重要的结论。

### 推论 16.3.3 (Fourier 级数的平方收敛性质) @364

设 $f(x)$ 在 $[-\pi,\pi]$ 上可积或平方可积，则 $f(x)$ 的 Fourier 级数的部分和函数序列平方收敛于 $f(x)$。

而对一致收敛，我们不加证明地引进一个同样精彩、同样重要的结论。

### 定理 16.3.6 (Weierstrass 第二逼近定理) @364

对周期为 $2\pi$ 的任意一个连续函数 $f(x)$，都存在三角多项式序列
$$\left\{\psi_n(x)=\frac{A_0}{2}+\sum_{k=1}^{n}(A_k\cos kx+B_k\sin kx)\right\},$$
使得 $\{\psi_n(x)\}$ 一致收敛于 $f(x)$。

## 等周问题

在平面上周长相等的所有简单闭曲线中，怎样的曲线所围图形的面积最大？这就是著名的"等周问题"。早在古希腊时期，人们就已经猜测这样的曲线应该是圆周，但这一事实的严格证明是近代才给出的。确切的结论如下：

### 定理 16.3.7 (圆周所围面积最大) @364

平面上具有定长的所有简单闭曲线中，圆周所围的面积最大。换言之，若 $L$ 是平面上简单闭曲线 $C$ 的长度，$A$ 是曲线 $C$ 所围图形的面积，则
$$A\leqslant \frac{L^2}{4\pi},$$
且等号成立时，$C$ 必须是圆周。

### 注 (圆周面积最大的证明) @364

$\dfrac{L^2}{4\pi}$ 就是周长为 $L$ 的圆所围的面积。

我们现在仅限于对平面上分段光滑的简单闭曲线讨论问题。以下的证明是 Hurwitz 在 1902 年给出的。

### 引理 16.3.2 (Wirtinger) @364

设 $f(x)$ 在 $[-\pi,\pi]$ 上连续，$f(-\pi)=f(\pi)$，$\displaystyle\int_{-\pi}^{\pi}f(x)\,\mathrm{d}x=0$，且除了有限个点外 $f(x)$ 可导，但在不可导的点，$f(x)$ 的单侧导数存在。进一步假设 $f(x)$ 的导数 $f'(x)$ 在 $[-\pi,\pi]$ 上可积或平方可积，则
$$\int_{-\pi}^{\pi}f^2(x)\,\mathrm{d}x\leqslant \int_{-\pi}^{\pi}f'^2(x)\,\mathrm{d}x,$$
等号成立当且仅当 $f(x)=a\cos x+b\sin x$（$a,b$ 为常数）。
