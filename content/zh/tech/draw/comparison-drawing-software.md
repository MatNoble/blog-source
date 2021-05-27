+++
title = "绘图工具大比拼"
date = "2020-03-22T00:10:09+00:00"
description = "Comparison drawing software"
categories = ["TECH","好工具高效率"]
tags = ["科研制图"]
keywords = ["绘图工具","绘图工具大比拼","Micsoft Visio","AxGlyph","GeoGebra","Inkscape","一图胜千言","科研制图"]
toc = true
images = ["https://imgkr.cn-bj.ufileos.com/6dd6e180-27d3-4ba1-8dca-1906deda8ae9.svg"]
katex = true
+++

<img src="https://imgkr.cn-bj.ufileos.com/6dd6e180-27d3-4ba1-8dca-1906deda8ae9.svg" alt="blog matnoble.me Comparison drawing software" width="90%"/>

绘图分好多类型, 本文只涉及非编程类的「科研绘图」

「图式」可以帮助创作者更清楚的表达意图, 所谓「一图胜千言」。而高质量的图示更能令读者赏心悦目

{{< blockquote link="http://www.360doc.com/content/20/0101/22/99071_883578538.shtml" >}}
曾经有位论文审稿人在自己的博文中就写道：“我审稿时看稿件的顺序是题目、摘要、图表、前言、参考文献和正文”。<br>
古语云「字如其人」，现在讲「第一印象」，说的都是形象、气质的重要作用，规范的、高质量的图片是发表高水平文章的必备条件。
{{< /blockquote >}}

---

下面, 总结一些本人所用过的非编程式的绘图软件, 并将考虑以下 4 个因素，给出主观评分 😉

- 上手难度
- 成图效果
- 可再编辑性
- 支持设备

## Micsoft Visio

微软家的 Visio 算是我接触的第一个科研类的绘图软件。2017 年春节期间，需要对大三上学期所做的一套程序作总结，在文档中加入图示以辅助思考。

我学 Visio 的“老师”是当时还在读研的姐姐，她学的是工科，需要作图的地方不少。现在印象最深刻的就是教给我：如何组合、拆分图形 😂

当时费了「九牛二虎之力」画了类似以下的图，由于初次使用，修改了很多次（当时姐姐多次劝说我：**做就做好**）。最终效果令当时的我比较满意，而且算是入门 Visio 了

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/a575bb41-129d-48a7-92b0-15259fecfcc7.svg" title="剖分网格" >}}

最近的一次数学建模竞赛中，一位电气专业的队友还是在使用 Visio 作图，而且作得还蛮漂亮的

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/1f25e02a-b9c2-4d37-8dc1-3f2773d97217.svg" title="飞行器飞行示意图" >}}

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/e494637b-4aac-4fe3-9af6-f94a74c4ba89.svg" title="流程图" >}}

Micsoft Visio 上手简单，可以作出高质量的科研用图。但是，个人主观认为，有如下不足

- 作为微软的产品，入门简单，进阶难
- 图片导至微软系产品，质量很好；生成的其他图片格式，用作它用的话，效果就很一般了[^2]
- 若有再编辑的需求，需要保存特定的格式，不方便管理

|    项目    | 得分 |
| :--------: | :--: |
|  上手难度  |  25  |
|  成图效果  |  20  |
| 可再编辑性 |  20  |
|  支持设备  |  20  |
|    总分    |  85  |

## AxGlyph

