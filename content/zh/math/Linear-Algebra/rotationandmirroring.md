+++
title = "正交矩阵之旋转与镜射"
date = "2020-02-10T00:00:00+00:00"
description = "旋转矩阵与镜射矩阵"
categories = ["MATH","线代拾遗"]
tags = ["矩阵","特殊矩阵"]
keywords = ["矩阵","线性代数","matrix","linear algebra","旋转与镜射","正交矩阵","MatNoble"]
toc = true
mathjax = true
series = ["mla"]
aliases = ["/posts/rotationandmirroring"]
+++

<!--more-->

## 正交矩阵

假设 $A$ 为 $n$ 阶实方阵, 满足

$$A^{\mathsf T}A = AA^{\mathsf T} = I$$

即 $A^{\mathsf T}=A^{-1}$, 称 $A$ `正交矩阵`(orthogonal matrix). 由上式可知: $\lVert A \rVert = \pm 1$.

<br />

设 $A=[\alpha_1, \dots, \alpha_n],\ \alpha_i$ 为 $A$ 的列向量, 满足

$$
\alpha_i \cdot \alpha_j=
\begin{cases}
1 \quad i = j
\\\\[3pt]
0 \quad i \neq j
\end{cases}
$$

即正交矩阵的列向量是 $\mathbb{R}^n$ 的`标准正交基`.

<br />

**正交矩阵满足如下性质:**  

> 1. 对于任意 $\mathbf{x}, \mathbf{y}\in\mathbb{R}^n$, $$(A\mathbf{x})^{\mathsf T}(A\mathbf{y})=\mathbf{x}^{\mathsf T}\mathbf{y}$$  
> 2. 对于任一 $\mathbf{x}\in\mathbb{R}^n$, $$\Vert A\mathbf{x}\Vert=\Vert\mathbf{x}\Vert$$  
> 3. 对于任意 $\mathbf{x},\mathbf{y}\in\mathbb{R}^n$, $$\Vert A\mathbf{x}-A\mathbf{y}\Vert=\Vert\mathbf{x}-\mathbf{y}\Vert$$
<p style="font-size:15px;color:gray" >上述性质采用循环式证明不难验证</p>

<br />

假设 $A\mathbf{x} = \lambda\mathbf{x}, \, \mathbf{x}\neq 0$, 利用性质 2

$$
\Vert\mathbf{x}\Vert = \Vert A\mathbf{x}\Vert= \Vert\lambda \mathbf{x}\Vert = \vert\lambda\vert \Vert\mathbf{x}\Vert
$$

得到: $\vert\lambda\vert = 1$, 即正交矩阵的特征值的绝对值等于 $1$.

## 旋转

若 $\lVert A \rVert = 1$, 则成正交矩阵 $A$ 为`旋转矩阵`. 当 $n=2$ 时, 逆时针旋转 $\theta$ 角度的旋转矩阵为:

$$
R(\theta) = \begin{bmatrix} \cos(\theta) & -\sin(\theta) \\\\ \sin(\theta) & \cos(\theta) \end{bmatrix}
$$

显然, $R(\theta)^{\mathsf T}=R(-\theta)=R^{-1}(\theta)$, 且

$$\lVert R(\theta) \rVert =\cos^2\theta+\sin^2\theta=1$$ 

以及 $R(\theta)$ 的特征值为 $\cos\theta\pm i\sin\theta$, 其中 $i=\sqrt{-1}$.

## 镜射

令 $\mathcal{U}$ 为 $\mathbb{R}^n$ 的一个子空间，且 $P$ 是值域为 $\mathcal{U}^\perp$ 的正交投影矩阵，满足[^1]

$$P^2=P=P^T$$ 

给定 $\mathbf{x}\in\mathbb{R}^n$, 写出 $\mathbf{x}=P\mathbf{x}+(I-P)\mathbf{x}$, 其中 $P\mathbf{x}\in\mathcal{U}^\perp$, $(I-P)\mathbf{x}\in\mathcal{U}$, 因为 

$$
\begin{aligned}
(P\mathbf{x})^{\mathsf T}(I-P)\mathbf{x} &=\mathbf{x}^{\mathsf T}P^{\mathsf T}(I-P)\mathbf{x} \\\\[3pt]
&=\mathbf{x}^{\mathsf T}(P-P^2 )\mathbf{x}=0
\end{aligned}
$$

<br />

<img src="https://imgkr.cn-bj.ufileos.com/1e618ee3-8723-47bb-be2b-d19084ace2b4.png" title="镜射矩阵" alt="镜射矩阵">

假设 $n=3$,  如上图所示, 令 

$$S\mathbf{x}=P\mathbf{x}+(P-I)\mathbf{x}=(2P-I)\mathbf{x}$$

对于子空间 $\mathcal{U}^\perp$，我们称 $S\mathbf{x}$ 是点 $\mathbf{x}$ 的镜射点，镜射矩阵为

$$ S=2P-I$$

<br />

假设 $n=2$, 

> - 若 $\mathcal{U}^\perp=\{\mathbf{0}\}$, 则正交投影矩阵为 $P_1=0$, 对于原点的镜射矩阵则为 $S_1=-I_2$.

> - 若 $\mathcal{U}^\perp=L$ 为一穿越原点的直线, 称为`镜射轴`, 设 $L$ 与正 $X$ 轴的夹角为 $\phi$ (以下夹角皆为逆时针转角).  
> 
> 令 $\mathbf{v}=[\cos\phi, \, \sin\phi ]^{\mathsf T}$ 代表镜射轴 $L$ 的方向向量, 即 $L=\text{span}\\{\mathbf{v}\\}$. 写出映至直线 $L$ 的正交投影矩阵 
> $$P_2=\frac{\mathbf{v}\mathbf{v}^{\mathsf T}}{\mathbf{v}^{\mathsf T}\mathbf{v}}=\mathbf{v}\mathbf{v}^{\mathsf T}$$ 
> 相应的, 镜射轴 $L$ 的镜射矩阵为
> 
>$$ 
>\begin{aligned}
>S_2&=2\mathbf{v}\mathbf{v}^{\mathsf T}-I \\\\[3pt] 
>&=\begin{bmatrix} 2\cos^2\phi-1&2\cos\phi\sin\phi \\\\ 2\sin\phi\cos\phi&2\sin^2\phi-1 \end{bmatrix} \\\\[3pt]
>&= \begin{bmatrix} \cos 2\phi&\sin 2\phi \\\\ \sin 2\phi &-\cos 2\phi \end{bmatrix}
>\end{aligned} 
>$$

[^1]: https://matnoble.me/posts/matrixleastsquares/#%E6%AD%A3%E4%BA%A4%E6%8A%95%E5%BD%B1%E7%9F%A9%E9%98%B5
