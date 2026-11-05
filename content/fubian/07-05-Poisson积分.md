---
chapter: 7
chapter_title: 调和函数
section: "7.5"
section_title: Poisson 积分
pages: "222–226"
---

### 定义 (Poisson 积分) @222

问题：给定圆周 $C(z_0,\rho)=\{z:|z-z_0|=\rho\}$ 上连续函数 $\varphi(\zeta)$，能否找到 $D(z_0,\rho)$ 上调和函数 $u(z)$，使得当 $z\to\zeta$ 时 $u(z)\to\varphi(\zeta)$？上述问题称为圆上以 $\varphi(\zeta)$ 为边值的 Dirichlet 问题。

设 $\varphi(\zeta)$ 是圆周 $C(z_0,\rho)$ 上有界、分段连续函数，定义
$$u_\varphi(z)=\frac{1}{2\pi}\int_0^{2\pi}\varphi(z_0+\rho e^{i\theta})P(z_0+\rho e^{i\theta},z)\,d\theta,\qquad z\in D(z_0,\rho) \tag{7.16}$$
则称 $u_\varphi(z)$ 为 $\varphi(\zeta)$ 在 $D(z_0,\rho)$ 上的 Poisson 积分。其中 $P$ 是 Poisson 核，当 $z=z_0+re^{i\phi}$ 时有
$$P(z_0+\rho e^{i\theta},z)=\frac{\rho^2-r^2}{\rho^2+r^2-2\rho r\cos(\phi-\theta)}.$$
令
$$f_\varphi(z)=\frac{1}{2\pi}\int_0^{2\pi}\varphi(z_0+\rho e^{i\theta})\frac{\rho e^{i\theta}+(z-z_0)}{\rho e^{i\theta}-(z-z_0)}\,d\theta+ic,\qquad z\in D(z_0,\rho). \tag{7.17}$$
和定理 7.10 中证明 $f_u(z)$ 全纯一样，$f_\varphi(z)$ 是 $D(z_0,\rho)$ 上全纯函数。因此 $u_\varphi(z)=\operatorname{Re}f_\varphi(z)$ 是 $D(z_0,\rho)$ 上的调和函数。

### 定理 7.11 (Poisson 积分边值性质) @223

设 $\varphi$ 是 $C(z_0,\rho)$ 上有界、分段连续函数。如果 $\varphi(\zeta)$ 在 $\zeta_0\in C(z_0,\rho)$ 处连续，则 $\varphi(\zeta)$ 的 Poisson 积分 $u_\varphi(z)$ 满足
$$\lim_{z\to\zeta_0}u_\varphi(z)=\varphi(\zeta_0).$$

如果 $\varphi(z)$ 在 $C(z_0,\rho)$ 上连续，则 $\varphi$ 的 Poisson 积分 $u_\varphi$ 在 $D(z_0,\rho)$ 上调和，由定理 7.11，$u_\varphi$ 还在 $\overline{D(z_0,\rho)}$ 上连续，且满足边值条件 $u_\varphi(\zeta)=\varphi(\zeta)$，$\zeta\in C(z_0,\rho)$。由最大、最小值原理，满足上述边值条件的调和函数是唯一的。

### 定理 7.12 (调和函数等价定义) @224

函数 $u(z)$ 在区域 $\Omega$ 上调和的充要条件是 $u(z)$ 在 $\Omega$ 上连续且满足均值性质。

### 注 (局部均值性质) @224

由于函数的调和性是一个局部性质，从上述定理的证明中可以看出，$u(z)$ 只要求满足局部均值性质就可以得到 $u(z)$ 是调和函数。这里局部均值性质是指：对任意 $z_0\in\Omega$，存在 $\rho>0$，使得 $D(z_0,\rho)\subset\Omega$，且对任意 $0<r<\rho$，$u(z)$ 在 $D(z_0,r)$ 上满足均值性质。

### 定理 7.13 (调和函数序列) @224

设 $\{u_n(z)\}$ 是区域 $\Omega$ 上调和的函数序列，则

(1) 如果 $\{u_n(z)\}$ 在 $\Omega$ 上内闭一致收敛于函数 $u(z)$，则 $u(z)$ 在 $\Omega$ 上调和。

(2) 如果 $\{u_n(z)\}$ 在 $\Omega$ 上内闭一致有界，则存在子序列 $\{u_{n_k}(z)\}$ 在 $\Omega$ 上内闭一致收敛。

### 定理 7.14 (Harnack 定理) @225

设 $\{u_n(z)\}$ 是区域 $\Omega$ 上单调增加调和函数序列，如果存在 $z_0\in\Omega$ 使得 $\{u_n(z_0)\}$ 收敛，则 $\{u_n(z)\}$ 在 $\Omega$ 上内闭一致收敛。

下面这个不等式称为 Harnack 不等式：如果函数 $u(z)$ 在 $D(z_0,\rho)$ 上调和，且 $u(z)\ge 0$，则对任意 $0<r<\rho$ 以及 $z\in D(z_0,r)$，
$$\frac{\rho-r}{\rho+r}u(z_0)\le u(z)\le\frac{\rho+r}{\rho-r}u(z_0). \tag{7.22}$$
