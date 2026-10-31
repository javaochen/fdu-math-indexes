---
chapter: 12
chapter_title: 多元函数的微分学
section: "12.3"
section_title: 中值定理和 Taylor 公式
pages: "528–532"
---

### 定义 12.3.1 (凸区域) @528

设 $D\subset\mathbf{R}^n$ 是区域。若联结 $D$ 中任意两点的线段都完全属于 $D$，即对于任意两点 $x_0,x_1\in D$ 和一切 $\lambda\in[0,1]$，恒有

$$x_0+\lambda(x_1-x_0)\in D,$$

则称 $D$ 为凸区域（convex domain）。

例如 $\mathbf{R}^2$ 上的开圆盘

$$D=\{(x,y)\in\mathbf{R}^2\mid (x-a)^2+(y-b)^2<r^2\}$$

就是凸区域。

### 定理 12.3.1 (中值定理) @529

设二元函数 $f(x,y)$ 在凸区域 $D\subset\mathbf{R}^2$ 上可微，则对于 $D$ 内任意两点 $(x_0,y_0)$ 和 $(x_0+\Delta x,y_0+\Delta y)$，至少存在一个 $\theta\ (0<\theta<1)$，使得

$$f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0)=f_x(x_0+\theta\Delta x,y_0+\theta\Delta y)\Delta x+f_y(x_0+\theta\Delta x,y_0+\theta\Delta y)\Delta y.$$

### 推论 12.3.1 (偏导为零则为常值) @529

如果函数 $f(x,y)$ 在区域 $D\subset\mathbf{R}^2$ 上的偏导数恒为零，那么它在 $D$ 上必是常值函数。

### 定理 12.3.2 (多元函数的中值定理) @530

设 $n$ 元函数 $f(x_1,x_2,\cdots,x_n)$ 在凸区域 $D\subset\mathbf{R}^n$ 上可微，则对于 $D$ 内任意两点 $(x_1^0,x_2^0,\cdots,x_n^0)$ 和 $(x_1^0+\Delta x_1,x_2^0+\Delta x_2,\cdots,x_n^0+\Delta x_n)$，至少存在一个 $\theta\ (0<\theta<1)$，使得

$$f(x_1^0+\Delta x_1,x_2^0+\Delta x_2,\cdots,x_n^0+\Delta x_n)-f(x_1^0,x_2^0,\cdots,x_n^0)=\sum_{i=1}^{n}f_{x_i}(x_1^0+\theta\Delta x_1,x_2^0+\theta\Delta x_2,\cdots,x_n^0+\theta\Delta x_n)\Delta x_i.$$

### 定理 12.3.3 (Taylor 公式) @530

设函数 $f(x,y)$ 在点 $(x_0,y_0)$ 的邻域 $U=O((x_0,y_0),r)$ 上具有 $k+1$ 阶连续偏导数，那么对于 $U$ 内每一点 $(x_0+\Delta x,y_0+\Delta y)$ 都成立

$$
\begin{aligned}
f(x_0+\Delta x,y_0+\Delta y)={}&f(x_0,y_0)+\left(\Delta x\frac{\partial}{\partial x}+\Delta y\frac{\partial}{\partial y}\right)f(x_0,y_0)\\
&+\frac{1}{2!}\left(\Delta x\frac{\partial}{\partial x}+\Delta y\frac{\partial}{\partial y}\right)^2f(x_0,y_0)+\cdots\\
&+\frac{1}{k!}\left(\Delta x\frac{\partial}{\partial x}+\Delta y\frac{\partial}{\partial y}\right)^kf(x_0,y_0)+R_k,
\end{aligned}
$$

其中

$$R_k=\frac{1}{(k+1)!}\left(\Delta x\frac{\partial}{\partial x}+\Delta y\frac{\partial}{\partial y}\right)^{k+1}f(x_0+\theta\Delta x,y_0+\theta\Delta y)\quad(0<\theta<1)$$

称为 Lagrange 余项。

### 注 (算子记号的含义) @530

同本章第一节的定义一样，这里

