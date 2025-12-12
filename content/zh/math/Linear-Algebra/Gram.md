+++
title = "Gram 矩阵"
date = "2020-02-05T00:00:00+08:00"
description = "本文介绍 Gram 矩阵及其重要性质"
categories = ["MATH","线代拾遗"]
tags = ["矩阵","特殊矩阵"]
keywords = ["矩阵","线性代数","Gram 矩阵","Gram matrix","matrix","linear algebra","diagonalization","MatNoble"]
toc = true
katex = true
series = ["mla"]
+++

## Gram 矩阵

假设 $A$ 是一个 $m\times n$ 阶矩阵,

> 1) 列向量 Gram 矩阵  
>    $A$ 由列向量 $\mathbf{\alpha}_i$ 表示, 即
>    $$A=\begin{bmatrix}\mathbf{\alpha}_1  & \mathbf{\alpha}_2 &\cdots & \mathbf{\alpha}_n \end{bmatrix}$$
>    则

$$
\begin{aligned}
G &= \\, A^{\mathsf T}A \\\\[3pt]
&= \begin{bmatrix} \mathbf{\alpha}_1^{\mathsf T} \\\\ \mathbf{\alpha}_2^{\mathsf T} \\\\ \vdots \\\\ \mathbf{\alpha}_n^{\mathsf T}  \end{bmatrix}  \begin{bmatrix} \mathbf{\alpha}_1 & \mathbf{\alpha}_2 & \cdots & \mathbf{\alpha}_n \end{bmatrix} \\\\[3pt]
& = \begin{bmatrix} \mathbf{\alpha}_1^{\mathsf T}\mathbf{\alpha}_1 &  \mathbf{\alpha}_1^{\mathsf T}\mathbf{\alpha}_2 & \cdots & \mathbf{\alpha}_1^{\mathsf T}\mathbf{\alpha}_n \\\\ \mathbf{\alpha}_2^{\mathsf T}\mathbf{\alpha}_1 & \mathbf{\alpha}_2^{\mathsf T}\mathbf{\alpha}_2 & \cdots &\mathbf{\alpha}_2^{\mathsf T}\mathbf{\alpha}_n  \\\\ \vdots & \vdots & & \vdots \\\\ \mathbf{\alpha}_n^{\mathsf T}\mathbf{\alpha}_1 & \mathbf{\alpha}_n^{\mathsf T}\mathbf{\alpha}_2 & \cdots & \mathbf{\alpha}_n^{\mathsf T}\mathbf{\alpha}_n \end{bmatrix}
\end{aligned}
$$

> 2) 行向量 Gram 矩阵  
>    $A$ 由行向量 $\mathbf{\beta}_i^{\mathsf T}$ 表示, 即
>    $$A=\begin{bmatrix}\mathbf{\beta}_1^{\mathsf T}  \\\\ \mathbf{\beta}_2^{\mathsf T} \\\\ \vdots \\\\ \mathbf{\beta}_m^{\mathsf T} \end{bmatrix}$$
>    则

$$
\begin{aligned}
G &= \\, AA^{\mathsf T} \\\\[3pt]
&= \begin{bmatrix}\mathbf{\beta}_1^{\mathsf T}  \\\\ \mathbf{\beta}_2^{\mathsf T} \\\\ \vdots \\\\ \mathbf{\beta}_m^{\mathsf T} \end{bmatrix} \begin{bmatrix} \mathbf{\beta}_1 & \mathbf{\beta}_2 & \cdots & \mathbf{\beta}_m \end{bmatrix} \\\\[3pt]
& = \begin{bmatrix} \mathbf{\beta}_1^{\mathsf T}\mathbf{\beta}_1 &  \mathbf{\beta}_1^{\mathsf T}\mathbf{\beta}_2 & \cdots & \mathbf{\beta}_1^{\mathsf T}\mathbf{\beta}_m \\\\ \mathbf{\beta}_2^{\mathsf T}\mathbf{\beta}_1 & \mathbf{\beta}_2^{\mathsf T}\mathbf{\beta}_2 & \cdots &\mathbf{\beta}_2^{\mathsf T}\mathbf{\beta}_m  \\\\ \vdots & \vdots & & \vdots \\\\ \mathbf{\beta}_m^{\mathsf T}\mathbf{\beta}_1 & \mathbf{\beta}_m^{\mathsf T}\mathbf{\beta}_2 & \cdots & \mathbf{\beta}_m^{\mathsf T}\mathbf{\beta}_m \end{bmatrix}
\end{aligned}
$$

