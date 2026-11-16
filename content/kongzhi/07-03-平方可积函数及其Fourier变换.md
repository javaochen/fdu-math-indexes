---
chapter: 7
chapter_title: 控制系统最优调节器的设计
section: "7.3"
section_title: 平方可积函数及其Fourier变换
pages: "200–204"
---

在控制规律的设计中，需要用到平方可积函数及其 Fourier 变换的知识。详细讨论需要用到 Lebesgue 积分的知识，所讨论的基本函数类称为可测函数，它们可以看作简单函数（分段常数函数）的极限，包括分段连续函数、单调函数等常用函数。对于大多数常用的函数，Lebesgue 积分可以看作是 Riemann 积分。

## 一、平方可积函数 @200

### 定义 3.1 (平方可积函数) @200

如果可测函数 $f(\cdot)$ 的平方在区间 $(a,b)$ 上是可积的，则称它是**平方可积函数**。这时记 $f(\cdot)\in L^2(a,b)$，并令
$$\|f\|=\left(\int_a^b|f(t)|^2\,\mathrm{d}t\right)^{\frac{1}{2}}<+\infty,$$
$\|f\|$ 称为 $f(\cdot)$ 的 $L^2$ 范数。

### 定义 (p 次可积函数) @201

一般地，对于 $p\geqslant1$，如果区间 $(a,b)$ 上的可测函数 $f(\cdot)$ 满足
$$\|f\|_p=\left(\int_a^b|f(t)|^p\,\mathrm{d}t\right)^{\frac{1}{p}}<+\infty,$$
则称其为 **$p$ 次可积函数**，$\|f\|_p$ 称为 $f(\cdot)$ 的 $L^p$ 范数。$p=2$ 是最常用的情况，所以通常将 $L^2$ 范数简写为 $\|f\|$。所有 $(a,b)$ 上的 $p$ 次可积函数记为 $L^p(a,b)$，我们允许 $a=-\infty$ 或者 $b=+\infty$。当 $p=1$ 时，一次可积函数简称为**可积函数**。

### 注 (连续函数与逐段连续函数的平方可积性) @201

容易证明：有限闭区间 $[a,b]$ 上的连续函数、逐段连续函数都是平方可积函数。

### 定理 3.2 (平方可积函数的线性运算与不等式) @201

如果 $f,g\in L^2(a,b)$，那么

(i) $f+g\in L^2(a,b)$；

(ii) $f\cdot g\in L^1(a,b)$，并且成立 Schwarz 不等式
$$\left|\int_a^bf(t)g(t)\,\mathrm{d}t\right|\leqslant\|f\|\cdot\|g\|;$$

(iii) 成立三角不等式
$$\|f+g\|\leqslant\|f\|+\|g\|.$$

### 定义 (向量值平方可积函数) @202

如果向量值函数 $\boldsymbol{f}(\cdot)=(f_1(\cdot),f_2(\cdot),\cdots,f_n(\cdot))^{\mathrm{T}}$ 的每个分量都是区间 $(a,b)$ 上的平方可积函数，则称它在区间 $(a,b)$ 上**平方可积**，区间 $(a,b)$ 上平方可积的向量值函数的全体记为 $L^2(a,b;\mathbb{R}^n)$，$\boldsymbol{f}(\cdot)$ 的范数记为
$$\|\boldsymbol{f}\|=\sqrt{\|f_1\|^2+\|f_2\|^2+\cdots+\|f_n\|^2}.$$
这时成立 Schwarz 不等式和三角不等式
$$\left|\int_0^{+\infty}\langle\boldsymbol{f}(t),\boldsymbol{g}(t)\rangle\,\mathrm{d}t\right|\leqslant\|\boldsymbol{f}\|\cdot\|\boldsymbol{g}\|,\qquad \|\boldsymbol{f}+\boldsymbol{g}\|\leqslant\|\boldsymbol{f}\|+\|\boldsymbol{g}\|.$$

