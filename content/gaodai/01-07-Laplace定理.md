---
chapter: 1
chapter_title: 行列式
section: "1.7"
section_title: Laplace 定理
pages: "44–56"
---

### 定义 1.7.1 (k 阶子式) @44

设 $|A|$ 是一个 $n$ 阶行列式，$k<n$。又 $i_1,i_2,\cdots,i_k$ 及 $j_1,j_2,\cdots,j_k$ 是两组自然数且适合条件：
$$1\leqslant i_1<i_2<\cdots<i_k\leqslant n;\qquad 1\leqslant j_1<j_2<\cdots<j_k\leqslant n.$$
取行列式 $|A|$ 中第 $i_1$ 行，第 $i_2$ 行，$\cdots\cdots$，第 $i_k$ 行以及第 $j_1$ 列，第 $j_2$ 列，$\cdots\cdots$，第 $j_k$ 列交点上的元素，按原来 $|A|$ 中的相对位置构成一个 $k$ 阶行列式，我们称之为 $|A|$ 的一个 **$k$ 阶子式**，记为
$$A\begin{pmatrix}i_1&i_2&\cdots&i_k\\j_1&j_2&\cdots&j_k\end{pmatrix}. \tag{1.7.1}$$

### 定义 (余子式) @45

在行列式 $|A|$ 中去掉第 $i_1$ 行，第 $i_2$ 行，$\cdots\cdots$，第 $i_k$ 行以及第 $j_1$ 列，第 $j_2$ 列，$\cdots\cdots$，第 $j_k$ 列以后剩下的元素按原来的相对位置构成一个 $n-k$ 阶行列式，这个行列式称为子式 (1.7.1) 的**余子式**，记为
$$M\begin{pmatrix}i_1&i_2&\cdots&i_k\\j_1&j_2&\cdots&j_k\end{pmatrix}. \tag{1.7.2}$$

### 定义 (代数余子式) @45

若令 $p=i_1+i_2+\cdots+i_k$，$q=j_1+j_2+\cdots+j_k$，记
$$\widehat{A}\begin{pmatrix}i_1&i_2&\cdots&i_k\\j_1&j_2&\cdots&j_k\end{pmatrix}=(-1)^{p+q}M\begin{pmatrix}i_1&i_2&\cdots&i_k\\j_1&j_2&\cdots&j_k\end{pmatrix}, \tag{1.7.3}$$
称之为子式 (1.7.1) 的**代数余子式**。

### 定理 1.7.1 (Laplace 定理) @45

设 $|A|$ 是 $n$ 阶行列式，在 $|A|$ 中任取 $k$ 行（列），那么含于这 $k$ 行（列）的全部 $k$ 阶子式与它们所对应的代数余子式的乘积之和等于 $|A|$。即若取定 $k$ 个行：$1\leqslant i_1<i_2<\cdots<i_k\leqslant n$，则
$$|A|=\sum_{1\leqslant j_1<j_2<\cdots<j_k\leqslant n}A\begin{pmatrix}i_1&i_2&\cdots&i_k\\j_1&j_2&\cdots&j_k\end{pmatrix}\widehat{A}\begin{pmatrix}i_1&i_2&\cdots&i_k\\j_1&j_2&\cdots&j_k\end{pmatrix}. \tag{1.7.4}$$
同样若取定 $k$ 个列：$1\leqslant j_1<j_2<\cdots<j_k\leqslant n$，则
$$|A|=\sum_{1\leqslant i_1<i_2<\cdots<i_k\leqslant n}A\begin{pmatrix}i_1&i_2&\cdots&i_k\\j_1&j_2&\cdots&j_k\end{pmatrix}\widehat{A}\begin{pmatrix}i_1&i_2&\cdots&i_k\\j_1&j_2&\cdots&j_k\end{pmatrix}. \tag{1.7.5}$$

### 例 (四阶行列式的 Laplace 展开) @45

