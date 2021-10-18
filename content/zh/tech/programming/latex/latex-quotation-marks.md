+++
title = "LaTeX 引号你用对了吗？"
categories = ["TECH","LaTeX 科技排版"]
date = "2019-12-30T00:23:25+00:00"
keywords = ["引号","经验分享","技术总结","LaTeX","matnoble","数系家园","数学小兵儿"]
tags = [""]
katex = true
series = ["latex"]
+++

<img src="https://imgkr.cn-bj.ufileos.com/4e7ca500-bdca-42dc-9444-bffa8af84fc5.png" width="95%" />
<div align="center"><a href="/series/latex">◎ 你过来啊 🤞</a></div>

<!--more-->

$\LaTeX$ 排版时, 如果使用键盘上的引号, 会得到顺撇的引号:

```tex
"顺撇引号"
```

效果是这样的:

$"顺撇引号"$

<br />

正确的使用方法是: **左引号用 `Tab` 键上方的键(数字 1 左边的键), 右引号用键盘的引号键**

```tex
`单引号'

``双引号''

``双引号 `单引号' 双引号''
```

效果如下:

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/4c6275f4-50da-45e8-b812-1fefbabcc123.webp" title="正常引号" >}}
