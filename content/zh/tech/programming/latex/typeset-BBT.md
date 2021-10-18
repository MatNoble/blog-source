+++
title = "科技文档排版漫谈"
date = "2020-03-12T00:15:30+00:00"
description = "从 Word 写到 LaTeX"
categories = ["TECH","LaTeX 科技排版"]
tags = ["latex"]
keywords = ["文档排版漫谈","Office Word","LaTeX","AxMath","Beamer","Document","mathpix snip","分享知识"]
toc = true
katex = true
images = ["https://ttfou.com/images/2020/03/12/9aa2a22b65d587a51d2e275fc57b00d7.png"]
+++

## Word 排版技能提升

在之前很长时间内排版 Word 文档都是：..局部调整..，即看着哪儿不顺眼就调哪儿。直到大三时遇见数据分析老师。当时在机房写完课程报告初稿，兴冲冲地找来老师寻求修改意见，老师首先从排版方面对我进行指导，老师的操作让我改变了多年来对于 Word 排版的认知，大致总结如下：

> 1. 首先利..样式..生成层级式的 headline 并开启导航栏，以在行文过程中，增加对全局的掌握。更快捷地定位想跳转的位置。
> 2. 选中一段文字，首先选择中文字体$\to${{< mark text="宋体" >}}，保持选中文字不动，再次选择英文字体$\to${{< mark text="Times New Roman" >}}，完成中英文分别选字体。
> 3. 按..章..$\to$..节..$\to$..小节..的次序，借助..格式刷..工具校对文档。
> 4. 并不是所有公式都需要编序号，只有一些被引用的公式才需要编号，而且需要右对齐。

之后的一年中，多次向其他同学介绍相关 Word 排版技巧，并在第二年的数学建模竞赛中得以使用。

{{< imgcap src="https://ttfou.com/images/2020/03/12/a4d546b34a5923c7e1df2a8c91be9f00.png" title="现在看来实在是普通" >}}

<br>

> *PS: Windows 对于 Word 的渲染真的差, 下面是同一个模板在 Ubuntu WPS 上的显示效果 (MaC Word 的显示也很好, 只是我没有😭)*

{{< imgcap src="https://ttfou.com/images/2020/03/12/7c74ac12fbd6c6d0f98a5d809a1a14f2.png" title="Ubuntu 数学建模 Word 模板" >}}

<br>

{{< notice warning >}}
 **但 Word 排版依旧有问题：**
 1. 公式输入缓慢，且不够美观，尤其是行内公式(容易造成行间距不一致)
 2. 公式，图表等交叉引用困难
 3. 文章中插图尺寸大小不易控制
 4. 表格排版困难，且不美观
 5. 参考文献一旦修改，有可能不是修改一处(牵一发而动全身)
 6. 跨设备间兼容性问题
 7. 后期排版校对困难，耗时耗力
 8. ...
{{< /notice >}}

> _学了 $\LaTeX$ 之后，会发现以上这些都不是事儿_

## LaTeX 学习历史

### 初体验

第一次接触 $\LaTeX{}$ 是也是大三春节寒假期间，当时还是在 Windows 系统上，装的是 CTeX 中文套装 + WinEdt 编辑器。当时，完全摸不到头脑，只是看了一些年代久远的视频。

{{< imgcap src="https://ttfou.com/images/2020/03/12/d9db55b1cb35079b53deb17b6c4c1b72.png" title="竟然还存在我的百度网盘里" >}}

9 个视频看下来，因为不熟悉以及操作复杂(较 Word)，所以并没有感受到 $\LaTeX{}$ 的优势。大三下学期和大四上学期准备考研，就没有继续研究了。

### 入门

#### 排版毕设

考研顺利上岸后，开始准备本科的最后一课 --- ..毕业设计..

18 年 3 月复试后，经过一个月左右的时间，将毕业设计的主要思路、初步算法实践编程完成。4 月份开始一边继续毕设内容，一边钻研 $\LaTeX{}$ 排版[^1]。

