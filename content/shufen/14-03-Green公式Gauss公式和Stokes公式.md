---
chapter: 14
chapter_title: 曲线积分、曲面积分与场论
section: "14.3"
section_title: Green 公式、Gauss 公式和 Stokes 公式
pages: "276–291"
---

### 定义 (简单闭曲线与 Jordan 曲线) @276

设 $L$ 为平面上的一条曲线，它的方程是 $\boldsymbol{r}(t)=x(t)\mathbf{i}+y(t)\mathbf{j}$，$\alpha\leqslant t\leqslant\beta$。如果 $\boldsymbol{r}(\alpha)=\boldsymbol{r}(\beta)$，而且当 $t_1,t_2\in(\alpha,\beta)$，$t_1\neq t_2$ 时总成立 $\boldsymbol{r}(t_1)\neq\boldsymbol{r}(t_2)$，则称 $L$ 为**简单闭曲线**（或 **Jordan 曲线**）。这就是说，简单闭曲线除两个端点相重合外，曲线自身不相交。

### 定义 (单连通区域与复连通区域) @276

设 $D$ 为平面上的一个区域。如果 $D$ 内的任意一条封闭曲线都可以不经过 $D$ 外的点而连续地收缩成 $D$ 中一点，那么 $D$ 称为**单连通区域**，否则它称为**复连通区域**。例如，圆盘 $\{(x,y)\mid x^2+y^2<1\}$ 是单连通区域，而圆环 $\left\{(x,y)\ \middle|\ \frac12<x^2+y^2<1\right\}$ 是复连通区域。单连通区域 $D$ 也可以这样叙述：$D$ 内的任何一条封闭曲线所围的点集仍属于 $D$。因此，通俗地说，单连通区域之中不含有“洞”，而复连通区域之中会有“洞”。

### 注 (区域边界的诱导定向) @277

对于平面区域 $D$，我们给它的边界 $\partial D$ 规定一个正向：如果一个人沿 $\partial D$ 的这个方向行走时，$D$ 总是在他左边。这个定向也称为 $D$ 的**诱导定向**，带有这样定向的 $\partial D$ 称为 $D$ 的**正向边界**。例如，如图 14.3.1 所示的区域 $D$ 由 $L$ 与 $l$ 所围成，那么在我们规定的正向下，$L$ 为逆时针方向，而 $l$ 为顺时针方向。

### 定理 14.3.1 (Green 公式) @277

设 $D$ 为平面上由光滑或分段光滑的简单闭曲线所围的单连通闭区域。如果函数 $P(x,y)$，$Q(x,y)$ 在 $D$ 上具有连续偏导数，那么

$$\int_{\partial D}P\,\mathrm{d}x+Q\,\mathrm{d}y=\iint_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\mathrm{d}x\mathrm{d}y,$$

其中 $\partial D$ 取正向，即诱导定向。

### 注 (Green 公式在复连通区域上的推广) @278

Green 公式还可以推广到具有有限个“洞”的复连通区域上去。以只有一个洞为例（见图 14.3.4），用光滑曲线联结其外边界 $L$ 上一点 $M$ 与内边界 $l$ 上一点 $N$，将 $D$ 割为单连通区域。由定理 14.3.1 得

$$\iint_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\mathrm{d}x\mathrm{d}y=\left(\int_L+\int_{\widehat{MN}}+\int_l+\int_{\widehat{NM}}\right)P\,\mathrm{d}x+Q\,\mathrm{d}y=\left(\int_L+\int_l\right)P\,\mathrm{d}x+Q\,\mathrm{d}y=\int_{\partial D}P\,\mathrm{d}x+Q\,\mathrm{d}y,$$

其中 $L$ 为逆时针方向，$l$ 为顺时针方向，这与 $\partial D$ 的诱导定向相同。

### 注 (Green 公式的切向量与外法向量形式) @278

记取诱导定向的 $\partial D$ 上的单位切向量为 $\boldsymbol{\tau}$，单位外法向量为 $\boldsymbol{n}$（见图 14.3.5），那么显然

$$\cos(\boldsymbol{n},y)=-\cos(\boldsymbol{\tau},x),\qquad \cos(\boldsymbol{n},x)=\sin(\boldsymbol{\tau},x).$$

因此得到 Green 公式的另一种常用表示形式

