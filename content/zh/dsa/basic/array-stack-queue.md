+++
title = "数组，栈，队列"
date = "2021-01-27T00:19:30+08:00"
description = "91 天学算法"
tags = ["LeetCode题解","编程刷题"]
keywords = ["leetcode","数据结构","python","数组","栈","队列","MatNoble"]
toc = false
katex = true
+++

## 目录
- [每日一题](./#每日一题)
  - [x] [821. 字符的最短距离](./#821-字符的最短距离)
  - [x] [989. 数组形式的整数加法](./#989-数组形式的整数加法)
  - [x] [1381. 设计一个支持增量操作的栈（设计）](./#1381-设计一个支持增量操作的栈设计)
  - [x] [394. 字符串解码](./#394-字符串解码)
  - [x] [232. 用栈实现队列（设计）](./#232-用栈实现队列设计)
  - [x] [768. 最多能完成排序的块 II](./#768-最多能完成排序的块-ii)
- [数组扩展](./#数组扩展)
  - [ ] [28. 实现 strStr()]
  - [x] [59. 螺旋矩阵 II](./#59-螺旋矩阵-ii)
  - [x] [66. 加一](./#66-加一)
  - [x] [75. 颜色分类](./#75-颜色分类)
  - [x] [153. 寻找旋转排序数组中的最小值 I](./#153-寻找旋转排序数组中的最小值-i)
  - [x] [154. 寻找旋转排序数组中的最小值 II](./#154-寻找旋转排序数组中的最小值-ii)
  - [x] [380. 常数时间插入、删除和获取随机元素（设计）](./#380-常数时间插入删除和获取随机元素设计)
  - [x] [769. 最多能完成排序的块](./#769-最多能完成排序的块)
  - [x] [859. 亲密字符串](./#859-亲密字符串)
- [栈扩展](./#栈扩展)
  - [x] [150. 逆波兰表达式求值](./#150-逆波兰表达式求值)
  - [x] [946. 验证栈序列](./#946-验证栈序列)
  - [单调栈](./#单调栈)
    - [x] [](./#)
- [队列扩展](./#队列扩展)  
  - [ ] [155. 最小栈]

## 每日一题

### 821. 字符的最短距离
https://leetcode-cn.com/problems/shortest-distance-to-a-character  
#### 题目描述

{{< notice note >}}
给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。

示例 1:  
输入: S = "loveleetcode", C = 'e'  
输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

说明:  
字符串 S 的长度范围为 [1, 10000]。  
C 是一个单字符，且保证是字符串 S 里的字符。  
S 和 C 中的所有字母均为小写字母。
{{< /notice >}}

#### 思路

两次遍历：
1. 左 $\to$ 右，创建 `res`  
`res[i]` 记录 `i` 处距离左侧最近的字符 `C` 的距离。若左侧没有 `C`，则记录为 `len(S)`。比如：
    - `S = "aabacbd", C = 'b'`
    - `res = [7, 7, 0, 1, 2, 0, 1]`
2. 右 $\to$ 左，更新 `res`  
`if res[i] > res[i+1]+1: res[i] = res[i+1] + 1`
    - `res = [7, 7, 0, 1, 2, 0, 1]`
    - `res = [2, 1, 0, 1, 1, 0, 1]`

#### 代码
<details>
 <summary> Python </summary>

```python
from typing import List
class Solution:
    def shortestToChar(self, S: str, C: str) -> List[int]:
        n = len(S)
        res = [n]*n
        # first loop
        i = 0
        while S[i] != C[0]: i += 1
        while i < n:
            res[i] = 0 if S[i] == C[0] else res[i-1]+1
            i += 1
        # second loop
        i -= 2
        while i > -1:
            if res[i+1]+1 < res[i]: res[i] = res[i+1]+1 
            i -= 1
        return res

mat = Solution()
S = "loveleetcode"
C = 'e'

S = "aaba"
C = "b"
mat.shortestToChar(S, C)
```
</details>

#### 复杂度
$n$ 为 `S` 的长度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$

### 989. 数组形式的整数加法
https://leetcode-cn.com/problems/add-to-array-form-of-integer  
#### 题目描述
{{< notice note >}}
对于非负整数 `X` 而言，`X` 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 `X = 1231`，那么其数组形式为 `[1,2,3,1]`。

给定非负整数 `X` 的数组形式 `A`，返回整数 `X+K` 的数组形式。

示例 1：  
`输入：A = [1,2,0,0], K = 34`  
`输出：[1,2,3,4]`  
`解释：1200 + 34 = 1234`

示例 2：  
`输入：A = [2,7,4], K = 181`
`输出：[4,5,5]`  
`解释：274 + 181 = 455`

示例 3：
`输入：A = [2,1,5], K = 806`
`输出：[1,0,2,1]`
`解释：215 + 806 = 1021`

示例 4：  
`输入：A = [9,9,9,9,9,9,9,9,9,9], K = 1`  
`输出：[1,0,0,0,0,0,0,0,0,0,0]`  
`解释：9999999999 + 1 = 10000000000`
 

提示：

- `1 <= A.length <= 10000`
- `0 <= A[i] <= 9`
- `0 <= K <= 10000`
- `如果 A.length > 1，那么 A[0] != 0`
{{< /notice >}}

#### 思路

- 取个位数：`K % 10`
- 去掉个位数：`K \\ 10`
- 用 `count` 记录进位
- 考虑两种情形：
  - `len(A) >= len(K)`
  - `len(A) <  len(K)`

#### 代码
<details>
 <summary> Python </summary>

```python
from typing import List
class Solution:
    def addToArrayForm(self, A: List[int], K: int) -> List[int]:
        i, n, count = -1, len(A), 0
        while -i < n+1 and (K or count):
            temp = A[i] + count + K % 10
            A[i], count = temp % 10, temp // 10
            K = K // 10
            i -= 1
        while K: # 若 K 长于 A
            temp = count + K % 10
            A.insert(0, temp % 10)
            count = temp // 10
            K = K // 10
        return A if count == 0 else [count]+A

mat = Solution()
A = [1,1]
K = 11
K = 9
# K = 99
mat.addToArrayForm(A, K)
```
</details>

#### 复杂度
`n = len(A)`, `m` 为 `K` 的位数
- 时间复杂度：$O(n+\max(0, m-n))$
- 空间复杂度：$O(\max(1, m-n))$

### 1381. 设计一个支持增量操作的栈(设计)
https://leetcode-cn.com/problems/design-a-stack-with-increment-operation

#### 题目描述
{{< notice note >}}
请你设计一个支持下述操作的栈。实现自定义栈类 `CustomStack`：

- `CustomStack(int maxSize)`：用 `maxSize` 初始化对象，`maxSize` 是栈中最多能容纳的元素数量，栈在增长到 `maxSize` 之后则不支持 `push` 操作。  
- `void push(int x)`：如果栈还未增长到 `maxSize `，就将 `x` 添加到栈顶。
- `int pop()`：弹出栈顶元素，并返回栈顶的值，或栈为空时返回 `-1` 。
- `void increment(int k, int val)`：栈底的 `k `个元素的值都增加 `val` 。如果栈中元素总数小于 `k`，则栈中的所有元素都增加 val 。
{{< /notice >}}
#### 思路
- 用列表定义`stack`
- `push`: 能加元素时：`append`
- `pop`: 能返回时，见下图
- `increment(int k, int val)`: 增加 `increments` 数组，将 `val` 记录第 `k` 位处
<img src="https://cdn.jsdelivr.net/gh/MatNoble/Images/20210302092517.png"/>

#### 代码
<details>
 <summary> Python </summary>

```python
class CustomStack:

    def __init__(self, maxSize: int):
        self.stack = []
        self.maxSize = maxSize
        self.size = 0
        self.increments = []


    def push(self, x: int) -> None:
        if len(self.stack) < self.maxSize:
            self.stack.append(x)
            self.size += 1
            self.increments.append(0)


    def pop(self) -> int:
        if self.size == 0: return -1
        self.size -= 1
        if self.size >= 1:
            self.increments[-2] += self.increments[-1]
        return self.stack.pop() + self.increments.pop()


    def increment(self, k: int, val: int) -> None:
        k = min(k, self.size)
        if self.increments:
            self.increments[k-1] += val
```
</details>

#### 复杂度
- 时间复杂度：均为$O(1)$
- 空间复杂度：$O(\text{size})$

### 394. 字符串解码
https://leetcode-cn.com/problems/decode-string/
#### 题目描述
{{< notice note >}}
给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: `k[encoded_string]`，表示其中方括号内部的 `encoded_string` 正好重复 `k` 次。注意 `k` 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 `k` ，例如不会出现像 `3a` 或 `2[4]` 的输入。

示例 1：  
输入：s = "3[a]2[bc]"  
输出："aaabcbc"

示例 2：  
输入：s = "3[a2[c]]"  
输出："accaccacc"

示例 3：  
输入：s = "2[abc]3[cd]ef"   
输出："abcabccdcdcdef"

示例 4：  
输入：s = "abc3[cd]xyz"  
输出："abccdcdcdxyz"
{{< /notice >}}
#### 思路
- 利用堆栈“先进后出”的特点
- 遍历字符串 `s`:
  - 若 '[' ，则栈内存储 `[multi, res]`：
    - `multi`: 接下来要处理的字符串的重复次数
    - `res`: 之前解码的字符串
    - 初始化 `multi = 0, res = ''`
  - 若 `]`，则 `pop` 栈，利用栈顶内层的 `multi` 和次内层 `res` 更新 `res` --> 清算
  - 若 `[0, 9]`，则更新 `multi`
  - 若其他(字母)，则更新 `res`
#### 代码
<details>
 <summary> Python </summary>

```python
class Solution:
    def decodeString(self, s: str) -> str:
        stack, res, multi = [], '', 0
        for val in s:
            if val == '[':
                stack.append([multi, res])
                res, multi = '', 0
            elif val == ']':
                cur_multi, last_res = stack.pop()
                res = last_res + cur_multi * res
            elif '0' <= val <= '9':
                multi = multi * 10 + int(val)
            else:
                res += val
        return res
```
</details>

#### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$ # 最差

### 232. 用栈实现队列(设计)
https://leetcode-cn.com/problems/implement-queue-using-stacks
#### 题目描述
{{< notice note >}}
请你仅使用两个栈实现先入先出队列。队列应当支持一般队列的支持的所有操作（`push`、`pop`、`peek`、`empty`）：

实现 `MyQueue` 类：

- `void push(int x)` 将元素 `x` 推到队列的末尾
- `int pop()` 从队列的开头移除并返回元素
- `int peek()` 返回队列开头的元素
- `boolean empty()` 如果队列为空，返回 `true`；否则，返回 `false`
{{< /notice >}}
#### 思路
- 用列表表示两个栈，并定义栈底（队首）元素 `a`
- `push`: 直接 `append`, 注意: 当 `A` 空时，赋值栈底（队首）元素 `a`
- `pop`: 将 `A` 倒序压入 `B`，返回 `B.pop()`
- `peek`: 返回 `B[-1]` 或 `a`
- `empty`: 都为 `None` 时，才返回 `False`
#### 代码
<details>
 <summary> Python </summary>

```python
class MyQueue:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.A, self.B = [], []
        self.a = None


    def push(self, x: int) -> None:
        """
        Push element x to the back of queue.
        """
        if not self.A: self.a = x
        self.A.append(x)


    def pop(self) -> int:
        """
        Removes the element from in front of queue and returns that element.
        """
        if not self.B:
            while self.A: 
                self.B.append(self.A.pop())
            self.a = None
        return self.B.pop()


    def peek(self) -> int:
        """
        Get the front element.
        """
        if self.B: return self.B[-1]
        return self.a


    def empty(self) -> bool:
        """
        Returns whether the queue is empty.
        """
        return not (self.A or self.B)
```
</details>

#### 复杂度
- 时间复杂度： `pop()` 均摊时间复杂度为 $O(1)$, 其余$O(1)$
- 空间复杂度： $O(\text{size})$

### 768. 最多能完成排序的块 II
https://leetcode-cn.com/problems/max-chunks-to-make-sorted-ii/
#### 题目描述
{{< notice note >}}
`arr` 是一个可能包含重复元素的整数数组，我们将这个数组分割成几个“块”，并将这些块分别进行排序。之后再连接起来，使得连接的结果和按升序排序后的原数组相同。

我们最多能将数组分成多少块？

示例：  
输入: arr = [2,1,3,4,4]  
输出: 4  
解释:
我们可以把它分成两块，例如 `[2, 1]`, `[3, 4, 4]`。
然而，分成 `[2, 1]`, `[3]`, `[4]`, `[4]` 可以得到最多的块数。 

相似题目：[769. 最多能完成排序的块](./#769-最多能完成排序的块)
{{< /notice >}}
#### 思路
- 利用`栈`，遍历`arr` 
- `栈` 特点
  - 依次存储每个区块的最大值，形成 `递增栈`
  - `入栈`: 遍历值 `val` >= stack[-1]
  - `出栈`: 当遍历值 `val` < stack[-1], stack.pop()
- 返回 `len(stack)`
#### 代码
<details>
 <summary> Python </summary>

```python
class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
        stack = []
        for val in arr:
            if stack and val < stack[-1]:
                head = stack.pop()
                while stack and val < stack[-1]: stack.pop()
                stack.append(head)
            else:
                stack.append(val)
        return len(stack)
```
</details>

#### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$

## 数组扩展
https://leetcode-cn.com/problems/spiral-matrix-ii  
### 59. 螺旋矩阵 II
#### 题目描述
{{< notice note >}}
给你一个正整数 `n` ，生成一个包含 `1` 到 `n2` 所有元素，且元素按顺时针顺序螺旋排列的 `n x n` 正方形矩阵 matrix 。

示例 1：  
<img src="https://cdn.jsdelivr.net/gh/MatNoble/Images/20210201204902.png"/>
`输入：n = 3`  
`输出：[[1,2,3],[8,9,4],[7,6,5]]`

示例 2：  
`输入：n = 1`  
`输出：[[1]]`

提示：  
`1 <= n <= 20`
{{< /notice >}}

#### 思路

- `上 --> 左 --> 下 --> 右` 为一次循环
- 循环出口 `k < n*n`
- 需要注意：`n` 为奇数时，需要在矩阵正中填充最后一位

#### 代码
<details>
 <summary> Python </summary>

```python
from typing import List
class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        i = j = 0
        k = c = 1
        res = [[0]*n for i in range(n)]
        while k < n*n:
            while j < n-c:
                res[i][j] = k
                k += 1
                j += 1
            while i < n-c:
                res[i][j] = k
                k += 1
                i += 1
            while j > c-1:
                res[i][j] = k
                k += 1
                j -= 1
            while i > c-1:
                res[i][j] = k
                k += 1
                i -= 1
            i += 1
            j += 1
            c += 1
        if k == n*n: res[i][i] = k
        return res

mat = Solution()
n = 7
# n = 1
mat.generateMatrix(n)
```
</details>

#### 复杂度
- 时间复杂度：$O(n^2)$
- 空间复杂度：$O(n^2)$

### 66. 加一
https://leetcode-cn.com/problems/plus-one  
#### 题目描述
{{< notice note >}}
给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。  最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。  你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1:  
输入: [1,2,3]  
输出: [1,2,4]  
解释: 输入数组表示数字 123。

示例 2:  
输入: [4,3,2,1]  
输出: [4,3,2,2]  
解释: 输入数组表示数字 4321。
{{< /notice >}}

#### 思路  
在数组上做竖式加法，用 `carry` 来表示进位，反向遍历数组。  

遍历结束条件：
- 遍历中，遇到 `carry` 为 0 的时候，直接 `return digits`
- 遍历结束，此时 `carry` 必不为 0 (等于 1)，返回 `return [carry] + digits`

#### 代码
<details>
 <summary> Python </summary>

```python
from typing import List
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        carry = 1
        for i in range(len(digits) - 1, -1, -1):
            digits[i], carry = (carry + digits[i]) % 10, (carry + digits[i]) // 10
            if not carry: return digits
        return [carry] + digits

mat = Solution()
digits = [9, 9, 9]
# digits = [0]
# digits = [0, 0]
mat.plusOne(digits)
```
</details>

#### 复杂度
- 时间复杂度：$O(N)$, N 为数组长度。
- 空间复杂度：$O(1)$。

### 75. 颜色分类
https://leetcode-cn.com/problems/sort-colors  
#### 题目描述

{{< notice note >}}
给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、1 和 2 分别表示红色、白色和蓝色。  
注意: 不能使用代码库中的排序函数来解决这道题。

示例:  
输入: `[2,0,2,1,1,0]`  
输出: `[0,0,1,1,2,2]`

进阶：  
一个直观的解决方案是使用计数排序的两趟扫描算法。  
首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。你能想出一个仅使用常数空间的一趟扫描算法吗？
{{< /notice >}}

#### 思路

利用双指针 `zero` 和 `two`：
- `[0, zero]` 闭区间内存储 `0`
- `(zero，two]` 左开右闭是未处理部分
- `(two, -1]` 左开右闭内存储 `2`

具体地，初始化 `zero，two = -1, len(nums)-1`, 然后以 `i=0` 遍历数组:
```python
if nums[i] 等于 0：
    zero += 1
    交换 nums[i] 和 nums[zero] # zero 向前一步，并保证 nums[zero] = 0
    i += 1
elif nums[i] 等于 1：
    i += 1
elif nums[i] 等于 2:
    交换 nums[i] 和 nums[two] 
    two -= 1 # two 后退一步， i 不变                     
```
注意： 区间 `(zero, i)` 之间的都是 `1`

#### 代码
<details>
 <summary> Python </summary>

```python
from typing import List
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        n = len(nums)
        if n == 1: return
        def swap(nums, i, j):
            nums[i], nums[j] = nums[j], nums[i]
        i, zero, two = 0, -1, n-1
        while i <= two:
            if nums[i] == 0:
                zero += 1
                swap(nums, i, zero)
                i += 1
            elif nums[i] == 1:
                i += 1
            else:
                swap(nums, i, two)
                two -= 1
mat = Solution()
nums = [2,0,2,1,1,2]
# nums = [2,0,1]
mat.sortColors(nums)
print(nums)
```
</details>

#### 复杂度
- 时间复杂度：$O(N)$, $N$ 为数组长度
- 空间复杂度：$O(1)$

### 153. 寻找旋转排序数组中的最小值 I
#### 题目描述
{{< notice note >}}
假设按照升序排序的数组在预先未知的某个点上进行了旋转。例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] 。请找出其中最小的元素。

示例 1：  
`输入：nums = [3,4,5,1,2]`  
`输出：1`

示例 2：  
`输入：nums = [4,5,6,7,0,1,2]`  
`输出：0`

示例 3：  
`输入：nums = [1]`  
`输出：1`

提示：  
- `1 <= nums.length <= 5000`
- `-5000 <= nums[i] <= 5000`
- `nums` 中的所有整数都是 唯一 的
- `nums` 原来是一个升序排序的数组，但在预先未知的某个点上进行了旋转

来源：力扣（LeetCode）  
链接：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
{{< /notice >}}
#### 思路
- 二分查找
- `if nums[left] < nums[right]: return nums[left]` 数组一定有序
- `mid = left + (right-left)//2`
  - `if nums[left] <= nums[mid]: left = mid+1`
  - `if nums[mid] < nums[left]: right = mid #不能丢弃可能解`

#### 代码
<details>
 <summary> Python </summary>

```python
class Solution:
    def findMin(self, nums):
        left, right = 0, len(nums)-1
        while left < right:
            if nums[left] < nums[right]: return nums[left]
            mid = left + (right-left)//2
            if nums[left] <= nums[mid]:
                left = mid+1
            else:
                right = mid
        return nums[left]

mat = Solution()
nums = [3,4,5,1,2]
nums = [4,5,6,7,0,1,2]
# nums = [1]
nums = [2,3,0,1]
mat.findMin(nums)
```
</details>

#### 复杂度
- 时间复杂度：$O(logN)$
- 空间复杂度：$O(1)$

### 154. 寻找旋转排序数组中的最小值 II
https://leetcode-cn.com/problems/insert-delete-getrandom-o1  
#### 题目描述
{{< notice note >}}
假设按照升序排序的数组在预先未知的某个点上进行了旋转。
( 例如，数组 `[0,1,2,4,5,6,7]` 可能变为 `[4,5,6,7,0,1,2]` )。
请找出其中最小的元素。  
注意数组中可能存在重复的元素。

示例 1：  
`输入: [1,3,5]`  
`输出: 1`

示例 2：  
`输入: [2,2,2,0,1]`  
`输出: 0`

来源：力扣（LeetCode）  
链接：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
{{< /notice >}}
#### 思路

- 大致同上题
- 当 `nums[left] == nums[mid]` 时，需要 `left += 1`，即 
 `while left < mid and nums[left] == nums[mid]: left += 1`

#### 代码
<details>
 <summary> Python </summary>

```python
from typing import List
class Solution:
    def findMin(self, nums: List[int]) -> int:
        left, right = 0, len(nums)-1
        while left < right:
            mid = left + (right - left) // 2
            while left < mid and nums[left] == nums[mid]: left += 1
            if nums[left] < nums[right]: return nums[left]
            if nums[left] <= nums[mid]:
                left = mid+1
            else:
                right = mid
        return nums[left]

mat = Solution()
nums = [2, 0, 2, 2]
nums = [1, 2, 3]
nums = [1]
nums = [2, 0, 2, 2, 2, 2, 2]
mat.findMin(nums)
```
</details>

#### 复杂度
- 时间复杂度：$O(logN)$, 最差 $O(n)$
- 空间复杂度：$O(1)$

### 380. 常数时间插入、删除和获取随机元素（设计）

#### 题目描述
{{< notice note >}}
设计一个支持在平均 时间复杂度 `O(1)` 下，执行以下操作的数据结构。

- `insert(val)`：当元素 `val` 不存在时，向集合中插入该项。
- `remove(val)`：元素 `val` 存在时，从集合中移除该项。
- `getRandom`：随机返回现有集合中的一项。每个元素应该有相同的概率被返回。
{{< /notice >}}

#### 代码
<details>
 <summary> Python </summary>

```python
class RandomizedSet:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.l = [] # 列表
        self.d = {} # 字典


    def insert(self, val: int) -> bool:
        """
        Inserts a value to the set. Returns true if the set did not already contain the specified element.
        """
        if val in self.d:
            return False
        else:
            self.d[val] = len(self.l)
            self.l.append(val)
            return True


    def remove(self, val: int) -> bool:
        """
        Removes a value from the set. Returns true if the set contained the specified element.
        """
        if val in self.d:
            self.d[self.l[-1]] = self.d[val]
            self.l[self.d.pop(val)] = self.l[-1]
            self.l.pop()
            return True
        else:
            return False


    def getRandom(self) -> int:
        """
        Get a random element from the set.
        """
        return self.l[random.randint(0, len(self.l) - 1)]
```
</details>

### 769. 最多能完成排序的块
https://leetcode-cn.com/problems/max-chunks-to-make-sorted/
#### 题目描述
{{< notice note >}}
数组 `arr` 是 `[0, 1, ..., arr.length - 1]` 的一种排列，我们将这个数组分割成几个“块”，并将这些块分别进行排序。之后再连接起来，使得连接的结果和按升序排序后的原数组相同。

我们最多能将数组分成多少块？

示例 1:  
输入: arr = [4,3,2,1,0]  
输出: 1  
解释:
将数组分成 2 块或者更多块，都无法得到所需的结果。
例如，分成 `[4, 3]`, `[2, 1, 0]` 的结果是 `[3, 4, 0, 1, 2]`，这不是有序的数组。

相似题目：[768. 最多能完成排序的块 II](./#768-最多能完成排序的块-ii)
{{< /notice >}}
#### 思路
简单计数：
- 遍历数组 `arr`，记录 `a[:idx]` 中的最大值 `max_`
- `max_` <= `idx` 时，`k += 1`
- 遍历结束时，返回 `k`
#### 代码
<details>
 <summary> Python </summary>

```python
class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
        k = 0
        max_ = arr[0]
        for idx, val in enumerate(arr):
            max_ = max(max_, val)
            if max_ <= idx: k += 1
        return k
```
</details>

#### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$

### 859. 亲密字符串
https://leetcode-cn.com/problems/buddy-strings  
#### 题目描述

{{< notice note >}}
给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false 。

交换字母的定义是取两个下标 i 和 j （下标从 0 开始），只要 i!=j 就交换 A[i] 和 A[j] 处的字符。例如，在 "abcd" 中交换下标 0 和下标 2 的元素可以生成 "cbad" 。

示例 1：  
输入： `A = "ab", B = "ba"`  
输出： `true`  
解释： `你可以交换 A[0] = 'a' 和 A[1] = 'b' 生成 "ba"，此时 A 和 B 相等。`

示例 2：  
输入： `A = "ab", B = "ab"`  
输出： `false`  
解释： `你只能交换 A[0] = 'a' 和 A[1] = 'b' 生成 "ba"，此时 A 和 B 不相等。`

示例 3:  
输入： `A = "aa", B = "aa"`  
输出： `true`  
解释： `你可以交换 A[0] = 'a' 和 A[1] = 'a' 生成 "aa"，此时 A 和 B 相等。`

示例 4：  
输入： `A = "aaaaaaabc", B = "aaaaaaacb"`  
输出： `true`

示例 5：  
输入： `A = "", B = "aa"`  
输出： `false`

提示：  
- 0 <= A.length <= 20000
- 0 <= B.length <= 20000
- A 和 B 仅由小写字母构成。
{{< /notice >}}

#### 思路

- 判定 `True` 条件
- `A == B`，`A` 或 `B` 中有重复字母时为 `True`, 反之 `False`
- `A != B`，只有两处索引是错位时才为 `True`，反之 `False`

#### 代码
<details>
 <summary> Python </summary>

```python
class Solution:
    def buddyStrings(self, A: str, B: str) -> bool:
        n, m = len(A), len(B)
        if n != m: return False
        if A == B:
            C = set()
            for a in A:
                if a in C: return True
                C.add(a)
            return False
        else:
            C = []
            for i in range(n):
                if A[i] != B[i]:
                    C.append([A[i], B[i]])
                if len(C) >=3: return False
            return len(C) == 2 and C[0] == C[-1][::-1]

mat = Solution()
A = 'acb'
B = 'abc'
A = 'aa'
B = 'aa'
mat.buddyStrings(A, B)
```
</details>

#### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$(最坏)

<hr />

## 栈扩展

### 150. 逆波兰表达式求值
https://leetcode-cn.com/problems/evaluate-reverse-polish-notation  
#### 题目描述
{{< notice note >}}
根据 逆波兰表示法，求表达式的值。有效的运算符包括 `+, -, *, /` 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

说明：  
整数除法只保留整数部分。
给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。

示例 1：  
输入: `["2", "1", "+", "3", "*"]`  
输出: `9`  
解释: 该算式转化为常见的中缀算术表达式为：`((2 + 1) * 3) = 9`

示例 2：  
输入: `["4", "13", "5", "/", "+"]`  
输出: `6`  
解释: 该算式转化为常见的中缀算术表达式为：`(4 + (13 / 5)) = 6`
{{< /notice >}}
#### 思路
- 使用数据结构 -- 栈 stack (先进后出)
- 遍历循环整个列表

#### 代码
<details>
 <summary> Python </summary>

```python
from typing import List
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        n = len(tokens)
        i = res = 0
        stack = []
        while i<n:
            if tokens[i] == '+':
                tmp = stack.pop()
                res = stack.pop() + tmp
            elif tokens[i] == '-':
                tmp = stack.pop()
                res = stack.pop() - tmp
            elif tokens[i] == '*':
                tmp = stack.pop()
                res = stack.pop() * tmp
            elif tokens[i] == '/':
                tmp = stack.pop()
                res = int(stack.pop() / tmp)
            else:
                res = int(tokens[i])
            stack.append(res)
            i += 1
        return stack[0]

mat = Solution()
tokens = ["2", "1", "+", "3", "*"]
# tokens = ["4", "13", "5", "/", "+"]
# tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
tokens = ["18"]
mat.evalRPN(tokens)
```
</details>

#### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$

### 946. 验证栈序列
https://leetcode-cn.com/problems/validate-stack-sequences
#### 题目描述
{{< notice note >}}
给定 `pushed` 和 `popped` 两个序列，每个序列中的 值都不重复，只有当它们可能是在最初空栈上进行的推入 `push` 和弹出 `pop` 操作序列的结果时，返回 `true`；否则，返回 `false`。

示例 1：  
输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]  
输出：true  
解释：我们可以按以下顺序执行：  
`push(1), push(2), push(3), push(4), pop() -> 4, push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1`

示例 2：  
输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]  
输出：false  
解释：1 不能在 2 之前弹出。  

提示：
- 0 <= pushed.length == popped.length <= 1000
- 0 <= pushed[i], popped[i] < 1000
- pushed 是 popped 的排列。
{{< /notice >}}
#### 思路
- 遍历数组 `pushed`，并将值压入`栈 stack`
- 注意 `popped` 是出栈的顺序，当遍历值与 `popped[j]` 相同时，`stack.pop()` 
- 最后，判断 `stack` 是否为空
#### 代码
<details>
 <summary> Python </summary>

```python
from typing import List
class Solution:
    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:
        n = len(pushed)
        stack = []
        i = j = 0
        while i < n:
            while i < n and pushed[i] != popped[j]: 
                stack.append(pushed[i])
                i += 1
            i += 1
            j += 1
            while stack and stack[-1] == popped[j]:
                stack.pop()
                j += 1
            if j < n and popped[j] in stack: return False # 提前结束
        return True if len(stack)==0 else False

mat = Solution()
pushed = [1,2,3,4,5]
popped = [4,5,3,2,1]

pushed = [1,2,3,4,5]
popped = [4,3,5,1,2]

pushed = [1,2,3,4,5,6,7]
popped = [1,2,5,3,6,7,4]
mat.validateStackSequences(pushed, popped)
```
</details>

#### 复杂度
- 时间复杂度： $O(n)$ # 最差
- 空间复杂度： $O(n)$

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

