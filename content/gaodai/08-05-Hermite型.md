---
chapter: 8
chapter_title: 二次型
section: "8.5"
section_title: Hermite 型
pages: "367–372"
---

Hermite 型看成是复数域上的二次齐次函数：
$$f(x_1,x_2,\cdots,x_n)=\sum_{j=1}^{n}\sum_{i=1}^{n}a_{ij}\overline{x_i}x_j,\tag{8.5.1}$$
其中 $\overline{a_{ij}}=a_{ji}$。Hermite 型虽然系数是复数且变元 $x_i$ 是复数域上的变元，但作为函数它的值却总是实数，这点从 Hermite 型的定义即可看出。事实上，
$$\overline{f}=\sum_{j=1}^{n}\sum_{i=1}^{n}\overline{a_{ij}}\overline{x_i}x_j=\sum_{i=1}^{n}\sum_{j=1}^{n}a_{ji}\overline{x_j}x_i=f,$$
因此 $f$ 的值总是实数。当 Hermite 型的变元 $x_i$ 取实变元且 $a_{ij}$ 都是实数时，$f$ 就是实二次型。因此，Hermite 型也可看成是实二次型的推广。事实上，Hermite 型有许多与实二次型相同的性质。

Hermite 型 (8.5.1) 可写成如下的矩阵相乘的形式：
$$f(x_1,x_2,\cdots,x_n)=\overline{x}'Ax,$$
其中
$$A=\begin{pmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
a_{21}&a_{22}&\cdots&a_{2n}\\
\vdots&\vdots&&\vdots\\
a_{n1}&a_{n2}&\cdots&a_{nn}
\end{pmatrix},\quad x=\begin{pmatrix}
x_1\\x_2\\\vdots\\x_n
\end{pmatrix},$$
且满足 $\overline{A}'=A$，这样的矩阵称为 **Hermite 矩阵**。与实二次型类似，Hermite 型与 Hermite 矩阵之间有着一一对应关系，即给定一个 $n$ 变元的 Hermite 型必相伴有一个 $n$ 阶 Hermite 矩阵，反之给定一个 $n$ 阶 Hermite 矩阵，必有一个 $n$ 元 Hermite 型与之对应。

设 $x=Cy$，其中 $C$ 是一个非异复矩阵，$y=(y_1,y_2,\cdots,y_n)'$，则
$$f=(\overline{Cy})'A(Cy)=\overline{y}'\overline{C}'ACy.$$
矩阵 $\overline{C}'AC$ 仍是一个 Hermite 矩阵。

### 定义 8.5.1 (复相合) @367

设 $A,B$ 是两个 Hermite 矩阵，若存在非异复矩阵 $C$，使
$$B=\overline{C}'AC,$$
则称 $A$ 与 $B$ 是**复相合**的。

容易证明复相合是一个等价关系。与实二次型类似，Hermite 型
$$a_1\overline{y_1}y_1+a_2\overline{y_2}y_2+\cdots+a_n\overline{y_n}y_n\tag{8.5.2}$$
称为**标准型**。Hermite 型的基本问题是如何把一个 Hermite 型化成像 (8.5.2) 式那样的标准型。这个问题等价于寻找非异阵 $C$，使 $\overline{C}'AC$ 成为对角阵。类似于对称阵，我们可以证明如下定理。

### 定理 8.5.1 (Hermite 矩阵的复相合对角化) @368

设 $A$ 是一个 Hermite 矩阵，则必存在一个非异阵 $C$，使 $\overline{C}'AC$ 是一个对角阵且主对角线上的元素都是实数。

证明 寻找 $C$ 的过程类似于对称阵的情形，故从略。现只需说明后面的结论。事实上，$\overline{C}'AC$ 仍是 Hermite 矩阵，因此主对角线上的元素 $b_{ii}=\overline{b_{ii}}$，必是实数。$\square$

类似实二次型，我们可以证明 Hermite 型的惯性定理。

### 定理 8.5.2 (Hermite 型的惯性定理) @368

设 $f(x_1,x_2,\cdots,x_n)$ 是一个 Hermite 型，则它总可以化为如下标准型：
$$\overline{y_1}y_1+\cdots+\overline{y_p}y_p-\overline{y_{p+1}}y_{p+1}-\cdots-\overline{y_r}y_r,\tag{8.5.3}$$
且若 $f$ 又可化为另一个标准型：
$$\overline{z_1}z_1+\cdots+\overline{z_k}z_k-\overline{z_{k+1}}z_{k+1}-\cdots-\overline{z_r}z_r,$$
则 $p=k$。

我们称 (8.5.3) 式中的 $r$ 为 $f$ 的**秩**，$p$ 为 $f$ 的**正惯性指数**，$q=r-p$ 为 $f$ 的**负惯性指数**，$p-q$ 为 $f$ 的**符号差**。同样地，秩与符号差（或正负惯性指数）是 Hermite 矩阵复相合的全系不变量。上述这些结论的证明与实二次型是平行的，我们略去其证明，把它们留给读者作为练习。

由于 Hermite 型的值总是实数，故可定义正定型、负定型、半正定型、半负定型及不定型的概念。相应地，有正定 Hermite 矩阵、负定 Hermite 矩阵、半正定 Hermite 矩阵和半负定 Hermite 矩阵的概念。我们只对正定 Hermite 型和正定 Hermite 矩阵叙述其概念以及判定正定 Hermite 矩阵的定理。

### 定义 8.5.2 (正定 Hermite 型) @368

设 $f(x_1,x_2,\cdots,x_n)$ 是 Hermite 型，若对任一组不全为零的复数 $c_1,c_2,\cdots,c_n$，均有
$$f(c_1,c_2,\cdots,c_n)>0,$$
则称 $f$ 是**正定 Hermite 型**，它对应的矩阵称为**正定 Hermite 矩阵**。

### 定理 8.5.3 (正定 Hermite 矩阵的判定) @369

$n$ 阶 Hermite 矩阵 $A$ 为正定的充分必要条件是它的 $n$ 个顺序主子式全大于零。

这个定理的证明类似于实对称阵的情形，故从略。
