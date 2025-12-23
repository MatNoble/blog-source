+++
title = "LaTeX 间距调整指南：7种常用命令"
categories = ["TECH","LaTeX 科技排版"]
date = "2019-12-31T00:23:25+08:00"
lastmod = "2025-12-23T00:00:00+08:00"
keywords = ["控制空格间距", "经验分享", "技术总结", "LaTeX", "matnoble", "数系家园", "数学小兵儿", "LaTeX排版", "LaTeX Typesetting", "数学公式编辑", "科技论文写作", "MatNoble", "LaTeX Tutorial"]
katex = true
description = "在 LaTeX 排版中，精准控制空格间距是实现专业排版效果的关键。本文详细总结了从 \\quad 到紧贴 (\\!) 的 7 种常用空格命令，并配合数学公式案例展示其实际效果，助你轻松掌握精细化排版技巧。"
series = ["latex"]
tags = ["排版微调", "间距调整"]
+++

{{< imgcap src="/images/latex-banner.svg" title="LaTeX 排版教程系列图片横幅">}}

在 LaTeX 默认的排版规则中，系统会自动处理大部分字符间的空隙。然而，在处理复杂的数学公式（如积分、微分算子）或特定的文本对齐时，默认间距往往显得不够精致。

**“排版之美，在于留白。”** 精准地控制水平间距，不仅能消除公式的拥挤感，还能引导读者的视线，使文档看起来更加专业和赏心悦目。本文为您总结了最常用的几种水平间距控制命令。

<!--more-->

| 空格类型       | 语法       | 效果         | 具体间隔       |
|:---------------|:----------:|:------------:|:---------------|
| 两个 quad 空格 | a \qquad b | $a \qquad b$ | 两个 m 的宽度  |
| quad 空格      | a \quad b  | $a \quad b$  | 一个 m 的宽度  |
| 大空格         | a \\ b     | $a \\ b$     | 1/3m 宽度      |
| 中等空格       | a \\; b    | $a \\;b$     | ２/7m 宽度     |
| 小空格         | a \\, b    | $a \\,b$     | １/6m 宽度     |
| 正常间距       | ab         | $ab$         |                |
| 紧贴           | a \\! b    | $a \\!b$     | 缩进 1/6m 宽度 |

> **举个例子**

```tex
\begin{cases}
-\Delta u = 1 \quad &x \in \Omega
\\[3pt]
u = g &x \in \partial \Omega
\end{cases}
```

$$
\begin{cases}
-\Delta u = 1 \quad &x \in \Omega
\\\\[3pt]
u = g &x \in \partial \Omega
\end{cases}
$$
