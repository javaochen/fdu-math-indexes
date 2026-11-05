---
chapter: 8
chapter_title: Dirichlet 问题
section: "8.4"
section_title: Green 函数
pages: "235–239"
---

### 定义 (Green 函数定义) @235

设区域 $\Omega\subset\mathbb{C}$，$z_0\in\Omega$，关于变量 $z$ 的函数 $g(z,z_0)$ 满足

(1) $g(z,z_0)$ 是 $\Omega\setminus\{z_0\}$ 上的正调和函数，

(2) $z_0$ 是 $g(z,z_0)$ 的对数奇点，且当 $z\to z_0$ 时，$g(z,z_0)\sim\log\dfrac{1}{|z-z_0|}$，

(3) 如果有另一函数 $h(z,z_0)$ 满足 (1)，(2)，则 $h(z,z_0)\ge g(z,z_0)$，

则称 $g(z,z_0)$ 是 $\Omega$ 上以 $z_0$ 为奇点（极点）的 Green 函数。

条件 (2) 等价于 $z_0$ 是 $g(z,z_0)+\log|z-z_0|$ 的可去奇点，即在 $\Omega$ 上调和的。

### 定理 8.8 (Green 函数存在性) @236

设 $\Omega$ 是 $\mathbb{C}$ 中有界正则区域，则对任意 $z_0\in\Omega$，$\Omega$ 上以 $z_0$ 为奇点的 Green 函数 $g(z,z_0)$ 存在，且当 $z\to\zeta\in\partial\Omega$ 时，$g(z,z_0)\to0$。

### 例 (单位圆上的Green函数) @236

$\mathbb{D}$ 上以 $0$ 为奇点的 Green 函数是 $\log\dfrac{1}{|z|}$。

### 例 (圆上的Green函数) @236

圆 $D(c,\rho)$ 上以 $z_0\in D(c,\rho)$ 为奇点的 Green 函数为
$$g(z,z_0)=-\log\left|\frac{\rho(z-z_0)}{\rho^2-\overline{(z_0-c)}(z-c)}\right|. \tag{8.9}$$

对一般区域，Green 函数未必存在。例如，对任意 $z_0\in\mathbb{C}$，区域 $\mathbb{C}$ 上以 $z_0$ 为奇点的 Green 函数不存在。假设存在这样的 Green 函数 $g(z,z_0)$，则 $u(z)=g(z,z_0)+\log|z-z_0|$ 是 $\mathbb{C}$ 上调和函数，当 $|z|\to\infty$，$u(z)\to+\infty$。因此，当 $|z|=R>0$ 充分大时，$u(z)\ge u(z_0)$。这样，$u(z)$ 在 $D(0,R)$ 内部将取到最小值。矛盾。

但是，如果 Green 函数存在，则条件 (3) 保证了其唯一性。

### 定理 8.9 (共形不变性) @237

