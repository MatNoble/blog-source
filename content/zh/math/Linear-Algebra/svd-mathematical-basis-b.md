+++
title = "奇异值分解再探"
date = "2020-02-25T00:19:44+08:00"
description = "奇异值分解是现代线性代数的核心？"
categories = ["MATH","线代拾遗"]
tags = ["奇异值分解"]
keywords = ["线代拾遗","矩阵","线性代数","svd","奇异值分解","matrix","linear algebra","Space base","MatNoble","奇异值分解是现代线性代数的核心"]
toc = true
katex = true
series = ["mla"]
aliases = ["/posts/svd1"]
+++

<!--more-->

## 知识回顾

假设有 $m\times n$ 阶实矩阵 $\boldsymbol{A}$,

$$
{\rm rank}(\boldsymbol{A}) = r \leq \max\\{m, n \\}
$$

则

- 列向量 Gram 矩阵可正交对角化(包括单位化)

$$
\boldsymbol{A}^{\mathsf T}\boldsymbol{A} = V^{\mathsf T}\begin{bmatrix} \sigma\_1^2 & 0 & \cdots & 0 \\\\
0 & \sigma\_2^2 & \cdots & 0 \\\\
\vdots & \vdots & \ddots & \vdots \\\\
0 & 0 & \vdots & \sigma_n^2
\end{bmatrix}V
$$

- 行向量 Gram 矩阵可正交对角化(包括单位化)

$$
\boldsymbol{A}\boldsymbol{A}^{\mathsf T}= U^{\mathsf T}\begin{bmatrix} \sigma\_1^2 & 0 & \cdots & 0 \\\\
0 & \sigma\_2^2 & \cdots & 0 \\\\
\vdots & \vdots & \ddots & \vdots \\\\
0 & 0 & \vdots & \sigma_m^2
\end{bmatrix}U
$$

其中, 不妨假设

$$\sigma\_1 \geq \sigma\_2 \geq \cdots \sigma_r > 0$$

并且,

$$\sigma\_{r+1} = \cdots = \sigma_k = 0  $$

其中, $k = \max\\{m , n\\}$

<br />

另外, 实矩阵 $\boldsymbol{A}$ 还满足:

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

<br />

**接下来的任务是证明:**

$$
\boldsymbol{A} = U\Sigma V^{\mathsf T}
$$

其中, $U$ 和 $V$ 分别是 $m$ 阶和 $n$ 阶的`正交矩阵`, $\Sigma$ 是 $m\times n$ 阶的`对角矩阵`.

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/56a744fd-42a5-4b93-a264-a96729d6c73f.png" title="正交基底" >}}

## 证明

首先, $\Sigma$ 是 $m\times n$ 阶的`对角矩阵`?

> 问题来了: 对角矩阵不是方阵吗?

$$
	\Sigma = \left[
	\begin{array}{ccc|c}
\sigma_1&&  &\\\\
&\ddots&& Z_{r, n-r}\\\\
&&\sigma_r &\\\\
\hline &Z_{m-r, r}& & Z_{m-r, n-r}
	\end{array}
	\right]
$$

其中, $Z$ 表示零矩阵(Zero matrix).

利用分块矩阵:

$$
\begin{aligned}
\boldsymbol{A}V &= \boldsymbol{A}[\mathbf{v}\_1,  \cdots, \mathbf{v}\_r, \mathbf{v}\_{r+1}, \cdots, \mathbf{v}\_n] \\\\[3pt]
& = [\boldsymbol{A}\mathbf{v}\_1,  \cdots, \boldsymbol{A}\mathbf{v}\_r, \boldsymbol{A}\mathbf{v}\_{r+1}, \cdots, \boldsymbol{A}\mathbf{v}\_n]  \\\\[3pt]
& = [\sigma\_1\mathbf{u}\_1, \cdots, \sigma\_r\mathbf{u}\_r, 0, \cdots, 0] \\\\[3pt]
& = [\mathbf{u}\_1, \cdots, \mathbf{u}\_m] \left[
	\begin{array}{ccc|c}
\sigma\_1&&  &\\\\
&\ddots&& Z_{r, n-r}\\\\
&&\sigma\_r &\\\\
\hline &Z\_{m-r, r}& & Z_{m-r, n-r}
	\end{array}
	\right] \\\\[3pt]
  & = U \Sigma
\end{aligned}
$$

因为 $V$ 是正交矩阵, 所以

$$
\boldsymbol{A} = U\Sigma V^{-1} = U\Sigma V^{\mathsf T}
$$

## 验证

- 列向量 Gram 矩阵

$$
\begin{aligned}
\boldsymbol{A}^{\mathsf T}\boldsymbol{A} &= (U\Sigma V^{\mathsf T})^{\mathsf T}U\Sigma V^{\mathsf T} \\\\[3pt]
& = V\Sigma^{\mathsf T} (U^{\mathsf T}U) \Sigma V^{\mathsf T} \\\\[3pt]
& = V(\Sigma^{\mathsf T}\Sigma) V^{\mathsf T}
\end{aligned}
$$

