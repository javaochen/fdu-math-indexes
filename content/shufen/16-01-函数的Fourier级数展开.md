---
chapter: 16
chapter_title: Fourier 级数
section: "16.1"
section_title: 函数的 Fourier 级数展开
pages: "724–730"
---

Taylor 展开要求函数有足够高阶的导数，且只在展开点附近与函数吻合，只有局部性质。为了找到对函数要求更宽、在整个区间上都与函数吻合的展开方法，考察用三角函数的线性组合表示一般函数。

### 定义 (三角级数) @724

形如
$$\frac{a_0}{2}+\sum_{n=1}^{\infty}\left(a_n\cos nx+b_n\sin nx\right)$$
的函数项级数称为**三角级数**，其中 $a_0,a_n$ 和 $b_n\ (n=1,2,\cdots)$ 为常数。

### 命题 (三角函数系的正交性) @725

函数族
$$\{1,\ \sin x,\ \cos x,\ \sin 2x,\ \cos 2x,\ \cdots,\ \sin nx,\ \cos nx,\ \cdots\}$$
是任意一个长度为 $2\pi$ 的区间上的正交函数列，即
$$\int_{-\pi}^{\pi}\cos mx\cos nx\,\mathrm{d}x=\int_{-\pi}^{\pi}\sin mx\sin nx\,\mathrm{d}x=\pi\cdot\delta_{m,n},\qquad m,n\in\mathbf{N}^{+},$$
$$\int_{-\pi}^{\pi}\cos mx\cdot\sin nx\,\mathrm{d}x=0,\qquad m=0,1,2,\cdots,\ n\in\mathbf{N}^{+},$$
$$\int_{-\pi}^{\pi}1\cdot\cos mx\,\mathrm{d}x=2\pi\cdot\delta_{m,0},\qquad m=0,1,2,\cdots,$$
其中
$$\delta_{m,n}=\begin{cases}1, & m=n;\\ 0, & m\neq n.\end{cases}$$

### 命题 (Euler–Fourier 公式) @725

设 $f(x)$ 在 $[-\pi,\pi]$ 上可积或绝对可积，并已按 $2\pi$ 为周期延拓到 $(-\infty,+\infty)$。若
$$f(x)=\frac{a_0}{2}+\sum_{n=1}^{\infty}\left(a_n\cos nx+b_n\sin nx\right),$$
且右端三角级数可以逐项积分，则
$$a_n=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\cos nx\,\mathrm{d}x,\qquad n=0,1,2,\cdots,$$
$$b_n=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\sin nx\,\mathrm{d}x,\qquad n=1,2,\cdots. \tag{16.1}$$

常数项写成 $\dfrac{a_0}{2}$ 而不是 $a_0$，是为了使 $a_n\ (n=0,1,2,\cdots)$ 有上述统一的表达式。

### 定义 (Fourier 系数与 Fourier 级数) @726

设周期为 $2\pi$ 的函数 $f(x)$ 在 $[-\pi,\pi]$ 上可积或绝对可积，由 Euler–Fourier 公式求出 $a_n,b_n$，并记
$$f(x)\sim\frac{a_0}{2}+\sum_{n=1}^{\infty}\left(a_n\cos nx+b_n\sin nx\right),$$
则右端的三角级数称为 $f(x)$ 的 **Fourier 级数**，相应的 $a_n$ 和 $b_n$ 称为 $f(x)$ 的 **Fourier 系数**。由于目前不知道右端三角级数是否收敛、即使收敛也不知道是否收敛到 $f(x)$ 本身，所以在 $f(x)$ 与它的 Fourier 级数之间不能用等号而只能用“$\sim$”。

### 例 16.1.1 @726

求
$$f(x)=\begin{cases}1, & x\in[-\pi,0),\\ 0, & x\in[0,\pi)\end{cases}$$
的 Fourier 级数。

**解** 先计算 $f(x)$ 的 Fourier 系数。
$$a_0=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\,\mathrm{d}x=1,$$
对 $n=1,2,\cdots$，
$$a_n=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\cos nx\,\mathrm{d}x=\frac{1}{\pi}\int_{-\pi}^{0}\cos nx\,\mathrm{d}x=\frac{1}{n\pi}\sin nx\Big|_{-\pi}^{0}=0,$$
$$b_n=\frac{1}{\pi}\int_{-\pi}^{\pi}f(x)\sin nx\,\mathrm{d}x=\frac{1}{\pi}\int_{-\pi}^{0}\sin nx\,\mathrm{d}x=-\frac{1}{n\pi}\cos nx\Big|_{-\pi}^{0}=\frac{(-1)^n-1}{n\pi},$$
于是得到 $f(x)$ 的 Fourier 级数
$$f(x)\sim\frac{1}{2}+\frac{1}{\pi}\sum_{n=1}^{\infty}\frac{(-1)^n-1}{n}\sin nx=\frac{1}{2}-\frac{2}{\pi}\left(\sin x+\frac{\sin 3x}{3}+\frac{\sin 5x}{5}+\cdots+\frac{\sin(2k+1)x}{2k+1}+\cdots\right).$$

