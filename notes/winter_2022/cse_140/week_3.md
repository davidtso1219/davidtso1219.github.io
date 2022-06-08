---
title: CSE 140
layout: note_template
---

# Week 3

## Cheat Sheets

### Three Variable

![image](/assets/images/cse_140/week_3/three_var_cheat_sheet.png)

### Four Variable

![image](/assets/images/cse_140/week_3/four_var_cheat_sheet.png)

## Don't Care

Def: don't care can be used as 0 or 1 for convenience
F = m(0, 2, 7, 8, 14, 15) + d(3, 6, 9, 12, 13)

![image](/assets/images/cse_140/week_3/dont_care.png)

## Implement >, <, == using K-Map

![image](/assets/images/cse_140/week_3/comparators_truth_table.png)
![image](/assets/images/cse_140/week_3/comparators_kmap.png)

## Definitions of Terms for Two-Level Simplifications

- **Implicant/Implicate**
    - single element of 1 or X or any group of these elements that can be combined to form a rectangle or square with the width of the power of 2.
- **Prime Implicant/Implicate**
    - can't be combined with another to form a larger rectangle or square
- **Essential Prime Implicant/Implicate**
    - prime implicant is essential if it alone covers any element of 1 (or 0 for implicates)
    - will participate in **ALL** possible covers of the 1's (or 0's)
    - X used to form prime implicants/implicates but not to make them essential

### Example

Red: Cover elements that are only covered by each of them.
Blue: Cover elements that are also covered by other implicants

![image](/assets/images/cse_140/week_3/terms_example.png)

## Algorithm for two-level simplification (SOP)

1. choose an 1
2. find **maximal** groupings of 1's and X's adjacent to the element
    - consider top/bottom row, left/right column, and corner adjacencies
    - this forms prime implicants

    al*Repeat Steps 1 and 2 to find all prime implicantes*

3. Revisit the 1's in the K-Map
    - if covered by **single prime implicant**, it is essential
    - 1's covered by essential prime implicants do not need to be revisited
4. if there is any 1's remained uncovered by essentail implicants
    - select the smallest numer of prime implicants that cover them

## Multilevel Logic

Examples:

1. x = ADF + AEF + BDF + BEF + CDF + CEF + G
    - 6 x 3-input AND gates[^1] + 1 x 7-input OR gate
    - 25 wires (19 literals + 6 internal wires)

2. x = (A + B + C)(D + E)F + G
    - 1 x 3-input OR gate + 2 x 2-input OR gate + 1 x 3-input AND gate
    - 10 wires (10 literals + 3 internal wires)

[^1]: In the design of multilevel gates, we will put more and more CMOS gates in series, which will increase the total resistance of the serie, so the delay will become greater and greater. In 3-inupt AND gate will have 3R * 2C = 6RC of delay. (2C because of the internal NOT gate of an AND gate)

## Multiplexer (MUX)

- Select one of **N inputs** to connect to output
- Ex: 4:1 Multiplexer

![image](/assets/images/cse_140/week_3/mux.png)

## Demultiplexer (DeMUX)

- Select one of **N outputs** to connect to intput
- Ex: 1:2 Demultiplexer, 1:4 Demultiplexer

![image](/assets/images/cse_140/week_3/demux.png)

## Decoder

- N inputs, 2<sup>N</sup> outputs
- One-hot outputs: only one output HIGH at a time when enable signal is 1 (EN=1)
- Ex: 2:4 Decoder

![image](/assets/images/cse_140/week_3/decoder.png)

## 2's Complement

- If N is a positive number, then negative of N is bit-wise complement plus 1.
- Ex:
    1. 7 = b'0111 -> 1000 + 1 = 1001 = -7
    2. -7 = b'1001 -> 0110 + 1 = 0111 = 7

## Subtractor

![image](/assets/images/cse_140/week_3/subtractor.png)

## Comparator: Equality

![image](/assets/images/cse_140/week_3/equality.png)

## Comparator: Inequality

![image](/assets/images/cse_140/week_3/inequality.png)

## Shifter

![image](/assets/images/cse_140/week_3/shifter.png)

## ALU

- Combinations of different components with a selector at the end to select operations to perform