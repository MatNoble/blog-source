+++
title = "图解Spark RDD的五大特性"
date = "2023-08-24T00:21:30+00:00"
tags = ["Spark"]
keywords = ["Spark","RDD"]
toc = true
+++

在 Spark 的源码中，RDD 被描述为：
```scala
 * Internally, each RDD is characterized by five main properties:
 *
 *  - A list of partitions
 *  - A function for computing each split
 *  - A list of dependencies on other RDDs
 *  - Optionally, a Partitioner for key-value RDDs 
      (e.g. to say that the RDD is hash-partitioned)
 *  - Optionally, a list of preferred locations to compute each split on 
      (e.g. block locations for an HDFS file)
```

## 特性一：分布式存储
一个 RDD 的数据存储在 ..不同的.. “节点”上

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/win/spark-rdd-partitions-202308242243964.png" title="Spark RDD 分布式存储" >}}

```python
>>> rdd = sc.parallelize([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
>>> rdd.glom().collect()
[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
>>> rdd = sc.parallelize([1, 2, 3, 4, 5, 6, 7, 8, 9], 6)
>>> rdd.glom().collect()
[[1], [2, 3], [4], [5, 6], [7], [8, 9]]
```

## 特性二：分布式计算

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/win/spark-rdd-partition-202308242302339.png" title="Spark RDD 分布式计算" >}}

```python
>>> rdd = sc.parallelize([1, 2, 3, 4, 5, 6, 7, 8, 9], 3).map(lambda x: x*10)
>>> rdd.glom().collect()
[[10, 20, 30], [40, 50, 60], [70, 80, 90]]
```

## 特性三：RDD 间拥有依赖链条

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/win/spark-rdd-202308242311330.png" title="Spark RDD 间的依赖链条" >}}

## 特性四：（可选）key-value 型的 RDD 拥有分区器

> 默认分区器：Hash 分区

## 特性五：（可选）数据本地行

> RDD 进行数据分区时，会尽量靠近数据所在节点，增加本地读取，减少网络读取，提上计算性能