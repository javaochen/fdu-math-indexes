---
chapter: 15
chapter_title: 含参变量积分
section: "15.3"
section_title: Euler 积分
pages: "712–723"
---

### 定义 (Beta 函数) @712

形如
$$\mathrm{B}(p,q)=\int_0^1 x^{p-1}(1-x)^{q-1}\,\mathrm{d}x$$
的含参变量积分称为 **Beta 函数**，或**第一类 Euler 积分**。

先看它的定义域。将 Beta 函数写成
$$\mathrm{B}(p,q)=\int_0^{\frac{1}{2}}x^{p-1}(1-x)^{q-1}\,\mathrm{d}x+\int_{\frac{1}{2}}^1 x^{p-1}(1-x)^{q-1}\,\mathrm{d}x,$$
当 $x\to 0$ 时，$x^{p-1}(1-x)^{q-1}\sim x^{p-1}$，所以只有当 $p>0$ 时右边第一个反常积分收敛。而当 $x\to 1$ 时，$x^{p-1}(1-x)^{q-1}\sim(1-x)^{q-1}$，所以只有当 $q>0$ 时右边第二个反常积分收敛。这说明了 $\int_0^1 x^{p-1}(1-x)^{q-1}\,\mathrm{d}x$ 对于每对 $(p,q)\in(0,+\infty)\times(0,+\infty)$ 收敛，即 Beta 函数 $\mathrm{B}(p,q)$ 的定义域为 $(0,+\infty)\times(0,+\infty)$。

### 命题 (Beta 函数的连续性) @713

$\mathrm{B}(p,q)$ 在 $(0,+\infty)\times(0,+\infty)$ 上连续。

### 命题 (Beta 函数的对称性) @713

$$\mathrm{B}(p,q)=\mathrm{B}(q,p),\qquad p>0,\ q>0.$$

### 命题 (Beta 函数的递推公式) @713

$$\mathrm{B}(p,q)=\frac{q-1}{p+q-1}\mathrm{B}(p,q-1),\qquad p>0,\ q>1.$$

由 $\mathrm{B}(p,q)$ 的对称性并结合递推公式可得到，当 $p>1,\ q>1$ 时成立
$$\mathrm{B}(p,q)=\frac{(p-1)(q-1)}{(p+q-1)(p+q-2)}\mathrm{B}(p-1,q-1).$$

### 命题 (Beta 函数的其他表示) @713

(1) 作变量代换 $x=\cos^2\varphi$，得到
$$\mathrm{B}(p,q)=2\int_0^{\frac{\pi}{2}}\cos^{2p-1}\varphi\sin^{2q-1}\varphi\,\mathrm{d}\varphi.$$
据此可以得到
$$\mathrm{B}\left(\frac{1}{2},\frac{1}{2}\right)=\pi.$$

(2) 作变量代换 $x=\dfrac{1}{1+t}$，得到
$$\mathrm{B}(p,q)=\int_0^{+\infty}\frac{t^{q-1}}{(1+t)^{p+q}}\,\mathrm{d}t=\int_0^1\frac{t^{q-1}}{(1+t)^{p+q}}\,\mathrm{d}t+\int_1^{+\infty}\frac{t^{q-1}}{(1+t)^{p+q}}\,\mathrm{d}t.$$
在最后一个积分中再作变量代换 $t=\dfrac{1}{u}$，得到
$$\int_1^{+\infty}\frac{t^{q-1}}{(1+t)^{p+q}}\,\mathrm{d}t=\int_0^1\frac{u^{p-1}}{(1+u)^{p+q}}\,\mathrm{d}u,$$
于是
$$\mathrm{B}(p,q)=\int_0^1\frac{t^{p-1}+t^{q-1}}{(1+t)^{p+q}}\,\mathrm{d}t\ (=\mathrm{B}(q,p)).$$

### 定义 (Gamma 函数) @714

形如
$$\Gamma(s)=\int_0^{+\infty}x^{s-1}\mathrm{e}^{-x}\,\mathrm{d}x$$
的含参变量积分称为 **Gamma 函数**，或**第二类 Euler 积分**。

先看它的定义域。将 Gamma 函数写成
$$\Gamma(s)=\int_0^1 x^{s-1}\mathrm{e}^{-x}\,\mathrm{d}x+\int_1^{+\infty}x^{s-1}\mathrm{e}^{-x}\,\mathrm{d}x,$$
由反常积分的收敛判别法，当 $s\leqslant 0$ 时，右边第一个反常积分发散，而当 $s>0$ 时，两个反常积分都收敛，因此 Gamma 函数 $\Gamma(s)$ 的定义域为 $(0,+\infty)$。

