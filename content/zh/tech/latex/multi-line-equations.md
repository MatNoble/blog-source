+++
title = "LaTeX 排版多行公式"
categories = ["TECH","LaTeX 科技排版"]
date = "2020-03-23T00:22:50+00:00"
keywords = ["multline","amsmath","align","aligned","gather","gathered","cases","empheq","对齐公式","LaTeX 排版多行公式","多行公式并排","经验分享","技术总结","LaTeX","matnoble","数系家园","数学小兵儿"]
tags = [""]
mathjax = true
series = ["latex"]
toc = true
+++

<img src="https://imgkr.cn-bj.ufileos.com/4e7ca500-bdca-42dc-9444-bffa8af84fc5.png" width="95%" />
<div align="center"><a href="/series/latex">◎ 你过来啊 🤞</a></div>


<br />

在 $\LaTeX$ 排版过程中，多行公式经常被遇到。其中，又分为多种情况

- 公式本身很长
- 公式组
  - 需加定界符，如花括号 `{`

首先，在导言区加载 `amsmath`

```tex
\usepackage{amsmath}
```

## 长公式「被迫」折行

使用 `multline` 环境，实现首行局左，中间居中，末行局右

```tex
\begin{multline}
    p = 3x^6 + 14x^5y + 590x^4y^2 + 19x^3y^3\\ 
	+ \sin{x} + \cos{y} + \tan{a} + e^{x+y} \\
    - 12x^2y^4 - 12xy^5 + 2y^6 - a^3b^3
\end{multline}
```

<div>
\begin{multline}
p = 3x^6 + 14x^5y + 590x^4y^2 + 19x^3y^3 \\
+ \sin{x} + \cos{y} + \tan{a} + e^{x+y} \\
- 12x^2y^4 - 12xy^5 + 2y^6 - a^3b^3
\end{multline}
</div>

**注意**: 若不需要编号则使用 `multline*`

## 公式并排

### 分别编号

- 需要对齐

使用 `align` 环境，在需要对齐的地方加 `&`

```tex
\begin{align} 
    a & = b + c \label{eq:eq1}
    \\[3pt]
    & = d + e  \label{eq:eq2}
\end{align}
% 分别交叉引用
式 (\ref{eq:eq1}) 和式 (\ref{eq:eq2}) 采用 align 对齐环境

```
<div>
\begin{align} 
a & = b + c \label{eq:eq1}
\\[3pt]
& = d + e  \label{eq:eq2}
\end{align}
</div>

式 (\ref{eq:eq1}) 和式 (\ref{eq:eq2}) 采用 `align` 对齐环境

- 使用 `\notag` 对某行不编号

```tex
\begin{align} 
    a = {}& b + c \\ 
    = {}& d + e + f + g + h + i + j + k + l \notag \\ 
    &{} + m + n + o \\ 
    = {}& p + q + r + s 
\end{align}
```

<div>
\begin{align} 
a= {}& b + c \\ 
= {}& d + e + f + g + h + i + j + k + l \notag \\ 
&{} + m + n + o \\ 
= {}& p + q + r + s 
\end{align}
</div>
  
**注意**: 因为此处在 `+` (二元运算符)处对齐，所以应该在对齐符号 `&` 前后使用一个占位符 `{}` 来避免不正确的缩进[^1]

- 多列对齐

```tex
\begin{align*} 
    a &=1 & b &=2 & c &=3 \\ 
    d &=-1 & e &=-2 & f &=-5 
\end{align*}
```

<div>
\begin{align*} 
a &=1 & b &=2 & c &=3 \\ 
d &=-1 & e &=-2 & f &=-5 
\end{align*}
</div>

- 不需要对齐

使用 `gather` 环境

```tex
\begin{gather} 
    a = b + c \\ 
    d = e + f + g \\ 
    h + i = j + k \notag \\ 
    l + m = n 
\end{gather}
```

<div>
\begin{gather} 
    a = b + c \\ 
    d = e + f + g \\ 
    h + i = j + k \notag \\ 
    l + m = n 
\end{gather}
</div>

**注意**: 若不需要编号则使用 `align*` 或 `gather*`

### 统一编号

使用 `aligned / gathered` 环境，并且依赖 `\begin{equation} \end{equation}`，若不须加编号则使用`\[ \]`包裹。

```tex
\begin{equation}
    \begin{aligned} 
        a &= b + c \\
        d &= e + f + g \\
        h + i &= j + k \\
        l + m &= n
    \end{aligned}
\end{equation}

\[
    \begin{gathered}
        a = b + c \\
        d = e + f + g \\
        h + i = j + k \\
        l + m = n
    \end{gathered}
\]
```

带编号且对齐

<div>
\begin{equation}
\begin{aligned} 
a &= b + c \\ 
d &= e + f + g \\ 
h + i &= j + k \\ 
l + m &= n 
\end{aligned} 
\end{equation}
</div>

不带编号不对齐

<div>
\[
    \begin{gathered}
        a = b + c \\
        d = e + f + g \\
        h + i = j + k \\
        l + m = n
    \end{gathered}
\]
</div>

### 添加定界符

