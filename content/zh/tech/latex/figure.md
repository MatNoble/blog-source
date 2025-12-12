+++
title = "在 LaTeX 中添加图片"
categories = ["TECH","LaTeX 科技排版"]
date = "2020-04-07T00:18:32+08:00"
keywords = ["在 LaTeX 里更改字体大小", "Changing the font size in LaTeX", "font size", "经验分享", "技术总结", "LaTeX", "matnoble", "数系家园", "数学小兵儿", "LaTeX排版", "LaTeX Typesetting", "数学公式编辑", "科技论文写作", "MatNoble", "LaTeX Tutorial"]
tags = ["图片表格"]
katex = true
series = ["latex"]
toc = true
+++

{{< imgcap src="/images/latex-banner.svg" title="LaTeX 排版教程系列图片横幅">}}

## 最基础

{{< douban >}}

在 $\LaTeX$ 里添加图片使用 `graphicx` 宏包，在导言区导入

```tex
\usepackage{graphicx}
```

然后，在需要插入图片的地方，使用如下命令

```tex
\includegraphics[选项]{图形文件名}
```

其中，图形文件名支持包含路径，常用的选项包括:

- width, height $\to$ 指定图形的宽度和高度[^2]
- scale $\to$ 缩放因子，如 scale = 0.6
- angle $\to$ 制定旋转角度，逆时针，以`度`为单位

```tex
% 插入 MatNoble logo
\includegraphics[width = .3\textwidth]{images/logo.pdf}

% 居中 logo
{ \centering \includegraphics[width = .3\textwidth]{images/logo.pdf}
  % 下方必须有一行空格才能居中
  
}

% 居中 logo 并逆时针旋转 37 度
{ \centering \includegraphics[width = .3\textwidth,angle=37]{images/logo.pdf}
  % 下方必须有一行空格才能居中
  
}
```

<img src="https://imgkr.cn-bj.ufileos.com/0e40f4dd-e865-4017-958c-e4404f50214c.png" width="85%" />

{{< notice tip >}}
`graphicx` 宏包支持多种常见的图片格式，但推荐使用 `.eps` 和 `.pdf` 格式，以得到更清晰的显示效果。
{{< /notice >}}

## 自动搜寻路径

以上 `图形文件名` 处，加上了 `.tex` 文件目录下的用来存储图片文件夹的目录 `images`，为了更方便使用，我们可以不加目录，甚至是图片后缀名。只需在导言区加入以下代码

```tex
 % 如果图片没有指定后缀, 依次按下列顺序搜索
\DeclareGraphicsExtensions{.eps,.pdf,.jpg,.png}

 % 设置图表搜索路径, 可以给图表文件夹取如下名字
\graphicspath{{figures/}{figure/}{pictures/}
  {picture/}{pic/}{pics/}{image/}{images/}}
```

之后，就可以省去目录和后缀名[^1]

```tex
\includegraphics[width = .3\textwidth]{logo}
```

## 浮动图环境

如果想为图片自动添加编号，则需要使用..浮动图环境..[^3]。**浮动**的意义在于：自动调整图表位置, 避免出现大片的空白

```tex
\begin{figure}[位置]
    ··· ···
\end{figure}
```

**位置** 选项的取值: h $\to$ here, t $\to$ top, b $\to$ bottom, p $\to$ page

推荐顺序：h $\to$ t $\to$ b $\to$ p

一般情况，还要求图片居中，则可以在环境中首先加上 `\centering`

```te
\begin{figure}[htbp]
    \centering
    ··· ···
\end{figure}
```

接着填入开始说的 `\includegraphics[选项]{图形文件名}` 命令。添加图片名称使用 `\caption` 命令。最后，使用 `\label` 标签及 `\ref` 命令实现..交叉引用..

```tex
\begin{figure}[htbp]
    \centering
    \includegraphics[width = .3\textwidth]{logo}
    \caption{\em logo}
    \label{fig:logo}
\end{figure}

figure \ref{fig:logo} is my logo
```

<img src="https://imgkr.cn-bj.ufileos.com/9255d2bb-ca05-4726-a390-77a107dc3e94.png" width="85%" />

## 子图

在文章中通常还需要添加..子图..，此时，可以使用 `subfigure` 环境来实现，首先在导言区加载 `\usepackage{subcaption}`

### 子图并排

两张图片并排是最常用的

```tex
\begin{figure}[htbp]
    \begin{subfigure}{.5\textwidth}
        \centering
        % 子图一
        \includegraphics[width=.8\linewidth]{logo.png}
        \caption{子图一}
        \label{fig:sub-first2}
    \end{subfigure}
    \begin{subfigure}{.5\textwidth}
        \centering
        % 子图二
        \includegraphics[width=.8\linewidth]{logo.png}
        \caption{子图二}
        \label{fig:sub-second2}
    \end{subfigure}
    \caption{并列子图}
    \label{fig:fig2}
\end{figure}
% 交叉引用
图(\ref{fig:fig2})包括子图(\ref{fig:sub-first2})和子图(\ref{fig:sub-second2})
```

<img src="https://imgkr.cn-bj.ufileos.com/dc3fa528-070e-4bad-a14f-1b1f3e17257b.png" width="85%" />

### 多行多列子图

实现多行子图也不难，需要注意**在换行处添加一行空格**

```tex
\begin{figure}[htbp]
    \begin{subfigure}{.3\textwidth}
        \centering
        % 子图一
        \includegraphics[width=.8\linewidth]{logo.png}
        \caption{子图一}
        \label{fig:sub-first}
    \end{subfigure} 
    \begin{subfigure}{.3\textwidth}
        \centering
        % 子图二
        \includegraphics[width=.8\linewidth]{logo.png}
        \caption{子图二}
        \label{fig:sub-second}
    \end{subfigure}
    \begin{subfigure}{.3\textwidth}
        \centering
        % 子图三
        \includegraphics[width=.8\linewidth]{logo.png}
        \caption{子图三}
        \label{fig:sub-third}
    \end{subfigure}
    % 下方需空一行

    % 上方需空一行
    \begin{subfigure}{.3\textwidth}
        \centering
        % 子图四
        \includegraphics[width=.8\linewidth]{logo.png}
        \caption{子图四}
        \label{fig:sub-fourth}
    \end{subfigure}
    \begin{subfigure}{.3\textwidth}
        \centering
        % 子图五
        \includegraphics[width=.8\linewidth]{logo.png}
        \caption{子图五}
        \label{fig:sub-fifth}
    \end{subfigure}
    \begin{subfigure}{.3\textwidth}
        \centering
        % 子图六
        \includegraphics[width=.8\linewidth]{logo.png}
        \caption{子图六}
        \label{fig:sub-sixth}
    \end{subfigure}
    \caption{多行多列子图}
    \label{fig:fig}
\end{figure}
% 交叉引用
图(\ref{fig:fig})包括子图(\ref{fig:sub-first})、图(\ref{fig:sub-second})、图 (\ref{fig:sub-third})、图(\ref{fig:sub-fourth})、图 (\ref{fig:sub-fifth})和图(\ref{fig:sub-sixth})
```

<img src="https://imgkr.cn-bj.ufileos.com/bb4971a5-0097-4425-8080-e33a28c4a39d.png" width="85%" />

[^1]: 仔细观察下代码就可以发现，诸如`{figures/}{figure/}{pictures/}{picture/}{pic/}{pics/}{image/}{images/}` 这些目录都会被支持
[^2]: 只保留其中一个参数，另一个则会等比例放大或缩小
[^3]: 对应的还有浮动..表..环境