- 行向量 Gram 矩阵

$$
\begin{aligned}
\boldsymbol{A}\boldsymbol{A}^{\mathsf T} &= U\Sigma V^{\mathsf T}(U\Sigma V^{\mathsf T})^{\mathsf T} \\\\[3pt]
& = U\Sigma (V^{\mathsf T}V)\Sigma^{\mathsf T}U^{\mathsf T} \\\\[3pt]
& = U(\Sigma^{\mathsf T}\Sigma) U^{\mathsf T}
\end{aligned}
$$

与上述结果一致.

## 化简

通常把 $U$ 写成列向量的形式, 把 $V$ 写成行向量的形式, 即

$$
\begin{aligned}
\boldsymbol{A} & = [u\_1, \cdots, u\_r, u\_{r+1}, \cdots,  u\_m]
\\\\[3pt]
& \quad \left[
	\begin{array}{ccc|c}
\sigma\_1&&  &\\\\
&\ddots&& Z\_{r, n-r}\\\\
&&\sigma\_r &\\\\
\hline &Z\_{m-r, r}& & Z\_{m-r, n-r}
	\end{array} \right]
  \begin{bmatrix}
  v\_1^{\mathsf T} \\\\
  \vdots \\\\
  v\_r^{\mathsf T} \\\\
   v\_{r+1}^{\mathsf T} \\\\
  \vdots \\\\
    v\_n^{\mathsf T}
  \end{bmatrix}
  \end{aligned}
$$

分块运算得:

$$
\boldsymbol{A} = [u_1, \cdots, u_r]
\begin{bmatrix} \sigma_1 & 0 & \cdots & 0 \\\\
0 & \sigma_2 & \cdots & 0 \\\\
\vdots & \vdots & \ddots & \vdots \\\\
0 & 0 & \vdots & \sigma_r
\end{bmatrix}
  \begin{bmatrix}
  v_1^{\mathsf T} \\\\
  \vdots \\\\
  v_r^{\mathsf T}
  \end{bmatrix}
$$

也就是说: 任意秩为 $r$ 的矩阵 $\boldsymbol{A}$ 都可以写成 $r$ 个`秩一矩阵`的和

$$
\boldsymbol{A} = u_1\sigma_1 v_1^{\mathsf T} + \cdots u_r\sigma_r v_r^{\mathsf T}
$$

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/47030408-b51a-4190-8b43-6182f041ddef.jpeg" title="SVD" >}}

## 复盘

上面所能进行下去的关键在于:

$$
\boldsymbol{A}v_i = \sigma_i u_i, \quad i = 1, \cdots, r
$$

> 矩阵(变换) $\boldsymbol{A}$ 将行空间 $C(\boldsymbol{A}^{\mathsf T})$ 的正交基底映至列空间 $C(\boldsymbol{A})$ 的正交基底, $\sigma_i$ 称为..奇异值..

不是所有矩阵都可以对角化, 但所有矩阵都可以进行`奇异值分解`

## 几何意义

这个 [知乎回答](https://zhuanlan.zhihu.com/p/57803955) 给出了如下解释, 我也比较满意

![](https://imgkr.cn-bj.ufileos.com/f3070f87-ddd7-430b-bbb5-83172534d3f0.png)

## 应用

[We Recommend a Singular Value Decomposition Austin)](http://www.ams.org/publicoutreach/feature-column/fcarc-svd "We Recommend a Singular Value Decomposition (David Austin)") 中介绍了如下几个应用:

- Data compression(数据压缩)
- Noise reduction (去噪)
- Data analysis(数据分析)

数据分析中, 我们知道的`主成分分析(PCA)`的数学原理即为`奇异值分解(SVD)`.

<hr />

以上所有部分就是奇异值分解(singular value decomposition), 简称 SVD. 实际上, 之前做的几篇都是为这一篇做准备:

1. [秩-零化度定理(Rank-Nullity Theorem)](https://blog.matnoble.top/posts/rank-nullity/)
2. [矩阵的四个基本空间, 不了解下吗?](https://blog.matnoble.top/posts/matrix4basicth/)
3. [矩阵的四个基本空间的基底](https://blog.matnoble.top/posts/basicspacebase/)
4. [Gram 矩阵](https://blog.matnoble.top/posts/gram/)
5. [正交矩阵之旋转与镜射](https://blog.matnoble.top/posts/rotationandmirroring/)
6. [奇异值分解初步](https://blog.matnoble.top/posts/svd/)

接下来, 奇异值分解专题并没有结束, 我将以我的思考阐述 SVD 的几何意义以及一些实际应用.

<hr />

更多..奇异值分解..的内容可以戳 [**这里**](https://blog.matnoble.top/tags/%E5%A5%87%E5%BC%82%E5%80%BC%E5%88%86%E8%A7%A3/)
