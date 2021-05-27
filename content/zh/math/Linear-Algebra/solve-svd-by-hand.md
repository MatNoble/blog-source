+++
title = "「手撕」奇异值分解 SVD"
description = "线性相关有强弱之分吗？"
date = "2020-03-16T00:14:37+00:00"
categories = ["MATH","线代拾遗"]
tags = ["奇异值分解"]
keywords = ["「手撕」奇异值分解 SVD","奇异度","线性相关","SVD","线性代数","matrix","linear algebra","MatNoble"]
toc = true
mathjax = true
series = ["mla"]
+++

{{< imgcap src="https://ttfou.com/images/2020/03/16/96e77cead9d0d344b14233bc95153b4e.jpg" title="SVD" >}}

<br />

之前大多讨论的是理论推导, 这次亲自算一算, 看看计算「奇异值」难不难

## Example 1

设 ${\boldsymbol{A}}=\Biggl[ \begin{smallmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 \end{smallmatrix} \Biggr]$, $x \in \mathbb{R}$, 计算 $\boldsymbol{A}$ 的奇异值分解.

<br>

以下分两步计算:

- **Step 1**<br> 
计算右奇异矩阵 $\boldsymbol{V}$. 因为 $\boldsymbol{A} = \boldsymbol{U}\boldsymbol{\Sigma}\boldsymbol{V}^\mathsf{T}$, 所以 $\boldsymbol{A}^\mathsf{T}\boldsymbol{A} = \boldsymbol{V}(\boldsymbol{\Sigma}^\mathsf{T}\boldsymbol{\Sigma})\boldsymbol{V}^\mathsf{T}$<br>
$$\boldsymbol{A}^\mathsf{T}\boldsymbol{A} = \begin{bmatrix} 
1 & 0 & 1
\\\\ 
0 & 1 & 1
\end{bmatrix} 
\begin{bmatrix} 
1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 
\end{bmatrix} = \begin{bmatrix}
2 & 1 \\\\\\
1 & 2
\end{bmatrix}
$$
利用 $\det(\boldsymbol{A}^\mathsf{T}\boldsymbol{A}-\lambda\boldsymbol{I})=0$ 计算特征值
$$
\begin{aligned}
\begin{vmatrix}
2-\lambda & 1 \\\\\\
1 & 2-\lambda
\end{vmatrix} & = (2-\lambda)^2 - 1 
\\\\\[3pt]
& = \lambda^2 - 4\lambda + 3
\\\\\[3pt]
& = (\lambda - 3) (\lambda-1)
\end{aligned}
$$
所以, 特征值 $\lambda\_1 = 3, \lambda\_2=1$. 代入 $\Bigl[\begin{smallmatrix}
2-\lambda & 1 \\\\\\
1 & 2-\lambda
\end{smallmatrix}\Bigr]\mathbf{x} = \mathbf{0}$ 计算特征向量
  - $\lambda\_1 = 3$
  $$
  \begin{bmatrix}
  -1 & 1 \\\\\\
  1 & -1
  \end{bmatrix}\mathbf{x} = \mathbf{0}
  $$
  易得, $\mathbf{v}_1 = \frac{\mathbf{x}}{\lVert\mathbf{x}\rVert}=\frac{1}{\sqrt{2}}[1, 1]^\mathsf{T}$.
  - $\lambda\_1 = 1$
  $$
  \begin{bmatrix}
  1 & 1 \\\\\\
  1 & 1
  \end{bmatrix}\mathbf{x} = \mathbf{0}
  $$
  易得, $\mathbf{v}\_2 = \frac{\mathbf{x}}{\lVert\mathbf{x}\rVert}=\frac{1}{\sqrt{2}}[1, -1]^\mathsf{T}$. 所以, 右奇异值矩阵[^2]
  $$
  \boldsymbol{V} = \frac{1}{\sqrt{2}}\begin{bmatrix} 1 & 1 \\\\ 1 & -1 \end{bmatrix}
  $$
  以及奇异值矩阵
  $$
  \boldsymbol{\Sigma} = \begin{bmatrix} \sqrt{\lambda\_1} & 0 \\\\\\ 0 & \sqrt{\lambda\_2} \\\\\\ 0 & 0 \end{bmatrix} = \begin{bmatrix} \sqrt{3} & 0 \\\\\\ 0 & 1 \\\\\\ 0 & 0 \end{bmatrix}
  $$

- **Step 2**<br>
计算左奇异矩阵, 利用 $\boldsymbol{A}\boldsymbol{V} = \boldsymbol{U}\boldsymbol{\Sigma} $<br>
$$
\boldsymbol{A}\boldsymbol{V} = \begin{bmatrix} 
1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 
\end{bmatrix} \frac{1}{\sqrt{2}}\begin{bmatrix} 1 & 1 \\\\ 1 & -1 \end{bmatrix} = \frac{1}{\sqrt{2}} \begin{bmatrix} 
1 & 1 \\\\ 1 & -1 \\\\ 2 & 0 
\end{bmatrix} = \boldsymbol{U} \begin{bmatrix} \sqrt{3} & 0 \\\\\\ 0 & 1 \\\\\\ 0 & 0 \end{bmatrix}
$$
如果记得{{< mark text="左乘行变换, 右乘列变换" >}}, 可以立即..看..出答案<br>
$$
\boldsymbol{U} = \begin{bmatrix} 1/\sqrt{6} & 1/\sqrt{2} & u\_{13} \\\\\\
1/\sqrt{6} & -1/\sqrt{2} & u\_{23} \\\\\\
2/\sqrt{6} & 0 & u\_{33}
\end{bmatrix}
$$
从 [奇异值分解初探](https://matnoble.me/posts/svd/#%E6%AD%A3%E4%BA%A4%E5%9F%BA%E5%BA%95) 中可知, $[u\_{13}, u\_{23}, u\_{33}]^\mathsf{T} \in N(\boldsymbol{A^\mathsf{T}})$ 即
$$
\boldsymbol{A}^\mathsf{T} \begin{bmatrix} u\_{13} \\\\\\ u\_{23} \\\\\\ u\_{33} \end{bmatrix} = \begin{bmatrix} 
1 & 0 & 1
\\\\ 
0 & 1 & 1
\end{bmatrix} \begin{bmatrix} u\_{13} \\\\\\ u\_{23} \\\\\\ u\_{33} \end{bmatrix} = \boldsymbol{0}
$$
解得 $[u\_{13}, u\_{23}, u\_{33}]^\mathsf{T} = \frac{1}{\sqrt{3}}[1, 1, -1]^\mathsf{T}$, 所以
$$
\boldsymbol{U} = \frac{1}{\sqrt{6}} \begin{bmatrix} 1 & \sqrt{3} & \sqrt{2} \\\\\\
1 & -\sqrt{3} & \sqrt{2} \\\\\\
2 & 0 & -\sqrt{2}
\end{bmatrix}
$$

最终得到 $\boldsymbol{A}$ 的奇异值分解为

$$
\boldsymbol{A} = \begin{bmatrix} 
1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 
\end{bmatrix} = \left( \frac{1}{\sqrt{6}} \begin{bmatrix} 1 & \sqrt{3} & \sqrt{2} \\\\\\
1 & -\sqrt{3} & \sqrt{2} \\\\\\
2 & 0 & -\sqrt{2}
\end{bmatrix} \right) \begin{bmatrix} \sqrt{3} & 0 \\\\\\ 0 & 1 \\\\\\ 0 & 0 \end{bmatrix} \left( \frac{1}{\sqrt{2}}\begin{bmatrix} 1 & 1 \\\\ 1 & -1 \end{bmatrix} \right)
$$

## 矩阵“奇异度”

上面矩阵 ${\boldsymbol{A}}=\Biggl[ \begin{smallmatrix} 1 & 0 \\\\ 0 & 1 \\\\ 1 & 1 \end{smallmatrix} \Biggr]$ 的秩为 $2$, 奇异值分别是 $\sqrt{3}$ 和 $1$. 如果第 3 行是两个比上面大得多的数呢? 不妨将它们都设为 $x$, 求矩阵的奇异值

$$
\boldsymbol{A}^\mathsf{T}\boldsymbol{A} = \begin{bmatrix} 
1 & 0 & x
\\\\ 
0 & 1 & x
\end{bmatrix} 
\begin{bmatrix} 
1 & 0 \\\\ 0 & 1 \\\\ x & x 
\end{bmatrix} = \begin{bmatrix}
1+x^2 & x^2 \\\\\\
x^2 & 1+x^2
\end{bmatrix}
$$

利用 $\det(\boldsymbol{A}^\mathsf{T}\boldsymbol{A}-\lambda\boldsymbol{I})=0$ 计算特征值

$$
\begin{aligned}
\begin{vmatrix}
1+x^2-\lambda & x^2 \\\\\\
x^2 & 1+x^2-\lambda
\end{vmatrix} & = [(1+x^2)-\lambda]^2 - x^4 
\\\\\[3pt]
& = \lambda^2 - 2(1+x^2)\lambda +(1+2x^2)
\\\\\[3pt]
& = [\lambda - (1+2x^2)] \\, (\lambda-1)
\end{aligned}
$$

则特征值以及对应的奇异值为

$$
\begin{cases}
\lambda\_1 = 1+2x^2 \\\\[3pt]
\lambda\_2=1
\end{cases}
\quad
\begin{cases}
\sigma\_1 = \sqrt{1+2x^2} \\\\[3pt]
\sigma\_2=1
\end{cases}
$$

所以, 当 $x$ 足够大时, 矩阵 $\boldsymbol{A}$ 的“头部”所占信息比重更大, 其更“奇异”，更接近于..秩一矩阵..

## Example 2

为展现奇异值分解所表现的“奇异性”, 分别计算 $\boldsymbol{A}=\Biggl[\begin{smallmatrix} 1 & 2 & 3 \\\\
1 & 2 & 3 \\\\
1 & 2 & 4
\end{smallmatrix}\Biggr]$ 和 $\boldsymbol{B}=\Biggl[\begin{smallmatrix} 1 & 2 & 3 \\\\
1 & 2 & 3 \\\\
4 & 2 & 1
\end{smallmatrix}\Biggr]$ 的奇异值, 这次利用 Matlab 求解

```matlab
clear
clc

A = [1, 2, 3;
     1, 2, 3;
     1, 2, 4];
B = [1, 2, 3;
     1, 2, 3;
     4, 2, 1];

[~, sigma1, ~] = svd(A);
[~, sigma2, ~] = svd(B);

A = sigma1(1,1)/trace(sigma1);
B = sigma2(1,1)/trace(sigma2);

disp("A 的奇异值")
disp(sigma1)
disp(['第一奇异值占比：',num2str(A*100),'%'])
fprintf('\n');
disp("B 的奇异值")
disp(sigma2)
disp(['第一奇异值占比：',num2str(B*100),'%'])
```
得到
```
A 的奇异值
    6.9853         0         0
         0    0.4527         0
         0         0    0.0000

第一奇异值占比：{{< mark text="93.9137%" >}}

B 的奇异值
    6.3597         0         0
         0    2.9249         0
         0         0    0.0000

第一奇异值占比：{{< mark text="68.4975%" >}}
```

两个矩阵都是秩为 $2$ 的矩阵, 只是第 3 行略有不同, 仔细观察, 我们会感觉到矩阵 $\boldsymbol{A}$ 比矩阵 $\boldsymbol{B}$ 更奇异[^1], 而奇异值分解的结果也说明了这一点.

<hr />

更多..奇异值分解..的内容可以戳 [**这里**](https://matnoble.me/tags/%E5%A5%87%E5%BC%82%E5%80%BC%E5%88%86%E8%A7%A3/)


[^1]: 矩阵 $\boldsymbol{A}$ 的前两行和前两列都是完全相同的; 而矩阵 $\boldsymbol{B}$ 的任意两列都是线性无关的
[^2]: 因为矩阵 $\boldsymbol{V}$ 是 $2\times 2$ 的, 所以可以立即确定. 也就是说 $N(\boldsymbol{A})$ 是空集<br> https://matnoble.me/posts/svd/#%E6%AD%A3%E4%BA%A4%E5%9F%BA%E5%BA%95
