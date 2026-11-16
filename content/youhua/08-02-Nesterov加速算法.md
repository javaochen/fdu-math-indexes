---
chapter: 8
chapter_title: 复合优化算法
section: "8.2"
section_title: Nesterov 加速算法
pages: "395–408"
---

上一节分析了近似点梯度算法的收敛速度：如果光滑部分的梯度是利普希茨连续的，则目标函数的收敛速度可以达到 $\mathcal{O}\left(\dfrac{1}{k}\right)$．一个自然的问题是如果仅用梯度信息，能不能取得更快的收敛速度．Nesterov 分别在 1983 年、1988 年和 2005 年提出了三种改进的一阶算法，收敛速度能达到 $\mathcal{O}\left(\dfrac{1}{k^2}\right)$．实际上，这三种算法都可以应用到近似点梯度算法上．随着数据量的增大，牛顿型方法由于其过大的计算复杂度，不便于有效地应用到实际中，Nesterov 加速算法作为一种快速的一阶算法重新被挖掘出来并迅速流行起来．Beck 和 Teboulle 就在 2008 年给出了 Nesterov 在 1983 年提出的算法的近似点梯度法版本——FISTA．

## 8.2.1 FISTA 算法 @395

考虑如下复合优化问题：

$$\min_{x\in\mathbb{R}^n}\ \psi(x)=f(x)+h(x),\tag{8.2.1}$$

其中 $f(x)$ 是连续可微的凸函数且梯度是利普希茨连续的（利普希茨常数是 $L$），$h(x)$ 是适当的闭凸函数．优化问题 (8.2.1) 由光滑部分 $f(x)$ 和非光滑部分 $h(x)$ 组成，可以使用近似点梯度法来求解这一问题，但是其收敛速度只有 $\mathcal{O}\left(\dfrac{1}{k}\right)$．

FISTA 算法由两步组成：第一步沿着前两步的计算方向计算一个新点，第二步在该新点处做一步近似点梯度迭代，即

$$y^k=x^{k-1}+\frac{k-2}{k+1}\left(x^{k-1}-x^{k-2}\right),$$
$$x^k=\operatorname{prox}_{t_kh}\left(y^k-t_k\nabla f(y^k)\right).$$

这一做法对每一步迭代的计算量几乎没有影响，而带来的效果是显著的．如果选取 $t_k$ 为固定的步长并小于或等于 $\dfrac{1}{L}$，其收敛速度达到了 $\mathcal{O}\left(\dfrac{1}{k^2}\right)$．

### 算法 8.2 (FISTA) @396

1. 输入：$x^0=x^{-1}\in\mathbb{R}^n$，$k\leftarrow 1$．
2. **while** 未达到收敛准则 **do**
3. $\quad$ 计算 $y^k=x^{k-1}+\dfrac{k-2}{k+1}\left(x^{k-1}-x^{k-2}\right)$，
4. $\quad$ 选取 $t_k=t\in\left(0,\dfrac{1}{L}\right]$，计算 $x^k=\operatorname{prox}_{t_kh}\left(y^k-t_k\nabla f(y^k)\right)$．
5. $\quad k\leftarrow k+1$．
6. **end while**

为了对算法做更好的推广，可以给出 FISTA 算法的一个等价变形，只是把原来算法中的第一步拆成两步迭代，相应算法见算法 8.3．当 $\gamma_k=\dfrac{2}{k+1}$ 时，并且取固定步长时，两个算法是等价的．但是当 $\gamma_k$ 采用别的取法时，算法 8.3 将给出另一个版本的加速算法．

### 算法 8.3 (FISTA 算法的等价变形) @397

