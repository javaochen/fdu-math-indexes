---
chapter: 5
chapter_title: 有限元方法简介
section: "5.3"
section_title: Hermite 型单元
pages: "247–251"
---

### 定义 (Hermite型单元) @247

在构造单元上的插值多项式时，除了利用节点处的函数值以外，如果还利用函数的导数值，这样的单元就是本节所要讨论的 Hermite 型单元。

### 构造 (Hermite三角形元) @247

以三次 Hermite 元为例，取三角形 $3$ 个顶点 $A_i,\ i=1,2,3$ 的函数值和一阶导数值，以及重心 $A_0$ 处的函数值作为插值条件（见图 5.7）：

$$P_3(A_i)=u_i,\qquad \frac{\partial P_3}{\partial x}(A_i)=u_{x,i},\qquad \frac{\partial P_3}{\partial y}(A_i)=u_{y,i},\qquad P_3(A_0)=u_0.$$

设三次 Hermite 元插值多项式为

$$\begin{aligned}
P_3(\lambda_1,\lambda_2,\lambda_3)={}&a_1\lambda_1^3+a_2\lambda_2^3+a_3\lambda_3^3+a_4\lambda_1^2\lambda_2+a_5\lambda_1\lambda_2^2+a_6\lambda_2^2\lambda_3\\
&+a_7\lambda_2\lambda_3^2+a_8\lambda_3^2\lambda_1+a_9\lambda_3\lambda_1^2+a_{10}\lambda_1\lambda_2\lambda_3,
\end{aligned}\tag{5.3.1}$$

其中 $\lambda_i$ 为面积坐标。又因为

$$\frac{\partial}{\partial\lambda_1}=\frac{\partial x}{\partial\lambda_1}\frac{\partial}{\partial x}+\frac{\partial y}{\partial\lambda_1}\frac{\partial}{\partial y},\qquad
\frac{\partial}{\partial\lambda_2}=\frac{\partial x}{\partial\lambda_2}\frac{\partial}{\partial x}+\frac{\partial y}{\partial\lambda_2}\frac{\partial}{\partial y},$$

由 (5.1.13) 式可得

$$\frac{\partial x}{\partial\lambda_1}=x_1-x_3=-\xi_2,\qquad \frac{\partial y}{\partial\lambda_1}=y_1-y_3=-\eta_2,$$

$$\frac{\partial x}{\partial\lambda_2}=x_2-x_3=\xi_1,\qquad \frac{\partial y}{\partial\lambda_2}=y_2-y_3=\eta_1,$$

这里采用记号 $\xi_i=x_j-x_k,\ \eta_i=y_j-y_k$，$(i,j,k)$ 为 $(1,2,3)$ 的逆时针轮换。从而关于导数的插值条件可以改写为

$$\frac{\partial P_3}{\partial\lambda_1}(A_i)=u_{\lambda_1,i}=-\xi_2u_{x,i}-\eta_2u_{y,i},\tag{5.3.2}$$

$$\frac{\partial P_3}{\partial\lambda_2}(A_i)=u_{\lambda_2,i}=\xi_1u_{x,i}+\eta_1u_{y,i}.\tag{5.3.3}$$

代入 (5.3.1) 式，计算可得

$$P_3(\lambda_1,\lambda_2,\lambda_3)=\sum_{i=1}^{3}\bigl(u_i\hat{\mu}_i+u_{\lambda_1,i}\hat{\varphi}_i+u_{\lambda_2,i}\hat{\psi}_i\bigr)+u_0\hat{\mu}_0,\tag{5.3.4}$$

其中

$$\hat{\mu}_i=\lambda_i^2(3-2\lambda_i)-7\lambda_1\lambda_2\lambda_3,\qquad \hat{\mu}_0=27\lambda_1\lambda_2\lambda_3,\qquad i=1,2,3,$$

$$\hat{\varphi}_1=\lambda_1(2\lambda_2\lambda_3-\lambda_1\lambda_2-\lambda_1\lambda_3),\quad
\hat{\varphi}_2=\lambda_1\lambda_2(\lambda_2-\lambda_3),\quad
\hat{\varphi}_3=\lambda_1\lambda_3(\lambda_3-\lambda_2),$$

$$\hat{\psi}_1=\lambda_2\lambda_1(\lambda_1-\lambda_3),\quad
\hat{\psi}_2=\lambda_2(2\lambda_3\lambda_1-\lambda_2\lambda_1-\lambda_2\lambda_3),\quad
\hat{\psi}_3=\lambda_2\lambda_3(\lambda_3-\lambda_1).$$

最后将 (5.3.2) 式和 (5.3.3) 式代入上式，得三次 Hermite 元插值多项式为

$$P_3(\lambda_1,\lambda_2,\lambda_3)=\sum_{i=1}^{3}\bigl(u_i\mu_i+u_{x,i}\varphi_i+u_{y,i}\psi_i\bigr)+u_0\mu_0,\tag{5.3.5}$$

其中

$$\mu_i=\hat{\mu}_i,\qquad \mu_0=\hat{\mu}_0,\qquad \varphi_i=-\xi_2\hat{\varphi}_i+\xi_1\hat{\psi}_i,\qquad \psi_i=-\eta_2\hat{\varphi}_i+\eta_1\hat{\psi}_i,\qquad i=1,2,3.$$

经简单计算可得对任意 $i=1,2,3$，插值多项式 (5.3.5) 中基函数表达式如下：

$$\mu_i=\lambda_i^2(3-2\lambda_i)-7\lambda_1\lambda_2\lambda_3,\qquad \mu_0=27\lambda_1\lambda_2\lambda_3,$$

$$\varphi_i=\lambda_i\lambda_j(2\lambda_i+\lambda_j-1)(x_j-x_i)+\lambda_i\lambda_k(2\lambda_i+\lambda_k-1)(x_k-x_i),$$

