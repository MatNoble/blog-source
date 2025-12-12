+++
title = "开发环境配置大全"
tags = ["开发"]
keywords = ["linux","zsh","oh my zsh","git","java","maven","scala","Python","开发环境"]
date = "2023-07-23T00:17:00+08:00"
toc = true
description = "下载地址：华为云👍，..环境变量..配置：" 
+++

## zsh & oh my zsh
[Ubuntu 安装 Zsh ，配置最强终端](https://blog.matnoble.top/tech/ubuntu/install-zsh/)

## Git
[Git 实用命令汇总](https://blog.matnoble.top/tech/programming/git/)

## Java
下载地址：[华为云👍](https://repo.huaweicloud.com/java/jdk/)，..环境变量..配置： 
```shell
export JAVA_HOME=安装目录
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=${JAVA_HOME}/lib:${JRE_HOME}/lib
export PATH=${JAVA_HOME}/bin:$PATH
```

## Scala
下载地址：[官网地址](https://www.scala-lang.org/download/all.html)，..环境变量..配置：
```shell
export SCALA_HOME=安装目录
export PATH=${SCALA_HOME}/bin:$PATH
```

## Maven
下载地址：[华为云👍](https://repo.huaweicloud.com/apache/maven/maven-3/)，..环境变量..配置：
```shell
export M2_HOME=安装目录
export PATH=${M2_HOME}/bin:$PATH
```

## Python
[在 Ubuntu 中配置 Python 环境](https://blog.matnoble.top/tech/ubuntu/configure-python-environment-in-ubuntu/)