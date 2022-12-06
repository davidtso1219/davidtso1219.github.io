---
title: Udemy React
layout: note_template
---

# Section 19

## Redux Reducer with Async Operations

- Redux reducers are pure functions and should not perform any side effects like asynchronous operations.
- Side-effects can be executed in two different places
  1. Components function using `useEffect`
  2. Inside the **action creators**

### Use `useEffect`

- Let's say we want to update the cart on the backend whenever it is updated. Instead of adding the async operations in the reducer function, we could use `useEffect` to send an HTTP request.
- Ex.

```js
const App = props => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);

  useEffect(() => {
    // send http request...
  }, [cart, dispatch]);

  return ();
};
```

### Use Action Creator Function

- Action Creator is what we call in `dispatch`, we create an action object and pass to the reducer function.
- However, in a custom action creator function, we want to create a _thunk_ rather than a function that returns the action object immediately.
- A thunk is a function that returns another callback function, which will be called by redux toolkit and that return callback function will eventually return the action type.
- Ex.

```js
// in App.js
const App = props => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);

  useEffect(() => {
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return ();
};
```

```js
// in store/cart.js
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.showPending(payload));

    // send http request here
    const sendRequest = async () => {
      const res = fetch(...);

      if (!res.ok) {
        throw new Error('something went wrong');
      }
    };

    try {
      await sendRequest();
      dispatch(uiActions.showSuccess());
    }
    catch (error) {
      dispatch(uiAcitons.showError())
    }

  };
};
```

## Redux DevTools

- Best Redux tool for react projects using Redux