### 命题 3.3 (稳定系统的 L² 输入与状态) @202

如果矩阵 $\boldsymbol{A}$ 是稳定的，考虑线性系统
$$\frac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}=\boldsymbol{A}\boldsymbol{x}(t)+\boldsymbol{B}\boldsymbol{u}(t),\qquad \boldsymbol{x}(0)=\boldsymbol{x}_0,\tag{3.2}$$
那么当 $\boldsymbol{u}(\cdot)\in L^2(0,+\infty;\mathbb{R}^m)$ 时，$\boldsymbol{x}(\cdot)\in L^2(0,+\infty;\mathbb{R}^n)$。

### 注 (L¹ 输入的情形) @203

同理可证：当 $\boldsymbol{u}(\cdot)\in L^1(0,+\infty;\mathbb{R}^m)$ 时，$\boldsymbol{x}(\cdot)\in L^1(0,+\infty;\mathbb{R}^n)$。

## 二、Fourier 变换 @203

### 定义 3.4 (Fourier 变换) @203

当 $\boldsymbol{x}(\cdot)\in L^1(\mathbb{R};\mathbb{R}^n)$ 时，对于参数 $\omega\in\mathbb{R}$，$\mathrm{i}=\sqrt{-1}$，积分
$$\widetilde{\boldsymbol{x}}(\omega)\equiv\frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}}\boldsymbol{x}(t)\mathrm{e}^{-\mathrm{i}\omega t}\,\mathrm{d}t=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{+\infty}\boldsymbol{x}(t)\mathrm{e}^{-\mathrm{i}\omega t}\,\mathrm{d}t$$
是存在的，称 $\widetilde{\boldsymbol{x}}(\cdot)$ 为 $\boldsymbol{x}(\cdot)$ 的 **Fourier 变换**。

### 例 3.5 (单侧指数函数的 Fourier 变换) @203

假定 $a>0$，
$$f(t)=\begin{cases}\mathrm{e}^{-at}, & t\geqslant0,\\ 0, & t<0,\end{cases}$$
则
$$\|f\|_1=\int_0^{+\infty}f(t)\,\mathrm{d}t=\frac{1}{a},\qquad \|f\|=\sqrt{\int_0^{+\infty}f^2(t)\,\mathrm{d}t}=\frac{1}{\sqrt{2a}}.$$
而 Fourier 变换为
$$\tilde{f}(\omega)=\frac{1}{\sqrt{2\pi}}\int_0^{+\infty}f(t)\mathrm{e}^{-\mathrm{i}\omega t}\,\mathrm{d}t=\frac{1}{\sqrt{2\pi}(a+\mathrm{i}\omega)},$$
其范数
$$\|\tilde{f}\|=\sqrt{\frac{1}{2\pi}\int_{-\infty}^{+\infty}\frac{1}{a^2+\omega^2}\,\mathrm{d}\omega}=\frac{1}{\sqrt{2a}}.$$

### 命题 (Fourier 变换与导数的交换) @204

假设 $\boldsymbol{x}(\cdot)$ 为连续可微函数，记 $\dot{\boldsymbol{x}}(t)=\dfrac{\mathrm{d}\boldsymbol{x}(t)}{\mathrm{d}t}$。如果 $\boldsymbol{x}(\cdot),\dot{\boldsymbol{x}}(\cdot)\in L^1(\mathbb{R};\mathbb{R}^n)$，那么
$$\lim_{t\to\pm\infty}\boldsymbol{x}(t)=0,$$
且成立着等式
$$\widetilde{\dot{\boldsymbol{x}}}(\omega)\equiv\mathrm{i}\omega\widetilde{\boldsymbol{x}}(\omega).\tag{3.3}$$

### 命题 (L¹∩L² 上的 Fourier 变换) @204

