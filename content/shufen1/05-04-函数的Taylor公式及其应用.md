---
chapter: 5
chapter_title: 微分中值定理及其应用
section: "5.4"
section_title: 函数的 Taylor 公式及其应用
pages: "171–183"
---

### 注 (函数在 $x=0$ 处的 Taylor 公式) @171

首先考虑函数 $f(x)$ 在 $x=0$ 处的 Taylor 公式，即

$$f(x)=f(0)+f'(0)x+\frac{f''(0)}{2!}x^2+\cdots+\frac{f^{(n)}(0)}{n!}x^n+r_n(x),$$

其中 $r_n(x)$ 有 Peano 余项与 Lagrange 余项两种表示形式，即有 $r_n(x)=o(x^n)$，或

$$r_n(x)=\frac{f^{(n+1)}(\theta x)}{(n+1)!}x^{n+1},\quad \theta\in(0,1).$$

函数 $f(x)$ 在 $x=0$ 处的 Taylor 公式又称为函数 $f(x)$ 的 **Maclaurin 公式**。下面先求几个最基本的初等函数在 $x=0$ 处的 Taylor 公式。

### 例 5.4.1 ($e^x$ 在 $x=0$ 处的 Taylor 公式) @171

求 $f(x)=e^x$ 在 $x=0$ 处的 Taylor 公式。

**解** 对函数 $f(x)=e^x$ 有

$$f(x)=f'(x)=f''(x)=\cdots=f^{(n)}(x)=e^x,$$

于是

$$f(0)=f'(0)=f''(0)=\cdots=f^{(n)}(0)=1,$$

因此得到 $e^x$ 在 $x=0$ 处的 Taylor 公式

$$e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots+\frac{x^n}{n!}+r_n(x),$$

它的余项为

$$r_n(x)=o(x^n),\quad \text{或}\quad r_n(x)=\frac{e^{\theta x}}{(n+1)!}x^{n+1},\quad \theta\in(0,1).$$

### 例 5.4.2 ($\sin x$ 与 $\cos x$ 在 $x=0$ 处的 Taylor 公式) @171

求 $f(x)=\sin x$ 和 $f(x)=\cos x$ 在 $x=0$ 处的 Taylor 公式。

**解** 先考虑 $f(x)=\sin x$。由于对 $k=0,1,2,\cdots$，有

$$f^{(k)}(x)=\sin\left(x+\frac{k}{2}\pi\right),$$

于是

$$f^{(k)}(0)=\begin{cases}0, & k=2n,\\ (-1)^n, & k=2n+1,\end{cases}$$

因此 $\sin x$ 在 $x=0$ 处的 Taylor 公式为

$$\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots+(-1)^n\frac{x^{2n+1}}{(2n+1)!}+r_{2n+2}(x),$$

相应的余项为

$$r_{2n+2}(x)=o(x^{2n+2}),\quad \text{或}\quad r_{2n+2}(x)=\frac{x^{2n+3}}{(2n+3)!}\sin\left(\theta x+\frac{2n+3}{2}\pi\right),\quad \theta\in(0,1).$$

同理可以求出 $\cos x$ 在 $x=0$ 处的 Taylor 公式为

$$\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots+(-1)^n\frac{x^{2n}}{(2n)!}+r_{2n+1}(x),$$

相应的余项为

$$r_{2n+1}(x)=o(x^{2n+1}),\quad \text{或}\quad r_{2n+1}(x)=\frac{x^{2n+2}}{(2n+2)!}\cos\left(\theta x+\frac{2n+2}{2}\pi\right),\quad \theta\in(0,1).$$

### 例 5.4.3 ($(1+x)^\alpha$ 在 $x=0$ 处的 Taylor 公式) @172

求 $f(x)=(1+x)^\alpha$（$\alpha$ 为任意实数）在 $x=0$ 处的 Taylor 公式。

**解** 因为

$$f(0)=\left.(1+x)^\alpha\right|_{x=0}=1,$$

$$f'(0)=\left.\alpha(1+x)^{\alpha-1}\right|_{x=0}=\alpha,$$

$$f''(0)=\left.\alpha(\alpha-1)(1+x)^{\alpha-2}\right|_{x=0}=\alpha(\alpha-1),$$

对任意正整数 $k$，一般地有

$$f^{(k)}(0)=\alpha(\alpha-1)\cdots(\alpha-k+1).$$

记

$$\binom{\alpha}{k}=\frac{\alpha(\alpha-1)\cdots(\alpha-k+1)}{k!},$$

并规定

$$\binom{\alpha}{0}=1.$$

当 $\alpha$ 为正整数 $n$ 时，$\binom{n}{j}=\mathrm{C}_n^j$，$1\leqslant j\leqslant n$，因而它是组合数的推广。由此得到