$$\begin{aligned}
\iint_D\left(\frac{\partial F}{\partial x}+\frac{\partial G}{\partial y}\right)\mathrm{d}x\mathrm{d}y&=\int_{\partial D}F\,\mathrm{d}y-G\,\mathrm{d}x=\int_{\partial D}\bigl[F\sin(\boldsymbol{\tau},x)-G\cos(\boldsymbol{\tau},x)\bigr]\mathrm{d}s\\
&=\int_{\partial D}\bigl[F\cos(\boldsymbol{n},x)+G\cos(\boldsymbol{n},y)\bigr]\mathrm{d}s.
\end{aligned}$$

这个形式便于记忆和推广。

### 注 (Green 公式是 Newton–Leibniz 公式的推广) @278

设 $f(x)$ 在 $[a,b]$ 上具有连续导数，取 $D=[a,b]\times[0,1]$（见图 14.3.6）。在 Green 公式中取 $P=0$，$Q=f(x)$，就得到

$$\iint_D f'(x)\,\mathrm{d}x\mathrm{d}y=\int_{\partial D}f(x)\,\mathrm{d}y.$$

利用化累次积分的方法就知道，等式左边就是 $\displaystyle\int_0^1\mathrm{d}y\int_a^b f'(x)\,\mathrm{d}x=\int_a^b f'(x)\,\mathrm{d}x$。而等式右边等于

$$\left(\int_{\overline{AB}}+\int_{\overline{BC}}+\int_{\overline{CD}}+\int_{\overline{DA}}\right)f(x)\,\mathrm{d}y=\left(\int_{\overline{BC}}+\int_{\overline{DA}}\right)f(x)\,\mathrm{d}y=\int_0^1 f(b)\,\mathrm{d}y+\int_1^0 f(a)\,\mathrm{d}y=f(b)-f(a).$$

这就得到 Newton–Leibniz 公式

$$\int_a^b f'(x)\,\mathrm{d}x=f(b)-f(a).$$

### 注 (用曲线积分求区域面积) @279

设 $D$ 为平面上的有界闭区域，其边界为分段光滑的简单闭曲线，则它的面积为

$$S=\int_{\partial D}x\,\mathrm{d}y=-\int_{\partial D}y\,\mathrm{d}x=\frac12\int_{\partial D}x\,\mathrm{d}y-y\,\mathrm{d}x,$$

其中 $\partial D$ 取正向。

### 例 14.3.1 (用格林公式求椭圆面积) @279

计算椭圆 $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$（$a,b>0$）所围图形的面积（见图 14.3.7）。

**解** 此椭圆的参数方程为

$$x=a\cos\theta,\qquad y=b\sin\theta,\qquad 0\leqslant\theta\leqslant2\pi.$$

设椭圆的正向边界为 $L$，那么所求面积为

$$S=\frac12\int_L x\,\mathrm{d}y-y\,\mathrm{d}x=\frac12\int_0^{2\pi}\left(ab\cos^2\theta+ab\sin^2\theta\right)\mathrm{d}\theta=\frac{ab}{2}\int_0^{2\pi}\mathrm{d}\theta=\pi ab.$$

### 例 14.3.2 (格林公式计算曲线积分) @279

计算 $I=\displaystyle\int_L\sqrt{x^2+y^2}\,\mathrm{d}x+y\bigl[xy+\ln\bigl(x+\sqrt{x^2+y^2}\bigr)\bigr]\mathrm{d}y$，其中 $L$ 为曲线 $y=\sin x$，$0\leqslant x\leqslant\pi$ 与直线段 $y=0$，$0\leqslant x\leqslant\pi$ 所围区域 $D$ 的正向边界（见图 14.3.8）。

**解** 这时 $P=\sqrt{x^2+y^2}$，$Q=y\bigl[xy+\ln\bigl(x+\sqrt{x^2+y^2}\bigr)\bigr]$，则

$$\frac{\partial P}{\partial y}=\frac{y}{\sqrt{x^2+y^2}},\qquad \frac{\partial Q}{\partial x}=y^2+\frac{y}{\sqrt{x^2+y^2}}.$$

由 Green 公式得

$$I=\iint_D\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\mathrm{d}x\mathrm{d}y=\iint_D y^2\,\mathrm{d}x\mathrm{d}y=\int_0^{\pi}\mathrm{d}x\int_0^{\sin x}y^2\,\mathrm{d}y=\frac13\int_0^{\pi}\sin^3x\,\mathrm{d}x=\frac49.$$

注意，在这个例子中，$P$ 和 $Q$ 在 $D$ 的边界点 $(0,0)$ 并不可偏导。请读者想想为什么可以这样直接计算。

### 例 14.3.3 (补线后用格林公式) @279

计算 $I=\displaystyle\int_L\left(\mathrm{e}^x\sin y-my\right)\mathrm{d}x+\left(\mathrm{e}^x\cos y-m\right)\mathrm{d}y$，其中 $L$ 为圆 $(x-a)^2+y^2=a^2$（$a>0$）的上半圆周，方向为从点 $A(2a,0)$ 到原点 $O(0,0)$。

