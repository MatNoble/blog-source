+++
title = "LaTeX 引号输入指南"
categories = ["TECH","LaTeX 科技排版"]
date = "2019-12-30T00:23:25+08:00"
lastmod = "2025-12-23T00:00:00+08:00"
keywords = ["引号", "经验分享", "技术总结", "LaTeX", "matnoble", "数系家园", "数学小兵儿", "LaTeX排版", "LaTeX Typesetting", "数学公式编辑", "科技论文写作", "MatNoble", "LaTeX Tutorial"]
tags = ["排版微调", "标点符号"]
katex = true
series = ["latex"]
description = "详解 LaTeX 中单引号和双引号的正确输入方式，解决直接使用键盘引号导致的格式错误问题。" 
+++

{{< imgcap src="/images/latex-banner.svg" title="LaTeX 排版教程系列图片横幅">}}

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