$$(1+x)^\alpha=\binom{\alpha}{0}+\binom{\alpha}{1}x+\binom{\alpha}{2}x^2+\binom{\alpha}{3}x^3+\cdots+\binom{\alpha}{n}x^n+r_n(x),$$

它的余项为

$$r_n(x)=o(x^n),\quad \text{或}\quad r_n(x)=\binom{\alpha}{n+1}(1+\theta x)^{\alpha-(n+1)}\cdot x^{n+1},\quad \theta\in(0,1).$$

下面是几种最常见的情况。

（a）当 $\alpha$ 为正整数 $n$ 时，上式即成为

$$(1+x)^n=\sum_{k=0}^{n}\binom{n}{k}x^k=\sum_{k=0}^{n}\mathrm{C}_n^k x^k,$$

这是熟知的二项式展开定理，此时的余项为零。

（b）当 $\alpha=-1$ 时，易知 $\binom{-1}{k}=(-1)^k$，因此

$$\frac{1}{1+x}=1-x+x^2-x^3+x^4-\cdots+(-1)^n x^n+r_n(x),$$

余项为

$$r_n(x)=o(x^n),\quad \text{或}\quad r_n(x)=(-1)^{n+1}\frac{x^{n+1}}{(1+\theta x)^{n+2}},\quad \theta\in(0,1).$$

（c）当 $\alpha=\frac{1}{2}$ 时，对 $k\geqslant 1$，有

$$\binom{\frac{1}{2}}{k}=\frac{\frac{1}{2}\left(\frac{1}{2}-1\right)\cdots\left(\frac{1}{2}-k+1\right)}{k!}=\frac{(1-2)(1-4)\cdots(1-2(k-1))}{2^k k!}$$

$$=\begin{cases}\frac{1}{2}, & k=1,\\ (-1)^{k-1}\frac{(2k-3)!!}{(2k)!!}, & k>1,\end{cases}$$

其中记号 $k!!$ 为

$$k!!=\begin{cases}k(k-2)(k-4)\cdots 6\cdot 4\cdot 2, & k=2n,\\ k(k-2)(k-4)\cdots 5\cdot 3\cdot 1, & k=2n+1.\end{cases}$$

因此，

$$\sqrt{1+x}=1+\frac{1}{2}x-\frac{1}{2\cdot 4}x^2+\frac{1\cdot 3}{2\cdot 4\cdot 6}x^3-\cdots+(-1)^{n-1}\frac{(2n-3)!!}{(2n)!!}x^n+r_n(x),$$

余项为

$$r_n(x)=o(x^n),\quad \text{或}\quad r_n(x)=(-1)^n\frac{(2n-1)!!}{(2n+2)!!}\frac{x^{n+1}}{(1+\theta x)^{n+\frac{1}{2}}},\quad \theta\in(0,1).$$

（d）当 $\alpha=-\frac{1}{2}$ 时，对 $k\geqslant 1$，有

$$\binom{-\frac{1}{2}}{k}=\frac{\left(-\frac{1}{2}\right)\left(-\frac{1}{2}-1\right)\cdots\left(-\frac{1}{2}-k+1\right)}{k!}$$

$$=\frac{(-1)(-1-2)(-1-4)\cdots(-1-2(k-1))}{2^k k!}=(-1)^k\frac{(2k-1)!!}{(2k)!!},$$

因此

$$\frac{1}{\sqrt{1+x}}=1-\frac{1}{2}x+\frac{1\cdot 3}{2\cdot 4}x^2-\frac{1\cdot 3\cdot 5}{2\cdot 4\cdot 6}x^3-\cdots+(-1)^n\frac{(2n-1)!!}{(2n)!!}x^n+r_n(x),$$

余项为

$$r_n(x)=o(x^n),\quad \text{或}\quad r_n(x)=(-1)^{n+1}\frac{(2n+1)!!}{(2n+2)!!}\frac{x^{n+1}}{(1+\theta x)^{n+\frac{3}{2}}},\quad \theta\in(0,1).$$

### 注 (必须记住的 Taylor 公式与待定系数法) @174

上面的例 5.4.1、5.4.2 以及 5.4.3 的一般形式是最低限度需要熟记的 Taylor 公式。一方面，固然是由于这几个公式本身都非常重要，另一方面，从这些公式出发，利用换元、四则运算、待定系数、求导数以及以后要学的求积分等方法，可以较方便地得到几乎所有常用的初等函数的 Taylor 公式，而不必很繁琐地从定义出发去求。

### 例 5.4.4 ($2^x$ 在 $x=0$ 处的 Taylor 公式) @174

求 $f(x)=2^x$ 在 $x=0$ 处的 Taylor 公式。

**解** 将 $2^x$ 写成 $e^{(\ln 2)x}$，令 $u=(\ln 2)x$ 并对 $e^u$ 使用例 5.4.1 的 Taylor 公式，代回变量即有

