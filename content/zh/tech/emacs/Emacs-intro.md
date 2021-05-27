+++
title = "神的编辑器 Emacs"
date = "2018-06-01T00:00:00+00:00"
description = "Vim 的对手 Emacs"
categories = ["TECH","好工具高效率"]
tags = ["Emacs"]
keywords = ["神的编辑器 Emacs","编辑器之神 Vim","Emacs","LaTeX","org-mode","python"]
toc = true
katex = true
images = ["https://imgkr.cn-bj.ufileos.com/1cef4c32-2ea9-4ed5-be57-b20b8fa8d789.jpeg"]
+++

<img src="https://imgkr.cn-bj.ufileos.com/1cef4c32-2ea9-4ed5-be57-b20b8fa8d789.jpeg" title="Emacs vs vim vs text" alt="Emacs vs vim vs text" width=95% />

<i style="display:block;text-align:center;color:gray">Emacs 是一种生活方式</i>

Emacs 是我目前主要的编辑器: 写 Python 代码, 写 $\LaTeX$ 文档, 使用 Org-mode ..提纲式..记录想法.

<!--more-->

## 界面及安装

<img src="https://imgkr.cn-bj.ufileos.com/5ab0ab4b-00b1-483f-9c4d-26651c81946a.png" title="自定义后的界面--清爽之极" alt="Emacs 自定义后的界面--清爽之极" width=95% />

Emacs 是一个支持多平台的自由软件, 我在 Windows 和 Ubuntu 上都安装使用过, 在 Ubuntu 上体验更好一些. 另外, Emacs 有众多版本, 我用的是 25.3.1.

> Windows 默认的 Emacs 貌似对中文不友好, 需要手动设置字体, 具体方法请自行 Google 或百度.

## 基本操作

- 组合按键

  + `C-* ` : 表示按住 `Ctrl` 键不松开, 再去按 `*` 键;

  + `M-*` 表示按住`Alt`键不松开, 再去按 `*` 键.

- 退出 Emacs

  `C-x` 然后 `C-c`

- 官方学习文档

  `C-h t` : 表示按住 `Ctrl` 键不松开, 再按住 `h` 键, 然后按 `t` 键. 试一试, `C-h t` 可以打开 Emacs 官方文档.
  
  <img src="https://imgkr.cn-bj.ufileos.com/e6c8c7e8-af72-45db-b1fd-a43936d96719.png"  title="Emacs 官方帮助文档" alt="Emacs 官方帮助文档" width=95% />

- 移屏

  查看下一屏: `C-v`

  查看上一屏: `M-v`

  将光标位置的文本行移动到屏幕中央: `C-l` (实际上, 是顶部, 中部和底部的循环)

- 上下左右

  <img src="https://imgkr.cn-bj.ufileos.com/7e9d0777-73c0-41b4-b66d-c1636326bd4c.png"  title="Emacs 键盘操作" alt="Emacs 官方帮助文档　键盘操作" width=95% />
  
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
  
## 矩形操作

## 基本配置

> 未配置过的 Emacs, 就像没安装插件的 Chrome 浏览器, “暴殄天物”. 当我们花时间, 用心去“鼓捣”它, 才可以发挥它应有的能力!

我的配置参考自 [子龙山人](https://github.com/zilongshanren/emacs.d), 这是 [我的配置](https://github.com/MatNoble/.emacs.d) . 做的主要改变是对 python, $\LaTeX$ , org-mode 的自定义设置.

## Python 编辑器

> 没有固定的编辑框, 没有固定的输出框, 支持同时打开多个文件(文件类型不定)

<img src="https://imgkr.cn-bj.ufileos.com/f82c62b9-8149-4e88-80a5-c9218aab5976.png"  title="Emacs + Python" alt="Emacs + Python" width=95% />

##  $\LaTeX$ 配置

> 简单快速

<img src="https://imgkr.cn-bj.ufileos.com/ef044f36-8a22-4882-8c7a-bd2c018343d4.png"  title="Emacs + $\LaTeX$" alt="Emacs + $\LaTeX$" width=95% />

## Org-mode

> 类似 `Markdown` 的语法, 提纲式记录想法, 输出格式支持: $\TeX \to$ PDF, HTML等

<img src="https://imgkr.cn-bj.ufileos.com/bffb935f-834f-4d68-affe-1a488e35bc76.png"  title="Emacs　org-mode" alt="Emacs org-mode" width=95% />

## 推荐阅读

- [一年成为Emacs高手 (像神一样使用编辑器)](https://github.com/redguardtoo/mastering-emacs-in-one-year-guide/blob/master/guide-zh.org)

- [Master Emacs in 21 Days](http://book.emacs-china.org/#orgheadline1)

- [编辑器之战](https://zh.wikipedia.org/wiki/%E7%BC%96%E8%BE%91%E5%99%A8%E4%B9%8B%E6%88%98)
