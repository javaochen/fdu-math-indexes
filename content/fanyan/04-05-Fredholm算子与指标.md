---
chapter: 4
chapter_title: 谱理论初步
section: "4.5"
section_title: Fredholm 算子与指标
pages: "177–183"
---

Fredholm 算子及其指标有着广泛的应用，为简化叙述，我们只介绍 Hilbert 空间上的情形。

### 定义 4.5.1 (Fredholm 算子与指标) @177

对于 Hilbert 空间 $H$ 上算子 $T$，如果它的值域 $\mathfrak{R}(T)$ 是闭的，并且 $\ker T$ 和 $H\ominus\mathfrak{R}(T)$ 都是有限维空间，则称它是一个 **Fredholm 算子**。此时，定义它的**指标**
$$\operatorname{ind}T=\dim\ker T-\dim H\ominus\mathfrak{R}(T).$$

### 注 4.5.1 (指标的另一表示) @177

此时由于 $\ker T^*=H\ominus\mathfrak{R}(T)$，因此也经常使用 $\operatorname{ind}T=\dim\ker T-\dim\ker T^*$。

### 例 4.5.1 (可逆算子指标为零) @177

设 $T$ 是 Hilbert 空间 $H$ 上的可逆算子，则 $T$ 是 Fredholm 算子，并且 $\operatorname{ind}T=0$。

### 例 4.5.2 (紧扰动指标为零) @177

设 $T$ 是 Hilbert 空间 $H$ 上的紧算子。由 Riesz-Schauder 定理可知，若 $\lambda\neq 0$，则 $\lambda I-T$ 是 Fredholm 算子，且
$$\operatorname{ind}(\lambda I-T)=\dim\ker(\lambda I-T)-\dim\ker(\lambda I-T)^*=0.$$

### 例 4.5.3 (移位算子指标) @177

设 $S,T$ 是 Hilbert 空间 $l^2$ 上的左移位算子与右移位算子：
$$S(x_1,x_2,\cdots,x_n,\cdots)=(x_2,x_3,\cdots,x_n,\cdots);$$
$$T(x_1,x_2,\cdots,x_n,\cdots)=(0,x_1,x_2,\cdots,x_n,\cdots).$$
令 $e_n$ 为第 $n$ 个位置取 $1$、其他位置为 $0$ 的数列。那么 $\ker S$ 是一维子空间 $\mathbb{C}e_1$，且 $S$ 是满射。从而 $S$ 是 Fredholm 算子，并且 $\operatorname{ind}S=1$。而 $T$ 是等距单射，$\mathfrak{R}(T)^\perp=\mathbb{C}e_1$，故 $T$ 也是 Fredholm 算子，并且 $\operatorname{ind}T=-1$。

更一般地，对任意 $n\in\mathbb{N}$，$S^n$ 是满射，$\ker S^n=\operatorname{span}\{e_1,e_2,\cdots,e_n\}$，因此 $S^n$ 是 Fredholm 算子且 $\operatorname{ind}S^n=n$。类似地，$T^n$ 也是 Fredholm 算子且 $\operatorname{ind}T^n=-n$。

### 定理 4.5.1 (Fredholm 算子的特征) @178

设 $T$ 是 Hilbert 空间 $H$ 上的有界线性算子。那么

（i）若 $T$ 是 Fredholm 算子，那么存在 $S\in\mathfrak{B}(H)$，使得 $I-TS$ 和 $I-ST$ 都是有限秩算子。

（ii）若存在 $S\in\mathfrak{B}(H)$ 使得 $I-TS$ 和 $I-ST$ 都是紧算子，那么 $T$ 是 Fredholm 算子。

### 注 4.5.2 (广义逆与紧扰动) @178

在（i）证明中出现的算子 $S$ 也是 Fredholm 算子，在计算数学中经常称之为 $T$ 的**广义逆**。又由（ii）的证明知，如果存在 $S_1,S_2\in\mathfrak{B}(H)$ 使得 $I-TS_1$ 和 $I-S_2T$ 都是紧算子，那么 $T$ 是 Fredholm 算子。

### 定理 4.5.2 (Fredholm 算子的乘积) @178

若 $T_1,T_2$ 都是 Hilbert 空间 $H$ 上的 Fredholm 算子，那么 $T_1T_2$ 也是 Fredholm 算子，并且
$$\operatorname{ind}T_1T_2=\operatorname{ind}T_1+\operatorname{ind}T_2.$$

### 定理 4.5.3 (指标在紧扰动下的不变性) @180

设 $T$ 是 Hilbert 空间 $H$ 上的 Fredholm 算子。若 $S$ 为 $H$ 上紧算子，则 $T+S$ 也是 Fredholm 算子并且
$$\operatorname{ind}T=\operatorname{ind}(T+S).$$

### 定理 4.5.4 (指标在范数扰动下的不变性) @180

