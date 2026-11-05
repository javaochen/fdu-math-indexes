---
chapter: 3
chapter_title: 曲面的整体性质初步
section: "3.2"
section_title: 曲面上的 Gauss-Bonnet 公式
pages: "159–164"
---

### 注 (局部形式回顾) @159

第二章曾对曲面上曲线所围成的多角形区域证明 Gauss-Bonnet 公式。那时需要假定所论的曲面区域 $\mathscr{S}$ 在一个坐标区域 $D$ 之中，结论是
$$
\sum_{i=0}^{k}\int_{s_{i}}^{s_{i+1}}k_{g}(s)\,\mathrm{d}s+\iint_{\mathscr{S}}K\,\mathrm{d}\sigma+\sum_{i=0}^{k}\theta_{i}=2\pi \tag{3-7}
$$
各个符号的意义同前（见 (2-100)）。以下改用整体的观点讨论这个公式。

### 定义 (曲面曲线的弧长) @159

$C^{k}$ 阶曲面上的 $C^{j}\ (j\leqslant k)$ 阶曲线段 $l$ 是直线上开区间 $(a,b)$ 到曲面 $S$ 上的一个映射。如果它的某一段穿过一个坐标区域 $\Sigma$，那么在坐标图 $(\Sigma,h)$ 中，刻画这一段的 $C^{j}$ 阶函数是
$$
u=f(t),\qquad v=g(t).
$$
一般地，曲线可能穿过若干个坐标区域，则在每一坐标区域中都有它自己的表达式，把每个区域中的那一段的弧长算出来相加，就得到整条曲线的弧长。

例如曲线穿过两个坐标区域 $\Sigma$ 与 $\Sigma'$，设交点 $B$ 对应参数 $t_{1}$，在 $\Sigma$ 中算 $AB$、在 $\Sigma'$ 中算 $BC$，相加即得 $AC$ 的弧长。结果与 $B$ 的选取无关：若在 $AC$ 上另取一点 $B'$，使 $BB'\subset\Sigma\cap\Sigma'$，$B,B'$ 分别对应参数 $t_{1},t_{2}$，则由
$$
E\,\mathrm{d}u^{2}+2F\,\mathrm{d}u\,\mathrm{d}v+G\,\mathrm{d}v^{2}
=\bar{E}\,\mathrm{d}\bar{u}^{2}+2\bar{F}\,\mathrm{d}\bar{u}\,\mathrm{d}\bar{v}+\bar{G}\,\mathrm{d}\bar{v}^{2}
$$
得到
$$
\int_{t_{1}}^{t_{2}}\sqrt{E\left(\frac{\mathrm{d}u}{\mathrm{d}t}\right)^{2}
+2F\frac{\mathrm{d}u}{\mathrm{d}t}\frac{\mathrm{d}v}{\mathrm{d}t}
+G\left(\frac{\mathrm{d}v}{\mathrm{d}t}\right)^{2}}\,\mathrm{d}t
=\int_{t_{1}}^{t_{2}}\sqrt{\bar{E}\left(\frac{\mathrm{d}\bar{u}}{\mathrm{d}t}\right)^{2}
+2\bar{F}\frac{\mathrm{d}\bar{u}}{\mathrm{d}t}\frac{\mathrm{d}\bar{v}}{\mathrm{d}t}
+\bar{G}\left(\frac{\mathrm{d}\bar{v}}{\mathrm{d}t}\right)^{2}}\,\mathrm{d}t,
$$
即在 $\Sigma$ 及 $\Sigma'$ 中计算出的弧长相同。这样就定义了曲线弧长；选定曲线 $l$ 的起点后，还可定出它的弧长参数。

### 定义 (区域上的积分) @160

若 $f$ 是定义于曲线 $l$ 上的函数，则 $f$ 可用弧长参数的函数 $f(s)$ 表示，并按普通意义定义积分
$$
\int_{AC}f\,\mathrm{d}s=\int_{s_{1}}^{s_{2}}f(s)\,\mathrm{d}s,
$$
其中 $s_{1},s_{2}$ 分别是 $A,C$ 所对应的参数。

同样，若 $\Omega$ 是曲面上的一个区域，可把它划分为若干小区域，使每一小区域都在一个坐标区域中，求出每一小区域的面积再相加，就是区域 $\Omega$ 的面积；这个面积与区域划分的方式无关。一个函数沿 $\Omega$ 的积分也照此办理。

### 定义 (三角剖分) @160

设 $\mathscr{S}$ 是 $S$ 上的一个区域，其边界由互不相交的 $n$ 条简单的分段光滑闭曲线组成。所谓**简单的分段光滑闭曲线**，是指由 $A_{1}A_{2},A_{2}A_{3},\cdots,A_{n-1}A_{n},A_{n}A_{1}$ 等有限段光滑曲线弧连接而成的自身不相交的曲线，这些弧之间除连接点外没有交点。