**解** 现在曲线不是闭的，不能直接用 Green 公式，但添加一条直线段 $\overline{OA}$（方向从 $O$ 到 $A$）后，$L$ 与 $\overline{OA}$ 合起来就是闭曲线（见图 14.3.9）。设这样得到的闭曲线所围的区域为 $D$。这时

$$P=\mathrm{e}^x\sin y-my,\qquad Q=\mathrm{e}^x\cos y-m,\qquad \frac{\partial P}{\partial y}=\mathrm{e}^x\cos y-m,\qquad \frac{\partial Q}{\partial x}=\mathrm{e}^x\cos y.$$

利用 Green 公式，得到

$$\int_L\left(\mathrm{e}^x\sin y-my\right)\mathrm{d}x+\left(\mathrm{e}^x\cos y-m\right)\mathrm{d}y+\int_{\overline{OA}}\left(\mathrm{e}^x\sin y-my\right)\mathrm{d}x+\left(\mathrm{e}^x\cos y-m\right)\mathrm{d}y=m\iint_D\mathrm{d}x\mathrm{d}y=\frac{m\pi a^2}{2}.$$

再计算沿 $\overline{OA}$ 的曲线积分。因为 $\overline{OA}$ 的方程为 $y=0$，$x:0\to2a$，那么

$$\int_{\overline{OA}}\left(\mathrm{e}^x\sin y-my\right)\mathrm{d}x+\left(\mathrm{e}^x\cos y-m\right)\mathrm{d}y=\int_0^{2a}0\,\mathrm{d}x+0=0.$$

代入前面的式子，就有

$$\int_L\left(\mathrm{e}^x\sin y-my\right)\mathrm{d}x+\left(\mathrm{e}^x\cos y-m\right)\mathrm{d}y=\frac{m\pi a^2}{2}.$$

### 定义 14.3.1 (曲线积分与路径无关) @280

设 $D$ 为平面区域，$P(x,y)$，$Q(x,y)$ 为 $D$ 上的连续函数。如果对于 $D$ 内任意两点 $A,B$，积分值

$$\int_L P\,\mathrm{d}x+Q\,\mathrm{d}y$$

只与 $A,B$ 两点有关，而与从 $A$ 到 $B$ 的路径 $L$（这里只考虑光滑或分段光滑曲线）无关，就称曲线积分 $\displaystyle\int_L P\,\mathrm{d}x+Q\,\mathrm{d}y$ **与路径无关**，否则称为**与路径有关**。

### 定理 14.3.2 (Green 定理) @280

设 $D$ 为平面上的单连通区域，$P(x,y)$，$Q(x,y)$ 在 $D$ 上具有连续偏导数。则下面的四个命题等价：

(1) 对于 $D$ 内的任意一条光滑（或分段光滑）闭曲线 $L$，

$$\int_L P\,\mathrm{d}x+Q\,\mathrm{d}y=0;$$

(2) 曲线积分 $\displaystyle\int_L P\,\mathrm{d}x+Q\,\mathrm{d}y$ 与路径无关；

(3) 存在 $D$ 上的可微函数 $U(x,y)$，使得

$$\mathrm{d}U=P\,\mathrm{d}x+Q\,\mathrm{d}y,$$

即 $P\,\mathrm{d}x+Q\,\mathrm{d}y$ 为 $U(x,y)$ 的全微分，这时称 $U(x,y)$ 为 1-形式 $P\,\mathrm{d}x+Q\,\mathrm{d}y$ 的**原函数**；

(4) 在 $D$ 内成立等式

$$\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x}.$$

### 定理 14.3.3 (原函数存在与 Newton–Leibniz 型计算公式) @282

设 $D$ 为平面单连通区域，$P(x,y)$ 和 $Q(x,y)$ 为 $D$ 上的连续函数。那么曲线积分 $\displaystyle\int_L P\,\mathrm{d}x+Q\,\mathrm{d}y$ 与路径无关的充分必要条件是在 $D$ 上存在 $P\,\mathrm{d}x+Q\,\mathrm{d}y$ 的一个原函数 $U(x,y)$。这时，对于 $D$ 内任意两点 $A(x_A,y_A)$，$B(x_B,y_B)$，计算公式

$$\int_{\widehat{AB}}P\,\mathrm{d}x+Q\,\mathrm{d}y=U(x_B,y_B)-U(x_A,y_A)$$

成立，其中 $\widehat{AB}$ 为任意从 $A$ 到 $B$ 的路径。

