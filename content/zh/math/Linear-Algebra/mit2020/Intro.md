+++
title = "MIT 2020 版线性代数 --- 前言"
date = "2020-05-23T00:00:00+08:00"
categories = ["MATH","线代拾遗"]
tags = ["MIT 2020"]
keywords = ["MIT 线性代数","Pro. Gilbert Strang","线代拾遗","矩阵","线性代数","基底","matrix","linear algebra","Space base","MatNoble"]
toc = true
katex = true
series = ["mla"]
+++

今年早些时候，Gilbert Strang 教授把经典的 18.06 线性代数 更新了一些内容，准确来说是：重新阐释了其中一些重要内容，是对之前课程的补充。

{{< youtube "YrHlHbtiSM0" >}}

## 18.06 线性代数

第一版发布于 2002 年，至今有超过 1000 万的浏览量，应该属于最受欢迎的线性代数公开课之一。在 B 站上可以观看

{{< bili aid=36568126 cid=64213503 >}}

## 2020 补充内容

从课程主页上，可以看到本次更新了 6 个视频

- A New Way to Start Linear Algebra
- The Column Space of a Matrix
- The Big Picture of Linear Algebra
- Orthogonal Vectors
- Eigenvalues and Eigenvectors
- Singular Values and Singular Vectors

大致内容如下：

更加关注矩阵的..列..，$\boldsymbol{A}\vec{x}$表示$\boldsymbol{A}$各列的线性组合。介绍..矩阵的列空间..，强调线性无关列的重要性。

介绍矩阵的..四个基本空间..可以更全面的从矩阵的角度理解..线性映射..。

..正交矩阵..是比普通矩阵更“友好”的矩阵。

..特征值与特征向量..可以帮我们将矩阵尽可能的对角化。

..奇异值与奇异向量..则展示了普通矩阵最本质的特征。

## 小结

由于今年情况特殊，大一的小朋友在春季学期学的线性代数要等到返校后才能考，复习期间不妨看看他山之石。另外，时间充裕的考研同学也可以看看最流行的线性代数课程。

正如教授开设的数据分析、机器学习等课程，熟练掌握线性代数对于时下热门的智能科学也相当重要。

课程主页：

https://ocw.mit.edu/resources/res-18-010-a-2020-vision-of-linear-algebra-spring-2020/


看完 2020 版更新的内容，我甚至感到一些欣慰，最近的几次关于线性代数的更新全部属于本次更新的内容🎉

- [正交矩阵之旋转与镜射](https://blog.matnoble.top/math/linear-algebra/rotationandmirroring/)
- [奇异值分解初探](https://blog.matnoble.top/math/linear-algebra/svd-mathematical-basis-a/)
- [奇异值分解再探](https://blog.matnoble.top/math/linear-algebra/svd-mathematical-basis-a/)
- [线代视角下的最小二乘法](https://blog.matnoble.top/math/linear-algebra/matrixleastsquares/)
- [矩阵的四个基本空间, 不了解下吗?](https://blog.matnoble.top/math/linear-algebra/matrix4basicth/)
- [矩阵四个基本空间的基底](https://blog.matnoble.top/math/linear-algebra/basicspacebase/)
 
--- 

## Introduction

![](https://imgkr.cn-bj.ufileos.com/71e2cb41-d715-4f30-a73a-26dc83ac1a9d.svg)

上表展示了 MIT 2020 版线性代数更新提纲，之后所有内容都围绕他们展开

前三行展示了三种**矩阵分解**。第一个并不常见：_对于任意矩阵$\boldsymbol{A}$，都可以分解为 $\boldsymbol{C \cdot R}$，其中矩阵 $\boldsymbol{C}$ 列满秩。_ 

后两个是非常常见的矩阵分解，前者实质上是**行变换**，后者中，$\boldsymbol{Q}$ 表示**正交矩阵**。

第二个方框中的三个式子全部与**特征值**和**特征向量**有关。$\boldsymbol{S}$ 表示**对称矩阵**。最后涉及到 --- **奇异值分解**，它们是非常重要的内容(原文:That's the high point of the theory.)

以上，除了第一个式子是 Gilbert Strang 教授本次拿出来作为教授线代的出发点，其余内容都可以在完整版 18.06 的课程中找到。

---

之前看过台湾国立交通大学的线代课程，任课教授提到『线性代数是一门与时俱进的课程』每隔几年，工程中遇到的问题会反馈到教学中，之后在应用到实际工作中。当然，数学作为一门基础学科，不会直接影响实际的生产工作，但是这种影响是..间接..的，是..潜移默化..的。

正如本次 2020 更新，矩阵分解、特征值、特征向量，尤其是奇异值、奇异向量，对于当今人工智能领域，诸如机器学习，深度学习有很重要的应用。
