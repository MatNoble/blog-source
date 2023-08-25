+++
title = "逼近向量"
description = "最小二乘法, 伽辽金法"
categories = ["MATH","简述有限元"]
tags = ["有限元","最小二乘法"]
keywords = ["有限元","FEM"]
date = "2019-12-12T00:00:00+08:00"
toc = true
mathjax = true
series = ["fem"]
aliases = ["/posts/fem1"]
+++

<img src="https://imgkr.cn-bj.ufileos.com/22c24e18-7683-4db2-9362-d4419452a8b3.png" title="简述有限元"  alt="简述有限元逼近向量" />

[有限元](https://en.wikipedia.org/wiki/Finite_element_method "有限元") **博大精深**, 开设本专题意在督促自己学习, 只能讲述一些最简单的有限元知识. 本主题将注重**数学推导**和有关**程序实现**(Matlab 为主, Python 为辅), 配以适当图示, 尽量做到**不晦涩**, 强调**趣味性**和**易读性**.

有限元主要用来解(偏)微分方程, 但实际某些思想在逼近向量或者函数时, 就存在了, 比如本节介绍的**正交性**．

## 逼近向量

_关键词: 正交性_

### 逼近二维向量

_Approximation of planar vectors_

假设 $xy$ 平面有向量 $f=[3, 5]$, 在向量 $[2, 1]$ 方向上, 寻找向量 $u$ 逼近 $f$

<img src="https://imgkr.cn-bj.ufileos.com/0582a191-4a39-47a2-a387-2c6954e94614.png" title="一维向量最佳逼近二维向量" width="400" alt="一维向量最佳逼近二维向量" />

令 $\psi_0=[2, 1]$, 则有 $xy$ 平面的子空间

$$V={\rm span} \\{\psi_0 \\}.$$

使得 $u = c_0 \psi_0 \in V$, 并且 $\psi_0$ 为 $V$ 的基.

令 $e=u-f$, 并且定义范数

$$\lVert e \rVert = (e, e)^{\frac{1}{2}}.$$

则原问题转化为: 寻找 $c_0$, 使得 $\lVert e \rVert$ 最小.

_这里实际上指定在向量二范数下的逼近_

#### 最小二乘法

_The least squares method_

定义函数

$$
\begin{align*}
E(c_0) &= (e, e) = (c_0\psi_0-f, c_0\psi_0-f)
\\\\[3pt]
&= c_0^2(\psi_0, \psi_0) - 2c_0(\psi_0, f) + (f, f).
\end{align*}
$$

当 $\frac{\partial E }{\partial c_0} = 0$ 时, $E$ 取极值, 即

\begin{equation}
\frac{\partial E}{\partial c_0} = 2c_0(\psi_0, \psi_0)-2(\psi_0, f)=0.
\label{eq:eq1}
\end{equation}

所以,
$$c_0=\frac{(\psi_0, f)}{(\psi_0, \psi_0)}.$$
改写式 (\ref{eq:eq1}), 得到,

$$
(f-c_0\psi_0, \psi_0)=(f-u,\psi_0)=0.
$$

即所谓的 **_正交性_**

$$
(e, \psi_0)=0.
$$

#### 伽辽金方法

_Galerkin method_

几何上看, 从第一张图中, 很容易得到: 当向量 $e$ 垂直于 $V$ 中任意向量时, $e$ 的二范数最小, 用数学语言描述如下:

对任意 $v=s, \psi_0\in V$, 满足

$$
\begin{align*}
(e, s\psi_0) &=(c_0\psi_0-v, s\psi_0) \\\\[3pt]
&= c_0s(\psi_0, \psi_0)-s(v, \psi_0) \\\\[3pt]
&= s\frac{(v, \psi_0)}{(\psi_0, \psi_0)}(\psi_0, \psi_0)-s(v,\psi_0)\\\\[3pt]
&=0
\end{align*}
$$

更进一步地

\begin{equation}
(e, v) = 0,\quad \forall v \in V. 
\label{eq:eq2}
\end{equation}

式 (\ref{eq:eq1}) 和式 (\ref{eq:eq2}) 本质上是一样的.

#### 补充

从线性代数的角度看, 是这样的 $\psi_0=[2, 1], f=[3, 5]$

$$\psi_0^{\rm T} c_0 = f^{\rm T}.$$

上式显然无解, 所以, 左右同乘 $\psi_0$

$$
\psi_0\psi_0^{\rm T}c_0 = \psi_0f^{\rm T}.
$$

所以

$$
c_0 = \frac{\psi_0f^{\rm T}}{\psi_0\psi_0^{\rm T}} =\frac{(\psi_0, f)}{(\psi_0, \psi_0)}.
$$

---

### 逼近一般向量

二维是容易比较直观的, 但当维数增加时, 尤其 $\dim \geq 4$, 一般人类是无法想象的 😂

假设 $f$ 是任意 $N+1$ 维向量, 我们在空间

$$
V = {\rm span}\\{ \psi_0, \cdots, \psi_N \\},
$$

中寻找 $u$ 逼近 $f$. 假设 $\psi_0, \cdots, \psi_N$ 线性无关, 即 $V$ 的维数是 $N+1$. 那么, 对于任意 $u \in V$ 可以被写成以下线性组合

$$
u = \sum_{j=0}^N c_j\psi_j, \quad c_j \in \mathbb{R}.
$$

#### 最小二乘法

_The least squares method_

现在确定 $u$ 的系数 $c_0, \cdots, c_N$ 使得距 $v$ 的距离(误差) $e=u-f$ 最小. 定义函数

$$
\begin{equation}
\begin{aligned}
E(c_0, \cdots, c_N) &= (e, e) = ( \sum_{j=0}^N c_j\psi_j-f , \sum_{j=0}^N c_j\psi_j-f) \\\\
&= \sum_{p=0}^N\sum_{q=0}^N c_pc_q(\psi_p, \psi_q) - 2\sum_{j=0}^Nc_j(\psi_j, f) + (f, f).
\end{aligned}
\label{eq:eq3}
\end{equation}
$$

当系函数满足

\begin{equation}
\frac{\partial E}{\partial c_i} = 0, \quad i = 0,\cdots, N.
\label{eq:eq4}
\end{equation}

**_接下来是重点_**

- 第一步

式 (\ref{eq:eq3}) 的第 2 项对 $c_i$ 求导

$$
\frac{\partial}{\partial c_i}(-2\sum_{j=0}^Nc_j(\psi_j, f))=-2c(\psi_i, f)
$$

- 第二步

式 (\ref{eq:eq3}) 的第 1 项对 $c_i$ 求导

因为,

$$
\frac{\partial}{\partial c_i} c_pc_q=
\begin{cases}
0, \quad & p  \neq i \wedge q \neq i\\\\
c_q, \quad & p = i \wedge q \neq i\\\\
c_p, \quad & p \neq i \wedge q =i \\\\
2c_i, \quad & p=q=i.
\end{cases}
$$

所以,

$$
\begin{multline*}
\frac{\partial}{\partial c_i}\sum_{p=0}^N\sum_{q=0}^Nc_pc_q(\psi_p, \psi_q) =\\\\
\sum_{p=0,p\neq i}^Nc_p(\psi_p, \psi_i) + \sum_{q=0,q\neq i}^Nc_q(\psi_q, \psi_i) + 2c_i(\psi_i, \psi_i).
\end{multline*}
$$

合并前两项至第三项, 即

$$
\frac{\partial}{\partial c_i}\sum_{p=0}^N\sum_{q=0}^Nc_pc_q(\psi_p, \psi_q) = 2\sum_{j=0}^Nc_i(\psi_j, \psi_i).
$$

结合 (\ref{eq:eq4}), 得到 **_线性方程组_**:

\begin{equation}
\sum_{j_0}^NA_{i, j}c_j = b_i, \quad i = 0, \cdots, N.
\end{equation}

其中

$$
A_{i, j} = (\psi_j, \psi_i) = (\psi_i, \psi_j) = A_{j, i},
$$

$$
b_i = (\psi_i, f).
$$

---

#### 伽辽金方法

_Galerkin method_

令 $e=u-f$, 寻找 $u$ 对于任意的 $v = \sum_{i=0}^N c_i\psi_i \in V$, 满足

$$
(e, \sum_{i=0}^N c_i\psi_i) = 0.
$$

上式可写成

$$
\sum_{i=0}^Nc_i(e, \psi_i) = 0.
$$

上式对于任意的 $c_0, \cdots, c_N$ 都成立, 所以

$$
(e,  \psi_i) = 0, \quad i = 0, \cdots, N.
$$

上式依旧可以形成一个如同式 (5) 的线性方程组

对于 $i=0, \cdots, N$, 有

$$
({\sum_{j=0}^N} c_j\psi_j - f, \psi_i) = {\sum_{j=0}^N} (\psi_j, \psi_i)c_j - (f, \psi_i) = 0.
$$

即

$$
\sum_{j=0}^N (\psi_j, \psi_i)c_j = (f, \psi_i), \quad i=0, \cdots, N.
$$

### 小结

对于逼近向量问题, 伽辽金法(Galerkin method)和最小二乘法(The least squares method)等同.

## 预告

下次讨论逼近函数问题.
