+++
title = "LeetCode 买卖股票问题"
date = "2021-03-20T00:19:30+00:00"
tags = ["高频算法题","编程刷题"]
keywords = ["leetcode","数据结构","python","动态规划","二分法","最长递增子序列","MatNoble"]
toc = false
mathjax = true
+++
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=3 orderedList=false} -->

<!-- code_chunk_output -->

- [121. 买卖股票的最佳时机](#121-买卖股票的最佳时机)
  - [思路](#思路)
  - [代码](#代码)
  - [复杂度](#复杂度)
- [122. 买卖股票的最佳时机 II](#122-买卖股票的最佳时机-ii)
  - [思路](#思路-1)
  - [代码](#代码-1)
  - [复杂度](#复杂度-1)
- [123. 买卖股票的最佳时机 III](#123-买卖股票的最佳时机-iii)
  - [思路](#思路-2)
  - [代码](#代码-2)
  - [复杂度](#复杂度-2)
- [188. 买卖股票的最佳时机 IV](#188-买卖股票的最佳时机-iv)
  - [思路](#思路-3)
  - [代码](#代码-3)
  - [复杂度](#复杂度-3)

<!-- /code_chunk_output -->


### 121. 买卖股票的最佳时机
https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
#### 思路
#### 代码
```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        ## 动态规划
        dp_0, dp_1 = 0, float('-inf')
        for price in prices:
            dp_0 = max(dp_0, dp_1+price)
            dp_1 = max(dp_1, -price)
        return dp_0
```

#### 复杂度
- 时间复杂度：
- 空间复杂度：

### 122. 买卖股票的最佳时机 II
https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
#### 思路
#### 代码
```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        dp_0, dp_1 = 0, float('-inf')
        for price in prices:
            dp_0, dp_1 = max(dp_0, dp_1+price), max(dp_1, dp_0-price)
        return dp_0
```

#### 复杂度
- 时间复杂度：
- 空间复杂度：

### 123. 买卖股票的最佳时机 III
https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/
#### 思路
#### 代码

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n, K = len(prices), 2
        dp = [ [ [0]*2 for _ in range(K+1) ] for _ in range(n) ]
        for i in range(n):
            for k in range(K, 0, -1):
                if not i:
                    dp[i][k][0], dp[i][k][1] = 0, -prices[i]
                    continue
                dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1]+prices[i])
                dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0]-prices[i])
        return dp[n-1][K][0]
```

#### 复杂度
- 时间复杂度：
- 空间复杂度：

### 188. 买卖股票的最佳时机 IV
https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/
#### 思路
#### 代码

```python
class Solution:
    def maxProfitInf(self, prices: List[int]) -> int:
        dp_0, dp_1 = 0, float('-inf')
        for price in prices:
            dp_0, dp_1 = max(dp_0, dp_1+price), max(dp_1, dp_0-price)
        return dp_0
    
    def maxProfit(self, K: int, prices: List[int]) -> int:
        n = len(prices)
        if K > n//2:
            return self.maxProfitInf(prices)
        dp = [ [ [0]*2 for _ in range(K+1) ] for _ in range(n) ]
        for i in range(n):
            for k in range(K, 0, -1):
                if not i:
                    dp[i][k][0], dp[i][k][1] = 0, -prices[i]
                    continue
                dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1]+prices[i])
                dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0]-prices[i])
        return dp[n-1][K][0]
```

#### 复杂度
- 时间复杂度：
- 空间复杂度：


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