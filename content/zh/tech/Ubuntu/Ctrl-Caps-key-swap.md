+++
title = "Ubuntu 修改键位 — Ctrl 和 Caps Lock 互换"
date = "2020-03-15T00:12:58+08:00"
tags = ["Ubuntu 装机与优化","Emacs"]
keywords = ["Ubuntu 修改键位","ctrl 和 caps lock 互换"]
katex = true
+++

在 Linux 上，`Ctrl` 键明显要比大写锁定键 `Caps Lock` 使用得机会多，当使用 `Emacs` 时更是如此。但是，`Ctrl` 键这个位置实在是有些尴尬，按的时间长了，..小手指..恐怕要罢工，所以我们需要将<u>左 `Ctrl` 键</u>与<u>`Caps Lock`</u>键互换位置。

## 命令行

```shell
sudo emacs /usr/share/X11/xkb/keycodes/evdev
```

搜索{{< mark text="<CAPS>" >}}和{{< mark text="<LCTL>" >}}，交换等号后面的数字

```
...
<CAPS> = 37;
...
<LCTL> = 66;
```

重启后即可生效

<hr />

## gnome-tweak-tool 工具

如果使用「gnome-tweak-tool」来美化桌面，则可以更轻松实现

<p style="text-align:center">
键盘和鼠标 $\to$ 其他布局选项 $\to$ Ctrl 键位置 $\to$ 勾选{{< mark text="交换 Ctrl 和大写锁定" >}}
</p>

{{< imgcap src="https://ttfou.com/images/2020/03/15/ab5b7641d1e68850336b2d6629c5e4c6.png" title="gnome-tweak-tool 工具" >}}
