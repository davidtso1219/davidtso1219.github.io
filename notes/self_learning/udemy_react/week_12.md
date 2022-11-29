---
title: Udemy React
layout: note_template
---

# Section 12

## What Does React Do

1. React only knows how to work with components. It does **NOT** know to work with the browser.
2. For a component, React tracks of three different types of data.
   1. State - Internal data
   2. Props - Data passed from parent
   3. Context - Component-wide data
3. React will run the component function and compare the new returned component with the previous one and **submit the difference to ReactDOM to update the actual DOM.**

## What Does React DOM do

1. ReactDOM is the **web interface** of react.
2. React will take care of the component and ReactDOM will take care of the **actual rendering work** on browsers.

## How Do React and React DOM Work Together

- React determines how the components currently look like and how they should look like. (Re-evaluate when states change)
- React DOM receive the differences and manipulate the real DOM. (Re-render if necessary)

## React.memo()

- When a component is reevaluated, every of its children will be reevaluated, too. This could be inefficient if any of them don't need to be re-evaluated. Therefore, `React.memo` can help improve the efficiency.
- Only thing to do is to add `React.memo` around the export default statement of the component, and the component will only be re-evaluated when anything in `props` changes.
- Ex.

```js
const Parent = props => {
    return (<Child allow={true}/>); // Child will not be reevaluated because props is always the same: {allow: true}
};

const Child = props => {
    return ();
};

export default React.memo(Child);
```

## useCallback

- One problem when using `React.memo` is that when comparing `props`, React use javascript's strict equality.
- Therefore, the same function in a component will be treated as two different function objects when the component is re-evaluated.
- To solve this problem, use the hook `useCallback` to create a constant function pointer.
- The hook takes another list argument called dependencies: if any dependency is changed, it will recreate the function object because the function has actually changed.
- Ex.

```js
const Component = props => {
    const [state, setState] = useState(false);
    const [allowToggle, setAllowToggle] = useState(true);

    // with this the callback would be treated like a constant if allowToggle is not changed
    // and the Button components will not be reevaluated if not needed
    const toggleState = useCallback(() => {
        if (allowToggle) {
            setState(prevState => !prevState);
        }
    }, [allowToggle]);

    return (
        <>
            <Button onClick={toggleState}>Toggle</Button>
            <Button onClick={allowToggle}>Allow Toggle</Button>
        </>
    );
};

const Button => props => {};

export default React.memo(button);
```

## How State Works

- When calling the set functions returned by `useState` hook, React does **NOT** udpate the state instantly.
- Instead, React schedules a `state update` and will update the state when it decides to do so. But usually this happens too fast for human to react, so it seems to be instant.
- This is exactly why we need to pass in a callback function when calling the set funcitons.
- Sometimes, react will put all some state updates into a batch if they are scheduled all in an scynchronous block.
- Ex.

```js
const navHandler = (navPath) => {
  setCurrNavPath(navPath);
  // States are not updated here
  setDrawerIsOpen(false);
};
```

## useMemo

- Sometimes, calculating a variable or a state would be time consuming and it will slow down the reevaluation and rerender processes.
- Therefore, we want to use the hook `useMemo` to memoize the variable or the state.
- The hook takes another list argument called dependencies: if any dependency is changed, it will rerun the callback and use the returned value as the new value or new state.
- Ex.

```js
const component = (props) => {
  const [num, setNum] = useState(1);
  const doubleNum = useMemo(() => slowFunc(num), [num]);

  const onClickHandler = (e) => {
    setNum((prevNum) => prevNum * 2);
  };

  return <Button onClick={onClickHandler} />;
};
```
