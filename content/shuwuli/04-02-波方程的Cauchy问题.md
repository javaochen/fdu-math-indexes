---
chapter: 4
chapter_title: 波方程
section: "4.2"
section_title: 波方程的 Cauchy 问题
pages: "106–116"
---

### 注 （化一般波方程为标准形式） @106

本节介绍 $a=1$ 时波方程的 Cauchy 问题
$$
\begin{cases}
\partial_t^2u-\Delta u=f(t,x), & (t,x)\in(0,+\infty)\times\mathbb{R}^n,\\
u(0,x)=\varphi(x),\ \partial_tu(0,x)=\psi(x), & x\in\mathbb{R}^n
\end{cases}\tag{4.10}
$$
的求解。对 $a\neq1$ 的一般波方程 $\partial_t^2u-a^2\Delta u=0$，可以通过自变量变换 $\tilde{t}=at$，把方程化为 $\partial_t^2u-\Delta u=0$，即 $a=1$ 的情形。

### 定义 （波算子 $S(t)$） @106

形式地定义波算子 $S(t):\psi\mapsto u(t,x)=[S(t)\psi](x)$，其中 $u(t,x)$ 是如下波方程的 Cauchy 问题的解：
$$
\begin{cases}
\partial_t^2u-\Delta u=0, & (t,x)\in(0,+\infty)\times\mathbb{R}^n,\\
u(0,x)=0,\ \partial_tu(0,x)=\psi(x), & x\in\mathbb{R}^n.
\end{cases}\tag{4.11}
$$
波算子 $S(t)$ 定义的合理性将在后面说明。

### 命题 （由波算子表示零初速 Cauchy 问题的解） @106

令 $v(t,x)=[S(t)\varphi](x)$，则形式验证可知 $u=\partial_tv(t,x)$ 是如下波方程的 Cauchy 问题的解：
$$
\begin{cases}
\partial_t^2u-\Delta u=0, & (t,x)\in(0,+\infty)\times\mathbb{R}^n,\\
u(0,x)=\varphi,\ \partial_tu(0,x)=0, & x\in\mathbb{R}^n.
\end{cases}\tag{4.12}
$$

### 命题 （齐次化原理） @107

受热方程章节中介绍的齐次化原理的启发，可进一步形式地验证
$$u(t,x)=\int_0^{t}S(t-\tau)f(\tau,x)\,\mathrm{d}\tau,\qquad (t,x)\in(0,+\infty)\times\mathbb{R}^n\tag{4.13}$$
是如下非齐次波方程 Cauchy 问题的解：
$$
\begin{cases}
\partial_t^2u-\Delta u=f, & (t,x)\in(0,+\infty)\times\mathbb{R}^n,\\
u(0,x)=0,\ \partial_tu(0,x)=0, & x\in\mathbb{R}^n.
\end{cases}\tag{4.14}
$$

### 注 （齐次化原理的物理解释） @107

任意给定 $t>0$，将时间区间 $[0,t]$ 作如下划分：
$$0=\tau_0<\tau_1<\tau_2<\cdots<\tau_N=t.$$
当 $\max\limits_{k=0,1,\cdots,N-1}\Delta\tau_k=\max\limits_{k=0,1,\cdots,N-1}(\tau_{k+1}-\tau_k)$ 充分小时，在 $x$ 位置处，我们可以将时间区间 $[\tau_k,\tau_{k+1}]$ 上外力 $f(s,x)$ 的持续作用近似地看作在 $\tau_k$ 时刻给予系统一个瞬时冲量 $f(\tau_k,x)\Delta\tau_k$。因此外力 $f|_{[\tau_k,\tau_{k+1}]}$ 所产生的受迫振动可近似地由
$$
\begin{cases}
\partial_t^2w-\Delta w=0, & (t,x)\in(\tau_k,+\infty)\times\mathbb{R}^n,\\
w(\tau_k,x)=0,\ \partial_tw(\tau_k,x)=f(\tau_k,x)\Delta\tau_k, & x\in\mathbb{R}^n
\end{cases}\tag{4.15}
$$
描述。利用方程的线性性质，将各时间段上由 $f$ 的作用所产生的振动相叠加，可得
$$\sum_{k=0}^{N-1}w(t,x;\tau_k)=\sum_{k=0}^{N-1}S(t-\tau_k)f(\tau_k,x)\Delta\tau_k$$
是 (4.14) 的近似解；令 $\max\limits_{k=0,1,\cdots,N-1}\Delta\tau_k\to0$，即得 $\int_0^{t}S(t-\tau)f(\tau,x)\,\mathrm{d}\tau$。