1. 输入：$v^0=x^0\in\mathbb{R}^n$，$k\leftarrow 1$．
2. **while** 未达到收敛准则 **do**
3. $\quad$ 计算 $y^k=(1-\gamma_k)x^{k-1}+\gamma_kv^{k-1}$．
4. $\quad$ 选取 $t_k$，计算 $x^k=\operatorname{prox}_{t_kh}\left(y^k-t_k\nabla f(y^k)\right)$．
5. $\quad$ 计算 $v^k=x^{k-1}+\dfrac{1}{\gamma_k}\left(x^k-x^{k-1}\right)$．
6. $\quad k\leftarrow k+1$．
7. **end while**

对于该算法框架，需要确定如何选取步长 $t_k$ 和 $\gamma_k$，这决定了算法的收敛速度．算法 8.3 以 $\mathcal{O}\left(\dfrac{1}{k^2}\right)$ 的速度收敛的条件为

$$f(x^k)\leqslant f(y^k)+\left\langle\nabla f(y^k),x^k-y^k\right\rangle+\frac{1}{2t_k}\left\|x^k-y^k\right\|_2^2,\tag{8.2.2}$$

$$\gamma_1=1,\qquad \frac{(1-\gamma_i)t_i}{\gamma_i^2}\leqslant\frac{t_{i-1}}{\gamma_{i-1}^2},\quad i>1,\tag{8.2.3}$$

$$\frac{\gamma_k^2}{t_k}=\mathcal{O}\left(\frac{1}{k^2}\right).\tag{8.2.4}$$

可以看到当取 $t_k=\dfrac{1}{L}$，$\gamma_k=\dfrac{2}{k+1}$ 时，以上条件满足．而且 $\gamma_k$ 的选取并不唯一，例如可以采取

$$\gamma_1=1,\qquad \frac{1}{\gamma_k}=\frac{1}{2}\left(1+\sqrt{1+\frac{4}{\gamma_{k-1}}}\right)$$

来得到序列 $\{\gamma_k\}$，这样导出的算法的收敛速度依然是 $\mathcal{O}\left(\dfrac{1}{k^2}\right)$．

在算法 8.2 和算法 8.3 中都要求步长满足 $t_k\leqslant\dfrac{1}{L}$，此时条件 (8.2.2) 满足．然而，对绝大多数问题我们不知道函数 $\nabla f$ 的利普希茨常数．为了在这种情况下条件 (8.2.2) 依然能满足，需要使用线搜索来确定合适的 $t_k$，同时选取 $\gamma_k$ 使得条件 (8.2.3) 和条件 (8.2.4) 同时满足，从而使得算法达到 $\mathcal{O}\left(\dfrac{1}{k^2}\right)$ 的收敛速度．

第一种方法比较直观，类似于近似点梯度算法，它是在算法 8.3 的第 4 行中加入线搜索，并取 $\gamma_k=\dfrac{2}{k+1}$，以回溯的方式找到满足条件 (8.2.2) 的 $t_k$ 即可．每一次的起始步长取为前一步的步长 $t_{k-1}$，通过不断指数式地减小步长 $t_k$ 来使得条件 (8.2.2) 得到满足．注意，当 $t_k$ 足够小时，条件 (8.2.2) 一定会得到满足的，因此不会出现线搜索无法终止的情况．

### 算法 8.4 (线搜索算法 1) @398

1. 输入：$t_k=t_{k-1}>0$，$\rho<1$．参照点 $y^k$ 及其梯度 $\nabla f(y^k)$．
2. 计算 $x^k=\operatorname{prox}_{t_kh}\left(y^k-t_k\nabla f(y^k)\right)$．
3. **while** 条件 (8.2.2) 对 $x^k,y^k$ 不满足 **do**
4. $\quad t_k\leftarrow\rho t_k$．
5. $\quad$ 重新计算 $x^k=\operatorname{prox}_{t_kh}\left(y^k-t_k\nabla f(y^k)\right)$．
6. **end while**
7. 输出：迭代点 $x^k$，步长 $t_k$．