$$2^x=1+(\ln 2)x+\frac{(\ln 2)^2x^2}{2!}+\frac{(\ln 2)^3x^3}{3!}+\cdots+\frac{(\ln 2)^n x^n}{n!}+o(x^n).$$

### 例 5.4.5 ($\sqrt[3]{2-\cos x}$ 的 Taylor 公式) @174

求 $f(x)=\sqrt[3]{2-\cos x}$ 在 $x=0$ 处的 Taylor 公式（展开至 $4$ 次）。

**解** 令 $u=1-\cos x$，则当 $x\to 0$ 时 $u\to 0$，于是

$$\sqrt[3]{2-\cos x}=\sqrt[3]{1+(1-\cos x)}=\sqrt[3]{1+u}=1+\frac{u}{3}-\frac{u^2}{9}+o(u^2)$$

$$=1+\frac{1-\cos x}{3}-\frac{(1-\cos x)^2}{9}+o\left((1-\cos x)^2\right).$$

由于

$$1-\cos x=\frac{x^2}{2}-\frac{x^4}{24}+o(x^4),$$

代入上式，得到展开式

$$\sqrt[3]{2-\cos x}=1+\frac{x^2}{6}-\frac{x^4}{24}+o(x^4).$$

请读者思考一下，为什么不能将 $\sqrt[3]{2-\cos x}$ 化为 $\sqrt[3]{2}\cdot\sqrt[3]{1-\frac{\cos x}{2}}$，再对 $\sqrt[3]{1-\frac{\cos x}{2}}$ 使用例 5.4.3 的结论。

### 定理 5.4.1 (Taylor 多项式与导数的关系) @174

设 $f(x)$ 在 $x_0$ 的某个邻域有 $n+2$ 阶导数存在，则它的 $n+1$ 次 Taylor 多项式的导数恰为 $f'(x)$ 的 $n$ 次 Taylor 多项式。

证明留作习题。这个性质给我们带来很大的方便。

### 例 5.4.6 ($\ln(1+x)$ 在 $x=0$ 处的 Taylor 公式) @174

求 $f(x)=\ln(1+x)$ 在 $x=0$ 处的 Taylor 公式。

**解** 由于 $[\ln(1+x)]'=\dfrac{1}{1+x}$，设 $\ln(1+x)$ 的 Taylor 公式为

$$\ln(1+x)=a_0+a_1x+a_2x^2+\cdots+a_nx^n+o(x^n),$$

则由定理 5.4.1，

$$[\ln(1+x)]'=a_1+2a_2x+3a_3x^2+\cdots+na_nx^{n-1}+o(x^{n-1}).$$

由于 $[\ln(1+x)]'=\dfrac{1}{1+x}$，而由例 5.4.3 的（b），$\dfrac{1}{1+x}$ 的 Taylor 公式为

$$\frac{1}{1+x}=1-x+x^2-x^3+x^4-\cdots+(-1)^{n-1}x^{n-1}+o(x^{n-1}),$$

比较两式，便得到

$$a_j=\frac{(-1)^{j-1}}{j},\quad j=1,2,\cdots,n,$$

同时可以明显看出

$$a_0=\ln 1=0,$$

因此可得

$$\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\cdots+(-1)^{n-1}\frac{x^n}{n}+o(x^n).$$

### 例 5.4.7 ($\arctan x$ 在 $x=0$ 处的 Taylor 公式) @175

求 $f(x)=\arctan x$ 在 $x=0$ 处的 Taylor 公式。

**解** 由例 5.4.3 的（b），函数 $\dfrac{1}{1+x^2}$ 在 $x=0$ 的 Taylor 公式为

$$\frac{1}{1+x^2}=1-x^2+x^4-x^6+x^8-\cdots+(-1)^n x^{2n}+o(x^{2n+1}),$$

因为 $(\arctan x)'=\dfrac{1}{1+x^2}$，按例 5.4.6 同样的方法，易知

$$\arctan x=x-\frac{x^3}{3}+\frac{x^5}{5}-\cdots+(-1)^n\frac{x^{2n+1}}{2n+1}+o(x^{2n+2}).$$

### 例 5.4.8 ($\sqrt{x}$ 在 $x=1$ 处的 Taylor 公式) @175

求 $f(x)=\sqrt{x}$ 在 $x=1$ 处的 Taylor 公式。注意这时并不需要像例 5.3.2 那样去计算 $f^{(j)}(1)$。

**解** 将 $\sqrt{x}$ 改写成 $\sqrt{1+(x-1)}$，用例 5.4.3 的（c）的结论，即有

$$\sqrt{x}=\sqrt{1+(x-1)}=1+\frac{1}{2}(x-1)-\frac{1}{2\cdot 4}(x-1)^2+\frac{1\cdot 3}{2\cdot 4\cdot 6}(x-1)^3-\cdots+$$

