+++
title = "哈希表"
date = "2021-02-18T00:19:30+00:00"
description = "91 天学算法"
tags = ["LeetCode题解","编程刷题","哈希表"]
keywords = ["leetcode","数据结构","python","链表","数组","栈","队列","MatNoble"]
toc = false
mathjax = true
+++

# 目录
- [每日一题](./#每日一题)
  - [x] [1. 两数之和](./#1-两数之和)
  - [x] [347. 前 K 个高频元素](./#347-前-k-个高频元素)
  - [x] [447. 回旋镖的数量](./#447-回旋镖的数量)
  - [x] [3. 无重复字符的最长子串](./#3-无重复字符的最长子串)

## 每日一题
### 1. 两数之和
https://leetcode-cn.com/problems/two-sum
#### 题目描述
{{< notice note >}}
给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出 **和为目标值** 的那 **两个** 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

你可以按任意顺序返回答案。

**示例:**  
**输入：** nums = [2,7,11,15], target = 9  
**输出：** [0,1]  
**解释：** 因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
{{< /notice >}}
#### 思路
- 用 **字典(哈希表)** 存储每个数对应的索引及值. 哈希表实现快速查找 $O(1)$
- 当 `target - 当前数` 在 **字典(哈希表)** 中存在时，说明已存储的数和当前数相加可以得到目标值 `target`
- 返回对应的索引 `[hashmap[target - num], idx]`
#### 代码
<details>
 <summary> Python </summary>

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashMap={}
        for idx, num in enumerate(nums):
            if (target - num) in hashMap:
                return [hashMap.get(target - num), idx]
            hashMap[num] = idx
```
</details>

#### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$

### 347. 前 K 个高频元素
https://leetcode-cn.com/problems/top-k-frequent-elements
#### 题目描述
{{< notice note >}}
给定一个非空的整数数组，返回其中出现频率前 **k** 高的元素。

**示例 1:**  
**输入:** nums = [1,1,1,2,2,3], k = 2  
**输出:** [1,2]

**示例 2:**  
**输入:** nums = [1], k = 1  
**输出:** [1]
 
- 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
- 你的算法的时间复杂度**必须**优于 O(n log n) , n 是数组的大小。
- 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
- 你可以按任意顺序返回答案。
{{< /notice >}}
#### 思路
#### 代码
<details>
 <summary> Python </summary>

```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        dict = collections.Counter(nums) # 计数
        return [v[0] for v in sorted(dict.items(), key=lambda x:x[1])][-k:] # 排序返回
```
</details>

#### 复杂度
- 时间复杂度：$O(NlogN)$
- 空间复杂度：$O(N)$

### 447. 回旋镖的数量
#### 题目描述
{{< notice note >}}
给定平面上 n 对**互不相同**的点 `points`，其中 `points[i] = [xi, yi]` 。**回旋镖**是由点 `(i, j, k)` 表示的元组 ，其中 `i` 和 `j` 之间的距离和 `i` 和 `k` 之间的距离相等（**需要考虑元组的顺序**）。

返回平面上所有回旋镖的数量。

**示例 1：**  
**输入：** points = [[0,0],[1,0],[2,0]]  
**输出：** 2  
**解释：** 两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]

**示例 2：**  
**输入：** points = [[1,1],[2,2],[3,3]]  
**输出：** 2

**示例 3：**  
**输入：** points = [[1,1]]
**输出：** 0

**提示：**  
- n == points.length
- $1 <= n <= 500$
- points[i].length == 2
- $-10^4 <= x_i, y_i <= 10^4$
- 所有点都**互不相同**
{{< /notice >}}
#### 思路
- **外层循环**：
- **内层循环**：

#### 代码
<details>
 <summary> Python </summary>

```python
from collections import Counter
class Solution:
    def numberOfBoomerangs(self, points: List[List[int]]) -> int:
        def dis(a, b): return (a[0]-b[0])**2+(a[1]-b[1])**2
        count = 0

        for a in points:
            dis_ = []
            for b in points:
                dis_.append(dis(a, b))
            dict = Counter(dis_)
            for val in dict.values():
                if val > 1:
                    count += val * (val-1)
                    
        return count
```
</details>

#### 复杂度
- 时间复杂度：$O(n^2)$
- 空间复杂度：$O(n)$

### 3. 无重复字符的最长子串
#### 题目描述
{{< notice note >}}
给定一个字符串，请你找出其中不含有重复字符的**最长子串**的长度。

**示例 1:**  
**输入:** s = "abcabcbb"  
**输出:** 3   
**解释:** 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

**示例 2:**  
**输入:** s = "bbbbb"  
**输出:** 1  
**解释:** 因为无重复字符的最长子串是 "b"，所以其长度为 1。

**示例 3:**  
**输入:** s = "pwwkew"  
**输出:** 3  
**解释:** 因为无重复字符的最长子串是 "wke"，所以其长度为 3。**请注意**: 你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

**示例 4:**  
**输入:** s = ""  
**输出:** 0

**提示：**  
- 0 <= s.length <= 5 * 104
- s 由英文字母、数字、符号和空格组成
{{< /notice >}}
#### 思路
- 滑动窗口 + 哈希表
- 哈希表：
  - `key`: 列表值
  - `value`: `idx + 1` # 该处的索引值 + 1
- 滑动窗口:
  - 满足条件，扩大窗口，右移右窗口
  - 不满足条件，缩小窗口，左窗口右移
  - 直到右窗口到达数组列表右边界
- **条件** `s[right] in hashMap and hashMap[s[right]] > left`
  - 遍历值在哈希表中
  - 哈希表中对应的 `value` $>$ 当前左窗口 `left`
- 更新 `res`  
在 `left` 更新之前，计算 `res = max(res, right-left)`

#### 代码
<details>
 <summary> Python </summary>

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        res = left = right = 0
        hashMap = {}
        while right < len(s):
            if s[right] in hashMap and hashMap[s[right]] > left:
                res = max(res, right-left)
                left = hashMap[s[right]]
            hashMap[s[right]] = right+1
            right += 1
        return max(res, right-left)
```
</details>

#### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$
<!--
#### 题目描述
{{< notice note >}}

{{< /notice >}}
#### 思路
#### 代码
<details>
 <summary> Python </summary>

```python

```
</details>

#### 复杂度
- 时间复杂度：
- 空间复杂度：
-->