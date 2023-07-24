+++
title = "在 Ubuntu 中配置 Python 环境"
date = "2020-03-17T00:09:10+00:00"
description = "Configure Python environment in Ubuntu"
tags = ["Ubuntu 装机与优化"]
keywords = ["教程","pip","pip3","python2","python3","NumPy","SciPy","Pandas","Matplotlib","在 Ubuntu 中配置 python 环境","Configure python environment in ubuntu"]
toc = true
images = ["https://cdn.jsdelivr.net/gh/MatNoble/Images/win/python202307250017754.png"]
aliases = ["/posts/ubuntu/python/configure-python-environment-in-ubuntu"]
+++

## 安装 Python2

自从 Ubuntu 18.04 以来，Python 2 不再是默认的 Python 版本。在最新的 Ubuntu 20.04 中，Python 2 更是被完全抛弃。但是 Python 2 依旧有用，所以需要自行安装

1. 安装 Python2，打开 Terminal 输入

```shell
$ sudo apt install python2
```

2. 检测安装版本

```shell
$ python2 -V
```

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/win/python2-202307250004441.png" title="Python 2 version" >}}

## 切换不同的 Python 版本

1. 检查系统已安装的 Python 版本，打开 Terminal 输入

```shell
$ ll /usr/bin/python*
lrwxrwxrwx 1 root root       9 Mar 13  2020 /usr/bin/python2 -> python2.7*
-rwxr-xr-x 1 root root 3662032 Jul  1  2022 /usr/bin/python2.7*
lrwxrwxrwx 1 root root       9 Mar 13  2020 /usr/bin/python3 -> python3.8*
-rwxr-xr-x 1 root root 5494584 May 26 22:05 /usr/bin/python3.8*
```

2. 检测是否已存在 Python 的配置方案

```shell
$ sudo update-alternatives --list python
update-alternatives: error: no alternatives for python
```

此时，显示没有配置方案

3. 为 Python2 和 Python3 分别配置

```shell
$ sudo update-alternatives --install /usr/bin/python python /usr/bin/python2 1
$ sudo update-alternatives --install /usr/bin/python python /usr/bin/python3 2
```

4. 确认是否配置成功

```shell
$ sudo update-alternatives --list python
/usr/bin/python2
/usr/bin/python3
```

5. 更改默认 Python 版本

```shell
$ sudo update-alternatives --config python
有 2 个候选项可用于替换 python (提供 /usr/bin/python)。

  选择       路径            优先级  状态
------------------------------------------------------------
  0            /usr/bin/python3   2         自动模式
* 1            /usr/bin/python2   1         手动模式
  2            /usr/bin/python3   2         手动模式

要维持当前值[*]请按<回车键>，或者键入选择的编号：1
```

如果想默认 Python 2 选 `1`，想默认 Python 3 选`2`

6. 检查当前 Python 默认版本

```
$ python -V
```

## 安装 Python 包管理器 PIP

{{< blockquote link="https://pypi.org/project/pip/" >}}
pip is the package installer for Python. You can use pip to install packages from the Python Package Index and other indexes.
{{< /blockquote >}}

1. 分别为 Python 2 和 Python 3 安装

```shell
% Python 2:
$ sudo apt install python-pip
% Python 3:
$ sudo apt install python3-pip
```

2. 检测是否安装成功

```shell
$ pip --version
$ pip3 --version
```

### 更换源

更新为国内的源，更新更快

1. 打开 Terminal

```shell
% 进入 .config
$ cd .config
% 创建文件夹 pip
$ mkdir pip
% 创建文件 pip.conf
$ touch pip.conf
% 编辑 pip.conf
$ sudo emacs pip.conf
% 填入并保存
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
trusted-host = pypi.tuna.tsinghua.edu.cn
```

也可以填入其他源:

- 阿里云 http://mirrors.aliyun.com/pypi/simple/
- 中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/

### 更新 PIP

```shell
% Python 2
$ python2 -m pip install --upgrade pip
% Python 3
$ python3 -m pip install --upgrade pip
```

### 安装

#### 安装常用科学计算包

> NumPy SciPy Pandas Matplotlib

1. 安装，打开 Terminal

```shell
% Python 2:
$ pip install numpy scipy pandas matplotlib
% Python 3:
$ pip3 install numpy scipy pandas matplotlib
```

2. 检查安装版本(以 NumPy 为例)

```shell
$ python -c "import numpy; print(numpy.__version__)"
1.16.6
$ python3 -c "import numpy; print(numpy.__version__)"
1.18.1
```

3. 更新(以 NumPy 为例)

```shell
% Python 2:
$ pip install --upgrade numpy
% Python 3:
$ pip3 install --upgrade numpy
```

#### IPython

{{< blockquote link="http://ipython.org/" >}}
**IPython provides a rich architecture for interactive computing with:**

- A powerful interactive shell.
- A kernel for Jupyter.
- Support for interactive data visualization and use of GUI toolkits.
- Flexible, embeddable interpreters to load into your own projects.
- Easy to use, high performance tools for parallel computing.
  {{< /blockquote >}}

```shell
% python 3
$ pip3 install ipython
% or
$ sudo apt install ipython3
```

#### Debugs

如果遇到权限问题，可以尝试在命令后加 `--user`

### 卸载

```shell
$ pip uninstall <package name>
% or
$ pip3 uninstall <package name>
```
