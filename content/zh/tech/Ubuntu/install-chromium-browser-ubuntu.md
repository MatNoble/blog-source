+++
title = "Chromium 和 Chrome 的安装与卸载"
date = "2020-03-08T00:09:10+08:00"
description = "Install and uninstall Chromium on Ubuntu"
tags = ["Ubuntu 装机与优化"]
keywords = ["chromium-browser","google-chrome-stable","google-chrome","browser","安装","卸载","Chromium","ubuntu","install texlive","Chromium 和 Chrome 的安装与卸载","教程","Install and uninstall Chromium on Ubuntu","卸载","uninstall"]
toc = true
images = ["https://ttfou.com/images/2020/03/08/3558b8170bbc25adfdbd312c5a729944.png"]
aliases = ["/posts/ubuntu/install-chromium-browser-ubuntu"]
+++

{{< imgcap src="https://ttfou.com/images/2020/03/08/3558b8170bbc25adfdbd312c5a729944.png" title="浏览器嘛, 用着舒服就行" >}}

## Chromium
### 安装

安装很简单, 只需在 Terminal 输入一行安装命令

```shell
sudo apt install chromium-browser
```

<p>
<a href="apt:chromium-browser" target="blank">
    <span>或者直接点我下载👈</span>
</a>
</p>

### 卸载并移除相关配置

此时需要以下四行命令以完全清除 Chromium

```shell
sudo apt purge chromium-browser
rm -rf ~/.config/chromium
rm -rf ~/.cache/chromium
sudo rm -rf /etc/chromium
```

## Chrome

### 安装

此时, 不能 `apt install`, 需要通过 `wget` 下载最新的 Google Chrome `.deb` 安装包

```shell
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
```

然后安装

```shell
sudo dpkg -i google-chrome-stable_current_amd64.deb
```

### 卸载并移除相关配置

卸载与 Chromium 类似

```shell
sudo apt purge google-chrome-stable
rm -rf ~/.config/google-chrome
rm -rf ~/.cache/google-chrome
```
