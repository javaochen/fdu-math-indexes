---
chapter: 3
chapter_title: 单纯同调论
section: "3.3"
section_title: Euler-Poincaré 公式
pages: "179–185"
---

零维同调群是自由 Abel 群，它的唯一不变量是维数，恰是复形组合分支的个数。另一方面，比较上一节中各例的图形与同调群，直观上可见同调群能描述多面体中的“洞”。例如，对环面 $T$，$H_1(T)\cong\mathbb{Z}\oplus\mathbb{Z}$，表明 $T$ 有两个独立的 1 维“洞”，即纬圆和经圆所代表的。因此自然要问，对一般的 $p$，$H_p(K)$ 可作怎样的分解，找出它的不变量完全组，并给出这组不变量的拓扑学意义。

## 3.3.1 整同调群的结构

设 $K$ 是单纯复形，$S_p^+=\{\sigma_i^p\mid i=1,\cdots,\alpha_p\}$ 是 $K$ 的 $p$ 维基本组，则 $C_p(K)$ 是 $\alpha_p$ 维自由 Abel 群，它的子群 $Z_p(K)$ 与 $B_p(K)$ 也是有限维自由 Abel 群，商群 $H_p(K)=Z_p(K)/B_p(K)$ 必定是有限生成的 Abel 群。根据有限生成 Abel 群的基本定理（见附录 A），有

### 定理 3.22 (整同调群的标准分解) @180

设 $K$ 是单纯复形，则 $K$ 的 $p$ 维同调群有如下唯一的标准分解式：

$$H_p(K)\cong\underbrace{\mathbb{Z}\oplus\cdots\oplus\mathbb{Z}}_{\beta_p\ \text{个}}\oplus\mathbb{Z}_{\theta_1^p}\oplus\cdots\oplus\mathbb{Z}_{\theta_{\tau_p}^p},$$

其中 $\beta_p\ge 0$；当 $\tau_p>0$ 时 $\theta_i^p>1$，且 $\theta_i^p$ 整除 $\theta_{i+1}^p$。

$\beta_p$ 与 $\{\theta_i^p\mid i=1,\cdots,\tau_p\}$ 是 $H_p(K)$ 的不变量完全组，$\beta_p$ 是 $H_p(K)$ 的秩。

### 定义 3.23 (Betti 数与挠系数) @180

定义 3.22 中的 $\beta_p$ 称为 $K$ 的 **$p$ 维 Betti 数**，$\{\theta_i^p\mid i=1,\cdots,\tau_p\}$ 称为 **$p$ 维挠系数**。

### 注 (Betti 数与挠系数的意义) @180

设 $z_1,\cdots,z_k$ 也是 $p$ 维闭链，如果存在不全为 0 的整数 $g_1,\cdots,g_k$，使得 $\sum\limits_{i=1}^{k}g_iz_i\sim 0$，则称它们是**同调相关**的，否则称为**同调无关**的。显然，$z_1,\cdots,z_k$ 同调相关的充要条件为同调类 $[z_1],\cdots,[z_k]$ 整系数线性相关，因此 $K$ 的 $p$ 维 Betti 数就是它的 $p$ 维闭链的极大同调无关组中闭链的个数，反映了 $|K|$ 中独立的 $p$ 维“洞”的个数。$p$ 维挠系数则刻划了 $|K|$ 中 $p+1$ 维单形“贴合”时的扭曲状态。下表结合图形体会有不变量的意义：

| 多面体 | $H_1(\cdot)$ | $\beta_1$ | $\{\theta_i^1\}$ | $H_2(\cdot)$ | $\beta_2$ |
| --- | --- | --- | --- | --- | --- |
| $S^1$ | $\mathbb{Z}$ | 1 | 无 | 0 | 0 |
| $S^2$ | 0 | 0 | 无 | $\mathbb{Z}$ | 1 |
| $T$ | $\mathbb{Z}\oplus\mathbb{Z}$ | 2 | 无 | $\mathbb{Z}$ | 1 |
| $P^2$ | $\mathbb{Z}_2$ | 0 | $\{2\}$ | 0 | 0 |
| Klein 瓶 | $\mathbb{Z}\oplus\mathbb{Z}_2$ | 1 | $\{2\}$ | 0 | 0 |

顺便指出，对于 $n$ 维复形，不存在 0 维与 $n$ 维挠系数。

## 3.3.2 Euler-Poincaré 公式

下面推广凸多面体的 Euler 公式 $V-E+F=2$，引进多面体的一个重要的拓扑不变量 Euler 示性数。

