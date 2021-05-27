+++
title = "剑指 Offer"
date = "2021-01-27T00:20:30+00:00"
description = "Python 版"
tags = ["剑指Offer题解","编程刷题"]
keywords = ["leetcode","剑指offer","数据结构","python","数组","栈","队列","德摩根定律","MatNoble"]
toc = false
mathjax = true
+++

## 目录

- [x] [03. 数组中重复的数字](./#03-数组中重复的数字)
- [x] [04. 二维数组中的查找](./#04-二维数组中的查找)
- [x] [05. 替换空格](./#05-替换空格)
- [x] [06. 从尾到头打印链表](./#06-从尾到头打印链表)
- [x] [07. 重建二叉树](./#07-重建二叉树)
- [ ] [09. 用两个栈实现队列]()
- [x] [10-I. 斐波那契数列](./#10-i-斐波那契数列)
- [x] [10-II. 青蛙跳台阶问题](./#10-ii-青蛙跳台阶问题)
- [x] [11. 旋转数组的最小数字](#11-旋转数组的最小数字)
- [x] [24. 反转链表](./#24-反转链表)
- [x] [64. 求1+2+…+n](.//#64-求12n)

GitHub 仓库地址 $\to$ [点这里](https://github.com/MatNoble/leetcode/blob/main/%E5%89%91%E6%8C%87offer/README.md)

<hr />

## 03. 数组中重复的数字

### 题目描述

{{< notice note >}}
在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例：  
输入：[2, 3, 1, 0, 2, 5, 3]  
输出：2 或 3 

来源：力扣（LeetCode）  
链接：https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
{{< /notice >}}

### 思路

1. 判断“环”出口：`nums[nums[i]] = nums[i]`
2. 归位 `swap(nums, i, nums[i])`  
`j = nums[i]` $\to$ `nums[j] = j`

### 代码

```python
class Solution:
    def findRepeatNumber(self, nums):
        # dict = set()
        # for num in nums:
        #     if num in dict: return num
        #     dict.add(num)
        # return -1
        def swap(nums, i, j):
            temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
        n = len(nums)
        i = 0
        while i < n:
            if nums[i] == i:
                i += 1
                continue
            if nums[nums[i]] == nums[i]: return nums[i]
            swap(nums, i, nums[i])
        return -1

mat = Solution()
nums = [2, 3, 1, 0, 2, 5, 3]
mat.findRepeatNumber(nums)
```

### 复杂度
- 时间复杂度：$O(n)$, $n$ 为数组长度
- 空间复杂度：$O(1)$

## 04. 二维数组中的查找

### 题目描述

{{< notice note >}}
在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

示例:  
现有矩阵 matrix 如下：
```
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
```
给定 target = 5，返回 true。  
给定 target = 20，返回 false。

来源：力扣（LeetCode）  
链接：https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
{{< /notice >}}

### 思路

从左下角出发：
1. `if nums[i][j] == target: return True`
2. `if nums[i][j]  < target: j -= 1` 舍弃第 `j` 列，搜索区间向右移
3. `if nums[i][j]  > target: i += 1` 舍弃第 `i` 列，搜索区间向上移

### 代码

```python
class Solution:
    def findNumberIn2DArray(self, matrix, target):
        m = len(matrix)
        if m == 0: return False
        n = len(matrix[0])
        i, j = m-1, 0
        while i >= 0 and j < n:
            if matrix[i][j] < target:
                j += 1
            elif matrix[i][j] > target:
                i -= 1
            else:
                return True
        return False


mat = Solution()
matrix = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]
# matrix = []
target = 5
# target = 20
mat.findNumberIn2DArray(matrix, target)
```

### 复杂度
- 时间复杂度：$O(m+n)$
- 时间复杂度：$O(1)$

## 05. 替换空格

### 题目描述

{{< notice note >}}
请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

示例 1：  
输入：s = "We are happy."  
输出："We%20are%20happy."

限制：  
0 <= s 的长度 <= 10000

来源：力扣（LeetCode）  
链接：https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
{{< /notice >}}

### 思路

新增空间 `res`, 然后遍历

### 代码

```python
class Solution:
    def replaceSpace(self, s: str) -> str:
        res = ''
        for val in s:
            if val == ' ':
                res += '%20'
            else:
                res += val
        return res

mat = Solution()
s = "We are happy."
mat.replaceSpace(s)
```

### 复杂度
- 时间复杂度: $O(n)$
- 空间复杂度: $O(n)$

## 06. 从尾到头打印链表

### 题目描述
{{< notice note>}}
输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

示例 1：  
输入：head = [1,3,2]
输出：[2,3,1]

来源：力扣（LeetCode）  
链接： https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
{{< /notice >}}

### 思路
- 后序遍历二叉数
- 栈 --- 先进后出

### 代码
```python
# Definition for singly-linked list.
class Solution:
    def reversePrint(self, head: ListNode) -> List[int]:
        if head is None: return []
        return self.reversePrint(head.next) + [head.val]
```

### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$

## 07. 重建二叉树

### 题目描述
{{< notice note >}}
输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。  
例如，给出  
`前序遍历 preorder = [3,9,20,15,7]`  
`中序遍历  inorder = [9,3,15,20,7]`  
返回如下的二叉树：
```
    3
   / \
  9  20
    /  \
   15   7
```
来源：力扣（LeetCode）  
链接：https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
{{< /notice >}}
### 思路

确定根节点，然后递归

### 代码
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        if not preorder or not inorder: return None
        node_val = preorder[0]
        node_idx = inorder.index(node_val)
        node = TreeNode(node_val)
        node.left  = self.buildTree(preorder[1:node_idx+1], inorder[:node_idx])
        node.right = self.buildTree(preorder[node_idx+1:], inorder[node_idx+1:])
        return node
```
### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$

## 10-I. 斐波那契数列

### 题目描述
{{< notice note >}}
写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：  
`F(0) = 0,   F(1) = 1`  
`F(N) = F(N - 1) + F(N - 2), 其中 N > 1.`  
`斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。`  
答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

来源：力扣（LeetCode）  
链接：https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
{{< /notice >}}

### 思路

- 递归不可行， 时间复杂度达到 $O(n^2)$
- 根据递推式 $f(n) = f(n-1) + f(n-2)$，动态规划
`a, b, a + b`
- 取余运算 mod
$$
(a+b)~\text{mod}~n = \left[(a~\text{mod}~n) + (b~\text{mod}~n) \right]~\text{mod}~n
$$
- `0, 1, 1, 2, 3, 5 ...`

### 代码
```python
def Solution:
    def fib(self, n):
        a, b = 0, 1
        for _ in range(n):
            a, b = b, (a+b) % 1000000007
        return a
```

### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$

## 10-II. 青蛙跳台阶问题
### 题目描述
{{< notice note >}}
一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：  
`输入：n = 2`  
`输出：2`  

示例 2：  
`输入：n = 7`  
`输出：21`  

示例 3：
`输入：n = 0`  
`输出：1`  

提示：

`0 <= n <= 100`

来源：力扣（LeetCode）  
链接：https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
{{< /notice >}}

### 思路

- 思路同[斐波那契数列](./#10-i-斐波那契数列)
- `1, 1, 2, 3, 5 ...`

### 代码
```python
class Solution:
    def numWays(self, n: int) -> int:
        a, b = 0, 1
        for _ in range(n+1):
            a, b = b, (a+b) % 1000000007
        return a
```

### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$

## 11. 旋转数组的最小数字

同 [LeetCode 154](../basic/array-stack-queue/#154-寻找旋转排序数组中的最小值-ii)

## 24. 反转链表
### 题目描述
{{< notice note >}}
定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

示例:  
`输入: 1->2->3->4->5->NULL`  
`输出: 5->4->3->2->1->NULL`

限制：  
0 <= 节点个数 <= 5000

来源：力扣（LeetCode）  
链接：https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
{{< /notice >}}

### 思路
- 递归
- `head.next.next = head`
- `head.next = None`
- 德摩根定律
$$
\neg (p~\wedge~q) \equiv (\neg p)~\vee~(\neg q)
$$
$$
\neg (p~\vee~q) \equiv (\neg p)~\wedge~(\neg q)
$$

### 代码
```python
# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def reverseListR(self, head: ListNode) -> ListNode: # 递归
        if not head or head.next == None: return head
        res = self.reverseList(head.next)
        head.next.next = head
        head.next = None
        return res
    
    def reverseList(self, head: ListNode) -> ListNode:
        cur, pre = head, None
        while cur:
            tmp = cur.next
            cur.next = pre
            pre = cur
            cur = tmp
        return pre 
```
### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$

## 64. 求1+2+…+n
### 题目描述
{{< notice note>}}
求 `1+2+...+n`，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

示例 1：    
`输入: n = 3`  
`输出: 6`

示例 2：  
`输入: n = 9`  
`输出: 45`

限制：

`1 <= n <= 10000`

来源：力扣（LeetCode）  
链接：https://leetcode-cn.com/problems/qiu-12n-lcof  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
{{< /notice >}}

### 思路
- `and` 操作如果结果为真，返回最后一个表达式的值，
- `or` 操作如果结果为真，返回第一个结果为真的表达式的值
- `0 + 1 + 2 + ... + n`


### 代码
```python
class Solution:
    def sumNums(self, n: int) -> int:
        return n and (n+self.sumNums(n-1))
```

### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$