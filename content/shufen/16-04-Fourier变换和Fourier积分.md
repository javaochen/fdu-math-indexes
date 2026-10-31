---
chapter: 16
chapter_title: Fourier 级数
section: "16.4"
section_title: Fourier 变换和 Fourier 积分
pages: "367–374"
---

### 定义 (Fourier 变换) @367

以上关于 Fourier 级数的论述都是对周期函数而言的。对于不具备周期性的函数，处理思路是这样的：在 $(-\infty,+\infty)$ 上可积的非周期函数 $f(x)$ 可以看成是周期函数的极限情况。

（1）先取 $f(x)$ 在 $[-T,T]$ 上的部分（即把它视为仅定义在 $[-T,T]$ 上的函数），再以 $2T$ 为周期，将它延拓为 $(-\infty,+\infty)$ 上的周期函数 $f_T(x)$；

（2）对得到的周期函数 $f_T(x)$ 作 Fourier 展开；

（3）令 $T$ 趋于无穷大。

将 Euler 公式
$$\cos\theta=\frac{\mathrm{e}^{\mathrm{i}\theta}+\mathrm{e}^{-\mathrm{i}\theta}}{2},\qquad \sin\theta=\frac{\mathrm{e}^{\mathrm{i}\theta}-\mathrm{e}^{-\mathrm{i}\theta}}{2\mathrm{i}}=-\frac{\mathrm{i}}{2}\left(\mathrm{e}^{\mathrm{i}\theta}-\mathrm{e}^{-\mathrm{i}\theta}\right)$$
代入周期为 $2T$ 的函数 $f_T(x)$ 的 Fourier 级数，记 $\dfrac{\pi}{T}$ 是圆频率，$\omega_n=\dfrac{n\pi}{T}$，得到
$$f_T(x)\sim\frac{a_0}{2}+\sum_{n=1}^{\infty}\left(a_n\cos\omega_n x+b_n\sin\omega_n x\right)=\frac{a_0}{2}+\sum_{n=1}^{\infty}\left(\frac{a_n-\mathrm{i}b_n}{2}\mathrm{e}^{\mathrm{i}\omega_n x}+\frac{a_n+\mathrm{i}b_n}{2}\mathrm{e}^{-\mathrm{i}\omega_n x}\right).$$
记
$$c_0=a_0,\qquad c_n=a_n-\mathrm{i}b_n=\frac{1}{T}\int_{-T}^{T}f_T(t)\mathrm{e}^{-\mathrm{i}\omega_n t}\,\mathrm{d}t\quad(n=1,2,\cdots),\qquad c_{-n}=a_n+\mathrm{i}b_n=\bar{c}_n,$$
则得到
$$f_T(x)\sim\frac{c_0}{2}+\frac{1}{2}\sum_{n=1}^{+\infty}\left(c_n\mathrm{e}^{\mathrm{i}\omega_n x}+c_{-n}\mathrm{e}^{-\mathrm{i}\omega_n x}\right)=\frac{1}{2}\sum_{n=-\infty}^{+\infty}c_n\mathrm{e}^{\mathrm{i}\omega_n x},$$
这称为 **Fourier 级数的复数形式**。将 $c_n$ 的表达式代入，即有
$$f_T(x)\sim\frac{1}{2T}\sum_{n=-\infty}^{+\infty}\left[\int_{-T}^{T}f_T(t)\mathrm{e}^{-\mathrm{i}\omega_n t}\,\mathrm{d}t\right]\mathrm{e}^{\mathrm{i}\omega_n x}.$$
记 $\Delta\omega=\omega_n-\omega_{n-1}=\dfrac{\pi}{T}$，于是当 $T\to+\infty$ 时 $\Delta\omega\to0$，即得到
$$f(x)=\lim_{T\to+\infty}f_T(x)\sim\lim_{\Delta\omega\to0}\frac{1}{2\pi}\sum_{n=-\infty}^{+\infty}\left[\int_{-T}^{T}f_T(t)\mathrm{e}^{-\mathrm{i}\omega_n t}\,\mathrm{d}t\right]\mathrm{e}^{\mathrm{i}\omega_n x}\Delta\omega.$$
记
$$\varphi_T(\omega)=\frac{1}{2\pi}\int_{-T}^{T}f_T(t)\mathrm{e}^{-\mathrm{i}\omega t}\,\mathrm{d}t\,\mathrm{e}^{\mathrm{i}\omega x},$$
则上式可写成
$$f(x)\sim\lim_{\Delta\omega\to0}\sum_{n=-\infty}^{+\infty}\varphi_T(\omega_n)\Delta\omega.$$
它看上去很像 Riemann 和的极限形式，不过由于 $\Delta\omega\to0$ 时函数 $\varphi_T(\omega)$ 将随之趋于
$$\varphi(\omega)=\frac{1}{2\pi}\int_{-\infty}^{+\infty}f(t)\mathrm{e}^{-\mathrm{i}\omega t}\,\mathrm{d}t\,\mathrm{e}^{\mathrm{i}\omega x},$$
因此这并非真正的 Riemann 和。我们暂且不理会这些，就将它看成 $\varphi(\omega)$ 在 $(-\infty,+\infty)$ 上的“积分”，于是（形式上）有
$$f(x)\sim\frac{1}{2\pi}\int_{-\infty}^{+\infty}\left[\int_{-\infty}^{+\infty}f(t)\mathrm{e}^{-\mathrm{i}\omega t}\,\mathrm{d}t\right]\mathrm{e}^{\mathrm{i}\omega x}\,\mathrm{d}\omega.$$
我们称方括号中的函数
$$\hat{f}(\omega)=\int_{-\infty}^{+\infty}f(x)\mathrm{e}^{-\mathrm{i}\omega x}\,\mathrm{d}x\qquad(\omega\in(-\infty,+\infty))$$
为 $f$ 的 **Fourier 变换**（或像函数），记为 $F[f]$，即
$$F[f](\omega)=\hat{f}(\omega)=\int_{-\infty}^{+\infty}f(x)\mathrm{e}^{-\mathrm{i}\omega x}\,\mathrm{d}x.$$