$f(x)$ 的图形在电工学中称为**方波**（见图 16.1.1(a)），上式表明它可以由一系列的正弦波叠加得到。但显然，当 $x=0$ 和 $\pm\pi$ 时，右端级数的和为 $\dfrac{1}{2}$，不等于 $f(x)$ 的值。

### 注 (Fourier 级数的部分和) @727

图 16.1.1(b) 给出了在 $[-\pi,\pi]$ 上 $f(x)$ 的 Fourier 级数前若干项之和的逼近情况，图中 $S_m$ 表示
$$S_m(x)=\frac{a_0}{2}+\sum_{n=1}^{m}\left(a_n\cos nx+b_n\sin nx\right),$$
它就是 $f(x)$ 的 Fourier 级数的**部分和**。

### 命题 (奇偶函数的 Fourier 系数) @727

由定积分的性质，若 $f(x)$ 是奇函数，则显然有 $a_n=0$，而
$$b_n=\frac{2}{\pi}\int_{0}^{\pi}f(x)\sin nx\,\mathrm{d}x,\qquad n=1,2,\cdots,$$
这时相应的 Fourier 级数为
$$f(x)\sim\sum_{n=1}^{\infty}b_n\sin nx.$$
同样，若 $f(x)$ 是偶函数，那么有 $b_n=0$ 和
$$a_n=\frac{2}{\pi}\int_{0}^{\pi}f(x)\cos nx\,\mathrm{d}x,\qquad n=1,2,\cdots,$$
相应的 Fourier 级数为
$$f(x)\sim\frac{a_0}{2}+\sum_{n=1}^{\infty}a_n\cos nx.$$

### 定义 (正弦级数与余弦级数) @727

形如 $\displaystyle\sum_{n=1}^{\infty}b_n\sin nx$ 的三角级数称为**正弦级数**，形如 $\displaystyle\frac{a_0}{2}+\sum_{n=1}^{\infty}a_n\cos nx$ 的三角级数称为**余弦级数**。在实际问题中，出于某种特殊的用途，也经常需要将一个函数展开成正弦级数或余弦级数。

### 例 16.1.2 @727

将 $f(x)=x\ (x\in[0,\pi])$ 分别展开为余弦级数和正弦级数。

**解** 先考虑余弦级数的情况。按理论说应先进行偶延拓，即取
$$\tilde{f}(x)=\begin{cases}x, & x\in[0,\pi],\\ -x, & x\in[-\pi,0),\end{cases}$$
但这一步同样只需在观念上进行，因为只要按余弦级数的情况计算 Fourier 系数，所得的自然就是偶延拓后的函数 $\tilde{f}(x)$ 的 Fourier 级数。经计算得
$$a_0=\frac{2}{\pi}\int_{0}^{\pi}x\,\mathrm{d}x=\frac{x^2}{\pi}\Big|_{0}^{\pi}=\pi,$$
而对 $n=1,2,\cdots$，有
$$a_n=\frac{2}{\pi}\int_{0}^{\pi}x\cos nx\,\mathrm{d}x=\frac{2}{\pi}\left(\frac{x\sin nx}{n}\Big|_{0}^{\pi}-\frac{1}{n}\int_{0}^{\pi}\sin nx\,\mathrm{d}x\right)=\frac{2}{\pi}\left(\frac{\cos nx}{n^2}\Big|_{0}^{\pi}\right)=2\cdot\frac{(-1)^n-1}{n^2\pi}=\begin{cases}0, & n=2k,\\[4pt] -\dfrac{4}{n^2\pi}, & n=2k+1,\end{cases}$$
于是得到 $f(x)$ 的余弦级数
$$f(x)\sim\frac{\pi}{2}+\frac{2}{\pi}\sum_{n=1}^{\infty}\frac{(-1)^n-1}{n^2}\cos nx=\frac{\pi}{2}-\frac{4}{\pi}\left(\cos x+\frac{\cos 3x}{3^2}+\frac{\cos 5x}{5^2}+\cdots+\frac{\cos(2k+1)x}{(2k+1)^2}+\cdots\right).$$
这是由一系列的余弦波叠加出来的**锯齿波**（见图 16.1.2(a)），从图 16.1.2(b) 看出，其逼近情况相当好。

