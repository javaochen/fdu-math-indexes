---
chapter: 1
chapter_title: R^k 中的集类
section: "1.3"
section_title: R^k 中的 Borel 代数
pages: "26–31"
---

$\mathbb{R}^k$ 上的测度是对 $\mathbb{R}^k$ 的一些子集的某种赋值。本节将讨论 $\mathbb{R}^k$ 中的子集族的代数性质。

**1.3.1　$\sigma$-环与 $\sigma$-代数**

设 $X$ 是一个非空的集合。若 $\mathcal{A}$ 是由 $X$ 的某些子集构成的集合，我们称它为 $X$ 上的集类，称 $X$ 为基本空间（或全集）。

### 例 1.3.1 (集类在子集上的限制) @26

如果 $M$ 是 $X$ 的子集，记 $\mathcal{A}\cap M\triangleq\{E\cap M:\ E\in\mathcal{A}\}$，则它是 $M$ 上的一个集类。

### 定义 1.3.2 (σ-环的定义) @26

设 $\mathcal{A}$ 是 $X$ 上的一个集类，若 $\mathcal{A}$ 对集合的交、并、差运算封闭，并且对可列交与可列并也封闭，即：对任何一列 $E_n\in\mathcal{A}$（$n=1,2,\cdots$）有
$$E_1\cup E_2,\quad E_1\cap E_2,\quad E_1\setminus E_2,\quad \bigcup_{n=1}^{\infty}E_n,\quad \bigcap_{n=1}^{\infty}E_n\in\mathcal{A},$$
则称 $\mathcal{A}$ 为 **$\sigma$-环**。

如果还有全集 $X\in\mathcal{A}$，就称 $\mathcal{A}$ 为 **$\sigma$-代数**。

### 注 1.3.3 (σ-环的等价刻画) @26

(i) 若非空集类 $\mathcal{A}$ 是 $\sigma$-环，那么 $\varnothing\in\mathcal{A}$：实际上，取某个 $E\in\mathcal{A}$，则 $\varnothing=E\setminus E\in\mathcal{A}$。

(ii) 在 $\sigma$-环定义中所列条件有些是多余的。例如，集类 $\mathcal{A}$ 是 $\sigma$-环当且仅当 $\mathcal{A}$ 对并运算、差运算封闭，且对单调递增集列极限运算封闭（即对 $\mathcal{A}$ 中单调递增集列 $\{E_n\}$，有 $\lim\limits_{n}E_n\in\mathcal{A}$）。其中交运算可借助 de Morgan 公式化为
$$E_1\cap E_2=E\setminus\big[(E\setminus E_1)\cup(E\setminus E_2)\big]\in\mathcal{A}.\tag{1.8}$$

### 例 1.3.4 (σ-环的典型例子) @27

- 全集 $X$ 的幂集 $2^X$ 是 $X$ 上的 $\sigma$-环，也是 $\sigma$-代数。它是 $X$ 上最大的 $\sigma$-环。
- 集类 $\{\varnothing,X\}$ 是 $\sigma$-代数，但集类 $\{\varnothing\}$ 只是 $\sigma$-环。它们分别是最小的 $\sigma$-代数与 $\sigma$-环。
- 全集 $X$ 的可数子集全体 $\mathcal{A}$ 是 $\sigma$-环。若全集 $X$ 是可数集，那么 $\mathcal{A}=2^X$，故它也是 $\sigma$-代数。
- 若集合 $X$ 上的一些集类 $\{\mathcal{A}_\lambda:\ \lambda\in\Gamma\}$ 都是 $\sigma$-环（$\sigma$-代数），那么它们的交集 $\bigcap\limits_{\lambda\in\Gamma}\mathcal{A}_\lambda$ 也是 $\sigma$-环（$\sigma$-代数）。

### 注 (生成的 $\sigma$-环) @27

对于全集 $X$ 上的一个集类 $\mathcal{A}$，它可能对某些运算不封闭，在使用中就会遇到很多困难。这时，我们可以转而使用包含 $\mathcal{A}$ 的最小 $\sigma$-环，这个最小 $\sigma$-环常记为 $S(\mathcal{A})$，称为 $\mathcal{A}$ **生成的 $\sigma$-环**。这个最小的 $\sigma$-环 $S(\mathcal{A})$ 总是存在的。令 $\Gamma=\{\mathcal{R}:\ \mathcal{R}\ \text{是}\ \sigma\text{-环},\ \mathcal{R}\supset\mathcal{A}\}$ 为包含 $\mathcal{A}$ 的所有 $\sigma$-环，那么我们有
$$S(\mathcal{A})=\bigcap_{\mathcal{R}\in\Gamma}\mathcal{R}.$$

