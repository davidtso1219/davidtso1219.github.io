---
title: Udemy React
layout: note_template
---

# Section 5

## Render List of Data

- In JSX, we can put `{[<Card />, <Card />]}`, and React would render that into two `Card` components
- Therefore, we could use map function to create a list of components to render an list of data.
- Ex.

```js
const Child = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <Card value={item.value} />
      ))}
    </div>
  );
};
```

## Conditional Content

- In JSX, we can't put if statement in brackets, but we could use ternary operator
- Ex.

```js
const Component = (props) => {
    return (
        <div>
        {
            props.items.length === 0 ? <p>No items.</p> :
            props.items.map((item) => <OtherComponent item={item} />))
        }
        </div>
    );
}
```

### A Small Trick, && Operator

- A trick to divide conditioal content to two pieces
- Ex.

```js
const Component = (props) => {
    return (
        <div>
        { props.items.length === 0 && <p>No items.</p> }
        { props.items.length > 0 && props.items.map((item) => <OtherComponent item={item} />)) }
        </div>
    );
}
```
