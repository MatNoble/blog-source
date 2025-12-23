+++
title = "LaTeX 数学字体切换指南"
description = "厌倦了默认数学字体？本文介绍如何通过一行代码切换 Times New Roman, Charter, Fourier 等多种 LaTeX 数学字体。"
categories = ["TECH","LaTeX 科技排版"]
tags = ["字体设置", "数学公式"]
date = "2020-02-27T00:19:35+08:00"
lastmod = "2025-12-23T00:00:00+08:00"
keywords = ["经验分享", "技术总结", "LaTeX", "自定义字体", "matnoble", "数系家园", "LaTeX排版", "LaTeX Typesetting", "数学公式编辑", "科技论文写作", "MatNoble", "LaTeX Tutorial"]
katex = true
series = ["latex"]
+++

{{< imgcap src="/images/latex-banner.svg" title="LaTeX 排版教程系列图片横幅">}}

排版公式是 $\LaTeX$ 的强项, 但同一个字体看的次数多了, 也难免审美疲劳．所以, 今天用简单的几行命令改变一下公式的字体

<!--more-->

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

![LaTeX 不同数学字体效果对比](https://imgkr.cn-bj.ufileos.com/21455db0-72b2-454f-8f12-6e0ef5eda714.png)

上面几个字体效果图, 仔细看还是能看起来出区别来的. 喜欢哪个, 就拿去用吧!
