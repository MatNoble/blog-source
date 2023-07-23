+++
title = "一行代码为 LaTeX 修改数学公式字体"
description = "LaTeX 数学公式换字体也不难"
categories = ["TECH","LaTeX 科技排版"]
tags = [""]
date = "2020-02-27T00:19:35+00:00"
keywords = ["经验分享","技术总结","LaTeX","自定义字体","matnoble","数系家园"]
katex = true
series = ["latex"]
+++

<img src="https://imgkr.cn-bj.ufileos.com/4e7ca500-bdca-42dc-9444-bffa8af84fc5.png" width="95%" />
<div align="center"><a href="/series/latex">◎ 你过来啊 🤞</a></div>

排版公式是 $\LaTeX$ 的强项, 但同一个字体看的次数多了, 也难免审美疲劳．所以, 今天用简单的几行命令改变一下公式的字体

- 首先导入美国数学学会字体包

```tex
\usepackage{amsmath,amsthm,amsfonts,amssymb,bm}
```

然后尝试不同字体:

- Times New Roman

最常用的新罗马字体

```tex
\usepackage{newtxtext,newtxmath}
```

![Times New Roman](https://imgkr.cn-bj.ufileos.com/543ebd89-f925-4b75-9159-42eb20f9bf63.svg)

-  Times

```tex
\usepackage{mathptmx}
```

![mathptmx](https://imgkr.cn-bj.ufileos.com/4c702f82-0956-4b85-a7e0-f1451ea3f4b1.svg)

- Charter

```tex
\usepackage{charter}
```
![charter](https://imgkr.cn-bj.ufileos.com/16ca65ab-36f5-431f-9c53-428c226d232e.svg)

- Fourier

```tex
\usepackage{fourier}
```
![fourier](https://imgkr.cn-bj.ufileos.com/77b326e4-187c-4548-b846-fb184504336c.svg)

![](https://imgkr.cn-bj.ufileos.com/21455db0-72b2-454f-8f12-6e0ef5eda714.png)

上面几个字体效果图, 仔细看还是能看起来出区别来的. 喜欢哪个, 就拿去用吧!