### 定义 (Fourier 逆变换) @369

称函数
$$\frac{1}{2\pi}\int_{-\infty}^{+\infty}\hat{f}(\omega)\mathrm{e}^{\mathrm{i}\omega x}\,\mathrm{d}\omega\qquad(x\in(-\infty,+\infty))$$
为 $\hat{f}$ 的 **Fourier 逆变换**（或像原函数），记为 $F^{-1}[\hat{f}]$，即
$$F^{-1}[\hat{f}](x)=\frac{1}{2\pi}\int_{-\infty}^{+\infty}\hat{f}(\omega)\mathrm{e}^{\mathrm{i}\omega x}\,\mathrm{d}\omega.$$
注意这里假设了像函数与像原函数的存在性。

### 定义 (Fourier 积分) @369

称函数
$$\frac{1}{2\pi}\int_{-\infty}^{+\infty}\left[\int_{-\infty}^{+\infty}f(t)\mathrm{e}^{-\mathrm{i}\omega t}\,\mathrm{d}t\right]\mathrm{e}^{\mathrm{i}\omega x}\,\mathrm{d}\omega=\frac{1}{2\pi}\int_{-\infty}^{+\infty}\mathrm{d}\omega\int_{-\infty}^{+\infty}f(t)\mathrm{e}^{\mathrm{i}\omega(x-t)}\,\mathrm{d}t$$
为 $f$ 的 **Fourier 积分**。在一定条件下，它应与 $f(x)$ 相等，但研究这些条件已超出本课程的要求，下面不加证明地给出充分条件。

### 定理 16.4.1 (Fourier 积分定理) @369

设函数 $f$ 在 $(-\infty,+\infty)$ 上绝对可积，且在 $(-\infty,+\infty)$ 中的任何闭区间上分段可导，则 $f$ 的 Fourier 积分满足：对于任意 $x\in(-\infty,+\infty)$ 成立
$$\frac{1}{2\pi}\int_{-\infty}^{+\infty}\mathrm{d}\omega\int_{-\infty}^{+\infty}f(t)\mathrm{e}^{\mathrm{i}\omega(x-t)}\,\mathrm{d}t=\frac{f(x+)+f(x-)}{2}.$$
注意，若 $x$ 是 $f$ 的连续点，定理 16.4.1 已蕴含了
$$\frac{1}{2\pi}\int_{-\infty}^{+\infty}\mathrm{d}\omega\int_{-\infty}^{+\infty}f(t)\mathrm{e}^{\mathrm{i}\omega(x-t)}\,\mathrm{d}t=f(x).$$

