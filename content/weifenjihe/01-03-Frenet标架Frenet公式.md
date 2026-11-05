---
chapter: 1
chapter_title: 三维欧氏空间的曲线论
section: "1.3"
section_title: Frenet 标架 Frenet 公式
pages: "10–12"
---

### 定义 (Frenet 标架) @10

设曲线 $C$ 以弧长 $s$ 为参数，$\boldsymbol{r}(s)$ 为其位置向量。在曲线 $\boldsymbol{r}(s)$ 的每点 $s$ 处，都有三个互相正交的单位向量 $\boldsymbol{T}(s)$、$\boldsymbol{N}(s)$ 及 $\boldsymbol{B}(s)$。我们把 $\{\boldsymbol{r}(s);\boldsymbol{T}(s),\boldsymbol{N}(s),\boldsymbol{B}(s)\}$ 称为曲线在 $s$ 处的 **Frenet 标架**。因为 Frenet 标架是单位正交的右旋标架，所以可用它来作新的直角坐标系的标架，并用这个新的直角坐标系来研究曲线在一点邻近处的性质。

### 注 (邻近标架的变换) @10

曲线上每点都有 Frenet 标架，所以就有必要研究在两个邻近点 $s$、$s+\Delta s$ 处两套 Frenet 标架 $\{\boldsymbol{T}(s),\boldsymbol{N}(s),\boldsymbol{B}(s)\}$ 及 $\{\boldsymbol{T}(s+\Delta s),\boldsymbol{N}(s+\Delta s),\boldsymbol{B}(s+\Delta s)\}$ 之间的变换关系。当 $\Delta s\to 0$ 时，这也相当于研究 $\boldsymbol{T}'(s)$、$\boldsymbol{N}'(s)$、$\boldsymbol{B}'(s)$。

### 定理 (Frenet 公式) @11

Frenet 标架的三个单位向量的导向量可写成下列公式
$$
\begin{cases}
\boldsymbol{T}'=k\boldsymbol{N},\\[2pt]
\boldsymbol{N}'=-k\boldsymbol{T}+\tau\boldsymbol{B},\\[2pt]
\boldsymbol{B}'=-\tau\boldsymbol{N},
\end{cases}\qquad(1-9)
$$
其中 $k$、$\tau$ 分别是曲线的曲率与挠率。通常称它为曲线论的**基本公式**（Frenet 公式）。从 (1-9) 式可见，当曲线 $C$ 的曲率 $k$、挠率 $\tau$ 已知后，邻近点的 Frenet 标架之间的变化情况也就清楚了。

### 定义 (平面曲线的相对曲率) @11

在平面曲线论中，我们可选取法向量 $\boldsymbol{N}_r(s)$，使 $\{\boldsymbol{T}(s),\boldsymbol{N}_r(s)\}$ 的定向与普通直角坐标系的 $x$ 轴和 $y$ 轴的定向相同。此时，Frenet 公式成为
$$
\begin{cases}
\boldsymbol{T}'=k_r\boldsymbol{N}_r,\\[2pt]
\boldsymbol{N}_r'=-k_r\boldsymbol{T},
\end{cases}\qquad(1-10)
$$
但这里的 $k_r$ 的正负由曲线的定向及平面的定向所确定，可能是正值，也可能是负值。为表示与空间曲线论中所定义的曲率 $k=|\boldsymbol{T}'(s)|$（总取正值）相区别，我们将这里的曲率称为平面曲线的**相对曲率**（$|k_r|=k$）。

### 例 1 (密切平面平行的曲线) @11

若曲线的密切平面处处平行，则曲线是平面曲线。

### 注 (挠率为零的判定) @11

也可以从 $\boldsymbol{B}'=\boldsymbol{0}$ 导出 $\tau=0$，由此得出 $\boldsymbol{r}(s)$ 是平面曲线。

### 例 2 (法平面过定点的曲线) @11

若曲线的所有法平面通过定点，则曲线是球面曲线（即此曲线落在一个球面上）。

### 例 3 (球面曲线的标架分解) @12

设 $\boldsymbol{r}(s)$ 是单位球面 $S^2$ 上的一条曲线，$s$ 为弧长参数，它的曲率 $k$、挠率 $\tau$ 都不等于 $0$，则
$$
\boldsymbol{r}=-\rho\boldsymbol{N}-\rho'\sigma\boldsymbol{B},
$$
其中 $\rho=\frac{1}{k}$（曲率半径），$\sigma=\frac{1}{\tau}$（挠率半径）。

### 注 (Frenet 公式解题步骤) @12

应用 Frenet 公式解这类问题的特点大致分为三步：(1) 将几何条件表达为代数方程；(2) 微分这些表达式（尽可能多次的次幂），并将 Frenet 公式与几何条件代入；(3) 解释所得结果的几何意义。