有时需要在多行公式中添加[定界符](https://matnoble.github.io/tech/latex/delimiter/)，最常用的就是在公式左端加上花括号 `{`，下面介绍 3 种方法实现该功能。

实际上，除了 `cases` 环境，其他方法都可以实现其他定界符，尤其是最后一种。

- `\left\{ \right.`
  
  - `aligned / gathered`
  
  ```tex
  \begin{equation}
    \left\{
      \begin{gathered}
          a_{11} x_{1} + a_{12} x_{2} + a_{13} x_{2} = b_{1}
          \\[3pt]
          a_{21} x_{1} + a_{22} x_{3} + a_{23} x_{3} = b_{2}
      \end{gathered}
    \right.
  \end{equation}

  \[
      \left\{
        \begin{aligned}
            a_{11} x_{1} + a_{12} x_{2} + a_{13} x_{2} = b_{1}
            \\[3pt]
            a_{22} x_{3} + a_{23} x_{3} = b_{2}
        \end{aligned}
      \right.
  \]
  ```
  不对齐带编号
  <div>
  \begin{equation}
    \left\{
      \begin{gathered}
          a_{11} x_{1} + a_{12} x_{2} + a_{13} x_{2} = b_{1}
          \\[3pt]
          a_{21} x_{1} + a_{22} x_{3} + a_{23} x_{3} = b_{2}
      \end{gathered}
    \right.
  \end{equation}
  </div>
  对齐不带编号
  <div>
  \[
      \left\{
        \begin{aligned}
            a_{11} x_{1} + a_{12} x_{2} + a_{13} x_{2} = b_{1}
            \\[3pt]
            a_{22} x_{3} + a_{23} x_{3} = b_{2}
        \end{aligned}
      \right.
  \]
  </div>

  - `array` 环境[^3]
  ```tex
  \[
    |x| = \left\{
      \begin{array}{rl}
        -x & \mbox{if } x < 0,\\ 
        0 & \mbox{if } x = 0,\\ 
        x & \mbox{if } x > 0. 
      \end{array} \right.
  \]
  ```
  <div>
  \[
    |x| = \left\{
      \begin{array}{rl}
        -x & \mbox{if } x < 0,\\ 
        0 & \mbox{if } x = 0,\\ 
        x & \mbox{if } x > 0. 
      \end{array} \right.
  \]
  </div>

- `cases` 环境[^5]

  - 分别编号<br />
  需要在`导言区`载入 `cases` 宏包 `\usepackage{cases}`，并且放在 `amsmath` 之后
  ```tex
  \begin{numcases} {|x| =}
    -x & \mbox{if } x < 0 \label{eq:eq1},\\
    0 & \mbox{if } x = 0,\\
    x & \mbox{if } x > 0.
  \end{numcases}
  
  \begin{subnumcases} {\label{eq:eq4} |x| =}
      -x & \mbox{if } x < 0,\\
      0 & \mbox{if } x = 0\label{eq:eq42},\\
      x & \mbox{if } x > 0.
  \end{subnumcases}
  
  式 (\ref{eq:eq1}) 和 式 (\ref{eq:eq4}) 和 式 (\ref{eq:eq42})
  ```
  
  [^4]<img src="https://imgkr.cn-bj.ufileos.com/5ee5ecdf-8f8e-4606-8488-30e43ab4b871.png" width="90%"/>

  - 统一编号
  ```tex
  \begin{equation} |x| =
    \begin{cases}
        -x & \mbox{if } x < 0,\\
        0 & \mbox{if } x = 0,\\
        x & \mbox{if } x > 0.
    \end{cases}
  \end{equation}
  ```
  <div>
  \begin{equation} |x| =
      \begin{cases}
          -x & \mbox{if } x < 0,\\
          0 & \mbox{if } x = 0,\\
          x & \mbox{if } x > 0.
      \end{cases}
  \end{equation}
  </div>

  *注意与 `array` 环境的区别*

- `empheq` 环境

其与之前的都不同，<u>它可以从整个公式(组)四周加载定界符</u>[^2]。从左端、从右端，甚至是用一个..盒子..包住整个公式(组)

首先在 `导言区` 载入 `\usepackage{empheq}`。使用它的框架是这样:

```tex
\usepackage{empheq}
\begin{empheq}[markup instructions]{AMS env name}
  < content AMS environment >
\end{empheq}
```

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/cab3a67a-01f2-4b91-b3c3-b7aa47b07852.jpeg" title="AMS env name" width="90%">}}

对于 `定界符号`，可以在 `markup instructions` 处填入下表中的命令

<img src="https://imgkr.cn-bj.ufileos.com/13c84ea6-f584-41c0-94a1-77ca7cfa7ac4.jpeg" width="90%" />

```tex
\begin{empheq}[left=\empheqlbrace]{align*}
    E & =mc^2
    \\[3pt]
    Y & = \sum_{n=1}^\infty \frac{1}{n^2}
\end{empheq}
```
<img src="https://imgkr.cn-bj.ufileos.com/2c6cd65f-09b7-4748-93c9-d6ac5d794c8f.png" width="20%" />

<hr />

`empheq` 环境还可以实现以下效果，感兴趣的可以看下官方文档[^2]

<img src="https://imgkr.cn-bj.ufileos.com/7e8e342b-0097-451b-a826-4a163dd449c1.png" width="80%"/>

[^1]: https://geelaw.blog/entries/la-composition-soignee-des-formules-mathematiques/#mistakes-latex-align-env
[^2]: a way to produce arbitrary delimiters that span entire math displays <br> http://mirror.lzu.edu.cn/CTAN/macros/latex/contrib/mathtools/empheq.pdf
[^3]: `array` 环境经常出现在多维数组中 <br> https://mirror.bjtu.edu.cn/ctan/macros/latex/required/tools/array.pdf
[^4]: 因为博客渲染公式的 Mathjax 不支持 `numcases` 环境，所以采用图片展现，也就造成前后问公式编号有些混乱
[^5]: `cases` 环境 http://mirror.lzu.edu.cn/CTAN/macros/latex/contrib/cases/cases.pdf