### 定义 16.4.1 (分段可导) @369

设函数 $f$ 在 $[a,b]$ 上除有限个点
$$a=x_0<x_1<x_2<\cdots<x_N=b$$
外均可导，而在 $x_i\ (i=0,1,2,\cdots,N)$ 处 $f$ 的左右极限 $f(x_i-)$ 和 $f(x_i+)$ 都存在（在 $x_0=a$ 只要求右极限存在，在 $x_N=b$ 只要求左极限存在），并且极限
$$\lim_{h\to0-}\frac{f(x_i+h)-f(x_i-)}{h}$$
和
$$\lim_{h\to0+}\frac{f(x_i+h)-f(x_i+)}{h}$$
都存在（在 $x_0=a$ 只要求上述第二个极限存在，在 $x_N=b$ 只要求上述第一个极限存在），那么称 $f$ 在 $[a,b]$ 上**分段可导**。

### 例 16.4.1 (孤立矩形波) @369

求孤立矩形波
$$f(x)=\begin{cases}h, & |x|\le\delta,\\ 0, & |x|>\delta\end{cases}$$
的 Fourier 变换 $\hat{f}(\omega)$ 和 $\hat{f}(\omega)$ 的 Fourier 逆变换。

**解** 当 $\omega\ne0$ 时，
$$\hat{f}(\omega)=\int_{-\infty}^{+\infty}f(x)\mathrm{e}^{-\mathrm{i}\omega x}\,\mathrm{d}x=h\int_{-\delta}^{\delta}\mathrm{e}^{-\mathrm{i}\omega x}\,\mathrm{d}x=h\left.\frac{\mathrm{e}^{-\mathrm{i}\omega x}}{-\mathrm{i}\omega}\right|_{-\delta}^{\delta}=\frac{2h}{\omega}\sin(\omega\delta);$$
当 $\omega=0$ 时，
$$\hat{f}(0)=\int_{-\infty}^{+\infty}f(x)\,\mathrm{d}x=2h\delta\left(=\lim_{\omega\to0}\hat{f}(\omega)\right).$$
而利用熟知的结果 $\displaystyle\int_0^{+\infty}\frac{\sin ax}{x}\,\mathrm{d}x=\operatorname{sgn}(a)\frac{\pi}{2}$，可以求得 $\hat{f}$ 的逆变换为
$$F^{-1}[\hat{f}]=\frac{1}{2\pi}\int_{-\infty}^{+\infty}\hat{f}(\omega)\mathrm{e}^{\mathrm{i}\omega x}\,\mathrm{d}\omega=\frac{h}{\pi}\int_{-\infty}^{+\infty}\frac{\sin(\omega\delta)}{\omega}\mathrm{e}^{\mathrm{i}\omega x}\,\mathrm{d}\omega=\frac{2h}{\pi}\int_0^{+\infty}\frac{\sin(\omega\delta)}{\omega}\cos(\omega x)\,\mathrm{d}\omega$$
$$=\begin{cases}h, & |x|<\delta,\\ \dfrac{h}{2}, & x=\pm\delta,\\ 0, & |x|>\delta.\end{cases}$$

### 命题 (Fourier 积分的三角形式) @370

