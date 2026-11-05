---
chapter: 4
chapter_title: 全纯函数级数理论
section: "4.6"
section_title: Mittag-Leffler 定理
pages: "141–147"
---

### 定义 (半纯函数) @141

区域上除了极点外都全纯的函数称为半纯函数（meromorphic function），半纯函数也即为区域 $\Omega\subset\mathbb{C}_\infty$ 到扩充复平面 $\mathbb{C}_\infty$ 的全纯映射。

### 例 4.13 (半纯函数与有理函数) @141

整个扩充复平面 $\mathbb{C}_\infty$ 上的半纯函数是有理函数。

### 注 (部分分式分解) @142

设 $f$ 是有理函数，$z_1,\dots,z_p$ 是它的全部有限极点，$P_j\bigl(1/(z-z_j)\bigr)$ 是 $f$ 在 $z_j$ 处 Laurent 展开式的主要部分，并记 $P(z)=P_\infty(z)+c$，其中 $P_\infty$ 来自 $f$ 在 $\infty$ 处 Laurent 展开式的主要部分（若 $f$ 在 $\infty$ 全纯则取 $P_\infty=0$），$c$ 为常数，则 $P(z)$ 为 $\mathbb{C}$ 上多项式，且有
$$f(z)=\sum_{j=1}^{p}P_j\Bigl(\frac{1}{z-z_j}\Bigr)+P(z).$$
上式称为有理函数 $f$ 的部分分式分解。

### 定理 4.19 (Mittag-Leffler 定理) @142

设 $\mathbb{C}$ 上半纯函数 $f$ 的极点为 $z_1,z_2,\cdots,z_n,\cdots$。又设 $P_n$，$n=1,2,\dots$，是多项式，使得 $P_n\Bigl(\dfrac{1}{z-z_n}\Bigr)$ 是 $f$ 在 $z_n$ 处 Laurent 展开式的主要部分。则存在多项式 $Q_n(z)$，$n=1,2,\dots$，以及整函数 $g(z)$ 使得
$$f(z)=\sum_{n=1}^{+\infty}\left[P_n\Bigl(\frac{1}{z-z_n}\Bigr)-Q_n(z)\right]+g(z),\tag{4.30}$$
其中，级数 $\displaystyle\sum_{n=1}^{+\infty}\left[P_n\Bigl(\frac{1}{z-z_n}\Bigr)-Q_n(z)\right]$ 在 $\mathbb{C}\setminus\{z_1,z_2,\cdots\}$ 上内闭一致收敛，且去掉第 $n$ 项后在点 $z_n$ 处也收敛。

### 定理 4.20 (Mittag-Leffler 存在性) @144

设 $(z_n)$ 是 $\mathbb{C}$ 中互不相同的点构成的点列，在 $\mathbb{C}$ 中没有极限点。又设 $P_n$ 是非常值多项式满足 $P_n(0)=0$，$n=1,2,\dots$。则存在 $\mathbb{C}$ 上半纯函数 $h$，使得 $h$ 恰好以 $z_n$ 为极点，$n=1,2,\dots$，且在 $z_n$ 处其 Laurent 展开式的主要部分是 $P_n\Bigl(\dfrac{1}{z-z_n}\Bigr)$。

### 例 4.14 (正弦平方的部分分式) @144

证明
$$\frac{\pi^2}{\sin^2\pi z}=\sum_{n=-\infty}^{+\infty}\frac{1}{(z-n)^2}.\tag{4.32}$$

### 例 4.15 (余切的部分分式) @145

证明
$$\pi\cot\pi z=\frac{1}{z}+\sum_{n=1}^{+\infty}\frac{2z}{z^2-n^2}.\tag{4.33}$$

### 定理 4.21 (一般区域的情形) @145

设 $(z_n)$ 是区域 $\Omega$ 中互不相同的点构成的点列，且在 $\Omega$ 内没有极限点。又设 $P_n$ 是非常值多项式满足 $P_n(0)=0$，$n=1,2,\dots$。则存在 $\Omega$ 上半纯函数 $h$，使得 $h$ 恰好以 $z_n$ 为极点，$n=1,2,\dots$，且在 $z_n$ 处其 Laurent 展开式的主要部分是 $P_n\Bigl(\dfrac{1}{z-z_n}\Bigr)$。
