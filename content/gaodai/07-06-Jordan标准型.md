---
chapter: 7
chapter_title: 相似标准型
section: "7.6"
section_title: Jordan 标准型
pages: "318–325"
---

我们根据上一节末提出的寻找标准型的思想来讨论复数域上的标准型．由于任一多项式在复数域上均可分解为一次因子的乘积，因此复数域上的初等因子都是一次因子的幂．又因为初等因子必是矩阵特征多项式的因式，故必具有 $(\lambda-\lambda_0)^r$ 的形状，其中 $\lambda_0$ 是矩阵的特征值．我们先来求一个形状比较简单的矩阵，它的初等因子组就是 $(\lambda-\lambda_0)^r$．

### 引理 7.6.1 (幂零块形的 Jordan 块) @318

$r$ 阶矩阵

$$J=\begin{pmatrix}
\lambda_0&1&&&\\
&\lambda_0&1&&\\
&&\ddots&\ddots&\\
&&&\lambda_0&1\\
&&&&\lambda_0
\end{pmatrix}$$

的初等因子组为 $(\lambda-\lambda_0)^r$．

### 引理 7.6.2 (由对角 $\lambda$-矩阵求初等因子组) @318

设特征矩阵 $\lambda I-A$ 经过初等变换化为下列对角阵：

$$\operatorname{diag}\{f_1(\lambda),f_2(\lambda),\cdots,f_n(\lambda)\},\tag{7.6.2}$$

其中 $f_i(\lambda)\ (i=1,\cdots,n)$ 为非零首一多项式．将 $f_i(\lambda)$ 作不可约分解，若 $(\lambda-\lambda_0)^k$ 能整除 $f_i(\lambda)$，但 $(\lambda-\lambda_0)^{k+1}$ 不能整除 $f_i(\lambda)$，就称 $(\lambda-\lambda_0)^k$ 是 $f_i(\lambda)$ 的一个**准素因子**，则矩阵 $A$ 的初等因子组等于所有 $f_i(\lambda)$ 的准素因子组．

### 注 (求初等因子组的另一方法) @320

引理 7.6.2 给出了求矩阵初等因子组的另外一个方法，它可以不必先求不变因子组而直接用初等变换把特征矩阵化为对角阵，再分解主对角线上的多项式即可．另外，引理 7.6.2 的结论及其证明在一般的数域 $\mathbb{K}$ 上也成立．

### 例 7.6.1 (由对角 $\lambda$-矩阵求初等因子组) @320

设 $\lambda I-A$ 经过初等变换后化为下列对角阵：

$$\begin{pmatrix}
1&&&&\\
&(\lambda-1)^2(\lambda+2)&&&\\
&&\lambda+2&&\\
&&&1&\\
&&&&\lambda-1
\end{pmatrix},$$

求 $A$ 的初等因子组．

**解** 由引理 7.6.2 知，$A$ 的初等因子组为 $\lambda-1,(\lambda-1)^2,\lambda+2,\lambda+2$．

### 引理 7.6.3 (分块对角阵的初等因子组) @320

设 $J$ 是分块对角阵：

$$J=\begin{pmatrix}
J_1&&&\\
&J_2&&\\
&&\ddots&\\
&&&J_k
\end{pmatrix},$$

其中每个 $J_i$ 都是形如引理 7.6.1 中的矩阵，$J_i$ 的初等因子组为 $(\lambda-\lambda_i)^{r_i}$，则 $J$ 的初等因子组为

$$(\lambda-\lambda_1)^{r_1},\ (\lambda-\lambda_2)^{r_2},\ \cdots,\ (\lambda-\lambda_k)^{r_k}.\tag{7.6.3}$$

### 定理 7.6.1 (Jordan 标准型的存在性) @321

设 $A$ 是复数域上的矩阵且 $A$ 的初等因子组为

$$(\lambda-\lambda_1)^{r_1},\ (\lambda-\lambda_2)^{r_2},\ \cdots,\ (\lambda-\lambda_k)^{r_k},$$

则 $A$ 相似于分块对角阵：

$$J=\begin{pmatrix}
J_1&&&\\
&J_2&&\\
&&\ddots&\\
&&&J_k
\end{pmatrix},\tag{7.6.4}$$

其中 $J_i$ 为 $r_i$ 阶矩阵，且

$$J_i=\begin{pmatrix}
\lambda_i&1&&&\\
&\lambda_i&1&&\\
&&\ddots&\ddots&\\
&&&\lambda_i&1\\
&&&&\lambda_i
\end{pmatrix}.\tag{7.6.5}$$

### 定义 7.6.1 (Jordan 标准型与 Jordan 块) @321

(7.6.4) 式中的矩阵 $J$ 称为 $A$ 的 **Jordan 标准型**，每个 $J_i$ 称为 $A$ 的一个 **Jordan 块**．

### 注 (Jordan 标准型的唯一性) @322

由引理 7.6.3 可以看出，若交换任意两个 Jordan 块的位置，得到的矩阵与原来的矩阵仍有相同的初等因子组，它们仍相似．因此矩阵 $A$ 的 Jordan 标准型中 Jordan 块的排列可以是任意的．但是，由于每个初等因子唯一确定了一个 Jordan 块，故若不计 Jordan 块的排列次序，则矩阵的 Jordan 标准型是唯一确定的．

至此，我们对复数域上线性空间的线性变换解决了在第四章中提出的问题：求 $V$ 的一组基，使该线性变换在这组基下的表示矩阵具有简单的形式．我们把这一结果叙述为下列定理．

### 定理 7.6.2 (线性变换的 Jordan 标准型) @322

