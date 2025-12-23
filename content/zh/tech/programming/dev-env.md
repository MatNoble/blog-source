+++
title = "2025 开发环境配置：Java/Python/Zsh 速查"
tags = ["开发环境", "生产力", "Linux", "Java", "Python"]
keywords = ["JDK安装", "Maven环境变量", "Scala配置", "Oh My Zsh", "Git命令", "华为云镜像", "阿里云Maven", "开发环境搭建", "Ubuntu"]
date = "2023-07-23T00:17:00+08:00"
lastmod = "2025-12-23T19:00:00+08:00"
toc = true
description = "一站式开发环境搭建手册。涵盖 Linux/Mac 下 Zsh 终端美化、Git 高效配置，以及 Java (JDK)、Maven、Scala、Python 等核心语言环境的安装、国内镜像源加速与环境变量设置速查。"
+++

工欲善其事，必先利其器。构建一个高效、舒适且下载速度飞快的开发环境，是每一位程序员的必修课。

本文作为一份**长期维护的速查表 (Cheat Sheet)**，旨在帮助开发者快速在 Linux (Ubuntu) 或 macOS 上搭建基于 **JVM** 和 **Python** 的全栈开发工作流，并重点解决了**国内网络环境下的下载加速**问题。

<!--more-->

## 1. 终端与版本控制 (Terminal & VCS)

终端是开发者的第二大脑。一个配置得当的终端能显著提升编码效率。

### Zsh & Oh My Zsh
告别枯燥的 Bash，拥抱强大的 Zsh 生态。支持自动补全、命令高亮和丰富的主题。
*   **配置指南：** [Ubuntu 安装 Zsh ，配置最强终端](/tech/ubuntu/install-zsh/)

### Git 版本控制
分布式版本控制的基石。
*   **配置指南：** [Git 实用命令汇总](/tech/programming/git/)

## 2. JVM 生态系统 (Java/Scala)

针对 Java 和大数据开发者的核心环境配置。推荐使用国内镜像源以获得最佳下载体验。

### Java Development Kit (JDK)
*   **推荐版本：** JDK 8 (经典), JDK 17 (LTS), JDK 21 (LTS)
*   **高速下载：** [华为云 JDK 镜像站 (速度快/版本全) 👍](https://repo.huaweicloud.com/java/jdk/)
*   **环境变量配置 (`~/.zshrc` 或 `~/.bashrc`)：**

```bash
# 请将 '安装目录' 替换为实际解压路径
export JAVA_HOME=/path/to/your/jdk
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib
export PATH=${JAVA_HOME}/bin:$PATH
```

### Maven 构建工具
*   **高速下载：** [华为云 Maven 镜像站 👍](https://repo.huaweicloud.com/apache/maven/maven-3/)
*   **环境变量配置：**

```bash
export M2_HOME=/path/to/your/maven
export PATH=${M2_HOME}/bin:$PATH
```

*   **阿里云镜像加速 (配置 `conf/settings.xml`)：**
    为了加快依赖下载速度，建议在 `<mirrors>` 标签内添加：
    ```xml
    <mirror>
      <id>aliyunmaven</id>
      <mirrorOf>*</mirrorOf>
      <name>阿里云公共仓库</name>
      <url>https://maven.aliyun.com/repository/public</url>
    </mirror>
    ```

### Scala
大数据开发（Spark/Flink）必备语言。
*   **官方下载：** [Scala Download](https://www.scala-lang.org/download/all.html)
*   **环境变量配置：**

```bash
export SCALA_HOME=/path/to/your/scala
export PATH=${SCALA_HOME}/bin:$PATH
```

## 3. Python 生态
AI 与数据科学的首选。
*   **配置指南：** [在 Ubuntu 中配置 Python 环境](/tech/ubuntu/configure-python-environment-in-ubuntu/)
    *(涵盖了 Miniconda 安装、虚拟环境管理及 pip 国内源配置)*

---
*注：修改配置文件后，别忘了执行 `source ~/.zshrc` 使配置立即生效。*
