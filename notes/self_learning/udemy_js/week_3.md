---
title: Udemy JS
layout: note_template
---

# Section 3



## Get Element in A Document Object
```js
// get element by id
let taskTitle = document.getElementById('task-title');

// get element by CSS selector
let listItem = document.querySelector('ul li');

// get element by class name
let items = document.getElementsByClassName('collection-item');

// get element by tag name
let lists = document.getElementsByTagName('li');

// get elements from a parent element
let unorderListItems = document.querySelector('ul').getElementsByClassName('collection-itmes');
```



## Little Trick to Get Every Odd Element
```js

// change the background color of the odd elements in a list
let listOdd = document.querySelector('ul:nth-child(odd)');
listOdd.forEach(function(li, index) {
    li.style.backgroundColor = '#ccc';
});
```



## Traverse DOM
```js
// get children elements
list.children;

// get the first child element
list.firstChild;

// get the last child element
list.lastChild;

// get the parent element
list.parentElement;

// get next sibling element
list.nextSibling;

// get previous sibling element
list.previousSibling;
```



## Create An Element in DOM
```js
let listItem = document.createElement('li');

// add class
listItem.className = 'list-item';
listItem.classList.add('list-item');

// set id
listItem.id = 'list-item';

// set attribute
listItem.setAttribute('name', 'list-item');

// add a child element to an element
list.appendChild(listItem);

// create a text node and add it to children list
listItem.appendChild(document.createTextNode('Hello World'));
```



## Replace An Element
```js
let parent = document.querySelector('whatever-it-is');
let oldChild = document.querySelector('whatever-it-is');
let newChild = document.createElement('whatever-it-should-be');
parent.replaceChild(newChild, oldChild);
```



## Remove An Element
```js
let parent = document.querySelector('whatever-it-is');
let firstChild = document.querySelector('whatever-it-is:first-child');

// 1.
firstChild.remove();

/// 2.
parent.removeChild(firstChild);
```



## Classes
```js
// see ckasses of an element, ele
ele.className;
ele.classList;

// add a class to the element
ele.classList.add('new-class');

// remove a class from the element
ele.classList.remove('class-to-remove');
```



## Attributes
```js
// get href attribute of an element, ele
ele.getAttribute('href');

// set href attribute of the element
ele.setAttribute('href', 'https://google.com');

// remove href attribute from the element
ele.removeAttribute('href');

// check if the element has href attribute
ele.hasAttribute('href');
```



## Event Object
```js
// get the target element of the event e
let ele = e.target;

// get the type of the event
e.type // could be 'click', 'mouseover', etc.

// get the timestamp of the event
e.timestamp

// get the coords of the client rrelative to the window
e.clientY
e.clientX

// get the coords of the client relative to the target of the event
e.offsetY
e.offSetX
```



## Different Types of Events
1. click
2. dbclick
3. mousedown, mouseup
4. mouseenter, mouseleave[^1]
5. mouseover, mouseout
6. mousemove
7. submit (for **form** only)
8. keydown, keyup, keypress
9. focus, blur (when the client enters or leaves input field)
10. cut, paste, input




## Local Storage And Session Storage
- Local storage will not be cleared until you manullay clear it while session storage will be cleared when the browser is closed.
- Basic operations:
    ```js
    // set items
    localStorage.setItem('name', 'David');
    sessionStorage.setItem('name', 'David');

    // get items from storage
    localStorage.getItem('name');

    // remove from storage
    localStorage.remove('name');

    // clear storage
    localStorage.clear();
    ```



## Example for Storage
```js
document.querySelector('form').addEventListener('submit',
    function(e) {
        const task = document.getElementById('task').value;

        let tasks;

        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        }
        else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));

        alert('Task saved');

        e.preventDefault();
    });
```

[^1]: **mouseenter** and **mouseleave** will not be called if the mouse enters or leaves a child element of the event target, while **mouseover** and **mouseout** will be called even if the mouse enters or leaves a child element of the event target