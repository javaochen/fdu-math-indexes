---
chapter: 4
chapter_title: 全纯函数级数理论
section: "4.7"
section_title: Weierstrass 因子分解定理
pages: "148–156"
---

### 注 (零点与极点的对偶) @148

上一节的 Mittag-Leffler 定理说明，如果区域上给定极点及其阶，半纯函数总是存在的。对应地，可以考虑是否具有给定零点及其阶的全纯函数。

如果给定有限个互不相同的点 $z_1,z_2,\cdots,z_k$ 以及相应的正整数 $n_1,n_2,\cdots,n_k$，则多项式
$$P(z)=(z-z_1)^{n_1}(z-z_2)^{n_2}\cdots(z-z_k)^{n_k}$$
是以 $z_j$ 为 $n_j$ 阶零点的全纯函数，$j=1,2,\dots,k$。反之，非常值多项式也一定有如上因子分解。但对一般的非常值全纯函数，其可能有无穷多个零点，需要考虑无穷多个因子的乘积带来的收敛问题。

### 定义 (无穷乘积) @148

设 $(c_n)$ 是复数序列，将这无穷多个复数作形式上的乘积
$$\prod_{n=1}^{+\infty}c_n=c_1c_2\cdots c_n\cdots,\tag{4.35}$$
则称其为 $(c_n)$ 的无穷乘积。对给定的正整数 $n$，称 $\prod\limits_{j=1}^{n}c_j$ 为该无穷乘积的部分乘积。如果极限 $P=\lim\limits_{n\to+\infty}\prod\limits_{j=1}^{n}c_j$ 存在，称其为无穷乘积 (4.35) 的积，也记为 $\prod\limits_{n=1}^{+\infty}c_n$。

### 定义 (无穷乘积的收敛性) @149

如果存在正整数 $n_0$ 使得无穷乘积 $\prod\limits_{n=n_0}^{+\infty}c_n$ 的部分乘积序列收敛且极限非零，即极限
$$\lim_{n\to+\infty}\prod_{j=n_0}^{n}c_j=\prod_{n=n_0}^{+\infty}c_n\neq0,$$
则称无穷乘积 $\prod\limits_{n=1}^{+\infty}c_n$ 收敛。收敛时，其积为
$$\prod_{n=1}^{+\infty}c_n=\prod_{n=1}^{n_0-1}c_n\cdot\prod_{n=n_0}^{+\infty}c_n=\prod_{j=1}^{n_0-1}c_j\cdot\lim_{n\to+\infty}\prod_{j=n_0}^{n}c_j.\tag{4.36}$$

### 定理 4.22 (无穷乘积的基本性质) @149

(1) 若无穷乘积 $\prod\limits_{n=1}^{+\infty}c_n$ 收敛，则 $\lim\limits_{n\to+\infty}c_n=1$；

(2) 若无穷乘积 $\prod\limits_{n=1}^{+\infty}c_n$ 收敛，则其积 $\prod\limits_{n=1}^{+\infty}c_n=0$ 当且仅当存在某个 $c_n=0$；

(3) 无穷乘积 $\prod\limits_{n=1}^{+\infty}c_n$ 收敛当且仅当存在 $n_0$，使得级数 $\sum\limits_{n=n_0}^{+\infty}\log c_n$ 收敛，其中 $\log c_n$ 为 $c_n$ 的对数主值。

### 定义 (无穷乘积的绝对收敛) @150

如果 $\sum\limits_{n=n_0}^{+\infty}\log c_n$ 绝对收敛，则称无穷乘积 $\prod\limits_{n=1}^{+\infty}c_n$ 绝对收敛。又级数 $\sum\limits_{n=n_0}^{+\infty}\log c_n$ 绝对收敛意味着收敛，按定理 4.22 之 (3)，绝对收敛的无穷级数也收敛。

因定理 4.22 之 (1)，通常记 $c_n=1+b_n$。那么，$\prod\limits_{n=1}^{+\infty}(1+b_n)$ 收敛意味着 $b_n\to0$。

### 定理 4.23 (绝对收敛的判别) @150

无穷乘积 $\prod\limits_{n=1}^{+\infty}(1+b_n)$ 绝对收敛当且仅当 $\sum\limits_{n=1}^{+\infty}b_n$ 绝对收敛，从而当且仅当 $\prod\limits_{n=1}^{+\infty}(1+|b_n|)$ 收敛。

### 定义 (函数列无穷乘积) @151

设 $(f_n)$ 是集合 $E\subset\mathbb{C}$ 上函数序列，如果对每个 $z\in E$，无穷乘积 $\prod\limits_{n=1}^{+\infty}f_n(z)$ 收敛，则称关于函数列 $(f_n)$ 的无穷乘积 $\prod\limits_{n=1}^{+\infty}f_n$ 在 $E$ 上收敛。收敛时，其积 $f=\prod\limits_{n=1}^{+\infty}f_n$ 是 $E$ 上函数。类似定义函数列无穷乘积的绝对收敛。

### 定义 (内闭一致收敛) @151

又设 $(f_n)$ 是区域 $\Omega$ 上全纯函数序列，如果对任意紧集 $K\subset\Omega$，存在正整数 $n_0$，使得极限 $\lim\limits_{n\to+\infty}\prod\limits_{j=n_0}^{n}f_j$ 在 $K$ 上一致收敛于函数 $g$，且 $g$ 在 $K$ 中没有零点，则称无穷乘积 $f=\prod\limits_{n=1}^{+\infty}f_n$ 在区域 $\Omega$ 上内闭一致收敛。

