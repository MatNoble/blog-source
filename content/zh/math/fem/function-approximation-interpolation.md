+++
title = "有限元简述(4)：插值法与拉格朗日多项式"
description = "有限元简述系列第四篇。系统总结最小二乘法与伽辽金法，并正式引入插值法。详细讲解拉格朗日多项式（Lagrange polynomials）在有限元插值中的核心作用，及其如何简化线性方程组的求解。"
categories = ["MATH","简述有限元"]
tags = ["有限元"]
keywords = ["有限元","FEM", "插值法", "拉格朗日多项式", "逼近函数", "数值分析"]
date = "2019-12-28T00:00:00+08:00"
lastmod = "2025-12-13T19:42:42+08:00"
toc = true
mathjax = true
series = ["fem"]
+++

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/d6b2385b-358d-42a3-9d01-5eef5d9ab76c.jpeg" title="简述有限元: 逼近函数 III" >}}

## 前情回顾

### 引子

我们用[两次推送]({{< relref "function-approximation-intro.md" >}}), 讨论了用[最小二乘法](https://zh.wikipedia.org/wiki/最小二乘法 "最小二乘法")和[伽辽金法](https://zh.wikipedia.org/wiki/伽辽金法 "伽辽金法")逼近函数, 二者出发点不同, 但最终都是化无限维为有限维问题来求解, 即将寻找最优逼近函数问题化为解线性方程组.

### 复盘

> **逼近函数问题:**  
> 对于任意函数 $f(x)$, 设法在函数空间 $V={\rm span}\{\psi_0(x),\dots,\psi_N(x)\}$ 中找到最佳逼近函数 $u(x)$.

无论是**最小二乘法**, 还是**伽辽金法**, 在面对逼近函数的问题时, 与逼近向量时的想法一样: 设法使的 $u(x)$ 和 $f(x)$ 之间的"距离"最小.

用数学语言就是: $\lVert u-f \rVert$ 在某种范数下最小.

- 逼近向量  
  用向量內积表示

$$
\begin{equation}
\lVert u-f \rVert = (u-f, u-f).
\label{eq:eq1}
\end{equation}
$$

- 逼近函数  
  用函数积分表示

$$
\begin{equation}
\lVert u-f \rVert = \int_{\Omega}(u-f)^2{\rm d}x .
\label{eq:eq2}
\end{equation}
$$

确定"距离"这一重要概念后, 就是常规的数学操作了. $u(x)$ 可以写成基函数的线性组合,

$$
\begin{equation}
u(x) = c_0\psi_0(x) + \cdots + c_N\psi_N(x).
\label{eq:eq3}
\end{equation}
$$

将式 (\ref{eq:eq3}) 分别代入式 (\ref{eq:eq1})((\ref{eq:eq2})), 再分别利用分析手段(求导)和"正交性"就可以得到逼近向量(函数)的最小二乘法和伽辽金法.

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/3553cebe-720f-4b3b-beab-f698ed5c7c4a.png" title="简述有限元: 理解正交性" width="350" >}}

### 小结

结合[第一期推送]({{< relref "vector-approximation.md" >}}), 可以得到: **在逼近向量和逼近函数问题时, 最小二乘法和伽辽金法是等同的.**

## 熟悉的插值法

$\color{gray}{\textit{The interpolation method}}$

### 综述

插值法是数值分析课中必讲的内容, 出现在最小二乘法之前的方法, 基本而且重要. 下面来回顾总结一下插值法:

插值法的出发点与最小二乘法和伽辽金法都不同, 它要求逼近函数 $u(x)$ 在有限个点上与原函数 $f(x)$ 相同, 即

$$
u\left(x_{i}\right)=\sum_{j \in \mathcal{I}_{s}} c_{j} \psi_{j}\left(x_{i}\right)=f\left(x_{i}\right), \quad i \in \mathcal{I}_{s}.
$$

这样, 自然也形成了一个有 $N+1$ 个未知量 $c_j$ 的线性方程组

\begin{equation}
\sum*{j \in \mathcal{I}*{s}} A*{i, j} c*{j}=b*{i}, \quad i \in \mathcal{I}*{s}.
\label{eq:eq4}
\end{equation}

其中

$$
\begin{align*}
A_{ij} &= \psi_j(x_i),
\\\\[3pt]
b_i &= f(x_i).
\end{align*}
$$

与之前方法不同的是, 系数矩阵 $A$ 不再对称, 因为 $\psi_j(x_i) \neq \psi_i(x_j)$.

### 两个例题

> **例题 1:**  
> 来于线性代数, 平面上有 $n+1$ 个点(两两不同), 问: 是否存在一个 $n$ 次多项式函数, 过这 $n+1$ 个点? 若存在, 请给出.

解: 存在. 设 $n$ 次多项式函数为

$$
f(x) = a_nx^n+\cdots+a_1x + a_0.
$$

将 $n+1$ 个点的坐标 $(x_j, y_j)$ 依次代入上式, 得

$$
\begin{cases}
a_nx_n^n+\cdots+a_1x_n + a_0 = y_n,\\\\[3pt]
a_nx_{n-1}^n+\cdots+a_1x_{n-1} + a_0 = y_{n-1}, \\\\[3pt]
\hspace{5em} \vdots \\\\[3pt]
a_nx_0^n+\cdots+a_1x_0 + a_0 = y_0.
\end{cases}
$$

$$
\begin{bmatrix}
x_n^n & \cdots & x_n & 1\\\\
x_{n-1}^{n} & \cdots & x_{n-1} & 1\\\\
&\vdots&&\\\\
x_0^n & \cdots & x_0 & 1
\end{bmatrix}
\begin{bmatrix}
a_n\\\\ \vdots \\\\ a_1 \\\\ a_0
\end{bmatrix} =
\begin{bmatrix}
y_n\\\\ y_{n-1} \\\\ \vdots  \\\\ y_0
\end{bmatrix}.
$$

系数矩阵非奇异(系数矩阵是范德蒙行列式), 所以线性方程组有解. 即存在一个 $n$ 次多项式函数, 过这 $n+1$ 个点.

> **例题 2**  
> 设函数 $f(x)=10(x-1)^2-1$, 在线性函数空间中找到最佳逼近函数 $u(x)$, 求解域 $\Omega = [1, 2]$, 两个真解点为: $x_0 = 1 + \frac{1}{3}, x_1 = 1+ \frac{2}{3}$.

解: 已知 $\psi_0 = 1, \psi_1 = x$, 因此利用式 (\ref{eq:eq4}), 得

$$
A = \begin{bmatrix} 1 & \frac{4}{3}\\\\ 1& \frac{5}{3}\end{bmatrix}, \quad b = \begin{bmatrix} \frac{1}{9} \\\\ \frac{31}{9}\end{bmatrix}.
$$

解得

$$
c = \begin{bmatrix} -\frac{119}{9} \\\\ 10 \end{bmatrix}.
$$

所以,

$$
u(x) = -\frac{119}{9} + 10x.
$$

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/a6e33cb8-55bd-485a-818a-fae690ddcd86.png" title="简述有限元: 线性插值" width="350" >}}

### 拉格朗日多项式

$\color{gray}{\textit{Lagrange polynomials}}$

[上一次推送]({{< relref "function-approximation-orthogonal-basis.md" >}})中, 讨论了基函数正交(傅立叶级数做基函数)的好处, 在插值法中, 拉格朗日插值多项式可以起到相同的作用

$$
\psi_{i}(x)=\prod_{j=0, j \neq i}^{N} \frac{x-x_{j}}{x_{i}-x_{j}}=\frac{x-x_{0}}{x_{i}-x_{0}} \cdots \frac{x-x_{i-1}}{x_{i}-x_{i-1}} \frac{x-x_{i+1}}{x_{i}-x_{i+1}} \cdots \frac{x-x_{N}}{x_{i}-x_{N}}, \quad \textit{for}\ i \in\, \cal{I}_s.
$$

观察上式可知, 每一个 $\psi_i(x)$ 都是一个 $N$ 次多项式, 而且满足

$$
\psi_{i}\left(x_{s}\right)=\delta_{i s}, \quad \delta_{i s}
=\left\{\begin{array}{ll}
{1,} & {i=s} \\\\
{0,} & {i \neq s}
\end{array}\right.
$$

其中, $x_s$ 是插值点. 由以上性质可得

$$
A_{ij}=
\begin{cases}
0\quad  \textit{for} \ i \neq j,
\\\\[3pt]
1\quad  \textit{for} \ i = j.
\end{cases}
$$

所以, 线性方程组求解变得相当简单

$$
c_{i}=f\left(x_{i}\right), \quad i \in \mathcal{I}_{s}.
$$

进一步地,

$$
u(x)=\sum_{j \in I_{s}} f\left(x_{i}\right) \psi_{i}(x).
$$

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/a2dc4d34-a878-40ff-8bac-97ebcc531caa.png" title="简述有限元: 两个节点" width="75%" >}}
{{< imgcap src="https://imgkr.cn-bj.ufileos.com/ae88936e-1bb5-415e-bdfd-5898c59b1739.png" title="简述有限元: 三个节点" width="75%" >}}
{{< imgcap src="https://imgkr.cn-bj.ufileos.com/43ec6243-a2bb-404c-a438-781b9246f603.png" title="简述有限元: 四个节点" width="75%" >}}

_拉格朗日多项式在有限元方法中依旧很重要._

---

## 编程实例

1. 利用拉格朗日多项式做基函数编程实现例题 2.

2. 假设 $f(x)=\sin(2\pi x), \Omega=[0, 1]$, 利用拉格朗日多项式做基函数, 分别用最小二乘法和插值法寻找最佳逼近函数 $u(x)$.  
   _注: 可假设基函数个数为 3 个, 拉格朗日点为等距节点_

---

## 下节预告

开始讨论[有限元]({{< relref "finite-element-basis-functions.md" >}}) 🤘
