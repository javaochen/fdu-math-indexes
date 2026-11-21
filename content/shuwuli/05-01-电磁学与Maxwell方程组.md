---
chapter: 5
chapter_title: 偏微分方程的应用
section: "5.1"
section_title: 电磁学与 Maxwell 方程组
pages: "142–144"
---


在前几章介绍了三类基本的数学物理方程之后，本章通过偏微分方程在电磁学、最优传输问题、最优控制理论中的应用，展示偏微分方程是现代数学应用的一个重要工具。

尽管雷电、磁石等自然的电磁现象很早就被广泛地观察记录和应用，但直到 18 世纪中后期，人们才开始用定量手段精确地描述电磁现象。19 世纪中叶以 Ampère 定律、Biot-Savart（毕奥-萨伐尔）定律为代表的一大批实验定律已经可以准确地描述和预测很多电磁学现象。而 Faraday（法拉第）发现电磁感应定律等一批实验现象后，开始尝试用以为力线为代表的电磁场来描述电磁学理论，但在这时人们仍然缺少一个统一而完善的理论体系，将这些已知的重要物理定律统一起来。

在与 Faraday 深刻交流之后，Maxwell 基于他对物理学、数学原理以及两者关系的深刻理解，建立了以 Maxwell 方程组为代表的电磁场理论，用一组简洁的偏微分方程组统一了当时的电磁学定律，使人们可以在一个统一的数学框架下描述、理解、预测各种表面形式互不相同的电磁学现象，这成为了一切关于经典电磁场讨论的基础和出发点。

作为 Maxwell 方程组数学性质的一个推论，Maxwell 预言了电磁波现象，给出了电磁波的数学描述，并说明了光是电磁波的一类，这一预言最终由 Hertz（赫兹）通过实验证实。

### 定义 (真空中的 Maxwell 方程组) @143

Maxwell 方程组在不同应用需求下往往写作不同的等价形式，其中真空中 Maxwell 方程组的微分形式为

