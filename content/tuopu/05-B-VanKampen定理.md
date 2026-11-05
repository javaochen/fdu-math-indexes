---
chapter: 5
chapter_title: 附录
section: "B"
section_title: Van Kampen 定理
pages: "300–307"
---

这里讨论计算基本群的一般方法。设拓扑空间 $X$ 是两个道路连通的开子集 $X_1$ 与 $X_2$ 的并集，$X_0=X_1\cap X_2$ 是 $X$ 的非空道路连通子集。$\varphi_i\colon X_0\to X_i$ 和 $\psi_i\colon X_i\to X\ (i=1,2)$ 是包含映射，取基点 $x_0\in X_0$，于是它们的诱导同态满足
$$\psi_{1*}\varphi_{1*}=\psi_{2*}\varphi_{2*}.$$

设已知 $X_i$ 的基本群有表示 $\pi_1(X_i,x_0)=\{A_i;R_i\}$，其中 $A_i$ 是母元组，$R_i$ 是关系组 $(i=0,1,2)$。对任意 $a\in A_0$，$\varphi_{i*}(a)\in\pi_1(X_i,x_0)$，它们可表成 $A_i$ 上的字，记为 $\text{“}\varphi_{i*}(a)\text{”}(i=1,2)$。令
$$\widehat{R}=\{\text{“}\varphi_{1*}(a)\text{”}=\text{“}\varphi_{2*}(a)\text{”}\mid a\in A_0\}$$
是 $A_1\cup A_2$ 上的一组关系。对任意 $a\in A_i$，$\psi_{i*}(a)$ 是 $\pi_1(X,x_0)$ 中的元素。在下面的讨论中我们以 $a$ 简记 $\psi_{i*}(a)$ 并不会引起混淆。这时 $A_1\cup A_2$ 上是 $\pi_1(X,x_0)$ 的子集，$R_1\cup R_2\cup\widehat{R}$ 是这子集上的一组关系。

### 定理 (Van Kampen 定理) @300

在上面的记号与假设下，$\pi_1(X,x_0)$ 有母元组 $A_1\cup A_2$ 与关系组 $R_1\cup R_2\cup\widehat{R}$。

### 注 (证明从略) @303

原书第 301–304 页给出定理的证明，分为两步：先证 $A_1\cup A_2$ 是 $\pi_1(X,x_0)$ 的母元组，再证 $R_1\cup R_2\cup\widehat{R}$ 是 $\pi_1(X,x_0)$ 的关系组。本录从略。

### 例 (8 字形空间的基本群) @305

计算 8 字形空间 $S^1\vee S^1$ 的基本群。

$S^1\vee S^1$ 可如图分解为 $S^1\vee S^1=X_1\cup X_2$，$X_1\simeq S^1\simeq X_2$，$X_0=X_1\cap X_2$ 可缩。$\pi_1(X_i,x_0)$ 有表示 $\{a_i;\varnothing\}(i=1,2)$，$\pi_1(X_0,x_0)$ 有表示 $\{\varnothing;\varnothing\}$。由 Van Kampen 定理，$\pi_1(S^1\vee S^1,x_0)$ 有表示 $\{a_1,a_2;\varnothing\}$，即为两个母元的自由群。

### 推论 (交集单连通的情形) @305

在 Van Kampen 定理的假设下，若 $X_0$ 单连通，则 $\pi_1(X,x_0)$ 有表示 $\{A_1,A_2;R_1,R_2\}$。

### 推论 (一片单连通的情形) @305

在 Van Kampen 定理的假设下，若 $X_2$ 单连通，则 $\pi_1(X,x_0)$ 有表示 $\{A_1;R_1,\text{“}\varphi_{1*}(a)\text{”}=1\mid a\in A_0\}$。

### 例 (环面的基本群) @305

计算环面 $T$ 的基本群。

可设 $T$ 是迭合矩形 $Q$ 的对边而得到的。$\alpha,\beta$ 如图，记 $Q$ 的中心为 $O$，令 $X_1=Q\setminus\{O\}$，$X_2=Q\setminus(\alpha(I)\cup\beta(I))$（不妨把它与 $Q$ 的内部等同），$x_0\in X_0=X_1\cap X_2$。利用以 $O$ 为中心的辐射可知，$X_1$ 以 8 字形空间 $\alpha(I)\cup\beta(I)$ 为形变收缩核。因此 $\pi_1(X_1,x_1)$ 有表示 $\{[\alpha],[\beta];\varnothing\}$，$\pi_1(X_1,x_0)$ 有表示 $\{[\alpha_1],[\beta_1];\varnothing\}$，其中 $[\alpha_1]=[\delta]^{-1}[\alpha][\delta]$，$[\beta_1]=[\delta]^{-1}[\beta][\delta]$。$X_2$ 单连通，$X_0\simeq S^1$，$\pi_1(X_0,x_0)$ 有表示 $\{[\gamma];\varnothing\}$，而 $\varphi_{1*}([\gamma])=[\alpha_1][\beta_1][\alpha_1]^{-1}[\beta_1]^{-1}$。由上面推论，$\pi_1(T,x_0)$ 有表示
$$\{[\alpha_1],[\beta_1];[\alpha_1][\beta_1][\alpha_1]^{-1}[\beta_1]^{-1}=1\}\cong\mathbb{Z}\oplus\mathbb{Z}.$$

### 例 (射影平面的基本群) @306

计算射影平面 $P^2$ 的基本群。

可设 $P^2$ 是迭合圆盘 $D^2$ 的边界 $S^1$ 上的对径点得到的。$\alpha$ 如图，是 $P^2$ 中以 $x_1$ 为基点的闭道。记 $D^2$ 的圆心为 $O$，令 $X_1=D^2\setminus\{O\}$，$X_2=D^2\setminus\alpha(I)$（不妨把它与 $D^2$ 的内部等同），$x_0\in X_0=X_1\cap X_2$。利用以 $O$ 为中心的辐射可知，$X_1$ 以 $\alpha(I)\cong S^1$ 为形变收缩核。因此 $\pi_1(X,x_1)$ 有表示 $\{[\alpha];\varnothing\}$，$\pi_1(X_1,x_0)$ 有表示 $\{[\alpha_1];\varnothing\}$，其中 $[\alpha_1]=[\delta]^{-1}[\alpha][\delta]$。$X_2$ 单连通，$X_0\simeq S^1$，$\pi_1(X_0,x_0)$ 有表示 $\{[\gamma];\varnothing\}$，而 $\varphi_{1*}([\gamma])=[\alpha_1]^2$。由上面推论，
$$\pi_1(P^2,x_0)\ \text{有表示}\ \{[\alpha_1];[\alpha_1]^2=1\}\cong\mathbb{Z}_2.$$

用同样方法可计算一般紧曲面的基本群。
