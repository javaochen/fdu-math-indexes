---
chapter: 7
chapter_title: 随机序列的收敛
section: "7.3"
section_title: Kolmogorov 不等式与强大数律（*）
pages: "141–143"
---

### 定理 7.3.1 (Kolmogorov) @141

设 $\{\xi_n\}$ 是独立平方可积随机序列，$\mu_n$ 和 $\sigma_n^2$ 分别表示其期望和方差，$S_n$ 表示其部分和，$m_n$ 和 $s_n^2$ 分别表示 $S_n$ 的期望与方差。则对任何 $n\ge 1$、$t>0$，有
$$\mathbb{P}\left(\max_{1\le k\le n}|S_k-m_k|\ge t\right)\le t^{-2}\mathbb{E}\big[(S_n-m_n)^2\big].$$

这是概率论中最有用的不等式之一，后来由 Doob 推广到鞅上，是随机分析的基本不等式。

### 注 (Kolmogorov 判别准则) @142

由 Kolmogorov 不等式可以推出独立随机序列的强大数律成立的一个判别准则：级数
$$\sum_k\frac{\sigma_k^2}{k^2}$$
收敛。事实上，由 Borel–Cantelli 引理，只需证明对任何 $t>0$，
$$\sum_n\mathbb{P}\left(\frac1n|S_n-m_n|>t\right)<\infty.$$
对 $k\ge 1$，在 $2^{k-1}<n\le 2^k$ 上应用 Kolmogorov 不等式，右边关于 $k$ 求和后可用 $\sum_{n\ge 1}\frac{16}{3}\frac{\sigma_n^2}{n^2}$ 控制，从而该级数有限；再由 Borel–Cantelli 引理推出
$$\max_{2^{k-1}<n\le 2^k}\frac1n|S_n-m_n|$$
几乎处处趋于零，这蕴含着 $\{\xi_n\}$ 服从强大数定律。

### 定理 7.3.2 (Kolmogorov) @143

独立同分布可积随机序列服从强大数定律。
