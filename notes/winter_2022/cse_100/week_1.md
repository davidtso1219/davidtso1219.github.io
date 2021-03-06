---
title: CSE 100
layout: note_template
---

# Week 1



## Advanded Data Structures

- Analyze data structures for both **time** and **space** complexitiy
- Describe the **strengths** and **weaknesses** of a data structure
- Implement complex data structures **correctly** and **efficiently**



## Data Structures (DS) vs. Abstract Data Types (ADT)

| Data Structures | Abstract Data Types |
|--|--|
| Containing data values, relationships among the data, operations applied to the data. | Defined by its behavior from the view of the user: **What operations must it have?** |
| Describes exactly **how the data are organized and how tasks are performed.** | Describes **only what needs to be done** not how its done. |

### EX)

| Array List | List |
|--|--|
| We need to know how something like **index**, or **count** works to understand it.  | Only need to know something like, **add(), find(), remove(), size(), order()**, etc. |



## Java And C++ Comparision

### Integer:

| Java | C++ |
| -- | -- |
| <ul><li>byte (1 byte)</li><li>short (2 bytes)</li><li>int (4 bytes)</li><li>long (8 bytes)</li></ul> | <ul><li>char (1 byte)</li><li>short (2 bytes)</li><li>int (4 bytes)</li><li>long (8 bytes)</li><li>long long (16 bytes)</li></ul> |

### Floating Point:

| Java | C++ |
| -- | -- |
| <ul><li>float (4 bytes)</li><li>double (8 bytes)</li></ul> | <ul><li>float (4 bytes)</li><li>double (8 bytes)</li><li>long double (16 bytes)</li></ul> |

### Boolean:

| Java | C++ |
| -- | -- |
| <ul><li>boolean (usually 1 byte)[^1]</li><li>char (2 bytes)</li></ul> | <ul><li>bool (usually 1 byte)[^1]</li></ul> |


### String:

| Java | C++ |
| -- | -- |
| <ul><li>immutable</li><li>**can concatentate any type**</li><li>`s.substring(beginIndex, endIndex)`</li></ul> | <ul><li>mutable</li><li>**can only concatentate string**</li><li>`s.substr(beginIndex, length)`</li></ul> |

### Comparision Operators:

| Java | C++ |
| -- | -- |
| <ul><li>`a.equals(b)`</li><li>`a.compareTo(b)`</li></ul> | <ul><li>`a == b, a != b`</li><li>`a < b, a <= b`</li><li>`a > b, a >= b`</li></ul> |

### Variables

#### Java

Variable initialization is checked

```java
int fast;
int furious;
int fastFurious = fast + furious; // Compiler Error
```

Narrowing is checked

```java
int x = 4000;
short y = x; // Compiler Error
```

Variables can not be declared outside of a class

```java
// Compiler Error
int meaningOfLife = 42;
class MyClass {
    // some code
}
```

#### C++

Variable initialization is **not** checked

```cpp
int fast;
int furious;
int fastFurious = fast + furious; // undefined behavior
```

Narrowing is **not** checked

```cpp
int x = 4000;
short y = x; // Overflow
```

Variables **can** be declared outside of a class

```java
// Everything works fine!
int meaningOfLife = 42;
class MyClass {
    // some code
}
```

### Classes & Headers & Source Files

#### Java

Point.java

```java
class Point {
    private int x;
    private int y;

    public Point(int x, int y) { /* CODE */ }
}
```

#### C++

Point.h

```cpp
class Point {
    private:
        int x;
        int y;

    public:
        Point(int x, int y);
}
```

Point.cpp

```cpp
Point::Point(int i, int j) x(i), y(j) {}
```

### Memory Diagram

#### Java

```java
Student s1 = new Student("Niema");
Student s2 = s1;
```

![image](/assets/images/cse_100/week_1/java_mem.png)

#### C++

```cpp
Student s1("Niema");
Student s2 = s1;
```

![image](/assets/images/cse_100/week_1/cpp_mem.png)

### Generic Data Structures

