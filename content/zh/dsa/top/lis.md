+++
title = "最长递增子序列"
date = "2021-03-04T00:19:30+08:00"
tags = ["高频算法题","编程刷题"]
keywords = ["leetcode","数据结构","python","动态规划","二分法","最长递增子序列","MatNoble"]
toc = false
mathjax = true
+++

## 目录

- [674. 最长连续递增序列](./#674-最长连续递增序列)
- [300. 最长递增子序列](./#300-最长递增子序列)
- [354. 俄罗斯套娃信封问题](./#354-俄罗斯套娃信封问题)

### 674. 最长连续递增序列
https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/
#### 题目描述
{{< notice note >}}
给定一个未经排序的整数数组，找到最长且 **连续递增的子序列**。，并返回该序列的长度。

**连续递增的子序列** 可以由两个下标 `l` 和 `r`（`l < r`）确定，如果对于每个 `l <= i < r`，都有 `nums[i] < nums[i + 1]`，那么子序列 `[nums[l], nums[l + 1], ..., nums[r - 1], nums[r]]` 就是连续递增子序列。

**示例 1：**  
**输入：** nums = [1,3,5,4,7]  
**输出：** 3  
**解释：** 最长连续递增序列是 [1,3,5], 长度为3。
尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为 5 和 7 在原数组里被 4 隔开。 

**示例 2：**  
**输入：** nums = [2,2,2,2,2]  
**输出：** 1  
**解释：** 最长连续递增序列是 [2], 长度为1。

**提示：**  
- $0 \leq nums.length \leq 10^4$
- $-10^9 \leq nums[i] \leq 10^9$
{{< /notice >}}
#### 思路
- 双指针 - 滑动窗口
- 使用 `while`

#### 代码
<details>
 <summary> Python </summary>

```python
class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        # 滑动窗口
        n = len(nums)
        if n <= 1: return n
        l, r, res = 0, 1, 1
        while r < n:
            while r < n and nums[r-1] < nums[r]: r += 1  
            res = max(res, r-l)
            l, r = r, r+1
        return res
```
</details>

#### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$

<hr />

### 300. 最长递增子序列
https://leetcode-cn.com/problems/longest-increasing-subsequence/

#### 题目描述
{{< notice note >}}
给你一个整数数组 `nums`，找到其中最长严格递增子序列的长度。

子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

**示例 1：**  
**输入：** `nums = [10,9,2,5,3,7,101,18]`  
**输出：** `4`  
**解释：** 最长递增子序列是 `[2,3,7,101]`，因此长度为 `4` 。

**示例 2：**  
**输入：** `nums = [0,1,0,3,2,3]`  
**输出：** `4`

**示例 3：**  
**输入：** `nums = [7,7,7,7,7,7,7]`  
**输出：** `1`

**提示：**  
- $1 <= nums.length <= 2500$
- $-10^4 <= nums[i] <= 10^4$
 

**进阶：**  
- 你可以设计时间复杂度为 $O(n^2)$ 的解决方案吗？
- 你能将算法的时间复杂度降低到 $O(n log(n))$ 吗?
{{< /notice >}}
#### 思路
#### 代码
<details>
 <summary> Python 暴力解</summary>

```python
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        动态规划 -- 暴力解
        n = len(nums)
        dp = [1]*n
        for i in range(n):
            for j in range(i):
                if nums[i] > nums[j]:
                    dp[i] = max(dp[i], dp[j]+1)
        return max(dp)
```
</details>

<details>
 <summary> Python 动态规划 + 二分 </summary>

```python
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        # 动态规划 + 二分
        # 二分： 寻找最左满足条件的索引
        def binary_search(nums, target):
            i, j = 0, len(nums)-1
            while i < j:
                mid = i + (j-i)//2
                if nums[mid] < target:
                    i = mid+1
                else:
                    j = mid
            return i
        # 遍历数组，生成最长单调数组 dp
        n, dp = len(nums), []
        for num in nums:
            if not dp or dp[-1] < num:
                dp.append(num)
                continue
            idx = binary_search(dp, num)
            dp[idx] = num
        return len(dp)
```
</details>

#### 复杂度
- 时间复杂度：
  - 暴力解: $O(n^2)$
  - 动态规划: $O(nlogN)$
- 空间复杂度：$O(n)$

<hr />

### 354. 俄罗斯套娃信封问题

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/20210304183914.png" title="第一次 hard 题 100%" >}}

https://leetcode-cn.com/problems/russian-doll-envelopes/

#### 题目描述
{{< notice note >}}
给你一个二维整数数组 `envelopes`，其中 `envelopes[i] = [wi, hi]`，表示第 `i` 个信封的宽度和高度。

当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。

请计算 **最多能有多少个** 信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。

**注意：** 不允许旋转信封。

**示例 1：**  
输入：`envelopes = [[5,4],[6,4],[6,7],[2,3]]`  
输出：`3`  
解释：最多信封的个数为 `3`, 组合为: `[2,3] => [5,4] => [6,7]`。

**示例 2：**  
输入：`envelopes = [[1,1],[1,1],[1,1]]`  
输出：`1`
 

**提示：**  
- $1 <= envelopes.length <= 5000$
- $envelopes[i].length == 2$
- $1 <= wi, hi <= 10^4$

{{< /notice >}}
#### 思路
- 二维最长递增子序列问题
- 优先对 `x[:][0]` 列排序，对 `x[:][1]` 列次优排序
- 对 `x[:][1]` 列求最长递增子序列

#### 代码
<details>
 <summary> Python </summary>

```python
class Solution:
    def maxEnvelopes(self, envelopes: List[List[int]]) -> int:
        def binary_search(nums, target):
            l, r = 0, len(nums)-1
            while l < r:
                mid = l + (r-l)//2
                if nums[mid] < target:
                    l = mid + 1
                else:
                    r = mid
            return l
        
        def lis(nums):
            d = []
            for num in nums:
                if not d or d[-1] < num:
                    d.append(num)
                    continue
                idx = binary_search(d, num)
                d[idx] = num
            return len(d)

        envelopes.sort(key=lambda x:(x[0],-x[1]))
        return lis([h for _, h in envelopes])
```
</details>

#### 复杂度
- 时间复杂度：$O(nlogN)$
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