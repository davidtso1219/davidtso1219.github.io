---
title: Udemy JS
layout: note_template
---

# Section 15

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
import Provider from "react-redux";

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

const Counter = (props) => {
  const dispatch = useDispatch();

  // this is how you subscribe to a state in the store
  const counter = useSelector((state) => state.counter);

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