为得到波方程的 Cauchy 问题的解，下面将主要求解波算子 $S(t)$。为方便起见，本节仅讨论空间维数 $n=1,2$ 及 $3$ 的物理情形，一般的高维情形留作习题讨论。

## 4.2.1 一维波方程的 d'Alembert 公式 @107

### 命题 （一维齐次波方程的通解） @108

由于
$$\partial_t^2u-\partial_x^2u=(\partial_t+\partial_x)(\partial_t-\partial_x)u,$$
引入新的自变量
$$\xi=x+t,\qquad \eta=x-t,$$
则有
$$\partial_t+\partial_x=2\partial_\xi,\qquad \partial_t-\partial_x=-2\partial_\eta,$$
从而在 $(\xi,\eta)$ 坐标下，$u$ 满足
$$-4\partial_{\xi\eta}u=0.$$
故
$$u(t,x)=F(\xi)+G(\eta)=F(x+t)+G(x-t),\tag{4.16}$$
其中 $F,G$ 为任意二阶连续可微函数。

### 注 （行波与行波法） @109

形如 $F(x+t)$、$G(x-t)$ 的函数在每个时刻 $t$ 具有相同的波形，随时间按某一速度传播，被称为"行波"。上述将解写为两个行波之和从而求解初值问题的方法，称为行波法。

### 定理 4.2.1 @109

设 $\varphi\in C^2(\mathbb{R})$，$\psi\in C^1(\mathbb{R})$，则弦振动方程的 Cauchy 问题
$$
\begin{cases}
\partial_t^2u-\partial_x^2u=0, & (t,x)\in(0,+\infty)\times\mathbb{R},\\
u(0,x)=\varphi(x),\ \partial_tu(0,x)=\psi(x), & x\in\mathbb{R}
\end{cases}
$$
存在唯一的经典解，且它由 d'Alembert（达朗贝尔）公式
$$u(t,x)=\frac12\bigl[\varphi(x+t)+\varphi(x-t)\bigr]+\frac12\int_{x-t}^{x+t}\psi(y)\,\mathrm{d}y,\qquad (t,x)\in(0,+\infty)\times\mathbb{R}\tag{4.18}$$
给出。

从表达式 (4.18) 可以看出弦振动方程的解 $u$ 在 $(t,x)$ 的取值仅依赖于初值 $(\varphi,\psi)$ 在区间 $[x-t,x+t]$ 上的取值。

### 命题 （非齐次一维 Cauchy 问题的解） @109

利用齐次化原理可得
$$u(t,x)=\frac12\bigl[\varphi(x+t)+\varphi(x-t)\bigr]+\frac12\int_{x-t}^{x+t}\psi(y)\,\mathrm{d}y+\frac12\int_0^{t}\!\!\int_{x-(t-\tau)}^{x+(t-\tau)}f(\tau,y)\,\mathrm{d}y\,\mathrm{d}\tau,\qquad (t,x)\in(0,+\infty)\times\mathbb{R}$$
为非齐次方程 Cauchy 问题
$$
\begin{cases}
\partial_t^2u-\partial_x^2u=f, & (t,x)\in(0,+\infty)\times\mathbb{R},\\
u(0,x)=\varphi(x),\ \partial_tu(0,x)=\psi(x), & x\in\mathbb{R}
\end{cases}
$$
的解。

