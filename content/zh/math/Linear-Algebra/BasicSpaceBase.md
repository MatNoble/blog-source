+++
title = "矩阵的四个基本空间的基底"
date = "2020-01-24T00:00:00+08:00"
description = "给空间选代表"
categories = ["MATH","线代拾遗"]
tags = ["矩阵"]
keywords = ["线代拾遗","矩阵","线性代数","基底","matrix","linear algebra","Space base","MatNoble"]
toc = true
katex = true
series = ["mla"]
+++

之前介绍过矩阵有四个基本空间

<img src="https://imgkr.cn-bj.ufileos.com/dcb900fa-a4ec-466d-a019-5e9a75079026.png" title="矩阵的四个基本空间"  alt="矩阵的四个基本空间"/>

并且有两组正交关系

<img src="https://imgkr.cn-bj.ufileos.com/15a582b0-4471-4ae6-8985-02f9d4ea2edc.png" title="矩阵的四个基本空间正交关系"  alt="矩阵的四个基本空间正交关系"/>

有了空间，若想继续研究，就需要找一些 ..代表.. ，即 ..基底..

## 普通基底

本小节用到的技术手段很简单－－ ..初等行变换..

假设有任意 $m\times n$ 阶矩阵 $A$，经过一系列..初等行变换..得到行阶梯型矩阵 $R$．因为这一系列初等行变换可对应地表示为一系列初等矩阵的乘积 $E$，因此，上述过程可描述为:

$$
E\begin{bmatrix}A & I_m \end{bmatrix} = \begin{bmatrix}R & E \end{bmatrix}
$$

其中，行阶梯型矩阵 $R$ 可..分块..表示为:

$$
R = \begin{bmatrix}I_r & F \\\\ 0 & 0 \end{bmatrix}
$$

$I_r$ 为 $r$ 阶单位阵, $F$ 为 $r \times (n-r)$ 阶矩阵．

$E$ 为非奇异 $m$ 阶方阵，对应 $R$ 可..分块..表示为

$$
E = \begin{bmatrix} E_1 \\\\[3pt] E_2 \end{bmatrix}
$$

$E_1$ 为 $r\times m$ 阶，$E_２$ 为 $(m-r)\times m$ 阶

综上

$$
\begin{bmatrix}R & E \end{bmatrix} =  \begin{bmatrix}I_r & F & E_1\\\\ 0 & 0  & E_2\end{bmatrix}
$$

矩阵 $A$ 的四个基本空间的基底信息全部蕴含在上式中