### 命题 (Gamma 函数的连续性与可导性) @714

$\Gamma(s)$ 在 $(0,+\infty)$ 上连续且可导，且
$$\Gamma'(s)=\int_0^{+\infty}x^{s-1}\mathrm{e}^{-x}\ln x\,\mathrm{d}x,\qquad s>0.$$

事实上，仿照以上的方法还可得到 $\Gamma(s)$ 在 $(0,+\infty)$ 上任意阶可导，且成立
$$\Gamma^{(n)}(s)=\int_0^{+\infty}x^{s-1}\mathrm{e}^{-x}(\ln x)^n\,\mathrm{d}x,\qquad s>0.$$

### 命题 (Gamma 函数的递推公式) @714

$$\Gamma(s+1)=s\Gamma(s),\qquad s>0.$$

### 命题 (Gamma 函数与阶乘) @715

特别地，当 $s=n$ 为正整数时，
$$\Gamma(n+1)=n\Gamma(n)=n(n-1)\Gamma(n-1)=\cdots=n!\,\Gamma(1),$$
而 $\Gamma(1)=\displaystyle\int_0^{+\infty}\mathrm{e}^{-x}\,\mathrm{d}x=1$，所以
$$\Gamma(n+1)=n!.$$
因而 Gamma 函数可以说**是阶乘的推广**。

由于 $\Gamma(s)=\dfrac{\Gamma(s+1)}{s}$ 以及 $\Gamma(1)=1$，所以
$$\lim_{s\to 0^+}\Gamma(s)=+\infty.$$

### 命题 (Gamma 函数的其他表示) @715

(1) 在 $\Gamma(s)$ 的表示式中作变量代换 $x=t^2$，那么
$$\Gamma(s)=2\int_0^{+\infty}t^{2s-1}\mathrm{e}^{-t^2}\,\mathrm{d}t.$$
据此可知
$$\Gamma\left(\frac{1}{2}\right)=2\int_0^{+\infty}\mathrm{e}^{-t^2}\,\mathrm{d}t=\sqrt{\pi}.$$

(2) 作变量代换 $x=\alpha t\ (\alpha>0)$ 可得
$$\Gamma(s)=\alpha^s\int_0^{+\infty}t^{s-1}\mathrm{e}^{-\alpha t}\,\mathrm{d}t.$$

### 命题 (Gamma 函数定义域的延拓) @715

由于等式
$$\Gamma(s)=\frac{\Gamma(s+1)}{s}$$
的右边在 $(-1,0)$ 上有意义，则可以应用上式来定义左边函数 $\Gamma(s)$ 在 $(-1,0)$ 上的值。用同样的方法，再利用 $\Gamma(s)$ 已在 $(-1,0)$ 上定义的值，定义 $\Gamma(s)$ 在 $(-2,-1)$ 上的值。如此继续下去，就可以把 $\Gamma(s)$ 的定义域延拓到
$$(-\infty,+\infty)\setminus\{0,-1,-2,-3,\cdots\}$$
上去。$\Gamma(s)$ 的图像如图 15.3.1 所示。易证明 $\lim_{s\to-\infty}\Gamma(s)=+\infty$（留作习题）。

### 例 15.3.1 @716

计算 $\displaystyle I=\int_0^{+\infty}x^{2n}\mathrm{e}^{-x^2}\,\mathrm{d}x$。

**解** 利用表示式 $\Gamma(s)=2\displaystyle\int_0^{+\infty}t^{2s-1}\mathrm{e}^{-t^2}\,\mathrm{d}t$ 和递推公式，即有
$$I=\frac{1}{2}\Gamma\left(n+\frac{1}{2}\right)=\frac{1}{2}\Gamma\left(\frac{2n-1}{2}+1\right)=\frac{2n-1}{2^2}\Gamma\left(n-1+\frac{1}{2}\right),$$
反复利用递推公式即得到
$$I=\frac{(2n-1)!!}{2^{n+1}}\Gamma\left(\frac{1}{2}\right)=\frac{(2n-1)!!}{2^{n+1}}\sqrt{\pi}.$$

### 定理 15.3.1 (Beta 函数与 Gamma 函数的关系) @716

Beta 函数与 Gamma 函数之间具有如下关系：
$$\mathrm{B}(p,q)=\frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)},\qquad p>0,\ q>0.$$

### 例 15.3.2 @716

计算 $\displaystyle I=\int_0^{\frac{\pi}{2}}\sin^6 x\cos^4 x\,\mathrm{d}x$。

