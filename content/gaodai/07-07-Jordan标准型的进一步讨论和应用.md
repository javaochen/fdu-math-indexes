---
chapter: 7
chapter_title: 相似标准型
section: "7.7"
section_title: Jordan 标准型的进一步讨论和应用
pages: "326–332"
---

### 注 (本节的任务) @326

在这一节里，我们要通过复线性空间 $V$ 上线性变换 $\varphi$ 的 Jordan 标准型来读出 $\varphi$ 的特征值的度数和重数，并得到全空间 $V$ 的两种直和分解，最后将给出 Jordan 标准型在矩阵理论中的一些应用．

### 注 (Jordan 标准型与不变子空间的直和) @326

设 $V$ 是 $n$ 维复线性空间，$\varphi$ 是 $V$ 上的线性变换．设 $\varphi$ 的初等因子组为

$$(\lambda-\lambda_1)^{r_1},\ (\lambda-\lambda_2)^{r_2},\ \cdots,\ (\lambda-\lambda_k)^{r_k},\tag{7.7.1}$$

定理 7.6.2 告诉我们，存在 $V$ 的一组基 $\{e_{11},e_{12},\cdots,e_{1r_1};e_{21},e_{22},\cdots,e_{2r_2};\cdots;e_{k1},e_{k2},\cdots,e_{kr_k}\}$，使得 $\varphi$ 在这组基下的表示矩阵为

$$
J=\begin{pmatrix}
J_1&&&\\
&J_2&&\\
&&\ddots&\\
&&&J_k
\end{pmatrix}.
$$

上式中每个 $J_i$ 是相应于初等因子 $(\lambda-\lambda_i)^{r_i}$ 的 Jordan 块，其阶正好为 $r_i$．令 $V_i$ 是由基向量 $e_{i1},e_{i2},\cdots,e_{ir_i}$ 生成的子空间，则

$$
\begin{aligned}
\varphi(e_{i1})&=\lambda_ie_{i1},\\
\varphi(e_{i2})&=e_{i1}+\lambda_ie_{i2},\\
&\cdots\cdots\cdots\\
\varphi(e_{ir_i})&=e_{i,r_i-1}+\lambda_ie_{ir_i}.
\end{aligned}\tag{7.7.2}
$$

这表明 $\varphi(V_i)\subseteq V_i$，即 $V_i\ (i=1,2,\cdots,k)$ 是 $\varphi$ 的不变子空间．显然我们有

$$V=V_1\oplus V_2\oplus\cdots\oplus V_k.$$

### 注 (特征值的度数与重数) @327

线性变换 $\varphi$ 限制在 $V_1$ 上（仍记为 $\varphi$）便成为 $V_1$ 上的线性变换．这个线性变换在基 $\{e_{11},e_{12},\cdots,e_{1r_1}\}$ 下的表示矩阵为

$$
J_1=\begin{pmatrix}
\lambda_1&1&&&\\
&\lambda_1&1&&\\
&&\ddots&\ddots&\\
&&&\ddots&1\\
&&&&\lambda_1
\end{pmatrix}.
$$

注意到 $J_1$ 的特征值全为 $\lambda_1$，并且 $\lambda_1I-J_1$ 的秩等于 $r_1-1$，故 $J_1$ 只有一个线性无关的特征向量，不妨选为 $e_{11}$．显然 $e_{11}$ 也是 $\varphi$ 作为 $V$ 上线性变换关于特征值 $\lambda_1$ 的特征向量．不失一般性，不妨设在 $\varphi$ 的初等因子组即 (7.7.1) 式中

$$\lambda_1=\lambda_2=\cdots=\lambda_s,\quad \lambda_i\neq\lambda_1\ (i=s+1,\cdots,k),$$

则 $J_1,\cdots,J_s$ 都以 $\lambda_1$ 为特征值，且相应于每一块有且只有一个线性无关的特征向量．相应的特征向量可取为

$$e_{11},\ e_{21},\ \cdots,\ e_{s1},\tag{7.7.3}$$

显然这是 $s$ 个线性无关的特征向量．如果 $\lambda_i\neq\lambda_1$，则容易看出 $r(\lambda_1I-J_i)=r_i$，于是

$$r(\lambda_1I-J)=\sum_{i=1}^{k}r(\lambda_1I-J_i)=(r_1-1)+\cdots+(r_s-1)+r_{s+1}+\cdots+r_k=n-s.$$