在第一种方法中线搜索的初始步长 $t_k$ 取为上一步的步长 $t_{k-1}$，并在迭代过程中不断减小，这不利于算法较快收敛．注意到算法 8.3 中参数 $\gamma_k$ 也是可调的，这进一步增加了设计线搜索算法的灵活性．第二种线搜索方法不仅改变步长 $t_k$ 而且改变 $\gamma_k$，所以 $y^k$ 也随之改变．

### 算法 8.5 (线搜索算法 2) @398

1. 输入：$t_k=\hat{t}>0$，$t_{k-1}>0$，$\rho<1$．
2. **loop**
3. $\quad$ 取 $\gamma_k$ 为关于 $\gamma$ 的方程 $t_{k-1}\gamma^2=t_k\gamma_{k-1}^2(1-\gamma)$ 的正根．
4. $\quad$ 计算 $y^k=(1-\gamma_k)x^{k-1}+\gamma_kv^{k-1}$ 和梯度 $\nabla f(y^k)$．
5. $\quad$ 计算 $x^k=\operatorname{prox}_{t_kh}\left(y^k-t_k\nabla f(y^k)\right)$．
6. $\quad$ **if** 条件 (8.2.2) 对 $x^k,y^k$ 不满足 **then**
7. $\quad\quad t_k\leftarrow\rho t_k$．
8. $\quad$ **else**
9. $\quad\quad$ 结束循环．
10. $\quad$ **end if**
11. **end loop**
12. 输出：迭代点 $x^k$，步长 $t_k$．

由 $\gamma_k$ 的计算可知，其一定满足条件 (8.2.3) 且有 $0<\gamma_k\leqslant 1$，并且 $t_k$ 的选取必有一个下界 $t_{\min}$．关于 $\dfrac{\gamma_k^2}{t_k}$ 的估计，有

$$\frac{\sqrt{t_{k-1}}}{\gamma_{k-1}}=\frac{\sqrt{(1-\gamma_k)t_k}}{\gamma_k}\leqslant\frac{\sqrt{t_k}}{\gamma_k}-\frac{\sqrt{t_k}}{2},$$

这里的不等号是由于 $\sqrt{1-x}$ 在点 $x=0$ 处的凹性．反复利用上式可得 $\dfrac{\sqrt{t_k}}{\gamma_k}\geqslant\sqrt{t_1}+\dfrac{1}{2}\sum\limits_{i=2}^{k}\sqrt{t_i}$，因此

$$\frac{\gamma_k^2}{t_k}\leqslant\frac{1}{\left(\sqrt{t_1}+\frac{1}{2}\sum_{i=2}^{k}\sqrt{t_i}\right)^2}\leqslant\frac{4}{t_{\min}(k+1)^2}=\mathcal{O}\left(\frac{1}{k^2}\right).\tag{8.2.5}$$

以上的分析说明了条件 (8.2.3) 和条件 (8.2.4) 在算法 8.5 的执行中也得到满足．算法 8.5 的执行过程比算法 8.4 的复杂．由于它同时改变了 $t_k$ 和 $\gamma_k$，迭代点 $x^k$ 和参照点 $y^k$ 在线搜索的过程中都发生了变化，点 $y^k$ 处的梯度也需要重新计算．但此算法给我们带来的好处就是步长 $t_k$ 不再单调下降，在迭代后期也可以取较大值，这会进一步加快收敛．

总的来说，固定步长的 FISTA 算法对于步长的选取是较为保守的，为了保证收敛，有时不得不选取一个很小的步长，这使得固定步长的 FISTA 算法收敛较慢．如果采用线搜索，则在算法执行过程中会有很大机会选择符合条件的较大步长，因此线搜索可能加快算法的收敛，但代价就是每一步迭代的复杂度变高．在实际的 FISTA 算法中，需要权衡固定步长和线搜索算法的利弊，从而选择针对特定问题的高效算法．

