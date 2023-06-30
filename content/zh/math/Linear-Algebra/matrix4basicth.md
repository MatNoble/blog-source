+++
title = "矩阵的四个基本空间, 不了解下吗?"
date = "2020-01-18T06:21:00+00:00"
categories = ["MATH","线代拾遗"]
tags = ["线代基本定理"]
keywords = ["matrix","linear algebra","Rank-Nullity Theorem","MatNoble"]
toc = true
mathjax = true
series = ["mla"]
aliases = ["/posts/matrix4basicth"]
+++

秩-零化度定理告诉我们: $m\times n$ 阶矩阵 $A$ 的零空间(Nullspace) $N(A)$ 和列空间(Column sapce) $C(A)$ 的关系:

$$
n = \dim N(A) + \dim C(A)
$$

> 本次依据`秩-零化度定理`, 介绍`四个基本空间`, 并证明它们的`正交性`关系, 最后, 给出一道`经典例题`.

## 四个基本空间

将矩阵 $A$ 行列互换, 称为 $A$ 的转置, 记为 $A^{\mathsf T}$. 则对应的: $C(A^{\mathsf T})$ 表示 $A$ 的行空间(Row space), 对应地将 $N(A^{\mathsf T})$ 称为 $A$ 的左零空间(Left nullspace).

首先, 因为`行秩 = 列秩`, 所以

$$
n = \dim N(A) + \dim C(A^{\mathsf T})
$$

然后, `转置`并参考`秩-零化度定理`

$$
m = \dim N(A^{\mathsf T}) + \dim C(A)
$$

<br />

综上, 对于 $m \times n$ 阶矩阵 $A$ 有:

| 空间                                     | 符号               | 矩阵含义            | 空间维数 | 　向量维数 |
| ---------------------------------------- | ------------------ | :-------------------: | :--------: | :----------: |
| 行空间(Row Space)                        | $C(A^{\mathsf T})$ | $A^{\mathsf T}y$    | $r$      | $n$        |
| 列空间(Column Space)                     | $C(A)$             | $Ax$                | $r$      | $m$        |
| 零空间(Nullspace) 或核空间(Kernel Space) | $N(A)$               | $Ax=0$              | $n-r$    | $n$        |
| 左零空间(Left Nullspace)                 | $N(A^{\mathsf T})$ | $ A^{\mathsf T}y=0$ | $m-r$    | $m$        |


## 正交关系

实际上, 行空间和零空间在 $\mathbb{R}^n$ 中是`直和`关系, 相应的, 列空间和左零空间在 $\mathbb{R}^m$ 中是`直和`关系, 如下图所示