$$
\left\{
\begin{array}{ll}
\operatorname{div}\boldsymbol{E}=\dfrac{\rho}{\varepsilon_0}, & \text{(5.1)}\\
\operatorname{div}\boldsymbol{B}=0, & \text{(5.2)}\\
\operatorname{curl}\boldsymbol{E}=-\dfrac{\partial \boldsymbol{B}}{\partial t}, & \text{(5.3)}\\
\operatorname{curl}\boldsymbol{B}=\mu_0\left(\varepsilon_0\dfrac{\partial \boldsymbol{E}}{\partial t}+\boldsymbol{j}\right). & \text{(5.4)}
\end{array}
\right.
$$

这是一组一阶线性偏微分方程组，其中 $\boldsymbol{E}=(E_1,E_2,E_3)^{\mathrm{T}}$ 为电场强度向量，$\boldsymbol{B}=(B_1,B_2,B_3)^{\mathrm{T}}$ 为磁感应强度向量，$\rho$ 为电荷密度函数，$\boldsymbol{j}=(j_1,j_2,j_3)^{\mathrm{T}}$ 为电流密度函数，它们都是时间变量 $t$ 和空间变量 $x$ 的函数，$\varepsilon_0$ 为真空中的介电常数，$\mu_0$ 为真空中的磁导率。

### 命题 (电场的 Gauss 定律) @143

方程组中的第一个方程 $\operatorname{div}\boldsymbol{E}=\rho/\varepsilon_0$ 称为电场的 Gauss 定律。对任意具有光滑边界的有界区域 $\Omega$，将方程两边关于 $x$ 在 $\Omega$ 上积分并使用 Gauss-Green 公式，可得

$$
\int_{\partial\Omega}\boldsymbol{E}\cdot\boldsymbol{n}\,\mathrm{d}S=\frac{1}{\varepsilon_0}\int_{\Omega}\rho\,\mathrm{d}x,
$$

即通过任意封闭曲面 $\partial\Omega$ 向外的电通量等于此曲面内部所包含的电荷的代数和（正负电荷相互抵消）除以 $\varepsilon_0$。

### 命题 (磁场的 Gauss 定律) @143

第二个方程 $\operatorname{div}\boldsymbol{B}=0$ 称为磁场的 Gauss 定律，类似可得

$$
\int_{\partial\Omega}\boldsymbol{B}\cdot\boldsymbol{n}\,\mathrm{d}S=0,
$$

即通过任意封闭曲面 $\partial\Omega$ 的磁感应通量为 $0$，磁场是一个无源场。时空之中是否存在像电荷一样的磁单极子，一直是物理学中的重要问题：如果磁单极子得以发现，整个 Maxwell 方程组都要进行变化调整。

### 命题 (Faraday 电磁感应定律) @143

方程组中的第三个方程 $\operatorname{curl}\boldsymbol{E}=-\partial\boldsymbol{B}/\partial t$ 为 Faraday 电磁感应定律，它定量地表示了变化磁场与其所感应的电场之间的关系。对于任意光滑曲面 $S$，将方程在 $S$ 上作第二类曲面积分并利用 Stokes 公式，有

$$
\oint_{\partial S}\boldsymbol{E}\cdot\mathrm{d}\boldsymbol{l}=-\int_{S}\frac{\partial\boldsymbol{B}}{\partial t}\cdot\boldsymbol{n}\,\mathrm{d}S,
$$

即任何封闭曲线 $\partial S$ 的电场环量，正比于以此曲线为边缘的任一曲面 $S$ 上的磁感应通量的减少率，其中 $\boldsymbol{n}$ 的方向由 $l$ 以右手系决定。

### 命题 (推广的 Ampère 定律) @144

方程组中的第四个方程 $\operatorname{curl}\boldsymbol{B}=\mu_0\left(\varepsilon_0\partial\boldsymbol{E}/\partial t+\boldsymbol{j}\right)$ 是推广的 Ampère 定律。类似上文有

$$
\oint_{\partial S}\boldsymbol{B}\cdot\mathrm{d}\boldsymbol{l}=\mu_0\varepsilon_0\int_{S}\frac{\partial\boldsymbol{E}}{\partial t}\cdot\boldsymbol{n}\,\mathrm{d}S+\mu_0\int_{S}\boldsymbol{j}\cdot\boldsymbol{n}\,\mathrm{d}S .
$$

若电磁场定常，即方程组中各个函数均不依赖于 $t$，则稳定电流磁场的环量正比于通过相应曲面上的电流，这就是 Ampère 定律。

### 注 (位移电流) @144

Maxwell 利用方程组的数学结构深刻地考虑了电磁感应之间的联系：如同变化的磁场能激发电场，他认为变化的电场也应当会激发磁场，由此提出了位移电流的概念，为方程增加了一个新的 $\partial\boldsymbol{E}/\partial t$ 项。

### 命题 (电磁场的波动方程) @144

利用后两个方程分别关于 $x$ 求旋度和关于 $t$ 求偏导后消去磁感应强度 $\boldsymbol{B}$，有

$$
\frac{1}{c^{2}}\frac{\partial^{2}\boldsymbol{E}}{\partial t^{2}}+\operatorname{curl}\operatorname{curl}\boldsymbol{E}=-\mu_0\frac{\partial \boldsymbol{j}}{\partial t},
$$

其中 $c=(\varepsilon_0\mu_0)^{-1/2}$。再由

$$
\operatorname{curl}\operatorname{curl}\boldsymbol{E}=\nabla\operatorname{div}\boldsymbol{E}-\Delta\boldsymbol{E},
$$

得到一组三个波方程

$$
\frac{\partial^{2}\boldsymbol{E}}{\partial t^{2}}-c^{2}\Delta\boldsymbol{E}=-\frac{c^{2}}{\varepsilon_0}\nabla\rho-c^{2}\mu_0\frac{\partial \boldsymbol{j}}{\partial t}.
$$

类似地，对磁场可得到另一组三个波方程

$$
\frac{\partial^{2}\boldsymbol{B}}{\partial t^{2}}-c^{2}\Delta\boldsymbol{B}=\frac{1}{\varepsilon_0}\operatorname{curl}\boldsymbol{j}.
$$

### 命题 (电磁波与光速) @144

即使在时空的某个子集上 $\rho=0$、$\boldsymbol{j}=\mathbf{0}$，即没有电荷或电流来产生电磁场，电场和磁场仍然可以通过相互感应激发，按第四章中介绍的波方程的形式进行传播，这就是电磁波。电磁波的传播速度为 $c$，通过计算这个数值恰好是真空中的光速。由此 Maxwell 预言电磁波广泛存在、可以用 Maxwell 方程组描述，并且光也是一种电磁波。20 多年后，Hertz 通过实验定律确定了电磁波的存在，这也标志着以 Maxwell 方程组为核心的电磁场理论开始被广泛地接受和应用。
