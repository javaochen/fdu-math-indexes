---
chapter: 9
chapter_title: 中心极限定理
section: "9.1"
section_title: DeMoivre–Laplace 的估计（*）
pages: "169–172"
---

### 定理 (De Moivre–Laplace 中心极限定理) @169

设 $\{\xi_n\}$ 是成功概率为 $p$ 的 Bernoulli 随机序列，则对 $x\in\mathbb{R}$ 有
$$\lim_{n\to\infty}\mathbb{P}\left(\frac{\sum_{i=1}^{n}\xi_i-np}{\sqrt{np(1-p)}}\le x\right)=\Phi(x),$$
其中 $\Phi$ 是标准正态分布函数。

### 注 (Stirling 公式与常数 $c$) @170

估计组合数时要估计 $n!$，有 Stirling 公式
$$n!\sim\sqrt{2\pi n}\,n^{n+\frac12}\mathrm{e}^{-n}.$$
由
$$\int_{k-1}^{k}\log x\,\mathrm{d}x<\log k<\int_{k}^{k+1}\log x\,\mathrm{d}x,$$
对 $1\le k\le n$ 求和得
$$n\log n-n<\log n!<(n+1)\log(n+1)-n .$$
令
$$d_n:=\log n!-\left(n+\frac12\right)\log n+n,$$
则
$$d_{n+1}-d_n=\left(n+\frac12\right)\log\frac{n+1}{n}-1<0,$$
故 $d_n$ 递减有极限，记此极限为 $d$，又 $c:=\mathrm{e}^{d}$，于是
$$n!\sim c\cdot n^{n+\frac12}\mathrm{e}^{-n}.$$
常数 $c$ 的值由本节末尾的估计定出。

### 注 (二项分布的尾估计与局部估计) @171

记 $b(k;n,p)=\binom{n}{k}p^{k}q^{n-k}$，$q=1-p$。由
$$\frac{b(k;n,p)}{b(k-1;n,p)}=\frac{(n-k+1)p}{kq}=1+\frac{(n+1)p-k}{kq}$$
知 $b(k;n,p)$ 在 $k<(n+1)p$ 时递增、在 $k>(n+1)p$ 时递减；取整数 $m$ 满足 $(n+1)p-1<m\le(n+1)p$，则 $b(k;n,p)$ 在 $k=m$ 时最大。对任何整数 $r>0$，
$$\mathbb{P}(S_n\ge r)=\sum_{k\ge r}b(k;n,p)\le\frac{rq}{r-np}\le\frac{rq}{(r-np)^{2}},$$
最后一步用到 $1\ge\sum_{k=m}^{r}b(k;n,p)\ge(r-np)b(r;n,p)$。

记 $\delta:=m-np$，
$$a_k:=b(m+k;n,p)=\mathbb{P}(S_n=m+k)=\binom{n}{m+k}p^{m+k}q^{n-m-k}.$$
当 $k\ge0$ 且远小于 $n$ 时，利用对数函数的 Taylor 展开（$|x|<\frac12$ 时 $|x-\log(1+x)|\le2x^{2}$）得局部估计
$$a_k=a_0\,\mathrm{e}^{-\frac{k^{2}}{2npq}+\rho_k},\qquad |\rho_k|\le\frac{2k^{3}}{(npq)^{2}}+\frac{2k}{npq}.$$

### 定理 (De Moivre–Laplace 的估计) @172

设 $\phi$ 是标准正态密度函数，$h:=\frac{1}{\sqrt{npq}}$。应用 Stirling 公式得 $a_0\sim\frac{1}{c\sqrt{npq}}$，且
$$\frac{a_k}{\sqrt{2\pi}\,c^{-1}h\phi(kh)}=\mathrm{e}^{\rho_k}.$$
于是对 $y>x\ge0$，
$$\mathbb{P}\left(x\le\frac{S_n-np}{\sqrt{npq}}\le y\right)=\sqrt{2\pi}\,c^{-1}\left(\sum_{k}h\phi(kh)+\sum_{k}h\phi(kh)\left(\mathrm{e}^{\rho_k}-1\right)\right),$$
其中 $k\le y\sqrt{npq}$ 时 $|\mathrm{e}^{\rho_k}-1|\le|\rho_k|\le\frac{2(y^{3}+y)}{\sqrt{npq}}$ 与 $k$ 无关。令 $n$ 趋于无穷，第二个和的极限为 $0$，第一个和趋于 $\phi$ 从 $x$ 到 $y$ 的积分，故
$$\lim_{n\to\infty}\mathbb{P}\left(x\le\frac{S_n-np}{\sqrt{npq}}\le y\right)=\sqrt{2\pi}\,c^{-1}\int_{x}^{y}\phi(z)\,\mathrm{d}z. \tag{9.1.1}$$
右边与 $p$ 无关。再由左边不超过 $1$ 得 $\sqrt{2\pi}\,c^{-1}\le1$，并用上面的尾估计得
$$\lim_{n\to\infty}\mathbb{P}\left(\frac{S_n-np}{\sqrt{npq}}\ge y\right)\le\lim_{n\to\infty}\frac{(np+y\sqrt{npq})q}{(y\sqrt{npq})^{2}}=y^{-2}.$$
取 $p=\frac12$、$n$ 换成 $2n$ 的特殊情形，由对称性有
$$\lim_{n\to\infty}\mathbb{P}(S_{2n}\le n)=\lim_{n\to\infty}\mathbb{P}(S_{2n}\ge n)=\frac12,$$
由此定出 $c=\sqrt{2\pi}$。
