+++
title = "Ubuntu 安装 Zsh ，配置最强终端"
date = "2020-03-30T00:12:58+08:00"
tags = ["Ubuntu 装机与优化"]
keywords = ["Ubuntu","zsh","oh-my-zsh","linux","Z shell","zsh-autosuggestions","zsh-syntax-highlighting","alias 命令别名","source ~/.zshrc","git-open"]
+++

{{< blockquote link="https://zh.wikipedia.org/wiki/Z_shell" >}}
Z shell（Zsh）是一款可用作交互式登录的 shell 及脚本编写的命令解释器。Zsh 对 Bourne shell 做出了大量改进，同时加入了 Bash、ksh 及 tcsh 的某些功能。
{{< /blockquote >}}

## 安装 Zsh

```shell
# 安装
sudo apt install zsh

# 将 zsh 设置为默认 shell
chsh -s /bin/zsh

# 检查
echo $SHELL
# 返回 /usr/bin/zsh 即表示成功；若没成功，重启试试看
```

## 安装 Oh My Zsh

{{< blockquote title="Oh My Zsh" link="https://github.com/ohmyzsh/ohmyzsh#readme" >}}
Oh My Zsh is an open source, community-driven framework for managing your zsh configuration.

Oh My Zsh will not make you a 10x developer...but you may feel like one.
{{< /blockquote >}}
Oh My Zsh 是基于 Zsh 命令行的一个扩展工具集，提供了丰富的扩展功能，如：主题配置，插件机制，内置的便捷操作等，，可以给我们一种全新的命令行使用体验。[^1]

```shell
% 通过 curl
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

% 或者 通过 wget
sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## 配置

### 更换主题

在 [这里](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes) 选择喜欢的主题，将名称填入根目录 `.zshrc` 中对应位置

```shell
ZSH_THEME="theme name"
```

### 配置插件

在这里，我介绍我使用的 3 个插件，安装都很简单，打开 Terminal 依次输入

1. 自动补全 {{< mark text="zsh-autosuggestions" >}}

```shell
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

2. 代码高亮 {{< mark text="zsh-syntax-highlighting" >}}

```shell
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

3. 快速打开 GitHub 仓库 {{< mark text="git-open" >}}

```shell
git clone https://github.com/paulirish/git-open.git $ZSH_CUSTOM/plugins/git-open`
```

最后需要配置 `plugins`

```shell
plugins=(
 git
 zsh-autosuggestions
 zsh-syntax-highlighting
 git-open
)
```

### alias 命令别名

同样在 `.zshrc` 中，可使用下方类似语法设置命令别名，实现快速输入

```shell
# alias
alias cls='clear'

alias ga='git add'
alias gc='git commit -m'
alias gp='git push'
alias go='git-open'

alias update='sudo apt update'
alias upgrade='sudo apt upgrade'
alias install='sudo apt install'


alias aremove='sudo apt autoremove'
alias remove='sudo apt remove'
alias aclean='sudo apt autoclean'
alias clean='sudo apt clean'
```

<img src="https://imgkr.cn-bj.ufileos.com/9d09d6d9-7352-4099-8027-5313d41b085a.gif" width="95%" />

最后，`source ~/.zshrc` 使配置生效

[^1]: https://segmentfault.com/a/1190000015283092
