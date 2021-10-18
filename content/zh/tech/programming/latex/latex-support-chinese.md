+++
title = "如何在 LaTeX 中「排版中文」?"
subtitle = "附赠一份中英文混排配置"
description = "本文介绍三种方法让 LaTeX 说「中国话」"
categories = ["TECH","LaTeX 科技排版"]
date = "2020-03-01T00:13:54+00:00"
keywords = ["如何在 LaTeX 中「排版中文」","附赠一份中英文混排配置","CTeX","ctexart","xeCJk","在 LaTeX 中使用中文字体","设置中文字体","经验分享","技术总结","LaTeX","matnoble","数系家园","数学小兵儿"]
tags = [""]
mathjax = true
series = ["latex"]
toc = true
smallcaps = false
+++

<img src="https://imgkr.cn-bj.ufileos.com/4e7ca500-bdca-42dc-9444-bffa8af84fc5.png" width="95%" />
<div align="center"><a href="/series/latex">◎ 你过来啊 🤞</a></div>

<!--more-->

<br>

## 前言

$\LaTeX{}$ 原生不支持中文(毕竟是外国人发明的), 但优秀的国人们, 使用了很多方法使 $\LaTeX{}$ 支持中文, 本文详细介绍使用 CTeX 宏集和 xeCJK 宏包实现中文排版的方法.

## CTeX 宏集

$$
C\TeX \text{宏集} \neq C\TeX \text{套装}
$$

{{< blockquote link="http://mirrors.ibiblio.org/CTAN/language/chinese/ctex/ctex.pdf" title="CTeX 宏集" >}}
CTeX 宏基是面向中文排版的通用 $\LaTeX$ 排版框架, 为中文 $\LaTeX$ 文档提供了汉字输出支持, 标点压缩, 字体字号命令, 标题文字汉化, 中文版式调整, 数字日期转换等支持功能, 可适应论文, 报告, 书籍, 幻灯片等不同类型的中文文档.
{{< /blockquote >}}

{{< blockquote link="http://www.ctex.org/CTeX" title="CTeX 套装" >}}
CTeX 中文套装是基于 Windows 下的 MiKTeX 系统，集成了编辑器 WinEdt 和 PostScript 处理软件 Ghostscript 和 GSview 等主要工具。 CTeX 中文套装在 MiKTeX 的基础上增加了对中文的完整支持。 CTeX 中文套装支持 CJK, xeCJK, CCT, TY 等多种中文 TeX 处理方式。
{{< /blockquote >}}

