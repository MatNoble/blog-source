+++
title = "判断括号合法性"
date = "2021-03-05T00:20:30+00:00"
tags = ["高频算法题","编程刷题"]
keywords = ["leetcode","数据结构","python","栈","二分法","MatNoble"]
toc = false
mathjax = true
+++

## 目录

- [只处理一种括号](./#只处理一种括号)
- [678. 有效的括号字符串(华为面试)](./#678-有效的括号字符串华为面试)
- [20. 有效的括号](./#20-有效的括号)

### 只处理一种括号
#### 题目描述
{{< notice note >}}
字符串中只有圆括号 `(` 和 `)`，判断输入字符串的合法性。

**示例 2**  
输入：`)(`   
输出：`false`

**示例 2**  
输入：`()))((`   
输出：`false`

**示例 3**  
输入：`(())()`  
输出：`true`
{{< /notice >}}
#### 思路
每个右括号 `)` 的左边必须有一个左括号 `(` 和它匹配

#### 代码

- 栈方法
```python
def isValid0(s):
    stack = []
    for a in s:
        if a == '(': 
            stack.append(a)
        elif not stack:
            return False
        else:
            stack.pop()
    return True if not stack else False
```

- 计数法
```python
def isValid1(s):
    if len(s) & 1: return False # 奇数，直接 False
    count = 0
    for a in s:
        if a == '(':
            count += 1
        else:
            count -= 1
        if count < 0 or count > len(s)//2: return False
    return count == 0
```

#### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$

<hr />

### 678. 有效的括号字符串(华为面试)
https://leetcode-cn.com/problems/valid-parenthesis-string/
#### 题目描述
{{< notice note >}}
给定一个只包含三种字符的字符串：`(`, `)` 和 `*`。写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：
- 任何左括号 `(` 必须有相应的右括号 `)`；
- 任何右括号 `)` 必须有相应的左括号 `(`；
- 左括号 `(` 必须在对应的右括号 `)` 之前；
- `*` 可以被视为单个右括号 `)`, 或单个左括号 `(`, 或一个空字符；
- 一个空字符串也被视为有效字符串。

**示例 1：**  
输入：`"()"`   
输出: `true`

**示例 2：**  
输入：`"(*)"`   
输出: `true`

**示例 3：**  
输入：`"(*))"`    
输出: `true`

**注意：**  
字符串大小将在 $[1, 100]$ 范围内。
{{< /notice >}}
#### 思路
- 双向遍历
  - 左 --> 右  
  当 `)` 左侧没有可匹配的 `(` 或 `*`，返回 `False`
  - 左 <-- 右  
  当 `(` 右侧没有可匹配的 `)` 或 `*`，返回 `False`
- [ ] 双栈法  
待补充...

#### 代码

- 双向遍历
```python
class Solution:
    def checkValidString(self, s: str) -> bool:
        ## 双向遍历
        # 左 --> 右
        count = 0
        for i in range(len(s)):
            if s[i] == ')':
                count -= 1
            else:
                count += 1
            if count < 0: return False
        if count == 0: return True
        # 左 <-- 右
        count = 0
        for i in range(len(s)-1, -1, -1):
            if s[i] == '(':
                count -= 1
            else:
                count += 1
            if count < 0: return False
        return True
```

- 双栈法

#### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$

<hr />

### 20. 有效的括号
https://leetcode-cn.com/problems/valid-parentheses/
#### 题目描述
{{< notice note >}}
给定一个只包括 `'('，')'`，`'{'，'}'`，`'['，']'` 的字符串 `s` ，判断字符串是否有效。

有效字符串需满足：
1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。

**示例 1：**  
输入：`s = "()"`  
输出：`true`

**示例 2：**  
输入：`s = "()[]{}"`  
输出：`true`

**示例 3：**  
输入：`s = "(]"`  
输出：`false`

**示例 4：**  
输入：`s = "([)]"`  
输出：`false`

**示例 5：**  
输入：`s = "{[]}"`  
输出：`true`

**提示：**  
- $1 <= s.length <= 10^4$
- `s` 仅由括号 `()[]{}` 组成
{{< /notice >}}
#### 思路

遇到左括号就入栈，遇到右括号就去栈中寻找最近的左括号，看是否匹配。

#### 代码

```python
class Solution:
    def isValid(self, s: str) -> bool:
        # 栈 + 字典
        if len(s) & 1: return False
        # a = ['(', '[', '{']
        # b = [')', ']', '}']
        # d = dict(zip(b, a))
        d = {')':'(', ']':'[', '}':'{'}
        stack = []
        for a in s:
            if a not in d:
                stack.append(a)
            elif bool(stack) and d[a] == stack[-1]:
                stack.pop()
            else:
                return False
        return not bool(stack)
```

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