由拓扑学可知，一定可以把 $\mathscr{S}$ **三角剖分**，即把 $\mathscr{S}$ 分割成许多以三条曲线段为边界的曲面三角形。如果曲面是定向的，以法线方向为大拇指方向，依右手规则可定出每一三角形边界的定向，这时内部边界的定向刚好相互抵消（此事不予严格证明）。

### 定义 (Euler-Poincaré 示性数) @161

经过上述剖分后得到三个数：$F$——三角形的个数，$E$——边的条数，$V$——顶点的个数。它们定义了区域 $\mathscr{S}$ 的 **Euler-Poincaré 示性数**
$$
\chi(\mathscr{S})=F-E+V. \tag{3-8}
$$
此式右边看似与三角剖分的方式有关，但由后文的 Gauss-Bonnet 公式可知，$\chi(\mathscr{S})$ 实际上与剖分方式无关，是曲面的拓扑不变量。

### 注 (紧致曲面的示性数) @161

对于紧致曲面，边界曲线不出现，仍然可以作三角剖分，于是有：

1. 球面：$\chi=2$；
2. 环面：$\chi=0$；
3. 两个洞的曲面：$\chi=-2$；
4. $n$ 个洞的曲面：$\chi=-2(n-1)$。

以球面为例，取一种三角剖分，$F=8,\ E=12,\ V=6$，故 $\chi=8-12+6=2$。

根据拓扑学定理，任何定向二维紧致曲面的 Euler-Poincaré 示性数总是取 $2,0,-2,\cdots,-2n,\cdots$ 中的一个，而且示性数相同的紧致曲面同胚。因此 $\chi$ 完全给出了定向紧致曲面的拓扑分类。

### 定义 (亏格与洞数) @161

数
$$
n=\frac{2-\chi(S)}{2}
$$
称为 $S$ 的**亏格**，即 $S$ 的洞数。

### 定理 (整体 Gauss-Bonnet 定理) @161

设 $\Omega$ 是定向曲面 $S$ 上的一个区域，$\Omega$ 的边界 $\partial\Omega$ 由若干条简单闭曲线 $C_{1},\cdots,C_{n}$ 组成。设每一 $C_{i}$ 是分段正则且正定向的，$C_{1},\cdots,C_{n}$ 的外角全体记为 $\theta_{1},\cdots,\theta_{p}$，则成立
$$
\sum_{i=1}^{n}\int_{C_{i}}k_{g}(s)\,\mathrm{d}s+\iint_{\Omega}K\,\mathrm{d}\sigma+\sum_{l=1}^{p}\theta_{l}=2\pi\chi(\Omega). \tag{3-9}
$$
这里 $s$ 表示 $C_{i}$ 的弧长，$C_{i}$ 上的积分等于它在每一正则弧上积分之和。

### 注 (外角的符号) @162

外角 $\theta_{l}$ 的符号由 $S$ 的定向决定：当 $\boldsymbol{r}'(t_{l}-0)$ 到 $\boldsymbol{r}'(t_{l}+0)$ 的方向与 $S$ 的定向一致时，$\theta_{l}$ 取正号；反之取负号。因此
$$
-\pi\leqslant\theta_{l}\leqslant\pi\qquad(l=1,\cdots,p).
$$

### 推论 1 @163

设 $\Omega$ 是定向曲面 $S$ 上的一个单连通区域，$\Omega$ 的边界是分段正则的简单闭曲线 $C$。设 $s$ 是弧长参数，$s_{0},\cdots,s_{k},s_{k+1}$ 和 $\theta_{0},\cdots,\theta_{k}$ 分别是 $C$ 的顶点的弧长参数及外角，其中 $s_{k+1}$ 与 $s_{0}$ 为同一顶点的参数，$k_{g}(s)$ 是 $C$ 的测地曲率，则成立
$$
\sum_{i=0}^{k}\int_{s_{i}}^{s_{i+1}}k_{g}(s)\,\mathrm{d}s+\iint_{\Omega}K\,\mathrm{d}\sigma+\sum_{i=0}^{k}\theta_{i}=2\pi.
$$
这里用到单连通区域的 Euler-Poincaré 示性数等于 $1$：单连通区域即其内任意一条闭曲线都能在其中连续收缩为一点的区域。

### 推论 2 @163

设 $S$ 是紧致的定向曲面，则成立
$$
\iint_{S}K\,\mathrm{d}\sigma=2\pi\chi(S).
$$

### 推论 3 @164

如果紧致的定向曲面 $S$ 的总曲率 $K\geqslant 0$，但不恒为 $0$，则曲面必与球面同胚。

### 定理 (法线像平分面积) @164

设 $C$ 是一条曲率非零的正则空间闭曲线。如果它的法线像 $N(s)$ 是单位球面 $S^{2}$ 上的简单曲线，则法线像必平分 $S^{2}$ 的面积。