这是之前提到过的 [AxMath](https://matnoble.me/tech/latex/typeset-bbt/#axmath-%E6%98%AF%E5%85%AC%E5%BC%8F%E7%BC%96%E8%BE%91%E5%99%A8%E7%A5%9E%E5%99%A8) 的“小兄弟”，支持使用 AxMath 输入公式。

本科毕业设计中，都是使用 AxGlyph 作的图，没有选择 Visio 是因为前者对公式输入更好些。

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/17a30e9b-edfe-40a3-b4a7-5a23dd352303.svg" title="Pe 值" width="70%">}}

跟 Visio 一样，AxGlyph 的功能还有很多，我只使用了它的一小部分，下面是官网中的示例图

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/9ececfdd-3dbb-469d-911f-3e8380f0b0c3.png" title="AxGlyph" >}}

与 Visio 有着极其类似的操作逻辑，画图时，图片质量很高，但导出效果总感觉差了一些

|    项目    | 得分 |
| :--------: | :--: |
|  上手难度  |  25  |
|  成图效果  |  22  |
| 可再编辑性 |  20  |
|  支持设备  |  20  |
|    总分   |  87  |

<br>

---

## GeoGebra

{{< blockquote link="https://zh.wikipedia.org/wiki/GeoGebra">}}
GeoGebra 是一款开源的动态几何软件。其绘图的基本元素包括点，直线，线段，多边形，向量，圆锥曲线和函数。 GeoGebra 3.2 及以后的版本还加入了电子表格和正在不断完善的数据处理功能.<br>
GeoGebra 可以完成大量初高等数学中的绘图工作, 比如直接绘制圆锥曲线，对函数求导数，积分，对多项式函数求极值和拐点等，这些极大的方便了教师们制作教学材料。
{{< /blockquote >}}

很早之前就知道 GeoGebra 这个软件了，但一直没有使用过。直到之前写「简述有限元」时遇到要画三维图和坐标轴的刚需

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/8efb50f9-21a2-4163-ac13-39f90d4719b0.png" title="orthogonality" >}}

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/319297e0-9878-48d2-89f0-aecb6f486ffb.svg" title="hat function" >}}

GeoGebra 同样支持用 $\TeX$ 代码输入公式。它还是跨平台的，甚至支持手机端 APP，在浏览器里也可以打开[^4]

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/7f697514-17dd-4ac4-a7df-25b91d4f76ba.png" title="生态系统也太丰富了吧" >}}

但是，总感觉它的风格太鲜明了，不够“纯粹”。用在科研文档里，显得太“花哩胡哨”。而且，它虽然支持导出「矢量图」，但在我有限的使用体验当中，出现 bug 的机会还是挺大的。

|    项目    | 得分 |
| :--------: | :--: |
|  上手难度  |  23  |
|  成图效果  |  22  |
| 可再编辑性  |  20  |
|  支持设备  |  25  |
|    总分   |  90  |

<br>

---

## Inkscape

{{< blockquote link="https://inkscape.org/">}}
Inkscape 是支持 Linux，苹果和视窗桌面系统的专业的高质量的矢量图像编辑器。它是自由和开源的软件。
{{< /blockquote >}}

从 [How I draw figures for my mathematical lecture notes using Inkscape](https://castel.dev/post/lecture-notes-2/#)[^5] 中得知这个免费开源软件，该作者使用「Vim + LaTeX + Inkscape」快速实时记数学笔记

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/ce8a2c09-fecf-46bd-9d2e-8e5cce3e08bf.png" title="对于小哥的手速，在下是自愧不如啊" >}}

如此快速高质量记笔记是我目前难以企及的高度，但是 Inkscape 还是可以学一学的

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/73e3f691-d269-4a73-93ef-1ade1dba2c23.svg" title="博客 logo" width="30%">}}

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/ab83f63b-e721-4f24-9c61-40815143c6df.png" title="unit balls in the sense of different norms" >}}

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/e242449d-f810-4466-8b21-6e2b7ea33a23.png" title="minimal approximation problem">}}

<br />

Inkscape 的最大优点是支持导出 .svg .eps 等高清矢量图[^6]，.svg 格式还可以再编辑。

|    项目    | 得分 |
| :--------: | :--: |
|  上手难度  |  20  |
|  成图效果  |  25  |
| 可再编辑性 |  25  |
|  支持设备  |  25  |
|    总分   |  95  |

<br>

---

## 总结

除了以上, 我还算是用过「TiKZ」

![](https://imgkr.cn-bj.ufileos.com/63a0e6d2-58a3-48c3-a2c2-a5acbf08b50e.svg)
但这其实就是简单的套模板，不是真的会，以后有需要再学。

我使用的制图软件有限，而且以上评分完全是「主观」的，仅供娱乐参考。

非常希望你在评论区留言，告诉我们你平时用哪些制图软件，还可以加上简短的使用感受 ✍ 

另外，我还计划写一些简短的 Inkscape 的学习笔记，介绍一些基本形状的绘制以及使用技巧，之后分享出来，到时也可以给我提一些意见 🙏

![](https://imgkr.cn-bj.ufileos.com/a7efd4ad-9c89-4cfa-bd3c-00358ef783d0.gif)

---

[^2]: 上面数学建模中，队友制的 Visio 图 $\to$ Office Word $\to$ PDF $\to$ $\LaTeX{}$。虽然插图质量得到了保证，但还是有些麻烦。
[^4]: https://www.geogebra.org/classic/
[^5]: 知乎翻译版： https://zhuanlan.zhihu.com/p/64205323
[^6]: 无论如何放大，图像都不失真
