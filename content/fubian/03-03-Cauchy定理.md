---
chapter: 3
chapter_title: 全纯函数积分理论
section: "3.3"
section_title: Cauchy 定理
pages: "83–89"
---

### 定理 3.16 (Goursat 定理) @83

在上一节中，作为 Green 公式的直接推论引出了 $C^1$ 全纯函数的 Cauchy 定理。Cauchy 最初于 1825 年给出的定理就是在 $C^1$ 全纯条件下得到的。约在 1884 年，法国数学家 Goursat 发现 $C^1$ 条件是多余的，只要函数全纯，Cauchy 定理就成立。

设函数 $f$ 在区域 $\Omega$ 上全纯，则对 $\Omega$ 内任何闭三角形区域 $\Delta\subset\Omega$，
$$\int_{\partial\Delta}f(z)\,\mathrm{d}z=0.$$

### 推论 3.17 (圆上的原函数) @84

圆上的全纯函数有原函数。

### 推论 3.18 (圆内闭路积分) @85

设 $f$ 是圆 $D$ 上全纯函数，则对 $D$ 内任意分段光滑闭曲线 $\gamma$，
$$\int_\gamma f(z)\,\mathrm{d}z=0.$$

### 引理 3.19 (同伦曲线的光滑性) @85

设 $\gamma_0,\gamma_1:[a,b]\to\mathbb{C}$ 是两条同伦的分段光滑曲线（定端同伦或闭曲线自由同伦），则存在同伦映射 $H:[a,b]\times[0,1]\to\mathbb{C}$，$H(t,s)=\gamma_s(t)$，使得每条曲线 $\gamma_s\ (0\le s\le 1)$ 都是分段光滑曲线。

这是一个纯拓扑结论，其中 $\gamma_s$ 可以是折线。暂不在此给出证明，读者可以作为习题自行证明。此引理保证连续函数可以在每条曲线 $\gamma_s$ 上定义积分。下面给出同伦形式的 Cauchy 定理。

### 定理 3.20 (同伦形式的 Cauchy 定理) @85

设 $\gamma_0,\gamma_1$ 是区域 $\Omega$ 内两条同伦的分段光滑曲线（定端同伦或闭曲线自由同伦），则对 $\Omega$ 上任一全纯函数 $f$，成立
$$\int_{\gamma_0}f(z)\,\mathrm{d}z=\int_{\gamma_1}f(z)\,\mathrm{d}z.$$
特别地，如果 $\gamma$ 是 $\Omega$ 中零伦的分段光滑闭曲线，则
$$\int_\gamma f(z)\,\mathrm{d}z=0.$$

### 推论 3.21 (单连通区域的 Cauchy 定理) @87

特别地，由于单连通区域内任何闭曲线必零伦，故有：单连通区域上全纯函数在其内任何分段光滑闭曲线上的积分等于 $0$。

### 推论 3.22 (原函数存在性) @87

由推论 3.13，单连通区域 $\Omega$ 上全纯函数 $f$ 在 $\Omega$ 上有原函数。

这两个推论对应于上一节定理 3.15 和定理 3.14，但去掉了其中的 $C^1$ 条件。下面的定理是去掉了 $C^1$ 条件的定理 3.11。

### 定理 3.23 (区域边界的 Cauchy 定理) @87

设 $\Omega$ 是有限条分段光滑曲线所围的区域，函数 $f$ 在 $\Omega$ 上全纯，则
$$\int_{\partial\Omega}f(z)\,\mathrm{d}z=0.$$

### 例 3.2 (同伦路径上的积分) @87

由 Cauchy 定理可知，要计算 $\Omega$ 上全纯函数 $f$ 在曲线 $\gamma$ 上的积分，如果存在 $\Omega$ 内一条和 $\gamma$ 同伦的曲线 $\gamma_0$，而 $f$ 在 $\gamma_0$ 上的积分更容易计算，则 $f$ 在 $\gamma_0$ 的积分值就是在 $\gamma$ 上的积分值。这可以简化积分计算，或将难以计算的积分变得可以计算。

计算积分 $\displaystyle\int_\gamma z\mathrm{e}^z\,\mathrm{d}z$，其中 $\gamma$ 是连接 $-1$ 和 $1$ 的分段光滑曲线。

解：由于被积函数 $z\mathrm{e}^z$ 在 $\mathbb{C}$ 全纯，而 $\mathbb{C}$ 是单连通的，$\gamma$ 在 $\mathbb{C}$ 内同伦于线段 $[-1,1]$，因而由 Cauchy 定理 3.20 知
$$\int_\gamma z\mathrm{e}^z\,\mathrm{d}z=\int_{[-1,1]}z\mathrm{e}^z\,\mathrm{d}z=\int_{-1}^{1}x\mathrm{e}^x\,\mathrm{d}x=(x-1)\mathrm{e}^x\Big|_{-1}^{1}=-\frac{2}{\mathrm{e}}.$$

### 注 (例 3.2 的结果) @87