原始的 FISTA 算法不是一个下降算法，这里给出一个 FISTA 的下降算法变形，只需要对算法 8.3 的第 4 行进行修改．在计算邻近算子之后，并不立即选取此点作为新的迭代点，而是检查函数值在当前点处是否下降，只有当函数值下降时才更新迭代点．假设经过近似点映射之后的点为 $u$，则对当前点 $x^k$ 做如下更新：

$$x^k=\begin{cases}u,&\psi(u)\leqslant\psi(x^{k-1}),\\ x^{k-1},&\psi(u)>\psi(x^{k-1}).\end{cases}\tag{8.2.6}$$

其中 $\psi(x^k)\leqslant\psi(x^{k-1})$ 恒成立．在实际计算过程中，由于步长或 $\gamma_k$ 会随着 $k$ 变化，因此 (8.2.6) 式中的 $\psi(u)>\psi(x^{k-1})$ 不会一直成立，即算法不会停留在某个 $x^{k-1}$ 而不进行更新．

### 算法 8.6 (下降 FISTA 算法) @400

1. 输入：$v^0=x^0\in\mathbb{R}^n$，初始化 $k\leftarrow 1$．
2. **while** 未达到收敛准则 **do**
3. $\quad$ 计算 $y=(1-\gamma_k)x^{k-1}+\gamma_kv^{k-1}$．
4. $\quad$ 计算 $u=\operatorname{prox}_{t_kh}\left(y-t_k\nabla f(y)\right)$．
5. $\quad$ 使用 (8.2.6) 式更新迭代点 $x^k$．
6. $\quad$ 计算 $v^k=x^{k-1}+\dfrac{1}{\gamma_k}\left(x^k-x^{k-1}\right)$．
7. $\quad k\leftarrow k+1$．
8. **end while**

步长和 $\gamma_k$ 的选取只需使用固定步长 $t_k\leqslant\dfrac{1}{L}$，$\gamma_k=\dfrac{2}{k+1}$ 或者使用前述的任意一种线搜索方法均可．

## 8.2.2 其他加速算法 @400

本小节给出除 FISTA 算法外的另外两种加速算法，它们分别是 Nesterov 在 1988 年和 2005 年提出的算法的推广版本．此外，本小节还将简单提一下针对非凸复合优化问题的 Nesterov 加速算法．

### 算法 8.7 (第二类 Nesterov 加速算法) @400

1. 输入：令 $x^0=y^0$，初始化 $k\leftarrow 1$．
2. **while** 未达到收敛准则 **do**
3. $\quad$ 计算 $z^k=(1-\gamma_k)x^{k-1}+\gamma_ky^{k-1}$．
4. $\quad$ 计算 $y^k=\operatorname{prox}_{(t_k/\gamma_k)h}\left(y^{k-1}-\dfrac{t_k}{\gamma_k}\nabla f(z^k)\right)$．
5. $\quad$ 计算 $x^k=(1-\gamma_k)x^{k-1}+\gamma_ky^k$．
6. $\quad k\leftarrow k+1$．
7. **end while**
8. 输出：$x^k$．

第二类 Nesterov 加速算法的一步迭代可参考图 8.3．和经典 FISTA 算法的一个重要区别在于，第二类 Nesterov 加速算法中的三个序列 $\{x^k\}$，$\{y^k\}$ 和 $\{z^k\}$ 都可以保证在定义域内．而 FISTA 算法中的序列 $\{y^k\}$ 不一定在定义域内．在第二类 Nesterov 加速算法中，同样可以取 $\gamma_k=\dfrac{2}{k+1}$，$t_k=\dfrac{1}{L}$ 来获得 $\mathcal{O}\left(\dfrac{1}{k^2}\right)$ 的收敛速度．

### 算法 8.8 (第三类 Nesterov 加速算法) @401

