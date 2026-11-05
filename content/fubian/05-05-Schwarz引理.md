---
chapter: 5
chapter_title: 留数定理和辐角原理
section: "5.5"
section_title: Schwarz 引理
pages: "183–187"
---

利用最大模原理，我们可以证明如下能很好地揭示全纯函数映射性质的 Schwarz 引理。

### 定理 5.22 (Schwarz 引理) @183

设 $f$ 是单位圆 $\mathbb{D}$ 上全纯函数，满足 $f(0)=0$，且对任意 $z\in\mathbb{D}$，$|f(z)|<1$。那么，
$$|f(z)|\le|z|,\qquad z\in\mathbb{D},\tag{5.25}$$
以及
$$|f'(0)|\le1.\tag{5.26}$$
(5.25) 对某个 $z\in\mathbb{D}^*$ 等式成立或 (5.26) 等式成立的充要条件是 $f(z)=\mathrm{e}^{\mathrm{i}\theta}z$，其中 $\theta\in\mathbb{R}$。

### 注 (Schwarz 引理的等价表述) @184

上述 Schwarz 引理也可表述为：若 $f:\mathbb{D}\to\mathbb{D}$ 全纯，且 $f(0)=0$，则 $|f(z)|\le|z|$，$|f'(0)|\le1$。等号成立的充要条件是 $f(z)=\mathrm{e}^{\mathrm{i}\theta}z$，$\theta\in\mathbb{R}$。$|f(z)|\le|z|$ 意味着 $f:D(0,r)\to D(0,r)$ $(0<r<1)$。

### 定义 (共形自同构) @184

区域自身到自身的共形映射称为该区域上的共形自同构。在 §2.4 中已经证明，单位圆 $\mathbb{D}$ 到自身的分式线性变换为
$$\varphi(z)=\mathrm{e}^{\mathrm{i}\theta}\frac{z-c}{1-\overline{c}z},\qquad c\in\mathbb{D},\ \theta\in\mathbb{R},\tag{5.27}$$
这是单位圆 $\mathbb{D}$ 上的共形自同构。利用 Schwarz 引理，还可以证明单位圆上的共形自同构必为分式线性变换，且有上述形式。

### 定理 5.23 (共形自同构的形式) @184

单位圆 $\mathbb{D}$ 上共形自同构是分式线性变换，并且具有形式 (5.27)。

### 注 (共形自同构群) @184

区域 $\Omega$ 上的共形自同构全体以映射复合为乘法构成一个群，称为共形自同构群，记为 $\operatorname{Aut}(\Omega)$。上述定理表明 $\operatorname{Aut}(\mathbb{D})$ 是分式线性变换群的子群，依赖于三个实参数 $\theta,a,b$，这里 $a+\mathrm{i}b=c$。

在 Schwarz 引理中，如果没有 $f(0)=0$ 的条件，则有如下 Schwarz-Pick 定理。

### 定理 5.24 (Schwarz-Pick 定理) @185

设 $f$ 是 $\mathbb{D}$ 上全纯函数，且对任意 $z\in\mathbb{D}$，$|f(z)|<1$（等价的叙述是映射 $f:\mathbb{D}\to\mathbb{D}$ 全纯）。那么，
$$\left|\frac{f(z)-f(z_0)}{1-\overline{f(z_0)}f(z)}\right|\le\left|\frac{z-z_0}{1-\overline{z_0}z}\right|,\qquad z,z_0\in\mathbb{D},\tag{5.28}$$
以及
$$\frac{|f'(z)|}{1-|f(z)|^2}\le\frac{1}{1-|z|^2},\qquad z\in\mathbb{D}.\tag{5.29}$$
(5.28) 对某个 $z\in\mathbb{D}\setminus\{z_0\}$ 等式成立或 (5.29) 对某个 $z\in\mathbb{D}$ 等式成立的充要条件是 $f$ 是 $\mathbb{D}$ 上共形自同构。

### 例 5.19 (全纯自映射的估计) @186

设 $f:\mathbb{D}\to\mathbb{D}$ 全纯，$f(0)=0$。证明：
$$|z|\frac{|f'(0)|-|z|}{1-|f'(0)||z|}\le|f(z)|\le|z|\frac{|f'(0)|+|z|}{1+|f'(0)||z|},\qquad z\in\mathbb{D}.\tag{5.30}$$

### 注 (Schwarz 引理的意义) @186

Schwarz 引理（Schwarz-Pick 定理）是一个很深刻的定理，是单位圆上双曲几何的基础，且其证明思想（最大模原理的应用）也是十分有用的。例如，如果两个区域 $\Omega_1$，$\Omega_2$ 都可以被共形映射映成单位圆，则可以建立全纯映射 $f:\Omega_1\to\Omega_2$ 的 Schwarz-Pick 型不等式。
