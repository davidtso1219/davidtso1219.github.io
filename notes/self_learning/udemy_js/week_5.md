---
title: Udemy JS
layout: note_template
---

# Section 5



## ES5 OOP



### Constructor
```js
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
}

let john = new Person('John', 'Tso', '2008/04/19');
```



### Prototype
Sometimes, some attributes of an object does not depend on the arguments passed into the constructor.
So we don't necessarily want to define it every time we create a new object. Instead, we define the
attributes in *prototype*. This can help us define as little as possible when creating a new object.

#### Ex.
```js
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
    numLegs: 4
};
```



### Inheritance
```js
function Animal() {}

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
}

function Dog(name) {
    this.name = name;
}

// 1. We can create an object and assign it to the prototype
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    __proto__: Animal.prototype
}

// 2. Use Object.create()
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.numLegs = 4;
```



## ES6 OOP



### Constructor
```js
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hi, my name is ${this.firstName} ${this.lastName}.`
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    static staticMethod() {
        // ...
    }
}
```



### Inheritance
```js
class Customer extends Person {
    constructor(firstName, lastName, phone, memberships) {
        super(firstName, lastName);

        this.phone = phone;
        this.memberships = memberships;
    }
}
```