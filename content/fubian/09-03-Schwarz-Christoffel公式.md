---
chapter: 9
chapter_title: 解析延拓
section: "9.3"
section_title: Schwarz-Christoffel 公式
pages: "248–250"
---

设 $\Omega$ 是一个由有限条线段所围的多边形区域，我们要找共形映射 $f(z)$ 将上半平面 $\mathbb{H}$ 映成 $\Omega$。设 $\Omega$ 有顶点 $w_1,w_2,\dots,w_n$（依次按逆时针方向排列），对应的内角分别为 $\pi\alpha_1,\pi\alpha_2,\dots,\pi\alpha_n$（$0<\alpha_j<2$，$\alpha_1+\alpha_2+\dots+\alpha_n=n-2$）。按边界对应定理，$f(z)$ 可以连续延拓到实轴上，因此，存在 $a_1,a_2,\dots,a_n$ 使得 $f(a_j)=w_j$，$j=1,2,\dots,n$。不妨假定 $-\infty<a_1<a_2<\dots<a_n<+\infty$（也可以让 $a_n=\infty$）。那么，$f(z)$ 将 $[a_j,a_{j+1}]$ 一一到上地映成 $\Omega$ 的边 $[w_j,w_{j+1}]$（将 $[a_n,+\infty)\cup\{\infty\}\cup(-\infty,a_1]$ 映成 $\Omega$ 的边 $[w_n,w_1]$）。

### 引理 9.4 @249

对每个 $a_j$，$f''(z)/f'(z)$ 可以解析延拓到 $a_j$ 的某个去心邻域 $D(a_j,r_j)\setminus\{a_j\}$，使得 $a_j$ 是其一级极点，具有留数 $\alpha_j-1$，即 $f''(z)/f'(z)$ 在 $a_j$ 点处的 Laurent 展开式的主要部分为 $(\alpha_j-1)/(z-a_j)$。对 $\infty$，$f''(z)/f'(z)$ 可以解析延拓到 $\infty$ 的某个邻域，并且当 $z\to\infty$ 时，$f''(z)/f'(z)\to 0$。

### 定理 9.5 (Schwarz-Christoffel) @250

设 $\Omega$ 是一个由有限条线段所围的多边形区域，其顶点依次为 $w_1,w_2,\dots,w_n$（按逆时针方向排列），对应的内角分别为 $\pi\alpha_1,\pi\alpha_2,\dots,\pi\alpha_n$（$0<\alpha_j<2$，$\alpha_1+\alpha_2+\dots+\alpha_n=n-2$）。设 $f(z)$ 是 $\mathbb{H}$ 到 $\Omega$ 的共形映射，$f(a_j)=w_j$，$a_j\in\mathbb{R}$，$j=1,2,\dots,n$，$-\infty<a_1<a_2<\dots<a_n<+\infty$。那么，$f(z)$ 满足

$$\frac{f''(z)}{f'(z)}=\frac{\alpha_1-1}{z-a_1}+\frac{\alpha_2-1}{z-a_2}+\dots+\frac{\alpha_n-1}{z-a_n}, \tag{9.2}$$

且存在常数 $A,B$ 使得

$$f(z)=A\int_{z_0}^{z}(t-a_1)^{\alpha_1-1}(t-a_2)^{\alpha_2-1}\cdots(t-a_n)^{\alpha_n-1}\,dt+B. \tag{9.3}$$

公式 (9.3) 称为 Schwarz-Christoffel 公式。公式中有 $a_1,a_2,\dots,a_n$ 这 $n$ 个未知实常数，以及 $A,B$ 两个复未知常数，通过作一个上半平面的共形自同构（保持上半平面不变的分式线性变换），其中三个实常数可以任意取定，因此，应用 Schwarz-Christoffel 公式的困难在于确定剩下的 $n-1$ 个未知常数。

### 注 (顶点在无穷远) @250

如果 $a_n=\infty$，则公式 (9.3) 仍成立，只是被积函数中因子 $(z-a_n)^{\alpha_n-1}$ 不出现。

### 例 9.5 (矩形区域的共形映射) @250

设 $R$ 是以 $\pm K/2$，$\pm K/2+\mathrm{i}K'$ 为顶点的矩形，我们来构造将上半平面映成 $R$ 的共形映射。

由对称性，我们可以让共形映射 $f(z)$ 将第一象限映成右半矩形，并可取定 $f(0)=0$，$f(K/2)=1$，$f(\mathrm{i}K')=\infty$。按 Riemann 映射定理，这个映射是存在唯一的。
