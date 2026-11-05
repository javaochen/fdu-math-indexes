---
chapter: 5
chapter_title: 有限元方法简介
section: "5.2"
section_title: Lagrange 型单元
pages: "238–246"
---

### 注 (Lagrange 型单元) @238

上节介绍了三角形上的线性有限元方法，本节将进一步讨论定义在三角形单元和矩形单元上的高次有限元方法。在构造单元上的插值多项式时，如果只用到单元节点上的函数值而未用到函数的导数值，这样的单元称为 Lagrange 型单元。

### 注 5.2.1 (自由度的个数) @239

二元 $n$ 次多项式

$$P_n(x,y)=\sum_{i+j\leqslant n}a_{ij}x^iy^j$$

在面积坐标下可以表示为以下关于 $\lambda_1,\lambda_2,\lambda_3$ 的齐次多项式：

$$P_n(\lambda_1,\lambda_2,\lambda_3)=\sum_{|\alpha|=n}b_\alpha\lambda_1^{\alpha_1}\lambda_2^{\alpha_2}\lambda_3^{\alpha_3},$$

其中 $\alpha=(\alpha_1,\alpha_2,\alpha_3)\in\mathbf{N}^3$，$|\alpha|=\alpha_1+\alpha_2+\alpha_3$。

记 $\#\{P_n\}$ 为自由度的个数。容易验证二元 $n$ 次多项式一共有 $\#\{P_n\}=\frac{1}{2}(n+1)(n+2)$ 个自由度。对于 Lagrange 型三角形元，在每个节点上只有一个自由度，所以 $n$ 次三角形元有 $\#\{P_n\}$ 个节点与之对应。

当 $n=1$ 时，$\#\{P_1\}=3$，因此只需在 3 个顶点处给定插值条件

$$P_1(A_1)=u_1,\quad P_1(A_2)=u_2,\quad P_1(A_3)=u_3,$$

可得线性三角形元插值多项式

$$P_1(\lambda_1,\lambda_2,\lambda_3)=u_1\lambda_1+u_2\lambda_2+u_3\lambda_3.\tag{5.2.1}$$

此即 (5.1.11) 式。

当 $n=2$ 时，$\#\{P_2\}=6$，设二次三角形元插值多项式为

$$P_2(\lambda_1,\lambda_2,\lambda_3)=a_1\lambda_1^2+a_2\lambda_2^2+a_3\lambda_3^2+a_4\lambda_2\lambda_3+a_5\lambda_3\lambda_1+a_6\lambda_1\lambda_2,\tag{5.2.2}$$

若给定插值条件（见图 5.2）

$$P_2(A_i)=u_i,\quad i=1,2,3;\qquad P_2(A_{ij})=u_{ij},\quad 1\leqslant i\neq j\leqslant 3,$$

代入 (5.2.2) 式，得

$$\begin{cases}u_i=a_i, & i=1,2,3,\\ u_{23}=\frac{1}{4}(a_2+a_3)+\frac{1}{4}a_4,\\ u_{31}=\frac{1}{4}(a_3+a_1)+\frac{1}{4}a_5,\\ u_{12}=\frac{1}{4}(a_1+a_2)+\frac{1}{4}a_6.\end{cases}$$

由此解得

$$a_4=4u_{23}-(u_2+u_3),\quad a_5=4u_{31}-(u_3+u_1),\quad a_6=4u_{12}-(u_1+u_2).$$

### 注 (二次三角形元) @240

从而二次三角形元插值多项式为

$$\begin{aligned}P_2(\lambda_1,\lambda_2,\lambda_3)={}&u_1\lambda_1(2\lambda_1-1)+u_2\lambda_2(2\lambda_2-1)+u_3\lambda_3(2\lambda_3-1)\\ &+4u_{23}\lambda_2\lambda_3+4u_{31}\lambda_3\lambda_1+4u_{12}\lambda_1\lambda_2.\end{aligned}\tag{5.2.3}$$

容易看出对应于顶点 $A_i$，$i=1,2,3$ 的二次三角形元插值基函数为

$$\varphi_i=\lambda_i(2\lambda_i-1),\quad i=1,2,3,$$

对应于边中点 $A_{ij}$，$1\leqslant i\neq j\leqslant 3$ 的二次三角形元插值基函数为

$$\varphi_{ij}=4\lambda_i\lambda_j,\quad 1\leqslant i\neq j\leqslant 3.$$

### 注 5.2.2 (高次单元的节点) @240

为了确定二元 $n$ 次多项式 $P_n$，分别取

$$A_\alpha=(\alpha_1/n,\alpha_2/n,\alpha_3/n)$$

作为插值节点，易知这样的节点刚好是 $\#\{P_n\}$ 个。此时，对应于这些节点的插值基函数为

$$\varphi_\alpha(\lambda_1,\lambda_2,\lambda_3)=\prod_{i=1}^{3}\left(\frac{1}{\alpha_i!}\prod_{k=0}^{\alpha_i-1}(n\lambda_i-k)\right),\tag{5.2.4}$$