### 例 4.2.1 @109

求解描述一端固定的半无界弦自由振动的初边值问题
$$
\begin{cases}
\partial_t^2u-\partial_x^2u=0, & (t,x)\in(0,+\infty)\times(0,+\infty),\\
u(0,x)=\varphi(x),\ \partial_tu(0,x)=\psi(x), & x\in(0,+\infty),\\
u(t,0)=0, & t\in(0,+\infty),
\end{cases}\tag{4.19}
$$
其中 $\varphi$ 及 $\psi$ 满足相容性条件
$$\varphi(0)=\varphi''(0)=0,\qquad \psi(0)=0.$$

将初值 $(\varphi,\psi)$ 在 $\mathbb{R}$ 上作奇延拓成为 $(\Phi,\Psi)$，即
$$
\Phi(x)=\begin{cases}\varphi(x), & x\geqslant0,\\ -\varphi(-x), & x<0,\end{cases}\qquad
\Psi(x)=\begin{cases}\psi(x), & x\geqslant0,\\ -\psi(-x), & x<0,\end{cases}
$$
并要求以 $(\Phi,\Psi)$ 作初值的 Cauchy 问题在 $(0,+\infty)\times\mathbb{R}$ 上的解满足 $x=0$ 处的边界条件。由 d'Alembert 公式，以 $(\Phi,\Psi)$ 作初值的 Cauchy 问题的解为
$$U(t,x)=\frac12\bigl[\Phi(x+t)+\Phi(x-t)\bigr]+\frac12\int_{x-t}^{x+t}\Psi(y)\,\mathrm{d}y.\tag{4.20}$$

于是，将上述 $\Phi,\Psi$ 代入 (4.20)，就得到原混合初边值问题 (4.19) 的解
$$
u(t,x)=\begin{cases}
\dfrac12\bigl[\varphi(x+t)+\varphi(x-t)\bigr]+\dfrac12\displaystyle\int_{x-t}^{x+t}\psi(y)\,\mathrm{d}y, & 0\leqslant t\leqslant x,\\[2ex]
\dfrac12\bigl[\varphi(x+t)-\varphi(t-x)\bigr]+\dfrac12\displaystyle\int_{t-x}^{t+x}\psi(y)\,\mathrm{d}y, & 0\leqslant x<t.
\end{cases}\tag{4.21}
$$

## 4.2.2 三维波方程的球平均法 @111

### 构造 （球平均函数） @111

考虑三维波方程的如下 Cauchy 问题：
$$
\begin{cases}
\partial_t^2u-\Delta u=0, & (t,x)\in(0,+\infty)\times\mathbb{R}^3,\\
u(0,x)=0,\ \partial_tu(0,x)=\psi(x), & x\in\mathbb{R}^3.
\end{cases}\tag{4.22}
$$

我们希望将求解上述问题转化为求解一个一维波方程的定解问题。为此，引入 $u$ 及 $\psi$ 的球平均函数
$$
\begin{cases}
M_u(t,\rho;x)=\dfrac{1}{|\partial B_\rho(x)|}\displaystyle\int_{\partial B_\rho(x)}u(t,y)\,\mathrm{d}S_y,\\[2ex]
M_\psi(\rho;x)=\dfrac{1}{|\partial B_\rho(x)|}\displaystyle\int_{\partial B_\rho(x)}\psi(y)\,\mathrm{d}S_y,
\end{cases}
$$
这里参数 $\rho>0$，$\partial B_\rho(x)$ 是 $\mathbb{R}^3$ 中以 $x$ 为心、$\rho$ 为半径的球面。相应地，
$$M_u(0,\rho;x)=0,\qquad \partial_tM_u(0,\rho;x)=M_\psi(\rho;x),$$
且
$$\lim_{\rho\to0}M_u(t,\rho;x)=u(t,x),\qquad \lim_{\rho\to0}M_\psi(\rho;x)=\psi(x).$$