![](https://imgkr.cn-bj.ufileos.com/dcb900fa-a4ec-466d-a019-5e9a75079026.png)

### 行空间 $C(A^{\mathsf T})$

初等行变换不改变行空间，即

$$
C(A^{\mathsf T}) = C(R^{\mathsf T})
$$

所以，$\left[ I_r \quad  F \right]$ 构成 $C(A^{\mathsf T})$ 的一组基底．

### 零空间 $N(A)$

初等行变换不改变零空间，即
$$N(A) = N(R)$$

显然
$$P = \begin{bmatrix}-F \\\\[3pt] I_{n-r}\end{bmatrix}$$

满足 $RP=0$，且 $P$ 列满秩，所以，$P$ 构成矩阵 $A$ 的零空间．

### 列空间 $C(A)$

初等行变换改变列空间，但不改变矩阵列向量间的线性关系，即 $A$ 矩阵中 $I_r$ 对应的列指标构成列空间的一组基底．(下有例题)

### 左零空间 $N(A^{\mathsf T})$

$$
EA = \begin{bmatrix} E_1A \\\\[3pt] E_2A \end{bmatrix} = \begin{bmatrix}I_r & F \\\\ 0 & 0 \end{bmatrix} = R
$$

由 $E_2A = 0$，知 $E_2$ 的行向量属于左零空间 $N(A^{\mathsf T})$．因为 $E$ 非奇异，所以 $E_2$ 的行向量也线性无关，构成 $N(A^{\mathsf T})$ 的一组基底．

### 例题

假设一个 $4\times 5$ 阶矩阵 $A$

$$
A=\left[\begin{array}{lllll}
{2} & {6} & {2} & {2} & {2} \\\\
{1} & {3} & {1} & {1} & {1} \\\\
{3} & {9} & {3} & {4} & {5} \\\\
{1} & {3} & {1} & {2} & {3}
\end{array}\right]
$$

求其 $C(A^{\mathsf T}), N(A), C(A)$ 以及 $N(A^{\mathsf T})$

进行..初等行变换..

$$
\begin{bmatrix}A & I_4 \end{bmatrix}
\to
\begin{bmatrix}R & E \end{bmatrix}
$$

$$
\left[\begin{array}{lllll|llll}{2} & {6} & {2} & {2} & {2} & {1} & {0} & {0} & {0} \\\\ {1} & {3} & {1} & {1} & {1} & {0} & {1} & {0} & {0} \\\\ {3} & {9} & {3} & {4} & {5} & {0} & {0} & {1} & {0} \\\\ {1} & {3} & {1} & {2} & {3} & {0} & {0} & {0} & {1}\end{array}\right]
\to
$$
$$
\left[\begin{array}{rrrrr|rrrr}{1} & {3} & {1} & {0} & {-1} & {-17} & {28} & {4} & {5} \\\\ {0} & {0} & {0} & {1} & {2} & {27} & {-43} & {-6} & {7} \\\\ {0} & {0} & {0} & {0} & {0} & {-13} & {20} & {3} & {-3} \\\\ {0} & {0} & {0} & {0} & {0} & {4} & {-6} & {-1} & {1}\end{array}\right]
$$

所以 $r=2$，$1, 4$ 列线性独立．以及

$$
\begin{bmatrix}I_2 & F \end{bmatrix} = \begin{bmatrix}1 & 3 & 1 & 0 & -1 \\\\ 0 & 0& 0&1&2 \end{bmatrix}
$$

$$
E_2 = \begin{bmatrix} -13&20&3&-3\\\\ 4&-6&-1&1 \end{bmatrix}
$$

$$P=\left[\begin{array}{rrr}{-3} & {-1} & {1} \\\\ {1} & {0} & {0} \\\\ {0} & {1} & {0} \\\\ {0} & {0} & {-2} \\\\ {0} & {0} & {1}\end{array}\right]$$

- 行空间 $C(A^{\mathsf T})$  
  由 $\left[ I_r \quad  F \right]$ 的行向量组成

  $$
  \begin{bmatrix}
  1\\\\3\\\\1\\\\0\\\\-1
  \end{bmatrix} \quad
   \begin{bmatrix}
  0\\\\0\\\\0\\\\1\\\\2
  \end{bmatrix}
  $$

- 零空间 $N(A)$  
  由 $P$ 的列向量组成

  $$
  \begin{bmatrix}
  -3\\\\1\\\\0\\\\0\\\\0
  \end{bmatrix} \quad
   \begin{bmatrix}
  -1\\\\0\\\\1\\\\0\\\\0
  \end{bmatrix} \quad
  \begin{bmatrix}
  1\\\\0\\\\0\\\\-2\\\\1
  \end{bmatrix}
  $$

- 列空间 $C(A)$  
  由 $A$ 的 $1, 4$ 列构成

  $$
  \begin{bmatrix}
  2\\\\1\\\\3\\\\1
  \end{bmatrix} \quad
   \begin{bmatrix}
   2\\\\1\\\\4\\\\2
  \end{bmatrix}
  $$

- 左零空间 $N(A^{\mathsf T})$  
  由 $E_2$ 的行向量组成

  $$
  \begin{bmatrix}
  -13\\\\20\\\\3\\\\-3
  \end{bmatrix} \quad
   \begin{bmatrix}
   4\\\\-6\\\\-1\\\\1
  \end{bmatrix}
  $$

## 正交基底

将上述结果经过 Gram-Schmidt 正交化，即可得到对应的正交基．但是，还有更简单的方法，但涉及..奇异值分解..，故在之后的..奇异值分解系列..再讨论．
