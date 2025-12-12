+++
title = "LaTeX 矩阵转置符"
categories = ["TECH","LaTeX 科技排版"]
date = "2020-01-10T00:23:25+08:00"
keywords = ["矩阵转置符", "经验分享", "技术总结", "LaTeX", "matnoble", "数系家园", "数学小兵儿", "LaTeX排版", "LaTeX Typesetting", "数学公式编辑", "科技论文写作", "MatNoble", "LaTeX Tutorial"]
katex = true
series = ["latex"]
tags = ["数学公式", "数学符号"]
+++

{{< imgcap src="/images/latex-banner.svg" title="LaTeX 排版教程系列图片横幅">}}

<!--more-->

| 序号 | 语法                  | 效果                    |          |
| :--: | :--:                  | :--:                    | :--:     |
| 1    | \boldsymbol{A}^\mathrm{T} | $\boldsymbol{A}^\mathrm{T}$ | $\times$ |
| 2    | \boldsymbol{A}^\top       | $\boldsymbol{A}^\top$       | $\times$ |
| 3    | \boldsymbol{A}^\mathsf{T} | $\boldsymbol{A}^\mathsf{T}$ | $\surd$  |
| 4    | \boldsymbol{A}^\intercal  | $\boldsymbol{A}^\intercal$  | $\surd$  |

3 或 4 都可, 我平常使用 3.

<br />

> **举个例子**

设 $\boldsymbol{M} = \boldsymbol{A}^\mathsf{T}\boldsymbol{A}$, 则

$$
\boldsymbol{M}^\mathsf{T} = (\boldsymbol{A}^\mathsf{T}\boldsymbol{A})^\mathsf{T} =
\boldsymbol{A}^\mathsf{T}\boldsymbol{A} = \boldsymbol{M}
$$

所以 $\boldsymbol{M}$ 是对称矩阵.
