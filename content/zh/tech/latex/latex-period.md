+++
title = "LaTeX 标点规范：句号与句点"
categories = ["TECH","LaTeX 科技排版"]
date = "2020-03-05T00:13:54+08:00"
lastmod = "2025-12-23T00:00:00+08:00"
keywords = ["LaTeX 排版用「句号」还是用「句点」", "句号", "句点", "经验分享", "技术总结", "LaTeX", "matnoble", "数系家园", "数学小兵儿", "LaTeX排版", "LaTeX Typesetting", "数学公式编辑", "科技论文写作", "MatNoble", "LaTeX Tutorial"]
tags = ["排版微调", "标点符号"]
katex = true
series = ["latex"]
toc = true
description = "探讨科技论文排版中「空心句号」与「实心句点」的选择规范，并提供使用 xeCJK 宏包自动转换标点的解决方案。" 
+++

{{< imgcap src="/images/latex-banner.svg" title="LaTeX 排版教程系列图片横幅">}}

<!--more-->

## 句号 or 句点

{{< blockquote author="始终" link="https://liam.page/2016/05/12/the-hidden-skill-of-the-xeCJK-package-Mapping/" >}}
由于中文空心句号是一个小圈，容易与作为下标的数字 `0` 或字母 `o` 混淆。因此，在专业数学书籍、论文排版中，最好是使用实心句点 `．` 来代替中文空心句号`。`
{{< /blockquote >}}

以上所说的使用实心句点是指..全篇使用.., 文章前后不宜出现不同的符号. 从本科毕业设计就坚持使用用句点, 但是, 之前两次数学建模的过程中, 非数学学院的队友感到诧异, 理科和工科还是有差距的吧.

但有时写中文文章, 敲空心句号`。`已成习惯, 所以需要一个省时省力的方法. 以上链接中, 也给了相应解决方案, 就是使用 `xeCJK` 宏包提供的 `Mapping` 选项[^1]. 之前本站也介绍过使用 `xeCJK` 宏包实现[中英混合排版](../latex-support-chinese/#xecjk-实现中英混排5), 直接上代码

```tex
% 该文件使用 xelatex 命令可以编译通过
\documentclass[12pt, a4paper]{article}
\usepackage{fontspec}
\usepackage[slantfont, boldfont]{xeCJK}

\setCJKmainfont[Mapping = fullwidth-stop]{Source Han Serif SC} % 使用开源的思源宋体

% 行距
\RequirePackage{setspace}
\setstretch{1.38}

\begin{document}

说书唱戏劝人方，

三条大路走中央。

善恶到头终有报，

人间正道是沧桑。

\end{document}
```

使用 `xelatex` 编译

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images@master/20251217225918379.png" title="xeCJK Mapping = fullwidth-stop" width="55%" >}}

{{< notice note >}}
**Mapping 选项** 总共有两组
- `Mapping = fullwidth-stop`: 将正常句号“。”转换成全角实心句号“．” <br>
  `Mapping = full-stop`: 作用相反
- `Mapping = han-trad`: 于将简体中文转换成繁体中文<br>
  `Mapping = han-simp`: 作用相反
{{< /notice >}}

简体 $\to$ 繁体, 修改上方 $\TeX$ 代码

```tex
% \setCJKmainfont[Mapping = fullwidth-stop]{Source Han Serif SC} % 使用开源的思源宋体
\setCJKmainfont[Mapping = han-trad]{Source Han Serif SC} % 使用开源的思源宋体
```

显示效果如下:

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images@master/20251217230219379.png" title="xeCJK Mapping = han-trad" width="55%" >}}

若没有使用 `xeCJK` 宏包, 也可以在导言区中加入以下代码

```tex
% 中文句号改为英文句点
\catcode`\。=\active
\newcommand{。}{\ifmmode\text{．}\else ．\fi}
```

*.tex 文件属于纯文本文件, 利用熟悉的编辑器的**查找替换**也能解决此问题*

## 句点的正确使用方法

上面建议在数学类中英混排文档中使用实心句点 `．` 来代替中文空心句号`。`

其实, 在纯英文排版中, 句点也是有使用规范的[^2]

- 英文排版时 $\TeX$ 通常默认句号 `.` 表示一句话的结束, 因此在处理句号时会留出稍宽一点的水平间距. 但是有些情况下, 句号并不代表句子的结尾, 比如「i.e. a word」和「e.g. a word」. 按照 $\TeX$ 默认规则, 这里的宽度会比正常句中单词之间的间隔稍大一些, 因此我们需要使用 `\` (即一个反斜杠 + 一个空格)来消除这个过大的间距: `i.e.\ a word` 以及 `e.g.\ a word`.
```tex
Two people i.e. you and me...
Two people i.e.\ you and me...
```

- 另一种特殊情况下, $\TeX$ 并不会认为句号表示句子的结尾, 那就是**句号跟在一个大写字母的后面**. 此时 $\TeX$ 会认为这个句号表示人名缩写的间隔符, 因此仍然按照正常间距来排版, 比如「A. Einstein」. 然而这个看似贴心的规则在一些情况下会适得其反, 比如一句话明明以缩略语结尾, $\TeX$ 反而认为这并不是一句话的结尾: 「…… in NBA. He…」. 此时, 排版出的「He」之前的空格会小于正常的句间间距. 这种情况下, 需要使用 `\@.`(反斜杠 + @ + 句号 + 空格)来取代原先的句号, 即 `... in NBA\@. He...` `\@ ` 用来强制告诉 $\TeX$ 这里的的确确是一个句子的结尾.

```tex
... played in NBA. He was ...
... played in NBA\@. He was ...
```

[^1]: http://mirrors.ibiblio.org/CTAN/macros/xetex/latex/xecjk/xeCJK.pdf
[^2]: https://ridiqulous.com/latex-notes-details/
