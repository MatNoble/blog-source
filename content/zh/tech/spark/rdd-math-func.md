+++
title = "Spark RDD 中的数学统计函数"
description = "分布式系统中求和，计数，求均值"
date = "2023-08-27T22:30:00+08:00"
tags = ["Spark"]
keywords = ["Spark","RDD","Avg", "Count", "sum", "统计函数", "分布式"]
images = ["https://cdn.jsdelivr.net/gh/MatNoble/Images/win/rdd-avg-aggregate-202308272228873.png"]
mathjax = true
toc = false
+++

[RDD（Resilient Distributed Datasets）是 Spark 中最基本的数据结构](https://matnoble.github.io/tech/spark/rdd/)，是适合做..分布式..计算的。那如何在分布式系统中，对数据{{< mark text="求和，计数，求均值" >}}呢？

<!--more-->

现在有数字 $1$ ~ $9$ 分布在 4 个分区中 
```scala
val list = 1 to 9
val numRdd = sc.parallelize(list, 4).cache()
// TODO 0. 打印分区
println("0. 分区情况为：")
println(numRdd.glom().collect().map(_.mkString("[", "，", "]")).mkString("\n") + "\n")
```

```shell
0. 分区情况为：
[1, 2]
[3, 4]
[5, 6]
[7, 8, 9]
```

## 求和

```scala
val sum = numRdd.reduce((a, b) => a + b)
```
利用 `reduce` 算子可以得到结果，它的工作原理是将数据 `shuffle` 到一个节点做加法：

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/win/add-add-reduce-202308272226637.png" title="reduce 做加法" >}}

但是，当数据量非常巨大时，就会收到磁盘 io 以及网络带宽的限制。如果，在将数据发送到下游节点之前，首先上游节点分别做求和，再将求和结果发送给下游节点做相加，那么，磁盘 io 以及网络带宽将不会是瓶颈了，而且也更充分的利用了分布式的优势

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/win/rdd-add-aggregate-202308272227948.png" title="aggregate 预聚合做加法" >}}

具体实现：
```scala
val sum = numRdd.aggregate(0)((sum, element) => sum + element, _ + _)
```

{{< notice tip >}}
`aggregate(z)(seqOp, combOp)` 算子接收 3 个参数：
1. z: 初始值
2. seqOp: 分区内用于预聚合的操作函数
3. combOp: 对分区结果进行合并的操作函数
{{< /notice >}}

### 求平方和
```scala
val sumOfSquares = numRdd.aggregate(0)((sum, element) => sum + element * element, _ + _)
```

## 计数

理解上面的求和之后，计数就更简单了：分区内计数后，再将分区间的计数结果相加即可
```scala
val count = numRdd.aggregate(0)((count, _) => count + 1, _ + _)
```

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/win/rdd-count-aggregate-202308272227275.png" title="aggregate 预聚合计数" >}}

## 求平均

利用 `aggregate` 算子求分布式系统的均值也是顺理成章：
1. 在分区内 ..求和.. 及 ..计数.. ，传给下游节点
2. 下游节点分别对上游的求和结果和计数结果进行累加
3. $均值= \frac{总求和}{总计数} $

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/win/rdd-avg-aggregate-202308272228873.png" title="aggregate 预聚合求均值" >}}

```scala
val (sum, count) = numRdd.
  aggregate(0, 0)((x, y) => (x._1 + y, x._2 + 1), (x, y) => (x._1 + y._1, x._2 + y._2))
val avg = sum / count
```
*上例中初始值为二元组，第一个值表示求和，第二个值表示计数*

## 源代码

{{< gist MatNoble dadb92d28f8baed03150530e63e29b59 >}}
