+++
title = "Git 实用命令汇总"
tags = ["开发"]
keywords = ["git 安装与配置","Git 基础教程","Git 实用命令","单个文件的“增删改查”","多设备间管理代码库","在 Github 上删除已提交的文件夹","SSH GitHub"]
date = "2019-03-14T00:00:00+00:00"
toc = true
aliases = ["/posts/git"]
+++

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/20210204185140.png" title="Git && GitHub" >}}

{{< blockquote link="https://zh.wikipedia.org/zh-cn/Git" title="git 主要功能" >}}
git 是用于 Linux 内核开发的版本控制工具。与 CVS、Subversion 一类的集中式版本控制工具不同，它采用了分布式版本库的作法，不需要服务器端软件，就可以运作版本控制，使得源代码的发布和交流极其方便。git 的速度很快，这对于诸如 Linux 内核这样的大项目来说自然很重要。git 最为出色的是它的合并追踪（merge tracing）能力。
{{< /blockquote >}}

## 安装及配置

安装:

```shell
sudo apt install git
```

配置:

1. 本地配置用户名与用户

   ```shell
   git config --global user.name "Your Name"
   git config --global user.email "email@example.com"
   ```

2. 生成 SSH 密钥，并与 {{< abbr title="GitHub是一个在线软件源代码托管服务平台，使用Git作为版本控制软件" text="GitHub" >}} 建立互信

   - 打开 Terminal，输入以下命令生成秘钥和公钥，并一路回车

   ```shell
   sh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```

   - 获取公钥，并复制到 GitHub

   ```shell
   cat .ssh/id_rsa.pub
   ```

   - 测试

   ```shell
   ssh -T git@github.com
   ```

   出现结果后，键入 `yes`，你将会看到

   ```shell
   > Hi username! You've successfully authenticated，but GitHub does not
   > provide shell access.
   ```

   这就表明成功了 🎉

## 提交常用命令

- 创建版本库

  ```shell
  git init
  ```

- 提交

  ```shell
  git add filename
  git commit -m "description"
  ```

- 提交信息查看

  ```shell
  # 显示工作树状态
  git status

  # 显示版本库和工作树之间的不同
  git diff

  # 撤销最近一次 commit
  git reset --hard HEAD^

  # 重写最近一次提交信息
  git commit --amend -m "description"

  # 查看提交历史
  git log
  ```

- 合并多次提交

  ```shell
  git rebase -i HEAD~n
  # 将 pick 改为 squash 或 s

  # 注释掉不想要的 commit message

  # 放弃合并
  git rebase --abort
  ```

## 分支操作

```shell
# 显示本地所有分支
git branch

# 显示远程所有分支
git branch -a

# 重命名当前分支
git branch -m new_branch_name

# 切换分支
git checkout other_branch_name

# 删除本地分支
git branch -d branch_name

# 强制删除本地分支
git branch -D branch_name

# 根据当前分支创建新分支
git checkout -b new_branch
```

## 项目协同

当我们要往其他人的仓库里贡献代码时，需要

> 1. `fork` 他人的代码仓到自己的 GitHub 仓库
> 2. `clone` 到本地修改代码
> 3. 提交代码到自己的代码仓
> 4. 合并到他人的仓库

**同步远程仓变更**

1. 添加远程分支
   ```shell
   # 添加远程分支
   git remote add upstream
   # 查看远程分支
   git remote -v
   ```
2. 同步远程修改
   ```shell
   # 获取远程仓更新
   git fetch upstream
   # 切换到目标分支 xxx
   git checkout xxx
   # 将远程修改 merge 到本地
   git merge upstream/xxx
   # 提交到自己远程代码仓
   git push
   ```

## 在 Github 上删除已提交的文件夹

假如我们在提交中不小心把一个不需要的文件夹提交到了远程仓库，而此时再写入 `.gitignored` 已经为时已晚，为了解决这一问题，可以这样做:

Github 在提交了之后无法在线删除文件夹，但是在本地 Git 库中却可以，只要在 Git 库中删除对应的缓存，再 push 到 Github 服务器，文件夹的删除目的就达成了

以下是具体操作:

```shell
git rm -r --cached 目录名
git commit -m '描述'
git push -u origin master
```

## 其他

推荐配合 [alias 命令别名](https://matnoble.github.io/tech/ubuntu/install-zsh/#alias-%E5%91%BD%E4%BB%A4%E5%88%AB%E5%90%8D)，实现快捷操作
