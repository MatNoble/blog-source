+++
title = "神的编辑器 Emacs 快捷键汇总"
date = "2020-02-23T00:11:00+00:00"
description = "最最「复杂」的快捷键汇总"
categories = ["TECH","好工具高效率"]
tags = ["Emacs","快捷键"]
keywords = ["hot key","常用快捷键推荐","Emacs","python","latex"]
images = ["https://ttfou.com/images/2020/02/23/d60323294875a79718b9d6a6bca01f80.jpg"]
katex = true
toc = false
+++

{{< imgcap src="https://ttfou.com/images/2020/02/23/d60323294875a79718b9d6a6bca01f80.jpg" title="神器 Emacs" >}}

<!--more-->

## 基础

- 组合按键

  + `C-* ` : 表示按住 `Ctrl` 键不松开, 再去按 `*` 键;

  + `M-*` 表示按住`Alt`键不松开, 再去按 `*` 键.

- 退出 Emacs

  `C-x` 然后 `C-c`

- 官方学习文档

  `C-h t` : 表示按住 `Ctrl` 键不松开, 再按住 `h` 键, 然后按 `t` 键. 试一试, `C-h t` 可以打开 Emacs 官方文档.

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/e6c8c7e8-af72-45db-b1fd-a43936d96719.png" title="Emacs 官方帮助文档" >}}

- 移屏

  查看下一屏: `C-v`

  查看上一屏: `M-v`

  将光标位置的文本行移动到屏幕中央: `C-l` (实际上, 是顶部, 中部和底部的循环)

- 上下左右
  
  {{< imgcap src="https://imgkr.cn-bj.ufileos.com/7e9d0777-73c0-41b4-b66d-c1636326bd4c.png" title="Emacs 键盘操作" width=75%  >}}
  
  `C-f` 和 `C-b` 分别表示向前和向后移动**一个字符**, `M-f` 和`M-b` 则可以相应的移动的更多. 

- \* 首 \* 尾

  - 文章开头: `M-Shift-<`
  - 文章结尾: `M-Shift->`

  - 行首: `C-a` 
  - 行尾: `C-e`
  - 句首: `M-a`
  - 句尾: `M-e`

- 终止命令

  当输入命令有误时, `C-g` 能帮到你. 

| Emacs 快捷键 | 操作/动作    |
| :----------: | :----------- |
| C-x + 3      | 纵向分割画面 |
| C-x + 2      | 横向分割画面 |
| C-x + o      | 窗口间切换   |
| C-x + C-c    | 退出 Emacs   |
| C-a          | 光标移植行首 |
| C-e          | 光标移植行尾 |
| C-s          | 查找         |
| M-w          | 复制         |
| C-w          | 剪切         |
| C-y          | 粘贴         |