### 定义 1.3.5 (Borel 代数与 Borel 集) @27

由 $\mathbb{R}^k$ 上的开集全体生成的 $\sigma$-环称为 **Borel 代数**，记作 $\mathfrak{B}_{\mathbb{R}^k}$（在不引起误解的情况下，也常记作 $\mathfrak{B}(\mathbb{R}^k)$，$\mathfrak{B}_k$，$\mathfrak{B}$ 等符号）。它中的元素称为 **Borel 集**。

$\mathfrak{B}(\mathbb{R}^k)$ 不仅是个 $\sigma$-环，也是一个 $\sigma$-代数。故它也是开集全体生成的 $\sigma$-代数。

### 例 1.3.6 (常见的 Borel 集) @27

- 任意闭集都是 Borel 集。
- 左开右闭区间与左闭右开区间都是直线上的 Borel 集。左开右闭矩体、左闭右开矩体都是 $\mathbb{R}^k$ 上的 Borel 集。
- $F_\sigma$ 型集、$G_\delta$ 型集都是 Borel 集。

还有许多更复杂的集合是 Borel 集。

除开集全体外，$\mathbb{R}^k$ 上的 Borel 代数 $\mathfrak{B}(\mathbb{R}^k)$ 还可以由很多其他的集类生成。

### 例 1.3.7 (Borel 代数的生成) @27

(i) $\mathfrak{B}(\mathbb{R}^k)$ 可由闭集全体生成。

(ii) 直线上 Borel 代数可由有界开区间 $\{(a,b):\ a,b\in\mathbb{R}\}$ 生成。

(iii) 直线上 Borel 代数可由有界闭区间 $\{[a,b]:\ a,b\in\mathbb{R}\}$，有界左开右闭区间 $\{(a,b]:\ a,b\in\mathbb{R}\}$，或有界左闭右开区间 $\{[a,b):\ a,b\in\mathbb{R}\}$ 中任一集类生成。

(iv) 直线上 Borel 代数可由无界区间集列 $\{(-\infty,a):\ a\in\mathbb{R}\}$，$\{(-\infty,a]:\ a\in\mathbb{R}\}$，$\{(a,+\infty):\ a\in\mathbb{R}\}$，$\{[a,+\infty):\ a\in\mathbb{R}\}$ 中任一集类生成。

(v) $\mathfrak{B}(\mathbb{R}^k)$ 可由有界开矩体 $\{(a,b):\ a,b\in\mathbb{R}^k\}$，有界闭矩体 $\{[a,b]:\ a,b\in\mathbb{R}^k\}$，有界左开右闭矩体 $\{(a,b]:\ a,b\in\mathbb{R}^k\}$，有界左闭右开矩体 $\{[a,b):\ a,b\in\mathbb{R}^k\}$ 中任一集类生成。

### 例 1.3.8 (Borel 集示性函数可测) @28

设集合 $\mathcal{F}$ 由直线上一些实值函数组成。它包含所有连续函数，又对加法、乘法、数乘和绝对值操作封闭，且对点态收敛封闭（当 $\mathcal{F}$ 中函数列 $f_n$ 点态收敛于 $f$ 时，$f\in\mathcal{F}$）。那么，对任何 Borel 集 $E$ 都有 $\chi_E\in\mathcal{F}$。

### 例 1.3.9 (生成环与子集限制) @28

集 $X$ 上的集族 $\mathcal{A}$ 生成了 $\sigma$-环 $S(\mathcal{A})$。那么，对于 $X$ 的子集 $M$，它的集族 $\mathcal{A}\cap M$ 生成的 $\sigma$-环就是 $S(\mathcal{A})\cap M$，也即
$$S(\mathcal{A}\cap M)=S(\mathcal{A})\cap M.$$
证明留作练习。

### 注 ($E$ 上的 Borel 代数与 $\overline{\mathbb{R}}^k$ 上的 Borel 代数) @28

特别的，如果 $E$ 为 $\mathbb{R}^k$ 中的一个 Borel 子集，那么包含在 $E$ 中的 Borel 集全体就已经是一个 $E$ 上的 $\sigma$-代数，常称为 $E$ 上的 **Borel 代数**，常记作 $\mathfrak{B}_E$ 或 $\mathfrak{B}(E)$ 等符号。