设 $T$ 是 Hilbert 空间 $H$ 上的 Fredholm 算子，则存在 $\varepsilon>0$ 使得对于 $S\in\mathfrak{B}(H)$，$\|S\|<\varepsilon$，$T+S$ 也是 Fredholm 算子并且
$$\operatorname{ind}T=\operatorname{ind}(T+S).$$

### 推论 4.5.1 (指标的同伦不变性) @181

设 $H$ 是 Hilbert 空间，$F:[0,1]\to\mathfrak{B}(H)$ 是一个连续的算子道路（这里 $\mathfrak{B}(H)$ 取范数拓扑）。若对每个 $t\in[0,1]$，$F(t)$ 都是 $H$ 上的 Fredholm 算子，则
$$\operatorname{ind}F(0)=\operatorname{ind}F(1).$$

### 构造 (圆周上的 Toeplitz 算子) @181

对于单位圆周 $\mathbb{T}=\{z=\mathrm{e}^{\mathrm{i}\theta}:0\leqslant\theta<2\pi\}$，$L^2(\mathbb{T})$ 按内积
$$\langle f,g\rangle=\int_{[0,2\pi]}f(\mathrm{e}^{\mathrm{i}\theta})\overline{g(\mathrm{e}^{\mathrm{i}\theta})}\,\frac{\mathrm{d}\theta}{2\pi},\qquad \forall f,g\in L^2(\mathbb{T})$$
构成一个 Hilbert 空间。$\{z^n=\mathrm{e}^{\mathrm{i}n\theta}:n\in\mathbb{Z}\}$ 是 $L^2(\mathbb{T})$ 的一组正交基。它的子空间 $H^2(\mathbb{T})$ 定义为 $\{\mathrm{e}^{\mathrm{i}n\theta}:n=-1,-2,-3,\cdots\}$ 的零化子空间，即
$$H^2(\mathbb{T})=\left\{f\in L^2(\mathbb{T}):\ \langle f,\mathrm{e}^{\mathrm{i}n\theta}\rangle=\int_{[0,2\pi]}f(\mathrm{e}^{\mathrm{i}\theta})\mathrm{e}^{-\mathrm{i}n\theta}\,\mathrm{d}\theta=0,\ n=-1,-2,-3,\cdots\right\}.$$
显然 $\{\mathrm{e}^{\mathrm{i}n\theta}:n=0,1,2,\cdots\}$ 构成 $H^2(\mathbb{T})$ 的一组标准正交基。特别地，对 $H^2(\mathbb{T})$ 中元素 $f$，其展开式是 $f(\mathrm{e}^{\mathrm{i}\theta})=\sum\limits_{n=0}^{\infty}\langle f,\mathrm{e}^{\mathrm{i}n\theta}\rangle\mathrm{e}^{\mathrm{i}n\theta}$，并且 $\|f\|^2=\sum\limits_{n=0}^{\infty}|\langle f,\mathrm{e}^{\mathrm{i}n\theta}\rangle|^2$。令 $P$ 是从 $L^2(\mathbb{T})$ 到 $H^2(\mathbb{T})$ 上的正交投影，即
$$P(f)=\sum_{n=0}^{\infty}\langle f,\mathrm{e}^{\mathrm{i}n\theta}\rangle\mathrm{e}^{\mathrm{i}n\theta},\qquad \forall f\in L^2(\mathbb{T}).$$
对于 $f\in C(\mathbb{T})$，定义 **Toeplitz 算子** $T_f$ 为
$$T_f(g)=P(fg),\qquad \forall g\in H^2(\mathbb{T}),$$
则 $T_f$ 是 $H^2(\mathbb{T})$ 上的有界线性算子。实际上，
$$\|T_f\|=\sup_{\|g\|=1}\|P(fg)\|\leqslant\sup_{\|g\|=1}\|fg\|=\sup_{\|g\|=1}\left(\int_{[0,2\pi]}|f(\mathrm{e}^{\mathrm{i}\theta})g(\mathrm{e}^{\mathrm{i}\theta})|^2\,\frac{\mathrm{d}\theta}{2\pi}\right)^{1/2}$$
$$\leqslant\|f\|_\infty\sup_{\|g\|=1}\left(\int_{[0,2\pi]}|g(\mathrm{e}^{\mathrm{i}\theta})|^2\,\frac{\mathrm{d}\theta}{2\pi}\right)^{1/2}=\|f\|_\infty.\tag{4.19}$$

### 例 4.5.4 (常值函数算子为单位) @181

对常值函数 $f(z)=1\in C(\mathbb{T})$，显然有
$$T_1\mathrm{e}^{\mathrm{i}n\theta}=P(\mathrm{e}^{\mathrm{i}n\theta})=\mathrm{e}^{\mathrm{i}n\theta},\qquad n=0,1,2,\cdots,$$
即 $T_1=I$。

### 例 (单项式符号的 Toeplitz 算子) @182