$$\left(\Delta x\frac{\partial}{\partial x}+\Delta y\frac{\partial}{\partial y}\right)^p f(x_0,y_0)=\sum_{i=0}^{p}C_p^i\frac{\partial^pf}{\partial x^{p-i}\partial y^i}(x_0,y_0)(\Delta x)^{p-i}(\Delta y)^i\quad(p\ge 1).$$

### 注 (k = 0 时的中值定理) @531

当 $k=0$ 时，就得到在 $U=O((x_0,y_0),r)$ 上成立的中值定理

$$f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0)=f_x(x_0+\theta\Delta x,y_0+\theta\Delta y)\Delta x+f_y(x_0+\theta\Delta x,y_0+\theta\Delta y)\Delta y,\quad 0<\theta<1,$$

这就是定理 12.3.1 在 $U$ 上的形式。

### 推论 12.3.2 (Peano 余项) @531

设 $f(x,y)$ 在点 $(x_0,y_0)$ 的某个邻域上具有 $k+1$ 阶连续偏导数，那么在点 $(x_0,y_0)$ 附近成立

$$
\begin{aligned}
f(x_0+\Delta x,y_0+\Delta y)={}&f(x_0,y_0)+\left(\Delta x\frac{\partial}{\partial x}+\Delta y\frac{\partial}{\partial y}\right)f(x_0,y_0)\\
&+\frac{1}{2!}\left(\Delta x\frac{\partial}{\partial x}+\Delta y\frac{\partial}{\partial y}\right)^2f(x_0,y_0)+\cdots\\
&+\frac{1}{k!}\left(\Delta x\frac{\partial}{\partial x}+\Delta y\frac{\partial}{\partial y}\right)^kf(x_0,y_0)+o\left(\left(\sqrt{\Delta x^2+\Delta y^2}\right)^k\right).
\end{aligned}
$$

### 例 12.3.1 (用泰勒公式近似计算) @531

近似计算 $(1.08)^{3.96}$。

考虑函数 $f(x,y)=x^y$ 在 $(1,4)$ 点的 Taylor 公式。由于

$$f(1,4)=1,$$

$$f_x(x,y)=yx^{y-1},\quad f_x(1,4)=4,$$

$$f_y(x,y)=x^y\ln x,\quad f_y(1,4)=0,$$

$$f_{xx}(x,y)=y(y-1)x^{y-2},\quad f_{xx}(1,4)=12,$$

$$f_{yy}(x,y)=x^y(\ln x)^2,\quad f_{yy}(1,4)=0,$$

$$f_{xy}(x,y)=x^{y-1}+yx^{y-1}\ln x,\quad f_{xy}(1,4)=1.$$

利用推论 12.3.2 得到（展开到二阶为止）

$$f(1+\Delta x,4+\Delta y)=(1+\Delta x)^{4+\Delta y}=1+4\Delta x+6\Delta x^2+\Delta x\Delta y+o(\Delta x^2+\Delta y^2).$$

取 $\Delta x=0.08,\Delta y=-0.04$，略去高阶项就得到

$$(1.08)^{3.96}\approx 1+4\times0.08+6\times0.08^2-0.08\times0.04=1.3552.$$

它与精确值 $1.356\,307\,21\cdots$ 的误差已小于千分之二。

### 例 12.3.2 (五点差分格式) @531

在计算机上求 $\dfrac{\partial f}{\partial x}$ 在点 $(x,y)$ 的值，通常选取一个很小的 $h$，然后用中心差商

$$\frac{f\left(x+\frac{h}{2},y\right)-f\left(x-\frac{h}{2},y\right)}{h}$$

近似代替 $\dfrac{\partial f}{\partial x}(x,y)$。对 $\dfrac{\partial^2f}{\partial x^2}(x,y)$ 作同样处理，即有

$$
\begin{aligned}
\frac{\partial^2f}{\partial x^2}(x,y)&\approx\frac{1}{h}\left[\frac{\partial f}{\partial x}\left(x+\frac{h}{2},y\right)-\frac{\partial f}{\partial x}\left(x-\frac{h}{2},y\right)\right]\\
&\approx\frac{\dfrac{f(x+h,y)-f(x,y)}{h}-\dfrac{f(x,y)-f(x-h,y)}{h}}{h}\\
&=\frac{f(x+h,y)-2f(x,y)+f(x-h,y)}{h^2}.
\end{aligned}
$$

