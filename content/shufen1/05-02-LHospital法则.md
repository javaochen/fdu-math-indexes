---
chapter: 5
chapter_title: 微分中值定理及其应用
section: "5.2"
section_title: L'Hospital 法则
pages: "155–161"
---

### 注 (待定型) @155

在计算一个分式函数的极限时，常常会遇到分子分母都趋于零或都趋于无穷大的情况。由于这时无法使用"商的极限等于极限的商"的法则，运算将遇到很大的困难。事实上，这时极限可能存在，也可能不存在；当极限存在时，极限的值也会有各种各样的可能。比如熟知的
$$\lim_{x\to\infty}\frac{a_nx^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0}{b_mx^m+b_{m-1}x^{m-1}+\cdots+b_1x+b_0}
=\begin{cases}
\dfrac{a_n}{b_n}, & n=m,\\[2ex]
0, & n<m,\\[1ex]
\infty, & n>m
\end{cases}$$
就是一个分子分母都趋于无穷大的例子。我们将这种类型的极限称为 $\dfrac{0}{0}$ 待定型或 $\dfrac{\infty}{\infty}$ 待定型，简称 $\dfrac{0}{0}$ 型或 $\dfrac{\infty}{\infty}$ 型。

待定型极限除了以上两种类型以外，还有 $0\cdot\infty$ 型、$\infty\pm\infty$ 型、$\infty^0$ 型、$1^\infty$ 型、$0^0$ 型等几种。但以后将会看到，后面的几种类型都可以化成前面两种类型进行计算，所以这里主要讨论如何求 $\dfrac{0}{0}$ 型和 $\dfrac{\infty}{\infty}$ 型的极限。

### 定理 5.2.1 (L'Hospital 法则) @156

设函数 $f(x)$ 和 $g(x)$ 在 $(a,a+d]$ 上可导（$d$ 是某个正常数），且 $g'(x)\neq 0$。若此时有
$$\lim_{x\to a+}f(x)=\lim_{x\to a+}g(x)=0$$
或
$$\lim_{x\to a+}g(x)=\infty,$$
且 $\lim\limits_{x\to a+}\dfrac{f'(x)}{g'(x)}$ 存在（可以是有限数或 $\infty$），则成立
$$\lim_{x\to a+}\frac{f(x)}{g(x)}=\lim_{x\to a+}\frac{f'(x)}{g'(x)}.$$

### 注 (法则的适用范围可以扩大) @157

从定理后半部分的证明过程可以知道，若当 $x\to a+$ 时 $g(x)\to\infty$，那么此时对 $f(x)$ 的变化趋势事实上没有任何要求。也就是说，这时无论 $f(x)$ 有无极限、有界无界，只要 $\lim\limits_{x\to a+}\dfrac{f'(x)}{g'(x)}$ 存在，L'Hospital 法则都将是有效的。所以尽管习惯上大家将它称作"$\dfrac{\infty}{\infty}$ 型"，但实际上它的使用范围可以扩展为"$\dfrac{*}{\infty}$ 型"极限，"$*$"代表任意变化类型。

以上结论在 $x\to a\pm$、$x\to a$ 或是 $x\to\infty$（包括 $+\infty$ 和 $-\infty$）时也是成立的。

### 例 5.2.1 @157

求 $\lim\limits_{x\to 0}\dfrac{1-\cos 2x}{x^2}$。

**解** 这是 $\dfrac{0}{0}$ 型。因为
$$\frac{(1-\cos 2x)'}{(x^2)'}=\frac{2\sin x\cos x}{x}\to 2\quad (x\to 0),$$
由 L'Hospital 法则，就可以得到
$$\lim_{x\to 0}\frac{1-\cos 2x}{x^2}=2.$$

一般可以写成如下格式：
$$\lim_{x\to 0}\frac{1-\cos 2x}{x^2}=\lim_{x\to 0}\frac{(1-\cos 2x)'}{(x^2)'}=\lim_{x\to 0}\frac{2\sin x\cos x}{x}=2\lim_{x\to 0}\frac{\sin x}{x}\cdot\lim_{x\to 0}\cos x=2.$$

### 例 5.2.2 @158

