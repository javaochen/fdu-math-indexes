---
chapter: 3
chapter_title: 全纯函数积分理论
section: "3.4"
section_title: Cauchy 积分公式
pages: "90–97"
---

### 定理 3.24 (Cauchy 积分公式) @90

设 $\Omega$ 是由有限条分段光滑闭曲线所围的区域，函数 $f$ 在 $\overline{\Omega}$ 上全纯，则
$$f(z)=\frac{1}{2\pi\mathrm{i}}\int_{\partial\Omega}\frac{f(\zeta)}{\zeta-z}\,\mathrm{d}\zeta,\qquad z\in\Omega. \tag{3.20}$$

### 注 (圆上的积分公式) @90

特别地，如果函数 $f$ 在区域 $\Omega$ 上全纯，闭圆 $\overline{D(z_0,r)}\subset\Omega$，则有圆上的 Cauchy 积分公式
$$f(z)=\frac{1}{2\pi\mathrm{i}}\int_{|\zeta-z_0|=r}\frac{f(\zeta)}{\zeta-z}\,\mathrm{d}\zeta,\qquad z\in D(z_0,r). \tag{3.22}$$
特别地，当 $z=z_0$ 时，若令 $\zeta=z_0+r\mathrm{e}^{\mathrm{i}\theta}$，有
$$f(z_0)=\frac{1}{2\pi\mathrm{i}}\int_{|\zeta-z_0|=r}\frac{f(\zeta)}{\zeta-z_0}\,\mathrm{d}\zeta=\frac{1}{2\pi}\int_0^{2\pi}f(z_0+r\mathrm{e}^{\mathrm{i}\theta})\,\mathrm{d}\theta. \tag{3.23}$$
上式表明全纯函数在圆心的值等于其在圆周上值的积分平均，上式称为全纯函数的**均值公式**。

### 推论 3.25 @91

设函数 $f$ 在闭圆 $\overline{D(z_0,r)}$ 上连续，在圆 $D(z_0,r)$ 上全纯，则公式 (3.22) 成立。

### 注 (条件的减弱) @91

一般地，对分段光滑曲线所围区域 $\Omega$，Cauchy 积分公式成立的条件“$f$ 在 $\overline{\Omega}$ 上全纯”也可减弱为“$f$ 在 $\overline{\Omega}$ 上连续，在 $\Omega$ 上全纯”。将在后面给出证明。

### 引理 3.26 (积分与极限交换) @91

设 $\gamma$ 是分段光滑曲线，$\{f_t\}$，$t\in(a,b)$，是 $\gamma$ 上一族连续函数，且当 $t\to b$ 时 $\{f_t\}$ 一致收敛于函数 $f$，则
$$\lim_{t\to b}\int_\gamma f_t(z)\,\mathrm{d}z=\int_\gamma f(z)\,\mathrm{d}z. \tag{3.24}$$

### 引理 3.27 (Cauchy 型积分) @91

设 $\gamma$ 是分段光滑曲线，$\varphi$ 是 $\gamma$ 上连续函数，则对正整数 $n$，
$$f(z)=\int_\gamma\frac{\varphi(\zeta)}{(\zeta-z)^n}\,\mathrm{d}\zeta \tag{3.25}$$
是 $\mathbb{C}\setminus\gamma$ 上的全纯函数，且
$$f'(z)=n\int_\gamma\frac{\varphi(\zeta)}{(\zeta-z)^{n+1}}\,\mathrm{d}\zeta. \tag{3.26}$$

### 推论 3.28 @92

Cauchy 型积分 (3.25) 所定义的函数 $f$ 在 $\mathbb{C}\setminus\gamma$ 上具有任意阶导数，且任意阶导函数都是 $\mathbb{C}\setminus\gamma$ 上全纯函数。

### 定理 3.29 (导数的 Cauchy 积分公式) @92

设 $\Omega$ 是由有限条分段光滑闭曲线所围的区域，函数 $f$ 在 $\overline{\Omega}$ 上全纯，则 $f$ 在 $\Omega$ 内有任意阶导数，且
$$f^{(n)}(z)=\frac{n!}{2\pi\mathrm{i}}\int_{\partial\Omega}\frac{f(\zeta)}{(\zeta-z)^{n+1}}\,\mathrm{d}\zeta,\qquad z\in\Omega. \tag{3.27}$$

### 推论 3.30 @92

设函数 $f$ 在区域 $\Omega$ 上全纯，则 $f$ 在 $\Omega$ 上具有任意阶导数，且其任意阶导函数都在 $\Omega$ 上全纯。

### 注 (圆上的高阶公式) @93

类似于推论 3.25，当函数 $f$ 在闭圆 $\overline{D(z_0,r)}$ 上连续，在圆 $D(z_0,r)$ 上全纯时，
$$f^{(n)}(z)=\frac{n!}{2\pi\mathrm{i}}\int_{|\zeta-z_0|=r}\frac{f(\zeta)}{(\zeta-z)^{n+1}}\,\mathrm{d}\zeta,\qquad z\in D(z_0,r). \tag{3.28}$$

### 例 3.4 (两个积分) @93

计算下列积分：

1. $$\int_{|z|=2}\frac{z^2}{z-1}\,\mathrm{d}z=2\pi\mathrm{i}\left.z^2\right|_{z=1}=2\pi\mathrm{i}.$$
2. $$\int_{|z|=2\pi}\frac{z^2\sin z}{(z-\pi)^3}\,\mathrm{d}z=\frac{2\pi\mathrm{i}}{2!}\left.(z^2\sin z)''\right|_{z=\pi}=\pi\mathrm{i}\cdot4\pi\cos\pi=-4\pi^2\mathrm{i}.$$

