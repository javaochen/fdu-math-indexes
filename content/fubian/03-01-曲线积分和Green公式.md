---
chapter: 3
chapter_title: 全纯函数积分理论
section: "3.1"
section_title: 曲线积分和 Green 公式
pages: "73–75"
---

### 定义 (曲线积分) @73

复变函数的积分主要是复曲线积分。本节将回顾二元连续函数的曲线积分。设
$$\gamma:[a,b]\to\mathbb{R}^2,\quad t\mapsto\gamma(t)=(x(t),y(t))$$
是 $\mathbb{R}^2$ 中的分段光滑曲线，$P(x,y)$，$Q(x,y)$ 是定义在 $\gamma$ 上的连续函数。对区间 $[a,b]$ 作划分
$$\Delta:\ a=t_0<t_1<\cdots<t_{n-1}<t_n=b,$$
得到曲线 $\gamma$ 上的分点 $(x_j,y_j)=(x(t_j),y(t_j))$，$j=0,1,\cdots,n$。任取 $(\xi_j,\eta_j)\in\gamma([t_{j-1},t_j])$，则微分形式 $P(x,y)\mathrm{d}x+Q(x,y)\mathrm{d}y$（简记为 $P\mathrm{d}x+Q\mathrm{d}y$）在 $\gamma$ 上的曲线积分定义为 Riemann 和的极限
$$\int_\gamma P(x,y)\,\mathrm{d}x+Q(x,y)\,\mathrm{d}y=\lim_{|\Delta|\to0}\sum_{j=1}^{n}\bigl(P(\xi_j,\eta_j)\Delta x_j+Q(\xi_j,\eta_j)\Delta y_j\bigr). \tag{3.1}$$
其中 $\Delta x_j=x_j-x_{j-1}$，$\Delta y_j=y_j-y_{j-1}$，$|\Delta|=\max\limits_{1\le j\le n}|t_j-t_{j-1}|$。上述右端 Riemann 和的极限对连续的 $P(x,y)$，$Q(x,y)$ 存在，且不依赖于划分 $\Delta$ 和 $(\xi_j,\eta_j)$ 的选取。曲线 $\gamma$ 也称为积分路径。

### 定义 (弧长积分) @73

另有 $P(x,y)$ 的弧长积分
$$\int_\gamma P(x,y)\,\mathrm{d}s=\lim_{|\Delta|\to0}\sum_{j=1}^{n}P(\xi_j,\eta_j)\sqrt{\Delta x_j^2+\Delta y_j^2}. \tag{3.2}$$

### 注 (化为定积分) @73

如果 $\gamma$ 是光滑曲线，则可转换为定积分
$$\int_\gamma P(x,y)\,\mathrm{d}x+Q(x,y)\,\mathrm{d}y=\int_a^b\bigl[P(x(t),y(t))x'(t)+Q(x(t),y(t))y'(t)\bigr]\mathrm{d}t, \tag{3.3}$$
以及
$$\int_\gamma P(x,y)\,\mathrm{d}s=\int_a^b P(x(t),y(t))\sqrt{x'(t)^2+y'(t)^2}\,\mathrm{d}t. \tag{3.4}$$

### 注 (曲线积分的性质) @74

关于曲线积分的性质，读者可参阅微积分或数学分析教材。

### 定义 (边界定向) @74

设 $\Omega$ 是复平面中有界区域，其边界 $\partial\Omega$ 由有限条分段光滑 Jordan 曲线 $\gamma_1,\cdots,\gamma_n$ 组成，称其为由有限条分段光滑曲线所围的区域。对每条边界 Jordan 曲线 $\gamma_j$，如果在其每个光滑点 $\gamma_j(t)$ 处的法向量 $\mathrm{i}\gamma_j'(t)=(-y'(t),x'(t))$ 指向区域 $\Omega$ 内部，则称该边界曲线关于区域 $\Omega$ 有正的定向。区域边界曲线具有正定向的直观解释是：当沿曲线正向移动时，区域总在曲线的左侧。以后总假定 $\partial\Omega$ 的每条边界曲线都有正的定向。微分形式 $P\mathrm{d}x+Q\mathrm{d}y$ 在 $\partial\Omega$ 上的积分规定为
$$\int_{\partial\Omega}P\,\mathrm{d}x+Q\,\mathrm{d}y=\sum_{k=1}^{n}\int_{\gamma_k}P\,\mathrm{d}x+Q\,\mathrm{d}y.$$

### 定理 3.1 (Green 公式) @74

设 $\Omega$ 为有限条分段光滑曲线所围的区域，$P(x,y)$，$Q(x,y)$ 是 $\overline{\Omega}$ 上 $C^1$ 函数（即在包含 $\overline{\Omega}$ 的某个区域上有定义且 $C^1$），则成立如下 Green 公式
$$\int_{\partial\Omega}P\,\mathrm{d}x+Q\,\mathrm{d}y=\iint_\Omega\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\mathrm{d}x\,\mathrm{d}y. \tag{3.5}$$

### 定义 (微分形式) @74