因此，为求解 $u(t,x)$，仅需先求解 $M_u(t,\rho;x)$。将 $M_u(t,\rho;x)$ 视为以 $x$ 为参数、以 $(t,\rho)$ 为自变量的函数，即可推导其满足的方程。

### 引理 （球平均函数满足的方程） @112

直接计算可得
$$\partial_\rho^2M_u(t,\rho;x)=-\frac{2}{\rho}\partial_\rho M_u(t,\rho;x)+\partial_t^2M_u(t,\rho;x).\tag{4.23}$$

### 命题 （三维波方程初值为零情形的解） @112

令
$$V(t,\rho;x):=\rho M_u(t,\rho;x),\qquad (t,\rho;x)\in(0,+\infty)\times(0,+\infty)\times\mathbb{R}^3,$$
则对任意给定的 $x\in\mathbb{R}^3$，$V$ 关于 $(t,\rho)$ 在第一象限满足如下混合初边值问题：
$$
\begin{cases}
\partial_t^2V-\partial_\rho^2V=0, & (t,\rho)\in(0,+\infty)\times(0,+\infty),\\
V(0,\rho;x)=0,\ \partial_tV(0,\rho;x)=\rho M_\psi(\rho;x), & \rho\in(0,+\infty),\\
V(t,0;x)=0, & t\in(0,+\infty).
\end{cases}\tag{4.24}
$$

由 4.2.1 小节例 4.2.1 可得，对 $t>0$，
$$V(t,\rho;x)=\frac12\int_{t-\rho}^{t+\rho}rM_\psi(r;x)\,\mathrm{d}r,\qquad (t,\rho;x)\in(0,+\infty)\times(0,t]\times\mathbb{R}^3.\tag{4.25}$$
故
$$u(t,x)=\lim_{\rho\to0^+}M_u(t,\rho;x)=\lim_{\rho\to0^+}\frac{V(t,\rho;x)}{\rho}=tM_\psi(t;x)=\frac{1}{|\partial B_t(x)|}\int_{\partial B_t(x)}t\psi(y)\,\mathrm{d}S_y,\qquad (t,x)\in(0,+\infty)\times\mathbb{R}^3.\tag{4.26}$$

当 $\psi\in C^2(\mathbb{R}^3)$ 时，(4.26) 所得出的解确实满足 Cauchy 问题 (4.22)，这样就得到了该问题解的存在性。

### 定理 4.2.2 @113

设 $\varphi\in C^3(\mathbb{R}^3)$，$\psi\in C^2(\mathbb{R}^3)$，则三维波方程的 Cauchy 问题
$$
\begin{cases}
\partial_t^2u-\Delta u=0, & (t,x)\in(0,+\infty)\times\mathbb{R}^3,\\
u(0,x)=\varphi(x),\ \partial_tu(0,x)=\psi(x), & x\in\mathbb{R}^3
\end{cases}\tag{4.27}
$$
存在唯一的解
$$u(t,x)=\partial_t\left(\frac{1}{|\partial B_t(x)|}\int_{\partial B_t(x)}t\varphi(y)\,\mathrm{d}S_y\right)+\frac{1}{|\partial B_t(x)|}\int_{\partial B_t(x)}t\psi(y)\,\mathrm{d}S_y,\qquad (t,x)\in(0,+\infty)\times\mathbb{R}^3.\tag{4.28}$$

从解的表达式 (4.28) 可以看出，三维波方程的解 $u$ 在 $(t,x)$ 的取值只依赖于初值 $(\varphi,\psi)$ 以及 $\nabla\varphi$ 在 $\partial B_t(x)$ 上的取值（唯一性见 4.5 节）。对于非齐次方程 Cauchy 问题，可以利用定理 4.2.2 及齐次化原理给出解的显式表示。

## 4.2.3 二维波方程的降维法 @113

### 构造 （降维法） @113

