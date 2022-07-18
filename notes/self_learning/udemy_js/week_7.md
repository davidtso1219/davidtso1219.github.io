---
title: Udemy JS
layout: note_template
---

# Section 7

## Synchronous Code
```js
let posts = loadPostsSync();
// ...wait until posts are fetched.
// ...do something with posts.

doTheNextThing(); // has to wait for posts to be fetched
```



## Asynchronous Code
```js
loadPostsAsync(function() {
    // ...wait until posts are fetched.
    // ...do something with posts.
});

doTheNextThing(); // does not have to wait for posts to be fetched
```



## A Few Ways to work with async code
1. Callbacks
2. Promises
3. Async/Await



## AJAX
- Asynchronous Javascript & XML
- Set of web technologies
- Send and receive data asynchronously
- Does not interfere with the current page
- JSON has replaced XML for the most part

![image](/assets/images/udemy_js/week_7/ajax.png)



## API
- Application Programming Interface
- Contract provided by one piece of software to another
- Structured request and response
- API is a very general term to describe a contract to use a software



## REST APIs
- Representational State Transfer
- Architecture style for designing networked applications
- Relies on a stateless, client-server protocol, e.g. HTTP



## HTTP Requests
1. GET: retrieve data
2. POST: submit data
3. PUT: update a specified resource
4. DELETE: delete a specified resource



## Callback Functions
- Functions that can be passed and called in another function
- Ex:

```js
function createPost(post, callback) {
    setTimeout(function() {
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts() {
    setTimeout(function() {
        posts.forEach(function(post) {
            output += post.body;
        })
        console.log(output);
    }, 1000);
    let output = '';
}

let post = {
    title: 'Title 1',
    body: 'Body 1'
}
createPost(post, getPosts); // so getPosts will wait and be called until createPost finishes
```



## Promises
```js
function createPost(post, callback) {
    return new Promises(function(resolve, reject) {
        setTimeout(function() {
            posts.push(post);

            let error = ...; // some error
            if (!error) {
                resolve(); // will call the callback passed in then()
            }
            else {
                reject('Error: Something went wrong'); // will call callback passed in catch()
            }
        }, 2000);
    });
}

function getPosts() {
    setTimeout(function() {
        posts.forEach(function(post) {
            output += post.body;
        })
        console.log(output);
    }, 1000);
    let output = '';
}

let post = {
    title: 'Title 1',
    body: 'Body 1'
}
createPost(post)
.then(getPosts)
.catch(function(err) {
    console.log(err);
});
```



## Fetch
```js
document.getElementById('btn').addEventListener('click', getText);
function getText() {
    fetch('test.txt')
        .then(function(res) {
            return res.text();
        })
        .then(handleErrors) // If there is an http error, it will not fire off .catch automatically.
        .then(function(data) {
            console.log(data);
        })
        .catch(function(error) {
            console.log(error);
        });
}

function handleErrors(res) {
  if (!res.ok) throw new Error(res.error);
  return res;
}
```



## Arrow Functions
```js
let sayHello;

// original way
sayHello = function() {
    return 'Hello';
}

// arrow function
sayHello = () => {
    return 'Hello';
}

// one line function doesn't need braces
sayHello = () => 'Hello';

// we have to do this to return object
sayHello = () => ({msg: 'Hello'});

// arrow function with parameters
sayHello = (firstName, lastName) => `Hello ${firstName} ${lastName}`;

// arrow function with one parameter doesn't need braces
sayHello = name => `Hello ${name}`;
```



### Another Example
```js
const users = ['David', 'John', 'Jamie'];
let nameLengths;

// original way
nameLengths = users.map(function(name) {
    return name.length;
});

// shorter
nameLengths = users.map((name) => {
    return name.length;
});

// even shorter
nameLengths = users.map(name => name.length));
```



### Use arrow functions in the [Fetch](#fetch) example above
```js
document.getElementById('btn').addEventListener('click', getText);
function getText() {
    fetch('test.txt')
        .then(res => res.text())
        .then(handleErrors) // If there is an http error, it will not fire off .catch automatically.
        .then(data => console.log(data)})
        .catch(error => console.log(error));
}

function handleErrors(res) {
  if (!res.ok) throw new Error(res.error);
  return res;
}
```



## Async & Awaits



### Difference between an async and a normal function
- Original Way

```js
function sayHello() {
    return 'Hello';
}
```

- With Async

```js
async function sayHello() {
    return 'Hello'; // this is actually returning a promises
}
```



### Examples
- Original Way

```js
function get(url) {
    return new Promises((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(resolve(data))
            .catch(reject(data));
    })
}

get('https://jsonplaceholder.typicode.com/users')
    .then(users => console.log(users));
```


- With Async

```js
async function get(url) {
    // await response of the fetch call
    const res = await fetch(url);

    // only proceed when the first await is over
    // await data of the json conversion
    const data = await res.json();

    // only proceed when the second await is over
    return data;
}

get('https://jsonplaceholder.typicode.com/users')
    .then(users => console.log(users));
```