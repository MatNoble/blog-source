+++
title = "在 LaTeX 里更改字体大小"
categories = ["TECH","LaTeX 科技排版"]
date = "2020-03-10T00:18:32+00:00"
keywords = ["在 LaTeX 里更改字体大小","Changing the font size in LaTeX","font size","经验分享","技术总结","LaTeX","matnoble","数系家园","数学小兵儿"]
tags = [""]
katex = true
series = ["latex"]
toc = true
+++

<img src="https://imgkr.cn-bj.ufileos.com/4e7ca500-bdca-42dc-9444-bffa8af84fc5.png" width="95%" />
<div align="center"><a href="/series/latex">◎ 你过来啊 🤞</a></div>

在 $\LaTeX$ 里改变字体大小分为两个层级, 一是整个文档统一调整, 一是设置文档中某个部分的字体大小. 

- 全局调整:<br>
会..影响..所有字体的大小, 注意并不是将所有字都设置成一样大, 正文部分, 标题, 注脚相应地变大或缩小.
- 局部设置: <br>
一个字, 几行字, 表格内的字等等都可以被单独设置修改．

## 全局调整

在标准的文档类, 如 `article`, `report` 以及 `book` 默认支持 3 种不同的字体大小 `10pt(默认), 11pt, 12pt`. 通过一下命令进行全局修改


```tex
\documentclass[12pt]{article}
```

如果, 你需要使用更多的字体大小, 可以使用[extsizes 包](https://mirror.bjtu.edu.cn/ctan/macros/latex/contrib/extsizes/extsizes.pdf). 它提供了更多的可选择项: `8pt, 9pt, 10pt, 11pt, 12pt, 14pt, 17pt, 20pt`. 具体地

```tex
%Article
\documentclass[9pt]{extarticle}
%Report
\documentclass[14pt]{extreport}
```

## 局部调整

$\LaTeX$ 提供了以下局部修改字体大小的命令:

```tex
\Huge
\huge
\LARGE
\Large
\large
\normalsize (default)
\small
\footnotesize
\scriptsize
\tiny
```
显示效果如下:

{{< imgcap src="https://ttfou.com/images/2020/03/10/2269ec427e14c1747ace0b0b244764ca.png" title="LaTeX 局部调整字体" >}}

{{< notice note >}}
- 在一份文档中, 不要使用太多不同字体. 
- 尽量不要使用太大太小的字体.
{{< /notice >}}

有两种方式来使用这种命令

```tex
% inline
{\Large This is some large text}
 
% environment
\begin{footnotesize}
This is some large text
\end{footnotesize}
```

<hr />

参考自 [Changing the font size in LaTeX](https://texblog.org/2012/08/29/changing-the-font-size-in-latex/)
