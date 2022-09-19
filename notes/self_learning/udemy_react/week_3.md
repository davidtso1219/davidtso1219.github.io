---
title: Udemy React
layout: note_template
---

# Section 3

## Create React App

```sh
npx create-react-app my-app
cd my-app
npm start
```

## JSX

- Javascript XML
- JSX allows us to write HTML in React
- Ex.

```js
function MyComponent() {
  return;
  <div className="my-component">
    <OtherComponent></OtherComponent>
  </div>;
}

export default MyComponent; // to allow other places to use this component
```

## CSS

- To include a css file, just add the following line of code at the top of the file

```js
import "./MyComponent.css";
```

## Basic Structure

```js
├── src/
│   ├── components/ // folder for all components
│   │   ├── MyComponent1
│   │   ├── MyComponent2
│   ├── App.js // main component
│   ├── index.js // where react render the main component
│   ├── index.css // main css file
```

## JSX behind The Scene

- In the past, jsx is not available in js files.
- We need to return something like this:

```js
import React from "react";
return React.createElement("tag", { className: "classes" }, children);
```

- Ex.

```js
return (
  <div className="App">
    <h2>Let's get started!</h2>
    <Expenses items={expenses} />
  </div>
);

return React.createElement(
  "div",
  { className: "App" },
  React.createElement("h2", {}, "Let's get started!"),
  React.createElement("Expenses", { items: expenses })
);
```

## props

- `props` refers to the attributes that passed to a component as an argument of the component function
- it could be any name but the `props` is what most people use
- Ex.

```js
function App() {
  return;
  <div>
    <Name firstName="david" lastName="Tso" />
  </div>;
}

function Name(props) {
  return;
  <div>
    <span className="some-classes">props.firstName</span>
    <span className="some-classes">props.lastName</span>
  </div>;
}
```

## props.className

- Get the className when the component is created
- Ex.

```js
function MyComponent(props) {
  const classes = props.className;
  console.log(classes);
}

function OtherComponent(props) {
  return (
    <Card className="sample-class"></Card> // will log 'sample-class'
  );
}
```

## props.children

- A default property of the component
- Represents what is between the opening and closing tags

```js

import Card from 'components/Card'
import Name from 'components/Name'

function App() {
    return (
        <div>
            <Card>
                <Name firstName="david" lastName="tso" />
            </Card>
        </div>
    );
}

function Card(props) {
    const children = props.children; // would be <Name firstName="david" lastName="tso" />
    return ...;
}
```
