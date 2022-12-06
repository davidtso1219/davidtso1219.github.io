---
title: Udemy React
layout: note_template
---

# Section 13

## Class Based Components

### Intro

- In the past, React doesn't support state in funcitonal components. However, because of the hooks, it is now possible to handle state in funcitonal components.
- That being said, class-based components are not able to use hooks and deal with states in a different way.
- Here is an example of using a class-based component.
- Ex.

```js
// Functional Component
const MyComponent = (props) => {
  return <h1>hello</h1>;
};

class MyComponent extends React.Component {
  render() {
    return <h1>hello</h1>;
  }
}
```

## props

- Now, we can use `this.props` to access the props passed in to the component.
- Ex.

```js
class MyComponent extends React.component {
  render() {
    return <h1>this.props.name</h1>;
  }
}
```

### State & Event

- To use state, we have to use a special property called `state` and use a special method function called `setState`
- It always has to be an object and when update the state object, React will merge the state instead of overwriting the old one.
- And if the new state is depedent on the previous state, pass a callback function like in functional components.
- Make sure to call `super()` in the constructor method.
- Ex.

```js
class MyComponent extends React.component {
  constructor() {
    super();
    self.state = {
      name: "David",
      age: 18,
      isInCollege: false,
      otherStates: [],
    };
  }
  toggleIsInCollege() {
    this.setState((prevState) => {
      return {
        isInCollege: !prevState.isInCollege,
      };
    });
  }
  render() {
    const description = this.state.isInCollege
      ? "not graduated yet."
      : "already graduated";
    return (
      <>
        <h1>this.props.name</h1>
        <p>I am {description}</p>
        <button onClick={this.toggleIsInCollege.bind(this)}>
          Toggle isInCollege
        </button>
      </>
    );
  }
}
```

### Life Cycles

- In class-based components, hooks are not supported, so `useEffect` is not available.
- However, React does have some methods to support different callbacks in different life cycles.
- Ex.
  1. `componentDidMount` and `useEffect(..., [])`
  2. `componentDidUpdate` and `useEffect(..., [someValues])`
  3. `componentDidUnmount` and `useEffect(() => { return ... }, [])`

## Error Boundary

- In JSX, there is no way to do try catch statements in javascript among the JSX components.
- Therefore, we will have to use a class-based component to simulate a try catch in JSX.
- The special life cycle method that is called when any child component throws an error is `componentDidCatch`
- Ex.

```js
const Parent = props => {
    return (
        <ErrorBoundary>
            <Child></Child>
        </ErrorBoundary>
    );
};

const Child = props => {
    throw new Error('dummy error!');
};

class ErrorBoundary extends Component {
    constructor() {
        this.state = {
            hasError: false;
        };
    }
    componentDidCatch(error) {
        console.log(error); // can do whatever we want
        this.setState({ hasError: true });
    }
    render() {
        if (this.state.hasError) {
            return <h1>Something Went Wrong</h1>;
        }
        return this.props.children;
    };
};
```