**解** 利用 Beta 函数的性质及 Gamma 函数的递推公式得
$$I=\int_0^{\frac{\pi}{2}}\sin^6 x\cos^4 x\,\mathrm{d}x=\frac{1}{2}\mathrm{B}\left(\frac{5}{2},\frac{7}{2}\right)=\frac{1}{2}\frac{\Gamma\left(\frac{5}{2}\right)\Gamma\left(\frac{7}{2}\right)}{\Gamma(6)}$$
$$=\frac{1}{2\cdot 5!}\left(\frac{3}{2}\cdot\frac{1}{2}\sqrt{\pi}\right)\left(\frac{5}{2}\cdot\frac{3}{2}\cdot\frac{1}{2}\sqrt{\pi}\right)=\frac{3\pi}{512}.$$

### 例 15.3.3 @716

计算 $\displaystyle I=\int_0^1 x^8\sqrt{1-x^3}\,\mathrm{d}x$。

**解** 作变量代换 $x^3=t$，得
$$I=\int_0^1 x^8\sqrt{1-x^3}\,\mathrm{d}x=\frac{1}{3}\int_0^1 t^2\sqrt{1-t}\,\mathrm{d}t=\frac{1}{3}\mathrm{B}\left(3,\frac{3}{2}\right)$$
$$=\frac{1}{3}\cdot\frac{\Gamma(3)\Gamma\left(\frac{3}{2}\right)}{\Gamma\left(\frac{9}{2}\right)}=\frac{2!\,\Gamma\left(\frac{3}{2}\right)}{3\cdot\frac{7}{2}\cdot\frac{5}{2}\cdot\frac{3}{2}\cdot\Gamma\left(\frac{3}{2}\right)}=\frac{16}{315}.$$

### 例 15.3.4 @717

设 $\alpha>-1$，计算 $\displaystyle\int_0^{\frac{\pi}{2}}\sin^\alpha x\,\mathrm{d}x$ 与 $\displaystyle\int_0^{\frac{\pi}{2}}\cos^\alpha x\,\mathrm{d}x$，并用 Gamma 函数表示 $n$ 维球体 $B_n=\left\{(x_1,x_2,\cdots,x_n)\mid x_1^2+x_2^2+\cdots+x_n^2\leqslant R^2\right\}$ 的体积 $V_n$。

**解** 作变量代换 $x=\dfrac{\pi}{2}-t$，可知 $\displaystyle\int_0^{\frac{\pi}{2}}\sin^\alpha x\,\mathrm{d}x=\int_0^{\frac{\pi}{2}}\cos^\alpha x\,\mathrm{d}x$。利用 Beta 函数的性质得
$$\int_0^{\frac{\pi}{2}}\sin^\alpha x\,\mathrm{d}x=\int_0^{\frac{\pi}{2}}\cos^\alpha x\,\mathrm{d}x=\frac{1}{2}\mathrm{B}\left(\frac{\alpha+1}{2},\frac{1}{2}\right)$$
$$=\frac{1}{2}\cdot\frac{\Gamma\left(\frac{\alpha+1}{2}\right)\Gamma\left(\frac{1}{2}\right)}{\Gamma\left(\frac{\alpha+2}{2}\right)}=\frac{\sqrt{\pi}}{2}\cdot\frac{\Gamma\left(\frac{\alpha+1}{2}\right)}{\Gamma\left(\frac{\alpha+2}{2}\right)}.$$

在例 13.3.11 中，我们计算了 $n$ 维球体的体积，得到
$$V_n=\left(\int_0^R r^{n-1}\,\mathrm{d}r\right)\left(\int_0^\pi\sin^{n-2}\varphi_1\,\mathrm{d}\varphi_1\right)\cdots\left(\int_0^\pi\sin^2\varphi_{n-3}\,\mathrm{d}\varphi_{n-3}\right)\left(\int_0^\pi\sin\varphi_{n-2}\,\mathrm{d}\varphi_{n-2}\right)\left(\int_0^{2\pi}\mathrm{d}\varphi_{n-1}\right).$$
再利用以上的计算结果，得到
$$V_n=\frac{2\pi R^n}{n}\left(\int_0^{\frac{\pi}{2}}\sin^{n-2}\varphi_1\,\mathrm{d}\varphi_1\right)\cdots\left(\int_0^{\frac{\pi}{2}}\sin\varphi_{n-2}\,\mathrm{d}\varphi_{n-2}\right)$$
$$=\frac{2\pi R^n}{n}\left(\sqrt{\pi}\frac{\Gamma\left(\frac{n-1}{2}\right)}{\Gamma\left(\frac{n}{2}\right)}\right)\cdots\left(\sqrt{\pi}\frac{\Gamma\left(\frac{3}{2}\right)}{\Gamma\left(\frac{4}{2}\right)}\right)\left(\sqrt{\pi}\frac{\Gamma\left(\frac{2}{2}\right)}{\Gamma\left(\frac{3}{2}\right)}\right)$$
$$=\frac{2\pi R^n(\sqrt{\pi})^{n-2}}{n}\cdot\frac{\Gamma(1)}{\Gamma\left(\frac{n}{2}\right)}=\frac{\pi^{\frac{n}{2}}}{\frac{n}{2}\Gamma\left(\frac{n}{2}\right)}R^n=\frac{\pi^{\frac{n}{2}}}{\Gamma\left(\frac{n}{2}+1\right)}R^n.$$