由例 1.3.7，集类 $\{O\cap E:\ O\ \text{是}\ \mathbb{R}^k\ \text{开集}\}$、$\{F\cap E:\ F\ \text{是}\ \mathbb{R}^k\ \text{闭集}\}$、$\{O\cap E:\ O\ \text{是}\ \mathbb{R}^k\ \text{有界开矩体}\}$、$\{O\cap E:\ O\ \text{是}\ \mathbb{R}^k\ \text{有界闭矩体}\}$ 中的任一个生成的 $\sigma$-环都是 $\mathfrak{B}_E$。

在 $\overline{\mathbb{R}}^k$ 上，所有闭矩体全体生成的 $\sigma$-环也是一个 $\sigma$-代数，称为 $\overline{\mathbb{R}}^k$ 上的 **Borel 代数**，记作 $\mathfrak{B}(\overline{\mathbb{R}}^k)$（或 $\mathfrak{B}_{\overline{\mathbb{R}}^k}$）。它中的元素称为 $\overline{\mathbb{R}}^k$ 上 Borel 集。使用定理 1.2.9 后的讨论，易证 $\overline{\mathbb{R}}^k$ 中的开集、闭集或者单点集都是 Borel 集。

容易证明 $\mathfrak{B}_{\overline{\mathbb{R}}^k}\cap\mathbb{R}^k=\mathfrak{B}_{\mathbb{R}^k}$。证明留给读者自行完成。

**1.3.2　环与代数**

由集类生成 $\sigma$-环是一个非常复杂的过程，为便于讨论中我们常使用如下概念。

### 定义 1.3.10 (半环、环、代数) @28

设 $\mathcal{A}$ 是全集 $X$ 上的一个集类。

- 集类 $\mathcal{A}$ 被称作 $X$ 上的一个 **半环**，是指当集 $B_1,B_2\in\mathcal{A}$ 时，
$$B_1\cap B_2\in\mathcal{A};\qquad B_1\setminus B_2=\bigsqcup_{i=1}^{n}E_i,\quad \text{其中}\ n\in\mathbb{N},\ E_1,\cdots,E_n\in\mathcal{A}.$$
- 集类 $\mathcal{A}$ 对交、并、差运算封闭，则称 $\mathcal{A}$ 是 $X$ 上的一个 **环**。
- 若集类 $\mathcal{A}$ 是一个环，且全集 $X\in\mathcal{A}$，则称 $\mathcal{A}$ 是 $X$ 上的一个 **代数**。

显然，$X$ 上的一个代数是一个环；$X$ 上的一个环是一个半环。对于集类 $\mathcal{A}$，包含 $\mathcal{A}$ 的最小的半环（环，代数）称为它**生成的半环（环，代数）**。

### 例 1.3.11 (单点集生成的集环) @29

在直线 $\mathbb{R}$ 上，令 $\mathcal{A}=\{\{x\}:\ x\in\mathbb{R}\}$ 为所有单点集，则

- $\mathcal{A}$ 生成的半环为 $\mathcal{A}\cup\{\varnothing\}$。
- $\mathcal{A}$ 生成的环为 $\{E\subseteq\mathbb{R}:\ E\ \text{是有限集}\}$。
- $\mathcal{A}$ 生成的 $\sigma$-环为 $\{E\subseteq\mathbb{R}:\ E\ \text{是可数集}\}$。
- $\mathcal{A}$ 生成的代数为 $\{E\subseteq\mathbb{R}:\ E\ \text{或}\ \mathbb{R}\setminus E\ \text{是有限集}\}$。
- $\mathcal{A}$ 生成的 $\sigma$-代数是 $\{E\subseteq\mathbb{R}:\ E\ \text{或}\ \mathbb{R}\setminus E\ \text{是可数集}\}$。

### 例 1.3.12 (半环的典型例子) @29

(i) 开集全体不是半环。

(ii) 直线上的开区间全体、闭区间全体都不是半环。

(iii) 直线上的开闭集全体 $\mathcal{A}=\{E:\ \text{存在开集}\ U\ \text{与闭集}\ F\ \text{使得}\ E=U\cap F\}$ 是一个半环。

(iv) 直线上有界区间全体 $\mathcal{A}=\{\langle a,b\rangle:\ a,b\in\mathbb{R}\}$ 是一个半环。

(v) 直线上有界左开右闭区间全体 $\mathcal{A}=\{(a,b]:\ a,b\in\mathbb{R}\}$ 是一个半环。

(vi) $\mathbb{R}^k$ 上有界左开右闭矩体全体 $\mathcal{A}=\{(a,b]:\ a,b\in\mathbb{R}^k\}$ 是一个半环。

上述例子都不是环。从中可以看出，开集全体与开区间全体作为集类，它们的代数性质是比较差的。使用它们作为 Borel 代数的生成元进行讨论，会带来许多不必要的麻烦。

