---
chapter: 1
chapter_title: 群论
section: "1.8"
section_title: Sylow 子群和 Sylow 定理
pages: "43–48"
---

### 例 1 @43

设 $n\geqslant 5$，考虑交错群 $A_n$，我们有 $\lvert A_n\rvert=\frac{1}{2}n!$。由于 $A_n$ 是单群，$A_n$ 中肯定没有阶为 $\frac{1}{4}n!$ 的子群。

### 定义 (Sylow p-子群) @43

设 $\lvert G\rvert=p^rs$，其中 $p$ 是素数，$r>0$，$s>1$，$p\nmid s$。$G$ 中的一个 $p^r$ 阶子群称为 $G$ 的一个 **Sylow $p$-子群**。

### 引理 8.1 @43

设 $n=p^rs$，其中 $p$ 是素数，$r>0$，$s>1$，$p\nmid s$，则
$$\binom{n}{p^r}\equiv s\pmod p.$$

### 定义 (共轭子群) @43

设 $G$ 为群，$H<G$，$a\in G$，则从定义直接可知 $aHa^{-1}<G$，我们称 $aHa^{-1}$ 与 $H$ **共轭**。

### 定理 8.2 (Sylow 定理) @44

设 $G$ 为有限群，$\lvert G\rvert=p^rs$，其中 $p$ 是素数，$r>0$，$s>1$，$p\nmid s$。则

(1) $G$ 中存在 Sylow $p$-子群。

(2) 设 $m$ 是 $G$ 中 Sylow $p$-子群的个数，则 $m\equiv 1\pmod p$。

(3) $G$ 中任意两个 Sylow $p$-子群互相共轭。

(4) 设 $P$ 是一个 Sylow $p$-子群，则 $m=[G:N_G(P)]$ 且 $m\mid s$。

### 注 (p-子群的嵌入) @45

定理 8.2 的证明蕴含如下结论：$G$ 的任一 $p$-子群都包含于某个 Sylow $p$-子群中。特别地，如果 $m=1$，那么这个唯一的 Sylow $p$-子群恰为 $G$ 的正规子群，这样的群 $G$ 一定不是单群。

### 例 2 (Cauchy 定理) @45

设 $p$ 是素数，如果群 $G$ 的阶可以被 $p$ 整除，那么 $G$ 中必有 $p$ 阶元。

### 例 3 (十阶群) @45

讨论 10 阶群中 Sylow 2-子群、Sylow 5-子群的个数。

解：$10=2\cdot 5$，由同余性条件，$m_2=1$ 或 $5$，$m_5=1$。

(1) 如果 $m_2=1$，$G$ 有唯一的 Sylow 2-子群 $H_2$ 和 Sylow 5-子群 $H_5$。于是 $H_2\cap H_5=\{e\}$，$\lvert H_2H_5\rvert=\dfrac{\lvert H_2\rvert\lvert H_5\rvert}{\lvert H_2\cap H_5\rvert}=10$，故 $G=H_2\cdot H_5$ 为内直积，即 $G\cong \mathbb{Z}_2\oplus\mathbb{Z}_5$。

(2) 如果 $m_2=5$，这种情形是可能出现的。比如，二面体群 $D_5$ 是非交换群，是平面上正五边形的对称群。沿正五边形的 5 条对称轴翻转给出了 5 个对合，分别生成了 $D_5$ 的五个 Sylow 2-子群。

事实上，可以证明 10 阶群只有两个同构类：$\mathbb{Z}_2\oplus\mathbb{Z}_5$ 和 $D_5$。

### 注 (Sylow 子群唯一判据) @46

如果 $\lvert G\rvert=p^rs$（$p$ 是素数，$r>0$，$s>1$，$p\nmid s$）且 $p>s$，那么 $m_p=1$，即 $G$ 有唯一的 Sylow $p$-子群 $H_p$，且 $H_p$ 为 $G$ 的正规子群。

### 例 4 (7225 阶群) @46

证明 $7225=5^2\cdot 17^2$ 阶群必为 Abel 群。

### 例 5 (77 阶商群) @46

设 $G$ 为群，证明 $\lvert G/C(G)\rvert\neq 77$。

### 例 6 (Sylow 子群内直积) @46

设 $G$ 是有限群，如果对 $\lvert G\rvert$ 的每个素因子 $p$，$G$ 的 Sylow $p$-子群均唯一，那么 $G$ 是其所有 Sylow 子群之内直积。

特别地，有限 Abel 群满足上例条件，因此每个有限 Abel 群都是其 Sylow 子群的内直和。

### 例 7 (6 阶群分类) @46

设 $G$ 是 6 阶群，证明 $G$ 同构于 $\mathbb{Z}_6$ 或 $S_3$。
