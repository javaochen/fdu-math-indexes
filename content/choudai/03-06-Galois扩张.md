---
chapter: 3
chapter_title: 域论
section: "3.6"
section_title: Galois 扩张
pages: "158–163"
---

### 定义 (Galois 扩张) @158

设 $E/F$ 是代数扩张. 若 $E/F$ 既可分又正规，则称 $E/F$ 为 **Galois 扩张**（Galois extension）. 此时它的自同构群 $\mathrm{Aut}(E/F)$ 称为 **Galois 群**（Galois group），又记 $\mathrm{Gal}(E/F)\triangleq\mathrm{Aut}(E/F)$.

### 命题 6.1 (自同构群的阶) @158

设 $E/F$ 是有限扩张，则 $E/F$ 是 Galois 扩张当且仅当

$$
|\mathrm{Aut}(E/F)|=[E:F].
$$

### 例 1 (三次多项式的分裂域) @158

设 $E$ 是 $\mathbb{Q}$ 上多项式 $x^{3}-2$ 的分裂域，由于 $E$ 是特征零的，故 $E/\mathbb{Q}$ 是可分且正规的，从而是 Galois 扩张. 由 3.3 节例 8 知 $[E:\mathbb{Q}]=6$，故 $\mathrm{Gal}(E/\mathbb{Q})$ 是 6 阶群.

### 定义 (G-不变子域) @158

设 $E$ 是域，$G<\mathrm{Aut}(E)$ 为有限子群. 令

$$
E^{G}=\{a\in E\mid \forall\sigma\in G,\ \sigma(a)=a\},
$$

用定义容易验证 $E^{G}$ 是 $E$ 的子域，称 $E^{G}$ 为 $E$ 的 **$G$-不变子域**（$G$-invariant subfield）.

### 引理 6.2 (Artin 引理) @158

设 $E$ 是域，$G$ 是 $\mathrm{Aut}(E)$ 的有限子群，$F=E^{G}$，则

$$
[E:F]\leqslant |G|.
$$

特别地，$E/F$ 是 Galois 扩张且 $G=\mathrm{Gal}(E/F)$.

### 定理 6.3 (有限扩张的等价刻画) @159

设 $E/F$ 是域扩张，下列命题等价：

(1) $E/F$ 是有限 Galois 扩张；

(2) $E$ 是 $F$ 上的一个可分多项式的分裂域；

(3) 存在 $\mathrm{Aut}(E)$ 的有限子群 $G$，使 $F=E^{G}$.

在上述等价条件成立时，有 $G=\mathrm{Aut}(E/F)$.

### 定理 6.4 (Galois 对应定理) @160

设 $E/F$ 为有限 Galois 扩张，$G\triangleq\mathrm{Aut}(E/F)$，则有如下两个集合之间的一一对应：

$$
\begin{array}{ccc}
\{H\mid H\text{ 是 }G\text{ 的子群}\} & \longleftrightarrow & \{K\mid K\text{ 是 }E/F\text{ 的中间域}\}\\[2pt]
\text{子群 }H<G & \longmapsto & E^{H},\\
\mathrm{Aut}(E/K)<G & \longleftarrow & \text{中间域 }K.
\end{array}
$$

上述对应具有以下性质：

(1) $H_1\subset H_2$ 当且仅当 $E^{H_1}\supset E^{H_2}$；$K_1\subset K_2$ 当且仅当 $\mathrm{Gal}(E/K_1)\supset\mathrm{Gal}(E/K_2)$.

(2) $|H|=[E:E^{H}]$，$[G:H]=[E^{H}:F]$.

(3) $H\triangleleft G$ 当且仅当 $E^{H}/F$ 是正规扩张. 此时 $\mathrm{Gal}(E^{H}/F)\cong G/H$.

(4) $H\triangleleft G$ 当且仅当 $E^{H}/F$ 是 Galois 扩张. 此时 $\mathrm{Gal}(E^{H}/F)\cong G/H$.

### 例 2 (三次扩张的伽罗瓦群) @161

考虑域扩张 $\mathbb{Q}(\sqrt[3]{2},\omega)/\mathbb{Q}$，其中 $\omega=\cos\left(\frac{2\pi}{3}\right)+\sin\left(\frac{2\pi}{3}\right)\mathrm{i}$ 是三次本原单位根，$\rho=\omega\sqrt[3]{2}$ 为多项式 $x^{3}-2$ 的另一个非平凡根. 这也是一个 Galois 扩张，它的 Galois 群为 $S_{3}$，记两个生成元分别为 $\sigma$ 与 $\tau$，它们分别是 3 阶和 2 阶的，具体地说，它们在 $\omega$ 与 $\sqrt[3]{2}$ 上的作用分别为：

$$
\sigma(\omega)=\omega,\quad \sigma(\sqrt[3]{2})=\omega\sqrt[3]{2};
$$

$$
\tau(\omega)=\omega^{2},\quad \tau(\sqrt[3]{2})=\omega\sqrt[3]{2}.
$$

于是我们有如下关于 Galois 群的子群的关系图：$\{1\}$ 在最上层，第二层为 $\langle\sigma\rangle$、$\langle\tau\rangle$、$\langle\tau\sigma\rangle$、$\langle\tau\sigma^{2}\rangle$，最下层为 $\langle\sigma,\tau\rangle$；相应地，还有子域之间的关系图：$\mathbb{Q}(\sqrt[3]{2},\omega)$ 在最上层，第二层为 $\mathbb{Q}(\omega)$、$\mathbb{Q}(\omega^{2}\sqrt[3]{2})$、$\mathbb{Q}(\omega\sqrt[3]{2})$、$\mathbb{Q}(\sqrt[3]{2})$，最下层为 $\mathbb{Q}$.

上面给出了 $\mathbb{Q}(\sqrt[3]{2},\omega)$ 的所有子域，但由于 $S_{3}$ 的唯一非平凡正规子群是 3 阶子群 $\langle\sigma\rangle$，因此只有 $\mathbb{Q}(\omega)$ 是 $\mathbb{Q}$ 上的 Galois 扩张，其 Galois 群为二阶循环群 $S_{3}/\langle\sigma\rangle$. $\mathbb{Q}(\omega)$ 上非平凡的自同构是由 $\langle\sigma\rangle$ 的非平凡陪集 $\{\tau,\tau\sigma,\tau\sigma^{2}\}$ 中的元素（如 $\tau$）的限制所诱导的，它们均将 $\omega$ 映到 $\omega^{2}$.

### 命题 6.5 (复合域与交域) @162

设 $L/F$ 为域扩张，$E,K$ 均为中间域，$E/F$ 是有限 Galois 扩张，则 $EK/K$ 与 $E/E\cap K$ 均为有限 Galois 扩张，其 Galois 群为

$$
\mathrm{Gal}(EK/K)\cong\mathrm{Gal}(E/E\cap K).
$$
