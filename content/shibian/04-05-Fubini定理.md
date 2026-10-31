---
chapter: 4
chapter_title: 积分
section: "4.5"
section_title: Fubini 定理
pages: "123–128"
---

在这一节里，我们将建立重积分的理论，并研究重积分和累次积分的关系，以及累次积分中交换积分顺序的问题。不失一般性，我们只讨论二重积分和二次积分。为此，我们先建立乘积空间上的乘积测度。

**4.5.1　乘积测度**

设 $(X,\mathcal{S},\mu)$，$(Y,\mathcal{T},\nu)$ 是两个测度空间。为简化讨论，本节中总设 $\mu$，$\nu$ 分别是 $\sigma$-代数 $\mathcal{S}$，$\mathcal{T}$ 上的 $\sigma$-有限测度。首先我们先给出它们的 Cartesian 乘积 $X\times Y=\{(x,y):\ x\in X,\ y\in Y\}$ 上的乘积测度。

### 定义 4.5.1 (矩形与乘积 σ-环) @123

对两个集 $X$，$Y$，设 $A\subset X$，$B\subset Y$，称 $A\times B$ 为 $X\times Y$ 中的**矩形**，$A$，$B$ 称为这个矩形的边。令
$$\mathcal{S}\times\mathcal{T}=\{A\times B:\ A\in\mathcal{S},\ B\in\mathcal{T}\},$$
$\mathcal{S}\times\mathcal{T}$ 生成的 $\sigma$-环记做 $\mathcal{S}\otimes\mathcal{T}$。

### 例 4.5.2 (Borel 代数的乘积) @124

$k+l$ 维的 Euclid 空间 $\mathbb{R}^{k+l}$ 可以看作 $k$ 维空间 $\mathbb{R}^k$ 和 $l$ 维空间 $\mathbb{R}^l$ 的乘积空间。由于 Borel 代数 $\mathfrak{B}_{k+l}$ 与 $\mathfrak{B}_k\otimes\mathfrak{B}_l$ 都可由 $k+l$ 维左开右闭矩体生成，所以这两个 $\sigma$-代数是一致的。

### 引理 4.5.3 (可测矩形构成半环) @124

如果 $\mathcal{S}$，$\mathcal{T}$ 分别是 $X$，$Y$ 中的 $\sigma$-代数，那么子集类 $\mathcal{S}\times\mathcal{T}$ 是一个半环。

### 定理 4.5.4 (乘积测度的存在性) @124

设 $\mu$ 是集 $X$ 上的 $\sigma$-代数 $\mathcal{S}$ 上的 $\sigma$-有限测度，$\nu$ 是集 $Y$ 上的 $\sigma$-代数 $\mathcal{T}$ 上的 $\sigma$-有限测度。对于任何矩形 $A\times B\in\mathcal{S}\times\mathcal{T}$，我们规定
$$\lambda(A\times B)=\mu(A)\nu(B).$$
那么，$\lambda$ 是 $\mathcal{S}\times\mathcal{T}$ 上的 $\sigma$-有限测度。

### 注 (乘积测度的完备化) @124

由定理 2.2.12，定理 2.3.1 和定理 2.3.3，我们可以将测度 $\lambda$ 唯一的延拓为 $X\times Y$ 上的一个完备测度，记可测集全体为 $\mathcal{R}$，那么 $\mathcal{S}\otimes\mathcal{T}\subset\mathcal{R}$。

### 例 4.5.5 (乘积测度与 Lebesgue 测度) @125

对于 $k$ 维 Lebesgue 测度空间 $(\mathbb{R}^k,\mathcal{L}_k,m_k)$ 与 $l$ 维 Lebesgue 测度空间 $(\mathbb{R}^l,\mathcal{L}_l,m_l)$，我们得到了 $\mathbb{R}^{k+l}$ 上的 $\sigma$-代数 $\mathcal{R}$ 上一个完备的乘积测度 $\lambda$。

