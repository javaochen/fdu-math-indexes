---
chapter: 3
chapter_title: 域论
section: "3.8"
section_title: 多项式 Galois 群的计算
pages: "172–177"
---

### 定义 (多项式的Galois群) @172

对一个可分多项式 $f(x)\in F[x]$，设 $E$ 为 $f(x)$ 在 $F$ 上的分裂域. 我们记
$$\operatorname{Gal}_F(f)\triangleq \operatorname{Gal}(E/F),$$
称 $\operatorname{Gal}_F(f)$ 为 $f(x)$ 在 $F$ 上的 **Galois 群**.

### 引理 8.1 @172

若域 $F$ 上可分多项式 $f(x)$ 满足 $\deg f=n$，则 $\operatorname{Gal}_F(f)$ 是对称群 $S_n$ 的一个子群.

### 命题 8.2 @172

设 $F$ 为域，$f(x)\in F[x]$ 为可分多项式. 则 $f(x)$ 是不可约的当且仅当 $\operatorname{Gal}_F(f)$ 在 $f(x)$ 的根集上的作用是可迁的.

### 例 1 @172

考虑 $f(x)=(x^2-2)(x^2-3)\in\mathbb{Q}[x]$，求 $\operatorname{Gal}_{\mathbb{Q}}(f)$.

$E=\mathbb{Q}(\sqrt{2},\sqrt{3})$，$[E:\mathbb{Q}]=4$. $E/\mathbb{Q}$ 上的自同构 $\eta$ 被 $\eta(\sqrt{2})$ 与 $\eta(\sqrt{3})$ 所唯一确定，故 $\eta(\sqrt{2})$ 只能为 $\pm\sqrt{2}$，$\eta(\sqrt{3})$ 只能为 $\pm\sqrt{3}$. 四个自同构为
$$\begin{aligned}
\operatorname{id}=\eta_1&:\sqrt{2}\mapsto\sqrt{2};\ \sqrt{3}\mapsto\sqrt{3},\\
\eta_2&:\sqrt{2}\mapsto\sqrt{2};\ \sqrt{3}\mapsto-\sqrt{3},\\
\eta_3&:\sqrt{2}\mapsto-\sqrt{2};\ \sqrt{3}\mapsto\sqrt{3},\\
\eta_4&:\sqrt{2}\mapsto-\sqrt{2};\ \sqrt{3}\mapsto-\sqrt{3}.
\end{aligned}$$
由于 $\eta_2,\eta_3,\eta_4$ 都是二阶元，又因 4 阶群一定是交换群，故 $\operatorname{Gal}(E/\mathbb{Q})\cong\mathbb{Z}_2\oplus\mathbb{Z}_2$.

### 例 2 @173

设 $E$ 为不可约多项式 $f(x)=x^4-2$ 在 $\mathbb{Q}$ 上的分裂域，求 $\operatorname{Gal}(E/\mathbb{Q})$.

