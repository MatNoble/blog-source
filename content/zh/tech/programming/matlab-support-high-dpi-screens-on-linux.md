+++
title = "在 Linux 上解决 Matlab 适应高分屏问题(字体过小)"
categories = ["TECH","喜欢编程"]
tags = ["Matlab"]
keywords = ["Matlab","喜欢编程","在 Linux 上解决 Matlab 适应高分屏问题(字体过小)","matlab-support-high-dpi-screens-on-linux"]
date = "2020-02-19T00:17:00+00:00"
toc = true
katex = true
displayCopyright = false
aliases = ["/posts/matlab-support-high-dpi-screens-on-linux"]
+++

{{< imgcap src="https://ttfou.com/images/2020/03/28/7db8ce4228cac49255a7248d8bf9cc0a.png" title="设置之前，Matlab 字体小得看不清" >}}

{{< imgcap src="https://ttfou.com/images/2020/03/28/0806f0ae12ce5bf2892c3817d4f3484c.png" title="Matlab 又恢复了原来的样子" >}}

<br />

在 Linux 上装过 Matlab 的同学都可能遇到过这样的情况: 无论将桌面电脑字体调多大, Matlab 的字体总是那么小, 一通 Google 后, 找到如下解答: 

<!--more-->

{{< blockquote author="MathWorks Support Team" link="https://ww2.mathworks.cn/matlabcentral/answers/406956-does-matlab-support-high-dpi-screens-on-linux#answer_325831" >}}
MATLAB supports High DPI screens on Linux starting from R2017b.
Tuning a high-DPI Linux system requires two steps:
1. Setting the MATLAB scale factor
2. Calibrating the system's DPI
The MATLAB scale factor affects MATLAB desktop and the size/position of windows.
The system DPI determines the scale and font size of axes and labels.

The two tuning steps are described below:

  1. To set the MATLAB scale factor, please execute the following commands in the MATLAB Command Window: (Here the scale factor has been set to 1.5.)
  ```matlab
  >> s = settings;s.matlab.desktop.DisplayScaleFactor
  >> s.matlab.desktop.DisplayScaleFactor.PersonalValue = 1.5
  ```
  2. To calibrate the system's DPI to match the scale factor, please use the following terminal commands:
  ```matlab
  $ xdpyinfo | grep resolution
    resolution:    96x96 dots per inch
  $ xrandr --dpi 182.4
  ```
  The DPI value chosen should be the resolution found with "xdpyinfo" multiplied by the MATLAB scale factor that was set. In the example, 96 × 1.5 = 144.
MATLAB must be restarted after Step 2.

**Note:**

In earlier releases than R2017b, high DPI screens on Linux is not supported.
The possible workarounds mentioned below may help improve the visual appearance:
- You can increase font sizes of text in the different windows. However, the icon or font size of the toolbar cannot be changed.
- You can switch the high DPI monitor to a lower screen resolution, for example 1920x1080 or as preferred.
- You can connect a lower resolution monitor and use MATLAB on that monitor.
{{< /blockquote >}}

<hr />

将第一个代码块的内容输入到 Matlab, 随后, 将第二个代码块的内容输入到 Terminal 中即可. 亲测 R2018a 可用.

*请根据自己设备的分辨率，自行改变上述数值，我的 2.5k 屏配置如下*

```matlab
>> s = settings;s.matlab.desktop.DisplayScaleFactor
>> s.matlab.desktop.DisplayScaleFactor.PersonalValue = 1.9
```

```shell
$ xdpyinfo | grep resolution
  resolution:    96x96 dots per inch
$ xrandr --dpi 182.4
```

{{< notice note >}}
本人电脑配置:
- Ubuntu 20.04 LTS
- Intel® Core™ i5-10210U CPU @ 1.60GHz × 8
- 分辨率 2560 × 1600(16:10)
- GNOME 3.36.0
- 64 位
{{< /notice >}}
