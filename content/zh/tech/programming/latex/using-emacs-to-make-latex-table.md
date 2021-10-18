+++
title = "使用 Emacs 制作 LaTeX 表格"
date = "2020-02-14T00:00:00+00:00"
description = "作为神的编辑器 Emacs, 处理 LaTeX, 小菜一碟"
categories = ["TECH","LaTeX 科技排版"]
tags = ["Emacs","latex"]
keywords = ["神的编辑器 Emacs","编辑器之神 Vim","Emacs","LaTeX","org-mode","python","表格"]
toc = true
katex = true
images = ["https://imgkr.cn-bj.ufileos.com/72cfb590-7916-4f3f-a1a5-37756bcce23c.png"]
+++

$\LaTeX$ 输出表格一般情况是不容易的, 但在 **Emacs** 中, 利用 **快捷键** 实现 **快捷操作**, 创建 $\LaTeX$ 表格就容易多了.

<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;"><iframe src="//player.bilibili.com/player.html?aid=88928743&cid=151902070&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 90%; left: 0; top: 0;"> </iframe></div>

## 步骤解析

- Step 1 `table`基础环境

`C-c C-e` 后键入 `table`, 经过选取一些基本参数, 得到`table`环境. 视频前 30s 展示次步骤.

> 参数包括:
>
> - `Float position`: 一般填写`ht`;
> - `Caption`: 表格标题;(应修改其默认位置至`tabular`之前)
> - `Center? (y or n)`: 居中选`y`;
> - `(Optional) position`: 直接回车;
> - Format: 每一列小单元格对齐情况: `l c r`, 并且选择是否有竖线`|`

- Step 2 横线

> - `M-N 某操作`: 其中`N`为数字, 该快捷键的意思是: 执行`N`次某操作. 比如
>   - `M-4 RET`为: 按四次回车;
>   - `M-5 Space`为: 按五次空格;
>   - $\cdots$

`\hline`意为横线.

`C-x r t string RET`是很重要的快操作指令, 见视频 23s ~ 1m50s.

- Step 3 块复制和块粘贴  
  之所以用 Emacs 制作 LaTeX 有优势, 就是因为`块操作`, 见视频 2m ~ 2m45s.

  - `C-x r M-w` : 块复制
  - `C-x r y`: 块粘贴

- Step 4 调整首行间距  
  利用`makecell`宏包, `\Gape[6pt]{}`指令, 见视频 3m20s ~ 3m40s.

<hr />

## Emacs 块操作快捷键

| 指令                                        |       快捷键       | 含义                                                     |
| :------------------------------------------ | :----------------: | :------------------------------------------------------- |
| 移除块 (kill-rectangle)                     |      C-x r k       | 把块删除并放入块移除存储中                               |
| 复制块 (copy-rectangle-as-kill)             |     C-x r M-w      | 把块内容存入删除存储中                                   |
| 删除块 (delete-rectangle)                   |      C-x r d       | 清除块的内容, 不保存                                     |
| 取回块 (yank-rectangle)                     |      C-x r y       | 把 kill ring 中最后一个块取出                            |
| 添加空块 (open-rectangle)                   |      C-x r o       | 按块添加空格, 原先内容向右移动                           |
| 清空块 (clear-rectangle)                    |      C-x r c       | 把块中内容换成空格                                       |
| 添加行号 (rectangle-number-lines)           |      C-x r N       | 在所选行前添加行号, 原先内容右移动                       |
| 块替换字符 (string-rectangle)               | C-x r t string RET | 把所选择的块的每一行都替换成相同的字符                   |
| 块选择模式 (rectangle-mark-mode)            |     C-x SPACE      | 可以在该模式中按照块进行选择, 并使用普通的移除, 删除操作 |
| 把块内容保存到 (copy-rectangle-to-register) |     C-x r r R      | 其中 'R' 代表任意字符, 相当于变量名, 指明内容保存的名字  |
| 插入保存的块 (insert-register)              |     C-x r i R      | 其中 'R' 代表任意字符, 相当于是保存块内容的变量          |

> 注: `C`为`Ctrl`键, `M`为`Alt`键．

## 开源代码

GitHub: [github.com/MatNoble/LaTeX-Document](https://github.com/MatNoble/LaTeX-Document/tree/master/table-test "github.com/MatNoble/LaTeX-Document")
