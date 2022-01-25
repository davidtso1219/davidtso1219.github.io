---
title: CSE 140
layout: note_template
---

# CSE 140

## CMOS Switches (nMOS vs. pMOS)

|  | **nMOS** | **pMOS** |
| :--: | :--: | :--: |
| if connected to **1** | conducts | does NOT conduct |
| if connected to **0** | does NOT conducts | conduct |

### explanation

> For **nMOS**, when the gate connected to 1, the source and drain attract electrons to create a negative tunnel.
> So electron can pass through it without being affected by source and drain. But when connected to 0, the source
> and drain will create a positive tunnel and the electron will be attracted by the source and drain and not able to pass.

> For **pMOS**, when the gate connected to 0, the source and drain attract protons to create a positive tunnel.
> So protons can pass through it without being affected by source and drain. But when connected to 1, the source
> and drain will create a negative tunnel and the proton will be attracted by the source and drain and not able to pass.

## CMOS Logic Gates

### 1. NOT Gate

![image](/assets/images/cse_140/week_1/not_gate.png)

| A | P1 | N1 | Y |
|:-:|:--:|:--:|:-:|
| 0 |  1 |  0 | 1 |
| 1 |  0 |  1 | 0 |

### 2. 2-Input NAND Gate

![image](/assets/images/cse_140/week_1/nand_gate.png)

| A | B | P1 | P2 | N1 | N2 | Y |
|:-:|:-:|:--:|:--:|:--:|:--:|:-:|
| 0 | 0 |  1 |  1 |  0 |  0 | 1 |
| 0 | 1 |  1 |  0 |  0 |  1 | 1 |
| 1 | 0 |  0 |  1 |  1 |  0 | 1 |
| 1 | 1 |  0 |  0 |  1 |  1 | 0 |

### 3. 2-Input AND Gate

![image](/assets/images/cse_140/week_1/and_gate.png)

| A | B | P1 | P2 | N1 | N2 |
|:-:|:-:|:--:|:--:|:--:|:--:|
| 0 | 0 |  1 |  1 |  0 |  0 |
| 0 | 1 |  1 |  0 |  0 |  1 |
| 1 | 0 |  0 |  1 |  1 |  0 |
| 1 | 1 |  0 |  0 |  1 |  1 |


| X | P | N | Y | delay |
|:-:|:-:|:--:|:--:|:--:|
| 1 | 0 | 1 | 0 | **R/2 * 2C** |
| 1 | 0 | 1 | 0 | **R * 2C** |
| 1 | 0 | 1 | 0 | **R * 2C** |
| 0 | 1 | 0 | 1 | **2R * 2C** |

### 4. 2-Input NOR Gate

![image](/assets/images/cse_140/week_1/nor_gate.png)

| A | B | P1 | P2 | N1 | N2 | Y |
|:-:|:-:|:--:|:--:|:--:|:--:|:-:|
| 0 | 0 |  1 |  1 |  0 |  0 | 1 |
| 0 | 1 |  1 |  0 |  0 |  1 | 0 |
| 1 | 0 |  0 |  1 |  1 |  0 | 0 |
| 1 | 1 |  0 |  0 |  1 |  1 | 0 |

### 5. 2-Input OR Gate

![image](/assets/images/cse_140/week_1/or_gate.png)

| A | B | P1 | P2 | N1 | N2 |
|:-:|:-:|:--:|:--:|:--:|:--:|
| 0 | 0 |  1 |  1 |  0 |  0 |
| 0 | 1 |  1 |  0 |  0 |  1 |
| 1 | 0 |  0 |  1 |  1 |  0 |
| 1 | 1 |  0 |  0 |  1 |  1 |


| X | P | N | Y | delay |
|:-:|:-:|:--:|:--:|:--:|
| 1 | 0 | 1 | 0 | **2R * 2C** |
| 0 | 1 | 0 | 1 | **R * 2C** |
| 0 | 1 | 0 | 1 | **R * 2C** |
| 0 | 1 | 0 | 1 | **R/2 * 2C** |
