+++
title = "一行 Python 代码, 跨设备传输文件"
date = "2020-01-28T00:00:00+00:00"
description = "一行 Python 代码, <kbd>快速精确</kbd>传输文件"
categories = ["TECH","喜欢编程"]
tags = ["Python"]
keywords = ["Python","http服务器","传输文件","好工具高效率","MatNoble"]
aliases = ["/posts/transferfiles"]
+++

拥有 Linux 的你, 是否为`传递文件`而烦恼? 即使有微信, qq, 是否可以迅速找到文件位置? 

下面, 用一行代码建立`HTTPS`服务器, 在局域网内, 任意设备间`快速`, `精准`传递文件.


Python 代码

```shell
python -m SimpleHTTPServer 8000
```

![一行代码传输文件](https://imgkr.cn-bj.ufileos.com/4d9e0649-adf7-40fd-b6e7-a7828d4f9295.gif)

```shell
localhost:8000
ip:8000
```

其中, `ip` 通过以下指令得到

```shell
ifconfig -a
```

<img src="https://imgkr.cn-bj.ufileos.com/57da2641-2364-47b3-a29e-d49b63469ac0.png" title="ifconfig -a" alt="ifconfig -a">


在手机端, 浏览器内输入

```shell
ip:8000
```

<img src="https://imgkr.cn-bj.ufileos.com/0839c899-55f1-4cfb-a36d-956aa3383679.jpg" title="手机接收文件" alt="手机接收文件">
