---
title: Web Dev Simplified React Hooks
layout: note_template
---

# useReducer

## Description

- The hook `useReducer` is used for handling more complex states.
- The hook takes two arguments, a reducer callback and a initial state object.
  1. reducer - a callabck that takes two arguments as well
     1. state - previous state object
     2. action - whatever passed into the dispatch callback (see more about dispatch callback below)
  2. initial_state - initial state object
- The hook returns two values
  1. state - current state object
  2. dispatch - a callback that takes an argument action and will call reducer with that action

## Usage

- In `App.js`

```js
ACTIONS = {
  ADD_TODO: "add_todo",
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, createNewTodo(action.payloud.name)]

    case ACTIONS.REMOVE_TODO:
      return todos.filter(todo => todo.id !== action.payloud.id)

    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payloud.id) {
          return {...todo, completed: !todo.completed};
        }
        return todo;
      });
  }
};

const createNewTodo = name => {
  return {name: name, id = Date.now(), completed: false};
};

const App = () => {
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, [], null);

  const submitForm = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('');
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} name={todo.name} dispatch={dispatch}/>
      ))}
    </>
  );
};
```

- In `Todo.js`

```js
const Todo = (props) => {
  return (
    <div>
      <span>{props.name}</span>
      <button
        onClick={() =>
          props.dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payloud: { id: props.id },
          })
        }
      >
        toggle
      </button>
      <button
        Click={() =>
          props.dispatch({
            type: ACTIONS.DELETE_TODO,
            payloud: { id: props.id },
          })
        }
      >
        complete
      </button>
    </div>
  );
};
```
