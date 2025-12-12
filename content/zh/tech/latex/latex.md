+++
title = "LaTeX 排版速查手册"
date = "2019-08-17T00:00:00+00:00"
description = "一份长期维护的 LaTeX 常用命令速查表。涵盖自定义字体、脚注设置、希腊字母、微积分公式、线性代数矩阵以及各类符号表，助你写作效率翻倍。"
tags = ["LaTeX入门"]
dropCap = false
displayCopyright = false
keywords = ["LaTeX排版", "LaTeX Typesetting", "数学公式编辑", "科技论文写作", "MatNoble", "LaTeX Tutorial"]
katex = true
+++

本文是笔者在长期使用 LaTeX 过程中，将遇到的问题和高频使用的命令整理而成的**速查手册**。

它不是一本厚重的教科书，而是一个**工具箱**。当你忘记某个符号怎么打，或者想调整一下字体时，希望这里能帮你快速找到答案。

> **提示**：善用 `Ctrl + F` 搜索关键词（如 "矩阵"、"希腊字母"）。

<!--more-->

{{< imgcap src="/images/latex-banner.svg" alt="LaTeX 常用命令速查手册" title="LaTeX 命令图书馆" >}}

## 0. 为什么选择 LaTeX？

理工科 + 数学公式 = **请使用 [$\LaTeX$](https://zh.wikipedia.org/wiki/LaTeX)**。

- **专业性**：$\TeX$ 系统是公认的数学公式排版标杆。
- **免费开源**：绝大部分 $\TeX$ 系统（如 TeX Live）都是免费的。
- **专注内容**：让你从 Word 的“格式调整地狱”中解放出来，专注于内容本身。

### 常用资源
- **我的 GitHub 模板**: [github.com/MatNoble/LaTeX-Document](https://github.com/MatNoble/LaTeX-Document)

---

## 1. 文档排版基础

### 1.1 自定义字体 (XeLaTeX)

想在文档中混用“思源黑体”和“Times New Roman”？你需要使用 `xeCJK` 宏包，并确保使用 **XeLaTeX** 编译器。

```tex
\documentclass[12pt,a4paper]{article}

% 必须使用 xeCJK 宏包
\usepackage{fontspec,xunicode,xltxtra}
\usepackage{xeCJK} 

%================= 中文字体设置 =================%
% 1. 设置主字体（文档默认字体）
\setCJKmainfont[BoldFont=SimHei, ItalicFont=KaiTi]{SimSun} % 宋体，粗体用黑体，斜体用楷体

% 2. 定义自定义字体族
% 注意：括号内的名字必须是系统已安装的字体文件名或名称
\setCJKfamilyfont{my_hei}{Source Han Sans SC} % 思源黑体
\newcommand{\sourcehan}{\CJKfamily{my_hei}}    % 定义快捷命令

%================= 英文字体设置 =================%
\setmainfont{Times New Roman}   % 衬线字体 (Serif)
\setsansfont{Arial}             % 无衬线字体 (Sans-Serif)
\setmonofont{Courier New}       % 等宽字体 (Monospace)

\begin{document}
    这是默认的宋体。\textbf{这是自动调用的黑体}。
    
    \vskip 1em
    
    {\sourcehan 这里是手动切换的思源黑体。}
    
    This is Times New Roman. \textsf{This is Arial.}
\end{document}
```

### 1.2 自定义脚注

默认的脚注有时不符合中文排版习惯（比如带圈数字或不缩进）。

```tex
% 导言区设置
\usepackage[marginal]{footmisc} % 脚注内容不缩进，与编号对齐
\renewcommand{\thefootnote}{\arabic{footnote}} % 使用阿拉伯数字 1, 2, 3

% 正文中使用
这里有一段文字\footnote{\noindent \textbf{注说明}：这里是脚注的具体内容。}。
```

---

## 2. 数学公式速查

在开始前，请确保导言区引入了核心宏包：
```tex
\usepackage{amsmath}
\usepackage{amssymb}
```

### 2.1 希腊字母表

#### 小写字母
| 代码 | 效果 | 代码 | 效果 | 代码 | 效果 | 代码 | 效果 |
| :--- | :---: | :--- | :---: | :--- | :---: | :--- | :---: |
| `\alpha` | $\alpha$ | `\beta` | $\beta$ | `\gamma` | $\gamma$ | `\delta` | $\delta$ |
| `\epsilon` | $\epsilon$ | `\varepsilon` | $\varepsilon$ | `\zeta` | $\zeta$ | `\eta` | $\eta$ |
| `\theta` | $\theta$ | `\vartheta` | $\vartheta$ | `\iota` | $\iota$ | `\kappa` | $\kappa$ |
| `\lambda` | $\lambda$ | `\mu` | $\mu$ | `\nu` | $\nu$ | `\xi` | $\xi$ |
| `\pi` | $\pi$ | `\varpi` | $\varpi$ | `\rho` | $\rho$ | `\varrho` | $\varrho$ |
| `\sigma` | $\sigma$ | `\varsigma` | $\varsigma$ | `\tau` | $\tau$ | `\upsilon` | $\upsilon$ |
| `\phi` | $\phi$ | `\varphi` | $\varphi$ | `\chi` | $\chi$ | `\psi` | $\psi$ |
| `\omega` | $\omega$ | | | | | | |

#### 大写字母
| 代码 | 效果 | 代码 | 效果 | 代码 | 效果 | 代码 | 效果 |
| :--- | :---: | :--- | :---: | :--- | :---: | :--- | :---: |
| `\Gamma` | $\Gamma$ | `\Lambda` | $\Lambda$ | `\Sigma` | $\Sigma$ | `\Psi` | $\Psi$ |
| `\Delta` | $\Delta$ | `\Xi` | $\Xi$ | `\Upsilon` | $\Upsilon$ | `\Omega` | $\Omega$ |
| `\Theta` | $\Theta$ | `\Pi` | $\Pi$ | `\Phi` | $\Phi$ | | |

### 2.2 常用运算符与修饰符

#### 上下标与分式
```tex
x_{1} \qquad x^{2} \qquad x_{ij}^{3} \qquad \frac{x^{2}}{k+1}
```
$$ x_{1} \qquad x^{2} \qquad x_{ij}^{3} \qquad \frac{x^{2}}{k+1} $$

#### 根式与组合数
```tex
\sqrt[3]{2} \qquad \binom{n}{k} = \frac{n!}{k!(n-k)!}
```
$$ \sqrt[3]{2} \qquad \binom{n}{k} = \frac{n!}{k!(n-k)!} $$

#### 声调与帽子
```tex
\bar{x} \quad \hat{x} \quad \tilde{x} \quad \vec{x} \quad \dot{x} \quad \ddot{x}
```
$$ \bar{x} \quad \hat{x} \quad \tilde{x} \quad \vec{x} \quad \dot{x} \quad \ddot{x} $$

#### 顶部与底部修饰
```tex
\overline{a+b} \qquad \underline{a+b}
\overbrace{a+\cdots+z}^{26} \qquad \underbrace{a+\cdots+z}_{26}
```
$$ \overline{a+b} \qquad \underline{a+b} $$
$$ \overbrace{a+\cdots+z}^{26} \qquad \underbrace{a+\cdots+z}_{26} $$

### 2.3 微积分

#### 极限、求和与积分
```tex
\lim_{x \to 0} \frac{\sin x}{x} = 1
\sum_{i=1}^{n} t_i
\int_0^\infty \mathrm{e}^{-x}\,\mathrm{d}x
```
$$ \lim_{x \to 0} \frac{\sin x}{x} = 1 \qquad \sum_{i=1}^{n} t_i \qquad \int_0^\infty \mathrm{e}^{-x}\,\mathrm{d}x $$

#### 偏导与梯度
```tex
\nabla f \qquad \frac{\partial f}{\partial x} \qquad f^{\prime}(x)
```
$$ \nabla f \qquad \frac{\partial f}{\partial x} \qquad f^{\prime}(x) $$

### 2.4 线性代数（矩阵）

LaTeX 提供了多种矩阵环境，区别在于两侧的定界符。

| 环境名 | 定界符 | 示例 | 效果 |
| :--- | :--- | :--- | :--- |
| `matrix` | 无 | `\begin{matrix} ... \end{matrix}` | $\begin{matrix} 1 & 2 \\ 3 & 4 \end{matrix}$ |
| `pmatrix` | `( )` | `\begin{pmatrix} ... \end{pmatrix}` | $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ |
| `bmatrix` | `[ ]` | `\begin{bmatrix} ... \end{bmatrix}` | $\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$ |
| `Bmatrix` | `{ }` | `\begin{Bmatrix} ... \end{Bmatrix}` | $\begin{Bmatrix} 1 & 2 \\ 3 & 4 \end{Bmatrix}$ |
| `vmatrix` | `| |` | `\begin{vmatrix} ... \end{vmatrix}` | $\begin{vmatrix} 1 & 2 \\ 3 & 4 \end{vmatrix}$ |

**代码示例**：
```tex
\mathbf{A} = \begin{bmatrix}
    1 & 2 & \cdots & n \\ 
    a & b & \cdots & z \\ 
    \vdots & \vdots & \ddots & \vdots \\ 
    0 & 0 & \cdots & 1
\end{bmatrix}
```

$$ 
\mathbf{A} = \begin{bmatrix}
    1 & 2 & \cdots & n \\\\
    a & b & \cdots & z \\\\
    \vdots & \vdots & \ddots & \vdots \\\\
    0 & 0 & \cdots & 1
\end{bmatrix}
$$ 

### 2.5 分段函数 (Cases)

```tex
f(n) =
  \begin{cases}
    n/2       & \text{if } n \text{ is even} \\
    -(n+1)/2  & \text{if } n \text{ is odd}
  \end{cases}
```

$$ 
 f(n) =
  \begin{cases}
    n/2       & \text{if } n \text{ is even} \\\\ 
    -(n+1)/2  & \text{if } n \text{ is odd}
  \end{cases}
$$ 

> **技巧**：`&` 符号用于对齐，`\\` 用于换行。在文字描述中，建议使用 `\text{...}` 包裹文本，以保持正文字体。

---

## 3. 符号对照表

### 二元关系符
| 代码 | 效果 | 代码 | 效果 | 代码 | 效果 |
| :--- | :---: | :--- | :---: | :--- | :---: |
| `\leq` / `\geq` | $\leq$ / $\geq$ | `\equiv` | $\equiv$ | `\sim` | $\sim$ |
| `\ll` / `\gg` | $\ll$ / $\gg$ | `\approx` | $\approx$ | `\cong` | $\cong$ |
| `\subset` | $\subset$ | `\in` | $\in$ | `\perp` | $\perp$ |
| `\neq` | $\neq$ | `\parallel` | $\parallel$ | `\propto` | $\propto$ |

### 箭头符号
| 代码 | 效果 | 代码 | 效果 | 代码 | 效果 |
| :--- | :---: | :--- | :---: | :--- | :---: |
| `\to` | $\to$ | `\Rightarrow` | $\Rightarrow$ | `\implies` | $\implies$ |
| `\leftrightarrow` | $\leftrightarrow$ | `\Leftrightarrow` | $\Leftrightarrow$ | `\iff` | $\iff$ |
| `\mapsto` | $\mapsto$ | `\uparrow` | $\uparrow$ | `\downarrow` | $\downarrow$ |

### 逻辑与集合
| 代码 | 效果 | 代码 | 效果 | 代码 | 效果 |
| :--- | :---: | :--- | :---: | :--- | :---: |
| `\forall` | $\forall$ | `\exists` | $\exists$ | `\emptyset` | $\emptyset$ |
| `\cup` | $\cup$ | `\cap` | $\cap$ | `\setminus` | $\setminus$ |

---

## 4. 常见问题 (FAQ)

**Q: 为什么我的公式里的英文是斜体，怎么改成正体？**
> A: 数学模式默认变量为斜体。如果是文本（如 "if", "for"），请使用 `\text{...}`。如果是函数名（如 sin, cos, max），请使用 `\sin`, `\cos`, `\max`，或者自定义 `\DeclareMathOperator`。

**Q: 矩阵或者表格太挤了怎么办？**
> A: 可以在换行符 `\\` 后指定额外的间距，例如 `\[1ex]` 或 `\[6pt]`。

**Q: 双引号怎么打？**
>A: 左引号用两个反引号，右引号用两个单引号 ''。即：``Quote'' $\to$ “Quote”。