$$(-1)^{n-1}\frac{(2n-3)!!}{(2n)!!}(x-1)^n+o\left((x-1)^n\right).$$

函数 $f(x)$ 在 $x=x_0$ 处的 Taylor 公式可以通过对它在 $x=0$ 处的 Taylor 公式作适当的变换后直接得到，而不需要再按定义去计算。

### 例 5.4.9 (用 Taylor 多项式近似计算 $e$ 并估计误差) @175

用 $e^x$ 的 $10$ 次 Taylor 多项式求 $e$ 的近似值，并估计误差。

**解** 在 $e^x$ 的 Taylor 公式（例 5.4.1）中取 $x=1$，$n=10$，则可算得

$$e\approx 1+1+\frac{1}{2!}+\frac{1}{3!}+\cdots+\frac{1}{10!}=2.718\,281\,801\cdots.$$

由于 $e$ 的精确值为 $e=2.718\,281\,828\cdots$，可以看出这么算得的结果是比较准确的。关于计算的误差，则有如下的估计

$$|d|=\left.\left(\frac{e^{\xi}}{11!}x^{11}\right)\right|_{x=1}<\frac{3}{11!}\approx 6.8\times 10^{-8}.$$

必须注意，Taylor 公式只是一种局部性质，因此在用它进行近似计算时，$x$ 不能远离 $x_0$，否则效果会比较差。

如在 $\ln(1+x)$ 的 Taylor 公式中令 $x=1$，取它的前 $10$ 项计算 $\ln 2$ 的近似值，得到

$$\ln 2\approx 1-\frac{1}{2}+\frac{1}{3}-\frac{1}{4}+\frac{1}{5}-\frac{1}{6}+\frac{1}{7}-\frac{1}{8}+\frac{1}{9}-\frac{1}{10}=0.645\,634\,92\cdots,$$

而 $\ln 2=0.693\,147\,18\cdots$，误差相当大。

如果改用其他形式的 Taylor 公式，如

$$\ln\frac{1+x}{1-x}=\ln(1+x)-\ln(1-x)$$

$$=\left[x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots-\frac{x^{2n}}{2n}\right]-\left[-x-\frac{x^2}{2}-\frac{x^3}{3}-\cdots-\frac{x^{2n}}{2n}\right]+o(x^{2n})$$

$$=2\left[x+\frac{x^3}{3}+\frac{x^5}{5}+\cdots+\frac{x^{2n-1}}{2n-1}\right]+o(x^{2n}).$$

令 $x=\dfrac{1}{3}$，只取前两项便有

$$\ln 2\approx 2\left[\frac{1}{3}+\frac{1}{3}\left(\frac{1}{3}\right)^3\right]=0.691\,35\cdots,$$

取前四项则可达到

$$\ln 2\approx 2\left[\frac{1}{3}+\frac{1}{3}\left(\frac{1}{3}\right)^3+\frac{1}{5}\left(\frac{1}{3}\right)^5+\frac{1}{7}\left(\frac{1}{3}\right)^7\right]=0.693\,134\,75\cdots,$$

效果比前面好得多。请读者通过对余项的分析自行考察其原因（留作习题）。

### 例 5.4.10 (用 Taylor 公式求极限) @176

求 $\displaystyle\lim_{x\to 0}\frac{\cos x-e^{-\frac{x^2}{2}}}{x^4}$。

**解** 这是个 $\dfrac{0}{0}$ 待定型的极限问题。如果用 L'Hospital 法则，则分子分母需要求导 $4$ 次，计算过程相当繁琐；若采用 Taylor 公式，则

$$\lim_{x\to 0}\frac{\cos x-e^{-\frac{x^2}{2}}}{x^4}$$

$$=\lim_{x\to 0}\frac{\left[1-\frac{x^2}{2!}+\frac{x^4}{4!}+o(x^4)\right]-\left[1+\left(-\frac{x^2}{2}\right)+\frac{1}{2!}\left(-\frac{x^2}{2}\right)^2+o(x^4)\right]}{x^4}$$

$$=\lim_{x\to 0}\frac{-\frac{1}{12}x^4+o(x^4)}{x^4}=-\frac{1}{12}.$$

计算过程就简洁得多了。

### 例 5.4.11 (用 Taylor 公式求极限) @177

求 $\displaystyle\lim_{x\to 0}\frac{\ln(1+\sin^2 x)-6\left(\sqrt[3]{2-\cos x}-1\right)}{x^4}$。

**解** 这也是个 $\dfrac{0}{0}$ 待定型的极限问题。由例 5.4.5 和例 5.4.6，有

$$\sqrt[3]{2-\cos x}-1=\frac{x^2}{6}-\frac{x^4}{24}+o(x^4),\quad \ln(1+\sin^2 x)=\sin^2 x-\frac{\sin^4 x}{2}+o(\sin^4 x).$$

