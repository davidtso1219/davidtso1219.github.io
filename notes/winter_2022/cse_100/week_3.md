---
title: CSE 100
layout: note_template
---

# Week 3

## Treaps (Tree + Heap)

1. BST properties with keys
    - larger than all keys in left subtree
    - smaller than all keys in right subtree

2. Heap properties with priorities
    - larger than all priorities below

![image](/assets/images/cse_100/week_3/treap.png)

## AVL Rotation

![image](/assets/images/cse_100/week_3/avl_rotation.png)

## Treap Insertion

1. Insert via BST insertion algorithm with keys
2. Use AVL Rotations to **bubble up** to fix Heap with priorities

### Example: Insert (R, 20)

![image](/assets/images/cse_100/week_3/treap_insertion-1.png)
![image](/assets/images/cse_100/week_3/treap_insertion-2.png)
![image](/assets/images/cse_100/week_3/treap_insertion-3.png)
![image](/assets/images/cse_100/week_3/treap_insertion-4.png)

## Randomized Search Trees (RSTs)

- Use elements as keys (maintain BST properties)
- **Randomly generate and assign priorities** (maintain heap properties)
- Worst Case of height: O(n), insert like a linear linked list.

## AVL Trees

- AVL Tree: BST in which **every node has balance factor[^1] of -1, 0, or 1**
- Worst Case of height: O(logn)

### AVL Trees Insertion

1. Regular BST insertion
2. Update balance factor
3. Fix broken balance factor using AVL Rotations

## Rotations

### Single Rotation

![image](/assets/images/cse_100/week_3/single_rotation.png)

### Double Rotation

![image](/assets/images/cse_100/week_3/double_rotation.png)

## Red-Black Tree

1. All nodes must be red or black
2. The root must be black
3. If a node is **red**, all of its children must be **black**.
    - **Cannot have red node with red child**
4. **For every node n, every path from n to a null reference must have the same number of black nodes.**
5. Worst case of height: O(logn)

\* Null references are black.

### Red-Black Tree Insertion

#### Case 1: Empty Tree

- Insert the new node as the root
- Color it **black**

#### Case 2: Child of A **Black** Node

- Perform regurlar BST insertion
    - If you see black node with 2 red children, recolor all 3
        - if the parent is the root, color it black
- Color new node **red**

#### Case 3: Child of A **Red** Node, straight line

- Perform a single rotation on the parent red node
- Recolor the red node and its original parent node

![image](/assets/images/cse_100/week_3/rb_insertion-3.png)

#### Case 4: Child of A **Red** Node, kink

- Perform a double rotation on the parent red node
- Recolor the new red node and its grand-parent node

![image](/assets/images/cse_100/week_3/rb_insertion-4.png)

[^1]: Balance Factor: Height of right subtree - Height of left subtree

