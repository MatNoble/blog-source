
+++
title = "LaTeX 定界符"
categories = ["TECH","LaTeX 科技排版"]
date = "2020-03-23T00:12:07+00:00"
keywords = ["LaTeX 定界符","经验分享","技术总结","LaTeX","matnoble","数系家园","数学小兵儿"]
tags = [""]
katex = true
series = ["latex"]
+++

<img src="https://imgkr.cn-bj.ufileos.com/4e7ca500-bdca-42dc-9444-bffa8af84fc5.png" width="95%" />
<div align="center"><a href="/series/latex">◎ 你过来啊 🤞</a></div>

<!--more-->

<br>

$\LaTeX$ 提供了多种形式的定界符，包括各种括号: 

```tex
() 
[] 
\{ \} 
\langle \rangle
| |
\| \|
```

$$ 
() \quad [] \quad \\{ \\} \quad \langle \rangle \quad || \quad \\| \\| 
$$

而最后的绝对值和范数符号，amsmath 宏包推荐建议使用`\lvert \rvert`　和`\lVert \rVert` 代替

$$
\lvert  \rvert \quad \lVert \rVert
$$

而当遇到「个子比较高」的公式时，就需要 `\left \right` 配对使用来自动调整定界符的大小

```tex
(\frac{1}{1-x})^2 \qquad
\left( \frac{1}{1-x} \right)^2
```

$$
(\frac{1}{1-x})^2 \qquad
\left( \frac{1}{1-x} \right)^2
$$


**注意:** `\left` 和 `\right` 必须配对使用。只需要单个定界符时，另一个定界符写成`\left.` 或 `\right.` 

```tex
\frac{1}{x^2}|_0^1 \qquad
\left. \frac{1}{x^2}\right|_0^1
```

$$
\frac{1}{x^2}|_0^1 \qquad
\left. \frac{1}{x^2}\right|_0^1
$$

除了自动调整大小，amsmath 宏包推荐使用 `\big(1.5倍), \Big(2倍), \bigg(2.5倍), \Bigg(3倍)` ，更精准地调整定界符的大小，以达到更美观的效果

```tex
\begin{align*}
\left((x-1)(x+1)\right)^2 
\\[3pt]
\bigl( (x-1)(x+1) \bigr)^2
\end{align*}
```

![](https://imgkr.cn-bj.ufileos.com/5b410414-8fb7-4123-93c7-410978c5dc56.svg)

<br>
$$
\Biggl( \biggl(  \Bigl( \bigl( \bigr)  \Bigr) \biggr) \Biggr)
$$
$$
\Biggl[ \biggl[  \Bigl[ \bigl[ \bigr]  \Bigr] \biggr] \Biggr]
$$
$$
\Biggl\{ \biggl\{  \Bigl\{ \bigl\{ \bigr\}  \Bigr\} \biggr\} \Biggr\}
$$
$$
\Biggl\langle \biggl\langle \Bigl\langle \bigl\langle \bigr\rangle  \Bigr\rangle \biggr\rangle \Biggr\rangle
$$
$$
\Biggl\lvert \biggl\lvert  \Bigl\lvert \bigl\lvert \bigr\rvert  \Bigr\rvert  \biggr\rvert  \Biggr\rvert 
$$
$$
\Biggl\lVert \biggl\lVert  \Bigl\lVert \bigl\lVert \bigr\rVert  \Bigr\rVert  \biggr\rVert  \Biggr\rVert 
$$
