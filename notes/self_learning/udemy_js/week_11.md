---
title: Udemy JS
layout: note_template
---

# Section 11



## Module Pattern
- Basic structure:
```js
(function() {
    // declare private variables and functions

    return {
        // return public variables and functions
    }
})();
```



## Revealing Module Pattern
- The same as module pattern, except in the return object, we are mapping the function literal using its name
- Ex.
```js
const PeopleCtrl = (function() {
    let data = [];

    function add(person) {
        data.push(person);
    }

    function get(id) {
        return data.find(person => {
            return person.id === id;
        });
    }

    return {
        add: add,
        get: get
    }
})();
```



## Singleton Pattern
- A pattern that creates exactly one instance of an object
- Repeated call will keep returning the same instance
- Ex.
```js
const Singleton = (function() {
    let instance;

    function createInstance() {
        const object = new Object('Object instance!!!');
        return object;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})()
```



## Factory Pattern
- A pattern that creates objects based on input
- Ex.
```js
function PizzaFactory() {
    this.createMember = function(client, type) {
        let pizza;

        if (type === 'beef') {
            pizza = new BeefPizza(client);
        }
        else if (type === 'cheese') {
            pizza = new CheesePizza(client);
        }

        pizza.type = type;
        pizza.define = function() {
            console.log(`This ${this.type} pizza for ${this.client}`);
        }

        return pizza
    }
}
```



## Observer Pattern
- A pattern that forms a subject-observe relationships where a subject could fire something in its observers
- Ex.
```js
class EventSubject {
    constructor() {
        this.observers = []
    }

    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(item => {
            if (item !== fn) {
                return item;
            }
        });
        console.log(`You are now unsubscribed to ${fn.name}`);
    }

    fire() {
        this.observers.forEach(item => item.cal());
    }
}
```



## Mediator Pattern
- A pattern that communicates (mediate) between instances of different classes.
- Ex.
```js
class User {
    constructor(name) {
        this.name = name;
        this.chatroom = null;
    }

    send(mes, otherUser) {
        this.chatroom.send(message, this, otherUser);
    }

    receive(mes, otherUser) {
        console.log(`${otherUser.name} to ${this.name}: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        users[user.name] = user;
        user.chatroom = this;
    }

    send(mes, from, to) {
        if (to) {
            to.receive(mes, from);
        }
        else {
            for (key in users) {
                if (users[key] !== from) {
                    users[key].receive(mes, from);
                }
            }
        }
    }
}
```
