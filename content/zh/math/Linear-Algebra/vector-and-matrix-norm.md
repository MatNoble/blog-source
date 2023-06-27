+++
title = "向量范数与矩阵范数"
description = "Vector Norm and Matrix Norm"
date = "2020-03-19T00:13:23+00:00"
categories = ["MATH","线代拾遗"]
tags = [""]
keywords = ["向量范数","矩阵范数","线性代数","matrix","linear algebra","vector norm","matrix norm","MatNoble"]
toc = true
mathjax = true
series = ["mla"]
+++

## 向量范数

{{< blockquote link="https://zh.wikipedia.org/wiki/%E8%8C%83%E6%95%B0" >}}
**范数(模)**(英语：norm), 是具有「长度」概念的函数. 在线性代数、泛函分析及相关的数学领域, 是一个函数, 其为..向量空间..内的所有向量赋予非零的正长度或大小. 
{{< /blockquote >}}

假设 $V$ 是数域 $F$ 上的向量空间, $V$ 的范数是一个函数 $p:V \to \mathbb{R}$, 对于 $\forall a \in F, \forall \\, \mathrm{u}, \mathrm{v} \in V$, 满足
> 1. **正定性**: $p(\mathrm{v}) \geq 0$, 当且仅当 $\mathrm{v}=0$ 时, $p(\mathrm{v})=0$ 
> 2. **齐次性**: $p(a\mathrm{v}) = |a|p(\mathrm{v})$
> 3. **三角不等式**: $p(\mathrm{u}+\mathrm{v}) \leq p(\mathrm{u}) + p(\mathrm{v})$

### $p-$范数

对于向量 <span>$\mathrm{x} = [x_1, x_2, \ldots, x_n]$</span>, 定义 <span>$p-$</span> 范数为

<div>
\begin{equation}
\displaystyle
\lVert \mathrm{x} \rVert_p := \biggl( \sum_{i=1}^n |x_i|^p \biggr)^{1/p}
\label{eq:eqp}
\end{equation}
</div>

其中 $p \in [1, +\infty)$. 

范数在几何意义下, 可以看作是「距离」. 以 $2$ 维平面为例, 在式 (\ref{eq:eqp}) 定义的距离下, 分别取 $p = 0.25, 0.5, 1, 2, 4$, 画以原点为圆心的“单位圆” (unit ball)

```python
# python3
import numpy as np
import matplotlib.pyplot as plt

fig = plt.figure(num=1, dpi=150)
r = 1
linestyle = ['b-','k-','m-','r-','y-']
p_values = (0.25, 0.5, 1, 2, 4)
for i,p in enumerate(p_values):
    x = np.arange(-r,r+1e-5,1/360.0)
    y = (r**p - (abs(x)**p))**(1.0/p)
    y = list(zip(y, -y))
    plt.plot(x, y, linestyle[i])
axs = plt.gca()
axs.set_aspect('equal', 'box')
plt.savefig('images/norm.svg', bbox_inches='tight')
plt.show()
```

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/norm.svg" title="$\lVert \mathrm{x} \rVert_p = 1$, p = 0.25, 0.5, 1, 2, 4" width="60%">}}

<br>

不同的 $p$ 值, “单位球”的形状是不一样的. $p$ 值越大, 越往外扩. 当 $p\geq 1$ 时, 图形都是凸集. $p<1$ 则不是凸集, 此时不满足「三角不等式」[^1]

<br />

**常用 $p-$范数**

以式 (\ref{eq:eqp}) 为基础, 最常用的范数有三个

{{< imgcap src="/images/norm.svg" title="Vector Norm" >}}

- $1-$范数<br>
取 $p = 1$
\begin{equation}
\displaystyle
\lVert \mathrm{x} \rVert_1 = \sum_{i=1}^n |x_i|
\end{equation}
也叫绝对值范数.
- $2-$范数<br>
取 $p = 2$
\begin{equation}
\displaystyle
\lVert \mathrm{x} \rVert_2 = \sqrt{\sum_{i=1}^n |x_i|^2}
\end{equation}
这是最常见的欧几里德范数, 也叫作 $L^2$ 范数. 写成矩阵的形式: $\lVert \mathrm{x} \rVert_2 = \sqrt{\mathrm{x}^{\mathsf T}\mathrm{x}}$
- $\infty-$范数<br>
令 $p = +\infty$ 并取极限
\begin{equation}
\displaystyle
\lVert \mathrm{x} \rVert_{\infty} = \max |x_i|
\end{equation}

