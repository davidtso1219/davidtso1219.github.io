title: CSE 100
layout: note_template
---

# Week 4

## Set ADT

- find(x): True if x exists in the set, otherwise false
- insert(x): Add x to the set
- remove(x): Remove x from the set

## Map ADT

- get(k): Return the value associated with key k if ke xists in the map
- put(k, v): Map the key to the value v
- remove(k): Remove key k and its value from the map

## Implementing Set and Map ADTs

- Unsorted Linked List: O(n) find/remove, O(1) insert
- Sorted Linked List: O(n) find/remove/insert, can iterate in sorted order
- Unsorted Arraylist: O(n) find/remove, amortized O(1) insert
- Sorted ArrayList: O(logn) find, O(n) remove/insert, can iterate sorted
- Self-Balancing BST: O(logn) find/insert/remove, can iterate sorted
- Hash Table: O(1) expected, need to first perform O(k) hash

## Tries

Def: Tree structure in which elements are represented by paths
Ex: A trie with **0, 00, 10, 11**

![image](/assets/images/cse_100/week_4/binary_trie.png)

## Multiway Trie (MWTs)

Def: Trie in which nodes can have more than 2 children
Ex: A trie with **TAA, TAG, TGA**

![image](/assets/images/cse_100/week_4/mwt.png)

## MWT Operations

### 1. MWT Insertion

- Set a pointer, curr, at root
- Loop through characters (c) in the string
    - if a non-null pointer in curr's children map for c, update curr to that pointer and c to next character
    - otherwise, create a new node at heap and store that pointer in curr's children map

### 2. MWT Find

- Set a pointer, curr, at root
- Loop through characters (c) in the string
    - if a null pointer in curr's children map for c, return false
    - otherwise, update curr to that pointer and c to next character

### 3. MWT Remove

- First, find the word and if it doesn't exist, return immediately
- Set a pointer, curr, at root
- Loop through characters (c) in the string
    - if a null pointer in curr's children map for c, return immediately
    - otherwise, update curr to that pointer and c to next character
- Finally, delete the node that curr is pointing to, and set its parent's children map for last c to nullptr

## MWT Complexities

1. Time Complexity: O(k) where k is the length of the longest word
2. Space Complexity: O(E<sup>k + 1</sup>) where E is the length of the alphabet (or the number of all possibilities in each position)

## Cool Algorithms with MWTs

- Iterate in ascending order: preorder
- Iterate in descending order: postorder
- Iterate in increasing order of length: level-order traversal
- Autocomplete: find, traversal from node I end at

## TST Operations

### 1. TST Insertion

- Set a pointer, curr, at root
- Loop through characters (c) in the string
    - if c is what curr has, curr goes down and c moves ahead
    - otherwise, curr goes to curr's child that is not right below curr
- If c reaches the end of the string, and curr is pointing to a node, set that node **a word node**
- If curr is a null pointer,
    - while c is not at the end of the string,
        - create a new node right below curr node, and move curr to the new node, and c to the next character

### 2. TST Find

- Set a pointer, curr, at root
- Loop through characters (c) in the string
    - if c is what curr has, curr goes down and c moves ahead
    - otherwise, curr goes to curr's child that is not right below curr
- If c reaches the end of the string, and curr is pointing to a node, **return whether that node is a word node**
- If curr is a null pointer, return False.

### 3. TST Remove

- First, find the word and if it doesn't exist, return immediately
- Set a pointer, curr, at root
- Loop through characters (c) in the string
    - if c is what curr has, curr goes down and c moves ahead
    - otherwise, curr goes to curr's child that is not right below curr
- If c reaches the end of the string, set the curr node's **a non-word node**

## TST Time Complexity

- Worst case: O(n), works like a linked list
- Average Case: O(logn)

## **BST vs. MWT vs. TST**

- BST: O(klogn), memory efficient
- MWT: O(k), memory inefficient
- TST: Somewhere between