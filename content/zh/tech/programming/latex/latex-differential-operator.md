+++
title = "LaTeX 微分算子你真的用对了吗？"
categories = ["TECH","LaTeX 科技排版"]
date = "2020-02-08T00:13:54+00:00"
keywords = ["LaTeX 微分算子","经验分享","技术总结","LaTeX","matnoble","数系家园","数学小兵儿"]
tags = [""]
mathjax = true
series = ["latex"]
toc = true
+++

<img src="https://imgkr.cn-bj.ufileos.com/4e7ca500-bdca-42dc-9444-bffa8af84fc5.png" width="95%" />
<div align="center"><a href="/series/latex">◎ 你过来啊 🤞</a></div>

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
