+++
title = "逼近函数 I"
description = "最小二乘法, 伽辽金法"
categories = ["MATH","简述有限元"]
tags = ["有限元"]
keywords = ["有限元","FEM"]
date = "2019-12-24T00:00:00+08:00"
toc = true
katex = true
series = ["fem"]
aliases = ["/posts/fem2"]
+++

<img src="https://imgkr.cn-bj.ufileos.com/2183d598-1f26-450f-b94d-daabdfab77d6.jpg" title="简述有限元: 逼近函数 I"  alt="简述有限元逼近函数" />

<!--more-->

# 逼近函数 I

## 前情回顾

第一期讨论了逼近向量, 利用 `最小二乘法` 和 `伽辽金法` 推到出相同的结果. 理解..正交性..是上一期最重要的目的.

$$
(u-f, v) = (e, v)=0, \quad \forall\, v \in V.
$$

### 补充一道 3 维例题

为方便计算, 假设 $A$ 为坐标原点, $\overrightarrow{AB}=[1, 3, 0]^{\rm T}$, $\overrightarrow{AC}=[4, 0, 0]^{\rm T}$, $\overrightarrow{AF}=[5, 6, 5]^{\rm T}$, 在由向量 $\overrightarrow{AB}, \overrightarrow{AC}$ 确定的平面内寻找向量 $u$, 使其最佳逼近于 $\overrightarrow{AF}$.


<img src="https://imgkr.cn-bj.ufileos.com/1ffd7797-070a-47d0-bc4b-6716b4267208.png" title="二维空间逼近三维空间向量" width="400" alt="二维空间逼近三维空间向量" />

**记:**

