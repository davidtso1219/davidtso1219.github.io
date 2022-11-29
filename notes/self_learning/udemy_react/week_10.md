---
title: Udemy React
layout: note_template
---

# Section 10

## Effect, or "Side Effect"

- Side effects are jobs that we don't want react to do.
- Main job of react: render UI and react to user input.
- Everything other than these are side effects such as managing browser storage, send http request, set manage timers, etc.
- We want to do so to prevent potential issues like infinite loops.

## useEffect

- A function that help us handle effect, it will only be called when its dependencies change
- Format: `useEffect(callback, [depedencies1, depedencies2])`
- Ex.

```jsx
// Before
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const localStorageIsLoggedIn = localStorage.getItem("isLoggedIn");
  if (localStorageIsLoggedIn == "1") {
    // this will potentiall cause an infinite loop
    // because the set function will rerender
    // and component and keep calling the set function again and again.
    setIsLoggedIn(true);
  }

  // dummy setters and return statement
}

// After
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const localStorageIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (localStorageIsLoggedIn == "1") {
      // this will not be called again when the component is rerendered
      // because no dependencies are changed.
      setIsLoggedIn(true);
    }
  }, []);

  // dummy setters and return statement
}
```

### Debouncing in useEffect Hook

- Debouncing is to limit the rate of executions of a particular functions.
- For example, don't check the validity of the form on every keystroke.
- In useEffect hooks, we can create a cleanpup function as a return function of the first argument of useEffect.
- The cleanpup function will be called before the next execution of the effect callback.
- Ex.

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    setFormIsValid(checkIfValid(enteredEmail, enteredPassword));
  }, 500);

  // return callback: cleanup function to be called before next execution
  return () => {
    // clear the timer so that any previous timer of a new keystroke will be cleared
    clearTimeout(timer);
  };
}, [enteredEmail, enteredPassword]);
```

### Different Effect cycles

1. When no dependencies, not even an empty array (everything is depedency)
2. When dependencies array are empty (nothing is depedency)
3. When dependencies are not empty (only specified states are dependencies)

```jsx
// 1.
useEffect(() => {
  // will be called everytime the component is rerendered
  do_something();

  // will be called everytime before the component is rerendered
  return clean_up_func;
});

// 2.
useEffect(() => {
  // will be called only when the component is created, i.e. mounted
  do_something();

  // will be called only when the component is destroyed, i.e. unmounted.
  return clean_up_func;
}, []);

// 3.
useEffect(() => {
  // will be called everytime the a dependency is changed
  do_something();

  // will be called everytime next time a dependency is changed
  return clean_up_func;
}, [someState]);
```

## useReducer

- Sometimes, you have more complicated state, like multiple states, multiple dependencies, or multiple ways to change state.
- A more powerful way to manage state than useState
- Format: `const [state, dispatch] = useReducer(reducer, initialState, initState)`
- Ex.

```js
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: isEmailValid(action.value) };
  } else if (action.type === "USER_BLUR") {
    return { value: state.value, isValid: isEmailValid(state.value) };
  } else {
    return { value: "", isValid: false };
  }
};

const Form = (props) => {
  const [emailState, dispatchEmail] = useReducer(
    emailReducer,
    { value: "", isValid: false },
    null
  );

  // in some event listeners...
  const someListeners = (e) => {
    dispatchEmail({ value: e.target.value, type: "USER_INPUT" });
  };
};
```

### useState vs useReducer

- You should start with `useState` first and if the states are getting too complicated and some of them are related to one another, maybe it is better to use `useReducer` to manange them.
- useReducer is more powerful and it could use a function outside the component scope to deal with states.

## Context

- When an application becomes larger, it would be harder to pass states from a component to another component, e.g. a cousin component.
- Context can be used as a state in the scope of the application.
- Context is can be stored in `src/context`

```js
// in AuthContext.js
import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
```

### Context Provider

- Wrap a component in a provider so everything in the provider can have the access to the context.
- There are two ways to access the context: using context consumer or context hook
- Ex.

```js
// assuming the context is shared application wise
// in App.js
import AuthContext. { createContext, useState } from "./AuthContext.js";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={isLoggedIn: isLoggedIn}>
      {isLoggedIn && <Home />}
      {!isLoggedIn && <Login />}
    </AuthContext.Provider>
  );
};
```

### Context Consumer

- Use consumer in order to have the access to the context in any child elements of a wrapped componenet by the context provider.
- Ex.

```js
const Body = props => {
  return (
    <AuthContext.Consumer>
      {ctx => {
        return (
          // original jsx code to return in this child component
          // ctx is now the authentication context
        );
      }};
    </AuthContext.Consumer>
  );
};
```

### Context Hook

- A more elegant way to access the context
- Ex.

```js
import React, { useContext } from 'react';

import AuthContext from '../context/AuthContext.js';

const Body = props => {
  const ctx = useContext(AuthContext);

  return (
    // normal jsx code
  );
};
```

### Context Provider

- Creating another component to manage the context more elegantly
- Ex.

```js
// in AuthContext.js

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLoginHandler, () => {},
  onLogoutHandler, (email, pwd) => {}
});

const AuthContextProvider = props => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLoginHander = e => {
    setIsLoggedIn(true);
  };

  const onLogoutHandler = e => {
    setIsLoggedIn(false);
  };

  // and anything that is related to login state should be moved here

  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn,
      onLoginHandler: onLoginHandler,
      onLogoutHandler: onLogoutHandler}}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

// in App.js
const App = () => {

  const ctx = useContext(AuthContext);

  return (
    <AuthContextProvider>
      <main>
        {ctx.isLoggedIn && <Home />}
        {!ctx.isLoggedIn && <Login />}
      </main>
    </AuthContextProvider>
  );
};
```

### Context Limitation

- Context is not optimized for frequent changes
- Context also should not replace all component communications and props

## Rules of Hooks

1. Only call hooks in React functions, i.e. React Component Function, or Custom Hooks
2. Only call hooks at the top level, i.e.
3. Don't call hooks in nested function
4. Don't call hooks in any block statement like `if` or `for`
5. Add everything you refer in useEffect to dependencies

## Ref on Custom Component

- Sometimes, we would want to use ref on a component we create.
- In this case, we would want to use a technique called ref forwarding.
- And we can return functions inside the child component to its parent component.
- Ex.

```js
const Parent = (props) => {
  const childRef = useRef();

  const someListener = (e) => {
    childRef.current.run();
  };

  return (
    <>
      <Child ref={childRef} />
    </>
  );
};

const Child = React.forwardRef((props, ref) => {
  const childFunc = () => {
    // do something
  };

  useImperativeHandle(ref, () => {
    return {
      run: childFunc,
    };
  });

  return <div></div>;
});
```