对于恒等映射 $f(z)=z\in C(\mathbb{T})$，容易验证
$$T_z\mathrm{e}^{\mathrm{i}n\theta}=P(\mathrm{e}^{\mathrm{i}(n+1)\theta})=\mathrm{e}^{\mathrm{i}(n+1)\theta},\qquad n=0,1,2,\cdots.$$
所以，$T_z$ 可看作在标准正交基 $\{\mathrm{e}^{\mathrm{i}n\theta}:n=0,1,2,\cdots\}$ 下的右移位算子。再考虑 $\bar{z}\in C(\mathbb{T})$，直接计算得
$$T_{\bar{z}}\mathrm{e}^{\mathrm{i}0\theta}=P(\mathrm{e}^{-\mathrm{i}\theta})=0,\qquad T_{\bar{z}}\mathrm{e}^{\mathrm{i}n\theta}=P(\mathrm{e}^{\mathrm{i}(n-1)\theta})=\mathrm{e}^{\mathrm{i}(n-1)\theta},\qquad n=1,2,\cdots,$$
从而可以认为 $T_{\bar{z}}$ 是在标准正交基 $\{\mathrm{e}^{\mathrm{i}n\theta}:n=0,1,2,\cdots\}$ 下的左移位算子。容易验证
$$T_zT_{\bar{z}}\mathrm{e}^{\mathrm{i}0\theta}=0,\qquad T_zT_{\bar{z}}\mathrm{e}^{\mathrm{i}n\theta}=\mathrm{e}^{\mathrm{i}n\theta},\qquad n=1,2,\cdots,$$
因此 $T_zT_{\bar{z}}=I-P_0$，这里 $P_0$ 是到常数函数全体 $\mathbb{C}\mathrm{e}^{\mathrm{i}0\theta}$ 的正交投影。类似地，也可以验证 $T_{\bar{z}}T_z=I$。由定理 4.5.1 即得，$T_z$ 和 $T_{\bar{z}}$ 都是 Fredholm 的。并且由 $\ker T_z=\{0\}$，$\mathfrak{R}(T_z)^\perp=\mathbb{C}\mathrm{e}^{\mathrm{i}0\theta}$ 可得
$$\operatorname{ind}T_z=\dim\ker T_z-\dim\mathfrak{R}(T_z)^\perp=-1,$$
类似地也可以说明 $\operatorname{ind}T_{\bar{z}}=1$。

对于 $f(z)=z^k$，由于
$$T_{z^k}\mathrm{e}^{\mathrm{i}n\theta}=\mathrm{e}^{\mathrm{i}(n+k)\theta}=(T_z)^k(\mathrm{e}^{\mathrm{i}n\theta}),\qquad n=0,1,2,\cdots,$$
故 $T_{z^k}=(T_z)^k$。因此，$T_{z^k}$ 也是 Fredholm 算子并且
$$\operatorname{ind}T_{z^k}=k\operatorname{ind}T_z=-k.$$
$T_{z^k}$ 的 Fredholm 性也可通过
$$T_{\bar{z}^k}T_{z^k}=I,\qquad T_{z^k}T_{\bar{z}^k}=I-P_0-\cdots-P_{k-1}$$
得到，这里 $P_n$ 是到 $\mathbb{C}\mathrm{e}^{\mathrm{i}n\theta}$ 的秩 $1$ 投影。

### 引理 4.5.1 (托普利茨算子交换子紧) @182

设 $f,g\in C(\mathbb{T})$，则 $T_fT_g-T_{fg}$ 是 $H^2(\mathbb{T})$ 上的紧算子。

### 定理 4.5.5 (Toeplitz 算子的 Fredholm 性) @183

若 $C(\mathbb{T})$ 中函数 $f$ 在圆周 $\mathbb{T}$ 上不取零值，则 $T_f$ 是 Fredholm 的。

### 定理 4.5.6 (Brouwer 不动点定理) @183

若 $f$ 是单位圆盘 $\overline{\mathbb{D}}=\{z\in\mathbb{C}:|z|\leqslant 1\}$ 上的连续自映射，则存在不动点 $z\in\overline{\mathbb{D}}$ 使得 $f(z)=z$。

### 注 (指标的几何意义：绕数) @183

$T_f$ 的 Fredholm 指标也有明显的几何意义。当 $f$ 在 $\overline{\mathbb{D}}$ 上连续可导时，令 $f$ 的**绕数**
$$\omega(f)=\frac{1}{2\pi\mathrm{i}}\int_{\mathbb{T}}\frac{f'(z)}{f(z)}\,\mathrm{d}z,$$
它表示封闭曲线 $f(\mathbb{T})$ 绕零点逆时针走的圈数。那么可以证明此时
$$\operatorname{ind}T_f=-\omega(f).$$
这一指标结果可以看作著名的 Atiyah-Singer（阿蒂亚-辛格）定理在单位圆周这个简单情况下的具体形式。