由于 CTeX 中文套装[^1]已停止更新(上一次更新是 2012 年), 所以强烈建议[ Linux 和 Windows 用户安装 TeXLive](https://matnoble.me/posts/install-texlive/), Mac OSX 用户安装 [MacTeX](http://www.tug.org/mactex/).　

<br />

如果你的文章主要由中文构成，你可以考虑使用 CTeX 宏集排版中文. 在 X⁠eTeX 或 LuaTeX 引擎下使用时, CTeX 宏集底层将依赖 `fontspec` 宏包[^4].

### ctexart 文档类

```tex
\documentclass[a4paper, 12pt, UTF8]{ctexart}
\usepackage[T1]{fontenc}

% 西文字体
\setmainfont{Times New Roman}        % 西文默认衬线字体(serif)
\setsansfont{Helvetica}              % 西文默认无衬线字体(sans serif), Windows 下可使用类似的 Arial 字体,
\setmonofont{Courier New}            % 西文默认的等宽字体 
% 中文字体
\setCJKmainfont{Source Han Serif SC}
\setCJKsansfont{Source Han Sans SC}
\setCJKmonofont{Source Han Sans SC}

\begin{document}
{ \centering
说书唱戏劝人方，\par
三条大路走中央。\par
善恶到头终有报，\par
人间正道是沧桑。\par
}
\end{document}
```

建议使用 `\usepackage[T1]{fontenc}`

{{< blockquote author="ShreevatsaR" link="https://tex.stackexchange.com/questions/664/why-should-i-use-usepackaget1fontenc" >}}
If you don't use \usepackage[T1]{fontenc},

- Words containing accented characters cannot be automatically hyphenated,
- You cannot properly copy-and-paste such words from the output (DVI/PS/PDF),
- Characters like the pipe sign, less than and greater sign give unexpected results in text.
{{< /blockquote >}}

### ctex 宏包

```tex
\documentclass[a4paper, 12pt]{article}
\usepackage[UTF8]{ctex}

\begin{document}
{ \centering
说书唱戏劝人方，\par
三条大路走中央。\par
善恶到头终有报，\par
人间正道是沧桑。\par
}
\end{document}
```

推荐使用 xelatex 命令编译源文件.

以上两种方法效果类似

{{< imgcap src="https://ttfou.com/images/2020/03/01/ea5b0f158fabaead708b707fda33b992.jpg" title=" ctexart 文档类 / ctex 宏包" width="55%" >}}

<hr />

## xeCJK 实现中英混排[^5]

xeCJK 是一个 XeLaTeX 宏包[^3], 用于排版 CJK 文字, 包括字体选择和标点控制等.

下面示例利用 xeCJK 宏包实现中英混排:

```tex
% 该文件使用 xelatex 命令可以编译通过
\documentclass[12pt, a4paper]{article}
\usepackage{fontspec}
\usepackage[slantfont, boldfont]{xeCJK}

%================================== 设置中文字体 ===========================%
% 将系统字体名映射为逻辑字体名称, 主要是为了维护的方便
\newcommand\fontnamehei{Source Han Sans SC} 
\newcommand\fontnamesong{Source Han Serif SC} 
\newcommand\fontnamekai{KaiTi}
\newcommand\fontnamemono{Source Han Sans SC}
\setCJKmainfont[BoldFont=\fontnamehei]{\fontnamesong} % 设置 CJK 主字体
\setCJKsansfont[BoldFont=\fontnamehei]{\fontnamekai}  % 设置 CJK 无衬线的字体
\setCJKmonofont{\fontnamemono}                        % 设置 CJK 的等宽字体
%================================== 设置中文字体 ===========================%

% ================================= 设置英文字体 ===========================%
\setmainfont[Mapping=tex-text]{Times New Roman}       % 西文默认衬线字体(serif)
\setsansfont[Mapping=tex-text]{Arial}                 % 西文默认无衬线字体(sans serif)
\setmonofont{Source Code Pro}                         % 西文默认的等宽字体
% ================================= 设置英文字体 ===========================%

% 开明式 标点
\punctstyle{kaiming}

% 行距
\RequirePackage{setspace}
\setstretch{1.38}

\begin{document}

说书唱戏劝人方，\par
三条大路走中央。\par
善恶到头终有报，\par
人间正道是沧桑。\par

\texttt{数系家园　数学小兵儿　等宽字体}

\textsf{数系家园　数学小兵儿　sansfont　无衬线的字体}

\textrm{数系家园　数学小兵儿　mainfont　正文字体} \\

\texttt{MatNoble Ross}

\textsf{MatNoble Ross}

\textrm{MatNoble Ross}

\end{document}
```

{{< imgcap src="https://ttfou.com/images/2020/03/01/770bd56bce8072504addf47ddcab3c0d.jpg" title="xeCJK 效果图" >}}

<br />

xeCJK 宏包有 4 个选项

```tex
\usepackage[Options]{xeCJK}
```
> Options
> - BlodFont:　　　启用 CJK **粗体字**
> - SlantFont:　　　启用 *斜体字*
> - CJKnumber:　　调用 CJKnumb 宏包
> - CJKchecksingle:　避免单个汉字独占一行

<br />

对于中文字体配置:
- `\setCJKmainfont{fontname}` 命令用来设置正文使用的中文字体, 同时也是 `\textrm{}` 命令使用的字体. 
- `\setCJKmonofont{fontname}` 用来设置 `\texttt{}` 命令中的中文使用的字体. 
- `\setCJKsansfont{fontname}` 用来设置 `\textsf{}` 命令中的中文使用的字体.

<br />

而以上 `fontname` 应填写本机已安装的字体名称, 在 Terminal 中输入

```shell
fc-list :lang=zh
```

{{< imgcap src="https://ttfou.com/images/2020/03/01/2ef784aa429a93f588f80d21642e4a9b.png" title="texlive 查看中文字体" >}}

<br />

本文部分内容借鉴: 全面总结如何在 LaTeX 中使用中文 (2020 最新版)[^2], 现表示感谢🍻

<img src="https://ttfou.com/images/2020/02/27/d45f84b14ca268ddd2e483c11638e892.gif">

[^1]: http://www.ctex.org/CTeXReleaseNotes
[^2]: https://jdhao.github.io/2018/03/29/latex-chinese.zh/
[^3]: https://www.sys.kth.se/docs/texlive/texmf-dist/doc/xelatex/xecjk/xeCJK.pdf
[^4]: https://stone-zeng.github.io/2018-08-08-use-opentype-fonts/#%E5%9F%BA%E7%A1%80%E7%AF%87ii%E4%B8%AD%E8%A5%BF%E6%96%87%E6%B7%B7%E6%8E%92
[^5]: 当文档以英文为主体, 出现少数中文时, 建议使用 xeCJK 宏包. CTeX 宏集设置中文字体与下文类似.
