+++
title = "子集，组合，全排列"
date = "2021-03-13T00:11:30+00:00"
tags = ["回溯算法","子集","组合","全排列","双指针","编程刷题","二分法"]
keywords = ["leetcode","数据结构","python","数组","binary-search","二分法","MatNoble"]
toc = false
mathjax = true
+++

# 目录
- [78. 子集](./#78-子集)
- [77. 组合](./#77-组合)
- [46. 全排列](./#46-全排列)

## 78. 子集

### 题目描述
{{< notice note >}}

{{< /notice >}}
### 思路
### 代码
<details>
 <summary> Python </summary>

```python

```
</details>

### 复杂度
- 时间复杂度：
- 空间复杂度：

## 77. 组合
https://leetcode-cn.com/problems/combinations/
### 题目描述
{{< notice note >}}
给定两个整数 `n` 和 `k`，返回 `1 ... n` 中所有可能的 `k` 个数的组合。

示例:  
输入: `n = 4, k = 2`
输出:
```
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```
{{< /notice >}}
### 思路
回溯法

每次从当前位置后面选取元素

### 代码

```python
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        def backtrack(nums, track):
            if self.size == len(track):
                res.append(track)
                return
            for idx, num in enumerate(nums):
                backtrack(nums[idx+1:], track+[num])
        self.size, res = k, []
        backtrack(list(range(1, n+1)), [])
        return res
```

### 复杂度
- 时间复杂度：$O(C(n, k))$
- 空间复杂度：$O(k)$

## 46. 全排列

### 题目描述
{{< notice note >}}

{{< /notice >}}
### 思路
### 代码
<details>
 <summary> Python </summary>

```python

```
</details>

### 复杂度
- 时间复杂度：
- 空间复杂度：