由于 $\lambda$ 和 Lebesgue 测度 $m_{k+l}$ 在左开右闭矩体上是相等的，根据测度延拓唯一性定理 2.3.3，$\lambda$ 和 $m_{k+l}$ 在左开右闭矩体全体生成的 $\sigma$-代数 $\mathfrak{B}_k\otimes\mathfrak{B}_l=\mathfrak{B}_{k+l}$ 上一致；再由可测集结构定理 2.3.1，$(\mathbb{R}^{k+l},\mathcal{R},\lambda)$，$(\mathbb{R}^{k+l},\mathcal{L}_{k+l},m_{k+l})$ 分别是测度空间 $(\mathbb{R}^{k+l},\mathfrak{B}_k\otimes\mathfrak{B}_l,\lambda)$ 和 $(\mathbb{R}^{k+l},\mathfrak{B}_{k+l},m_{k+l})$ 的完备化，故
$$(\mathbb{R}^{k+l},\mathcal{R},\lambda)=(\mathbb{R}^{k+l},\mathcal{L}_{k+l},m_{k+l}).$$
这也说明 $\mathcal{L}_k\otimes\mathcal{L}_l\subset\mathcal{L}_{k+l}$，然而 $\mathcal{L}_k\otimes\mathcal{L}_l\neq\mathcal{L}_{k+l}$。这一事实可以用截口说明。

**4.5.2　截口**

设 $(X,\mathcal{S})$，$(Y,\mathcal{T})$ 是可测空间，$(X\times Y,\mathcal{S}\otimes\mathcal{T})$ 是它们的乘积可测空间。

### 定义 (截口) @125

如果 $E$ 是 $X\times Y$ 的一个子集，

- 对 $x\in X$，称集 $E_x=\{y\in Y:\ (x,y)\in E\}$ 为 $E$ 的 **$x$-截口**；
- 对于 $y\in Y$，集 $E^y=\{x\in X:\ (x,y)\in E\}$ 称为 $E$ 的 **$y$-截口**。

设 $f$ 是定义在集 $E$ 上的函数。

- 固定 $x\in X$ 时，若 $E_x\neq\varnothing$，称 $E_x$ 上的函数 $f_x(y)=f(x,y)$ 为 $f$ 的 **$x$-截口**。
- 固定 $y\in Y$，若 $E^y\neq\varnothing$，称在 $E^y$ 上的函数 $f^y(x)=f(x,y)$ 为 $f$ 的 **$y$-截口**。

### 定理 4.5.6 (截口的可测性) @125

设 $\mu$ 是集 $X$ 上的 $\sigma$-代数 $\mathcal{S}$ 上的 $\sigma$-有限测度，$\nu$ 是集 $Y$ 上的 $\sigma$-代数 $\mathcal{T}$ 上的 $\sigma$-有限测度，$(X\times Y,\mathcal{R},\lambda)$ 是乘积测度。对于 $E\in\mathcal{S}\otimes\mathcal{T}$，我们有如下结论：

1. 对任意 $x\in X$，截口 $E_x\in\mathcal{T}$；

2. $x\mapsto\nu(E_x)$ 是 $X$ 上的可测映射；

3. $$\lambda(E)=\int_X \nu(E_x)\,d\mu(x)=\int_X\left[\int_Y \chi_E(x,y)\,d\nu(y)\right]d\mu(x).$$

### 例 4.5.7 (截口性质的失效) @126

考虑由 $(\mathbb{R}^k,\mathcal{L}_k,m_k)$ 与 $(\mathbb{R}^l,\mathcal{L}_l,m_l)$ 所得乘积空间 $(\mathbb{R}^{k+l},\mathcal{L}_{k+l},m_{k+l})$，对任何 $E\in\mathcal{L}_k\otimes\mathcal{L}_l$，它的每个截口 $E_x\in\mathcal{L}_l$。然而，$\mathcal{L}_{k+l}$ 中的集合并不会满足这个性质。

例如，考虑 $k=l=1$ 的情况。设 $E=\{0\}\times A\subset\mathbb{R}^2$，其中 $A$ 是直线上的一个 Lebesgue 不可测集。由于 $E\subset\{0\}\times\mathbb{R}$，所以 $E$ 是 $\mathcal{L}_2$ 中的零测集。但是，它的截口 $E_0=A\notin\mathcal{L}$。这个例子也说明 $\mathcal{L}_2$ 中集 $E$ 不满足定理 4.5.6 结论。

### 推论 4.5.8 (零测集的截口) @126

设 $\mu$ 是集 $X$ 上的 $\sigma$-代数 $\mathcal{S}$ 上完备的 $\sigma$-有限测度，$\nu$ 是集 $Y$ 上的 $\sigma$-代数 $\mathcal{T}$ 上完备的 $\sigma$-有限测度，$(X\times Y,\mathcal{R},\lambda)$ 是乘积测度。若 $E$ 是 $\lambda$-零测集，则对几乎处处的 $x$，$E_x$ 是 $\nu$-零测集，从而
$$\lambda(E)=0=\int_X \nu(E_x)\,d\mu(x).$$

