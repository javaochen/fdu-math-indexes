---
chapter: 5
chapter_title: 偏微分方程的应用
section: "5.2"
section_title: 最优传输问题与 Monge-Ampère 方程
pages: "145–147"
---


最优传输问题最早由 Monge 在 1781 年提出：考虑将一堆 $\mathbb{R}^{n}$ 中的沙子运送到某个特定的沙坑，使花费最小。假设沙子的总质量为 $1$，初始沙子分布可以用一个概率测度 $\mu$ 描述，最终运输到沙坑的沙子分布为固定的概率测度 $\nu$。将 $x$ 处的沙子运送到 $y$ 处的花费假设为 $c(x,y)$。Monge 选取 $c$ 为 $c(x,y)=|x-y|$，一般可以选取 $c(x,y)=|x-y|^{p}$，$1\leqslant p<\infty$。

设映射 $T:\mathbb{R}^{n}\to\mathbb{R}^{n}$ 为某种运送方案，即 $x$ 处的沙子运送到 $y=Tx$ 处的沙坑内（图 5.1）。

### 定义 5.2.1 (前推测度) @145

对于可测映射 $T:\mathbb{R}^{n}\to\mathbb{R}^{m}$ 和 $\mathbb{R}^{n}$ 上的测度 $\mu$，定义测度