### 注 (用折线路径求原函数) @282

求 $P\,\mathrm{d}x+Q\,\mathrm{d}y$ 的原函数常用的是如图 14.3.11 所示的两个积分路径。由于 $U(x,y)-U(x_0,y_0)=\displaystyle\int_{(x_0,y_0)}^{(x,y)}P\,\mathrm{d}x+Q\,\mathrm{d}y$，那么如果积分路径取 $ANB$，则

$$\begin{aligned}
U(x,y)&=\int_{(x_0,y_0)}^{(x,y)}P\,\mathrm{d}x+Q\,\mathrm{d}y+U(x_0,y_0)\\
&=\int_{\overline{AN}}P\,\mathrm{d}x+Q\,\mathrm{d}y+\int_{\overline{NB}}P\,\mathrm{d}x+Q\,\mathrm{d}y+U(x_0,y_0)\\
&=\int_{x_0}^{x}P(x,y_0)\,\mathrm{d}x+\int_{y_0}^{y}Q(x,y)\,\mathrm{d}y+c,
\end{aligned}$$

其中 $c=U(x_0,y_0)$ 为任意常数。若积分路径取 $AMB$，同样可以得到

$$U(x,y)=\int_{y_0}^{y}Q(x_0,y)\,\mathrm{d}y+\int_{x_0}^{x}P(x,y)\,\mathrm{d}x+c.$$

### 例 14.3.4 (全微分与路径无关) @283

证明：在整个 $xy$ 平面上，$\left(\mathrm{e}^x\sin y-my\right)\mathrm{d}x+\left(\mathrm{e}^x\cos y-mx\right)\mathrm{d}y$ 是某个函数的全微分，求这样一个函数，并计算

$$I=\int_L\left(\mathrm{e}^x\sin y-my\right)\mathrm{d}x+\left(\mathrm{e}^x\cos y-mx\right)\mathrm{d}y,$$

其中 $L$ 为从 $(0,0)$ 到 $(1,1)$ 的任意一条道路。

**解** 令 $P(x,y)=\mathrm{e}^x\sin y-my$，$Q(x,y)=\mathrm{e}^x\cos y-mx$，于是恒成立

$$\frac{\partial P}{\partial y}=\mathrm{e}^x\cos y-m=\frac{\partial Q}{\partial x}.$$

因此由定理 14.3.2 知 $\left(\mathrm{e}^x\sin y-my\right)\mathrm{d}x+\left(\mathrm{e}^x\cos y-mx\right)\mathrm{d}y$ 是某个函数的全微分。

取路径如图 14.3.12，那么它的一个原函数为

$$\begin{aligned}
U(x,y)&=\int_{(0,0)}^{(x,y)}\left(\mathrm{e}^x\sin y-my\right)\mathrm{d}x+\left(\mathrm{e}^x\cos y-mx\right)\mathrm{d}y\\
&=\left(\int_{\overline{OA}}+\int_{\overline{AB}}\right)\left(\mathrm{e}^x\sin y-my\right)\mathrm{d}x+\left(\mathrm{e}^x\cos y-mx\right)\mathrm{d}y\\
&=\int_0^x0\,\mathrm{d}x+\int_0^y\left(\mathrm{e}^x\cos y-mx\right)\mathrm{d}y=\mathrm{e}^x\sin y-mxy.
\end{aligned}$$

于是由定理 14.3.3 得

$$I=\int_L\left(\mathrm{e}^x\sin y-my\right)\mathrm{d}x+\left(\mathrm{e}^x\cos y-mx\right)\mathrm{d}y=U(1,1)-U(0,0)=\mathrm{e}\sin1-m.$$

### 例 14.3.5 (绕原点的闭曲线积分) @283

计算 $\displaystyle\int_L\frac{x\,\mathrm{d}y-y\,\mathrm{d}x}{x^2+y^2}$，其中 $L$ 为一条不经过原点的简单闭曲线，方向为逆时针方向。

**解** 设 $L$ 所围的区域为 $D$。这时 $P(x,y)=\dfrac{-y}{x^2+y^2}$，$Q(x,y)=\dfrac{x}{x^2+y^2}$，而

$$\frac{\partial P}{\partial y}=\frac{y^2-x^2}{\left(x^2+y^2\right)^2}=\frac{\partial Q}{\partial x},\qquad x^2+y^2\neq0,$$

那么当 $D$ 不包含原点时，由 Green 公式即得

$$\int_L\frac{x\,\mathrm{d}y-y\,\mathrm{d}x}{x^2+y^2}=0.$$