原文最后一步写作 $-2/\mathrm{e}$；按 $(x-1)\mathrm{e}^x\big|_{-1}^{1}$ 计算，结果应为 $2/\mathrm{e}$。

### 定义 (无穷曲线上的积分) @88

设 $\gamma:[a,+\infty)\to\mathbb{C}$，$t\mapsto\gamma(t)$ 是复平面内延伸到 $\infty$ 的曲线，$f$ 是定义在 $\gamma$ 上的连续函数，则可定义 $f$ 在 $\gamma$ 上的复积分为
$$\int_\gamma f(z)\,\mathrm{d}z=\int_a^{+\infty}f(\gamma(t))\gamma'(t)\,\mathrm{d}t,$$
只要右端反常积分存在。类似定义曲线 $\gamma:(-\infty,+\infty)\to\mathbb{C}$ 上的复积分。

### 例 3.3 (水平直线上的积分) @88

对 $b>0$，记
$$\int_{-\infty+\mathrm{i}b}^{+\infty+\mathrm{i}b}f(z)\,\mathrm{d}z$$
表示函数 $f$ 在水平直线 $(-\infty+\mathrm{i}b,+\infty+\mathrm{i}b)$（方向向右）上的积分，计算复积分
$$I=\int_{-\infty+\mathrm{i}b}^{+\infty+\mathrm{i}b}\mathrm{e}^{-z^2}\,\mathrm{d}z.$$

解：水平直线 $(-\infty+\mathrm{i}b,+\infty+\mathrm{i}b)$ 的参数表示为 $\gamma(t)=t+\mathrm{i}b,\ t\in(-\infty,+\infty)$，将其代入复积分 $I$ 得
$$I=\int_{-\infty+\mathrm{i}b}^{+\infty+\mathrm{i}b}\mathrm{e}^{-z^2}\,\mathrm{d}z=\int_{-\infty}^{+\infty}\mathrm{e}^{-t^2+b^2}\mathrm{e}^{-2\mathrm{i}bt}\,\mathrm{d}t=\mathrm{e}^{b^2}\int_{-\infty}^{+\infty}\mathrm{e}^{-t^2}(\cos 2bt-\mathrm{i}\sin 2bt)\,\mathrm{d}t,$$
上式右端实部和虚部反常积分都存在，故复积分 $I$ 存在。

取 $R>0$ 充分大，作矩形 $\Gamma_R=[-R,R]+[R,R+\mathrm{i}b]+[R+\mathrm{i}b,-R+\mathrm{i}b]+[-R+\mathrm{i}b,-R]$。由于 $f(z)=\mathrm{e}^{-z^2}$ 在 $\mathbb{C}$ 全纯，由 Cauchy 定理 3.23 得
$$\int_{\Gamma_R}\mathrm{e}^{-z^2}\,\mathrm{d}z=\left(\int_{[-R,R]}+\int_{[R,R+\mathrm{i}b]}+\int_{[R+\mathrm{i}b,-R+\mathrm{i}b]}+\int_{[-R+\mathrm{i}b,-R]}\right)\mathrm{e}^{-z^2}\,\mathrm{d}z=0. \tag{3.19}$$

当 $R\to+\infty$ 时，
$$\left|\int_{[R,R+\mathrm{i}b]}\mathrm{e}^{-z^2}\,\mathrm{d}z\right|=\left|\int_0^b\mathrm{e}^{-R^2+t^2}\mathrm{e}^{-2\mathrm{i}Rt}\,\mathrm{d}t\right|\le\mathrm{e}^{-R^2}\int_0^b\mathrm{e}^{t^2}\,\mathrm{d}t\to 0.$$
同理，
$$\left|\int_{[-R+\mathrm{i}b,-R]}\mathrm{e}^{-z^2}\,\mathrm{d}z\right|\le\mathrm{e}^{-R^2}\int_0^b\mathrm{e}^{t^2}\,\mathrm{d}t\to 0.$$
而
$$\int_{[R+\mathrm{i}b,-R+\mathrm{i}b]}\mathrm{e}^{-z^2}\,\mathrm{d}z\to-\int_{-\infty+\mathrm{i}b}^{+\infty+\mathrm{i}b}\mathrm{e}^{-z^2}\,\mathrm{d}z,\qquad \int_{[-R,R]}\mathrm{e}^{-z^2}\,\mathrm{d}z\to\int_{-\infty}^{+\infty}\mathrm{e}^{-x^2}\,\mathrm{d}x,$$
故在 (3.19) 中令 $R\to+\infty$ 得
$$\int_{-\infty+\mathrm{i}b}^{+\infty+\mathrm{i}b}\mathrm{e}^{-z^2}\,\mathrm{d}z=\int_{-\infty}^{+\infty}\mathrm{e}^{-x^2}\,\mathrm{d}x=\sqrt{\pi}.$$
由此可知，反常定积分
$$\int_{-\infty}^{+\infty}\mathrm{e}^{-t^2}\cos 2bt\,\mathrm{d}t=\sqrt{\pi}\,\mathrm{e}^{-b^2}.$$
