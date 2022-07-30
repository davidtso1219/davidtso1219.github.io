---
title: Udemy JS
layout: note_template
---

# Section 10



## Iterator
- An object with a next function to iterate over an array
- Ex.
```js
function namesIterator(names) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex < names.length ?
            { value: names[nextIndex++], done: false } :
            { value: names[nextIndex++], done: false };
        }
    }
}

let names = ['david', 'john'];
let iter = namesIterator(names);
console.log(iter.next().value); // output david
console.log(iter.next().value); // output john
console.log(iter.next().value); // output undefined
```



## Generator
- similar to iterators
- use \* to denote the function is a generator
- Ex.
```js
function* namesGenerator(names) {
    for (name in names) {
        yield name;
    }
}

let names = ['David', 'John'];
let generator = namesGenerator(names);

console.log(generator.next().value); // output David
console.log(generator.next().value); // output John
console.log(generator.next().value); // output undefined
```



## Destructuring Assignment
```js
// array destructuring assignment
let a, b, rest;
[a, b, ...rest] = [1, 2, 3, 4, 5, 6];

console.log(a); // output 1
console.log(b); // output 2
console.log(rest); // output [3, 4, 5, 6], an array of the rest

// object destructuring assignment
let name, age, gender;
let david = {name: 'David', age: 19, gender: 'male', weight: 90, height: 180, sayHello: () => console.log('Hello')};
({name, age, gender, ...rest} = david);

console.log(name); // output David
console.log(age); // output 19
console.log(gender); // output {weight: 90, height: 180, sayHello: () => console.log('Hello')}
```