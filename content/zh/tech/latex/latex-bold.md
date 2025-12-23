+++
title = "LaTeX 加粗指南：文本与公式"
description = "LaTeX 加粗全攻略：掌握 textbf、bm 宏包的使用，轻松实现文本、数学公式、向量及矩阵的加粗效果。"
categories = ["TECH","LaTeX 科技排版"]
date = "2020-03-04T00:10:25+08:00"
lastmod = "2025-12-23T00:00:00+08:00"
keywords = ["文字加粗", "矩阵加粗", "向量加粗", "LaTeX", "matnoble", "数系家园", "数学小兵儿", "LaTeX排版", "LaTeX Typesetting", "数学公式编辑", "科技论文写作", "MatNoble", "LaTeX Tutorial"]
katex = true
series = ["latex"]
tags = ["排版微调", "字体设置"]
+++

在 $\LaTeX{}$ 里, 给文本加粗有两种: 一种是普通文字, 一种是数学环境

<!--more-->

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
