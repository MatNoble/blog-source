+++
title = "链表"
date = "2021-02-06T00:19:30+00:00"
description = "91 天学算法"
tags = ["LeetCode题解","编程刷题","链表"]
keywords = ["leetcode","数据结构","python","链表","数组","栈","队列","MatNoble"]
toc = false
mathjax = true
+++

# 目录
- [每日一题](./#每日一题)
  - [x] [61. 旋转链表](./#61-旋转链表)
  - [x] [24. 两两交换链表中的节点](./#24-两两交换链表中的节点)
  - [x] [109. 有序链表转换二叉搜索树](./#109-有序链表转换二叉搜索树)
  - [x] [160. 相交链表](./#160-相交链表)
  - [x] [142. 环形链表 II](./#142-环形链表-ii)
  - [x] [146. LRU 缓存机制(设计)](./#146-lru-缓存机制)
- [扩展](./#扩展)
  - [x] [21. 合并两个有序链表](./#21-合并两个有序链表)
  - [x] [83. 删除排序链表中的重复元素](./#83-删除排序链表中的重复元素)
  - [ ] [86. 分隔链表]()
  - [ ] [92. 反转链表 II]()
  - [ ] [138. 复制带随机指针的链表]()
  - [ ] [141. 环形链表]()
  - [ ] [143. 重排链表]()
  - [ ] [148. 排序链表]()
  - [ ] [206. 反转链表]()
  - [ ] [234. 回文链表]()

## 每日一题

### 61. 旋转链表
https://leetcode-cn.com/problems/rotate-list/
#### 题目描述
{{< notice note >}}
给定一个链表，旋转链表，将链表每个节点向右移动 `k` 个位置，其中 `k` 是非负数。

示例 1:  
输入: 1->2->3->4->5->NULL, k = 2  
输出: 4->5->1->2->3->NULL  
解释:  
向右旋转 1 步: 5->1->2->3->4->NULL  
向右旋转 2 步: 4->5->1->2->3->NULL

示例 2:  
输入: 0->1->2->NULL, k = 4  
输出: 2->0->1->NULL  
解释:  
向右旋转 1 步: 2->0->1->NULL  
向右旋转 2 步: 1->2->0->NULL  
向右旋转 3 步: 0->1->2->NULL  
向右旋转 4 步: 2->0->1->NULL
{{< /notice >}}
#### 思路
- 首先计算链表长度，然后令：`k = k % n`
- 然后利用 `快慢指针`，当快指针走 `k` 步后，慢指针开始走，当快指针指向链表尾时，停止

#### 代码
<details>
 <summary> Python </summary>

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: ListNode, k: int) -> ListNode:
        if not (head and head.next and k): return head
        cur, n = head, 0
        while cur:
            cur = cur.next
            n += 1
        k = k % n
        if k == 0: return head
        fast = slow = head
        for _ in range(k): fast = fast.next
        while fast.next:
            fast, slow = fast.next, slow.next
        newHead = slow.next
        slow.next = None
        fast.next = head
        return newHead
```
</details>

#### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$

### 24. 两两交换链表中的节点
https://leetcode-cn.com/problems/swap-nodes-in-pairs/
#### 题目描述
{{< notice note >}}
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。**你不能只是单纯的改变节点内部的值**，而是需要实际的进行节点交换。

示例：  
<img src="https://cdn.jsdelivr.net/gh/MatNoble/Images/20210208121842.png"/>
输入：head = [1,2,3,4]  
输出：[2,1,4,3]

示例 2：  
输入：head = []  
输出：[]

示例 3：  
输入：head = [1]  
输出：[1]

提示：  
- 链表中节点的数目在范围 [0, 100] 内
- 0 <= Node.val <= 100
{{< /notice >}}
#### 思路
当 `pre.next` 和 `pre.next.next` 非空时，交换之
<img src="https://cdn.jsdelivr.net/gh/MatNoble/Images/linked-list.png" width=500/>

#### 代码
<details>
 <summary> Python </summary>

```python
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:  
        if not (head and head.next): 
            return head
        res = ListNode()
        pre = res
        pre.next = head
        while pre.next and pre.next.next:
            former, latter = pre.next, pre.next.next
            pre.next, former.next = latter, latter.next
            latter.next = former
            pre = former
        return res.next
```
</details>

#### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$

### 109. 有序链表转换二叉搜索树
https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/
#### 题目描述
{{< notice note >}}
给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

**示例:**  
给定的有序链表： [-10, -3, 0, 5, 9],  
一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：
```
      0
     / \
   -3   9
   /   /
 -10  5
``` 
{{< /notice >}}
#### 思路
链表顺序即为搜索二叉数中序遍历的输出。运用递归中序遍历构建搜索二叉数。

#### 代码
<details>
 <summary> Python </summary>

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def sortedListToBST(self, head: ListNode) -> TreeNode:
        if not head: return
        # 使用self声明全局变量h, 记住head的位置
        self.h = head
        # 获得链表的长度
        length = 0
        while head:
            length += 1
            head = head.next
        
        # 通过递归，根据中序遍历创建二叉树，左父右；
        # 递归传入当前区间开始、结束索引
        def buildBST(start, end):
            if start > end: return None
            mid = (start + end) // 2
            # 左区间递归创建左子树
            left = buildBST(start, mid - 1)
            # 创建父节点
            root = TreeNode(self.h.val)
            # 创建一个父节点便更新h的位置
            self.h = self.h.next
            # 连接左子树和父节点
            root.left = left
            # 右区间创建右子树
            root.right = buildBST(mid + 1, end)
            return root
        
        return buildBST(0, length - 1)
```
</details>

#### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(log N)$

### 160. 相交链表
#### 题目描述
{{< notice note >}}
编写一个程序，找到两个单链表相交的起始节点。

**示例 1：** 
<img src="https://cdn.jsdelivr.net/gh/MatNoble/Images/20210210114054.png"/>
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3  
输出：Reference of the node with value = 8

**示例 2：** 
<img src="https://cdn.jsdelivr.net/gh/MatNoble/Images/20210210114123.png"/>
输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2  
输出：null
{{< /notice >}}

#### 思路
<img src="https://cdn.jsdelivr.net/gh/MatNoble/Images/linked_list_intersection.png"/>

#### 代码
<details>
 <summary> Python </summary>

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        i, j = headA, headB
        while True:
            if i == j: return i
            i = i.next if i else headB
            j = j.next if j else headA
```
</details>

#### 复杂度
m, n 分别是两链表的长度
- 时间复杂度：$O(m+n)$
- 空间复杂度：$O(1)$


### 142. 环形链表 II
#### 题目描述
{{< notice note >}}
给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 `null`。

为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 `pos` 是 `-1`，则在该链表中没有环。**注意，`pos` 仅仅是用于标识环的情况，并不会作为参数传递到函数中。**

**说明**：不允许修改给定的链表。

示例 1：   
<img src="https://cdn.jsdelivr.net/gh/MatNoble/Images/20210211172709.png" width=400/>
**输入**：head = [3,2,0,-4], pos = 1  
**输出**：返回索引为 1 的链表节点  
**解释**：链表中有一个环，其尾部连接到第二个节点。

{{< /notice >}}
#### 思路
利用**快慢指针**: `slow` 每次走一步，`fast` 每次走两步。
<img src="https://cdn.jsdelivr.net/gh/MatNoble/Images/20210211113427.png" width=500/>

$$
K + M + L + M = 2(K + M) \Longrightarrow K = L
$$

#### 代码
<details>
 <summary> Python </summary>

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:
        slow, fast = head, head
        while True:
            if fast is None or fast.next is None: 
                return None
            slow, fast = slow.next, fast.next.next
            if slow == fast: 
                break
        finder = head
        while True:
            if finder == slow:
                return finder
            else:
                slow, finder = slow.next, finder.next
```
</details>

#### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$

### 146. LRU 缓存机制
https://leetcode-cn.com/problems/lru-cache/
#### 题目描述
{{< notice note >}}
运用你所掌握的数据结构，设计和实现一个 「LRU (最近最少使用) 缓存机制」 。
实现 `LRUCache` 类：

- `LRUCache(int capacity)` 以正整数作为容量 `capacity` 初始化 LRU 缓存
- `int get(int key)` 如果关键字 `key` 存在于缓存中，则返回关键字的值，否则返回 `-1` 。
- `void put(int key, int value)` 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 

**进阶**：你是否可以在 `O(1)` 时间复杂度内完成这两种操作？
{{< /notice >}}
#### 思路
- 需求:
  - 存储 `key` 和 `value`
  - 顺序存储，或者增加另一个标记，用来记录「访问先后」
  - $O(1)$ 时间

<img src="https://cdn.jsdelivr.net/gh/MatNoble/Images/20210212171525.png"/>

采用 `双向链表` $+$ `哈希表`：
- **双向链表**： `node(key, val)`
- **哈希表**：`{key:node}`
- 实现快速将某节点 `node` 移至链表结尾
- 实现快速删除头节点 

*[参考 Liye](https://leetcode-cn.com/problems/lru-cache/solution/shu-ju-jie-gou-fen-xi-python-ha-xi-shuang-xiang-li/)*

#### 代码
<details>
 <summary> Python </summary>

```python
class ListNode:
    def __init__(self, key=None, value=None):
        self.key = key
        self.val = value
        self.prev = None
        self.next = None

class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.hashMap = {}
        self.head = ListNode()
        self.tail = ListNode()
        self.head.next = self.tail
        self.tail.prev = self.head

    
    def move_node_to_tail(self, key):
        node = self.hashMap[key]
        # 断
        # prev  -- x -- > node <-- x -- next
        node.prev.next = node.next
        node.next.prev = node.prev
        # 连
        # prev <-- node --> tail
        node.next = self.tail
        node.prev = self.tail.prev
        # prev --> node <-- tail
        node.prev.next = node
        self.tail.prev = node


    def get(self, key: int) -> int:
        if key in self.hashMap:
            self.move_node_to_tail(key)
            return self.hashMap[key].val
        return -1


    def put(self, key: int, value: int) -> None:
        if key in self.hashMap:
            self.hashMap[key].val = value
            self.move_node_to_tail(key)
        else:
            if len(self.hashMap) == self.capacity:
                self.hashMap.pop(self.head.next.key)
                self.head.next = self.head.next.next
                self.head.next.prev = self.head
            new = ListNode(key, value)
            self.hashMap[key] = new
            # prev <-- new --> tail
            new.prev = self.tail.prev
            new.next = self.tail
            # prev --> new <-- tail
            new.prev.next = new
            self.tail.prev = new
```
</details>

#### 复杂度
- 时间复杂度：$O(1)$
- 空间复杂度：$O(capacity)$

## 扩展

### 21. 合并两个有序链表
https://leetcode-cn.com/problems/merge-two-sorted-lists/

#### 题目描述
{{< notice note >}}
将两个升序链表合并为一个新的 **升序** 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：
<img src="https://cdn.jsdelivr.net/gh/MatNoble/Images/20210208205015.png"/>
**输入**：l1 = [1,2,4], l2 = [1,3,4]  
**输出**：[1,1,2,3,4,4]

提示：  
- 两个链表的节点数目范围是 [0, 50]
- -100 <= Node.val <= 100
- l1 和 l2 均按 **非递减顺序** 排列
{{< /notice >}}
#### 思路
遍历即可
#### 代码
<details>
 <summary> Python </summary>

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        res = ListNode()
        cur = res
        while l1 and l2:
            if l1.val < l2.val:
                cur.next = l1
                l1 = l1.next
            else:
                cur.next = l2
                l2 = l2.next
            cur = cur.next
        cur.next = l1 if l1 else l2
        return res.next
```
</details>

#### 复杂度
$m, n$ 分别是 l1 和 l2 的长度
- 时间复杂度：$O(min(m,n))$
- 空间复杂度：$O(1)$

### 83. 删除排序链表中的重复元素
https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
#### 题目描述
{{< notice note >}}
给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

**示例 1:**  
**输入**: 1->1->2  
**输出**: 1->2

**示例 2:**  
**输入**: 1->1->2->3->3  
**输出**: 1->2->3
{{< /notice >}}
#### 思路
创建**哑节点** `pre` 跟在 `cur` 后面，遍历数组。并查询 `cur.val` 是否在创建的 `hashSet` 里
#### 代码
<details>
 <summary> Python </summary>

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        hashSet = set()
        pre = ListNode()
        pre.next = head
        cur = head
        while cur:
            if cur.val in hashSet:
                pre.next = cur.next
            else:
                pre = cur
                hashSet.add(cur.val)
            cur = cur.next
        return head
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