当 $D$ 包含原点时，函数 $P,Q$ 在原点不满足 Green 公式的条件，因此不能直接使用。但在 $D$ 中挖去一个以原点为心，半径为 $r$ 的小圆盘后，对于余下的部分 Green 公式的条件就满足了。记 $D$ 中挖去小圆盘后的区域为 $D_1$，小圆盘的边界为 $l$（见图 14.3.13），在区域 $D_1$ 上应用 Green 公式得

$$\int_L\frac{x\,\mathrm{d}y-y\,\mathrm{d}x}{x^2+y^2}-\int_l\frac{x\,\mathrm{d}y-y\,\mathrm{d}x}{x^2+y^2}=0.$$

注意上式对 $l$ 取的方向是逆时针方向，这时 $l$ 的参数方程为

$$x=r\cos\theta,\qquad y=r\sin\theta\qquad(0\leqslant\theta\leqslant2\pi),$$

因此

$$\int_L\frac{x\,\mathrm{d}y-y\,\mathrm{d}x}{x^2+y^2}=\int_l\frac{x\,\mathrm{d}y-y\,\mathrm{d}x}{x^2+y^2}=\int_0^{2\pi}\frac{r^2\cos^2\theta+r^2\sin^2\theta}{r^2}\,\mathrm{d}\theta=2\pi.$$

### 注 (定理 14.3.2 中两个条件的必要性) @284

上面的例子说明，定理 14.3.2 中对于区域是单连通和函数 $P,Q$ 具有连续偏导数的要求是必要的。

### 定义 (二维单连通区域与二维复连通区域) @284

设 $\Omega$ 为空间上的一个区域。如果 $\Omega$ 内的任何一张封闭曲面所围的立体仍属于 $\Omega$，那么称 $\Omega$ 为**二维单连通区域**，否则称 $\Omega$ 为**二维复连通区域**。通俗地说，二维单连通区域之中不含有“洞”，而二维复连通区域之中含有“洞”。例如，单位球 $\{(x,y,z)\mid x^2+y^2+z^2<1\}$ 是二维单连通区域，而空心球 $\left\{(x,y,z)\ \middle|\ \frac12<x^2+y^2+z^2<1\right\}$ 是二维复连通区域。

### 定理 14.3.4 (Gauss 公式) @284

设 $\Omega$ 是 $\mathbf{R}^3$ 上由光滑（或分片光滑）的封闭曲面所围成的二维单连通闭区域，函数 $P(x,y,z)$，$Q(x,y,z)$ 和 $R(x,y,z)$ 在 $\Omega$ 上具有连续偏导数，则成立

$$\iiint_{\Omega}\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right)\mathrm{d}x\mathrm{d}y\mathrm{d}z=\iint_{\partial\Omega}P\,\mathrm{d}y\mathrm{d}z+Q\,\mathrm{d}z\mathrm{d}x+R\,\mathrm{d}x\mathrm{d}y,$$

这里 $\partial\Omega$ 的定向为外侧，它称为 $\Omega$ 的**诱导定向**。

### 注 (Gauss 公式在二维复连通区域上的推广) @285

Gauss 公式也可以推广到具有有限个“洞”的二维复连通区域上去。如对图 14.3.16 所示的有一个“洞”的区域，用适当的曲面将它分割成两个二维单连通区域后分别应用 Gauss 公式，再相加，即可推出 Gauss 公式依然成立。注意，这时区域外面的边界还是取外侧，但内部的边界却取内侧，但相对于区域，它们事实上都是外侧。

### 注 (用曲面积分求体积) @285

Gauss 公式说明了在空间中一个区域 $\Omega$ 上的三重积分与沿其边界 $\partial\Omega$ 的曲面积分间的内在关系，可视为 Green 公式的一个推广。与 Green 公式一样，Gauss 公式的一个直接应用就是可用沿区域 $\Omega$ 的边界的曲面积分来计算 $\Omega$ 的体积，具体地说就是

$$V=\iiint_{\Omega}\mathrm{d}x\mathrm{d}y\mathrm{d}z=\iint_{\partial\Omega}x\,\mathrm{d}y\mathrm{d}z=\iint_{\partial\Omega}y\,\mathrm{d}z\mathrm{d}x=\iint_{\partial\Omega}z\,\mathrm{d}x\mathrm{d}y=\frac13\iint_{\partial\Omega}x\,\mathrm{d}y\mathrm{d}z+y\,\mathrm{d}z\mathrm{d}x+z\,\mathrm{d}x\mathrm{d}y,$$

其中 $\partial\Omega$ 的定向为外侧。

### 例 14.3.6 (用高斯公式求椭球体积) @285