### 推论 4.5.9 (截口与积分表示) @127

设 $\mu$ 是集 $X$ 上的 $\sigma$-代数 $\mathcal{S}$ 上完备的 $\sigma$-有限测度，$\nu$ 是集 $Y$ 上的 $\sigma$-代数 $\mathcal{T}$ 上完备的 $\sigma$-有限测度，$(X\times Y,\mathcal{R},\lambda)$ 是乘积测度。对于 $E\in\mathcal{R}$，则对几乎处处的 $x$，$E_x\in\mathcal{T}$；$x\mapsto\nu(E_x)$ 是 $X$ 上的可测函数；且
$$\lambda(E)=\int_X \nu(E_x)\,d\mu(x).$$

### 定理 4.5.10 (Tonelli) @127

设 $\mu$ 是集 $X$ 上的 $\sigma$-代数 $\mathcal{S}$ 上完备的 $\sigma$-有限测度，$\nu$ 是集 $Y$ 上的 $\sigma$-代数 $\mathcal{T}$ 上完备的 $\sigma$-有限测度，$(X\times Y,\mathcal{R},\lambda)$ 是乘积测度。若 $f(x,y)$ 是乘积空间 $X\times Y$ 上的非负可测函数，那么：

1. 对于几乎处处的 $y\in Y$，函数 $f^y$ 是 $X$ 上的可测函数；对于几乎处处的 $x\in X$，函数 $f_x$ 是 $Y$ 上的可测函数；

2. $y\mapsto\int_X f^y(x)\,d\mu(x)$ 是 $Y$ 上的可测函数；$x\mapsto\int_Y f_x(y)\,d\nu(y)$ 是 $X$ 上的可测函数；

3. 下面等式成立：
$$\int_X\left[\int_Y f(x,y)\,d\nu(y)\right]d\mu(x)=\int_Y\left[\int_X f(x,y)\,d\mu(x)\right]d\nu(y)=\int_{X\times Y} f(x,y)\,d\lambda(x,y).$$

### 定理 4.5.11 (Fubini) @128

设 $\mu$ 是集 $X$ 上的 $\sigma$-代数 $\mathcal{S}$ 上完备的 $\sigma$-有限测度，$\nu$ 是集 $Y$ 上的 $\sigma$-代数 $\mathcal{T}$ 上完备的 $\sigma$-有限测度，$(X\times Y,\mathcal{R},\lambda)$ 是乘积测度。若 $f(x,y)$ 是乘积空间 $X\times Y$ 上的可积函数，那么

1. 对几乎处处 $y\in Y$，$f^y$ 是 $X$ 上的可积函数；对几乎处处 $x\in X$，$f_x$ 是 $Y$ 上的可积函数；

2. $y\mapsto\int_X f^y(x)\,d\mu(x)$ 是 $Y$ 上的可积函数；$x\mapsto\int_Y f_x(y)\,d\nu(y)$ 是 $X$ 上的可积函数；

3. 下面的等式成立：
$$\int_X\left[\int_Y f(x,y)\,d\nu(y)\right]d\mu(x)=\int_Y\left[\int_X f(x,y)\,d\mu(x)\right]d\nu(y)=\int_{X\times Y} f(x,y)\,d\lambda(x,y).$$

### 例 4.5.12 (Fubini 定理的应用) @128

若 $f(x,y)$ 是 $\mathbb{R}^{k+l}$ 上的 Lebesgue 可积函数（或非负 Lebesgue 可测函数），那么我们有
$$\int_{\mathbb{R}^{k+l}} f(x,y)\,dm_{k+l}(x,y)=\int_{\mathbb{R}^k}\left[\int_{\mathbb{R}^l} f(x,y)\,dm_l(y)\right]dm_k(x).$$
多次使用 Fubini 定理后，就可以将它约化为直线上的 Lebesgue 积分。

### 注 (可测性条件不能减弱) @128

这里必须强调指出，条件 $f(x,y)$ 是乘积空间上的可测函数是不能减弱的。由 [1, 90 页，例 11]，存在平面的子集 $A$，$A$ 交任何直线只有两个点，然而 $A$ 不是 Lebesgue 可测集。若取 $f(x,y)=\chi_A(x,y)$，那么 $f$ 的累次积分存在且为 $0$，但是 $f$ 不是平面上的 Lebesgue 可测函数。
