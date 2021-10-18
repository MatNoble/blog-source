+++
title = "LaTeX 给普通文本和数学环境加粗"
description = "你知道如何给矩阵和向量正确加粗吗？"
categories = ["TECH","LaTeX 科技排版"]
date = "2020-03-04T00:10:25+00:00"
keywords = ["文字加粗","矩阵加粗","向量加粗","LaTeX","matnoble","数系家园","数学小兵儿"]
mathjax = true
series = ["latex"]
tags = [""]
+++

在 $\LaTeX{}$ 里, 给文本加粗有两种: 一种是普通文字, 一种是数学环境

## 普通文本

```tex
数系家园

\textbf{数系家园}

{\bfseries 数系家园}
```
<center>
数系家园<br>
$\textbf{数系家园}$<br>
$\textbf{数系家园}$
</center>

> `\bfseries`与`\textbf`显示效果并没有显著不同, 但建议采用前者[^1]

## 数学环境

### 向量

可以选择带有向量箭头

```tex
$ \vec a $
```

$$ \vec a $$

任意长度的箭头

```tex
$ \overrightarrow{AB} $
```

$$ \overrightarrow{AB} $$

要想加粗向量, 建议载入`bm`包

```tex
\usepackage{bm}
$\bm{a}$
```

$$\boldsymbol{a}$$

### 矩阵

矩阵粗体可以有两种

- 直体

```tex
$\mathbf{ABC}$
```

$$\mathbf{ABC}$$

- 斜体

```tex
$\boldsymbol{ABC}$
```

$$\boldsymbol{ABC}$$

[^1]: https://tex.stackexchange.com/questions/131180/bfseries-bolds-more-than-intended
