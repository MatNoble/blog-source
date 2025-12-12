+++
title = "秩-零化度定理(Rank-Nullity Theorem)"
date = "2020-01-11T00:00:00+08:00"
categories = ["MATH","线代拾遗"]
tags = ["线代基本定理"]
keywords = ["matrix","linear algebra","Rank-Nullity Theorem","MatNoble"]
toc = true
katex = true
series = ["mla"]
description = "在人工智能, 机器学习, 深度学习的浪潮中, ..数学.. 知识的发展与应用起着至关重要的作用." 
+++

在人工智能, 机器学习, 深度学习的浪潮中, ..数学.. 知识的发展与应用起着至关重要的作用.

`线性代数(高等代数)`不同于`微积分(数学分析)`, 线代是不断前进发展的学科, 在实际应用中产生新问题回馈到教学中, 而后教学又可以促进实际应用.

---

## 「秩-零化度定理」

如下图所示, 线性变换 $T$ 从有限维向量空间 $\mathcal{V}$ (定义域)映射到有限维向量空间 $\mathcal{W}$ (陪域)，记为 $T:\mathcal{V}\to\mathcal{W}$

<img src="https://imgkr.cn-bj.ufileos.com/52c7ecf5-f647-4024-95f0-6c90d56199bd.png" title="线性变换 linear transformation" alt="线性变换 linear transformation" width="500">

<br />

其中, 有两个重要的子空间:

- 核空间(kernel space)

$\mathcal{V}$ 中所有可经 $T$ 映射为零元素的元素构成的集合, 称为 $T$ 的核(子)空间, 记为: $\ker (T)$. 核的维数(dimension)称为`零化度`(nullity), 记为: $\dim \ker (T)$, 可度量核的大小.

- 值域(range)

$\mathcal{V}$ 中所有元素经 $T$ 映射构成的集合, 称为 $T$ 的值域, 记为: ${\rm ran} (T)$ 或 $R(T)$. 值域的维数(dimension)称为`秩`(rank), 记为: ${\rm rank}\, T$ 或 $\dim {\rm ran} (T)$.

> **「秩-零化度定理」(Rank-Nullity Theorem)**  
> <br />
> 　定义域 $\mathcal{V}$ 的维数等于核空间 $\ker (T)$ 的维数与值域 ${\rm ran} (T)$ 的维数之和. 即
>
> $$
> \dim \mathcal{V} = \dim \ker (T) + {\rm rank}\\, T
> $$

## 证明

### 矩阵角度

<i style="color:gray">矩阵是具像化的线性变换.</i>

假设线性变换 $T: \mathcal{V} \to \mathcal{W} $ 由 $m\times n$ 阶矩阵表示.
另外, $n = \dim \mathcal{V}, m = \dim \mathcal{W}$, 并且, 零空间(nullspace) $N(A)$ 和列空间(column space) $C(A)$ 分别表示线性变换 $T$ 的核 $\ker (T)$ 与值域 ${\rm ran} (T)$. 如此, 需证明

$$
n = \dim N(A) + {\rm rank} A
$$

<br />

矩阵 $A$ 经初等行变换可化简为下方`分块矩阵`形式

$$
R = \begin{bmatrix} E_r & F \\\\ 0 & 0 \end{bmatrix}
$$

易知, 矩阵 $R$ 的秩为 $r, F$ 是一个 $r\times (n-r)$ 阶矩阵. 因为初等行变换不改变矩阵的秩和零空间, 所以 ${\rm rank} A = {\rm rank} R = r$, 以及 $N(A) = N( R )$.

<br />

观察矩阵 $R$, 得到其 $n \times (n-r)$ 零空间矩阵(nullspace matrix)

$$
P = \begin{bmatrix} -F \\\\ E_{n-r}  \end{bmatrix}
$$

验证一下

$$
RP = \begin{bmatrix} E_r & F \\\\ 0 & 0 \end{bmatrix}\begin{bmatrix} -F \\\\ E_{n-r}  \end{bmatrix} = \begin{bmatrix} -F + F \\\\ 0  \end{bmatrix} = 0
$$

<br />

接下来, 证明 **$C(P) = N( R )$**

显然, ${\rm rank}\, P = n-r$, 即列向量线性无关. 然后, 只需证明: $\ker (R)$ 中所有向量都可以由 $P$ 的列向量线性表出.

假设 $x= [ x_1, x_2]^{\sf T}$, 其中, $x_1$ 是 $r$ 维向量, $x_2$ 是 $n-r$ 维向量. 使得 $Rx = 0$, 则

$$
Rx = \begin{bmatrix} E_r & F \\\\ 0 & 0 \end{bmatrix}\begin{bmatrix} x_1 \\\\ x_2  \end{bmatrix} = \begin{bmatrix} x_1 + Fx_2 \\\\ 0  \end{bmatrix} =0
$$

所以, $x_1 = -Fx_2$, 接着有

$$
x = \begin{bmatrix} x_1 \\\\  x_2 \end{bmatrix} = \begin{bmatrix} -Fx_2 \\\\  x_2 \end{bmatrix} = \begin{bmatrix} -F \\\\  E_{n-r} \end{bmatrix}x_2 = Px_2
$$