其中 $\alpha=(\alpha_1,\alpha_2,\alpha_3)$ 是如前定义的三重指标。

### 注 (三次三角形元) @241

当 $n=3$ 时，$\#\{P_3\}=10$，在三角形顶点 $A_i$（$i=1,2,3$）、三条边的三等分点 $A_{iij}$（$i\neq j$），以及重心 $A_0$ 给定插值条件（见图 5.3）：

$$P_3(A_i)=u_i,\quad P_3(A_{iij})=u_{iij},\quad P_3(A_0)=u_0,$$

由注 5.2.2 可知，对应于顶点 $A_i$，$i=1,2,3$ 的三次三角形元插值基函数为

$$\varphi_i=\frac{1}{2}\lambda_i(3\lambda_i-1)(3\lambda_i-2),\quad i=1,2,3,$$

对应于边的三等分点 $A_{iij}$，$i\neq j$ 的三次三角形元插值基函数为

$$\varphi_{iij}=\frac{9}{2}\lambda_i\lambda_j(3\lambda_i-1),\quad 1\leqslant i\neq j\leqslant 3,$$

而对应于重心 $A_0$ 的三次三角形元插值基函数为

$$\varphi_0=27\lambda_1\lambda_2\lambda_3.$$

因此三次三角形元插值多项式可以表示为

$$\begin{aligned}P_3(\lambda_1,\lambda_2,\lambda_3)={}&\sum_{i=1}^{3}\frac{1}{2}\lambda_i(3\lambda_i-1)(3\lambda_i-2)u_i\\ &+\sum_{i\neq j}\frac{9}{2}\lambda_i\lambda_j(3\lambda_i-1)u_{iij}+27\lambda_1\lambda_2\lambda_3u_0.\end{aligned}\tag{5.2.5}$$

### 注 5.2.3 (内节点与不完全插值) @242

注意到在 Lagrange 型三角形元中，外节点数为 $3n$，内节点数为 $(n-1)(n-2)/2$。因此当插值多项式次数增加时，内节点数将迅速增加。在不影响插值函数连续性的前提下，我们可以消去内节点处的自由度，而采用不完全的 $n$ 次插值多项式。

在构造不完全三次三角形元时，去掉重心 $A_0$ 处的插值条件，为了唯一确定三次多项式，要求插值精确到二次多项式。此时由于插值误差精度不变，因此在减少求解自由度的同时仍能保持原有的误差阶。标准的不完全三次三角形元插值基函数为

$$\tilde\varphi_i=\frac{1}{2}\lambda_i(3\lambda_i-1)(3\lambda_i-2)-\frac{9}{2}\lambda_1\lambda_2\lambda_3,\quad i=1,2,3,$$

$$\tilde\varphi_{iij}=\frac{9}{2}\lambda_i\lambda_j(3\lambda_i-1)+\frac{27}{4}\lambda_1\lambda_2\lambda_3,\quad 1\leqslant i\neq j\leqslant 3.$$

### 注 (矩形元的坐标变换) @242

对于规则的区域，矩形单元由于其构造简单也被广泛使用。给定一个矩形单元 $K=\{(x,y)\mid x_1\leqslant x\leqslant x_2,\ y_1\leqslant y\leqslant y_2\}$，作坐标变换

$$\xi=(x-x_0)/h_x,\quad \eta=(y-y_0)/h_y,\tag{5.2.6}$$

其中 $(x_0,y_0)$ 为矩形 $K$ 的中心坐标，$2h_x$ 和 $2h_y$ 分别为矩形 $K$ 的长和宽，则矩形 $K$ 变换为 $(\xi,\eta)$ 平面的标准正方形 $[-1,1]\times[-1,1]$。

### 注 (双线性矩形元) @243

双线性元插值多项式为

$$P_{1,1}=a_0+a_1\xi+a_2\eta+a_3\xi\eta,$$

一共有 4 个自由度，在 $K$ 的 4 个顶点处给定插值条件（见图 5.4(a)）：

$$P_{1,1}(A_{ij})=u_{ij},\quad i,j=-1,1.$$

利用一维线性元插值基函数（见图 5.5）

$$\lambda_{-1}(\xi)=\frac{1}{2}(1-\xi),\quad \lambda_1(\xi)=\frac{1}{2}(1+\xi),\tag{5.2.7}$$

可得双线性元插值多项式为

$$P_{1,1}(\xi,\eta)=u_{-1,-1}\varphi_{-1,-1}+u_{1,-1}\varphi_{1,-1}+u_{-1,1}\varphi_{-1,1}+u_{1,1}\varphi_{1,1},\tag{5.2.8}$$

其中 $\varphi_{ij}$ 为如下定义的基函数

$$\varphi_{ij}(\xi,\eta)=\lambda_i(\xi)\lambda_j(\eta),\quad i,j=-1,1.\tag{5.2.9}$$

### 注 5.2.4 (原坐标下的基函数) @244

通过坐标变换 (5.2.6)，可得在原始坐标系下双线性元插值多项式为