再看正弦级数的情况。对 $n=1,2,\cdots$，
$$b_n=\frac{2}{\pi}\int_{0}^{\pi}x\sin nx\,\mathrm{d}x=\frac{2}{\pi}\left(-\frac{x\cos nx}{n}\Big|_{0}^{\pi}+\frac{1}{n}\int_{0}^{\pi}\cos nx\,\mathrm{d}x\right)=\frac{2\cdot(-1)^{n+1}}{n},$$
于是得到 $f(x)$ 的正弦级数
$$f(x)\sim 2\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}\sin nx=2\left(\sin x-\frac{\sin 2x}{2}+\frac{\sin 3x}{3}-\cdots+\frac{(-1)^{n+1}\sin nx}{n}+\cdots\right).$$
它的几何意义是由一系列的正弦波叠加出来的三角波（见图 16.1.3(a)），其逼近情况见图 16.1.3(b)。与例 16.1.1 类似，它在 $x=\pm\pi$ 时的值是 $0$，与 $f(x)$ 的值不相等。

这两种级数的表达形式虽然大相径庭，但若限制在 $[0,\pi]$ 上，它们确实表示同一个函数。

### 命题 (任意周期函数的 Fourier 展开) @729

如果 $f(x)$ 的周期为 $2T$，作变换 $x=\dfrac{T}{\pi}t$，则
$$\varphi(t)=f\left(\frac{T}{\pi}t\right)=f(x)$$
是定义在 $(-\infty,+\infty)$ 上的周期为 $2\pi$ 的函数。利用前面的结果，有
$$\varphi(t)\sim\frac{a_0}{2}+\sum_{n=1}^{\infty}\left(a_n\cos nt+b_n\sin nt\right),$$
代回变量，就有
$$f(x)\sim\frac{a_0}{2}+\sum_{n=1}^{\infty}\left(a_n\cos\frac{n\pi}{T}x+b_n\sin\frac{n\pi}{T}x\right).$$
相应的 Fourier 系数为
$$a_n=\frac{1}{\pi}\int_{-\pi}^{\pi}\varphi(t)\cos nt\,\mathrm{d}t=\frac{1}{T}\int_{-T}^{T}f(x)\cos\frac{n\pi}{T}x\,\mathrm{d}x,\qquad n=0,1,2,\cdots,$$
$$b_n=\frac{1}{\pi}\int_{-\pi}^{\pi}\varphi(t)\sin nt\,\mathrm{d}t=\frac{1}{T}\int_{-T}^{T}f(x)\sin\frac{n\pi}{T}x\,\mathrm{d}x,\qquad n=1,2,\cdots.$$

### 例 16.1.3 @729

求
$$f(x)=\begin{cases}0, & x\in[-1,0),\\ x^2, & x\in[0,1]\end{cases}$$
的 Fourier 级数。

**解** 在上面的公式中令 $T=1$，计算 $f(x)$ 的 Fourier 系数得
$$a_0=\frac{1}{T}\int_{-T}^{T}f(x)\,\mathrm{d}x=\int_{0}^{1}x^2\,\mathrm{d}x=\frac{1}{3},$$
对 $n=1,2,\cdots$，利用分部积分法，
$$a_n=\frac{1}{T}\int_{-T}^{T}f(x)\cos\frac{n\pi}{T}x\,\mathrm{d}x=\int_{0}^{1}x^2\cos n\pi x\,\mathrm{d}x=\frac{2\cdot(-1)^n}{n^2\pi^2},$$
$$b_n=\frac{1}{T}\int_{-T}^{T}f(x)\sin\frac{n\pi}{T}x\,\mathrm{d}x=\int_{0}^{1}x^2\sin n\pi x\,\mathrm{d}x=\frac{(-1)^{n+1}}{n\pi}+\frac{2\left[(-1)^n-1\right]}{n^3\pi^3},$$
于是得到 $f(x)$ 的 Fourier 级数
$$f(x)\sim\frac{1}{6}+\frac{2}{\pi^2}\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}\cos n\pi x+\frac{1}{\pi}\sum_{n=1}^{\infty}\left[\frac{(-1)^{n+1}}{n}+2\cdot\frac{(-1)^n-1}{n^3\pi^2}\right]\sin n\pi x.$$

$f(x)$ 的图形及由一系列正弦波叠加的近似情况见图 16.1.4。