### 定理 4.24 (无穷乘积的内闭一致收敛) @151

设 $(f_n)$ 是区域 $\Omega$ 上全纯函数序列，每个 $f_n$ 都不恒为零。记 $g_n=1-f_n$，如果级数 $\sum\limits_{n=1}^{+\infty}|g_n|$ 在 $\Omega$ 上内闭一致收敛，那么，

(1) 无穷乘积 $\prod\limits_{n=1}^{+\infty}f_n$ 在 $\Omega$ 上内闭一致收敛于全纯函数 $f$。

(2) $f(z_0)=0$ 当且仅当存在某个因子 $f_n$ 使得 $f_n(z_0)=0$。并且，仅有有限多个因子以 $z_0$ 为零点。设以 $z_0$ 为零点的因子为 $f_{n_1},\dots,f_{n_k}$，其阶分别为 $m_1,\dots,m_k$，则 $z_0$ 是 $f$ 的 $m$ 阶零点，$m=m_1+\cdots+m_k$。

### 定义 (Weierstrass 初等因子) @152

称仅以 $1$ 为一阶零点的如下整函数
$$E_0(z)=1-z,\qquad E_p(z)=(1-z)\exp\left(\sum_{n=1}^{p}\frac{z^n}{n}\right),\qquad p=1,2,\dots,\tag{4.39}$$
为 Weierstrass 初等因子，简称初等因子。给定 $c\in\mathbb{C}^*$，则 $E_p(z/c)$ 是以 $c$ 为唯一一阶零点的整函数。

### 引理 4.25 (初等因子的估计) @152

对每个 $p\ge0$，初等因子 $E_p$ 满足
$$|E_p(z)-1|\le|z|^{p+1},\qquad z\in\mathbb{D}.$$

### 定理 4.26 (Weierstrass 乘积定理) @153

设 $(z_n)$ 是穿孔复平面 $\mathbb{C}^*$ 中点列，使得 $|z_n|\to+\infty$，$n\to+\infty$。又设 $(p_n)$ 是自然数序列，使得级数
$$\sum_{n=1}^{+\infty}\left(\frac{r}{|z_n|}\right)^{p_n+1}<+\infty\tag{4.40}$$
对任意给定的 $r>0$ 成立。那么无穷乘积
$$f(z)=\prod_{n=1}^{+\infty}E_{p_n}\left(\frac{z}{z_n}\right)\tag{4.41}$$
在 $\mathbb{C}$ 上内闭一致收敛，定义了 $\mathbb{C}$ 上恰好以 $(z_n)$ 中点为所有零点的整函数，并且如果某个点在 $(z_n)$ 中出现 $m$ 次，则该点是 $f$ 的 $m$ 阶零点。

### 注 (关于 $p_n$ 的选取) @153

满足条件 (4.40) 的序列 $(p_n)$ 总是存在的。事实上，取 $p_n=n$ 即满足条件，但在很多情形，$p_n$ 可以取得比 $n$ 更小。如何选取合适的 $p_n$ 视具体问题而定。

### 例 4.16 (以负整数为零点的整函数) @153

求以负整数 $-1,-2,\dots$ 为一阶零点且没有其他零点的整函数。

解：此时，无穷乘积 $\prod\limits_{n=1}^{+\infty}\left(1+\dfrac{z}{n}\right)$ 对任意 $z\neq0$ 不收敛。但由于 $\sum\limits_{n=1}^{+\infty}\dfrac{1}{n^2}<+\infty$ 收敛，只要在 (4.40) 中取 $p_n=1$，则对任意 $r>0$，
$$\sum_{n=1}^{+\infty}\left(\frac{r}{n}\right)^2=r^2\sum_{n=1}^{+\infty}\frac{1}{n^2}<+\infty.$$
由定理 4.26，所求整函数为
$$f(z)=\prod_{n=1}^{+\infty}E_1\left(\frac{z}{-n}\right)=\prod_{n=1}^{+\infty}\left(1+\frac{z}{n}\right)\mathrm{e}^{-z/n}.$$

### 定理 4.27 (Weierstrass 因子分解定理) @154

设 $f$ 是非常值整函数，又设 $(z_n)$ 是 $f$ 的非零零点序列（$m$ 阶零点在序列中重复出现 $m$ 次）。那么，存在整函数 $g$，自然数 $p$，以及自然数列 $(p_n)$，使得 $f$ 有如下因子分解
$$f(z)=\mathrm{e}^{g(z)}z^p\prod_{n=1}^{+\infty}E_{p_n}\left(\frac{z}{z_n}\right).\tag{4.42}$$

### 例 4.17 (正弦函数的乘积公式) @154

证明
$$\frac{\sin\pi z}{\pi z}=\prod_{n=1}^{+\infty}\left(1-\frac{z^2}{n^2}\right).\tag{4.43}$$

### 定理 4.28 (一般区域上的零点构造) @155

设 $(z_n)$ 是区域 $\Omega$ 中点列（同一个复数可重复出现），在 $\Omega$ 内没有极限点。则存在 $\Omega$ 上全纯函数 $f$，使得 $f$ 恰好以 $(z_n)$ 中点为零点，且若某个点在序列 $(z_n)$ 中出现 $m$ 次，则该点是 $f$ 的 $m$ 阶零点。
