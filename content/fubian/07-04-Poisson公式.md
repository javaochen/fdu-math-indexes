---
chapter: 7
chapter_title: 调和函数
section: "7.4"
section_title: Poisson 公式
pages: "220–221"
---

对调和函数是否也有像全纯函数那样圆上的 Cauchy 积分公式，圆内任一点的值可由圆周上的值所确定？对 Cauchy 公式直接取其实部不可取。但是，我们可以通过分式线性变换将圆内一点映成圆心。为此，我们需要调和函数的共形不变性。

### 引理 7.8 (共形不变性) @220

设 $w=\varphi(z)$ 是区域 $\Omega$ 到 $\Omega'$ 的共形映射，$u(w)$ 是区域 $\Omega'$ 上函数，$v(z)=u(\varphi(z))$，则 $u(w)$ 调和的充要条件是 $v(z)$ 调和。

### 注 (仅需全纯) @220

如果仅由 $u(z)$ 调和推出 $v(z)$ 调和，则 $\varphi(z)$ 只要全纯就可。

### 定理 7.9 (Poisson 公式) @220

设 $u(z)$ 在区域 $\Omega$ 上调和，$\overline{D(z_0,\rho)}\subset\Omega$。则对任意 $z\in D(z_0,\rho)$，
$$u(z)=\frac{1}{2\pi}\int_0^{2\pi}u(z_0+\rho\mathrm{e}^{\mathrm{i}\theta})\frac{\rho^2-|z-z_0|^2}{|\rho\mathrm{e}^{\mathrm{i}\theta}-(z-z_0)|^2}\,\mathrm{d}\theta.\tag{7.7}$$

### 注 (Poisson 核) @221

公式 (7.7) 称为调和函数 $u(z)$ 在圆 $D(z_0,\rho)$ 上的 Poisson 公式。
$$P(\zeta,z)=\frac{\rho^2-|z-z_0|^2}{|\rho\mathrm{e}^{\mathrm{i}\theta}-(z-z_0)|^2},\qquad \zeta=z_0+\rho\mathrm{e}^{\mathrm{i}\theta},$$
称为圆 $D(z_0,\rho)$ 上的 Poisson 核。Poisson 核有如下各种表达式
$$\begin{aligned}
P(\zeta,z)&=\frac{|\zeta-z_0|^2-|z-z_0|^2}{|(\zeta-z_0)-(z-z_0)|^2}\\
&=\operatorname{Re}\left(\frac{\rho\mathrm{e}^{\mathrm{i}\theta}+(z-z_0)}{\rho\mathrm{e}^{\mathrm{i}\theta}-(z-z_0)}\right)=\operatorname{Re}\left(\frac{(\zeta-z_0)+(z-z_0)}{(\zeta-z_0)-(z-z_0)}\right)\\
&=\frac{\rho^2-r^2}{\rho^2+r^2-2\rho r\cos(\varphi-\theta)},
\end{aligned}\tag{7.12}$$
这里 $\zeta=z_0+\rho\mathrm{e}^{\mathrm{i}\theta}$，$z=z_0+r\mathrm{e}^{\mathrm{i}\varphi}$。

在 Poisson 公式 (7.7) 中取 $u\equiv1$ 以及利用三角不等式，立即得到 Poisson 核的如下性质：

(1) $$\frac{1}{2\pi}\int_0^{2\pi}P(z_0+\rho\mathrm{e}^{\mathrm{i}\theta},z)\,\mathrm{d}\theta=1.$$

(2) $$\frac{\rho-|z-z_0|}{\rho+|z-z_0|}\le P(z_0+\rho\mathrm{e}^{\mathrm{i}\theta},z)\le\frac{\rho+|z-z_0|}{\rho-|z-z_0|}.$$