用上述公式计算椭球面 $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}+\dfrac{z^2}{c^2}=1$ 所围椭球的体积。

**解** 椭球的体积在上一章已经计算过，这里采用另一种方法。椭球面的参数方程为

$$x=a\sin\varphi\cos\theta,\qquad y=b\sin\varphi\sin\theta,\qquad z=c\cos\varphi,\qquad 0\leqslant\theta\leqslant2\pi,\quad 0\leqslant\varphi\leqslant\pi,$$

于是

$$\frac{\partial(x,y)}{\partial(\varphi,\theta)}=ab\sin\varphi\cos\varphi.$$

所以，由以上公式得椭球的体积为

$$\begin{aligned}
V&=\iint_{\partial\Omega}z\,\mathrm{d}x\mathrm{d}y=\iint_{\substack{0\leqslant\theta\leqslant2\pi\\ 0\leqslant\varphi\leqslant\pi}}c\cos\varphi\,\frac{\partial(x,y)}{\partial(\varphi,\theta)}\,\mathrm{d}\varphi\mathrm{d}\theta\\
&=abc\iint_{\substack{0\leqslant\theta\leqslant2\pi\\ 0\leqslant\varphi\leqslant\pi}}\sin\varphi\cos^2\varphi\,\mathrm{d}\varphi\mathrm{d}\theta=abc\int_0^{2\pi}\mathrm{d}\theta\int_0^{\pi}\sin\varphi\cos^2\varphi\,\mathrm{d}\varphi=\frac43\pi abc.
\end{aligned}$$

请读者想想，为什么在运算中第一步到第二步时积分号前取“$+$”号。

### 例 14.3.7 (高斯公式计算曲面积分) @286

求 $\displaystyle\iint_{\Sigma}x^3\,\mathrm{d}y\mathrm{d}z+y^3\,\mathrm{d}z\mathrm{d}x+z^3\,\mathrm{d}x\mathrm{d}y$，其中 $\Sigma$ 为球面 $x^2+y^2+z^2=a^2$，方向取外侧。

**解** 由 Gauss 公式并应用球面坐标变换得

$$\begin{aligned}
\iint_{\Sigma}x^3\,\mathrm{d}y\mathrm{d}z+y^3\,\mathrm{d}z\mathrm{d}x+z^3\,\mathrm{d}x\mathrm{d}y&=3\iiint_{x^2+y^2+z^2\leqslant a^2}\left(x^2+y^2+z^2\right)\mathrm{d}x\mathrm{d}y\mathrm{d}z\\
&=3\int_0^{2\pi}\mathrm{d}\theta\int_0^{\pi}\mathrm{d}\varphi\int_0^ar^4\sin\varphi\,\mathrm{d}r=\frac{12}{5}\pi a^5.
\end{aligned}$$

### 例 14.3.8 (用高斯公式求流量) @286

设某种流体的速度为 $\boldsymbol{v}=x\mathbf{i}+y\mathbf{j}+z\mathbf{k}$，求单位时间内流体流过曲面 $\Sigma:y=x^2+z^2$（$0\leqslant y\leqslant h$）的流量，其中 $\Sigma$ 的方向取左侧（见图 14.3.17）。

**解** 流量的计算公式为

$$\Phi=\iint_{\Sigma}\boldsymbol{v}\cdot\boldsymbol{n}\,\mathrm{d}S=\iint_{\Sigma}x\,\mathrm{d}y\mathrm{d}z+y\,\mathrm{d}z\mathrm{d}x+z\,\mathrm{d}x\mathrm{d}y.$$

由于 $\Sigma$ 不是封闭曲面，但添加一片曲面

$$\sigma:\ y=h,\qquad x^2+z^2\leqslant h$$

后，$\Sigma+\sigma$ 就是封闭曲面，这里 $\sigma$ 的方向取右侧。

记 $\Sigma+\sigma$ 所围的区域为 $\Omega$，则由 Gauss 公式，得

$$\iint_{\Sigma}x\,\mathrm{d}y\mathrm{d}z+y\,\mathrm{d}z\mathrm{d}x+z\,\mathrm{d}x\mathrm{d}y+\iint_{\sigma}x\,\mathrm{d}y\mathrm{d}z+y\,\mathrm{d}z\mathrm{d}x+z\,\mathrm{d}x\mathrm{d}y=\iiint_{\Omega}3\,\mathrm{d}x\mathrm{d}y\mathrm{d}z=3\int_0^{2\pi}\mathrm{d}\theta\int_0^{\sqrt{h}}r\,\mathrm{d}r\int_{r^2}^{h}\mathrm{d}y=\frac{3\pi}{2}h^2,$$

