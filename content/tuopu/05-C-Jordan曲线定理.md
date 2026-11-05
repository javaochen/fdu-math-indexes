---
chapter: 5
chapter_title: 附录
section: "C"
section_title: Jordan 曲线定理
pages: "308–315"
---

## C Jordan 曲线定理

利用 Van Kampen 定理和覆盖空间的理论，可以给出 Jordan 曲线定理一个简明的证明。为此先给出覆盖空间的一个更一般的定义，对于这样定义的覆盖空间，覆盖道路性质和覆盖同伦性质均成立。

### 定义 C.0 (覆盖空间) @308

设 $p:E\to B$ 是连续映射，如果对任意 $b\in B$，均存在 $b$ 的开邻域 $U$，使得 $p^{-1}(U)$ 可分解成不相交的开集族 $\{V_\alpha\mid\alpha\in\Lambda\}$ 的并集：

$$p^{-1}(U)=\bigcup_{\alpha\in\Lambda}V_\alpha,$$

且对每个 $\alpha\in\Lambda$，$p|_{V_\alpha}:V_\alpha\to U$ 是同胚，则称 $(E,p)$ 是 $B$ 的**覆盖空间**。

### 定义 C.1 (弧与简单闭曲线) @308

同胚于闭区间 $I=[0,1]$ 的空间称为**弧**，同胚于圆周 $S^1$ 的空间称为**简单闭曲线**。

### 引理 C.2 (无界分支中的零伦) @308

设 $A$ 是紧空间，$f:A\to\mathbb{R}^2\setminus\{0\}$ 是连续映射，若 $O$ 落在 $\mathbb{R}^2\setminus f(A)$ 的无界分支中，则 $f$ 零伦。

### 推论 C.3 (球面双点零伦) @309

设 $A$ 是紧空间，$a,b\in S^2$，$f:A\to S^2\setminus\{a,b\}$ 是连续映射，若 $a,b$ 在 $S^2\setminus f(A)$ 的同一分支中，则 $f$ 零伦。

### 定理 C.4 (Jordan 分割定理) @309

设 $C$ 是 $S^2$ 上的简单闭曲线，则 $S^2\setminus C$ 不连通。

### 引理 C.5 (覆盖空间的构造) @310

设 $B$ 是拓扑空间，$U,V,P,Q$ 是 $B$ 的开集，使得 $B=U\cup V$，而 $U\cap V=P\cup Q$，其中 $P$ 与 $Q$ 不相交。又设 $a\in P$，$b\in Q$，点 $a,b$ 可分别用 $U,V$ 中的道路相连接，则有

$$\pi_1(B,a)\neq 1.$$

### 引理 C.6 (基本群非循环) @312

设 $B$ 是拓扑空间，$U,V,P,P',Q$ 是 $B$ 的开集，使得 $B=U\cup V$，而 $U\cap V=P\cup P'\cup Q$，其中 $P,P',Q$ 互不相交。又设 $a\in P$，$a'\in P'$，$b\in Q$，且点 $a,a'$ 和 $b$ 可用 $U$ 中以及 $V$ 中的道路两两相连接，则有

$$\pi_1(B,a)\ncong\mathbb{Z}.$$

### 定理 C.7 (不可分割定理) @313

设 $A$ 是 $S^2$ 的弧，则 $S^2\setminus A$ 连通。

### 定理 C.8 (Jordan 曲线定理) @314

设 $C$ 是 $S^2$ 上的简单闭曲线，则 $S^2\setminus C$ 恰有两个分支 $W_1,W_2$，且 $C$ 是它们的公共边界（即 $C=\overline{W}_1\setminus W_1=\overline{W}_2\setminus W_2$）。