### 定义 3.24 (Euler 示性数) @181

设 $K$ 是 $n$ 维复形，$\alpha_p$ 是它的 $p$ 维单形个数，整数 $\chi(K)=\sum\limits_{p=0}^{n}(-1)^p\alpha_p$ 称为 $K$ 的 **Euler 示性数**。

### 定理 3.25 (Euler-Poincaré 定理) @181

设 $K$ 是 $n$ 维复形，$\beta_p$ 是它的 $p$ 维 Betti 数，则

$$\chi(K)=\sum_{p=0}^{n}(-1)^p\beta_p.$$

式 $\chi(K)=\sum\limits_{p=0}^{n}(-1)^p\beta_p$ 称为 **Euler-Poincaré 公式**，它用 $K$ 的各维 Betti 数来表示 Euler 示性数。当证明了同调群的（从而也有 Betti 数的）拓扑不变性后，就得到 Euler 示性数的拓扑不变性，Euler-Poincaré 公式使我们能用非拓扑量 $\alpha_p$ 来计算拓扑量 $\chi(K)$。

常见图形的 Euler 示性数列于下表：

| 多面体 | $S^2$ | $T$ | $P^2$ | Klein 瓶 | $S^n$ | $D^n$ | 锥形 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $\chi(\cdot)$ | 2 | 0 | 1 | 0 | $1+(-1)^n$ | 1 | 1 |

利用 Euler 示性数的拓扑不变性也可以区分不同胚的空间，例如 $S^2\not\simeq T$，因为 $\chi(S^2)=2$，$\chi(T)=0$。后者可直接由单形个数的计数而求得。

利用 Euler-Poincaré 公式可以得到关于多面体的 Euler 定理。欧氏空间 $\mathbb{R}^3$ 中的简单多面体是由凸多边形围成的有界集合，它的边界与球面 $S^2$ 同胚。所有面是同样边数的正多边形且所有多面角全等的简单多面体称为**正多面体**。

### 定理 3.26 (Euler 定理) @182

设 $S$ 是一个简单多面体，有 $V$ 个顶点，$E$ 条棱和 $F$ 个面，则 $V-E+F=2$。

### 例 (只有五种正多面体) @182

设正多面体有 $V$ 个顶点，$E$ 条棱和 $F$ 个面，以 $m$ 记每个顶点处的棱数，$n$ 记每个面的边数（$m,n\ge 3$）。由 $mV=2E=nF$ 和 $V-E+F=2$ 可得

$$\frac{1}{m}+\frac{1}{n}=\frac{1}{2}+\frac{1}{E},$$

因此不可能同时有 $m>3$，$n>3$。若 $n=3$，则 $\frac{1}{m}=\frac{1}{E}+\frac{1}{6}$，$m$ 只能取 3、4、5。同理，若 $m=3$，$n$ 只能取 3、4、5，即有下表：

| $F$ | $m$ | $n$ | $V$ | $E$ |
| --- | --- | --- | --- | --- |
| 4 | 3 | 3 | 4 | 6 |
| 6 | 3 | 4 | 8 | 12 |
| 8 | 4 | 3 | 6 | 12 |
| 12 | 3 | 5 | 20 | 30 |
| 20 | 5 | 3 | 12 | 30 |

表中各行分别对应于正四面体、正六面体、正八面体、正十二面体与正二十面体。

## 3.3.3 以任意 Abel 群作系数群的同调

在上面定义同调群的过程中，实际上只利用了链群 $C_p(K)$、边缘同态 $\partial_p:C_p(K)\to C_{p-1}(K)$ 和 $\partial^2=0$ 等性质。链群的定义中出现的整数加群 $\mathbb{Z}$，实际上只涉及它作为 Abel 群的性质。因此，除了定义 3.23、3.24 和定理 3.25 外，前面的讨论完全适用于以任意 Abel 群 $G$ 代替 $\mathbb{Z}$ 的情况，从而得到以 $G$ 为系数群的同调群（前面定义的同调群常称为**整同调群**）。例如，链群定义为 $C_p(K;G)=\{c_p:S_p\to G\mid c_p(-\sigma)=-c_p(\sigma),\sigma\in S_p\}$，$C_p(K;G)$ 中任意链可表示为 $c_p=\sum g_i\sigma_i^p$，其中 $g_i\in G$，

$$g_i\sigma_i^p(\tau)=\begin{cases}0, & \tau\neq\sigma_i^p,\\ \pm g_i, & \tau=\pm\sigma_i^p.\end{cases}$$

