+++
title = "二叉树的遍历"
date = "2021-02-18T00:19:30+00:00"
description = "数据结构从 0 到 1"
tags = ["数据结构与算法","编程刷题","树"]
keywords = ["leetcode","数据结构","遍历二叉树","深度优先搜索","广度优先搜索","前序遍历","中序遍历","后序遍历","层序遍历","python","链表","数组","栈","队列","MatNoble"]
toc = true
mathjax = true
+++

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/Order.svg" title="二叉树的遍历">}}

## 定义树

```python
from typing import List
import collections
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

## DFS 深度优先搜索

### 前序遍历

[leetcode 144. 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/preOrder.svg" title="前序遍历" width=400 >}}

- 定义树  
上图中的树可定义为:
```python
root = TreeNode(1)

root.left = TreeNode(2)
root.left.left = TreeNode(3)
root.left.right = TreeNode(4)

root.right = TreeNode(5)
root.right.left = TreeNode(6)
```

- 递归
  - 时间复杂度: $O(n)$
  - 空间复杂度: $O(n)$  # 最差, 二叉树退化为单链表时

```python
class Solution:
    def preorderTraversalRecursion(self, root: TreeNode) -> List[int]:
        def preorder(root):
            if not root: return  
            res.append(root.val) ## 根节点
            preorder(root.left)  ## 左子树
            preorder(root.right) ## 右子树
            return res
        res = []
        preorder(root)
        return res
```

- 非递归
  - 借助 **堆** `先进后出` 特性, **先将右子树入栈, 再将左子树入栈**
  - 时间复杂度: $O(n)$
  - 空间复杂度: $O(n)$
```python
class Solution:
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        if root is None: return []
        stack, res = [root], []
        while stack:
            node = stack.pop()
            res.append(node.val) ## 将"根"节点加入到结果中
            if node.right:       ## 先将右子树压入栈
                stack.append(node.right)
            if node.left:        ## 后将左子树压入栈
                stack.append(node.left)
        return res
```

- 调用
```python
mat = Solution()
print("\n前序输出：")
print(mat.preorderTraversal(root)) # [1, 2, 3, 4, 5, 6]
print(mat.preorderTraversalRecursion(root)) # [1, 2, 3, 4, 5, 6]
```

### 中序遍历

[leetcode 94. 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/inOrder.svg" title="中序遍历" width=400 >}}

- 定义树  
上图中的树可定义为:
```python
root = TreeNode(4)

root.left = TreeNode(2)
root.left.left = TreeNode(1)
root.left.right = TreeNode(3)

root.right = TreeNode(6)
root.right.left = TreeNode(5)
```

- 递归
  - 时间复杂度: $O(n)$
  - 空间复杂度: $O(n)$
```python
class Solution:
    def inorderTraversalRecursion(self, root: TreeNode) -> List[int]:
        def inorder(root):
            if not root: return
            inorder(root.left)   ## 左子树
            res.append(root.val) ## 根节点
            inorder(root.right)  ## 右子树
            return res
        res = []
        inorder(root)
        return res
```

- 非递归
```python
class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        if not root: return []
        cur, stack, res = root, [], []
        while stack or cur:
            while cur:
                stack.append(cur)
                cur = cur.left
            node = stack.pop()
            res.append(node.val)
            cur = node.right
        return res
```

- 调用
```python
print("\n中序输出：")
print(mat.inorderTraversal(root)) # [1,2,3,4,5,6]
print(mat.inorderTraversalRecursion(root)) # [1,2,3,4,5,6]
```

### 后序遍历

[leetcode 145. 二叉树的后序遍历](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)

{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/postOrder.svg" title="后序遍历" width=400 >}}

- 递归
```python
class Solution:
    def postorderTraversalRecursion(self, root: TreeNode) -> List[int]:
        def postorder(root):
            if not root: return
            postorder(root.left)
            postorder(root.right)
            res.append(root.val)  ## 后序
            return res
        res = []
        postorder(root)
        return res
```

- 非递归

```python
class Solution:
    def postorderTraversal(self, root: TreeNode) -> List[int]:
        if root is None: return []
        stack, res = [(0, root)], []
        while stack:
            flag, node = stack.pop()
            if flag == 1 or (not (node.left or node.right)):
                res.append(node.val)
            else:
                stack.append((1, node))
                if node.right:
                    stack.append((0, node.right))
                if node.left:
                    stack.append((0, node.left))
        return res
```

<hr />

## BFS 广度优先搜索

### 层序遍历
{{< imgcap src="https://cdn.jsdelivr.net/gh/MatNoble/Images/levelOrder.svg" title="层序遍历" width=400 >}}

#### 正序

[leetcode 102. 二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

```python
class Solution:
    def levelTraversalLeft(self, root: TreeNode) -> List[List[int]]:
        if not root: return []
        from collections import deque
        res, queue = [], deque()
        queue.append(root)
        while queue:
            n, level = len(queue), []
            for _ in range(n):
                node = queue.popleft()
                level.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            res.append(level)
        return res
```

#### 逆序

```python
class Solution:
    def levelTraversalRight(self, root: TreeNode) -> List[List[int]]:
        if not root: return []
        res, queue = [], collections.deque()
        queue.append(root)
        while queue:
            n, level = len(queue), []
            for _ in range(n):
                node = queue.popleft()
                level.append(node.val)
                if node.right:
                    queue.append(node.right)
                if node.left:
                    queue.append(node.left)
            res.append(level)
        return res
```

```python
class Solution:
    def levelTraversal(self, root: TreeNode) -> List[List[int]]:
        if not root: return []
        res, queue = [], collections.deque()
        queue.append(root)
        while queue:
            n, level = len(queue), collections.deque()
            for _ in range(n):
                node = queue.popleft()
                level.appendleft(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            res.append(list(level))
        return res
```

#### 锯齿

[剑指 offer 剑指 Offer 32 - III. 从上到下打印二叉树 III](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/)

```python
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root: return []
        from collections import deque
        k, res, queue = 1, [], deque()
        queue.append(root)
        while queue:
            n, level = len(queue), deque()
            k *= -1
            for _ in range(n):
                node = queue.popleft()
                if k == -1: ## 左 --> 右
                    level.append(node.val)
                else:       ## 右 --> 左
                    level.appendleft(node.val)
                if node.left: queue.append(node.left)
                if node.right:queue.append(node.right)
            res.append(list(level))
        return res
```

## 树的深度

```python
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        def bottomUp(root):         ## 自下而上
            return 0 if not root else max(bottomUp(root.left), bottomUp(root.right)) + 1
        def topDown(root, depth=0): ## 自上而下
            return depth if not root else max(topDown(root.left, depth+1), topDown(root.right, depth+1))
        return topDown(root), bottomUp(root)
```