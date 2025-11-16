+++
title = "线代视角下的最小二乘法"
date = "2020-01-19T06:21:00+08:00"
categories = ["MATH","线代拾遗"]
tags = ["最小二乘法"]
keywords = ["矩阵","线性代数","最小二乘法","matrix","linear algebra","leastsquares","MatNoble"]
toc = true
mathjax = true
series = ["mla"]
aliases = ["/posts/matrixleastsquares"]
+++

在[简述有限元系列](https://blog.matnoble.top/categories/%E7%AE%80%E8%BF%B0%E6%9C%89%E9%99%90%E5%85%83/)中用到过`最小二乘法`, 矩阵的四个基本空间可以帮助我们更好的理解`最小二乘法`.

## 理解线性方程组

本文在实数域 $\mathbb{R}$ 内考虑(复数域 $\mathbb{C}$ 内是类似的). 假设存在 $m\times n$ 阶实矩阵 $\boldsymbol{A}$, 以及 ${\rm b}\in \mathbb{R}^m$. 则线性方程组 $\boldsymbol{A}{\rm x}={\rm b}$ 有解可以有一下两种解释:

- ${\rm b}$ 可表示为 $\boldsymbol{A}$ 的列向量的线性组合

$$
\begin{aligned}
{\rm b} &= x_1\alpha_1+\cdots+x_n\alpha_n \\\\ &=
\begin{bmatrix}
\alpha_1,\cdots,\alpha_n
\end{bmatrix}
\begin{bmatrix}
x_1 \\\\ \vdots \\\\ x_n
\end{bmatrix} \\\\ &= \boldsymbol{A}{\rm x}
\end{aligned}
$$

- ${\rm b}$ 属于线性变换 $\boldsymbol{A}$ 的值域(range),
   $${\rm b} \in C(\boldsymbol{A})$$
   其中, 列空间 $C(\boldsymbol{A})=\\{ \boldsymbol{A}{\rm x}|{\rm x} \in \mathbb{R}^n \\}$, ${\rm b}=\boldsymbol{A}{\rm x}$ 称为 ${\rm x}$ 经线性变换 $\boldsymbol{A}$ 的像(image).

当线性方程组 $\boldsymbol{A}{\rm x}={\rm b}$ 无解时, 我们希望找到最佳近似解 $\check{\rm x}$, 使得 ${\rm e}={\rm b} - \boldsymbol{A}\check{\rm x}$ 长度的平方最小

$$
\min_\check{\rm x} \lVert {\rm b} - \boldsymbol{A}\check{\rm x} \rVert^2
$$

以三维情形为例, 误差向量 ${\rm e}$ 与 $\boldsymbol{A}$ 的列空间 $C(\boldsymbol{A})$ 正交时, $\rm e$ 的长度的平方最小

![三维情形](https://imgkr.cn-bj.ufileos.com/390fed52-66a6-4c8f-80b1-366e381e2724.png)


为计算方便, 我们首先介绍 **正交投影矩阵**

## 正交投影矩阵

> 对于任意 ${\rm x} \in \, \mathbb{R}^n$, 右乘 $n$ 阶方阵 $\boldsymbol{P}$, 使得 $\boldsymbol{P}{\rm x} \in\, C(\boldsymbol{P})$, 满足 $\boldsymbol{P}^2=\boldsymbol{P}$, 则 $\boldsymbol{P}$ 称为`幂等矩阵`或`投影矩阵`.

$$
\boldsymbol{P}(\boldsymbol{P}{\rm x}) = \boldsymbol{P}^2({\rm x}) = \boldsymbol{P}{\rm x}
$$

投影「投影向量」得到的还是原来的「投影向量」.

> `正交投影矩阵` $\boldsymbol{P}$ 是不仅是`幂等矩阵`, 还是`对称矩阵`, 即
> $$ \boldsymbol{P} = \boldsymbol{P}^{\mathsf T} $$

![](https://imgkr.cn-bj.ufileos.com/b0b4f944-6b71-4b38-b89b-3bff3bfb6bc5.png)


证:如上图所示, 对任意 ${\rm x,y}\in\, \mathbb{R}^n$, 残差向量 ${\rm e}={\rm x} - \boldsymbol{P}{\rm x}$ 与 $C(\boldsymbol{P})$ 正交, 即

$$
\begin{aligned}
0&=({\rm x}-\boldsymbol{P}{\rm x})^{\mathsf T}(\boldsymbol{P}{\rm y}) \\\\[3pt]
&= [(\boldsymbol{I}-\boldsymbol{P}){\rm x}]^{\mathsf T}(\boldsymbol{P}{\rm y}) \\\\[3pt]
& = {\rm x}^{\mathsf T}(\boldsymbol{I}-\boldsymbol{P})^{\mathsf T}(\boldsymbol{P}{\rm y}) \\\\[3pt]
& = {\rm x}^{\mathsf T}(\boldsymbol{P}-\boldsymbol{P}^{\mathsf T}\boldsymbol{P}){\rm y}
\end{aligned}
$$

所以 $\boldsymbol{P}=\boldsymbol{P}^{\mathsf T}\boldsymbol{P}$, 因为 $\boldsymbol{P}^{\mathsf T}\boldsymbol{P}$ 对称, 所以 $\boldsymbol{P}$ 也是对称阵.

## 最小二乘解

向量 ${\rm b}$ 右乘正交投影矩阵 $\boldsymbol{P}$ 使得 ${\rm p}  = \boldsymbol{P}{\rm b}\in C(\boldsymbol{A})$. $\boldsymbol{P}$ 满足

$$
\begin{cases}
\boldsymbol{P}^2 = \boldsymbol{P} \\\\[3pt]
\boldsymbol{P} = \boldsymbol{P}^{\mathsf T}
\end{cases}
$$

寻找 $\check{\rm x}\in \mathbb{R}^n$, 右乘矩阵 $\boldsymbol{A}$, 使得 ${\rm p} = \boldsymbol{A}\check{\rm x}\in C(\boldsymbol{A})$

综合一下,

$$
\boldsymbol{P}({\rm b}-{\rm p})={\rm p} - {\rm p} = 0
$$

因此, $({\rm b}-{\rm p})\in N(\boldsymbol{P})$.

<br />

> $\boldsymbol{P}$ 和 $\boldsymbol{A}$ 的基本子空间满足:
>
> 1. $C(\boldsymbol{P})=C(\boldsymbol{A})$
> 2. $N(\boldsymbol{P})=N(\boldsymbol{A}^{\mathsf T})$

证:

- 
   - 证 $C(\boldsymbol{A})\subseteq C(\boldsymbol{P})$  
      假设 ${\rm x}\in C(\boldsymbol{A})$, 则 $\boldsymbol{P}{\rm x} = {\rm x}$, 所以 ${\rm x}\in C(\boldsymbol{P})$
   - 证 $C(\boldsymbol{P})\subseteq C(\boldsymbol{A})$  
      假设 ${\rm x}\in C(\boldsymbol{P})$, 则必存在 ${\rm y}$, 使得 ${\rm x}=\boldsymbol{P}{\rm y}$, 根据 $\boldsymbol{P}$ 的定义, ${\rm x}\in C(\boldsymbol{A})$  
	  
    所以 $C(\boldsymbol{P})=C(\boldsymbol{A})$.

- 根据秩-零化度定理, 成立
   $$
   \begin{cases}
   N(\boldsymbol{P})=C(\boldsymbol{P}^{\mathsf T})^{\bot} \\\\[3pt] N(\boldsymbol{A}^{\mathsf T})=C(\boldsymbol{A})^{\bot}
   \end{cases}
   $$
   结合
   $$
   \begin{cases}
   \boldsymbol{P}=\boldsymbol{P}^{\mathsf T} \\\\[3pt] C(\boldsymbol{P})=C(\boldsymbol{A})
   \end{cases}
   $$
   得到
   $$
   \begin{aligned}
   N(\boldsymbol{P})&=C(\boldsymbol{P}^{\mathsf T})^{\bot} \\\\&= C(\boldsymbol{P})^{\bot} = C(\boldsymbol{A})^{\bot} \\\\&= N(\boldsymbol{A}^{\mathsf T})
   \end{aligned}
   $$

<br />

因此, $({\rm b}-{\rm p})\in N(\boldsymbol{A}^{\mathsf T})=N(\boldsymbol{P})$, 即

$$
\boldsymbol{A}^{\mathsf T}({\rm b}-{\rm p}) = \boldsymbol{A}^{\mathsf T}({\rm b}-\boldsymbol{A}\check{\rm x}) = 0
$$

整理一下

$$
\boldsymbol{A}^{\mathsf T}\boldsymbol{A}\check{\rm x} = \boldsymbol{A}^{\mathsf T}{\rm b}
$$

上述方程的解 $\check{\rm x}$ 称为 $\boldsymbol{A}{\rm x} = {\rm b}$ 的`最小二乘解`.

### 列满秩

若矩阵 $\boldsymbol{A}$ 列满秩序($\rm{rank}\\, \boldsymbol{A} = n$), 则 $\boldsymbol{A}^{\mathsf T}\boldsymbol{A}$ 为非奇异方阵(可逆), 因为

$$
\rm{rank}\\, \boldsymbol{A} = \rm{rank}\\, \boldsymbol{A}^{\mathsf T}\boldsymbol{A}
$$

此时, 有唯一最小二乘解

$$
\check{\rm x} = (\boldsymbol{A}^{\mathsf T}\boldsymbol{A})^{-1}\boldsymbol{A}^{\mathsf T}{\rm b}
$$

最小平方误差投影向量

$$
{\rm p} = \boldsymbol{A}\check{\rm x} = \boldsymbol{A}(\boldsymbol{A}^{\mathsf T}\boldsymbol{A})^{-1}\boldsymbol{A}^{\mathsf T}{\rm b}
$$

正交投影矩阵

$$
\boldsymbol{P} = \boldsymbol{A}(\boldsymbol{A}^{\mathsf T}\boldsymbol{A})^{-1}\boldsymbol{A}^{\mathsf T}
$$

### 正交投影 $\boldsymbol{I}-\boldsymbol{P}$

$\boldsymbol{I}-\boldsymbol{P}$ 同样是一个正交投影矩阵, 因为

$$
\begin{aligned}
(\boldsymbol{I}-\boldsymbol{P})^2 &= \boldsymbol{I} - 2\boldsymbol{P} + \boldsymbol{P}^2 \\\\[3pt] &= \boldsymbol{I} -2\boldsymbol{P} + \boldsymbol{P}  \\\\[3pt] &= \boldsymbol{I} - \boldsymbol{P}
\end{aligned}
$$

并且有

$$
(\boldsymbol{I}-\boldsymbol{P}){\rm b} = {\rm b}  - \boldsymbol{P}{\rm b} = {\rm b} - {\rm p} = {\rm e}
$$

说明向量 ${\rm b}$ 经 $\boldsymbol{I}-\boldsymbol{P}$ 映射到 $e \in N(\boldsymbol{A}^{\mathsf T})$.

### 小结

由向量 ${\rm b }\in \mathbb{R}^m - C(\boldsymbol{A})$ 出发, ４个线性变换可总结至下图.

![](https://imgkr.cn-bj.ufileos.com/c90892a5-d7e5-4d69-9a87-e4d5dabfcd71.png)

注: 当今仅当 $\boldsymbol{A}$ 列满秩时, $\boldsymbol{A}^{\mathsf T}\boldsymbol{A}$ 可逆.

<br />