$E=\mathbb{Q}(\sqrt[4]{2},\mathrm{i})$，因此 $[E:\mathbb{Q}]=8$. $\operatorname{Gal}(E/\mathbb{Q})$ 中任意元素 $\eta$ 被 $\eta(\sqrt[4]{2})$ 与 $\eta(\mathrm{i})$ 确定，其中 $\eta(\sqrt[4]{2})$ 只能为 $\pm\sqrt[4]{2},\pm\mathrm{i}\sqrt[4]{2}$ 之一，$\eta(\mathrm{i})$ 只能为 $\pm\mathrm{i}$ 之一. 八个自同构为
$$\begin{aligned}
\operatorname{id}&:\sqrt[4]{2}\mapsto\sqrt[4]{2};\ \mathrm{i}\mapsto\mathrm{i},\\
r&:\sqrt[4]{2}\mapsto\sqrt[4]{2}\,\mathrm{i};\ \mathrm{i}\mapsto\mathrm{i},\\
r^2&:\sqrt[4]{2}\mapsto-\sqrt[4]{2};\ \mathrm{i}\mapsto\mathrm{i},\\
r^3&:\sqrt[4]{2}\mapsto-\sqrt[4]{2}\,\mathrm{i};\ \mathrm{i}\mapsto\mathrm{i},\\
\sigma&:\sqrt[4]{2}\mapsto\sqrt[4]{2};\ \mathrm{i}\mapsto-\mathrm{i},\\
\sigma r&:\sqrt[4]{2}\mapsto-\sqrt[4]{2}\,\mathrm{i};\ \mathrm{i}\mapsto-\mathrm{i},\\
\sigma r^2&:\sqrt[4]{2}\mapsto-\sqrt[4]{2};\ \mathrm{i}\mapsto-\mathrm{i},\\
\sigma r^3&:\sqrt[4]{2}\mapsto\sqrt[4]{2}\,\mathrm{i};\ \mathrm{i}\mapsto-\mathrm{i}.
\end{aligned}$$
故 $\operatorname{Gal}(E/\mathbb{Q})\cong D_4$.

### 定义 (一般n次多项式) @173

设 $F$ 为一个域，定义 $F$ 上的一般 $n$ 次多项式为
$$f(x)=x^n-a_{n-1}x^{n-1}+a_{n-2}x^{n-2}-\cdots+(-1)^n a_0.$$
它也可以视为以 $a_i$ 为变量的函数域 $F(a_0,a_1,\cdots,a_{n-1})$ 上的多项式.

### 定理 8.3 @174

一般 $n$ 次多项式 $f(x)$ 在域 $F(a_0,a_1,\cdots,a_{n-1})$ 上的 Galois 群为
$$\operatorname{Gal}_{F(a_0,a_1,\cdots,a_{n-1})}(f)\cong S_n.$$

### 命题 8.4 @174

设 $r_1,r_2,\cdots,r_n$ 为域 $F$ 上的可分多项式 $f(x)$ 的所有不同根，其中域 $F$ 的特征不为 $2$. 令
$$\Delta(f)=\prod_{i<j}(r_i-r_j),$$
若 $\sigma\in\operatorname{Gal}_F(f)$ 在集合 $\{r_1,r_2,\cdots,r_n\}$ 上的作用保持 $\Delta(f)$ 不变，则 $\sigma$ 是一个偶置换.

### 命题 8.5 @175

设 $F$ 为特征不为 $2$ 的域，$f(x)\in F[x]$ 为 $n$ 次可分多项式，则 $\operatorname{Gal}_F(f)\subseteq A_n$ 当且仅当 $\Delta(f)\in F$.

### 例 3 (三次多项式的Galois群) @175

设 $\operatorname{char}F\neq 2$. 若 $f(x)\in F[x]$ 为三次可分多项式，则 $\operatorname{Gal}_F(f)$ 有如下情形：

(1) $f(x)$ 是可约的，则它可分解成三个线性因式或者一个线性因式与一个二次因式的乘积. 在前一种情况下 Galois 群是平凡群，在第二种情形下 Galois 群是二阶群；

(2) $f(x)$ 是不可约的，则其任一根均生成 $F$ 的一个三次扩张，因此 $f(x)$ 在 $F$ 上的分裂域的次数一定被 $3$ 整除. 于是 $\operatorname{Gal}_F(f)$ 要么是 $S_3$，要么是 $A_3$. 根据命题 8.5，我们有 $\operatorname{Gal}_F(f)=A_3$ 当且仅当 $\Delta(f)\in F$.

上述例子中，若不可约三次多项式 $f(x)\in\mathbb{Q}[x]$ 有复根，则它的 Galois 群 $\operatorname{Gal}_F(f)$ 中存在着复共轭作用. 由于该作用是一个 $2$ 阶元，这使得 $\operatorname{Gal}_{\mathbb{Q}}(f)$ 只能是 $S_3$.