如果 $\boldsymbol{x}(\cdot)\in L^1(\mathbb{R};\mathbb{R}^n)\cap L^2(\mathbb{R};\mathbb{R}^n)$，则存在平方可积函数 $\widetilde{\boldsymbol{x}}(\cdot)$，使得
$$\widetilde{\boldsymbol{x}}(\omega)=\frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}}\boldsymbol{x}(t)\mathrm{e}^{-\mathrm{i}\omega t}\,\mathrm{d}t.$$

平方可积函数的 Fourier 变换有下述主要性质（详细讨论见 W. Rudin 著《实分析与复分析》第九章）：

### 定理 (Parseval 等式) @204

(i) 如果 $\boldsymbol{x}(\cdot)\in L^2(\mathbb{R};\mathbb{R}^n)$，$\boldsymbol{y}(\cdot)\in L^2(\mathbb{R};\mathbb{R}^m)$，$\boldsymbol{S}\equiv(s_{jk})\in\mathbb{R}^{m\times n}$，那么 $\boldsymbol{x}(\cdot),\boldsymbol{y}(\cdot)$ 的 Fourier 变换 $\widetilde{\boldsymbol{x}}(\cdot),\widetilde{\boldsymbol{y}}(\cdot)$ 在无穷区间 $\mathbb{R}$ 上是平方可积的，并且成立着 Parseval 等式
$$\int_{\mathbb{R}}\langle\boldsymbol{S}\widetilde{\boldsymbol{x}}(\omega),\widetilde{\boldsymbol{y}}(\omega)\rangle\,\mathrm{d}\omega=\int_{\mathbb{R}}\sum_{j=1}^{m}\sum_{k=1}^{n}s_{jk}\widetilde{x}_k(\omega)\overline{\widetilde{y}_j(\omega)}\,\mathrm{d}\omega=\int_{\mathbb{R}}\langle\boldsymbol{S}\boldsymbol{x}(t),\boldsymbol{y}(t)\rangle\,\mathrm{d}t;\tag{3.4}$$

(ii) 特别成立着
$$\|\widetilde{\boldsymbol{x}}(\cdot)\|\equiv\sqrt{\int_{-\infty}^{+\infty}\|\widetilde{\boldsymbol{x}}(\omega)\|^2\,\mathrm{d}\omega}=\sqrt{\int_{-\infty}^{+\infty}\|\boldsymbol{x}(t)\|^2\,\mathrm{d}t}\equiv\|\boldsymbol{x}(\cdot)\|.$$

### 命题 (半直线上的 Fourier 变换求导公式) @204

如果 $\boldsymbol{x}(\cdot),\dot{\boldsymbol{x}}(\cdot)\in L^2(0,+\infty;\mathbb{R}^n)$，那么成立着
$$\widetilde{\dot{\boldsymbol{x}}}(\omega)=-\frac{1}{\sqrt{2\pi}}\boldsymbol{x}(0)+\mathrm{i}\omega\widetilde{\boldsymbol{x}}(\omega).\tag{3.5}$$

### 命题 (稳定系统的频域方程) @204

假设 $\boldsymbol{u}(\cdot)\in L^2(0,+\infty;\mathbb{R}^m)$，矩阵 $\boldsymbol{A}$ 是稳定的，那么系统 (3.2) 的解 $\boldsymbol{x}(\cdot)\in L^2(0,+\infty;\mathbb{R}^n)$，从而 $\dot{\boldsymbol{x}}(\cdot)\in L^2(0,+\infty;\mathbb{R}^n)$。这时对系统 (3.2) 应用 Fourier 变换，并注意到 (3.5)，得到
$$\mathrm{i}\omega\widetilde{\boldsymbol{x}}(\omega)-\frac{1}{\sqrt{2\pi}}\boldsymbol{x}(0)=\boldsymbol{A}\widetilde{\boldsymbol{x}}(\omega)+\boldsymbol{B}\widetilde{\boldsymbol{u}}(\omega).$$
