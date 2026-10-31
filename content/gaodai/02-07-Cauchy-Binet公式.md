---
chapter: 2
chapter_title: 矩阵
section: "2.7"
section_title: Cauchy-Binet 公式
pages: "105–115"
---

### 定义 (子式) @105

设 $A=(a_{ij})$ 是 $m\times n$ 矩阵，$B=(b_{ij})$ 是 $n\times m$ 矩阵。
$$A\begin{pmatrix}i_1&i_2&\cdots&i_s\\j_1&j_2&\cdots&j_s\end{pmatrix}$$
表示 $A$ 的一个 $s$ 阶子式，它由 $A$ 的第 $i_1,\cdots,i_s$ 行与第 $j_1,\cdots,j_s$ 列交点上的元素按原次序排列组成的行列式。同理可定义 $B$ 的 $s$ 阶子式。

### 定理 2.7.1 (Cauchy-Binet 公式) @105

设 $A=(a_{ij})$ 是 $m\times n$ 矩阵，$B=(b_{ij})$ 是 $n\times m$ 矩阵，则 $AB$ 是 $m$ 阶方阵。

(1) 若 $m>n$，则必有 $|AB|=0$；

(2) 若 $m\leqslant n$，则必有
$$|AB|=\sum_{1\leqslant j_1<j_2<\cdots<j_m\leqslant n}A\begin{pmatrix}1&2&\cdots&m\\j_1&j_2&\cdots&j_m\end{pmatrix}B\begin{pmatrix}j_1&j_2&\cdots&j_m\\1&2&\cdots&m\end{pmatrix}.$$

### 定理 2.7.2 @107

设 $A=(a_{ij})$ 是 $m\times n$ 矩阵，$B=(b_{ij})$ 是 $n\times m$ 矩阵，$r$ 是一个正整数且 $r\leqslant m$。

(1) 若 $r>n$，则 $AB$ 的任意一个 $r$ 阶子式等于零；

(2) 若 $r\leqslant n$，则 $AB$ 的 $r$ 阶子式
$$AB\begin{pmatrix}i_1&i_2&\cdots&i_r\\j_1&j_2&\cdots&j_r\end{pmatrix}=\sum_{1\leqslant k_1<k_2<\cdots<k_r\leqslant n}A\begin{pmatrix}i_1&i_2&\cdots&i_r\\k_1&k_2&\cdots&k_r\end{pmatrix}B\begin{pmatrix}k_1&k_2&\cdots&k_r\\j_1&j_2&\cdots&j_r\end{pmatrix}.$$

### 定义 (主子式) @108

矩阵 $A$ 的子式
$$A\begin{pmatrix}i_1&i_2&\cdots&i_r\\j_1&j_2&\cdots&j_r\end{pmatrix}$$
如果满足条件 $i_1=j_1$，$i_2=j_2$，$\cdots$，$i_r=j_r$，则称为**主子式**。

### 推论 2.7.1 @108

设 $A$ 是 $m\times n$ 实矩阵，则矩阵 $AA'$ 的任一主子式都非负。

### 例 2.7.1 (Lagrange 恒等式) @108

设 $n\geqslant 2$，证明 Lagrange 恒等式：
$$\Big(\sum_{i=1}^{n}a_i^2\Big)\Big(\sum_{i=1}^{n}b_i^2\Big)-\Big(\sum_{i=1}^{n}a_ib_i\Big)^2=\sum_{1\leqslant i<j\leqslant n}(a_ib_j-a_jb_i)^2.$$

### 例 2.7.2 (Cauchy-Schwarz 不等式) @109

设 $a_i$，$b_i$ 都是实数，证明 Cauchy-Schwarz 不等式：
$$\Big(\sum_{i=1}^{n}a_i^2\Big)\Big(\sum_{i=1}^{n}b_i^2\Big)\geqslant\Big(\sum_{i=1}^{n}a_ib_i\Big)^2.$$