1. 输入：令 $x^0\in\operatorname{dom}h$，$y^0=\arg\min\limits_{x\in\operatorname{dom}h}\|x\|^2$．初始化 $k\leftarrow 1$．
2. **while** 未达到收敛准则 **do**
3. $\quad$ 计算 $z^k=(1-\gamma_k)x^{k-1}+\gamma_ky^{k-1}$．
4. $\quad$ 计算 $y^k=\operatorname{prox}_{\left(t_k\sum_{i=1}^{k}1/\gamma_i\right)h}\left(-t_k\sum_{i=1}^{k}\frac{1}{\gamma_i}\nabla f(z^i)\right)$．
5. $\quad$ 计算 $x^k=(1-\gamma_k)x^{k-1}+\gamma_ky^k$．
6. $\quad k\leftarrow k+1$．
7. **end while**
8. 输出：$x^k$．

第三类算法与第二类 Nesterov 加速算法 8.7 的区别仅仅在于 $y^k$ 的更新，第三类 Nesterov 加速算法计算 $y^k$ 时需要利用全部已有的 $\{\nabla f(z^i)\}$，$i=1,2,\cdots,k$．同样地，该算法取 $\gamma_k=\dfrac{2}{k+1}$，$t_k=\dfrac{1}{L}$ 时，也有 $\mathcal{O}\left(\dfrac{1}{k^2}\right)$ 的收敛速度．

除了针对凸问题的加速算法，还有针对非凸复合优化问题的加速算法．仍然考虑问题 (8.2.1) 的形式，这里并不要求 $f$ 是凸的，但是要求其是可微的且梯度是利普希茨连续的，$h$ 与之前的要求相同．在算法 8.9 中，$\lambda_k$ 和 $t_k$ 分别为更新 $y^k$ 和 $x^k$ 的步长参数．

### 算法 8.9 (复合优化问题的加速算法框架) @402

1. 输入：令 $x^0=y^0\in\mathbb{R}^n$，取 $\{\gamma_k\}$ 使得 $\gamma_1=1$ 且当 $k\geqslant 2$ 时，$\gamma_k\in(0,1)$．初始化 $k\leftarrow 1$．
2. **while** 未达到收敛准则 **do**
3. $\quad z^k=\gamma_ky^{k-1}+(1-\gamma_k)x^{k-1}$，
4. $\quad y^k=\operatorname{prox}_{\lambda_kh}\left(y^{k-1}-\lambda_k\nabla f(z^k)\right)$，
5. $\quad x^k=\operatorname{prox}_{t_kh}\left(z^k-t_k\nabla f(z^k)\right)$．
6. $\quad k\leftarrow k+1$．
7. **end while**
8. 输出：$x^k$．

从形式上看，算法 8.9 和之前接触的任何一种算法都不相同，但可以证明当 $\lambda_k$ 和 $t_k$ 取特定值时，它等价于之前介绍过的第二类 Nesterov 加速算法（见本章习题）．

在非凸函数情形下，一阶算法一般只能保证收敛到一个稳定点，并不能保证收敛到最优解，因此无法用函数值与最优值的差来衡量优化算法解的精度．类似于非凸光滑函数利用梯度作为停止准则，对于非凸复合函数 (8.2.1)，我们利用梯度映射（定义 8.2）来判断算法是否收敛．注意到 $G_t(x)=0$ 是优化问题 (8.2.1) 的一阶必要条件，因此利用 $\|G_{t_k}(x^k)\|$ 来刻画算法 8.9 的收敛速度．可以证明，当 $f$ 为凸函数时，算法 8.9 的收敛速度与 FISTA 算法相同，两者都为 $\mathcal{O}\left(\dfrac{1}{k^2}\right)$；当 $f$ 为非凸函数时，算法 8.9 也收敛，且收敛速度为 $\mathcal{O}\left(\dfrac{1}{k}\right)$，详见 [114]．

## 8.2.3 应用举例 @402

之前用近似点梯度算法求解的模型，都可以用 Nesterov 加速算法来求解．为了简化篇幅，此处不再重复叙述对应的优化问题，而是直接给出相应的加速算法迭代格式．