其中计算三重积分时利用了柱面坐标变换 $z=r\cos\theta$，$x=r\sin\theta$，$y=y$。由于

$$\iint_{\sigma}x\,\mathrm{d}y\mathrm{d}z+y\,\mathrm{d}z\mathrm{d}x+z\,\mathrm{d}x\mathrm{d}y=\iint_{\sigma}y\,\mathrm{d}z\mathrm{d}x=\iint_{x^2+z^2\leqslant h}h\,\mathrm{d}z\mathrm{d}x=\pi h^2,$$

所以

$$\Phi=\iint_{\Sigma}x\,\mathrm{d}y\mathrm{d}z+y\,\mathrm{d}z\mathrm{d}x+z\,\mathrm{d}x\mathrm{d}y=\frac{3\pi}{2}h^2-\pi h^2=\frac{\pi}{2}h^2.$$

### 注 (曲面边界的诱导定向与右手定则) @286

设 $\Sigma$ 为具有分段光滑边界的非封闭光滑双侧曲面。选定曲面的一侧，并如下规定 $\Sigma$ 的边界 $\partial\Sigma$ 的一个正向：如果一个人保持与曲面选定一侧的法向量同向站立，当他沿 $\partial\Sigma$ 的这个方向行走时，曲面 $\Sigma$ 总是在他左边。$\partial\Sigma$ 的这个定向也称为 $\Sigma$ 的**诱导定向**，这种定向方法称为**右手定则**。

### 定理 14.3.5 (Stokes 公式) @286

设 $\Sigma$ 为光滑曲面，其边界 $\partial\Sigma$ 为分段光滑闭曲线。若函数 $P(x,y,z)$，$Q(x,y,z)$，$R(x,y,z)$ 在 $\Sigma$ 及其边界 $\partial\Sigma$ 上具有连续偏导数，则成立

$$\begin{aligned}
\int_{\partial\Sigma}P\,\mathrm{d}x+Q\,\mathrm{d}y+R\,\mathrm{d}z&=\iint_{\Sigma}\left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z}\right)\mathrm{d}y\mathrm{d}z+\left(\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x}\right)\mathrm{d}z\mathrm{d}x+\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\mathrm{d}x\mathrm{d}y\\
&=\iint_{\Sigma}\left[\left(\frac{\partial R}{\partial y}-\frac{\partial Q}{\partial z}\right)\cos\alpha+\left(\frac{\partial P}{\partial z}-\frac{\partial R}{\partial x}\right)\cos\beta+\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\cos\gamma\right]\mathrm{d}S,
\end{aligned}$$

其中 $\partial\Sigma$ 取诱导定向。

### 注 (Stokes 公式的行列式记法) @288

利用行列式记号，可以将 Stokes 公式写成

$$\int_{\partial\Sigma}P\,\mathrm{d}x+Q\,\mathrm{d}y+R\,\mathrm{d}z=\iint_{\Sigma}\begin{vmatrix}\mathrm{d}y\mathrm{d}z&\mathrm{d}z\mathrm{d}x&\mathrm{d}x\mathrm{d}y\\[2pt]\dfrac{\partial}{\partial x}&\dfrac{\partial}{\partial y}&\dfrac{\partial}{\partial z}\\[6pt]P&Q&R\end{vmatrix}=\iint_{\Sigma}\begin{vmatrix}\cos\alpha&\cos\beta&\cos\gamma\\[2pt]\dfrac{\partial}{\partial x}&\dfrac{\partial}{\partial y}&\dfrac{\partial}{\partial z}\\[6pt]P&Q&R\end{vmatrix}\mathrm{d}S.$$

Stokes 定理说明了沿曲面 $\Sigma$ 的曲面积分与沿其边界 $\partial\Sigma$ 的曲线积分间的内在关系，它也是 Green 公式的一个自然推广（这时在 Green 公式中，平面区域的定向为指向读者）。

### 例 14.3.9 (斯托克斯公式计算) @288

计算 $I=\displaystyle\int_L\left(y^2-z^2\right)\mathrm{d}x+\left(z^2-x^2\right)\mathrm{d}y+\left(x^2-y^2\right)\mathrm{d}z$，其中 $L$ 为平面 $x+y+z=1$ 被三个坐标平面所截三角形 $\Sigma$ 的边界，若从 $x$ 轴的正向看去，定向为逆时针方向（见图 14.3.19）。

**解** 由 Stokes 公式得

