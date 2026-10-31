---
chapter: 2
chapter_title: 测度
section: "2.4"
section_title: Lebesgue 测度的平移不变性和不可测集
pages: "58–61"
---

在本节中将给出直线上 Lebesgue 测度在仿射变换下的性质和应用。

直线上的仿射变换可将其分为如下三类。对实数 $a$，直线的平移变换 $\tau_a$ 为
$$\tau_a:\ x\mapsto x+a,\quad x\in\mathbb{R};$$
反射变换 $\tau$ 为
$$\tau:\ x\mapsto -x,\quad x\in\mathbb{R};$$
对正数 $c$，伸缩变换 $S_c$ 为
$$S_c:\ x\mapsto cx,\quad x\in\mathbb{R}.$$
将直线上子集 $E$ 在这些变换下的像分别记作
$$E+a\triangleq\{x+a:\ x\in E\};\quad -E\triangleq\{-x:\ x\in E\};\quad cE\triangleq\{cx:\ x\in E\}.$$

### 定理 2.4.1 (Lebesgue 测度的不变性) @58

设 $E$ 是直线上的子集。对实数 $a$ 及正数 $c$，直线上的变换 $\tau_a$，$\tau$，$S_c$ 如上定义。那么，

1. $E$ 是 Lebesgue 可测当且仅当 $\tau_a(E)$ 也是 Lebesgue 可测集。此时，$m(\tau_a(E))=m(E)$。

2. $E$ 是 Lebesgue 可测当且仅当 $\tau(E)$ 也是 Lebesgue 可测集。此时，$m(\tau(E))=m(E)$。

3. $E$ 是 Lebesgue 可测当且仅当 $S_c(E)$ 也是 Lebesgue 可测集。此时，$m(S_c(E))=cm(E)$。

### 定义 (可测映射与可测同构) @59

使用抽象测度的观点，上述结果可有如下叙述。对集 $X_1$ 上的 $\sigma$-代数 $\mathcal{R}_1$ 和集 $X_2$ 上的 $\sigma$-代数 $\mathcal{R}_2$，若映射 $\psi:X_1\mapsto X_2$ 满足条件：对任意 $E\in\mathcal{R}_2$ 都有 $\psi^{-1}(E)\in\mathcal{R}_1$，则称 $\psi$ 是**可测映射**。若 $\psi:X_1\mapsto X_2$ 还是双射，且对 $X_2$ 子集 $E$，$E\in\mathcal{R}_2$ 当且仅当 $\psi^{-1}(E)\in\mathcal{R}_1$，则称 $\psi$ 是**可测同构**，此时 $\psi^{-1}$ 也是一个可测映射。

对集 $X_1$ 上的 $\sigma$-代数 $\mathcal{R}_1$ 和集 $X_2$ 上的 $\sigma$-代数 $\mathcal{R}_2$ 和可测映射 $\psi:(X_1,\mathcal{R}_1)\mapsto(X_2,\mathcal{R}_2)$，若 $\mu$ 是 $(X_1,\mathcal{R}_1)$ 上的测度，那么 $\psi$ 诱导了一个 $\mathcal{R}_2$ 上的测度
$$\psi_*\mu(E)=\mu(\psi^{-1}(E)),\quad \forall E\in\mathcal{R}_2.$$

### 例 2.4.2 (测度空间的可测同构) @59

由定理 2.4.1 知，直线上的平移映射 $\tau_a(x)=x+a\ (a\in\mathbb{R})$，反射映射 $\tau(x)=-x$ 及伸缩映射 $S_c(x)=cx\ (c>0)$ 是 Lebesgue 测度空间上的可测同构。而且，
$$\tau_{a*}m=m;\quad \tau_*m=m;\quad S_{c*}m=\frac{1}{c}m.$$
我们将在积分的变量代换公式使用这一陈述。

### 定理 2.4.3 (线性变换下的测度) @59

若 $T$ 是 Euclid 空间 $\mathbb{R}^k$ 上的可逆线性变换，则 $E$ 是 $\mathbb{R}^k$ 中的 Lebesgue 可测子集当且仅当 $T(E)$ 是 Lebesgue 可测的。此时，
$$m_k(T(E))=|\det(T)|\,m_k(E).$$

### 引理 2.4.4 (可列平移族的零测性) @60

对于直线上一个测度有限的 Lebesgue 可测集 $E$，如果存在可列集 $\Lambda$ 及可测集 $A$ 使得集族 $\{\lambda+A:\ \lambda\in\Lambda\}$ 两两不交，且 $E=\bigsqcup\limits_{\lambda\in\Lambda}(\lambda+A)$，则 $m(E)=0$。

### 构造 (Vitali 集的选取) @60

为实践上述的想法，我们引入一个等价关系：对于直线上的两个数 $\xi$ 与 $\eta$，如果 $\xi-\eta$ 是有理数，就称 $\xi$ 与 $\eta$ 是等价的。显然这是等价关系，它将直线分解成一些等价类 $[x]=\{y\in\mathbb{R}:\ y-x\in\mathbb{Q}\}$。同一等价类中的任何两个数相差一个有理数，不同等价类中的任何两个数相差一个无理数。记 $\Lambda$ 是这些等价类全体。

设 $E$ 是直线的子集，令 $\Gamma=\{[x]\in\Lambda:\ [x]\cap E\neq\varnothing\}$，由选择公理，可从 $\Gamma$ 中的每个等价类 $[x]$ 中取一个属于 $[x]\cap E$ 的元素，合在一起组成一个集合，记作 $C_E$。它与 $\Gamma$ 中每个等价类相交，并且仅仅交于一点。

### 定理 2.4.5 (Vitali) @60

对直线上的子集 $E$，若 $m^*(E)>0$，则 $E$ 中存在 Lebesgue 不可测子集。

### 推论 2.4.6 (外测度的不可加性) @60

存在直线 $\mathbb{R}$ 上不交子集 $A$ 和 $B$，使得 $m^*(A\sqcup B)\neq m^*(A)+m^*(B)$。

直线上的 Lebesgue 代数 $\mathcal{L}$ 是否等于 Borel 代数 $\mathfrak{B}$？我们现在能用 Cantor-Lebesgue 函数说明这个问题了。

使用节 1.2.4 的记号，$C$ 为 Cantor 三分集，$[0,1]\setminus C=O_c=\bigsqcup\limits_{n,m}I_m^{(n)}$。$\Phi$ 是 $[0,1]$ 上的 Cantor-Lebesgue 函数，它是单调递增函数。然后，我们记 $\psi=\Phi+x$。

### 定理 2.4.7 (Cantor-Lebesgue 函数的性质) @61

1. $\psi$ 是 $[0,1]$ 到 $[0,2]$ 上的严格单调连续函数。

2. 对于 Cantor 集 $C$，$m(\psi(C))=1$。

3. 存在集合 $A\subset C$ 使得 $\psi(A)$ 为 $\psi(C)$ 中的不可测集，从而 $A$ 是 Lebesgue 集但不是 Borel 集。

### 注 (Lebesgue 代数与 Borel 代数不相等) @61

由上述结果知，Borel 代数上的 Lebesgue 测度并不是完备的，将它完备化后就得到了 Lebesgue 代数上的 Lebesgue 测度。$\mathcal{L}\neq\mathfrak{B}$ 也可以使用势的理论说明：实际上 $\overline{\overline{\mathcal{L}}}=2^{\mathfrak{c}}$，而 $\overline{\overline{\mathfrak{B}}}=\mathfrak{c}$，故这两个集类是不相同的。