## 6 大性质

下面只考虑`列向量 Gram 矩阵`

> (1) $G = A^{\mathsf T}A$ 是对称矩阵

$$
G^{\mathsf T } = (A^{\mathsf T}A)^{\mathsf T} = A^{\mathsf T}A = G 
$$

<br />

> (2) 对于实矩阵 $A$ $$\mathrm{rank} (A^{\mathsf T}A) = \mathrm{rank} (A)$$

证明 

$$
\begin{cases} A\mathsf{x} = 0 \\\\[3pt] A^{\mathsf T}A\mathbf{x} = 0 \end{cases}
$$ 

同解即可. 

证明过程详见[经典例题(第３小问)](https://blog.matnoble.top/posts/matrix4basicth/#%E7%BB%8F%E5%85%B8%E4%BE%8B%E9%A2%98)

<br />

>  (3) 若 $A^{\mathsf T}A=0$, 则 $A = 0$  

由上面性质 
$$\begin{aligned} \mathrm{rank} (A^{\mathsf T}A) &= \mathrm{rank} (A) \\\\
&=  \mathrm{rank} \ (0) = 0 \end{aligned}$$

<br />

> (4) 对于实矩阵 $A$, 则 $A^{\mathsf T}A$ 是半正定矩阵 
$$ \mathbf{x}^{\mathsf T}A^{\mathsf T}A\mathbf{x} = (A\mathbf{x})^{\mathsf T}A\mathbf{x} \geq 0 $$

> (5) 对于任意 $n$ 阶实对称半正定矩阵 $M$, 存在矩阵 $A$ 使得 $M=A^{\mathsf T}A$ 成立. 

  因为矩阵 $M$ 实对称, 所以 $M$ 可以`正交对角化`, 即
  
  $$M = Q\Lambda Q^{\mathsf T}$$ 
  
  又因为矩阵 $M$ 半正定, 所以其特征值 $\lambda\_i \geq 0 $, 所以可记 
  
  $$
  \Lambda^{\frac{1}{2}} = \mathrm{diag} (\sqrt{\lambda_1}, \dots, \sqrt{\lambda_n})
  $$
  
  且 
  
  $$
  A=\Lambda^{\frac{1}{2}}Q^{\mathsf T}
  $$ 
  
  则可得 
  
  $$\begin{aligned}  M &= Q\Lambda Q^{\mathsf T} \\\\[3pt] 
  &= (\Lambda^{\frac{1}{2}}Q^{\mathsf T})^{\mathsf T}\Lambda^{\frac{1}{2}}Q^{\mathsf T} \\\\[3pt]
  &= A^{\mathsf T}A \end{aligned}$$
  
<br />

> (6) 若 $A=\left[ \mathbf{\alpha}\_1  , \mathbf{\alpha}\_2 , \cdots , \mathbf{\alpha}_n \right]$ 列满秩, 则 $A^{\mathsf T}A$ 正定

- 由性质 (2), 知 $\mathrm{rank} (A^{\mathsf T}A) = \mathrm{rank} (A) = n$
- 因为 $A\mathbf{x}=0$ 只有零解, 结合性质 (4), 对于非零 $\mathbf{x}\in \mathbb{R}^n$
$$ \mathbf{x}^{\mathsf T}A^{\mathsf T}A\mathbf{x} = (A\mathbf{x})^{\mathsf T}A\mathbf{x} > 0 $$


