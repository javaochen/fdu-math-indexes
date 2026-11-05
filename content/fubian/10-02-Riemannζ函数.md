---
chapter: 10
chapter_title: Zeta 函数和素数定理
section: "10.2"
section_title: Riemann ζ 函数
pages: "261–266"
---

### 定义 (Riemann ζ 函数) @261

Riemann $\zeta$ 函数定义为
$$\zeta(s)=\sum_{n=1}^{\infty}\frac{1}{n^s},\qquad \operatorname{Re}s>1. \tag{10.16}$$
右端级数对 $\operatorname{Re}s\ge\sigma_0>1$ 绝对且一致收敛（$\forall\sigma_0>1$），因此 $\zeta(s)$ 是 $\operatorname{Re}s>1$ 上的全纯函数。

$\zeta$ 函数成为全纯数论的基础是基于其和素数之间的如下乘积公式。

### 定理 10.8 (Euler 乘积公式) @261

对 $\operatorname{Re}s>1$，
$$\frac{1}{\zeta(s)}=\prod_p\left(1-\frac{1}{p^s}\right), \tag{10.17}$$
这里无穷乘积 $\prod_p$ 对所有素数 $p$ 求积。

### 定理 10.9 @263

$\zeta$ 函数 $\zeta(s)$ 可以解析延拓为 $\mathbb{C}$ 上半纯函数，具有唯一的极点 $s=1$，该极点为一阶极点，具有留数 $\operatorname{Res}(\zeta,1)=1$。

### 定理 10.10 (函数方程) @263

$\zeta$ 函数 $\zeta(s)$ 满足如下函数方程
$$\zeta(s)=2^s\pi^{s-1}\sin\left(\frac{\pi s}{2}\right)\Gamma(1-s)\zeta(1-s). \tag{10.21}$$

### 注 (零点的初步结论) @264

利用关于 $\Gamma(s)$ 和 $\zeta(s)$ 的前述公式，可以得到函数 $\zeta(s)$ 零点的一些初步结论：

(1) 由 $\zeta(s)$ 的 Euler 乘积公式 (10.17) 知，$\zeta(s)$ 在 $\operatorname{Re}s>1$ 内没有零点；

(2) 由函数方程 (10.21) 知，$\zeta(s)$ 在 $\operatorname{Re}s<0$ 内只有零点 $s=-2,-4,-6,\ldots$，它们都是单零点。由于 $s=0$ 是 $\zeta(1-s)$ 的极点，故 $s=0$ 也不是 $\zeta(s)$ 的零点。$\operatorname{Re}s<0$ 内的零点 $s=-2,-4,-6,\ldots$ 称为 $\zeta(s)$ 的平凡零点；

(3) $\zeta(s)$ 的所有非平凡零点都位于带域 $\{s:0\le\operatorname{Re}s\le1\}$ 内，称此带域为临界带域。

### 注 (Riemann 假设) @264

**Riemann 假设**：$\zeta$ 函数的所有非平凡零点都位于临界直线 $\{s:\operatorname{Re}s=1/2\}$ 上。

### 定义 (ξ 函数的对称性) @264

注意到利用余元公式和 Legendre 倍乘公式，公式 (10.21) 可以改写为如下对称形式
$$\pi^{-s/2}\Gamma\left(\frac{s}{2}\right)\zeta(s)=\pi^{-(1-s)}\Gamma\left(\frac{2-s}{2}\right)\zeta(1-s). \tag{10.22}$$
如果记
$$\xi(s)=\frac{s(s-1)}{2}\pi^{-s/2}\Gamma(s/2)\zeta(s),$$
则有
$$\xi(s)=\xi(1-s). \tag{10.23}$$
由于 $\zeta(s)$ 的平凡零点正好是 $\Gamma(s/2)$ 的极点，相互抵消；因子 $s$ 和 $\Gamma(s/2)$ 的极点 $0$ 抵消；因子 $s-1$ 和 $\zeta(s)$ 极点 $1$ 抵消。故 $\xi(s)$ 是整函数，且其零点即为 $\zeta(s)$ 的非平凡零点。

### 注 (假设的等价叙述) @265

因此，Riemann 假设又可叙述为 $\xi(s)$ 的所有零点都在临界直线 $\operatorname{Re}s=1/2$ 上（或者，Riemann 假设可叙述为 $\xi(1/2+\mathrm{i}t)$ 的零点都是实数）。

### 定义 (Φ 函数的延拓) @265

可以进一步得到 $\zeta(s)$ 在临界带域的边界上也没有零点。为此，引入函数
$$\Phi(s)=\sum_p\frac{\log p}{p^s},\qquad \operatorname{Re}s>1. \tag{10.24}$$
这里及以后，求和号 $\sum_p$ 表示对所有素数求和。显然，(10.24) 中级数对任意 $\sigma_0>1$，在 $\operatorname{Re}s>\sigma_0$ 上绝对一致收敛，因此 $\Phi(s)$ 是 $\operatorname{Re}s>1$ 上的全纯函数。

另一方面，对 $\zeta(s)$ 的乘积公式 (10.17) 两边取对数并求导得
$$-\frac{\zeta'(s)}{\zeta(s)}=\sum_p\frac{\log p}{p^s-1}=\Phi(s)+\sum_p\frac{\log p}{p^s(p^s-1)}. \tag{10.25}$$
注意到等式最右端级数在 $\operatorname{Re}s>1/2$ 上内闭一致收敛，故其和函数在 $\operatorname{Re}s>1/2$ 上全纯。而左端 $-\zeta'(s)/\zeta(s)$ 是 $\mathbb{C}$ 上半纯函数，因此 $\Phi(s)$ 可以解析延拓为 $\operatorname{Re}s>1/2$ 上半纯函数，其极点为 $\zeta(s)$ 的极点或零点。这样，$s=1$ 是 $\Phi(s)$ 的一阶极点，其留数为 $1$，而若 $s_0$ 是 $\zeta(s)$ 的 $m$ 阶零点，则 $s_0$ 是 $\Phi(s)$ 的一阶极点，留数为 $-m$。

### 定理 10.11 @265

$\zeta(s)$ 在直线 $\operatorname{Re}s=1$ 上没有零点。

### 推论 10.12 @266

定理 10.11 的证明蕴含了它等价于：$\Phi(s)$ 在 $\operatorname{Re}s=1$ 上除 $s=1$ 外没有其他极点。

### 注 (非平凡零点的位置) @266

由对称性，$\zeta(s)$ 在 $\operatorname{Re}s=0$ 上也没有零点。因此，$\zeta(s)$ 的非平凡零点在开的带域 $\{s:0<\operatorname{Re}s<1\}$ 内。
