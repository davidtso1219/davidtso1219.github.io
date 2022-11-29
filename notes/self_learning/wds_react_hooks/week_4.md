---
title: Web Dev Simplified React Hooks
layout: note_template
---

# useRef

## Description

- This hook has two main functions:
  1. To create a state variable that will not rerender the component if updated.
  2. To have the reference to the element in the return JSX object.

## Usages

### Usage # 1

```js
const App = () => {

    const [name, setName] = useState('');
    const renderCount = useRef(0);

    // no dependencies => runs everytime the component renders
    useEffect(() => {
        renderCount.current = renderCount.current + 1
    });

    return (
        <input value={name} onChange={e => setName(e.target.value)}/>
        <h1>I render {renderCount} times</h1>
    );
}
```

### Usage # 2

```js
const App = () => {
  const inputRef = useRef();
  const [name, setName] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const focus = e => {
    inputRef.current.focus();
  };

  return (
    <>
        <input ref={inputRef} value={name} onChange={updateName} />);
        <div>My name is {name}</div>
        <button onClick={focus}>Focus</button>
    </>
};
```

## Reminder

- Make sure you are not abusing ref by doing DOM manipulation like appendChild or change the value.
