+++
title = "Ubuntu 上使用 ssr 实现科学上网 "
date = "2020-02-26T00:21:00+00:00"
description = "墙外很危险, 注意保护好自己"
tags = ["安装","科学上网","Ubuntu 装机与优化","ssr"]
keywords = ["科学上网","Ubuntu"]
images = ["https://cdn.jsdelivr.net/gh/MatNoble/Images/20210405132525.png"]
+++

作为研究生, 很多时候都需要看一些英语文献, 在 Google 上找明显比在百度上靠谱一些．此外, 许多知名大学都有大量的 MOOC 学习资源．所以, 学习并合理运用科学上网, 至关重要.

<!--more-->

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/20210405132525.png" title="我是一只小小鸟" >}}

### electron-ssr

在 Windows 和 Android 设备上都可以相对轻松地找到 ssr 管理器(ShadowsocksR 之类的), 但是, 在 Linux 系统上, 该类软件并不多见. [erguotou](https://github.com/erguotou520) 曾开发了一个图形用户界面 `electron-ssr`, 后来不知什么原因, 该项目被他遗弃. 还好当时保存了安装包, 
[GitHub 仓库](https://github.com/MatNoble/electron-ssr-backup#%E4%B8%8B%E8%BD%BD)


下载后, 调出 Terminal 安装

```shell
sudo dpkg -i electron-ssr.deb
```

安装之后, 就可以像在其他平台一样操作了

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/20210405132618.png" title="添加订阅地址" >}}

系统代理模式、更新 PAC、添加服务器、扫描二维码和开机自启等都有，如果想要在终端中使用代理，那么在配置中选中 http 代理:

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/20210405132649.png" title="http 代理" >}}

然后在终端中执行下面命令即可，其中的端口就是上图中的端口：

```shell
export http_proxy="http://127.0.0.1:12333"
```

然后可以使用 `curl www.google.com` 来测试是否成功使用代理.

<hr />

### 下面介绍一下我用的机场

- 最开始使用过 `搬瓦工 VPS` 自己搭建 ssr, 用了多半年, 被强了, 就再没试过搬瓦工了.
- 后来, 薅 Google 羊毛, 利用 GCP 自建 ssr, 但**稳定性**不够好．改搭建 V2ray, **速度**又得不到保障.

~~绝望之际, 在 YouTube 上看到了 [阿狸云](http://a.foxss.me/), 提供免费节点, 适用之后, 感觉还可以, 于是去年双十一搞活动买了半年的.~~

如果不想花钱, 其实有很多电报群里有免费的公共节点, 不嫌麻烦或者对翻墙需求不大时, 可以去找一找.

**但是**, 「天下没有免费的午餐」, 大多数免费的 ssr 并不稳定, 若想长期稳定使用, 花点儿银子还是必须的, 不妨去我写的[**这篇文章**](https://matnoble.github.io/tech/tofreeworld/#%E6%9C%BA%E5%9C%BA%E6%8E%A8%E8%8D%90)去找一找适合自己的. 

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/20210405132725.png" title="科学上网 不作恶" >}}