设有下列四阶行列式：
$$|A|=\begin{vmatrix}1&2&-1&3\\7&0&5&2\\-2&4&6&1\\2&3&1&4\end{vmatrix}.$$
若固定其第二、第三行，则共有 $C_4^2(=6)$ 个二阶子式：
$$A\begin{pmatrix}2&3\\1&2\end{pmatrix}=\begin{vmatrix}7&0\\-2&4\end{vmatrix}=28,\quad A\begin{pmatrix}2&3\\1&3\end{pmatrix}=\begin{vmatrix}7&5\\-2&6\end{vmatrix}=52,\quad A\begin{pmatrix}2&3\\1&4\end{pmatrix}=\begin{vmatrix}7&2\\-2&1\end{vmatrix}=11,$$
$$A\begin{pmatrix}2&3\\2&3\end{pmatrix}=\begin{vmatrix}0&5\\4&6\end{vmatrix}=-20,\quad A\begin{pmatrix}2&3\\2&4\end{pmatrix}=\begin{vmatrix}0&2\\4&1\end{vmatrix}=-8,\quad A\begin{pmatrix}2&3\\3&4\end{pmatrix}=\begin{vmatrix}5&2\\6&1\end{vmatrix}=-7.$$
这 6 个子式相应的代数余子式为
$$\widehat{A}\begin{pmatrix}2&3\\1&2\end{pmatrix}=-7,\quad \widehat{A}\begin{pmatrix}2&3\\1&3\end{pmatrix}=1,\quad \widehat{A}\begin{pmatrix}2&3\\1&4\end{pmatrix}=5,\quad \widehat{A}\begin{pmatrix}2&3\\2&3\end{pmatrix}=-2,\quad \widehat{A}\begin{pmatrix}2&3\\2&4\end{pmatrix}=-3,\quad \widehat{A}\begin{pmatrix}2&3\\3&4\end{pmatrix}=-1.$$
于是 Laplace 定理说
$$|A|=28\times(-7)+52\times1+11\times5+(-20)\times(-2)+(-8)\times(-3)+(-7)\times(-1)=-18.$$
通过行列式计算，也得到原行列式的值为 $-18$。

### 引理 1.7.1 (子式展开项的归属) @47

$n$ 阶行列式 $|A|$ 的任一 $k$ 阶子式与其代数余子式之积的展开式中的每一项都属于 $|A|$ 的展开式。

### 例 1.7.1 (五阶行列式的展开) @49

计算行列式：
$$|A|=\begin{vmatrix}-1&1&1&2&-1\\0&-1&0&1&2\\2&1&1&3&-1\\1&2&2&1&0\\0&3&0&1&3\end{vmatrix}.$$
解：因为第一、第三列含有较多的零，因此在这两列上作 Laplace 展开（共三项），得 $|A|=-132$。

### 例 1.7.2 (分块三角行列式) @50

设 $n$ 阶行列式前 $k$ 行和后 $n-k$ 列的交点上的元素都是零，即
$$|A|=\begin{vmatrix}a_{11}&\cdots&a_{1k}&0&\cdots&0\\\vdots&&\vdots&\vdots&&\vdots\\a_{k1}&\cdots&a_{kk}&0&\cdots&0\\a_{k+1,1}&\cdots&a_{k+1,k}&a_{k+1,k+1}&\cdots&a_{k+1,n}\\\vdots&&\vdots&\vdots&&\vdots\\a_{n1}&\cdots&a_{nk}&a_{n,k+1}&\cdots&a_{nn}\end{vmatrix},$$
计算其值。解：由 Laplace 定理（按前 $k$ 行展开）立即得到
$$|A|=\begin{vmatrix}a_{11}&\cdots&a_{1k}\\\vdots&&\vdots\\a_{k1}&\cdots&a_{kk}\end{vmatrix}\begin{vmatrix}a_{k+1,k+1}&\cdots&a_{k+1,n}\\\vdots&&\vdots\\a_{n,k+1}&\cdots&a_{nn}\end{vmatrix}.$$
