---
title: Udemy JS
layout: note_template
---

# Section 12



## CommonJS
- Run in Node.js
```js
// in mymodule.js
module.exports = {
    name: 'david',
    email: 'david@gmail.com'
}

// in another file
const person = require('mymodule.js');
```



## ES Module
- Run in browsers
```js
// in mymodule.js
export const person = {
    name: 'david',
    email: 'david@gmail.com'
}

export function sayHello() {
    console.log('hello');
}

export default const greeting = 'Hello there';

// in another files
import { person, sayHello } from 'mymodule.js';
import * as mod from 'mymodule.js'; // import everything
import greeting from 'mymodule.js'; // no need for brackets for export default
```