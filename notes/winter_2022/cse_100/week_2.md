---
title: CSE 100
layout: note_template
---

# Week 2



## Notations of Complexity

- **Big-O -> upper bound**
: f(n) is O(g(n)) if A * g(n) >= f(n) when n approaches to infinity where A is a constant
- Big-Ω -> lower bound
: f(n) is Ω(g(n)) if B * g(n) <= f(n) when n approaches to infinity where B is a constant
- Big-θ -> both upper and lower bound
: f(n) is θ(n) if f(n) is O(g(n)) And f(n) is Ω(g(n)), which is B * g(n) <= f(n) <= A * g(n)



## Finding Big-O Time Complexity

1. Determine f(n): #operations vs. n
2. Drop all lower terms of n



## Space complexitiy

### EX)

![image](/assets/images/cse_100/week_2/space_comp.png)



## Trees

#### What are Trees in Data Structures?
Trees are graphs with **no undirected cycles** and they are **connected.**

#### EX)

![image](/assets/images/cse_100/week_2/tree.png)



## Rooted Trees v.s. Unrooted Trees

| | **has root?** | **definition of internal nodes** | **definition of leaves** |
| **Rooted Trees** | One root (no parents) | have children | no children |
| **Unrooted Trees** | No root | >1 neighbors | 1 neighbor |

##### Pictures

![image](/assets/images/cse_100/week_2/rooted_unrooted.png)



## Tree Traversals

- **Preorder:** Visit, Left, Right
- **In-order:** Left, Vist, right
- **Postorder:** Left, Right, Visit
- **Level-order:** 1st level (left to right), 2nd level (left to right), ...



## Binary Search Tree (BST)

### Properties

- Rooted Binary Tree
- Every node is larger than all nodees in its left subtree.
- Every node is smaller than all nodes in its right subtree.

### Find Algorithm

1. Start at the root
2. If query == current -> **success!** If not, continue.
3. If query > current, **traverse right** and go back to #2.
4. If query < current, **traverse left** and go back to #2.

Notes: if no such left/right children in #3 or #4, -> **fail!**

### Insert Algorithm

1. Perform *find* algorithm starting at the root.
2. If *find* succeeds, **duplicate elements!**
3. If *find* doesn't succeed, insert the new element at the site of the failure.

### Successor Algorithm

1. If the node has a right child, traverse right once, then all the way left.
2. Otherwise, traverse up the tree. The first time the current node is its parent's left child, the parent is our successor.

### Remove Algorithm

> Case 1: No Children
> Just delete the node.

> Case 2: 1 Children
> Just directly connect my child to my parent.

> Case 3: Node Children
> Replace my value with my successor's value, and remove me.

### Height

- Height of a node: longest distance from node to a leaf
- Height of a tree: height of the root of the tree

Depth of A Node:
: number of nodes in the path from that node to the root

### Tree Balance

| | **Perfectly Unbalanced** | **Perfectly Balanced** |
| **height** | n - 1 | log<sub>2</sub>(n + 1) - 1 |

### Best vs. Worst vs. Average Case (find n elements)

> Best: query is the root O(1)

> Worst: perfectly unbalanced and query not found O(n)

> Average: Theoretical expected value over all trees and queries

### Average Case Assumptions

1. All n elemnets are equally likely to be searched for
2. All n! possible insertion orders are equally likely

