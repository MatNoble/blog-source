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
https://leetcode-cn.com/problems/subsets/
### 题目描述
{{< notice note >}}
给你一个整数数组 `nums`，数组中的元素 **互不相同** 。返回该数组所有可能的子集（幂集）。

解集 **不能** 包含重复的子集。你可以按 **任意顺序** 返回解集。

**示例 1：**  
- 输入：`nums = [1,2,3]`
- 输出：`[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]`

**示例 2：**  
- 输入：`nums = [0]`
- 输出：`[[],[0]]`

提示：  
- $1 <= nums.length <= 10$
- $-10 <= nums[i] <= 10$
- nums 中的所有元素**互不相同**
{{< /notice >}}
### 思路
递归实现回溯

### 代码
```python
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        """
        回溯算法
        """
        def backtrack(nums, track):
            res.append(track)
            for idx, num in enumerate(nums):
                backtrack(nums[idx+1:], track+[num])
        res = []
        backtrack(nums, [])
        return res
```

### 复杂度
- 时间复杂度：$O(n2^n)$
- 空间复杂度：$O(n)$

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
https://leetcode-cn.com/problems/permutations/
### 题目描述
{{< notice note >}}
给定一个 **没有重复** 数字的序列，返回其所有可能的全排列。

**示例:**  
- 输入: `[1,2,3]`
- 输出:
```
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
```
{{< /notice >}}
### 思路
注意避免重复
### 代码
```python
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        def backtrack(nums, track):
            if self.size == len(track):
                res.append(track)
                return
            for num in nums:
                if num in track: continue # 避免重复
                backtrack(nums, track + [num])
        self.size, res = len(nums), []
        backtrack(nums, [])
        return res
```

### 复杂度
- 时间复杂度：$n*n!$
- 空间复杂度：$n*n!$

<hr />

## 47. 全排列 II
https://leetcode-cn.com/problems/permutations-ii/
### 题目描述
{{< notice note >}}
给定一个可包含重复数字的序列 `nums`，**按任意顺序** 返回所有不重复的全排列。

**示例 1：**  
- 输入：`nums = [1,1,2]`
- 输出：
```
[[1,1,2],
 [1,2,1],
 [2,1,1]]
```

**示例 2：**  
- 输入：`nums = [1,2,3]`
- 输出：`[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]`

**提示：**  
- $1 <= nums.length <= 8$
- $-10 <= nums[i] <= 10$
{{< /notice >}}
### 思路
剪枝技巧

### 代码
```python
class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        if not nums: return []
        def dfs(nums, depth, path, used, res):
            if depth == self.size:
                res.append(path)
                return
            for i in range(self.size):
                if not used[i]:
                    if i > 0 and nums[i] == nums[i - 1] and not used[i - 1]:
                        continue
                    used[i] = True
                    dfs(nums, depth + 1, path+[nums[i]], used, res)
                    used[i] = False
        self.size, res = len(nums), []
        nums.sort()
        dfs(nums, 0, [], [False]*self.size, res)
        return res
```

### 复杂度
- 时间复杂度：$n*n!$
- 空间复杂度：$n*n!$