#### Java

```java
class Node<Data> {
    public final Data data;
    public Node(Data d) {
        data = d;
    }
}

Node<String> a = new Node<String>(s);
Node<Integer> b = new Node<Integer>(n);
```

#### C++

```cpp
template<typename Data>
class Node {
    public:
        Data const data;
        Node(const Data& d) : data(d) {}
};

Node<string> a(s);
Node<int> b(n);
```


## References

```cpp
Student s1 = Student("Niema");
Student& s2 = s1; // Giving the same object another name
Student s3 = s2;
```

![image](/assets/images/cse_100/week_1/ref.png)



## Pointers

*
: \:pointer

& (on the **left** side of the assignment)
: \:memory address

```cpp
Student s = Student("Niema");
Student* ptr = &s;
Student** ptrPtr = &ptr; // The type of this pointer should be read as "a pointer pointing to a pointer pointing to a Student object. (from right to the left)
```

![image](/assets/images/cse_100/week_1/pointer.png)



## The **"const"** Keyword

```cpp
// These are identical
const int a = 42;
const int b = 42;

// This won't work because we are not allowed to change a const variable.
a = 41;
```



## **"const"** And Pointers

```cpp
int a = 42;

// These two are the same things: a pointer pointing to a const int. (Read from left to right)
// It can reassign the pointer, but it can't modify 'a' since 'a' is a const object.
const int * ptr1 = &a;
int const * ptr2 = &a;

// This is read as: a const pointer pointing to an int.
// It can NOT reassign the pointer since the ptr is now a const pointer
// But it can modify 'a' since 'a' is just an int.
int * const ptr3 = &a;

// This is read as: a const pointer pointing to a const int.
// It can NOT reassign the pointer since the ptr is now a const pointer
// And it can NOT modify 'a' since 'a' is just an int.
const int * const ptr4 = &a;
```



## **"const"** And References

```cpp
int a = 42;

// These two are the same thing: a const reference pointing to an int.
// It can modify 'a', but it can NOT modify 'a' through the reference.
const int & ref1 = a;
int const & ref2 = a;
```



## **const** Functions

```cpp
class Student {
    private:
        string name;

    public:
        Student(string n);
        string getName() const; // can NOT modify the object
                                // can NOT assign instance variable
                                // can ONLY call other const functions
}

Student::Student(string n) : name(n) {}

string String::getName() const { return name; }
```



## Pass by Value v.s. Pass by Reference

### Pass by Value

```cpp
void swap(int a, int b) {
    int tmp = a;
    a = b;
    b = tmp;
}
```

![image](/assets/images/cse_100/week_1/pass_by_value.png)

### Pass by Reference

```cpp
void swap(int& a, int& b) {
    int tmp = a;
    a = b;
    b = tmp;
}
```

![image](/assets/images/cse_100/week_1/pass_by_reference.png)



## Why Iterators?

```cpp
for (string name : names) {
    cout << name << endl;
}
```

> Do we need to know what data structure, names, are?
> Do we need to change anything in the loop based on the data structure?
> No! Because this is why an **iterator** is created!



## Linked List Iterator

```cpp
LinkedList<string> names;

LinkedList<string>::iterator itr = names.begin(); // pointer pointing to the first node
LinkedList<string>::iterator end = names.end(); // next pointer of the last node, i.e. nullptr

// Needs to overload the operators: !=, *, ++
// *: return curr->data;
// ++: return curr -> next;
while(itr != end) {
    cout << *itr << endl;
    ++itr;
}
```



## Creating An Iterator Class

Operators in Iterator Class:
- == true if iterators are pointing to the same item
- != false if iterators are pointing to the same items
- \* (dereference) return a reference to the current data value
- ++ (pre) and ++ (post) move our iterator to the next item

Funcitons in The Data Structure Class:
- `begin()` returns iterators to the **first** element.
- `end()` returns iterator to just after the **last** element.

[^1]: Although a boolean only stores a bit of information, we still use a whole byte to store a boolean.