这是 $n$ 维球体体积的一种常用表示。

### 定理 15.3.2 (Legendre 公式) @717

$$\Gamma(s)\Gamma\left(s+\frac{1}{2}\right)=\frac{\sqrt{\pi}}{2^{2s-1}}\Gamma(2s),\qquad s>0.$$

### 定理 15.3.3 (余元公式) @718

$$\Gamma(s)\Gamma(1-s)=\frac{\pi}{\sin\pi s},\qquad 0<s<1.$$

在证明这个定理之前，我们先给出一个一般性的结果。

### 引理 15.3.1 @718

设连续可积函数序列 $\{u_n(x)\}$ 在区间 $[a,b)$ 上收敛于 $u(x)$，函数 $\varphi(x)$ 在 $[a,b)$ 上可积（即 $\displaystyle\int_a^b\varphi(x)\,\mathrm{d}x$ 收敛）。进一步设

(1) $0\leqslant u_n(x)\leqslant\varphi(x)$，$a\leqslant x<b$，$n=1,2,\cdots$；

(2) 对于任意 $\varepsilon>0$，$\{u_n(x)\}$ 在 $[a,b-\varepsilon]$ 上一致收敛，

那么
$$\lim_{n\to\infty}\int_a^b u_n(x)\,\mathrm{d}x=\int_a^b u(x)\,\mathrm{d}x,$$
即极限运算与积分运算可交换。

### 注 (引理 15.3.1 的推广) @719

在这个引理中，把 $[a,b)$ 换为 $(a,b]$ 或 $(a,b)$ 时，相应的结论也成立。

### 引理 15.3.2 @719

对于 $x\in(0,1)$，成立
$$\frac{\pi}{\sin\pi x}=\frac{1}{x}+\sum_{n=1}^{\infty}(-1)^n\left(\frac{1}{x+n}+\frac{1}{x-n}\right).$$

### 定理 15.3.4 (Stirling 公式) @720

Gamma 函数有如下的渐近估计：
$$\Gamma(s+1)=\sqrt{2\pi s}\left(\frac{s}{\mathrm{e}}\right)^s\mathrm{e}^{\frac{\theta}{12s}},\qquad s>0,$$
这里 $0<\theta<1$。特别地，当 $s=n$ 为正整数时，
$$n!=\sqrt{2\pi n}\left(\frac{n}{\mathrm{e}}\right)^n\mathrm{e}^{\frac{\theta}{12n}}.$$

这个定理的证明比较复杂，在此从略。

### 例 15.3.5 @720

计算 $\displaystyle I=\int_0^{+\infty}\frac{\sqrt[4]{x}}{(1+x)^2}\,\mathrm{d}x$。

**解**
$$I=\int_0^{+\infty}\frac{\sqrt[4]{x}}{(1+x)^2}\,\mathrm{d}x=\int_0^{+\infty}\frac{x^{\frac{5}{4}-1}}{(1+x)^{\frac{5}{4}+\frac{3}{4}}}\,\mathrm{d}x=\mathrm{B}\left(\frac{3}{4},\frac{5}{4}\right)$$
$$=\frac{\Gamma\left(\frac{3}{4}\right)\Gamma\left(\frac{5}{4}\right)}{\Gamma(2)}=\frac{\frac{1}{4}\Gamma\left(\frac{1}{4}\right)\Gamma\left(\frac{3}{4}\right)}{1!}=\frac{1}{4}\cdot\frac{\pi}{\sin\frac{\pi}{4}}=\frac{\sqrt{2}\pi}{4}.$$

### 例 15.3.6 @721

计算曲线 $r^4=\sin^3\theta\cos\theta$ 所围图形的面积 $A$。