所以 $C(P) = N( R )$, 即 $\dim N(A) = \dim N( R ) = {\rm rank}\, P = n-r$, 也就证明了

$$
n = \dim N(A) + {\rm rank} A
$$

### 变换角度

<i style="color:gray">不讲变换思想的线代是没有灵魂的线代</i>

如下图所示, 假设向量空间 $\mathcal{V}$ 的维数为 $n$, 且 $\dim \ker(T) = p, p \leq n$. 设 $\ker(T)$ 的一组基底为 $\\{u_1, \dots, u_p\\}$, 并将其扩充为 $\mathcal{V}$ 的一组基底 $\\{u_1,\dots,u_p,w_1,\dots,w_r\\}$, $n=p+r$, 因此, 我们需要证明:

$$
{\rm rank}\\, T = r
$$

<img src="https://imgkr.cn-bj.ufileos.com/d97c88ee-79f4-4a7f-99c9-61331f51895c.png" title="数系家园" alt="数系家园" width="450">

空间 $\mathcal{V}$ 中`任一`向量 $v$ 都可以表示为:

$$
v = a_1u_1 + \cdots + a_pu_p + b_1w_1 + \cdots + b_rw_r
$$

使用线性变换 $T$ 作用于 $v$, 得到 $T(v)$, 称为像(image). 运用线性变换

$$
\begin{aligned}
T(v) & =T(a_1u_1 + \cdots + a_pu_p + b_1w_1 + \cdots + b_rw_r ) \\\\[3pt]
& = a_1(Tu_1) + \cdots + a_pT(u_p) + b_1T(w_1) + \cdots + b_rT(w_r) \\\\[3pt]
& = b_1T(w_1) + \cdots + b_rT(w_r)
\end{aligned}
$$

因为 $v$ 是任意取的, 所以值域 ${\rm ran}\, T$ 可由 $T(w_1), \dots, T(w_r)$ 扩充得到. 接下来, 我们证明它们是线性无关的, 即 $\{T(w_1), \dots, T(w_r)\}$ 构成 ${\rm ran}\, T$ 的一组基底. 考虑

$$
c_1T(w_1) + \cdots + c_rT(w_r) = 0
$$

上式可写成

$$
T(c_1w_1 + \cdots + c_rw_r) = 0
$$

所以, $c_1w_1 + \cdots + c_rw_r \in \ker(T)$, 可表示为 $\{u_1, \dots, u_p\}$ 的线性组合

$$
c_1w_1 + \cdots + c_rw_r = d_1u_1 + \cdots + d_pu_p
$$

又因为 $\\{u_1,\dots,u_p,w_1,\dots,w_r\\}$ 线性无关, 所以上式的系数全部为零, 证得 $\\{T(w_1), \dots, T(w_r)\\}$ 线性无关, 即 ${\rm rank}\, T = r$.

<br />

---

## 推论

1. 若 $\dim \mathcal{V} > \dim \mathcal{W}$, 则  
$$
\begin{aligned}
   \operatorname{dim} \operatorname{ker}(T)=\operatorname{dim} \mathcal{V}-\operatorname{dim} \operatorname{ran}(T) \\\\[3pt]
   \geq \operatorname{dim} \mathcal{V}-\operatorname{dim} \mathcal{W}>0
   \end{aligned}
   $$
   即存在非零向量 $\mathbf{x}\in\mathcal{V}$ 使得 $T(\mathbf{x})=\mathbf{0}$.

2. 若 $\dim \mathcal{V} < \dim \mathcal{W}$, 则  
   $$\begin{aligned}
   \operatorname{dim} \operatorname{ran}(T)=\operatorname{dim} \mathcal{V}-\operatorname{dim} \operatorname{ker}(T) \\\\[3pt]
   \leq \operatorname{dim} \mathcal{V}<\operatorname{dim} \mathcal{W}
   \end{aligned}$$
   即存在非零向量 $\mathbf{y}\in\mathcal{W}$ 使得 $\mathbf{y} \notin {\rm ran}(T)$, 即 $T$ 不是满射.

**用`矩阵`语言阐述上述推论** 设 $A$ 是一个 $m\times n$ 阶矩阵.

1. $n > m$ (矮胖子矩阵)$$\dim N(A) = n - \dim C(A) \geq n - m \geq 0$$ 即零空间 $N(A)$ 包含非零向量, 即 $A\mathbf{x}=\mathbf{0}$ 有无限多组解.
   <img src="https://imgkr.cn-bj.ufileos.com/7faafa27-66ce-4846-a283-b20d17b63d15.png" title="矮胖子矩阵" alt="矮胖子矩阵" width="250">
2. $n < m$ (瘦高个儿矩阵)$$\dim C(A) = n - \dim N(A)\leq n < m $$ 即列空间 $C(A)$ 未能充满整个 $\mathbb{R}^m$, 也就是说 $A{\mathbf x}=b$ 有可能无解.
   <img src="https://imgkr.cn-bj.ufileos.com/09617655-08e9-488a-a39a-1b5fcdab5ecb.png" title="瘦高个儿矩阵" alt="瘦高个儿矩阵" width="200">


<br />