$$\begin{aligned}
I&=\int_L\left(y^2-z^2\right)\mathrm{d}x+\left(z^2-x^2\right)\mathrm{d}y+\left(x^2-y^2\right)\mathrm{d}z\\
&=\iint_{\Sigma}\begin{vmatrix}\cos\alpha&\cos\beta&\cos\gamma\\[2pt]\dfrac{\partial}{\partial x}&\dfrac{\partial}{\partial y}&\dfrac{\partial}{\partial z}\\[6pt]y^2-z^2&z^2-x^2&x^2-y^2\end{vmatrix}\mathrm{d}S\\
&=-2\iint_{\Sigma}\bigl[(y+z)\cos\alpha+(x+z)\cos\beta+(x+y)\cos\gamma\bigr]\mathrm{d}S.
\end{aligned}$$

由于 $\Sigma$ 的方程为 $x+y+z=1$，定向为上侧（这是要与 $L$ 的定向相配合来使用 Stokes 公式），则易计算

$$\cos\alpha=\cos\beta=\cos\gamma=\frac{1}{\sqrt3}.$$

因此注意到在三角形 $\Sigma$ 上成立 $x+y+z=1$，且 $\Sigma$ 的面积为 $\dfrac{\sqrt3}{2}$，就得

$$I=-\frac{4}{\sqrt3}\iint_{\Sigma}(x+y+z)\,\mathrm{d}S=-\frac{4}{\sqrt3}\iint_{\Sigma}\mathrm{d}S=-2.$$

### 例 14.3.10 (交线上的斯托克斯公式) @289

计算 $I=\displaystyle\int_L\left(y^2+z^2\right)\mathrm{d}x+\left(z^2+x^2\right)\mathrm{d}y+\left(x^2+y^2\right)\mathrm{d}z$，其中 $L$ 是上半球面 $x^2+y^2+z^2=2Rx$（$z\geqslant0$）与圆柱面 $x^2+y^2=2rx$（$R>r>0$）的交线，从 $z$ 轴的正向看去，是逆时针方向（见图 14.3.20）。

**解** 记在球面 $x^2+y^2+z^2=2Rx$ 上由 $L$ 所围的曲面为 $\Sigma$。由于 $L$ 的定向，为应用 Stokes 定理取 $\Sigma$ 的定向为上侧，所以其法向量的方向余弦为

$$\cos\alpha=\frac{x-R}{R},\qquad \cos\beta=\frac{y}{R},\qquad \cos\gamma=\frac{z}{R}.$$

于是由 Stokes 定理得

$$\begin{aligned}
I&=\int_L\left(y^2+z^2\right)\mathrm{d}x+\left(z^2+x^2\right)\mathrm{d}y+\left(x^2+y^2\right)\mathrm{d}z\\
&=\iint_{\Sigma}\begin{vmatrix}\cos\alpha&\cos\beta&\cos\gamma\\[2pt]\dfrac{\partial}{\partial x}&\dfrac{\partial}{\partial y}&\dfrac{\partial}{\partial z}\\[6pt]y^2+z^2&z^2+x^2&x^2+y^2\end{vmatrix}\mathrm{d}S\\
&=2\iint_{\Sigma}\bigl[(y-z)\cos\alpha+(z-x)\cos\beta+(x-y)\cos\gamma\bigr]\mathrm{d}S\\
&=2\iint_{\Sigma}\left[(y-z)\frac{x-R}{R}+(z-x)\frac{y}{R}+(x-y)\frac{z}{R}\right]\mathrm{d}S\\
&=2\left(\iint_{\Sigma}z\,\mathrm{d}S-\iint_{\Sigma}y\,\mathrm{d}S\right).
\end{aligned}$$

由于曲面 $\Sigma$ 关于 $xz$ 平面对称，因此

$$\iint_{\Sigma}y\,\mathrm{d}S=0.$$

而在上半球面 $x^2+y^2+z^2=2Rx$（$z\geqslant0$）上，$z=\sqrt{2Rx-x^2-y^2}$，所以在 $\Sigma$ 上有

$$\sqrt{1+\left(\frac{\partial z}{\partial x}\right)^2+\left(\frac{\partial z}{\partial y}\right)^2}=\sqrt{1+\frac{(x-R)^2}{z^2}+\frac{y^2}{z^2}}=\frac{R}{z}.$$

利用曲面积分的计算公式就得

$$I=2\iint_{\Sigma}z\,\mathrm{d}S=2\iint_{(x-r)^2+y^2\leqslant r^2}z\frac{R}{z}\,\mathrm{d}x\mathrm{d}y=2R\iint_{(x-r)^2+y^2\leqslant r^2}\mathrm{d}x\mathrm{d}y=2\pi r^2R.$$
