---
title: Web Dev Simplified React Hooks
layout: note_template
---

# useState

## Description

- The `useState` hook is going to create a variable, or state, and a special setter for the variable.
- When the state is changed by calling the setter, React will react to it and rerender the component with the updated variable.

## Usage

```js
import React, { useState } from 'react';

const App = () => {

    const [name, setName] = useState('John');

    const setNameToDavid = e => {
        setName('David');
    };

    return (
        <button onClick={setNameToDavid}>+</button>
        <h1>{name}</h1>
    );
};
```

## Reminder

- Make sure you pass a function that takes an argument in the setter if the new state depends on the previous state. The only argument represents the previous state of the variable.
- If you don't follow this, useState could be broken. For example,

```js
import React, { useState } from 'react';

const App = () => {

    const [count, setCount] = useState();

    const incrementCount = e => {
        // this will increment the number by 2 successfully
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    };

    const decrement = e => {
        // this will only decrement the number by 1
        setCount(count - 1);
        setCount(count - 1);
    };

    return (
        <button onClick={incrementCount}>+</button>
        <h1>{count}</h1>
        <button onClick={decrementCount}>-</button>
    );
};
```
