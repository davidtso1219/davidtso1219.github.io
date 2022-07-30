---
title: Udemy JS
layout: note_template
---

# Section 9

## Try Catch Finally
- If we don't catch an error, the program will stop running
```js
try {
    null.myFunction(); // is going to throw a TypeError
}
catch (e) {
    console.log(e); // is going to log the TypeError in the console.
} finally {
    console.log('Finally run this regardless of the results');
}
```



## Throw
```js
let user = { email: 'davidtso@gmail.com'};

try {
    if (!user.name) {
        throw new SyntaxError('User has no name');
    }
} catch(e) {
    console.log(e.name); // SyntaxError
    console.log(e.message); // User has no name.
}
```



## Regular Expression (regex)
- surrounded by '/'
- flags:
    1. i = case insensitive
    2. g = global search



### exec
- return an array of matches
```js
let re = /hello/;
let result = re.exec('david hello');
console.log(result); // is going to be an array of matches
```



### test
- return if there is any match
```js
let re = /hello/;
let result = re.test('hello');
console.log(result); // true because hello is in the test string.
```



### match
- return an array of matches
```js
let re = /hello/;
const str = 'hello there';
const result = str.match(re);
console.log(result); // same result as exec, but the caller and callee are switched
```



### search
- return index of the first match or -1 if not found
```js
let re = /hello/;
const str = 'hello there';
const result = str.search(re);
console.log(result); // 0
```



### replace
- return a new string with some or all matches of a pattern
```js
let re = /hello/;
const str = 'hello there';
const newStr = str.replace(re, 'hi');
console.log(newStr); // 'hi there'
```



### Metacharacter
- ^... = must start with...
- ...$ = must end with...
- \. = matches any ONE character
- \* = matches any character one or more times
- ? = optional character (Ex. /gre?a?y/ will matches gry, grey, gray, greay)
- \+ = one or more



### Brackets [] -> Character Sets
- ^ inside bracket means match any character except what is in brackets
- A-Z means match any uppercase letter
- a-z means match any lowercase letter
- 0-9 means match any digit
```js
let re = /gr[ae]y/i;
let result;
result = re.test('grey'); // match
result = re.test('gray'); // match
result = re.test('gry'); // doesn't match
```



### Braces {} - Quantifiers
- {m} means must occur exactly m times
- {m, n} means must occur any amuont of times from m times to n times
- {m, } means must occur at least m times



### Paretheses () - Grouping
```js
let re = /^([0-9]x){3}$/;
const str = '3x3x3x';
let result = re.test(str); // match
```



### Shorthand Character
- \w = word character - alphanumeric or _
- \W = non-word character
- \d = digit character
- \D = non-digit character
- \s = whitespace character
- \b = word boundary (Ex. /Hell\b/ is going to match Hell not but Hello)



### Assertion
```js
let re;
re = /x(?=y)/; // match x only if followed by y
re = /x(?!y)/; // match x only if not followed by y
```



## Blur Event
- 'blur' event will fire if something loses focus