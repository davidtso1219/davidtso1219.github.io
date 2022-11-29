---
title: Udemy React
layout: note_template
---

# Section 11

## Use Destructuring to Pass Props

- Ex.

```js
const Input = props => {
    return (
        <>
            <label {...props.label}>props.label.text</label>
            <input {...props.input}/>
        </>
    );
};
```

## Javascript findIndex function

- In javascript, there is a built in function `findIndex`, which takes a callback and return the index of the item that the callback returns true for.
- If no item is found, the function returns -1.
- Ex.

```js
const items = [1, 2, 3, 4, 5];
const index = items.findIndex(item => item === 1);
console.log(index); // print 0
```
