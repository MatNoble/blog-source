+++
title = "反转链表"
date = "2021-02-27T00:19:30+00:00"
description = "数据结构从 0 到 1"
tags = ["数据结构与算法","编程刷题","链表"]
keywords = ["leetcode","数据结构","反转链表","python","链表","数组","栈","队列","MatNoble"]
toc = false
mathjax = true
+++

## 目录

- [206. 反转链表](./#206-反转链表)
- [92. 反转链表 II](./#92-反转链表-ii)
- [**25. K 个一组翻转链表**](./#25-k-个一组翻转链表)

## 206. 反转链表
https://leetcode-cn.com/problems/reverse-linked-list/
### 题目描述
{{< notice note >}}
反转一个单链表。

**示例:**  
**输入:** `1->2->3->4->5->NULL`  
**输出:** `5->4->3->2->1->NULL`

**进阶:**  
你可以 ..迭代.. 或 ..递归.. 地反转链表。你能否用两种方法解决这道题？
{{< /notice >}}

### 代码
- 迭代
```python
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        """
        迭代
        pre --> cur --> cur.next
        pre <-- cur --> cur.next
        T: O(n)
        S: O(1)
        """
        pre, cur = None, head
        while cur:
            cur.next, pre, cur = pre, cur, cur.next
        return pre
```

- 递归
```python
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        """
        递归
        head --> head.next ...
        head <-- head.next ...
        None <-- head
        T: O(n)
        S: O(n)
        """
        if not (head and head.next): return head
        newHead = self.reverseList(head.next)
        head.next.next, head.next = head, None
        return newHead
```

### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$(迭代)  $O(n)$(递归)

<hr />

## 92. 反转链表 II
https://leetcode-cn.com/problems/reverse-linked-list-ii/
### 题目描述
{{< notice note >}}
反转从位置 $m$ 到 $n$ 的链表。请使用一趟扫描完成反转。

**说明:**  
$1 ≤ m ≤ n ≤$ 链表长度。

**示例:**  
**输入:** `1->2->3->4->5->NULL, m = 2, n = 4`  
**输出:** `1->4->3->2->5->NULL`
{{< /notice >}}

### 代码

- 迭代

```python
class Solution:
    def reverseBetween(self, head, m, n): 
        if m == n: return head
        pre, cur = None, head
        for _ in range(m-1):
            pre, cur = cur, cur.next
        n1, n2 = pre, cur
        pre, cur = cur, cur.next

        for _ in range(n-m):
            cur.next, pre, cur = pre, cur, cur.next
        m1, m2 = pre, cur

        # 拼接
        if n1: n1.next = m1
        n2.next = m2
        return head if n1 else m1
```

- 递归

```python
class Solution:
    def reverseN(self, head, n):
        if n == 1: return head
        newHead = self.reverseN(head.next, n-1)
        head.next.next, head.next = head, head.next.next
        return newHead


    def reverseBetween(self, head, m, n):    
        if m == n: return head
        def reverse(head, m, n):
            if m == 1:  return self.reverseN(head, n)
            head.next = reverse(head.next, m-1, n-1)
            return head
        return reverse(head, m, n)
```

### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$(迭代) $O(n)$

<hr />

## 25. K 个一组翻转链表
https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
### 题目描述
{{< notice note >}}
给你一个链表，每 $k$ 个节点一组进行翻转，请你返回翻转后的链表。

$k$ 是一个正整数，它的值小于或等于链表的长度。

如果节点总数不是 $k$ 的整数倍，那么请将最后剩余的节点保持原有顺序。

**进阶：**  
- 你可以设计一个只使用常数额外空间的算法来解决此问题吗？
- **你不能只是单纯的改变节点内部的值**，而是需要实际进行节点交换。

**示例**  
**输入：** `head = [1,2,3,4,5], k = 2`  
**输出**：`[2,1,4,3,5]`
{{< /notice >}}

### 代码
- 递归
```python
class Solution:
    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
        def reverse(a, b):
            pre, cur, nxt = None, a, a
            while cur != b:
                nxt, cur.next = cur.next, pre
                pre, cur = cur, nxt
            return pre

        if not head: return None
        a, b = head, head
        for _ in range(k):
            if not b: return head # 计数返回
            b = b.next
        newHead = reverse(a, b)
        a.next = self.reverseKGroup(b, k)
        return newHead
```

### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$