![四个基本空间正交关系](https://imgkr.cn-bj.ufileos.com/18ff04ba-3eac-45a2-8a67-e4b8cde0bd2b.png)

下面, 证明这两个直和(正交)关系

## 简要证明

> 1.  $\mathbb{R}^n = C(A^{\mathsf T}) \oplus N(A)$

- 对 $\forall\, x_1 \in C(A^{\mathsf T}), \forall \, x_2 \in N(A)$, 成立 $x=x_1+x_2 \in \mathbb{R}^n$
- 假设 $x \in C(A^{\mathsf T}) \cap N(A)$, 即

$$
\begin{cases}
Ax = 0 & \forall \, x \in N(A)
\\\\[3pt]
A^{\mathsf T}y = x & \exists\, y \in C(A^{\mathsf T})
\end{cases}
$$

联立即得

$$
AA^{\mathsf T}y = 0
$$

左右同乘 $y^{\mathsf T}$

$$
y^{\mathsf T}AA^{\mathsf T}y = (A^{\mathsf T}y)^{\mathsf T}A^{\mathsf T}y=0
$$

得到

$$
x = A^{\mathsf T}y = 0
$$

即

$$
 C(A^{\mathsf T}) \cap N(A) = \{0\}
$$

结论得证.

   <br />
   
>2. $\mathbb{R}^m = C(A) \oplus N(A^{\mathsf T})$

记 $B=A^{\mathsf T}$, 利用证明 1

$$
\mathbb{R}^m = C(B^{\mathsf T}) \oplus N(B)
$$

将 $B^{\mathsf T} = (A^{\mathsf T})^{\mathsf T} = A$ 带入上式, 即证.

## 经典例题

> 假设存在 $m\times n$ 阶矩阵 $A$, 给定一个向量 $b\in\,\mathbb{R}^m$, 且已知 $Ax =  b$ 有解. 试证
>
> 1.  存在唯一 $y \in\, C(A^{\mathsf Ｔ})$, 使得 $Ay = b$ 成立.
> 2.  所有解中, 行空间 $C(A^{\mathsf T})$ 中的解 $y$ 的长度最小.
> 3.  假设 $A$ 行满秩(${\rm rank}(A) = m$), 求 $y \in \, C(A^{\mathsf T})$ (用 $A, b$ 表示)

证:

> 1 . 存在唯一 $y \in\, C(A^{\mathsf Ｔ})$, 使得 $Ay = b$ 成立.

- 存在性  
     假设 $x \in \mathbb{R}^n$ 满足 $Ax=b$, 因为 $C(A^{\mathsf T})$ 和 $N(A)$ 是直和关系, 所以 $x$ 可`唯一`地分解为
     $$
     x = y + z
     $$
     其中, $y\in\, C(A^{\mathsf T}), z \in N(A)$, 那么
     $$\begin{align*} Ax &=  A(y+z) \\\\[3pt]&= Ay + Az \\\\[3pt]&= Ay = b \end{align*}$$
     成立.
	 
- 唯一性  
     假设 $y^{\prime} \in\, C(A^{\mathsf T})$, 也满足 $Ay^{\prime} = b$. 则 $$ Ay - Ay^{\prime} = A(y-y^{\prime}) =0 $$
     即 $y-y^{\prime} \in\, N(A)$, 又因为 $y-y^{\prime} \in \, C(A^{\mathsf T})$, 所以 $$ y-y^{\prime} = 0 $$
     即 $y = y^{\prime}$.
	 
<br />
     
> 2 . 所有解中, 行空间 $C(A^{\mathsf T})$ 中的解 $y$ 的长度最小. 

联系问 1, 解 $x = y + z$, 其中 $y\in\, C(A^{\mathsf T}), z \in N(A)$. 因为二者`正交`, 所以

   $$\begin{align*} \lVert x \rVert^2 &= (y+z)^{\mathsf T}(y+z) \\\\[3pt]&=  \lVert y \rVert^2  + \lVert z \rVert^2 \geq  \lVert y \rVert^2\end{align*}$$

   $z = 0$ 时, 等号成立.  
   
<br />
   
> 3 . 假设 $A$ 行满秩(${\rm rank}(A) = m$), 求 $y \in \, C(A^{\mathsf T})$ (用 $A, b$ 表示)

因为 $y \in \,  C(A^{\mathsf T})$, 则 $y$ 可表示为 $y=A^{\mathsf T}x$.则 $$ Ay = AA^{\mathsf T} x = b $$
   若 $AA^{\mathsf T}$ 满秩, 则 $$ x = (AA^{\mathsf T})^{-1}b $$
   可得到 $$y=A^{\mathsf T}(AA^{\mathsf T})^{-1}b$$
   下面证明 ${\rm rank} A ={\rm rank } AA^{\mathsf T}$, 只需证明
   $$ \begin{cases}Ax =0 \\\\[3pt] A^{\mathsf T}Ax=0 \end{cases}$$
   同解. 显然, $Ax = 0 \Longrightarrow A^{\mathsf T}Ax=0$.  
   <br />
   若满足 $A^{\mathsf T}Ax=0$, 左右同乘 $x^{\mathsf T}$

   $$
   x^{\mathsf T}A^{\mathsf T}Ax=(Ax)^{\mathsf T}Ax=0
   $$

   即得 $Ax = 0$. 所以 ${\rm rank} A = {\rm rank } A^{\mathsf T}A={\rm rank } AA^{\mathsf T}$.

## 总结

从空间的角度理解线代才是掌握线代的不二法门.

矩阵的四个基本空间是很重要的概念, 可以帮助我们从`空间`的角度理解`线性方程组`解的结构, 甚至是`最小二乘法`.

由于篇幅原因, 下次介绍`最小二乘法`($A^{\mathsf T}Ax = A^{\mathsf T}b$).

<br />