### 例 (LASSO 问题的加速算法) @403

求解 LASSO 问题的 FISTA 算法可以由下面的迭代格式给出：

$$y^k=x^{k-1}+\frac{k-2}{k+1}\left(x^{k-1}-x^{k-2}\right),$$
$$w^k=y^k-t_kA^{\mathrm{T}}\left(Ay^k-b\right),$$
$$x^k=\operatorname{sign}(w^k)\max\{|w^k|-t_k\mu,0\}.$$

与近似点梯度算法相同，由于最后一步将 $w^k$ 中绝对值小于 $t_k\mu$ 的分量置零，该算法能够保证迭代过程中解具有稀疏结构．第二类 Nesterov 加速算法为

$$z^k=(1-\gamma_k)x^{k-1}+\gamma_ky^{k-1},$$
$$w^k=y^{k-1}-\frac{t_k}{\gamma_k}A^{\mathrm{T}}\left(Az^k-b\right),$$
$$y^k=\operatorname{sign}(w^k)\max\left\{|w^k|-\frac{t_k}{\gamma_k}\mu,0\right\},$$
$$x^k=(1-\gamma_k)x^{k-1}+\gamma_ky^k,$$

第三类 Nesterov 加速算法为

$$z^k=(1-\gamma_k)x^{k-1}+\gamma_ky^{k-1},$$
$$w^k=-t_k\sum_{i=1}^{k}\frac{1}{\gamma_i}A^{\mathrm{T}}\left(Az^i-b\right),$$
$$y^k=\operatorname{sign}(w^k)\max\left\{|w^k|-t_k\sum_{i=1}^{k}\frac{1}{\gamma_i}\mu,0\right\},$$
$$x^k=(1-\gamma_k)x^{k-1}+\gamma_ky^k.$$

就固定步长而言，FISTA 算法相较于第二类 Nesterov 加速算法收敛得略快一些，也可注意到 FISTA 算法是非单调算法．同时，BB 步长和线搜索技巧可以加速算法的收敛速度．此外，带线搜索的近似点梯度法可以比带线搜索的 FISTA 算法更快收敛．

### 例 (小波模型的加速算法) @404

针对合成小波模型求解的 FISTA 算法和第二类 Nesterov 加速算法可以由下面的迭代格式给出：

$$y^k=d^{k-1}+\frac{k-2}{k+1}\left(d^{k-1}-d^{k-2}\right),$$
$$w^k=y^k-t_kWA^{\mathrm{T}}\left(AW^{\mathrm{T}}y^k-b\right),$$
$$d^k=\operatorname{sign}(w^k)\max\{|w^k|-t_k\lambda,0\},$$

和

$$z^k=(1-\gamma_k)d^{k-1}+\gamma_ky^{k-1},$$
$$w^k=y^{k-1}-\frac{t_k}{\gamma_k}WA^{\mathrm{T}}\left(AW^{\mathrm{T}}z^k-b\right),$$
$$y^k=\operatorname{sign}(w^k)\max\left\{|w^k|-\frac{t_k}{\gamma_k}\lambda,0\right\},$$
$$d^k=(1-\gamma_k)d^{k-1}+\gamma_ky^k.$$

### 例 (平衡小波模型的加速算法) @405

平衡小波模型求解的 FISTA 算法可以写成

$$y^k=\alpha^{k-1}+\frac{k-2}{k+1}\left(\alpha^{k-1}-\alpha^{k-2}\right),$$
$$w^k=y^k-t_k\left(\kappa(I-WW^{\mathrm{T}})y^k+WA^{\mathrm{T}}\left(AW^{\mathrm{T}}y^k-b\right)\right),$$
$$\alpha^k=\operatorname{sign}(w^k)\max\{|w^k|-t_k\lambda,0\},$$

而相应的第二类 Nesterov 加速算法的格式为