$$\psi_i=\lambda_i\lambda_j(2\lambda_i+\lambda_j-1)(y_j-y_i)+\lambda_i\lambda_k(2\lambda_i+\lambda_k-1)(y_k-y_i),$$

其中 $(i,j,k)$ 为 $(1,2,3)$ 的逆时针轮换。

### 注 5.3.1 (有限元方程规模) @249

给定一个三角剖分，设其顶点数、边数和单元数分别为 $N_0,N_1,N_2$，由 Euler 公式可得

$$N_0:N_1:N_2\approx 1:3:2.\tag{5.3.6}$$

对于三次 Lagrange 元，有限元方程规模为 $N_0+2N_1+N_2\approx 9N_0$；而对于三次 Hermite 元，有限元方程规模仅有 $3N_0+N_2\approx 5N_0$。

### 构造 (Zienkiewicz元) @249

对于 Hermite 元，同样可以消去内节点处的自由度，构造不完全的 Hermite 型插值多项式。与前面类似，去掉重心 $A_0$ 处的插值条件，并要求插值精确到二次多项式。此时，标准的不完全三次 Hermite 元又称为 Zienkiewicz 元，其相应的插值基函数为

$$\tilde{\mu}_i=\lambda_i^2(3-2\lambda_i)+2\lambda_1\lambda_2\lambda_3,$$

$$\tilde{\varphi}_i=\frac{1}{2}\lambda_i\lambda_j(1+\lambda_i-\lambda_j)(x_j-x_i)+\frac{1}{2}\lambda_i\lambda_k(1+\lambda_i-\lambda_k)(x_k-x_i),$$

$$\tilde{\psi}_i=\frac{1}{2}\lambda_i\lambda_j(1+\lambda_i-\lambda_j)(y_j-y_i)+\frac{1}{2}\lambda_i\lambda_k(1+\lambda_i-\lambda_k)(y_k-y_i),$$

其中 $i=1,2,3$，$(i,j,k)$ 为 $(1,2,3)$ 的逆时针轮换。

### 构造 (Hermite矩形元) @250

与三角形元类似，在构造矩形元时同样可以利用节点处的导数值作为插值条件，从而有效减少求解的自由度。这里取矩形的 $4$ 个顶点 $A_{ij},\ i,j=-1,1$ 处的函数值、关于 $x$ 的导数值、关于 $y$ 的导数值以及关于 $x,y$ 的二阶导数值作为插值条件（见图 5.8）：

$$P_{3,3}(A_{ij})=u_{ij}^{(00)},\qquad \frac{\partial P_{3,3}}{\partial x}(A_{ij})=u_{ij}^{(10)},\qquad \frac{\partial P_{3,3}}{\partial y}(A_{ij})=u_{ij}^{(01)},\qquad \frac{\partial^2 P_{3,3}}{\partial x\partial y}(A_{ij})=u_{ij}^{(11)}.$$

利用一维三次 Hermite 元基函数（见图 5.9）

$$\lambda_{-1}^{(0)}(\xi)=\frac{1}{4}(1-\xi)^2(2+\xi),\qquad \lambda_{1}^{(0)}(\xi)=\frac{1}{4}(1+\xi)^2(2-\xi),$$

$$\lambda_{-1}^{(1)}(\xi)=\frac{1}{4}(1-\xi)^2(1+\xi)h,\qquad \lambda_{1}^{(1)}(\xi)=-\frac{1}{4}(1+\xi)^2(1-\xi)h,\tag{5.3.7}$$

这里 $2h$ 为一维有限元区间长度。对 (5.2.6) 式中给定的矩形单元 $K$，可以构造二维双三次 Hermite 元插值多项式如下：

$$P_{3,3}(\xi,\eta)=\sum_{i,j=-1,1}\sum_{k,l=0,1}u_{ij}^{(kl)}\varphi_{ij}^{(kl)},\tag{5.3.8}$$

其中插值基函数定义为

$$\varphi_{ij}^{(kl)}(\xi,\eta)=\lambda_i^{(k)}(\xi)\lambda_j^{(l)}(\eta),\qquad i,j=-1,1,\quad k,l=0,1.\tag{5.3.9}$$

### 构造 (Adini矩形元) @251

这里在 $\lambda_i^{(1)}(\xi)$ 和 $\lambda_j^{(1)}(\eta)$ 定义中 $h$ 分别取为 $h_x$ 和 $h_y$。这种双三次 Hermite 元又称为 Bogner-Fox-Schmit 元。

如果已知 $4$ 个顶点处的函数值以及一阶导数值，而二阶导数值未知，在双三次多项式中去掉高次项 $\xi^3\eta^3,\xi^3\eta^2,\xi^2\eta^3,\xi^2\eta^2$，则可构造出不完全的双三次 Hermite 元插值多项式，其插值基函数定义为

$$\tilde{\varphi}_{ij}^{(00)}=\frac{1}{8}(1+i\xi)(1+j\eta)(2+i\xi+j\eta-\xi^2-\eta^2),$$

$$\tilde{\varphi}_{ij}^{(10)}=-\frac{1}{8}i(1+i\xi)(1+j\eta)(1-\xi^2)h_x,$$

$$\tilde{\varphi}_{ij}^{(01)}=-\frac{1}{8}j(1+i\xi)(1+j\eta)(1-\eta^2)h_y,\qquad i,j=-1,1.$$

这种最简形式的矩形 Hermite 元又称为 Adini 元。Adini 元仍保持插值精确到三次多项式，其形函数空间也可看成由三次多项式空间 $P_3(K)$ 和 $\{\xi^3\eta,\xi\eta^3\}$ 张成的。
