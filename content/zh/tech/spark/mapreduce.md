+++
title = "MapReduce 模型"
description = "分而治之, 将大困难分解成小困难"
date = "2023-08-26T00:50:30+08:00"
tags = ["Spark"]
keywords = ["Spark","Map","Reduce"]
images = ["https://cdn.jsdelivr.net/gh/MatNoble/Images/win/map-reduce202308252336979.png"]
+++

{{< blockquote link="https://en.wikipedia.org/wiki/MapReduce" title="MapReduce" >}}
MapReduce is a framework for processing parallelizable problems across large datasets using a large number of computers (nodes), collectively referred to as a cluster.
{{< /blockquote >}}

使用下面的示例来简单理解下 MapReduce 的核心思想：

> **目标**：将数据整体乘 2 后，再相加  
> *为了理解 MapReduce 思想，就不要想先加起来，再乘以 2 的方法了~*

1. `parallelize` 方法将大任务分解成小任务，分发给 3 个工作节点
2. `map` 方法将每个节点上的数据进行..相同..的加工（每个数都乘以 2）
3. `reduce` 方法将加工后的数据全部加起来返回

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/win/map-reduce202308252336979.png" title="MapReduce" >}}

对应 Python 代码如下
```python
# -*- coding: utf-8 -*-

from pyspark import SparkContext, SparkConf

if __name__ == '__main__':

    conf = SparkConf().setAppName("map_reduce").setMaster("local[*]")
    sc = SparkContext(conf=conf)

    list = [1, 2, 3, 4, 5]
    list_rdd = sc.parallelize(list, 3).cache()
    print(list_rdd.glom().collect())
    
    map_rdd = list_rdd.map(lambda x: x * 2).cache()
    print(map_rdd.glom().collect())
    
    reduce_rdd = map_rdd.reduce(lambda x, y: x + y)
    print(reduce_rdd)
    
    sc.stop()
```

```shell
[[1], [2, 3], [4, 5]]
[[2], [4, 6], [8, 10]]
30
```

以上计算过程中, `map` 阶段..分布式..地将所有数据都乘以 2，然后 `reduce` 阶段将所有结果相加. 但似乎还可以继续优化, 将每个工作节点上的数据先相加起来, 再丢给 `reduce` 做相加计算, 会更充分..分布式..的特性

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/win/map-reduce202308260025378.png" title=" 预聚合" >}}

实现时, 将 `reduce` 替换为 `aggregate` 即可
```python
reduce_rdd = map_rdd \
    .aggregate(0, lambda x, y: x + y, lambda x, y: x + y)
```

本文使用了 3 种基本算子:

| 算子名称                            | 基本用法                                                      |
| ----------------------------------- | ------------------------------------------------------------ |
| map(func)                           | 映射，接收一个函数                                           |
| reduce(func)                        | 聚合，接收一个函数                                           |
| aggregate(zeroValue, seqOp, combOp) | zeroValue：初始值<br>seqOp：分区内聚合<br>combOp: 分区间聚合 |