$$z^k=(1-\gamma_k)\alpha^{k-1}+\gamma_ky^{k-1},$$
$$w^k=y^{k-1}-\frac{t_k}{\gamma_k}\left(\kappa(I-WW^{\mathrm{T}})z^k+WA^{\mathrm{T}}\left(AW^{\mathrm{T}}z^k-b\right)\right),$$
$$y^k=\operatorname{sign}(w^k)\max\left\{|w^k|-\frac{t_k}{\gamma_k}\lambda,0\right\},$$
$$\alpha^k=(1-\gamma_k)\alpha^{k-1}+\gamma_ky^k.$$

## 8.2.4 收敛性分析 @405

本小节给出 Nesterov 加速算法收敛速度的理论分析，只针对凸优化问题分析 FISTA 算法和第二类 Nesterov 加速算法的收敛速度，而对于第三类 Nesterov 加速算法和非凸问题的加速算法，有兴趣的读者可以自行阅读相关文献．

### 定理 8.5 (固定步长 FISTA 算法收敛速度) @405

在假设 8.1 的条件下，当用算法 8.3 求解凸复合优化问题 (8.2.1) 时，若取固定步长 $t_k=\dfrac{1}{L}$，则

$$\psi(x^k)-\psi(x^*)\leqslant\frac{2L}{(k+1)^2}\|x^0-x^*\|^2.\tag{8.2.7}$$

在定理 8.5 的证明中关键的一步在于建立递推关系，而建立这个递归关系并不需要 $t=\dfrac{1}{L}$，$\gamma_k=\dfrac{2}{k+1}$ 这一具体条件，我们只需要保证条件 (8.2.2) 和条件 (8.2.3) 成立即可．条件 (8.2.2) 主要依赖于 $f(x)$ 的梯度利普希茨连续性；而 (8.2.3) 的成立依赖于 $\gamma_k$ 和 $t_k$ 的选取．最后，条件 (8.2.4) 的成立保证了算法 8.3 的收敛速度达到 $\mathcal{O}\left(\dfrac{1}{k^2}\right)$．也就是说，如果抽取条件 (8.2.2)-(8.2.4) 作为算法收敛的一般条件，则可以证明一大类 FISTA 算法的变形都具有 $\mathcal{O}\left(\dfrac{1}{k^2}\right)$ 的收敛速度．

### 推论 8.2 (一般 FISTA 算法的收敛速度) @407

在假设 8.1 的条件下，当用算法 8.3 求解凸复合优化问题 (8.2.1) 时，若迭代点 $x^k,y^k$，步长 $t_k$ 以及组合系数 $\gamma_k$ 满足条件 (8.2.2)-(8.2.4)，则

$$\psi(x^k)-\psi(x^*)\leqslant\frac{C}{k^2},\tag{8.2.17}$$

其中 $C$ 仅与函数 $f$，初始点 $x^0$ 的选取有关．特别地，采用线搜索算法 8.4 和算法 8.5 的 FISTA 算法具有 $\mathcal{O}\left(\dfrac{1}{k^2}\right)$ 的收敛速度．

在这里我们指出，虽然已经抽象出了 $t_k,\gamma_k$ 满足的条件，但无法再找到其他的 $t_k,\gamma_k$ 来进一步改善 FISTA 算法的收敛速度，即 $\mathcal{O}\left(\dfrac{1}{k^2}\right)$ 是 FISTA 算法所能达到的最高的收敛速度．

第二类 Nesterov 加速算法的收敛性分析可以使用相同的技术得到．

### 定理 8.6 (第二类 Nesterov 加速算法收敛速度) @407

取 $\gamma_k=\dfrac{2}{k+1}$ 和 $t_k=\dfrac{1}{L}$，利用算法 8.7 求解问题 (8.2.1) 有如下收敛性结果：

$$\psi(x^k)-\psi(x^*)\leqslant\frac{2L}{(k+1)^2}\|x^0-x^*\|^2.\tag{8.2.18}$$
