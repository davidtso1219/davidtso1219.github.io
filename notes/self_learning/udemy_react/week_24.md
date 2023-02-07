---
title: Udemy React
layout: note_template
---

# Section 24

## React Animation

- In react, using css transition or animation is perfectly fine because it has nothing to do with manipulating DOM
- However, there are some limitations and sometimes, it is better to use something called `ReactTransitionGroup`
- We can install it using simply `npm install react-transition-group`

## Transition

- The problem with css transition and animation is that we can't change the display of the element or no transition or animation will be applied
- The component that can help us to animate some components in the HTML with mounting and unmounting
- For `Transition` component, it has a prop called `in`, which should be set to true when the element should be present
- Another two props are `mountOnEnter` and `unmountOnExit`, with which the component will not be mounted when `in` is set to false

### Timeout

- We can also set `timeout` property to set how long the transition from exiting to exited, or entering to entered should be
- Instead of a number, we can set `timeout` property to an object to specify different durations for entering and exiting separately
- Ex.

```js
<Transition in={show} timeout={100}></Transition>
<Transition in={show} timeout={{enter: 400, exit: 1000}}></Transition>
```

### Event

- Sometimes, we want to run something at different stages of the animation
- There are 6 main properties of Transition component where we can pass a callback and it will be executed when the component is at the stage of the animation
  1.  onEnter
  2.  onEntering
  3.  onEntered
  4.  onExit
  5.  onExiting
  6.  onExited

## CSSTransition

- A lot of times when we are using `Transition` component, we will use the state to assign different css classes to the `Transition` component
- Therefore, the library creates another component called `CSSTransition`, and we can assign a prop called `classNames` to a css class and it will assign different class automatically

### Transition vs. CSSTransition

- Transition

```js
// Transition
<Transition in={show} timeout={100}>
{state => {
	const cssClass = state === 'entering' ? 'entering-class' : state === ...;
	return <div className={cssClass}></div>
}}
</Transition>
```

- CSSTransition

```js
// CSSTransition
<CSSTransition in={show} timeout={100} classNames="fade-slide">
  <div></div>
</CSSTransition>
```

```css
.fade-slide-enter {
}
.fade-slide-enter-active {
}
.fade-slide-exit {
}
.fade-slide-exit-active {
}
```

### Customizing CSS Classnames

- Instead of using the default rules of naming the css classes, we can also provide custom CSS classes
- Ex.

```js
// CSSTransition
<CSSTransition
  in={show}
  timeout={100}
  classNames={{
    enter: "",
    enterActive: "ModalOpen",
    exit: "",
    exitActive: "ModalClose",
  }}
>
  <div></div>
</CSSTransition>
```

## TransitionGroup

- When we want to animate an item in a list, we have to use a component called `TransitionGroup` and every children of it must be a `Transition` Component or a `CSSTransition` component
- The default element of the transition group is `div`, but we can also set it to different elements by passing a `component` prop
- Make sure that the `timeout` property is set in child `Transition` or `CSSTransition` component
- Ex.

```js
const List = props => {
  const listItems = props.items.map(item => (
    <CSSTransition key={item.id} classNames="fade" timeout={300}>
      <Item item={item} />
    </CSSTransition>
  ));
  return <TransitionGroup component="ul">{listItems}</TransitionGroup>;
};
```

## Other React Animation External Package

- React Motion: With the start and end stylings, the package will try to apply the real-world physics
- React Move: Handle complex animations to transform from one state to another state
- React Router Transition: Animation when route changes
