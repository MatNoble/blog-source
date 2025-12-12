+++
title = "矩阵对角化那些事"
date = "2020-01-01T00:00:00+08:00"
description = "矩阵都可以对角化吗？"
categories = ["MATH","线代拾遗"]
tags = ["矩阵"]
keywords = ["矩阵","线性代数","matrix","linear algebra","diagonalization","MatNoble"]
toc = true
katex = true
series = ["mla"]
+++

## 所有矩阵都可以对角化吗?

前几天某好友同学, 参加了某度算法岗的面试, 问了很多问题, 其中就有这么一个基础数学的问题: ..所有矩阵都可以对角化吗?..

实际上, 我立马就可以想出一个反例:

$$
A =
\begin{bmatrix}
1 & 1 \\\\
0 & 1
\end{bmatrix}.
$$

A 矩阵不可以对角化, 因为:

- 求特征值  
  显然特征值为

$$
\lambda_1 = \lambda_2 =1.
$$

- 求对应的特征向量

$$
{\rm x}_1 = {\rm x}_2 = k\begin{bmatrix} 1 \\\\ 0 \end{bmatrix}.
$$

其特征向量线性相关, 即 $A$ 不可对角化, 所以 ..并不是所有的矩阵都可以对角化..

上述矩阵 $A$ 是最小的若尔当块.

---

## 矩阵对角化

### 矩阵对角化是什么?

> **可对角化矩阵** 是*线性代数* 和*矩阵论* 中重要的一类矩阵. 如果一个*方块矩阵* $A$ 相似于*对角矩阵*, 也就是说: 如果存在一个*可逆矩阵* $P$ 使得 $P^{-1}AP$ 是对角矩阵，则它就被称为**可对角化**的.

记 $n$ 阶方阵 $A$ 的特征值为(可能存在相同的特征指)

$$
{\rm \lambda }= \\\\{\lambda_1, \dots, \lambda_n \\\\}.
$$

以及**线性无关**的特征向量

$$
 S =  [ {\rm x}_1, \dots, {\rm x}_n ].
$$

其中 ${\rm x}_i$ 为列向量. 则

$$
\begin{align*}
A S &= [ A{\rm x}_1, \dots, A{\rm x}_n ]  \\\\[3pt]
& =  [\lambda_1{\rm x}_1, \dots, \lambda_n{\rm x}_n] \\\\[3pt]
& = [ {\rm x}_1, \dots, {\rm x}_n ] \left[ \begin{array}{cccc}
{\lambda_{1}} & {0} & {\cdots} & {0} \\\\
{0} & {\lambda_{2}} & {\cdots} & {0} \\\\
{\vdots} & {\vdots} & {\ddots} & {\vdots} \\\\
{0} & {0} & {\cdots} & {\lambda_{n}}
\end{array}  \right] \\\\[3pt]
& = S\Lambda.
\end{align*}
$$

根据上式, 即得到一种矩阵分解

$$
A = SAS^{-1}.
$$

---

### 可对角化条件

我们已经知道, 并不是所有的矩阵都可以对角化, 那么矩阵 ..可对角化需要满足哪些条件呢?..

- 特征向量  
   所有特征向量线性无关

- 特征值

  - 若矩阵的特征值各不相同, 则矩阵一定可以对角化;
  - 若矩阵存在某特征值的重数大于 1, 矩阵则*可能* 可以对角化.

- 空间  
  全空间 $V$ 可表示为各特征子空间的直和

课本上有一系列等价条件, 此处不再枚举.

实际上, **若尔当标准型理论**可以完美解释对角化问题, 此处也不多介绍, 之后会专门说一说.

---

### 有趣的应用

以下内容的前提条件都是: **矩阵满足可对角化**

#### 矩阵的幂 $A^n$

首先, 因为 $A = S\Lambda S^{-1}$, 所以

