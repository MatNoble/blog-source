+++
title = "集成学习"
date = "2021-02-11T00:20:33+00:00"
description = "Boosting VS Bagging"
categories = ["机器学习"]
tags = ["回归","梯度下降"]
keywords = ["集成学习","AdaBoost","randomforest","决策树","Bias","Variance","MatNoble"]
toc = true
mathjax = true
series = ["AI"]
+++

## 集成学习分类

|Boosting|Bagging|
| :--: | :--: |
| AdaBoost | 随机森林 |
| 各个基分类器之间有**强依赖** | 各基分类器之间**无强依赖** |
| 减小集成分类器的**偏差** | 减小集成分类器的**方差** |

### Boosting
<img src="https://cdn.jsdelivr.net/gh/MatNoble/Images/20210211181049.png"/>

### Bagging
<img src="https://cdn.jsdelivr.net/gh/MatNoble/Images/20210211180951.png"/>

### stacking

<img src="https://cdn.jsdelivr.net/gh/MatNoble/Images/20210211181132.png"/>

## 集成学习步骤

1. 找到误差互相独立的基分类器
2. 训练基分类器
3. 合并基分类器的结果

## 常用的基分类器

**决策树**:
1. 决策树可以较为方便地将样本的权重整合到训练过程中，而不需要使用过采样的方法来调整样本权重。
2. 决策树的表达能力和泛化能力，可以通过调节树的层数来做折中。
3. 数据样本的扰动对于决策树的影响较大，因此不同子样本集合生成的决策树基分类器随机性较大，这样的“不稳定学习器”更适合作为基分类器。此外，在决策树节点分裂的时候，随机地选择一个特征子集，从中找出最优分裂属性，很好地引入了随机性。

## 偏差与方差

<img src="https://cdn.jsdelivr.net/gh/MatNoble/Images/20210211181211.png"/>

## GBDT VS XGBoost

梯度提升决策树