{{< notice note >}}
取 $\mathrm{v} = [1, 2, 3]^\mathsf{T}$, 计算向量$p-$范数并填入下表

| 名称              | 符号                                | 取值              | 近似值  |
| :--:              | :--:                                | :--:              | :--:    |
| $L^1$ norm        | $\lVert \mathrm{v} \rVert_1$        | $6$               | $6.000$ |
| $L^2$ norm        | $\lVert \mathrm{v} \rVert_2$        | $\sqrt{14}$       | $3.742$ |
| $L^3$ norm        | $\lVert \mathrm{v} \rVert_3$        | $6^{2/3}$         | $3.302$ |
| $L^4$ norm        | $\lVert \mathrm{v} \rVert_4$        | $2^{1/4}\sqrt{7}$ | $3.146$ |
| $L^{\infty}$ norm | $\lVert \mathrm{v} \rVert_{\infty}$ | $3$               | $3.000$ |

可以看出, 向量 $p-$范数随着 $p$ 值的增加而减小
{{< /notice >}}

### $\boldsymbol{S}-$范数

<div>
\begin{equation}
\displaystyle
\lVert \mathrm{v} \rVert_{\boldsymbol{S}} = \sqrt{\mathrm{v}^\mathsf{T} \boldsymbol{S} \mathrm{v}}
\end{equation}
</div>

$\boldsymbol{S}$ 是对称正定矩阵.

考虑 $\mathrm{v} \in \mathbb{R}^2$ 并假设 <span>$\boldsymbol{S} = \bigl[\begin{smallmatrix} 1/4 & 0 \\\\ 0 & 1/9 \end{smallmatrix}\bigr]$</span>

<div>
$$
\lVert \mathrm{v} \rVert_{\boldsymbol{S}} = [v_1, v_2] \begin{bmatrix} 1/4 & 0 \\ 0 & 1/9 \end{bmatrix} \begin{bmatrix} v_1 \\v_2 \end{bmatrix} = \frac{v_1^2}{4} + \frac{v_2^2}{9} = 1
$$
</div>

{{< imgcap src="/images/norm_ellipse.svg" title="unit ellipsoid" width="40%" >}}

### 最小逼近问题

$$
\displaystyle
\min_{\mathrm{x}} \lVert \boldsymbol{A}\mathrm{x} - \mathrm{b} \rVert_p
$$

