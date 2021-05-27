+++
title = "Python collections 类"
tags = ["编程之道"]
keywords = ["python"]
date = "2021-03-13T00:10:00+00:00"
toc = true
+++

{{< blockquote author="Python 官方文档" link="https://docs.python.org/zh-cn/3/library/collections.html" title="collections --- 容器数据类型" >}}
这个模块实现了特定目标的容器，以提供 Python 标准内建容器 `dict`, `list`, `set`, 和 `tuple` 的替代选择。
{{< /blockquote >}}

## deque

{{< blockquote author="Python 官方文档" link="https://docs.python.org/zh-cn/3/library/collections.html#collections.deque" title="collections.deque() 双项队列" >}}
Deque 队列是由栈或者 queue 队列生成的（发音是 “deck”，”double-ended queue”的简称）。Deque 支持线程安全，内存高效添加 (append) 和弹出 (pop)，从两端都可以，两个方向的大概开销都是 O(1) 复杂度。
{{< /blockquote >}}

- 添加
  - append(x)
    添加 x 到右端
  - appendleft(x)
    添加 x 到左端
- 删除队尾 or 队首
  - pop()
    移去并且返回一个元素，deque 最右侧的那一个
  - popleft()
    移去并且返回一个元素，deque 最左侧的那一个
- 删除
  - remove(value)
    移除找到的第一个 value
  - clear()
    移除所有元素，使其长度为 0
- 旋转
  - reverse()
    将 `deque` 逆序排列。返回 `None` 
  - rotate(n=1)
    向右循环移动 n 步。 如果 n 是负数，就向左循环
- count(x)
  计算 deque 中元素等于 x 的个数

## Counter

{{< blockquote author="Python 官方文档" link="https://docs.python.org/zh-cn/3/library/collections.html#collections.Counter" title="collections.Counter() 计数器工具" >}}
Counter 是实现的 dict 的一个子类，可以用来方便地计数。

**注解**  
..计数器..主要是为了表达运行的..正..的计数而设计；但是，小心不要预先排除负数或者其他类型。为了帮助这些用例，这一节记录了最小范围和类型限制。  
`Counter` 类是一个字典的子类，不限制键和值。值用于表示计数，但你实际上 可以 存储任何其他值。

- `most_common()` 方法在值需要排序的时候用
- 原地操作比如 `c[key] += 1`，值类型只需要支持加和减。所以分数，小数，和十进制都可以用，负值也可以支持。这两个方法 `update()` 和 `subtract()` 的输入和输出也一样支持负数和 0
- `Multiset` 多集合方法只为正值的使用情况设计。输入可以是负数或者 0，但只输出计数为正的值。没有类型限制，但值类型需要支持加，减和比较操作
- `elements()` 方法要求正整数计数。忽略 0 和负数计数
{{< /blockquote >}}

- elements()
  返回一个迭代器，其中每个元素将重复出现计数值所指定次
- most_common(n)
  返回一个列表，其中包含 n 个最常见的元素及出现次数，按常见程度由高到低排序
- items()
  从 dict 类中继承的方法
- update()
  增加元素
- subtract()
  原来的元素减去新传入的元素
- Counter 对象的常用案例
  ```python
  sum(c.values())              # total of all counts
  c.clear()                    # reset all counts
  list(c)                      # list unique elements
  set(c)                       # convert to a set
  dict(c)                      # convert to a regular dictionary
  c.items()                    # convert to a list of (elem, cnt) pairs
  Counter(dict(list_of_pairs)) # convert from a list of (elem, cnt) pairs
  c.most_common()[:-n-1:-1]    # n least common elements
  +c                           # remove zero and negative counts
  ```
  ```python
  >>> c = Counter(a=3, b=1)
  >>> d = Counter(a=1, b=2)
  >>> c + d   # add two counters together:  c[x] + d[x]
  Counter({'a': 4, 'b': 3})
  >>> c - d   # subtract (keeping only positive counts)
  Counter({'a': 2})
  >>> c & d   # intersection:  min(c[x], d[x]) 
  Counter({'a': 1, 'b': 1})
  >>> c | d   # union:  max(c[x], d[x])
  Counter({'a': 3, 'b': 2})
  ```
  ```python
  >>> c = Counter(a=2, b=-4)
  >>> +c
  Counter({'a': 2})
  >>> -c
  Counter({'b': 4})
  ```

## defaultdict

{{< blockquote author="Python 官方文档" link="https://docs.python.org/zh-cn/3/library/collections.html#collections.defaultdict" title="collections.defaultdict()" >}}
返回一个新的类似字典的对象。 defaultdict 是内置 dict 类的子类。它重载了一个方法并添加了一个可写的实例变量。其余的功能与 dict 类相同
{{< /blockquote >}}

<!-- 
https://www.jianshu.com/p/26df28b3bfc8

https://nfwcap.github.io/2019/03/05/%E5%85%B3%E4%BA%8EPython-collections-defaultdict-%E4%B8%8Edict%E7%9A%84%E4%BD%BF%E7%94%A8%E5%92%8C%E5%8C%BA%E5%88%AB/
-->