设 $f(x)$ 在 $(-\infty,+\infty)$ 上连续，且满足定理 16.4.1 的条件，则将 $f$ 的 Fourier 积分的实部和虚部分开，得到
$$f(x)=\frac{1}{2\pi}\int_{-\infty}^{+\infty}\mathrm{d}\omega\int_{-\infty}^{+\infty}f(t)\cos\omega(x-t)\,\mathrm{d}t+\frac{\mathrm{i}}{2\pi}\int_{-\infty}^{+\infty}\mathrm{d}\omega\int_{-\infty}^{+\infty}f(t)\sin\omega(x-t)\,\mathrm{d}t.$$
因为
$$g_s(\omega)\overset{\text{def}}{=}\int_{-\infty}^{+\infty}f(t)\sin\omega(x-t)\,\mathrm{d}t$$
是奇函数（其中符号“$\overset{\text{def}}{=}$”表示“定义为”），而
$$g_c(\omega)\overset{\text{def}}{=}\int_{-\infty}^{+\infty}f(t)\cos\omega(x-t)\,\mathrm{d}t$$
是偶函数，由此得到 $f(x)$ 的 **Fourier 积分的三角形式**（也称为实形式）
$$f(x)=\frac{1}{\pi}\int_0^{+\infty}\mathrm{d}\omega\int_{-\infty}^{+\infty}f(t)\cos\omega(x-t)\,\mathrm{d}t.$$

### 定义 (Fourier 余弦变换) @370

当 $f(x)$ 本身是偶函数时，Fourier 积分的三角形式又可化成
$$f(x)=\frac{2}{\pi}\int_0^{+\infty}\left[\int_0^{+\infty}f(t)\cos\omega t\,\mathrm{d}t\right]\cos\omega x\,\mathrm{d}\omega,$$
它可以看成是由 **Fourier 余弦变换**
$$F_c[f]=\hat{f}_c(\omega)=\int_0^{+\infty}f(x)\cos\omega x\,\mathrm{d}x$$
及其逆变换
$$F_c^{-1}[\hat{f}_c]=\frac{2}{\pi}\int_0^{+\infty}\hat{f}_c(\omega)\cos\omega x\,\mathrm{d}\omega$$
复合而成的。

### 定义 (Fourier 正弦变换) @371

当 $f(x)$ 本身是奇函数时，可以类似地得到
$$f(x)=\frac{2}{\pi}\int_0^{+\infty}\left[\int_0^{+\infty}f(t)\sin\omega t\,\mathrm{d}t\right]\sin\omega x\,\mathrm{d}\omega,$$
它可以看成是由 **Fourier 正弦变换**
$$F_s[f]=\hat{f}_s(\omega)=\int_0^{+\infty}f(x)\sin\omega x\,\mathrm{d}x$$
及其逆变换
$$F_s^{-1}[\hat{f}_s]=\frac{2}{\pi}\int_0^{+\infty}\hat{f}_s(\omega)\sin\omega x\,\mathrm{d}\omega$$
复合而成的。

### 例 16.4.2 (余弦变换) @371

求 $f(x)=\mathrm{e}^{-x}\sin x\ (x\in[0,+\infty))$ 的余弦变换。

**解** 由 Fourier 余弦变换公式得
$$\int_0^{+\infty}\mathrm{e}^{-x}\sin x\cos\omega x\,\mathrm{d}x=\frac{1}{2}\int_0^{+\infty}\mathrm{e}^{-x}\left[\sin(1+\omega)x+\sin(1-\omega)x\right]\mathrm{d}x$$
$$=\frac{1}{2}\left\{\left.\frac{\mathrm{e}^{-x}\left[\sin(1+\omega)x+(1+\omega)\cos(1+\omega)x\right]}{1+(1+\omega)^2}-\frac{\mathrm{e}^{-x}\left[\sin(1-\omega)x+(1-\omega)\cos(1-\omega)x\right]}{1+(1-\omega)^2}\right\}\right|_0^{+\infty}$$
$$=\frac{1}{2}\left[\frac{1+\omega}{1+(1+\omega)^2}+\frac{1-\omega}{1+(1-\omega)^2}\right]=\frac{2-\omega}{4+\omega^4}.$$

### 命题 (线性性质) @371

设 $c_1,c_2$ 是常数。若 $f,g$ 的 Fourier 变换存在，则
$$F[c_1f+c_2g]=c_1F[f]+c_2F[g];$$
若 $\hat{f}=F[f]$，$\hat{g}=F[g]$ 的 Fourier 逆变换存在，则
$$F^{-1}[c_1\hat{f}+c_2\hat{g}]=c_1F^{-1}[\hat{f}]+c_2F^{-1}[\hat{g}].$$