用 $\sin^2 x=\left[x-\frac{x^3}{6}+o(x^4)\right]^2$ 代入，即有

$$\ln(1+\sin^2 x)=x^2-\frac{5x^4}{6}+o(x^4).$$

于是，

$$\lim_{x\to 0}\frac{\ln(1+\sin^2 x)-6\left(\sqrt[3]{2-\cos x}-1\right)}{x^4}=\lim_{x\to 0}\frac{\left[x^2-\frac{5}{6}x^4+o(x^4)\right]-6\left[\frac{1}{6}x^2-\frac{1}{24}x^4+o(x^4)\right]}{x^4}=-\frac{7}{12}.$$

这道题若用 L'Hospital 法则来做将不胜其烦，请读者自行加以对照。

### 例 5.4.12 (用 Taylor 公式证明不等式) @178

设 $\alpha>1$，证明：当 $x>-1$ 时成立

$$(1+x)^\alpha\geqslant 1+\alpha x,$$

且等号仅当 $x=0$ 时成立。

**证明** 对 $f(x)=(1+x)^\alpha$ 应用在 $x=0$ 处的带 Lagrange 余项的 Taylor 公式，得到

$$(1+x)^\alpha=1+\alpha x+\frac{\alpha(\alpha-1)}{2}(1+\theta x)^{\alpha-2}x^2,\quad x>-1.$$

注意到上式中最后一项是非负的，且仅当 $x=0$ 时为零，所以

$$(1+x)^\alpha\geqslant 1+\alpha x,\quad x>-1,$$

且等号仅当 $x=0$ 时成立。

### 例 5.4.13 (用 Taylor 公式估计导数) @178

设 $f(x)$ 在 $[0,1]$ 上具有二阶导数，且 $[0,1]$ 上成立 $|f(x)|\leqslant A$，$|f''(x)|\leqslant B$。证明

$$|f'(x)|\leqslant 2A+\frac{1}{2}B,\quad x\in[0,1].$$

**证明** 对于任意 $c\in[0,1]$，$f(x)$ 在 $x=c$ 处的带 Lagrange 余项的 Taylor 公式为

$$f(x)=f(c)+f'(c)(x-c)+\frac{1}{2}f''(\xi)(x-c)^2,\quad x\in[0,1],$$

其中 $\xi$ 在 $c$ 与 $x$ 之间，因此 $\xi\in[0,1]$。分别取 $x=0$ 与 $x=1$ 得

$$f(0)=f(c)+f'(c)(0-c)+\frac{1}{2}f''(\xi_1)(0-c)^2,$$

$$f(1)=f(c)+f'(c)(1-c)+\frac{1}{2}f''(\xi_2)(1-c)^2,$$

两式相减可得

$$f'(c)=f(1)-f(0)-\frac{1}{2}\left[f''(\xi_2)(1-c)^2-f''(\xi_1)c^2\right],$$

于是由已知条件得

$$|f'(c)|\leqslant |f(1)|+|f(0)|+\frac{1}{2}\left[|f''(\xi_2)|(1-c)^2+|f''(\xi_1)|c^2\right]$$

$$\leqslant 2A+\frac{B}{2}\left[(1-c)^2+c^2\right].$$

注意到在 $[0,1]$ 上成立 $(1-x)^2+x^2\leqslant 1$（见本章第 1 节习题 12（5）），因此

$$|f'(c)|\leqslant 2A+\frac{1}{2}B.$$

由 $c$ 在 $[0,1]$ 上的任意性，即得结论。

### 注 (曲线的渐近线) @178

若曲线 $y=f(x)$ 上的点 $(x,f(x))$ 到直线 $y=ax+b$ 的距离在 $x\to+\infty$ 或 $x\to-\infty$ 时趋于零，则称直线 $y=ax+b$ 是曲线 $y=f(x)$ 的一条**渐近线**。当 $a=0$ 时称为**水平渐近线**，否则称为**斜渐近线**。显然，直线 $y=ax+b$ 是曲线 $y=f(x)$ 的渐近线的充分必要条件为

$$\lim_{x\to+\infty}\left[f(x)-(ax+b)\right]=0\quad \text{或}\quad \lim_{x\to-\infty}\left[f(x)-(ax+b)\right]=0.$$

如果 $y=ax+b$ 是曲线 $y=f(x)$ 的渐近线，则

$$\lim_{x\to+\infty}\frac{f(x)-(ax+b)}{x}=0\quad \left(\text{或}\ \lim_{x\to-\infty}\frac{f(x)-(ax+b)}{x}=0\right),$$

因此首先有

$$a=\lim_{x\to+\infty}\frac{f(x)}{x}\quad \left(\text{或}\ a=\lim_{x\to-\infty}\frac{f(x)}{x}\right).$$

