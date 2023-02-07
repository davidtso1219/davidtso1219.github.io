---
title: Web Dev Simplified React Hooks
layout: note_template
---

# useEffect

## Description

- By using this hook, we are essentially saying we want to apply some side effects.
- Because React component functions are pure functions, i.e. if the input is the same, the output or the effect of the function will be the same by definition, we want to isolate the part that has side effects.
- The hook takes two arguments, a callback (effect) and an array (dependencies). If any dependency is changed, the callback will be called.
- The effect callback can return another callback, which will be the clean up callback. It will be called **right before** the next time the effect callback is called.

## Usage

```js
import React, { useState, useEffect } from 'react';

const App = () => {

    const [requestType, setRequestType] = useState('get');

    useEffect(() => {

        fetch(`https://httpbin.org/${requestType}`)
        .then(response => response.json())
        .then(json => console.log(json));

        // clean up callback
        return () => {
            console.clear();
            console.log('Clean Up for A New API Request');
        };

    }, [requestType]);

    return (
        <h1>{requestType}</h1>
        <button onClick={() => setRequestType('get')}>get</button>
        <button onClick={() => setRequestType('post')}>post</button>
        <button onClick={() => setRequestType('put')}>put</button>
        <button onClick={() => setRequestType('delete')}>delete</button>
    );
};
```

## Different Usages
1. No Dependency, i.e. a function passed in `useEffect`
    - Effect: Anytime the component is rerendered.
    - Cleanup: Anytime before the component is rerendered
2. Empty Dependency, i.e. a function and an empty array passed in `useEffect`
    - Effect: only called when the component is mounted, i.e. created **at the first time** and won't be called when rerendered
    - Cleanup: only called when the component is unmounted
3. Non-Empty Dependencies, i.e. a function and an non-empty array passed in `useEffect`
    - Effect: Anytime any dependency is changed
    - Cleanup: Anytime before any dependency is changed

## Side Effect

- Side effects are performed with the outside scope of the component function. For example,
  1. Making a HTTP request
  2. Interact with the browser API (real DOM)