因此 $\varphi$ 关于特征值 $\lambda_1$ 的特征子空间 $V_{\lambda_1}$ 的维数等于 $n-r(\lambda_1I-J)=s$，从而特征子空间 $V_{\lambda_1}$ 以 (7.7.3) 式中的向量为一组基．又 $\lambda_1$ 是 $\varphi$ 的 $r_1+r_2+\cdots+r_s$ 重特征值，因此 $\lambda_1$ 的重数与度数之差等于

$$(r_1+r_2+\cdots+r_s)-s.$$

我们把上述结论写成如下定理．

### 定理 7.7.1 (度数与重数的 Jordan 块解释) @327

线性变换 $\varphi$ 的特征值 $\lambda_1$ 的度数等于 $\varphi$ 的 Jordan 标准型中属于特征值 $\lambda_1$ 的 Jordan 块的个数，$\lambda_1$ 的重数等于所有属于特征值 $\lambda_1$ 的 Jordan 块的阶数之和．

### 注 (Jordan 块给出的循环基) @328

现在再来看 $J_1$ 所对应的子空间 $V_1$，由 (7.7.2) 式中诸等式可知

$$(\varphi-\lambda_1I)(e_{1r_1})=e_{1,r_1-1},\ \cdots,\ (\varphi-\lambda_1I)(e_{12})=e_{11},\ (\varphi-\lambda_1I)(e_{11})=0.$$

因此，若记 $\alpha=e_{1r_1}$，$\psi=\varphi-\lambda_1I$，则

$$\psi(\alpha)=e_{1,r_1-1},\ \psi^2(\alpha)=e_{1,r_1-2},\ \cdots,\ \psi^{r_1-1}(\alpha)=e_{11},\ \psi^{r_1}(\alpha)=0.$$

也就是说

$$\{\alpha,\psi(\alpha),\psi^2(\alpha),\cdots,\psi^{r_1-1}(\alpha)\}$$

构成了 $V_1$ 的一组基．

### 定义 7.7.1 (循环子空间) @328

设 $V_0$ 是线性空间 $V$ 的 $r$ 维子空间，$\psi$ 是 $V$ 上的线性变换．若存在 $\alpha\in V_0$，使 $\{\alpha,\psi(\alpha),\cdots,\psi^{r-1}(\alpha)\}$ 构成 $V_0$ 的一组基，则称 $V_0$ 为关于线性变换 $\psi$ 的**循环子空间**．

### 注 (同一特征值的循环子空间之和) @328

上面的事实说明，每个 Jordan 块 $J_i$ 对应的子空间 $V_i$ 是一个循环子空间．把属于同一个特征值，比如属于 $\lambda_1$ 的所有循环子空间加起来构成 $V$ 的一个子空间：

$$R(\lambda_1)=V_1\oplus\cdots\oplus V_s.$$

若 $v\in R(\lambda_1)$，则不难算出 $(\varphi-\lambda_1I)^s(v)=0$，其中

$$s=\dim R(\lambda_1)=r_1+\cdots+r_s.$$

事实上，我们可以证明

$$R(\lambda_1)=\{v\in V\mid(\varphi-\lambda_1I)^n(v)=0\}.\tag{7.7.4}$$

### 定义 7.7.2 (根子空间) @329

设 $\lambda_0$ 是 $n$ 维复线性空间 $V$ 上线性变换 $\varphi$ 的特征值，则

$$R(\lambda_0)=\{v\in V\mid(\varphi-\lambda_0I)^n(v)=0\}$$

构成了 $V$ 的一个子空间，称为属于特征值 $\lambda_0$ 的**根子空间**．

### 注 (根子空间的循环子空间分解) @329

上面的结果表明：特征值 $\lambda_0$ 的根子空间可表示为若干个循环子空间的直和，每个循环子空间对应于一个 Jordan 块．

虽然我们前面的讨论是对特征值 $\lambda_1$ 进行的，其实对任一特征值 $\lambda_i$ 均适用．因此便有如下的定理．

### 定理 7.7.2 (根子空间分解) @329

设 $\varphi$ 是 $n$ 维复线性空间 $V$ 上的线性变换．

(1) 若 $\varphi$ 的初等因子组为

$$(\lambda-\lambda_1)^{r_1},\ (\lambda-\lambda_2)^{r_2},\ \cdots,\ (\lambda-\lambda_k)^{r_k},$$

则 $V$ 可分解为 $k$ 个不变子空间的直和：

$$V=V_1\oplus V_2\oplus\cdots\oplus V_k,\tag{7.7.5}$$

其中 $V_i$ 是维数等于 $r_i$ 的关于 $\varphi-\lambda_iI$ 的循环子空间；

(2) 若 $\lambda_1,\cdots,\lambda_s$ 是 $\varphi$ 的全体不同特征值，则 $V$ 可分解为 $s$ 个不变子空间的直和：