设 $\varphi(z)$ 是 $\Omega$ 到 $\Omega'$ 的共形映射，$z_0\in\Omega$，$w_0=\varphi(z_0)\in\Omega'$。那么，$\Omega'$ 上 Green 函数存在的充要条件是 $\Omega$ 上的 Green 函数存在。且如果用 $g_\Omega(z,z_0)$ 和 $g_{\Omega'}(w,w_0)$ 分别表示 $\Omega$ 和 $\Omega'$ 上 Green 函数，则
$$g_\Omega(z,z_0)=g_{\Omega'}(\varphi(z),\varphi(z_0)).$$

### 推论 8.10 @237

如果 $\Omega\subset\mathbb{C}$ 是单连通区域，且 $\Omega\ne\mathbb{C}$，则 $\Omega$ 上以 $z_0\in\Omega$ 为奇点的 Green 函数 $g(z,z_0)$ 存在。且当 $z\to\zeta\in\partial\Omega$ 时，$g(z,z_0)\to0$。

对于一般区域 $\Omega\subset\mathbb{C}$，存在有界正则区域序列 $\Omega_n$，使得 $\Omega_n\subset\Omega_{n+1}$，$\bigcup_n\Omega_n=\Omega$。例如，取 $\Omega_n=\{z\in\Omega:\operatorname{dist}(z,\partial\Omega)>1/n,\,|z|<n\}$。对任意 $z_0\in\Omega$，当 $n$ 充分大时，有 $z_0\in\Omega_n$。记 $g_n(z,z_0)$ 为 $\Omega_n$ 上以 $z_0$ 为奇点的 Green 函数，那么 $u_n(z)=g_n(z,z_0)+\log|z-z_0|$ 是 $\Omega_n$ 上调和的。由于 $\Omega_n\subset\Omega_{n+1}$，得 $0=g_n(z,z_0)\le g_{n+1}(z,z_0)$，$z\in\partial\Omega_n$。因此，$u_n(z)\le u_{n+1}(z)$，$z\in\partial\Omega_n$。由最大值原理，$u_n(z)\le u_{n+1}(z)$，$z\in\Omega_n$，即 $\{u_n(z)\}$ 是单调递增序列。由 Harnack 定理，$\{u_n(z)\}$ 或者内闭一致收敛于 $\Omega$ 上的调和函数 $u(z)$，或者内闭一致趋于 $+\infty$。对于前者，容易验证
$$g(z,z_0)=\log\frac{1}{|z-z_0|}+u(z) \tag{8.10}$$
为 $\Omega$ 上 Green 函数；对于后者，我们说区域 $\Omega$ 上不存在 Green 函数。上述定义不依赖于区域列 $\Omega_n$ 的选取。

### 注 8.11 @238

区域 $\Omega$ 上是否存在 Green 函数是区域的特性，和 Green 函数的奇点无关。即，如果对某个 $z_0\in\Omega$，$g(z,z_0)$ 存在，那么，对任意 $z_0\in\Omega$，$g(z,z_0)$ 都存在。

### 注 8.12 @238

如果 $\Omega$ 是有界区域，则 Green 函数存在。且如果 $u(z)$ 是 $\Omega$ 上关于边界函数 $\varphi(\zeta)=\log|\zeta-z_0|$ 的 Perron 函数，则 $\Omega$ 的 Green 函数为
$$g(z,z_0)=\frac{1}{|z-z_0|}+u(z).$$

### 注 8.13 @238

Green 函数 $g(z,w)$ 关于变量 $w\in\Omega$ 调和，且有对称性 $g(z,w)=g(w,z)$，$z,w\in\Omega$。

如果区域的边界比较光滑，利用 Green 函数可给出 Dirichlet 问题的解的表达式。在下面，我们都假定 $\Omega$ 是由有限条全纯曲线所围的区域。

对任意 $\zeta\in\partial\Omega$，Green 函数 $g(z,z_0)$ 在 $D(\zeta,r)\cap\Omega$ 内有共轭调和函数 $v(z)$ 使得 $f(z)=g(z,z_0)+\mathrm{i}v(z)$ 全纯。由于当 $z\to\partial\Omega$ 时，Green 函数 $g(z,z_0)\to0$，即 $\operatorname{Re}f(z)\to0$。由 Schwarz 对称原理，$f(z)$ 可以解析延拓到 $D(\zeta,r)$，从而其实部 $g(z,z_0)$ 可延拓成 $D(\zeta,r)$ 上调和函数。由此，$g(z,z_0)$ 在 $\partial\Omega$ 的某个邻域内调和。

### 引理 8.14 @239

设 $u(z),v(z)$ 在 $\overline{\Omega}$ 有连续 $2$ 阶导数，则
$$\int_{\partial\Omega}u(z)d^*v(z)-v(z)d^*u(z)=\iint_\Omega\left[u(z)\Delta v(z)-v(z)\Delta u(z)\right]dxdy. \tag{8.11}$$
特别地，如果 $u(z),v(z)$ 在 $\Omega$ 上调和，则
$$\int_{\partial\Omega}u(z)d^*v(z)-v(z)d^*u(z)=0,\qquad\int_{\partial\Omega}d^*u(z)=0. \tag{8.12}$$

### 定理 8.15 @239

设 $u(z)$ 是 $\Omega$ 上调和函数，且在 $\overline{\Omega}$ 上有连续二阶导数，设 $g(z,z_0)$ 是 $\Omega$ 上以 $z_0\in\Omega$ 为奇点的 Green 函数，则有如下 Green-Poisson 公式：
$$u(z_0)=-\frac{1}{2\pi}\int_{\partial\Omega}u(\zeta)d^*g(\zeta,z_0). \tag{8.13}$$
