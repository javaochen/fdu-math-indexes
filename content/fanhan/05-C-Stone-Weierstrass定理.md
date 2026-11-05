---
chapter: 5
chapter_title: 附录
section: "C"
section_title: Stone-Weierstrass 定理
pages: "209–210"
---

设 $K$ 是紧 Hausdorff 空间，那么连续函数全体 $C(K)$ 按范数

$$\|f\|=\max_{x\in K}|f(x)|$$

构成一个 Banach 空间。

对 $C(K)$ 中子集 $A$，如果 $A$ 对数乘运算和函数加法及乘法都是封闭的，则称 $A$ 是一个**子代数**；此时若 $A$ 还含有常数函数 $f(x)\equiv 1$，则称 $A$ 是**单位子代数**。若对任意 $f\in A$，都有 $\bar f\in A$，则称 $A$ 是**自伴的**。而 $A$ **分离** $K$ 中的点，则意味着：对任意 $x\neq y\in K$，可找到函数 $f\in A$，使得 $f(x)\neq f(y)$。

### 定理 C.1 (Stone-Weierstrass) @209

设 $K$ 是紧 Hausdorff 空间。如果 $A$ 是 $C(K)$ 中含有单位元的、闭的、自伴子代数，并且它分离 $K$，那么 $A=C(K)$。