$$P_{1,1}(x,y)=u_{-1,-1}\varphi_{-1,-1}+u_{1,-1}\varphi_{1,-1}+u_{-1,1}\varphi_{-1,1}+u_{1,1}\varphi_{1,1},$$

其中

$$\varphi_{-1,-1}(x,y)=\frac{(x-x_2)(y-y_2)}{(x_1-x_2)(y_1-y_2)},\qquad \varphi_{1,-1}(x,y)=\frac{(x-x_1)(y-y_2)}{(x_2-x_1)(y_1-y_2)},$$

$$\varphi_{-1,1}(x,y)=\frac{(x-x_2)(y-y_1)}{(x_1-x_2)(y_2-y_1)},\qquad \varphi_{1,1}(x,y)=\frac{(x-x_1)(y-y_1)}{(x_2-x_1)(y_2-y_1)}.$$

### 注 (双二次矩形元) @244

双二次元插值多项式一共有 9 个自由度，一般取矩形的 4 个顶点、4 边中点以及矩形中心为插值节点（见图 5.4(b)）：

$$P_{2,2}(A_{ij})=u_{ij},\quad i,j=-1,0,1.$$

由一维二次元插值基函数（见图 5.6）

$$\lambda_{-1}(\xi)=\frac{1}{2}\xi(\xi-1),\quad \lambda_0(\xi)=1-\xi^2,\quad \lambda_1(\xi)=\frac{1}{2}\xi(\xi+1),\tag{5.2.10}$$

可得双二次元插值多项式为

$$P_{2,2}(\xi,\eta)=\sum_{i,j\in\{-1,0,1\}}u_{ij}\varphi_{ij},\qquad \varphi_{ij}(\xi,\eta)=\lambda_i(\xi)\lambda_j(\eta).\tag{5.2.11}$$

### 注 (不完全双二次元) @245

同理，可以类似地构造双三次或更高次的矩形单元，这里不再一一列举。

同样地，为了减少求解的自由度，可以去掉矩形中心处的插值条件。在构造双二次插值多项式时去掉 $\xi^2\eta^2$ 项，可得 8 个节点的不完全双二次元插值多项式，其基函数定义如下：

$$\tilde\varphi_{ij}(\xi,\eta)=\frac{1}{4}(1+i\xi)(1+j\eta)(i\xi+j\eta-1),\quad i,j=-1,1,$$

$$\tilde\varphi_{ij}(\xi,\eta)=\frac{1}{2}(1-\xi^2)(1+j\eta),\quad i=0,\ j=-1,1,$$

$$\tilde\varphi_{ij}(\xi,\eta)=\frac{1}{2}(1+i\xi)(1-\eta^2),\quad i=-1,1,\ j=0.$$

### 定义 5.2.5 (有限元的三元组) @246

以上讨论了定义在三角形和矩形上的 Lagrange 型有限元，对于一般的有限元，Ciarlet 的经典文献 [30] 给出如下的定义。

有限元是满足下列条件的三元组 $(K,\mathcal{P},\mathcal{N})$：

1. $K$ 是 $\mathbf{R}^n$ 中具有 Lipschitz 边界的非空闭子集（单元）；
2. $\mathcal{P}$ 是定义在 $K$ 上的有限维实值函数空间（形函数空间）；
3. $\mathcal{N}=\{N_1,N_2,\cdots,N_n\}$ 是 $\mathcal{P}'$ 上的一组基（节点变量或自由度）。

一般地，存在 $n$ 个函数 $p_i\in\mathcal{P}$，$1\leqslant i\leqslant n$，满足

$$\mathcal{N}_i(p_j)=\delta_{ij},\quad \forall\, 1\leqslant i,j\leqslant n,\tag{5.2.12}$$

则

$$p=\sum_{i=1}^{n}\mathcal{N}_i(p)p_i,\quad \forall p\in\mathcal{P}.\tag{5.2.13}$$

此时，$\{\mathcal{N}_i,1\leqslant i\leqslant n\}$ 称为有限元的自由度，$\{p_i,1\leqslant i\leqslant n\}$ 称为有限元的基函数。

### 例 (常见单元的自由度集) @246

对于线性三角形元，$K$ 是三角形区域，$\mathcal{P}$ 是线性多项式空间，

$$\mathcal{N}=\{p(A_i),1\leqslant i\leqslant 3\},\quad A_i\ \text{是}\ K\ \text{的 3 个顶点}.\tag{5.2.14}$$

对于二次三角形元，$K$ 是三角形区域，$\mathcal{P}$ 是二次多项式空间，

$$\mathcal{N}=\{p(A_i),1\leqslant i\leqslant 3;\ p(A_{ij}),1\leqslant i<j\leqslant 3\},\quad A_{ij}\ \text{是边}\ A_iA_j\ \text{的中点}.\tag{5.2.15}$$

对于双线性矩形元，$K$ 是矩形区域，$\mathcal{P}$ 是双线性多项式空间，

$$\mathcal{N}=\{p(A_{ij}),i,j=-1,1\},\quad A_{ij}\ \text{是}\ K\ \text{的 4 个顶点}.\tag{5.2.16}$$
