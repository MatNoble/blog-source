+++
title = "Windows + Ubuntu 安装配置更新卸载 TeXLive 指南"
date = "2020-02-26T00:12:50+00:00"
description = "本文介绍在 Windows 和 Ubuntu 系统上 TeXLive 2020 的安装, 配置, 更新以及卸载方法"
tags = ["安装","latex"]
keywords = ["安装,配置,更新 TeX Live","Linux 安装字体","LaTeX","windows","ubuntu","install texlive","Windows Ubuntu 安装 + 配置 TeXLive 教程","教程","sudo does not find tlmgr","卸载","uninstall","texlive2020"]
toc = true
katex = true
images = ["https://ttfou.com/images/2020/02/26/22ce206d0bdca3a088d01d12d5049fc3.jpg"]
aliases = ["/posts/install-texlive"]
+++

## 前言

之前, 嫌麻烦, 装 TeXLive 只用一条语句

```shell
sudo apt install texlive-full
```

平时用着挺正常的, 但是, 昨日忽然收到更新提示, 2000M+. 于是用 `apt-fast` 多线程更新, 但是总共速度不到 100k, 也许是因为家里网络原因吧, 所以, 决定重新装 😭

照着之前写的博客, `下载, 安装, 设置环境变量, 更新包`又来了一遍, 很顺利, 包括下载镜像文件, 30分钟内搞定.

由于更新到了 2020, 所以 Ubuntu 版的安装指南更新了一下~

{{< imgcap src="https://imgkr.cn-bj.ufileos.com/464616d6-967b-4b3d-8890-f12b41df64fe.png" title="victory" >}}

## Ubuntu 系统

### 安装视频

- YouTube

{{< youtube bMQMWpWJNj0 >}}

- bilibili

{{< bili aid=840230896 cid=177419032 >}}

### 安装