$$
\left\\{
\begin{aligned}
\psi_1 = \overrightarrow{AB}, \\\\[3pt]
\psi_2 = \overrightarrow{AC}, \\\\[3pt]
f = \overrightarrow{AF}.
\end{aligned}
\right.
$$

以及 $$u=c_1\psi_1  + c_2\psi_2.$$

- $\color{red}{\bf 最小二乘法}$

$$
\begin{cases}
A_{11} = (\psi_1, \psi_1) = 10,
\\\\[3pt]
A_{12} = (\psi_2, \psi_1) = 4,
\\\\[3pt]
A_{21} = A_{12} = 4,
\\\\[3pt]
A_{22} = (\psi_2, \psi_2) = 16.
\end{cases}
$$

所以矩阵 

$$A=\begin{bmatrix} 10 & 4 \\\\ 4 & 16 \end{bmatrix}.$$

$$
\begin{cases}
b_{1} = (\psi_1, f) = 23,
\\\\
b_{2} = (\psi_2, f) = 20.
\end{cases}
$$

所以 

$$b=\begin{bmatrix} 23 \\\\ 20 \end{bmatrix}$$

解 

$$A\begin{bmatrix} c_1 \\\\ c_2 \end{bmatrix}=b$$ 得

$$
\begin{bmatrix} c_1 \\\\ c_2 \end{bmatrix}=\begin{bmatrix} 2 \\\\ 3/4 \end{bmatrix}.
$$

最后, 

$$u=c_1\psi_1 + c_2\psi_2 = [5 , 6 , 0 ]^{\mathsf T}.$$

<img src="https://imgkr.cn-bj.ufileos.com/3553cebe-720f-4b3b-beab-f698ed5c7c4a.png" title="二维空间最佳逼近三维空间向量" width="400" alt="二维空间最佳逼近三维空间向量" />

_也许聪明的同学已经看出, 哪儿用这么麻烦, $u$ 的横纵坐标不就是 $f$ 的横纵坐标嘛, $z$ 取 $0$ 就好了. 的确是这样, 没有错. 这个例子, 用上面的做法的确是大材小用了, 但上面的算法过程具有..一般性.., 更复杂的情况, 乃至高维问题, 都是适用的._

- <b style="color:red">伽辽金法</b>

从 `正交性` 出发, 推导出与上面相同的矩阵.

- <b style="color:red">基于线性方程组求解</b>

设线性方程组如下

\begin{equation}
\begin{bmatrix}
\psi_1 & \psi_2
\end{bmatrix}
\begin{bmatrix}
c_1 \\\\ c_2
\end{bmatrix} =
f.
\label{eq:eq1}
\end{equation}

即

$$
\begin{bmatrix}
1&4\\\\3&0\\\\0&0
\end{bmatrix}
\begin{bmatrix}
c_1 \\\\ c_2
\end{bmatrix} =
\begin{bmatrix}
5 \\\\ 6 \\\\ 5
\end{bmatrix}.
$$

上式显然无解, 式 (1) 左右同乘 

$$\begin{bmatrix}
\psi_1^{\rm T} \\\\ \psi_2^{\rm T}
\end{bmatrix}$$ 

得

\begin{equation}
\begin{bmatrix}
\psi_1^{\rm T}\psi_1 & \psi_1^{\rm T}\psi_2 \\\\
\psi_2^{\rm T}\psi_1 & \psi_2^{\rm T}\psi_2
\end{bmatrix}
\begin{bmatrix}
c_1 \\\\ c_2
\end{bmatrix} =
\begin{bmatrix}
\psi_1^{\rm T}f \\\\ \psi_2^{\rm T}f
\end{bmatrix}.
\label{eq:eq2}
\end{equation}

即

$$
\begin{bmatrix}
1&3 & 0\\\\
4&0&0
\end{bmatrix}
\begin{bmatrix}
1&4\\\\
3&0\\\\
0&0
\end{bmatrix}
\begin{bmatrix}
c_1 \\\\ c_2
\end{bmatrix} =
\begin{bmatrix}
1&3 & 0\\\\
4&0&0
\end{bmatrix}
\begin{bmatrix}
5 \\\\ 6 \\\\ 5
\end{bmatrix}.
$$

进一步,

$$
\begin{bmatrix} 10 & 4 \\\\ 4 & 16 \end{bmatrix}\begin{bmatrix}
c_1 \\\\ c_2
\end{bmatrix} =
\begin{bmatrix} 23 \\\\ 20 \end{bmatrix}.
$$

得到与之前一样的结果. 该解在线性代数上称为`最小二乘解`.

### "复盘"逼近向量

想一想, 上一次的讨论中, 对于任意给定的向量 $f$, 如何在向量空间 $V$ 中确定最佳逼近向量 $u$ ?

_**令 $d = \lVert e\rVert=\lVert { u}-{f}\rVert$ 取最小的 ${ u}$ 即为所求.**_

其中, 首要工作是用 ..向量二范数.. 来规定`..距离..`. $n$ 维向量 ${ a}$ 的二范数定义为:

$$
\lVert {\mit a} \rVert_2 = \sqrt{a_1^2+a_2^2 + \cdots+a_n^2}.
$$

其次, 空间 $\mit V$ 中任意向量 $u$ 用其一组基的线性组合表示:

$$
u = \sum_{j=0}^N c_j\psi_j, \quad \forall \, u \in V.
$$

`..最小二乘法..` 通过建立范数平方函数 $E(c_0, \cdots, c_N)$, 使用`分析手段(求导)`, 确定基的系数 $c_j, j=0, 1, \dots, N$, 从而确定最佳逼近向量.

$$
\begin{align*}
E(c_0, \cdots, c_N) = (e, e) &= ( \sum_{j=0}^N c_j\psi_j-f , \sum_{j=0}^N c_j\psi_j-f) \\\\
& = \sum_{p=0}^N \sum_{q=0}^N c_p c_q \psi_p \psi_q -2\sum_{j=0}^N c_j(\psi_j, f) + (f, f).
\end{align*}
$$

而 `..伽辽金法..` 从..正交性..出发

$$
(e, \sum_{j=0}^N c_j\psi_j) = 0.
$$

经变换, 得到

$$
(e, \psi_j) = 0, \quad j=0, 1, \dots, N.
$$

二者的共同点是: **最终都会归结到解一个线性方程组, 来确定基的系数**.

$$
\begin{align*}
[A_{ij}] &= (\psi_j, \psi_i),
\\\\[3pt]
[b_i] &= (\psi_i, f).
\end{align*}
$$

其中, 矩阵 $A$ 对称, 主元恒正.

<i><b style="color:gray">若复盘不成功, 建议看一下前一章</b></i>

---

## 逼近函数
<i><b style="color:gray">Approximation of functions</b></i>

熟悉上面逼近向量的部分, 逼近函数就会简单很多了.

假设函数空间 $V$ 由一组基 $\psi_0, \psi_1, \cdots, \psi_N$ 张成的

$$
V=\rm span \\{\psi_0, \psi_1, \cdots, \psi_N \\}.
$$

对于任意 $u \in V$ 可表示成这组基的线性组合

$$
u = \sum_{j \in {\cal{I}}_s} c_j \psi_j.
$$

指标集 ${\mathcal{I}}_s$ 定义为 ${\mathcal{I}}_s = \\\\{0, 1, \cdots , N\\\\}$.

下面首先讨论单变量函数, 之后在讨论多变量的情况.

### 最小二乘法
<i><b style="color:gray">The least squares method</b></i>

给定一个函数 $f(x)$, 如何在函数空间 $V$ 中找到它的最佳逼近函数 $u$ ? 参考逼近向量时的方案, 是否可以选择使得(距离) $\lVert e \rVert = \lVert u-f \rVert$ 最小的 $u$ 呢 ? 但是, 向量是有限维的, 而函数是无限维的, 所以, 首要任务还是需要定义任意两个函数间的"距离".

接下来通过用积分定义的內积来诱导此范数

<i> <b style="color:gray">积分使无线维转化为有限维</b> </i>

$$
(f, g) = \int_\Omega f(x)g(x) {\rm d} x.
$$

所以

$$
\lVert e \rVert^2 = (e, e)=\int_\Omega e^2(x) {\rm d} x.
$$

接下来就是熟悉的部分了, 定义距离范数的平方

$$
E = \lVert e \rVert =(\sum_{j \in {\cal{I}}_s} c_j \psi_{j(x)}-f(x), \sum_{j \in {\cal{I}}_s} c_j \psi_j(x)-f(x)).
$$

$E$ 是关于 $\{c_j\}_{j \in {\mathcal{I}_s} }$ 的函数, 进一步化简

$$
\begin{align*}
E(c_0, \cdots, c_N) & =  (\sum_{j \in {\cal{I}}_s} c_j \psi_{j(x)}-f(x), \sum_{j \in {\cal{I}}_s} c_j \psi_j(x)-f(x))\\\\[3pt]
& = \sum_{p \in {\cal{I}}_s} \sum_{q \in {\cal{I}}_s} c_p c_q\psi_p(x)\psi_{q(x)} - 2\sum_{j \in {\cal{I}}_s} c_j (\psi_j(x), f) + (f(x), f(x)).
\end{align*}
$$

做跟上一节同样的求导运算, 就可以得到如下线性方程组系统

$$
\begin{align}
[A_{ij}]&=(\psi_j, \psi_i),
\label{eq:eq3}
\\\\[3pt]
[b_i] &= (\psi_i, f).
\label{eq:eq4}
\end{align}
$$

### 伽辽金方法
<i> <b style="color:gray">The  Galerkin method</b> </i>

伽辽金方法依旧从 <b style="color:red">正交性</b> 出发

\begin{equation}
(e, v) = 0, \quad \forall\ v \in V.
\label{eq:eq5}
\end{equation}

将 $v=\sum_{i \in \mathcal{I}_s} c_i\psi_i(x)$ 带入上式 (\ref{eq:eq5}), 可化简为

$$
(e, \psi_i) = 0, \quad i \in \mathcal{I}_s.
$$

将 $e$ 还原为 $ \sum_{j \in \mathcal{I}_s} c_j\psi_j(x) - f(x)$ 即可以得到线性方程组系统式 (\ref{eq:eq3}) 和式 (\ref{eq:eq4}).

### 例题 1

给定一个二次(抛物型)函数 $f(x) = 10(x-1)^2-1, x \in \Omega=[1,2]$, 在线性函数空间 $V$ 中寻找最佳逼近向量 $u$

$$
V={\rm span}\\{1, x\\}.
$$

<b>解:</b> 设 $\psi_0 = 1, \psi_1 = x$, 则

$$
u = c_0\psi_0(x) + c_1\psi_1(x) = c_0 + c_1x.
$$

所以系数矩阵

$$
\begin{align*}
& A_{11} = (\psi_0, \psi_0) = \int_1^2 1\cdot1{\rm d}x = 1,\\\\[3pt]
& A_{12} = (\psi_1, \psi_0) = \int_1^2 x \cdot 1 {\rm d}x = \frac{3}{2},\\\\[3pt]
& A_{21} = A_{12} = \frac{3}{2},\\\\[3pt]
& A_{22} = (\psi_1, \psi_1) = \int_1^2 x \cdot x {\rm d}x = \frac{7}{3}.
\end{align*}
$$

所有系数矩阵是 

$$
A = \begin{bmatrix} 1 & \frac{3}{2} \\\\ \frac{3}{2} & \frac{7}{3} \end{bmatrix}
$$

右端项为:

$$
\begin{align*}
& b_{1} = (\psi_0, f) = \int_1^2 1\cdot (10(x-1)^2-1){\rm d}x = \frac{7}{3},\\\\[3pt]
& b_{2} = (\psi_1, f) = \int_1^2 x \cdot (10(x-1)^2-1) {\rm d}x = \frac{13}{3}.
\end{align*}
$$

所以 $b = [\frac{7}{3},  \frac{13}{3}]^{\mathsf T}$, 解线性方程组就可以得到

$$
c = \begin{bmatrix} −38/3 \\\\ 10\end{bmatrix}.
$$

因此

$$
u = 10x-\frac{38}{3}.
$$

---

## 编程题目

本小节是一个小作业 ✍

根据上述最小二乘法, 编程实现例题 1, 要求程序有一定的通用性.

## 下节预告

下次主要介绍程序以及一些扩展 🤘
