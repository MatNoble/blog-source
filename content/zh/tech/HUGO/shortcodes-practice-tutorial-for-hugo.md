+++
title = "在 Hugo 博客上实践 Shortcodes 短代码, 太强大了"
date = "2020-02-16T00:22:42+00:00"
description = "Hugo 这个「高度自定义」功能太喜欢了"
categories = ["TECH","建站那些事儿"]
tags = ["Hugo"]
keywords = ["Shortcodes","短代码","Hugo 博客","建站那些事儿","year","hugo-notice","music","video","friend link","优酷","维基百科 Wikipedia","blockquote"]
toc = true
katex = true
gitinfo = true
images = ["https://cdn.jsdelivr.net/gh/MatNoble/Images/win/art-202307182258302.png"]
aliases = ["/posts/shortcodes-practice-tutorial-for-hugo"]
+++

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/win/art-202307182258302.png" title="动手玩创意" >}}

操练起来!

<!--more-->

## 前言

Shortcodes 翻译为: 短代码或者简码

{{< blockquote author="HUGO" link="https://s0gohugo0io.icopy.site/content-management/shortcodes/#what-a-shortcode-is" title="什么是简码" >}}
简码是内容文件中的一个简单片段，Hugo将使用预定义的模板对其进行呈现.

除了更清洁的Markdown外，短代码还可以随时更新以反映新的类，技术或标准. 在网站生成时，Hugo简码将轻松合并到您的更改中. 您避免了可能复杂的搜索和替换操作.
{{< /blockquote >}}

### 需注意