$$
T_{\#}\mu(B)=\mu\left(T^{-1}(B)\right),\quad \forall B\subset\mathbb{R}^{m},
$$

称 $T_{\#}\mu$ 为测度 $\mu$ 沿映射 $T$ 的前推测度。

### 定义 (Monge 最优传输问题) @145

运送方案 $T$ 要满足约束条件 $T_{\#}\mu=\nu$。对于给定的运送方案 $T$，总花费为 $\int c(x,Tx)\,\mathrm{d}\mu$。Monge 问题即为求解最小化问题

$$
\inf_{T}\int c(x,Tx)\,\mathrm{d}\mu,
$$

其中 $T$ 取遍所有将 $\mu$ 运送至 $\nu$ 的运送方案。

### 引理 5.2.1 (前推测度的密度公式) @145

设 $T:\mathbb{R}^{n}\to\mathbb{R}^{n}$ 为 $C^{1}$ 映射，概率测度 $\mu(x)=f(x)\,\mathrm{d}x$，$\nu(x)=g(x)\,\mathrm{d}x$ 满足 $\nu=T_{\#}\mu$，则对几乎处处的 $x\in\mathbb{R}^{n}$，

$$
f(x)=g(Tx)\left|\operatorname{det}JT(x)\right|,
$$

其中 $JT$ 是映射 $T$ 的 Jacobi 矩阵。

### 定义 (Kantorovich 问题) @146

Monge 的传输映射 $T:\mathbb{R}^{n}\to\mathbb{R}^{n}$ 无法分离质量，即 $x$ 处的沙子质量无法运送到不同的目的地。Kantorovich（康托罗维奇）推广了 Monge 的问题：设 $\pi$ 为 $\mathbb{R}^{n}\times\mathbb{R}^{n}$ 上的概率测度，将 $\pi(x,y)$ 理解为从 $x$ 处运送到 $y$ 处的质量，允许 $x$ 处的质量分别送到不同的目的地 $y$。Kantorovich 问题为

$$
\inf_{\pi}\int c(x,y)\,\mathrm{d}\pi(x,y),
$$

其中 $\pi$ 取遍所有允许的传输方案。

### 定理 5.2.1 (最优传输方案的存在性) @146

对于 $\mathbb{R}^{n}$ 上的概率测度 $\mu$、$\nu$，存在最优传输方案 $\pi$。

### 定理 5.2.2 (Brenier 定理) @146

对于满足一定条件的 $\mu$、$\nu$，对于 $c(x,y)=|x-y|^{2}$，存在唯一的最优传输方案 $\pi$，满足

$$
\pi=\left(\operatorname{Id}\times\nabla\varphi\right)_{\#}\mu,
$$

其中 $\varphi:\mathbb{R}^{n}\to(-\infty,+\infty]$ 为凸函数。

### 定义 (Brenier 势函数) @146

对于 $c(x,y)=|x-y|^{2}$ 的情形，Brenier（布雷尼尔）证明了最优传输方案可表达为传输映射 $\nabla\varphi$，即一个凸函数的梯度映射。$\varphi$ 称为 Brenier 势函数。

### 定理 5.2.3 (等周不等式) @146

设 $\Omega$ 是 $\mathbb{R}^{n}$ 中的有界光滑区域，则

$$
P(\Omega)\geqslant P(B_{r}), \tag{5.5}
$$

其中 $|B_{r}|=|\Omega|$。等号成立当且仅当在差一个零测集的意义下，$\Omega=B_{r}(x_{0})$，$x_{0}\in\mathbb{R}^{n}$。

这里 $|\Omega|$ 为 $\Omega$ 的体积，$P(\Omega)$ 为 $\Omega$ 的表面积。等周问题的古典形式是：在周长相等的平面区域中圆的面积最大；等价地，在面积相等的平面区域中圆的周长最短。推广到 $\mathbb{R}^{n}$ 即问体积相等的区域中是否球的表面积最小。

### 命题 (Monge-Ampère 方程) @147

设 $|B_{r}|=|\Omega|=\omega_{n}$，并考虑概率测度

$$
\mu=\frac{\chi_{\Omega}}{|\Omega|}\,\mathrm{d}x=:f\,\mathrm{d}x,\qquad \nu=\frac{\chi_{B_{1}}}{|B_{1}|}\,\mathrm{d}x=:g\,\mathrm{d}x .
$$

由 Brenier 定理，存在凸函数 $\varphi:\mathbb{R}^{n}\to(-\infty,+\infty]$ 使得 $(\nabla\varphi)_{\#}\mu=\nu$，再由引理 5.2.1，对几乎处处的 $x\in\Omega$，

$$
g(\nabla\varphi(x))\left|\operatorname{det}\nabla^{2}\varphi(x)\right|=f(x). \tag{5.6}
$$

这是一个关于 $\varphi$ 的二阶非线性椭圆型方程，是 Monge-Ampère 方程的一种特殊形式。由于 $\varphi$ 为凸函数，对几乎处处的 $x\in\Omega$ 都有 $\nabla^{2}\varphi(x)\geqslant0$。

### 引理 (梯度的一致界) @147

对几乎处处的 $x\in\Omega$，$\left|\nabla\varphi(x)\right|\leqslant1$。

### 命题 (Hessian 行列式与 Laplacian 的下界) @147

对几乎处处的 $x\in\Omega$，

$$
\operatorname{det}\nabla^{2}\varphi(x)=\frac{f(x)}{g(\nabla\varphi(x))}=1 .
$$

设 $\lambda_{k}$ 为 $\nabla^{2}\varphi(x)$ 的特征值，则对几乎处处的 $x\in\Omega$，

$$
\Delta\varphi(x)=\sum_{k}\lambda_{k}\geqslant n\left(\prod_{k}\lambda_{k}\right)^{\frac{1}{n}}=n\left(\operatorname{det}\nabla^{2}\varphi(x)\right)^{\frac{1}{n}}\geqslant n .
$$

由 Green 公式，

$$
P(\Omega)=\int_{\partial\Omega}1\geqslant\int_{\partial\Omega}\left\langle\nabla\varphi,\boldsymbol{n}_{\partial\Omega}\right\rangle
=\int_{\Omega}\Delta\varphi\geqslant n\int_{\Omega}1=n|\Omega|=n|\Omega|^{\frac{n-1}{n}}\omega_{n}^{\frac{1}{n}},
$$

从而得到等周不等式。对于等号情形 $P(\Omega)=P(B_{1})$，所有不等号都是等号，特别地 $\nabla^{2}\varphi(x)$ 的特征值相等，且由 $\operatorname{det}\nabla^{2}\varphi(x)=1$ 知所有特征值均为 $1$，故对几乎处处的 $x\in\Omega$ 有 $\nabla^{2}\varphi(x)=\operatorname{Id}$，即 $\nabla\varphi$ 为平移映射，从而 $\Omega=B_{1}(x_{0})$。

### 注 (最优传输与深度学习) @147

最优传输理论在人工智能领域的深度学习（机器学习）中有重要应用，为该领域提供了数学理论基础。深度学习的目标是学习流形上的概率分布，分为两步：学习流形的结构和学习概率分布。以手写数字识别和人脸识别为例：有大量的原始图像资料（样本集），每个图像表示为 $\mathbb{R}^{N}$ 中的一个点（向量），$N$ 为像素，坐标值表示颜色，维数 $N$ 往往非常大。所有图像构成的点云分布在某个低维流形附近，且点云在数据流形上的分布可以用概率测度来描述。最优传输理论提供了强有力的工具来学习概率分布。
