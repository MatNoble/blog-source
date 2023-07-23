+++
title = "Matlab 保存高质量矢量图片"
tags = ["Matlab"]
keywords = ["Matlab","喜欢编程","矢量图片","Matlab 保存高质量矢量图片","matlab-support-high-dpi-screens-on-linux"]
date = "2020-03-05T00:21:32+00:00"
katex = true
+++

以下代码生成一个不含白边的三维图示

```matlab
surf(peaks(30))
% 去掉多余白边
set(gca,'looseInset',[0 0.01 0 0.01])
```

{{< imgcap src="https://ttfou.com/images/2020/03/05/24f913d93409cf680857da32f93019ee.png" title="Matlab 绘图窗口" width="85%" >}}

> **具体步骤**
> 1. `文件` $\to$ `导出设置`
> 2. `渲染` $\to$ `勾选自定义渲染器` 并选择 `painters(向量格式) `
> 3. 选择`分辨率(dpi)`: 300 / 600
> 4. `导出` 不同格式(eps, svg, pdf...)

<img src="https://ttfou.com/images/2020/03/05/c630e39fc0f2a3a0eb9ff23e46711330.gif" width=85% />

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/023cb316-772e-46ed-a8bb-260875968fe2.svg" title="svg 示例图" width="85%" >}}

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/cda49a4e-a267-4a92-a2cf-98e47068085f.png" title="放大后依旧清晰" width="85%" >}}