### 命题 8.6 @175

设 $f(x)\in\mathbb{Q}[x]$ 是 $n$ 次不可约多项式且恰好只有两个复根. 若 $n$ 为素数，则 $\operatorname{Gal}_{\mathbb{Q}}(f)=S_n$.

### 命题 8.7 @175

设 $f(x)\in\mathbb{Z}[x]$ 为 $m$ 次首一多项式，$\bar f(x)\in\mathbb{F}_p[x]$ 是 $f(x)$ 在模 $p$ 之后的多项式. 若 $\bar f=\prod_{i=1}^{r}\bar f_i$ 为可分多项式，其中 $\bar f_i$ 为 $\mathbb{F}_p[x]$ 中的 $m_i$ 次不可约多项式，则存在 $\sigma=\sigma_1\sigma_2\cdots\sigma_k\in\operatorname{Gal}_{\mathbb{Q}}(f)$，这里 $\sigma_i$ 为互不相交的 $m_i$ 阶轮换.

### 例 4 @176

计算 $4$ 次整系数多项式 $f(x)=x^4-12x-21$ 在 $\mathbb{Q}$ 上的 Galois 群.

根据 Eisenstein 判别法易知，$f(x)$ 是 $\mathbb{Q}$ 上的不可约多项式.

(1) 由于 $f(x)$ 不可约，$\operatorname{Gal}_{\mathbb{Q}}(f)$ 不包含在 $S_3$ 中；

(2) 通过计算导数 $f'(x)$，可知 $f(x)=0$ 有两个实根和两个复根. 于是 $\operatorname{Gal}_{\mathbb{Q}}(f)$ 包含一个长度为 $2$ 的轮换，从而 $\operatorname{Gal}_{\mathbb{Q}}(f)$ 不包含在 $A_4$ 中；

(3) $f(x)\equiv x(x^3-5)\pmod 7$ 可以分解为 $\mathbb{F}_7$ 上一个 $1$ 次多项式与一个 $3$ 次不可约多项式的乘积，于是 $\operatorname{Gal}_{\mathbb{Q}}(f)$ 中包含长度为 $3$ 的轮换.

综合上述结果，我们可推出 $\operatorname{Gal}_{\mathbb{Q}}(f)\cong S_4$.

### 例 5 @176

计算 $5$ 次整系数多项式 $f(x)=x^5-x-1$ 在 $\mathbb{Q}$ 上的 Galois 群.

Eisenstein 判别法不适用，但我们有

(1) $f(x)$ 模 $3$ 不可约，因为 $f(x)=0$ 在 $\mathbb{F}_3$ 中无解，故 $\operatorname{Gal}_{\mathbb{Q}}(f)$ 包含一个 $5$ 阶轮换；

(2) $f(x)\equiv(x^2+x+1)(x^3+x^2+1)\pmod 2$，因此 $\operatorname{Gal}_{\mathbb{Q}}(f)$ 包含不相交的 $2$-轮换和 $3$-轮换的乘积，继而知道它包含一个 $2$-轮换.

综上可得，$\operatorname{Gal}_F(f)=S_5$，因为 $S_5$ 可由一个 $5$-轮换和一个 $2$-轮换生成.

### 命题 8.8 @176

设 $f(x)\in\mathbb{Z}[x]$ 为不可约多项式. 若存在两个素数 $p,q\in\mathbb{Z}$ 使得

(1) $f(x)\equiv(x-a)g(x)\pmod p$，其中 $g(x)$ 在 $\mathbb{F}_p$ 上不可约，

(2) $f(x)\equiv\prod_{i=0}^{m}g_i(x)\pmod q$，其中 $g_i(x)$ 在 $\mathbb{F}_q$ 上均不可约，且 $\deg g_0(x)=2$，当 $i>0$ 时，$\deg g_i(x)$ 为奇数，

则 $\operatorname{Gal}_{\mathbb{Q}}(f)\cong S_n$.