设 $\varphi$ 是复数域上线性空间 $V$ 上的线性变换，则必存在 $V$ 的一组基，使得 $\varphi$ 在这组基下的表示矩阵为 (7.6.4) 式所示的 Jordan 标准型．

### 推论 7.6.1 (可对角化的等价条件) @322

设 $A$ 是 $n$ 阶复矩阵，则下列结论等价：

(1) $A$ 可对角化；

(2) $A$ 的极小多项式无重根；

(3) $A$ 的初等因子都是一次多项式．

### 推论 7.6.2 (可对角化的几何版本) @322

设 $\varphi$ 是复线性空间 $V$ 上的线性变换，则 $\varphi$ 可对角化当且仅当 $\varphi$ 的极小多项式无重根，当且仅当 $\varphi$ 的初等因子都是一次多项式．

### 推论 7.6.3 (不变子空间上的限制保持可对角化) @322

设 $\varphi$ 是复线性空间 $V$ 上的线性变换，$V_0$ 是 $\varphi$ 的不变子空间．若 $\varphi$ 可对角化，则 $\varphi$ 在 $V_0$ 上的限制也可对角化．

### 推论 7.6.4 (直和分解与可对角化) @322

设 $\varphi$ 是复线性空间 $V$ 上的线性变换，且 $V=V_1\oplus V_2\oplus\cdots\oplus V_k$，其中每个 $V_i$ 都是 $\varphi$ 的不变子空间，则 $\varphi$ 可对角化的充分必要条件是 $\varphi$ 在每个 $V_i$ 上的限制都可对角化．

### 推论 7.6.5 (一般数域上的 Jordan 标准型) @323

设 $A$ 是数域 $\mathbb{K}$ 上的矩阵，如果 $A$ 的特征值全在 $\mathbb{K}$ 中，则 $A$ 在 $\mathbb{K}$ 上相似于其 Jordan 标准型．

### 例 7.6.2 (由初等因子组求 Jordan 标准型) @323

设 $A$ 是 $7$ 阶矩阵，其初等因子组为

$$\lambda-1,\ (\lambda-1)^3,\ (\lambda+1)^2,\ \lambda-2,$$

求其 Jordan 标准型．

**解** $A$ 的 Jordan 标准型为

$$J=\begin{pmatrix}
1&&&&&&\\
&1&1&0&&&\\
&0&1&1&&&\\
&0&0&1&&&\\
&&&&-1&1&\\
&&&&0&-1&\\
&&&&&&2
\end{pmatrix},$$

$J$ 含有 $4$ 个 Jordan 块．

### 例 7.6.3 (求过渡矩阵使表示矩阵为 Jordan 标准型) @323

设复数域上的四维线性空间 $V$ 上的线性变换 $\varphi$ 在一组基 $\{e_1,e_2,e_3,e_4\}$ 下的表示矩阵为

$$A=\begin{pmatrix}
3&1&0&0\\
-4&-1&0&0\\
6&1&2&1\\
-14&-5&-1&0
\end{pmatrix},$$

求 $V$ 的一组基，使 $\varphi$ 在这组基下的表示矩阵为 Jordan 标准型，并求出从原来的基到新基的过渡矩阵．

**解** 用初等变换把 $\lambda I-A$ 化为对角 $\lambda$-矩阵并求出它的初等因子组为

$$(\lambda-1)^2,\ (\lambda-1)^2.$$

因此，$A$ 的 Jordan 标准型为

$$J=\begin{pmatrix}
1&1&&\\
0&1&&\\
&&1&1\\
&&0&1
\end{pmatrix}.$$

设矩阵 $P$ 是从 $\{e_1,e_2,e_3,e_4\}$ 到新基的过渡矩阵，则

$$P^{-1}AP=J,$$

此即

$$AP=PJ.\tag{7.6.6}$$

设 $P=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)$，其中 $\alpha_i$ 是四维列向量，代入 (7.6.6) 式得

$$(A\alpha_1,A\alpha_2,A\alpha_3,A\alpha_4)=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)\begin{pmatrix}
1&1&&\\
0&1&&\\
&&1&1\\
&&0&1
\end{pmatrix},$$

化成方程组为

$$\begin{aligned}
(A-I)\alpha_1&=0,\\
(A-I)\alpha_2&=\alpha_1,\\
(A-I)\alpha_3&=0,\\
(A-I)\alpha_4&=\alpha_3.
\end{aligned}$$

由于 $\alpha_1,\alpha_3$ 都是 $A$ 的属于特征值 $1$ 的特征向量，故 $\alpha_2,\alpha_4$ 称为属于特征值 $1$ 的**广义特征向量**．我们可取方程组 $(A-I)x=0$ 的两个线性无关的解分别作为 $\alpha_1,\alpha_3$（注意不能取线性相关的两个解，因为 $P$ 是非异阵），然后再分别求出 $\alpha_2,\alpha_4$（注意诸 $\alpha_i$ 的解可能不唯一，只需取比较简单的一组解即可）．经计算可得

$$\alpha_1=\begin{pmatrix}1\\-2\\1\\-5\end{pmatrix},\quad
\alpha_2=\begin{pmatrix}0\\1\\0\\0\end{pmatrix},\quad
\alpha_3=\begin{pmatrix}0\\0\\1\\-1\end{pmatrix},\quad
\alpha_4=\begin{pmatrix}0\\0\\0\\1\end{pmatrix}.$$

于是

$$P=\begin{pmatrix}
1&0&0&0\\
-2&1&0&0\\
1&0&1&0\\
-5&0&-1&1
\end{pmatrix}.$$

因此新基为

$$\{e_1-2e_2+e_3-5e_4,\ e_2,\ e_3-e_4,\ e_4\}.$$