本博客基于 HUGO, 使用的是 [reuixiy](https://io-oi.me/) 开发的 [MemE 主题](https://github.com/reuixiy/hugo-theme-meme/), 但由于该主题暂时不支持 Shortcodes (与$\LaTeX$ 渲染冲突), 所以, 如果你用的也是该主题, 又想玩玩儿 Shortcodes, 那么你需要作出一些小修改, 修改办法见下方链接.

{{< blockquote author="reuixiy" link="https://github.com/reuixiy/hugo-theme-meme/issues/50">}}
MemE v4.0.0 breaks Hugo shortcodes
{{< /blockquote >}}

- 为防止 `shortcodes` 语法被博客生产 `短代码`, 加{{< mark text="*">}}使用{{< mark text="{{</* myshortcode */>}}" >}}

输出结果为:
```
{{</* myshortcode */>}}
```

## Shortcodes 实例
### 当前年 Year
官网例子, 输出今年的年份.

```markdown
今年是 {{</* year */>}} 年.
```
今年是 {{< year >}} 年.

只需建立 `./layouts/shortcodes/year.html`

```html
{{ now.Format "2006" }}
```

### mark 标记支持

```markdown
{{</* mark text="HTML 标记" */>}}
```
{{< mark text="HTML 标记" >}}

<br />
实现方法很简单, 只需创建 `mark.html`

```html
<!-- ./layouts/shortcodes/mark.html 
https://matnoble.github.io/posts/shortcodes-practice-tutorial-for-hugo/#mark-标记支持
-->

<mark>{{ .Get "text" }}</mark>
```

### abbr 缩写支持

```markdown
{{</* abbr title="Huazhong University of Science and Technology" text="HUST" */>}}
```
{{< abbr title="Huazhong University of Science and Technology" text="HUST" >}}

<br />
实现方法也很简单, 只需创建 `abbr.html`

```html
<!-- ./layouts/shortcodes/abbr.html 
https://matnoble.github.io/posts/shortcodes-practice-tutorial-for-hugo/#abbr-缩写支持
-->

<abbr title="{{ .Get "title" }}">{{ .Get "text" }}</abbr>
```

### 维基百科 Wikipedia
借鉴自[GitHub](https://github.com/parsiya/Hugo-Shortcodes/blob/master/shortcodes/wp.html), 举个栗子:

```markdown
{{</* wp tag="Wikipedia:历史上的今天" lang="zh" title="历史上的今天" */>}}
```

{{< wp tag="Wikipedia:历史上的今天" lang="zh" title="历史上的今天" >}}


### blockquote

借鉴自[GitHub](https://github.com/parsiya/Hugo-Shortcodes/blob/master/shortcodes/blockquote.html), 举个栗子:

```markdown
{{</* blockquote author="李健" link="https://baike.baidu.com/item/%E6%87%82%E5%BE%97/22699721" title="《懂得》" */>}}
花开花谢 白天黑夜<br />
一切自然 又不尽然<br />
春夏秋冬 经过才懂<br />
世间冷暖 无非自然
{{</* /blockquote */>}}
```
{{< blockquote author="李健" link="https://baike.baidu.com/item/%E6%87%82%E5%BE%97/22699721" title="《懂得》" >}}
花开花谢 白天黑夜<br />
一切自然 又不尽然<br />
春夏秋冬 经过才懂<br />
世间冷暖 无非自然
{{< /blockquote >}}

### image with caption

```markdown
{{</* imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/win/lebron-202307182307397.png" title="无比想念最好的骑士" */>}}
```

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/win/lebron-202307182307397.png" title="无比想念最好的骑士" >}}

<br />
实现稍复杂一些, 依旧建立 `imgcap.html`

```html
<!--
./layouts/shortcodes/imgcap.html
https://matnoble.github.io/posts/shortcodes-practice-tutorial-for-hugo/#image-with-caption
-->

<span class="caption-wrapper">
  <img class="caption" src="{{ .Get "src" }}"
       title="{{ .Get "title" }}"
       alt="{{ if .Get "alt" }}{{ .Get "alt" }}{{ else }}{{ .Get "title" }}{{ end }}"
       width="{{ if .Get "width" }}{{ .Get "width" }}{{ else }}95%{{ end }}"
       >
  <span class="caption">◎ {{ .Get "title" }}</span>
</span>
```

其中, `src` 和 `title` 为必填项, `alt` 和 `width` 为选填项, `alt` 默认与 `title` 保持一致, `width` 默认值为: {{< mark text="95%" >}}.

### Hugo-notice
{{< blockquote author="martignoni" link="https://github.com/martignoni/hugo-notice" title="hugo-notice" >}}
This is not a standalone theme. It is a Hugo theme component providing a shortcode: notice to display nice notices. Four notice types are provided: warning, info, note and tip.
{{< /blockquote >}}
`hugo-notice` 是一个制作十分精美的短代码, 非常感谢原作者的付出, 但使用并不需要把他的仓库 copy 到本地, 只需将 `notice.html` copy 到 `./layouts/shortcodes/` 下, 如需要翻译, 且使用 `MemE 主题`, 只需要在根目录下创建 `./i18n/zh-cn.toml`
```toml
[warning]
other = "警告"

[note]
other = "注释"

[info]
other = "引言"

[tip]
other = "小贴示"
```
显示效果如下:
#### Warning

```markdown
{{</* notice warning */>}}
这是告诫! 请注意!
{{</* /notice */>}}
```
{{< notice warning >}}
这是告诫! 请注意!
{{< /notice >}}

#### Info

```markdown
{{</* notice info */>}}
这是引言
{{</* /notice */>}}
```
{{< notice info >}}
这是引言
{{< /notice >}}

#### Tip

```markdown
{{</* notice tip */>}}
这是小贴示
{{</* /notice */>}}
```

{{< notice tip >}}
这是小贴示
{{< /notice >}}

#### Note

```markdown
{{</* notice note */>}}
这是注释
{{</* /notice */>}}
```

{{< notice note >}}
这是注释
{{< /notice >}}

### 音乐 Music
基于 [MetingJS](https://github.com/metowolf/MetingJS) 制作 `./layouts/shortcodes/music.html`
```
{{</* music id="569200212" type="song" server="netease" */>}}
```
|option |  default |  description|
|:--:|:--:|:--:|
|id |  require |  song id / playlist id / album id / search keyword|
|server | require  | music platform: netease, tencent, kugou, xiami, baidu|
|type | require | song, playlist, album, search, artist|

更多选项看[这里](https://github.com/metowolf/MetingJS#option)

显示效果:
{{< notice warning >}}
该 shortcodes 存在问题! 会导致 TOC 目录点击失效, 所以, 暂时只能将音乐放到没有目录的页面 👇
{{< /notice >}}

{{<imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/win/music-202307182314524.png" title="爱音乐">}}

### 视频 Video
#### YouTube
原生支持 YouTube, 代码如下

```markdown
{{</* youtube ID */>}}
```

{{< youtube MHsiF9avPww >}}

#### B 站

{{< bili aid="12440781" cid="20478809" >}}

#### 优酷 YOUKU
还可以创建`./layouts/shortcodes/youku.html` 使其支持 `YOUKU`

```markdown
{{</* youku id="ID" */>}}
```

{{< youku id="XNDU0OTY4OTg4OA==" >}}

### GitHub gist
原生支持, 添加 GitHub gist

```markdown
{{</* gist MatNoble b8d6a9541221fef7c30bf214d3505836 */>}}
```
{{< gist MatNoble b8d6a9541221fef7c30bf214d3505836 >}}

### 好友链接 Friend link
很多博客都支持添加 `友链`, 本博客也不例外, 在[这里](https://matnoble.github.io/search/#%E5%8F%8B%E9%93%BE)
借鉴自 [hugo-friendlinks](https://github.com/kkkgo/hugo-friendlinks), 针对本主题, 稍加修改.

```markdown
{{</* friend name="数学小兵儿" url="https://matnoble.github.io/" logo="/icons/android-chrome-512x512.png" word="数学＆计算机 我都爱" */>}}
```

{{< friend name="数学小兵儿" url="https://matnoble.github.io/" logo="/icons/android-chrome-512x512.png" word="数学＆计算机 我都爱" >}}

### 提供下载 download

以上所有 `shortcodes` 代码都可以访问以下 `GitHub` 链接下载, 欢迎发现问题的同学提交[Issues](https://github.com/MatNoble/hugo-shortcodes-sets/issues/1)!

{{< blockquote author="数学小兵儿" link="https://github.com/MatNoble/hugo-shortcodes-sets" title="hugo shortcodes sets" >}}
These are shortcodes that I have created for the Hugo static blogging engine.
{{< /blockquote >}}

### 更多示例
1. <a href="https://github.com/spf13/spf13.com/tree/master/layouts/shortcodes" title="See more examples of shortcodes by visiting the shortcode directory of the source for spf13.com, the blog of Hugo's creator, Steve Francia.">shortcodes directory for spf13.com</a>
2. <a href="https://github.com/gohugoio/hugo/tree/master/docs/layouts/shortcodes" title="See the shortcode source directory for the documentation site you're currently reading.">shortcodes directory for the Hugo docs</a>