$$V=R(\lambda_1)\oplus R(\lambda_2)\oplus\cdots\oplus R(\lambda_s),\tag{7.7.6}$$

其中 $R(\lambda_i)$ 是 $\lambda_i$ 的根子空间，$R(\lambda_i)$ 的维数等于 $\lambda_i$ 的重数，且每个 $R(\lambda_i)$ 又可分解为 (7.7.5) 式中若干个 $V_j$ 的直和．

下面我们举例说明 Jordan 标准型在矩阵理论中的应用．

### 例 7.7.1 (方阵分解为两个对称阵之积) @329

证明：复数域上的方阵 $A$ 必可分解为两个对称阵的乘积．

**证明** 设 $P$ 是非异阵且使 $P^{-1}AP=J$ 为 $A$ 的 Jordan 标准型，于是 $A=PJP^{-1}$．设 $J_i$ 是 $J$ 的第 $i$ 个 Jordan 块，记 $R$ 为反单位阵（副对角线上全为 $1$ 的对称阵），则

$$
J_i=\begin{pmatrix}
\lambda_i&1&&\\
&\lambda_i&1&\\
&&\ddots&\ddots\\
&&&\lambda_i
\end{pmatrix}
=\begin{pmatrix}
&&&1\\
&&1&\lambda_i\\
&\iddots&&\\
1&\lambda_i&&
\end{pmatrix}
\begin{pmatrix}
&&&1\\
&&1&\\
&\iddots&&\\
1&&&
\end{pmatrix}
=S_{i1}S_{i2},
$$

即 $J_i$ 可分解为两个对称阵之积．因此 $J$ 也可以分解为两个对称阵之积，记为 $S_1,S_2$，于是

$$A=PJP^{-1}=PS_1S_2P^{-1}=(PS_1P^{\mathrm{T}})(P^{-1})^{\mathrm{T}}S_2P^{-1}.$$

两个括号内的矩阵都是对称阵，故 $A$ 是两个对称阵的乘积．$\square$

### 例 7.7.2 (用 Jordan 标准型计算矩阵的幂) @330

设 $A$ 是本章例 7.6.3 中的矩阵，计算 $A^k\ (k\ge 1)$．

**解** 因为

$$P^{-1}A^kP=(P^{-1}AP)^k=J^k,$$

故先计算 $J^k$．注意 $J$ 是分块对角阵，它的 $k$ 次方等于将各对角块 $k$ 次方，因此

$$
J^k=\begin{pmatrix}
1&1&&\\
&1&&\\
&&1&1\\
&&&1
\end{pmatrix}^{k}
=\begin{pmatrix}
1&k&&\\
&1&&\\
&&1&k\\
&&&1
\end{pmatrix},
$$

再由 $P^{-1}AP=J$ 可取

$$
P=\begin{pmatrix}
1&0&0&0\\
-2&1&0&0\\
1&0&1&0\\
-5&0&-1&1
\end{pmatrix},
$$

于是

$$
A^k=PJ^kP^{-1}=
\begin{pmatrix}
1&0&0&0\\
-2&1&0&0\\
1&0&1&0\\
-5&0&-1&1
\end{pmatrix}
\begin{pmatrix}
1&k&0&0\\
0&1&0&0\\
0&0&1&k\\
0&0&0&1
\end{pmatrix}
\begin{pmatrix}
1&0&0&0\\
-2&1&0&0\\
1&0&1&0\\
-5&0&-1&1
\end{pmatrix}^{-1}
$$

$$
=\begin{pmatrix}
2k+1&k&0&0\\
-4k&-2k+1&0&0\\
6k&k&k+1&k\\
-14k&-5k&-k&-k+1
\end{pmatrix}.
$$

### 引理 7.7.1 (可交换的可对角化矩阵可同时对角化) @330

设 $A,B$ 是两个 $n$ 阶可对角化复矩阵且 $AB=BA$，则它们可同时对角化，即存在可逆阵 $P$，使 $P^{-1}AP$ 和 $P^{-1}BP$ 都是对角阵．

### 定理 7.7.3 (Jordan-Chevalley 分解) @331

设 $A$ 是 $n$ 阶复矩阵，则 $A$ 可分解为 $A=B+C$，其中 $B,C$ 适合下面条件：

(1) $B$ 是一个可对角化矩阵；

(2) $C$ 是一个幂零阵；

(3) $BC=CB$；

(4) $B,C$ 均可表示为 $A$ 的多项式．

不仅如此，上述满足条件 (1)～(3) 的分解是唯一的．
