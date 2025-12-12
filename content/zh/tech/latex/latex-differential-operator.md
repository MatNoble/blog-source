+++
title = "LaTeX 微分算子你真的用对了吗？"
categories = ["TECH","LaTeX 科技排版"]
date = "2020-02-08T00:13:54+08:00"
keywords = ["LaTeX 微分算子", "经验分享", "技术总结", "LaTeX", "matnoble", "数系家园", "数学小兵儿", "LaTeX排版", "LaTeX Typesetting", "数学公式编辑", "科技论文写作", "MatNoble", "LaTeX Tutorial"]
tags = ["数学公式", "数学符号"]
katex = true
series = ["latex"]
toc = true
+++

{{< imgcap src="/images/latex-banner.svg" title="LaTeX 排版教程系列图片横幅">}}

<!--more-->

<img src="https://imgkr.cn-bj.ufileos.com/f460a324-d7ef-4924-8693-f8462e97dbf8.svg" width=95% />

最终结论:

```tex
\newcommand*{\dif}{\mathop{}\!\mathrm{d}}
```

然后引用它

```tex
\[
    \int x^{2} \dif x
\]
```

$$
\int x^{2} \mathop{}\\!\mathrm{d} x
$$
