+++
title = "哨兵循环"
tags = ["编程之道"]
keywords = ["python"]
date = "2020-05-25T00:19:00+00:00"
toc = true
+++

```python
'''
哨兵循环 => 线性搜索问题

L => list
T => target 
'''

def loop1():
    i = 0
    while True:
        if L[i] == T:
            print('\nbingo, the letter is in position ', i+1)
            break
        i += 1
        if i > len(L)-1:
            print('\nthe search unsuccessfully')
            break

def loop2():
    L.append(T)
    i = 0
    while True:
        if L[i] == T:
            if i < len(L)-1:
                print('\nbingo, the letter is in position ', i+1)
            else:
                print('\nthe search unsuccessfully')
            break
        i += 1

#####################################################################

L = list(input("\nPlease Enter a String [matnoble]: ") or 'matnoble')
T = input("\nPlease Enter a letter [z]: ") or 'z'

loop1()
loop2()
```
