---
chapter: 8
chapter_title: Dirichlet 问题
section: "8.2"
section_title: Perron 方法
pages: "230–231"
---

一般有界区域上的 Dirichlet 问题解的存在性可用 Perron 方法。

### 定义 (Perron 族) @230

设 $\Omega\subset\mathbb{C}$ 是有界区域，$\varphi(\zeta)$ 是 $\partial\Omega$ 上有界实值函数。定义
$$\mathcal{P}(\varphi,\Omega)=\left\{v(z):v(z)\text{ 是 }\Omega\text{ 上次调和函数},\ \varlimsup_{z\to\zeta}v(z)\le\varphi(\zeta),\ \forall\,\zeta\in\partial\Omega\right\},$$
称 $\mathcal{P}(\varphi,\Omega)$ 是 $\Omega$ 上关于 $\varphi(\zeta)$ 的 Perron 族。

显然，$\mathcal{P}(\varphi,\Omega)$ 非空。事实上，取 $v(z)\equiv c$，这里 $c\le\inf_{\zeta\in\partial\Omega}\varphi(\zeta)$，则 $v(z)\in\mathcal{P}(\varphi,\Omega)$。

### 定理 8.4 (Perron 函数存在性) @230

设 $\mathcal{P}(\varphi,\Omega)$ 是 $\Omega$ 上 Perron 族，则
$$u(z)=\sup\{v(z):v(z)\in\mathcal{P}(\varphi,\Omega)\}$$
是 $\Omega$ 上的调和函数。称 $u(z)$ 为 $\Omega$ 上关于 $\varphi(\zeta)$ 的 Perron 函数。
