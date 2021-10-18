+++
title = "LaTeX 实用命令汇总(长期更新)"
mathjax = true
description = "从小白到老司机"
categories = ["TECH","LaTeX 科技排版"]
tags = ["LaTeX"]
date = "2019-02-22T19:32:00+00:00"
keywords = ["经验分享","技术总结","LaTeX","自定义字体","添加注脚","数学公式","矩阵","matrix","matnoble","数系家园"] 
toc = true
smallcap = false
+++

本文是笔者在长期使用中, 遇到问题 $\to$ 解决问题 $\to$ 记录下来, 长期更新, 供我自己和大家参考！ 同时, 欢迎大家在评论区交流！{{< mark text="可使用 Ctrl + F 按关键词搜索 tex 命令" >}}

<!--more-->

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/3b558a96-8f4a-4a45-9980-c48489db0b24.jpg" title="LaTex 命令图书馆" >}}

## 前言

理工科 + 数学公式 = 请使用 [$\LaTeX$](https://zh.wikipedia.org/wiki/LaTeX)  

> + $\TeX$ 系统是公认的数学公式排得最好的系统  
> + 大部分的 $\TeX$ 系统都是免费的  
> + 除了文学作品以外，Word 很少有能超越 $\TeX$ 的地方

### 开源项目

$\LaTeX$ 模板 GitHub 地址: [github.com/MatNoble/LaTeX-Document](https://github.com/MatNoble/LaTeX-Document)

{{< bili aid=80723849 cid=138153662 >}}

<hr />

## 自定义字体

使用 $\LaTeX $ 排版文档时, 改变字体不像 MS office 那样简单, 需要特定的代码来实现. 下面, 给出一个自定义字体的例子:

```tex
\documentclass[16pt,a4paper]{article}
\usepackage{fontspec,xunicode,xltxtra}

%% 从这开始
\usepackage{xeCJK} % 中文字体
%================================== 设置中文字体 ================================%
% 将系统字体名映射为逻辑字体名称, 主要是为了维护的方便
\newcommand\fontnamehei{SimHei} 
\newcommand\fontnamesong{SimSun} 
\newcommand\fontnamekai{Kaiti}
\newcommand\fontnamemono{DejaVu Sans Mono} 

% 设置文档正文字体为宋体
\setCJKmainfont[BoldFont=\fontnamehei]{\fontnamesong} % 设置 CJK 主字体
\setCJKsansfont[BoldFont=\fontnamehei]{\fontnamekai}  % 设置 CJK 无衬线的字体
\setmonofont{\fontnamemono}                           % 设置 CJK 的等宽字体

%================================== 设置英文字体 ================================%
\setmainfont{Times New Roman}   % 西文默认衬线字体(serif)
\setsansfont{Arial}             % 西文默认无衬线字体(sans serif)
\setmonofont{Courier New}       % 西文默认的等宽字体

%==================================  自定义字体  ================================%
\setCJKfamilyfont{adhei}{SourceHanSansSC-Regular} % 开源的思源黑体 
\newcommand{\adheiti}{\CJKfamily{adhei}}
%% 到这结束

\begin{document}
\section{黑体}
正文是宋体, 博客: matnoble.me
\vskip 2em
{\adheiti 这是思源黑体}	
\end{document}
```

<hr />
## 添加脚注

```tex
% 导言区
% 引入脚注的包
\usepackage[marginal]{footmisc}
\renewcommand{\thefootnote}{}

% 正文需要添加注脚的页面
% 添加脚注	
\footnote{\noindent 
          \textbf{这里是注脚}：\\
         }.
```

<hr />
## 数学公式

```tex
# 导入美国数学学会字体包
\usepackage{amsmath}
```
### 数学环境

- 行内公式: 
```tex
$ ... $ 
或者 
\( ... \)
```

- 行间公式: 
```tex
$$ ... $$ #(不建议使用) 
或者 
\[ ... \]
```

### 希腊字母

#### 小写

|                 |              |               |            |               |            |              |           |
| :-------------: | :----------- | :-----------: | :--------- | :-----------: | :--------- | :----------: | :-------- |
| $\alpha$        | \alpha       | $\theta$      | \theta     | o             | o          | $\upsilon$   | \upsilon  |
| $\beta$         | \beta        | $\vartheta$   | \vartheta  | $\pi$         | \pi        | $\phi$       | \phi      |
| $\gamma$        | \gamma       | $\iota$       | \iota      | $\varpi$      | \varpi     | $\varphi$    | \varphi   |
| $\delta$        | \delta       | $\kappa$      | \kappa     | $\rho$        | \rho       | $\chi$       | \chi      |
| $\epsilon$      | \epsilon     | $\lambda$     | \lambda    | $\varrho$     | \varrho    | $\psi$       | \psi      |
| $\varepsilon$   | \varepsilon  | $\mu$         | \mu        | $\sigma$      | \sigma     | $\omega$     | \omega    |
| $\zeta$         | \zeta        | $\nu$         | \nu        | $\varsigma$   | \varsigma  |              |           |
| $\eta$          | \eta         | $\xi$         | \xi        | $\tau$        | \tau       |              |           |

#### 大写
|                 |              |               |            |               |            |              |           |
| :-------------: | :----------- | :-----------: | :--------- | :-----------: | :--------- | :----------: | :-------- |
| $\Gamma$        | \Gamma       | $\Lambda$     | \Lambda    | $\Sigma$      | \Sigma     | $\Psi$       | \Psi      |
| $\Delta$        | \Delta       | $\Xi$         | \Xi        | $\Upsilon$    | \Upsilon   | $\Omega$     | \Omega    |
| $\Theta$        | \Theta       | $\Pi$         | \Pi        | $\Phi$        | \Phi       |              |           |

### 上标 & 下标

```tex
x_{1}         x^{2}
```

$$ x_{1} \qquad x^{2} $$

```tex
x_{ij}^{3}
```

$$ x_{ij}^{3} $$

```tex
f(n) = n^5 + 4n^2 + 2 |_{n=17}
```

$$ f(n) = n^5 + 4n^2 + 2 |_{n=17} $$

### 声调

```tex
\bar{x}    \acute{x}    \check{x}    \grave{x}
```

$$\bar{x} \qquad \acute{x} \qquad \check{x} \qquad \grave{x}$$

```tex
\dot{x}    \ddot{x}    \hat{x}    \tilde{x}
```
$$
\dot{x} \qquad \ddot{x} \qquad \hat{x} \qquad \tilde{x}
$$

### 微分

```tex
\nabla    \partial x    \mathrm{d}x    x^{\prime}
```

$$\nabla \qquad \partial x \qquad \mathrm{d}x \qquad x^{\prime}$$

### 求和
```tex
\sum_{i=1}^{n} t_i
```
$$ \sum_{i=1}^{n} t_i $$

### 积分
```tex
\int_0^\infty \mathrm{e}^{-x}\,\mathrm{d}x
```
$$ \int_0^\infty \mathrm{e}^{-x}\,\mathrm{d}x $$

### 根式

```tex
\sqrt[3]{2}
```

$$ \sqrt[3]{2} $$

### 上划线 & 下划线

```tex
\overline{a+b}    \underline{a+b}
```

$$ \overline{a+b} \qquad \underline{a+b} $$

```tex
\overbrace{a+b+\cdots+z}^{26}    \underbrace{a+b+\cdots+z}_{26}
```

$$
\overbrace{a+b+\cdots+z}^{26} \qquad \underbrace{a+b+\cdots+z}_{26}
$$

```tex
\overrightarrow{AB}    \overleftarrow{AB}
```
$$ \overrightarrow{AB} \qquad \overleftarrow{AB}$$

### 分式

```tex
\frac{x^{2}}{k+1} \qquad x^{\frac{2}{k+1}}
```

$$ \frac{x^{2}}{k+1} \qquad x^{\frac{2}{k+1}} $$

```tex
\frac{n!}{k!(n-k)!} = \binom{n}{k}
```

$$ \frac{n!}{k!(n-k)!} = \binom{n}{k} $$

### 大括号

```tex
f(n) =
  \begin{cases}
    n/2       & \quad \text{if }\, n \, \text{ is even}\\[3pt]
    -(n+1)/2  & \quad \text{if }\, n \,\text{ is odd}
  \end{cases}
```
$$
f(n) =
  \begin{cases}
    n/2       & \quad \text{if }\, n \, \text{ is even}\\\\[3pt]
    -(n+1)/2  & \quad \text{if }\, n \,\text{ is odd}
  \end{cases}
$$

### 二元关系符

|             |           |              |            |           |         |
|:-----------:|:---------:|:------------:|:----------:|:---------:|:-------:|
| $<$         | <         | $>$          | >          | $=$       | =       |
| $\leq$      | \leq      | $\geq$       | \geq       | $\equiv$  | \equiv  |
| $\ll$       | \ll       | $\gg$        | \gg        | $\doteq$  | \doteq  |
| $\prec$     | \prec     | $\succ$      | \succ      | $\sim$    | \sim    |
| $\preceq$   | \preceq   | $\succeq$    | \succeq    | $\simeq$  | \simeq  |
| $\subset$   | \subset   | $\supset$    | \supset    | $\approx$ | \approx |
| $\subseteq$ | \subseteq | $\supseteq$  | \supseteq  | $\cong$   | \cong   |
| $\in$       | \in       | $\ni$        | \ni        | $\notin$  | \notin  |
| $\mid$      | \mid      | $\parallel$  | \parallel  | $\perp$   | \perp   |
| $\because$  | \because  | $\therefore$ | \therefore | $\neq$    | \neq    |

### 箭头

|                      |                     |                       |                     |                      |              |
|:--------------------:|:--------------------|:---------------------:|:--------------------|:--------------------:|:-------------|
| $\gets$              | \leftarrow or \gets | $\longleftarrow$      | \longleftarrow      | $\nearrow$           | \nearrow     |
| $\to$                | \rightarrow or \to  | $\longrightarrow$     | \longrightarrow     | $\searrow$           | \searrow     |
| $\leftrightarrow$    | \leftrightarrow     | $\longleftrightarrow$ | \longleftrightarrow | $\swarrow$           | \swarrow     |
| $\Leftarrow$         | \Leftarrow          | $\Longleftarrow$      | \Longleftarrow      | $\nwarrow$           | \nwarrow     |
| $\Rightarrow$        | \Rightarrow         | $\Longrightarrow$     | \Longrightarrow     | $\leadsto$           | \leadsto     |
| $\Leftrightarrow$    | \Leftrightarrow     | $\Longleftrightarrow$ | \Longleftrightarrow | $\rightleftharpoons$ | \uparrow     |
| $\mapsto$            | \mapsto             | $\longmapsto$         | \longmapsto         | $\uparrow$           | \downarrow   |
| $\hookleftarrow$     | \hookleftarrow      | $\hookrightarrow$     | \hookrightarrow     | $\downarrow$         | \updownarrow |
| $\leftharpoonup$     | \leftharpoonup      | $\rightharpoonup$     | \rightharpoonup     | $\updownarrow$       | \Uparrow     |
| $\leftharpoondown$   | \leftharpoondown    | $\rightharpoondown$   | \rightharpoondown   | $\Uparrow$           | \Downarrow   |
| $\rightleftharpoons$ | \rightleftharpoons  | $\iff$                | \iff                | $\Downarrow$         | \Updownarrow |

### 点

|               |                |             |              |
|---------------|----------------|-------------|--------------|
| a   \dots  b  | a   \cdots  b  | \vdots      | \ddots       |
| $a  \dots  b$ | $a  \cdots  b$ | $ \vdots  $ | $  \ddots  $ |

### 矩阵
 
#### 普通

```tex
\begin{matrix}
1 & 2 & 3\\
a & b & c
\end{matrix}
```

$$
\begin{matrix}
1 & 2 & 3\\\\
a & b & c
\end{matrix}
$$

#### 圆括号

```tex
\begin{pmatrix}
1 & 2 & 3\\
a & b & c
\end{pmatrix}
```

$$
\begin{pmatrix}
1 & 2 & 3\\\\
a & b & c
\end{pmatrix}
$$

#### 中括号

```tex
\begin{bmatrix}
1 & 2 & 3\\
a & b & c
\end{bmatrix}
```

$$
\begin{bmatrix}
1 & 2 & 3\\\\
a & b & c
\end{bmatrix}
$$

#### 大括号

```tex
\begin{Bmatrix}
1 & 2 & 3\\\\
a & b & c
\end{Bmatrix}
```

$$
\begin{Bmatrix}
1 & 2 & 3\\\\
a & b & c
\end{Bmatrix}
$$

#### 行列式

```tex
\begin{vmatrix}
1 & 2 & 3\\\\
a & b & c
\end{vmatrix}
```

$$
\begin{vmatrix}
1 & 2 & 3\\\\
a & b & c
\end{vmatrix}
$$

```tex
\begin{Vmatrix}
1 & 2 & 3\\\\
a & b & c
\end{Vmatrix}
```

$$
\begin{Vmatrix}
1 & 2 & 3\\\\
a & b & c
\end{Vmatrix}
$$

### 非公式
```tex
\textrm{apples}    \textbf{apples}    \textit{apples}
```
$$ \textrm{apples} \qquad \textbf{apples} \qquad  \textit{apples} $$
