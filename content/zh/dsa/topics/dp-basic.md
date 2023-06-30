+++
title = "动态规划 -- 基础问题"
date = "2021-03-12T00:19:30+00:00"
tags = ["动态规划","编程刷题"]
keywords = ["leetcode","数据结构","python","数组","栈","队列","MatNoble"]
toc = true
mathjax = true
+++

动态规划问题的一般形式就是..求最值..，求解动态规划的核心问题是..穷举..。

- 动态规划问题一定会具备 **最优子结构** ，才能通过子问题的最值得到原问题的最值。

- 只有列出正确的 **状态转移方程** 才能正确地穷举。

- 当存在 **重叠子问题** 时，需要「备忘录 memo」或者「DP table」来优化穷举过程，避免不必要的计算。

动态规划三要素：
- 最优子结构
- 状态转移方程(最难)
- 重叠子问题

求状态转移方程步骤：
> 明确「状态」 -> 定义 dp 数组/函数的含义 -> 明确「选择」-> 明确 base case


## 斐波那契数列

{{< blockquote author="维基百科" link="https://zh.wikipedia.org/wiki/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97" title="斐波那契数列" >}}
斐波那契数列（意大利语：Successione di Fibonacci），又译为菲波拿契数列、菲波那西数列、斐氏数列、黄金分割数列。

在数学上，斐波那契数列是以递归的方法来定义：

- $F_{0}=0$
- $F_{1}=1$
- $F_{n}=F_{{n-1}}+F_{{n-2}}~(n≧2)$

用文字来说，就是斐波那契数列由 $0$ 和 $1$ 开始，之后的斐波那契数就是由之前的两数相加而得出。首几个斐波那契数是：

$1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 \dots$

特别指出：$0$ 不是第一项，而是第零项。
{{< /blockquote >}}

### 暴力递归

```python
def fib(n):
    if n <= 2: return 1
    return fib(n-1) + fib(n-2)

for n in range(1, 11):
    print(fib(n))
# ：[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
```

- 时间复杂度：$O(2^n)$ **指数爆炸**

{{< notice tip >}}
递归算法的「时间复杂度」怎么算？  
子问题个数乘以解决一个子问题需要的时间。
{{< /notice >}}

### dp 优化（递归）

```python
def fib(n):
    if n < 1: return 0
    if n <= 2: dp[n] = 1
    if dp[n]: return dp[n]
    dp[n] = fib(n-1) + fib(n-2)
    return dp[n]

n = 10
dp = [0] * (n+1)
fib(n)
dp[1:]
# : [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
```

- 时间复杂度：$O(n)$

### dp 迭代

..递归..叫做「自顶向下」，..动态规划..叫做「自底向上」

```python
def fib(n):
    if n <= 2: return 1
    dp = [0] * (n+1)
    dp[1] = dp[2] = 1
    for i in range(3, n+1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[-1]

[ fib(n) for n in range(1, 11) ]
# : [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
```

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$

**状态转移方程**

$$
f(n) = 
\begin{cases}
1 & n = 1, 2 \\\\
f(n-1) + f(n-2) & n > 2
\end{cases}
$$

### 再优化（空间）

不需要存储 `dp` 表

```python
def fib(n):
    a = b = 1
    for _ in range(n-1):
        a, b = b, a+b
    return a

[ fib(n) for n in range(1, 11) ]
# : [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
```

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$

<hr />

## 凑零钱问题

先看下题目：给你 `k` 种面值的硬币，面值分别为 `c1`, `c2` ... `ck`，每种硬币的数量无限，再给一个总金额 `amount`，问你最少需要几枚硬币凑出这个金额，如果不可能凑出，算法返回 `-1` 。算法的函数签名如下：

```python
# coins 中是可选硬币面值，amount 是目标金额
def coinChange(coins, amount):
```
比如说 `k = 3`，面值分别为 `1`，`2`，`5`，总金额 `amount = 11`。那么最少需要 `3` 枚硬币凑出，即 `11 = 5 + 5 + 1`。

{{< notice tip >}}
你认为计算机应该如何解决这个问题？  
显然，就是把所有肯能的凑硬币方法都..穷举..出来，然后找找看最少需要多少枚硬币。
{{< /notice >}}


### 暴力解法

「最优子结构」：子问题间必须互相独立

**状态转移方程：**
- 确定「状态」
  原问题 --> 子问题。
  状态为：目标金额 `amount`
- 确定 `dp` 函数的定义  
  函数 `dp(n)` 表示，当前的目标金额是 `n`，至少需要 `dp(n)` 个硬币凑出该金额
- **确定「选择」并择优**
  ```python
  def dp(n):
        res = float("inf")
        for coin in coins:
            res = min(res, 1+dp(n-coin))
        return res
  ```
- **确定 base case**
  - `if n ==0: return 0`
  - `if n < 0: return -1`

所以，状态转移方程为
$$
dp(n)
\begin{cases}
-1 & n < 0 \\\\
0 & n = 0 \\\\
\min\\{1+dp(n-coin)|coin \in coins\\} & n > 0
\end{cases}
$$

```python
def coinChange(coins, amount):
    def dp(n):
        if n == 0: return 0
        if n < 0 : return -1
        res = float("inf")
        for coin in coins:
            if dp(n-coin) == -1: continue
            res = min(res, 1+dp(n-coin))
        return res if res != float("inf") else -1
    return dp(amount)

coins = [1, 2, 5]
amount = 11
coinChange(coins, amount)
# ：3
```

- 时间复杂度：$O(k*n^k)$ # k = len(coins)

### dp 优化（递归）

```python
def coinChange(coins, amount):
    def dp(n):
        # 避免重复计算
        if n in memo: return memo[n]
        if n == 0: return 0
        if n < 0 : return -1
        res = float("inf")
        for coin in coins:
            if dp(n-coin) == -1: continue
            res = min(res, 1+dp(n-coin))
        # 计入备忘录
        memo[n] = res if res != float("inf") else -1
        return memo[n]
    return dp(amount)

memo = {}
coins = [1, 2, 5]
amount = 11
coinChange(coins, amount)
# ：3
```

时间复杂度：$O(kn)$

### dp 迭代

```python
def coinChange(coins, amount):
    # 初始化 dp
    dp = [amount+1] * (amount+1)
    # base case
    dp[0] = 0
    # 外层循环：依次更新 dp 表
    for i in range(amount+1):
        # 内层循环：「选择」最优
        for coin in coins:
            if i - coin < 0: continue
            dp[i] = min(dp[i], 1+dp[i-coin])
    return dp[amount]

coins = [1, 2, 5]
amount = 11
coinChange(coins, amount)
# ：3
```

## 程序实现

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1gAKqXeyGgktdiouAz6AITT_O3INjVqGu?usp=sharing)