求 $\lim\limits_{x\to+\infty}\dfrac{\dfrac{\pi}{2}-\arctan x}{\sin\dfrac{1}{x}}$。

**解** 由 L'Hospital 法则得
$$\lim_{x\to+\infty}\frac{\dfrac{\pi}{2}-\arctan x}{\sin\dfrac{1}{x}}
=\lim_{x\to+\infty}\frac{-\dfrac{1}{1+x^2}}{\left(\cos\dfrac{1}{x}\right)\left(-\dfrac{1}{x^2}\right)}
=\frac{1}{\lim\limits_{x\to+\infty}\left(\cos\dfrac{1}{x}\right)}\cdot\lim_{x\to+\infty}\frac{x^2}{1+x^2}=1.$$

### 注 (法则的重复使用) @158

若使用了 L'Hospital 法则之后，所得到的 $\lim\limits_{x\to a+}\dfrac{f'(x)}{g'(x)}$ 仍是 $\dfrac{0}{0}$ 型或 $\dfrac{\infty}{\infty}$ 型，并且函数 $f'(x)$ 和 $g'(x)$ 依然满足定理 5.2.1 的条件，那么可以再次使用 L'Hospital 法则，讨论 $\lim\limits_{x\to a+}\dfrac{f''(x)}{g''(x)}$ 的极限情况，以此类推，直到求出极限为止。

### 例 5.2.3 @158

求 $\lim\limits_{x\to 0}\dfrac{x-\tan x}{x^3}$。

**解** 这是 $\dfrac{0}{0}$ 型，由 L'Hospital 法则得
$$\lim_{x\to 0}\frac{x-\tan x}{x^3}=\lim_{x\to 0}\frac{1-\sec^2 x}{3x^2}\qquad\left(\text{仍是}\ \frac{0}{0}\ \text{型，再用 L'Hospital 法则}\right)$$
$$=\lim_{x\to 0}\frac{-2\sec^2 x\tan x}{6x}=\lim_{x\to 0}\left(-\frac{1}{3}\cdot\frac{\sin x}{x}\cdot\frac{1}{\cos^3 x}\right)=-\frac{1}{3}.$$

### 例 5.2.4 @158

求 $\lim\limits_{x\to+\infty}\dfrac{x^a}{\mathrm{e}^{bx}}\quad (a>0,\ b>0)$。

**解** 这是 $\dfrac{\infty}{\infty}$ 型。设 $[a]^*=n$（记号 $[x]^*$ 表示不小于 $x$ 的最小整数），反复使用 L'Hospital 法则 $n$ 次，即有
$$\lim_{x\to+\infty}\frac{x^a}{\mathrm{e}^{bx}}=\lim_{x\to+\infty}\frac{a\cdot x^{a-1}}{b\cdot\mathrm{e}^{bx}}=\lim_{x\to+\infty}\frac{a(a-1)\cdot x^{a-2}}{b^2\cdot\mathrm{e}^{bx}}$$
$$=\cdots=\lim_{x\to+\infty}\frac{a(a-1)(a-2)\cdots(a-n+1)}{x^{n-a}\cdot b^n\cdot\mathrm{e}^{bx}}=0.$$

这说明当 $x\to+\infty$ 的时候，指数函数 $a^x\ (a>1)$ 与任何次数的幂函数 $x^n$ 相比，都是更高阶的无穷大量。同样我们可以导出，$\log_a x\ (a>1)$ 与任何次数的幂函数 $x^\alpha\ (\alpha>0)$ 相比，都是更低阶的无穷大量。

### 注 (三类待定型的化归方法) @159

前面已经指出，$0\cdot\infty$ 型、$\infty\pm\infty$ 型、$\infty^0$ 型、$1^\infty$ 型、$0^0$ 型等类型的极限都可以化成 $\dfrac{0}{0}$ 型或 $\dfrac{\infty}{\infty}$ 型，具体做法如下。

（1）$0\cdot\infty$ 型可化成 $\dfrac{1}{\infty}\cdot\infty$ 型或 $0\cdot\dfrac{1}{0}$ 型，即 $\dfrac{\infty}{\infty}$ 型或 $\dfrac{0}{0}$ 型。

（2）$\infty-\infty$ 型可化成 $\dfrac{1}{0}-\dfrac{1}{0}$ 型，再通分变成 $\dfrac{0-0}{0}$ 型，即 $\dfrac{0}{0}$ 型。

（3）$\infty^0$ 型、$1^\infty$ 型、$0^0$ 型极限 $\lim f(x)^{g(x)}$ 可以通过对数恒等式统一化成
$$\lim f(x)^{g(x)}=\lim \mathrm{e}^{g(x)\ln f(x)}=\mathrm{e}^{\lim g(x)\ln f(x)}$$
这里的 $\lim g(x)\ln f(x)$ 已成为 $0\cdot\infty$ 型，于是便可用下面的例 5.2.5 所示的方法来求出极限。

### 例 5.2.5 @159

求 $\lim\limits_{x\to 0+}x\ln x$。

**解** 这是 $0\cdot\infty$ 型，将其转化为 $\dfrac{\infty}{\infty}$ 型：
$$\lim_{x\to 0+}x\ln x=\lim_{x\to 0+}\frac{\ln x}{\dfrac{1}{x}}.$$
再由 L'Hospital 法则得
$$\lim_{x\to 0+}x\ln x=\lim_{x\to 0+}\frac{\dfrac{1}{x}}{-\dfrac{1}{x^2}}=\lim_{x\to 0+}(-x)=0.$$

### 例 5.2.6 @159

求 $\lim\limits_{x\to 0+}\left(\cot x-\dfrac{1}{x}\right)$。

**解** 这是 $\infty-\infty$ 型，先对它通分，
$$\lim_{x\to 0+}\left(\cot x-\frac{1}{x}\right)=\lim_{x\to 0+}\left(\frac{\cos x}{\sin x}-\frac{1}{x}\right)=\lim_{x\to 0+}\frac{x\cos x-\sin x}{x\sin x},$$
现在它已被转换成 $\dfrac{0}{0}$ 型了。由 L'Hospital 法则得
$$\lim_{x\to 0+}\left(\cot x-\frac{1}{x}\right)=\lim_{x\to 0+}\frac{(x\cos x-\sin x)'}{(x\sin x)'}=\lim_{x\to 0+}\frac{\cos x-x\sin x-\cos x}{\sin x+x\cos x}=\lim_{x\to 0+}\frac{-x}{1+\dfrac{x}{\sin x}\cos x}=0.$$

### 例 5.2.7 @159

求 $\lim\limits_{x\to 0+}x^x$。

**解** 这是 $0^0$ 型，将其改写为
$$\lim_{x\to 0+}x^x=\lim_{x\to 0+}\mathrm{e}^{x\ln x}=\mathrm{e}^{\lim\limits_{x\to 0+}x\ln x}.$$
由例 5.2.5 知 $\lim\limits_{x\to 0+}x\ln x=0$，于是
$$\lim_{x\to 0+}x^x=\mathrm{e}^{\lim\limits_{x\to 0+}x\ln x}=\mathrm{e}^{0}=1.$$

### 例 5.2.8 @160

求 $\lim\limits_{x\to 0+}\left(\ln\dfrac{1}{x}\right)^x$。

**解** 这是 $\infty^0$ 型，将其改写为
$$\lim_{x\to 0+}\left(\ln\frac{1}{x}\right)^x=\lim_{x\to 0+}\mathrm{e}^{x\ln\ln\frac{1}{x}}=\mathrm{e}^{\lim\limits_{x\to 0+}x\ln\ln\frac{1}{x}}.$$
由 L'Hospital 法则得
$$\lim_{x\to 0+}x\ln\ln\frac{1}{x}=\lim_{x\to 0+}\frac{\left(\ln\ln\dfrac{1}{x}\right)'}{\left(\dfrac{1}{x}\right)'}
=\lim_{x\to 0+}\frac{\dfrac{1}{\ln\dfrac{1}{x}}\cdot\left(-\dfrac{1}{x}\right)}{-\dfrac{1}{x^2}}=\lim_{x\to 0+}\frac{x}{\ln\dfrac{1}{x}}=0,$$
于是
$$\lim_{x\to 0+}\left(\ln\frac{1}{x}\right)^x=\mathrm{e}^{\lim\limits_{x\to 0+}x\ln\ln\frac{1}{x}}=\mathrm{e}^{0}=1.$$

### 例 5.2.9 @160

求 $\lim\limits_{x\to\frac{\pi}{2}+}(\sin x)^{\tan x}$。

**解** 这是 $1^\infty$ 型，将其改写为
$$\lim_{x\to\frac{\pi}{2}+}(\sin x)^{\tan x}=\lim_{x\to\frac{\pi}{2}+}\mathrm{e}^{\tan x\ln\sin x}=\mathrm{e}^{\lim\limits_{x\to\frac{\pi}{2}+}\tan x\ln\sin x}.$$
由 L'Hospital 法则得
$$\lim_{x\to\frac{\pi}{2}+}\tan x\ln\sin x=\lim_{x\to\frac{\pi}{2}+}\frac{(\ln\sin x)'}{(\cot x)'}=\lim_{x\to\frac{\pi}{2}+}\frac{\cos x}{\sin x(-\csc^2 x)}=0.$$
于是
$$\lim_{x\to\frac{\pi}{2}+}(\sin x)^{\tan x}=\mathrm{e}^{\lim\limits_{x\to\frac{\pi}{2}+}\tan x\ln\sin x}=\mathrm{e}^{0}=1.$$

### 注 (注意一：必须先检验极限类型) @160

当 $\lim\limits_{x\to a+}\dfrac{f(x)}{g(x)}$ 不是 $\dfrac{0}{0}$ 型或 $\dfrac{*}{\infty}$ 型时，不能使用 L'Hospital 法则，否则将会造成错误。

### 例 5.2.10 @160

求 $\lim\limits_{x\to\frac{\pi}{2}}\dfrac{1+\sin x}{1-\cos x}$。

**解** 这不是 $\dfrac{0}{0}$ 型，也不是 $\dfrac{\infty}{\infty}$ 型，它的极限为
$$\lim_{x\to\frac{\pi}{2}}\frac{1+\sin x}{1-\cos x}=\frac{1+\sin\dfrac{\pi}{2}}{1-\cos\dfrac{\pi}{2}}=2.$$
若不问情况地贸然使用 L'Hospital 法则，
$$\lim_{x\to\frac{\pi}{2}}\frac{1+\sin x}{1-\cos x}=\lim_{x\to\frac{\pi}{2}}\frac{\cos x}{\sin x}=0,$$
就会得出不正确的结果。因此，每次使用 L'Hospital 法则之前都必须对极限的类型加以检验。

### 注 (注意二：导数之比的极限不存在时的含义) @161

L'Hospital 法则只告诉我们，对于 $\dfrac{0}{0}$ 型或 $\dfrac{\infty}{\infty}$ 型，当 $\lim\limits_{x\to a+}\dfrac{f'(x)}{g'(x)}$ 存在时，它的值等于 $\lim\limits_{x\to a+}\dfrac{f(x)}{g(x)}$。那么这是否意味着，当 $\lim\limits_{x\to a+}\dfrac{f'(x)}{g'(x)}$ 不存在时，$\lim\limits_{x\to a+}\dfrac{f(x)}{g(x)}$ 也不存在呢？请看下面的例子。

### 例 5.2.11 @161

求 $\lim\limits_{x\to\infty}\dfrac{x+\cos x}{x}$。

**解** 这是 $\dfrac{\infty}{\infty}$ 型，但这时 $(x+\cos x)'/x'=1-\sin x$，当 $x\to\infty$ 时它的极限不存在，所以不能据此得出 $\lim\limits_{x\to\infty}\dfrac{x+\cos x}{x}$ 也不存在的结论——事实上，显然有
$$\lim_{x\to\infty}\frac{x+\cos x}{x}=1.$$
因此，$\lim\limits_{x\to a+}\dfrac{f'(x)}{g'(x)}$ 不存在并不表示 $\lim\limits_{x\to a+}\dfrac{f(x)}{g(x)}$ 本身存在或是不存在，它仅仅意味着，此时不能使用 L'Hospital 法则，而应改用其他方法来讨论 $\lim\limits_{x\to a+}\dfrac{f(x)}{g(x)}$。