**解** 显然，曲线所围图形在第一象限部分的面积的两倍就是所要求的面积（见图 15.3.2）。根据定积分中计算面积的公式得
$$A=2\cdot\frac{1}{2}\int_0^{\frac{\pi}{2}}\sin^{\frac{3}{2}}\theta\cos^{\frac{1}{2}}\theta\,\mathrm{d}\theta=\frac{1}{2}\mathrm{B}\left(\frac{3}{4},\frac{5}{4}\right)$$
$$=\frac{\Gamma\left(\frac{3}{4}\right)\Gamma\left(\frac{5}{4}\right)}{2\Gamma(2)}=\frac{1}{8}\Gamma\left(\frac{3}{4}\right)\Gamma\left(\frac{1}{4}\right)=\frac{\sqrt{2}\pi}{8}.$$

### 例 15.3.7 @721

设区域 $D=\{(x,y)\mid x\geqslant 0,\ y\geqslant 0\}$。确定正数 $\alpha,\beta$，使得反常重积分
$$I=\iint_D\frac{\mathrm{d}x\,\mathrm{d}y}{1+x^\alpha+y^\beta}$$
收敛，并在收敛时计算 $I$ 的值。

**解** 如果一个非负函数的反常重积分经过变量代换或化为累次积分后收敛，则它本身一定收敛，所以我们采用间接的方法，作变量代换 $x=u^{\frac{2}{\alpha}},\ y=v^{\frac{2}{\beta}}$ 得到
$$I=\frac{4}{\alpha\beta}\iint_{D'}\frac{u^{\frac{2}{\alpha}-1}v^{\frac{2}{\beta}-1}}{1+u^2+v^2}\,\mathrm{d}u\,\mathrm{d}v,$$
其中 $D'=\{(u,v)\mid u\geqslant 0,\ v\geqslant 0\}$。再利用极坐标变换 $u=r\cos\theta,\ v=r\sin\theta$，得到
$$I=\frac{4}{\alpha\beta}\iint_{\substack{0\leqslant\theta\leqslant\frac{\pi}{2}\\ 0\leqslant r<+\infty}}\frac{r^{\frac{2}{\alpha}+\frac{2}{\beta}-1}}{1+r^2}\cos^{\frac{2}{\alpha}-1}\theta\sin^{\frac{2}{\beta}-1}\theta\,\mathrm{d}r\,\mathrm{d}\theta=\frac{4}{\alpha\beta}\int_0^{\frac{\pi}{2}}\cos^{\frac{2}{\alpha}-1}\theta\sin^{\frac{2}{\beta}-1}\theta\,\mathrm{d}\theta\int_0^{+\infty}\frac{r^{\frac{2}{\alpha}+\frac{2}{\beta}-1}}{1+r^2}\,\mathrm{d}r.$$

关于等式右端的第一个积分，有
$$\int_0^{\frac{\pi}{2}}\cos^{\frac{2}{\alpha}-1}\theta\sin^{\frac{2}{\beta}-1}\theta\,\mathrm{d}\theta=\frac{1}{2}\mathrm{B}\left(\frac{1}{\alpha},\frac{1}{\beta}\right).$$

在等式右端的第二个积分中作变量代换 $r^2=t$，得到
$$\int_0^{+\infty}\frac{r^{\frac{2}{\alpha}+\frac{2}{\beta}-1}}{1+r^2}\,\mathrm{d}r=\frac{1}{2}\int_0^{+\infty}\frac{t^{\frac{1}{\alpha}+\frac{1}{\beta}-1}}{1+t}\,\mathrm{d}t,$$
它仅在 $0<\dfrac{1}{\alpha}+\dfrac{1}{\beta}<1$ 时收敛，且等于 $\dfrac{1}{2}\mathrm{B}\left(\dfrac{1}{\alpha}+\dfrac{1}{\beta},1-\left(\dfrac{1}{\alpha}+\dfrac{1}{\beta}\right)\right)$。

于是当正数 $\alpha,\beta$ 满足 $\dfrac{1}{\alpha}+\dfrac{1}{\beta}<1$ 时，反常重积分
$$I=\iint_D\frac{\mathrm{d}x\,\mathrm{d}y}{1+x^\alpha+y^\beta}$$
收敛，且
$$I=\frac{1}{\alpha\beta}\mathrm{B}\left(\frac{1}{\alpha},\frac{1}{\beta}\right)\mathrm{B}\left(\frac{1}{\alpha}+\frac{1}{\beta},1-\left(\frac{1}{\alpha}+\frac{1}{\beta}\right)\right)=\frac{1}{\alpha\beta}\Gamma\left(\frac{1}{\alpha}\right)\Gamma\left(\frac{1}{\beta}\right)\Gamma\left(1-\left(\frac{1}{\alpha}+\frac{1}{\beta}\right)\right).$$
