---
title: Udemy JS
layout: note_template
---

# Section 2



## Console
We have different way to show messages in the console. Here are some examples:
```js
console.log(); // log something to the console
console.warn(); // warn something in the console
console.error(); // error something in the console
console.clear(); // clear the console
console.table(object); // visualize the object as a table
```

We can even time some parts of the program.
```js
// when the program ends, the console will show how long the program takes
console.time(someIdentifierString);
    // some program here
console.timeEnd(someIdentifierString);
```



## Const
In javascript we can't resassign values to a const variable. For example,
```js
const birthYear = 2002;
birthYear = 2022; // this will raise an error.

const person = {'name': 'David', 'birthYear': 2002};
person = {'name': 'David', 'birthYear': 2022}; // this will also raise an error.
```

But we can modify properties of the objects.
```js
const person = {'name': 'David', 'birthYear': 2002};
person.birthYear = 2022; // this is fine
```



## Data Types:

Primitive Data Types:
- String, Number, Boolean, Null[^1], Undefined, Symbols

Reference Data Types:
- Array, Object, Functions, etc.



## Type Conversion
Pretty similar to Python
```js
let val = '5';
console.log(typeof Number(val)); // prints number
```



## Useful Built-In Functions for String
1. `indexOf(c)` find the index of the first occurrence of c
2. `lastIndexOf(c)` find the index of the last occurrence of c
3. `slice()` see the following examples
    ```js
    let name = 'william'
    console.log(val.slice(0, 4)); // prints 'will' (from the first character to the fourth character)
    console.log(val.slice(-3)); // prints 'iam' (from the last to the third last)
    ```



## Template String (Template Literal)
Ex.
```js
let name = "David";
`Hello ${name}` // should be 'Hello, David'
let name = "John";
`Hello ${name}` // should be 'Hello, John'
```



## Useful Built-In Functions for Arrays
1. `isArray()` check if a variable is an array
2. `indexOf()` find the index of a value in an array
3. `push(), pop()` push and pop the last value from the array
4. `unshift(), shift()` unshift and shift the first value from the array
5. `splice()` see the following example
    ```js
    let numbers = [1, 2, 3, 4, 5, 6];
    numbers.splice(0, 3); // print [1, 2, 3]
    numbers // will only be [4, 5, 6]
    ```
6. `concat()` concat with another array (+ will not work)
7. `find(filterFunction)` find values where `filterFunction(item)` will return true



## Date and Time
```js
let birthday = new Date('12-19-2002'); // will be my birthday

// we can get date, day, month, year, etc of the date object
birthday.getMonth(); // will return December
```



## Test If A Variable Is Undefined
```js
if (typeof val !== 'undefined') {
    console.log('val is undefined');
} else {
    console.log('val is defined');
}
```



## Functions
```js
// functin declarations
function greet(firstName = 'John', lastName = 'Doe') {
    return `Hello ${firstName} ${lastName}`;
}

// function expressions
const square = function(x) { return x * x; }

// property methods
const todo = {
    add: function() {
        console.log('Add todo');
    },
    edit: function() {
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function() {
    // delete ...
}
```

## Loop
```js
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Nancy'},
    {id: 3, name: 'Peter'},
    {id: 4, name: 'Jamie'},
];

// forEach
cars.forEach(function(car, index, cars) {
    console.log(car);
});

// map
const ids = users.map(function(user) {
    return user.id;
}));

// for in loop
let user = users[0];
for (let x in user) {
    console.log(`${x} : ${user[x]}`); // will loop through the object and print its attributes
}
```

## Window
```js
window.reload();
window.history.go(-1); // go back to the last website in the history.
```

[^1]: An object is a reference, or a pointer. Null is a null pointer, which is why it is an Object.