其次，再由 $\lim_{x\to+\infty}[f(x)-(ax+b)]=0$（或 $\lim_{x\to-\infty}[f(x)-(ax+b)]=0$）可得

$$b=\lim_{x\to+\infty}\left[f(x)-ax\right]\quad \left(\text{或}\ b=\lim_{x\to-\infty}\left[f(x)-ax\right]\right).$$

反之，如果由以上两式确定了 $a$ 和 $b$，那么 $y=ax+b$ 就是曲线 $y=f(x)$ 的一条渐近线。

注意，如果上面的极限计算对于 $x\to\infty$ 成立，则说明直线 $y=ax+b$ 关于曲线 $y=f(x)$ 在 $x\to+\infty$ 和 $-\infty$ 两个方向上都是渐近线。

除上述情况外，如果当 $x\to a^+$ 或 $a^-$ 时，$f(x)$ 趋于 $+\infty$ 或 $-\infty$，即

$$\lim_{x\to a^+}f(x)=\pm\infty\quad \text{或}\quad \lim_{x\to a^-}f(x)=\pm\infty,$$

则称直线 $x=a$ 是曲线 $y=f(x)$ 的一条**垂直渐近线**。

求曲线的渐近线方程本质上就是求函数的极限，关于求函数的极限，可以有多种方法，但对于一些特殊的情况，则需要应用 Taylor 公式。

### 例 5.4.14 (求渐近线) @179

求曲线 $y=\dfrac{(x-1)^2}{3(x+1)}$ 的渐近线方程。

**解** 由于

$$a=\lim_{x\to\infty}\frac{y}{x}=\lim_{x\to\infty}\frac{(x-1)^2}{3x(x+1)}=\frac{1}{3},$$

$$b=\lim_{x\to\infty}\left[\frac{(x-1)^2}{3(x+1)}-ax\right]=\lim_{x\to\infty}\left[\frac{(x-1)^2}{3(x+1)}-\frac{1}{3}x\right]=\frac{1}{3}\lim_{x\to\infty}\frac{-3x+1}{x+1}=-1,$$

因此 $y=\dfrac{x}{3}-1$ 为曲线 $y=\dfrac{(x-1)^2}{3(x+1)}$ 的斜渐近线。又由于

$$\lim_{x\to -1^+}\frac{(x-1)^2}{3(x+1)}=+\infty,\quad \lim_{x\to -1^-}\frac{(x-1)^2}{3(x+1)}=-\infty,$$

可知 $x=-1$ 是曲线 $y=\dfrac{(x-1)^2}{3(x+1)}$ 的垂直渐近线。

显然，$y=\dfrac{x}{3}-1$ 在 $x\to+\infty$ 和 $-\infty$ 两个方向上都是曲线 $y=\dfrac{(x-1)^2}{3(x+1)}$ 的斜渐近线，而 $x=-1$ 在 $x\to a^+$ 和 $a^-$ 两个方向上都是曲线 $y=\dfrac{(x-1)^2}{3(x+1)}$ 的垂直渐近线。

### 例 5.4.15 (用 Taylor 公式求渐近线) @179

求曲线 $y=\sqrt[3]{x^3-x^2-x+1}$ 的渐近线方程。

**解** 设 $y=\sqrt[3]{x^3-x^2-x+1}$ 的渐近线方程为 $y=ax+b$，则由定义

$$a=\lim_{x\to\infty}\frac{y}{x}=\lim_{x\to\infty}\frac{\sqrt[3]{x^3-x^2-x+1}}{x}=\lim_{x\to\infty}\sqrt[3]{1-\frac{x^2+x-1}{x^3}}=1,$$

$$b=\lim_{x\to\infty}\left(\sqrt[3]{x^3-x^2-x+1}-x\right)=\lim_{x\to\infty}x\left(\sqrt[3]{1-\frac{x^2+x-1}{x^3}}-1\right)$$

$$=\lim_{x\to\infty}x\left[\left(1-\frac{1}{3}\cdot\frac{x^2+x-1}{x^3}+o\left(\frac{1}{x}\right)\right)-1\right]=\lim_{x\to\infty}\left[-\frac{1}{3}+o(1)\right]=-\frac{1}{3},$$

因此 $y=\sqrt[3]{x^3-x^2-x+1}$ 的渐近线方程为

$$y=x-\frac{1}{3}.$$

例 5.4.14 和例 5.4.15 的图形请见下一节的图 5.5.4 和图 5.5.5。

### 例 5.4.16 (用 Taylor 公式求渐近线) @180

求曲线 $y=x^3\left(e^{\frac{1}{x}}+e^{-\frac{1}{x}}-2\right)$ 的渐近线方程。

**解** 设 $y=x^3\left(e^{\frac{1}{x}}+e^{-\frac{1}{x}}-2\right)$ 的渐近线方程为 $y=ax+b$，则由定义