### 例 3.5 (有理分解) @93

计算积分
$$\frac{1}{2\pi\mathrm{i}}\int_{|z|=2}\frac{\mathrm{e}^z}{(z-1)z^2}\,\mathrm{d}z.$$

解：利用有理分解
$$\frac{1}{(z-1)z^2}=\frac{1}{z-1}-\frac{z+1}{z^2},$$
得
$$\frac{1}{2\pi\mathrm{i}}\int_{|z|=2}\frac{\mathrm{e}^z}{(z-1)z^2}\,\mathrm{d}z=\frac{1}{2\pi\mathrm{i}}\int_{|z|=2}\frac{\mathrm{e}^z}{z-1}\,\mathrm{d}z-\frac{1}{2\pi\mathrm{i}}\int_{|z|=2}\frac{\mathrm{e}^z(z+1)}{z^2}\,\mathrm{d}z.$$
由 Cauchy 积分公式，
$$\frac{1}{2\pi\mathrm{i}}\int_{|z|=2}\frac{\mathrm{e}^z}{z-1}\,\mathrm{d}z=\mathrm{e},\qquad \frac{1}{2\pi\mathrm{i}}\int_{|z|=2}\frac{\mathrm{e}^z(z+1)}{z^2}\,\mathrm{d}z=\left.\frac{\mathrm{d}\,\mathrm{e}^z(z+1)}{\mathrm{d}z}\right|_{z=0}=2.$$
因此，
$$\frac{1}{2\pi\mathrm{i}}\int_{|z|=2}\frac{\mathrm{e}^z}{(z-1)z^2}\,\mathrm{d}z=\mathrm{e}-2.$$

### 定理 3.31 (Cauchy 不等式) @93

设函数 $f$ 在闭圆 $\overline{D(z_0,R)}$ 上连续，在 $D(z_0,R)$ 上全纯，如果对任意 $z\in\overline{D(z_0,R)}$，都有 $|f(z)|\leq M$，则
$$\left|f^{(n)}(z_0)\right|\leq\frac{n!M}{R^n}. \tag{3.29}$$
特别地
$$\left|f'(z_0)\right|\leq\frac{M}{R}. \tag{3.30}$$

### 定理 3.32 (Liouville 定理) @94

设 $f$ 是整个复平面 $\mathbb{C}$ 上的全纯函数，如果 $f$ 在 $\mathbb{C}$ 上有界，则 $f$ 是常值函数。

### 注 (整函数) @94

整个复平面 $\mathbb{C}$ 上全纯的函数称为**整函数**。Liouville 定理即是说：有界整函数必为常数。

### 注 (Picard 小定理) @94

有一个比 Liouville 定理更为深刻的定理。**Picard 小定理**：若整函数 $f$ 不取两个不同的复数值，即存在 $w_1,w_2\in\mathbb{C}$，$w_1\neq w_2$，使得对任意 $z\in\mathbb{C}$，$f(z)\neq w_1,w_2$，则 $f$ 是常值函数。

这个定理的证明超出了本书知识范围，此处不给出证明。

### 注 (代数基本定理) @94

利用 Liouville 定理，可以给出代数基本定理的一个证明：设 $p(z)=a_nz^n+a_{n-1}z^{n-1}+\cdots+a_1z+a_0$（$a_n\neq0$）是 $n\geq1$ 次多项式，则 $p(z)$ 必有零点；否则 $1/p(z)$ 为整函数，而当 $|z|$ 充分大时 $|p(z)|\to+\infty$，故 $1/p(z)$ 在 $\mathbb{C}$ 上有界，由 Liouville 定理 $1/p(z)$ 为常值函数，与 $n\geq1$ 矛盾。

### 定理 3.33 (Morera 定理) @95

设函数 $f$ 在区域 $\Omega$ 上连续，且对任意包含在 $\Omega$ 内的闭三角形 $\Delta$，积分
$$\int_{\partial\Delta}f(z)\,\mathrm{d}z=0,$$
那么，$f$ 是 $\Omega$ 上全纯函数。

Morera 定理中的任意闭三角形 $\Delta$ 可以修改为任意边平行于坐标轴的闭矩形 $R$，条件 $\int_{\partial R}f(z)\,\mathrm{d}z=0$ 也能推出函数 $f$ 在 $\Omega$ 上全纯。

### 定理 3.34 (Weierstrass 定理) @95

设 $(f_n)$ 是区域 $\Omega$ 上全纯函数序列。当 $n\to+\infty$ 时，$(f_n)$ 在 $\Omega$ 上内闭一致收敛于极限函数 $f$，则函数 $f$ 在 $\Omega$ 上全纯。进一步，对任意自然数 $k\geq1$，$k$ 阶导函数序列 $(f_n^{(k)})$ 在 $\Omega$ 上内闭一致收敛于 $f^{(k)}$。

### 定理 3.35 (可去奇性定理) @96

设 $\Omega$ 为区域，$z_0\in\Omega$。如果函数 $f$ 在 $\Omega$ 上连续，在 $\Omega\setminus\{z_0\}$ 上全纯，那么 $f$ 在整个 $\Omega$ 上全纯。

### 定理 3.36 (直线上的可去奇性) @97

设 $\Omega$ 是区域，$\ell$ 是直线，$\ell\cap\Omega\neq\varnothing$。如果 $f$ 在 $\Omega$ 上连续，在 $\Omega\setminus\ell$ 上全纯，那么 $f$ 在整个 $\Omega$ 上全纯。