当时，了解到了 [LaTeX 工作室](https://www.latexstudio.net/)这个网站，里面有很多很多精美实用的模板。而且还了解到 CTeX 中文套装已于 2012 年停止更新，建议安装 TeX Live 发行版。后来，我又选择使用 TeXstudio 作为 $\TeX$ 编辑器[^2]

{{< imgcap src="https://ttfou.com/images/2020/03/12/30a0bec64fbbed40443777c0d59169ed.png" title="TeXstudio 编辑器" >}}[^3]

最大的问题是: <u>我本科学校没有 $\LaTeX$ 版的毕业论文模板[^7]</u>，但最后还是决定用 $\LaTeX$ 来排版[^4]

由于当时几乎没有知识储备，所以决定在 [LaTeX 工作室](https://www.latexstudio.net/) 里选择与本科学校毕业设计要求相近的模板，然后稍作修改。说来也是巧合，挑选再三之后，选择了[华中科技大学的本科毕业设计模板](https://www.latexstudio.net/archives/11575.html)

{{< imgcap src="https://ttfou.com/images/2020/03/12/fda513bd726c2c2b9cb7cb867bab63ab.png" title="华中科技大学毕业论文 LaTeX 模板 2017" >}}

<br>

{{< pdf url="/files/pdf/bisheyaoqiu.pdf" >}}

<br>

参考本科学校的排版要求，一步步、一点点修改。那段时间，几乎每天早出晚归，搞得跟考研似的。最终还是完成了任务，自认为完成的还不错😁

{{< pdf url="/files/pdf/bishelunwen.pdf" >}}

<br>

然后，又顺手写了一个答辩用的 Beamer

{{< imgcap src="/files/beamer.svg" title="毕业答辩 Beamer" >}}

至此，第一次用 $\LaTeX{}$ 排版就结束了。期间遇到了各式各样的问题，当时还不懂得科学上网，所以遇到问题，百度搜寻答案是真的难😫

{{< notice tip >}}
从此，算是入了 $\LaTeX$ 的门了。所以要学习一项技能还是要去..实践..，**主动去遇到各种困难，然后去解决困难**
{{< /notice >}}

#### AxMath 是公式编辑器神器？

公式排版是 $\LaTeX{}$ 的强项，但是对于初学者，简单的还行，稍复杂些的公式符号就不那么好记了，总是去 Google，时间成本太高。而 AxMath 对 $\LaTeX$ 初学者是友好的，它**支持 MathType 式的输入，还支持输出 $\TeX$ 代码，重要的是: 界面更美观、操作更高效、而且价钱比 MathType 便宜得多。**

{{< imgcap src="https://ttfou.com/images/2020/03/12/8e04531c233f5c66a8034bf0a97238af.png" title="AxMath 公式编辑器" >}}

{{< blockquote link="http://amyxun.com/" >}}
**AxMath 功能与特色**
- 图形化的排版布局设定，排版更方便；
- 支持点取输入、快捷键、脚本输入，输入更快；
- 支持AMS/LaTeX数学符号标准；
- 支持自定义数学符号；
- 支持快速矩阵模板、自动填充及分块；
- 支持字符串查找与替换；
- 支持笔记（多帧剪贴板）、磁贴与公式库；
- 支持多底色符号面板，支持符号面板重映射；
- 支持单色和彩色，可自定义颜色偏好；
- 编辑辅助功能，可自动识别预设字段并校正其文字格式；
- 支持手写输入；
{{< /blockquote >}}

说到“公式神器”，[**Mathpix Snip tool**](https://mathpix.com/) 应该算是一个神器了吧，{{< mark text="它不生产公式，只做公式的搬运工" >}}

{{< imgcap src="https://ttfou.com/images/2020/03/13/aef707bc3a6d7424aea535feef4c8976.gif" title="Mathpix Snip tool" >}}

无论是文档，还是网页，甚至是手写的公式，一般都能搞定，效率比输入高。只可现在惜官网限制免费用户，每月只有 $50$ 次的免费扫描机会。

### 再突破(开源项目)

排版完本科毕业设计入门之后, 看了众多他人的模板后，我也萌生了“创作” $\LaTeX{}$ 模板的冲动。

#### 答辩 Beamer 模板

毕业设计中也用到了 Beamer，但那是“拿来主义”，意犹未尽。所以找了一个简单的模板，自定义了一些内容。

{{< pdf url="/files/pdf/hustbeamer.pdf" >}}

{{< blockquote author="数学小兵儿" link="https://github.com/MatNoble/HUSTMatNobleBeamer" >}}
华中科技大学 Beamer 模板，仓库地址👇
{{< /blockquote >}}

*由于是第一个半自定义模板，所以现在看来简直是“粗制滥造”，必须把新版 Beamer 模板提上日程*

#### Document 笔记模板

研一下学期，导师从美国归来，开始真正跟从导师学习知识。一天，导师给了我一份他的 $\TeX$ 文件，我对其中的..简洁规整..感到惊讶，对比之下，之前我写的 $\TeX$ 代码是何等的..冗余混乱..，于是写了一份 [**适用于作学习笔记的中英文文档模板**](https://github.com/MatNoble/LaTeX-Document)

{{< pdf url="/files/pdf/Document-EN.pdf" >}}

<br>

再者，受导师影响，“迷”上了 Emacs。渐渐熟悉并可以熟练地使用 Emacs 作 $\LaTeX$ 的编辑器。

{{< imgcap src="https://ttfou.com/images/2020/03/12/9aa2a22b65d587a51d2e275fc57b00d7.png" title="Use Emacs as LaTeX Editor" >}}

Emacs 做编辑器的好处是：{{< mark text="结合 Emacs 的各种..快捷键..实现快速输入、查找替换、整理 $\TeX$ 代码" >}}。比如我之前演示的👇

{{< blockquote author="数学小兵儿" link="https://matnoble.me/posts/using-emacs-to-make-latex-table/" >}}
使用 Emacs 制作 $\LaTeX$ 表格
{{< /blockquote >}}

Emacs 对 $\TeX$ 代码有补全功能，如此输入公式会快很多.

{{< imgcap src="https://ttfou.com/images/2020/03/12/0b9921d64000c492b0fc0fc31e3591a6.gif" title="Emacs 快速输入数学公式" >}}

<br>

虽然我依旧是初学者，但是我已经不用 AxMath 来输入数学公式了，原因有二

- AxMath 不支持 Ubuntu 系统
- 熟能生巧，即使对于复杂的数学公式代码记不清，利用 Emacs 的补全功能也能快速正确的输入 $\TeX$ 数学公式代码

### 记录知识

虽然有了一定的排版基础，但依旧有许多排版知识是不知道的，或者之前用的一些代码是不正确的，比如微分算子的使用[^5]。

因此，我就想把已有的知识和新获得的知识集中记录下来。于是我在[{{< abbr title="数系家园" text="微信公众号" >}}](https://matnoble.me/images/wechat.svg)和本博客都设立了专栏 --- [$\LaTeX$ 排版「冷」知识](https://matnoble.me/series/latex/)。

希望能方便自己查阅遇到过却又忘记的知识，能够帮助到他人就更好了。

{{< imgcap src="https://ttfou.com/images/2020/03/13/2e5d2b0b75e78a34a308a892f9323995.png" title="sharing is happy" >}}

## 结语

回应文章头部的 Word 排版，我并不认为 $\LaTeX$ 比 Word “高级”[^6]，在很多小的场景(无公式的非科技文档)，我还是愿意使用 Word 来排版。二者是..功能用途..不完全对等的软件。

从 18 年 4 月份正式开始学习 $\LaTeX{}$ 排版至今马上两年了，算是有了一些排版知识和经验，以此文来纪念我学习 $\LaTeX$ 的两年吧🤘

[^1]: 当时，就想着在对论文内容没有太大压力的前提下，用 $\LaTeX{}$ 排版论文应该可以提升我的 $\LaTeX{}$ 排版技能，为之后所谓的科研生活作准备。
[^2]: TeXLive 安装教程 <br> https://matnoble.me/posts/install-texlive/#windows-%E7%B3%BB%E7%BB%9F
[^3]: 原谅我没有毕设的 tex 截图了
[^4]: 现在想想当时这个决定还真是有些大胆，万一不能搞定不久 gg 了
[^5]: `\mathop{}\!\mathrm{d}` 比 `\mathrm{d}` 要更“地道”一些 <br> https://matnoble.me/posts/latex-differential-operator/
[^6]: 实际上 Word 比 $\TeX$ 产生的要晚，用户群也更大一些
[^7]: 据我了解，官方和非官方都没有
