# 控制理论基础

作者：李训经、雍炯敏、周渊

源文件：控制理论基础  李训经，雍炯敏，周渊编著.pdf

> 245 页，7 章。扫描版，PDF 页 = 印刷页 + 10；章末习题尚未整理。

> 本文件由数学命题索引自动生成，包含正文陈述与已录入习题；习题可能尚未完全录入。

## 第1章 绪论

### 1.1 控制的意义和作用（p2–4）

**定义 (控制与受控量)** @2

为使动力机械按人们的意愿运转，人们必须对它们施行种种操纵：使机械的动作开始或停止，或者使它按一定的顺序动作，或者使它维持某种状态，或者根据外部情况改变它的状态，等等。这种种操纵称为**控制**。例如，维持蒸汽机的转速恒定和室内温度恒定，都需要操纵某些装置，这种操纵就是控制；为把某种商品的价格维持在一定范围内，根据市场情况增加或减少它的生产和供应，这种安排也是控制。

若根据某个给定的指令操纵系统的某个物理量（称为**受控量**），使之发生变化，则称这些指令是控制。这里所说的指令是指一种信息，而不是指使系统动作的能源。

**定义 (系统)** @2

控制理论研究的对象称为**系统**。例如，一部蒸汽机是一个系统，一个加热炉是一个系统，一个工厂是一个系统，某种产品的生产和销售体系是一个系统。

**定义 (自动控制)** @2

如果控制所依据的指令是由某种机械或仪表来实现的，而不是直接由人们给定的，则称这种控制为**自动控制**。

**例 1.1 (液位控制系统)** @2

水箱、贮液槽、锅炉等系统的工作都要求把液位的高度维持在一定水平。锅炉通过把水加热变为蒸汽而产生动力或热能，为保证其正常工作，必须随时测量内部水位的高度：水位低于一定高度时加大进水流量以提高水位，反之则减小或关闭进水流量，以减慢水位升高的速度甚至降低水位。这里受控量是锅炉的水位，操纵是根据水位的高度开大或关小进水阀门，这就是控制作用。水位的给定高度根据工艺要求确定，称为受控量的**给定值**。锅炉水位受蒸汽的使用量和压力等因素的影响而变化。

这类系统要把水位维持在给定值附近，需要有测量水位高度的装置，还需要把测量值与给定值进行比较，并根据比较结果进行判断，从而采取控制措施；若这些都由某种机械或仪表完成，并不需要人的直接参与，就是自动控制。若控制作用不适当，例如进水阀门开启过小，水位不可能升高到给定值附近；开启过大，水位又可能远远超过给定值。因此控制作用是否选得恰当是一个十分重要的问题，控制理论就是要研究这类问题。

**例 1.2 (加热炉温度控制)** @3

在冶金、化工和各种工业企业中，加热炉的温度控制十分重要，不同加热炉（如均热炉、退火炉）的控制要求也不尽相同。人们往往要求炉膛温度开始按某种曲线上升，到一定温度后维持一定时间，然后降温；在这类系统中受控量是炉膛温度，要求炉膛温度跟踪一条给定的曲线。为此需随时测量炉膛温度并与给定温度比较，这是决定控制作用的依据。测量温度一般用热电偶或热电阻，其测量精度可以在千分之五以内；控制手段一般是控制加热炉进口燃料的多少。

由操作工人比较测量结果与给定曲线并确定控制作用，是人工控制；由仪表或计算机完成上述工作，则构成炉膛温度的自动控制系统。家用的空调器和冰箱都是典型的温度自动控制装置，其控制手段是开关压缩机的电源。

**例 1.3 (离心调速器)** @3

蒸汽机正常运转的基本要求是维持其转速的恒定。离心调速器利用离心力来测量和调节蒸汽机的转速：转速过高时，它带动某种机械装置使进入蒸汽机的蒸汽量减小以降低转速；反之使蒸汽量增大以提高转速。这样，离心调速器就完成了蒸汽机转速的自动控制。

**定义 (恒值控制与随动控制)** @4

根据受控量的目标值是固定的还是随时间变化的，把相应的控制系统分为**恒值控制系统**和**随动控制系统**两类，相应的控制分别称为**恒值控制**（或自动调整）和**随动控制**（或自动跟踪）。例 1.1 中的液位控制和例 1.3 中的转速控制是恒值控制；例 1.2 中加热炉的温度控制以及仿形机床、数控机床的控制是随动控制。

**定义 (开环控制)** @4

根据控制要求和外部干扰的情况，设计一系列控制指令，对受控量进行控制，称为**开环控制**。这种方案的特点是不管控制作用的后果，而仅仅根据预期的结果来进行控制。例如为控制直流电动机的转速，可以先找出电流大小与转速的关系，然后调整电流的大小，使它对应的转速就是所给定的目标值。

开环控制看起来很简单，但找到电流与转速的关系并不简单；同时由于电源电压或电机负荷波动的影响，用这种方法严格控制电机的转速是十分困难的。

**定义 (闭环控制、反馈控制)** @4

根据受控量与目标值的偏差来决定控制作用，以减小偏差，这种根据受控量即系统输出量的变化来决定控制作用的方法，称为**闭环控制**或**反馈控制**。例 1.1 中的液位控制和例 1.3 中的离心调速器都属于这一类。反馈控制的基本原理是根据受控量与给定值的偏差来决定控制作用，以减小该偏差，而并不关心引起偏差的原因。

**注 (按其他特性的分类)** @4

根据系统的其他特性，还可以将控制系统分为线性系统和非线性系统、确定性系统和随机系统、定常系统和时变系统等等。由于分类原则不同，分类结果也就不同。

### 1.2 控制系统的构成（p4–5）

**定义 (受控对象与受控量)** @4

控制系统的**受控对象**是指系统中完成预定工作的那部分，如蒸汽机、加热炉、贮液槽等等。系统的**受控量**是我们所关心的物理量，如蒸汽机的转速、加热炉的温度、贮液槽的液位等等。

**构造 (反馈控制系统的基本结构)** @5

控制系统的基本结构如图 1.1 所示。受控量由检测装置进行检测，并转换成适当的形式，与目标值的检测值进行比较，得出受控量与目标值的偏差。把偏差的信息送到控制装置，经过必要的运算产生控制的操作量。操作量是作用到受控对象上的，用以减小受控量与目标值的偏差。图中还标出了外部扰动，它对受控对象也是有影响的；受控量是在外部扰动和控制作用的共同影响下变化的。

按图 1.1 的信号流向：目标值经检测装置进入比较点，受控量经反馈支路上的检测装置也进入比较点，在比较点得出受控量与目标值的偏差；偏差送入控制装置产生操作量，操作量连同外部扰动一起作用于受控对象，其输出即为受控量。

**注 (受控对象与设计者处理的部分)** @5

对于一个具体的控制系统，受控对象是研究的客体，它由特定的工艺及其他条件决定，控制系统的设计者只能认识它而不能任意改变它。检测装置、比较装置和控制装置是控制系统设计人员处理的部分，是需要设计研究的。

检测装置是千差万别的：离心调速器利用离心力测量蒸汽机的转速，液位可以用浮球或 U 形管压力计进行测量，温度可以用热电偶或热电阻进行测量。这些都是工程技术问题，不作详细讨论。

**构造 (不计检测装置时的基本结构)** @5

如果不考虑检测装置，则控制系统的基本结构如图 1.2 所示。在这个框图中，分别列出了外部扰动和操作量（控制作用）对受控对象的作用，并且认为受控量的变化由它们的叠加作用来决定：目标值与反馈的受控量在比较点相减得到偏差，偏差经控制装置产生操作量作用于受控对象；外部扰动经另一条通路作用于受控对象；两路作用在输出端叠加，得到受控量。

## 第2章 受控对象的数学描述

### 2.1 连续时间系统的状态空间描述（p7–18）

#### 一、 贮槽液位的动态方程 @7

**例 (贮槽液位的动态方程)** @7

设贮槽有进水管道和出水管道. 进水管道的流量由调节阀的开度决定，记为 $Q_1$；出水管道安放在贮槽的下部，其截面积一定，记为 $F$（图 2.1）.

为讨论出水管道中的流量 $Q_2$，引用流体力学中的 Bernoulli 定律. 设流体的密度为 $\rho$，所关心的流体微元的高度为 $z$、相应的压强为 $p$、相应的流动速度为 $v$. 在流动是定常（无旋）和理想（无黏性）的条件下，

$$\frac{\rho v^{2}}{2}+p+\rho g z=C, \tag{1.1}$$

此处 $g$ 为重力加速度，$C$ 为一个常数.

贮槽液面和出口处的液体均暴露在空气中，故压强为同一常数 $p$. 记出口处液体的流速为 $v$（出口处高度 $z=0$），贮槽液面高度为 $z=h$，其流速（下降速度）为 $\mathrm{d}h(t)/\mathrm{d}t$. 在假定 $\rho=1$ 时，将 (1.1) 的左端分别取 $z=0$ 与 $z=h(t)$ 处的值，得到

$$\frac{v^{2}(t)}{2}+p=\frac{1}{2}\left[\frac{\mathrm{d}h(t)}{\mathrm{d}t}\right]^{2}+p+gh(t),$$

从而

$$v^{2}(t)=2gh(t)+\left[\frac{\mathrm{d}h(t)}{\mathrm{d}t}\right]^{2}. \tag{1.2}$$

由于出口管道的截面积 $F$ 与贮槽的截面积 $S$ 相比很小，$\mathrm{d}h(t)/\mathrm{d}t$ 与 $v$ 相比也很小，故由 (1.2) 知出口处的流速近似为 $v\approx\sqrt{2gh}$. 计入出口处的能量损耗后有 $v=\mu\sqrt{2gh}$，其中损耗系数 $\mu$ 满足 $0<\mu<1$，由出口处的具体形状决定. 因此出口处的流出量是

$$Q_{2}=\mu F\sqrt{2gh}. \tag{1.3}$$

设贮槽的截面积为 $S$，则贮存量为 $V=Sh$，它关于时间的变化率为 $\mathrm{d}V(t)/\mathrm{d}t=S\,\mathrm{d}h(t)/\mathrm{d}t$，这个变化率应等于流入量 $Q_1$ 与流出量 $Q_2$ 之差 $Q_1-Q_2$. 因此

$$S\frac{\mathrm{d}h(t)}{\mathrm{d}t}=Q_{1}(t)-\mu F\sqrt{2gh(t)}. \tag{1.4}$$

当 $Q_1$ 给定时，(1.4) 就是液位 $h$ 所应满足的动态方程.

**注 (静态方程与稳态进水量)** @8

若液位恒稳时的高度为 $h_0$，则稳定的流出量为 $Q_2^0=\mu F\sqrt{2gh_0}$. 要保持液位恒定于这个水平，进水流量应等于出水流量，即

$$Q_{1}^{0}=Q_{2}^{0}=\mu F\sqrt{2gh_{0}}. \tag{1.5}$$

这是对应于 (1.4) 的静态方程，可由在 (1.4) 中令 $\mathrm{d}h(t)/\mathrm{d}t=0$ 得到. 记

$$\Delta h=h-h_{0},\qquad \Delta Q_{1}=Q_{1}-Q_{1}^{0},$$

则由 (1.4) 得到

$$S\frac{\mathrm{d}[\Delta h(t)]}{\mathrm{d}t}=\Delta Q_{1}(t)-\mu F\left[\sqrt{2g\big(h_{0}+\Delta h(t)\big)}-\sqrt{2gh_{0}}\right], \tag{1.6}$$

这是液位偏差 $\Delta h$ 所适合的非线性微分方程.

**命题 (液位偏差的线性化方程)** @9

当 $\Delta h$ 充分小时，利用近似

$$\sqrt{h_{0}+\Delta h}-\sqrt{h_{0}}\approx\frac{\Delta h}{2\sqrt{h_{0}}},$$

可由 (1.6) 得到线性化方程

$$S\frac{\mathrm{d}[\Delta h(t)]}{\mathrm{d}t}=\Delta Q_{1}(t)-\frac{\mu F\sqrt{g}}{\sqrt{2h_{0}}}\Delta h(t), \tag{1.7}$$

它是液位偏差 $\Delta h$ 所适合的一阶线性微分方程. 进一步，若记

$$\tilde{K}=\frac{\sqrt{2h_{0}}}{\mu F\sqrt{g}},\qquad \tilde{T}=S\tilde{K}=\frac{S\sqrt{2h_{0}}}{\mu F\sqrt{g}}, \tag{1.8}$$

那么 (1.7) 成为

$$\tilde{T}\frac{\mathrm{d}[\Delta h(t)]}{\mathrm{d}t}+\Delta h(t)=\tilde{K}\Delta Q_{1}(t). \tag{1.9}$$

常数 $\tilde{T}$ 和 $\tilde{K}$ 表征了液位偏差 $\Delta h$ 的特性；进口流量的改变量 $\Delta Q_1$ 可以看作保持液位稳定的一个操作量，即控制作用.

**命题 (出水管截面积可调时的线性化方程)** @9

若液位对象的出水管道也由阀门控制，则出水管截面积 $F$ 也是可以改变的. 恒稳进水量 $Q_1^0$ 与液位高度 $h_0$ 给定时，为保持液位恒定，出水管的流出量恒定，因此由 (1.5) 知出水管截面积 $F_0$ 应由下式决定：

$$Q_{1}^{0}=\mu F_{0}\sqrt{2gh_{0}}. \tag{1.10}$$

它是为保证出水流量与进水流量相等而得到的. 当用户用量变化时，改变出水管道阀门的开启程度，即有 $F=F_0+\Delta F$. 这时 (1.6) 可以写为

$$S\frac{\mathrm{d}[\Delta h(t)]}{\mathrm{d}t}=\Delta Q_{1}(t)-\mu\left\{\big[F_{0}+\Delta F(t)\big]\sqrt{2g\big[h_{0}+\Delta h(t)\big]}-F_{0}\sqrt{2gh_{0}}\right\}, \tag{1.11}$$

从而它的线性化方程是

$$S\frac{\mathrm{d}[\Delta h(t)]}{\mathrm{d}t}=\Delta Q_{1}(t)-\mu\Delta F(t)\sqrt{2gh_{0}}-\frac{\mu F_{0}\sqrt{g}}{\sqrt{2h_{0}}}\Delta h(t). \tag{1.12}$$

这里的 $\Delta F$ 可以视为系统的外部扰动. 方程 (1.12) 表示了 $\Delta Q_1$ 和 $\Delta F$ 对受控量 $\Delta h$ 的动态影响，它们的作用是线性叠加的.

**注 (时间常数与静态放大倍数)** @10

若记

$$K=\frac{\sqrt{2h_{0}}}{\mu F_{0}\sqrt{g}},\qquad T=SK,\qquad K_{1}=-\frac{2h_{0}}{F_{0}}, \tag{1.13}$$

那么 (1.12) 可以改写为

$$T\frac{\mathrm{d}[\Delta h(t)]}{\mathrm{d}t}+\Delta h(t)=K\Delta Q_{1}(t)+K_{1}\Delta F(t). \tag{1.14}$$

这里常数 $T$ 称为系统 (1.14) 的时间常数；常数 $K$ 称为控制作用的静态放大倍数，$K>0$ 表示进水量增加时液位升高；常数 $K_1$ 称为扰动作用的静态放大倍数，$K_1<0$ 表示出水阀门开大时液位随之降低. 方程 (1.14) 的线性性表明：当进水阀门和出水阀门开度变化较小时，它们对液位高度的影响可以线性叠加.

对液位对象而言，外部扰动不一定来自出水管道，也可能来自贮槽容器的变形等等.

#### 二、 阻容电路 @10

**例 (阻容电路的微分方程)** @10

由电阻 $R$、电容 $C$ 和电源 $E$ 串联而成的电路称为阻容电路（图 2.2）. 把电容 $C$ 两端的电势降 $x(t)$ 作为受控量，而电源的电势 $E(t)$ 作为控制手段对该受控对象起作用，$E(t)$ 的变化将导致 $x(t)$ 的变化. 设电路中的电流强度为 $I(t)$，根据 Kirchhoff 定律有

$$E(t)=RI(t)+\frac{1}{C}\int_{0}^{t}I(s)\,\mathrm{d}s. \tag{1.15}$$

上式也可以按下述方式直接推导. 若 $Q(t)$ 为穿过给定截面的电荷量，则穿过该截面的电流（即单位时间内穿过该截面的电荷量）为

$$I(t)=\frac{\mathrm{d}Q(t)}{\mathrm{d}t}. \tag{1.16}$$

Ohm 定律给出电流 $I$、电压 $V$ 与电阻 $R$ 的关系 $I=V/R$，故图 2.2 中电阻 $R$ 两端的电压为 $RI(t)$；电容的定义为 $C=Q/V$，故电容两端的电压为 $x(t)=Q(t)/C$. 由于电阻和电容串联，电路的总电压为各分电压之和：

$$E(t)=RI(t)+\frac{Q(t)}{C}. \tag{1.17}$$

现在由 (1.16) 知

$$x(t)=\frac{Q(t)}{C}=\frac{1}{C}\int_{0}^{t}I(s)\,\mathrm{d}s+\frac{Q(0)}{C},\qquad \frac{\mathrm{d}x(t)}{\mathrm{d}t}=\frac{1}{C}I(t). \tag{1.18}$$

在 (1.18) 中取 $Q(0)=0$ 并注意到 (1.17)，可得 (1.15). 综合 (1.17) 和 (1.18)，得到

$$RC\frac{\mathrm{d}x(t)}{\mathrm{d}t}+x(t)=E(t). \tag{1.19}$$

这就是描述阻容电路的微分方程，它与 (1.15) 等价，与贮槽液位的微分方程 (1.9)、(1.14) 形式上一致. $T=RC$ 称为阻容电路的时间常数.

#### 三、 二阶阻容电路 @11

**例 (二阶阻容电路的微分方程组)** @11

图 2.3 所描述的对象称为二阶阻容电路. 推导它的微分方程要用到 Kirchhoff 定律：(i) 在任一节点（三个或三个以上支路的交汇点）电流之和为 $0$（即没有电流的堆积或“亏空”）；(ii) 任意两点接成的回路电压变化总和为 $0$.

设 $I(t)$ 为流过 $R_1$ 的电流强度，$I_1(t)$ 为流过 $C_1$ 的电流强度，$I_2(t)$ 为流过 $R_2$ 的电流强度，则成立着

在 $A$ 点：

$$I(t)=I_{1}(t)+I_{2}(t), \tag{1.20}$$

在 $A'B'$ 之间：

$$E(t)=R_{1}I(t)+\frac{1}{C_{1}}\int_{0}^{t}I_{1}(s)\,\mathrm{d}s, \tag{1.21}$$

在 $AB$ 之间：

$$\frac{1}{C_{1}}\int_{0}^{t}I_{1}(s)\,\mathrm{d}s=R_{2}I_{2}(t)+\frac{1}{C_{2}}\int_{0}^{t}I_{2}(s)\,\mathrm{d}s. \tag{1.22}$$

若记

$$x_{1}(t)=\frac{1}{C_{1}}\int_{0}^{t}I_{1}(s)\,\mathrm{d}s,\qquad x_{2}(t)=\frac{1}{C_{2}}\int_{0}^{t}I_{2}(s)\,\mathrm{d}s, \tag{1.23}$$

那么 $x_1(t),x_2(t)$ 分别表示电容 $C_1,C_2$ 上的电势降，并且

$$I_{1}(t)=C_{1}\frac{\mathrm{d}x_{1}(t)}{\mathrm{d}t},\qquad I_{2}(t)=C_{2}\frac{\mathrm{d}x_{2}(t)}{\mathrm{d}t}. \tag{1.24}$$

利用 (1.20)—(1.21) 和 (1.23)—(1.24) 可得

$$E(t)=R_{1}I(t)+\frac{1}{C_{1}}\int_{0}^{t}I_{1}(s)\,\mathrm{d}s=R_{1}\big[I_{1}(t)+I_{2}(t)\big]+x_{1}(t)=R_{1}C_{1}\frac{\mathrm{d}x_{1}(t)}{\mathrm{d}t}+R_{1}C_{2}\frac{\mathrm{d}x_{2}(t)}{\mathrm{d}t}+x_{1}(t), \tag{1.25}$$

再将 (1.23) 和 (1.24) 代入 (1.22) 得到

$$x_{1}(t)=R_{2}C_{2}\frac{\mathrm{d}x_{2}(t)}{\mathrm{d}t}+x_{2}(t). \tag{1.26}$$

整理 (1.25) 和 (1.26)，得到

$$\begin{cases}\dfrac{\mathrm{d}x_{1}(t)}{\mathrm{d}t}+\dfrac{1}{C_{1}}\left(\dfrac{1}{R_{1}}+\dfrac{1}{R_{2}}\right)x_{1}(t)-\dfrac{1}{R_{2}C_{1}}x_{2}(t)=\dfrac{1}{R_{1}C_{1}}E(t),\\[2mm] \dfrac{\mathrm{d}x_{2}(t)}{\mathrm{d}t}-\dfrac{1}{R_{2}C_{2}}x_{1}(t)+\dfrac{1}{R_{2}C_{2}}x_{2}(t)=0.\end{cases} \tag{1.27}$$

这是一个含有两个一阶线性微分方程的微分方程组. 这也是称图 2.3 所示的对象为二阶阻容电路的一个原因.

#### 四、 双液位系统 @13

**例 (双液位系统的动态方程)** @13

考虑由两个相连通的贮槽组成的双液位系统（图 2.4）. 贮槽 1 的横截面积为 $S_1$，贮槽 2 的横截面积为 $S_2$；它们底部由截面积为 $F_1$ 的管道相连，贮槽 2 有一流出管道，其横截面积为 $F_2$，贮槽 1 有一进水管道，其流量为 $Q$.

利用 Bernoulli 定律（假定液体密度 $\rho=1$，重力加速度为 $g$），可以得到

$$\left[\frac{\mathrm{d}x_{1}(t)}{\mathrm{d}t}\right]^{2}+2p+2gx_{1}(t)=\hat{v}^{2}(t)+2\hat{p}(t),$$

$$\left[\frac{\mathrm{d}x_{2}(t)}{\mathrm{d}t}\right]^{2}+2p+2gx_{2}(t)=v^{2}(t)+2p.$$

这里 $p$ 是贮槽 1 液面处的压强，$\hat{v}$ 是连通管道处液体的流出速度，$\hat{p}$ 是连通管道处的压强，故 $\hat{p}=p+gx_2$；$v$ 是贮槽 2 底部出口处液体的流出速度. 从而

$$\left[\frac{\mathrm{d}x_{1}(t)}{\mathrm{d}t}\right]^{2}+2gx_{1}(t)=\hat{v}^{2}(t)+2gx_{2}(t), \tag{1.28}$$

$$\left[\frac{\mathrm{d}x_{2}(t)}{\mathrm{d}t}\right]^{2}+2gx_{2}(t)=v^{2}(t). \tag{1.29}$$

由于 $F_2$ 与 $S_2$ 相比很小，$\mathrm{d}x_2/\mathrm{d}t$ 较 $v$ 很小，故由 (1.29) 知近似地有 $v=\sqrt{2gx_2}$. 计入出口管道的能量损耗，实际上有 $v=\mu_2\sqrt{2gx_2}$，这里 $\mu_2$ 是出口管道的特性常数，$0<\mu_2<1$. 从而

$$Q_{2}=F_{2}v=\mu_{2}F_{2}\sqrt{2gx_{2}}. \tag{1.30}$$

根据质量守恒定律，成立着

$$S_{1}\frac{\mathrm{d}x_{1}(t)}{\mathrm{d}t}+S_{2}\frac{\mathrm{d}x_{2}(t)}{\mathrm{d}t}=Q(t)-Q_{2}(t). \tag{1.31}$$

对于连通管道，由于 $F_1$ 与 $S_1$ 相比很小，$\mathrm{d}x_1/\mathrm{d}t$ 较 $\hat{v}$ 很小，从而由 (1.28) 知近似地成立着

$$\hat{v}=\mu_{1}\sqrt{2g\big(x_{1}-x_{2}\big)}, \tag{1.32}$$

此处 $\mu_1$ 是连通管道的特性常数，$0<\mu_1<1$. 于是由质量守恒定律可得

$$\begin{cases}S_{1}\dfrac{\mathrm{d}x_{1}(t)}{\mathrm{d}t}=Q(t)-\mu_{1}F_{1}\sqrt{2g\big[x_{1}(t)-x_{2}(t)\big]},\\[2mm] S_{2}\dfrac{\mathrm{d}x_{2}(t)}{\mathrm{d}t}=\mu_{1}F_{1}\sqrt{2g\big[x_{1}(t)-x_{2}(t)\big]}-\mu_{2}F_{2}\sqrt{2gx_{2}(t)}.\end{cases} \tag{1.33}$$

**命题 (双液位系统的线性化方程)** @14

当贮槽 1 和 2 的进水量分别等于各自的流出量时，液面高度 $x_1$ 和 $x_2$ 保持恒稳值 $x_1^0$ 和 $x_2^0$，此处假定 $x_1^0>x_2^0$. 此时贮槽 1 的进水量 $Q_0$ 满足

$$Q_{0}=\mu_{1}F_{1}\sqrt{2g\big(x_{1}^{0}-x_{2}^{0}\big)}=\mu_{2}F_{2}\sqrt{2gx_{2}^{0}}. \tag{1.34}$$

对于一般的进水量 $Q$ 及相应的液面高度 $x_1,x_2$，记 $\Delta Q=Q-Q_0$，$\Delta x_1=x_1-x_1^0$，$\Delta x_2=x_2-x_2^0$，那么

$$\begin{cases}S_{1}\dfrac{\mathrm{d}[\Delta x_{1}(t)]}{\mathrm{d}t}=Q_{0}+\Delta Q(t)-\mu_{1}F_{1}\sqrt{2g\big[x_{1}^{0}-x_{2}^{0}+\Delta x_{1}(t)-\Delta x_{2}(t)\big]},\\[2mm] S_{2}\dfrac{\mathrm{d}[\Delta x_{2}(t)]}{\mathrm{d}t}=\mu_{1}F_{1}\sqrt{2g\big[x_{1}^{0}-x_{2}^{0}+\Delta x_{1}(t)-\Delta x_{2}(t)\big]}-\mu_{2}F_{2}\sqrt{2g\big[x_{2}^{0}+\Delta x_{2}(t)\big]}.\end{cases} \tag{1.35}$$

利用 Taylor 展开并略去一次以上的项，得到 (1.35) 的线性化方程为

$$\begin{cases}S_{1}\dfrac{\mathrm{d}[\Delta x_{1}(t)]}{\mathrm{d}t}=\Delta Q(t)-\mu_{1}F_{1}\sqrt{\dfrac{g}{2\big(x_{1}^{0}-x_{2}^{0}\big)}}\big[\Delta x_{1}(t)-\Delta x_{2}(t)\big],\\[2mm] S_{2}\dfrac{\mathrm{d}[\Delta x_{2}(t)]}{\mathrm{d}t}=\mu_{1}F_{1}\sqrt{\dfrac{g}{2\big(x_{1}^{0}-x_{2}^{0}\big)}}\big[\Delta x_{1}(t)-\Delta x_{2}(t)\big]-\mu_{2}F_{2}\sqrt{\dfrac{g}{2x_{2}^{0}}}\Delta x_{2}(t).\end{cases} \tag{1.36}$$

进一步，若记

$$R_{1}=\frac{1}{\mu_{1}F_{1}}\sqrt{\frac{2\big(x_{1}^{0}-x_{2}^{0}\big)}{g}},\qquad R_{2}=\frac{\sqrt{2x_{2}^{0}}}{\mu_{2}F_{2}\sqrt{g}},$$

那么 (1.36) 可写成

$$\begin{cases}S_{1}\dfrac{\mathrm{d}[\Delta x_{1}(t)]}{\mathrm{d}t}+\dfrac{1}{R_{1}}\Delta x_{1}(t)-\dfrac{1}{R_{1}}\Delta x_{2}(t)=\Delta Q(t),\\[2mm] S_{2}\dfrac{\mathrm{d}[\Delta x_{2}(t)]}{\mathrm{d}t}-\dfrac{1}{R_{1}}\Delta x_{1}(t)+\left(\dfrac{1}{R_{1}}+\dfrac{1}{R_{2}}\right)\Delta x_{2}(t)=0.\end{cases} \tag{1.37}$$

这同样是含有两个一阶线性微分方程的微分方程组，它与二阶阻容电路的微分方程组 (1.27) 具有类似的形式.

**注 (液位对象与阻容电路的类比)** @15

液位对象的线性化方程与阻容电路的方程形式上一致，双液位对象的线性化方程与二阶阻容电路的动态方程类同，这就有可能利用线性电路来模拟液位对象.

以上四个例子中，动态方程都是利用物理规律（质量守恒、Kirchhoff 定律）列写的. 其中液位对象满足非线性方程，需在平衡状态附近进行线性化；而根据电学知识，阻容电路满足线性方程（组）.

#### 五、 状态空间方法 @15

**构造 (输入变量、输出变量与状态变量)** @15

将前面例子中的变量分为三类. 第一类称为输入变量，如液位系统的进水量、阻容电路中电源的电势，这些量可以人为确定. 第二类称为输出变量，是系统可以测量的结果变量，如液位系统的液位高度与目标值的差、阻容电路的输出电压. 第三类称为状态变量，是为了描述系统的动态过程而引入的变量，它们中有一部分可能是输出变量；还有一些状态变量，如二阶阻容电路中的 $x_1(t)$，是不可测量的，所以不是输出变量. 更一般地，状态变量可能是建立模型时引入的变量，它们未必是物理量，也未必能直接测量.

输入变量和输出变量又称为外部变量，而状态变量则称为内部变量.

**定义 (连续系统的状态空间方法)** @15

称用一阶微分方程（组）描述受控对象和控制系统的方法为连续系统的状态空间方法.

**定义 (状态方程与观测方程)** @15

设受控对象有 $m$ 个输入变量 $u_1,u_2,\cdots,u_m$，有 $r$ 个输出变量 $y_1,y_2,\cdots,y_r$，还有 $n$ 个状态变量 $x_1,x_2,\cdots,x_n$. 受控对象由下述微分方程组

$$\frac{\mathrm{d}x_{j}(t)}{\mathrm{d}t}=f_{j}\big(t,x_{1}(t),x_{2}(t),\cdots,x_{n}(t),u_{1}(t),u_{2}(t),\cdots,u_{m}(t)\big),\qquad j=1,2,\cdots,n, \tag{1.38}$$

和函数关系

$$y_{k}(t)=g_{k}\big(t,x_{1}(t),x_{2}(t),\cdots,x_{n}(t),u_{1}(t),u_{2}(t),\cdots,u_{m}(t)\big),\qquad k=1,2,\cdots,r \tag{1.39}$$

来描述. 称 (1.38) 为该对象的状态方程，(1.39) 为该对象的观测方程. 其中

$$f_{j}\big(t,x_{1},x_{2},\cdots,x_{n},u_{1},u_{2},\cdots,u_{m}\big),\qquad j=1,2,\cdots,n$$

和

$$g_{k}\big(t,x_{1},x_{2},\cdots,x_{n},u_{1},u_{2},\cdots,u_{m}\big),\qquad k=1,2,\cdots,r$$

是满足某些条件的函数，它们由受控对象的特性决定.

**例 (阻容电路与液位对象的状态方程)** @16

对阻容电路，$x$ 为电容两端的电势降，$u$ 是电源的电势 $E$，而 $f$ 和 $g$ 分别是

$$f(t,x,u)=\frac{1}{RC}(E-x),\qquad g(t,x,u)=x.$$

在阻容电路中输出变量和状态变量是一致的. 对于二阶阻容电路，可取电容 $C_1$ 和 $C_2$ 的两端电势降 $x_1$ 和 $x_2$ 为状态变量，取电容 $C_2$ 的两端电势降 $x_2$ 为输出变量，取电源电势 $E$ 为输入变量，这时

$$f_{1}(t,x_{1},x_{2},E)=\frac{1}{C_{1}}\left[\frac{E}{R_{1}}-\left(\frac{1}{R_{1}}+\frac{1}{R_{2}}\right)x_{1}+\frac{1}{R_{2}}x_{2}\right],$$

$$f_{2}(t,x_{1},x_{2},E)=\frac{1}{R_{2}C_{2}}\big(x_{1}-x_{2}\big),\qquad g(t,x_{1},x_{2},E)=x_{2}.$$

对液位对象，取状态变量和输出变量为液位高度 $h$，输入变量为 $Q_1$，那么

$$f(t,h,Q_{1})=\frac{Q_{1}-\mu F\sqrt{2gh}}{S},\qquad g(t,h,Q_{1})=h.$$

**构造 (向量形式的状态空间描述)** @16

引进向量记号

$$\boldsymbol{x}=\begin{pmatrix}x_{1}\\x_{2}\\\vdots\\x_{n}\end{pmatrix},\qquad \boldsymbol{u}=\begin{pmatrix}u_{1}\\u_{2}\\\vdots\\u_{m}\end{pmatrix},\qquad \boldsymbol{y}=\begin{pmatrix}y_{1}\\y_{2}\\\vdots\\y_{r}\end{pmatrix},\qquad \boldsymbol{f}=\begin{pmatrix}f_{1}\\f_{2}\\\vdots\\f_{n}\end{pmatrix},\qquad \boldsymbol{g}=\begin{pmatrix}g_{1}\\g_{2}\\\vdots\\g_{r}\end{pmatrix},$$

那么 (1.38) 和 (1.39) 可以写成

$$\begin{cases}\dfrac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=\boldsymbol{f}\big(t,\boldsymbol{x}(t),\boldsymbol{u}(t)\big),\\[2mm] \boldsymbol{y}(t)=\boldsymbol{g}\big(t,\boldsymbol{x}(t),\boldsymbol{u}(t)\big).\end{cases} \tag{1.40}$$

**定义 (线性系统与线性定常系统)** @17

特别地，当

$$\boldsymbol{f}(t,\boldsymbol{x},\boldsymbol{u})=\boldsymbol{A}(t)\boldsymbol{x}(t)+\boldsymbol{B}(t)\boldsymbol{u}(t),\qquad \boldsymbol{g}(t,\boldsymbol{x},\boldsymbol{u})=\boldsymbol{C}(t)\boldsymbol{x}(t)+\boldsymbol{D}(t)\boldsymbol{u}(t)$$

时，(1.40) 成为

$$\begin{cases}\dfrac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=\boldsymbol{A}(t)\boldsymbol{x}(t)+\boldsymbol{B}(t)\boldsymbol{u}(t),\\[2mm] \boldsymbol{y}(t)=\boldsymbol{C}(t)\boldsymbol{x}(t)+\boldsymbol{D}(t)\boldsymbol{u}(t),\end{cases} \tag{1.41}$$

这里 $\boldsymbol{A}(t),\boldsymbol{B}(t),\boldsymbol{C}(t),\boldsymbol{D}(t)$ 分别为 $n\times n$、$n\times m$、$r\times n$ 和 $r\times m$ 维的矩阵值函数. 称能用 (1.41) 描述的对象为线性系统. 例如 (1.9)、(1.14)、(1.19)、(1.27) 和 (1.37) 都是线性系统.

当 $\boldsymbol{A}(t)\equiv\boldsymbol{A}$，$\boldsymbol{B}(t)\equiv\boldsymbol{B}$，$\boldsymbol{C}(t)\equiv\boldsymbol{C}$，$\boldsymbol{D}(t)\equiv\boldsymbol{D}$ 都是常值矩阵时，系统的状态方程组进一步变为

$$\frac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=\boldsymbol{A}\boldsymbol{x}(t)+\boldsymbol{B}\boldsymbol{u}(t), \tag{1.42}$$

观测方程组变为

$$\boldsymbol{y}(t)=\boldsymbol{C}\boldsymbol{x}(t)+\boldsymbol{D}\boldsymbol{u}(t), \tag{1.43}$$

由 (1.42) 和 (1.43) 描述的系统称为线性定常系统.

**注 (非线性系统在工作点附近的线性化)** @17

虽然大多数具体系统可能是非线性的，但在工作点附近，它们可以用线性系统（甚至线性定常系统）来近似描述. 上述例子中的 (1.9)、(1.14)、(1.19)、(1.27) 和 (1.37) 都是线性的，且系数是常数. 线性微分方程的理论为研究线性控制系统提供了有力的数学工具.

**命题 (状态转移矩阵与常数变易公式)** @18

考虑非齐次线性微分方程组

$$\frac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=\boldsymbol{A}(t)\boldsymbol{x}(t)+\boldsymbol{B}(t)\boldsymbol{u}(t), \tag{1.44}$$

初始条件为 $\boldsymbol{x}(t_0)=\boldsymbol{x}_0$，其中 $t_0\in\mathbb{R}$，$\boldsymbol{x}_0\in\mathbb{R}^n$ 给定. 假定系数 $\boldsymbol{A}(t),\boldsymbol{B}(t)$ 在区间 $I$ 上连续，则存在状态转移矩阵 $\boldsymbol{\Phi}(\cdot,\cdot)$，满足 $\forall s,t,\tau\in I$，

$$\begin{cases}\dfrac{\mathrm{d}\boldsymbol{\Phi}(t,s)}{\mathrm{d}t}\equiv\boldsymbol{A}(t)\boldsymbol{\Phi}(t,s),\\[2mm] \boldsymbol{\Phi}(s,s)\equiv\boldsymbol{I},\\[2mm] \boldsymbol{\Phi}(t,s)\boldsymbol{\Phi}(s,\tau)=\boldsymbol{\Phi}(t,\tau),\\[2mm] \boldsymbol{\Phi}^{-1}(t,s)=\boldsymbol{\Phi}(s,t).\end{cases} \tag{1.45}$$

状态转移矩阵 $\boldsymbol{\Phi}(\cdot,\cdot)$ 给出了没有外加控制作用下（即 $\boldsymbol{u}(t)\equiv 0$ 时）系统从时刻 $s$ 到时刻 $t$ 的状态转移情况. 确切地讲，$\boldsymbol{x}(t)=\boldsymbol{\Phi}(t,t_0)\boldsymbol{x}_0$ 是方程 $\mathrm{d}\boldsymbol{x}(t)/\mathrm{d}t=\boldsymbol{A}(t)\boldsymbol{x}(t)$ 适合条件 $\boldsymbol{x}(t_0)=\boldsymbol{x}_0$ 的解. 进一步，对于任何给定的 $\boldsymbol{u}(\cdot)$，(1.44) 的解可以用常数变易公式表示：

$$\boldsymbol{x}(t)=\boldsymbol{\Phi}(t,t_{0})\boldsymbol{x}_{0}+\int_{t_{0}}^{t}\boldsymbol{\Phi}(t,s)\boldsymbol{B}(s)\boldsymbol{u}(s)\,\mathrm{d}s. \tag{1.46}$$

**定义 (矩阵指数函数)** @18

对于 $n$ 阶常数方阵 $\boldsymbol{A}$，定义矩阵指数函数

$$\mathrm{e}^{\boldsymbol{A}t}=\sum_{k=0}^{\infty}\frac{t^{k}}{k!}\boldsymbol{A}^{k},\qquad t\in\mathbb{R}. \tag{1.47}$$

无穷级数 (1.47) 总是收敛的，并且 $\mathrm{e}^{\boldsymbol{A}t}$ 满足

$$\begin{cases}\dfrac{\mathrm{d}\,\mathrm{e}^{\boldsymbol{A}t}}{\mathrm{d}t}=\boldsymbol{A}\mathrm{e}^{\boldsymbol{A}t}=\mathrm{e}^{\boldsymbol{A}t}\boldsymbol{A},\\[2mm] \mathrm{e}^{\boldsymbol{A}0}=\boldsymbol{I},\qquad \mathrm{e}^{\boldsymbol{A}(t+s)}=\mathrm{e}^{\boldsymbol{A}t}\cdot\mathrm{e}^{\boldsymbol{A}s}.\end{cases} \tag{1.48}$$

若记

$$\boldsymbol{\Phi}(t,s)\equiv\mathrm{e}^{\boldsymbol{A}(t-s)}, \tag{1.49}$$

那么 $\boldsymbol{\Phi}(\cdot,\cdot)$ 就是定常系统 (1.42) 的状态转移矩阵. 于是当 $\boldsymbol{u}(\cdot)$ 给定后，(1.46) 可以化为

$$\boldsymbol{x}(t)=\mathrm{e}^{\boldsymbol{A}(t-t_{0})}\boldsymbol{x}_{0}+\int_{t_{0}}^{t}\mathrm{e}^{\boldsymbol{A}(t-s)}\boldsymbol{B}\boldsymbol{u}(s)\,\mathrm{d}s. \tag{1.50}$$

由此可见，矩阵指数对于定常系统的研究极为重要.

**例 1.1** @18

已知

$$\boldsymbol{A}=\begin{pmatrix}2&-1\\0&2\end{pmatrix},$$

求 $\mathrm{e}^{\boldsymbol{A}t}$.

结论（计算过程在下一页）：$\mathrm{e}^{\boldsymbol{A}t}=\begin{pmatrix}\mathrm{e}^{2t}&-t\mathrm{e}^{2t}\\0&\mathrm{e}^{2t}\end{pmatrix}$.

### 2.2 传递函数和传递矩阵（p19–37）

#### 一、 传递函数与频率特性 @19

在 §2.1 中，我们曾用一阶微分方程

$$T\frac{\mathrm{d}x(t)}{\mathrm{d}t}+x(t)=Ku(t)\tag{2.1}$$

描述液位系统和阻容电路，工程上称能用 (2.1) 描述的系统为**一阶惯性环节**。它表示在输入 $u(\cdot)$ 作用下，输出 $x(\cdot)$ 所适合的数学规律。在工程上，有时用 $sx$ 表示 $\dfrac{\mathrm{d}x}{\mathrm{d}t}$，这里 $s$ 称为一个导数算子。

**定义 (导数算子)** @20

导数算子 $s$ 定义为

$$\begin{cases}s:C^{1}[0,+\infty)\to C[0,+\infty),\\(sx)(t)=\dfrac{\mathrm{d}x(t)}{\mathrm{d}t},\quad \forall x(\cdot)\in C^{1}[0,+\infty),\end{cases}$$

其中 $C^{1}[0,+\infty)$ 代表 $[0,+\infty)$ 上所有具有连续导函数的函数全体，而 $C[0,+\infty)$ 则表示全体 $[0,+\infty)$ 上的连续函数。

**定义 (传递函数)** @20

利用导数算子 $s$，可以把 (2.1) 写成

$$(Ts+1)x=Ku,\tag{2.2}$$

然后再形式地将 (2.2) 写为

$$x=\frac{K}{Ts+1}u.\tag{2.3}$$

这时称变量 $s$ 的函数 $\dfrac{K}{Ts+1}$ 为 (2.1) 所描述系统的**传递函数** (transfer function)。应当注意的是，在这里起初把 $s$ 理解为求导运算，接下来又把它理解为复数，再作除法运算。因此上述讨论是完全形式的，似乎并没有严格的数学意义。但是，如果引进 Laplace 变换，则上述过程是可以给以确切的数学含义的。现代控制理论的创始人之一 R. E. Kalman 曾指出，对于线性定常系统可以用纯代数运算把上述讨论的数学意义说明清楚，这本质上是把形式运算赋予严格的代数意义。这里，我们不引进 Laplace 变换，而完全形式地把 $\dfrac{\mathrm{d}x}{\mathrm{d}t}$ 记为 $sx$，然后等效地导出传递函数。公式 (2.3) 可以用如图 2.5 所示的方块图形象地表述：输入 $u$ 经过方框 $\dfrac{K}{Ts+1}$ 得到输出 $x$。

也就是说输出 $x$ 等于传递函数作用到输入 $u$ 产生的结果。它等价于 (2.2) 或方程 (2.1)。这就是说，传递函数 $\dfrac{K}{Ts+1}$ 可以视为一阶惯性环节的另一种描述，是输入输出变量关系的一种简捷表示。

为说明传递函数的数学意义，我们来看在余弦输入 $u(t)=\cos\omega t$（$\omega\in\mathbb{R}$）下，环节 (2.1) 的周期输出，即讨论下述方程

$$T\frac{\mathrm{d}x(t)}{\mathrm{d}t}+x(t)=K\cos\omega t.\tag{2.4}$$

**命题 (余弦输入下的稳定周期解)** @21

设 $T>0$。方程 (2.4) 的解为

$$x(t)=\mathrm{e}^{-\frac{t}{T}}\left[x(0)-\frac{K}{1+\omega^{2}T^{2}}\right]+\frac{K}{1+\omega^{2}T^{2}}(\cos\omega t+\omega T\sin\omega t),\tag{2.5}$$

因此 (2.4) 有唯一的周期解

$$\begin{aligned}\bar{x}(t)&=\frac{K}{1+\omega^{2}T^{2}}(\cos\omega t+\omega T\sin\omega t)\\&=\frac{K}{\sqrt{1+\omega^{2}T^{2}}}\cos(\omega t-\varphi),\end{aligned}\tag{2.6}$$

其周期为 $\dfrac{2\pi}{\omega}$，振幅为 $\dfrac{K}{\sqrt{1+\omega^{2}T^{2}}}$，相位差 $\varphi=\arccos\dfrac{1}{\sqrt{1+\omega^{2}T^{2}}}$。并且当 $T>0$ 时，(2.4) 的其他解与上述的周期解之差当 $t\to+\infty$ 时趋于零。我们称 (2.6) 是 (2.4) 的稳定周期解，或称 (2.6) 是 (2.1) 在余弦输入下的输出，它体现了系统在输入为 $\cos\omega t$ 时的本质特征。

**定义 (频率特性)** @22

由 (2.6) 给出的函数 $\bar{x}(t)$ 是复函数

$$z(t)=\frac{K}{1+\mathrm{i}\omega T}\mathrm{e}^{\mathrm{i}\omega t}\tag{2.7}$$

的实部，而输入 $\cos\omega t$ 又恰是 $\mathrm{e}^{\mathrm{i}\omega t}$ 的实部。因此，复值函数

$$\frac{K}{1+\mathrm{i}\omega T}\tag{2.8}$$

刻画了 (2.1) 在余弦输入下的特性。类似地，当输入为正弦函数 $\sin\omega t$（$\omega\in\mathbb{R}$）时，即方程为

$$T\frac{\mathrm{d}x(t)}{\mathrm{d}t}+x(t)=K\sin\omega t\tag{2.9}$$

时，其唯一周期解为

$$\begin{aligned}\bar{y}(t)&=\frac{K}{1+\omega^{2}T^{2}}(\sin\omega t-\omega T\cos\omega t)\\&=\operatorname{Im}\left(\frac{K}{1+\mathrm{i}\omega T}\mathrm{e}^{\mathrm{i}\omega t}\right)\equiv\operatorname{Im}z(t),\end{aligned}\tag{2.10}$$

所以 (2.8) 也刻画了 (2.1) 在正弦输入下的特性。人们称 (2.8) 为 (2.1) 所描述系统的**频率特性** (frequency characteristic)。

上述讨论也可以如下形式地进行：先讨论方程

$$T\frac{\mathrm{d}z(t)}{\mathrm{d}t}+z(t)=K\mathrm{e}^{\mathrm{i}\omega t}\tag{2.11}$$

的形状为 $z(t)=F\mathrm{e}^{\mathrm{i}\omega t}$ 的解，其中 $F$ 是待定的复数，把它代入 (2.11) 得 $(\mathrm{i}\omega T+1)F\mathrm{e}^{\mathrm{i}\omega t}=K\mathrm{e}^{\mathrm{i}\omega t}$，所以 $F=\dfrac{K}{1+\mathrm{i}\omega T}$。故 $z(t)$ 由 (2.7) 给出，它是 (2.11) 的解，从而它的实部是 (2.4) 的解，虚部是 (2.9) 的解。显然，复值函数 (2.8) 恰恰是 (2.1) 的传递函数在 $s=\mathrm{i}\omega$ 处的值。所以，形式定义的传递函数当 $s=\mathrm{i}\omega$ 时成为频率特性，相应的方块图如图 2.6 所示：输入 $\mathrm{e}^{\mathrm{i}\omega t}$ 经过方框 $\dfrac{K}{1+\mathrm{i}\omega T}$ 得到输出 $x$。

**命题 (频率特性决定输入输出关系)** @23

设 $T>0$，考虑输入

$$u(t)=\sum_{n=1}^{\infty}[a_{n}\cos\omega_{n}t+b_{n}\sin\omega_{n}t]\equiv\sum_{n=1}^{\infty}[a_{n}u_{n}(t)+b_{n}v_{n}(t)],\tag{2.12}$$

并假定 $\sum\limits_{n=1}^{\infty}(|a_{n}|+|b_{n}|)<+\infty$（特别地，对于某正整数 $N$，当 $n>N$ 时 $a_{n}=b_{n}=0$，则 (2.12) 为有限项之和）。记

$$\left\{\begin{aligned}x_{n}(t)&=\frac{K}{1+\omega_{n}^{2}T^{2}}(\cos\omega_{n}t+\omega_{n}T\sin\omega_{n}t)=\operatorname{Re}\left(\frac{K}{1+\mathrm{i}\omega_{n}T}\mathrm{e}^{\mathrm{i}\omega_{n}t}\right),\\y_{n}(t)&=\frac{K}{1+\omega_{n}^{2}T^{2}}(\sin\omega_{n}t-\omega_{n}T\cos\omega_{n}t)=\operatorname{Im}\left(\frac{K}{1+\mathrm{i}\omega_{n}T}\mathrm{e}^{\mathrm{i}\omega_{n}t}\right),\end{aligned}\right.\tag{2.13}$$

则

$$\tilde{x}(t)=\sum_{n=1}^{\infty}[a_{n}x_{n}(t)+b_{n}y_{n}(t)]\tag{2.14}$$

为 (2.1) 的特解，而 (2.1) 的通解为 $x(t)=C\mathrm{e}^{-\frac{t}{T}}+\tilde{x}(t)$，其中

$$C=x(0)-\sum_{n=1}^{\infty}\left(\frac{a_{n}K}{1+\omega_{n}^{2}T^{2}}-\frac{b_{n}\omega_{n}KT}{1+\omega_{n}^{2}T^{2}}\right),\tag{2.15}$$

(2.15) 中的无穷级数绝对收敛。而当 $t\to+\infty$ 时

$$\left|x(t)-\sum_{n=1}^{\infty}[a_{n}x_{n}(t)+b_{n}y_{n}(t)]\right|=\left|C\mathrm{e}^{-\frac{t}{T}}\right|\to 0.\tag{2.16}$$

所以，当 $t\to+\infty$ 时，系统 (2.1) 在输入 (2.12) 下的输出 $x(\cdot)$ 可以由 $x_{n}(\cdot)$ 和 $y_{n}(\cdot)$ 的线性组合来逼近。而由 (2.13) 知，$x_{n}(\cdot)$ 和 $y_{n}(\cdot)$ 恰好可以由频率特性简单地表示出来。因此，粗略地讲，知道了系统的频率特性就基本知道了系统的输入和输出之间的关系。

**定义 (线性定常系统的传递函数)** @24

对于一般的用高阶微分方程描述的线性定常系统

$$\frac{\mathrm{d}^{n}x(t)}{\mathrm{d}t^{n}}+a_{1}\frac{\mathrm{d}^{n-1}x(t)}{\mathrm{d}t^{n-1}}+\cdots+a_{n}x(t)=b_{0}\frac{\mathrm{d}^{m}u(t)}{\mathrm{d}t^{m}}+b_{1}\frac{\mathrm{d}^{m-1}u(t)}{\mathrm{d}t^{m-1}}+\cdots+b_{m}u(t),\tag{2.17}$$

其中 $a_{1},a_{2},\cdots,a_{n};b_{0},b_{1},\cdots,b_{m}$ 都是实常数，$u$ 是系统的输入，$x$ 是系统的输出。如果形式地记 $\dfrac{\mathrm{d}x}{\mathrm{d}t}$ 为 $sx$，$\dfrac{\mathrm{d}^{2}x}{\mathrm{d}t^{2}}$ 为 $s^{2}x$，$\cdots$，$\dfrac{\mathrm{d}^{n}x}{\mathrm{d}t^{n}}$ 为 $s^{n}x$，$\dfrac{\mathrm{d}u}{\mathrm{d}t}$ 为 $su$，$\cdots$，$\dfrac{\mathrm{d}^{m}u}{\mathrm{d}t^{m}}$ 为 $s^{m}u$，那么 (2.17) 可以写成

$$a(s)x(t)=b(s)u(t),\tag{2.18}$$

其中 $a(s)=s^{n}+a_{1}s^{n-1}+\cdots+a_{n}$，$b(s)=b_{0}s^{m}+b_{1}s^{m-1}+\cdots+b_{m}$。从而形式地得到

$$x=\frac{b(s)}{a(s)}u.\tag{2.19}$$

这时，我们称

$$F(s)=\frac{b(s)}{a(s)}=\frac{b_{0}s^{m}+b_{1}s^{m-1}+\cdots+b_{m}}{s^{n}+a_{1}s^{n-1}+\cdots+a_{n}}\tag{2.20}$$

为 (2.17) 所描述系统的传递函数，称 $F(\mathrm{i}\omega)$ 为系统的频率特性。应当注意的是：如果系统的传递函数为 (2.20)，则我们认为它的输出 $x$ 就由 (2.19) 给出，即 (2.18) 成立。

**命题 (频率特性是传递函数在虚轴上的值)** @25

对于系统 (2.17)，取 $u=\mathrm{e}^{\mathrm{i}\omega t}$，其中 $\omega\in\mathbb{R}$ 使得 $a(\mathrm{i}\omega)\neq0$，则形状为 $f\mathrm{e}^{\mathrm{i}\omega t}$ 的解的系数为

$$f=\frac{b_{0}(\mathrm{i}\omega)^{m}+b_{1}(\mathrm{i}\omega)^{m-1}+\cdots+b_{m}}{(\mathrm{i}\omega)^{n}+a_{1}(\mathrm{i}\omega)^{n-1}+\cdots+a_{n}},\tag{2.21}$$

即

$$x(t)=\frac{b_{0}(\mathrm{i}\omega)^{m}+b_{1}(\mathrm{i}\omega)^{m-1}+\cdots+b_{m}}{(\mathrm{i}\omega)^{n}+a_{1}(\mathrm{i}\omega)^{n-1}+\cdots+a_{n}}\mathrm{e}^{\mathrm{i}\omega t}\tag{2.22}$$

是 (2.17) 在输入 $\mathrm{e}^{\mathrm{i}\omega t}$ 下的周期输出。我们称 (2.21) 是 (2.17) 所描述系统的频率特性，它正是 (2.17) 的传递函数 (2.20) 在 $s=\mathrm{i}\omega$ 处的值。

**例 2.1** @25

设 $a(s)=s^{2}+1$，$b(s)=1$。此时 $\omega=1$ 使得 $a(\mathrm{i}\omega)=0$。考虑二阶微分方程

$$\frac{\mathrm{d}^{2}x(t)}{\mathrm{d}t^{2}}+x(t)=\mathrm{e}^{\mathrm{i}t},$$

它的（复）通解为

$$x(t)=c_{1}\cos t+c_{2}\sin t-\frac{\mathrm{i}t}{2}\mathrm{e}^{\mathrm{i}t},$$

其中 $c_{1},c_{2}$ 为任意常数。无论如何选取常数 $c_{1},c_{2}$，上述的 $x(\cdot)$ 都不是周期解。

**注 (共振与公因子的约去)** @25

当 $a(\mathrm{i}\omega)=0$ 时，相应的周期解可能不存在。一般地，如果 $a(\mathrm{i}\omega)=0\neq b(\mathrm{i}\omega)$，则系统 (2.17) 不存在形状为 $f\mathrm{e}^{\mathrm{i}\omega t}$ 的解；如果 $a(\mathrm{i}\omega)=b(\mathrm{i}\omega)=0$，则系统 (2.17) 有无穷个周期解 $c\mathrm{e}^{\mathrm{i}\omega t}$（$c$ 为任意非零常数）。另一方面，当 $a(\mathrm{i}\omega)\neq0$ 时，(2.21) 中 $a(\mathrm{i}\omega),b(\mathrm{i}\omega)$ 的公因子可以约去。一般地，如果 $a(s)$ 在虚轴上无零点，则频率特性 $\dfrac{b(\mathrm{i}\omega)}{a(\mathrm{i}\omega)}$ 可以约掉分子分母的公因子。

**注 (零点抵消的后果)** @25

在传递函数和频率特性的讨论中，如果多项式 $s^{n}+a_{1}s^{n-1}+\cdots+a_{n}$ 和多项式 $b_{0}s^{m}+b_{1}s^{m-1}+\cdots+b_{m}$ 有公因子（即两个多项式有共同的零点），则在传递函数中有可能产生因子（零点）抵消，这时因子不能随意约去，否则 (2.20) 不能完全表述 (2.17)。例如，对系统

$$\frac{\mathrm{d}^{2}x(t)}{\mathrm{d}t^{2}}-3\frac{\mathrm{d}x(t)}{\mathrm{d}t}+2x(t)=\frac{\mathrm{d}u(t)}{\mathrm{d}t}-u(t)\tag{2.23}$$

有 $(s^{2}-3s+2)x=(s-1)u$，从而传递函数应是 $\dfrac{s-1}{s^{2}-3s+2}$。若约掉因子 $s-1$，它就成为 $\dfrac{1}{s-2}$，所对应的系统为

$$\frac{\mathrm{d}x(t)}{\mathrm{d}t}-2x(t)=u(t).\tag{2.24}$$

当 $u$ 连续可微时，方程 (2.24) 的解必是方程 (2.23) 的解，但方程 (2.23) 的解并不一定是方程 (2.24) 的解：例如 $u=\mathrm{e}^{t}$ 时，$x=\mathrm{e}^{t}$ 是 (2.23) 的解，却不是 (2.24) 的解。这说明用传递函数描述对象时，应注意零点抵消所产生的后果；在工程上有时误认为方程 (2.24) 就是方程 (2.23)，这是不正确的。再如系统 $\dfrac{\mathrm{d}x(t)}{\mathrm{d}t}=\dfrac{\mathrm{d}u(t)}{\mathrm{d}t}$，它表明输出的变化速度等于输入的变化速度，因此 $x(t)=u(t)+C$，$C$ 为任意常数；当 $C\neq0$ 时 $x\neq u$，然而若从 $sx=su$ 推出 $x(t)=u(t)$，就会得出不正确的结论。

**命题 2.2** @26

设 $a(s)=a_{0}(s)(s-s_{0})$，$b(s)=b_{0}(s)(s-s_{0})$，则 $a(s)x=b(s)u$ 与 $a_{0}(s)x=b_{0}(s)u$ 不等价。

**注 (既约分式)** @26

当多项式 $s^{n}+a_{1}s^{n-1}+\cdots+a_{n}$ 和 $b_{0}s^{m}+b_{1}s^{m-1}+\cdots+b_{m}$ 没有公因子（即无共同的零点），或传递函数 (2.20) 本身已经是既约分式时，用传递函数描述的系统与用微分方程 (2.17) 描述的系统不会产生上述问题。

#### 二、 串联和并联环节的传递函数 @27

受控对象通常是比较复杂的，为了便于分析研究，人们往往先研究一些简单环节，将简单环节通过连接来构成较为复杂的系统，这些连接包括串联、并联和反馈等。

**命题 (串联环节的传递函数)** @27

假设系统有两个环节，第一个环节的输出正是第二个环节的输入，我们称这两个环节是串联的（图 2.7）。设第一个环节的输入是 $u$，输出是 $x_{1}$，传递函数为 $F_{1}(s)$；第二个环节的输入是 $x_{1}$，输出为 $x_{2}$，传递函数为 $F_{2}(s)$。假设

$$F_{1}(s)=\frac{P_{1}(s)}{Q_{1}(s)},\quad F_{2}(s)=\frac{P_{2}(s)}{Q_{2}(s)},\tag{2.25}$$

其中 $P_{1}(s),P_{2}(s),Q_{1}(s),Q_{2}(s)$ 是 $s$ 的多项式。则输入 $u$ 对输出 $x_{2}$ 的传递函数 $F(s)$ 是

$$F(s)=\frac{P_{2}(s)P_{1}(s)}{Q_{1}(s)Q_{2}(s)}=F_{2}(s)F_{1}(s),\tag{2.26}$$

即串联环节的传递函数等于各个环节传递函数的乘积。

**例 (串联环节)** @27

设

$$F_{1}(s)=\frac{s-1}{s+1},\quad F_{2}(s)=\frac{1}{s+2},\tag{2.27}$$

则相应的状态方程为

$$\begin{cases}\dfrac{\mathrm{d}x_{1}(t)}{\mathrm{d}t}+x_{1}(t)=\dfrac{\mathrm{d}u(t)}{\mathrm{d}t}-u(t),\\[6pt]\dfrac{\mathrm{d}x_{2}(t)}{\mathrm{d}t}+2x_{2}(t)=x_{1}(t).\end{cases}\tag{2.28}$$

消去 $x_{1}$ 得

$$\frac{\mathrm{d}^{2}x_{2}(t)}{\mathrm{d}t^{2}}+3\frac{\mathrm{d}x_{2}(t)}{\mathrm{d}t}+2x_{2}(t)=\frac{\mathrm{d}u(t)}{\mathrm{d}t}-u(t),\tag{2.29}$$

或

$$(s^{2}+3s+2)x_{2}=(s-1)u.\tag{2.30}$$

该系统的传递函数是 $\dfrac{s-1}{s^{2}+3s+2}=F_{2}(s)F_{1}(s)$（图 2.8、图 2.9）。

**命题 (并联环节的传递函数)** @29

假设两个环节有共同的输入 $u$，它们的输出分别是 $x_{1}$ 和 $x_{2}$，系统最后的输出 $x=x_{1}+x_{2}$，称这两个环节是并联的（图 2.10）。如果两个环节的传递函数分别是

$$F_{1}(s)=\frac{P_{1}(s)}{Q_{1}(s)},\quad F_{2}(s)=\frac{P_{2}(s)}{Q_{2}(s)},\tag{2.31}$$

则并联后的传递函数 $F(s)$ 是

$$F(s)=\frac{Q_{2}(s)P_{1}(s)+Q_{1}(s)P_{2}(s)}{Q_{1}(s)Q_{2}(s)}=\frac{P_{1}(s)}{Q_{1}(s)}+\frac{P_{2}(s)}{Q_{2}(s)}\equiv F_{1}(s)+F_{2}(s),\tag{2.32}$$

也就是说，并联环节的传递函数等于各个环节传递函数之和。

**例 (并联分解不唯一)** @29

设

$$F_{1}(s)=\frac{s-1}{s+1},\quad F_{2}(s)=\frac{1}{s-1},$$

此时状态方程为

$$\begin{cases}\dfrac{\mathrm{d}x_{1}(t)}{\mathrm{d}t}+x_{1}(t)=\dfrac{\mathrm{d}u(t)}{\mathrm{d}t}-u(t),\\[6pt]\dfrac{\mathrm{d}x_{2}(t)}{\mathrm{d}t}-x_{2}(t)=u(t),\end{cases}\tag{2.33}$$

由此可得传递函数

$$\frac{s^{2}-s+2}{s^{2}-1}=\frac{s-1}{s+1}+\frac{1}{s-1}=1-\frac{2}{s+1}+\frac{1}{s-1}.$$

因此，该系统也可以视为由三个环节（传递函数分别为 $1$、$-\dfrac{2}{s+1}$、$\dfrac{1}{s-1}$）并联而得（图 2.11）。此例也表明系统的环节分解不是唯一的。

**命题 (互异根时的部分分式分解)** @30

设 $F(s)=\dfrac{P(s)}{Q(s)}$，其中 $P(s)$ 和 $Q(s)$ 是既约的实系数多项式，$P(s)$ 的次数不高于 $Q(s)$ 的次数，并且 $Q(s)=\prod\limits_{j=1}^{n}(s-s_{j})$，$s_{j}\neq s_{k}$（$j\neq k$），$\forall j,k=1,2,\cdots,n$。则利用部分分式展开，可以得到分解

$$F(s)=c_{0}+\sum_{j=1}^{n}\frac{c_{j}}{s-s_{j}},\quad s\in\mathbb{C},\tag{2.34}$$

其中 $c_{0},c_{1},c_{2},\cdots,c_{n}$ 是可以由 $P(s)$ 和 $Q(s)$ 确定的常数，允许 $s_{j}$（$1\leqslant j\leqslant n$）和 $c_{k}$（$0\leqslant k\leqslant n$）为复数。

**命题 2.3** @30

对分解式 (2.34)：

(i) 当 $s_{j}$ 均为实数时，$c_{j}$ 均为实数；

(ii) 若 $s_{1}$ 和 $s_{2}$ 为一对共轭复根，则 $c_{1}=\bar{c}_{2}$。

**推论 (无重根时的实系数分解)** @31

当 $s_{1}$ 和 $s_{2}$ 为一对共轭复根（即 $s_{1}=\bar{s}_{2}$）时，$\dfrac{c_{1}}{s-s_{1}}+\dfrac{c_{2}}{s-s_{2}}$ 是一个实系数有理分式。从而当 $Q(s)$ 没有重根时，设 $s_{1},s_{2},\cdots,s_{k}$ 为 $Q(s)$ 的实根全体，$\alpha_{1}\pm\mathrm{i}\beta_{1},\cdots,\alpha_{l}\pm\mathrm{i}\beta_{l}$ 为它的共轭复根全体，其中 $k+2l=n$，则有分解

$$F(s)=F(\infty)+\sum_{j=1}^{k}\frac{c_{j}}{s-s_{j}}+\sum_{j=1}^{l}\frac{a_{j}s+b_{j}}{s^{2}-2\alpha_{j}s+\alpha_{j}^{2}+\beta_{j}^{2}},\tag{2.36}$$

其中 $c_{j},a_{j},b_{j}$ 均为实数，$F(\infty)=\lim\limits_{s\to\infty}F(s)$。

**命题 (有重根时的部分分式分解)** @31

设

$$Q(s)=\prod_{j=1}^{N}(s-s_{j})^{k_{j}},\quad \sum_{j=1}^{N}k_{j}=n,\quad s_{j}\ \text{互不相同}.\tag{2.37}$$

由待定系数法可得

$$F(s)=\frac{P(s)}{Q(s)}=\sum_{j=1}^{N}\frac{P_{j}(s)}{(s-s_{j})^{k_{j}}},\quad \deg P_{j}(s)\leqslant k_{j},\tag{2.38}$$

此处 $\deg P_{j}(s)$ 表示多项式 $P_{j}(s)$ 的次数。将 $P_{j}(s)$ 在 $s_{j}$ 处作 Taylor 展开 $P_{j}(s)=\sum\limits_{k=0}^{k_{j}}p_{jk}(s-s_{j})^{k}$，则 (2.38) 可以化为

$$F(s)=F(\infty)+\sum_{j=1}^{N}\sum_{k=1}^{k_{j}}\frac{c_{jk}}{(s-s_{j})^{k}},\tag{2.39}$$

其中 $F(\infty)=\sum\limits_{j=1}^{N}p_{j,k_{j}}$，$c_{jk}=p_{j,k_{j}-k}$。

**命题 (重根情形的实形式分解)** @32

现设 $M+2L=N$，使得

$$\begin{cases}s_{j}\in\mathbb{R},\quad 1\leqslant j\leqslant M,\\\{s_{j}\mid M+1\leqslant j\leqslant N\}=\{\alpha_{l}\pm\mathrm{i}\beta_{l}\mid 1\leqslant l\leqslant L\},\end{cases}\tag{2.40}$$

则 (2.39) 可以进一步化为

$$F(s)=F(\infty)+\sum_{j=1}^{M}\sum_{k=1}^{k_{j}}\frac{c_{jk}}{(s-s_{j})^{k}}+\sum_{l=1}^{L}\sum_{k=1}^{\bar{k}_{l}}\left[\frac{a_{lk}}{(s-\alpha_{l}-\mathrm{i}\beta_{l})^{k}}+\frac{\bar{a}_{lk}}{(s-\alpha_{l}+\mathrm{i}\beta_{l})^{k}}\right],\tag{2.41}$$

其中 $c_{jk}\in\mathbb{R}$ 由 (2.39) 给出，$Q(s)$ 的根 $\alpha_{l}+\mathrm{i}\beta_{l}$ 的重数为 $\bar{k}_{l}$，相应的 $a_{lk}$ 与 $\bar{a}_{lk}$ 互为共轭（证明类似于命题 2.2）。记 $\tau=\alpha_{l}+\mathrm{i}\beta_{l}$，$\beta_{l}\neq0$，考察

$$\frac{a}{(s-\tau)^{k}}+\frac{\bar{a}}{(s-\bar{\tau})^{k}}=\frac{a(s-\bar{\tau})^{k}+\bar{a}(s-\tau)^{k}}{[s^{2}-(\tau+\bar{\tau})s+|\tau|^{2}]^{k}}.\tag{2.42}$$

**引理 2.4** @32

设 $a$ 为非零复数，$\tau$ 是虚部非零的复数，$k$ 为正整数。关于 $s$ 的方程

$$a(s-\bar{\tau})^{k}+\bar{a}(s-\tau)^{k}=0\tag{2.43}$$

仅有实根，且均为单根。

**命题 (一般的实形式分解)** @33

对 (2.42) 中的每一项，有

$$\frac{a_{lk}}{(s-\alpha_{l}-\mathrm{i}\beta_{l})^{k}}+\frac{\bar{a}_{lk}}{(s-\alpha_{l}+\mathrm{i}\beta_{l})^{k}}=\frac{\prod\limits_{\theta=1}^{k}(s-\lambda_{lk}^{\theta})}{[s^{2}-2\alpha_{l}s+\alpha_{l}^{2}+\beta_{l}^{2}]^{k}},\tag{2.46}$$

其中 $\lambda_{lk}^{\theta}$ 均为实数，且两两不等（它们是形如 (2.43) 的方程的解）。从而得到一般的分解式

$$F(s)=F(\infty)+\sum_{j=1}^{M}\sum_{k=1}^{k_{j}}\frac{c_{jk}}{(s-s_{j})^{k}}+\sum_{l=1}^{L}\sum_{k=1}^{\bar{k}_{l}}\frac{\prod\limits_{\theta=1}^{k}(s-\lambda_{lk}^{\theta})}{[s^{2}-2\alpha_{l}s+\alpha_{l}^{2}+\beta_{l}^{2}]^{k}}.\tag{2.47}$$

(2.47) 右端第一个和式中的各项可以分别看作是若干个一阶环节的串联，第二个和式中的各项是若干个二阶环节的串联，然后所有这些环节再并联起来。因此，讨论清楚 $0$ 阶（见下述）、一阶和二阶环节以后，就基本上可将一般的情形讨论清楚。

#### 三、 典型环节 @33

现在，让我们来看一些典型环节。

**定义 (放大环节)** @33

考虑方程

$$x(t)=Ku(t),\quad t\in[0,+\infty),\tag{2.48}$$

其中 $K$ 是常数。上式说明输出 $x(\cdot)$ 是输入 $u(\cdot)$ 的倍数，因此称之为**放大环节**（或**比例环节**）。该系统的传递函数是

$$F(s)\equiv K.\tag{2.49}$$

也称 (2.48) 为一个 $0$ 阶环节，因为它是一个 $0$ 阶微分方程。

**定义 (一阶惯性环节)** @33

考虑状态方程

$$T\frac{\mathrm{d}x(t)}{\mathrm{d}t}+x(t)=Ku(t),\quad t\in[0,+\infty),\tag{2.50}$$

其中 $T$ 和 $K$ 是常数，$T\neq0$。该系统的传递函数是

$$F(s)=\frac{K}{Ts+1}.\tag{2.51}$$

由于 (2.50) 是一个一阶微分方程，我们称它为**一阶惯性环节**；前面的液位系统和阻容电路的例子就是这样的环节。称 $K$ 为系统的静态放大倍数，称 $T$ 为时间常数。

**定义 (微分环节)** @34

考虑动态方程

$$x(t)=K\frac{\mathrm{d}u(t)}{\mathrm{d}t},\quad t\geqslant0,\tag{2.52}$$

其中 $K$ 为常数。该系统的输出是输入的导数的 $K$ 倍，它的传递函数为

$$F(s)=Ks.\tag{2.53}$$

这样的环节被称为**微分环节**。

**定义 (积分环节)** @34

对于动态方程

$$\frac{\mathrm{d}x(t)}{\mathrm{d}t}=Ku(t),\quad t\geqslant0,\tag{2.54}$$

其中 $K$ 为常数，有

$$x(t)=x(0)+K\int_{0}^{t}u(s)\,\mathrm{d}s,\quad t\geqslant0,\tag{2.55}$$

即输出是输入的积分。因此称 (2.54) 为**积分环节**，它的传递函数为

$$F(s)=\frac{K}{s}.\tag{2.56}$$

**定义 (二阶振荡环节)** @34

考虑动态方程

$$T^{2}\frac{\mathrm{d}^{2}x(t)}{\mathrm{d}t^{2}}+2\zeta T\frac{\mathrm{d}x(t)}{\mathrm{d}t}+x(t)=Ku(t),\quad t\geqslant0,\tag{2.57}$$

其中 $K,T$ 和 $\zeta$ 是常数，$T\neq0$，$0\leqslant\zeta<1$。该系统的传递函数为

$$F(s)=\frac{K}{T^{2}s^{2}+2\zeta Ts+1}.\tag{2.58}$$

因为 (2.57) 是一个二阶微分方程，我们称它为**二阶振荡环节**。

**注 (典型环节的意义)** @34

上述五个环节（放大环节、一阶惯性环节、微分环节、积分环节、二阶振荡环节）被称为典型环节，它们都是简单环节。根据有理函数的部分分式展开理论，当环节的传递函数为有理函数时，有分解 (2.47)，从而高阶环节可以由典型环节串联和并联得到。总之，可以利用典型环节组合产生高阶环节，这说明研究典型环节是研究一般情形的基础。

#### 四、 传递矩阵 @35

**定义 (传递矩阵)** @35

考虑多变量线性系统

$$\begin{cases}\dfrac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=\boldsymbol{A}\boldsymbol{x}(t)+\boldsymbol{B}\boldsymbol{u}(t),\\[6pt]\boldsymbol{y}(t)=\boldsymbol{C}\boldsymbol{x}(t)+\boldsymbol{D}\boldsymbol{u}(t).\end{cases}\tag{2.59}$$

若形式地记 $\dfrac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}$ 为 $s\boldsymbol{x}$，那么

$$(s\boldsymbol{I}-\boldsymbol{A})\boldsymbol{x}=\boldsymbol{B}\boldsymbol{u},\tag{2.60}$$

于是可以形式地得到

$$\boldsymbol{y}=[\boldsymbol{C}(s\boldsymbol{I}-\boldsymbol{A})^{-1}\boldsymbol{B}+\boldsymbol{D}]\boldsymbol{u}.\tag{2.61}$$

我们称矩阵

$$\boldsymbol{C}(s\boldsymbol{I}-\boldsymbol{A})^{-1}\boldsymbol{B}+\boldsymbol{D}\tag{2.62}$$

为 (2.59) 所描述系统的**传递矩阵**。在这里我们又把 $s$ 理解为复数。

**命题 (传递矩阵与周期输入)** @35

当输入取作

$$\boldsymbol{u}(t)=\boldsymbol{u}_{0}\mathrm{e}^{\mathrm{i}\omega t}\tag{2.63}$$

时，系统 (2.59) 变为

$$\begin{cases}\dfrac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=\boldsymbol{A}\boldsymbol{x}(t)+\boldsymbol{B}\boldsymbol{u}_{0}\mathrm{e}^{\mathrm{i}\omega t},\\[6pt]\boldsymbol{y}(t)=\boldsymbol{C}\boldsymbol{x}(t)+\boldsymbol{D}\boldsymbol{u}_{0}\mathrm{e}^{\mathrm{i}\omega t}.\end{cases}\tag{2.64}$$

当 $|\mathrm{i}\omega\boldsymbol{I}-\boldsymbol{A}|\neq0$ 时，它有一个周期为 $\dfrac{2\pi}{\omega}$ 的周期输出

$$\boldsymbol{y}(t)=[\boldsymbol{C}(\mathrm{i}\omega\boldsymbol{I}-\boldsymbol{A})^{-1}\boldsymbol{B}+\boldsymbol{D}]\boldsymbol{u}_{0}\mathrm{e}^{\mathrm{i}\omega t},$$

这里 $\boldsymbol{C}(\mathrm{i}\omega\boldsymbol{I}-\boldsymbol{A})^{-1}\boldsymbol{B}+\boldsymbol{D}$ 恰恰是传递矩阵在 $s=\mathrm{i}\omega$ 处的值。这也是我们称 (2.62) 为 (2.59) 的传递矩阵的理由。

**定义 (极点)** @35

在传递矩阵的讨论中涉及矩阵 $(s\boldsymbol{I}-\boldsymbol{A})^{-1}$，我们称 $\boldsymbol{A}$ 的特征值为系统的**极点**。

**命题 (传递矩阵的真性)** @36

传递矩阵的计算关键部分在于 $(s\boldsymbol{I}-\boldsymbol{A})^{-1}$，有下列公式

$$(s\boldsymbol{I}-\boldsymbol{A})^{-1}=\frac{\operatorname{adj}(s\boldsymbol{I}-\boldsymbol{A})}{\det(s\boldsymbol{I}-\boldsymbol{A})},$$

其中 $\operatorname{adj}(\boldsymbol{X})$ 表示矩阵 $\boldsymbol{X}$ 的伴随矩阵，$\det(\boldsymbol{X})$ 表示 $\boldsymbol{X}$ 的行列式。伴随矩阵 $\operatorname{adj}(s\boldsymbol{I}-\boldsymbol{A})$ 的元素都是 $s$ 的多项式，次数不超过 $n-1$；$\det(s\boldsymbol{I}-\boldsymbol{A})$ 是 $s$ 的 $n$ 次多项式。所以传递矩阵是**真的**，即各元素均为有理函数，且分子多项式的次数不高于分母多项式的次数；而当且仅当 $\boldsymbol{D}=\boldsymbol{0}$ 时，传递矩阵是**严格真的**，即传递矩阵中各元素均为分子多项式的次数严格小于分母多项式的次数的有理函数。

**例 2.5** @36

设

$$\boldsymbol{A}=\begin{pmatrix}1&-2\\2&3\end{pmatrix},$$

求 $(s\boldsymbol{I}-\boldsymbol{A})^{-1}$。

容易计算

$$\operatorname{adj}(s\boldsymbol{I}-\boldsymbol{A})=\begin{pmatrix}s-3&2\\-2&s-1\end{pmatrix},\quad \det(s\boldsymbol{I}-\boldsymbol{A})=s^{2}-4s+7,$$

所以

$$(s\boldsymbol{I}-\boldsymbol{A})^{-1}=\frac{1}{s^{2}-4s+7}\begin{pmatrix}s-3&2\\-2&s-1\end{pmatrix}.$$

**注 (零点极点对消)** @36

在传递矩阵的讨论中也会出现本节开始时关于传递函数零点极点对消的问题，这是用传递矩阵表示多变量线性系统所应注意的。

#### 五、 单输入单输出系统的实现 @36

给定了系统的传递矩阵，如果它的元素都是 $s$ 的有理函数，我们期望能有矩阵 $\boldsymbol{A},\boldsymbol{B},\boldsymbol{C},\boldsymbol{D}$，使得以其为系数矩阵的系统 (2.59) 的传递矩阵恰为 (2.62)，这是所谓的线性系统实现问题；一般的传递矩阵的实现将在本书第五章中详细讨论。这里看一个特殊的情形——单输入单输出系统。

**命题 (单输入单输出系统的实现)** @36

对于传递函数

$$F(s)=\frac{b_{0}s^{m}+b_{1}s^{m-1}+\cdots+b_{m}}{s^{n}+a_{1}s^{n-1}+\cdots+a_{n}},\tag{2.65}$$

它所对应的系统可由微分方程

$$\frac{\mathrm{d}^{n}y(t)}{\mathrm{d}t^{n}}+a_{1}\frac{\mathrm{d}^{n-1}y(t)}{\mathrm{d}t^{n-1}}+\cdots+a_{n}y(t)=b_{0}\frac{\mathrm{d}^{m}u(t)}{\mathrm{d}t^{m}}+b_{1}\frac{\mathrm{d}^{m-1}u(t)}{\mathrm{d}t^{m-1}}+\cdots+b_{m}u(t)\tag{2.66}$$

来描述，但这里用了控制作用的导数。假设 $m<n$，引入系统

$$\frac{\mathrm{d}^{n}x(t)}{\mathrm{d}t^{n}}+a_{1}\frac{\mathrm{d}^{n-1}x(t)}{\mathrm{d}t^{n-1}}+\cdots+a_{n}x(t)=u(t),\tag{2.67}$$

然后令

$$y(t)=b_{0}\frac{\mathrm{d}^{m}x(t)}{\mathrm{d}t^{m}}+b_{1}\frac{\mathrm{d}^{m-1}x(t)}{\mathrm{d}t^{m-1}}+\cdots+b_{m}x(t),\tag{2.68}$$

则 (2.67)、(2.68) 描述了传递函数为 (2.65) 的系统，且不用控制作用的导数来表示。

**构造 (Brunovsky 典则形式)** @37

使用导数算子 $s=\dfrac{\mathrm{d}}{\mathrm{d}t}$，记 $a(s)=s^{n}+a_{1}s^{n-1}+\cdots+a_{n}$，$b(s)=b_{0}s^{m}+b_{1}s^{m-1}+\cdots+b_{m}$，则

$$a(s)y(t)=a(s)[b(s)x(t)]=b(s)[a(s)x(t)]=b(s)u(t),$$

即 (2.66) 成立。上述系统可以用串联的积分器来表述（图 2.12）。记

$$\boldsymbol{x}(t)=\left(x(t),\frac{\mathrm{d}x(t)}{\mathrm{d}t},\cdots,\frac{\mathrm{d}^{n-1}x(t)}{\mathrm{d}t^{n-1}}\right)^{\mathrm{T}},\quad \boldsymbol{b}=(0,0,\cdots,1)^{\mathrm{T}},$$

$$\boldsymbol{c}=(b_{m},b_{m-1},\cdots,b_{0},0,\cdots,0),$$

$$\boldsymbol{A}=\begin{pmatrix}0&1&0&\cdots&0\\0&0&1&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&1\\-a_{n}&-a_{n-1}&-a_{n-2}&\cdots&-a_{1}\end{pmatrix},$$

那么 (2.67) 和 (2.68) 可以写为

$$\begin{cases}\dfrac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=\boldsymbol{A}\boldsymbol{x}(t)+\boldsymbol{b}u(t),\\[6pt]y(t)=\boldsymbol{c}\boldsymbol{x}(t),\end{cases}\tag{2.69}$$

它的传递函数是 $\boldsymbol{c}(s\boldsymbol{I}-\boldsymbol{A})^{-1}\boldsymbol{b}\equiv F(s)$。这是传递函数为 $F(s)$ 的单输入单输出系统的一种典则形式，人们称它为 **Brunovsky 典则形式**。

### 2.3 离散时间控制系统的描述（p38–49）

由于电子、通讯和计算机软硬件技术的发展，计算机成为自动控制系统的重要组成部分。计算机在自动控制系统中的职责大致是：对受控对象的各种输出量进行检测，即把现场情况输入到计算机，称为**采样**。一般来说，采样并不是连续进行的，而是以一定的采样周期定时进行的。这是计算机的第一个作用。计算机的第二个作用是根据采样数据和对系统的控制要求，计算出控制作用的大小。计算机的第三个作用是把控制作用输出到受控对象，对系统进行控制。由于计算机的特点，输出也不是连续进行的，而是以一定的周期进行的。在两次输出之间控制作用一般是保持不变的。通常，输出周期和采样周期是相等的，即计算机对受控对象各个量采样一次后，就进行必要的运算，并把计算得到的控制作用输出到受控对象。由此看出，在计算机作为自动控制系统的组成部分后，我们并没有对受控对象在两次采样之间的情况有确切了解，也没有根据受控对象在两次采样之间的情况进行运算和改变控制。因此，我们有必要研究受控对象在分段常值控制作用下的情况。这样，受控对象的数学描述方法也应有所变化，以适应计算机进入自动控制系统的需要。人们称这种控制系统为**采样控制系统**或**离散时间控制系统**。

#### 一、 受控对象动态方程的离散化 @38

设受控对象的动态方程是

$$\frac{\mathrm{d}x(t)}{\mathrm{d}t}=A(t)x(t)+B(t)u(t). \tag{3.1}$$

在计算机作为自动控制系统的组成部分后，受控对象的动态方程是不会改变的。但是受控对象的输入（控制作用）$u(t)$ 是有新的特点的，即在计算机的相继两次采样时刻之间，控制作用通常是不变的。假设 $t_0<t_1<t_2<\cdots<t_k<\cdots$ 是计算机对系统的采样时刻，那么控制作用当 $t_k\leqslant t<t_{k+1}$ 时保持常值，即

$$u(t)\equiv u(t_k)\triangleq u_k,\qquad k\geqslant 0. \tag{3.2}$$

由于我们仅关心系统状态在采样时刻的值，故我们来研究一下 $x(t_{k+1})$，$x(t_k)$ 和 $u_k$ 之间的关系。为此，记齐次方程组

$$\frac{\mathrm{d}x(t)}{\mathrm{d}t}=A(t)x(t) \tag{3.3}$$

的状态转移矩阵为 $\Phi(t,s)$。在 $[t_k,t_{k+1}]$ 上，系统 (3.1) 成为

$$\frac{\mathrm{d}x(t)}{\mathrm{d}t}=A(t)x(t)+B(t)u_k. \tag{3.4}$$

由常数变易公式可知，系统 (3.4) 的解为

$$x(t)=\Phi(t,t_k)x(t_k)+\left[\int_{t_k}^{t}\Phi(t,s)B(s)\,\mathrm{d}s\right]u_k,\qquad t\in[t_k,t_{k+1}). \tag{3.5}$$

令 $t\to t_{k+1}$，注意到 $x(\cdot)$ 的连续性，得到

$$x(t_{k+1})=\Phi(t_{k+1},t_k)x(t_k)+\left[\int_{t_k}^{t_{k+1}}\Phi(t_{k+1},s)B(s)\,\mathrm{d}s\right]u_k. \tag{3.6}$$

若记

$$\begin{cases}x_k=x(t_k),\\[2pt] A_k=\Phi(t_{k+1},t_k),\\[2pt] B_k=\displaystyle\int_{t_k}^{t_{k+1}}\Phi(t_{k+1},s)B(s)\,\mathrm{d}s,\end{cases}$$

那么 (3.6) 可改写为

$$x_{k+1}=A_kx_k+B_ku_k,\qquad k\geqslant 0, \tag{3.7}$$

我们称 (3.7) 为动态方程 (3.1) 的**离散化方程**。

如果系统 (3.1) 是定常的，即

$$\begin{cases}A(t)\equiv A,\qquad B(t)\equiv B,\\[2pt] t_k=k\theta,\qquad k\geqslant 0,\end{cases} \tag{3.8}$$

其中 $\theta>0$ 是**采样周期**，那么

$$\begin{cases}A_k\equiv\Phi((k+1)\theta,k\theta)=\mathrm{e}^{A\theta},\\[6pt] B_k=\displaystyle\int_{k\theta}^{(k+1)\theta}\mathrm{e}^{A[(k+1)\theta-s]}B\,\mathrm{d}s=\int_0^{\theta}\mathrm{e}^{A\tau}\,\mathrm{d}\tau\,B,\end{cases} \tag{3.9}$$

它们与 $k$ 无关。此时，离散化方程 (3.7) 成为

$$x_{k+1}=\mathrm{e}^{A\theta}x_k+\int_0^{\theta}\mathrm{e}^{A\tau}\,\mathrm{d}\tau\,Bu_k,\qquad k\geqslant 0. \tag{3.10}$$

系统 (3.10) 是系统 (3.1) 当系数为定常时在采样周期恒定条件下离散化得到的。我们称 (3.7) 和 (3.10) 为**差分方程组**。

对于观测方程，在采样时刻为 $t_k$ 时，有

$$y(t_k)=C(t_k)x_k+D(t_k)u_k,\qquad k\geqslant 0. \tag{3.11}$$

若记

$$y_k=y(t_k),\qquad C_k=C(t_k),\qquad D_k=D(t_k), \tag{3.12}$$

则 (3.11) 成为

$$y_k=C_kx_k+D_ku_k,\qquad k\geqslant 0. \tag{3.13}$$

对于线性定常系统，观测方程呈下述形式：

$$y_k=Cx_k+Du_k,\qquad k\geqslant 0. \tag{3.14}$$

**例 3.1 (二阶系统的离散化)** @40

设

$$A=\begin{pmatrix}0&-1\\1&0\end{pmatrix},\qquad B=\begin{pmatrix}0\\1\end{pmatrix}.$$

假设采样周期为 $\theta>0$，讨论它的离散化方程。

由例 1.2 和 (3.9) 经计算可得

$$A_k=\begin{pmatrix}\cos\theta&-\sin\theta\\ \sin\theta&\cos\theta\end{pmatrix},\qquad B_k=\begin{pmatrix}\cos\theta-1\\ \sin\theta\end{pmatrix},$$

代入 (3.10) 即可。

**例 3.2 (一阶惯性环节)** @40

$$T\frac{\mathrm{d}x(t)}{\mathrm{d}t}+x(t)=Ku(t),\qquad t\geqslant 0, \tag{3.15}$$

假设采样周期为 $\theta>0$，我们来讨论它的离散化方程。

这时，$n=m=1$，而

$$A=-\frac{1}{T},\qquad B=\frac{K}{T},$$

所以，由 (3.10)，离散化后的差分方程为

$$x_{k+1}=\mathrm{e}^{-\frac{\theta}{T}}x_k+K(1-\mathrm{e}^{-\frac{\theta}{T}})u_k,\qquad k\geqslant 0. \tag{3.16}$$

记

$$a=\mathrm{e}^{-\frac{\theta}{T}},\qquad b=K(1-\mathrm{e}^{-\frac{\theta}{T}}),$$

则有

$$x_{k+1}=ax_k+bu_k,\qquad k\geqslant 0, \tag{3.17}$$

我们称它是一个**一阶差分方程**。

**例 3.3 (二阶受控对象)** @41

现在考虑如下的二阶系统：

$$T_1T_2\frac{\mathrm{d}^2x(t)}{\mathrm{d}t^2}+(T_1+T_2)\frac{\mathrm{d}x(t)}{\mathrm{d}t}+x(t)=Ku(t),\qquad t\geqslant 0, \tag{3.18}$$

假设采样周期为 $\theta>0$，我们来求它的离散化方程。

我们先假设 $T_1\neq T_2$，系统 (3.18) 的传递函数为

$$\begin{aligned}\frac{K}{T_1T_2s^2+(T_1+T_2)s+1}&=\frac{K}{(T_1s+1)(T_2s+1)}\\ &=\frac{K}{T_1-T_2}\left(\frac{T_1}{T_1s+1}-\frac{T_2}{T_2s+1}\right).\end{aligned} \tag{3.19}$$

因此，该系统可以视为由两个一阶惯性环节并联得到的，即有（见图 2.13）

$$x=x^1+x^2,$$

$$T_1\frac{\mathrm{d}x^1(t)}{\mathrm{d}t}+x^1(t)=\frac{KT_1}{T_1-T_2}u(t), \tag{3.20}$$

$$T_2\frac{\mathrm{d}x^2(t)}{\mathrm{d}t}+x^2(t)=\frac{KT_2}{T_2-T_1}u(t). \tag{3.21}$$

根据例 3.2，方程 (3.20) 的离散化方程为

$$x^1_{k+1}=\mathrm{e}^{-\frac{\theta}{T_1}}x^1_k+\frac{KT_1}{T_1-T_2}\left(1-\mathrm{e}^{-\frac{\theta}{T_1}}\right)u_k,\qquad k\geqslant 0, \tag{3.22}$$

方程 (3.21) 的离散化方程为

$$x^2_{k+1}=\mathrm{e}^{-\frac{\theta}{T_2}}x^2_k+\frac{KT_2}{T_2-T_1}\left(1-\mathrm{e}^{-\frac{\theta}{T_2}}\right)u_k,\qquad k\geqslant 0. \tag{3.23}$$

我们希望得到 $x_k\equiv x^1_k+x^2_k$ 所满足的离散化方程，将 (3.22)、(3.23) 消去 $x^1_k,x^2_k$ 后，得到

$$\begin{aligned}x_{k+2}&-\left(\mathrm{e}^{-\frac{\theta}{T_1}}+\mathrm{e}^{-\frac{\theta}{T_2}}\right)x_{k+1}+\mathrm{e}^{-\left(\frac{1}{T_1}+\frac{1}{T_2}\right)\theta}x_k\\ &=K\left(1-\frac{T_1\mathrm{e}^{-\frac{\theta}{T_1}}-T_2\mathrm{e}^{-\frac{\theta}{T_2}}}{T_1-T_2}\right)u_{k+1}\\ &\quad+K\left(\mathrm{e}^{-\left(\frac{1}{T_1}+\frac{1}{T_2}\right)\theta}-\frac{T_1\mathrm{e}^{-\frac{\theta}{T_2}}-T_2\mathrm{e}^{-\frac{\theta}{T_1}}}{T_1-T_2}\right)u_k,\end{aligned} \tag{3.26}$$

这就是 (3.18) 的离散化方程。

对于 $T_1=T_2=T$ 的情形，可以先设 $T_1\neq T_2$，$T_2=T$，代入 (3.26) 中，然后令 $T_1\to T$，得到

$$\begin{aligned}x_{k+2}&-2\mathrm{e}^{-\frac{\theta}{T}}x_{k+1}+\mathrm{e}^{-\frac{2\theta}{T}}x_k\\ &=K\left[\left(1-\mathrm{e}^{-\frac{\theta}{T}}-\frac{\theta}{T}\mathrm{e}^{-\frac{\theta}{T}}\right)u_{k+1}+\left(\mathrm{e}^{-\frac{2\theta}{T}}-\mathrm{e}^{-\frac{\theta}{T}}+\frac{\theta}{T}\mathrm{e}^{-\frac{\theta}{T}}\right)u_k\right].\end{aligned} \tag{3.27}$$

**注 (另一种推导方法)** @43

(3.26) 还可以用另一种方法得到，仍假设 $T_1\neq T_2$。置

$$y(t)=T_2\frac{\mathrm{d}x(t)}{\mathrm{d}t}+x(t), \tag{3.28}$$

那么

$$T_1\frac{\mathrm{d}y(t)}{\mathrm{d}t}+y(t)=T_1T_2\frac{\mathrm{d}^2x(t)}{\mathrm{d}t^2}+(T_1+T_2)\frac{\mathrm{d}x(t)}{\mathrm{d}t}+x(t)=Ku(t).$$

根据例 3.2，可得

$$y_{k+1}=\mathrm{e}^{-\frac{\theta}{T_1}}y_k+K(1-\mathrm{e}^{-\frac{\theta}{T_1}})u_k. \tag{3.29}$$

另一方面，若置

$$z(t)=T_1\frac{\mathrm{d}x(t)}{\mathrm{d}t}+x(t), \tag{3.33}$$

则类似地有

$$z_{k+2}-\left(\mathrm{e}^{-\frac{\theta}{T_1}}+\mathrm{e}^{-\frac{\theta}{T_2}}\right)z_{k+1}+\mathrm{e}^{-\left(\frac{1}{T_1}+\frac{1}{T_2}\right)\theta}z_k=K(1-\mathrm{e}^{-\frac{\theta}{T_2}})(u_{k+1}-\mathrm{e}^{-\frac{\theta}{T_1}}u_k). \tag{3.34}$$

由于

$$T_1y(t)-T_2z(t)=(T_1-T_2)x(t), \tag{3.35}$$

故若置

$$x_k=\frac{T_1y_k-T_2z_k}{T_1-T_2}, \tag{3.36}$$

则由 (3.29)、(3.34) 化简后，同样得到差分方程 (3.26)。

应当指出，自动控制系统的连续或离散是指时间变量为连续的或离散的。上面讨论中用差分方程组来描述受控对象，是为了适应计算机进入系统而进行的。值得注意的是，在大量的经济现象和社会现象的研究中，有时人们直接从问题出发列出描述系统的差分方程组，所以离散化方程并不都是由微分方程离散化得到。例如，人口问题中，按年龄讨论人口按年的增长情形，则得到差分方程组而不是微分方程组。如果把人口总数视为很大，并在历史长河中讨论人口发展，则可对差分方程组取极限得到微分方程组。这就是说，用差分方程组还是用微分方程组描述对象，是根据问题的实际情况的需要决定的，而不应该认为差分方程组都是由微分方程组离散化得到的。

#### 二、 线性差分方程的解 @44

常微分方程课程讨论过线性常系数微分方程的解法以及解的性质，这是我们讨论线性连续定常控制系统的数学基础。对于离散控制系统，我们是用差分方程描述的。为研究离散控制系统，有必要对差分方程的解法和解的性质进行一些讨论。

#### 1 . 一阶线性差分方程 @44

一阶线性常系数差分方程呈如下的形状：

$$x_{k+1}-ax_k=bu_k,\qquad k\geqslant 0, \tag{3.37}$$

当 $x_0$ 和 $u_0,u_1,u_2,\cdots$ 已知时，可以由 (3.37) 逐次地求出 $x_1,x_2,\cdots,x_k,\cdots$。事实上，在 (3.37) 中逐次置 $k=0,1,2,\cdots$，得到

$$x_1=ax_0+bu_0,$$$$x_2=ax_1+bu_1=a^2x_0+abu_0+bu_1.$$

**命题 (一阶线性差分方程的解)** @45

如果已经得到

$$x_k=a^kx_0+\sum_{j=0}^{k-1}a^{k-j-1}bu_j, \tag{3.38}$$

那么由 (3.37) 可以得到

$$x_{k+1}=ax_k+bu_k=a^{k+1}x_0+\sum_{j=0}^{k}a^{k-j}bu_j.$$

所以由归纳法知 (3.38) 是差分方程 (3.37) 的解的一般表达式，其中 $x_0$ 是初始值。

**注 (迭代形式与稳定性条件)** @45

由于 (3.37) 可写成迭代形式

$$x_{k+1}=ax_k+bu_k,\qquad k\geqslant 0, \tag{3.39}$$

所以在运用计算机求解差分方程时，一般不用表达式 (3.38)，而用上述迭代关系式直接逐次求出 $x_1,x_2,\cdots,x_k,\cdots$。不过，如果 $|a|>1$，那么当 $x_0\neq 0$ 时，随着 $k\to+\infty$，$a^kx_0$ 将会是无界的，迭代运算过程一般将发散。为了使迭代运算能一直进行下去，我们需要假定

$$|a|<1. \tag{3.40}$$

我们将会看到这个假定对讨论方程 (3.37) 的解 $x_k$ 当 $k\to+\infty$ 时的形态（即方程 (3.37) 解的稳定性）有帮助。但需要指出的是，就方程 (3.37) 的可解性而言，条件 (3.40) 并不是必需的。在下面的讨论中，我们将假定 (3.40) 成立。

#### 2 . 二阶线性差分方程 @45

现在我们来讨论二阶线性常系数差分方程

$$x_{k+2}-a_1x_{k+1}-a_2x_k=bu_k,\qquad k\geqslant 0. \tag{3.41}$$

我们总假定 $a_2\neq 0$，否则差分方程 (3.41) 就可以看成一阶的了。设 $x_0,x_1$ 和 $u_0,u_1,u_2,\cdots$ 已知，则由 (3.41) 递推可得

$$x_2=a_1x_1+a_2x_0+bu_0,$$$$x_3=a_1x_2+a_2x_1+bu_1,$$$$\cdots\cdots\cdots$$$$x_{k+2}=a_1x_{k+1}+a_2x_k+bu_k,$$

这个过程在计算机上是很容易实现的。因此，方程 (3.41) 的可解性是不需要什么条件的。和一阶差分方程的情形一样，这里也有递推运算是否会发散的问题，也就是方程是否稳定的问题。

为了得到方程 (3.41) 解的一般表达式，类似于常微分方程的求解过程，我们先求齐次方程

$$x_{k+2}-a_1x_{k+1}-a_2x_k=0,\qquad k\geqslant 0 \tag{3.42}$$

的通解。为此，我们试求 (3.42) 的如下形式的非零解：

$$x_k=\rho^k,\qquad k\geqslant 0,\quad \rho\neq 0.$$

将上式代入 (3.42)，可以得到

$$\rho^{k+2}-a_1\rho^{k+1}-a_2\rho^k=0,\qquad k\geqslant 0,$$

因此，$\rho$ 应该满足下述方程：

$$\rho^2-a_1\rho-a_2=0. \tag{3.43}$$

我们称 (3.43) 是 (3.42) 的**特征方程**。一般而言，(3.43) 有两个根 $\rho_1$ 和 $\rho_2$。我们分三种情况来讨论。

**定理 (二阶线性差分方程的通解)** @46

设 $a_2\neq 0$，$\rho_1,\rho_2$ 是特征方程 (3.43) 的两个根，则齐次方程 (3.42) 的通解为下述三种情形之一，其中 $c_1,c_2$ 为任意常数。

(1) 如果 $\rho_1\neq\rho_2$ 且它们均是实数，由 $a_2\neq 0$ 知它们必非零，此时通解为

$$x_k=c_1\rho_1^k+c_2\rho_2^k,\qquad k\geqslant 0. \tag{3.44}$$

(2) 如果 $\rho_1=\rho_2\in\mathbb{R}$，由假定 $a_2\neq 0$ 知 $\rho_1\neq 0$，此时通解为

$$x_k=(c_1+c_2k)\rho_1^k,\qquad k\geqslant 0, \tag{3.49}$$

这里用到重根关系

$$2\rho_1-a_1=0. \tag{3.50}$$

(3) 如果特征根是一对共轭复根，即

$$\rho_1=\bar\rho_2=r\mathrm{e}^{\mathrm{i}\varphi}, \tag{3.54}$$

则此时通解的形式为

$$\begin{aligned}z_k&=\alpha\rho_1^k+\beta\rho_2^k=\alpha(r\mathrm{e}^{\mathrm{i}\varphi})^k+\beta(r\mathrm{e}^{-\mathrm{i}\varphi})^k\\ &=r^k(\alpha\mathrm{e}^{\mathrm{i}k\varphi}+\beta\mathrm{e}^{-\mathrm{i}k\varphi})\\ &=r^k[(\alpha+\beta)\cos k\varphi+\mathrm{i}(\alpha-\beta)\sin k\varphi],\qquad k\geqslant 0,\end{aligned} \tag{3.55}$$

其中 $\alpha,\beta\in\mathbb{C}$ 由初值 $z_0,z_1$ 确定（$z_0,z_1$ 为实数时 $\alpha,\beta$ 为一对共轭复数）。写成实值形式即

$$z_k=r^k(c_1\cos k\varphi+c_2\sin k\varphi),\qquad k\geqslant 0, \tag{3.59}$$

为共轭复根情形下方程 (3.42) 的通解表示式，其中 $c_1,c_2$ 为任意实常数。

**注 (非齐次方程的通解结构)** @48

容易知道，二阶线性差分方程 (3.41) 的通解是由 (3.42) 的通解加上 (3.41) 的一个特解组成。因此 (3.41) 的通解含有两个任意常数。当 $x_0,x_1$ 给定后，只要输入 $\{u_k\,|\,k\geqslant 0\}$ 给定，则 (3.41) 的解 $x_k$ 唯一确定，这也可由递推运算公式看出。

**例 3.4 (Fibonacci 数列的通项)** @48

求 Fibonacci 数列 $1,1,2,3,5,\cdots$ 的一般项表达式。

Fibonacci 数列满足

$$x_0=x_1=1,\quad x_{k+2}-x_{k+1}-x_k=0,\quad k\geqslant 0.$$

其特征方程 $\rho^2-\rho-1=0$ 的根为 $\dfrac{1}{2}(1\pm\sqrt{5})$，所以通解为

$$x_k=c_1\left(\frac{1+\sqrt{5}}{2}\right)^k+c_2\left(\frac{1-\sqrt{5}}{2}\right)^k,$$

其中 $c_1,c_2$ 为常数。由初值条件可得

$$c_1=\frac{1}{\sqrt{5}}\cdot\frac{\sqrt{5}+1}{2},\qquad c_2=\frac{1}{\sqrt{5}}\cdot\frac{\sqrt{5}-1}{2}.$$

于是

$$x_k=\frac{1}{\sqrt{5}}\left[\left(\frac{1+\sqrt{5}}{2}\right)^{k+1}-\left(\frac{1-\sqrt{5}}{2}\right)^{k+1}\right],\qquad k\geqslant 0.$$

**例 3.5 (二阶非齐次差分方程)** @49

解差分方程

$$x_{k+2}-x_{k+1}+x_k=1+2^k\qquad(k\geqslant 0).$$

特征方程 $\rho^2-\rho+1=0$ 的根为 $\dfrac{1}{2}(1\pm\sqrt{3}\mathrm{i})$。所以差分方程相应的齐次方程的通解为

$$x_k=c_1\cos\frac{k\pi}{3}+c_2\sin\frac{k\pi}{3},$$

其中 $c_1,c_2$ 为任意常数。容易验证，原方程有特解 $1+\dfrac{2^k}{3}$，故原方程的通解为

$$x_k=1+\frac{2^k}{3}+c_1\cos\frac{k\pi}{3}+c_2\sin\frac{k\pi}{3}.$$

**命题 (高阶线性差分方程及其稳定性)** @49

一般地，对于高阶非齐次线性差分方程

$$x_{k+n}-a_1x_{k+n-1}-\cdots-a_nx_k=bu_k,\qquad k\geqslant 0, \tag{3.60}$$

假设 $a_1,a_2,\cdots,a_n,b$ 是常数，$a_n\neq 0$，$b\neq 0$。我们可以先求齐次方程

$$x_{k+n}-a_1x_{k+n-1}-\cdots-a_nx_k=0,\qquad k\geqslant 0 \tag{3.61}$$

的解。它的特征方程是

$$\rho^n-a_1\rho^{n-1}-\cdots-a_n=0. \tag{3.62}$$

根据 $n$ 次多项式有 $n$ 个复根的性质，特征方程 (3.62) 有 $n$ 个根，我们称它们为差分方程 (3.60) 或 (3.61) 的**特征根**。根据特征根的种种情形，可以讨论高阶差分方程 (3.60) 和 (3.61) 的解。

如果特征方程 (3.62) 的根都在单位圆内部，即它们的模都小于 $1$，那么差分方程 (3.61) 的任一解当 $k\to+\infty$ 时都趋于零。这时，我们说齐次差分方程 (3.61) 和非齐次差分方程 (3.60) 是**稳定的**。

应当指出，高阶差分方程实质上可以看成是一种递推算法，它的解完全可以由计算机递推算出。为了使计算过程不产生溢出，我们需要特征方程的根都在单位圆内部。

### 2.4 z－传递函数和z－传递矩阵（p50–53）

**定义 (z－传递矩阵与 z－传递函数)** @50

我们称

$$G(z)=C(zI-A)^{-1}B+D \tag{4.5}$$

为系统 (4.1) 的 **$z$-传递矩阵**。当 $x_k$ 和 $y_k$ 均为一维时，相应的 $z$-传递矩阵称为 **$z$-传递函数**。

**注 (与连续时间算法的关系)** @50

显然，由离散时间状态方程求传递矩阵的算法与连续时间的算法完全相同，只是离散时间用 $z$-传递矩阵代替连续时间的 $s$-传递矩阵。

为说明 $z$-传递矩阵（函数）的意义，我们来考察下述系统：

$$x_{k+1}=ax_k+bu_k,\qquad k\geqslant 0, \tag{4.6}$$

这里 $a$ 和 $b$ 是常数。与前面的线性定常连续系统一样，当没有给出观测方程时，总认为 $y_k=x_k$ 为观测方程。于是，由 (4.5) 知，(4.6) 的 $z$-传递函数是

$$G(z)=\frac{b}{z-a}. \tag{4.7}$$

**注 (一阶惯性环节与积分环节)** @51

现在，让我们来回忆一下连续时间的一阶惯性环节及其离散化。我们知道，一阶惯性环节

$$T\frac{\mathrm{d}x(t)}{\mathrm{d}t}+x(t)=Ku(t),\qquad t\in[0,+\infty) \tag{4.8}$$

的传递函数是

$$F(s)=\frac{K}{Ts+1}. \tag{4.9}$$

当采样周期取为 $\theta>0$ 时，它的离散化方程是（详见 §2.3）

$$x_{k+1}=\mathrm{e}^{-\frac{\theta}{T}}x_k+K(1-\mathrm{e}^{-\frac{\theta}{T}})u_k,\qquad k\geqslant 0. \tag{4.10}$$

所以其 $z$-传递函数是

$$G(z)=\frac{K(1-\mathrm{e}^{-\frac{\theta}{T}})}{z-\mathrm{e}^{-\frac{\theta}{T}}}.$$

显然它在 $z=1$ 处的值等于 $K$，恰为 (4.8) 的静态放大倍数。

这里还应指出，环节 (4.8) 离散化时，将一阶连续系统的极点 $-\dfrac{1}{T}$ 变为离散系统的极点 $\mathrm{e}^{-\frac{\theta}{T}}$。

我们再看一下积分环节

$$\frac{\mathrm{d}x(t)}{\mathrm{d}t}=u(t),\qquad t\geqslant 0,$$

它的传递函数是 $\dfrac{1}{s}$，当采样周期为 $\theta>0$ 时，离散化的差分方程为

$$x_{k+1}=x_k+u_k\theta,\qquad k\geqslant 0.$$

它的 $z$-传递函数是 $\dfrac{\theta}{z-1}$。因此，我们称以 $\dfrac{\theta}{z-1}$ 为 $z$-传递函数的环节为**积分环节**。

**构造 (二阶系统离散化的 z－传递函数)** @51

对于二阶连续系统

$$T_1T_2\frac{\mathrm{d}^2x(t)}{\mathrm{d}t^2}+(T_1+T_2)\frac{\mathrm{d}x(t)}{\mathrm{d}t}+x(t)=Ku(t),\qquad t\geqslant 0, \tag{4.11}$$

其传递函数为（设 $T_1\neq T_2$）

$$\begin{aligned}F(s)&=\frac{K}{(T_1s+1)(T_2s+1)}\\ &=\frac{KT_1}{(T_1-T_2)(T_1s+1)}+\frac{KT_2}{(T_2-T_1)(T_2s+1)}.\end{aligned} \tag{4.12}$$

因此它的方块图是 §2.3 的图 2.13。

假设取采样周期为 $\theta>0$，则对应于

$$\frac{KT_1}{(T_1-T_2)(T_1s+1)}=\frac{\dfrac{KT_1}{T_1-T_2}}{T_1s+1}$$

的一阶惯性环节的离散化方程为（详见 §2.3，或 (4.10)）

$$x^1_{k+1}=\mathrm{e}^{-\frac{\theta}{T_1}}x^1_k+\frac{KT_1}{T_1-T_2}(1-\mathrm{e}^{-\frac{\theta}{T_1}})u_k\triangleq a_1x^1_k+b_1u_k, \tag{4.13}$$

其中 $a_1=\mathrm{e}^{-\frac{\theta}{T_1}}$，$b_1=\dfrac{KT_1}{T_1-T_2}(1-\mathrm{e}^{-\frac{\theta}{T_1}})$。同理对应于

$$\frac{KT_2}{(T_2-T_1)(T_2s+1)}=\frac{\dfrac{KT_2}{T_2-T_1}}{T_2s+1}$$

的一阶惯性环节的离散化方程为

$$x^2_{k+1}=\mathrm{e}^{-\frac{\theta}{T_2}}x^2_k+\frac{KT_2}{T_2-T_1}(1-\mathrm{e}^{-\frac{\theta}{T_2}})u_k\triangleq a_2x^2_k+b_2u_k, \tag{4.14}$$

其中 $a_2=\mathrm{e}^{-\frac{\theta}{T_2}}$，$b_2=\dfrac{KT_2}{T_2-T_1}(1-\mathrm{e}^{-\frac{\theta}{T_2}})$。因此，(4.11) 的离散化可以用如图 2.14 所示的方块图来表示。

类似于连续系统，可以证明离散系统并联之后的 $z$-传递函数等于各个环节的 $z$-传递函数之和。故得到离散化的二阶环节的 $z$-传递函数为

$$G(z)=\frac{b_1}{z-a_1}+\frac{b_2}{z-a_2}=\frac{(b_1+b_2)z-(a_1b_2+a_2b_1)}{(z-a_1)(z-a_2)}, \tag{4.15}$$

它对应的差分方程是

$$x_{k+2}-(a_1+a_2)x_{k+1}+a_1a_2x_k=(b_1+b_2)u_{k+1}-(a_1b_2+a_2b_1)u_k, \tag{4.16}$$

这恰好就是 §2.3 中对 (4.11) 作离散化的结果。

**命题 (高阶差分方程的 z－传递函数与静态放大倍数)** @53

一般地，对于高阶线性差分方程

$$x_{k+n}+a_1x_{k+n-1}+\cdots+a_nx_k=b_0u_{k+m}+b_1u_{k+m-1}+\cdots+b_mu_k,\qquad k\geqslant 0, \tag{4.17}$$

我们可以将其形式地写为

$$\begin{aligned}&(z^n+a_1z^{n-1}+\cdots+a_n)x_k\\ &\quad=(b_0z^m+b_1z^{m-1}+\cdots+b_m)u_k,\qquad k\geqslant 0.\end{aligned} \tag{4.18}$$

它的 $z$-传递函数是

$$G(z)=\frac{b_0z^m+b_1z^{m-1}+\cdots+b_m}{z^n+a_1z^{n-1}+\cdots+a_n}. \tag{4.19}$$

当 $u_k\equiv u_0$ 时，系统 (4.17) 成为

$$x_{k+n}+a_1x_{k+n-1}+\cdots+a_nx_k=(b_0+b_1+\cdots+b_m)u_0, \tag{4.20}$$

如果 $1+a_1+\cdots+a_n\neq 0$，则存在 $x_k\equiv x_0$ 为它的一个恒稳解，其中 $x_0$ 应适合

$$(1+a_1+\cdots+a_n)x_0=(b_0+b_1+\cdots+b_m)u_0,$$

所以

$$x_0=\frac{b_0+b_1+\cdots+b_m}{1+a_1+\cdots+a_n}u_0=G(1)u_0,$$

$G(1)$ 称为系统的**静态放大倍数**。

最后，我们指出，类似于连续系统，对于离散系统，串联环节的 $z$-传递函数等于各个环节的 $z$-传递函数的乘积，并联环节的 $z$-传递函数等于各个环节的 $z$-传递函数之和。

### 2.5 受控对象方程的参数辨识（p53–57）

**命题 (参数辨识问题的提法)** @54

假设受控对象可以用下述的差分方程来描述：

$$\begin{aligned}x_{k+r}&-a_1x_{k+r-1}-\cdots-a_rx_k\\ &=b_0u_{k+s}+b_1u_{k+s-1}+\cdots+b_su_k,\qquad k\geqslant 0,\end{aligned} \tag{5.1}$$

其中 $a_j\,(j=1,2,\cdots,r)$ 和 $b_l\,(l=0,1,\cdots,s)$ 称为系统的**参数**，我们事先并不清楚地知道这些参数。不过，我们假定 $s$ 和 $r$ 是已知的，并设 $s\leqslant r$，即差分方程的阶数是已知的。如果已经测得输入和输出的数据分别为

$$u_0,u_1,\cdots,u_{n-1},u_n,$$$$x_0,x_1,\cdots,x_{n-1},x_n,$$

那么如何确定或估计 (5.1) 中的参数 $a_j\,(j=1,2,\cdots,r)$ 和 $b_l\,(l=0,1,\cdots,s)$？如果上述测得的数据的确是满足 (5.1) 的受控对象的输入和输出数据，那么理论上应当成立等式

$$\begin{aligned}&a_1x_{k+r-1}+\cdots+a_rx_k+b_0u_{k+s}+b_1u_{k+s-1}+\cdots+b_su_k=x_{k+r},\\ &\qquad k=0,1,2,\cdots,n-r,\end{aligned} \tag{5.2}$$

即存在常数 $a_j\,(j=1,2,\cdots,r)$ 和 $b_l\,(l=0,1,\cdots,s)$ 适合 (5.2)。但是，由于数据是观测得到的，必然存在误差，所以 (5.2) 一般只能近似地成立，即

$$\begin{aligned}&a_1x_{k+r-1}+\cdots+a_rx_k+b_0u_{k+s}+b_1u_{k+s-1}+\cdots+b_su_k=x_{k+r}+\varepsilon_k,\\ &\qquad k=0,1,2,\cdots,n-r,\end{aligned}$$

这里 $\varepsilon_k\,(k=0,1,2,\cdots,n-r)$ 为**测量误差**。也就是说，要求参数 $a_j\,(j=1,2,\cdots,r)$ 和 $b_l\,(l=0,1,\cdots,s)$ 完全适合 (5.2) 是不太现实的。为了能用 (5.1) 来尽可能好地描述受控对象，我们期望选取参数 $a_j\,(j=1,2,\cdots,r)$ 和 $b_l\,(l=0,1,\cdots,s)$ 使得误差平方和取最小值。

**定义 (最小二乘估计)** @54

选取参数 $a_j\,(j=1,2,\cdots,r)$ 和 $b_l\,(l=0,1,\cdots,s)$，使误差平方和

$$\sum_{k=0}^{n-r}\varepsilon_k^2=\sum_{k=0}^{n-r}\left(\sum_{j=1}^{r}a_jx_{k+r-j}+\sum_{l=0}^{s}b_lu_{k+s-l}-x_{k+r}\right)^2$$

取最小值，这种确定对象参数的方法称为**最小二乘法**，如此得到的参数值称为参数的**最小二乘估计**。现在，我们就用此方法来求出参数 $a_j\,(j=1,2,\cdots,r)$ 和 $b_l\,(l=0,1,\cdots,s)$ 的估计值。

**定理 (最小二乘估计与正规方程)** @55

若记

$$X=\begin{pmatrix}x_{r-1}&\cdots&x_0&u_s&\cdots&u_0\\ x_r&\cdots&x_1&u_{s+1}&\cdots&u_1\\ \vdots&&\vdots&\vdots&&\vdots\\ x_{n-1}&\cdots&x_{n-r}&u_{n-r+s}&\cdots&u_{n-r}\end{pmatrix},$$

$$x=(x_r,\ x_{r+1},\ \cdots,\ x_n)^{\mathrm{T}},$$$$a=(a_1,\ a_2,\ \cdots,\ a_r,\ b_0,\ b_1,\ \cdots,\ b_s)^{\mathrm{T}},$$

那么 (5.2) 就可以写成

$$Xa=x. \tag{5.3}$$

若考虑误差，则方程组变为

$$Xa=x+\varepsilon,$$

这里 $\varepsilon=(\varepsilon_0,\ \varepsilon_1,\ \cdots,\ \varepsilon_{n-r})^{\mathrm{T}}$。最小二乘法就是要选取参数 $a\in\mathbb{R}^{s+r+1}$，使得误差平方和 $\|\varepsilon\|^2=\|Xa-x\|^2$ 取最小值。如果用 $\langle\cdot,\cdot\rangle$ 表示两个向量的内积，即

$$\langle x,y\rangle=x^{\mathrm{T}}y=y^{\mathrm{T}}x,$$

那么

$$\begin{aligned}\|\varepsilon\|^2&=\langle Xa-x,Xa-x\rangle\\ &=\langle Xa,Xa\rangle-2\langle Xa,x\rangle+\langle x,x\rangle\\ &=\langle X^{\mathrm{T}}Xa,a\rangle-2\langle X^{\mathrm{T}}x,a\rangle+\langle x,x\rangle. \end{aligned} \tag{5.4}$$

这里 $X^{\mathrm{T}}$ 表示矩阵 $X$ 的转置矩阵。如果 $X^{\mathrm{T}}X$ 是满秩的，即它的行列式不等于 $0$，那么 $X^{\mathrm{T}}X$ 的逆 $(X^{\mathrm{T}}X)^{-1}$ 是存在的。这时，当

$$a=(X^{\mathrm{T}}X)^{-1}X^{\mathrm{T}}x \tag{5.7}$$

时，$\|\varepsilon\|^2$ 达到最小值 $\langle x,x\rangle-\langle(X^{\mathrm{T}}X)^{-1}X^{\mathrm{T}}x,\ X^{\mathrm{T}}x\rangle$。因此参数 $a_j\,(j=1,2,\cdots,r)$ 和 $b_l\,(l=0,1,\cdots,s)$ 应由 (5.7) 来决定。由 (5.7) 可得

$$X^{\mathrm{T}}Xa=X^{\mathrm{T}}x, \tag{5.8}$$

它可以由 (5.3) 左乘以 $X^{\mathrm{T}}$ 而得到。在上述推导中，我们用到的数据为 $x_0,x_1,\cdots,x_{n-1},x_n$ 和 $u_0,u_1,\cdots,u_{n-r+s}$。

**注 (批处理方法)** @56

上述参数辨识是对收集的数据进行一次性处理的方法，称为**批处理方法**，通常在存储量和计算时间都比较充裕的情况下采用，特别适合离线计算。而在存储量和计算时间都很有限的情况下，特别是实时控制或在线计算时，由于新的数据不断地产生，如果采用批处理方法，需要存储的数据越来越多，计算越来越慢，我们就有必要采用更为有效的算法。

**引理 5.1 (矩阵求逆公式)** @56

设 $X^{\mathrm{T}}X$ 可逆，则

$$(X^{\mathrm{T}}X+qq^{\mathrm{T}})^{-1}=(X^{\mathrm{T}}X)^{-1}-\frac{(X^{\mathrm{T}}X)^{-1}qq^{\mathrm{T}}(X^{\mathrm{T}}X)^{-1}}{1+q^{\mathrm{T}}(X^{\mathrm{T}}X)^{-1}q}. \tag{5.12}$$

**定理 (递推最小二乘公式)** @57

现在假如增加了一组新的观测数据 $x_{n+1}$ 和 $u_{n-r+s+1}$，我们需要对参数重新辨识。能否充分利用已有的辨识结果，减少重复计算以改进批处理算法，或者说如何通过递推算法确定新的参数？为此，我们记

$$q=(x_n,x_{n-1},\cdots,x_{n-r+1},u_{n-r+s+1},u_{n-r+s},\cdots,u_{n-r+1})^{\mathrm{T}},$$

那么由以上的推导，新确定的参数 $a^*$ 应适合

$$(X^{\mathrm{T}}\ \ q)\begin{pmatrix}X\\ q^{\mathrm{T}}\end{pmatrix}a^*=\begin{pmatrix}X\\ q^{\mathrm{T}}\end{pmatrix}^{\mathrm{T}}\begin{pmatrix}x\\ x_{n+1}\end{pmatrix}, \tag{5.9}$$

即

$$(X^{\mathrm{T}}X+qq^{\mathrm{T}})a^*=X^{\mathrm{T}}x+qx_{n+1}. \tag{5.10}$$

从而

$$a^*=(X^{\mathrm{T}}X+qq^{\mathrm{T}})^{-1}(X^{\mathrm{T}}x+qx_{n+1}). \tag{5.11}$$

若用公式 (5.11) 来直接计算 $a^*$，则以前用 (5.7) 计算 $a$ 的所有结果均没能再次利用。显然这是很可惜的。答案是肯定的：可以利用引理 5.1 由已有的 $a$ 和 $(X^{\mathrm{T}}X)^{-1}$ 来简化 $a^*$ 的计算。这样得到由 $a$ 和 $(X^{\mathrm{T}}X)^{-1}$ 计算 $a^*$ 的递推公式

$$a^*=a+\frac{(X^{\mathrm{T}}X)^{-1}q}{1+q^{\mathrm{T}}(X^{\mathrm{T}}X)^{-1}q}(x_{n+1}-q^{\mathrm{T}}a). \tag{5.13}$$

这表明，在新增一组观测数据后，不必重新解线性代数方程组 (5.11)，而只要根据 (5.13) 由原有的矩阵 $(X^{\mathrm{T}}X)^{-1}$，向量 $a$ 和 $q$、$x_{n+1}$ 来修正 $a^*$。

**注 (存储量与在线辨识)** @57

在上述递推运算中，我们需要存放的数据是 $r+s+1$ 阶对称矩阵 $(X^{\mathrm{T}}X)^{-1}$，$r+s+1$ 维的向量 $a$ 和 $q$，以及实数 $x_{n+1}$ 和 $u_{n-r+s+1}$。此处，$x_{n+1}$ 和 $u_{n-r+s+1}$ 是新的观测数据。所以我们一共需要存放的数据个数为

$$\frac{(r+s+1)(r+s+2)}{2}+2(r+s+1)+2,$$

它是不依赖于 $k$ 的。这样的好处是不会因为观测次数的增加而使得需要存放与保留的数据增加。这对把计算机应用于在线辨识对象的参数是十分重要的。

**注 (可辨识性条件)** @57

还应指出，在系统（对象）的参数辨识中，我们假设矩阵 $X^{\mathrm{T}}X$ 的行列式不为 $0$，从而保证 $(X^{\mathrm{T}}X)^{-1}$ 存在。对于我们的算法，这是必要的。为了保证这一点，我们需要观测数据足够多，并且它们要有足够的波动。即输入 $u_0,u_1,\cdots,u_{n-1},u_n$ 能充分影响系统的输出，使系统对输入的反应能充分显示出来。否则，我们是无法由 (5.7) 确定对象参数的。

## 第3章 控制系统的分析

### 3.1 一阶系统（p64–70）

#### 连续系统 @64

**定义 (一阶连续系统)** @64

这里所讲的一阶系统是指由下述一阶线性常系数微分方程

$$T\frac{\mathrm{d}x(t)}{\mathrm{d}t}+x(t)=Ku(t) \tag{1.1}$$

所描述的系统，其中 $u(\cdot)$ 是系统的输入函数，$x(t)$ 是系统在 $t$ 时刻的状态（在本系统中也可称为系统的输出），$T$ 和 $K$ 是两个非零常数。系统 (1.1) 的传递函数是

$$F(s)=\frac{K}{Ts+1}, \tag{1.2}$$

其极点是 $-\frac{1}{T}$，而 $F(0)=K$。系统可以用图 3.1 所示的方块图来表示。

**注 (Nyquist 图)** @64

由 §2.2，系统 (1.1) 的频率特性为

$$F(\mathrm{i}\omega)=\frac{K}{1+\mathrm{i}\omega T},\qquad \omega\in\mathbb{R}.$$

当 $K,T$ 均为正数时，在复平面上 $\{F(\mathrm{i}\omega)\mid \omega\in[0,+\infty)\}$ 的图像是以 $\frac{K}{2}$ 为中心、$\frac{K}{2}$ 为半径的半圆（图 3.2）。人们称上述图形为 Nyquist 图，也称为系统的幅相特性。它给出了当频率 $\omega$ 从 $0$ 变到 $+\infty$ 时，频率特性 $F(\mathrm{i}\omega)$ 在复平面上画出的轨迹。

**注 (典型的输入函数)** @65

对于系统动态特性的分析，通常选择一些特殊的输入函数，研究其输出函数（称为响应）的性质。典型的输入函数为：零输入 $u(t)\equiv 0$，单位输入 $u(t)\equiv 1$，线性输入 $u(t)=t$ 和正弦余弦输入（工程上称为谐波函数）$\sin\omega t$，$\cos\omega t$ 等。

**命题 (一阶系统的解)** @65

由常数变易公式，方程 (1.1) 的解可表示为

$$x(t)=\mathrm{e}^{-\frac{t}{T}}x(0)+\frac{K}{T}\int_0^t \mathrm{e}^{-\frac{t-s}{T}}u(s)\,\mathrm{d}s. \tag{1.3}$$

**命题 (稳定性与极点位置)** @65

当 $u(t)\equiv 0$ 时，方程 (1.1) 的解为 $x(t)=\mathrm{e}^{-\frac{t}{T}}x(0)$。当 $T>0$ 时，传递函数的极点 $-\frac{1}{T}$ 为负数，即在左半平面，此时对任何初值 $x(0)$，解当 $t\to+\infty$ 时均趋于零，且指数衰减，$T$ 越小衰减越快；当 $T<0$ 时，极点 $-\frac{1}{T}$ 为正数，所有满足 $x(0)\neq 0$ 的解当 $t\to+\infty$ 时均趋于无穷。因此，若 $T>0$，称系统 (1.1) 是稳定的；若 $T<0$，称系统 (1.1) 不稳定。

**命题 (单位阶跃响应与静态放大倍数)** @65

如果输入 $u(t)\equiv 1$，那么系统的输出为

$$x(t)=\mathrm{e}^{-\frac{t}{T}}x(0)+K(1-\mathrm{e}^{-\frac{t}{T}}),\qquad t\geqslant 0. \tag{1.4}$$

假设 $T>0$，当 $x(0)=K$ 时它对应静态解 $x(t)\equiv K$，并且 (1.1) 的所有其他解当 $t\to+\infty$ 时都趋于静态解 $x(t)\equiv K$。因此称 $x(t)\equiv K$ 是 (1.1) 在单位输入 $u(t)\equiv 1$ 下的稳态解。把单位输入与其恒稳输出进行比较，可发现后者是前者的 $K$ 倍，所以称 $K$ 是一阶惯性环节 (1.1) 的静态放大倍数。显然，传递函数 $F(s)$ 在 $s=0$ 处的函数值恰好是该环节的静态放大倍数。

**注 (时间常数)** @65

仍设输入 $u(t)\equiv 1$，由 (1.1) 得

$$T\frac{\mathrm{d}x(t)}{\mathrm{d}t}=K-x(t).$$

上式右端是稳态值 $K$ 与环节输出之差在 $t$ 时刻的值，左端是常数 $T$ 乘以环节输出的变化速度。该等式表明，如果环节的输出以当时的变化速度变化，那么经过时间 $T$ 后，环节的输出将达到稳态值 $K$。所以常数 $T$ 反映了环节的动态变化特性（变化速度的快慢）。人们称 $T$ 是一阶惯性环节 (1.1) 的时间常数。

设 $x(0)=0$，由 (1.4) 知 $x(t)=K(1-\mathrm{e}^{-\frac{t}{T}})$，$t\geqslant 0$。当 $t=T$ 时，

$$x(T)=K(1-\mathrm{e}^{-1})\approx 0.632K,$$

此时输出已达到稳态值的 $0.632$ 倍，工程上可以认为系统状态已基本达到稳态值。进一步容易算得

$$x(3T)=K(1-\mathrm{e}^{-3})\approx 0.95K,\qquad x(5T)=K(1-\mathrm{e}^{-5})\approx 0.993K.$$

时间常数 $T$ 表征了系统 (1.1) 的解趋于稳态解的快慢速度。人们期望时间常数相对比较小，即系统在相对较短的时间里面基本上接近稳态。但是，时间常数是由系统固有的动态特性所决定的，一般情况下是不可以任意改变的。

**注 (常数 $K$ 与 $T$ 的求法)** @66

常数 $K$ 和 $T$ 是表征一阶惯性环节 (1.1) 特性的两个重要常数，它们都可以由环节的传递函数求出：$K=F(0)$，而 $-\frac{1}{T}$ 是传递函数 $F(s)$ 的极点。所以传递函数在 $0$ 处的值表征环节的静态特性，传递函数的极点则表征环节的动态特性。

当 $T<0$ 时，如果 $x(0)\neq K$，那么由 (1.4) 给出的 $x(t)$ 当 $t\to+\infty$ 时是无界的，即从 $x(0)\neq K$ 出发的轨线 $x(t)$ 不会趋于稳态解 $x(t)=K$。这样的系统是不能正常工作的，所以下面主要考虑 $T>0$ 的情形。

**命题 (线性输入下的响应)** @66

考虑线性输入 $u(t)=t$，利用 (1.3) 和分部积分，得

$$x(t)=\mathrm{e}^{-\frac{t}{T}}x(0)+\frac{K}{T}\int_0^t \mathrm{e}^{-\frac{t-s}{T}}s\,\mathrm{d}s=\mathrm{e}^{-\frac{t}{T}}x(0)+K(t-T+T\mathrm{e}^{-\frac{t}{T}}). \tag{1.5}$$

若 $T>0$，则系统所有解与线性函数 $K(t-T)$ 的差当 $t\to+\infty$ 时都趋于零。

**命题 (开环控制)** @67

如果希望系统 (1.1) 的输出能维持常值 $\bar x$，则将 $x(t)=\bar x$ 代入 (1.1) 知，控制作用 $u(t)$ 应取值 $\frac{\bar x}{K}$。这时，对任何初值 $x(0)$，(1.1) 的解为

$$x(t)\equiv \bar x+\{x(0)-\bar x\}\mathrm{e}^{-\frac{t}{T}},$$

由于假定 $T>0$，故当 $t\to+\infty$ 时它趋于 $\bar x$。这里对最终预期的目标（即 $x(t)\equiv \bar x$）作分析，得到事先完全确定的控制作用 $u(t)\equiv\frac{\bar x}{K}$，它是一个作为时间 $t$ 的函数，我们称之为一个开环控制。由上可见，要找出适当的开环控制使系统的解趋于静态解，需要对系统的静态放大倍数有准确的了解，但在实际应用中这是不易办到的，于是人们尝试用所谓的反馈控制来达到类似的目的。

**定义 (反馈控制与比例反馈控制)** @67

所谓反馈控制，就是控制作用呈系统输出的函数形式。一种特殊的情形是

$$u(t)=k\{\bar x-x(t)\},$$

这里 $k$ 是一个比例常数，即控制作用 $u(t)$ 是偏差 $\bar x-x(t)$ 的倍数，这称为一个比例反馈控制。

**命题 (比例反馈下的闭环系统与静差)** @67

如果采用上述控制作用，则系统 (1.1) 变成

$$T\frac{\mathrm{d}x(t)}{\mathrm{d}t}+x(t)=kK\{\bar x-x(t)\},$$

即

$$T\frac{\mathrm{d}x(t)}{\mathrm{d}t}+(1+kK)x(t)=kK\bar x,$$

或

$$\frac{T}{1+kK}\frac{\mathrm{d}x(t)}{\mathrm{d}t}+x(t)=\frac{kK}{1+kK}\bar x. \tag{1.6}$$

显然，无论 $T$ 是正还是负，总存在 $k$，使得

$$\frac{T}{1+kK}>0. \tag{1.7}$$

这样，系统 (1.6) 便是稳定的了，并且它的解在 $t\to+\infty$ 时趋于静态解

$$\frac{kK}{1+kK}\bar x,$$

该静态解与期望的静态解 $\bar x$ 有偏差

$$\bar x-\frac{kK}{1+kK}\bar x=\frac{1}{1+kK}\bar x, \tag{1.8}$$

这个值被称为系统的静差。也就是说，如果采用偏差的比例反馈控制，有可能改善系统的动态特性，即系统的时间常数由 $T$ 转化为 $\frac{T}{1+kK}$，但所得到的新系统是有静差的系统。

**注 (比例常数的选取)** @68

在 $T$ 和 $K$ 都已知时，可以选择比例常数 $k$，使得 (1.7) 成立，并且当 $T>0$ 时，只要 $kK>0$，就能使系统 (1.6) 的时间常数 $\frac{T}{1+kK}$ 较系统 (1.1) 的时间常数 $T$ 小。这就是说，利用反馈控制可以改善系统的动态特性。这时，系统的静差由 (1.8) 决定。

**定义 (线性反馈与闭环系统)** @68

对于上面的系统，考虑控制作用是线性反馈的情形，即考虑

$$\begin{cases} T\dfrac{\mathrm{d}x(t)}{\mathrm{d}t}+x(t)=Ku(t),\\[2mm] u(t)=v(t)-kx(t). \end{cases} \tag{1.9}$$

它的方块图如图 3.3 所示。系统 (1.9) 等价于

$$T\frac{\mathrm{d}x(t)}{\mathrm{d}t}+(1+kK)x(t)=Kv(t). \tag{1.10}$$

系统 (1.10) 称为在反馈控制下的闭环系统。这时，从 $v(\cdot)$ 到 $x(\cdot)$ 的传递函数为

$$\tilde F(s)=\frac{K}{Ts+1+kK}=\frac{F(s)}{1+kF(s)}. \tag{1.11}$$

**注 (反馈控制的作用)** @68

传递函数 $\tilde F(s)$ 的极点为 $-\frac{1+kK}{T}$，系统的静态放大倍数等于 $\tilde F(0)=\frac{K}{1+kK}$，时间常数为 $\frac{T}{1+kK}$。(1.11) 描述了闭环系统传递函数 $\tilde F(\cdot)$ 和开环系统传递函数 $F(\cdot)$ 之间的关系，它表明：反馈控制可以改变系统传递函数的极点位置和 $s=0$ 处的值。特别地，反馈控制能够使不稳定系统变成稳定系统。

#### 离散系统 @68

**定义 (一阶离散系统)** @68

一阶离散系统的一般形式为

$$x_{k+1}-ax_k=bu_k,\qquad k\geqslant 0, \tag{1.12}$$

其传递函数为

$$G(z)=\frac{b}{z-a}, \tag{1.13}$$

特征方程为

$$\rho-a=0, \tag{1.14}$$

所以相应的特征根为 $a$。当 $a=0$ 时，上述系统称为纯时滞系统，下面仅研究 $a\neq 0$ 的情形。

**命题 (离散系统的通解与稳定性)** @69

由第二章，方程 (1.12) 的通解可以表示为

$$x_k=a^kx_0+\sum_{j=0}^{k-1}a^{k-j-1}bu_j. \tag{1.15}$$

假定 $u_k\equiv 0$，则 (1.15) 成为 $x_k=a^kx_0$。当 $|a|<1$ 时，因为 $\lim\limits_{k\to+\infty}x_k=0$，所以称系统 (1.12) 是稳定的。当 $|a|>1$ 且 $x_0\neq 0$ 时，$\lim\limits_{k\to+\infty}x_k=\infty$。可见，对于系统 (1.12) 的研究，条件

$$|a|<1 \tag{1.16}$$

非常重要。

**命题 (离散系统的静态放大倍数)** @69

如果 $u_k\equiv 1$，那么 (1.12) 成为

$$x_{k+1}=ax_k+b,\qquad k\geqslant 0. \tag{1.17}$$

当 $a\neq 1$ 时，该方程有一个静态解

$$\bar x_k=\frac{b}{1-a},\qquad k\geqslant 0, \tag{1.18}$$

所以系统 (1.12) 的静态放大倍数是 $K=\frac{b}{1-a}=G(1)$。而此时，差分方程 (1.17) 的通解公式为

$$x_k=a^kx_0+\Big(\sum_{j=0}^{k-1}a^{k-j-1}\Big)b=a^kx_0+\frac{1-a^k}{1-a}b=a^k(x_0-K)+K.$$

因此，若 $|a|<1$，当 $k\to+\infty$ 时 $x_k$ 收敛于静态解 $\bar x_k$，所以此时 (1.12) 的静态解恰是 (1.12) 的稳态解。而当 $|a|<1$ 不成立时，$x_k$ 的极限通常是不存在的。

**定义 (离散系统的时间常数)** @70

假定 (1.12) 是由连续系统

$$T\frac{\mathrm{d}x(t)}{\mathrm{d}t}+x(t)=Ku(t)$$

离散化而得，假设采样周期为 $\theta>0$，则 $a=\mathrm{e}^{-\frac{\theta}{T}}$。所以从中解出

$$T=-\frac{\theta}{\ln a}, \tag{1.19}$$

我们称 (1.19) 定义的 $T$ 为系统 (1.12) 的时间常数，这里要求 $a>0$，$a\neq 1$。

**注 (离散时间常数的另一种解释)** @70

当 $u_k\equiv 1$ 时，(1.12) 还可以写为

$$x_k+\frac{x_{k+1}-x_k}{\theta}\cdot\frac{\theta}{1-a}=\frac{b}{1-a},\qquad k\geqslant 0. \tag{1.20}$$

因为 $\frac{x_{k+1}-x_k}{\theta}$ 可看作 $x_k$ 在时刻 $k$ 时的增长速度，上式表明：如果以这一速度恒速增长，那么经过时间 $\frac{\theta}{1-a}$ 后，它将达到稳态值 $\frac{b}{1-a}$。这就是说，$\frac{\theta}{1-a}$ 可视为该系统的时间常数。

根据 (1.19)，当 $\theta$ 为很小的正数时，$a\approx 1$，于是

$$-\ln a=-\ln\big(1-(1-a)\big)\approx 1-a,$$

这就是说此时两种时间常数的定义基本是一致的。

**命题 (离散系统的开环控制与反馈控制)** @70

为了使系统 (1.12) 的输出能维持常值 $\bar x$，类似于连续系统，将 $x=\bar x$ 代入 (1.12) 知，控制作用可取

$$u_k=\frac{(1-a)\bar x}{b}.$$

我们也可以采用反馈控制

$$u_k=l(\bar x-x_k),$$

其中 $l$ 是比例常数，具体分析作为练习请读者自己完成。

### 3.2 二阶系统（p70–75）

**定义 (二阶系统)** @70

考虑下述二阶线性常系数微分方程描述的系统：

$$\frac{\mathrm{d}^2x(t)}{\mathrm{d}t^2}+a_1\frac{\mathrm{d}x(t)}{\mathrm{d}t}+a_2x(t)=bu(t), \tag{2.1}$$

这里 $a_1,a_2,b$ 是常数，$u(\cdot)$ 是控制作用，$x(\cdot)$ 是系统的输出。如果 $u(t)\equiv 0$，则系统 (2.1) 成为

$$\frac{\mathrm{d}^2x(t)}{\mathrm{d}t^2}+a_1\frac{\mathrm{d}x(t)}{\mathrm{d}t}+a_2x(t)=0. \tag{2.2}$$

**命题 (渐近稳定的充要条件)** @71

系统 (2.1)（或 (2.2)）对应的特征方程为

$$\lambda^2+a_1\lambda+a_2=0.$$

由微分方程稳定性理论知，当且仅当它的所有根的实部都小于零时，微分方程 (2.2) 渐近稳定。此时，(2.2) 的所有解当 $t\to+\infty$ 时均趋于零。

**命题 (静态解与静态放大倍数)** @71

如果 $u(t)\equiv 1$，则系统 (2.1) 成为

$$\frac{\mathrm{d}^2x(t)}{\mathrm{d}t^2}+a_1\frac{\mathrm{d}x(t)}{\mathrm{d}t}+a_2x(t)=b. \tag{2.3}$$

当 $a_2\neq 0$ 时，它有静态解

$$x(t)\equiv\frac{b}{a_2}. \tag{2.4}$$

因此，系统的静态放大倍数是 $\frac{b}{a_2}$。当 $a_2=0$ 时，(2.3) 无静态解。下面假定 $a_2\neq 0$。

**命题 (非齐次方程的通解与系统的稳定性)** @71

假定 $x_1(t),x_2(t)$ 为方程 (2.2) 的线性无关解，那么 (2.3) 的通解是

$$x(t)=C_1x_1(t)+C_2x_2(t)+\frac{b}{a_2}, \tag{2.5}$$

其中 $C_1,C_2$ 为任意常数。因此，当微分方程 (2.2) 稳定时，由 (2.5) 给出的 (2.3) 的任一解当 $t\to+\infty$ 时都趋于静态解 $x(t)\equiv\frac{b}{a_2}$，所以静态解就是稳态解，此时称系统 (2.2)（或 (2.1)）是稳定的。否则，如果 (2.2) 的特征值具有非负实部，那么 (2.3) 的解一般不会趋于静态解 (2.4)，有时甚至可能是无界的，此时称系统 (2.2)（或 (2.1)）是不稳定的。在 §3.4 中，将一般性地讨论多项式的所有零点均具有负实部的条件。

**命题 (传递函数与并联分解)** @71

系统 (2.1) 的传递函数是

$$F(s)=\frac{b}{s^2+a_1s+a_2}. \tag{2.6}$$

假如 (2.2) 的特征方程有两个不同的实根 $\lambda_1$ 和 $\lambda_2$，则利用部分分式展开可得

$$F(s)=\frac{b}{(s-\lambda_1)(s-\lambda_2)}=\frac{\alpha_1}{s-\lambda_1}+\frac{\alpha_2}{s-\lambda_2}. \tag{2.7}$$

所以此时系统 (2.1) 等价于两个一阶系统的并联：

$$\begin{cases} \dfrac{\mathrm{d}x_1(t)}{\mathrm{d}t}-\lambda_1x_1(t)=\alpha_1u(t),\\[2mm] \dfrac{\mathrm{d}x_2(t)}{\mathrm{d}t}-\lambda_2x_2(t)=\alpha_2u(t),\\[2mm] x=x_1+x_2. \end{cases} \tag{2.8}$$

**注 (串联分解)** @72

为研究这样的二阶系统，我们只需要研究 (2.8) 中的两个一阶系统，再把它们的输出相加就可以了。我们也可以将传递函数 (2.6) 表示为

$$F(s)=\frac{b}{(s-\lambda_1)(s-\lambda_2)}=\frac{b}{s-\lambda_1}\cdot\frac{1}{s-\lambda_2},$$

即两个一阶系统的串联，这时允许 (2.2) 的特征方程有两个相同的实根。

**定义 (固有频率、阻尼系数与静态放大倍数)** @72

现在考虑 (2.2) 的特征方程的解是一对共轭复数根的情形。这时必有 $0\leqslant a_1^2<4a_2$。记

$$\omega_0=\sqrt{a_2},\qquad \zeta=\frac{a_1}{2\omega_0},\qquad K=\frac{b}{a_2}, \tag{2.9}$$

则 (2.1) 变为

$$\frac{\mathrm{d}^2x(t)}{\mathrm{d}t^2}+2\zeta\omega_0\frac{\mathrm{d}x(t)}{\mathrm{d}t}+\omega_0^2x(t)=K\omega_0^2u(t). \tag{2.10}$$

这时，我们称 $\omega_0$ 为 (2.10) 的固有频率，$\zeta$ 为阻尼系数，$K$ 为静态放大倍数。若记 $T=\frac{1}{\omega_0}$，则 (2.10) 还可以写成

$$T^2\frac{\mathrm{d}^2x(t)}{\mathrm{d}t^2}+2\zeta T\frac{\mathrm{d}x(t)}{\mathrm{d}t}+x(t)=Ku(t), \tag{2.10$'$}$$

这也就是我们在第二章介绍的二阶振荡环节。

**命题 (自由振动与阻尼的作用)** @72

由于 $\zeta^2=\frac{a_1^2}{4\omega_0^2}=\frac{a_1^2}{4a_2}<1$，而 (2.10) 的特征方程为

$$\lambda^2+2\zeta\omega_0\lambda+\omega_0^2=0,$$

故

$$\lambda=\frac{-2\zeta\omega_0\pm\sqrt{4\zeta^2\omega_0^2-4\omega_0^2}}{2}=-\zeta\omega_0\pm\mathrm{i}\omega_0\sqrt{1-\zeta^2}.$$

因此，当 $u(t)\equiv 0$ 时，(2.10) 的解是

$$x(t)=\mathrm{e}^{-t\zeta\omega_0}\big\{C_1\cos(\sqrt{1-\zeta^2}\,\omega_0t)+C_2\sin(\sqrt{1-\zeta^2}\,\omega_0t)\big\}, \tag{2.11}$$

其中 $C_1,C_2$ 为任意常数。先假设 $\zeta>0$，此时当 $t\to+\infty$ 时，(2.10) 的解都趋于零；当 $\zeta=0$ 时，(2.10) 的所有解都是周期为 $\frac{2\pi}{\omega_0}$ 的解；而当 $\zeta<0$ 时，(2.10) 的非零解都无界，且当 $t\to+\infty$ 时，(2.10) 的解都不趋于 $\infty$。

当 $u(t)\equiv 1$ 时，(2.10) 有静态解 $x(t)\equiv K$。在 (2.10) 稳定（即 $\zeta>0$）的情况下，其所有解当 $t\to+\infty$ 时都趋于 $K$，所以此时静态解就是稳态解。

**命题 (频率特性与周期输入的特解)** @73

对于周期输入 $u(t)=\mathrm{e}^{\mathrm{i}\omega t}$，寻找形如 $k\mathrm{e}^{\mathrm{i}\omega t}$（$k$ 为复常数）的解。为此，将 $z(t)=k\mathrm{e}^{\mathrm{i}\omega t}$ 代入 (2.10) 得

$$k(\mathrm{i}\omega)^2\mathrm{e}^{\mathrm{i}\omega t}+2\zeta\omega_0k\mathrm{i}\omega\mathrm{e}^{\mathrm{i}\omega t}+\omega_0^2k\mathrm{e}^{\mathrm{i}\omega t}=K\omega_0^2\mathrm{e}^{\mathrm{i}\omega t},$$

从而

$$k=\frac{K\omega_0^2}{\omega_0^2-\omega^2+2\zeta\omega\omega_0\mathrm{i}}\equiv F(\mathrm{i}\omega). \tag{2.12}$$

此处 $F(\mathrm{i}\omega)$ 就是系统 (2.10) 的频率特性。故此时 (2.10) 有周期为 $\frac{2\pi}{\omega}$ 的特解

$$\begin{aligned} \tilde z(t)&=\frac{K\omega_0^2}{\omega_0^2-\omega^2+2\zeta\omega\omega_0\mathrm{i}}\mathrm{e}^{\mathrm{i}\omega t}\equiv F(\mathrm{i}\omega)\mathrm{e}^{\mathrm{i}\omega t}\\ &=|F(\mathrm{i}\omega)|\mathrm{e}^{\mathrm{i}[\omega t+\arg F(\mathrm{i}\omega)]}\\ &=|F(\mathrm{i}\omega)|\big\{\cos[\omega t+\arg F(\mathrm{i}\omega)]+\mathrm{i}\sin[\omega t+\arg F(\mathrm{i}\omega)]\big\},\qquad t\geqslant 0. \end{aligned} \tag{2.13}$$

特别地，当 $u(t)=\sin\omega t$ 时，(2.10) 有特解

$$\tilde y(t)=|F(\mathrm{i}\omega)|\sin(\omega t+\arg F(\mathrm{i}\omega)),\qquad t\geqslant 0. \tag{2.14}$$

而当 $u(t)=\cos\omega t$ 时，(2.10) 有特解

$$\tilde x(t)=|F(\mathrm{i}\omega)|\cos(\omega t+\arg F(\mathrm{i}\omega)),\qquad t\geqslant 0. \tag{2.15}$$

其中，

$$\begin{cases} |F(\mathrm{i}\omega)|=\dfrac{|K|}{\sqrt{\Big(1-\dfrac{\omega^2}{\omega_0^2}\Big)^2+4\zeta^2\Big(\dfrac{\omega}{\omega_0}\Big)^2}},\\[4mm] \arg F(\mathrm{i}\omega)=\arctan\dfrac{2\zeta\omega\omega_0}{\omega^2-\omega_0^2}. \end{cases} \tag{2.16}$$

**命题 (周期输入下的通解)** @73

类似于 (2.11) 容易知道，对于周期输入 $u(t)=\mathrm{e}^{\mathrm{i}\omega t}$，(2.10) 的通解为

$$x(t)=\tilde z(t)+\mathrm{e}^{-t\zeta\omega_0}\big\{C_1\cos(\sqrt{1-\zeta^2}\,\omega_0t)+C_2\sin(\sqrt{1-\zeta^2}\,\omega_0t)\big\},\qquad t\geqslant 0, \tag{2.17}$$

其中 $C_1,C_2$ 为任意常数。因此，当 $0<\zeta<1$ 时，系统 (2.10) 的任一解 $x(t)$ 与周期解 $\tilde z(t)$ 的差当 $t\to+\infty$ 时趋于零。

对于输入 $u(t)=\cos\omega t$ 或 $u(t)=\sin\omega t$ 等的结果也是类似的。仿照第二章的结果，读者不难叙述和证明当输入为 $u(t)=\sum\limits_{n=0}^{N}[a_n\cos\omega_nt+b_n\sin\omega_nt]$（$N$ 为正整数）时的相应结果。

**命题 2.1** @74

系统 (2.1) 稳定的充分必要条件是 $a_1>0$，$a_2>0$。

**注 (比例反馈的局限)** @74

下面考虑采用反馈控制使得输出维持常值 $\bar x$ 的问题。现在期望用输出反馈控制使系统输出维持常值 $\bar x$，为此取

$$u(t)=k(\bar x-x(t)), \tag{2.19}$$

则系统 (2.1) 成为

$$\frac{\mathrm{d}^2x(t)}{\mathrm{d}t^2}+a_1\frac{\mathrm{d}x(t)}{\mathrm{d}t}+(a_2+kb)x(t)=kb\bar x. \tag{2.20}$$

如果 $a_1<0$，则系统 (2.1) 不稳定，由命题 2.1，无论取什么 $k$，反馈控制 (2.19) 都无法使系统稳定。

**命题 (比例微分反馈镇定)** @74

采用如下形式的状态反馈控制（也称为比例微分反馈控制）：

$$u(t)=k_1(\bar x-x(t))-k_2\frac{\mathrm{d}x(t)}{\mathrm{d}t}. \tag{2.21}$$

这时，系统 (2.1) 变为

$$\frac{\mathrm{d}^2x(t)}{\mathrm{d}t^2}+(k_2b+a_1)\frac{\mathrm{d}x(t)}{\mathrm{d}t}+(k_1b+a_2)x(t)=k_1b\bar x. \tag{2.22}$$

因此希望选取 $k_1$ 和 $k_2$，使得

$$\tilde a_1=k_2b+a_1>0,\qquad \tilde a_2=k_1b+a_2>0.$$

只要 $b\neq 0$，这样的 $k_1$ 和 $k_2$ 总可以找到。此时，闭环系统就是稳定的了。这种采用状态反馈控制使系统稳定的方法，称为系统的镇定。

**命题 (闭环系统的静差)** @74

类似于一阶系统，采用反馈控制 (2.19) 和 (2.21) 都存在静差。系统 (2.22) 有静差

$$\bar x-\frac{k_1b}{k_1b+a_2}\bar x=\frac{a_2}{k_1b+a_2}\bar x.$$

**注 (输入含导数项的二阶系统)** @75

还可以类似地讨论下述的二阶系统：

$$\frac{\mathrm{d}^2x(t)}{\mathrm{d}t^2}+a_1\frac{\mathrm{d}x(t)}{\mathrm{d}t}+a_2x(t)=b_1\frac{\mathrm{d}u(t)}{\mathrm{d}t}+b_2u(t), \tag{2.23}$$

它的传递函数是

$$F(s)=\frac{b_1s+b_2}{s^2+a_1s+a_2}. \tag{2.24}$$

其细节在此略去，请读者自行讨论。

**定义 (二阶离散系统)** @75

考虑二阶离散系统

$$x_{k+2}-a_1x_{k+1}-a_2x_k=bu_k, \tag{2.25}$$

它的特征方程为

$$\rho^2-a_1\rho-a_2=0. \tag{2.26}$$

我们已经知道，系统 (2.25) 稳定的充分必要条件是 (2.26) 的根都在单位圆内部。

**命题 2.2** @75

类似于命题 2.1，方程 (2.26) 的根都在单位圆内部的充分必要条件是

$$|a_2|<1,\qquad |a_1|<1-a_2. \tag{2.27}$$

有了这样的代数判据，不需要解方程就能根据系数直接判断系统 (2.25) 的稳定性。

### 3.3 离心调速器（p76–84）

**构造 (离心调速器的结构与工作原理)** @77

离心调速器是通过一个机械装置测量蒸汽机的转速，并利用测得的结果自动地确定蒸汽机的进汽阀门开度、以调整转速的装置。它利用离心力来测量转速：转速快则离心力大，反之则小。

最简单的离心调速器由下述部件构成：一根可以绕自己垂直轴旋转的枢轴 $S$，它的上端用铰链与两根同样长度的杆 $L_1$、$L_2$ 相连；$L_1$、$L_2$ 的下端带有同样的重球（质量 $m$），两杆又用辅助杆铰链着，构成一平行四边形机构；辅助杆通过铰链与套在枢轴 $S$ 上的套管 $M$ 相连，$M$ 可以沿 $S$ 上下移动。枢轴 $S$ 又利用伞状齿轮与蒸汽机的主轴相啮合；套管 $M$ 上下移动时，能开启或关闭蒸汽机的进汽阀门。结构示意图见图 3.4。

其工作原理是：转速加大时枢轴的转速加大，离心力增大，重球带动连杆 $L_1$、$L_2$ 运动，使它们与枢轴的夹角 $\varphi$ 增大，从而带动套管 $M$ 向上移动，关小进汽阀门，降低转速；反之，转速降低时离心力降低，$\varphi$ 减小，连杆带动套管 $M$ 向下移动，开大进汽阀门，提高转速。蒸汽机的转速由此得以维持恒定。

**构造 (离心调速器的运动方程)** @78

设杆 $L_1$、$L_2$ 为单位长度，重球的质量为 $m$，取杆 $L_1$ 与枢轴 $S$ 的交点为坐标原点，它们的夹角为 $\varphi$。记 $\boldsymbol{r}(t)$ 为重球的位置向量，$\boldsymbol{v}(t)=\boldsymbol{r}'(t)$ 为（线）速度向量；记 $t$ 时刻小球的角速度向量为 $\boldsymbol{\theta}(t)$，其大小为 $\theta(t)$，则$$\boldsymbol{v}(t)=\boldsymbol{\theta}(t)\times\boldsymbol{r}(t).\tag{3.1}$$若小球做近似匀角速度运动，则 $\boldsymbol{\theta}'(t)\approx\boldsymbol{0}$，故（线）加速度向量为$$\boldsymbol{a}(t)=\boldsymbol{v}'(t)\approx\boldsymbol{\theta}(t)\times\boldsymbol{r}'(t)=\boldsymbol{\theta}(t)\times\boldsymbol{v}(t)=\boldsymbol{\theta}(t)\times(\boldsymbol{\theta}(t)\times\boldsymbol{r}(t)).\tag{3.2}$$于是由牛顿第二定律知重球受到的离心力向量为$$\boldsymbol{F}(t)=m\boldsymbol{a}(t)=m\boldsymbol{\theta}(t)\times(\boldsymbol{\theta}(t)\times\boldsymbol{r}(t)),\tag{3.3}$$它是水平方向的，其大小为$$|\boldsymbol{F}(t)|=m|\boldsymbol{\theta}(t)|^{2}\sin\varphi=m\theta^{2}(t)\sin\varphi,\qquad(\theta(t)\triangleq|\boldsymbol{\theta}(t)|).\tag{3.4}$$离心力向量在与杆 $L_1$ 的正交方向（$\varphi$ 的增大方向）的分量为 $m\theta^{2}(t)\sin\varphi\cos\varphi$；重力 $mg$ 在同一方向的分量为 $-mg\sin\varphi$。故该方向的合力为 $m\theta^{2}\sin\varphi\cos\varphi-mg\sin\varphi$，由此得 $\varphi$ 的运动方程$$m\frac{\mathrm{d}^{2}\varphi}{\mathrm{d}t^{2}}=m\theta^{2}\sin\varphi\cos\varphi-mg\sin\varphi-b\frac{\mathrm{d}\varphi}{\mathrm{d}t},\tag{3.5}$$右端末项是杆 $L_1$ 运动时铰链的摩擦力，$b>0$ 是摩擦系数（假定摩擦力与重球的运动速度 $\dfrac{\mathrm{d}\varphi}{\mathrm{d}t}$ 成正比，负号表示摩擦力方向与运动方向相反）。

蒸汽机有一个转动惯量为 $J$ 的飞轮。设 $\omega$ 是飞轮的角速度大小，$P_1$ 是蒸汽的作用力矩大小，$P$ 是负荷作用在飞轮上的力矩大小，则蒸汽机的运动方程是$$J\frac{\mathrm{d}\omega}{\mathrm{d}t}=P_1-P.\tag{3.6}$$$P_1$ 依赖于进汽阀门的开度，它与调节器套管 $M$ 的关系是$$P_1=F_1+k(\cos\varphi-\cos\varphi^{*}),\tag{3.7}$$其中 $\varphi^{*}$ 是转速恒定时开度所对应的角，$F_1$ 是 $\varphi=\varphi^{*}$ 时进汽所产生的力矩大小，$k>0$ 是比例常数。$\varphi$ 增加时 $\cos\varphi$ 减小，进汽量减小，从而 $P_1$ 减小。

另一方面，$\theta$ 与 $\omega$ 成比例，即$$\theta=n\omega,\tag{3.8}$$$n$ 是比例常数。因此蒸汽机–离心调速器系统的运动方程是$$\begin{cases}m\dfrac{\mathrm{d}^{2}\varphi}{\mathrm{d}t^{2}}=m\theta^{2}\sin\varphi\cos\varphi-mg\sin\varphi-b\dfrac{\mathrm{d}\varphi}{\mathrm{d}t},\\[2mm] J\dfrac{\mathrm{d}\omega}{\mathrm{d}t}=k\cos\varphi-F,\end{cases}\tag{3.9}$$其中 $F=P-F_1+k\cos\varphi^{*}$ 是仅与负荷有关的量。

若记 $\psi=\dfrac{\mathrm{d}\varphi}{\mathrm{d}t}$，则 (3.9) 成为$$\begin{cases}\dfrac{\mathrm{d}\varphi}{\mathrm{d}t}=\psi,\\[2mm] \dfrac{\mathrm{d}\psi}{\mathrm{d}t}=n^{2}\omega^{2}\sin\varphi\cos\varphi-g\sin\varphi-\dfrac{b}{m}\psi,\\[2mm] \dfrac{\mathrm{d}\omega}{\mathrm{d}t}=\dfrac{k}{J}\cos\varphi-\dfrac{F}{J}.\end{cases}\tag{3.10}$$

**命题 (静态解与正常工作状态)** @79

蒸汽机的正常工作状态是：它的飞轮旋转角速度 $\omega$ 在负荷力矩 $P$ 不变的情况下保持常值 $\omega_0$，进汽阀门的开度也不变，即 $\varphi$ 保持常值 $\varphi_0$。这时$$\psi\equiv0,\qquad\varphi\equiv\varphi_0,\qquad\omega\equiv\omega_0.\tag{3.11}$$(3.11) 是微分方程组 (3.10) 的一个特解，它是静态解，对应小球做匀角速度运动。由 (3.10) 知，根据$$\begin{cases}\psi_0=0,\\ n^{2}\omega_0^{2}\cos\varphi_0=g,\\ \cos\varphi_0=\dfrac{F}{k}\end{cases}\tag{3.12}$$确定的 $(\varphi_0,\psi_0,\omega_0)$ 是 (3.10) 的一个静态解。

**构造 (在平衡点处的线性化)** @80

置$$\begin{cases}\varphi=\varphi_0+\Delta\varphi,\\ \psi=\Delta\psi,\\ \omega=\omega_0+\Delta\omega,\end{cases}\tag{3.13}$$它们表示各状态关于平衡位置的偏离。将 (3.13) 代入 (3.10)，并略去 $\Delta\varphi,\Delta\psi,\Delta\omega$ 的高次项，就得到线性化方程组$$\begin{cases}\dfrac{\mathrm{d}\Delta\varphi}{\mathrm{d}t}=\Delta\psi,\\[2mm] \dfrac{\mathrm{d}\Delta\psi}{\mathrm{d}t}=n^{2}\omega_0^{2}\cos2\varphi_0\,\Delta\varphi+n^{2}\omega_0\sin2\varphi_0\,\Delta\omega-g\cos\varphi_0\,\Delta\varphi-\dfrac{b}{m}\Delta\psi,\\[2mm] \dfrac{\mathrm{d}\Delta\omega}{\mathrm{d}t}=-\dfrac{k}{J}\sin\varphi_0\,\Delta\varphi.\end{cases}\tag{3.14}$$把 (3.12) 的第二式代入 (3.14) 的第二式，得到$$\begin{cases}\dfrac{\mathrm{d}\Delta\varphi}{\mathrm{d}t}=\Delta\psi,\\[2mm] \dfrac{\mathrm{d}\Delta\psi}{\mathrm{d}t}=-\dfrac{g\sin^{2}\varphi_0}{\cos\varphi_0}\Delta\varphi-\dfrac{b}{m}\Delta\psi+\dfrac{2g\sin\varphi_0}{\omega_0}\Delta\omega,\\[2mm] \dfrac{\mathrm{d}\Delta\omega}{\mathrm{d}t}=-\dfrac{k}{J}\sin\varphi_0\,\Delta\varphi.\end{cases}\tag{3.15}$$所以 $\Delta\varphi$ 适合下述线性微分方程：$$\frac{\mathrm{d}^{3}\Delta\varphi}{\mathrm{d}t^{3}}+\frac{b}{m}\frac{\mathrm{d}^{2}\Delta\varphi}{\mathrm{d}t^{2}}+\frac{g\sin^{2}\varphi_0}{\cos\varphi_0}\frac{\mathrm{d}\Delta\varphi}{\mathrm{d}t}+\frac{2kg\sin^{2}\varphi_0}{\omega_0J}\Delta\varphi=0,\tag{3.16}$$它的特征方程是$$\lambda^{3}+\frac{b}{m}\lambda^{2}+\frac{g\sin^{2}\varphi_0}{\cos\varphi_0}\lambda+\frac{2kg\sin^{2}\varphi_0}{\omega_0J}=0.\tag{3.17}$$

**命题 (离心调速器的稳定性判据)** @81

当 (3.17) 的根全在左半平面时，线性常微分方程组 (3.15) 的所有解当 $t\to+\infty$ 时都趋于零，即系统 (3.15) 是稳定的。又根据微分方程组解的一次近似定理：当 (3.17) 的根全在左半平面时，非线性方程组 (3.10) 的定常解 $(\varphi_0,0,\omega_0)$ 是渐近稳定的，即当飞轮的转速略微偏离恒定转速 $\omega_0$ 时，由于离心调速器的作用，成立$$\lim_{t\to+\infty}\omega(t)=\omega_0.\tag{3.18}$$

当且仅当 (3.17) 的系数满足不等式$$\frac{b}{m}\cdot\frac{g\sin^{2}\varphi_0}{\cos\varphi_0}>1\cdot\frac{2kg\sin^{2}\varphi_0}{\omega_0J}\tag{3.19}$$时，(3.17) 的根全在左半平面。易见 (3.19) 等价于$$\frac{bJ}{m}>\frac{2k\cos\varphi_0}{\omega_0}.\tag{3.20}$$再由 (3.12) 可知上式可改写为$$\frac{bJ}{m}>\frac{2F}{\omega_0}.\tag{3.21}$$因此，当 (3.21) 成立时，离心调速器能正常工作。

如果 (3.21) 不成立，(3.17) 的根不可能全在左半平面，此时 (3.15) 的解不可能是渐近稳定的，所以 (3.10) 的定常解也可能是不稳定的。

**定义 (运转不平衡度)** @81

负荷 $P$ 发生变化会导致 $F=P-F_1+k\cos\varphi^{*}$ 发生变化，此时恒定转速 $\omega_0$ 也将发生变化。根据 (3.12) 成立着$$F\omega_0^{2}=\frac{kg}{n^{2}},\tag{3.22}$$故可视 $\omega_0$ 为 $F$ 的函数。上式关于 $F$ 求导得 $2F\omega_0\dfrac{\mathrm{d}\omega_0}{\mathrm{d}F}+\omega_0^{2}\equiv0$，即$$\frac{\mathrm{d}\omega_0}{\mathrm{d}F}=-\frac{\omega_0}{2F}.\tag{3.23}$$量 $\dfrac{\mathrm{d}\omega_0}{\mathrm{d}P}=\dfrac{\mathrm{d}\omega_0}{\mathrm{d}F}$ 表征负荷 $P$ 变化时 $\omega_0$ 的变化速度，它的绝对值$$v=\left|\frac{\mathrm{d}\omega_0}{\mathrm{d}P}\right|=\frac{\omega_0}{2F}\tag{3.24}$$称为蒸汽机的**运转不平衡度**。它衡量恒定转速 $\omega_0$ 对负荷 $P$ 变化的依赖程度；从蒸汽机的工作来说，希望负荷 $P$ 变化时 $\omega_0$ 的变化尽可能地小，即 $v$ 尽可能地小。

**命题 (用运转不平衡度表示的稳定条件)** @82

不等式 (3.21) 可化为$$\frac{bJ}{m}\cdot v>1,\tag{3.25}$$它是系统 (3.15) 稳定的充要条件。

**注 (各参数对稳定性的影响)** @82

由 (3.25) 可得以下结论：

(1) 摩擦系数 $b$ 的减小有害于系统的稳定性；

(2) 飞轮的转动惯量 $J$ 的减小有害于系统的稳定性；

(3) 重球质量 $m$ 的增加有害于系统的稳定性；

(4) 不平衡度 $v$ 的减小有害于系统的稳定性。

19 世纪中叶开始，技术的进步使所制造的离心调速器的摩擦系数 $b$ 减小、质量 $m$ 允许增加、转动惯量 $J$ 可以减小，这些都有害于系统的稳定性，这就是离心调速器不能正常工作的根源所在。另外，人们总希望大的负荷变化不致引起恒定转速 $\omega_0$ 的大变化，即要求 $v$ 减小，这也有害于系统的稳定性。

从 (3.25) 还可看到，当 $b=0$ 时系统是不可能稳定的，即摩擦（阻尼）是离心调速器正常工作非常重要的组成部分；在技术进步后 $b$ 减小的情况下，为使离心调速器正常工作，应增加阻尼器，即在量测到转速变化后，阀门的开启应当有所缓冲。当 $v=0$ 时系统也不可能稳定，即不可能期望负荷的变化不影响恒定转速 $\omega_0$ 的变化。

上述分析指出了摆脱离心调速器工作不稳定危机的出路：增加缓冲装置和蒸汽机的运转不平衡度。

**构造 (闭环传递函数)** @83

在方程 (3.15) 中，受控对象（蒸汽机）的动态方程是$$\frac{\mathrm{d}\Delta\omega}{\mathrm{d}t}=-\frac{k}{J}\sin\varphi_0\,\Delta\varphi.\tag{3.26}$$当视 $\Delta\varphi$ 为控制时，它是一个积分环节，其传递函数是$$F_1(s)\triangleq-\frac{k}{sJ}\sin\varphi_0.\tag{3.27}$$而反馈控制的离心调速器的动态方程是$$\frac{\mathrm{d}^{2}\Delta\varphi}{\mathrm{d}t^{2}}+\frac{b}{m}\cdot\frac{\mathrm{d}\Delta\varphi}{\mathrm{d}t}+\frac{g\sin^{2}\varphi_0}{\cos\varphi_0}\Delta\varphi=-\frac{2g\sin\varphi_0}{\omega_0}(-\Delta\omega),\tag{3.28}$$当视 $-\Delta\omega$ 为控制时，它的传递函数是$$F_2(s)\triangleq\frac{-\dfrac{2g\sin\varphi_0}{\omega_0}}{s^{2}+\dfrac{b}{m}s+\dfrac{g\sin^{2}\varphi_0}{\cos\varphi_0}}.$$整个系统的方块图如图 3.5 所示。这样，我们有$$\begin{cases}\Delta\omega=F_1(s)\Delta\varphi,\\ \Delta\varphi=F_2(s)(v-\Delta\omega),\end{cases}$$故 $\Delta\omega=F_1(s)F_2(s)(v-\Delta\omega)$，从而$$\Delta\omega=\frac{F_1(s)F_2(s)}{1+F_1(s)F_2(s)}v.$$因此，闭环系统的传递函数是$$\frac{F_1(s)F_2(s)}{1+F_1(s)F_2(s)}=\frac{\dfrac{2kg\sin^{2}\varphi_0}{\omega_0J}}{s^{3}+\dfrac{b}{m}s^{2}+\dfrac{g\sin^{2}\varphi_0}{\cos\varphi_0}s+\dfrac{2kg\sin^{2}\varphi_0}{\omega_0J}}.\tag{3.29}$$直接根据 (3.15) 计算所得到的传递函数与 (3.29) 相同。上述讨论中受控对象是一个积分环节，用的是二阶环节作为反馈控制去镇定系统。

### 3.4 稳定性的代数判据（p84–91）

**定义 (系统的稳定性)** @84

设控制系统的动态方程为$$a_0\frac{\mathrm{d}^{n}x(t)}{\mathrm{d}t^{n}}+a_1\frac{\mathrm{d}^{n-1}x(t)}{\mathrm{d}t^{n-1}}+\cdots+a_n x(t)=bu(t),\qquad t\geqslant0,\tag{4.1}$$其中 $a_0,a_1,\cdots,a_n,b$ 是实常数，$a_0\neq0$；$u(\cdot)$ 是控制作用，$x(\cdot)$ 是系统的输出。

当 $a_n\neq0$ 时，如果取 $u(t)\equiv1$，可见系统有静态解$$x(t)\equiv\frac{b}{a_n},\qquad t\geqslant0.\tag{4.2}$$当 (4.1) 的特征方程$$a_0\lambda^{n}+a_1\lambda^{n-1}+\cdots+a_n=0\tag{4.3}$$的根全在左半平面时，称系统 (4.1) 是**稳定**的。此时系统 (4.1) 对应于 $u(t)\equiv1$ 的所有解当 $t\to+\infty$ 时都趋于静态解 (4.2)，这时静态解亦称为**稳态解**。零点全在左半平面的实系数多项式通常称为**稳定多项式**。

**命题 (解的卷积表示)** @84

由常微分方程解的理论，存在 $k(\cdot)$ 适合齐次微分方程$$a_0\frac{\mathrm{d}^{n}k(t)}{\mathrm{d}t^{n}}+a_1\frac{\mathrm{d}^{n-1}k(t)}{\mathrm{d}t^{n-1}}+\cdots+a_n k(t)=0\tag{4.4}$$和条件$$k(0)=k'(0)=\cdots=k^{(n-2)}(0)=0,\qquad k^{(n-1)}(0)=1.\tag{4.5}$$那么 (4.1) 有特解$$x(t)=\frac{b}{a_0}\int_0^{t}k(t-s)u(s)\,\mathrm{d}s.\tag{4.6}$$

**命题 (有界输入有界输出)** @85

进一步，如果 (4.3) 的根全在左半平面，则根据常微分方程稳定性理论，存在正数 $\alpha$ 和 $C_1$，使得$$|k(t)|\leqslant C_1\mathrm{e}^{-\alpha t},\qquad 0\leqslant t<+\infty\tag{4.7}$$成立。此时对于有界输入$$|u(t)|\leqslant C,\qquad 0\leqslant t<+\infty,$$其中 $C$ 为非负常数，由 (4.6) 可得$$|x(t)|\leqslant CC_1\left|\frac{b}{a_0}\right|\int_0^{t}\mathrm{e}^{-\alpha(t-s)}\,\mathrm{d}s\leqslant\frac{CC_1|b|}{\alpha|a_0|},\qquad 0\leqslant t<+\infty.\tag{4.8}$$也就是说，当输入有界时，系统的输出也是有界的；这时称系统 (4.1) 在输入输出有界意义下是稳定的。

**引理 4.1 (稳定多项式的一次项系数)** @85

设 $n$ 次实系数多项式$$f(s)=a_0s^{n}+a_1s^{n-1}+\cdots+a_n\equiv\sum_{j=0}^{n}a_{n-j}s^{j}\tag{4.9}$$是稳定的并且 $a_0>0$，那么 $a_1>0$。

**引理 4.2 (稳定多项式的模比较)** @85

设 $n$ 次实系数多项式 (4.9) 是稳定的，那么$$\begin{cases}|f(s)|=|f(-s)|,&\forall\,\operatorname{Re}s=0,\\ |f(s)|<|f(-s)|,&\forall\,\operatorname{Re}s<0,\\ |f(s)|>|f(-s)|,&\forall\,\operatorname{Re}s>0.\end{cases}\tag{4.11}$$

**注 (引理 4.2 的几何解释)** @87

设 $\alpha_j\ (j=1,2,\cdots,n)$ 是 $f(\cdot)$ 的零点，把 $W_j(s)=\dfrac{\alpha_j-s}{\bar{\alpha}_j+s}$ 视为 $s$-复平面到 $w$-复平面的线性变换。当 $\operatorname{Re}s=0$ 时 $\bar{s}=-s$，故 $|\bar{\alpha}_j+s|=|\alpha_j-s|$，并且 $W_j(\alpha_j)=0$。因此 $W_j(\cdot)$ 把 $s$-复平面的虚轴变为 $w$-复平面的单位圆周，把左半平面内的点 $\alpha_j$ 变为原点，从而把左半平面变为单位圆内部、把右半平面变为单位圆外部。而 $\dfrac{f(s)}{f(-s)}=\prod_{j=1}^{n}W_j(s)$，逐因子比较模即得引理 4.2。

**定义 (互反多项式)** @87

对于给定的 $n$ 次实系数多项式 (4.9)，若 $a_n=f(0)\neq0$，定义$$f^{*}(s)=a_0+a_1s+\cdots+a_ns^{n}=\sum_{j=0}^{n}a_js^{j},\tag{4.19}$$称 $f^{*}(\cdot)$ 为 (4.9) 的**互反多项式**；它也是 $n$ 次实系数多项式。当 $s\neq0$ 时$$f^{*}(s)=s^{n}f(s^{-1}).\tag{4.20}$$

$f^{*}(\cdot)$ 的互反多项式为 $f(\cdot)$；若 $\alpha_j$ 是 $f(\cdot)$ 的零点（由于 $a_n\neq0$ 故 $\alpha_j\neq0$），那么 $\alpha_j^{-1}$ 是 $f^{*}(\cdot)$ 的零点，反之也对。又因为 $\dfrac{1}{s}=\dfrac{\bar{s}}{|s|^{2}}$，故 $\operatorname{Re}s$ 与 $\operatorname{Re}\dfrac{1}{s}$ 同号，所以互反多项式具有相同的稳定性。

**注 (首项系数为零时的互反多项式)** @87

如果 $f(0)=a_n=0$，仍然可以用 (4.19) 定义互反多项式，但此时 $f^{*}(\cdot)$ 的次数低于 $n$。

**构造 (降次多项式)** @87

设 $a_1\neq0$，记$$\begin{cases}\tilde{f}(s)=a_1s^{n-1}+a_3s^{n-3}+\cdots=\dfrac{1}{2}\{f(s)-(-1)^{n}f(-s)\},\\[2mm] \varphi(s)=f(s)-\dfrac{a_0}{a_1}s\tilde{f}(s).\end{cases}\tag{4.21}$$

当 $a_1\neq0$ 时，由 $f(\cdot)$ 可以确定 $\varphi(\cdot)$，并且 $\varphi(\cdot)$ 是一个首项系数为 $a_1$ 的 $n-1$ 次多项式。而 $n-1$ 次多项式 $\tilde{f}(\cdot)$ 当 $n$ 为偶数时只含 $s$ 的奇数次幂，所以是奇函数；当 $n$ 为奇数时只含 $s$ 的偶数次幂，所以是偶函数。

**定理 4.3 (判定稳定性的降次原理)** @87

设 $a_0>0$，那么下述两个条件是等价的：

(i) 由 (4.9) 定义的 $n$ 次多项式 $f(\cdot)$ 是稳定的；

(ii) $a_1>0$，并且由 (4.21) 确定的 $\varphi(\cdot)$ 是稳定的。

**命题 (辅助多项式在虚轴上无零点)** @89

设 $a_0>0$，$f(\cdot)$ 是稳定的（于是由引理 4.1 知 $a_1>0$，且 $f^{*}(\cdot)$ 稳定），记 $\alpha=\dfrac{a_0}{a_1}>0$。对参数 $\mu$，定义$$G(s,\mu)=\left(s-\frac{\mu}{2}\right)f^{*}(s)+\frac{\mu}{2}f^{*}(-s)\equiv sF(s,\mu),\tag{4.24}$$$$F(s,\mu)=\sum_{j=0}^{n-1}\left\{a_j-[1+(-1)^{j}]\frac{\mu}{2}a_{j+1}\right\}s^{j}+a_ns^{n}.$$易见$$F(s,0)=f^{*}(s),\qquad F(0,\mu)=a_0-\mu a_1=a_1(\alpha-\mu);\tag{4.25}$$又 $G(s,\alpha)=s^{2}\varphi^{*}(s)$，所以$$F(s,\alpha)=s\varphi^{*}(s).\tag{4.26}$$当实数 $\omega\neq0$ 时，$$F(\mathrm{i}\omega,\mu)=f^{*}(\mathrm{i}\omega)+\mathrm{i}\frac{\mu}{2\omega}\left[f^{*}(\mathrm{i}\omega)-f^{*}(-\mathrm{i}\omega)\right]=\left[\operatorname{Re}f^{*}(\mathrm{i}\omega)-\frac{\mu}{\omega}\operatorname{Im}f^{*}(\mathrm{i}\omega)\right]+\mathrm{i}\operatorname{Im}f^{*}(\mathrm{i}\omega).\tag{4.27}$$于是$$F(\mathrm{i}\omega,\mu)\neq0,\qquad\forall\,\omega\neq0.\tag{4.28}$$若 $\operatorname{Im}f^{*}(\mathrm{i}\omega)\neq0$，则 (4.28) 已成立；若 $\operatorname{Im}f^{*}(\mathrm{i}\omega)=0$，则由 $f^{*}(\cdot)$ 的稳定性知 $f^{*}(\mathrm{i}\omega)\neq0$，此时 $F(\mathrm{i}\omega,\mu)=\operatorname{Re}f^{*}(\mathrm{i}\omega)\neq0$。

特别取 $\mu=\alpha>0$，由 (4.26) 可得 $\varphi^{*}(\mathrm{i}\omega)\neq0\ (\forall\,\omega\neq0)$，又 $\varphi^{*}(0)=a_1>0$，所以函数 $\varphi^{*}(\cdot)$ 在虚轴上无零点。

**注 (零点随参数连续移动)** @89

由 (4.25) 知，当 $0\leqslant\mu<\alpha$ 时 $F(0,\mu)\neq0$；结合 (4.28)，即 $F(\cdot,\mu)$ 的零点不穿过虚轴。由于 $F(\cdot,\mu)$ 的零点是参数 $\mu$ 的连续函数，而 $f^{*}(\cdot)=F(\cdot,0)$ 的零点全在左半开平面内，令 $\mu\to\alpha\ (\mu<\alpha)$，可知当 $0\leqslant\mu\leqslant\alpha$ 时 $F(\cdot,\mu)$ 的零点全在左半闭平面内。于是 $F(\cdot,\alpha)$ 的零点不可能在右半开平面内（即零点的实部不可能大于零），即 $\varphi^{*}(\cdot)$ 是稳定的，从而 $\varphi(\cdot)$ 也是稳定的。

**构造 (Routh 递推)** @90

记$$A_n(s)\triangleq f(s)\equiv a_0s^{n}+a_1s^{n-1}+\cdots+a_{n-1}s+a_n\equiv a_0^{(n)}s^{n}+a_1^{(n)}s^{n-1}+\cdots+a_{n-1}^{(n)}s+a_n^{(n)},\tag{4.33}$$其中 $a_0>0$。假定 $A_n(\cdot)$ 稳定，从而由定理 4.3，$a_1^{(n)}>0$。令 $\alpha_n=\dfrac{a_0^{(n)}}{a_1^{(n)}}$，作$$A_{n-1}(s)=\left(1-\frac{\alpha_ns}{2}\right)A_n(s)+(-1)^{n}\frac{\alpha_ns}{2}A_n(-s).\tag{4.34}$$由定理 4.3 知，当 $a_0\equiv a_0^{(n)}$ 时，$A_n(\cdot)$ 稳定的充要条件是 $A_{n-1}(\cdot)$ 稳定且 $a_1^{(n)}>0$。将 (4.34) 右端展开，$s$ 的偶次幂项相消，得$$A_{n-1}(s)=a_1^{(n)}s^{n-1}+\left(a_2^{(n)}-\frac{a_0^{(n)}a_3^{(n)}}{a_1^{(n)}}\right)s^{n-2}+a_3^{(n)}s^{n-3}+\cdots\triangleq a_0^{(n-1)}s^{n-1}+a_1^{(n-1)}s^{n-2}+\cdots+a_{n-2}^{(n-1)}s+a_{n-1}^{(n-1)}.\tag{4.35}$$它是一个 $n-1$ 次实系数多项式，且 $a_0^{(n-1)}\equiv a_1^{(n)}=a_1>0$。因此可以作递推定义。

一般地，假如$$A_k(s)=a_0^{(k)}s^{k}+a_1^{(k)}s^{k-1}+\cdots+a_k^{(k)},\tag{4.36}$$则定义 $\alpha_k=\dfrac{a_0^{(k)}}{a_1^{(k)}}$（假如 $a_1^{(k)}\leqslant0$，则多项式不稳定，终止递推过程），置$$\begin{aligned}A_{k-1}(s)&=\left(1-\frac{\alpha_ks}{2}\right)A_k(s)+(-1)^{k}\frac{\alpha_ks}{2}A_k(-s)\\&=a_1^{(k)}s^{k-1}+\left(a_2^{(k)}-\alpha_ka_3^{(k)}\right)s^{k-2}+a_3^{(k)}s^{k-3}+\left(a_4^{(k)}-\alpha_ka_5^{(k)}\right)s^{k-4}+\cdots\\&=a_0^{(k-1)}s^{k-1}+a_1^{(k-1)}s^{k-2}+a_2^{(k-1)}s^{k-3}+a_3^{(k-1)}s^{k-4}+\cdots+a_{k-2}^{(k-1)}s+a_{k-1}^{(k-1)},\end{aligned}\tag{4.37}$$其中对于 $j=0,1,2,\cdots,k-1$ 定义$$a_j^{(k-1)}=\begin{cases}a_{j+1}^{(k)},&\text{若 } j \text{ 为偶数},\\ a_{j+1}^{(k)}-\alpha_ka_{j+2}^{(k)},&\text{若 } j \text{ 为奇数},\end{cases}\tag{4.38}$$这里 $a_{k+1}^{(k)}=0$。

**定理 4.4 (Routh 判据)** @91

设 $a_0>0$，那么多项式 $f(\cdot)$ 是稳定的当且仅当$$a_1^{(k)}>0,\qquad k=n,n-1,\cdots,1.$$

**构造 (Routh 递推表)** @91

根据定理 4.4，得到下述递推运算表（通常称为 Routh 表）：每一对相邻行中，上一行为 $A_k$ 的系数 $a_0^{(k)},a_1^{(k)},\cdots,a_k^{(k)}$，下一行为 $a_1^{(k)},0,a_3^{(k)},0,a_5^{(k)},\cdots$（即按 (4.38) 取 $j$ 为偶数时的 $a_{j+1}^{(k)}$）；再由这一对行按 (4.38) 算出下一对行，直至只剩 $A_1$：$$\begin{array}{cccccccc}a_0^{(n)}&a_1^{(n)}&a_2^{(n)}&a_3^{(n)}&a_4^{(n)}&\cdots&a_{n-1}^{(n)}&a_n^{(n)}\\a_1^{(n)}&0&a_3^{(n)}&0&a_5^{(n)}&\cdots&&\\&a_0^{(n-1)}&a_1^{(n-1)}&a_2^{(n-1)}&a_3^{(n-1)}&\cdots&a_{n-1}^{(n-1)}&\\&a_1^{(n-1)}&0&a_3^{(n-1)}&0&\cdots&&\\&&&\cdots\cdots\cdots&&&&\\&&&&a_0^{(2)}&a_1^{(2)}&a_2^{(2)}&\\&&&&a_1^{(2)}&0&&\\&&&&&a_0^{(1)}&a_1^{(1)}&\end{array}$$表中每一对行的第二行即 (4.38) 中 $j$ 为奇数时所需的系数；于是定理 4.4 的条件就是表中每一对行的首项 $a_1^{(k)}\ (k=n,n-1,\cdots,1)$ 全为正数。

### 3.5 一次近似定理（p92–94）

**定理 5.1 (一次近似定理)** @93

考虑非线性系统

$$\frac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=\boldsymbol{A}\boldsymbol{x}(t)+\boldsymbol{f}(\boldsymbol{x}(t)),\quad t\geqslant 0,\tag{5.1}$$

假设矩阵 $\boldsymbol{A}$ 的特征值全在左半平面，即其实部都小于 $0$，并且函数 $\boldsymbol{f}(\cdot)$ 在 $\boldsymbol{x}=\boldsymbol{0}$ 的邻域中是连续可微的，且存在常数 $C$ 满足

$$\|\boldsymbol{f}(\boldsymbol{x})\|\leqslant C\|\boldsymbol{x}\|^{2},\tag{5.2}$$

那么存在 $\alpha>0$，$\delta>0$，$K>0$，使得当 $\|\boldsymbol{x}(0)\|<\delta$ 时，方程 (5.1) 的解满足不等式

$$\|\boldsymbol{x}(t)\|\leqslant K\|\boldsymbol{x}(0)\|\mathrm{e}^{-\alpha t}.\tag{5.3}$$

**引理 5.2 (Gronwall 不等式)** @93

假设 $u(\cdot)$，$v(\cdot)$ 是 $[t_0,+\infty)$ 上的实函数，$v(t)\geqslant 0$，若

$$u(t)\leqslant a+\int_{t_0}^{t}v(s)u(s)\,\mathrm{d}s,$$

其中 $a$ 为常数，则

$$u(t)\leqslant a\mathrm{e}^{\int_{t_0}^{t}v(s)\,\mathrm{d}s},\quad \forall t\geqslant t_0.$$

**命题 (矩阵指数的衰减估计)** @93

由于矩阵 $\boldsymbol{A}$ 的特征值全在左半平面，所以存在 $K>0$，$\alpha>0$ 使得

$$\|\mathrm{e}^{\boldsymbol{A}t}\|\leqslant K\mathrm{e}^{-2\alpha t},\quad \forall t\geqslant 0.\tag{5.4}$$

**例 5.3 (一次近似定理的应用)** @94

考虑系统

$$\begin{cases}\dfrac{\mathrm{d}x_1(t)}{\mathrm{d}t}=-x_1(t)-\sin x_2(t),\\[10pt]\dfrac{\mathrm{d}x_2(t)}{\mathrm{d}t}=2x_1(t).\end{cases}$$

在 $x_1=x_2=0$ 处，

$$\boldsymbol{A}=\begin{pmatrix}-1&-1\\[2pt] 2&0\end{pmatrix},\qquad \boldsymbol{f}(\boldsymbol{x})=\begin{pmatrix}x_2(t)-\sin x_2(t)\\[2pt] 0\end{pmatrix}.$$

由于 $\boldsymbol{A}$ 稳定，根据 Taylor 展式，有

$$\|\boldsymbol{f}(\boldsymbol{x})\|=\left|x_2-\sin x_2\right|=\left|\frac{\sin\xi}{2}x_2^{2}\right|\leqslant\frac{1}{2}\left|x_2\right|^{2},$$

其中 $\xi$ 介于 $0$ 与 $x_2$ 之间。定理 5.1 的条件满足，所以成立相应的结论。

### 3.6 稳定性的频率判据（p95–99）

**命题 (单因子与乘积的幅角变化)** @95

假设复数 $\alpha$ 位于左半开平面内，即 $\operatorname{Re}\alpha<0$，那么当 $\omega\ (\omega\in\mathbb{R})$ 从 $-\infty$ 到 $+\infty$ 变化时，复数 $\mathrm{i}\omega-\alpha$ 的幅角变化是：从 $-\dfrac{\pi}{2}$ 连续增大到 $\dfrac{\pi}{2}$，即复数 $\mathrm{i}\omega-\alpha$ 的幅角变化等于 $\pi$；同理若 $\operatorname{Re}\alpha>0$，当 $\omega$ 从 $-\infty$ 到 $+\infty$ 变化时，复数 $\mathrm{i}\omega-\alpha$ 的幅角变化等于 $-\pi$。而当 $\omega$ 从 $-\infty$ 到 $+\infty$ 变化时，$\prod_{j=1}^{n}(\mathrm{i}\omega-\alpha_j)$ 的幅角变化等于 $\mathrm{i}\omega-\alpha_j\ (j=1,2,\cdots,n)$ 的幅角变化之和。因此，我们得到下述结论。

**定理 6.1 (幅角判据)** @95

设 $a_0>0$，并且 $n$ 次实系数多项式 $f(\cdot)$ 在虚轴上没有零点，那么 $f(\cdot)$ 稳定的充要条件是：当 $\omega$ 从 $-\infty$ 到 $+\infty$ 变化时，$f(\mathrm{i}\omega)$ 的幅角变化等于 $n\pi$，即

$$\Delta_{-\infty}^{+\infty}\arg f(\mathrm{i}\omega)=n\pi.\tag{6.3}$$

**推论 (实系数情形的半轴判据)** @96

对于实系数多项式，由于

$$f(-\mathrm{i}\omega)=\overline{f(\mathrm{i}\omega)},$$

所以当 $\omega$ 从 $-\infty$ 到 $0$ 变化时，$f(\mathrm{i}\omega)$ 在复平面上描出的曲线与 $\omega$ 从 $0$ 到 $+\infty$ 变化时 $f(\mathrm{i}\omega)$ 在复平面上描出的曲线关于实轴是对称的。因此，实系数多项式 $f(\cdot)$ 稳定的充要条件是：当 $\omega$ 从 $0$ 到 $+\infty$ 变化时，$f(\mathrm{i}\omega)$ 的幅角变化等于 $\dfrac{n\pi}{2}$，即

$$\Delta_{0}^{+\infty}\arg f(\mathrm{i}\omega)=\frac{n\pi}{2}.\tag{6.4}$$

**命题 (频率特性与零点分布)** @96

进一步，让我们来讨论传递函数为 $F(s)=\dfrac{P(s)}{Q(s)}$ 的控制系统的稳定性，这里 $Q(s)$ 和 $P(s)$ 分别为 $n$ 次和 $m$ 次的实系数多项式并且无公因子，$P(s)$，$Q(s)$ 首项系数大于 $0$。这时，控制系统的动态方程是

$$Q\!\left(\frac{\mathrm{d}}{\mathrm{d}t}\right)x(t)=P\!\left(\frac{\mathrm{d}}{\mathrm{d}t}\right)u(t).\tag{6.5}$$

当 $Q(\cdot)$ 的零点全在左半开平面内时，系统 (6.5) 是稳定的。设 $m\leqslant n$，并且 $F(\cdot)$ 在右半开平面内恰有 $m_1$ 个零点，且在虚轴上没有零点，由于 $F(\cdot)$ 的零点就是 $P(\cdot)$ 的零点，因此 $P(\cdot)$ 在右半开平面内恰有 $m_1$ 个零点，在左半开平面内恰有 $m-m_1$ 个零点。因为频率特性 $F(\mathrm{i}\omega)=\dfrac{P(\mathrm{i}\omega)}{Q(\mathrm{i}\omega)}$ 的幅角 $\arg F(\mathrm{i}\omega)$ 等于 $\arg P(\mathrm{i}\omega)$ 减去 $\arg Q(\mathrm{i}\omega)$，所以 $F(\mathrm{i}\omega)$ 在 $\omega$ 从 $-\infty$ 到 $+\infty$ 变化时的幅角变化为

$$\Delta_{-\infty}^{+\infty}\arg F(\mathrm{i}\omega)=\Delta_{-\infty}^{+\infty}\arg P(\mathrm{i}\omega)-\Delta_{-\infty}^{+\infty}\arg Q(\mathrm{i}\omega).\tag{6.6}$$

但 $\Delta_{-\infty}^{+\infty}\arg P(\mathrm{i}\omega)=(m-2m_1)\pi$，所以根据定理 6.1，我们得到：

**定理 6.2 (传递函数的幅角判据)** @96

设 (6.5) 的传递函数 $F(\cdot)$ 在右半开平面内有 $m_1$ 个零点，在虚轴上没有零点，那么系统 (6.5) 稳定的充要条件是

$$\Delta_{-\infty}^{+\infty}\arg F(\mathrm{i}\omega)=(m-2m_1-n)\pi\tag{6.7}$$

或

$$\Delta_{-\infty}^{+\infty}\arg\frac{1}{F(\mathrm{i}\omega)}=(n-m+2m_1)\pi.\tag{6.8}$$

**命题 (简单闭环系统的传递函数)** @97

下面讨论如图 3.6 所示的开环传递函数为 $F(\cdot)$ 的简单反馈系统：前向通道的传递函数为 $F(s)$，反馈通道的传递函数为常数 $-1$。其中 $F(s)=\dfrac{P(s)}{Q(s)}$，$Q(s)$ 和 $P(s)$ 分别为 $n$ 次和 $m$ 次的实系数多项式并且无公因子，$Q(s)$ 首项系数大于 $0$，$n>m$。我们知道，闭环系统的传递函数是

$$\widetilde{F}(s)=\frac{F(s)}{1+F(s)}=\frac{P(s)}{P(s)+Q(s)}.\tag{6.9}$$

所以闭环系统稳定的充要条件是方程

$$P(s)+Q(s)=0\tag{6.10}$$

的根全在左半开平面内，从而

$$\Delta_{-\infty}^{+\infty}\arg\{P(\mathrm{i}\omega)+Q(\mathrm{i}\omega)\}=n\pi.\tag{6.11}$$

又如果原来开环系统是稳定的（即 $Q(s)$ 是稳定的），则

$$\Delta_{-\infty}^{+\infty}\arg Q(\mathrm{i}\omega)=n\pi.$$

于是

$$\Delta_{-\infty}^{+\infty}\arg\{1+F(\mathrm{i}\omega)\}=\Delta_{-\infty}^{+\infty}\arg\{P(\mathrm{i}\omega)+Q(\mathrm{i}\omega)\}-\Delta_{-\infty}^{+\infty}\arg Q(\mathrm{i}\omega)=0.$$

因此，我们证得：

**定理 6.3 (Nyquist 判据的幅角形式)** @97

假设开环系统 (6.5) 是稳定的，$m<n$，那么简单闭环系统稳定的充要条件是

$$\Delta_{-\infty}^{+\infty}\arg\{1+F(\mathrm{i}\omega)\}=0.\tag{6.12}$$

**注 (Nyquist 稳定性判据)** @97

这就是说，当开环系统稳定时，简单闭环系统稳定的充要条件是：开环系统的频率特性 $F(\mathrm{i}\omega)$ 在复平面上的图形围绕复平面的点 $-1$ 旋转 $0$ 圈。这称为 Nyquist 稳定性判据。

**注 (开环系统有右半平面极点时的判据)** @97

如果 $F(\cdot)$ 恰有 $n_1$ 个极点在右半开平面内，且它在虚轴上无极点，那么简单闭环系统稳定的充要条件是：开环系统的频率特性 $F(\mathrm{i}\omega)$ 在复平面上的曲线绕点 $-1$ 逆时针方向旋转 $n_1$ 圈。事实上，此时 $Q(\mathrm{i}\omega)$ 在右半开平面内恰有 $n_1$ 个零点，虚轴上没有零点。因此，

$$\Delta_{-\infty}^{+\infty}\arg Q(\mathrm{i}\omega)=(n-2n_1)\pi.$$

从而 $\widetilde{F}(s)$ 稳定当且仅当

$$\begin{aligned}\Delta_{-\infty}^{+\infty}\arg\{1+F(\mathrm{i}\omega)\}&=\Delta_{-\infty}^{+\infty}\arg\{P(\mathrm{i}\omega)+Q(\mathrm{i}\omega)\}-\Delta_{-\infty}^{+\infty}\arg Q(\mathrm{i}\omega)\\&=n\pi-(n-2n_1)\pi=2n_1\pi.\end{aligned}\tag{6.13}$$

**注 (虚轴上零点的处理)** @98

在前面的讨论中，我们总是假设 $f(\cdot)$ 在虚轴上没有零点。人们自然要问，当 $f(\cdot)$ 在虚轴上有零点时，前面的结论是否成立？

假定 $\alpha=\mathrm{i}\omega_0$，那么当 $\omega$ 从 $-\infty$ 到 $+\infty$ 变化时，复数 $\mathrm{i}\omega-\alpha$ 的幅角变化在 $\omega=\omega_0$ 处不连续，用前面的方法无法正确地计算幅角变化。此时，必须对原来的方法进行修改。

为绕过点 $\mathrm{i}\omega_0$，我们可以以 $\mathrm{i}\omega_0$ 为中心，$\delta>0$ 为半径作圆周 $|s-\mathrm{i}\omega_0|=\delta$（如图 3.7 所示）。把 $s-\mathrm{i}\omega_0$ 沿虚轴的幅角变化，改变为沿虚轴经半圆周 $bcd$、再沿虚轴的幅角变化，由于半圆周 $bcd$ 位于左半平面内，所以幅角变化等于 $-\pi$。这样，如果有零点在虚轴上，就可以把该零点理解为在右半平面。

由于在考虑稳定性时虚轴上的零点视为不稳定零点，我们选择半圆周 $bcd$ 在左半平面内，就可以使 $s-\mathrm{i}\omega_0$ 沿上述曲线幅角变化与具有正实部的零点 $\alpha$ 当 $\omega$ 从 $-\infty$ 到 $+\infty$ 变化时复数 $\mathrm{i}\omega-\alpha$ 幅角变化相同。

设 $n$ 次多项式 (6.1) 在右半开平面内有 $n_1$ 个零点，在虚轴上有 $n_0$ 个零点，则在左半开平面内有 $n-n_1-n_0$ 个零点。现讨论当 $s$ 沿虚轴变化时 $f(s)$ 的幅角变化情形。如果 $\mathrm{i}\omega_0$ 是 $f(\cdot)$ 的零点，在讨论 $\mathrm{i}\omega-\mathrm{i}\omega_0$ 的幅角变化时，遇到了 $\mathrm{i}\omega-\mathrm{i}\omega_0$ 等于 $0$ 的情形，此时我们作类似于图 3.7 中所示意的半圆。这样我们可得

$$\begin{aligned}\Delta_{-\infty}^{+\infty}\arg f(\mathrm{i}\omega)&=\{(n-n_1-n_0)-n_1-n_0\}\pi\\&=\{n-2(n_1+n_0)\}\pi.\end{aligned}\tag{6.14}$$

因此，定理 6.1，6.2 和 6.3 的结论当 $f(\cdot)$ 和 $F(\cdot)$ 在虚轴上有零点和极点时仍成立。不过遇到虚轴上的零点或极点时，应当使用足够小的半圆周来代替虚轴上的那一段，这个半圆周内只能有一个零点或极点。

**例 6.4 (Nyquist 图与闭环稳定性)** @99

考虑开环系统 $F(s)=\dfrac{2s+1}{(s+a)(s+1)}$，当 $a>0$ 时系统稳定；当 $a\leqslant 0$ 时系统有不稳定的极点。

我们考虑 $a=\pm 0.5$，$\pm 2$ 时简单闭环系统的稳定性。利用 Matlab 工具，可以画出开环系统的 Nyquist 图，如图 3.8 所示。由 Nyquist 图知道：当 $a=0.5$，$2$ 时，频率特性在复平面上绕点 $-1$ 旋转圈数为 $0$，并且此时开环系统是稳定的，由定理 6.3 知闭环系统稳定。当 $a=-0.5$ 时，频率特性在复平面上绕点 $-1$ 旋转圈数为 $1$，而开环系统有一个不稳定极点，所以由定理 6.3 的注知闭环系统是稳定的。当 $a=-2$ 时，频率特性在复平面上绕点 $-1$ 旋转圈数为 $0$，而开环系统有一个不稳定极点，所以由定理 6.3 的注知闭环系统是不稳定的。

由于系统的开环频率特性可以用实验方法确定，并不一定要从系统的动态方程来得到，所以工程师们宁愿用频率特性讨论闭环系统的稳定性。这就是 Nyquist 稳定性判据的优点。

### 3.7 多项式族的稳定性判据（p100–103）

**定义 (区间多项式族的稳定性)** @100

如果所有系数满足 (7.2) 的多项式都稳定，则我们称多项式族 (7.1) 是稳定的；否则，即至少有一个满足 (7.2) 的多项式不稳定，则称多项式族 (7.1) 是不稳定的。

**构造 (偶次项与奇次项的分解)** @100

由于我们关心的是整个多项式族 (7.1) 的稳定性，故不妨假设 $\underline{a}_0>0$。如果多项式族 (7.1) 稳定，则由定理 4.3 知，$\underline{a}_1>0$。现在将 $f(\cdot)$ 作如下分解：

$$f(s)=h(s^{2})+sg(s^{2}),\tag{7.3}$$

其中 $h(\cdot)$ 和 $g(\cdot)$ 均为实系数多项式。易知 $h(s^{2})$ 是 $f(s)$ 的偶次项部分，$sg(s^{2})$ 是 $f(s)$ 的奇次项部分。设 $f(s)$ 的次数为 $n$，则当 $n=2k$ 或 $2k+1$ 时（$k$ 为非负整数），$h(\cdot)$ 的次数为 $l=\left[\dfrac{n}{2}\right]$，这里 $[\cdot]$ 是取整函数，即 $[x]$ 表示不超过数 $x$ 的最大整数。若 $g(\cdot)$ 的次数为 $m$，则当 $n=2k$ 时 $m=k-1$，而当 $n=2k+1$ 时 $m=k$，所以 $m=\left[\dfrac{n-1}{2}\right]\leqslant k$。

**例 7.1 (偶次项与奇次项部分)** @100

假如 $f(s)=s^{5}-4s^{4}+2s^{3}+s-1$，则

$$\begin{cases}h(s^{2})=-4(s^{2})^{2}-1,\\[6pt] g(s^{2})=(s^{2})^{2}+2(s^{2})+1.\end{cases}$$

因此，$l=2$，$m=2$。

**命题 (半轴上的幅角判据)** @100

因为 $\underline{a}_0>0$，而 $f(\cdot)$ 是实系数多项式，故由 §3.6 中结果知 $f(\cdot)$ 稳定当且仅当

$$\Delta_{0}^{+\infty}\arg f(\mathrm{i}\omega)=\frac{n}{2}\pi.\tag{7.4}$$

**注 (稳定性的一个必要条件)** @101

又由于 $\lim\limits_{s\to+\infty}f(s)=+\infty$，所以若 $f(0)\leqslant 0$，则 $f(s)=0$ 必存在非负实根。因此，当 $f(\cdot)$ 稳定时，必有 $f(0)>0$。

**命题 (偶数次情形的交错条件)** @101

考虑 $n=2k$ 的情形，由分解式 (7.3)，我们得知

$$f(\mathrm{i}\omega)=h(-\omega^{2})+\mathrm{i}\omega g(-\omega^{2}),\tag{7.5}$$

则条件 (7.4) 等价于

$$\Delta_{0}^{+\infty}\arg\left[h(-\omega^{2})+\mathrm{i}\omega g(-\omega^{2})\right]=k\pi.\tag{7.6}$$

它意味着当 $\omega$ 从 $0$ 变到 $+\infty$ 时，曲线 $h(-\omega^{2})+\mathrm{i}\omega g(-\omega^{2})$ 从正实轴上的点 $f(0)$ 出发绕原点作反时针旋转 $\dfrac{k}{2}$ 圈。假如 $\omega_1$ 对应于该曲线第一次与虚轴的交点，则在此点，

$$f(\mathrm{i}\omega_1)=h(-\omega_1^{2})+\mathrm{i}\omega_1g(-\omega_1^{2})=\mathrm{i}\omega_1g(-\omega_1^{2}).$$

所以

$$h(-\omega_1^{2})=0,\quad g(-\omega_1^{2})>0.\tag{7.7}$$

若 $\omega_2$ 是接下来对应于曲线交于实轴之点，则

$$h(-\omega_2^{2})<0,\quad g(-\omega_2^{2})=0.\tag{7.8}$$

依此类推，我们有

$$\begin{cases}\omega_3>\omega_2,\quad h(-\omega_3^{2})=0,\quad g(-\omega_3^{2})<0,\\[6pt] \omega_4>\omega_3,\quad h(-\omega_4^{2})>0,\quad g(-\omega_4^{2})=0,\\[6pt] \cdots\cdots\cdots\cdots\cdots\end{cases}\tag{7.9}$$

于是，我们至少存在

$$\begin{cases}u_k<u_{k-1}<\cdots<u_2<u_1<0,\quad u_j=-\omega_{2j-1}^{2},\\[6pt] h(u_j)=0,\quad (-1)^{j-1}g(u_j)>0,\quad 1\leqslant j\leqslant k;\end{cases}\tag{7.10}$$

$$\begin{cases}v_{k-1}<v_{k-2}<\cdots<v_2<v_1<0,\quad v_j=-\omega_{2j}^{2},\\[6pt] g(v_j)=0,\quad (-1)^{j}h(v_j)>0,\quad 1\leqslant j\leqslant k-1,\end{cases}\tag{7.11}$$

并且

$$0>u_1>v_1>u_2>v_2>\cdots>u_{k-1}>v_{k-1}>u_k.\tag{7.12}$$

由于 $h(\cdot)$ 的次数为 $k$，$g(\cdot)$ 的次数为 $k-1$，因此 $u_1,u_2,\cdots,u_k$ 和 $v_1,v_2,\cdots,v_{k-1}$ 分别为 $h(\cdot)$ 和 $g(\cdot)$ 的单重零点，且无其他零点。

反之，若存在 $2k-1$ 个负实数 $u_1,v_1,u_2,v_2,\cdots,v_{k-1},u_k$ 满足 (7.10)—(7.12)，则 (7.6) 必成立，从而 $f(\cdot)$ 稳定。对于 $n=2k+1$ 的情形可以类似地讨论。

**引理 7.2 (奇次部分系数的单调性)** @102

设 $f_1(\cdot)$ 和 $f_2(\cdot)$ 是次数相同的实系数稳定多项式，并且存在实系数多项式 $h(\cdot)$，$g_1(\cdot)$，$g_2(\cdot)$ 使分解

$$f_1(s)=h(s^{2})+sg_1(s^{2}),\quad f_2(s)=h(s^{2})+sg_2(s^{2})$$

成立。其中 $m$ 次多项式 $g_1(\cdot)$，$g_2(\cdot)$ 满足

$$\begin{cases}g_k(s)=\sum\limits_{j=0}^{m}a_j^{(k)}s^{m-j},\quad k=1,2,\\[10pt] (-1)^{j}a_j^{(1)}\leqslant(-1)^{j}a_j^{(2)},\quad j=0,1,\cdots,m.\end{cases}\tag{7.13}$$

假设 $m$ 次实系数多项式族 $g(s)=\sum\limits_{j=0}^{m}a_js^{m-j}$ 的系数满足

$$(-1)^{j}a_j^{(1)}\leqslant(-1)^{j}a_j\leqslant(-1)^{j}a_j^{(2)},\quad j=0,1,\cdots,m,\tag{7.14}$$

则多项式族

$$f(s)=h(s^{2})+sg(s^{2})\tag{7.15}$$

也是稳定的。

**引理 (偶次部分系数的单调性)** @103

同样可以证明：若 $f_3(s)=h_1(s^{2})+sg(s^{2})$ 和 $f_4(s)=h_2(s^{2})+sg(s^{2})$ 是同次数的实系数稳定多项式，并且

$$\begin{cases}h_k(s)=\sum\limits_{j=0}^{l}a_j^{(k)}s^{l-j},\quad k=1,2,\\[10pt] (-1)^{j}a_j^{(1)}\leqslant(-1)^{j}a_j^{(2)},\quad j=0,1,\cdots,l.\end{cases}\tag{7.16}$$

假设 $l$ 次实系数多项式族 $h(s)=\sum\limits_{j=0}^{l}a_js^{l-j}$ 的系数满足

$$(-1)^{j}a_j^{(1)}\leqslant(-1)^{j}a_j\leqslant(-1)^{j}a_j^{(2)},\quad j=0,1,\cdots,l,\tag{7.17}$$

则

$$f(s)=h(s^{2})+sg(s^{2})\tag{7.18}$$

也是稳定的。

**定理 7.3 (Kharitonov 定理)** @103

现在考虑 $n$ 次实系数多项式族

$$f(s,\boldsymbol{a})\equiv h(s^{2},\boldsymbol{a})+sg(s^{2},\boldsymbol{a})\equiv a_0s^{n}+a_1s^{n-1}+\cdots+a_n,\tag{7.19}$$

其中 $\boldsymbol{a}$ 满足不等式 (7.2)。设

$$\begin{cases}\boldsymbol{a}_1=(\underline{a}_0,\underline{a}_1,\overline{a}_2,\overline{a}_3,\underline{a}_4,\underline{a}_5,\cdots),\\[6pt] \boldsymbol{a}_2=(\overline{a}_0,\underline{a}_1,\underline{a}_2,\overline{a}_3,\overline{a}_4,\underline{a}_5,\cdots),\\[6pt] \boldsymbol{a}_3=(\underline{a}_0,\overline{a}_1,\overline{a}_2,\underline{a}_3,\underline{a}_4,\overline{a}_5,\cdots),\\[6pt] \boldsymbol{a}_4=(\overline{a}_0,\overline{a}_1,\underline{a}_2,\underline{a}_3,\overline{a}_4,\overline{a}_5,\cdots);\end{cases}\tag{7.20}$$

$$\begin{cases}f_1(s)\equiv f(s,\boldsymbol{a}_1),\\[6pt] f_2(s)\equiv f(s,\boldsymbol{a}_2),\\[6pt] f_3(s)\equiv f(s,\boldsymbol{a}_3),\\[6pt] f_4(s)\equiv f(s,\boldsymbol{a}_4).\end{cases}\tag{7.21}$$

那么，当且仅当 $f_j(\cdot)\ (j=1,2,3,4)$ 稳定时，多项式族 $f(\cdot,\boldsymbol{a})$ 是稳定的。

该定理表明：由四个多项式的稳定性就能推出整个多项式族的稳定性。这就是 Kharitonov 定理。

## 第4章 线性系统的能控性和能观性

### 4.1 线性系统的能控性和能达性（p107–113）

对系统施加控制是为了实现人们的某种既定的目标．能否选择适当的控制把系统从一个初始状态转移到另一个给定的状态，是控制理论所研究的基本问题之一，称之为能控性问题．根据系统的输出和输入来确定系统的状态，是控制理论中的另一个基本问题，称之为系统的能观性问题．本章的主要内容就是讨论这两个问题．对这两个问题的最早研究成果是 R. E. Kalman 完成的，他在 1960 年国际自动控制联合会第一届世界大会的报告中对此进行了概括．

#### 4.1 线性系统的能控性和能达性 @107

设系统的状态方程为

$$\frac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=\boldsymbol{A}\boldsymbol{x}(t)+\boldsymbol{B}\boldsymbol{u}(t),\tag{1.1}$$

这里 $\boldsymbol{A}\in\mathbb{R}^{n\times n}$，$\boldsymbol{B}\in\mathbb{R}^{n\times m}$，状态 $\boldsymbol{x}\in\mathbb{R}^n$，控制 $\boldsymbol{u}(\cdot)$ 是取值于 $\mathbb{R}^m$ 的函数．因为一旦矩阵 $\boldsymbol{A},\boldsymbol{B}$ 给定，系统 (1.1) 就给定，所以我们将系统 (1.1) 简记为 $[\boldsymbol{A},\boldsymbol{B}]$．

我们记 (1.1) 满足初始条件

$$\boldsymbol{x}(0)=\boldsymbol{x}_0$$

的解为 $\boldsymbol{x}(t)=\boldsymbol{x}(t;\boldsymbol{x}_0,\boldsymbol{u}(\cdot))$．根据常微分方程理论知道

$$\boldsymbol{x}(t;\boldsymbol{x}_0,\boldsymbol{u}(\cdot))=\mathrm{e}^{\boldsymbol{A}t}\boldsymbol{x}_0+\int_0^t\mathrm{e}^{\boldsymbol{A}(t-s)}\boldsymbol{B}\boldsymbol{u}(s)\,\mathrm{d}s.\tag{1.2}$$

**定义 1.1 (能达状态与能达性)** @107

对于 $\boldsymbol{x}_1\in\mathbb{R}^n$，如果存在控制作用 $\boldsymbol{u}(\cdot)$ 和时刻 $\tau>0$，使得

$$\boldsymbol{x}(\tau;\boldsymbol{0},\boldsymbol{u}(\cdot))=\boldsymbol{x}_1,\tag{1.3}$$

那么就称 $\boldsymbol{x}_1$ 是系统 $[\boldsymbol{A},\boldsymbol{B}]$ 的一个**能达状态**．如果任意的 $\boldsymbol{x}_1\in\mathbb{R}^n$ 都是系统 $[\boldsymbol{A},\boldsymbol{B}]$ 的能达状态，那么称系统 $[\boldsymbol{A},\boldsymbol{B}]$ 是**能达的**．

**定义 1.2 (能控状态与能控性)** @107

对于 $\boldsymbol{x}_0\in\mathbb{R}^n$，如果存在控制作用 $\boldsymbol{u}(\cdot)$ 和时刻 $\tau>0$，使得

$$\boldsymbol{x}(\tau;\boldsymbol{x}_0,\boldsymbol{u}(\cdot))=\boldsymbol{0},\tag{1.4}$$

那么就称 $\boldsymbol{x}_0$ 是系统 $[\boldsymbol{A},\boldsymbol{B}]$ 的一个**能控状态**．如果任意的 $\boldsymbol{x}_0\in\mathbb{R}^n$ 都是系统 $[\boldsymbol{A},\boldsymbol{B}]$ 的能控状态，那么称系统 $[\boldsymbol{A},\boldsymbol{B}]$ 是**能控的**．

**定义 (能达子空间与能控子空间)** @108

记 $X_a[\boldsymbol{A},\boldsymbol{B}]$ 为系统所有能达状态构成的集合，可以证明它是 $\mathbb{R}^n$ 的一个线性子空间，称之为**能达子空间**．显然系统 $[\boldsymbol{A},\boldsymbol{B}]$ 是能达的充要条件是 $X_a[\boldsymbol{A},\boldsymbol{B}]=\mathbb{R}^n$．同样，记 $X_c[\boldsymbol{A},\boldsymbol{B}]$ 为系统所有能控状态构成的集合，它也是 $\mathbb{R}^n$ 的线性子空间，称之为系统 $[\boldsymbol{A},\boldsymbol{B}]$ 的**能控子空间**，而系统 $[\boldsymbol{A},\boldsymbol{B}]$ 是能控的充要条件是 $X_c[\boldsymbol{A},\boldsymbol{B}]=\mathbb{R}^n$．

下面的结果表明：能控性是系统 $[\boldsymbol{A},\boldsymbol{B}]$ 的一个内在性质．

**命题 1.3 (状态变换下的能控性)** @108

设 $\boldsymbol{T}$ 为 $n$ 阶可逆矩阵，作

$$\widetilde{\boldsymbol{A}}=\boldsymbol{T}^{-1}\boldsymbol{A}\boldsymbol{T},\qquad \widetilde{\boldsymbol{B}}=\boldsymbol{T}^{-1}\boldsymbol{B}.$$

考虑系统

$$\frac{\mathrm{d}\widetilde{\boldsymbol{x}}(t)}{\mathrm{d}t}=\widetilde{\boldsymbol{A}}\widetilde{\boldsymbol{x}}(t)+\widetilde{\boldsymbol{B}}\boldsymbol{u}(t),\tag{1.5}$$

则系统 (1.1) 和 (1.5) 的能控性是等价的．

**注 (状态变换下的解)** @108

上述等价性的关键在于

$$\boldsymbol{T}^{-1}\boldsymbol{x}(t;\boldsymbol{x}_0,\boldsymbol{u}(\cdot))=\mathrm{e}^{\widetilde{\boldsymbol{A}}t}\boldsymbol{T}^{-1}\boldsymbol{x}_0+\int_0^t\mathrm{e}^{\widetilde{\boldsymbol{A}}(t-s)}\widetilde{\boldsymbol{B}}\boldsymbol{u}(s)\,\mathrm{d}s=\widetilde{\boldsymbol{x}}(t;\boldsymbol{T}^{-1}\boldsymbol{x}_0,\boldsymbol{u}(\cdot)),\tag{1.6}$$

其中 $\widetilde{\boldsymbol{x}}(t;\boldsymbol{T}^{-1}\boldsymbol{x}_0,\boldsymbol{u}(\cdot))$ 是系统 (1.5) 满足 $\widetilde{\boldsymbol{x}}(0)=\boldsymbol{T}^{-1}\boldsymbol{x}_0$ 的解．

**注 (状态变换下的能达性)** @108

对系统 (1.1) 作状态变换 $\widetilde{\boldsymbol{x}}=\boldsymbol{T}^{-1}\boldsymbol{x}$，则变换后的状态方程为 (1.5)．

类似地，系统 (1.1) 和 (1.5) 的能达性也是等价的．

**注 (能控性与能达性的区别)** @108

从定义 1.1 和定义 1.2 可以看出，对于系统 $[\boldsymbol{A},\boldsymbol{B}]$，能控性是指可以通过控制作用将任何初始状态 $\boldsymbol{x}_0$ 转移到 $\boldsymbol{0}$，而能达性则是指可以通过控制作用将 $\boldsymbol{0}$ 初始状态转移到任何给定的终端状态 $\boldsymbol{x}_1$．能控性和能达性是两个不同的概念，我们将会证明连续时间系统 $[\boldsymbol{A},\boldsymbol{B}]$ 的能控性和能达性是等价的．

**定义 (线性张成)** @108

设 $X$ 为非空集合，记 $\operatorname{span}X$ 为 $X$ 中任意有限个元素的线性组合全体，称为由 $X$ 张成的线性空间．

**引理 1.4 (方阵幂的线性表示)** @108

假设 $\boldsymbol{A}$ 为 $n$ 阶方阵，则对于任意的 $k\geqslant n$，

$$\boldsymbol{A}^k\in\operatorname{span}\{\boldsymbol{I},\boldsymbol{A},\cdots,\boldsymbol{A}^{n-1}\}.$$

**引理 1.5 (能控性的等价条件)** @109

对于系统 $[\boldsymbol{A},\boldsymbol{B}]$，下述条件是等价的：

（i）对于给定的 $t>0$，存在 $\boldsymbol{x}\in\mathbb{R}^n$，$\boldsymbol{x}\neq\boldsymbol{0}$，使得

$$\boldsymbol{x}^{\mathrm{T}}\mathrm{e}^{-\boldsymbol{A}s}\boldsymbol{B}\equiv\boldsymbol{0},\qquad \forall s\in[0,t];\tag{1.7}$$

（ii）存在 $\boldsymbol{x}\in\mathbb{R}^n$，$\boldsymbol{x}\neq\boldsymbol{0}$，使得

$$\boldsymbol{x}^{\mathrm{T}}\boldsymbol{A}^j\boldsymbol{B}=\boldsymbol{0},\qquad \forall j=0,1,2,\cdots;\tag{1.8}$$

（iii）矩阵 $(\boldsymbol{B},\boldsymbol{A}\boldsymbol{B},\boldsymbol{A}^2\boldsymbol{B},\cdots,\boldsymbol{A}^{n-1}\boldsymbol{B})$ 的秩小于 $n$；

（iv）对于给定的 $t>0$，存在 $\boldsymbol{x}\in\mathbb{R}^n$，$\boldsymbol{x}\neq\boldsymbol{0}$，使得 $\boldsymbol{x}^{\mathrm{T}}\boldsymbol{W}_t=\boldsymbol{0}$，其中

$$\boldsymbol{W}_t=\int_0^t\mathrm{e}^{-\boldsymbol{A}s}\boldsymbol{B}\boldsymbol{B}^{\mathrm{T}}\mathrm{e}^{-\boldsymbol{A}^{\mathrm{T}}s}\,\mathrm{d}s.\tag{1.9}$$

**定理 1.6 (能控性的判别准则)** @110

给定系统 $[\boldsymbol{A},\boldsymbol{B}]$，则下述命题等价：

（i）$[\boldsymbol{A},\boldsymbol{B}]$ 是能控的；

（ii）不存在可逆矩阵 $\boldsymbol{T}\in\mathbb{R}^{n\times n}$，使得

$$\boldsymbol{T}^{-1}\boldsymbol{A}\boldsymbol{T}=\widetilde{\boldsymbol{A}}=\begin{pmatrix}\boldsymbol{A}_1&\boldsymbol{A}_2\\ \boldsymbol{0}&\boldsymbol{A}_3\end{pmatrix},\qquad \boldsymbol{T}^{-1}\boldsymbol{B}=\begin{pmatrix}\boldsymbol{B}_1\\ \boldsymbol{0}\end{pmatrix},\tag{1.13}$$

即不存在状态变换 $\boldsymbol{x}=\boldsymbol{T}\boldsymbol{y}$，使系统成为

$$\frac{\mathrm{d}}{\mathrm{d}t}\begin{pmatrix}\boldsymbol{y}_1(t)\\ \boldsymbol{y}_2(t)\end{pmatrix}=\begin{pmatrix}\boldsymbol{A}_1&\boldsymbol{A}_2\\ \boldsymbol{0}&\boldsymbol{A}_3\end{pmatrix}\begin{pmatrix}\boldsymbol{y}_1(t)\\ \boldsymbol{y}_2(t)\end{pmatrix}+\begin{pmatrix}\boldsymbol{B}_1\\ \boldsymbol{0}\end{pmatrix}\boldsymbol{u}(t),\tag{1.14}$$

这里 $\boldsymbol{y}_1(\cdot),\boldsymbol{y}_2(\cdot)$ 是分别取值于 $\mathbb{R}^{n-k}$ 和 $\mathbb{R}^k$ 的函数，$1\leqslant k\leqslant n$；

（iii）矩阵 $(\boldsymbol{B},\boldsymbol{A}\boldsymbol{B},\boldsymbol{A}^2\boldsymbol{B},\cdots,\boldsymbol{A}^{n-1}\boldsymbol{B})$ 的秩等于 $n$；

（iv）对于 $t>0$，不存在 $\boldsymbol{x}_0\neq\boldsymbol{0}$，使得

$$\boldsymbol{x}_0^{\mathrm{T}}\mathrm{e}^{-\boldsymbol{A}s}\boldsymbol{B}\equiv\boldsymbol{0},\qquad \forall s\in[0,t];$$

（v）对于 $t>0$，矩阵 $\boldsymbol{W}_t$ 是正定的；

（vi）对于矩阵 $\boldsymbol{A}$ 的任一特征值 $\lambda$，矩阵 $(\lambda\boldsymbol{I}-\boldsymbol{A},\boldsymbol{B})$ 的秩都等于 $n$；

（vii）对于所有的 $\lambda\in\mathbb{C}$，矩阵 $(\lambda\boldsymbol{I}-\boldsymbol{A},\boldsymbol{B})$ 的秩都等于 $n$．

**命题 (由 $\boldsymbol{W}_t$ 给出的转移控制)** @111

若 $\boldsymbol{W}_t$ 正定，则对任意的 $\boldsymbol{x}_0\in\mathbb{R}^n$，只要取

$$\boldsymbol{u}(s)=-\boldsymbol{B}^{\mathrm{T}}\mathrm{e}^{-\boldsymbol{A}^{\mathrm{T}}s}\boldsymbol{W}_t^{-1}\boldsymbol{x}_0,\qquad s\geqslant0,$$

就有

$$\boldsymbol{x}(t;\boldsymbol{x}_0,\boldsymbol{u}(\cdot))=\mathrm{e}^{\boldsymbol{A}t}\left[\boldsymbol{x}_0-\int_0^t\mathrm{e}^{-\boldsymbol{A}s}\boldsymbol{B}\boldsymbol{B}^{\mathrm{T}}\mathrm{e}^{-\boldsymbol{A}^{\mathrm{T}}s}\,\mathrm{d}s\,\boldsymbol{W}_t^{-1}\boldsymbol{x}_0\right]=\boldsymbol{0},$$

所以系统 $[\boldsymbol{A},\boldsymbol{B}]$ 是能控的．

**注 (不能控时的状态分解)** @111

若存在状态变换使系统成为 (1.14) 的形状，则由于 $\boldsymbol{y}_2(t)=\mathrm{e}^{\boldsymbol{A}_3t}\boldsymbol{y}_2(0)$，控制作用不能影响变量 $\boldsymbol{y}_2$，从而控制作用不能把形如

$$\begin{pmatrix}\boldsymbol{0}\\ \boldsymbol{y}_2\end{pmatrix}\neq\boldsymbol{0}$$

的初始状态迁移到 $\boldsymbol{0}$，故 (1.14) 是不能控的．由此，命题 (ii) 是系统 $[\boldsymbol{A},\boldsymbol{B}]$ 能控的必要条件．

**定理 1.7 (能控性与区间无关)** @112

如果系统 $[\boldsymbol{A},\boldsymbol{B}]$ 能控，则对于任何正数 $t$，系统在区间 $[0,t]$ 上是能控的，即对于任意的 $\boldsymbol{x}_0\in\mathbb{R}^n$，存在控制作用 $\boldsymbol{u}(\cdot)$，使得

$$\boldsymbol{x}(t;\boldsymbol{x}_0,\boldsymbol{u}(\cdot))=\boldsymbol{0}.$$

**定理 1.8 (能达性的判别准则)** @112

给定系统 $[\boldsymbol{A},\boldsymbol{B}]$，则下述命题等价：

（i）$[\boldsymbol{A},\boldsymbol{B}]$ 是能达的；

（ii）不存在可逆矩阵 $\boldsymbol{T}\in\mathbb{R}^{n\times n}$，使得 (1.13) 成立，即不存在状态变换 $\boldsymbol{x}=\boldsymbol{T}\boldsymbol{y}$，使得系统 $[\boldsymbol{A},\boldsymbol{B}]$ 变为 (1.14)；

（iii）矩阵 $(\boldsymbol{B},\boldsymbol{A}\boldsymbol{B},\boldsymbol{A}^2\boldsymbol{B},\cdots,\boldsymbol{A}^{n-1}\boldsymbol{B})$ 的秩等于 $n$；

（iv）对于 $t>0$，不存在 $\boldsymbol{x}\neq\boldsymbol{0}$，使得

$$\boldsymbol{x}^{\mathrm{T}}\mathrm{e}^{-\boldsymbol{A}s}\boldsymbol{B}\equiv\boldsymbol{0},\qquad \forall s\in[0,t];$$

（v）对于 $t>0$，矩阵 $\boldsymbol{W}_t$ 是正定的；

（vi）对于矩阵 $\boldsymbol{A}$ 的任一特征值 $\lambda$，矩阵 $(\lambda\boldsymbol{I}-\boldsymbol{A},\boldsymbol{B})$ 的秩都等于 $n$；

（vii）对于所有的 $\lambda\in\mathbb{C}$，矩阵 $(\lambda\boldsymbol{I}-\boldsymbol{A},\boldsymbol{B})$ 的秩都等于 $n$．

本定理的证明几乎与定理 1.6 的证明是一样的，我们将其留给读者．

**定理 1.9 (能控性与能达性的等价)** @113

系统 $[\boldsymbol{A},\boldsymbol{B}]$ 的能控性和能达性是等价的．

**推论 1.10 (任意两状态间的转移)** @113

假设系统 $[\boldsymbol{A},\boldsymbol{B}]$ 是能控的或能达的，那么对于给定的 $t>0$ 与 $\boldsymbol{x}_0,\boldsymbol{x}_1\in\mathbb{R}^n$，存在控制作用 $\boldsymbol{u}(\cdot)$，使得

$$\boldsymbol{x}(t;\boldsymbol{x}_0,\boldsymbol{u}(\cdot))=\boldsymbol{x}_1.$$

**例 1.11 (不能控的二阶系统)** @113

假定

$$\boldsymbol{A}=\begin{pmatrix}0&0\\-1&0\end{pmatrix},\qquad \boldsymbol{B}=\begin{pmatrix}0\\1\end{pmatrix},$$

则 $\operatorname{rank}(\boldsymbol{B},\boldsymbol{A}\boldsymbol{B})=1<2$，且 $\boldsymbol{W}_t=\begin{pmatrix}0&0\\0&t\end{pmatrix}$ 非正定；取 $\lambda=0$，又有 $\operatorname{rank}(\lambda\boldsymbol{I}-\boldsymbol{A},\boldsymbol{B})=1<2$．若取 $\boldsymbol{T}=\begin{pmatrix}0&1\\1&0\end{pmatrix}$，则 $\boldsymbol{A}_3=0$．故由定理 1.6，系统 $[\boldsymbol{A},\boldsymbol{B}]$ 不能控．

### 4.2 能控性与能稳性（p114–121）

#### 4.2 能控性与能稳性 @114

对于系统 $[\boldsymbol{A},\boldsymbol{B}]$，由常数变易公式可得它满足初始条件 $\boldsymbol{x}(0)=\boldsymbol{x}_0$ 的解为

$$\boldsymbol{x}(t;\boldsymbol{x}_0,\boldsymbol{u}(\cdot))=\mathrm{e}^{\boldsymbol{A}t}\boldsymbol{x}_0+\int_0^t\mathrm{e}^{\boldsymbol{A}(t-s)}\boldsymbol{B}\boldsymbol{u}(s)\,\mathrm{d}s.\tag{2.1}$$

**定义 (稳定的矩阵)** @114

当 $\boldsymbol{A}$ 的所有特征值均具有负实部时，称 $\boldsymbol{A}$ 是**稳定的**．

**命题 (稳定系统的状态估计)** @114

设 $\boldsymbol{A}$ 是稳定的．则对于一致有界的控制作用 $\boldsymbol{u}(\cdot)$，相应的状态轨线也是一致有界的．而当

$$\int_0^{+\infty}|\boldsymbol{u}(t)|^p\,\mathrm{d}t<+\infty\qquad(p\in[1,+\infty))$$

（$p$ 为某个常数）时，还有

$$\lim_{t\to+\infty}\boldsymbol{x}(t;\boldsymbol{x}_0,\boldsymbol{u}(\cdot))=\boldsymbol{0}.$$

特别地，对于 $\boldsymbol{u}(t)\equiv\boldsymbol{0}$，有

$$\boldsymbol{x}(t;\boldsymbol{x}_0,\boldsymbol{0})=\mathrm{e}^{\boldsymbol{A}t}\boldsymbol{x}_0\to\boldsymbol{0}\qquad(t\to+\infty).$$

所以当 $\boldsymbol{A}$ 稳定时，系统是一种良好的状态．原书指出这两条结论的证明留作习题．

**构造 (线性状态反馈与镇定问题)** @114

当 $\boldsymbol{A}$ 的某些特征值具有正实部时，上述好的性质就没有了．此时我们可以试图取形如

$$\boldsymbol{u}(t)=-\boldsymbol{K}\boldsymbol{x}(t)+\boldsymbol{v}(t)$$

的控制，称之为**线性状态反馈控制**．在这样的控制下，原来的系统变为

$$\frac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=(\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K})\boldsymbol{x}(t)+\boldsymbol{B}\boldsymbol{v}(t).\tag{2.2}$$

于是我们自然地问：是否存在矩阵 $\boldsymbol{K}\in\mathbb{R}^{m\times n}$ 使得 $\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K}$ 是稳定的呢？这样的问题称为**系统镇定问题**．

我们首先考虑单输入系统，即 $m=1$ 的特殊情形．记 $\boldsymbol{B}\equiv\boldsymbol{b}$，则系统 $[\boldsymbol{A},\boldsymbol{B}]$ 就是 $[\boldsymbol{A},\boldsymbol{b}]$，即

$$\frac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=\boldsymbol{A}\boldsymbol{x}(t)+\boldsymbol{b}u(t).\tag{2.3}$$

**引理 2.1 (单输入系统的镇定)** @114

对于系统 $[\boldsymbol{A},\boldsymbol{b}]$，设

$$\det(\boldsymbol{b},\boldsymbol{A}\boldsymbol{b},\boldsymbol{A}^2\boldsymbol{b},\cdots,\boldsymbol{A}^{n-1}\boldsymbol{b})\neq0,\tag{2.4}$$

那么存在向量 $\boldsymbol{k}\in\mathbb{R}^n$，使得 $\boldsymbol{A}-\boldsymbol{b}\boldsymbol{k}^{\mathrm{T}}$ 是稳定的．

**构造 (单输入系统的能控标准形)** @115

设矩阵 $\boldsymbol{A}$ 的特征多项式为 $\det(s\boldsymbol{I}-\boldsymbol{A})=s^n+a_1s^{n-1}+\cdots+a_n$．由 Cayley–Hamilton 定理，$\boldsymbol{A}^n+a_1\boldsymbol{A}^{n-1}+\cdots+a_n\boldsymbol{I}=\boldsymbol{0}$，所以

$$\boldsymbol{A}^n\boldsymbol{b}+a_1\boldsymbol{A}^{n-1}\boldsymbol{b}+\cdots+a_n\boldsymbol{b}=\boldsymbol{0}.\tag{2.5}$$

置

$$\begin{cases}\boldsymbol{e}_1=\boldsymbol{A}^{n-1}\boldsymbol{b}+a_1\boldsymbol{A}^{n-2}\boldsymbol{b}+\cdots+a_{n-1}\boldsymbol{b},\\ \cdots\cdots\cdots\cdots\cdots\cdots,\\ \boldsymbol{e}_{n-1}=\boldsymbol{A}\boldsymbol{b}+a_1\boldsymbol{b},\\ \boldsymbol{e}_n=\boldsymbol{b},\end{cases}\tag{2.6}$$

则

$$(\boldsymbol{e}_1,\boldsymbol{e}_2,\cdots,\boldsymbol{e}_n)=(\boldsymbol{b},\boldsymbol{A}\boldsymbol{b},\boldsymbol{A}^2\boldsymbol{b},\cdots,\boldsymbol{A}^{n-1}\boldsymbol{b})\boldsymbol{S},$$

其中

$$\boldsymbol{S}=\begin{pmatrix}a_{n-1}&a_{n-2}&\cdots&a_1&1\\ a_{n-2}&a_{n-3}&\cdots&1&0\\ \vdots&\vdots&&\vdots&\vdots\\ a_1&1&\cdots&0&0\\ 1&0&\cdots&0&0\end{pmatrix}.$$

因为 (2.4) 成立，所以 $\boldsymbol{e}_1,\boldsymbol{e}_2,\cdots,\boldsymbol{e}_n$ 是线性无关的，即它们构成 $\mathbb{R}^n$ 中的一组基向量．令 $\boldsymbol{T}=(\boldsymbol{e}_1,\boldsymbol{e}_2,\cdots,\boldsymbol{e}_n)$，则在状态变换 $\boldsymbol{T}\boldsymbol{y}=\boldsymbol{x}$ 下，系统 (2.3) 化为

$$\frac{\mathrm{d}\boldsymbol{y}(t)}{\mathrm{d}t}=\widetilde{\boldsymbol{A}}\boldsymbol{y}(t)+\widetilde{\boldsymbol{b}}u(t),$$

其中

$$\widetilde{\boldsymbol{A}}=\begin{pmatrix}0&1&0&\cdots&0\\ 0&0&1&\cdots&0\\ \vdots&\vdots&\vdots&&\vdots\\ 0&0&0&\cdots&1\\ -a_n&-a_{n-1}&\cdots&-a_2&-a_1\end{pmatrix},\qquad \widetilde{\boldsymbol{b}}=\begin{pmatrix}0\\0\\\vdots\\0\\1\end{pmatrix},$$

即

$$\begin{cases}\dfrac{\mathrm{d}y_1(t)}{\mathrm{d}t}=y_2(t),\\ \dfrac{\mathrm{d}y_2(t)}{\mathrm{d}t}=y_3(t),\\ \cdots\cdots\cdots\cdots,\\ \dfrac{\mathrm{d}y_{n-1}(t)}{\mathrm{d}t}=y_n(t),\\ \dfrac{\mathrm{d}y_n(t)}{\mathrm{d}t}=-a_ny_1(t)-a_{n-1}y_2(t)-\cdots-a_1y_n(t)+u(t).\end{cases}\tag{2.7}$$

**命题 (能控标准形下的极点配置)** @116

承上，当控制作用 $u(\cdot)$ 取下述反馈形式

$$u(t)=-\sum_{j=1}^n\alpha_{n-j+1}y_j(t)$$

时，系统 (2.7) 进一步成为

$$\begin{cases}\dfrac{\mathrm{d}y_1(t)}{\mathrm{d}t}=y_2(t),\\ \dfrac{\mathrm{d}y_2(t)}{\mathrm{d}t}=y_3(t),\\ \cdots\cdots\cdots\cdots,\\ \dfrac{\mathrm{d}y_{n-1}(t)}{\mathrm{d}t}=y_n(t),\\ \dfrac{\mathrm{d}y_n(t)}{\mathrm{d}t}=-\sum_{j=1}^n(a_{n-j+1}+\alpha_{n-j+1})y_j(t).\end{cases}\tag{2.8}$$

显然，该系统的特征多项式为

$$s^n+(a_1+\alpha_1)s^{n-1}+\cdots+(a_n+\alpha_n)=0.\tag{2.9}$$

容易知道，对于任何稳定的多项式

$$f(s)=s^n+\beta_1s^{n-1}+\cdots+\beta_n,$$

取

$$\alpha_j=\beta_j-a_j,\qquad j=1,2,\cdots,n,\tag{2.10}$$

那么系统 (2.8) 的特征多项式 (2.9) 便成为一个稳定的多项式．由于状态变换不改变特征多项式，再回到原来状态只要取

$$\boldsymbol{k}=(\boldsymbol{T}^{-1})^{\mathrm{T}}(\alpha_n,\alpha_{n-1},\cdots,\alpha_1)^{\mathrm{T}},$$

就可以使得 $\boldsymbol{A}-\boldsymbol{b}\boldsymbol{k}^{\mathrm{T}}$ 稳定，从而引理 2.1 成立．

**注 (极点配置的更强形式)** @117

我们实际上证明了更强的结论：对任何给定的 $n$ 次实系数多项式，在引理 2.1 的条件下，一定存在反馈控制，使得闭环系统 (2.8) 的特征多项式为这个给定的多项式．

**命题 (反馈不改变能控性)** @117

记系统 (2.2) 为 $[\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K},\boldsymbol{B}]$．如果系统 $[\boldsymbol{A},\boldsymbol{B}]$ 是能控的，那么系统 $[\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K},\boldsymbol{B}]$ 也是能控的；反之也对．由此得到：如果矩阵

$$(\boldsymbol{B},\boldsymbol{A}\boldsymbol{B},\boldsymbol{A}^2\boldsymbol{B},\cdots,\boldsymbol{A}^{n-1}\boldsymbol{B})$$

的秩等于 $n$，那么矩阵

$$(\boldsymbol{B},(\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K})\boldsymbol{B},(\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K})^2\boldsymbol{B},\cdots,(\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K})^{n-1}\boldsymbol{B})$$

的秩也等于 $n$．

**定理 2.2 (极点配置定理)** @117

假设系统 $[\boldsymbol{A},\boldsymbol{B}]$ 是能控的，那么对于任意给定的 $n$ 次实系数多项式 $\varphi(\lambda)=\lambda^n+a_1\lambda^{n-1}+\cdots+a_n$，存在反馈控制 $\boldsymbol{u}(t)=-\boldsymbol{K}\boldsymbol{x}(t)+\boldsymbol{v}(t)$，使得闭环系统 (2.2) 的特征多项式是 $\varphi(\lambda)$．

**命题 (能控系统的向量组分解)** @118

设 $\boldsymbol{B}$ 的第一列 $\boldsymbol{b}_1$ 非零，令 $n_1$ 为使

$$\boldsymbol{A}^k\boldsymbol{b}_1\in\operatorname{span}\{\boldsymbol{b}_1,\boldsymbol{A}\boldsymbol{b}_1,\cdots,\boldsymbol{A}^{k-1}\boldsymbol{b}_1\}$$

成立的最小正整数 $k$，并记

$$X_1=\operatorname{span}\{\boldsymbol{b}_1,\boldsymbol{A}\boldsymbol{b}_1,\cdots,\boldsymbol{A}^{n_1-1}\boldsymbol{b}_1\},$$

则 $X_1$ 为 $\boldsymbol{A}$ 的不变子空间．如果 $n_1<n$，则在 $\boldsymbol{B}$ 中必存在列向量 $\boldsymbol{b}_2\notin X_1$；否则，若任何 $\boldsymbol{B}$ 的列向量 $\boldsymbol{b}\in X_1$，那么 $\boldsymbol{A}^k\boldsymbol{b}\in X_1$，从而

$$\operatorname{rank}(\boldsymbol{B},\boldsymbol{A}\boldsymbol{B},\cdots,\boldsymbol{A}^{n-1}\boldsymbol{B})<n,$$

与系统能控矛盾．记 $n_2$ 为使

$$\boldsymbol{A}^k\boldsymbol{b}_2\in\operatorname{span}(X_1\cup\{\boldsymbol{b}_2,\boldsymbol{A}\boldsymbol{b}_2,\cdots,\boldsymbol{A}^{k-1}\boldsymbol{b}_2\})$$

成立的最小正整数 $k$，定义

$$X_2=\operatorname{span}(X_1\cup\{\boldsymbol{b}_2,\boldsymbol{A}\boldsymbol{b}_2,\cdots,\boldsymbol{A}^{n_2-1}\boldsymbol{b}_2\}),$$

则 $X_2$ 也是 $\boldsymbol{A}$ 的不变子空间．依此类推，必存在 $n_r$，使得 $n_1+n_2+\cdots+n_r=n$，而向量组

$$\boldsymbol{b}_1,\boldsymbol{A}\boldsymbol{b}_1,\cdots,\boldsymbol{A}^{n_1-1}\boldsymbol{b}_1,\boldsymbol{b}_2,\cdots,\boldsymbol{A}^{n_2-1}\boldsymbol{b}_2,\cdots,\boldsymbol{A}^{n_r-1}\boldsymbol{b}_r\tag{2.11}$$

是线性无关的．

**构造 (单输入化的基与反馈矩阵 $\boldsymbol{F}$)** @118

令

$$\begin{aligned}&\boldsymbol{e}_1=\boldsymbol{b}_1,\quad \boldsymbol{e}_2=\boldsymbol{A}\boldsymbol{e}_1+\boldsymbol{b}_1,\ \cdots,\ \boldsymbol{e}_{n_1}=\boldsymbol{A}\boldsymbol{e}_{n_1-1}+\boldsymbol{b}_1,\\&\boldsymbol{e}_{n_1+1}=\boldsymbol{A}\boldsymbol{e}_{n_1}+\boldsymbol{b}_2,\quad \boldsymbol{e}_{n_1+2}=\boldsymbol{A}\boldsymbol{e}_{n_1+1}+\boldsymbol{b}_2,\ \cdots,\ \boldsymbol{e}_{n_1+n_2}=\boldsymbol{A}\boldsymbol{e}_{n_1+n_2-1}+\boldsymbol{b}_2,\\&\cdots\cdots\cdots\cdots,\\&\boldsymbol{e}_{n-n_r+1}=\boldsymbol{A}\boldsymbol{e}_{n-n_r}+\boldsymbol{b}_r,\ \cdots,\ \boldsymbol{e}_n=\boldsymbol{A}\boldsymbol{e}_{n-1}+\boldsymbol{b}_r.\end{aligned}\tag{2.12}$$

由于从向量组 (2.11) 到向量组

$$\boldsymbol{e}_1,\boldsymbol{e}_2,\cdots,\boldsymbol{e}_{n_1},\boldsymbol{e}_{n_1+1},\cdots,\boldsymbol{e}_{n-n_r+1},\cdots,\boldsymbol{e}_n\tag{2.13}$$

的线性变换矩阵是主对角元全为 $1$ 的上三角形矩阵，所以向量组 (2.13) 是线性无关的．(2.13) 中的向量满足关系

$$\boldsymbol{e}_{j+1}=\boldsymbol{A}\boldsymbol{e}_j+\widehat{\boldsymbol{b}}_j,\qquad\forall j=1,2,\cdots,n-1,\tag{2.14}$$

这里 $\widehat{\boldsymbol{b}}_j$ 是矩阵 $\boldsymbol{B}$ 的某一个列向量，所以存在 $\boldsymbol{u}_j\in\mathbb{R}^m$ 使得

$$\widehat{\boldsymbol{b}}_j=\boldsymbol{B}\boldsymbol{u}_j,\qquad\forall j=1,2,\cdots,n-1.\tag{2.15}$$

设矩阵 $\boldsymbol{F}\in\mathbb{R}^{m\times n}$ 由下式定义：

$$\boldsymbol{F}=-(\boldsymbol{u}_1,\boldsymbol{u}_2,\cdots,\boldsymbol{u}_n)(\boldsymbol{e}_1,\boldsymbol{e}_2,\cdots,\boldsymbol{e}_n)^{-1},$$

则

$$\boldsymbol{F}\boldsymbol{e}_j=-\boldsymbol{u}_j,\qquad\forall j=1,2,\cdots,n,$$

从而 $\boldsymbol{e}_{j+1}=(\boldsymbol{A}-\boldsymbol{B}\boldsymbol{F})\boldsymbol{e}_j$，$j=1,2,\cdots,n-1$．

**命题 (定理 2.2 中的反馈增益)** @119

承接上面的构造，

$$\boldsymbol{e}_j=(\boldsymbol{A}-\boldsymbol{B}\boldsymbol{F})^{j-1}\boldsymbol{e}_1=(\boldsymbol{A}-\boldsymbol{B}\boldsymbol{F})^{j-1}\boldsymbol{b}_1,\qquad\forall j=1,2,\cdots,n.$$

由于 $\boldsymbol{e}_1,\boldsymbol{e}_2,\cdots,\boldsymbol{e}_{n_1},\cdots,\boldsymbol{e}_n$ 是线性无关的，所以由定理 1.6，系统

$$\frac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=(\boldsymbol{A}-\boldsymbol{B}\boldsymbol{F})\boldsymbol{x}(t)+\boldsymbol{b}_1u(t)$$

是能控的．根据引理 2.1，存在 $\boldsymbol{k}\in\mathbb{R}^n$，使得矩阵 $\boldsymbol{A}-\boldsymbol{B}\boldsymbol{F}-\boldsymbol{b}_1\boldsymbol{k}^{\mathrm{T}}$ 的特征多项式就是 $\varphi(\lambda)=\lambda^n+a_1\lambda^{n-1}+\cdots+a_n$．记 $\widetilde{\boldsymbol{e}}_1=(1,0,\cdots,0)^{\mathrm{T}}$，由于

$$\boldsymbol{b}_1=\boldsymbol{B}\widetilde{\boldsymbol{e}}_1,$$

故若置

$$\boldsymbol{K}=\boldsymbol{F}+\widetilde{\boldsymbol{e}}_1\boldsymbol{k}^{\mathrm{T}},$$

那么 $\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K}$ 的特征多项式就是 $\varphi(\lambda)$．

**注 (极点配置的含义)** @119

该定理表明：如果系统 $[\boldsymbol{A},\boldsymbol{B}]$ 是能控的，那么可以用反馈控制使得闭环系统的特征多项式为任意给定的 $n$ 次实系数多项式．从而可以选取适当的反馈控制使得闭环系统稳定，即能控系统是可以镇定的．由于系统

$$\frac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=(\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K})\boldsymbol{x}(t)+\boldsymbol{B}\boldsymbol{v}(t)\tag{2.16}$$

的传递矩阵是 $(s\boldsymbol{I}-\boldsymbol{A}+\boldsymbol{B}\boldsymbol{K})^{-1}\boldsymbol{B}$，矩阵 $\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K}$ 的特征多项式的零点称为闭环系统的极点，所以上述结果也可表述为：系统 (2.16) 的极点可以任意配置，即可以使 (2.16) 的特征多项式为任意给定的实系数多项式．

**定义 (子空间 $X$ 与能达集 $\widehat{X}_t$)** @119

下面我们在不要求系统 $[\boldsymbol{A},\boldsymbol{B}]$ 能控的情况下进一步研究它的镇定问题．为此，记

$$X=\operatorname{span}\{\boldsymbol{B},\boldsymbol{A}\boldsymbol{B},\boldsymbol{A}^2\boldsymbol{B},\cdots,\boldsymbol{A}^{n-1}\boldsymbol{B}\},$$

即 $X$ 是矩阵 $(\boldsymbol{B},\boldsymbol{A}\boldsymbol{B},\boldsymbol{A}^2\boldsymbol{B},\cdots,\boldsymbol{A}^{n-1}\boldsymbol{B})$ 的列向量张成的线性子空间．

假设 $t>0$，记 $U_t\triangleq L^1(0,t;\mathbb{R}^m)$ 为 $[0,t]$ 上取值为 $\mathbb{R}^m$ 的可积函数全体．我们再定义

$$\widehat{X}_t=\left\{\int_0^t\mathrm{e}^{\boldsymbol{A}(t-s)}\boldsymbol{B}\boldsymbol{u}(s)\,\mathrm{d}s\ \middle|\ \boldsymbol{u}(\cdot)\in U_t\right\},$$

容易验证 $X$ 和 $\widehat{X}_t$ 均为 $\mathbb{R}^n$ 的线性子空间，下面的命题告诉我们它们是相等的．

**命题 2.3 ($X$ 与能达集相等)** @120

给定系统 $[\boldsymbol{A},\boldsymbol{B}]$，则对任何 $t>0$，$X=\widehat{X}_t$．

**命题 (能达子空间与能控子空间都等于 $X$)** @120

由命题 2.3 可知，$\forall t>0$，

$$\widehat{X}_t=\bigcup_{\tau>0}\widehat{X}_\tau=X_a[\boldsymbol{A},\boldsymbol{B}].$$

仿照命题 2.3，易证

$$X=\left\{\int_0^t\mathrm{e}^{-\boldsymbol{A}s}\boldsymbol{B}\boldsymbol{u}(s)\,\mathrm{d}s\ \middle|\ \boldsymbol{u}(\cdot)\in U_t\right\},\tag{2.19}$$

于是 $\forall\boldsymbol{x}_0\in X$，必存在 $\boldsymbol{u}(\cdot)\in U_t$，使得

$$\boldsymbol{x}_0=\int_0^t\mathrm{e}^{-\boldsymbol{A}s}\boldsymbol{B}[-\boldsymbol{u}(s)]\,\mathrm{d}s.$$

于是，系统 $[\boldsymbol{A},\boldsymbol{B}]$ 以 $\boldsymbol{x}_0$ 为初值的解为

$$\boldsymbol{x}(t;\boldsymbol{x}_0,\boldsymbol{u}(\cdot))=\mathrm{e}^{\boldsymbol{A}t}\boldsymbol{x}_0+\int_0^t\mathrm{e}^{\boldsymbol{A}(t-s)}\boldsymbol{B}\boldsymbol{u}(s)\,\mathrm{d}s=\boldsymbol{0},$$

所以 $X=X_c[\boldsymbol{A},\boldsymbol{B}]$．显然，系统 $[\boldsymbol{A},\boldsymbol{B}]$ 能控的充要条件是 $X=\mathbb{R}^n$．命题 2.3 还说明能控子空间与能达子空间是相同的，即 $X_c[\boldsymbol{A},\boldsymbol{B}]=X_a[\boldsymbol{A},\boldsymbol{B}]$．

**定义 2.4 (能稳)** @121

对于系统 $[\boldsymbol{A},\boldsymbol{B}]$，若存在矩阵 $\boldsymbol{K}\in\mathbb{R}^{m\times n}$，使得 $\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K}$ 稳定，则称系统 $[\boldsymbol{A},\boldsymbol{B}]$ 是**能稳的**．

**命题 (不能控部分的极点不可移动)** @121

若系统 $[\boldsymbol{A},\boldsymbol{B}]$ 不能控，由定理 1.6 知，存在可逆矩阵 $\boldsymbol{T}\in\mathbb{R}^{n\times n}$，使得

$$\boldsymbol{T}^{-1}\boldsymbol{A}\boldsymbol{T}=\begin{pmatrix}\boldsymbol{A}_1&\boldsymbol{A}_2\\ \boldsymbol{0}&\boldsymbol{A}_3\end{pmatrix},\qquad \boldsymbol{T}^{-1}\boldsymbol{B}=\begin{pmatrix}\boldsymbol{B}_1\\ \boldsymbol{0}\end{pmatrix},\tag{2.20}$$

其中 $\boldsymbol{A}_1\in\mathbb{R}^{(n-k)\times(n-k)}$，$\boldsymbol{A}_2\in\mathbb{R}^{(n-k)\times k}$，$\boldsymbol{A}_3\in\mathbb{R}^{k\times k}$，$\boldsymbol{B}_1\in\mathbb{R}^{(n-k)\times m}$．对于矩阵 $\boldsymbol{K}\in\mathbb{R}^{m\times n}$，设 $\boldsymbol{K}\boldsymbol{T}=(\boldsymbol{K}_1,\boldsymbol{K}_2)$，$\boldsymbol{K}_1\in\mathbb{R}^{m\times(n-k)}$，$\boldsymbol{K}_2\in\mathbb{R}^{m\times k}$，则

$$\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K}=\boldsymbol{T}\begin{pmatrix}\boldsymbol{A}_1-\boldsymbol{B}_1\boldsymbol{K}_1&\boldsymbol{A}_2-\boldsymbol{B}_1\boldsymbol{K}_2\\ \boldsymbol{0}&\boldsymbol{A}_3\end{pmatrix}\boldsymbol{T}^{-1},\tag{2.21}$$

故

$$\det(\lambda\boldsymbol{I}-(\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K}))=\det(\lambda\boldsymbol{I}-(\boldsymbol{A}_1-\boldsymbol{B}_1\boldsymbol{K}_1))\det(\lambda\boldsymbol{I}-\boldsymbol{A}_3).\tag{2.22}$$

从而系统相应于 $\boldsymbol{A}_3$ 的特征值是不能通过反馈控制被移动的．

**推论 2.5 (能控与极点任意配置的等价)** @121

系统 $[\boldsymbol{A},\boldsymbol{B}]$ 能控的充要条件是系统的极点可以任意配置．

**注 (能控与能稳的关系)** @121

由上可知，如果系统 $[\boldsymbol{A},\boldsymbol{B}]$ 能控，则它是能稳的．当系统 $[\boldsymbol{A},\boldsymbol{B}]$ 不能控时，它不一定是能稳的．但有很多不能控系统是能稳的，例如，当 $\boldsymbol{A}$ 本身稳定的时候，只需要取 $\boldsymbol{K}=\boldsymbol{0}$ 就可使 $\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K}$ 稳定，于是 $[\boldsymbol{A},\boldsymbol{B}]$ 能稳．现在要问 $[\boldsymbol{A},\boldsymbol{B}]$ 能稳的条件是什么？根据 (2.22) 可得下述定理：

**定理 2.6 (能稳性的判别准则)** @121

给定系统 $[\boldsymbol{A},\boldsymbol{B}]$，则下述命题等价：

（i）$[\boldsymbol{A},\boldsymbol{B}]$ 是能稳的；

（ii）存在可逆矩阵 $\boldsymbol{T}\in\mathbb{R}^{n\times n}$，使得 (2.20) 中的矩阵 $\boldsymbol{A}_3$ 是稳定的；

（iii）$\boldsymbol{A}$ 的实部非负特征值全为 (2.20) 中的矩阵 $\boldsymbol{A}_1$ 的特征值；

（iv）$\forall\operatorname{Re}\lambda\geqslant0$，$\operatorname{rank}(\lambda\boldsymbol{I}-\boldsymbol{A},\boldsymbol{B})=n$；

（v）对于矩阵 $\boldsymbol{A}$ 的任一具有非负实部的特征值 $\lambda$，$\operatorname{rank}(\lambda\boldsymbol{I}-\boldsymbol{A},\boldsymbol{B})=n$．

上述定理的证明留作练习．

**例 2.7 (不能控但能稳的二阶系统)** @121

假定

$$\boldsymbol{A}=\begin{pmatrix}-1&0\\1&0\end{pmatrix},\qquad \boldsymbol{B}=\begin{pmatrix}0\\1\end{pmatrix},$$

由于

$$\operatorname{rank}(\boldsymbol{B},\boldsymbol{A}\boldsymbol{B})=\operatorname{rank}\begin{pmatrix}0&0\\1&0\end{pmatrix}=1<2,$$

故系统不能控．而系统的能控子空间

$$X=\operatorname{span}\left\{\begin{pmatrix}0\\1\end{pmatrix}\right\},\qquad X^{\perp}=\operatorname{span}\left\{\begin{pmatrix}1\\0\end{pmatrix}\right\},$$

于是我们取 $\boldsymbol{T}=\begin{pmatrix}0&1\\1&0\end{pmatrix}$，则有

$$\boldsymbol{A}\boldsymbol{T}=\begin{pmatrix}0&-1\\0&1\end{pmatrix}=\boldsymbol{T}\begin{pmatrix}0&1\\0&-1\end{pmatrix},$$

由于 $\boldsymbol{A}_3=-1$ 稳定，故系统 $[\boldsymbol{A},\boldsymbol{B}]$ 能稳．

对上述例子，我们还可以假设 $\boldsymbol{K}=(k_1\ k_2)$，用待定系数法计算：

$$\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K}=\begin{pmatrix}-1&0\\1&0\end{pmatrix}-\begin{pmatrix}0\\1\end{pmatrix}(k_1\ k_2)=\begin{pmatrix}-1&0\\1-k_1&-k_2\end{pmatrix},$$

只要选取 $k_2$ 为正数就能使系统稳定，所以系统是能稳的．

### 4.3 线性系统的能观性与能检性（p122–128）

**定义 3.1** @122

对于系统 (3.1) 和 (3.2)，若存在时刻 $\tau>0$，根据输入和输出 $\boldsymbol{u}(t),\boldsymbol{y}(t)$，$t\in[0,\tau]$，能够唯一地确定初始状态 $\boldsymbol{x}_0$，则称系统是**能观测的**，简称**能观**，否则称系统是**不能观的**。

**命题 (观测方程可设 $\boldsymbol{D}=\boldsymbol{0}$)** @123

在观测方程 (3.2) 中假设 $\boldsymbol{D}=\boldsymbol{0}$，不会影响对能观性的研究。这是因为，控制作用 $\boldsymbol{u}(t)$ 和观测量 $\boldsymbol{y}(t)$ 都是能观测的。置

$$\boldsymbol{z}(t)=\boldsymbol{C}\boldsymbol{x}(t),$$

那么

$$\boldsymbol{z}(t)=\boldsymbol{y}(t)-\boldsymbol{D}\boldsymbol{u}(t)$$

也是能观测的。因此我们可以假设 (3.2) 中的 $\boldsymbol{D}=\boldsymbol{0}$，即假设观测方程为

$$\boldsymbol{y}(t)=\boldsymbol{C}\boldsymbol{x}(t).\tag{3.3}$$

**命题 (控制作用可置零)** @123

假设已知 $\boldsymbol{y}(\cdot)$ 在区间 $[0,t]$ 上的值，试图通过它来确定系统的状态 $\boldsymbol{x}(t)$ 或 $\boldsymbol{x}_0$。这时，我们假设在方程 (3.1) 和 (3.3) 中，矩阵 $\boldsymbol{A},\boldsymbol{B},\boldsymbol{C}$ 以及函数 $\boldsymbol{u}(\cdot)$ 和 $\boldsymbol{y}(\cdot)$ 在区间 $[0,t]$ 上的值是已知的，但并不知道初始状态 $\boldsymbol{x}_0$。

首先，如果在同一控制作用下，不同的初始状态产生相同的观测量，那么显然无法用观测量唯一确定初始状态，这时系统 (3.1) 和 (3.3) 是不能观的。利用系统的线性性知，上述情形等价于当控制作用取零时，非零的初始状态可以导致零观测。因此，在讨论系统的能观性时，我们总可以取控制作用 $\boldsymbol{u}(\cdot)=\boldsymbol{0}$。于是，系统 (3.1) 和 (3.3) 的能观性等价于下述系统的能观性：

$$\begin{cases}\dfrac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=\boldsymbol{A}\boldsymbol{x}(t),& \boldsymbol{x}(0)=\boldsymbol{x}_0,\\\boldsymbol{y}(t)=\boldsymbol{C}\boldsymbol{x}(t).\end{cases}\tag{3.4}$$

下面，我们将系统 (3.4) 简记为 $[\boldsymbol{C},\boldsymbol{A}]$。

**引理 (秩判据)** @123

系统 $[\boldsymbol{C},\boldsymbol{A}]$ 能观，当且仅当存在 $t>0$，由 $\boldsymbol{y}(s)\equiv\boldsymbol{0}$，$\forall s\in[0,t]$，能推出 $\boldsymbol{x}_0=\boldsymbol{0}$。这也就是说，由

$$\boldsymbol{0}\equiv\boldsymbol{y}(s)\equiv\boldsymbol{C}\boldsymbol{x}(s)\equiv\boldsymbol{C}\mathrm{e}^{\boldsymbol{A}s}\boldsymbol{x}_0,\qquad \forall s\in[0,t]\tag{3.5}$$

可以推出 $\boldsymbol{x}_0=\boldsymbol{0}$。在 (3.5) 中对 $s$ 求导，再令 $s=0$，可得

$$\begin{cases}\boldsymbol{C}\boldsymbol{x}_0=\boldsymbol{0},\\\boldsymbol{C}\boldsymbol{A}\boldsymbol{x}_0=\boldsymbol{0},\\\cdots\cdots\cdots\cdots\cdots\cdots,\\\boldsymbol{C}\boldsymbol{A}^{n-1}\boldsymbol{x}_0=\boldsymbol{0}.\end{cases}\tag{3.6}$$

我们断言，若由 (3.5) 成立能推出 $\boldsymbol{x}_0=\boldsymbol{0}$，则

$$\operatorname{rank}\begin{pmatrix}\boldsymbol{C}\\\boldsymbol{C}\boldsymbol{A}\\\vdots\\\boldsymbol{C}\boldsymbol{A}^{n-1}\end{pmatrix}=n.\tag{3.7}$$

**命题 (由观测重构初值)** @124

由于 $\boldsymbol{y}(\cdot)$ 在区间 $[0,t]$ 上的值是已知的，所以

$$\boldsymbol{y}(s)\equiv\boldsymbol{C}\mathrm{e}^{\boldsymbol{A}s}\boldsymbol{x}_0\tag{3.10}$$

在区间 $[0,t]$ 上的值是已知的，从而

$$\int_0^t\mathrm{e}^{\boldsymbol{A}^{\mathrm{T}}s}\boldsymbol{C}^{\mathrm{T}}\boldsymbol{C}\mathrm{e}^{\boldsymbol{A}s}\,\mathrm{d}s\,\boldsymbol{x}_0=\int_0^t\mathrm{e}^{\boldsymbol{A}^{\mathrm{T}}s}\boldsymbol{C}^{\mathrm{T}}\boldsymbol{y}(s)\,\mathrm{d}s$$

是可以由观测量来计算得到的。一般地，如果矩阵

$$\widetilde{\boldsymbol{W}}_t\equiv\int_0^t\mathrm{e}^{\boldsymbol{A}^{\mathrm{T}}s}\boldsymbol{C}^{\mathrm{T}}\boldsymbol{C}\mathrm{e}^{\boldsymbol{A}s}\,\mathrm{d}s$$

是可逆的，那么对于系统 (3.1)、(3.3)，可以得到

$$\boldsymbol{x}_0=\widetilde{\boldsymbol{W}}_t^{-1}\int_0^t\mathrm{e}^{\boldsymbol{A}^{\mathrm{T}}s}\boldsymbol{C}^{\mathrm{T}}\left[\boldsymbol{y}(s)-\boldsymbol{C}\int_0^s\mathrm{e}^{\boldsymbol{A}(s-\sigma)}\boldsymbol{B}\boldsymbol{u}(\sigma)\,\mathrm{d}\sigma\right]\mathrm{d}s.\tag{3.11}$$

这就是说，如果矩阵 $\widetilde{\boldsymbol{W}}_t$ 是可逆的，那么能由上式确定系统的初始状态，即系统是能观的。

**定理 3.2** @124

对于系统 $[\boldsymbol{C},\boldsymbol{A}]$，下述命题等价：

（i）系统 $[\boldsymbol{C},\boldsymbol{A}]$ 是能观的；

（ii）(3.7) 成立；

（iii）对于给定的 $t>0$，矩阵 $\widetilde{\boldsymbol{W}}_t$ 是可逆的；

（iv）对于给定的 $t>0$，由 $\boldsymbol{C}\mathrm{e}^{\boldsymbol{A}s}\boldsymbol{x}_0\equiv\boldsymbol{0}$，$\forall s\in[0,t]$，可以推出 $\boldsymbol{x}_0\equiv\boldsymbol{0}$；

（v）对于所有的 $\lambda\in\mathbb{C}$，矩阵 $\big(\lambda\boldsymbol{I}-\boldsymbol{A}^{\mathrm{T}},\ \boldsymbol{C}^{\mathrm{T}}\big)$ 的秩都等于 $n$；

（vi）对于矩阵 $\boldsymbol{A}$ 的任一特征值 $\lambda$，矩阵 $\big(\lambda\boldsymbol{I}-\boldsymbol{A}^{\mathrm{T}},\ \boldsymbol{C}^{\mathrm{T}}\big)$ 的秩都等于 $n$。

**命题 (对偶关系式)** @125

考虑系统

$$\begin{cases}\dfrac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=\boldsymbol{A}\boldsymbol{x}(t)+\boldsymbol{B}\boldsymbol{u}(t),\\\boldsymbol{y}(t)=\boldsymbol{C}\boldsymbol{x}(t),\end{cases}\tag{3.12}$$

简记上述系统为 $[\boldsymbol{A},\boldsymbol{B},\boldsymbol{C}]$。我们称下述系统是 (3.12) 的**对偶系统**：

$$\begin{cases}\dfrac{\mathrm{d}\boldsymbol{\varphi}(t)}{\mathrm{d}t}=-\boldsymbol{A}^{\mathrm{T}}\boldsymbol{\varphi}(t)+\boldsymbol{C}^{\mathrm{T}}\boldsymbol{\eta}(t),\\\boldsymbol{\psi}(t)=\boldsymbol{B}^{\mathrm{T}}\boldsymbol{\varphi}(t).\end{cases}\tag{3.13}$$

假如 $\boldsymbol{x}(\cdot)$ 和 $\boldsymbol{\varphi}(\cdot)$ 分别是 (3.12) 和 (3.13) 中方程的解，则我们有等式

$$\begin{aligned}\frac{\mathrm{d}}{\mathrm{d}t}\langle\boldsymbol{\varphi}(t),\boldsymbol{x}(t)\rangle&=\langle-\boldsymbol{A}^{\mathrm{T}}\boldsymbol{\varphi}(t)+\boldsymbol{C}^{\mathrm{T}}\boldsymbol{\eta}(t),\boldsymbol{x}(t)\rangle+\langle\boldsymbol{\varphi}(t),\boldsymbol{A}\boldsymbol{x}(t)+\boldsymbol{B}\boldsymbol{u}(t)\rangle\\&=\langle\boldsymbol{\eta}(t),\boldsymbol{C}\boldsymbol{x}(t)\rangle+\langle\boldsymbol{B}^{\mathrm{T}}\boldsymbol{\varphi}(t),\boldsymbol{u}(t)\rangle\\&=\langle\boldsymbol{\eta}(t),\boldsymbol{y}(t)\rangle+\langle\boldsymbol{\psi}(t),\boldsymbol{u}(t)\rangle.\end{aligned}$$

因此

$$\langle\boldsymbol{\varphi}(t),\boldsymbol{x}(t)\rangle-\langle\boldsymbol{\varphi}(0),\boldsymbol{x}(0)\rangle=\int_0^t\big\{\langle\boldsymbol{\eta}(s),\boldsymbol{y}(s)\rangle+\langle\boldsymbol{\psi}(s),\boldsymbol{u}(s)\rangle\big\}\mathrm{d}s.\tag{3.14}$$

这个等式称为系统 (3.12) 和 (3.13) 之间的**对偶关系式**。

**定理 3.3** @125

系统 (3.12) 是能控的当且仅当其**对偶系统** (3.13) 为能观的。

**命题 (能观性在可逆线性变换下不变)** @127

对系统 (3.12) 施行线性变换

$$\boldsymbol{x}=\boldsymbol{T}\widetilde{\boldsymbol{x}},\qquad \det\boldsymbol{T}\neq0,\tag{3.15}$$

可得到

$$\begin{cases}\dfrac{\mathrm{d}\widetilde{\boldsymbol{x}}(t)}{\mathrm{d}t}=\boldsymbol{T}^{-1}\boldsymbol{A}\boldsymbol{T}\widetilde{\boldsymbol{x}}(t)+\boldsymbol{T}^{-1}\boldsymbol{B}\boldsymbol{u}(t),\\\boldsymbol{y}(t)=\boldsymbol{C}\boldsymbol{T}\widetilde{\boldsymbol{x}}(t).\end{cases}\tag{3.16}$$

这就是说，经过线性变换 (3.15) 后，系统 $[\boldsymbol{A},\boldsymbol{B},\boldsymbol{C}]$ 变成 $[\boldsymbol{T}^{-1}\boldsymbol{A}\boldsymbol{T},\boldsymbol{T}^{-1}\boldsymbol{B},\boldsymbol{C}\boldsymbol{T}]$。由命题 1.3，系统的能控性在可逆线性变换下是不变的；利用定理 3.2 和 3.3，我们可知系统的能观性在可逆线性变换下也是不变的。

对于单输入系统（即 $m=1$），为讨论它的极点配置问题，我们看到在适当变换下系统变成简单形状是十分有用的，人们自然期望对于多输入系统也能有适用的简单形状，这就是系统的能控标准形和能观标准形的问题。对此，我们有下述定理。

**定理 3.4** @127

设矩阵 $\boldsymbol{B}$ 是列满秩的，即它的秩等于 $m$，那么存在 $n$ 阶可逆矩阵 $\boldsymbol{T}$，使得 $[\boldsymbol{T}^{-1}\boldsymbol{A}\boldsymbol{T},\boldsymbol{T}^{-1}\boldsymbol{B},\boldsymbol{C}\boldsymbol{T}]$ 具有下述的标准形：

$$\begin{pmatrix}\boldsymbol{T}^{-1}\boldsymbol{A}\boldsymbol{T} & \boldsymbol{T}^{-1}\boldsymbol{B}\\\boldsymbol{C}\boldsymbol{T} & \boldsymbol{0}\end{pmatrix}=\begin{pmatrix}\boldsymbol{A}_0 & & & & \boldsymbol{0}\\& \boldsymbol{0} & \boldsymbol{N}_{m_1} & & \\& & \ddots & \ddots & \\& & & \boldsymbol{0} & \boldsymbol{N}_{m_r}\\\ast & \ast & \ast & \ast & \boldsymbol{B}_m\\\ast & \ast & \ast & \ast & \boldsymbol{0}\end{pmatrix}$$

这里未标明的地方是 $\boldsymbol{0}$，$\boldsymbol{A}_0$ 是 $m_0$ 阶方阵，$\boldsymbol{N}_{m_1},\boldsymbol{N}_{m_2},\cdots,\boldsymbol{N}_{m_r}$ 和 $\boldsymbol{B}_m$ 分别是 $m_1,m_2,\cdots,m_r$ 和 $m$ 阶方阵（行列式不为零），$m_0+m_1+\cdots+m_r+m=n$，$(\boldsymbol{A}_0,\boldsymbol{0})$ 是 $m_0\times(m_0+m_1)$ 阶的矩阵块，$(\boldsymbol{0},\boldsymbol{N}_{m_1}),(\boldsymbol{0},\boldsymbol{N}_{m_2}),\cdots,(\boldsymbol{0},\boldsymbol{N}_{m_r})$ 分别是 $m_1\times m_2$、$m_2\times m_3$、$\cdots$、$m_r\times m$ 阶的矩阵块，带 $\ast$ 的地方是某些相应阶数的矩阵块。同样，我们可以写出系统的能观标准形。

**定义 (不能观子空间)** @127

为了讨论不能观的情况，我们定义系统 $[\boldsymbol{C},\boldsymbol{A}]$ 的**不能观子空间**为（假定 $t>0$）

$$Y=\{\boldsymbol{x}\in\mathbb{R}^n\mid\boldsymbol{C}\mathrm{e}^{\boldsymbol{A}s}\boldsymbol{x}\equiv\boldsymbol{0},\ s\in[0,t]\}=\{\boldsymbol{x}\in\mathbb{R}^n\mid\boldsymbol{C}\boldsymbol{A}^k\boldsymbol{x}\equiv\boldsymbol{0},\ k\geqslant0\}.$$

显然 $Y$ 不依赖于特定的 $t$，并且系统 $[\boldsymbol{C},\boldsymbol{A}]$ 能观的充要条件是 $Y=\{\boldsymbol{0}\}$。

**命题 (不能观子空间的结构)** @128

现在假设

$$\operatorname{rank}\begin{pmatrix}\boldsymbol{C}\\\boldsymbol{C}\boldsymbol{A}\\\vdots\\\boldsymbol{C}\boldsymbol{A}^{n-1}\end{pmatrix}=p,\tag{3.17}$$

其中 $1\leqslant p<n$，即

$$\operatorname{rank}(\boldsymbol{C}^{\mathrm{T}}\ \ \boldsymbol{A}^{\mathrm{T}}\boldsymbol{C}^{\mathrm{T}}\ \ \cdots\ \ (\boldsymbol{A}^{\mathrm{T}})^{n-1}\boldsymbol{C}^{\mathrm{T}})=p.$$

考虑对偶系统 $[\boldsymbol{A}^{\mathrm{T}},\boldsymbol{C}^{\mathrm{T}}]$，利用定理 1.6 知，存在可逆矩阵 $\boldsymbol{T}\in\mathbb{R}^{n\times n}$，使得

$$\boldsymbol{T}^{-1}\boldsymbol{A}^{\mathrm{T}}\boldsymbol{T}=\begin{pmatrix}\boldsymbol{A}_1^{\mathrm{T}} & \boldsymbol{A}_2^{\mathrm{T}}\\\boldsymbol{0} & \boldsymbol{A}_3^{\mathrm{T}}\end{pmatrix},\qquad \boldsymbol{T}^{-1}\boldsymbol{C}^{\mathrm{T}}=\begin{pmatrix}\boldsymbol{C}_1^{\mathrm{T}}\\\boldsymbol{0}\end{pmatrix},\tag{3.18}$$

其中 $\boldsymbol{A}_1^{\mathrm{T}}$ 为 $p$ 阶方阵，$[\boldsymbol{A}_1^{\mathrm{T}},\boldsymbol{C}_1^{\mathrm{T}}]$ 能控。记 $\boldsymbol{S}=(\boldsymbol{T}^{\mathrm{T}})^{-1}$，则

$$\boldsymbol{S}^{-1}\boldsymbol{A}\boldsymbol{S}=\begin{pmatrix}\boldsymbol{A}_1 & \boldsymbol{0}\\\boldsymbol{A}_2 & \boldsymbol{A}_3\end{pmatrix},\qquad \boldsymbol{C}\boldsymbol{S}=(\boldsymbol{C}_1,\ \boldsymbol{0}),\tag{3.19}$$

并且 $[\boldsymbol{C}_1,\boldsymbol{A}_1]$ 能观。此时不能观子空间为

$$Y=\left\{\boldsymbol{S}\boldsymbol{x}\ \middle|\ \boldsymbol{x}=\begin{pmatrix}\boldsymbol{0}\\\boldsymbol{x}_2\end{pmatrix}\in\mathbb{R}^n,\ \boldsymbol{x}_2\in\mathbb{R}^{n-p}\right\}.$$

**定义 3.5** @128

对于系统 (3.1) 和 (3.3)，取 $\boldsymbol{u}(t)\equiv\boldsymbol{0}$，若存在某一时刻 $t>0$，由 $\boldsymbol{C}\mathrm{e}^{\boldsymbol{A}s}\boldsymbol{x}_0\equiv\boldsymbol{0}$，$\forall s\in[0,t]$，可以推出当 $t\to+\infty$ 时 $\mathrm{e}^{\boldsymbol{A}t}\boldsymbol{x}_0\to\boldsymbol{0}$，则称 $[\boldsymbol{C},\boldsymbol{A}]$ **能检测**，简称**能检**。

**命题 (能观蕴含能检)** @128

显然当系统 $[\boldsymbol{C},\boldsymbol{A}]$ 能观时，对于某一时刻 $t>0$，由 $\boldsymbol{C}\mathrm{e}^{\boldsymbol{A}s}\boldsymbol{x}_0\equiv\boldsymbol{0}$，$\forall s\in[0,t]$，可以推出 $\boldsymbol{x}_0=\boldsymbol{0}$，从而 $[\boldsymbol{C},\boldsymbol{A}]$ 能检测。

**定理 3.6** @128

$[\boldsymbol{C},\boldsymbol{A}]$ 能检的充分必要条件是 $[\boldsymbol{A}^{\mathrm{T}},\boldsymbol{C}^{\mathrm{T}}]$ 能稳。

### 4.4 状态渐近估计器和调节器的设计（p129–133）

**推论 3.7** @129

由定理 3.6 和能稳性的定义知：系统 $[\boldsymbol{C},\boldsymbol{A}]$ 能检的充分必要条件是存在 $n\times p$ 阶矩阵 $\boldsymbol{L}$ 使得 $\boldsymbol{A}-\boldsymbol{L}\boldsymbol{C}$ 是稳定的。

我们已经指出，当系统能稳时，可以用状态的线性反馈使系统镇定，从而使闭环系统的状态在时间 $t\to+\infty$ 时趋于零状态，即闭环系统趋于平衡状态。但是，为了使用状态反馈，必须测量状态变量。然而，状态变量一般不能直接测量，而只能通过观测变量来间接确定，这就使状态反馈调节器在使用中产生了问题。解决问题的办法之一是：开始时对系统不进行控制，通过测量系统的观测量以估算出系统的初始状态，然后推算出系统的当时状态，再用状态线性反馈。但是，这种办法有不妥之处：一是需要测量足够多的观测量，这在系统的维数较高时就很难；二是运用观测量计算初始状态，在维数很大时，将有很多困难；三是根据状态方程初始状态计算现时的状态，当系数矩阵不稳定时，会产生计算的发散问题。总之，利用观测量直接计算系统的状态并不是实际可行的办法。

为解决问题，人们从线性系统的镇定只要求系统的状态趋于零状态而不要求在有限时间达到零状态得到启发，提出能否对偶地考虑状态的渐近确定问题，即不要求通过有限时间的观测来准确决定系统的状态，而要求通过长时间的观测，渐近地估计系统的状态。这就是状态的渐近估计的思想来源。

**定义 (状态渐近估计器)** @130

对于系统

$$\begin{cases}\dfrac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=\boldsymbol{A}\boldsymbol{x}(t)+\boldsymbol{B}\boldsymbol{u}(t),\\\boldsymbol{y}(t)=\boldsymbol{C}\boldsymbol{x}(t),\end{cases}\tag{4.1}$$

假设它是能检测的，则根据推论 3.7 知，存在 $n\times p$ 阶矩阵 $\boldsymbol{L}$ 使得 $\boldsymbol{A}-\boldsymbol{L}\boldsymbol{C}$ 是稳定的。如果 $\widehat{\boldsymbol{x}}(\cdot)$ 适合

$$\begin{cases}\dfrac{\mathrm{d}\widehat{\boldsymbol{x}}(t)}{\mathrm{d}t}=(\boldsymbol{A}-\boldsymbol{L}\boldsymbol{C})\widehat{\boldsymbol{x}}(t)+\boldsymbol{L}\boldsymbol{y}(t)+\boldsymbol{B}\boldsymbol{u}(t),\\\widehat{\boldsymbol{x}}(0)=\boldsymbol{0},\end{cases}\tag{4.2}$$

那么，由于 $\boldsymbol{y}(\cdot)$ 和 $\boldsymbol{u}(\cdot)$ 是可以测量的，可以由 (4.2) 计算出 $\widehat{\boldsymbol{x}}(t)$。问题是这样计算出的 $\widehat{\boldsymbol{x}}(t)$ 能否渐近地趋于系统的状态 $\boldsymbol{x}(t)$，即当 $t\to+\infty$ 时，$\boldsymbol{x}(t)-\widehat{\boldsymbol{x}}(t)$ 是否趋于零。

由于 $\boldsymbol{A}-\boldsymbol{L}\boldsymbol{C}$ 是稳定的，估计误差满足

$$\begin{cases}\dfrac{\mathrm{d}[\boldsymbol{x}(t)-\widehat{\boldsymbol{x}}(t)]}{\mathrm{d}t}=(\boldsymbol{A}-\boldsymbol{L}\boldsymbol{C})[\boldsymbol{x}(t)-\widehat{\boldsymbol{x}}(t)],\\\boldsymbol{x}(0)-\widehat{\boldsymbol{x}}(0)=\boldsymbol{x}_0,\end{cases}\tag{4.4}$$

所以有

$$\lim_{t\to+\infty}[\boldsymbol{x}(t)-\widehat{\boldsymbol{x}}(t)]=\boldsymbol{0}.\tag{4.5}$$

由于有这样的收敛性，我们知道 $\widehat{\boldsymbol{x}}(\cdot)$ 渐近地给出了状态 $\boldsymbol{x}(\cdot)$ 的估计。因此，我们称 (4.2) 是系统 (4.1) 的**状态渐近估计器**。

**构造 (状态反馈调节器)** @130

能否用系统的状态渐近估计作为反馈控制的输入呢？假设系统 (4.1) 是能稳和能检的，这时存在 $m\times n$ 阶矩阵 $\boldsymbol{K}$ 和 $n\times p$ 阶矩阵 $\boldsymbol{L}$，使得矩阵 $\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K}$ 和矩阵 $\boldsymbol{A}-\boldsymbol{L}\boldsymbol{C}$ 都是稳定的。如果控制作用取为

$$\boldsymbol{u}(t)=-\boldsymbol{K}\widehat{\boldsymbol{x}}(t),\tag{4.6}$$

那么整个系统成为

$$\begin{cases}\dfrac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=\boldsymbol{A}\boldsymbol{x}(t)+\boldsymbol{B}\boldsymbol{u}(t),\\\boldsymbol{y}(t)=\boldsymbol{C}\boldsymbol{x}(t),\qquad \boldsymbol{x}(0)=\boldsymbol{x}_0,\\\dfrac{\mathrm{d}\widehat{\boldsymbol{x}}(t)}{\mathrm{d}t}=(\boldsymbol{A}-\boldsymbol{L}\boldsymbol{C})\widehat{\boldsymbol{x}}(t)+\boldsymbol{L}\boldsymbol{y}(t)+\boldsymbol{B}\boldsymbol{u}(t),\\\widehat{\boldsymbol{x}}(0)=\boldsymbol{0},\\\boldsymbol{u}(t)=-\boldsymbol{K}\widehat{\boldsymbol{x}}(t).\end{cases}\tag{4.7}$$

**命题 (估计误差与闭环稳定性)** @131

记 $\widetilde{\boldsymbol{x}}(t)=\boldsymbol{x}(t)-\widehat{\boldsymbol{x}}(t)$，那么

$$\begin{cases}\dfrac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=\boldsymbol{A}\boldsymbol{x}(t)-\boldsymbol{B}\boldsymbol{K}[\boldsymbol{x}(t)-\widetilde{\boldsymbol{x}}(t)],\\\dfrac{\mathrm{d}\widetilde{\boldsymbol{x}}(t)}{\mathrm{d}t}=(\boldsymbol{A}-\boldsymbol{L}\boldsymbol{C})\widetilde{\boldsymbol{x}}(t),\\\boldsymbol{x}(0)=\boldsymbol{x}_0,\qquad \widetilde{\boldsymbol{x}}(0)=\boldsymbol{x}_0,\end{cases}\tag{4.8}$$

从而

$$\begin{cases}\dfrac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=(\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K})\boldsymbol{x}(t)+\boldsymbol{B}\boldsymbol{K}\widetilde{\boldsymbol{x}}(t),\\\dfrac{\mathrm{d}\widetilde{\boldsymbol{x}}(t)}{\mathrm{d}t}=(\boldsymbol{A}-\boldsymbol{L}\boldsymbol{C})\widetilde{\boldsymbol{x}}(t),\\\boldsymbol{x}(0)=\boldsymbol{x}_0,\qquad \widetilde{\boldsymbol{x}}(0)=\boldsymbol{x}_0.\end{cases}\tag{4.9}$$

由于矩阵 $\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K}$ 和矩阵 $\boldsymbol{A}-\boldsymbol{L}\boldsymbol{C}$ 都是稳定的，所以 (4.9) 的系数矩阵

$$\begin{pmatrix}\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K} & \boldsymbol{B}\boldsymbol{K}\\\boldsymbol{0} & \boldsymbol{A}-\boldsymbol{L}\boldsymbol{C}\end{pmatrix}$$

的特征值都在左半开平面内，从而当 $t\to+\infty$ 时，$\boldsymbol{x}(t)$ 和 $\widetilde{\boldsymbol{x}}(t)$ 都趋于零。

**定理 (分离性原理)** @131

因此，只要系统 (4.1) 是能稳和能检的，我们就可以根据 $[\boldsymbol{A},\boldsymbol{B}]$ 确定反馈矩阵 $\boldsymbol{K}$，根据 $[\boldsymbol{C},\boldsymbol{A}]$ 确定状态渐近估计器的矩阵 $\boldsymbol{L}$，然后把它们结合起来构成系统的线性调节器 (4.8)。这时，(4.8) 是渐近稳定的并且状态可以渐近估计。而且，系统的调节器和状态渐近估计器的设计可以分开进行，这称为**分离性原理**。

上述的状态渐近估计器虽然能够解决调节器的设计问题，但当状态变量维数较高时，计算工作量较大，观测信息没有充分利用。例如，我们已经直接测量了状态变量 $\boldsymbol{x}$ 的前 $p$ 个分量，是否还有必要对这 $p$ 个分量进行估计呢？人们期望充分利用这些信息，这就产生了所谓**降维状态渐近估计器**的设计问题。

设状态变量 $\boldsymbol{x}$ 的前 $p$ 个分量是能够直接测量的，记

$$\boldsymbol{x}=\begin{pmatrix}\boldsymbol{x}_1\\\boldsymbol{x}_2\end{pmatrix},\qquad \boldsymbol{A}=\begin{pmatrix}\boldsymbol{A}_1 & \boldsymbol{A}_2\\\boldsymbol{A}_3 & \boldsymbol{A}_4\end{pmatrix},\qquad \boldsymbol{B}=\begin{pmatrix}\boldsymbol{B}_1\\\boldsymbol{B}_2\end{pmatrix},$$

其中 $\boldsymbol{x}_1$ 是 $p$ 维列向量，$\boldsymbol{x}_2$ 是 $n-p$ 维列向量，$\boldsymbol{A}_1$ 是 $p\times p$ 阶矩阵块，$\boldsymbol{A}_2$ 是 $p\times(n-p)$ 阶矩阵块，$\boldsymbol{A}_3$ 是 $(n-p)\times p$ 阶矩阵块，$\boldsymbol{A}_4$ 是 $(n-p)\times(n-p)$ 阶矩阵块，$\boldsymbol{B}_1$ 是 $p$ 维列向量，$\boldsymbol{B}_2$ 是 $n-p$ 维列向量。系统的状态方程和观测方程为

$$\begin{cases}\dfrac{\mathrm{d}\boldsymbol{x}_1(t)}{\mathrm{d}t}=\boldsymbol{A}_1\boldsymbol{x}_1(t)+\boldsymbol{A}_2\boldsymbol{x}_2(t)+\boldsymbol{B}_1\boldsymbol{u}(t),\\\dfrac{\mathrm{d}\boldsymbol{x}_2(t)}{\mathrm{d}t}=\boldsymbol{A}_3\boldsymbol{x}_1(t)+\boldsymbol{A}_4\boldsymbol{x}_2(t)+\boldsymbol{B}_2\boldsymbol{u}(t),\\\boldsymbol{y}(t)=\boldsymbol{x}_1(t).\end{cases}\tag{4.10}$$

**命题 ($[\boldsymbol{A}_2,\boldsymbol{A}_4]$ 能检)** @132

假设系统 (4.10) 是能检测的，这时，由 $\boldsymbol{x}_1(t)\equiv\boldsymbol{0}$ 和 $\boldsymbol{u}(t)\equiv\boldsymbol{0}$ 能够推出状态 $\boldsymbol{x}(t)\to\boldsymbol{0}$（$t\to+\infty$），即由

$$\begin{cases}\dfrac{\mathrm{d}\boldsymbol{x}_2(t)}{\mathrm{d}t}=\boldsymbol{A}_4\boldsymbol{x}_2(t),\\\boldsymbol{A}_2\boldsymbol{x}_2(t)\equiv\boldsymbol{0},\end{cases}\tag{4.11}$$

能推出 $\boldsymbol{x}_2(t)\to\boldsymbol{0}$，所以 $[\boldsymbol{A}_2,\boldsymbol{A}_4]$ 能检测。因此，存在 $(n-p)\times p$ 阶矩阵 $\boldsymbol{L}$，使得矩阵 $\boldsymbol{A}_4-\boldsymbol{L}\boldsymbol{A}_2$ 是稳定的。

**构造 (降维状态渐近估计器)** @132

置 $\boldsymbol{z}(t)=\boldsymbol{x}_2(t)-\boldsymbol{L}\boldsymbol{x}_1(t)$，那么

$$\dfrac{\mathrm{d}\boldsymbol{z}(t)}{\mathrm{d}t}=\dfrac{\mathrm{d}\boldsymbol{x}_2(t)}{\mathrm{d}t}-\boldsymbol{L}\dfrac{\mathrm{d}\boldsymbol{x}_1(t)}{\mathrm{d}t}=(\boldsymbol{A}_3-\boldsymbol{L}\boldsymbol{A}_1)\boldsymbol{x}_1(t)+(\boldsymbol{A}_4-\boldsymbol{L}\boldsymbol{A}_2)\boldsymbol{x}_2(t)+(\boldsymbol{B}_2-\boldsymbol{L}\boldsymbol{B}_1)\boldsymbol{u}(t),$$

从而

$$\begin{cases}\dfrac{\mathrm{d}\boldsymbol{z}(t)}{\mathrm{d}t}=\{(\boldsymbol{A}_3-\boldsymbol{L}\boldsymbol{A}_1)+(\boldsymbol{A}_4-\boldsymbol{L}\boldsymbol{A}_2)\boldsymbol{L}\}\boldsymbol{x}_1(t)\\+(\boldsymbol{A}_4-\boldsymbol{L}\boldsymbol{A}_2)\boldsymbol{z}(t)+(\boldsymbol{B}_2-\boldsymbol{L}\boldsymbol{B}_1)\boldsymbol{u}(t),\\\boldsymbol{y}(t)=\boldsymbol{x}_1(t),\\\boldsymbol{z}(0)=\boldsymbol{x}_2(0)-\boldsymbol{L}\boldsymbol{x}_1(0).\end{cases}\tag{4.12}$$

我们取系统的降维状态渐近估计器的方程为

$$\begin{cases}\dfrac{\mathrm{d}\widehat{\boldsymbol{z}}(t)}{\mathrm{d}t}=\{(\boldsymbol{A}_3-\boldsymbol{L}\boldsymbol{A}_1)+(\boldsymbol{A}_4-\boldsymbol{L}\boldsymbol{A}_2)\boldsymbol{L}\}\boldsymbol{y}(t)\\+(\boldsymbol{A}_4-\boldsymbol{L}\boldsymbol{A}_2)\widehat{\boldsymbol{z}}(t)+(\boldsymbol{B}_2-\boldsymbol{L}\boldsymbol{B}_1)\boldsymbol{u}(t),\\\widehat{\boldsymbol{z}}(0)=\boldsymbol{0}.\end{cases}\tag{4.13}$$

变量 $\widehat{\boldsymbol{z}}(t)$ 作为变量 $\boldsymbol{z}(t)$ 的渐近估计。记 $\widetilde{\boldsymbol{z}}(t)=\boldsymbol{z}(t)-\widehat{\boldsymbol{z}}(t)$，这时，我们有

$$\dfrac{\mathrm{d}\widetilde{\boldsymbol{z}}(t)}{\mathrm{d}t}=(\boldsymbol{A}_4-\boldsymbol{L}\boldsymbol{A}_2)\widetilde{\boldsymbol{z}}(t),$$

从而

$$\lim_{t\to+\infty}\widetilde{\boldsymbol{z}}(t)=\boldsymbol{0}.$$

若置 $\widehat{\boldsymbol{x}}_2(t)=\widehat{\boldsymbol{z}}(t)+\boldsymbol{L}\boldsymbol{y}(t)$，那么它是 $\boldsymbol{x}_2(t)$ 的渐近估计。

**定理 (降维调节器)** @132

假设系统 (4.10) 是能稳和能检的。如果矩阵 $\boldsymbol{K}=(\boldsymbol{K}_1,\boldsymbol{K}_2)$ 使得 $\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K}$ 是稳定的，矩阵 $\boldsymbol{L}$ 使得 $\boldsymbol{A}_4-\boldsymbol{L}\boldsymbol{A}_2$ 是稳定的，那么反馈调节器

$$\boldsymbol{u}(t)=-\boldsymbol{K}_1\boldsymbol{x}_1(t)-\boldsymbol{K}_2\widehat{\boldsymbol{x}}_2(t),$$

其中 $\widehat{\boldsymbol{x}}_2(t)=\widehat{\boldsymbol{z}}(t)+\boldsymbol{L}\boldsymbol{y}(t)$，$\widehat{\boldsymbol{z}}(t)$ 由 (4.13) 给出，使得系统 (4.10) 的闭环系统是渐近稳定的。

**命题 (一般观测方程的化归)** @133

以上我们对一类特殊系统 (4.10) 设计了降维状态渐近估计器。一般地，对于观测方程 $\boldsymbol{y}(t)=\boldsymbol{C}\boldsymbol{x}(t)$，必存在非奇异矩阵 $\boldsymbol{P}$ 和 $\boldsymbol{Q}$，使得

$$\boldsymbol{C}=\boldsymbol{P}\begin{pmatrix}\boldsymbol{I}_k & \boldsymbol{0}\\\boldsymbol{0} & \boldsymbol{0}\end{pmatrix}\boldsymbol{Q},$$

其中 $k=\operatorname{rank}\boldsymbol{C}$。记

$$\widetilde{\boldsymbol{y}}=\boldsymbol{P}^{-1}\boldsymbol{y},\qquad \widetilde{\boldsymbol{x}}=\boldsymbol{Q}\boldsymbol{x}=\begin{pmatrix}\widetilde{\boldsymbol{x}}_1\\\widetilde{\boldsymbol{x}}_2\end{pmatrix},$$

则观测方程变为

$$\widetilde{\boldsymbol{y}}=\begin{pmatrix}\widetilde{\boldsymbol{x}}_1\\\boldsymbol{0}\end{pmatrix}.$$

可以用前面的办法处理。

## 第5章 线性系统的实现

### 5.1 系统的外部表示（p138–144）

用状态方程来表示动态系统的方法，称为系统的**内部表示方法**；而用传递函数或传递矩阵来表示系统的方法，则称为系统的**外部表示方法**。由系统的外部表示（传递函数或传递矩阵）推导其内部表示（状态方程与观测方程），这样的问题称为系统的**实现问题**。本章研究多输入多输出系统的 Hankel 矩阵实现方法。

#### 5.1 系统的外部表示 @138

**定义 (传递矩阵)** @138

设系统的状态方程是$$\frac{\mathrm{d}x(t)}{\mathrm{d}t}=Ax(t)+Bu(t),\tag{1.1}$$观测方程是$$y(t)=Cx(t)+Du(t),\tag{1.2}$$其中状态 $x$、输入 $u$ 和输出 $y$ 分别为 $n$ 维、$m$ 维和 $p$ 维向量。那么系统的**传递矩阵**是$$F(s)\equiv C(sI-A)^{-1}B+D=\sum_{j=1}^{\infty}CA^{j-1}Bs^{-j}+D.\tag{1.3}$$上式右端是一个形式级数，它未必对所有的复数 $s$ 均收敛，但对于模足够大的 $s$（比如说 $|s|>\|A\|$，这里 $\|\cdot\|$ 代表某种矩阵范数）是收敛的。若记$$A_j\equiv CA^{j-1}B,\qquad \forall j=1,2,\cdots,\tag{1.4}$$那么 (1.3) 变为$$F(s)\equiv\sum_{j=0}^{\infty}A_js^{-j}.\tag{1.5}$$

**注 (传递矩阵由系数序列确定)** @139

这里 $A_0=D=F(\infty)$。因此，在系统的状态方程和观测方程已知时，系统的传递矩阵完全由 $A_j\ (j\ge 0)$ 确定。于是当 $\{A_j\}_{j=0}^{\infty}$ 已知时，我们认为传递矩阵是已知的。

注意到 $A_j\in\mathbb{R}^{p\times m}$，$j\ge 0$，即它们与状态的维数无关。由第二章 §2.2 得知，$(sI-A)^{-1}$ 是严格真的，所以传递矩阵严格真的充分必要条件是 $D=0$。为了简单起见，以后我们假定 $D=0$。

**例 1.1** @139

考虑系统 (1.1)–(1.2)，其中$$A=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad B=\begin{pmatrix}0\\1\end{pmatrix},\qquad C=(0\ \ 1),$$则 $F(s)=C(sI-A)^{-1}B=\dfrac{1}{s}$。所以，对此情形，我们有$$A_1=1,\qquad A_j=0,\qquad j\ge 2.$$

在上面的例子中 $A^2=0$，故 (1.3) 表明 $F(s)$ 的级数表示 (1.5) 中仅有一项非零。一般而言，当 $A$ 是**幂零矩阵**时，即存在正整数 $k\ge 1$ 使得 $A^k=0$，则 (1.3)（或 (1.5)）右端的级数只有有限项可能非零。顺便指出，$A$ 是幂零的，当且仅当 $A$ 只有 $0$ 特征值；当 $A$ 是 $n$ 阶幂零矩阵时，其特征多项式就是 $\lambda^n$，故由 Cayley–Hamilton 定理，$A^n=0$。

**命题 1.2 (幂零矩阵的传递矩阵只有有限项)** @139

若 $A$ 是 $n$ 阶幂零矩阵，则系统 (1.1)–(1.2) 的传递矩阵 $F(s)$ 必有下述表示：$$F(s)=\sum_{j=1}^{\infty}CA^{j-1}Bs^{-j}=\sum_{j=1}^{n}A_js^{-j},\qquad s\in\mathbb{C}.\tag{1.6}$$

有时即使 $A$ 不是幂零矩阵，级数 (1.5) 仍有可能只有有限项非零。

**例 1.3** @140

设系统 (1.1)–(1.2) 中的系数矩阵如下：$$A=\begin{pmatrix}0&1&0\\0&0&0\\0&0&1\end{pmatrix},\qquad B=\begin{pmatrix}0\\1\\0\end{pmatrix},\qquad C=(1\ \ 1\ \ 1).$$显然 $A$ 有非零特征值 $1$，所以它不是幂零矩阵，而$$A_1=CB=1,\qquad A_2=CAB=1.$$由于 $A^2B=0$，故 $A_j=CA^{j-1}B=0\ (j\ge 3)$，从而$$F(s)=s^{-1}+s^{-2}.$$

**命题 1.4 (能控能观且非幂零时级数有无穷项非零)** @140

假定 $A$ 不是幂零矩阵，且系统 (1.1)–(1.2) 是能控的和能观的，则 (1.5) 必有无穷项不为零。

**引理 (由能控性作右消去)** @140

设存在 $k\ge 1$ 使得 $A_j=CA^{j-1}B=0\ (\forall j\ge k)$。若 $[A,B]$ 能控，则必有$$CA^{j-1}=0,\qquad \forall j\ge k.\tag{1.9}$$这是因为 $CA^{j-1}(B,AB,\cdots,A^{n-1}B)=0$，而能控性矩阵 $(B,AB,\cdots,A^{n-1}B)$ 的秩为 $n$。

**推论 1.5 (级数有限项非零的充要条件)** @141

若系统 (1.1)–(1.2) 既是能控的又是能观的，则级数 (1.5) 含有有限项非零的充要条件是 $A$ 为幂零的。

**命题 (状态变换不改变传递矩阵)** @141

如果对系统 (1.1)–(1.2) 进行线性变换 $\tilde{x}=Tx$，那么$$\frac{\mathrm{d}\tilde{x}(t)}{\mathrm{d}t}=\tilde{A}\tilde{x}(t)+\tilde{B}u(t),\qquad y(t)=\tilde{C}\tilde{x}(t),\tag{1.12}$$其中 $\tilde{A}=TAT^{-1}$，$\tilde{B}=TB$，$\tilde{C}=CT^{-1}$。容易验证 (1.12) 的传递矩阵仍是 $F(s)$。这就是说，状态的线性变换并不改变系统的外部表示；由此也可以得知，一个传递矩阵所对应的系统实现是不唯一的。

以上用系统的内部表示刻画了其外部描述 (1.5)，得到了它的一些基本性质。本章关心的是如何利用系统的外部描述得到内部描述。通常已知的外部描述是传递矩阵，它是真有理函数矩阵，而不是 (1.5) 的形式，这就需要首先把传递矩阵展开成 (1.5)，而这可以简化为对每个真有理函数的展开。

**例 1.6** @141

将 $F(s)=\dfrac{1}{(s-a)^2}$ 进行形式级数展开：$$F(s)=s^{-2}\left(1-\frac{a}{s}\right)^{-2}=\sum_{n=0}^{\infty}(n+1)a^ns^{-n-2}.$$

**例 1.7** @141

将 $F(s)=\dfrac{2s+2}{s^2+2s+2}$ 进行形式级数展开。$F(s)$ 的分母有两个共轭复根 $-1\pm\mathrm{i}$，故$$F(s)=\frac{1}{s+1+\mathrm{i}}+\frac{1}{s+1-\mathrm{i}}=\sum_{n=0}^{\infty}(-1)^n\left[(1+\mathrm{i})^n+(1-\mathrm{i})^n\right]s^{-n-1}.$$

**注 (一般的展开程序)** @142

对于一般的情况，可以先用部分分式分解，再用 Taylor 展开。

**定义 (Hankel 矩阵)** @142

对于给定的级数 (1.5)，记$$K=\begin{pmatrix}A_1&A_2&A_3&\cdots\\A_2&A_3&A_4&\cdots\\A_3&A_4&A_5&\cdots\\\vdots&\vdots&\vdots&\\\end{pmatrix},\tag{1.13}$$上述特殊形式的具有无限行和列的矩阵 $K$ 称为传递矩阵 (1.5) 的 **Hankel 矩阵**。当 $K$ 中 $A_j$ 由 (1.4) 给出时，$K$ 具有下述分解：$$K=\begin{pmatrix}C\\CA\\\vdots\\CA^j\\\vdots\end{pmatrix}\big(B,AB,\cdots,A^jB,\cdots\big),\tag{1.14}$$我们称这样的 $K$ 为系统 (1.1)–(1.2) 的 Hankel 矩阵。

Hankel 矩阵是一个行数和列数均为可列无限的矩阵。对于给定的控制系统 (1.1)–(1.2)，可以唯一地确定出其 Hankel 矩阵。

**定义 (可列无限维向量空间 $X$)** @142

记具有可列无限个分量的实列向量全体为 $X$，即$$X=\{(x^1,x^2,\cdots)^{\mathrm{T}}\mid x^j\in\mathbb{R},\ j=1,2,\cdots\}.$$在 $X$ 中定义加法和数乘如下：$$\begin{cases}(x^1,x^2,\cdots)^{\mathrm{T}}+(y^1,y^2,\cdots)^{\mathrm{T}}=(x^1+y^1,x^2+y^2,\cdots)^{\mathrm{T}},\quad\forall (x^1,x^2,\cdots)^{\mathrm{T}},(y^1,y^2,\cdots)^{\mathrm{T}}\in X,\\[2pt]\alpha(x^1,x^2,\cdots)^{\mathrm{T}}=(\alpha x^1,\alpha x^2,\cdots)^{\mathrm{T}},\quad\forall (x^1,x^2,\cdots)^{\mathrm{T}}\in X,\ \alpha\in\mathbb{R}.\end{cases}$$容易验证，$X$ 关于上述加法和数乘构成一个线性空间。

**定义 (线性相关与线性无关)** @142

对 $X$ 中有限个向量 $x_1,x_2,\cdots,x_k$，若存在不全为零的实数 $a_1,a_2,\cdots,a_k$，使$$\sum_{j=1}^{k}a_jx_j=0,$$则称向量组 $x_1,x_2,\cdots,x_k$ **线性相关**，否则称它们**线性无关**。

**定义 (无限矩阵的秩)** @143

设 $Y$ 为 $X$ 的非空子集且包含非零向量，定义它的秩如下：$$\operatorname{rank}Y=\sup\{k\mid x_1,x_2,\cdots,x_k\ \text{线性无关},\ x_i\in Y,\ 1\le i\le k\}.$$如果 $Y$ 为有限集，则其秩一定有限；如果 $Y$ 为无限集，则秩可能为无穷大。由上述定义知，$\operatorname{rank}Y=+\infty$ 的充要条件是 $Y$ 中存在任意多个线性无关的向量。

对于一个行数或列数可以是可列无限的矩阵 $K$，定义它的秩为其列向量组成的集合的秩。显然当它只有有限列时，秩也是有限的；而当它的行数有限时，其列向量组成的集合是某个固定有限维空间的子集，所以秩必然是有限的。于是，若 $K$ 的行数或列数有限，则 $\operatorname{rank}K$ 必有限。矩阵 $K$ 的秩允许为 $+\infty$。容易知道，在 $K$ 的秩的定义中，可以将列向量换成行向量，从而可以证明 $K$ 的秩和其转置 $K^{\mathrm{T}}$ 的秩是相同的。

**命题 1.8 (无限阶矩阵乘积的秩)** @143

设矩阵 $X$ 的行数是可列无限，列数为 $n$，矩阵 $Y$ 的行数为 $n$，列数为可列无限，则 $XY$ 有意义，其行数和列数均为可列无限，且$$\operatorname{rank}(XY)\le\min\{\operatorname{rank}X,\operatorname{rank}Y\}.\tag{1.15}$$

**引理 (乘积的列向量是左因子的线性组合)** @143

设矩阵 $X=(x_1,\cdots,x_k,x_{k+1},\cdots,x_n)$ 以 $x_1,\cdots,x_n$ 为列向量，其中 $x_i$ 属于上文定义的线性空间 $X$，$i=1,2,\cdots,n$；又设 $Y=(y_{ij})$，$y_{ij}\in\mathbb{R}$，$i=1,2,\cdots,n$，$j=1,2,\cdots$，则$$XY\equiv Z=(z_1,z_2,\cdots),\qquad z_j=\sum_{i=1}^{n}y_{ij}x_i,\quad j=1,2,\cdots,$$即 $XY$ 中的每个列向量都是 $X$ 中列向量的线性组合。

**命题 (Hankel 矩阵的秩不超过系统阶数)** @144

利用行数或列数的有限性，对于 $A\in\mathbb{R}^{n\times n}$，$B\in\mathbb{R}^{n\times m}$，$C\in\mathbb{R}^{p\times n}$，成立$$\begin{cases}\operatorname{rank}(B,AB,\cdots,A^jB,\cdots)\le n,\\[4pt]\operatorname{rank}\begin{pmatrix}C\\CA\\\vdots\\CA^j\\\vdots\end{pmatrix}\le n,\end{cases}\tag{1.22}$$从而由命题 1.8 和 (1.14) 得到$$\operatorname{rank}K\le n.\tag{1.23}$$这就是说，如果 $K$ 是某线性系统 $[A,B,C]$ 所确定的 Hankel 矩阵，那么 (1.23) 成立。

**例 (秩为无穷的 Hankel 矩阵)** @144

需要指出的是，Hankel 矩阵的秩一般未必是有限的。例如$$K=\begin{pmatrix}1&\dfrac{1}{2!}&\dfrac{1}{3!}&\cdots\\[4pt]\dfrac{1}{2!}&\dfrac{1}{3!}&\dfrac{1}{4!}&\cdots\\[4pt]\dfrac{1}{3!}&\dfrac{1}{4!}&\dfrac{1}{5!}&\cdots\\\vdots&\vdots&\vdots&\\\end{pmatrix}\tag{1.24}$$就是无理函数$$\mathrm{e}^{s^{-1}}-1=\sum_{j=1}^{\infty}\frac{1}{j!}s^{-j}$$对应的 Hankel 矩阵。因为有限阶线性系统的传递函数一定是有理函数，所以 (1.24) 不可能存在有限阶线性系统的实现；由此可知 (1.24) 不会是一个有限阶线性系统对应的 Hankel 矩阵。

在下一节中将证明：有限秩的 Hankel 矩阵一定存在有限阶线性系统的实现。现在要问：假如给出一个有限秩的 Hankel 矩阵 $K$，是否可以找到一个有限阶线性系统使其 Hankel 矩阵正好是 $K$？这就是下面要讨论的线性系统的实现问题。

### 5.2 线性系统的实现（p145–151）

本节研究在什么条件下线性系统是可以实现的。

#### 5.2 线性系统的实现 @145

**构造 (无限阶的形式实现)** @145

现给定 Hankel 矩阵$$K=\begin{pmatrix}A_1&A_2&A_3&\cdots\\A_2&A_3&A_4&\cdots\\A_3&A_4&A_5&\cdots\\\vdots&\vdots&\vdots&\\\end{pmatrix},\tag{2.1}$$其中 $A_j\in\mathbb{R}^{p\times m}$，$j=1,2,\cdots$。假设 $\operatorname{rank}K<+\infty$。记 $Y$ 为 $K$ 的列向量张成的线性空间，它是上一节定义的 $X$ 的子空间，且 $Y$ 的维数就是 $K$ 的秩。定义一个行数与列数均为可列无限的矩阵$$\hat{A}=\begin{pmatrix}0&I_p&0&0&\cdots\\0&0&I_p&0&\cdots\\0&0&0&I_p&\cdots\\\vdots&\vdots&\vdots&\vdots&\\\end{pmatrix},\tag{2.2}$$其中 $I_p$ 为 $p$ 阶单位矩阵，则有$$\hat{A}\begin{pmatrix}x_1\\x_2\\\vdots\\x_j\\\vdots\end{pmatrix}=\begin{pmatrix}x_{p+1}\\x_{p+2}\\\vdots\\x_{p+j}\\\vdots\end{pmatrix},\qquad\forall\begin{pmatrix}x_1\\x_2\\\vdots\\x_j\\\vdots\end{pmatrix}\in X.\tag{2.3}$$易见$$\hat{A}\begin{pmatrix}A_i\\A_{i+1}\\\vdots\\A_{i+j}\\\vdots\end{pmatrix}=\begin{pmatrix}A_{i+1}\\A_{i+2}\\\vdots\\A_{i+j+1}\\\vdots\end{pmatrix},\qquad i\ge 1.\tag{2.4}$$

再定义$$\begin{cases}\hat{C}=(I_p,0,\cdots,0,\cdots),\qquad I_p\ \text{为}\ p\ \text{阶单位矩阵},\\[4pt]\hat{B}=\begin{pmatrix}A_1\\A_2\\\vdots\\A_j\\\vdots\end{pmatrix},\end{cases}\tag{2.5}$$则有$$\begin{cases}\hat{C}\hat{B}=A_1,\\\hat{C}\hat{A}\hat{B}=A_2,\\\qquad\vdots\\\hat{C}\hat{A}^{j-1}\hat{B}=A_j,\\\qquad\vdots\end{cases}\tag{2.6}$$因此，从形式上来看，系统 $[\hat{A},\hat{B},\hat{C}]$ 的 Hankel 矩阵恰好是 $K$。然而这里 $\hat{A},\hat{B},\hat{C}$ 的行数或列数是可列无限的，而所要求的是行数与列数均为有限的矩阵。

**引理 (有限秩 Hankel 矩阵的有限阶构造)** @146

当 $\operatorname{rank}K=n<+\infty$ 时，$Y$ 是 $X$ 的一个 $n$ 维线性子空间。设 $Y$ 是由线性无关向量组 $y^1,y^2,\cdots,y^n$ 张成的，其中 $y^j\in Y$，$\forall j=1,2,\cdots,n$。因为由 (2.5) 定义的 $\hat{B}$ 的 $m$ 个列向量都是 $Y$ 的元素，所以它们都可以用 $y^1,y^2,\cdots,y^n$ 的线性组合表示，从而存在矩阵 $B\in\mathbb{R}^{n\times m}$，使得$$\hat{B}=\begin{pmatrix}A_1\\A_2\\\vdots\\A_j\\\vdots\end{pmatrix}=(y^1,y^2,\cdots,y^n)B.\tag{2.7}$$又从 (2.1) 和 (2.4) 知道$$\hat{A}y^j\in Y,\qquad \forall j=1,2,\cdots,n,\tag{2.8}$$从而存在 $A\in\mathbb{R}^{n\times n}$，使得$$\hat{A}(y^1,y^2,\cdots,y^n)=(y^1,y^2,\cdots,y^n)A.\tag{2.9}$$定义$$\Phi=(y^1,y^2,\cdots,y^n),\tag{2.10}$$$$C=\hat{C}\Phi,\tag{2.11}$$那么 $C\in\mathbb{R}^{p\times n}$。由 $A_j=\hat{C}\hat{A}^{j-1}\hat{B}$ 及 (2.7)–(2.11) 得$$A_j=\hat{C}\hat{A}^{j-1}\Phi B=\hat{C}\Phi A^{j-1}B=CA^{j-1}B,\qquad\forall j\ge 1.\tag{2.12}$$这就是说，所构造的系统 $[A,B,C]$ 的 Hankel 矩阵正好是 $K$。

**定理 2.1 (Hankel 矩阵可实现的充要条件)** @147

由 (2.1) 给出的 Hankel 矩阵 $K$ 是某个有限阶线性系统 $[A,B,C]$ 的 Hankel 矩阵，当且仅当 $K$ 是有限秩的。

**构造 ($A_j$ 从某项起为零时的显式实现)** @147

假定在 (2.1) 中有$$A_j=0,\qquad \forall j\ge k\ge 1,\tag{2.13}$$则作出 $K$ 的实现是很容易的。事实上，若令$$A=\begin{pmatrix}0&I_p&0&\cdots&0\\0&0&I_p&\cdots&0\\\vdots&\vdots&\vdots&&\vdots\\0&0&0&\cdots&I_p\\0&0&0&\cdots&0\end{pmatrix}_{kp\times kp},$$$$C=(I_p,0,\cdots,0)_{p\times kp},\qquad B=\begin{pmatrix}A_1\\\vdots\\A_k\end{pmatrix}_{kp\times m},$$则 $[A,B,C]$ 的 Hankel 矩阵就是 $K$，故 $[A,B,C]$ 是 $K$ 的一个实现。

**例 2.2** @148

设系统的 Hankel 矩阵为$$K=\begin{pmatrix}1&2&3&0&\cdots\\2&3&0&0&\cdots\\3&0&0&0&\cdots\\0&0&0&0&\cdots\\\vdots&\vdots&\vdots&\vdots&\\\end{pmatrix},$$根据上面的结果，我们可以取$$A=\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix},\qquad B=\begin{pmatrix}1\\2\\3\end{pmatrix},\qquad C=(1\ \ 0\ \ 0),$$则 $[A,B,C]$ 是 $K$ 的一个实现。

**例 2.3** @148

设 $F(s)=\dfrac{1}{s}-\dfrac{2}{s^2}+\dfrac{4}{s^3}$，则相应地有$$\begin{cases}A_1=1,\\A_2=-2,\\A_3=4,\\A_j=0,\qquad j>3.\end{cases}$$若取$$A=\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix},\qquad B=\begin{pmatrix}1\\-2\\4\end{pmatrix},\qquad C=(1\ \ 0\ \ 0),$$则 $[A,B,C]$ 是 $F(s)$ 的一个实现。

**例 2.4 (传递矩阵的两种实现)** @148

设$$F(s)=\begin{pmatrix}s^{-1}-2s^{-2}&2s^{-1}\\s^{-2}-2s^{-3}&0\end{pmatrix}=\begin{pmatrix}1&2\\0&0\end{pmatrix}s^{-1}+\begin{pmatrix}-2&0\\1&0\end{pmatrix}s^{-2}+\begin{pmatrix}0&0\\-2&0\end{pmatrix}s^{-3},$$所以$$A_1=\begin{pmatrix}1&2\\0&0\end{pmatrix},\qquad A_2=\begin{pmatrix}-2&0\\1&0\end{pmatrix},\qquad A_3=\begin{pmatrix}0&0\\-2&0\end{pmatrix},\qquad A_j=0,\quad j>3.$$因此，若定义$$A=\begin{pmatrix}0&0&1&0&0&0\\0&0&0&1&0&0\\0&0&0&0&1&0\\0&0&0&0&0&1\\0&0&0&0&0&0\\0&0&0&0&0&0\end{pmatrix},\qquad B=\begin{pmatrix}1&2\\0&0\\-2&0\\1&0\\0&0\\-2&0\end{pmatrix},\qquad C=\begin{pmatrix}1&0&0&0&0&0\\0&1&0&0&0&0\end{pmatrix},$$则 $[A,B,C]$ 是 $F(s)$ 的一个实现，它是 $6$ 阶的。

改用定理 2.1 的方法来求 $F(s)$ 的实现，注意到$$K=\begin{pmatrix}1&2&-2&0&0&0&\cdots\\0&0&1&0&-2&0&\cdots\\-2&0&0&0&0&0&\cdots\\1&0&-2&0&0&0&\cdots\\0&0&0&0&0&0&\cdots\\-2&0&0&0&0&0&\cdots\\0&0&0&0&0&0&\cdots\\\vdots&\vdots&\vdots&\vdots&\vdots&\vdots&\\\end{pmatrix}\equiv(y^1,y^2,y^3,0,y^4,0,\cdots).$$易知上式中定义的 $y^1,y^2,y^3,y^4$ 是线性无关的，故 $\operatorname{rank}K=4$。容易得到$$\hat{B}=(y^1,y^2)=(y^1,y^2,y^3,y^4)\begin{pmatrix}1&0\\0&1\\0&0\\0&0\end{pmatrix}\equiv(y^1,y^2,y^3,y^4)B,$$$$\hat{A}(y^1,y^2,y^3,y^4)=(y^3,0,y^4,0)=(y^1,y^2,y^3,y^4)\begin{pmatrix}0&0&0&0\\0&0&0&0\\1&0&0&0\\0&0&1&0\end{pmatrix}\equiv(y^1,y^2,y^3,y^4)A,$$$$C=\hat{C}\Phi=\begin{pmatrix}1&0&0&\cdots\\0&1&0&\cdots\end{pmatrix}(y^1,y^2,y^3,y^4)=\begin{pmatrix}1&2&-2&0\\0&0&1&-2\end{pmatrix}.$$故得$$A=\begin{pmatrix}0&0&0&0\\0&0&0&0\\1&0&0&0\\0&0&1&0\end{pmatrix},\qquad B=\begin{pmatrix}1&0\\0&1\\0&0\\0&0\end{pmatrix},\qquad C=\begin{pmatrix}1&2&-2&0\\0&0&1&-2\end{pmatrix}.$$此时 $CB=A_1$，$CAB=A_2$，$CA^2B=A_3$，且 $A_j=CA^{j-1}B=0\ (j\ge 4)$，故 $[A,B,C]$ 也是 $F(s)$ 的一个实现，它是 $4$ 阶的。

**注 (实现的阶数不唯一)** @151

上述例子表明，对于同一个传递矩阵或有有限秩的 Hankel 矩阵，可以有不同阶数的线性系统实现。人们当然希望获得的线性系统阶数越低越好，这就是下一节要讨论的最小实现问题。

**构造 (只用有限阶 Hankel 矩阵的简化算法)** @151

在一般情况下，上面的实现方法需要用到无限阶矩阵，给运算带来不便，尤其无法用于计算机编程计算。下面考虑仅用有限阶 Hankel 矩阵的实现方法。假定已经知道系统实现的阶数估计 $N$，即存在一个阶数为 $n\le N$ 的实现。记$$K_n=\begin{pmatrix}A_1&A_2&\cdots&A_n\\A_2&A_3&\cdots&A_{n+1}\\\vdots&\vdots&&\vdots\\A_n&A_{n+1}&\cdots&A_{2n-1}\end{pmatrix}=\begin{pmatrix}C\\CA\\\vdots\\CA^{n-1}\end{pmatrix}(B,AB,\cdots,A^{n-1}B),$$由 Cayley–Hamilton 定理，有$$\operatorname{rank}K_n=\operatorname{rank}K_{n+1}=\cdots=\operatorname{rank}K.$$将前面介绍的方法稍加改造就能得到一个简化算法。设 $\operatorname{rank}K_n=k$，则在 $K_n$ 中存在线性无关的列向量组 $\{y^1,y^2,\cdots,y^k\}$。显然存在矩阵 $B\in\mathbb{R}^{k\times m}$，使得$$\begin{pmatrix}A_1\\A_2\\\vdots\\A_n\end{pmatrix}=(y^1,y^2,\cdots,y^k)B.\tag{2.14}$$而且上述 $B$ 与利用 (2.7) 得到的结果是相同的。类似地，可以求出 $A,C$，结果与用 $K$ 得到的完全一样。最后可以利用传递矩阵 $F(s)$ 的最小公分母的次数和输入变量的维数之乘积作为 $n$ 的估计。如例 2.4，显然 $\operatorname{rank}K=\operatorname{rank}K_n=4$。

### 5.3 最小实现（p152–155）

**命题 (实现既是能控的又是能观的)** @152

根据

$$n=\operatorname{rank}K\leqslant\min\left\{\operatorname{rank}\begin{pmatrix}C\\CA\\\vdots\\CA^{n-1}\\\vdots\end{pmatrix},\ \operatorname{rank}(B,AB,\cdots,A^{n-1}B,\cdots)\right\}\leqslant n, \tag{3.1}$$

可得

$$\operatorname{rank}\begin{pmatrix}C\\CA\\\vdots\\CA^{n-1}\\\vdots\end{pmatrix}=n,\qquad\operatorname{rank}(B,AB,\cdots,A^{n-1}B,\cdots)=n. \tag{3.2}$$

再根据 Cayley-Hamilton 定理，知

$$A^n+\alpha_1A^{n-1}+\cdots+\alpha_{n-1}A+\alpha_nI=\mathbf{0},$$

这里

$$\det(\lambda I-A)=\lambda^n+\alpha_1\lambda^{n-1}+\cdots+\alpha_{n-1}\lambda+\alpha_n.$$

从而

$$\operatorname{rank}\begin{pmatrix}C\\CA\\\vdots\\CA^{n-1}\end{pmatrix}=\operatorname{rank}\begin{pmatrix}C\\CA\\\vdots\\CA^{n-1}\\\vdots\end{pmatrix}=n, \tag{3.3}$$

$$\operatorname{rank}(B,AB,\cdots,A^{n-1}B)=\operatorname{rank}(B,AB,\cdots,A^{n-1}B,\cdots)=n.$$

所以，实现 $[A,B,C]$ 既是能控的，又是能观的。

**命题 (任一有限阶实现的阶数不小于 Hankel 矩阵的秩)** @153

如果 $[\tilde A,\tilde B,\tilde C]$ 是 $K$ 的任一有限阶实现，$\tilde A\in\mathbb{R}^{\tilde n\times\tilde n}$，那么由

$$n=\operatorname{rank}K\leqslant\min\left\{\operatorname{rank}\begin{pmatrix}\tilde C\\\tilde C\tilde A\\\vdots\\\tilde C\tilde A^{\tilde n-1}\\\vdots\end{pmatrix},\ \operatorname{rank}(\tilde B,\tilde A\tilde B,\cdots,\tilde A^{\tilde n-1}\tilde B,\cdots)\right\}\leqslant\tilde n$$

可以得到，$K$ 的任一有限阶实现的阶数 $\tilde n\geqslant n$。因此，当 $\operatorname{rank}K=n$ 时，$n$ 阶的实现 $[A,B,C]$ 是最小阶数的实现，人们称它为 $K$ 的**最小实现**，也称为 $K$ 的**正则实现**。从上述讨论中看到，最小实现是既能控又能观的实现。

**定理 3.1 (最小实现的唯一性)** @154

设 $[\hat A,\hat B,\hat C]$ 是 $K$ 的另一最小实现，那么存在可逆矩阵 $T$ 使得

$$\begin{cases}T\hat A=AT,\\T\hat B=B,\\\hat C=CT,\end{cases} \tag{3.4}$$

即在相差一个可逆线性变换的意义下，最小实现是唯一的。

**引理 (最小实现的结构矩阵与过渡矩阵)** @155

设 $[A,B,C]$ 与 $[\hat A,\hat B,\hat C]$ 都是 $K$ 的最小实现，记

$$\Phi=\begin{pmatrix}C\\CA\\\vdots\\CA^{n-1}\end{pmatrix},\qquad\hat\Phi=\begin{pmatrix}\hat C\\\hat C\hat A\\\vdots\\\hat C\hat A^{n-1}\end{pmatrix},\qquad\Gamma=(B,AB,\cdots,A^{n-1}B),\qquad\hat\Gamma=(\hat B,\hat A\hat B,\cdots,\hat A^{n-1}\hat B),$$

则

$$\operatorname{rank}\Phi=\operatorname{rank}\Gamma=\operatorname{rank}\hat\Phi=\operatorname{rank}\hat\Gamma=n, \tag{3.5}$$

$$\Phi\Gamma=\hat\Phi\hat\Gamma, \tag{3.6}$$

而由 (3.5) 知 $\hat\Phi^{\mathrm T}\hat\Phi$ 与 $\hat\Gamma\hat\Gamma^{\mathrm T}$ 都是 $n$ 阶可逆矩阵。记

$$\hat T=(\hat\Phi^{\mathrm T}\hat\Phi)^{-1}\hat\Phi^{\mathrm T}\Phi,\qquadT=\Gamma\hat\Gamma^{\mathrm T}(\hat\Gamma\hat\Gamma^{\mathrm T})^{-1}, \tag{3.8}$$

则 $\hat TT=I$，即 $\hat T$ 和 $T$ 互为逆矩阵；并且

$$\hat\Gamma=\hat T\Gamma,\qquad \hat\Phi=\Phi T.$$

又由 $[A,B,C]$ 和 $[\hat A,\hat B,\hat C]$ 都是 $K$ 的实现，容易知道

$$\Phi A\Gamma=\hat\Phi\hat A\hat\Gamma, \tag{3.9}$$

由此得到 $\hat A=T^{-1}AT$，$\hat B=T^{-1}B$，$\hat C=CT$，即 (3.4) 成立。

**注 (最小实现与传递矩阵)** @155

上面定理表明，当 Hankel 矩阵 $K$ 的秩是有限时，它的最小实现是互相同构的。

从上述讨论中我们发现，传递矩阵或最小实现仅仅能够反映线性系统的既能控又能观的部分。线性系统的不能观、不能控部分在其传递矩阵中是不能体现出来的。

## 第6章 不变性原理与干扰解耦

### 6.1 常系数线性常微分方程组（p158–171）

假设系统为

$$\begin{cases}a_{11}(D)x_1(t)+a_{12}(D)x_2(t)+\cdots+a_{1n}(D)x_n(t)=f_1(t),\\a_{21}(D)x_1(t)+a_{22}(D)x_2(t)+\cdots+a_{2n}(D)x_n(t)=f_2(t),\\\cdots\cdots\cdots\cdots\cdots,\\a_{n1}(D)x_1(t)+a_{n2}(D)x_2(t)+\cdots+a_{nn}(D)x_n(t)=f_n(t),\end{cases} \tag{1.1}$$

其中 $D=\dfrac{\mathrm{d}}{\mathrm{d}t}$ 是一阶微分算子，$a_{ij}(D)\equiv\sum\limits_{l=0}^{L_{ij}}a_{ij}^{(l)}D^l$ 是 $L_{ij}$ 阶微分算子，$a_{ij}^{(l)}$ 是常数（$i,j=1,2,\cdots,n$；$l=0,1,\cdots,L_{ij}$），且当 $L_{ij}\neq0$ 时 $a_{ij}^{L_{ij}}\neq0$。函数 $f_i(\cdot)$（$i=1,2,\cdots,n$）具有任意阶导数。若记

$$x(t)=(x_1(t),x_2(t),\cdots,x_n(t))^{\mathrm T},\qquadf(t)=(f_1(t),f_2(t),\cdots,f_n(t))^{\mathrm T},\qquadA(D)\equiv(a_{ij}(D))_{i,j=1}^{n},$$

那么 (1.1) 可简记为

$$A(D)x(t)=f(t). \tag{1.2}$$

当 $n=1$ 时，(1.2) 是一个高阶常微分方程，可以用常微分方程理论求解。如果 $\max\limits_{1\leqslant i,j\leqslant n}L_{ij}=1$，那么方程组 (1.2) 是一阶的，它可以写成

$$A^{(1)}\frac{\mathrm{d}x(t)}{\mathrm{d}t}+A^{(0)}x(t)=f(t).$$

进一步，当行列式 $\det A^{(1)}\equiv\det(a_{ij}^{(1)})\neq0$ 时，上式等价于

$$\frac{\mathrm{d}x(t)}{\mathrm{d}t}+(A^{(1)})^{-1}A^{(0)}x(t)=(A^{(1)})^{-1}f(t),$$

它是一个标准的一阶常系数线性常微分方程组，可以用常数变易公式求解。但是，如果 $\det A^{(1)}\equiv\det(a_{ij}^{(1)})=0$，那么就不能按照一阶常微分方程组的解法来求解。

**例 (不能化为一阶方程组的二阶方程组)** @159

$$A(D)=\begin{pmatrix}D&D-1\\0&1\end{pmatrix},\qquadA^{(1)}=\begin{pmatrix}1&1\\0&0\end{pmatrix},\qquadA^{(0)}=\begin{pmatrix}0&-1\\0&1\end{pmatrix}.$$

此时 $\det A^{(1)}=0$。而直接解 (1.1) 可得

$$x_1(t)=\int\left[f_1(t)+f_2(t)-f_2'(t)\right]\mathrm{d}t,\qquad x_2(t)=f_2(t).$$

我们现在讨论 (1.1) 或 (1.2) 一般的求解方法。如果忽略微分算子 $D$，(1.2) 或 (1.1) 很像线性代数方程组。然而，我们不能简单地应用线性代数方程组的求解方法来解 (1.1)，因为当 $P(D)$ 是一个以 $D$ 为未定元的多项式（称为一个微分算子多项式）时，$\dfrac{1}{P(D)}$ 的意义一般来说是不明确的。不过，如果把求解线性代数方程组的消元法则加以推广，则有可能对研究常系数线性常微分方程组 (1.1) 的求解问题有所帮助。

#### 一、 线性常微分方程组的初等变换与初等矩阵 @159

现在，让我们来仔细考察一下方程组 (1.1)。

第一，把 (1.1) 的第 $i$ 个方程与第 $j$ 个方程对调，不会影响 (1.1) 的求解。这相当于用矩阵

$$E(i,j)\equiv\begin{pmatrix}1& & & & & & \\& \ddots& & & & & \\& & 1& & & & \\& & & 0& \cdots& 1& \\& & & \vdots& 1& \vdots& \\& & & 1& \cdots& 0& \\& & & & & & \ddots\end{pmatrix} \tag{1.3}$$

同时左乘微分方程组 (1.2) 的两端，其中第 $i$ 行与第 $j$ 行互换，空白处为 $0$，未写出的对角元为 $1$。这时 (1.2) 的系数矩阵变为 $E(i,j)A(D)$，右端变为 $E(i,j)f(t)$。

第二，对微分方程组 (1.1) 的第 $i$ 个方程乘以非零的常数 $\alpha$，也不会改变 (1.1) 的解。这相当于用矩阵

$$E_i(\alpha)\equiv\begin{pmatrix}1& & & & \\& \ddots& & & \\& & \alpha& & \\& & & 1& \\& & & & \ddots\end{pmatrix} \tag{1.4}$$

同时左乘微分方程组 (1.2) 的两端，这时 (1.2) 的系数矩阵变为 $E_i(\alpha)A(D)$，而右端变为 $E_i(\alpha)f(t)$。

第三，用微分算子多项式 $P(D)$ 作用到微分方程组 (1.1) 的第 $j$ 个方程后，加到第 $i$ 个方程上，并保留原来的第 $j$ 个方程。这时同样不会改变 (1.1) 的解。这相当于用矩阵

$$E_{ij}(P(D))\equiv\begin{pmatrix}1& & & & \\& \ddots& & & \\& & 1& \cdots& P(D)\\& & & \ddots& \vdots\\& & & & 1\end{pmatrix} \tag{1.5}$$

同时左乘微分方程组 (1.2) 的两端，这时 (1.2) 的系数矩阵变为 $E_{ij}(P(D))A(D)$，右端变为 $E_{ij}(P(D))f(t)$。此处，我们按照通常多项式的加法和乘法定义任意两个微分算子多项式 $P(D)$ 与 $Q(D)$ 之和 $P(D)+Q(D)$ 及乘积 $P(D)\cdot Q(D)$。例如 $P(D)=2D^2+3D-1$，$Q(D)=D+2$，则

$$P(D)+Q(D)=2D^2+4D+1,$$

$$P(D)\cdot Q(D)=(2D^2+3D-1)(D+2)=2D^3+7D^2+5D-2.$$

**定义 (初等矩阵与初等变换)** @161

矩阵 $E(i,j)$，$E_i(\alpha)$ 和 $E_{ij}(P(D))$ 的行列式分别为 $-1$，$\alpha$ 和 $1$，都是不等于零的常数，我们称这三种矩阵为**初等矩阵**。并且容易看出，它们的逆矩阵分别是 $E(j,i)$，$E_i(\alpha^{-1})$ 和 $E_{ij}(-P(D))$。对于方程组和矩阵乘上初等矩阵，称为**初等变换**。对线性常微分方程组进行初等变换不会改变该方程组的解。

**定义 (模方阵)** @161

当方阵 $U(D)$ 的行列式是不为零的常数时，我们称 $U(D)$ 为**模方阵**。根据矩阵逆的性质，模方阵 $U(D)$ 总存在逆矩阵 $U^{-1}(D)$，它也是模方阵。所有 $n$ 阶模方阵构成的集合记为 $\mathcal{M}_n$。显然，方阵 (1.3)，(1.4)，(1.5) 都是 $\mathcal{M}_n$ 中的元素。

**命题 (模方阵左乘不改变解集)** @161

如果 $U(D)\in\mathcal{M}_n$，那么方程组 (1.1) 的解必是方程组

$$U(D)A(D)x(t)=U(D)f(t) \tag{1.6}$$

的解；反之，方程组 (1.6) 的解必是方程组 (1.1) 的解。这就是说，用模方阵同时左乘方程组 (1.1) 的两端，不会改变方程组的解。

#### 二、 $A(D)$ 的典则型与模方阵 @161

为进一步研究，我们来讨论微分算子多项式（以下简称多项式）的一些基本性质。

**定义 1.1 (因式与倍式)** @162

假设 $f(D)$ 和 $g(D)$ 为多项式，如果存在多项式 $q(D)$，使得

$$f(D)=q(D)g(D),$$

我们称 $g(D)$ 为 $f(D)$ 的**因式**，$f(D)$ 为 $g(D)$ 的**倍式**。

易知，非零常数（零次多项式）是任何多项式的因式，而 $0$ 是任何多项式的倍式。

**定理 1.2 (剩余除法定理)** @162

假设 $f(D)$ 和 $g(D)$ 为多项式，$g(D)\neq0$，则存在唯一的多项式 $q(D)$ 和 $r(D)$，使得

$$f(D)=q(D)g(D)+r(D), \tag{1.7}$$

其中 $r(D)\equiv0$ 或者 $r(D)$ 的次数低于 $g(D)$ 的次数。

特别地，当 $g(D)$ 的次数高于 $f(D)$ 的次数时，$q(D)=0$，$r(D)=f(D)$。

**定义 1.3 (公因式、最大公因式与互素)** @163

假设 $f(D)$ 和 $g(D)$ 为多项式，如果多项式 $h(D)$ 既是 $f(D)$ 的因式又是 $g(D)$ 的因式，我们称 $h(D)$ 为 $f(D)$ 和 $g(D)$ 的**公因式**。如果 $f(D)$ 和 $g(D)$ 的公因式 $d(D)$ 是 $f(D)$ 和 $g(D)$ 的其他任何公因式的倍式，我们称 $d(D)$ 为 $f(D)$ 和 $g(D)$ 的**最大公因式**，记为 $\{f(D),g(D)\}$。如果 $f(D)$ 和 $g(D)$ 的最大公因式是零次多项式，我们称它们为**互素（互质）**多项式。

例如 $D^3$，$D^5$ 的公因式有 $D$，$D^2$，$D^3$，最大公因式为 $D^3$；$D+1$，$D-1$ 为互素多项式。容易验证，任意多项式 $f(D)$ 与非零常数的最大公因式是 $1$，与 $0$ 的最大公因式是它本身。

我们还可以同样地定义 $n$ 个多项式 $a_1(D),a_2(D),\cdots,a_n(D)$ 的最大公因式 $\{a_1(D),a_2(D),\cdots,a_n(D)\}$。

**引理 1.4 (最大公因式的模方阵刻画)** @163

假设 $a_1(D),a_2(D),\cdots,a_n(D)$ 为 $n$ 个多项式，记 $\boldsymbol{a}(D)=(a_1(D),a_2(D),\cdots,a_n(D))^{\mathrm T}$。如果存在 $n$ 阶模方阵 $U(D)$ 使得

$$U(D)\boldsymbol{a}(D)=(d(D),0,\cdots,0)^{\mathrm T}, \tag{1.8}$$

则 $d(D)=\{a_1(D),a_2(D),\cdots,a_n(D)\}$。

**构造 (两个多项式的最大公因式：$n=2$ 时的初等变换)** @164

先观察 $n=2$ 的情形，不妨设 $a_1(D)$，$a_2(D)$ 全不为零。注意到初等矩阵和有限个初等矩阵的乘积都是模方阵。故当 $a_1(D)$ 的次数小于 $a_2(D)$ 的次数时，我们可以作初等变换交换它们的次序。从而，不失一般性，我们可以考虑 $a_1(D)$ 的次数大于等于 $a_2(D)$ 的次数的情况。利用剩余除法，存在多项式 $g(D)$ 和 $r(D)$，使得

$$a_1(D)\equiv g(D)a_2(D)+r(D), \tag{1.9}$$

其中 $r(D)\equiv0$ 或者 $r(D)$ 的次数低于 $a_2(D)$ 的次数。于是作初等变换

$$\begin{pmatrix}1&-g(D)\\0&1\end{pmatrix}\begin{pmatrix}a_1(D)\\a_2(D)\end{pmatrix}=\begin{pmatrix}r(D)\\a_2(D)\end{pmatrix}.$$

再作一次初等变换

$$\begin{pmatrix}0&1\\1&0\end{pmatrix}\begin{pmatrix}r(D)\\a_2(D)\end{pmatrix}=\begin{pmatrix}a_2(D)\\r(D)\end{pmatrix}.$$

如果 $r(D)\equiv0$，则

$$U(D)=\begin{pmatrix}0&1\\1&0\end{pmatrix}\begin{pmatrix}1&-g(D)\\0&1\end{pmatrix}=\begin{pmatrix}0&1\\1&-g(D)\end{pmatrix}$$

就是我们所要求的。否则 $r(D)$ 是一个次数小于 $a_2(D)$ 次数的多项式。此时记 $a_1^{(1)}(D)=a_2(D)$，$a_2^{(1)}(D)=r(D)$，重复上面的过程。只要 $a_2^{(k)}(D)\neq0$，它的次数便关于 $k$ 严格递减，所以存在 $\bar k>0$，经过 $\bar k$ 次循环 $a_2^{(\bar k)}(D)=0$。此时我们只要将每次循环所作的初等变换矩阵依次左乘后得到的矩阵记为 $U(D)$ 即可。

**定理 1.5 (模方阵 $U(D)$ 的存在性)** @164

对于多项式 $a_1(D),a_2(D),\cdots,a_n(D)$，存在由初等矩阵乘积构成的模方阵 $U(D)$ 使得 (1.8) 成立。

**推论 1.6 (最大公因式的多项式表示)** @165

假设 $d(D)$ 是多项式 $a_1(D),a_2(D),\cdots,a_n(D)$ 的最大公因式，则存在 $n$ 个多项式 $q_1(D),q_2(D),\cdots,q_n(D)$，使得

$$\sum_{i=1}^{n}q_i(D)a_i(D)=d(D). \tag{1.10}$$

特别地，当 $a_1(D),a_2(D),\cdots,a_n(D)$ 互素时，存在 $n$ 个多项式 $q_1(D),q_2(D),\cdots,q_n(D)$，使得

$$\sum_{i=1}^{n}q_i(D)a_i(D)=1. \tag{1.11}$$

由上可见，利用初等矩阵对方程组 (1.1) 进行变换，使得变换后的方程组具有较简单的形式，就有可能求出方程组的解。值得注意的是，利用初等矩阵进行的变换不涉及微分算子多项式的除法，因此不会出现形如 $\dfrac{1}{P(D)}$ 的意义不明确的项，这一点是非常重要的。

**命题 (非奇异矩阵的列约化)** @166

为了保证方程组 (1.1) 有解，假定 $A(D)$ 的行列式 $\det(A(D))\neq0$，此时称 $A(D)$ 是**非奇异的**。

由于矩阵 $A(D)$ 非奇异，所以它的第 $n$ 列元素的公因式 $a^*_{1,n}(D)$ 不是 $0$。由定理 1.5，存在 $n$ 阶模方阵 $E^1(D)$，使得

$$E^1(D)\begin{pmatrix}a_{1,n}(D)\\a_{2,n}(D)\\\vdots\\a_{n,n}(D)\end{pmatrix}=\begin{pmatrix}a^*_{1,n}(D)\\0\\\vdots\\0\end{pmatrix}.$$

于是

$$E^1(D)A(D)=\begin{pmatrix}a^*_{1,1}&a^*_{1,2}&\cdots&a^*_{1,n-1}&a^*_{1,n}\\\alpha_{2,1}&\alpha_{2,2}&\cdots&\alpha_{2,n-1}&0\\\vdots&\vdots& &\vdots&\vdots\\\alpha_{n-1,1}&\alpha_{n-1,2}&\cdots&\alpha_{n-1,n-1}&0\\\alpha_{n,1}&\alpha_{n,2}&\cdots&\alpha_{n,n-1}&0\end{pmatrix}(D).$$

如同上面的操作，存在 $n-1$ 阶模方阵 $E^2(D)$ 满足

$$E^2(D)\begin{pmatrix}\alpha_{2,1}&\alpha_{2,2}&\cdots&\alpha_{2,n-1}\\\vdots&\vdots& &\vdots\\\alpha_{n-1,1}&\alpha_{n-1,2}&\cdots&\alpha_{n-1,n-1}\\\alpha_{n,1}&\alpha_{n,2}&\cdots&\alpha_{n,n-1}\end{pmatrix}(D)=\begin{pmatrix}a^*_{2,1}&a^*_{2,2}&\cdots&a^*_{2,n-2}&a^*_{2,n-1}\\\tilde\alpha_{3,1}&\tilde\alpha_{3,2}&\cdots&\tilde\alpha_{3,n-2}&0\\\vdots&\vdots& &\vdots&\vdots\\\tilde\alpha_{n-1,1}&\tilde\alpha_{n-1,2}&\cdots&\tilde\alpha_{n-1,n-2}&0\\\tilde\alpha_{n,1}&\tilde\alpha_{n,2}&\cdots&\tilde\alpha_{n,n-2}&0\end{pmatrix}(D),$$

其中 $a^*_{2,n-1}(D)=\{\alpha_{2,n-1}(D),\cdots,\alpha_{n-1,n-1}(D),\alpha_{n,n-1}(D)\}$。

**命题 ($A(D)$ 的典则型)** @168

仿照上面的方法，我们对第 $n-2$ 列到第 $2$ 列分别进行变换。我们看到一定存在模方阵，使得它们的乘积 $\tilde E(D)$ 满足

$$\tilde E(D)A(D)=\begin{pmatrix}a^*_{1,1}&a^*_{1,2}&\cdots&a^*_{1,n-1}&a^*_{1,n}\\a^*_{2,1}&a^*_{2,2}&\cdots&a^*_{2,n-1}&0\\\vdots&\vdots& &\vdots&\vdots\\a^*_{n-1,1}&a^*_{n-1,2}&\cdots&0&0\\a^*_{n,1}&0&\cdots&0&0\end{pmatrix}(D). \tag{1.12}$$

由于

$$\prod_{i=1}^{n}\left[(-1)^{\frac{n(n-1)}{2}}a^*_{i,n-i+1}(D)\right]=\det(\tilde E(D)A(D))=\det(\tilde E(D))\det(A(D))\neq0, \tag{1.13}$$

所以 (1.12) 中位于副对角线上的元素 $a^*_{i,n-i+1}(D)$ 都是非零的算子多项式。如果在 $a^*_{i,n-i+1}(D)$ 上方的元素的次数不低于相应副对角线元素 $a^*_{i,n-i+1}(D)$ 的次数，仍然可以利用第三种初等变换降低其次数或将其化为零。这样，经过初等变换运算，可以把矩阵 $A(D)$ 简化，使其副对角线元素 $a^*_{i,n-i+1}(D)$ 不为零，在副对角线下方元素都为零，在副对角线上方的元素的次数都比相应副对角线元素的次数低，或者副对角线上方的元素为零。设最后的变换矩阵为

$$E(D)\equiv\begin{pmatrix}e_{11}&\cdots&e_{1n}\\ \vdots& &\vdots\\ e_{n1}&\cdots&e_{nn}\end{pmatrix}(D),$$

那么

$$E(D)A(D)x(t)=E(D)f(t),$$

而 $E(D)A(D)$ 与 (1.12) 右端的矩阵形状相同，且

$$E(D)f(t)\equiv(f^*_1(t),f^*_2(t),\cdots,f^*_n(t))^{\mathrm T}.$$

**定义 (典则方程组与典则型)** @168

经过上述初等变换，常系数线性常微分方程组 (1.1) 变为

$$\begin{cases}a^*_{1,1}(D)x_1(t)+a^*_{1,2}(D)x_2(t)+\cdots+a^*_{1,n}(D)x_n(t)=f^*_1(t),\\\cdots\cdots\cdots\cdots\cdots,\\a^*_{n-1,1}(D)x_1(t)+a^*_{n-1,2}(D)x_2(t)=f^*_{n-1}(t),\\a^*_{n,1}(D)x_1(t)=f^*_n(t).\end{cases} \tag{1.14}$$

上述形式的方程组称为**典则方程组**，其系数矩阵称为**典则型**。

**命题 (解中任意常数的个数)** @168

利用高阶常微分方程的求解方法，可以从方程组 (1.14) 的最后一个方程开始，依次解出 $x_1(t),x_2(t),\cdots,x_n(t)$。

解微分方程会产生一些任意常数，因此让我们来关心一下方程组 (1.14) 的解含有任意常数的个数。根据方程组 (1.14) 的形式，我们知道：$x_1(t)$ 所含任意常数的个数就是多项式 $a^*_{n,1}(D)$ 的次数；$x_2(t)$ 所含任意常数的个数就是多项式 $a^*_{n-1,2}(D)$ 的次数加上 $x_1(t)$ 中已经出现过的常数个数；依此类推，我们得知方程组 (1.14) 的解含有任意常数的个数等于 $\prod\limits_{i=1}^{n}a^*_{i,n-i+1}(D)$ 的次数。另外，(1.14) 左端系数矩阵的行列式

$$\det(E(D)A(D))=\prod_{i=1}^{n}(-1)^{\frac{n(n-1)}{2}}a^*_{i,n-i+1}(D).$$

所以

$$\prod_{i=1}^{n}a^*_{i,n-i+1}(D)=(-1)^{\frac{n(n-1)}{2}}\det(E(D))\det(A(D)).$$

**定理 1.7 (解中任意常数的个数与 $\det A(D)$ 的次数)** @169

注意到 $\det(E(D))$ 是非零常数，于是我们得到如下结果：方程组 (1.1) 的解所含有任意常数的个数等于多项式 $\det(A(D))$ 的次数。

#### 三、 例题 @169

下面让我们看几个具体例子以加深印象。

**例 1.8** @169

考虑线性常微分方程组

$$\begin{cases}(2D^2+1)x_1(t)+(D^2-1)x_2(t)+(D^2+2)x_3(t)=f_1(t),\\-D^2x_1(t)-(D^2+1)x_3(t)=0,\\(D^2-1)x_1(t)+(D^2-1)x_2(t)-Dx_3(t)=0.\end{cases}$$

把第 $2$ 式加到第 $1$ 式；用 $D^2+1$ 乘第 $1$ 式加到第 $2$ 式，用 $D$ 乘第 $1$ 式加到第 $3$ 式；用 $1-D$ 乘第 $3$ 式加到第 $2$ 式；将第 $2$ 式乘 $-\dfrac{1}{2}$ 加到第 $1$ 式，用 $-\dfrac{D+1}{2}$ 乘第 $2$ 式再加到第 $3$ 式；最后第 $2$ 式乘以 $\dfrac{1}{2}$，第 $3$ 式乘以 $2$，就得到典则方程组

$$\begin{cases}\left(\dfrac{1}{2}D^2-D+1\right)x_1(t)+x_3(t)=\dfrac{1}{2}(1-D)f_1(t),\\\dfrac{1}{2}(D^2+2D)x_1(t)+(D^2-1)x_2(t)=\dfrac{1}{2}(D+1)f_1(t),\\(D^3-D^2-2)x_1(t)=-(D^2+1)f_1(t).\end{cases}$$

由此，先从第 $3$ 式解出 $x_1(\cdot)$，由于关于 $x_1(\cdot)$ 的方程式是 $3$ 阶的，所以解 $x_1(\cdot)$ 含有 $3$ 个任意常数；再将 $x_1(\cdot)$ 代入第 $2$ 式求解 $x_2(\cdot)$，由于关于 $x_2(\cdot)$ 的方程式是二阶的，所以得出的解 $x_2(\cdot)$ 含有 $5$ 个任意常数（其中的 $3$ 个任意常数来自 $x_1(\cdot)$）；最后将 $x_1(\cdot)$ 代入第 $1$ 式就可以求出 $x_3(\cdot)$。

**例 1.9** @170

考虑线性常微分方程组

$$\begin{cases}(D^2+D+1)x_1(t)+(D^2+3D+2)x_2(t)+(D-1)x_3(t)=f_1(t),\\(2D-1)x_1(t)-(D+1)x_2(t)+(D^2-D+1)x_3(t)=0,\\(D^2+2D-1)x_1(t)+(D^2+D)x_2(t)+(D^2-D)x_3(t)=0.\end{cases}$$

用 $-D$ 乘第 $1$ 式加到第 $2$ 式和第 $3$ 式；交换第 $1$ 式和第 $2$ 式；用 $-D+1$ 乘第 $1$ 式然后加到第 $2$ 式；用 $D$ 乘第 $3$ 式加到第 $2$ 式；用 $D^2+2D+1$ 和 $D^2+D$ 乘第 $2$ 式分别加到第 $1$ 式和第 $3$ 式；最后第 $1$ 式减去第 $3$ 式，就得到典则方程组

$$\begin{cases}(D^2+2D)x_1(t)+x_3(t)=(-D^2+1)f_1(t),\\2Dx_1(t)+(D+1)x_2(t)=(-D+1)f_1(t),\\(D^3+2D^2+D-1)x_1(t)=-D^3f_1(t).\end{cases}$$

由第 $3$ 式可以解出 $x_1(\cdot)$，它含有 $3$ 个任意常数；把它依次代入第 $2$ 式和第 $1$ 式就可以解出 $x_2(\cdot)$ 和 $x_3(\cdot)$。这样，该方程组的解含有 $4$ 个任意常数。

**例 1.10** @171

考虑线性常微分方程组

$$\begin{cases}(2D^2+1)x_1(t)+(D^2-3)x_2(t)+(D^2+2)x_3(t)=f_1(t),\\-D^2x_1(t)+2x_2(t)-(D^2+1)x_3(t)=0,\\(2D^2-1)x_1(t)-2x_2(t)+(D^2+1)x_3(t)=0.\end{cases}$$

把第 $2$ 式加到第 $1$ 式和第 $3$ 式，就得到

$$\begin{cases}(D^2+1)x_1(t)+(D^2-1)x_2(t)+x_3(t)=f_1(t),\\-D^2x_1(t)+2x_2(t)-(D^2+1)x_3(t)=0,\\(D^2-1)x_1(t)=0.\end{cases}$$

用 $D^2+1$ 乘第 $1$ 式并加到第 $2$ 式，就得到

$$\begin{cases}(D^2+1)x_1(t)+(D^2-1)x_2(t)+x_3(t)=f_1(t),\\(D^4+D^2+1)x_1(t)+(D^4+1)x_2(t)=(D^2+1)f_1(t),\\(D^2-1)x_1(t)=0.\end{cases}$$

由于第 $3$ 式就是 $D^2x_1(t)=x_1(t)$，代入第 $1$，$2$ 式可得典则方程组

$$\begin{cases}2x_1(t)+(D^2-1)x_2(t)+x_3(t)=f_1(t),\\3x_1(t)+(D^4+1)x_2(t)=(D^2+1)f_1(t),\\(D^2-1)x_1(t)=0.\end{cases}$$

这样，从第 $3$ 式可以解出 $x_1(\cdot)$，它含有 $2$ 个任意常数；把它代入第 $2$ 式就得到关于 $x_2(\cdot)$ 的四阶微分方程，解出含有 $6$ 个任意常数的解；把 $x_1(\cdot)$ 和 $x_2(\cdot)$ 代入第 $1$ 式，就得到 $x_3(\cdot)$。这表明有时线性微分方程组的解的某些分量可能不依赖于右端向量函数。

### 6.2 不变性原理（p172–175）

**注 (不变性问题的提法)** @172

对于系统

$$\begin{cases}a_{1,1}(D)x_1(t)+a_{1,2}(D)x_2(t)+\cdots+a_{1,n}(D)x_n(t)=f_1(t),\\a_{2,1}(D)x_1(t)+a_{2,2}(D)x_2(t)+\cdots+a_{2,n}(D)x_n(t)=f_2(t),\\\cdots\cdots\cdots\cdots\cdots,\\a_{n,1}(D)x_1(t)+a_{n,2}(D)x_2(t)+\cdots+a_{n,n}(D)x_n(t)=f_n(t),\end{cases}\tag{2.1}$$

其中 $a_{i,j}(D)$ 是微分算子 $D=\dfrac{\mathrm{d}}{\mathrm{d}t}$ 的多项式。要问的问题是：在什么条件下，干扰作用 $f_1(\cdot)$ 对输出变量 $x_1(\cdot)$ 没有影响？例 1.10 中就是这种情形，例 1.10 有没有一般性呢？

由上一节可知，经过一系列初等变换后，(2.1) 可以变为下面的形式（见 (1.14)）：

$$\begin{cases}a^*_{1,1}(D)x_1(t)+a^*_{1,2}(D)x_2(t)+\cdots+a^*_{1,n}(D)x_n(t)=f^*_1(t),\\\cdots\cdots\cdots\cdots\cdots,\\a^*_{n-1,1}(D)x_1(t)+a^*_{n-1,2}(D)x_2(t)=f^*_{n-1}(t),\\a^*_{n,1}(D)x_1(t)=f^*_n(t).\end{cases}\tag{2.2}$$

设相应的变换矩阵是

$$\boldsymbol{E}(D)=\begin{pmatrix}e_{11}(D)&\cdots&e_{1n}(D)\\\vdots& &\vdots\\e_{n1}(D)&\cdots&e_{nn}(D)\end{pmatrix},\tag{2.3}$$

由于 $\boldsymbol{E}(D)$ 是由初等矩阵的乘积构成的，所以它的行列式是一个非零常数，从而它的逆矩阵也是由 $D$ 的多项式组成的。记

$$\boldsymbol{E}^{-1}(D)\equiv\begin{pmatrix}e^*_{11}(D)&\cdots&e^*_{1n}(D)\\\vdots& &\vdots\\e^*_{n1}(D)&\cdots&e^*_{nn}(D)\end{pmatrix}.$$

**命题 (无关性与变换矩阵的元素)** @173

由 (2.1)—(2.3) 知 (2.2) 的右端满足 $f^*(t)=\boldsymbol{E}(D)f(t)$，其中

$$f^*_n(t)=\sum_{k=1}^{n}e_{n,k}(D)f_k(t).$$

因此，$x_1(\cdot)$ 与 $f_j(\cdot)$ 无关的充分必要条件是 $e_{n,j}\equiv0$；而 $x_1(\cdot)$ 与 $f_j(\cdot)$、$f_k(\cdot)$ 都无关的充分必要条件是 $e_{n,j}\equiv e_{n,k}\equiv0$。

**命题 (子式判据)** @174

设方程组 (2.1) 和 (2.2) 左端的系数矩阵分别为 $\boldsymbol{A}(D)$、$\boldsymbol{A}^*(D)$。根据 $\boldsymbol{E}(D)\boldsymbol{A}(D)\equiv\boldsymbol{A}^*(D)$，有

$$a^*_{i,j}(D)\equiv\sum_{k=1}^{n}e_{i,k}(D)a_{k,j}(D),\qquad i,j=1,2,\cdots,n.$$

记 $A_{j,1}$ 为从 $\boldsymbol{A}(D)$ 中删去第 $j$ 行与第 $1$ 列后所得的 $n-1$ 阶子式，即

$$A_{j,1}=\begin{vmatrix}a_{1,2}&a_{1,3}&\cdots&a_{1,n}\\\vdots&\vdots&&\vdots\\a_{j-1,2}&a_{j-1,3}&\cdots&a_{j-1,n}\\a_{j+1,2}&a_{j+1,3}&\cdots&a_{j+1,n}\\\vdots&\vdots&&\vdots\\a_{n,2}&a_{n,3}&\cdots&a_{n,n}\end{vmatrix},$$

则 $e_{n,j}(D)\equiv0$ 蕴含 $A_{j,1}\equiv0$；反之，若 $a^*_{1,n},a^*_{2,n-1},\cdots,a^*_{n-1,2}$ 都不等于零，则由 $A_{j,1}\equiv0$ 可推出 $e_{n,j}(D)\equiv0$。这就是说，在上述条件下，$A_{j,1}\equiv0$ 与 $e_{n,j}(D)\equiv0$ 是等价的。

**定理 2.1 (不变性原理)** @175

系统 (2.1) 的输出 $x_1(\cdot)$ 与干扰作用 $f_j(\cdot)$ 无关的充分必要条件是

$$A_{j,1}\equiv0.$$

对于例 1.10，有

$$A_{11}(D)\equiv\begin{vmatrix}2&-D^2-1\\-2&D^2+1\end{vmatrix}\equiv0,$$

所以 $x_1(\cdot)$ 与 $f_1(\cdot)$ 无关。类似地，我们也可以给出干扰作用 $f_j(\cdot)$ 既不影响 $x_1(\cdot)$、也不影响 $x_2(\cdot)$ 的条件。

### 6.3 干扰解耦问题（p175–177）

**定义 (干扰解耦)** @176

设受干扰系统的状态方程为

$$\frac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=\boldsymbol{A}\boldsymbol{x}(t)+\boldsymbol{B}\boldsymbol{u}(t)+\boldsymbol{S}\boldsymbol{q}(t),\qquad \forall t\geqslant0,\tag{3.1}$$

这里 $\boldsymbol{x}\in\mathbb{R}^n$、$\boldsymbol{u}\in\mathbb{R}^m$、$\boldsymbol{q}\in\mathbb{R}^p$ 分别表示系统的状态变量、控制变量和干扰作用，矩阵 $\boldsymbol{A}\in\mathbb{R}^{n\times n}$、$\boldsymbol{B}\in\mathbb{R}^{n\times m}$、$\boldsymbol{S}\in\mathbb{R}^{n\times p}$。$\boldsymbol{q}(\cdot)$ 是定义于区间 $[0,+\infty)$ 上、取值于 $\mathbb{R}^p$ 的连续函数，它表征系统的外界干扰，通常是无法测量的并且是不能排除的。系统的观测方程是

$$\boldsymbol{y}(t)=\boldsymbol{C}\boldsymbol{x}(t),\tag{3.2}$$

这里 $\boldsymbol{y}\in\mathbb{R}^r$ 表征系统的输出，$\boldsymbol{C}\in\mathbb{R}^{r\times n}$。

我们的问题是：是否存在反馈控制 $\boldsymbol{u}(t)=\boldsymbol{F}\boldsymbol{x}(t)$，使得反馈后的闭环系统

$$\begin{cases}\dfrac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=\boldsymbol{A}\boldsymbol{x}(t)+\boldsymbol{B}\boldsymbol{F}\boldsymbol{x}(t)+\boldsymbol{S}\boldsymbol{q}(t),\qquad\forall t\geqslant0,\\[2mm]\boldsymbol{y}(t)=\boldsymbol{C}\boldsymbol{x}(t)\end{cases}\tag{3.3}$$

的输出 $\boldsymbol{y}(\cdot)$ 与系统的干扰 $\boldsymbol{q}(\cdot)$ 无关，即要求

$$\boldsymbol{y}(t)=\boldsymbol{C}\int_0^t\mathrm{e}^{(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})(t-s)}\boldsymbol{S}\boldsymbol{q}(s)\,\mathrm{d}s+\boldsymbol{C}\mathrm{e}^{(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})t}\boldsymbol{x}(0)$$

与干扰 $\boldsymbol{q}(\cdot)$ 无关，或者说要求对任何连续函数 $\boldsymbol{q}:[0,+\infty)\to\mathbb{R}^p$，

$$\boldsymbol{C}\int_0^t\mathrm{e}^{(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})(t-s)}\boldsymbol{S}\boldsymbol{q}(s)\,\mathrm{d}s\equiv0,\qquad\forall t\geqslant0.\tag{3.4}$$

此时我们有

$$\boldsymbol{y}(t)=\boldsymbol{C}\mathrm{e}^{(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})t}\boldsymbol{x}(0),\tag{3.5}$$

即干扰 $\boldsymbol{q}(\cdot)$ 不影响输出 $\boldsymbol{y}(\cdot)$，不过干扰 $\boldsymbol{q}(\cdot)$ 对状态 $\boldsymbol{x}(\cdot)$ 的影响仍然是存在的。当满足上述要求的矩阵 $\boldsymbol{F}$ 存在时，称系统 $[\boldsymbol{A},\boldsymbol{B},\boldsymbol{S},\boldsymbol{C}]$ 是可以干扰解耦的。

**命题 3.1** @176

系统 $[\boldsymbol{A},\boldsymbol{B},\boldsymbol{S},\boldsymbol{C}]$ 可以干扰解耦，当且仅当存在矩阵 $\boldsymbol{F}$ 使得

$$\boldsymbol{C}(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})^j\boldsymbol{S}=0,\qquad\forall j=0,1,2,\cdots.\tag{3.6}$$

**命题 (解耦的指数判据)** @177

系统在反馈控制 $\boldsymbol{u}(t)=\boldsymbol{F}\boldsymbol{x}(t)$ 下干扰解耦，当且仅当 (3.4) 成立，而 (3.4) 又等价于

$$\boldsymbol{C}\mathrm{e}^{(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})t}\boldsymbol{S}=0,\qquad\forall t\geqslant0.\tag{3.9}$$

因此，条件 (3.4)、(3.9) 与 (3.6) 是彼此等价的。换言之，解耦的判别既可用 $\mathrm{e}^{(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})t}$ 在 $t\geqslant0$ 上是否零化 $\boldsymbol{S}$ 来表述，也可用矩阵族 $\boldsymbol{C}(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})^j\boldsymbol{S}$（$j\geqslant0$）全为零来表述。

### 6.4 (A,B)-不变子空间（p177–180）

**定义 ((A,B)-不变子空间)** @177

为解决 §6.3 中提出的干扰解耦问题，我们引进 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间的概念。设 $\boldsymbol{A}\in\mathbb{R}^{n\times n}$、$\boldsymbol{B}\in\mathbb{R}^{n\times m}$，对于 $\mathbb{R}^n$ 的子空间 $V$，如果存在一个矩阵 $\boldsymbol{F}\in\mathbb{R}^{m\times n}$，使得

$$(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})V\subseteq V,\tag{4.1}$$

即

$$(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})\boldsymbol{x}\in V,\qquad\forall\boldsymbol{x}\in V,$$

那么就称子空间 $V$ 是 $(\boldsymbol{A},\boldsymbol{B})$-不变的。记 $\mathbb{R}^n$ 的 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间的全体为 $J(\boldsymbol{A},\boldsymbol{B};\mathbb{R}^n)$。特别地，$V\in J(\boldsymbol{A},0;\mathbb{R}^n)$ 简称为一个 $\boldsymbol{A}$-不变子空间。显然，$\mathbb{R}^n$ 的任一 $\boldsymbol{A}$-不变子空间都是 $\mathbb{R}^n$ 的 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间，因为只要取 $\boldsymbol{F}=0$ 即可。但是，$(\boldsymbol{A},\boldsymbol{B})$-不变子空间未必是 $\boldsymbol{A}$-不变子空间。

**例 4.1** @177

我们考虑下列系统：

$$\boldsymbol{A}=\begin{pmatrix}0&0\\1&0\end{pmatrix},\qquad \boldsymbol{B}=\begin{pmatrix}1\\-1\end{pmatrix}.$$

取

$$\boldsymbol{F}=(1\quad1),$$

则

$$\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F}=\begin{pmatrix}1&1\\0&-1\end{pmatrix}.$$

再令 $V=\left\{\begin{pmatrix}\alpha\\0\end{pmatrix}\ \middle|\ \alpha\in\mathbb{R}\right\}$，则 $\forall\begin{pmatrix}\alpha\\0\end{pmatrix}\in V$，

$$(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})\begin{pmatrix}\alpha\\0\end{pmatrix}=\begin{pmatrix}1&1\\0&-1\end{pmatrix}\begin{pmatrix}\alpha\\0\end{pmatrix}=\begin{pmatrix}\alpha\\0\end{pmatrix}\in V.$$

故 $V$ 是一个 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间；但是对于 $\alpha\neq0$，

$$\boldsymbol{A}\begin{pmatrix}\alpha\\0\end{pmatrix}=\begin{pmatrix}0&0\\1&0\end{pmatrix}\begin{pmatrix}\alpha\\0\end{pmatrix}=\begin{pmatrix}0\\\alpha\end{pmatrix}\notin V.$$

因此，$V$ 不是一个 $\boldsymbol{A}$-不变子空间。

**命题 (不变子空间与闭环状态)** @178

假设 $V$ 是 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间，状态反馈矩阵 $\boldsymbol{F}$ 满足 (4.1)，则闭环系统

$$\frac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=\boldsymbol{A}\boldsymbol{x}(t)+\boldsymbol{B}\boldsymbol{u}(t),\qquad \boldsymbol{u}(t)=\boldsymbol{F}\boldsymbol{x}(t),\qquad \forall t\geqslant0$$

在条件

$$\boldsymbol{x}(0)\in V$$

下，成立着

$$\boldsymbol{x}(t)=\mathrm{e}^{(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})t}\boldsymbol{x}(0)=\sum_{k=0}^{\infty}\frac{t^k}{k!}(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})^k\boldsymbol{x}(0)\in V.$$

这就是说，如果 $V$ 是 $(\boldsymbol{A},\boldsymbol{B})$-不变的，$\boldsymbol{x}(0)\in V$，那么存在反馈控制 $\boldsymbol{u}(\cdot)=\boldsymbol{F}\boldsymbol{x}(\cdot)$，使得 $\boldsymbol{x}(t)\in V$，$\forall t\geqslant0$。

**引理 4.2** @178

子空间 $V\subseteq\mathbb{R}^n$ 是 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间的充要条件是

$$\boldsymbol{A}V\subseteq V+\mathcal{R}(\boldsymbol{B}),\tag{4.2}$$

这里，$\mathcal{R}(\boldsymbol{B})=\operatorname{span}\{\boldsymbol{B}\text{ 的列向量}\}$ 表示矩阵 $\boldsymbol{B}$ 的值域。

**构造 (由 (4.2) 定出反馈矩阵)** @178

设 (4.2) 成立，$\boldsymbol{v}_1,\cdots,\boldsymbol{v}_\mu$ 是 $V$ 的一组基。根据 (4.2)，存在 $\boldsymbol{w}_j\in V$、$\boldsymbol{u}_j\in\mathbb{R}^m$，使得

$$\boldsymbol{A}\boldsymbol{v}_j=\boldsymbol{w}_j-\boldsymbol{B}\boldsymbol{u}_j,\qquad \forall j=1,2,\cdots,\mu.\tag{4.3}$$

再设 $\boldsymbol{v}_{\mu+1},\cdots,\boldsymbol{v}_n\in\mathbb{R}^n$，使得 $\boldsymbol{v}_1,\cdots,\boldsymbol{v}_\mu,\boldsymbol{v}_{\mu+1},\cdots,\boldsymbol{v}_n$ 构成 $\mathbb{R}^n$ 的一组基，从而对于任意的 $\boldsymbol{x}\in\mathbb{R}^n$ 有唯一的分解

$$\boldsymbol{x}=\sum_{k=1}^{n}\alpha_k\boldsymbol{v}_k=(\boldsymbol{v}_1,\cdots,\boldsymbol{v}_n)\begin{pmatrix}\alpha_1\\\vdots\\\alpha_n\end{pmatrix}.$$

取 $\boldsymbol{x}=\boldsymbol{e}_i$（$i=1,2,\cdots,n$）为 $n$ 阶单位矩阵的第 $i$ 个列向量，则有

$$\boldsymbol{e}_i=(\boldsymbol{v}_1,\cdots,\boldsymbol{v}_n)\begin{pmatrix}\alpha_{i1}\\\vdots\\\alpha_{in}\end{pmatrix},\qquad i=1,2,\cdots,n.$$

所以

$$\boldsymbol{I}=(\boldsymbol{v}_1,\cdots,\boldsymbol{v}_n)\begin{pmatrix}\alpha_{11}&\cdots&\alpha_{n1}\\\vdots&&\vdots\\\alpha_{1n}&\cdots&\alpha_{nn}\end{pmatrix}.$$

按照下式定义矩阵 $\boldsymbol{F}\in\mathbb{R}^{m\times n}$：

$$\boldsymbol{F}=(\boldsymbol{u}_1,\cdots,\boldsymbol{u}_\mu,0,\cdots,0)\begin{pmatrix}\alpha_{11}&\cdots&\alpha_{n1}\\\vdots&&\vdots\\\alpha_{1n}&\cdots&\alpha_{nn}\end{pmatrix},\tag{4.4}$$

则有 $\boldsymbol{F}\boldsymbol{v}_j=(\boldsymbol{u}_1,\cdots,\boldsymbol{u}_\mu,0,\cdots,0)\boldsymbol{e}_j=\boldsymbol{u}_j$（$j=1,\cdots,\mu$），于是

$$(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})\boldsymbol{v}_j=\boldsymbol{w}_j-\boldsymbol{B}\boldsymbol{u}_j+\boldsymbol{B}\boldsymbol{u}_j=\boldsymbol{w}_j\in V,\qquad\forall j=1,2,\cdots,\mu,\tag{4.5}$$

从而 $(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})V\subseteq V$，即 $V\in J(\boldsymbol{A},\boldsymbol{B};\mathbb{R}^n)$。

**引理 4.3** @179

如果 $V_1,V_2$ 是 $(\boldsymbol{A},\boldsymbol{B})$-不变的，即 $V_1,V_2\in J(\boldsymbol{A},\boldsymbol{B};\mathbb{R}^n)$，那么

$$V_1+V_2\in J(\boldsymbol{A},\boldsymbol{B};\mathbb{R}^n).$$

**命题 (给定子空间内的不变子空间族)** @179

对于 $\mathbb{R}^n$ 的子空间 $K\subseteq\mathbb{R}^n$，用 $J(\boldsymbol{A},\boldsymbol{B};K)$ 表示包含在 $K$ 中的 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间的全体。于是 $V\in J(\boldsymbol{A},\boldsymbol{B};K)$，当且仅当

$$V\subseteq K,\qquad \boldsymbol{A}V\subseteq V+\mathcal{R}(\boldsymbol{B}).$$

又由于 $0\in K$、$\{0\}\in J(\boldsymbol{A},\boldsymbol{B};\mathbb{R}^n)$，所以 $J(\boldsymbol{A},\boldsymbol{B};K)$ 不空。显然，对任何子空间 $K\subseteq\mathbb{R}^n$，$J(\boldsymbol{A},\boldsymbol{B};K)\subseteq J(\boldsymbol{A},\boldsymbol{B};\mathbb{R}^n)$。

**引理 4.4** @180

存在 $V^*\in J(\boldsymbol{A},\boldsymbol{B};K)$，使得对任何 $V\in J(\boldsymbol{A},\boldsymbol{B};K)$，成立着

$$V\subseteq V^*.$$

我们记上述的 $V^*\in J(\boldsymbol{A},\boldsymbol{B};K)$ 为

$$V^*=\sup J(\boldsymbol{A},\boldsymbol{B};K).$$

**定理 4.5** @180

对于每个子空间 $K\subseteq\mathbb{R}^n$，存在包含在 $K$ 中的唯一的一个最大的 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间

$$V^*=\sup J(\boldsymbol{A},\boldsymbol{B};K).$$

### 6.5 干扰解耦问题的解（p180–192）

**定义 (解耦问题的解集)** @180

对于任意给定的 $V\in J(\boldsymbol{A},\boldsymbol{B};\mathbb{R}^n)$，使得 $(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})V\subseteq V$ 成立的矩阵 $\boldsymbol{F}\in\mathbb{R}^{m\times n}$ 的全体记为 $F(\boldsymbol{A},\boldsymbol{B};V)$，或简记为 $F(V)$。

**定理 5.1** @180

对于系统 $[\boldsymbol{A},\boldsymbol{B},\boldsymbol{S},\boldsymbol{C}]$，设 $K=\mathcal{N}(\boldsymbol{C})\triangleq\{\boldsymbol{x}\mid\boldsymbol{C}\boldsymbol{x}=0\}$ 是矩阵 $\boldsymbol{C}$ 的核，$V^*=\sup J(\boldsymbol{A},\boldsymbol{B};K)$，那么干扰解耦问题可解的充要条件是

$$\mathcal{R}(\boldsymbol{S})\subseteq V^*,\tag{5.1}$$

且此时，任何 $\boldsymbol{F}\in F(V^*)$ 均为原干扰解耦问题的解。

**定义 (矩阵关于集合的原像)** @181

对于矩阵 $\boldsymbol{G}\in\mathbb{R}^{q\times p}$ 和非空集合 $X\subseteq\mathbb{R}^q$，定义矩阵 $\boldsymbol{G}$ 关于 $X$ 的原像集合

$$\boldsymbol{G}^{-1}X=\{\boldsymbol{x}\in\mathbb{R}^p\mid\boldsymbol{G}\boldsymbol{x}\in X\}.$$

一般而言，$\boldsymbol{G}^{-1}X$ 是一个集合，并且可能是空集。一个极端的例子是 $\boldsymbol{G}=0$，此时若 $0\notin X$，则 $\boldsymbol{G}^{-1}X$ 是空集。不过，当 $X$ 为一个线性子空间时，由于 $\boldsymbol{G}0=0$，所以 $\boldsymbol{G}^{-1}X$ 不是空集，且它是一个线性子空间。

**命题 (递推子空间列的性质)** @181

置

$$V^0=K,\qquad V^j=K\cap\boldsymbol{A}^{-1}\big(\mathcal{R}(\boldsymbol{B})+V^{j-1}\big),\qquad j=1,2,\cdots,$$

则 $V^j\subseteq V^{j-1}$ 对于所有的 $j\geqslant1$ 都成立。因为所有的 $V^j$ 维数均不超过 $n$，这时必存在某个 $k\leqslant n$，使得 $V^k=V^{k+1}$。

**命题 (不变子空间的判据)** @181

$V\in J(\boldsymbol{A},\boldsymbol{B};K)$ 的充要条件是

$$V\subseteq K,\qquad \boldsymbol{A}V\subseteq V+\mathcal{R}(\boldsymbol{B}).\tag{5.3}$$

**定理 5.2** @182

设

$$\begin{cases}V^0=K,\\V^j=K\cap\boldsymbol{A}^{-1}\big(\mathcal{R}(\boldsymbol{B})+V^{j-1}\big),\qquad j\geqslant1.\end{cases}\tag{5.4}$$

那么，存在 $k\leqslant n$，使得 $V^k=V^{k+1}$，且

$$V^k=\sup J(\boldsymbol{A},\boldsymbol{B},K).$$

这样我们就给出了 $\sup J(\boldsymbol{A},\boldsymbol{B};K)$ 的递推计算方法。

**构造 (求解干扰解耦问题的步骤)** @182

现在运用定理 5.1 以及引理 4.2 来具体求解干扰解耦问题，即寻找矩阵 $\boldsymbol{F}\in\mathbb{R}^{m\times n}$ 使得 (3.4) 满足。步骤如下：

(1) 计算 $V^0=K=\mathcal{N}(\boldsymbol{C})$；

(2) 按照定理 5.2，计算 $V^*=\sup J(\boldsymbol{A},\boldsymbol{B};K)$；

(3) 检验条件 (5.1)。假如 (5.1) 不成立，则干扰解耦问题无解；假如 (5.1) 成立，则继续下面步骤；

(4) 按照引理 4.2 证明中的方法找出 $\boldsymbol{F}\in\mathbb{R}^{m\times n}$，使得

$$(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})V^*\subseteq V^*,$$

$\boldsymbol{F}$ 即为干扰解耦问题的解。

**构造 (计算矩阵的核)** @183

考察齐次线性方程组 $\boldsymbol{C}\boldsymbol{x}\equiv0$，找出其一组线性无关的解，记为 $\boldsymbol{x}_1,\boldsymbol{x}_2,\cdots,\boldsymbol{x}_k$，这里 $k=n-\operatorname{rank}\boldsymbol{C}$，则

$$V^0=\mathcal{N}(\boldsymbol{C})=\operatorname{span}\{\boldsymbol{x}_1,\boldsymbol{x}_2,\cdots,\boldsymbol{x}_k\}.$$

**构造 (计算原像)** @183

对于 $j\geqslant1$，需要计算 $\boldsymbol{A}^{-1}\big(\mathcal{R}(\boldsymbol{B})+V^{j-1}\big)$。一般地，对于 $\mathbb{R}^n$ 的线性子空间 $X$，由于 $\boldsymbol{A}^{-1}(X)=\boldsymbol{A}^{-1}\big(X\cap\mathcal{R}(\boldsymbol{A})\big)$，记 $Y=X\cap\mathcal{R}(\boldsymbol{A})$，然后求出 $Y$ 的极大线性无关向量组 $\{\boldsymbol{y}_1,\boldsymbol{y}_2,\cdots,\boldsymbol{y}_k\}$，再分别求解非齐次线性方程组 $\boldsymbol{A}\boldsymbol{x}=\boldsymbol{y}_j$（$j=1,2,\cdots,k$），任取其一个解为 $\boldsymbol{x}_j$（$j=1,2,\cdots,k$），则 $\boldsymbol{A}^{-1}(X)$ 的一组基为

$$\mathcal{N}(\boldsymbol{A})\text{ 的基}+\{\boldsymbol{x}_1,\boldsymbol{x}_2,\cdots,\boldsymbol{x}_k\}.$$

**命题 (条件 (5.1) 的秩判据)** @183

设 $V^*=\operatorname{span}\{\boldsymbol{v}_1,\boldsymbol{v}_2,\cdots,\boldsymbol{v}_k\}$，记 $\boldsymbol{V}=(\boldsymbol{v}_1,\boldsymbol{v}_2,\cdots,\boldsymbol{v}_k)$，则由线性代数知识，(5.1) 成立的充要条件是

$$\operatorname{rank}\boldsymbol{V}=\operatorname{rank}(\boldsymbol{V},\boldsymbol{S}).$$

**构造 (寻找反馈矩阵)** @183

当 (5.1) 成立时，要寻找矩阵 $\boldsymbol{F}\in\mathbb{R}^{m\times n}$。设 $V^*=\operatorname{span}\{\boldsymbol{v}_1,\boldsymbol{v}_2,\cdots,\boldsymbol{v}_k\}$，由 $V^*$ 的构造知

$$V^*=V^0\cap\boldsymbol{A}^{-1}\big(\mathcal{R}(\boldsymbol{B})+V^*\big),\qquad V^*\subseteq\boldsymbol{A}^{-1}\big(\mathcal{R}(\boldsymbol{B})+V^*\big),$$

从而对 $j=1,2,\cdots,k$，方程

$$\sum_{i=1}^{k}c_{ij}\boldsymbol{v}_i-\boldsymbol{B}\boldsymbol{u}_j=\boldsymbol{A}\boldsymbol{v}_j$$

有解 $c_{ij}\in\mathbb{R}$、$\boldsymbol{u}_j\in\mathbb{R}^m$。构造 $\boldsymbol{v}_{k+1},\cdots,\boldsymbol{v}_n$ 使得 $\boldsymbol{v}_1,\cdots,\boldsymbol{v}_n$ 线性无关，再由 $\boldsymbol{I}=(\boldsymbol{v}_1,\cdots,\boldsymbol{v}_n)(\alpha_{ij})$ 确定 $\alpha_{ij}$（$1\leqslant i,j\leqslant n$），最后由 (4.4) 可以确定 $\boldsymbol{F}$。注意，由于构造是不唯一的，所以得到的 $\boldsymbol{F}$ 一般是不唯一的。

**例 5.3** @183

设

$$\boldsymbol{A}=\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix},\quad \boldsymbol{B}=\begin{pmatrix}0\\0\\1\end{pmatrix},\quad \boldsymbol{C}=(0\quad1\quad0),\quad \boldsymbol{S}=\begin{pmatrix}1\\0\\0\end{pmatrix},$$

考察该系统的干扰解耦问题。此时

$$V^0=\mathcal{N}(\boldsymbol{C})=\operatorname{span}\{\boldsymbol{e}_1,\boldsymbol{e}_3\},\qquad \mathcal{R}(\boldsymbol{B})+V^0=\operatorname{span}\{\boldsymbol{e}_1,\boldsymbol{e}_3\}=V^0,$$

$$\boldsymbol{A}^{-1}(V^0)=\operatorname{span}\{\boldsymbol{e}_1,\boldsymbol{e}_2\},\qquad V^1=V^0\cap\boldsymbol{A}^{-1}(V^0)=\operatorname{span}\{\boldsymbol{e}_1\},\qquad \mathcal{R}(\boldsymbol{B})+V^1=V^0,$$

$$V^2=V^0\cap\boldsymbol{A}^{-1}\big(\mathcal{R}(\boldsymbol{B})+V^1\big)=V^0\cap\boldsymbol{A}^{-1}(V^0)=\operatorname{span}\{\boldsymbol{e}_1\}=V^1,$$

从而

$$\sup J(\boldsymbol{A},\boldsymbol{B};\mathcal{N}(\boldsymbol{C}))=V^1=\operatorname{span}\{\boldsymbol{e}_1\}=V^*.$$

由于条件 $\mathcal{R}(\boldsymbol{S})\subseteq V^*$ 成立，故系统的干扰解耦问题有解。由于此时 $\boldsymbol{A}V^*\subseteq V^*$，故只要取 $\boldsymbol{F}=0$ 即可。

**例 5.4** @184

设

$$\boldsymbol{A}=\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix},\quad \boldsymbol{B}=\begin{pmatrix}0\\0\\1\end{pmatrix},\quad \boldsymbol{C}=(1\quad0\quad0),\quad \boldsymbol{S}=\begin{pmatrix}0\\0\\1\end{pmatrix},$$

考察该系统的干扰解耦问题。首先计算 $\mathcal{N}(\boldsymbol{C})$：考虑方程

$$(1\quad0\quad0)\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}=x_1=0,$$

故 $\boldsymbol{C}\boldsymbol{x}=0$ 的线性无关解为 $\{\boldsymbol{e}_2,\boldsymbol{e}_3\}$，从而

$$V^0=\mathcal{N}(\boldsymbol{C})=\operatorname{span}\{\boldsymbol{e}_2,\boldsymbol{e}_3\}.$$

其次计算 $V^*=\sup J(\boldsymbol{A},\boldsymbol{B};K)$。由于

$$\mathcal{R}(\boldsymbol{B})=\operatorname{span}\{\boldsymbol{e}_3\},\qquad \mathcal{R}(\boldsymbol{A})=\operatorname{span}\{\boldsymbol{e}_1,\boldsymbol{e}_2\},\qquad \mathcal{R}(\boldsymbol{B})+V^0=\operatorname{span}\{\boldsymbol{e}_2,\boldsymbol{e}_3\}=V^0,$$

所以 $\mathcal{R}(\boldsymbol{A})\cap\big(\mathcal{R}(\boldsymbol{B})+V^0\big)=\operatorname{span}\{\boldsymbol{e}_2\}$。由于 $\mathcal{N}(\boldsymbol{A})=\operatorname{span}\{\boldsymbol{e}_1\}$ 且 $\boldsymbol{A}\boldsymbol{x}=\boldsymbol{e}_2$ 有解 $\boldsymbol{x}=\boldsymbol{e}_3$，故 $\boldsymbol{A}^{-1}\big(\mathcal{R}(\boldsymbol{B})+V^0\big)=\operatorname{span}\{\boldsymbol{e}_1,\boldsymbol{e}_3\}$。因此

$$\begin{aligned}V^1&=\mathcal{N}(\boldsymbol{C})\cap\boldsymbol{A}^{-1}\big(\mathcal{R}(\boldsymbol{B})+V^0\big)\\&=\operatorname{span}\{\boldsymbol{e}_2,\boldsymbol{e}_3\}\cap\operatorname{span}\{\boldsymbol{e}_1,\boldsymbol{e}_3\}=\operatorname{span}\{\boldsymbol{e}_3\}.\end{aligned}$$

又 $\mathcal{R}(\boldsymbol{B})+V^1=\operatorname{span}\{\boldsymbol{e}_3\}$，故 $\mathcal{R}(\boldsymbol{A})\cap\big(\mathcal{R}(\boldsymbol{B})+V^1\big)=\operatorname{span}\{0\}$，即 $\boldsymbol{A}^{-1}\big(\mathcal{R}(\boldsymbol{B})+V^1\big)=\mathcal{N}(\boldsymbol{A})=\operatorname{span}\{\boldsymbol{e}_1\}$。因此

$$\begin{aligned}V^2&=\mathcal{N}(\boldsymbol{C})\cap\boldsymbol{A}^{-1}\big(\mathcal{R}(\boldsymbol{B})+V^1\big)\\&=\operatorname{span}\{\boldsymbol{e}_2,\boldsymbol{e}_3\}\cap\operatorname{span}\{\boldsymbol{e}_1\}=\{0\}=V^*.\end{aligned}$$

所以，只要 $\boldsymbol{S}\neq0$，则 $\mathcal{R}(\boldsymbol{S})\not\subseteq V^*$，故对任何 $\boldsymbol{S}\neq0$，该干扰解耦问题无解。

虽然对于任意的矩阵 $\boldsymbol{F}$，我们仍有

$$\begin{cases}\boldsymbol{C}\boldsymbol{S}=0,\\\boldsymbol{C}(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})\boldsymbol{S}=0,\end{cases}$$

但是不存在 $\boldsymbol{F}$，使得 $\boldsymbol{C}(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})^2\boldsymbol{S}=0$。这意味着仅凭上述两式不足以断言系统干扰解耦问题的可解性。

**例 5.5** @185

设

$$\boldsymbol{A}=\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix},\quad \boldsymbol{B}=\begin{pmatrix}1&0\\0&1\\0&0\end{pmatrix},\quad \boldsymbol{C}=(1\quad1\quad0),\quad \boldsymbol{S}=\begin{pmatrix}1\\-1\\0\end{pmatrix},$$

考察该系统的干扰解耦问题。这时

$$V^0=\mathcal{N}(\boldsymbol{C})=\left\{\begin{pmatrix}\alpha\\-\alpha\\\beta\end{pmatrix}\ \middle|\ \alpha,\beta\in\mathbb{R}\right\}=\operatorname{span}\{\boldsymbol{e}_1-\boldsymbol{e}_2,\boldsymbol{e}_3\},$$

$$\mathcal{R}(\boldsymbol{B})=\operatorname{span}\{\boldsymbol{e}_1,\boldsymbol{e}_2\},\qquad \mathcal{R}(\boldsymbol{B})+V^0=\mathbb{R}^3,$$

而

$$\boldsymbol{A}^{-1}\big(\mathcal{R}(\boldsymbol{B})+V^0\big)=\boldsymbol{A}^{-1}(\mathbb{R}^3)=\mathbb{R}^3,$$

所以

$$V^1=V^0\cap\boldsymbol{A}^{-1}(\mathbb{R}^3)=V^0=V^*=\operatorname{span}\{\boldsymbol{e}_1-\boldsymbol{e}_2,\boldsymbol{e}_3\}.$$

又 $\boldsymbol{A}(\boldsymbol{e}_1-\boldsymbol{e}_2)=-\boldsymbol{e}_1$、$\boldsymbol{A}\boldsymbol{e}_3=\boldsymbol{e}_2$，按引理 4.2 的构造可取 $\boldsymbol{u}_1=(1,0)^{\mathrm{T}}$、$\boldsymbol{u}_2=(0,-1)^{\mathrm{T}}$。取 $\boldsymbol{v}_1=\boldsymbol{e}_1-\boldsymbol{e}_2$、$\boldsymbol{v}_2=\boldsymbol{e}_3$、$\boldsymbol{v}_3=\boldsymbol{e}_1$，可得

$$\boldsymbol{F}=\begin{pmatrix}0&-1&0\\0&0&-1\end{pmatrix},\qquad \boldsymbol{A}+\boldsymbol{B}\boldsymbol{F}=0,\qquad \mathrm{e}^{(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})t}=\boldsymbol{I},$$

从而

$$\boldsymbol{C}\mathrm{e}^{(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})t}\boldsymbol{S}=\boldsymbol{C}\boldsymbol{S}=0.$$

值得注意的是，$\boldsymbol{F}$ 一般不唯一。事实上，取 $\boldsymbol{v}_3=\boldsymbol{e}_2$，则

$$\boldsymbol{F}=\begin{pmatrix}1&0&0\\0&0&-1\end{pmatrix},\qquad \boldsymbol{A}+\boldsymbol{B}\boldsymbol{F}=\begin{pmatrix}1&1&0\\0&0&0\\0&0&0\end{pmatrix},$$

从而同样有 $\boldsymbol{C}\mathrm{e}^{(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})t}\boldsymbol{S}=0$。

**例 (解集之外的解)** @188

干扰解耦问题的可解性和求解都是基于定理 5.1 的。假设 $K=\mathcal{N}(\boldsymbol{C})$ 是矩阵 $\boldsymbol{C}$ 的核，$V^*=\sup J(\boldsymbol{A},\boldsymbol{B};K)$，并且 (5.1) 成立，那么任何满足 $(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})V^*\subseteq V^*$ 的矩阵 $\boldsymbol{F}$ 都是干扰解耦问题的解。但反过来并不正确，也就是说，通过定理 5.1 不能求出干扰解耦问题的所有解。设

$$\boldsymbol{A}=\begin{pmatrix}1&0&0\\0&1&0\\0&0&0\end{pmatrix},\quad \boldsymbol{B}=\begin{pmatrix}0\\-1\\1\end{pmatrix},\quad \boldsymbol{C}=(0\quad0\quad1),\quad \boldsymbol{S}=\begin{pmatrix}1\\0\\0\end{pmatrix}.$$

由于

$$\mathcal{N}(\boldsymbol{C})=\operatorname{span}\{\boldsymbol{e}_1,\boldsymbol{e}_2\}\supseteq\mathcal{R}(\boldsymbol{S})=\operatorname{span}\{\boldsymbol{e}_1\},$$

而 $\mathcal{N}(\boldsymbol{C})$、$\mathcal{R}(\boldsymbol{S})$ 都是 $\boldsymbol{A}$ 的不变子空间，故 $V^*=\sup J(\boldsymbol{A},\boldsymbol{B};K)=\mathcal{N}(\boldsymbol{C})$，该干扰解耦问题可解。我们取 $\boldsymbol{F}=(0\quad1\quad0)$，则

$$\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F}=\begin{pmatrix}1&0&0\\0&0&0\\0&1&0\end{pmatrix},\qquad (\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})\begin{pmatrix}1\\1\\0\end{pmatrix}=\begin{pmatrix}1\\0\\1\end{pmatrix},$$

所以 $(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})V^*\not\subseteq V^*$，即 $\boldsymbol{F}\notin F(V^*)$。而

$$(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})^j=\begin{pmatrix}1&0&0\\0&0&0\\0&0&0\end{pmatrix},\qquad j=2,3,\cdots.$$

容易验证 (3.6) 成立，即 $\boldsymbol{F}$ 是干扰解耦问题的一个解。

**定理 5.6** @188

设 $K=\mathcal{N}(\boldsymbol{C})$ 是矩阵 $\boldsymbol{C}$ 的核，那么干扰解耦问题可解的充要条件是存在一个 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间 $V$，使得

$$\mathcal{R}(\boldsymbol{S})\subseteq V\subseteq K.\tag{5.5}$$

本定理提供了一个新的算法：寻找一个包含 $\mathcal{R}(\boldsymbol{S})$ 的 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间 $V$。我们希望找一个维数最小的这样的 $V$，但是一般情况下，这样的 $V$ 并不唯一。我们一旦找到了满足 (5.5) 的 $V$，就可以根据引理 4.2 或用待定系数法计算 $\boldsymbol{F}$，注意到通常 $\boldsymbol{F}$ 是不唯一的。

**例 (最小维数的扩充不唯一)** @189

考察系统

$$\boldsymbol{A}=\begin{pmatrix}0&0&0\\1&0&1\\1&1&0\end{pmatrix},\quad \boldsymbol{B}=\begin{pmatrix}0\\1\\-1\end{pmatrix},\quad \boldsymbol{S}=\begin{pmatrix}1\\0\\0\end{pmatrix}.$$

设 $V_1=\operatorname{span}\{\boldsymbol{e}_1\}$、$V_2=\operatorname{span}\{\boldsymbol{e}_1,\boldsymbol{e}_2\}$、$V_3=\operatorname{span}\{\boldsymbol{e}_1,\boldsymbol{e}_3\}$。由于 $\mathcal{R}(\boldsymbol{B})=\operatorname{span}\{\boldsymbol{e}_2-\boldsymbol{e}_3\}$，而

$$\boldsymbol{A}\boldsymbol{e}_1=\boldsymbol{e}_2+\boldsymbol{e}_3\notin V_1+\mathcal{R}(\boldsymbol{B}),$$

故 $V_1$ 非 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间。又由于

$$\begin{cases}\boldsymbol{A}\boldsymbol{e}_1=\boldsymbol{e}_2+\boldsymbol{e}_3\in V_2+\mathcal{R}(\boldsymbol{B}),\\\boldsymbol{A}\boldsymbol{e}_2=\boldsymbol{e}_3\in V_2+\mathcal{R}(\boldsymbol{B}),\\\boldsymbol{A}\boldsymbol{e}_1=\boldsymbol{e}_2+\boldsymbol{e}_3\in V_3+\mathcal{R}(\boldsymbol{B}),\\\boldsymbol{A}\boldsymbol{e}_3=\boldsymbol{e}_2\in V_3+\mathcal{R}(\boldsymbol{B}),\end{cases}$$

故 $V_2$ 是 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间，$V_3$ 也是 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间。显然 $V_1=V_2\cap V_3$，即 $V_2$ 和 $V_3$ 均为包含 $V_1$ 的 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间。事实上，我们可以证明：对于任意的 $k\neq-1$，子空间 $\operatorname{span}\{\boldsymbol{e}_1,\boldsymbol{e}_2+k\boldsymbol{e}_3\}$ 都是 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间。所以，包含 $V_1$ 的 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间的最小维数是 $2$，而维数是 $2$ 的包含 $V_1$ 的 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间有无限个。

**构造 (干扰解耦问题的第二种解法)** @189

(1) 设 $j=0$，$V^0=\mathcal{R}(\boldsymbol{S})$，$K=\mathcal{N}(\boldsymbol{C})$；

(2) 首先根据 $V^j$ 为 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间的充要条件是 $\boldsymbol{A}V^j\subseteq V^j+\mathcal{R}(\boldsymbol{B})$，判断 $V^j$ 是否为 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间。若不是，继续 (3)；若是，转到 (4)；

(3) 对 $V^j$ 进行扩充：假设 $\boldsymbol{x}^j\in V^j$，$\boldsymbol{A}\boldsymbol{x}^j\notin V^j+\mathcal{R}(\boldsymbol{B})$，我们寻找 $\boldsymbol{y}^j\in K$，使得 $\boldsymbol{A}\boldsymbol{x}^j-\boldsymbol{y}^j\in\mathcal{R}(\boldsymbol{B})$。若这样的 $\boldsymbol{y}^j$ 不存在则结束，否则令 $V^{j+1}=V^j+\operatorname{span}\{\boldsymbol{y}^j\}$，转到 (2)；

(4) 干扰解耦问题可解，计算 $\boldsymbol{F}$。

对于上面的例子，如果 $\boldsymbol{C}=(0,\ 0,\ 1)$，则可取 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间 $V_2$ 作为 $\mathcal{R}(\boldsymbol{S})$ 的扩充，干扰解耦问题可解。若 $\boldsymbol{C}=(0,\ 1,\ 0)$，则可取 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间 $V_3$ 作为 $\mathcal{R}(\boldsymbol{S})$ 的扩充，干扰解耦问题可解。若 $\boldsymbol{C}=(0,\ 1,\ 1)$，则干扰解耦问题无解。

**推论 5.7** @190

在一些特殊情况下，我们可以得到更简单的干扰解耦问题可解的判别法则：若 $\mathcal{R}(\boldsymbol{S})$ 为 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间，则干扰解耦问题可解的充要条件是

$$\boldsymbol{C}\boldsymbol{S}=0.\tag{5.6}$$

对于例 5.5，由于 $\boldsymbol{A}\big(\mathcal{R}(\boldsymbol{S})\big)=\operatorname{span}\{\boldsymbol{e}_1\}\subseteq\mathcal{R}(\boldsymbol{S})+\mathcal{R}(\boldsymbol{B})=\operatorname{span}\{\boldsymbol{e}_1,\boldsymbol{e}_2\}$，故 $\mathcal{R}(\boldsymbol{S})$ 为 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间，此时 (5.6) 成立，由推论 5.7 知干扰解耦问题可解。为了求矩阵 $\boldsymbol{F}$，我们需要解矩阵方程

$$(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})\boldsymbol{S}=k\boldsymbol{S}.$$

为此，设 $\boldsymbol{F}=(f_{ij})_{2\times3}$，利用待定系数法可得

$$\begin{cases}f_{11}-f_{12}-k-1=0,\\f_{21}-f_{22}+k=0.\end{cases}$$

故可取 $k=0$，

$$\boldsymbol{F}=\begin{pmatrix}1&0&0\\0&0&0\end{pmatrix},$$

此时

$$\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F}=\begin{pmatrix}1&1&0\\0&0&1\\0&0&0\end{pmatrix},$$

容易验证 (3.6) 成立。

**推论 5.8** @190

作为特殊情况：若 $\mathcal{R}(\boldsymbol{S})$ 为 $\boldsymbol{A}$ 的不变子空间，则干扰解耦问题可解的充要条件是 (5.6) 成立。此时，我们可取 $\boldsymbol{F}=0$，即系统的能控性在这种情况下是不重要的。

对于例 5.3，由于 $\boldsymbol{A}\big(\mathcal{R}(\boldsymbol{S})\big)=\{0\}$，故 $\mathcal{R}(\boldsymbol{S})$ 为 $\boldsymbol{A}$ 的不变子空间，且此时 (5.6) 成立，所以干扰解耦问题可解。

**定理 5.9** @190

矩阵 $\boldsymbol{F}$ 为干扰解耦问题的解当且仅当存在一个子空间 $V$，使得 $\mathcal{R}(\boldsymbol{S})\subseteq V\subseteq\mathcal{N}(\boldsymbol{C})$，并且

$$(\boldsymbol{A}+\boldsymbol{B}\boldsymbol{F})V\subseteq V.$$

上述定理给出了干扰解耦问题在可解的条件下所有解 $\boldsymbol{F}$ 满足的条件。

**例 5.10** @190

设

$$\boldsymbol{A}=\begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix},\quad \boldsymbol{B}=\begin{pmatrix}0\\0\\1\end{pmatrix},\quad \boldsymbol{S}=\begin{pmatrix}0\\0\\1\end{pmatrix},$$

则系统能控。假设 $V$ 是包含 $\mathcal{R}(\boldsymbol{S})$ 的 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间，若记 $\boldsymbol{e}_i$ 为 $3$ 阶单位矩阵的第 $i$ 个列向量，则 $\boldsymbol{e}_3\in V$。而由 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间的性质知

$$\boldsymbol{e}_2=\boldsymbol{A}\boldsymbol{e}_3\in V+\mathcal{R}(\boldsymbol{B}),$$

故存在常数 $k$，使得 $\boldsymbol{e}_2=\boldsymbol{x}+k\boldsymbol{e}_3$，这里 $\boldsymbol{x}=\boldsymbol{e}_2-k\boldsymbol{e}_3\in V$。由于 $V$ 为子空间，所以 $\boldsymbol{e}_2\in V$。同理可得 $\boldsymbol{e}_1\in V$。于是 $V=\mathbb{R}^3$，此时干扰解耦问题可解的必要条件是 $\boldsymbol{C}=0$。

由此可见，在一般情况下，系统的能控性并不能保证干扰解耦问题可解。同样道理，系统的能观性也不能确定干扰解耦问题的可解性（参看习题 29）。

**注 (系数扰动与可解性)** @191

系统干扰解耦问题的可解性一般由矩阵 $\boldsymbol{A},\boldsymbol{B},\boldsymbol{S},\boldsymbol{C}$ 确定，一些系数的扰动可能破坏干扰解耦问题的可解性。然而在实际应用中，我们往往不能精确地了解系统的所有系数。下面讨论在矩阵不完全确定情况下的干扰解耦问题。

**定理 5.11** @191

对于所有满足 (5.6) 的 $\boldsymbol{S},\boldsymbol{C}$，干扰解耦问题均可解的充分必要条件是 $\mathbb{R}^n$ 的任意子空间都是 $(\boldsymbol{A},\boldsymbol{B})$-不变子空间。

**定理 5.12** @192

对所有满足 (5.6) 的矩阵 $\boldsymbol{S},\boldsymbol{C}$ 和任意矩阵 $\boldsymbol{B}$，干扰解耦问题均可解的充分必要条件是存在常数 $k$，使得 $\boldsymbol{A}=k\boldsymbol{I}$。

**推论 5.13** @192

若 $\boldsymbol{A}=k\boldsymbol{I}+\boldsymbol{B}\boldsymbol{F}$，则对于满足 (5.6) 的 $\boldsymbol{S},\boldsymbol{C}$，干扰解耦问题可解。

## 第7章 控制系统最优调节器的设计

### 7.1 控制系统的镇定（p195–196）

**命题 (跟踪问题有解的必要条件)** @196

在一定条件下，跟踪问题有解的必要条件是齐次方程$$\frac{\mathrm{d}\boldsymbol{e}(t)}{\mathrm{d}t}=(\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K})\boldsymbol{e}(t)$$的解都趋于零，即要求选择矩阵 $\boldsymbol{K}$，使得矩阵 $\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K}$ 的特征值都在左半平面内。

**命题 (跟踪问题有解的充分条件)** @196

如果矩阵 $\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K}$ 的特征值都在左半平面内，并且$$\int_0^{+\infty}\left\|\frac{\mathrm{d}\boldsymbol{g}(t)}{\mathrm{d}t}-\boldsymbol{A}\boldsymbol{g}(t)\right\|\mathrm{d}t<+\infty,$$那么方程 (1.4) 的任意解当 $t\to+\infty$ 时都趋于零。

**定义 (反馈镇定)** @196

为使反馈控制 (1.3) 能使反馈控制系统 (1.4) 的任意解当 $t\to+\infty$ 时都趋于零，通常要求选择矩阵 $\boldsymbol{K}$，使得矩阵 $\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K}$ 的特征值都在左半平面内，这称为系统的**反馈镇定**。

**注 (能稳系统的镇定)** @196

在第四章中已经证明：如果系统是能稳的，那么该系统能够用 (1.3) 形式的状态反馈来镇定。

### 7.2 控制装置的参数选择（p196–200）

**命题 2.1 (代数 Lyapunov 方程的可解性)** @196

设 $\boldsymbol{G},\boldsymbol{D}\in\mathbb{R}^{n\times n}$，$\boldsymbol{G}>\boldsymbol{0}$，$\boldsymbol{D}$ 的特征值全在左半平面内，则存在唯一的对称矩阵 $\boldsymbol{F}\geqslant\boldsymbol{0}$，使得$$\boldsymbol{D}^{\mathrm{T}}\boldsymbol{F}+\boldsymbol{F}\boldsymbol{D}=-\boldsymbol{G}.\tag{2.4}$$

**注 (代数 Lyapunov 方程)** @197

矩阵方程 (2.4) 称为**代数 Lyapunov 方程**。命题 2.1 给出了方程 (2.4) 的积分求解公式。实际上，方程 (2.4) 是一个 $\dfrac{n(n+1)}{2}$ 阶线性代数方程组，故也可以用代数方法求解。

对于系统 (1.1)，如果我们采用的反馈控制是$$\boldsymbol{u}(t)=\boldsymbol{K}\boldsymbol{e}(t),\tag{2.5}$$那么相应于 (2.3) 的闭环系统的动态方程为$$\frac{\mathrm{d}\boldsymbol{e}(t)}{\mathrm{d}t}=(\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K})\boldsymbol{e}(t).\tag{2.6}$$我们可以引入下述衡量该闭环系统优劣的指标$$J=\int_0^{+\infty}\langle\boldsymbol{G}\boldsymbol{e}(t),\boldsymbol{e}(t)\rangle\,\mathrm{d}t,\tag{2.7}$$这里 $\boldsymbol{G}\in\mathbb{R}^{n\times n}$，$\boldsymbol{G}>\boldsymbol{0}$，$\langle\cdot,\cdot\rangle$ 是 $n$ 维空间中向量的内积。

**命题 (二次型指标的 Lyapunov 求值)** @198

当 $\boldsymbol{D}\equiv\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K}$ 的特征根全在左半平面内时，由命题 2.1 知存在矩阵 $\boldsymbol{F}\geqslant\boldsymbol{0}$，使得 (2.4) 成立，即$$(\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K})^{\mathrm{T}}\boldsymbol{F}+\boldsymbol{F}(\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K})=-\boldsymbol{G}.\tag{2.8}$$此时指标 (2.7) 的值为$$J=\langle\boldsymbol{F}\boldsymbol{e}(0),\boldsymbol{e}(0)\rangle.$$

因此，如果 $\boldsymbol{D}\equiv\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K}$ 是稳定的，那么可以由 (2.4) 根据 $\boldsymbol{G}$ 求出 $\boldsymbol{F}$，从而得到闭环系统 (2.6) 优劣的指标值为 $J=\langle\boldsymbol{F}\boldsymbol{e}(0),\boldsymbol{e}(0)\rangle$。由于 $\boldsymbol{K}$ 有一定的选择余地，而当 $\boldsymbol{G}$ 给定时，$\boldsymbol{F}$ 由 $\boldsymbol{K}$ 确定。因此我们可以通过选取适当的 $\boldsymbol{K}$ 使得指标值 $\langle\boldsymbol{F}\boldsymbol{e}(0),\boldsymbol{e}(0)\rangle$ 达到最小。

**例 (单摆的振动阻尼)** @198

为说明这种设计方法，我们来讨论一下单摆振动阻尼问题。设受控单摆系统的振动方程为$$\frac{\mathrm{d}^2x(t)}{\mathrm{d}t^2}+x(t)=u(t),\tag{2.9}$$控制规律为$$u(t)=-c\frac{\mathrm{d}x(t)}{\mathrm{d}t},\tag{2.10}$$其中 $c$ 为常数。那么反馈控制系统满足的动态方程是$$\frac{\mathrm{d}^2x(t)}{\mathrm{d}t^2}+c\frac{\mathrm{d}x(t)}{\mathrm{d}t}+x(t)=0.\tag{2.11}$$当 $c>0$ 时，系统 (2.11) 是稳定的。我们应该选择怎样的参数 $c>0$，才能使指标$$J=\int_0^{+\infty}\left\{x^2(t)+\left[\frac{\mathrm{d}x(t)}{\mathrm{d}t}\right]^2\right\}\mathrm{d}t\tag{2.12}$$取最小呢？

如果记 $y(t)=\dfrac{\mathrm{d}x(t)}{\mathrm{d}t}$，那么 (2.11) 成为$$\begin{cases}\dfrac{\mathrm{d}x(t)}{\mathrm{d}t}=y(t),\\[2mm] \dfrac{\mathrm{d}y(t)}{\mathrm{d}t}=-x(t)-cy(t).\end{cases}\tag{2.13}$$这时$$\boldsymbol{D}=\begin{pmatrix}0 & 1\\ -1 & -c\end{pmatrix},\qquad \boldsymbol{G}=\begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix},$$$\boldsymbol{D}$ 的特征根全在左半平面内。由命题 2.1，方程 (2.4) 成为$$\begin{pmatrix}0 & -1\\ 1 & -c\end{pmatrix}\boldsymbol{F}+\boldsymbol{F}\begin{pmatrix}0 & 1\\ -1 & -c\end{pmatrix}=-\begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}.\tag{2.14}$$假设$$\boldsymbol{F}=\begin{pmatrix}f_{11} & f_{12}\\ f_{12} & f_{22}\end{pmatrix},$$其中 $f_{11},f_{12},f_{22}$ 是待定的常数。由 (2.14) 可以得到$$\begin{cases}-2f_{12}=-1,\\ f_{11}-cf_{12}-f_{22}=0,\\ 2(f_{12}-cf_{22})=-1.\end{cases}$$当 $c\neq0$ 时上述方程有唯一解$$f_{12}=\frac{1}{2},\qquad f_{22}=\frac{1}{c},\qquad f_{11}=\frac{1}{c}+\frac{c}{2}.$$从而$$J=\left(\frac{1}{c}+\frac{c}{2}\right)x^2(0)+x(0)y(0)+\frac{1}{c}y^2(0).\tag{2.15}$$

假设单摆的初始位置为 $x_0$，初始速度为零，即 $x(0)=x_0$，$y(0)=0$，那么$$J=\left(\frac{1}{c}+\frac{c}{2}\right)x_0^2\geqslant\sqrt{2}\,x_0^2.$$当参数 $c=\sqrt{2}$ 时，$J$ 达到最小值 $\sqrt{2}\,x_0^2$。

对于任意初始条件 $x(0)=x_0$，$y(0)=y_0$，(2.15) 成为$$J=\left(\frac{1}{c}+\frac{c}{2}\right)x_0^2+x_0y_0+\frac{1}{c}y_0^2=\frac{1}{c}(x_0^2+y_0^2)+\frac{c}{2}x_0^2+x_0y_0\geqslant\sqrt{2(x_0^2+y_0^2)}\,x_0+x_0y_0.$$并且 $J$ 的最小值是当$$\frac{1}{c}(x_0^2+y_0^2)=\frac{c}{2}x_0^2$$时取得，即在 $x_0\neq0$ 的条件下，当$$c=\sqrt{\frac{2(x_0^2+y_0^2)}{x_0^2}}$$时取得。而当 $x_0=0$，$y_0=0$ 时，$J\equiv0$，所以最小值是 $0$，最优的参数 $c$ 可以任意选取。当 $x_0=0$，$y_0\neq0$ 时，$J=\dfrac{1}{c}y_0^2$，此时不存在参数 $c$ 使得 (2.15) 达到最小值，所以 $J$ 不存在最小值。

对一般的反馈控制的参数选择，这种设计方法显然十分复杂。因此有必要研究另外的简捷有效的设计方法。

### 7.3 平方可积函数及其Fourier变换（p200–204）

在控制规律的设计中，需要用到平方可积函数及其 Fourier 变换的知识。详细讨论需要用到 Lebesgue 积分的知识，所讨论的基本函数类称为可测函数，它们可以看作简单函数（分段常数函数）的极限，包括分段连续函数、单调函数等常用函数。对于大多数常用的函数，Lebesgue 积分可以看作是 Riemann 积分。

#### 一、 平方可积函数 @200

**定义 3.1 (平方可积函数)** @200

如果可测函数 $f(\cdot)$ 的平方在区间 $(a,b)$ 上是可积的，则称它是**平方可积函数**。这时记 $f(\cdot)\in L^2(a,b)$，并令$$\|f\|=\left(\int_a^b|f(t)|^2\,\mathrm{d}t\right)^{\frac{1}{2}}<+\infty,$$$\|f\|$ 称为 $f(\cdot)$ 的 $L^2$ 范数。

**定义 (p 次可积函数)** @201

一般地，对于 $p\geqslant1$，如果区间 $(a,b)$ 上的可测函数 $f(\cdot)$ 满足$$\|f\|_p=\left(\int_a^b|f(t)|^p\,\mathrm{d}t\right)^{\frac{1}{p}}<+\infty,$$则称其为 **$p$ 次可积函数**，$\|f\|_p$ 称为 $f(\cdot)$ 的 $L^p$ 范数。$p=2$ 是最常用的情况，所以通常将 $L^2$ 范数简写为 $\|f\|$。所有 $(a,b)$ 上的 $p$ 次可积函数记为 $L^p(a,b)$，我们允许 $a=-\infty$ 或者 $b=+\infty$。当 $p=1$ 时，一次可积函数简称为**可积函数**。

**注 (连续函数与逐段连续函数的平方可积性)** @201

容易证明：有限闭区间 $[a,b]$ 上的连续函数、逐段连续函数都是平方可积函数。

**定理 3.2 (平方可积函数的线性运算与不等式)** @201

如果 $f,g\in L^2(a,b)$，那么

(i) $f+g\in L^2(a,b)$；

(ii) $f\cdot g\in L^1(a,b)$，并且成立 Schwarz 不等式$$\left|\int_a^bf(t)g(t)\,\mathrm{d}t\right|\leqslant\|f\|\cdot\|g\|;$$

(iii) 成立三角不等式$$\|f+g\|\leqslant\|f\|+\|g\|.$$

**定义 (向量值平方可积函数)** @202

如果向量值函数 $\boldsymbol{f}(\cdot)=(f_1(\cdot),f_2(\cdot),\cdots,f_n(\cdot))^{\mathrm{T}}$ 的每个分量都是区间 $(a,b)$ 上的平方可积函数，则称它在区间 $(a,b)$ 上**平方可积**，区间 $(a,b)$ 上平方可积的向量值函数的全体记为 $L^2(a,b;\mathbb{R}^n)$，$\boldsymbol{f}(\cdot)$ 的范数记为$$\|\boldsymbol{f}\|=\sqrt{\|f_1\|^2+\|f_2\|^2+\cdots+\|f_n\|^2}.$$这时成立 Schwarz 不等式和三角不等式$$\left|\int_0^{+\infty}\langle\boldsymbol{f}(t),\boldsymbol{g}(t)\rangle\,\mathrm{d}t\right|\leqslant\|\boldsymbol{f}\|\cdot\|\boldsymbol{g}\|,\qquad \|\boldsymbol{f}+\boldsymbol{g}\|\leqslant\|\boldsymbol{f}\|+\|\boldsymbol{g}\|.$$

**命题 3.3 (稳定系统的 L² 输入与状态)** @202

如果矩阵 $\boldsymbol{A}$ 是稳定的，考虑线性系统$$\frac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=\boldsymbol{A}\boldsymbol{x}(t)+\boldsymbol{B}\boldsymbol{u}(t),\qquad \boldsymbol{x}(0)=\boldsymbol{x}_0,\tag{3.2}$$那么当 $\boldsymbol{u}(\cdot)\in L^2(0,+\infty;\mathbb{R}^m)$ 时，$\boldsymbol{x}(\cdot)\in L^2(0,+\infty;\mathbb{R}^n)$。

**注 (L¹ 输入的情形)** @203

同理可证：当 $\boldsymbol{u}(\cdot)\in L^1(0,+\infty;\mathbb{R}^m)$ 时，$\boldsymbol{x}(\cdot)\in L^1(0,+\infty;\mathbb{R}^n)$。

#### 二、 Fourier 变换 @203

**定义 3.4 (Fourier 变换)** @203

当 $\boldsymbol{x}(\cdot)\in L^1(\mathbb{R};\mathbb{R}^n)$ 时，对于参数 $\omega\in\mathbb{R}$，$\mathrm{i}=\sqrt{-1}$，积分$$\widetilde{\boldsymbol{x}}(\omega)\equiv\frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}}\boldsymbol{x}(t)\mathrm{e}^{-\mathrm{i}\omega t}\,\mathrm{d}t=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{+\infty}\boldsymbol{x}(t)\mathrm{e}^{-\mathrm{i}\omega t}\,\mathrm{d}t$$是存在的，称 $\widetilde{\boldsymbol{x}}(\cdot)$ 为 $\boldsymbol{x}(\cdot)$ 的 **Fourier 变换**。

**例 3.5 (单侧指数函数的 Fourier 变换)** @203

假定 $a>0$，$$f(t)=\begin{cases}\mathrm{e}^{-at}, & t\geqslant0,\\ 0, & t<0,\end{cases}$$则$$\|f\|_1=\int_0^{+\infty}f(t)\,\mathrm{d}t=\frac{1}{a},\qquad \|f\|=\sqrt{\int_0^{+\infty}f^2(t)\,\mathrm{d}t}=\frac{1}{\sqrt{2a}}.$$而 Fourier 变换为$$\tilde{f}(\omega)=\frac{1}{\sqrt{2\pi}}\int_0^{+\infty}f(t)\mathrm{e}^{-\mathrm{i}\omega t}\,\mathrm{d}t=\frac{1}{\sqrt{2\pi}(a+\mathrm{i}\omega)},$$其范数$$\|\tilde{f}\|=\sqrt{\frac{1}{2\pi}\int_{-\infty}^{+\infty}\frac{1}{a^2+\omega^2}\,\mathrm{d}\omega}=\frac{1}{\sqrt{2a}}.$$

**命题 (Fourier 变换与导数的交换)** @204

假设 $\boldsymbol{x}(\cdot)$ 为连续可微函数，记 $\dot{\boldsymbol{x}}(t)=\dfrac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}$。如果 $\boldsymbol{x}(\cdot),\dot{\boldsymbol{x}}(\cdot)\in L^1(\mathbb{R};\mathbb{R}^n)$，那么$$\lim_{t\to\pm\infty}\boldsymbol{x}(t)=0,$$且成立着等式$$\widetilde{\dot{\boldsymbol{x}}}(\omega)\equiv\mathrm{i}\omega\widetilde{\boldsymbol{x}}(\omega).\tag{3.3}$$

**命题 (L¹∩L² 上的 Fourier 变换)** @204

如果 $\boldsymbol{x}(\cdot)\in L^1(\mathbb{R};\mathbb{R}^n)\cap L^2(\mathbb{R};\mathbb{R}^n)$，则存在平方可积函数 $\widetilde{\boldsymbol{x}}(\cdot)$，使得$$\widetilde{\boldsymbol{x}}(\omega)=\frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}}\boldsymbol{x}(t)\mathrm{e}^{-\mathrm{i}\omega t}\,\mathrm{d}t.$$

平方可积函数的 Fourier 变换有下述主要性质（详细讨论见 W. Rudin 著《实分析与复分析》第九章）：

**定理 (Parseval 等式)** @204

(i) 如果 $\boldsymbol{x}(\cdot)\in L^2(\mathbb{R};\mathbb{R}^n)$，$\boldsymbol{y}(\cdot)\in L^2(\mathbb{R};\mathbb{R}^m)$，$\boldsymbol{S}\equiv(s_{jk})\in\mathbb{R}^{m\times n}$，那么 $\boldsymbol{x}(\cdot),\boldsymbol{y}(\cdot)$ 的 Fourier 变换 $\widetilde{\boldsymbol{x}}(\cdot),\widetilde{\boldsymbol{y}}(\cdot)$ 在无穷区间 $\mathbb{R}$ 上是平方可积的，并且成立着 Parseval 等式$$\int_{\mathbb{R}}\langle\boldsymbol{S}\widetilde{\boldsymbol{x}}(\omega),\widetilde{\boldsymbol{y}}(\omega)\rangle\,\mathrm{d}\omega=\int_{\mathbb{R}}\sum_{j=1}^{m}\sum_{k=1}^{n}s_{jk}\widetilde{x}_k(\omega)\overline{\widetilde{y}_j(\omega)}\,\mathrm{d}\omega=\int_{\mathbb{R}}\langle\boldsymbol{S}\boldsymbol{x}(t),\boldsymbol{y}(t)\rangle\,\mathrm{d}t;\tag{3.4}$$

(ii) 特别成立着$$\|\widetilde{\boldsymbol{x}}(\cdot)\|\equiv\sqrt{\int_{-\infty}^{+\infty}\|\widetilde{\boldsymbol{x}}(\omega)\|^2\,\mathrm{d}\omega}=\sqrt{\int_{-\infty}^{+\infty}\|\boldsymbol{x}(t)\|^2\,\mathrm{d}t}\equiv\|\boldsymbol{x}(\cdot)\|.$$

**命题 (半直线上的 Fourier 变换求导公式)** @204

如果 $\boldsymbol{x}(\cdot),\dot{\boldsymbol{x}}(\cdot)\in L^2(0,+\infty;\mathbb{R}^n)$，那么成立着$$\widetilde{\dot{\boldsymbol{x}}}(\omega)=-\frac{1}{\sqrt{2\pi}}\boldsymbol{x}(0)+\mathrm{i}\omega\widetilde{\boldsymbol{x}}(\omega).\tag{3.5}$$

**命题 (稳定系统的频域方程)** @204

假设 $\boldsymbol{u}(\cdot)\in L^2(0,+\infty;\mathbb{R}^m)$，矩阵 $\boldsymbol{A}$ 是稳定的，那么系统 (3.2) 的解 $\boldsymbol{x}(\cdot)\in L^2(0,+\infty;\mathbb{R}^n)$，从而 $\dot{\boldsymbol{x}}(\cdot)\in L^2(0,+\infty;\mathbb{R}^n)$。这时对系统 (3.2) 应用 Fourier 变换，并注意到 (3.5)，得到$$\mathrm{i}\omega\widetilde{\boldsymbol{x}}(\omega)-\frac{1}{\sqrt{2\pi}}\boldsymbol{x}(0)=\boldsymbol{A}\widetilde{\boldsymbol{x}}(\omega)+\boldsymbol{B}\widetilde{\boldsymbol{u}}(\omega).$$

### 7.4 线性二次最优调节器的设计（p205–224）

#### 一、 问题的正确提法 @205

现在考虑线性系统$$\frac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=\boldsymbol{A}\boldsymbol{x}(t)+\boldsymbol{B}\boldsymbol{u}(t),\qquad \boldsymbol{x}(0)=\boldsymbol{x}_0. \tag{4.1}$$

要求设计反馈调节器 $\boldsymbol{u}(t)=\boldsymbol{C}\boldsymbol{x}(t)$，使得系统的某种性能指标达到最小。人们首先想到的是均方误差指标$$J(\boldsymbol{u}(\cdot))=\int_0^{+\infty}\|\boldsymbol{x}(t)\|^2\,\mathrm{d}t. \tag{4.2}$$

需要指出的是，此处的状态 $\boldsymbol{x}(t)$ 相当于 §7.1 中跟踪问题的偏差 $\boldsymbol{e}(t)$，于是 (4.2) 与 (2.1) 就吻合了。

**例 (均方误差指标可能无解)** @205

然而这样的问题一般是没有解的。例如对于一阶系统$$\frac{\mathrm{d}x(t)}{\mathrm{d}t}=u(t), \tag{4.3}$$指标选取为$$J(u(\cdot))=\int_0^{+\infty}x^2(t)\,\mathrm{d}t. \tag{4.4}$$

在反馈控制 $u(t)=cx(t)$ 下，系统成为 $\dfrac{\mathrm{d}x(t)}{\mathrm{d}t}=cx(t)$，其解为 $x(t)=x(0)\mathrm{e}^{ct}$。当 $c<0$ 时上述积分存在，且$$J=-\frac{x^2(0)}{2c}.$$显然，随着反馈参数 $c$ 趋于 $-\infty$，指标 $J$ 的值趋于零，即所提问题无最小值，这种性能指标的提法使问题没有解。

**例 (一阶系统的二次型指标)** @206

对于上述一阶系统，指标的另一种提法是$$J=\int_0^{+\infty}[x^2(t)+u^2(t)]\,\mathrm{d}t. \tag{4.5}$$

这时$$\inf_{u(\cdot)\in L^2(0,+\infty;\mathbb{R})}\int_0^{+\infty}[x^2(t)+u^2(t)]\,\mathrm{d}t=x^2(0),$$并且当 $u(t)\equiv -x(t)$ 时达到最小值。

由此看出，选取不同的指标 (4.4) 和 (4.5)，就会得到不同的结论。所以说，最优调节器问题的指标必须有一个正确的提法。

现在讨论一般情形。记系统 (4.1) 的唯一解为 $\boldsymbol{x}(\cdot)\equiv\boldsymbol{x}(\cdot;\boldsymbol{x}_0,\boldsymbol{u}(\cdot))$，引入目标泛函$$J(\boldsymbol{u}(\cdot),\boldsymbol{x}_0)=\int_0^{+\infty}\big[\langle\boldsymbol{Q}\boldsymbol{x}(t),\boldsymbol{x}(t)\rangle+2\langle\boldsymbol{S}\boldsymbol{x}(t),\boldsymbol{u}(t)\rangle+\langle\boldsymbol{R}\boldsymbol{u}(t),\boldsymbol{u}(t)\rangle\big]\,\mathrm{d}t, \tag{4.6}$$这里 $\boldsymbol{Q}=\boldsymbol{Q}^{\mathrm T}\in\mathbb{R}^{n\times n}$，$\boldsymbol{S}\in\mathbb{R}^{m\times n}$，$\boldsymbol{R}=\boldsymbol{R}^{\mathrm T}\in\mathbb{R}^{m\times m}$。

**定义 (允许控制集合)** @207

定义**允许控制集合**$$\mathcal{U}_{ad}=\left\{\boldsymbol{u}(\cdot)\in L^2(0,+\infty;\mathbb{R}^m)\ \big|\ \boldsymbol{x}(\cdot;\boldsymbol{x}_0,\boldsymbol{u}(\cdot))\in L^2(0,+\infty;\mathbb{R}^n)\right\}.$$

显然，当矩阵 $\boldsymbol{A}$ 稳定时，$\mathcal{U}_{ad}=L^2(0,+\infty;\mathbb{R}^m)$。由上一节末尾的注知，当系统 $[\boldsymbol{A},\boldsymbol{B}]$ 能稳时，$\mathcal{U}_{ad}$ 是非空的。

于是，对于任何 $\boldsymbol{u}(\cdot)\in\mathcal{U}_{ad}$，目标泛函 $J(\boldsymbol{u}(\cdot),\boldsymbol{x}_0)$ 有意义。注意到 $\boldsymbol{A}$ 不一定是稳定的，对于某些 $\boldsymbol{u}(\cdot)\in L^2(0,+\infty;\mathbb{R}^m)$，有可能 $\boldsymbol{x}(\cdot;\boldsymbol{x}_0,\boldsymbol{u}(\cdot))\notin L^2(0,+\infty;\mathbb{R}^n)$。不过，对于这样的控制 $\boldsymbol{u}(\cdot)$，目标泛函 (4.6) 仍有可能是有限的。例如，$\boldsymbol{A}=\boldsymbol{B}=\boldsymbol{I}$，$\boldsymbol{Q}=\boldsymbol{S}=\boldsymbol{0}$，矩阵 $\boldsymbol{A}$ 是不稳定的，于是当 $\boldsymbol{x}_0\neq\boldsymbol{0}$ 时，$\boldsymbol{u}(\cdot)=0\notin\mathcal{U}_{ad}$，但是 $J(0,\boldsymbol{0})=0$ 是有限的。在实际应用中，尽管对应的目标泛函 $J(\boldsymbol{u}(\cdot),\boldsymbol{x}_0)$ 有限，人们并不希望 $\boldsymbol{x}(\cdot;\boldsymbol{x}_0,\boldsymbol{u}(\cdot))\notin L^2(0,+\infty;\mathbb{R}^n)$。所以我们需要排除那些控制，这就是引入 $\mathcal{U}_{ad}$ 的原因。

**定义 (LQ 问题)** @207

我们关心的是下述问题。

**问题 (LQ)** 对任意给定的 $\boldsymbol{x}_0\in\mathbb{R}^n$，寻找 $\bar{\boldsymbol{u}}(\cdot)\in\mathcal{U}_{ad}$ 使得$$J(\bar{\boldsymbol{u}}(\cdot),\boldsymbol{x}_0)=\inf_{\boldsymbol{u}(\cdot)\in\mathcal{U}_{ad}}J(\boldsymbol{u}(\cdot),\boldsymbol{x}_0). \tag{4.7}$$

上述问题被称为线性系统的二次最优控制问题，简称为 **LQ 问题**。R. E. Kalman 于 1960 年首先讨论了这种问题，并且在假设$$\boldsymbol{Q}\geqslant 0,\qquad \boldsymbol{S}=\boldsymbol{0},\qquad \boldsymbol{R}>0 \tag{4.8}$$的条件下求出了问题的解。

**命题 (算子 F 是双射)** @207

假定 $[\boldsymbol{A},\boldsymbol{B}]$ 能稳，于是存在矩阵 $\boldsymbol{K}\in\mathbb{R}^{m\times n}$ 使得 $\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K}$ 稳定。固定一个这样的 $\boldsymbol{K}$，由下式定义算子 $\mathcal{F}_{\boldsymbol{K}}:\mathcal{U}_{ad}\to L^2(0,+\infty;\mathbb{R}^m)$：$$\mathcal{F}_{\boldsymbol{K}}(\boldsymbol{u}(\cdot))=\boldsymbol{u}(\cdot)+\boldsymbol{K}\boldsymbol{x}(\cdot;\boldsymbol{x}_0,\boldsymbol{u}(\cdot)).$$

则 $\mathcal{F}_{\boldsymbol{K}}$ 是有意义的，并且是 $\mathcal{U}_{ad}$ 到 $L^2(0,+\infty;\mathbb{R}^m)$ 上的双射。事实上，对于任何 $\boldsymbol{u}(\cdot)\in\mathcal{U}_{ad}$，有 $\boldsymbol{x}(\cdot;\boldsymbol{x}_0,\boldsymbol{u}(\cdot))\in L^2(0,+\infty;\mathbb{R}^n)$，所以$$\mathcal{F}_{\boldsymbol{K}}(\boldsymbol{u}(\cdot))=\boldsymbol{u}(\cdot)+\boldsymbol{K}\boldsymbol{x}(\cdot;\boldsymbol{x}_0,\boldsymbol{u}(\cdot))\in L^2(0,+\infty;\mathbb{R}^m). \tag{4.9}$$

**命题 (问题 (LQ) 与松弛问题的等价性)** @208

对于上述 $\boldsymbol{K}$，定义$$\boldsymbol{A}_{\boldsymbol{K}}=\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K},\qquad \boldsymbol{Q}_{\boldsymbol{K}}=\boldsymbol{Q}+\boldsymbol{K}^{\mathrm T}\boldsymbol{R}\boldsymbol{K}-\boldsymbol{K}^{\mathrm T}\boldsymbol{S}-\boldsymbol{S}^{\mathrm T}\boldsymbol{K},\qquad \boldsymbol{S}_{\boldsymbol{K}}=\boldsymbol{S}-\boldsymbol{R}\boldsymbol{K}.$$令$$J_{\boldsymbol{K}}(\boldsymbol{v}(\cdot),\boldsymbol{x}_0)=\int_0^{+\infty}\big[\langle\boldsymbol{Q}_{\boldsymbol{K}}\boldsymbol{x}_{\boldsymbol{K}}(t;\boldsymbol{x}_0,\boldsymbol{v}(\cdot)),\boldsymbol{x}_{\boldsymbol{K}}(t;\boldsymbol{x}_0,\boldsymbol{v}(\cdot))\rangle+2\langle\boldsymbol{S}_{\boldsymbol{K}}\boldsymbol{x}_{\boldsymbol{K}}(t;\boldsymbol{x}_0,\boldsymbol{v}(\cdot)),\boldsymbol{v}(t)\rangle+\langle\boldsymbol{R}\boldsymbol{v}(t),\boldsymbol{v}(t)\rangle\big]\,\mathrm{d}t,$$其中 $\boldsymbol{x}_{\boldsymbol{K}}(\cdot)=\boldsymbol{x}_{\boldsymbol{K}}(\cdot;\boldsymbol{x}_0,\boldsymbol{v}(\cdot))$ 是方程 $\dfrac{\mathrm{d}\boldsymbol{x}_{\boldsymbol{K}}(t)}{\mathrm{d}t}=\boldsymbol{A}_{\boldsymbol{K}}\boldsymbol{x}_{\boldsymbol{K}}(t)+\boldsymbol{B}\boldsymbol{v}(t)$，$\boldsymbol{x}_{\boldsymbol{K}}(0)=\boldsymbol{x}_0$ 的解。于是$$J_{\boldsymbol{K}}(\mathcal{F}_{\boldsymbol{K}}(\boldsymbol{u}(\cdot)),\boldsymbol{x}_0)=J(\boldsymbol{u}(\cdot),\boldsymbol{x}_0). \tag{4.11}$$

这样，问题 (LQ) 就等价于下述的问题 (LQ)$_{\boldsymbol{K}}$：寻找 $\bar{\boldsymbol{v}}(\cdot)\in L^2(0,+\infty;\mathbb{R}^m)$ 使得$$J_{\boldsymbol{K}}(\bar{\boldsymbol{v}}(\cdot),\boldsymbol{x}_0)=\inf_{\boldsymbol{v}(\cdot)\in L^2(0,+\infty;\mathbb{R}^m)}J_{\boldsymbol{K}}(\boldsymbol{v}(\cdot),\boldsymbol{x}_0).$$

上式与 (4.7) 在形式上并没有区别，而其中的 $\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K}$ 是稳定的。因此，在系统能稳时我们总可以直接假设 $\boldsymbol{A}$ 是稳定的。为了表述方便起见，从今起我们假定 (4.1) 中的 $\boldsymbol{A}$ 是稳定的，于是 $\mathcal{U}_{ad}=L^2(0,+\infty;\mathbb{R}^m)$。

顺便回忆：当系统 (4.1) 能控的时候，它一定能稳。因此，能稳并非一个苛刻的条件。

#### 二、 动态规划方法 @209

为了研究问题 (LQ)，我们首先讨论它的值函数及其性质。为方便起见，记$$q(\boldsymbol{x},\boldsymbol{u})=\langle\boldsymbol{Q}\boldsymbol{x},\boldsymbol{x}\rangle+2\langle\boldsymbol{S}\boldsymbol{x},\boldsymbol{u}\rangle+\langle\boldsymbol{R}\boldsymbol{u},\boldsymbol{u}\rangle.$$从而$$J(\boldsymbol{u}(\cdot),\boldsymbol{x}_0)=\int_0^{+\infty}q(\boldsymbol{x}(s),\boldsymbol{u}(s))\,\mathrm{d}s.$$

定义问题 (LQ) 的**值函数**为$$V(\boldsymbol{x}_0)=\inf_{\boldsymbol{u}(\cdot)\in\mathcal{U}_{ad}}J(\boldsymbol{u}(\cdot),\boldsymbol{x}_0). \tag{4.12}$$

由前面的讨论，容易得到：

**命题 4.1** @209

问题 (LQ) 的值函数 $V(\cdot)$ 满足$$-\infty\leqslant V(\boldsymbol{x}_0)<+\infty,\qquad \forall \boldsymbol{x}_0\in\mathbb{R}^n. \tag{4.13}$$

根据上面的命题，下述定义变得有意义。

**定义 4.2** @209

如果对任意的 $\boldsymbol{x}_0\in\mathbb{R}^n$，成立$$V(\boldsymbol{x}_0)>-\infty, \tag{4.14}$$那么就称问题 (LQ) 是**有限的**。进一步，若对任意的 $\boldsymbol{x}_0\in\mathbb{R}^n$，存在 $\bar{\boldsymbol{u}}(\cdot)\in\mathcal{U}_{ad}$ 使得$$V(\boldsymbol{x}_0)=J(\bar{\boldsymbol{u}}(\cdot),\boldsymbol{x}_0), \tag{4.15}$$则称问题 (LQ) 是**可解的**。

**注 (关于"有限"与"适定")** @209

人们常用"适定"来称 (4.14) 成立的情形。但是数学上适定性往往与解的存在唯一性以及解关于参数的连续依赖性联系在一起。因此，用"有限"比较恰当一些。

容易知道，当 (4.8) 成立时问题 (LQ) 是有限的。

为了研究问题 (LQ) 有限和可解的条件，我们先介绍线性泛函分析的一些结果。我们知道 $L^2(0,+\infty;\mathbb{R}^r)$ 在下面的内积下是 Hilbert 空间：$$\langle\boldsymbol{x}(\cdot),\boldsymbol{y}(\cdot)\rangle=\int_0^{+\infty}\boldsymbol{y}^{\mathrm T}(t)\boldsymbol{x}(t)\,\mathrm{d}t,\qquad \forall \boldsymbol{x}(\cdot),\boldsymbol{y}(\cdot)\in L^2(0,+\infty;\mathbb{R}^r).$$

由 §7.3 知，当矩阵 $\boldsymbol{A}$ 稳定时，线性算子 $\mathcal{L}:L^2(0,+\infty;\mathbb{R}^m)\to L^2(0,+\infty;\mathbb{R}^n)$，$$\mathcal{L}(\boldsymbol{u}(\cdot))(t)=\int_0^t \mathrm{e}^{\boldsymbol{A}(t-s)}\boldsymbol{B}\boldsymbol{u}(s)\,\mathrm{d}s \tag{4.16}$$是有界的。

**命题 (L 的共轭算子)** @210

对于 $\boldsymbol{x}(\cdot)\in L^2(0,+\infty;\mathbb{R}^n)$，$\boldsymbol{u}(\cdot)\in L^2(0,+\infty;\mathbb{R}^m)$，利用 Fubini 定理可知 $\mathcal{L}$ 的共轭算子 $\mathcal{L}^*:L^2(0,+\infty;\mathbb{R}^n)\to L^2(0,+\infty;\mathbb{R}^m)$ 由下式确定：$$\mathcal{L}^*(\boldsymbol{x}(\cdot))(t)=\int_t^{+\infty}\boldsymbol{B}^{\mathrm T}\mathrm{e}^{-\boldsymbol{A}^{\mathrm T}(s-t)}\boldsymbol{x}(s)\,\mathrm{d}s, \tag{4.17}$$它也是有界线性算子。

**命题 (目标泛函的算子表示与有限性的必要条件)** @210

记$$\mathcal{N}=\boldsymbol{R}+\mathcal{L}^*\boldsymbol{Q}\mathcal{L}+\boldsymbol{S}\mathcal{L}+\mathcal{L}^*\boldsymbol{S}^{\mathrm T}, \tag{4.18}$$它是 $L^2(0,+\infty;\mathbb{R}^m)$ 上的有界线性算子，并且$$J(\boldsymbol{u}(\cdot),\boldsymbol{0})=\langle\mathcal{N}\boldsymbol{u}(\cdot),\boldsymbol{u}(\cdot)\rangle. \tag{4.19}$$

于是问题 (LQ) 有限的必要条件是算子 $\mathcal{N}$ 非负，或等价地，$$J(\boldsymbol{u}(\cdot),\boldsymbol{0})\geqslant 0,\qquad \forall \boldsymbol{u}(\cdot)\in\mathcal{U}_{ad}. \tag{4.20}$$

下面的定理表明，当条件 (4.20) 稍微再加强一些时，我们就能获得问题 (LQ) 的可解性。

**定理 4.3** @211

若存在 $a>0$，使得$$J(\boldsymbol{u}(\cdot),\boldsymbol{0})\geqslant a\|\boldsymbol{u}(\cdot)\|^2,\qquad \forall \boldsymbol{u}(\cdot)\in\mathcal{U}_{ad},$$则问题 (LQ) 是可解的。

**命题 (定理 4.3 条件下的最优控制与值函数)** @211

在定理 4.3 的条件下，算子 $\mathcal{N}$ 可逆，且逆算子 $\mathcal{N}^{-1}$ 有界。对于 $\boldsymbol{x}_0\in\mathbb{R}^n$，记$$\boldsymbol{f}(t)=\mathrm{e}^{\boldsymbol{A}t}\boldsymbol{x}_0,\qquad \boldsymbol{g}(t)=\mathcal{L}^*(\boldsymbol{Q}\boldsymbol{f}(\cdot))(t)+\boldsymbol{S}\boldsymbol{f}(t),$$则最优控制满足$$\boldsymbol{u}(\cdot)+\mathcal{N}^{-1}\boldsymbol{g}(\cdot)\equiv\boldsymbol{0},$$它等价于 $\mathcal{N}\boldsymbol{u}(\cdot)+\boldsymbol{g}(\cdot)\equiv\boldsymbol{0}$，且此时值函数$$V(\boldsymbol{x}_0)=-\langle\mathcal{N}^{-1}\boldsymbol{g}(\cdot),\boldsymbol{g}(\cdot)\rangle+\langle\boldsymbol{Q}\boldsymbol{f}(\cdot),\boldsymbol{f}(\cdot)\rangle$$是 $\boldsymbol{x}_0$ 的二次型，故可以将其写成 $V(\boldsymbol{x}_0)=\boldsymbol{x}_0^{\mathrm T}\boldsymbol{P}\boldsymbol{x}_0$，其中 $\boldsymbol{P}$ 为对称矩阵。

对于 $\varepsilon>0$，记$$J_\varepsilon(\boldsymbol{u}(\cdot),\boldsymbol{x}_0)=J(\boldsymbol{u}(\cdot),\boldsymbol{x}_0)+\varepsilon\|\boldsymbol{u}(\cdot)\|^2.$$定义问题 (LQ)$_\varepsilon$ 为：对任意给定的 $\boldsymbol{x}_0\in\mathbb{R}^n$，寻找 $\boldsymbol{u}(\cdot)\in\mathcal{U}_{ad}$ 使得 $J_\varepsilon(\boldsymbol{u}(\cdot),\boldsymbol{x}_0)$ 达到最小。

当问题 (LQ) 有限时，$J_\varepsilon(\boldsymbol{u}(\cdot),\boldsymbol{0})\geqslant\varepsilon\|\boldsymbol{u}(\cdot)\|^2$，由前面的叙述可知问题 (LQ)$_\varepsilon$ 可解，我们记其值函数为 $V_\varepsilon(\boldsymbol{x}_0)$。显然，对于 $0<\varepsilon_1<\varepsilon_2$，成立着$$V(\boldsymbol{x}_0)\leqslant V_{\varepsilon_1}(\boldsymbol{x}_0)\leqslant V_{\varepsilon_2}(\boldsymbol{x}_0).$$

下面证明，如果问题 (LQ) 有限，则它一定可以被一系列可解的 (LQ)$_\varepsilon$ 问题逼近。

**命题 4.4** @211

设问题 (LQ) 是有限的，则对任意给定的 $\boldsymbol{x}_0\in\mathbb{R}^n$，成立$$\lim_{\varepsilon\to 0^+}V_\varepsilon(\boldsymbol{x}_0)=V(\boldsymbol{x}_0). \tag{4.21}$$

**命题 4.5** @212

设问题 (LQ) 是有限的，则值函数 $V(\cdot)$ 满足下述函数方程：$$V(\boldsymbol{x}_0)=\inf_{\boldsymbol{u}(\cdot)\in L^2(0,t;\mathbb{R}^m)}\left\{\int_0^t q(\boldsymbol{x}(s),\boldsymbol{u}(s))\,\mathrm{d}s+V(\boldsymbol{x}(t))\right\}. \tag{4.24}$$

方程 (4.24) 称为问题 (LQ) 的 **Bellman 动态规划方程**。

#### 三、 代数 Riccati 方程 @213

容易见到 (4.24) 是一个相当复杂的方程，很难通过它直接求出值函数 $V(\cdot)$。在这一部分里，我们将进一步刻画 $V(\cdot)$。

**定理 4.6** @213

假设矩阵 $\boldsymbol{A}$ 是稳定的，那么当问题 (LQ) 有限时，它的值函数 $V(\cdot)$ 是二次函数，即存在对称矩阵 $\boldsymbol{P}^{\mathrm T}=\boldsymbol{P}$ 使得$$V(\boldsymbol{x}_0)=\langle\boldsymbol{P}\boldsymbol{x}_0,\boldsymbol{x}_0\rangle. \tag{4.27}$$

下面的结果给出了问题 (LQ) 值函数 $V(\cdot)$ 的表达式 (4.27) 中矩阵 $\boldsymbol{P}$ 的刻画。

**定理 4.7** @214

若问题 (LQ) 有限，$\boldsymbol{R}>0$ 且 $\boldsymbol{A}$ 稳定，则 (4.27) 所对应的矩阵 $\boldsymbol{P}=\boldsymbol{P}^{\mathrm T}$ 满足下述的**代数 Riccati 方程**：$$\Gamma(\boldsymbol{P})\equiv\boldsymbol{Q}+\boldsymbol{P}\boldsymbol{A}+\boldsymbol{A}^{\mathrm T}\boldsymbol{P}-(\boldsymbol{P}\boldsymbol{B}+\boldsymbol{S}^{\mathrm T})\boldsymbol{R}^{-1}(\boldsymbol{B}^{\mathrm T}\boldsymbol{P}+\boldsymbol{S})=\boldsymbol{0}. \tag{4.28}$$

**例 (一阶系统的代数 Riccati 方程)** @216

对于系统 (4.3) 和指标 (4.5)，问题 (LQ) 显然是有限的。相应的代数 Riccati 方程为$$2p\cdot 0+1-p^2=0.$$容易解出 $p=\pm 1$，值函数对应的 $p=1$。

#### 四、 最优反馈调节器 @216

这部分的目的，是通过代数 Riccati 方程的解来构造问题 (LQ) 的最优控制。为此，我们先证明下述一系列等价条件。

**定理 4.8** @216

假设系统 (4.1) 是稳定的且 $\boldsymbol{R}>0$，那么下述条件等价：

(i) 存在一个对称矩阵 $\boldsymbol{P}$ 适合不等式$$\Lambda(\boldsymbol{P})\equiv\begin{pmatrix}\boldsymbol{Q}+\boldsymbol{P}\boldsymbol{A}+\boldsymbol{A}^{\mathrm T}\boldsymbol{P}&\boldsymbol{P}\boldsymbol{B}+\boldsymbol{S}^{\mathrm T}\\ \boldsymbol{B}^{\mathrm T}\boldsymbol{P}+\boldsymbol{S}&\boldsymbol{R}\end{pmatrix}\geqslant 0;$$

(ii) 在系统能控的条件下，$\forall a,b$，其中 $-\infty<a<b<+\infty$，有$$\min_{\boldsymbol{u}(\cdot)\in L^2(a,b;\mathbb{R}^m)}\left\{\int_a^b q(\boldsymbol{x}(t),\boldsymbol{u}(t))\,\mathrm{d}t\ \Big|\ \boldsymbol{x}(a)=\boldsymbol{x}(b)=\boldsymbol{0}\right\}=0;$$

(iii) 问题 (LQ) 有限并且 $V(\boldsymbol{x})=\langle\boldsymbol{P}\boldsymbol{x},\boldsymbol{x}\rangle$；

(iv) 记$$\boldsymbol{L}=\begin{pmatrix}\boldsymbol{0}\\ \boldsymbol{R}^{-\frac12}(\boldsymbol{B}^{\mathrm T}\boldsymbol{P}+\boldsymbol{S})\end{pmatrix}\in\mathbb{R}^{(n+m)\times n},\qquad \boldsymbol{N}=\begin{pmatrix}\boldsymbol{0}\\ \boldsymbol{R}^{\frac12}\end{pmatrix}\in\mathbb{R}^{(n+m)\times m},$$$$U(s)\equiv\boldsymbol{N}+\boldsymbol{L}(s\boldsymbol{I}-\boldsymbol{A})^{-1}\boldsymbol{B},$$则$$\Phi(s)\equiv\Big(\big(-(s\boldsymbol{I}+\boldsymbol{A})^{-1}\boldsymbol{B}\big)^{\mathrm T}\ \ \boldsymbol{I}\Big)\begin{pmatrix}\boldsymbol{Q}&\boldsymbol{S}^{\mathrm T}\\ \boldsymbol{S}&\boldsymbol{R}\end{pmatrix}\begin{pmatrix}(s\boldsymbol{I}-\boldsymbol{A})^{-1}\boldsymbol{B}\\ \boldsymbol{I}\end{pmatrix}\equiv U^{\mathrm T}(-s)U(s);$$

(v) 如果 $\mathrm{i}\omega$ 不是 $\Phi(\cdot)$ 的极点，即 $\det(\mathrm{i}\omega\boldsymbol{I}-\boldsymbol{A})\neq 0$，那么$$\Phi(\mathrm{i}\omega)\geqslant 0.$$

这样，我们就证明了$$(\mathrm{i})\Rightarrow(\mathrm{ii})\Rightarrow(\mathrm{iii})\Rightarrow(\mathrm{i}),\qquad (\mathrm{iii})\Rightarrow(\mathrm{iv})\Rightarrow(\mathrm{v})\Rightarrow(\mathrm{ii}).$$

**命题 (频率特征函数的因式分解)** @219

设 $\boldsymbol{P}=\boldsymbol{P}^{\mathrm T}$ 满足代数 Riccati 方程 (4.28)。按 (iv) 记 $\boldsymbol{M}\equiv(\boldsymbol{L}\ \ \boldsymbol{N})$，则$$\boldsymbol{M}^{\mathrm T}\boldsymbol{M}\equiv\Lambda(\boldsymbol{P})\geqslant 0.$$置$$\Psi(p,s)\equiv\Big(\big((p\boldsymbol{I}-\boldsymbol{A})^{-1}\boldsymbol{B}\big)^{\mathrm T}\ \ \boldsymbol{I}\Big)\begin{pmatrix}\boldsymbol{Q}&\boldsymbol{S}^{\mathrm T}\\ \boldsymbol{S}&\boldsymbol{R}\end{pmatrix}\begin{pmatrix}(s\boldsymbol{I}-\boldsymbol{A})^{-1}\boldsymbol{B}\\ \boldsymbol{I}\end{pmatrix},$$则有恒等式$$\Big(\big((p\boldsymbol{I}-\boldsymbol{A})^{-1}\boldsymbol{B}\big)^{\mathrm T}\ \ \boldsymbol{I}\Big)\Lambda(\boldsymbol{P})\begin{pmatrix}(s\boldsymbol{I}-\boldsymbol{A})^{-1}\boldsymbol{B}\\ \boldsymbol{I}\end{pmatrix}\equiv\Psi(p,s)+(p+s)\boldsymbol{B}^{\mathrm T}(p\boldsymbol{I}-\boldsymbol{A}^{\mathrm T})^{-1}\boldsymbol{P}(s\boldsymbol{I}-\boldsymbol{A})^{-1}\boldsymbol{B}.$$因此$$\Phi(s)\equiv\Psi(-s,s)\equiv U^{\mathrm T}(-s)U(s).$$

**定理 4.9** @220

假设 $\boldsymbol{R}>0$。

(i) 如果 Riccati 方程 (4.28) 有解，则问题 (LQ) 有限；

(ii) 设系统 (4.1) 是稳定的，如果问题 (LQ) 有限，则代数 Riccati 方程 (4.28) 存在解 $\boldsymbol{P}$，使值函数$$V(\boldsymbol{x}_0)=\langle\boldsymbol{P}\boldsymbol{x}_0,\boldsymbol{x}_0\rangle,\qquad \forall \boldsymbol{x}_0\in\mathbb{R}^n. \tag{4.34}$$进一步，若 $\boldsymbol{A}-\boldsymbol{B}\boldsymbol{R}^{-1}(\boldsymbol{B}^{\mathrm T}\boldsymbol{P}+\boldsymbol{S})$ 稳定，则问题 (LQ) 存在唯一的解$$\bar{\boldsymbol{u}}(t)=-\boldsymbol{R}^{-1}(\boldsymbol{B}^{\mathrm T}\boldsymbol{P}+\boldsymbol{S})\bar{\boldsymbol{x}}(t). \tag{4.35}$$

接下来的问题是：何时代数 Riccati 方程 (4.28) 的解 $\boldsymbol{P}$ 存在？能否由矩阵 $\boldsymbol{A},\boldsymbol{B},\boldsymbol{Q},\boldsymbol{S},\boldsymbol{R}$ 直接判断？为此我们引入**频率特征函数**$$\begin{aligned}\Phi(\mathrm{i}\omega)&\equiv\Big(\big((-\mathrm{i}\omega\boldsymbol{I}-\boldsymbol{A})^{-1}\boldsymbol{B}\big)^{\mathrm T}\ \ \boldsymbol{I}\Big)\begin{pmatrix}\boldsymbol{Q}&\boldsymbol{S}^{\mathrm T}\\ \boldsymbol{S}&\boldsymbol{R}\end{pmatrix}\begin{pmatrix}(\mathrm{i}\omega\boldsymbol{I}-\boldsymbol{A})^{-1}\boldsymbol{B}\\ \boldsymbol{I}\end{pmatrix}\\ &\equiv\boldsymbol{R}+\boldsymbol{B}^{\mathrm T}(-\mathrm{i}\omega\boldsymbol{I}-\boldsymbol{A}^{\mathrm T})^{-1}\boldsymbol{Q}(\mathrm{i}\omega\boldsymbol{I}-\boldsymbol{A})^{-1}\boldsymbol{B}+\boldsymbol{S}(\mathrm{i}\omega\boldsymbol{I}-\boldsymbol{A})^{-1}\boldsymbol{B}+\boldsymbol{B}^{\mathrm T}(-\mathrm{i}\omega\boldsymbol{I}-\boldsymbol{A}^{\mathrm T})^{-1}\boldsymbol{S}^{\mathrm T}.\end{aligned} \tag{4.37}$$

关于上述问题，我们有下述定理。

**定理 4.10** @222

假设系统 (4.1) 是稳定的，$\boldsymbol{R}>0$。

(i) 若代数 Riccati 方程有解 $\boldsymbol{P}$，则$$\Phi(\mathrm{i}\omega)\geqslant 0,\qquad \forall\omega\in\mathbb{R}.$$进一步，若 $\boldsymbol{A}-\boldsymbol{B}\boldsymbol{R}^{-1}(\boldsymbol{B}^{\mathrm T}\boldsymbol{P}+\boldsymbol{S})$ 稳定，则存在 $\gamma>0$，使得$$\langle\Phi(\mathrm{i}\omega)\boldsymbol{u},\boldsymbol{u}\rangle\geqslant\gamma\|\boldsymbol{u}\|^2>0. \tag{4.38}$$

(ii) 若 (4.38) 成立，则问题 (LQ) 可解并且代数 Riccati 方程 (4.28) 有解。

由定理 4.10 看出，$\Phi(\mathrm{i}\omega)$ 的性质能给出线性系统二次最优控制问题解的存在条件。我们称 (4.38) 为问题 (LQ) 的**频率判据**。

我们注意到当 $\boldsymbol{R}>0,\boldsymbol{Q}\geqslant 0,\boldsymbol{S}=\boldsymbol{0}$ 时，$$\Phi(\mathrm{i}\omega)\geqslant\boldsymbol{R}>0.$$因此相应的问题 (LQ) 必可解，这恰恰是 Kalman 当年的结果。

**例 4.11** @224

假定系统为$$\frac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=\begin{pmatrix}0&1\\-1&-1\end{pmatrix}\boldsymbol{x}(t)+\begin{pmatrix}0\\1\end{pmatrix}u(t),$$目标泛函为$$J(u(\cdot),\boldsymbol{x}_0)=\int_0^{+\infty}[3x_1^2(t)+x_2^2(t)+u^2(t)]\,\mathrm{d}t.$$

由于$$(s\boldsymbol{I}-\boldsymbol{A})^{-1}=\frac{1}{s^2+s+1}\begin{pmatrix}s+1&1\\-1&s\end{pmatrix},\qquad (s\boldsymbol{I}-\boldsymbol{A})^{-1}\boldsymbol{B}=\frac{1}{s^2+s+1}\begin{pmatrix}1\\s\end{pmatrix},$$容易算出$$\Phi(s)=1+\frac{3-s^2}{s^4+s^2+1},\qquad \Phi(\mathrm{i}\omega)=1+\frac{3+\omega^2}{\omega^4-\omega^2+1}\geqslant 1,$$所以问题 (LQ) 有解。

问题 (LQ) 的代数 Riccati 方程为$$\boldsymbol{P}\begin{pmatrix}0&1\\-1&-1\end{pmatrix}+\begin{pmatrix}0&-1\\1&-1\end{pmatrix}\boldsymbol{P}+\begin{pmatrix}3&0\\0&1\end{pmatrix}-\boldsymbol{P}\begin{pmatrix}0&0\\0&1\end{pmatrix}\boldsymbol{P}=\boldsymbol{0}.$$注意指标泛函非负，故值函数也非负，所对应的 $\boldsymbol{P}$ 半正定。解代数 Riccati 方程，可得唯一的半正定解$$\boldsymbol{P}=\begin{pmatrix}3&1\\1&1\end{pmatrix}.$$

由于$$\boldsymbol{A}-\boldsymbol{B}\boldsymbol{R}^{-1}(\boldsymbol{B}^{\mathrm T}\boldsymbol{P}+\boldsymbol{S})=\begin{pmatrix}0&1\\-2&-2\end{pmatrix}$$稳定，故问题 (LQ) 存在唯一的最优控制$$u(t)=-x_1(t)-x_2(t).$$

### 7.5 跟踪给定值问题（p225–227）

**例 (指标 (5.2) 不能实现跟踪)** @225

一般认为如果取性能指标为$$J(u(\cdot),x_0)=\int_0^{+\infty}\{[x(t)-z]^2+u^2(t)\}\,\mathrm{d}t, \tag{5.2}$$那么最优控制能满足要求。粗略地说，当 $t\to+\infty$ 时 $x(t)\to z$，而控制作用 $u(t)\to 0$，从而 $\dfrac{\mathrm{d}x(t)}{\mathrm{d}t}\to -az\neq 0$，它与 $x(t)\to z$ 矛盾。这就是说，这种最优控制问题不能满足跟踪给定值的要求。原因在于：输出趋于给定值时，控制作用应当保持一个不为零的常值。

**例 (偏差系统的二次型指标)** @225

因此，人们另外提出如下性能指标：$$J(u(\cdot),x_0)=\int_0^{+\infty}\left\{[x(t)-z]^2+\left[u(t)-\frac{az}{b}\right]^2\right\}\mathrm{d}t. \tag{5.3}$$

这时，令$$y=x-z,\qquad v=u-\frac{az}{b},$$那么动态方程和性能指标分别变换为$$\frac{\mathrm{d}y(t)}{\mathrm{d}t}+ay(t)=bv(t),\qquad J(v(\cdot),y_0)=\int_0^{+\infty}[y^2(t)+v^2(t)]\,\mathrm{d}t.$$

这是已经讨论过的最优控制问题，最优控制是偏差 $y=x-z$ 的比例反馈控制。这样似乎解决了跟踪给定值问题。然而，由于我们不能准确知道系统的参数 $a$ 和 $b$ 的值，只能知道它们的近似值 $a_0$ 和 $b_0$。当我们根据参数的近似值 $a_0$ 和 $b_0$ 来决定控制作用并把它用到实际系统 (5.1) 时，控制作用 $u(t)\to\dfrac{a_0z}{b_0}$，而系统的状态 $x(t)\to\dfrac{ba_0}{ab_0}z$。一般来说，$\dfrac{ba_0}{ab_0}z$ 不等于 $z$。这就是说，这种性能指标也不能解决跟踪给定值问题。

正确的性能指标的选取应当考虑到随着参数 $a$ 和 $b$ 的变化，控制作用的稳态值也随着变化。但是，我们又不可能知道参数 $a$ 和 $b$ 的准确值，所以我们要求控制作用的变化速度 $\dfrac{\mathrm{d}u(t)}{\mathrm{d}t}\to 0$，而改写性能指标为$$J(u(\cdot),x_0)=\int_0^{+\infty}\left\{[x(t)-z]^2+\left[\frac{\mathrm{d}u(t)}{\mathrm{d}t}\right]^2\right\}\mathrm{d}t.$$

置$$y=x-z,\qquad v=\frac{\mathrm{d}u}{\mathrm{d}t}.$$在 (5.1) 的两端对 $t$ 求导，得到$$\frac{\mathrm{d}^2y(t)}{\mathrm{d}t^2}+a\frac{\mathrm{d}y(t)}{\mathrm{d}t}=bv(t). \tag{5.4}$$性能指标成为$$J(v(\cdot),y_0)=\int_0^{+\infty}[y^2(t)+v^2(t)]\,\mathrm{d}t. \tag{5.5}$$

**例 (一阶系统的跟踪控制)** @226

不妨假设 $b>0$。令 $\boldsymbol{x}(t)=\begin{pmatrix}y(t)\\ \dfrac{\mathrm{d}y(t)}{\mathrm{d}t}\end{pmatrix}$，则$$\frac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=\begin{pmatrix}0&1\\0&-a\end{pmatrix}\boldsymbol{x}(t)+\begin{pmatrix}0\\b\end{pmatrix}v(t).$$

指标泛函中，$\boldsymbol{R}=1$，$\boldsymbol{Q}=\begin{pmatrix}1&0\\0&0\end{pmatrix}$，$\boldsymbol{S}=(0\ \ 0)$。容易求出代数 Riccati 方程的唯一半正定解$$\boldsymbol{P}=\begin{pmatrix}\dfrac{\sqrt{a^2+2b}}{b}&\dfrac{1}{b}\\[6pt] \dfrac{1}{b}&\dfrac{\sqrt{a^2+2b}-a}{b^2}\end{pmatrix}.$$

由于$$\boldsymbol{A}-\boldsymbol{B}\boldsymbol{R}^{-1}(\boldsymbol{B}^{\mathrm T}\boldsymbol{P}+\boldsymbol{S})=\begin{pmatrix}0&1\\-b&-\sqrt{a^2+2b}\end{pmatrix}$$稳定，记 $k_1=1$，$k_2=\dfrac{\sqrt{a^2+2b}-a}{b}$，最优控制是状态的线性反馈$$v(t)=-k_1y(t)-k_2\frac{\mathrm{d}y(t)}{\mathrm{d}t}.$$对上式积分就得$$u(t)=u(0)+\int_0^t v(s)\,\mathrm{d}s=u(0)-k_1\int_0^t y(s)\,\mathrm{d}s-k_2y(t)+k_2y(0).$$

这就是说，跟踪给定值的最优控制应当是偏差的比例和积分的线性叠加。这个结论符合工程师的经验，即为了消除静差需要有积分作用。

**注 (PID 调节器)** @227

上述讨论说明，在最优控制理论中，正确选择性能指标是十分重要的。否则，就会出现错误的结论。

如果对象是二阶系统$$\frac{\mathrm{d}^2x(t)}{\mathrm{d}t^2}+a_1\frac{\mathrm{d}x(t)}{\mathrm{d}t}+a_2x(t)=bu(t),$$类似于上面的讨论，可以知道：跟踪给定值的最优控制应当是偏差的比例、积分和微分的线性叠加，即所谓的 **PID 调节器**。

高阶环节一般可以用一阶或二阶环节近似表示。因此，在复杂的工业过程的控制中，PID 调节器被广泛应用是有理论根据的。

> 本书尚未录入习题。