1. 使用上面相同的链接, 到"距"你最近的仓库下载镜像 [$\TeX$ Live](http://mirror.ctan.org/systems/texlive/Images/).

2. 加载镜像文件

```shell
sudo mount -o loop texlive.iso /mnt
```

3. 启动安装程序
```shell
cd /mnt 
sudo ./install-tl
```

{{< imgcap src="https://ttfou.com/images/2020/02/26/70ddb30269af8af9bea1c9150e1c1e0a.png" title="安装界面" >}}

出现选项后，输入 `I` 直接安装(也可以更改选项). 数分钟后即可安装完成.

{{< imgcap src="https://ttfou.com/images/2020/02/26/f68b08cd72d0ba2271def73b72a4b561.png" title="欢迎进入 $\TeX$ Live 的世界！" >}}

4. 卸载镜像文件

```shell
cd /
sudo umount /mnt
```

### 配置

1. 设置环境变量

{{< imgcap src="https://ttfou.com/images/2020/02/29/305b02d7acbcdc99288b5c954768a5bd.png" title="设置环境变量之前" >}}

编辑 `/.bashrc`，在最后添加(路径以实际为准) 

```bash
export PATH=$PATH:/usr/local/texlive/2020/bin/x86_64-linux
export MANPATH=/usr/local/texlive/2020/texmf-dist/doc/man
export INFOPATH=/usr/local/texlive/2020/texmf-dist/doc/info
```

然后 `source /.bashrc` 即可.

{{< imgcap src="https://ttfou.com/images/2020/02/29/bd011383b3c6035cea2882cfefe0560e.png" title="设置环境变量之后">}}

2. 安装 `perl` 的 `tk` 组件(用于升级包)
```shell
sudo apt install perl-tk
```

3. 字体设置(路径以实际为准)

```shell
sudo cp /usr/local/texlive/2020/texmf-var/fonts/conf/texlive-fontconfig.conf /etc/fonts/conf.d/09-texlive.conf
sudo fc-cache -fv
```

> **Linux 安装字体**[^1]
> 1. 在根目录建立 .fonts 文件夹
> ```shell
> mkdir .fonts
> ```
> 2. 将要安装的字体复制到 .fonts 文件夹，执行
> ```shell
> sudo fc-cache -fv
> ```

### 更新

1. 更改为国内的源(以清华为例)

```shell
sudo tlmgr option repository https://mirrors.tuna.tsinghua.edu.cn/CTAN/systems/texlive/tlnet
```

{{< notice warning >}}
若显示 `sudo does not find tlmgr`, 则需要在 Terminal: `sudo visudo` <br>
将 `/usr/local/texlive/2020/bin/x86_64-linux:` 加入 `secure_path`
{{< /notice >}}

2. 包及包管理器更新

```shell
sudo tlmgr update --list
% sudo tlmgr update --self --all 
```

### 编辑器选择

在 Ubuntu 上同样可以选择适合大多数人的 TeXstudio, 同样可在官网[TeXstudio](https://texstudio.org/)下载. 

本人使用自由软件 `Emacs` 编辑 .tex 文件, Emacs 在众多好用的快捷键的基础上, 编辑 .tex 文件有很多优势, 比如我之前做的:[使用 Emacs 制作 LaTeX 表格](https://matnoble.me/posts/using-emacs-to-make-latex-table/)

### 卸载

> 安装容易, 卸载并不那么容易, 卸载干净更难!

在安装 `TeXLive` 之前, 要确保机器没有之前安装的残留. 所以要依次执行以下代码:

```bash
sudo apt purge texlive*
sudo rm -rf /usr/local/texlive/* and rm -rf ~/.texlive*
sudo rm -rf /usr/local/share/texmf
sudo rm -rf /var/lib/texmf
sudo rm -rf /etc/texmf
sudo apt remove tex-common --purge
rm -rf ~/.texlive
find -L /usr/local/bin/ -lname /usr/local/texlive/*/bin/* | sudo xargs rm
```

<hr />

## Windows 系统

### 安装

1. 下载镜像文件

最新版 [$\TeX$ Live](http://mirror.ctan.org/systems/texlive/Images/) (该链接可达"距"你最近的镜像仓库), 用校园网下载非常快!

2. 安装

将 .iso 镜像加载至虚拟驱动, 双击 `install-tl-advanced.bat` 或 `install-tl-windows.bat` 进入安装界面, 按照下图配置, 不要安装到系统盘!

{{< imgcap src="https://ttfou.com/images/2020/03/02/1feea99dfaf14406e5f17235d348f020.png" title="安装界面" >}}

### 配置

漫长的等待后, 关闭提示已经安装成功的安装界面, 开始配置环境变量. 进入安装目录, 将 `D:\texlive\bin\win32` 写入到系统环境变量 `PATH` 目录下. `WIN + R` 输入 `cmd`, 键入`xelatex -v`, 若结果如下, 则表示安装成功! 

{{< imgcap src="https://ttfou.com/images/2020/03/02/24a758fd576f838754a7f9d51f2e62db.png" title="安装成功">}}

### 更新

进入安装目录, 双击`tl-tray-menu.exe`, 右下角右击TEX图标, 点击`Package Manager`, 选择一个源(我选的是清华的源), 进行更新包.

{{< imgcap src="https://ttfou.com/images/2020/03/02/9c7de273be59b72b70b15e4fff952d71.png" title="更新包" >}}

### 安装编辑器

写$ \TeX $文档的编辑器有很多, 在 Windows 端我选择的是[TeXstudio](https://texstudio.org/) (适合大多数人).

{{< imgcap src="https://ttfou.com/images/2020/02/26/617b457f81554c78e76ecbeaa5697b74.png" title="TeXstudio" >}}

安装之后, 可以打开 `选项` 设置默认编辑器(我设置为xelatex), 编辑器字体推荐设置为等宽型字体.  

接下来, 就可以快(折)乐(腾)的使用 $\LaTeX$ 了! 😝

*以上为 ＴeXLive 2018为例, 其他版本大同小异*

<img src="https://ttfou.com/images/2020/02/27/024e38b99b47e9f56463cbfecd9d7c1e.gif" />

[^1]: LaTeX 更换字体 <br> https://matnoble.me/tech/latex/latex-support-chinese/#xecjk-%E5%AE%9E%E7%8E%B0%E4%B8%AD%E8%8B%B1%E6%B7%B7%E6%8E%925
