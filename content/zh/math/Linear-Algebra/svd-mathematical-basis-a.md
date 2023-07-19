+++
title = "奇异值分解初探"
date = "2020-02-24T00:13:44+00:00"
description = "奇异值分解是现代线性代数的核心？"
categories = ["MATH","线代拾遗"]
tags = ["奇异值分解"]
keywords = ["线代拾遗","矩阵","线性代数","svd","奇异值分解","matrix","linear algebra","Space base","MatNoble"]
toc = true
mathjax = true
series = ["mla"]
aliases = ["/posts/svd"]
+++

## 知识回顾

在 [矩阵的四个基本空间, 不了解下吗?](https://matnoble.github.io/posts/matrix4basicth/) 中, 介绍了实矩阵的四个基本空间的`正交关系`

$$
\begin{cases}
C(A^{\mathsf T}) = N(A)^{\perp} \\\\[3pt]
C(A) = N(A^{\mathsf T})^{\perp}
\end{cases}
$$

即

- 行空间是零空间的正交补;
- 列空间是左零空间的正交补.

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/19de04a9-9b75-4ac4-b4a1-4d53f59747bd.png" title="正交关系" >}}

在四个基本空间中, 通过 `初等行变换` 得到了它们的普通基底, 这一次首先讨论其`正交基底`.

<hr />

## 正交基底

假设有 $m\times n$ 阶实矩阵 $A$

$$
{\rm rank}(A) = r \leq \max\\{m, n \\}
$$

考虑列向量 Gram 矩阵 $A^{\mathsf T}A$, 由于其是对称矩阵, 所以可以`正交单位对角化`

$$
A^{\mathsf T}A = V^{\mathsf T}\begin{bmatrix} \sigma_1^2 & 0 & \cdots & 0 \\\\
0 & \sigma_2^2 & \cdots & 0 \\\\
\vdots & \vdots & \ddots & \vdots \\\\
0 & 0 & \vdots & \sigma_n^2
\end{bmatrix}V
$$

不妨设 $\sigma_i \geq 0$, $V=[v_1, v_2, \cdots, v_n]$

$$
\begin{equation}
A^{\mathsf T}A v_i = \sigma_i^2 v_i \quad i = 1, 2, \cdots, n
\label{eq:eq1}
\end{equation}
$$

其中, $\sigma_i^2$ 是列向量 Gram 矩阵 $A^{\mathsf T}A$ 的特征值, $v_i$ 是 $A^{\mathsf T}A$ 对应于 $\sigma_i^2$ 的单位特征向量, 即 **$V$ 的列向量是 $\mathbb{R}^n$ 的一组标准正交基**, 因此

$$
\lVert Av_i \rVert = v_i^{\mathsf T} A^{\mathsf T} A v_i = \sigma_i^2 v_i^{\mathsf T} v_i = \sigma_i^2
$$

<br />

又因为 ${\rm rank}(A^{\mathsf T}A) = {\rm rank}(A) = r$, 不妨设

$$\sigma_1 \geq \sigma_2 \geq \cdots \sigma_r > 0$$

并且,

$$\sigma_{r+1} = \cdots = \sigma_n = 0  $$

所以,

$$
\lVert Av_i \rVert = \sigma_i^2 = 0 \quad i = r+1, \cdots , n
$$

即 $Av_i = 0, i = r+1, \cdots , n$

$$\\{ v_{r+1}, \cdots, v_n \\} \subset N(A) = N(A^{\mathsf T}A)$$

又因为 $\dim N(A) = n-r$, 所以 $\\{ v_{r+1}, \cdots, v_n \\}$ 是 $N(A)$ 的一组标准正交基,

又因为$C(A^{\mathsf T}) = N(A)^{\perp}$, 所以 $\\{ v_{1}, \cdots, v_r \\}$ 是 $C(A^{\mathsf T})$ 的一组标准正交基.

<br />

对式(\ref{eq:eq1})左右同乘 $A$

$$
AA^{\mathsf T}A v_i = \sigma_i^2 Av_i \quad i = 1, 2, \cdots, n
$$

其中, $\sigma_i^2, i=1, \cdots, r$ 是行向量 Gram 矩阵 $AA^{\mathsf T}$ 的非零特征值, $Av_i$ 是 $AA^{\mathsf T}$ 相应于 $\sigma_i$ 的特征向量.

令 $u_i = \frac{Av_i}{\sigma_i}, i = 1, \cdots, r$, 则

$$
\begin{aligned}
u_i^{\mathsf T}u_j & = \left(\frac{Av_i}{\sigma_i} \right)^{\mathsf T} \frac{Av_j}{\sigma_j} = \frac{ v_i^{\mathsf T} A^{\mathsf T} A v_j }{\sigma_i \sigma_j} \\\\[3pt]
& = \frac{ \sigma_i \sigma_j v_i^{\mathsf T} v_j }{\sigma_i \sigma_j} = \begin{cases}
1 \quad i=j
\\\\[3pt]
0 \quad i \neq j
\end{cases}
\end{aligned}
$$

所以, $\\{ u_1, \cdots u_r \\}$ 是单位正交向量组, 继而是 $C(A)$ 的一组标准正交基.

接下来, 扩充单位正交向量 $\\{ u_{r+1}, \cdots u_m \\}$, 使得 $\\{ u_1, \cdots u_r, u_{r+1}, \cdots, u_m \\}$ 成为 $\mathbb{R}^m$ 的标准正交基. 因为 $C(A) = N(A^{\mathsf T})^{\perp}$, 所以, $\\{ u_{r+1}, \cdots u_m \\}$ 是 $N(A^{\mathsf T})$ 的一组标准正交基.

<br />

综上, 理论上得到了实矩阵 $A$ 的四个基本空间各自的正交基.

- $\\{ v_{1}, \cdots, v_r \\}$ 是行空间 $C(A^{\mathsf T})$ 的正交基底;
- $\\{ v_{r+1}, \cdots, v_n \\}$ 是零空间 $N(A)$ 的正交基底;
- $\\{ u_1, \cdots u_r \\}$ 是列空间 $C(A)$ 的正交基底;
- $\\{ u_{r+1}, \cdots u_m \\}$ 是左零空间 $N(A^{\mathsf T})$ 的正交基底.

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/56a744fd-42a5-4b93-a264-a96729d6c73f.png" title="正交基底" >}}

<hr />

以上运用了一些前几次证明过的结论:

- 秩

  $$
  \begin{aligned}
  r &= \hbox{rank}A=\hbox{rank}A^{\mathsf T} \\\\[3pt]
  &=\hbox{rank}(A^{\mathsf T}A)=\hbox{rank}(AA^{\mathsf T})
  \end{aligned}
  $$

- 列空间

  $$
  \begin{cases}
  C(A^{\mathsf T})=C(A^{\mathsf T}A)
  \\\\[3pt]
  C(A)=C(AA^{\mathsf T})
  \end{cases}
  $$

- 零空间
  $$
  \begin{cases}
  N(A)=N(A^{\mathsf T}A)
  \\\\[3pt]
  N(A^{\mathsf T})=N(AA^{\mathsf T})
  \end{cases}
  $$

以及一些结论:

- $A^{\mathsf T}A$ 的特征值为 $\sigma_1^2,\cdots,\sigma_n^2$, 对应单位正交的特征向量 $v_1, \cdots, v_n$
- $AA^{\mathsf T}$ 的特征值为 $\sigma_1^2,\cdots,\sigma_m^2$，对应单位正交的特征向量 $u_1, \cdots, u_m$
- $Av_i=\sigma_iu_i, \sigma_i>0, i=1, \cdots, r$, 且 $Av_i=0, i=r+1, \cdots, n$
- $A^{\mathsf T}u_j=\sigma_jv_j, \sigma_j>0, j=1, \cdots, r$, 且 $A^{\mathsf T}u_j=0, j=r+1, \cdots, m$

<hr />

## 特征值分解简介

经过以上过程, 可以将任意 $m\times n$ 阶矩阵 $A$ 分解为 $\\{ u_i\\}, \\{ v_i\\}, \\{\sigma_i\\}$ 构成的三个矩阵的乘积

$$
A = U\Sigma V^{\mathsf T}
$$

这就是奇异值分解(singular value decomposition), 简称 SVD.

<hr />

更多..奇异值分解..的内容可以戳 [**这里**](https://matnoble.github.io/tags/%E5%A5%87%E5%BC%82%E5%80%BC%E5%88%86%E8%A7%A3/)
