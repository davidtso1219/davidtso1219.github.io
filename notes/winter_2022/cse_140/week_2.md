---
title: CSE 140
layout: note_template
---

# CSE 140

## Pass Gate

![image](/assets/images/cse_140/week_2/pass_gate.png)

| A | EN | B |
|:-:|:-:|:-:|
| - | **0** | **Z**[^1] |
| 0 | 1 | 0 |
| 1 | 1 | 1 |


## Multiplexer

![image](/assets/images/cse_140/week_2/multiplexer.png)

| S | Y |
|:-:|:-:|
| 0 | A |
| 1 | B |

### Multiplexer Using Logic Gates

![image](/assets/images/cse_140/week_2/mut_logic.png)

We need `6 * 3 + 2 = 20` transistors.

### Multiplexer Using Pass Gates

![image](/assets/images/cse_140/week_2/mut_pass.png)

We only need `6` transistors.

## Half Adder

![image](/assets/images/cse_140/week_2/half_adder.png)

| A | B | C<sub>o</sub> | S |
|:-:|:-:|:--:|:-:|
| 0 | 0 |  0 | 0 |
| 0 | 1 |  0 | 1 |
| 1 | 0 |  0 | 1 |
| 1 | 1 |  1 | 0 |

> S = A'B + AB' <br>
> C<sub>o</sub> = AB

## Full Adder

![image](/assets/images/cse_140/week_2/full_adder.png)

| A | B | C<sub>i</sub> | C<sub>o</sub> | S |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 1 |
| 1 | 0 | 0 | 0 | 1 |
| 1 | 1 | 0 | 1 | 0 |
| 0 | 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 | 0 |
| 1 | 0 | 1 | 1 | 0 |
| 1 | 1 | 1 | 1 | 1 |

## Canonical Form

> Def: <br>
> &nbsp;&nbsp;&nbsp;&nbsp;Create a sum of minterms or maxterms <br><br>
> Ex) <br>
> &nbsp;&nbsp;&nbsp;&nbsp;F(a, b) = ab + ab' + a'b' <br>
> &nbsp;&nbsp;&nbsp;&nbsp;F(a, b) = ab + a (this is NOT since a is not a minterm or maxterm.)

## Sum-of-Products Canonical Form

### EX)

F(a, b, c) = a'b'c + a'bc + ab'c + abc' + abc (001=1, 011=3, 101=5, 110=6, 111=7) <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = **m(1, 3, 5, 6, 7)** <br><br>
F'(a, b, c) = a'b'c' + a'bc' + a'b'c = **m(0, 2, 4)**

|   | a | b | c | f | f'|
|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 | 0 |
| 2 | 0 | 1 | 0 | 0 | 1 |
| 3 | 1 | 1 | 0 | 1 | 0 |
| 4 | 0 | 0 | 1 | 0 | 1 |
| 5 | 1 | 0 | 1 | 1 | 0 |
| 6 | 0 | 1 | 1 | 1 | 0 |
| 7 | 1 | 1 | 1 | 1 | 0 |

## Products-of-Sum Canonical Form

### EX)

F(a, b, c) = (A + B + C)(A + B' + C)(A' + B + C) (000=0, 010=2, 100=4) <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = **M(0, 2, 4)** <br><br>
F'(a, b, c) = a'b'c' + a'bc' + a'b'c = **M(1, 3, 5, 6, 7)**

|   | a | b | c | f | f'|
|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 | 0 |
| 2 | 0 | 1 | 0 | 0 | 1 |
| 3 | 1 | 1 | 0 | 1 | 0 |
| 4 | 0 | 0 | 1 | 0 | 1 |
| 5 | 1 | 0 | 1 | 1 | 0 |
| 6 | 0 | 1 | 1 | 1 | 0 |
| 7 | 1 | 1 | 1 | 1 | 0 |

## K-Map

### Two Varaible K-Map Example (SOP)

f(A, B) = A + B

![image](/assets/images/cse_140/week_2/two_var_kmap.png)

### Three Varaible K-Map Example (SOP)

f(A, B) = A'B + AC + BC = A'B + AC (Consensus Theorem)

![image](/assets/images/cse_140/week_2/three_var_kmap.png)

\* BC is unneccesary because AB and AC already cover everything thing

### Four Variable K-Map Example (SOP)

F = C + B'D' + A'BD = m(0, 2, 3, 4, 5, 6, 7, 8, 10, 11, 14, 15)

![image](/assets/images/cse_140/week_2/four_var_kmap.png)

[^1]: Z means floating: that we don't know what the value should be.
