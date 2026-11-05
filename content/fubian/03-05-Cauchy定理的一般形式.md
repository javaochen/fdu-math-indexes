---
chapter: 3
chapter_title: 全纯函数积分理论
section: "3.5"
section_title: Cauchy 定理的一般形式
pages: "98–105"
---

本节首先考虑辐角在曲线上的连续变化。

### 引理 3.37 (局部辐角函数) @98

对任意给定的 $z_0\in\mathbb{C}\setminus\{0\}$ 以及 $0<r<|z_0|$。给定 $\arg z_0=\theta_0$，则在 $D(z_0,r)$ 上存在 $C^1$ 辐角函数 $\arg z$，使得 $\arg z_0=\theta_0$。

### 定理 3.38 (连续辐角函数) @98

设 $\gamma:[a,b]\to\mathbb{C}$ 是复平面上曲线，$c\notin\gamma$。则对每个给定的 $t\in[a,b]$ 可取一个辐角值 $\arg(\gamma(t)-c)$ 使得 $\theta(t)=\arg(\gamma(t)-c)$ 是 $[a,b]$ 上连续函数。称其为 $\gamma$ 上关于 $c$ 的**连续辐角函数**。如果 $\tilde{\theta}(t)$ 是 $\gamma$ 上关于 $c$ 的另一连续辐角函数，则存在 $k\in\mathbb{Z}$ 使得 $\tilde{\theta}(t)-\theta(t)=2k\pi$，$t\in[a,b]$。

又若 $\gamma$ 是光滑曲线，上述 $\gamma$ 上的连续辐角函数 $\theta(t)=\arg(\gamma(t)-c)$ 是 $C^1$ 函数。

### 注 (辐角连续改变量) @99

如果取定 $\arg(\gamma(a)-c)=\theta_0$，那么满足此条件且在 $\gamma$ 上连续的辐角函数 $\arg(\gamma(t)-c)$ 是唯一的。如果取定了一个 $\gamma$ 上的连续辐角函数 $\arg(\gamma(t)-c)$，那么 $\gamma$ 上任一关于 $c$ 的连续辐角函数可以表示为
$$\arg(\gamma(t)-c)+2k\pi,\qquad k\in\mathbb{Z}.$$
因此，当参数 $t$ 从 $a$ 连续变化到 $b$ 时，$\arg(\gamma(t)-c)$ 的连续改变量
$$\Delta_\gamma\arg(z-c)=\arg(\gamma(b)-c)-\arg(\gamma(a)-c)$$
和 $\gamma$ 上关于 $c$ 的连续辐角函数的选取无关，是仅和曲线 $\gamma$ 以及 $c$ 有关的量，称为 $\gamma$ 关于 $c$ 的**辐角连续改变量**。

### 定义 (曲线的绕数) @99

如果 $\gamma:[a,b]\to\mathbb{C}$ 是一条闭曲线，$\gamma(b)=\gamma(a)$。于是 $\arg(\gamma(b)-c)-\arg(\gamma(a)-c)=2k\pi$，这里 $k$ 是某个整数。因此
$$n(\gamma,c)=\frac{1}{2\pi}\Delta_\gamma\arg(z-c)\tag{3.32}$$
是整数，称为曲线 $\gamma$ 关于 $c\notin\gamma$ 的**绕数**。其直观含义是闭曲线 $\gamma$ 围绕点 $c\notin\gamma$ 的圈数（逆时针方向为正）。显然有 $n(\gamma,c)=n(\gamma-c,0)$，这里 $\gamma-c$ 是参数表示为 $\gamma(t)-c$ 的曲线。

### 定理 3.39 (绕数的积分表示) @99

设 $\gamma$ 是复平面中分段光滑闭曲线，$c\notin\gamma$，则 $\gamma$ 关于 $c$ 的绕数由如下积分表示
$$n(\gamma,c)=\frac{1}{2\pi\mathrm{i}}\int_\gamma\frac{1}{z-c}\mathrm{d}z.\tag{3.33}$$

### 注 (绕数的基本性质) @100

利用积分性质，绕数有如下性质：

(1) 设 $\gamma$ 是分段光滑闭曲线，如果 $c\notin\gamma$，则 $n(\gamma^-,c)=-n(\gamma,c)$；

(2) 设 $\gamma_1,\gamma_2$ 都是分段光滑闭曲线，如果 $c\notin\gamma_1+\gamma_2$，则 $n(\gamma_1+\gamma_2,c)=n(\gamma_1,c)+n(\gamma_2,c)$。

### 推论 3.40 (同伦曲线的绕数) @100

如果 $\mathbb{C}\setminus\{c\}$ 内的两条分段光滑闭曲线 $\gamma_0,\gamma_1$ 同伦，则绕数 $n(\gamma_0,c)=n(\gamma_1,c)$。

### 引理 3.41 (整值连续函数) @100

连续函数在连通集上只取整数值，则这个连续函数为常值函数。

### 定理 3.42 (绕数的常值性) @101

设 $\gamma$ 是闭曲线，则绕数 $n(\gamma,c)$ 作为 $c$ 的函数在 $\mathbb{C}\setminus\gamma$ 的每个连通分支上为常数。特别地，在 $\mathbb{C}\setminus\gamma$ 的无界分支上等于 $0$。

### 例 3.6 (Jordan 曲线的绕数) @101

设 $\gamma$ 是一条分段光滑 Jordan 曲线，则对 $\gamma$ 内部区域中的点 $c$，$n(\gamma,c)=\pm1$；对 $\gamma$ 外部区域中的点 $c$，$n(\gamma,c)=0$。