### 命题 (位移性质) @371

若函数 $f$ 的 Fourier 变换存在，则
$$F[f(x\pm x_0)](\omega)=F[f](\omega)\mathrm{e}^{\pm\mathrm{i}\omega x_0};$$
若 $\hat{f}=F[f]$ 的 Fourier 逆变换存在，则
$$F^{-1}[\hat{f}(\omega\pm\omega_0)](x)=F^{-1}[\hat{f}](x)\mathrm{e}^{\mp\mathrm{i}\omega_0 x}.$$
以上两式常简记为
$$F[f(x\pm x_0)]=F[f]\mathrm{e}^{\pm\mathrm{i}\omega x_0};\qquad F^{-1}[\hat{f}(\omega\pm\omega_0)]=F^{-1}[\hat{f}]\mathrm{e}^{\mp\mathrm{i}\omega_0 x}.$$

### 命题 (尺度性质) @372

时间尺度性
$$F[f(ax)]=\frac{1}{|a|}\hat{f}\left(\frac{\omega}{a}\right);$$
频率尺度性
$$F\left[\frac{1}{a}f\left(\frac{x}{a}\right)\right]=\hat{f}(a\omega).$$

### 命题 (微分性质) @372

1）设函数 $f(x)$ 在 $(-\infty,+\infty)$ 上有连续的导数，且 $f(x)$ 与 $f'(x)$ 在 $(-\infty,+\infty)$ 上绝对可积，若 $\lim\limits_{x\to\infty}f(x)=0$，则有
$$F[f']=\mathrm{i}\omega\cdot F[f];$$
2）若 $f(x)$ 和 $xf(x)$ 在 $(-\infty,+\infty)$ 上绝对可积，则
$$F[-\mathrm{i}x\cdot f]=(F[f])'.$$

### 命题 (积分性质) @372

设函数 $f(x)$ 和 $\displaystyle\int_{-\infty}^{x}f(t)\,\mathrm{d}t$ 在 $(-\infty,+\infty)$ 上绝对可积，则
$$F\left[\int_{-\infty}^{x}f(t)\,\mathrm{d}t\right]=\frac{1}{\mathrm{i}\omega}F[f].$$

### 定义 16.4.2 (卷积) @373

设函数 $f$ 和 $g$ 在 $(-\infty,+\infty)$ 上定义，且积分
$$(f*g)(x)=\int_{-\infty}^{+\infty}f(t)g(x-t)\,\mathrm{d}t$$
存在，则称函数 $f*g$ 为 $f$ 和 $g$ 的**卷积**。显然，卷积具有对称性，即 $f*g=g*f$。

### 定理 16.4.2 (卷积的 Fourier 变换) @373

设函数 $f$ 和 $g$ 在 $(-\infty,+\infty)$ 上绝对可积，则有
$$F[f*g]=F[f]\cdot F[g].$$

### 定理 16.4.3 (Parseval 等式) @373

设函数 $f$ 在 $(-\infty,+\infty)$ 上绝对可积，且 $\displaystyle\int_{-\infty}^{+\infty}[f(x)]^2\,\mathrm{d}x$ 收敛。记 $f$ 的 Fourier 变换为 $\hat{f}$，则
$$\int_{-\infty}^{+\infty}[f(x)]^2\,\mathrm{d}x=\frac{1}{2\pi}\int_{-\infty}^{+\infty}|\hat{f}(\omega)|^2\,\mathrm{d}\omega.$$
今后学习其他课程（如偏微分方程、控制理论、计算方法等）时会知道，以上的性质和定理非常重要。

### 例 16.4.3 (解微分方程) @373

求解微分方程
$$u''(x)-a^2u(x)+2af(x)=0\qquad(a>0\ \text{为常数},\ x\in(-\infty,+\infty)).$$

**解** 由 Fourier 变换的微分性质得
$$F[u'']=\mathrm{i}\omega F[u']=-\omega^2F[u].$$
对方程两边作 Fourier 变换，整理后即有
$$F[u]=\frac{2a}{a^2+\omega^2}F[f].$$
利用习题中的结果 $F[\mathrm{e}^{-a|x|}]=\dfrac{2a}{a^2+\omega^2}\ (a>0)$ 和定理 16.4.2 的结论，得到
$$u(x)=F^{-1}\left[\frac{2a}{a^2+\omega^2}\cdot F[f]\right]=F^{-1}\left[\frac{2a}{a^2+\omega^2}\right]*F^{-1}[F[f]]$$
$$=f*\mathrm{e}^{-a|x|}=\int_{-\infty}^{+\infty}f(t)\mathrm{e}^{-a|x-t|}\,\mathrm{d}t.$$

### 注 (例 16.4.3 的前提) @373

在这个例题中假设了 $f(x)$ 和 $u(x)$ 满足使运算过程成立的一切条件。Fourier 积分的三角形式本可以由实数形式的 Fourier 级数按上述思想直接导出，这里之所以舍近求远，先化成复数形式再兜回来，是因为复数形式的 Fourier 级数和 Fourier 积分具有重要的实际应用价值。在许多领域，如热学、声学、光学、电工学、核物理学等，都需要对复函数的频率 $\omega_n=\dfrac{n\pi}{T}$ 和振幅 $|c_n|=\sqrt{a_n^2+b_n^2}$ 进行计算、分析（称为频谱分析）、叠加、滤波等处理，因而复数表达形式对于简化处理过程有着独到的优越性。

### 注 (Fourier 变换的物理意义) @374

周期函数实际上就是频率为 $\omega=\dfrac{\pi}{T}$ 的振荡函数。Fourier 级数
$$f(x)\sim\frac{a_0}{2}+\sum_{n=1}^{\infty}\left(a_n\cos n\omega x+b_n\sin n\omega x\right)=\frac{1}{2}\sum_{n=-\infty}^{+\infty}c_n\mathrm{e}^{\mathrm{i}n\omega x}$$
揭示了 $f(x)$ 可以通过频率为 $\omega$（称为**基频**）的正弦波 $\sin\omega x$ 和余弦波 $\cos\omega x$（称为**基波**）及其 $n$ 次谐波 $\sin n\omega x$，$\cos n\omega x$ 叠加来得到，而谐频为 $n\omega$ 的谐波的振幅
$$\sqrt{a_n^2+b_n^2}=|c_n|=\frac{1}{T}\left|\int_{-T}^{T}f(x)\mathrm{e}^{-\mathrm{i}n\omega x}\,\mathrm{d}x\right|$$
不妨理解成该谐波在整体中的强度。

对于非周期函数，即 $T\to+\infty$ 的情况，这时基频 $\omega\to0$，因此谐频由离散的 $\{n\omega\}$ 趋向于布满整个实数轴，或者说，此时任何一个实数（仍记为 $\omega$）都是它的“谐频”。因此，Fourier 逆变换
$$f(x)\sim\frac{1}{2\pi}\int_{-\infty}^{+\infty}\hat{f}(\omega)\mathrm{e}^{\mathrm{i}\omega x}\,\mathrm{d}\omega=\frac{1}{2}\int_{-\infty}^{+\infty}\frac{\hat{f}(\omega)}{\pi}\mathrm{e}^{\mathrm{i}\omega x}\,\mathrm{d}\omega$$
同样表示 $f(x)$ 可由频率为 $\omega$ 的“谐波”叠加而成，$\dfrac{|\hat{f}(\omega)|}{\pi}$ 也应是相应的振幅。

而换一个角度，从 Fourier 变换的定义来看，由于
$$\frac{|\hat{f}(\omega)|}{\pi}=\frac{1}{\pi}\left|\int_{-\infty}^{+\infty}f(x)\mathrm{e}^{-\mathrm{i}\omega x}\,\mathrm{d}x\right|=\lim_{T\to+\infty}\frac{\dfrac{1}{T}\left|\displaystyle\int_{-T}^{T}f(x)\mathrm{e}^{-\mathrm{i}\omega x}\,\mathrm{d}x\right|}{\Delta\omega},$$
与 $|c_n|$ 的表达式比较，说明它确实能看成相应于频率 $\omega$ 的谐波在整体中的某种“强度”，与上面的结论相吻合。