不同的 $p$ 值, 对应不同的最小逼近问题. 当 $p=2$ 时, 是熟悉的[最小二乘问题](https://matnoble.github.io/math/linear-algebra/matrixleastsquares/#%E7%90%86%E8%A7%A3%E7%BA%BF%E6%80%A7%E6%96%B9%E7%A8%8B%E7%BB%84).[^2]

二维情况下, 设 $\boldsymbol{A}=[2, 3], \mathrm{x} = [x, y]^{\mathsf{T}}, b=2$. 则

$$
\displaystyle
\min_{\mathrm{x}} \lVert \boldsymbol{A}\mathrm{x} - \mathrm{b} \rVert_p = \min_{\mathrm{x}} \lVert 2x + 3y -2 \rVert_p
$$

在 $L^1, L^2, L^{\infty}$ 下解是不同的.

{{< imgcap src="/images/leastsquare.svg" title="最小逼近" >}}

<hr />

## 矩阵范数

那么矩阵 $\boldsymbol{A}$ 的..大小..应如何来..度量..呢?

### F 范数

因为矩阵是由列(行)向量组成, 所以仿照向量范数, 首先可以定义度量「矩阵长度」的 Frobenius 范数, 简称 F 范数, 记为 $\lVert \boldsymbol{A} \rVert_F$. 假设 $\boldsymbol{A}$ 是 $m\times n$ 阶矩阵, 则 Frobenius 范数定义为:

<div>
$$
\begin{aligned}
\lVert \boldsymbol{A} \rVert_F &= \sqrt{\lVert \mathrm{\alpha_1} \rVert^2 + \cdots + \lVert \mathrm{\alpha_n} \rVert^2} \\[3pt]
& = \sqrt{\sum_{i=1}^m |a_{i1}|^2 + \cdots + \sum_{i=1}^m |a_{in}|^2} \\[3pt]
& = \sqrt{\sum_{j=1}^n\sum_{i=1}^m |a_{ij}|^2} = \sqrt{\mathrm{trace}(\boldsymbol{A}^{\mathsf T}\boldsymbol{A})}
\end{aligned}
$$
<div>

另外, F 范数还和奇异值有关系. 如果已知秩为 $r$ 的矩阵 $\boldsymbol{A}$ 及其奇异值, <span>$\sigma_1 \geq \cdots \geq \sigma_r > 0$, $\sigma_{r+1} = \cdots = \sigma_p = 0, p = \min\\{m, n\\}$</span>, 那么

\begin{equation}
\lVert \boldsymbol{A} \rVert_F = \sqrt{\sum_{i=1}^r \sigma_i^2}
\label{eq:eqf}
\end{equation}

**证明:**

首先假设 $\boldsymbol{Q}$ 是正交矩阵, 那么成立

<div>
$$
\begin{cases}
\lVert \boldsymbol{Q} \boldsymbol{A} \rVert_F^2 = \mathrm{trace}\bigl((\boldsymbol{Q} \boldsymbol{A})^\mathsf{T}\boldsymbol{Q} \boldsymbol{A}\bigr) = \mathrm{trace}\bigl(\boldsymbol{A}^\mathsf{T} \boldsymbol{Q}^\mathsf{T} \boldsymbol{Q} \boldsymbol{A}\bigr) = \mathrm{trace}(\boldsymbol{A}^{\mathsf T}\boldsymbol{A}) = \lVert \boldsymbol{A} \rVert_F^2
\\[3pt]
\lVert \boldsymbol{A} \boldsymbol{Q} \rVert_F^2 = \mathrm{trace}\bigl(\boldsymbol{A} \boldsymbol{Q} (\boldsymbol{A} \boldsymbol{Q})^\mathsf{T}\bigr) = \mathrm{trace}\bigl(\boldsymbol{A} \boldsymbol{Q} \boldsymbol{Q}^\mathsf{T}\boldsymbol{A}^\mathsf{T} \bigr) = \mathrm{trace}(\boldsymbol{A}\boldsymbol{A}^\mathsf{T}) = \lVert \boldsymbol{A} \rVert_F^2
\end{cases}
$$
<div>

即矩阵范数有「正交不变性」

所以针对矩阵的奇异值分解 $\boldsymbol{A} = \boldsymbol{U}\boldsymbol{\Sigma}\boldsymbol{V}^{\mathsf T}$, 成立

$$
\lVert \boldsymbol{A} \rVert_F = \lVert \boldsymbol{\Sigma} \rVert_F = \sqrt{\sum_{i=1}^r \sigma_i^2}
$$

<p style="text-align: right">
$\blacksquare$
</p>

### 矩阵范数的性质

首先, 矩阵是多维向量, 所以容易验证, 矩阵范数同样满足: **正定性, 齐次性, 三角不等式**

正因为矩阵是增加了维度的向量, 所以还有向量所没有的性质 --- 矩阵可以表示「线性变换」在维度合适(可乘)时, 矩阵可以乘向量 $\boldsymbol{A}\mathrm{x}$, 得到的..像.. $\boldsymbol{A}\mathrm{x}$ 与..原像.. $\mathrm{x}$ 有如下关系

<div>
$$
\displaystyle
\begin{aligned}
\lVert \boldsymbol{A}\mathrm{x} \rVert^2 & = \lVert x_1 \alpha_1 + \cdots + x_n \alpha_n \rVert^2
\\[3pt]
& \leq \bigl( \lVert x_1 \alpha_1 \rVert + \cdots + \lVert x_n \alpha_n \bigr)^2
\\[3pt]
& = \bigl(|x_1| \cdot \lVert \alpha_1 \rVert + \cdots + |x_n| \cdot \lVert \alpha_n\bigr)^2
\end{aligned}
$$
</div>

利用 [Cauchy 不等式](https://matnoble.github.io/math/fem/inequality/#cauchy-inequality-for-scalar-product), 可得

<div>
$$
\displaystyle
\begin{aligned}
\bigl(|x_1| \cdot \lVert \alpha_1 \rVert + \cdots + |x_n| \cdot \lVert \alpha_n\bigr)^2 & \leq (\lVert \alpha_1 \rVert^2 + \cdots +  \lVert \alpha_n \rVert^2)(|x_1|^2 + \cdots + |x_n|^2)
\\[3pt]
& = \lVert \boldsymbol{A} \rVert_F^2 \lVert \mathrm{x} \rVert^2
\end{aligned}
$$
</div>

即 $\lVert \boldsymbol{A}\mathrm{x} \rVert\leq \lVert \boldsymbol{A} \rVert_F \lVert \mathrm{x} \rVert$. 若将向量 $\mathrm{x}$ 换作 $n\times p$ 阶矩阵 $\boldsymbol{B}$，情况又如何呢? 

<div>
$$
\displaystyle
\begin{aligned}
\lVert \boldsymbol{A}\boldsymbol{B} \rVert_F^2 & = \bigl\lVert \bigl[ \boldsymbol{A} \beta_1  \cdots  \boldsymbol{A} \beta_p \bigr] \bigr\rVert_F^2
\\[3pt]
& = \lVert \boldsymbol{A} \beta_1 \rVert_F^2 + \cdots + \lVert \boldsymbol{A} \beta_p \rVert_F^2
\\[3pt]
& \leq \lVert \boldsymbol{A} \rVert_F^2 \lVert \beta_1 \rVert^2 + \cdots + \lVert \boldsymbol{A} \rVert_F^2 \lVert \beta_p \rVert^2
\\[3pt]
& = \lVert \boldsymbol{A} \rVert_F^2 ( \lVert \beta_1 \rVert^2 + \cdots + \lVert \beta_p \rVert^2)
\\[3pt]
& = \lVert \boldsymbol{A} \rVert_F^2\lVert \boldsymbol{B} \rVert_F^2
\end{aligned}
$$
</div>

即 $\lVert \boldsymbol{A}\boldsymbol{B} \rVert_F \leq  \lVert \boldsymbol{A} \rVert_F \lVert \boldsymbol{B} \rVert_F$. 综合之前的 3 条性质, 可总结为

> **矩阵范数的性质**<br>
> - $\lVert \boldsymbol{A} \rVert \geq 0$, 当且仅当 $A=0$ 等号成立.<br>
> - $\lVert c\boldsymbol{A} \rVert = |c|\lVert \boldsymbol{A} \rVert $
> - $\lVert \boldsymbol{A} + \boldsymbol{B} \rVert \leq \lVert \boldsymbol{A} \rVert + \lVert \boldsymbol{B} \rVert $
> - $\lVert \boldsymbol{A}\boldsymbol{B} \rVert \leq  \lVert \boldsymbol{A} \rVert \lVert \boldsymbol{B} \rVert$

与向量范数相同, 矩阵范数也不唯一. 甚至利用性质 4, 可以导出更重要的范数.

### 矩阵 $2-$范数

当矩阵 $\boldsymbol{B}$ 退化为向量 $\mathrm{x}$ 时, $\lVert \boldsymbol{A}\mathrm{x} \rVert\leq \lVert \boldsymbol{A} \rVert \lVert \mathrm{x} \rVert$
, 如果 $\mathrm{x} \neq 0$, 就有

\begin{equation}
\displaystyle
 \lVert \boldsymbol{A} \rVert \geq \frac{\lVert \boldsymbol{A}\mathrm{x} \rVert}{\lVert \mathrm{x} \rVert}
\label{eq:eq20} 
\end{equation}

当式 (\ref{eq:eq20}) 右端取向量 $2-$范数时, 可以定义矩阵 $2-$范数

\begin{equation}
\displaystyle
\lVert \boldsymbol{A} \rVert_2 = \max_{x\neq 0} \frac{\lVert \boldsymbol{A}\mathrm{x} \rVert_2}{\lVert \mathrm{x} \rVert_2}
\label{eq:eqm2} 
\end{equation}

因为是由向量的欧氏距离所决定, 所以对应地称为矩阵的 $2-$范数. 其几何意义是: 限制了原像的「伸缩」

**那如何计算$\lVert \boldsymbol{A} \rVert_2$ ?**

将式 (\ref{eq:eqm2}) 平方
<div>
$$
\displaystyle
\begin{aligned}
 \lVert \boldsymbol{A} \rVert_2^2 = \max_{x\neq 0} \frac{\lVert \boldsymbol{A}\mathrm{x} \rVert_2^2}{\lVert \mathrm{x} \rVert_2^2} & = \max_{x\neq 0} \frac{\mathrm{x}^{\mathsf{T}}\boldsymbol{A}^{\mathsf{T}}\boldsymbol{A}\mathrm{x}}{\lVert \mathrm{x} \rVert_2^2}
\\[3pt]
& = \max_{x\neq 0} \biggl(\frac{\mathrm{x}}{\lVert \mathrm{x} \rVert_2}\biggr)^{\mathsf{T}} \boldsymbol{A}^{\mathsf{T}}\boldsymbol{A} \frac{\mathrm{x}}{\lVert \mathrm{x} \rVert_2}
\\[3pt]
& = \max_{||\mathrm{y}||_2 = 1} \mathrm{y}^{\mathsf{T}} \boldsymbol{A}^{\mathsf{T}}\boldsymbol{A} \mathrm{y}
\\[3pt]
& =  \max_{||\mathrm{x}||_2 = 1} \lVert \boldsymbol{A}\mathrm{x} \rVert_2^2
\end{aligned}
$$
</div>

即
$$
\lVert \boldsymbol{A} \rVert_2 = \max_{||\mathrm{x}||_2 = 1} \sqrt{ \mathrm{x}^{\mathsf{T}} \boldsymbol{A}^{\mathsf{T}}\boldsymbol{A} \mathrm{x}} = \max_{||\mathrm{x}||_2 = 1} \lVert \boldsymbol{A}\mathrm{x} \rVert_2
$$

考虑 Gram 矩阵 $\boldsymbol{A}^{\mathsf{T}}\boldsymbol{A}$ 可正交对角化

$$
\boldsymbol{A}^{\mathsf{T}}\boldsymbol{A} = \boldsymbol{V} \boldsymbol{\Lambda} \boldsymbol{V}^\mathsf{T}
$$

其中 $\boldsymbol{V}$ 是正交矩阵. 所以

$$
\mathrm{x}^{\mathsf{T}} \boldsymbol{A}^{\mathsf{T}}\boldsymbol{A} \mathrm{x} = \mathrm{x}^{\mathsf{T}} \boldsymbol{V}\boldsymbol{\Lambda} \boldsymbol{V}^\mathsf{T} \mathrm{x} = \mathrm{z}^\mathsf{T} \boldsymbol{\Lambda} \mathrm{z}
$$

其中 $\mathrm{z}=\boldsymbol{V}^{\mathsf{T}}\mathrm{x}$, 并且满足

$$
\lVert \mathrm{z} \rVert^2 = \mathrm{z}^{\mathsf{T}}\mathrm{z} = \mathrm{x}^{\mathsf{T}} \boldsymbol{V}  \boldsymbol{V}^\mathsf{T} \mathrm{x} = \mathrm{x}^{\mathsf{T}}\mathrm{x} = \lVert \mathrm{x} \rVert^2
$$

所以
$$
\lVert \boldsymbol{A} \rVert_2^2 = \max_{||\mathrm{x}||_2 = 1} \mathrm{x}^{\mathsf{T}} \boldsymbol{A}^{\mathsf{T}}\boldsymbol{A} \mathrm{x} = \max_{||\mathrm{z}||_2 = 1} \mathrm{z}^\mathsf{T} \boldsymbol{\Lambda} \mathrm{z}
$$

而当 $||\mathrm{z}||_2 = 1$ 时
$$
\mathrm{z}^\mathsf{T} \boldsymbol{\Lambda} \mathrm{z} = \lambda_1z_1^2 + \cdots + \lambda_n z_n^2 \leq \lambda_{\max}(z_1^2 + \cdots + z_n^2) = \lambda_{\max}
$$

所以
\begin{equation}
 \lVert \boldsymbol{A} \rVert_2 = \max_{||\mathrm{z}||_2 = 1} \sqrt{\mathrm{z}^\mathsf{T} \boldsymbol{\Lambda} \mathrm{z}} = \sqrt{\lambda_{\max}} = \sigma_1
\label{eq:eqm21} 
\end{equation}
其中, $\sigma_1$ 为矩阵 $\boldsymbol{A}$ 的最大奇异值. 此时, 可以看出 $\lVert \boldsymbol{A} \rVert_2$ 与 $\lVert \boldsymbol{A} \rVert_F$ 式 (\ref{eq:eqf}) 的不同.

### 其他矩阵范数

将不同的向量范数代入式 (\ref{eq:eq20}), 得到相应的矩阵范数.

- 矩阵 $1-$范数<br>
$$
\displaystyle \Vert \boldsymbol{A} \Vert_1=\max_{\Vert\mathrm{x}\Vert_1=1}\Vert \boldsymbol{A} \mathrm{x}\Vert_1
$$
对任一 $\mathrm{x}$, $\Vert \mathrm{x} \Vert_1=\sum_{j=1}^n\vert x_j\vert=1$<br>
$$
\displaystyle
\begin{aligned} \Vert \boldsymbol{A} \mathrm{x}\Vert_1 &=\sum_{i=1}^n\biggl\vert\sum_{j=1}^n a_{ij}x_j\biggr\vert \leq \sum_{i=1}^n\sum_{j=1}^n\vert a_{ij}\vert\cdot\vert x_j\vert \\\\[3pt] 
&=\sum_{j=1}^n\left( \vert x_j\vert\sum_{i=1}^n\vert a_{ij}\vert\right)\le\left(\sum_{j=1}^n\vert x_j\vert\right)\left( \max_{1\le j\le n}\sum_{i=1}^n\vert a_{ij}\vert\right) \\\\[3pt] 
&=\max_{1\le j\le n}\sum_{i =1}^n\vert a_{ij}\vert
\end{aligned}
$$
即矩阵的 $1-$范数为..最大列和..

- 矩阵 $\infty-$范数<br>
$$
\displaystyle \Vert \boldsymbol{A} \Vert_{\infty}=\max_{\Vert\mathrm{x}\Vert_{\infty}=1}\Vert \boldsymbol{A} \mathrm{x}\Vert_{\infty}
$$
对任一 $\mathrm{x}$, $\Vert \mathrm{x} \Vert_{\infty}=\max_j \vert x_j \vert=1$<br>
$$
\displaystyle \Vert \boldsymbol{A} \mathrm{x}\Vert_{\infty}=\max_{1\le i\le n}\biggl\vert\sum_{j=1}^na_{ij}x_j\biggr\vert \le \max_{1\le i \le n}\sum_{j=1}^n\vert a_{ij}\vert\cdot\vert x_j\vert\le\max_{1\le i\le n} \sum_{j=1}^n\vert a_{ij}\vert
$$
即矩阵的无穷范数为..最大行和..

<hr>

参考:
1. https://mathworld.wolfram.com/VectorNorm.html
2. https://mathworld.wolfram.com/MatrixNorm.html
3. https://en.wikipedia.org/wiki/Matrix_norm

[^1]: 取 $\mathrm{u}=[0, 1]^\mathsf{T}, \mathrm{v}=[1, 0]^\mathsf{T}$, 则
$$
\begin{aligned}
\lVert u + v \rVert_p & = (1^p + 1^p)^{1/p} = 2^{1/p}
\\\\[3pt]
\lVert u \rVert_p + \lVert v \rVert_p & = (1^p)^{1/p} + (1^p)^{1/p} = 2
\end{aligned}
$$
当 $p<1$ 时, 不满足三角不等式.
[^2]: 简述有限元中逼近向量用的也是 $L^2$ norm. <br> https://matnoble.github.io/math/fem/fem1/#%E6%9C%80%E5%B0%8F%E4%BA%8C%E4%B9%98%E6%B3%95-1