$$
A^n = S\Lambda S^{-1} \cdot S\Lambda S^{-1} \cdots S\Lambda S^{-1}=S\Lambda^{n}S^{-1}.
$$

其中,

$$
\Lambda^{n} =
\left[ \begin{array}{cccc}
{\lambda_{1}^n} & {0} & {\cdots} & {0} \\\\
{0} & {\lambda_{2}^n} & {\cdots} & {0} \\\\
{\vdots} & {\vdots} & {\ddots} & {\vdots} \\\\
{0} & {0} & {\cdots} & {\lambda_{n}^n}
\end{array}  \right]
$$

以上是**利用特征值计算矩阵幂**的方法, 而且可以得到: 矩阵的 $n$ 次方后, 特征值相应地变为 $n$ 次方, 而特征向量不变.

其次, 因为 $A{\rm x} = \lambda {\rm x} $, 所以

$$
A^2{\rm x}  = A \lambda {\rm x}  = \lambda A{\rm x}  = \lambda^2{\rm x} .
$$

递推可得 $$A^n{\rm x} = \lambda^n {\rm x}$$

由上式同样得到: 矩阵的 $n$ 次方后, 特征值相应地变为 $n$ 次方, 而特征向量保持不变.

#### 差分方程 $u_{k+1} = Au_k$

假设 $u_2 = Au_1$, 由递推 $u_{k+1} = Au_k$ 可得 $u_{k+1} = A^ku_1$, 那么, **已知 $n$ 阶方阵 $A, u_1$, 如何计算 $u_{k+1}$ ?**

因为已知 $A$ 可对角化, 所以矩阵 $A$ 的特征向量线性无关, $S=\\\\{{\rm x}_1, \dots, {\rm x}_n\\\\}$ 可构成全空间 $V$ 的一组基, 则 $u_1$ 可表示为:

$$
\begin{align*}
u_1 &= c_1{\rm x}_1 + c_2{\rm x}_2 + \cdots + c_n{\rm x}_n \\\\
&= S \begin{bmatrix} c_1 \\\\ c_2 \\\\ \vdots \\\\
c_n\end{bmatrix} = Sc.
\end{align*}
$$

继而,

$$
\begin{align*}
u_2 &= Au_1 = c_1A{\rm x}_1 + c_2A{\rm x}_2 + \cdots + c_nA{\rm x}_n \\\\
& = c_1\lambda_1{\rm x}_1 + c_2\lambda_2{\rm x}_2 + \cdots + c_n\lambda_n{\rm x}_n \\\\[3pt]
& = [ {\rm x}_1, \dots, {\rm x}_n ] \left[ \begin{array}{cccc}
{\lambda_{1}} & {0} & {\cdots} & {0} \\\\
{0} & {\lambda_{2}} & {\cdots} & {0} \\\\
{\vdots} & {\vdots} & {\ddots} & {\vdots} \\\\
{0} & {0} & {\cdots} & {\lambda_{n}}
\end{array}  \right] \begin{bmatrix} c_1 \\\\ c_2 \\\\  \vdots \\\\
c_n\end{bmatrix}\\\\
& = S\Lambda c.
\end{align*}
$$

另外, 上述结果同样由以下矩阵形式得到

$$
u_2 = Au_1 = S\Lambda S^{-1} Sc = S\Lambda c.
$$

递推, 就可以得到

$$
u_{k+1} = A^{k}u_1 = S\Lambda^kc. \qquad (*)
$$

该公式可用于以下 **生兔子问题**

##### 斐波那契数列 (Fibonacci sequence)

数列 $F = \{ 0, 1, 1,  2, 3, 5, \dots \}$, 即满足如下递推式 $$F_n = F_{n-1} + F_{n-2}.$$
试求 $F_n$ 的表达式.

设 $ u_1 = \begin{bmatrix} F_2 \\\\ F_1 \end{bmatrix} $, 则

