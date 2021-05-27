+++
title = "滑动窗口"
date = "2021-03-01T00:19:30+00:00"
tags = ["双指针","编程刷题","滑动窗口"]
keywords = ["leetcode","数据结构","python","数组","栈","队列","MatNoble"]
toc = false
mathjax = true
+++

# 目录
- [每日一题](./#每日一题)
 - [x] [1456. 定长子串中元音的最大数目](./#1456-定长子串中元音的最大数目)
 - [x] [837. 新21点](./#837-新21点)
 - [x] [438. 找到字符串中所有字母异位词](./#438-找到字符串中所有字母异位词)
 - [x] [76. 最小覆盖字串](./#76-最小覆盖字串)
 - [ ] [Number of Operations to Decrement Target to Zero]()
- [推荐](./#推荐题目)
  - [x] [239. 滑动窗口最大值](./#239-滑动窗口最大值)
  - [x] [3. 无重复字符的最长字串](./#3-无重复字符的最长字串)
  - [ ] [438. 找到字符串中所有字母异位词](./#438-找到字符串中所有字母异位词)
  - [ ] [567. 字符串的排列](./#567-字符串的排列)

### 1456. 定长子串中元音的最大数目
https://leetcode-cn.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
#### 题目描述
{{< notice note >}}
给你字符串 `s` 和整数 `k` 。

请返回字符串 `s` 中长度为 `k` 的单个子字符串中可能包含的最大元音字母数。

英文中的 **元音字母** 为（`a`, `e`, `i`, `o`, `u`）。

**示例 1：**  
**输入：** s = "abciiidef", k = 3  
**输出：** 3  
**解释：** 子字符串 "iii" 包含 3 个元音字母。

**示例 2：**  
**输入：** s = "aeiou", k = 2  
**输出：** 2  
**解释：** 任意长度为 2 的子字符串都包含 2 个元音字母。

**示例 3：**  
**输入：** s = "leetcode", k = 3  
**输出：** 2  
**解释：** "lee"、"eet" 和 "ode" 都包含 2 个元音字母。

**示例 4：**  
**输入：** s = "rhythms", k = 4  
**输出：** 0
**解释：** 字符串 s 中不含任何元音字母。

**示例 5：**  
**输入：** s = "tryhard", k = 4  
**输出：** 1

**提示：**  
- $1 <= s.length <= 10^5$
- `s` 由小写英文字母组成
- $1 <= k <= s.length$
{{< /notice >}}
#### 思路
- 滑动固定长度窗口
- 用 `count` 记录窗口内元音字母个数
- 返回 `res` 为 `count` 的最大值

#### 代码
<details>
 <summary> Python </summary>

```python
class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        count, table = 0, {'a', 'e', 'i', 'o', 'u'}
        for a in s[:k]:
            if a in table: count += 1
        res = count
        for i in range(len(s)-k):
            if s[i] in table: count -= 1
            if s[i+k] in table: count += 1
            if res == k: break
            elif res < count:
                res = count
        return res
```
</details>

#### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$

### 837. 新21点
https://leetcode-cn.com/problems/new-21-game/
#### 题目描述
{{< notice note >}}
爱丽丝参与一个大致基于纸牌游戏 **“21点”** 规则的游戏，描述如下：

爱丽丝以 `0` 分开始，并在她的得分少于 `K` 分时抽取数字。 抽取时，她从 `[1, W]` 的范围中随机获得一个整数作为分数进行累计，其中 `W` 是整数。 每次抽取都是独立的，其结果具有相同的概率。

当爱丽丝获得不少于 `K` 分时，她就停止抽取数字。 爱丽丝的分数不超过 `N` 的概率是多少？

**示例 1：**  
输入：N = 10, K = 1, W = 10  
输出：1.00000  
说明：爱丽丝得到一张卡，然后停止。

**示例 2：**  
输入：N = 6, K = 1, W = 10  
输出：0.60000  
说明：爱丽丝得到一张卡，然后停止。
在 W = 10 的 6 种可能下，她的得分不超过 N = 6 分。

**示例 3：**  
输入：N = 21, K = 17, W = 10  
输出：0.73278

**提示：**
- $0 <= K <= N <= 10000$
- $1 <= W <= 10000$
如果答案与正确答案的误差不超过 $10^-5$，则该答案将被视为正确答案通过。
此问题的判断限制时间已经减少。
{{< /notice >}}
#### 思路
- 当游戏停止时，爱丽丝手中可能的..分数..区间为：$[0, K+W-1]$
- 创建长度为 `K+W` 的 `dp` 数组，初始化为 `0`。其中，`dp[i]` 表示游戏结束时，得分为 `i` 时获胜的概率。
- 当 `i >= K ` 时，概率是可以确定的：
  - `dp[K:N+1] = [1] * (N-K+1)`
- 当 `i < K` 时
  - 计算 `dp[K-1]`
    再抽一次一定可以停止，所以取这 `W` 个数的..期望..
    $$
    dp[K-1] = \frac{1}{W} (dp[K] + dp[K+1] + \cdots + dp[K+W-1])
    $$
  - 计算 `dp[K-2]`
    - 若抽取 $1$ 则达到..状态..`dp[K-1]`
      $$
      p_1 = \frac{1}{W} dp[K-1]
      $$
    - 若抽取到 $[2, W]$ 中的值，停止游戏
      $$
      p_2 = \frac{1}{W} (dp[K] + dp[K+1] + \cdots + dp[K+W-2])
      $$
      综上
      \begin{align*} 
        dp[K-2] &= p_1 + p_2 \\\\ 
        &= \frac{1}{W} (dp[K-1] + dp[K+1] + \cdots + dp[K+W-2]) 
      \end{align*}
    - 递推下去，得到
      $$
      dp[i] = \frac{1}{W} \sum_{c=1}^{W}dp[i+c]
      $$
- 最终返回 `dp[0]`, 即得分为 $0$ 时, 也即未作出选择时，最终获胜的概率

#### 代码
<details>
 <summary> Python </summary>

```python
class Solution:
    def new21Game(self, N: int, K: int, W: int) -> float:
        dp = [0] * (K+W)
        # 概率确定
        dp[K:N+1] = [1] * (N-K+1)
        sum_ = (N-K+1)
        # 递推计算概率
        for i in range(K-1, -1, -1):
            dp[i] = sum_ / W
            sum_ += (dp[i] - dp[W+i])
        return dp[0]
```
</details>

#### 复杂度
- 时间复杂度：$O(K+W)$
- 空间复杂度：$O(K+W)$

### 438. 找到字符串中所有字母异位词
https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/

{{< notice note >}}
给定一个字符串 `s` 和一个非空字符串 `p`，找到 `s` 中所有是 `p` 的字母异位词的子串，返回这些子串的起始索引。

字符串只包含小写英文字母，并且字符串 `s` 和 `p` 的长度都不超过 `20100`。

**说明：**  
字母异位词指字母相同，但排列不同的字符串。  
不考虑答案输出的顺序。

**示例 1:**  
**输入:** `s: "cbaebabacd" p: "abc"`  
**输出:** `[0, 6]`  
**解释:**  
起始索引等于 `0` 的子串是 `"cba"`, 它是 `"abc"` 的字母异位词。  
起始索引等于 `6` 的子串是 `"bac"`, 它是 `"abc"` 的字母异位词。

**示例 2:**  
**输入:** `s: "abab" p: "ab"`  
**输出:** `[0, 1, 2]`

**解释:**  
起始索引等于 `0` 的子串是 `"ab"`, 它是 `"ab"` 的字母异位词。  
起始索引等于 `1` 的子串是 `"ba"`, 它是 `"ab"` 的字母异位词。  
起始索引等于 `2` 的子串是 `"ab"`, 它是 `"ab"` 的字母异位词。
{{< /notice >}}

#### 思路
- 固定窗口大小 `len(p)`
- 创建..计数表.. `window` 和 `need`
- 判断左窗口元素 `s[i]` 和右窗口元素 `s[i+n]` 是否属于 `need` 计数表，更新计数表 `window`

#### 代码
<details>
 <summary> Python </summary>

```python
class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        from collections import defaultdict, Counter
        m, n = len(s), len(p)
        window, need = defaultdict(int), Counter(p)
        i = j = 0
        res = []
        for c in s[:n]:
            if c in need: window[c] += 1
        if window == need: res.append(0)
        for i in range(m-n):
            if   s[i] in need:   window[s[i]] -= 1
            if s[i+n] in need: window[s[i+n]] += 1
            if window == need: res.append(i+1)
        return res
```
</details>

#### 复杂度
$n$ 为 `s` 和 `p` 长度之和，$m$ 为 `p` 中不重复元素数量
- 时间复杂度：$O(n)$ 
- 空间复杂度：$O(m)$

### 76. 最小覆盖字串
https://leetcode-cn.com/problems/minimum-window-substring/
#### 题目描述
{{< notice note >}}
给你一个字符串 `s` 、一个字符串 `t` 。返回 `s` 中涵盖 `t` 所有字符的最小子串。如果 `s` 中不存在涵盖 `t` 所有字符的子串，则返回空字符串 `""` 。

**注意：** 如果 `s` 中存在这样的子串，我们保证它是唯一的答案。

**示例 1：**  
**输入：** s = "ADOBECODEBANC", t = "ABC"  
**输出：** "BANC"

**示例 2：**  
**输入：** s = "a", t = "a"  
**输出：** "a"

**提示：**  
- $1 <= s.length, ~t.length <= 10^5$
- s 和 t 由英文字母组成

**进阶：** 你能设计一个在 o(n) 时间内解决此问题的算法吗？
{{< /notice >}}
#### 思路
- 增加 `valid` 值来..缩放..滑动窗口
- 使用..滑动窗口..遍历之前，做一些时间复杂度小于 $O(n)$ 的判断，可有可无，极端情况可不用滑动遍历返回结果
- 经典的滑动窗口操作：
  - `valid < len(t)`: `right` 指针右移
  - `valid == len(t)`: 更新..结果.., `left` 右移 

#### 代码
<details>
 <summary> Python </summary>

```python
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        ns, nt = len(s), len(t)
        # 确定有解
        if ns < nt: return ""
        # 计数检验
        dictS, need = collections.Counter(s), collections.Counter(t)
        for key, value in need.items():
            if dictS[key] < value: return ""
        # s 与 t 元素一样
        if ns == nt: return s

        # 滑动窗口
        window = defaultdict(lambda: 0) # 初始化空字典
        left, right, valid, length = 0, 0, 0, ns+1
        while right < ns:
            # 移动右边界
            temp = s[right]
            # 判断
            if temp in need:
                window[temp] += 1
                if window[temp] <= need[temp]: valid += 1
            right += 1 # 右边界右移
            # 缩小左边界
            while valid == nt:
                # 判断 + 记录
                if right - left < length: start, length = left, right - left
                if length == len(t): return s[start : start+length] # 提前结束
                temp = s[left]
                if temp in need:
                    if window[temp] == need[temp]: valid -= 1
                    window[temp] -= 1
                left += 1
        return s[start : start+length]
```
</details>

#### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$


<hr />

### 239. 滑动窗口最大值
https://leetcode-cn.com/problems/sliding-window-maximum/
#### 题目描述
{{< notice note >}}
给你一个整数数组 `nums`，有一个大小为 `k` 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 `k` 个数字。滑动窗口每次只向右移动一位。

返回滑动窗口中的最大值。

**示例：**  
输入：nums = [1,3,-1,-3,5,3,6,7], k = 3  
输出：[3,3,5,5,6,7]  
解释： 
```
  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

**提示：**  
- 1 <= nums.length <= 105
- -104 <= nums[i] <= 104
- 1 <= k <= nums.length
{{< /notice >}}
#### 思路
- 借助**双端队列**。`popleft()` 时间复杂度为 $O(1)$
- **初始化窗口**: 将数组的前 `k` 个数依次加入到双端队列 `d` 中，每次加入前，判断队尾元素与 `num` 比较，保持队列 `d` 是..递减..的
- **滑动窗口**: 遍历 `nums[k:]`， 每次更新 `res`
  - 每次遍历需要判断队列最大值(即队首元素)是否窗口滑动时被“滑”出了，若**是**，则需要 `popleft()`
  - 之后，和初始化窗口中做的一样，保持队列是..递减..的

#### 代码
<details>
 <summary> Python </summary>

```python
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        # 双端队列
        d = collections.deque()
        # 初始化窗口
        for num in nums[:k]:
            while d and d[-1] < num: d.pop()
            d.append(num)
        res = [d[0]]
        # 滑动窗口
        for j in range(k, len(nums)):
            if nums[j-k] == d[0]: d.popleft()
            while d and d[-1] < nums[j]: d.pop()
            d.append(nums[j])
            res.append(d[0])
        return res
```
</details>

#### 复杂度
*n 为数组长度, k 为窗口大小*
- 时间复杂度：$O(n)$  
- 空间复杂度：$O(k)$  

### 3. 无重复字符的最长字串
https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
#### 题目描述
{{< notice note >}}
给定一个字符串，请你找出其中不含有重复字符的 `最长子串` 的长度。

示例 1:  
输入: s = "abcabcbb"  
输出: 3  
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例 2:  
输入: s = "bbbbb"  
输出: 1  
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例 3:  
输入: s = "pwwkew"  
输出: 3  
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。  
**请注意** 你的答案必须是 `子串` 的长度，"pwke" 是一个子序列，不是子串。

示例 4:  
输入: s = ""  
输出: 0

提示：  
$0 <=$ `s.length` $<= 5 * 10^4$  
`s` 由英文字母、数字、符号和空格组成
{{< /notice >}}
#### 思路


#### 代码
<details>
 <summary> Python </summary>

```python
class Solution:
    def lengthOfLongestSubstring(self, s):
        res = left = right = 0
        hashMap = {}
        while right < len(s):
            if s[right] in hashMap:
                res = max(res, right-left)
                left = max(left, hashMap[s[right]])
            hashMap[s[right]] = right+1
            right += 1
        res = max(res, right-left)
        return res

s = "abcabcbb"
# s = "bbbbb"
# s = "pwwkew"
# s = ""
# s = " "
# s = "ab"
# s = "abba"

mat = Solution()
mat.lengthOfLongestSubstring(s)
```
</details>

#### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$

### 567. 字符串的排列


<!-- 模板
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