$$a=\lim_{x\to\infty}\frac{y}{x}=\lim_{x\to\infty}x^2\left(e^{\frac{1}{x}}+e^{-\frac{1}{x}}-2\right)$$

$$=\lim_{x\to\infty}x^2\left[\left(1+\frac{1}{x}+\frac{1}{2x^2}+o\left(\frac{1}{x^2}\right)\right)+\left(1-\frac{1}{x}+\frac{1}{2x^2}+o\left(\frac{1}{x^2}\right)\right)-2\right]=1,$$

$$b=\lim_{x\to\infty}\left[x^3\left(e^{\frac{1}{x}}+e^{-\frac{1}{x}}-2\right)-x\right]$$

$$=\lim_{x\to\infty}\left\{x^3\left[\left(1+\frac{1}{x}+\frac{1}{2x^2}+\frac{1}{6x^3}+o\left(\frac{1}{x^3}\right)\right)+\left(1-\frac{1}{x}+\frac{1}{2x^2}-\frac{1}{6x^3}+o\left(\frac{1}{x^3}\right)\right)-2\right]-x\right\}$$

$$=\lim_{x\to\infty}\left[x+o(1)-x\right]=0.$$

因此 $y=x$ 为曲线 $y=x^3\left(e^{\frac{1}{x}}+e^{-\frac{1}{x}}-2\right)$ 的斜渐近线。又由于

$$\lim_{x\to 0^+}x^3\left(e^{\frac{1}{x}}+e^{-\frac{1}{x}}-2\right)=\lim_{x\to 0^+}x^3e^{\frac{1}{x}}=+\infty,\quad \lim_{x\to 0^-}x^3\left(e^{\frac{1}{x}}+e^{-\frac{1}{x}}-2\right)=\lim_{x\to 0^-}x^3e^{-\frac{1}{x}}=-\infty,$$

可知 $x=0$ 是曲线 $y=x^3\left(e^{\frac{1}{x}}+e^{-\frac{1}{x}}-2\right)$ 的垂直渐近线。

### 注 (外推方法) @180

外推是一种通过将精度较低的近似值进行适当组合，产生精度较高的近似值的方法，它的基础是 Taylor 公式，其原理可以简述如下。

若对于某个值 $a$，按参数 $h$ 算出的近似值 $a_1(h)$ 可以展开成

$$a_1(h)=a+c_1h+c_2h^2+c_3h^3+\cdots$$

（这里先不管 $c_i$ 的具体形式），那么按参数 $\dfrac{h}{2}$ 算出的近似值 $a_1\left(\dfrac{h}{2}\right)$ 就是

$$a_1\left(\frac{h}{2}\right)=a+\frac{1}{2}c_1h+\frac{1}{4}c_2h^2+\frac{1}{8}c_3h^3+\cdots,$$

$a_1(h)$ 和 $a_1\left(\dfrac{h}{2}\right)$ 与准确值 $a$ 的误差都是 $O(h)$ 阶的。现在，将后一式乘上 $2$ 减去前一式，便得到

$$a_2(h)=\frac{2a_1\left(\frac{h}{2}\right)-a_1(h)}{2-1}=a+d_2h^2+d_3h^3+\cdots,$$

也就是说，对两个 $O(h)$ 阶的近似值花少量几步四则运算进行组合之后，却得到了具有 $O(h^2)$ 阶的近似值 $a_2(h)$，这样的过程就称为**外推**。

若进行了一次外推之后精度仍未达到要求，则可以从 $a_2(h)$ 出发再次外推，

$$a_3(h)=\frac{4a_2\left(\frac{h}{2}\right)-a_2(h)}{4-1}=a+e_3h^3+e_4h^4+\cdots,$$

得到 $O(h^3)$ 阶的近似值 $a_3(h)$。这样的过程可以进行 $k-1$ 步，直到

$$a_k(h)=\frac{2^{k-1}a_{k-1}\left(\frac{h}{2}\right)-a_{k-1}(h)}{2^{k-1}-1}=a+O(h^k)$$

满足预先给定的精度。

外推方法能以较小的代价获得高精度的结果，因此是一种非常重要的近似计算技术。

### 例 5.4.17 (割圆术与外推) @181

古人很早就知道用“割圆术”，即计算圆的内接或外切正多边形的周长或面积来求圆周率 $\pi$，我国古代科学家曾在这方面作出过巨大的贡献。单位圆的内接正 $n$ 边形的面积可以表示为

$$S(h)=\frac{1}{2h}\sin(2h\pi),$$

这里 $h=\dfrac{1}{n}$，按照 Taylor 公式

$$S(h)=\frac{1}{2h}\left[2h\pi-\frac{(2h\pi)^3}{3!}+\frac{(2h\pi)^5}{5!}-\cdots\right]=\pi+c_1h^2+c_2h^4+c_3h^6+\cdots,$$