设 $\omega=P\mathrm{d}x+Q\mathrm{d}y$ 是区域 $\Omega$ 上的微分形式，这里 $P=P(x,y)$，$Q=Q(x,y)$ 都是 $\Omega$ 上连续函数。如果 $P$，$Q$ 都是 $\Omega$ 上 $C^k$ 函数，则称 $\omega$ 是一个 $C^k$ 微分形式。

### 定义 (闭形式与正合形式) @74

如果存在 $\Omega$ 上 $C^1$ 函数 $h=h(x,y)$ 使得 $\omega$ 是 $h$ 的全微分，即 $\mathrm{d}h=\omega=P\mathrm{d}x+Q\mathrm{d}y$，则称 $\omega$ 为正合形式，$h$ 称为 $\omega$ 的原函数。如果 $\omega=P\mathrm{d}x+Q\mathrm{d}y$ 是 $C^1$ 微分形式，且满足
$$\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x},$$
则称 $\omega$ 为闭形式。

### 推论 3.2 @74

设 $\Omega$ 为有限条分段光滑曲线所围的区域，若 $\omega=P\mathrm{d}x+Q\mathrm{d}y$ 是 $\overline{\Omega}$ 上的闭形式，则
$$\int_{\partial\Omega}P\,\mathrm{d}x+Q\,\mathrm{d}y=0.$$

### 定理 3.3 (Newton-Leibniz 公式) @74

如果 $\omega=P\mathrm{d}x+Q\mathrm{d}y$ 是区域 $\Omega$ 上的正合形式，$h$ 是其原函数，对 $\Omega$ 内任意分段光滑曲线 $\gamma:[a,b]\to\Omega$，$t\mapsto\gamma(t)=(x(t),y(t))$，则如下 Newton-Leibniz 公式成立
$$\int_\gamma P(x,y)\,\mathrm{d}x+Q(x,y)\,\mathrm{d}y=h(\gamma(b))-h(\gamma(a)). \tag{3.6}$$

### 注 (积分与路径无关) @75

由上述定理知，正合形式沿曲线的积分只依赖于曲线的起点和终点，和积分路径无关。此时，若记 $(x_0,y_0)=\gamma(a)$，$(x_1,y_1)=\gamma(b)$，上述曲线积分可记为
$$\int_\gamma P\,\mathrm{d}x+Q\,\mathrm{d}y=\int_{(x_0,y_0)}^{(x_1,y_1)}P\,\mathrm{d}x+Q\,\mathrm{d}y.$$
反之，如果 $\Omega$ 上的曲线积分 $\int_\gamma\omega=\int_\gamma P\mathrm{d}x+Q\mathrm{d}y$ 只依赖于曲线的起点和终点，和积分路径无关，则对给定 $(x_0,y_0)\in\Omega$，函数
$$h(x,y)=\int_{(x_0,y_0)}^{(x,y)}P\,\mathrm{d}x+Q\,\mathrm{d}y,\qquad (x,y)\in\Omega \tag{3.7}$$
定义了 $\Omega$ 上的 $C^1$ 函数，且 $\mathrm{d}h=P\mathrm{d}x+Q\mathrm{d}y$。即 $\omega=P\mathrm{d}x+Q\mathrm{d}y$ 是正合形式。

### 注 (闭曲线积分) @75

另外，若 $\omega=P\mathrm{d}x+Q\mathrm{d}y$ 是区域 $\Omega$ 上正合形式，由 Newton-Leibniz 公式，其在 $\Omega$ 内任何闭曲线上的积分等于 $0$。反之，若对任何闭曲线积分等于 $0$，则对 $\Omega$ 内连接任意给定两点 $(x_0,y_0)$ 和 $(x_1,y_1)$ 的两条曲线 $\gamma_1$ 和 $\gamma_2$，有
$$\int_{\gamma_1}P\,\mathrm{d}x+Q\,\mathrm{d}y=\int_{\gamma_2}P\,\mathrm{d}x+Q\,\mathrm{d}y,$$
即积分与路径无关。

### 推论 3.4 @75

区域 $\Omega$ 上微分形式 $\omega=P\mathrm{d}x+Q\mathrm{d}y$ 是正合形式的充要条件是下列两者之一成立：

(1) $\Omega$ 上曲线积分 $\int_\gamma P\mathrm{d}x+Q\mathrm{d}y$ 只依赖于曲线的起点和终点，和积分路径无关。

(2) 对 $\Omega$ 中任何分段光滑闭曲线 $\gamma$，积分
$$\int_\gamma P\,\mathrm{d}x+Q\,\mathrm{d}y=0.$$

### 注 (正合与闭形式) @75

容易验证，一个 $C^1$ 的正合形式一定是闭形式，而闭形式未必是正合形式。但如果区域是单连通区域，则有下面的定理。

### 定理 3.5 @75

设 $\Omega$ 是单连通区域，$\omega=P\mathrm{d}x+Q\mathrm{d}y$ 是 $\Omega$ 上 $C^1$ 微分形式，则 $\omega$ 为正合形式的充要条件是 $\omega$ 为闭形式。
