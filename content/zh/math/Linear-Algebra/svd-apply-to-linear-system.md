+++
title = "SVD 于解线性方程组之应用"
description = "The Application of SVD in Solving Linear Equations"
date = "2020-03-03T06:21:00+00:00"
categories = ["MATH","线代拾遗"]
tags = ["最小二乘法","奇异值分解"]
keywords = ["线性方程组","奇异值分解","system of linear equations","SVD","线性代数","最小二乘法","matrix","linear algebra","leastsquares","MatNoble"]
toc = true
mathjax = true
series = ["mla"]
aliases = ["/posts/svd-linear-system"]
+++

## 释题

奇异值分解(Singular Value Decomposition, 简称:SVD)实际上是一种[矩阵分解](https://matnoble.github.io/posts/svd1/), 记得数值分析老师说过:

> 每一种「矩阵分解」都对应一种「解线性方程组」的算法, 例如 LU 分解, QR 分解和 Cholesky 分解等.

那么 SVD 分解也应对应一种求解线性方程组的算法.

## 准备工作

为推导该算法, 应有以下知识储备

### 线性方程组

假设 $\boldsymbol{A}$ 是一个 $m\times n$ 阶实矩阵, ${\rm rank} \boldsymbol{A} =r, \mathbf{b}\in \mathbb{R}^m$, 求解 $\mathbf{x}\in \mathbb{R}^n$ 满足

$$
\begin{equation}
\boldsymbol{A}\mathbf{x = b}
\label{eq:1}
\end{equation}
$$

- ${\rm rank} \boldsymbol{A} = {\rm rank} \bigl[\boldsymbol{A}, \mathbf{b}\bigr] \Longrightarrow$ 方程组有解
  - 若 $n=r$ (列满秩) $\Longrightarrow$ 存在唯一解
  - 若 $n>r \Longrightarrow$ 有无穷多解
- ${\rm rank} \boldsymbol{A} + 1 = {\rm rank} [\boldsymbol{A}, \mathbf{b}] \Longrightarrow$ 方程组无解

进一步地, 当方程组无解时, 我们可以找到其{{< mark text="「最小二乘解」" >}}[^1]. 

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/390fed52-66a6-4c8f-80b1-366e381e2724.png" title="最小二乘解三维示意图" width="85%" >}}

设 $\mathbf{p}$ 为 $\mathbf{b}$ 在 $C(\boldsymbol{A})$ 超平面的投影

$$
\begin{equation}
\boldsymbol{A}\check{\mathbf x} = {\mathbf p}
\label{eq:least}
\end{equation}
$$

$\check{\mathbf x}$ 即为最小二乘解. 类似地, 

 - 若 $n=r$ (列满秩) $\Longrightarrow$ 存在唯一最小二乘解
 - 若 $n>r \Longrightarrow$ 有无穷多最小二乘解

对于无穷解情况, 用空间的角度解释为: 零空间 $N(\boldsymbol{A})$ 非空. 其一般解的结构为:

<p style="text-align: center">
一般解 = 特殊解 + 其次解
</p>

> ..线性方程组.. 和 ..最小二乘法.. 都是线性代数中所研究的核心问题.

### 奇异值分解

我们已经知道[^1], 对于上述实矩阵 $\boldsymbol{A}$ 满足

$$
\begin{cases}
\boldsymbol{A}\mathbf{v}\_i =\sigma\_i\mathbf{u}\_i, & i=1, \cdots, r
\\\\[3pt]
\boldsymbol{A}\mathbf{v}\_i =0,  &i=r+1, \cdots, n
\\\\[3pt]
\boldsymbol{A}^{\mathsf T}\mathbf{u}\_j=\sigma\_j\mathbf{v}\_j, &j=1, \cdots, r
\\\\[3pt]
\boldsymbol{A}^{\mathsf T}\mathbf{u}_j=0,  &j=r+1, \cdots, m
\end{cases}
$$

- $\\{ \mathbf{v}\_{1}, \cdots, \mathbf{v}\_r \\}$ 是行空间 $C(\boldsymbol{A}^{\mathsf T})$ 的正交基底;
- $\\{ \mathbf{v}\_{r+1}, \cdots, \mathbf{v}\_n \\}$ 是零空间 $N(\boldsymbol{A})$ 的正交基底;
- $\\{ \mathbf{u}\_1, \cdots \mathbf{u}_r \\}$ 是列空间 $C(\boldsymbol{A})$ 的正交基底;
- $\\{ \mathbf{u}\_{r+1}, \cdots \mathbf{u}_m \\}$ 是左零空间 $N(\boldsymbol{A}^{\mathsf T})$ 的正交基底.

其中, $\sigma$ 称为..奇异值.. . 写成矩阵的形式:

$$
\begin{equation}
\begin{aligned}
\boldsymbol{A} & = [{\mathbf u}\_1, \cdots, {\mathbf u}\_r, {\mathbf u}\_{r+1}, \cdots, {\mathbf u}\_m] 
\\\\[3pt]
& \quad \left[
\begin{array}{ccc|c}
\sigma\_1&& &\\\\
&\ddots&& \boldsymbol{Z}\_{r, n-r}\\\\
&&\sigma\_r &\\\\
\hline & \boldsymbol{Z}\_{m-r, r}& & \boldsymbol{Z}\_{m-r, n-r}
\end{array} \right]
\begin{bmatrix}
{\mathbf v}_1^{\mathsf T} \\\\
\vdots \\\\
{\mathbf v}\_r^{\mathsf T} \\\\
{\mathbf v}\_{r+1}^{\mathsf T} \\\\
\vdots \\\\
{\mathbf v}\_n^{\mathsf T}
\end{bmatrix}
\\\\[3pt]
& = \boldsymbol{U} \boldsymbol{\Sigma} \boldsymbol{V}^{\mathsf T}
\end{aligned}
\label{eq:svd}
\end{equation}
$$

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/56a744fd-42a5-4b93-a264-a96729d6c73f.png" title="四个正交基底" width="85%" >}}

## 算法推导

将式 (\ref{eq:1}) 中的系数矩阵 $\boldsymbol{A}$ 写成式 (\ref{eq:svd}) 的形式

$$
\boldsymbol{U} \boldsymbol{\Sigma} \boldsymbol{V}^{\mathsf T}{\mathbf x = b}
$$

左右同乘 $\boldsymbol{U}^{\mathsf T}$

$$
\begin{equation}
\boldsymbol{\Sigma} \boldsymbol{V}^{\mathsf T}{\mathbf x} = \boldsymbol{U}^{\mathsf T}{\mathbf b}
\label{eq:4}
\end{equation}
$$

记 $\hat{\mathbf x} = \boldsymbol{V}^{\mathsf T}{\mathbf x}$ 及 $\hat{\mathbf b} = \boldsymbol{U}^{\mathsf T}{\mathbf b}$, 则式 (4) 改写为

$$
\begin{equation}
\boldsymbol{\Sigma} \hat{\mathbf x} = \hat{\mathbf b}
\label{eq:5}
\end{equation}
$$

这里需要注意的是: **$\boldsymbol{\Sigma}$ 是对角矩阵**. 对线性方程组 (\ref{eq:5}) 可分行和列来讨论:

- $m>r$ 即 $\boldsymbol{\Sigma}$ 的 $r+1$ 行至 $m$ 行全部为 $0$. <br>

所以, 式 (\ref{eq:5}) 有解, 当且仅当满足式 (\ref{eq:6})

$$
\begin{equation}
\hat{\mathbf b}\_k = {\mathbf u}\_k^{\mathsf T}{\mathbf b} = 0,\ k=r+1, \cdots, n
\label{eq:6}
\end{equation}
$$

进而得到, 

$$
\hat{\mathbf x} = \boldsymbol{V}^{\mathsf T}{\mathbf x} = \Biggl[ \frac{{\mathbf u}\_1^{\mathsf T}{\mathbf b}}{\sigma\_1}\ \cdots\ \frac{{\mathbf u}\_r^{\mathsf T}{\mathbf b}}{\sigma_r} \\ 0\ \cdots\ 0  \Biggr]^{\mathsf T}
$$

接着, 

$$
\begin{equation}
\begin{aligned}
{\mathbf x} & = \boldsymbol{V}\hat{\mathbf x} =  [{\mathbf v}\_1, \cdots, {\mathbf v}\_r, {\mathbf v}\_{r+1}, \cdots, {\mathbf v}\_n]
\begin{bmatrix}
\frac{{\mathbf u}\_1^{\mathsf T}{\mathbf b}}{\sigma\_1}
\\\\
\vdots
\\\\
\frac{{\mathbf u}\_r^{\mathsf T}{\mathbf b}}{\sigma\_r}
\\\\
0
\\\\
\vdots
\\\\
0
\end{bmatrix}
\\\\[3pt]
& = \sum\_{i=1}^r \frac{{\mathbf u}\_i^{\mathsf T}{\mathbf b}}{\sigma\_i} {\mathbf v}_i
\end{aligned}
\label{eq:8}
\end{equation}
$$

若不满足式 (\ref{eq:6}), 则存在最小二乘解, 参考式 (\ref{eq:least}), **结合 $\boldsymbol{\Sigma}$ 的对角性**, 投影向量 ${\mathbf p}$ 为舍去后 $m-r$ 个元的向量 $\hat{\mathbf b}$, 即此时最小二乘解有与式 (\ref{eq:8}) ..形式相同..

- $n>r$ 即 $\boldsymbol{\Sigma}$ 列不满秩, 零空间 $N({\boldsymbol{A}})$ 非空. 此时, 存在不唯一解或不唯一的最小二乘解.

考虑 $j>r$

$$
\boldsymbol{A}{\mathbf v\_j} = \boldsymbol{U} \boldsymbol{\Sigma} \boldsymbol{V}^{\mathsf T}{\mathbf v\_j} = \boldsymbol{U} \boldsymbol{\Sigma}{\mathbf e_j} = \boldsymbol{0}
$$

其中, ${\mathbf e\_j}$ 为第 $j$ 元素为 $1$, 其它元素为 $0$ 的 $n$ 维向量. 上式表示 $\\{ {\mathbf v}\_{r+1} \cdots \mathbf{v}_n \\}$ 为零空间 $N(\boldsymbol{A})$ 的基底. 所以, 一般解 $=$ 特解 $+$ 齐次解:

$$
{\mathbf x} = \sum\_{i=1}^r \frac{{\mathbf u}\_i^{\mathsf T}{\mathbf b}}{\sigma\_i}{\mathbf v}\_i + \sum\_{i=r+1}^n c\_i{\mathbf v}_i
$$

其中, $c_i$ 为任意数. 若 $n=r$, 就只剩下第一项, 即有唯一解或唯一最小二乘解.

因为 $\\{ \mathbf{v}_i \\}$ 是一组单位正交基, 所以

$$
\lVert \mathbf{x} \rVert^2 = \mathbf{x}^{\mathsf T}\mathbf{x} = \sum\_{i=1}^r (\frac{{\mathbf u}\_i^{\mathsf T}{\mathbf b}}{\sigma\_i})^2 + \sum\_{i=r+1}^n c\_i^2
$$

也就是说, 当方程组有解时, 存在唯一解 $\bar{\mathbf{x}}$ 长度最小, 且 $\bar{\mathbf{x}}\in C(\boldsymbol{A}^{\mathsf T})$, 写成矩阵形式:

$$
\begin{aligned}
\bar{\mathbf x} & = \begin{bmatrix} 
\mathbf{v}\_1&\cdots&\mathbf{v}\_r
\end{bmatrix}
\begin{bmatrix} 
1/\sigma\_1 & & \\\\ 
& \ddots &  \\\\
& & 1/\sigma\_r
\end{bmatrix}
\begin{bmatrix} \mathbf{u}\_1^{\mathsf T} \\\\ \vdots \\\\ \mathbf{u}\_r^{\mathsf T} 
\end{bmatrix}
\mathbf{b}
\\\\[3pt]
& = \bar{\boldsymbol{V}}\bar{\boldsymbol{\Sigma}} \bar{\boldsymbol{U}}^{\mathsf T}
\mathbf{b}
\end{aligned}
$$

对于任意矩阵 $\boldsymbol{A}$ 都可以计算

$$
\check{\boldsymbol{A}} = \bar{\boldsymbol{V}}\bar{\boldsymbol{\Sigma}} \bar{\boldsymbol{U}}^{\mathsf T}
$$

从而有解或最小二乘解

$$
\check{\mathbf x} = \check{\boldsymbol{A}}\mathbf{b}
$$

## 总结

- $m=n=r$

方程组有唯一解: $ \mathbf{x} = \boldsymbol{A}^{-1} \mathbf{b} $

- $ m>r, n=r $

方程组有唯一解或唯一最小二乘解, 形式相同:

$$
\check{\mathbf{x}} = \sum\_{i=1}^r \frac{{\mathbf u}\_i^{\mathsf T}{\mathbf b}}{\sigma\_i} {\mathbf v}_i = (\boldsymbol{A}^{\mathsf T}\boldsymbol{A})^{-1}\boldsymbol{A}^{\mathsf T}{\mathbf{b}}
$$

后一个等号参照[^2]

- $m=r, n>r$

方程组有无穷多解, 一般解为:

$$
{\mathbf x} = \sum\_{i=1}^r \frac{{\mathbf u}\_i^{\mathsf T}{\mathbf b}}{\sigma\_i}{\mathbf v}\_i + \sum\_{i=r+1}^n c\_i{\mathbf v}_i
$$

前一项属于行空间 $C(\boldsymbol{A}^\mathsf{T})$.

- $m>r, n>r$

方程组可能有无穷多解或有无穷多最小二乘解.

$$
\check{{\mathbf x}} = \sum\_{i=1}^r \frac{{\mathbf u}\_i^{\mathsf T}{\mathbf b}}{\sigma\_i}{\mathbf v}\_i + \sum\_{i=r+1}^n c\_i{\mathbf v}_i
$$

前一项属于行空间 $C(\boldsymbol{A}^\mathsf{T})$.

<hr />

更多..奇异值分解..的内容可以戳 [**这里**](https://matnoble.github.io/tags/%E5%A5%87%E5%BC%82%E5%80%BC%E5%88%86%E8%A7%A3/)

[^1]: https://matnoble.github.io/posts/matrixleastsquares/#%E6%9C%80%E5%B0%8F%E4%BA%8C%E4%B9%98%E8%A7%A3
[^2]: https://matnoble.github.io/posts/matrixleastsquares/#%E5%88%97%E6%BB%A1%E7%A7%A9