边缘同态 $\partial_p:C_p(K;G)\to C_{p-1}(K;G)$ 由

$$\partial_p(g\langle a_0,\cdots,a_p\rangle)=\sum_{i=0}^{p}(-1)^ig\langle a_0,\cdots,\hat a_i,\cdots,a_p\rangle$$

作线性扩张得到，它满足 $\partial_{p-1}\partial_p=0$。令

$$Z_p(K;G)=\operatorname{Ker}\partial_p,\quad B_p(K;G)=\operatorname{Im}\partial_{p+1},$$

则同调群定义为 $H_p(K;G)=Z_p(K;G)/B_p(K;G)$。

当 $G$ 是一个域时，$C_p(K;G)$ 中还可以定义数乘，从而成为一个 $\alpha_p$ 维线性空间，$\partial_p$ 是线性变换，$Z_p(K;G)$ 与 $B_p(K;G)$ 都是 $C_p(K;G)$ 的线性子空间，且 $B_p(K;G)\subset Z_p(K;G)$，同调群 $H_p(K;G)$ 作为商空间，也是有限维线性空间，因此有同构

### 注 (系数群为域时的标准分解) @185

$$H_p(K;G)\cong\underbrace{G\oplus\cdots\oplus G}_{r_p\ \text{个}},$$

这是系数群为域时同调群的标准分解式，它的唯一不变量是线性空间的维数 $r_p$。

### 注 (模 2 同调群) @185

模 2 整数加群 $\mathbb{Z}_2$ 是有限域，因此 $H_p(K;\mathbb{Z}_2)$ 是有限维线性空间，称为 $K$ 的 **$p$ 维模 2 同调群**，它的维数称为 **$p$ 维模 2 Betti 数**，记为 $\beta_p^{(2)}$，不定义挠系数。

容易证明，当 $G$ 是域时 $\chi(K)=\sum\limits_{p=0}^{n}(-1)^pr_p$。特别地，

$$\chi(K)=\sum_{p=0}^{n}(-1)^p\beta_p^{(2)}.$$

模 2 同调群有很强的几何意义。$\mathbb{Z}_2$ 是除 $\mathbb{Z}$ 外最常用的系数群，我们较仔细地来考察它的定义。因为在 $\mathbb{Z}_2$ 中 $-1=+1$，对任意 $c_p\in C_p(K;\mathbb{Z}_2)$，$c_p(-\sigma^p)=-c_p(\sigma^p)=c_p(\sigma^p)$，也就是说，在模 2 同调群的定义中定向不起作用。模 2 链的一般形式可表示为 $c_p=\sigma_{i_1}+\cdots+\sigma_{i_k}$，即 $K$ 中单形或出现在链中或不出现，仅这两种情况。作为几何折线的推广，模 2 链更为自然。模 2 边缘同态由式 $\partial_p\langle a_0,\cdots,a_p\rangle=\sum\limits_{i=0}^{p}\langle a_0,\cdots,\hat a_i,\cdots,a_p\rangle$ 确定（这里可用无向单形代替有向单形）。令 $|c_p|$ 记 $c_p$ 中出现的所有单形的点组成的集合，则 $|c_1+c_2|=\operatorname{Cl}(|c_1|\cup|c_2|-|c_1|\cap|c_2|)$，$|\partial\sigma|=\operatorname{Bd}\sigma$（这里 $\operatorname{Bd}\sigma$ 是指 $\sigma$ 的点集边界而不是它的边缘复形）。

常见图形的模 2 同调群列于下表：

| 多面体 | 平环 | Möbius 带 | $S^2$ | $P^2$ | $T$ | Klein 瓶 | $D^2$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| $H_0(\cdot;\mathbb{Z}_2)$ | $\mathbb{Z}_2$ | $\mathbb{Z}_2$ | $\mathbb{Z}_2$ | $\mathbb{Z}_2$ | $\mathbb{Z}_2$ | $\mathbb{Z}_2$ | $\mathbb{Z}_2$ |
| $H_1(\cdot;\mathbb{Z}_2)$ | $\mathbb{Z}_2$ | $\mathbb{Z}_2$ | 0 | $\mathbb{Z}_2$ | $\mathbb{Z}_2\oplus\mathbb{Z}_2$ | $\mathbb{Z}_2\oplus\mathbb{Z}_2$ | 0 |
| $H_2(\cdot;\mathbb{Z}_2)$ | 0 | 0 | $\mathbb{Z}_2$ | $\mathbb{Z}_2$ | $\mathbb{Z}_2$ | $\mathbb{Z}_2$ | 0 |