### 命题 1.3.13 (半环生成的环) @29

如果 $\mathcal{A}$ 为一个半环，则 $\mathcal{A}$ 生成的环为
$$\mathcal{R}=\left\{\bigsqcup_{i=1}^{n}E_i:\ n\in\mathbb{N},\ E_i\in\mathcal{A}\right\}.$$

### 注 (半环生成的环的例子) @30

例如，集类
$$\left\{\bigsqcup_{i=1}^{n}(a_i,b_i]:\ n\in\mathbb{N},\ -\infty<a_1\le b_1<\cdots<a_n\le b_n<+\infty\right\}$$
是直线上有界左开右闭区间全体生成的环。

### 推论 1.3.14 (开集的矩体分解) @30

对 $\mathbb{R}^k$ 中开集 $U$，存在可数个有界左开右闭矩体 $\{(a_i,b_i]\}$ 使得
$$U=\bigsqcup_{i}(a_i,b_i].$$

**1.3.3　单调类**

从环到 $\sigma$-环，常常用到单调类的技巧。

### 定义 1.3.15 (单调类) @30

设 $\mathcal{A}$ 是集合 $X$ 上的一个集类。如果对于 $\mathcal{A}$ 中的任何单调集列 $\{E_n\}$，都有 $\lim\limits_{n\to\infty}E_n\in\mathcal{A}$，就称 $\mathcal{A}$ 是 **单调类**。

容易看出，任意个单调类的交还是单调类。因此，对任意集类 $\mathcal{A}$，那么存在包含 $\mathcal{A}$ 的最小的单调类，我们称之为 $\mathcal{A}$ **生成的单调类**，记为 $M(\mathcal{A})$。

$\sigma$-环是单调类。反之，由注 1.3.3(ii)，如果集类 $\mathcal{A}$ 既是单调类又是环，那么它是 $\sigma$-环。实际上，我们还有如下的单调类定理。

### 定理 1.3.16 (单调类定理) @31

设 $\mathcal{R}$ 是环，那么 $S(\mathcal{R})=M(\mathcal{R})$。

### 构造 (Borel 代数的构造) @31

由例 1.3.12(vi)，有界左开右闭矩体全体 $\mathcal{F}=\{(a,b]:\ a,b\in\mathbb{R}^k\}$ 生成的 $\sigma$-环就是 $\mathbb{R}^k$ 的 Borel 代数 $\mathfrak{B}(\mathbb{R}^k)$。首先，$\mathcal{F}$ 生成了环
$$\mathcal{R}_0\triangleq\left\{\bigsqcup_{i=1}^{m}(a_i,b_i]:\ m\in\mathbb{N},\ a_1,b_1,\cdots,a_m,b_m\in\mathbb{R}^k\right\}.$$
再将 $\mathcal{R}_0$ 生成单调类，就得到了 Borel 代数。具体说来，令
$$\mathcal{R}_1\triangleq\left\{\lim_{n}E_n:\ \text{单调集列}\ \{E_n\}\subseteq\mathcal{R}_0\right\}.$$
然而 $\mathcal{R}_1$ 并不对极限运算封闭。继续用类似的方式取
$$\mathcal{R}_2\triangleq\left\{\lim_{n}E_n:\ \text{单调集列}\ \{E_n\}\subseteq\mathcal{R}_1\right\},$$
$\mathcal{R}_3,\mathcal{R}_4,\cdots$。

再令 $\mathcal{R}_{\aleph_0}=\bigcup\limits_{n}\mathcal{R}_n$。然而，$\mathcal{R}_{\aleph_0}$ 仍旧不是单调类！！故继续定义 $\mathcal{R}_{\aleph_0+1}$ 为
$$\mathcal{R}_{\aleph_0+1}\triangleq\left\{\lim_{n}E_n:\ \text{单调列}\ \{E_n\}\subseteq\mathcal{R}_{\aleph_0}\right\},$$
……反复以上过程。由公理集合论中的结果可知，在 ZFC 公理体系下，步骤在第一个不是可数的基数 $\aleph_1$ 处步骤终止，故 $\mathcal{R}_{\aleph_1}$ 即为 Borel 代数。（为避免涉及更多集合论知识，叙述中未区分序数和基数的概念。更严格的讨论可参见 Folland [9] 中的节 0.4 及性质 1.23，或 Jech [11]。）并且，由上述构造过程可得，
$$\overline{\mathfrak{B}(\mathbb{R}^k)}=\mathfrak{c}.$$
