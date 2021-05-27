+++
title = "Git 实用命令汇总(长期更新)"
description = "本文并不是 git 教学。只是我现在使用的所有 git 命令，之后学习一点记录一点"
tags = ["Git"]
keywords = ["git 安装与配置","Git 基础教程","Git 实用命令","单个文件的“增删改查”","多设备间管理代码库","在 Github 上删除已提交的文件夹","SSH GitHub"]
date = "2019-03-14T00:00:00+00:00"
toc = true
aliases = ["/posts/git"]
+++

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/20210204185140.png" title="Git && GitHub" >}}

## 安装及配置

安装:

```shell
sudo apt install git
```

配置:

```shell
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```

## 通过 SSH 连接 GitHub

> 生成新的 SSH 密钥

1. 打开 Terminal，输入
```shell
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

此处，一路回车即可

2. 继续输入
```shell
cat .ssh/id_rsa.pub
```

将输出的密钥复制到 GitHub

3. 测试
```shell
ssh -T git@github.com
```

出现结果后，键入 `yes`，你将会看到
```shell
> Hi username! You've successfully authenticated, but GitHub does not
> provide shell access.
```

这就表明成功了 🎉

## 单个文件的“增删改查”

- 创建版本库

```shell
git init
```

- 提交

```shell
git add filename
git commit -m "description"
```

- 显示工作树状态

```shell
git -status	
```

- 显示版本库和工作树之间的不同

```shell
git diff
```

## 多设备间管理代码库 🖖

> 我有两台笔记本: 
- Lenovo Y430p 作为主力机, 性能还不错, 装有 Win10 和 Ubuntu 18.04 双系统, 缺点就是太重了. 
- Surface Go 作为二奶机, 性能不及主力机, 但携带方便.  

> 因此, 两个设备三个系统间协作编程, Github 私有仓库(现已免费) :fa-github: 再适合不过了 

- 电脑 1 初始化仓库, 初始提交
在 GitHub 中创立私有库`Share_Code`, 在本地

```shell
% 初始化仓库
git init
% 提交到本地仓库
git add filename
git commit -m "description1"
% 初始提交到远程仓库
git remote add origin git@github.com:MatNoble/Share_Code.git
git push -u origin master
```
- 3.2 电脑 2 克隆, 修改, 提交

```shell
% 克隆
git clone git@github.com:MatNoble/Share_Code.git
% 修改本地代码后, 修改本地仓库
git add filename
git commit -m "description2"
% 提交到远程仓库
git push
```

- 3.3 电脑 1 远程同步

```shell
% 将远程仓库同步到本地仓库
git fetch origin master
% 合并本地代码
git merge origin/master
```

<hr />

## 在 Github 上删除已提交的文件夹

之前在一次项目的Github提交中不小心把一个不需要的文件夹提交了上去,而此时在写.gitignored已经为时已晚,为了解决这一问题,经查阅多方资料后得出以下解决办法:

Github在提交了之后无法在线删除文件夹,但是在本地Git库中却可以,只要在Git库中删除了仓库对应缓存,再push到Github服务器,文件夹的删除目的就达成了,

以下是具体操作:

```shell
git rm -r --cached 目录名
git commit -m '描述'
git push -u origin master
```

参考：

1. https://help.github.com/en/github/authenticating-to-github/about-ssh