在 $y$ 方向也采用这个方法，并记

$$\Delta_hf(x,y)=\frac{f(x+h,y)+f(x,y+h)+f(x-h,y)+f(x,y-h)-4f(x,y)}{h^2},$$

就可以通过计算 $\Delta_hf(x,y)$ 来求得 $\left(\dfrac{\partial^2}{\partial x^2}+\dfrac{\partial^2}{\partial y^2}\right)f(x,y)$ 的近似值。

这是一个重要的近似计算公式。由于在计算 $(x,y)$ 处的二阶偏导数时用到了 $f(x,y)$ 在它及它的上下左右共五个点的函数值（见图 12.3.1），因此称 $\Delta_hf(x,y)$ 为五点差分格式。

现假设 $f(x,y)$ 具有四阶连续偏导数，则显然有

$$f_{xxxx}(x+\theta h,y)=f_{xxxx}(x,y)+o(1),$$

利用 Taylor 公式，就得到

$$
\begin{aligned}
f(x\pm h,y)&=f(x,y)\pm hf_x(x,y)+\frac{h^2}{2}f_{xx}(x,y)\pm\frac{h^3}{6}f_{xxx}(x,y)+\frac{h^4}{24}f_{xxxx}(x+\theta h,y)\\
&=f(x,y)\pm hf_x(x,y)+\frac{h^2}{2}f_{xx}(x,y)\pm\frac{h^3}{6}f_{xxx}(x,y)+\frac{h^4}{24}f_{xxxx}(x,y)+o(h^4).
\end{aligned}
$$

同理有

$$f(x,y\pm h)=f(x,y)\pm hf_y(x,y)+\frac{h^2}{2}f_{yy}(x,y)\pm\frac{h^3}{6}f_{yyy}(x,y)+\frac{h^4}{24}f_{yyyy}(x,y)+o(h^4).$$

结合这两式，就得到五点差分格式的截断误差（用近似公式代替精确关系所产生的误差）为

$$\Delta_hf(x,y)-\left(\frac{\partial^2}{\partial x^2}+\frac{\partial^2}{\partial y^2}\right)f(x,y)=\frac{h^2}{12}\left(\frac{\partial^4}{\partial x^4}+\frac{\partial^4}{\partial y^4}\right)f(x,y)+o(h^2)=O(h^2).$$

### 定理 12.3.4 (多元函数的泰勒公式) @532

设 $n$ 元函数 $f(x_1,x_2,\cdots,x_n)$ 在点 $(x_1^0,x_2^0,\cdots,x_n^0)$ 附近具有 $k+1$ 阶连续偏导数，那么在这点附近成立如下的 Taylor 公式：

$$
\begin{aligned}
&f(x_1^0+\Delta x_1,x_2^0+\Delta x_2,\cdots,x_n^0+\Delta x_n)\\
={}&f(x_1^0,x_2^0,\cdots,x_n^0)+\left(\sum_{i=1}^{n}\Delta x_i\frac{\partial}{\partial x_i}\right)f(x_1^0,x_2^0,\cdots,x_n^0)\\
&+\frac{1}{2!}\left(\sum_{i=1}^{n}\Delta x_i\frac{\partial}{\partial x_i}\right)^2f(x_1^0,x_2^0,\cdots,x_n^0)+\cdots\\
&+\frac{1}{k!}\left(\sum_{i=1}^{n}\Delta x_i\frac{\partial}{\partial x_i}\right)^kf(x_1^0,x_2^0,\cdots,x_n^0)+R_k,
\end{aligned}
$$

其中

$$R_k=\frac{1}{(k+1)!}\left(\sum_{i=1}^{n}\Delta x_i\frac{\partial}{\partial x_i}\right)^{k+1}f(x_1^0+\theta\Delta x_1,x_2^0+\theta\Delta x_2,\cdots,x_n^0+\theta\Delta x_n),\quad 0<\theta<1$$

为 Lagrange 余项。