$$
u_2 = \begin{bmatrix} F_3 \\\\ F_2 \end{bmatrix} = \begin{bmatrix} 1 & 1 \\\\ 1 & 0 \end{bmatrix}\begin{bmatrix} F_2 \\\\ F_1 \end{bmatrix} = Au_1.
$$

计算矩阵 $A$ 的特征值和特征向量:  
特征多项式

$$
\left| \lambda I - A \right| = \begin{vmatrix} \lambda -1 & -1 \\\\ -1 & \lambda \end{vmatrix} = \lambda^2 - \lambda - 1.
$$

从而得到

$$
\lambda_1 = \frac{1+\sqrt{5}}{2}
$$

对应的特征向量 ${\rm x}_1 = [\lambda_1, 1]^{\sf T}$.

$$
\lambda_2 = \frac{1-\sqrt{5}}{2}
$$

对应的特征向量 ${\rm x}_2 = [\lambda_2, 1]^{\sf T}$.

> 计算特征向量可由观察得到:
>
> $$
> \lambda I - A  = \begin{bmatrix} \lambda -1 & -1 \\\\ -1 & \lambda \end{bmatrix}\begin{bmatrix} a \\\\ b \end{bmatrix}  = 0
> $$
>
> 因为 $\lambda^2 - \lambda - 1 = 0$, 所以
>
> $$
> \begin{cases}
> a = \lambda,
> \\\\[3pt]
> b = 1.
> \end{cases}
> $$
>
> 所以 
>$$
>S = [{\rm x}_1, {\rm x}_2] = \begin{bmatrix} \lambda_1 & \lambda_2 \\\\ 1 & 1 \end{bmatrix}
>$$.

继而,

$$
\begin{align*}
u_1 = \begin{bmatrix} 1 \\\\ 0 \end{bmatrix} &= c_1{\rm x}_1 + c_2{\rm x}_2 \\\\
& = c_1\begin{bmatrix} \lambda_1 \\\\ 1 \end{bmatrix}+ c_2\begin{bmatrix} \lambda_2 \\\\ 1 \end{bmatrix}.
\end{align*}
$$

解得

$$
\begin{cases}
c_1 = \frac{1}{\lambda_1 - \lambda_2},
\\\\[3pt]
c_2 = -c_1.
\end{cases}
$$

带入 $(*)$ 式

$$
\begin{align*}
u_n = S\Lambda ^{n-1}c &=\begin{bmatrix} \lambda_1 & \lambda_2 \\\\ 1 & 1 \end{bmatrix}\begin{bmatrix} \lambda_1^{n-1} & 0 \\\\ 0 & \lambda_2^{n-1} \end{bmatrix} \begin{bmatrix} \frac{1}{\lambda_1 - \lambda_2} \\\\ -\frac{1}{\lambda_1 - \lambda_2} \end{bmatrix} \\\\[3pt]
& = \frac{1}{\lambda_1 - \lambda_2} \begin{bmatrix} \lambda_1^n - \lambda_2^n  \\\\ \lambda_1^{n-1} - \lambda_2^{n-1} \end{bmatrix}
\end{align*}
$$

所以,

$$
F_n = \frac{\lambda_1^{n-1} - \lambda_2^{n-1}}{\lambda_1 - \lambda_2}.
$$

#### 指数矩阵 $e^{At}$

> 你能证明 $e^{At} = Se^{\Lambda t}S^{-1}$ 吗?  
> 其中,
>
> $$
> e^{\Lambda t} =
> \left[\begin{array}{cccc}
> {\mathrm{e}^{\lambda_{1} \mathrm{t}}} & {0} & {\cdots} & {0} \\\\
> {0} & {\mathrm{e}^{\lambda_{2} \mathrm{t}}} & {\cdots} & {0} \\\\
> {\vdots} & {\vdots} & {\ddots} & {\vdots} \\\\
> {0} & {0} & {\cdots} & {\mathrm{e}^{\lambda_{n} \mathrm{t}}}
> \end{array}\right]
> $$
