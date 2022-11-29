---
title: Udemy React
layout: note_template
---

# Section 9

## JSX Limit Workaround

- Wrapping two or more elements in a `div` tag would result in a lot of unnecessary `div` elements
- There are a few better workarounds
  1. create a Wrapper component that return `props.children` immediately
  2. use `React.Fragment` or empty tag, i.e. `<></>`

## Portal

- Some components are created by a component but are supposed to be a higher level component.
- For example, a modal might be created by a form component, but the modal should cover the whole application.
- Hence, it would make more sense to be at the highest level, rather than a child component of the form.
- This action is to "portal" the child component to other places.

### How to use a portal

- In `index.html`

```html
<div id="overlay-root"></div>
<div id="root"></div>
```

- In `Form.js`

```js
const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
    </Card>
  );
};

const Form = props => {
    return (
    {
        ReactDOM.createPortal(
            <ModalOverlay/>,
            document.getElementById('overlay-root')
        )
    }
    );
};

```

## Refs
- Sometimes, we just want to read values from some DOM elements, and using states would be quite an overkill to achieve that.
- Therefore, we could use ref to refer to a DOM element
- Ex.
```js
import { useRef } from 'react';

const MyComponent = props => {

    const nameInputRef = useRef();
    const clickHandler = e => {
        console.log(nameInputRef.current.value); // will log the value in the input element
    };

    return (
        <div>
            <input id='username' type='text' ref={nameInputRef}/>
            <button onClick={clickHandler}>Click Me</button>
        </div>
    );
};
