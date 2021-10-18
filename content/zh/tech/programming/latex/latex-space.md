+++
title = "LaTeX 控制空格间距"
categories = ["TECH","LaTeX 科技排版"]
date = "2019-12-31T00:23:25+00:00"
keywords = ["控制空格间距","经验分享","技术总结","LaTeX","matnoble","数系家园","数学小兵儿"]
mathjax = true
series = ["latex"]
tags = [""]
+++

<img src="https://imgkr.cn-bj.ufileos.com/4e7ca500-bdca-42dc-9444-bffa8af84fc5.png" width="95%" />
<div align="center"><a href="/series/latex">◎ 你过来啊 🤞</a></div>

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

<br />

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
