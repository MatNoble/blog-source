+++
title = "数据类型"
date = "2021-01-25T00:19:30+00:00"
description = "数据结构从 0 到 1"
tags = ["数据结构与算法"]
keywords = ["数据结构","python","数组","列表","复制","深复制","浅复制","字典","MatNoble"]
toc = true
mathjax = false
+++

Python 中的数据类型：
- 不可变：Number, String, Tuple
- 可变： Bool, List, Set, Dictionary


## 数字 Number

> int, long, float, complex

- `//` **向下取整**：
```
5 // 3  =  1.67 # 1
-5 // 3 = -1.67 # -2
```
- `%` 取模 - 返回除法的余数
```
365 % 10 # 5
5 % 3 # 2
```

{{< notice tip >}}
奇数  
`num % 2 != 0`  
偶数  
`num % 2 == 0`
{{< /notice >}}

## 数组 Array

数组支持**随机访问**。Python 的数组分三种类型：
- list 列表
- tuple 元组
- dictionary 字典

### 列表 list []

遍历列表 `nums`
```python
for num in nums:
    print(num)

for idx, val in enumerate(nums):
    print(idx, val)
```

|操作|说明|
|:-:|:-:|
|.insert(index, value)|增|
|.append(value)|增|
|.remove(value)|删|
|del list[index]|删|
|.pop()|删|
|.sort()|排序|
|.reverse()|逆序|

{{< notice warning >}}
直接赋值 & 浅拷贝(copy) & 深拷贝(deepcopy)
- **直接赋值**：其实就是对象的引用（别名）。
- **浅拷贝(copy)**：拷贝父对象，不会拷贝对象的内部的子对象。
- **深拷贝(deepcopy)**： copy 模块的 deepcopy 方法，完全拷贝了父对象及其子对象。
{{< /notice >}}

<img src="https://cdn.jsdelivr.net/gh/MatNoble/Images/copy.png" width="600"/>

```python
import copy
a = [1, 2, 3, 4, ['a', 'b']] #原始对象
 
b = a                     #赋值，传对象的引用
c = copy.copy(a)          #对象拷贝，浅拷贝
d = copy.deepcopy(a)      #对象拷贝，深拷贝
 
a.append(5)               #修改对象a
a[4].append('c')          #修改对象a中的['a', 'b']数组对象
 
print( 'a = ', a )
print( 'b = ', b )
print( 'c = ', c )
print( 'd = ', d )

>>> ('a = ', [1, 2, 3, 4, ['a', 'b', 'c'], 5])
>>> ('b = ', [1, 2, 3, 4, ['a', 'b', 'c'], 5])
>>> ('c = ', [1, 2, 3, 4, ['a', 'b', 'c']])
>>> ('d = ', [1, 2, 3, 4, ['a', 'b']])
```

### 元组 tuple()

**不可修改**

### 字典 dictionary{:}

哈希表或散列表

`dict = {key1:value1, key2:value2, key3:value3}`

- 增
`dict['key'] = value`
- 删 
`del dict['key']`

```python
# define user = dict()
user = {
    'userName': 'MatNoble',
    'gender': 'Male',
    'age': 18,
}

# .items()
for key, value in user.items():
    print(f"\nKey:{key}")
    print(f"Value:{value}")

# .key() + .get(key)
for key in user.keys():
    print(key + ":" + str(user.get(key)))

# .values()
for value in user.values():
    print(value)
```

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1TUA3v4K_zdZzSUjCtoO-0tbA_9sAvFQe?usp=sharing)

### 栈 Stack

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/20210125201657.png" title="LIFO(Last In, First Out - 后进先出)" >}}

|操作|说明|时间复杂度|
|:-:|-|-|
|.push()|将元素放置到栈顶|O(1) |
|.pop()|将栈顶元素弹出| O(1)|
|.top()|得到栈顶元素的值|O(1) |
|.isEmpty()|判断栈内是否有元素| O(1)|

**应用**
- 函数调用栈
- 浏览器前进后退
- 匹配括号
- 单调栈用来寻找下一个更大（更小）元素

### 队列 Queue

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/20210125221038.png" title="FIFO (First In First Out - 先进先出)" >}}

## 字符串 String

- f -> format
```
first_name = "Ross"
last_name = "MatNoble"
full_name = f"{first_name} {last_name}" # Ross MatNoble
```
- 特殊符号

|操作|说明|
|:-:|-|
| \ | 转义符|
|\n| 换行符|
|\t|制表符|

`r` 避免转义
`print(r"\\\t\\") # \\\t\\`

|操作|说明|
|:-:|-|
|.title()|首字母大写|
|.upper()|大写|
|.lower()|小写|
|.strip()|消除空格|

## 布尔 Bool

|   and   | True | False |
| :---: | :---: | :---: |
|True | True | False |
|False | False | False |

|   or   | True | False |
| :---: | :---: | :---: |
|True | True | True |
|False | True | False |

|   not   | True | False |
| :---: | :---: | :---: |
| | False | True |

## 集合 Set{}

**唯一性**

|操作|说明|
|:-:|-|
|.add(value)|增|
|.update(value)|增, 列表、元组、字典|
|.remove(value)|删|
|.discard(value)|删，不报错|