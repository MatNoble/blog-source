+++
title = "栈与队列"
date = "2021-03-05T00:19:30+00:00"
description = "91 天学算法"
tags = ["LeetCode题解","编程刷题"]
keywords = ["leetcode","数据结构","python","数组","栈","队列","MatNoble"]
toc = true
mathjax = true
+++

## 栈 Stack

<img src="https://cdn.jsdelivr.net/gh/MatNoble/Images/Data_stack.svg"/>

**栈** 具有 `先进后出` 特性。有如下几个操作：
- `push(x)`: 将 `x` 压入..栈顶..  
- `pop()`: 删除并返回..栈顶..元素
- `top()`: 返回..栈顶..元素
- `isEmpty()`: 判断是否为空

<hr />

## 队列 Queue

<img src="https://cdn.jsdelivr.net/gh/MatNoble/Images/20210305151512.png"/>

**队列** 具有 `先进先出` 特性。有如下几个操作：
- `push(x)`: 将 `x` 压入..队尾..  
- `pop()`: 删除并返回..队首..元素
- `peek()`: 返回..队首..元素
- `isEmpty()`: 判断是否为空

<hr />

## LeetCode 题目

### 232. 用栈实现队列
https://leetcode-cn.com/problems/implement-queue-using-stacks/
#### 题目描述
{{< notice note >}}
请你仅使用两个栈实现先入先出队列。队列应当支持一般队列的支持的所有操作（`push`、`pop`、`peek`、`empty`）：

实现 `MyQueue` 类：
- `void push(int x)` 将元素 x 推到队列的末尾
- `int pop()` 从队列的开头移除并返回元素
- `int peek()` 返回队列开头的元素
- `boolean empty()` 如果队列为空，返回 `true` ；否则，返回 `false`
 

**说明：**
- 你只能使用标准的栈操作 —— 也就是只有 `push to top`, `peek/pop from top`, `size`, 和 `is empty` 操作是合法的。
- 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
 

**进阶：**  
你能否实现每个操作均摊时间复杂度为 $O(1)$ 的队列？换句话说，执行 $n$ 个操作的总时间复杂度为 $O(n)$ ，即使其中一个操作可能花费较长时间。

**提示：**  
- `1 <= x <= 9`  
- 最多调用 100 次 `push`、`pop`、`peek` 和 `empty`
- 假设所有操作都是有效的 （例如，一个空的队列不会调用 `pop` 或者 `peek` 操作）
{{< /notice >}}
#### 思路
- 用数组 list 实现栈
- 栈与队列的区别：**栈作用于栈顶，队列作用于队首**
  - `pop()`
  - `peek()` 
- 设计
  - 用 `self.a` 记录队首(栈底)元素
  - `pop()` 操作时，..主栈.. `self.A` 需要借助..辅助栈.. `self.B`
    ```python
    while self.A: 
        self.B.append(self.A.pop())
        res = self.B.pop()
        while self.B:
            self.push(self.B.pop())
        return res
    ```
  - `peek()` 操作，直接返回 `self.a` 

#### 代码 Python

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
        while self.A: 
            self.B.append(self.A.pop())
        res = self.B.pop()
        while self.B:
            self.push(self.B.pop())
        return res


    def peek(self) -> int:
        """
        Get the front element.
        """
        return self.a


    def empty(self) -> bool:
        """
        Returns whether the queue is empty.
        """
        return not self.A
```

<hr />

### 225. 用队列实现栈
https://leetcode-cn.com/problems/implement-stack-using-queues/
#### 题目描述
{{< notice note >}}
请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通队列的全部四种操作（`push`、`top`、`pop` 和 `empty`）。

实现 `MyStack` 类：  
- `void push(int x)` 将元素 `x` 压入栈顶。
- `int pop()` 移除并返回栈顶元素。
- `int top()` 返回栈顶元素。
- `boolean empty()` 如果栈是空的，返回 `true` ；否则，返回 `false` 。

**注意：**  
- 你只能使用队列的基本操作 —— 也就是 `push to back`、`peek/pop from front`、`size` 和 `is empty` 这些操作。
- 你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。

**提示：**  
- `1 <= x <= 9`
- 最多调用100 次 `push`、`pop`、`top` 和 `empty`
- 每次调用 `pop` 和 `top` 都保证栈不为空

**进阶：** 你能否实现每种操作的均摊时间复杂度为 $O(1)$ 的栈？换句话说，执行 $n$ 个操作的总时间复杂度 $O(n)$ ，尽管其中某个操作可能需要比其他操作更长的时间。你可以使用两个以上的队列。
{{< /notice >}}
#### 思路
- 思路类似于 [232 用栈实现队列](./#232-用栈实现队列) 
- 用 `self.a` 记录栈顶(队尾)元素
- `pop()` 操作时，..主队列.. self.A 需要借助..辅助队列.. self.B
  ```python
  while len(self.A) > 1:
            self.B.append(self.A.popleft())
        res = self.A.popleft()
        while self.B:
            self.push(self.B.popleft())
        return res
  ```
- `top()` 操作时，直接返回 `self.a`

#### 代码 Python

```python
from collections import deque
class MyStack:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.A, self.B = deque(), deque()
        self.a = None


    def push(self, x: int) -> None:
        """
        Push element x onto stack.
        """
        self.A.append(x)
        self.a = x


    def pop(self) -> int:
        """
        Removes the element on top of the stack and returns that element.
        """
        while len(self.A) > 1:
            self.B.append(self.A.popleft())
        res = self.A.popleft()
        while self.B:
            self.push(self.B.popleft())
        return res
        

    def top(self) -> int:
        """
        Get the top element.
        """
        return self.a


    def empty(self) -> bool:
        """
        Returns whether the stack is empty.
        """
        return not bool(self.A)
```