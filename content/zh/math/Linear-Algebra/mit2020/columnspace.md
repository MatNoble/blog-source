+++
title = "矩阵的列空间"
description = "The Column Space of a Matrix"
date = "2020-05-24T00:00:00+08:00"
categories = ["MATH","线代拾遗"]
tags = ["MIT 2020"]
keywords = ["MIT 线性代数","Pro. Gilbert Strang","线代拾遗","矩阵","线性代数","基底","matrix","linear algebra","Space base","MatNoble"]
toc = true
katex = true
series = ["mla"]
+++

## “前菜”

将向量 <span>$\alpha = \begin{bmatrix} 1 \\ 2 \\ 5 \end{bmatrix}^{\mathsf T}$</span> 扩充

<div>
  $$
  \boldsymbol{A} = \bigl[\alpha ,\ 3\alpha \bigr] = \begin{bmatrix} 1 & 3 \\ 2 & 6 \\ 5 & 15 \end{bmatrix}
  $$
</div>

因为列向量呈倍数关系，所以矩阵 $\boldsymbol{A}$ 的列秩为$1$。检查一下，矩阵 $\boldsymbol{A}$ 的三个行向量也有倍数关系，行秩也是$1$

继续扩充，

<div>
  \begin{equation} \label{eq:1}
  \boldsymbol{A} = \bigl[\alpha ,\ 3\alpha,\ 2\alpha,\ 4\alpha  \bigr] = \begin{bmatrix} 1 & 3 & 2 & 4 \\ 2 & 6 & 4 & 8 \\ 5 & 15 & 10 & 20 \end{bmatrix}
  \end{equation}
</div>

检查一下，扩充之后依旧成立：行秩 $=$ 列秩 $= 1$

式(\ref{eq:1})可以写为:

<div>
  \begin{equation}\label{eq:2}
  \begin{aligned}
  \boldsymbol{A} = \bigl[\alpha ,\ 3\alpha,\ 2\alpha,\ 4\alpha  \bigr] &= \alpha\bigl[1,\ 3,\ 2,\ 4 \bigr] \\[3pt]
   &= \begin{bmatrix} 1 \\ 2 \\ 5 \end{bmatrix} \bigl[1,\ 3,\ 2,\ 4 \bigr] \\[3pt]
  & = \begin{bmatrix} 1 & 3 & 2 & 4 \\ 2 & 6 & 4 & 8 \\ 5 & 15 & 10 & 20 \end{bmatrix}
  \end{aligned}
  \end{equation}
</div>

式(\ref{eq:2})可以说明:

- 只考虑列向量扩充矩阵，行向量存在与列向量的**不变量** --- 秩
- $\boldsymbol{A}$ 的列向量全是列向量 $\alpha$ 的线性组合；
- $\boldsymbol{A}$ 的行向量全是行向量 $\bigl[1,\ 3,\ 2,\ 4 \bigr]$ 的线性组合；

<hr>

## 矩阵 $\boldsymbol{A}$ 的列空间

<div>
$$
\begin{align*}
  \text{Column space of}\ \boldsymbol{A} &= C(\boldsymbol{A}) \\ &= \text{all vectors} \ \boldsymbol{A}\vec{x}
\end{align*}
$$
</div>

<div>
$$
\begin{align*}
\boldsymbol{A}\vec{x} &= \begin{bmatrix} 1 & 4 & 5 \\
  3 & 2 & 5 \\
  2 & 1 & 3 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} \\[3pt]
  &= \begin{bmatrix} 1\\ 3 \\ 2 \end{bmatrix}x_1 + \begin{bmatrix} 4\\ 2 \\ 1 \end{bmatrix}x_2 + \begin{bmatrix} 5\\ 5 \\ 3 \end{bmatrix}x_3 
\end{align*}
$$
</div>

其中 $\vec{x}$ 任意取, $\boldsymbol{A}$ 的列空间即: $\boldsymbol{A}$ 的列的所有**线性组合**

因为

<div>
$$
\begin{bmatrix} 1\\ 3 \\ 2 \end{bmatrix} + \begin{bmatrix} 4\\ 2 \\ 1 \end{bmatrix} = \begin{bmatrix} 5\\ 5 \\ 3 \end{bmatrix}
$$
</div>

所以 $\boldsymbol{A}$ 的列空间表示一个平面(plane)

<hr>

## $\boldsymbol{A} = \boldsymbol{C}\boldsymbol{R}$

矩阵 $\boldsymbol{A}$ 可以写成如下**矩阵分解**的形式:

<div>
  \begin{equation} \label{eq:3}
  \boldsymbol{A} = \begin{bmatrix} 1 & 4 & 5 \\
  3 & 2 & 5 \\
  2 & 1 & 3 \end{bmatrix} = \begin{bmatrix} 1 & 4 \\
  3 & 2 \\
  2 & 1 \end{bmatrix} \left[ {\begin{array}{c:c}
		\begin{matrix}
			1 & 0 \\
      0 & 1
		\end{matrix}&
		\begin{matrix}
			1 \\
      1
		\end{matrix}
\end{array}} \right] 
  \end{equation}
</div>

第一个矩阵记为 $\boldsymbol{C}$，它的列向量全部来自矩阵 $\boldsymbol{A}$，并且是列满秩。实际，$\boldsymbol{C}$ 是矩阵 $\boldsymbol{A}$ 的列向量中任意一个**最大线性无关组**

第二个矩阵记为 $\boldsymbol{R}$，它包含一个与行数同阶的单位矩阵(有可能是分散的)

任意矩阵都可以做如上分解，称为 CR 分解。

### 行秩 $\equiv$ 列秩

分解式 (\ref{eq:3}) 可以说明:

1. 矩阵 $\boldsymbol{C}$ 的列向量是矩阵 $\boldsymbol{A}$ 列空间的(一组)基底，所以列秩$ = r (=2)$ 
2. 矩阵 $\boldsymbol{R}$ 的行向量是矩阵 $\boldsymbol{A}$ 行空间的(一组)基底，所以行秩$ = r (=2)$ (因为$\boldsymbol{R}$ 含有单位矩阵)

所以行秩 $\equiv$ 列秩

### 小结

- 虽然没有求 CR 分解的具体公式(计算复杂)，但是可以肯定所有矩阵都至少有一个 CR 分解，根据分解式，行秩 $\equiv$ 列秩是很显然的；
- 当 $r=1$ 时, 就是“前菜”中呈现的例子。(秩1矩阵 $\boldsymbol{A}^n$ 问题)；
- 矩阵 $\boldsymbol{R}$ 是矩阵 $\boldsymbol{A}$ 的行阶梯形矩阵；
- CR 分解没有“实用”价值，不用于求解线性方程组；
- 当 $\boldsymbol{A}$ 列满秩时，CR 分解是无意义的。

<hr />

## 总结

矩阵可以看成是由列向量组成的，矩阵的列空间是矩阵所有列的线性组合。CR 分解中，$\boldsymbol{C}$ 是矩阵列空间的基底，$\boldsymbol{R}$ 是矩阵行空间的基底。
