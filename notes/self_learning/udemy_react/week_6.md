---
title: Udemy React
layout: note_template
---

# Section 6

## Dynamic Styling
- There are many ways to accomplish dynamic styling, and the instructor went over three ways.
    1. Using brackets in JSX to create dynamic objects or strings for style or className attributes
    2. Using something called Styled Component to create scoped styled component
    3. Using CSS Module to create scoped stylesheets.

## Dynamic Inline Styling
- Using pure javascript to create dynamic className string or style object
- Ex.
```js
<div style={{ color: !isValid ? 'red' : 'green' }}></div>
// or
<div className={`.class ${!isValid ? '.invalid' : ''}`}></div>
```

## Styled Components
- First, download the styled-components modules using npm: `npm install styled-components`
- Second, move the content from the css for a component, say button to the javascript file
- Third, replace the class name with &, and move the properties belong to class of & to a level higher
```js
import styled from 'styled-components';

const Button = styled.button`
    // styling for button

    &:focus {
        // for button:focus
    }

    &:hover {
        // for button:hover
    }
`;
```

## CSS Modules
- First, rename file type of the css file to `module.css`
- Second, add `import style from 'SomeModules.module.css'`
- Third, change the class names of all classes in the returned JSX as well as the css file to {styles.class}
- For those classes that have '-' in it, just use `styles['some-class']` like this instead;
- Ex.
```js
// originally
import 'Button.css';

const Button = props => {
    return (
        <div className={`button ${!isValid && '.isvalid'}`}></div>
    );
};

// with module CSS
import styles from 'Button.module.css';

const Button = props => {
    return (
        <div className={`${styles.button} ${!isValid && styles.invalid}`}></div>
    );
};
```