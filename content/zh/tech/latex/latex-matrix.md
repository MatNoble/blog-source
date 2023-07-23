+++
title = "LaTeX 矩阵"
categories = ["TECH","LaTeX 科技排版"]
date = "2020-01-14T00:13:54+00:00"
keywords = ["圆括号","方括号","大括号","行列式","分割线","矩阵","行内矩阵","经验分享","技术总结","LaTeX","matnoble","数系家园","数学小兵儿"]
tags = [""]
mathjax = true
series = ["latex"]
toc = true
+++

<img src="https://imgkr.cn-bj.ufileos.com/4e7ca500-bdca-42dc-9444-bffa8af84fc5.png" width="95%" />
<div align="center"><a href="/series/latex">◎ 你过来啊 🤞</a></div>

<!--more-->

 
## 普通

```tex
\begin{matrix}
1 & 2 & 3\\
a & b & c
\end{matrix}
```

$$
\begin{matrix}
1 & 2 & 3\\\\
a & b & c
\end{matrix}
$$

## 圆括号

```tex
\begin{pmatrix}
1 & 2 & 3\\
a & b & c
\end{pmatrix}
```

$$
\begin{pmatrix}
1 & 2 & 3\\\\
a & b & c
\end{pmatrix}
$$

## 方括号

```tex
\begin{bmatrix}
1 & 2 & 3\\
a & b & c
\end{bmatrix}
```

$$
\begin{bmatrix}
1 & 2 & 3\\\\
a & b & c
\end{bmatrix}
$$

## 大括号

```tex
\begin{Bmatrix}
1 & 2 & 3\\\\
a & b & c
\end{Bmatrix}
```

$$
\begin{Bmatrix}
1 & 2 & 3\\\\
a & b & c
\end{Bmatrix}
$$

## 行列式

```tex
\begin{vmatrix}
1 & 2 & 3\\\\
a & b & c
\end{vmatrix}
```

$$
\begin{vmatrix}
1 & 2 & 3\\\\
a & b & c
\end{vmatrix}
$$

```tex
\begin{Vmatrix}
1 & 2 & 3\\\\
a & b & c
\end{Vmatrix}
```

$$
\begin{Vmatrix}
1 & 2 & 3\\\\
a & b & c
\end{Vmatrix}
$$

## 分割线

```tex
\left[
  \begin{array}{c|c}
    A & B\\\\
    \hline 
    C & D
  \end{array}
\right]
```

$$
\left[
  \begin{array}{c|c}
    A & B\\\\
    \hline 
    C & D
  \end{array}
\right]
$$

## 行内矩阵

```tex
$\begin{bmatrix} 
a & b\\ 
c & d 
\end{bmatrix}$

$\Big[\begin{smallmatrix} 
a & b\\
c & d 
\end{smallmatrix}\Big]$.
```

这是在行内使用上述行间矩阵
$\begin{bmatrix} 
a & b\\\\ 
c & d 
\end{bmatrix}$ 数学小兵儿 MatNoble 数系家园 数学小兵儿 MatNoble 数系家园 数学小兵儿 MatNoble 数系家园 数学小兵儿 MatNoble 数系家园 数学小兵儿 MatNoble 数系家园 数学小兵儿 MatNoble 数系家园


有时显得有些过大, 使某行间距过大. 用 `smallmatrix` 得到这样的效果 
$\Big[\begin{smallmatrix} 
a & b\\\\ 
c & d 
\end{smallmatrix}\Big]$ 数学小兵儿 MatNoble 数系家园 数学小兵儿 MatNoble 数系家园 数学小兵儿 MatNoble 数系家园 数学小兵儿 MatNoble 数系家园 数学小兵儿 MatNoble 数系家园 数学小兵儿 MatNoble 数系家园