考虑
$$
\begin{cases}
\partial_t^2u-\Delta u=0, & (t,x)\in(0,+\infty)\times\mathbb{R}^2,\\
u(0,x)=0,\ \partial_tu(0,x)=\psi(x), & x\in\mathbb{R}^2.
\end{cases}\tag{4.29}
$$

记 $\tilde{\psi}(z)=\psi(y)$，$z=(y,y_3)\in\mathbb{R}^2\times\mathbb{R}$，我们以之为初值解三维的波方程，可得
$$\tilde{u}(t,x,0)=\frac{1}{|\partial B_t(x,0)|}\int_{\partial B_t(x,0)}t\tilde{\psi}(z)\,\mathrm{d}S_z,\qquad t>0,\ x\in\mathbb{R}^2,$$
其中
$$\partial B_t(x,0)=\{z=(y,y_3):|y-x|^2+|y_3|^2=t^2\}.$$

记 $\mathrm{d}y_1\mathrm{d}y_2$ 为 $\mathrm{d}S_z$ 在二维圆盘 $D_t(x)=\{y\in\mathbb{R}^2:|y-x|<t\}$ 内的投影，则
$$\frac{\mathrm{d}y_1\mathrm{d}y_2}{\mathrm{d}S_z}=\left|\boldsymbol{e}_3\cdot\left(\frac{y-x}{y_3-0}\right)\frac{1}{t}\right|=\frac{|y_3|}{t}=\frac{\sqrt{t^2-|y-x|^2}}{t}.$$

再注意到 $n=2$ 时，$|\partial B_t(x,0)|=4\pi t^2$，$|D_t(x)|=\pi t^2$，则
$$
\begin{aligned}
\tilde{u}(t,x,0)&=\frac{1}{|\partial B_t(x,0)|}\cdot2\int_{D_t(x)}t\psi(y)\frac{t}{\sqrt{t^2-|y-x|^2}}\,\mathrm{d}y\\
&=\frac{1}{|D_t(x)|}\int_{D_t(x)}t\psi(y)\frac{t}{2\sqrt{t^2-|y-x|^2}}\,\mathrm{d}y.
\end{aligned}\tag{4.30}
$$

因 $\tilde{u}(t,x,0)$ 满足 (4.29)，故 $u(t,x)=\tilde{u}(t,x,0)$ 是 Cauchy 问题 (4.29) 的解，这样就得到了 (4.29) 的解的存在性。

### 定理 4.2.3 @114

设 $\varphi\in C^3(\mathbb{R}^2)$，$\psi\in C^2(\mathbb{R}^2)$，则二维波方程的 Cauchy 问题
$$
\begin{cases}
\partial_t^2u-\Delta u=0, & (t,x)\in(0,+\infty)\times\mathbb{R}^2,\\
u(0,x)=\varphi(x),\ \partial_tu(0,x)=\psi(x), & x\in\mathbb{R}^2
\end{cases}\tag{4.31}
$$
存在唯一的解
$$
\begin{aligned}
u(t,x)={}&\partial_t\left(\frac{1}{|D_t(x)|}\int_{D_t(x)}t\varphi(y)\frac{t}{2\sqrt{t^2-|y-x|^2}}\,\mathrm{d}y\right)\\
&+\frac{1}{|D_t(x)|}\int_{D_t(x)}t\psi(y)\frac{t}{2\sqrt{t^2-|y-x|^2}}\,\mathrm{d}y,\qquad (t,x)\in(0,+\infty)\times\mathbb{R}^2.
\end{aligned}\tag{4.32}
$$

由表达式 (4.32) 可见，二维波方程的解 $u$ 在 $(t,x)$ 处的取值只依赖于初值 $(\varphi,\psi)$ 在圆盘 $D_t(x)$ 上的取值（唯一性见 4.5 节）。

对于一般高维波方程 Cauchy 问题的求解，采用球平均法可求得奇数维问题的解，再用降维法可求得偶数维问题的解。对于非齐次方程的 Cauchy 问题，则可利用定理 4.2.3 及齐次化原理给出解的显式表示。