### 注 (闭链及其积分) @101

设 $\gamma_1,\gamma_2,\cdots,\gamma_n$ 是有限条分段光滑闭曲线，$k_1,k_2,\cdots,k_n\in\mathbb{Z}$。称形式和
$$\Gamma=\sum_{j=1}^{n}k_j\gamma_j=k_1\gamma_1+k_2\gamma_2+\cdots+k_n\gamma_n$$
为一条**闭链**。为方便，也用 $\Gamma$ 表示集合 $\bigcup_{j=1}^{n}\gamma_j$。例如，如果 $\Omega$ 是由有限条分段光滑曲线所围区域，则 $\partial\Omega$ 是一条闭链。

对两条闭链 $\Gamma=\sum_{j=1}^{n}k_j\gamma_j$ 和 $\Lambda=\sum_{j=1}^{m}l_j\lambda_j$，定义它们的和为
$$\Gamma+\Lambda=\sum_{j=1}^{n}k_j\gamma_j+\sum_{j=1}^{m}l_j\lambda_j.$$
显然，闭链的和也是闭链。定义闭链 $\Gamma$ 上连续函数 $h$ 的积分
$$\int_\Gamma h(z)\mathrm{d}z=\sum_{j=1}^{n}k_j\int_{\gamma_j}h(z)\mathrm{d}z.$$
由此，可以定义闭链 $\Gamma$ 关于 $c\notin\Gamma$ 的绕数
$$n(\Gamma,c)=\sum_{j=1}^{n}k_jn(\gamma_j,c)=\frac{1}{2\pi\mathrm{i}}\int_\Gamma\frac{1}{z-c}\mathrm{d}z.$$
显然，引理 3.41 和定理 3.42 对闭链也成立。设 $\Omega$ 是有分段光滑曲线所围的区域，则 $\partial\Omega$ 是闭链。类似于例 3.6，可以验证，如果 $c\in\Omega$，则 $n(\partial\Omega,c)=1$；如果 $c\notin\overline{\Omega}$，则 $n(\partial\Omega,c)=0$。

### 定理 3.43 (Cauchy 定理的一般形式) @102

设 $f$ 是区域 $\Omega$ 上全纯函数，$\Gamma$ 是 $\Omega$ 中闭链。如果对任意 $c\notin\Omega$ 都有 $n(\Gamma,c)=0$，则
$$\int_\Gamma f(z)\mathrm{d}z=0,\tag{3.35}$$
以及
$$\frac{1}{2\pi\mathrm{i}}\int_\Gamma\frac{f(\zeta)}{\zeta-z}\mathrm{d}\zeta=n(\Gamma,z)f(z),\qquad z\in\Omega\setminus\Gamma.\tag{3.36}$$

### 注 (辅助二元函数) @102

对 $\Omega$ 上全纯函数 $f$，定义 $\Omega\times\Omega$ 上的二元复变函数
$$g(w,z)=\begin{cases}\dfrac{f(w)-f(z)}{w-z}, & w\neq z,\\[2mm] f'(z), & w=z.\end{cases}\tag{3.37}$$

### 引理 3.44 (辅助函数的连续性) @102

由 (3.37) 给出的函数 $g(w,z)$ 是 $\Omega\times\Omega$ 上连续函数，且对固定 $w\in\Omega$，$g(w,z)$ 是关于 $z\in\Omega$ 的全纯函数。

### 注 (与其他 Cauchy 定理的关系) @104

上述定理是非常一般的 Cauchy 定理。例如，对于由有限条分段光滑曲线所围的区域 $\Omega$，$\partial\Omega$ 作为区域 $\Omega'\supset\overline{\Omega}$ 中的闭链满足定理 3.43 条件，故关于边界的 Cauchy 定理和 Cauchy 积分公式（定理 3.23，定理 3.24）都是定理 3.43 的特殊情形。如果区域 $\Omega$ 内两条闭曲线 $\gamma_0,\gamma_1$ 同伦，则对任意 $c\notin\Omega$，$n(\gamma_0,c)=n(\gamma_1,c)$，从而闭链 $\gamma_1+\gamma_0^{-1}$ 满足定理 3.43 条件，故同伦形式的 Cauchy 定理 3.20 也是定理 3.43 的特殊情形。

### 注 (同调与零调) @105

设 $\Gamma_1,\Gamma_2$ 是区域 $\Omega$ 中的两条闭链，如果对任意 $c\notin\Omega$，都有 $n(\Gamma_1,c)=n(\Gamma_2,c)$，则称闭链 $\Gamma_1,\Gamma_2$ 在 $\Omega$ 内**同调**，记为 $\Gamma_1\approx\Gamma_2$。如果对任意 $c\notin\Omega$，$\Omega$ 中闭链 $\Gamma$ 满足 $n(\Gamma,c)=0$，则称闭链 $\Gamma$ 在 $\Omega$ 中**零调**。

### 定理 3.43′ (零调形式的 Cauchy 定理) @105

如果区域 $\Omega$ 中闭链 $\Gamma$ 零调，则对 $\Omega$ 上全纯函数 $f$，式 (3.35) 和 (3.36) 成立。

### 定理 3.45 (同调闭链的积分) @105

若区域 $\Omega$ 中闭链 $\Gamma_1,\Gamma_2$ 同调，则对 $\Omega$ 上任意全纯函数 $f$，
$$\int_{\Gamma_1}f(z)\mathrm{d}z=\int_{\Gamma_2}f(z)\mathrm{d}z.$$
