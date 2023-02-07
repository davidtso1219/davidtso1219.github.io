---
title: Udemy React
layout: note_template
---

# Section 18

## Redux

### Intro

- Redux is a management system used for cross components or app-wide state
- Redux solves the a few major problems that React Context has
  1. Performance (React Context is not that good at handling frequent changes)
  2. Nested JSX code (with the application grows and more and more app-wide contexts)
- In fact, Redux can be used in any javascript project with different runtime like node.
- So for react projects, we should install a package called react-redux.

### Core Concept

- The core concept of Redux is to have a **central store** that contains all the data/states, the **subscribers/components** will **subscribe** to the data store, and the reducer function will be called to modify the store when the store **dispatch** an action.
- Therefore, **NEVER** mutate the state passed into the reducer function.

### Example

```js
// in store/index.js
import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore();

export default store;
```

```js
// in index.js
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

```js
// in components/counter.js
import { useSelector, useDispatch } from "react-redux";

const Counter = props => {
  const dispatch = useDispatch();

  // this is how you subscribe to a state in the store
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
```

### Example with Class Based Components

```js
// in components/Counter.js
class Counter extends Component {

  incrementHandler = () => {
    this.props.increment();
  };

  decrementHandler = () => {
    this.props.decrement();
  };

  toggleCounterHandler = () => {};

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.counter}</div>
        <div>
          <button onClick={this.incrementHandler}>Increment</button>
          <button onClick={this.decrementHandler}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStatetoProps = state => {
  return {
    counter: state: counter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" })
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Counter);
```

### Challenges

- If working with multiple states in redux, the reducer needs to return a new state that is going to **_overrite_** the existing state. Therefore, we have to make sure to include all other attributes in returned state objects, which will lead to longer and longer reducer functions.
- Another challenge is the action type, it is extremely easy to mistype the action in bigger projects that use the dispatch fucntions in all different places.
- Therefore, a library called **React Toolkits** can be used to help with these challenges.

## Redux Toolkits

- One special tool called `createSlice` is a efficient way to create a _slice_ of the store, say Counter, so that we can modularize different slices of the entire context store.
- To create a slice, we need to do the following:
  1. give the slice a name
  2. give the slice an initial state
  3. give the slice a reducers object whose attributes are methods to be called so we don't need a lot of if statement for all different actions.
- After creating a slice, use `configureStore` from instead of `createStore` to _merge_ different slices into a store.
- To dispatch in other components, call the dispatch function with an argument of `slice.actions.action(payload)`.
- And whatever you pass in as the payload will be the payload argument you see in the reducer method.
- For example, to called the increase action in `counterSlice`, call `dispatch(counterActions.action.increment(10))`.
- Ex.

```js
// in store/index.js
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: state => {
      state.counter++;
    },
    decrement: state => {
      state.counter--;
    },
    increase: (state, action) => {
      state.counter += action.payload;
    },
    toggle: state => {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
```

```js
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/index";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
```

### Key Differences & Reminders

- For each reducer functions of the slice, we can modify the state object directly because the toolket will do the deep copy work behind the scene so we don't need to return a new state with all states from other slices.
- When using redux without the toolkits, we have to create unique identifiers ourselves so that we can call the correct part of the reducer function. However, with `slice.actions`, we don't need to worry about the identifier because the redux toolkit will figure out the identifier behind the scene.

### Multiple Slices

- Everything about creating a slice is the same, the only differences are how to configure the store and how to access the state.
  1. To configure the store, instead for passing the reducer directly, pass an object with unique keys point to different slices.
  2. To access the state, instead of directly access it via attribute, access the slice via the slice key you give when configuring the store and _then_ access the state via the state key in that slice.
- Ex.

```js
// in store/index.js
import { configureStore } from "'@reduxjs/toolkit'";
import counterReducer from "./counter.js";
import authReducer from "./auth.js";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
```

```js
// in components/counter.js
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter); // access the slice and then the state of that slice.
  const show = useSelector(state => state.counter.showCounter);

  // ...everything remains the same
};

export default Counter;
```