因此，其内接正 $2n$ 边形的面积可以表示为

$$S\left(\frac{h}{2}\right)=\frac{1}{h}\left[h\pi-\frac{(h\pi)^3}{3!}+\frac{(h\pi)^5}{5!}-\cdots\right]=\pi+\frac{1}{4}c_1h^2+\tilde{c}_2h^4+\tilde{c}_3h^6+\cdots,$$

用它们作为 $\pi$ 的近似值，误差都是 $O(h^2)$ 量级的。

现在将这两个近似的程度不够理想的值按以下方式组合：

$$\tilde{S}(h)=\frac{4S\left(\frac{h}{2}\right)-S(h)}{4-1}=S\left(\frac{h}{2}\right)+\frac{S\left(\frac{h}{2}\right)-S(h)}{3},$$

那么通过简单的计算就可以知道

$$\tilde{S}(h)=\pi+d_2h^4+d_3h^6+\cdots,$$

$h^2$ 项被消掉了！也就是说，用 $\tilde{S}(h)$ 近似表示 $\pi$，其精度可以大大提高。

我国三国时的著名数学家刘徽曾对半径为 $10$ 的圆算出

$$100\cdot S\left(\frac{1}{96}\right)=313\ \frac{584}{625},\quad 100\cdot S\left(\frac{1}{192}\right)=314\ \frac{64}{625},$$

接着他“以一百九十二觚之幂以率消息”，“当取此分寸之三十六”，用现在的话来说，即以 $\dfrac{36}{625}$ 加到 $100\cdot S\left(\dfrac{1}{192}\right)$ 上去，便得到了当时最精确的圆周率

$$\pi\approx\frac{1}{100}\left(314\ \frac{64}{625}+\frac{36}{625}\right)=3.141\,6.$$

后人发现，他用的增量 $\dfrac{36}{625}$ 与 $\tilde{S}(h)$ 表达式中对 $S\left(\dfrac{h}{2}\right)$ 的修正量

$$\frac{S\left(\frac{h}{2}\right)-S(h)}{3}=\frac{314\ \frac{64}{625}-313\ \frac{584}{625}}{3}=\frac{35}{625}$$

相当接近，因此有理由认为，他在当时已经掌握了某种与外推方法类似的计算技术。如果单纯由圆的内接正多边形的面积来计算，那要算至圆的内接正 $3072$ 边形方能达到这样的精度，计算中包含着许多开方运算，这在用算筹计算的魏晋时代（阿拉伯数字尚未传入），其工作量之大简直无法想象。

### 例 5.4.18 ($e$ 是无理数) @182

证明：$\mathrm{e}$ 是无理数。

**证明** 用反证法。假设 $\mathrm{e}$ 是有理数，那么显而易见，一定存在充分大的自然数 $m$，使得 $(m!)\mathrm{e}$ 是正整数。

在 $\mathrm{e}^x$ 的 Taylor 公式

$$\mathrm{e}^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots+\frac{x^n}{n!}+\frac{\mathrm{e}^{\theta x}}{(n+1)!}x^{n+1},\quad \theta\in(0,1)$$

中，将 $n$ 取为 $m$，并令 $x=1$。由于 $\mathrm{e}^x$ 在整个实数范围都满足定理 5.3.2 的条件，即有

$$\mathrm{e}=1+1+\frac{1}{2!}+\frac{1}{3!}+\cdots+\frac{1}{m!}+\frac{\mathrm{e}^\theta}{(m+1)!},\quad \theta\in(0,1).$$

两边同乘上 $m!$，便得到

$$(m!)\mathrm{e}=(m!)\left[1+1+\frac{1}{2!}+\frac{1}{3!}+\cdots+\frac{1}{m!}\right]+\frac{(m!)\mathrm{e}^\theta}{(m+1)!},$$

即

$$(m!)\left\{\mathrm{e}-\left[1+1+\frac{1}{2!}+\frac{1}{3!}+\cdots+\frac{1}{m!}\right]\right\}=\frac{\mathrm{e}^\theta}{m+1}.$$

按假设，等式的左端是正整数。

但由于 $\mathrm{e}^x$ 是单调增加函数，而 $\theta\in(0,1)$，因此

$$1<\mathrm{e}^\theta<3,$$

代入上式的右端，就得到估计式

$$\frac{1}{m+1}<\frac{\mathrm{e}^\theta}{m+1}<\frac{3}{m+1}.$$

于是，对于任意正整数 $m\geqslant 2$，都有 $\dfrac{\mathrm{e}^\theta}{m+1}\in(0,1)$，也就是说，上述等式的右端绝不可能是正整数，这样就导出了矛盾。

所以假设 $\mathrm{e}$ 是有理数不成立，即 $\mathrm{e}$ 是无理数。
