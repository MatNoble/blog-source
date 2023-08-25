+++
title = "逼近函数 II"
description = "正交基函数"
mathjax = true
categories = ["MATH","简述有限元"]
tags = ["有限元"]
keywords = ["有限元","FEM"]
date = "2019-12-26T00:00:00+08:00"
toc = true
series = ["fem"]
aliases = ["/posts/fem3"]
+++

<img src="https://imgkr.cn-bj.ufileos.com/62f007ea-3d01-45a5-8ec7-4bfe52d009ed.jpeg" title="简述有限元: 逼近函数 II"  alt="简述有限元逼近函数" />

<!--more-->

# 逼近函数 II

## 程序实例(I)

[逼近函数 I](https://matnoble.github.io/posts/fem2/) 中介绍了逼近函数的数学推导, 这一次用程序实现它.

### 例题回顾

给定一个二次(抛物型)函数 $f(x) = 10(x-1)^2-1, x \in \Omega=[1, 2]$, 在线性函数空间 $V$ 中寻找最佳逼近向量 $u$

$$
V={\rm span}\{1, x\}.
$$

$\bf 解:$ 设 $\psi_0 = 1, \psi_1 = x$, 则

$$
u = c_0\psi_0(x) + c_1\psi_1(x) = c_0 + c_1x.
$$

所以系数矩阵

$$
\begin{align*}
& A_{11} = (\psi_0, \psi_0) = \int_1^2 1\cdot1{\rm d}x = 1,\\\\
& A_{12} = (\psi_1, \psi_0) = \int_1^2 x \cdot 1 {\rm d}x = \frac{3}{2},\\\\
& A_{21} = A_{12} = \frac{3}{2},\\\\
& A_{22} = (\psi_1, \psi_1) = \int_1^2 x \cdot x {\rm d}x = \frac{7}{3}.
\end{align*}
$$

所有系数矩阵是 

$$A = \begin{bmatrix} 1 & \frac{3}{2} \\\\ \frac{3}{2} & \frac{7}{3} \end{bmatrix}$$

右端项为:

$$
\begin{align*}
& b_{1} = (\psi_0, f) = \int_1^2 1\cdot (10(x-1)^2-1){\rm d}x = \frac{7}{3},\\\\
& b_{2} = (\psi_1, f) = \int_1^2 x \cdot (10(x-1)^2-1) {\rm d}x =\frac{13}{3}. 
\end{align*}
$$

所以 $b = [\frac{7}{3},  \frac{13}{3}]^{\sf T}$, 解线性方程组就可以得到

$$
c = \begin{bmatrix} −38/3 \\\\ 10\end{bmatrix}.
$$

因此

$$
u = 10x-38/3.
$$

### 程序实现

- 主函数

```matlab
close all
clear
clc
format rat % 以分式显示结果

% 基本变量
xx = [1, 2];
syms x
f = (10 * (x-1)^2 -1);
F = inline(vectorize(f), 'x');  % 符号向量化

% 基函数
N = 3;
for i = 1 : N
    V(i) = x^(i-1);
end

% 组装系数矩阵
A = assemble_stiffness_matrix(V, xx);

% 载入右端向量
b = assemble_load_vector(f, V, xx);

% 线性方程组求解
c = A\b;
u =V*c;

% 可视化
X = xx(1) : 0.01 : xx(2);
U = inline(vectorize(u), 'x');
Plot(X, F, U)

% 结果展示
result(A, b, c, u)
```

<img src="https://imgkr.cn-bj.ufileos.com/a117f302-1844-4333-a1bf-5f911d308265.png" title="V = {1, x}"  alt="简述有限元逼近函数" width="400" />

<img src="https://imgkr.cn-bj.ufileos.com/b9dc311d-dce7-4ea4-aff4-99fc163a4fcb.png" title="V = {1, x}"  alt="简述有限元逼近函数" width=60% />

程序计算结果与手算的是一样的.

当 $V = {\rm span}\\\\{1, x, x^2 \\\\}$ 时, 逼近解等于真解, 如下图所示

<img src="https://imgkr.cn-bj.ufileos.com/bf3d7a3a-6520-4fd7-9a43-af6b2496bf6b.png" title="V = {1, x}"  alt="简述有限元逼近函数" width="400" />

<img src="https://imgkr.cn-bj.ufileos.com/32287d90-4eed-46e6-8a00-366df9ab381c.png" title="V = {1, x}"  alt="简述有限元逼近函数" width="400" />

本程序其他函数可点击原文链接下载, GitHub.

---

## 选取更好的基函数

上一节的基函数空间为 $V ={\rm span} \\{ x^j\\} , j\in {\mathcal{I}}_s,\, {\mathcal{I}}_s=\\{0, 1, \dots, N \\}$, 在上一节的例子中, 函数逼近的很好, 在用此基函数逼近多项式时, 理论上可以得到原多项式. ..但是.., 当 $N$ 过大时, 形成的系数矩阵 $A$ 是奇异的, 是病态的, 即线性方程组系统不可解.

<img src="https://imgkr.cn-bj.ufileos.com/e68d6b8b-32c7-419a-8880-a6b4d91b2b54.png" title="病态缘由"  alt="简述有限元逼近函数 病态缘由" width=65% />

选择..正交..(或者几乎正交)的基函数是数值计算中经常使用的, 其原因是可以使得 $A_{ij}=0, i\neq j$, 从而矩阵几乎是对角化的.

### 傅立叶级数

$\color{gray}{\textit{Fourier series}}$

令

$$
V={\rm span} \{ \sin(\pi x), \sin(2\pi x), \dots, \sin(N+1)\pi x \}.
$$

那么基函数为

$$
\psi_i(x) = \sin(i+1)\pi x, \quad i \in \cal{I}_s.
$$

将基函数带入上文的主程序中, 得到 N=3 和 N=11 时的拟合图

![N=3](https://imgkr.cn-bj.ufileos.com/f1b331ac-c10b-4bb0-a040-91e332231194.png)

![N=11](https://imgkr.cn-bj.ufileos.com/47c04632-098b-4b3a-b924-e007e04ca50e.png)

以上结果似乎拟合得很好, ..但是..可以发现, 无论当 $N$ 如何增大, 始终得到 $u(0)=u(1)=1$. 肯定是哪里出错了:

$$
u(x) = \sum_{j\in \mathcal{I}_s} c_j \sin(j+1)\pi x.
$$

上式显示: $u(0) = u(1) \equiv 0$. 因此需要修正算法:

令 $u(0)=f(0), u(1)=f(1)$, 以加入边界信息, 再加上 $u(x) = \sum_{j\in \mathcal{I}_s} c_j \psi_j (x)$, 可设

$$
\tilde{u}(x) = (1-x)f(0) + xf(1) + \sum_{j\in \mathcal{I}_s} c_j \psi_j (x).
$$

设 $B(x) = (1-x)f(0) + xf(1)$, 此时的线性方程组系统为

$$
\sum_{j\in \mathcal{I}_s} (\psi_j, \psi_i)c_j = (f-B, \psi_i), \quad i \in \mathcal{I}_s.
$$

针对该基函数修正后的主函数为

```matlab
close all
clear
clc
format rat % 以分式显示结果
% format long

% 基本变量
xx = [0, 1];
syms x
f = (10 * (x-1/2)^5 -1);
F = inline(vectorize(f), 'x');
f_0 = F(xx(1));
f_N = F(xx(end));

n = 6;
for i = 1:n
    V(i) = sin(i*pi*x);
end
B = f_0*(xx(end)-x) + f_N*(x-xx(1));

% 组装系数矩阵
A = assemble_stiffness_matrix(V, xx);

% 载入右端向量
b = assemble_load_vector(f-B, V, xx);

% 线性方程组求解
c = A\b;
u = B + V*c;

% 可视化
X = xx(1) : 0.01 : xx(2);
U = inline(vectorize(u), 'x');
Plot(X, F, U)

% 结果展示
result(A, b, c, u)
```

如下图所示, 使用修正后的算法, N=3 时, 已经可以逼近的很好了.

![N=3](https://imgkr.cn-bj.ufileos.com/e6828cb5-eba4-47ec-9f21-cc8f3f0ef019.png)

![结果展示 N=3](https://imgkr.cn-bj.ufileos.com/c4b1dfac-2b1a-411f-a739-0129659489e7.png)
计算结果展示: 矩阵 $A = \frac{1}{2}I$, 这是巧合吗? 不是的! 因为在区间 $[0, 1]$ 上

$$
\int_0^1 \sin^2(j\pi x) {\rm d} x = \frac{1}{2}.
$$

所以

$$
c=A^{-1}b = \frac{b}{2}.
$$

即

$$
c_i = \frac{(f-B, \psi_i)}{2}.
$$

这样程序就更简单了.

## 程序实例(II)

通过正弦函数逼近 $f(x) = \tanh(s(x-\pi)), s=20$, 即在空间 $V={\rm span}\\{\sin(2i+1)x\\}\ , i\in [0, 1, \dots, N]$ 中找到 $u(x)$ 最佳逼近于 $f(x)$.

![N=1](https://imgkr.cn-bj.ufileos.com/6686289b-3010-426d-9431-00948025bff0.png)

![N=3](https://imgkr.cn-bj.ufileos.com/a1b9b8b2-f9c7-4ac1-82c7-80f3ba2f2721.png)

![N=7](https://imgkr.cn-bj.ufileos.com/c94c8996-52ec-4a21-9c61-0f5978e7cd79.png)

![N=15](https://imgkr.cn-bj.ufileos.com/de762744-f909-4cf5-bd16-551a08d84924.png)

程序参考之前小节. 该现象称为[吉布斯现象](https://en.wikipedia.org/wiki/Gibbs_phenomenon "吉布斯现象").

---

## 下节预告

讨论逼近函数的最后一种方法 -- 插值法 🤘
