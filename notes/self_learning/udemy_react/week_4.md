---
title: Udemy React
layout: note_template
---

# Section 4

## Event Listeners

- For event listeners, we just need to add an attribute to the element.
- The name of the attribute will be on + the type of the event (the first letter has to be capital)
- Ex.

```js
const clickHandler = (e) => {
    ...
}

const MyComponent = (props) => {
    return (
        <div>
            <button onClick={clickHandler}></button>
        </div>
    )
}
```

## State

- We can use the method, useState, to create a reactive component.
- React will rerender the component when the variable is reset by the set method.
- Ex.

```js
const MyComponent = (props) => {
  const [name, setName] = props.name;
  const clickHandler = (e) => {
    setName("david"); // will set the name to david and rerender the component
  };
  return (
    <div>
      <p>{name}</p>
      <button onClick={clickHandler}></button>
    </div>
  );
};
```

## New State That Depends on Previous State

- When a new state of a component is dependent on its previous state, we should use a function form
- Ex.

```js
const [counter, setCounter] = useState(1);
setCounter((prevCounter) => prevCounter + 1);
```

## props.onMyEvent or Two-Way Binding

- We can pass function as an attribute to the component
- We can pass values from component to its parent component and update parent state
- Ex.

```js
const Child = (props) => {
  const clickHandler = (e) => {
    props.onSaveChildValue(e.target.value); // pass the value back to parent
  };

  return (
    <div>
      <label>Child Value</label>
      <input type="text" />
      <button onClick={clickHandler}></button>
    </div>
  );
};

const Parent = (props) => {
  let [childValue, setChildValue] = useState("");

  const saveChildValueHandler = (newValue) => {
    setChildValue(newValue); // rerender this component when new child value is sent from Child
  };

  return (
    <div>
      <Child onSaveChildValue={saveChildValueHandler} />
      <OtherComponent value={childValue} />
    </div>
  );
};
```
