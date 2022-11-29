---
title: Udemy JS
layout: note_template
---

# Section 15

## Custom Hook

- Why do we want to have a custom hook? Because sometimes, we will have some components with almost identical logic of using React hooks, and it would be better if we can refactor our the similar part into a custom hook
- Essentially, a custom hook is like a wrapped approach to use React hooks or other custom hooks
- Note: custom hooks must start with **use**
- Ex.

```js
const useCounter = (increment = 1) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + increment);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};
```

## Custom HTTP Hook

- Sending HTTP requests are extremely common in web applications, and a web application will mostly always send 2 or more kinds of requests.
- Therefore, creating a custom hook for this is a great way to factor the project.
- Take the following example,

```js
// in src/hooks/useHttp.js
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, dataHandler) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      dataHandler(data);
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }

    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};
```

```js
// in src/App.js
function App() {
  const [tasks, setTasks] = useState([]);
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  const tasksDataHandler = (tasksData) => {
    const loadedTasks = [];

    for (const taskKey in tasksData) {
      loadedTasks.push({ id: taskKey, text: tasksData[taskKey].text });
    }

    setTasks(loadedTasks);
  };

  useEffect(() => {
    fetchTasks(
      {
        url: "https://udemy-react-cdff1-default-rtdb.firebaseio.com/tasks.json",
      },
      tasksDataHandler
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}
```

```js
const NewTask = (props) => {
  const { isLoading, error, sendRequest: addTaskRequest } = useHttp();

  const newTaskDataHandler = (newTaskData, taskText) => {
    props.onAddTask({ id: newTaskData.name, text: taskText });
  };

  const enterTaskHandler = (taskText) => {
    addTaskRequest(
      {
        url: "https://udemy-react-cdff1-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: { text: taskText },
        headers: { "Content-Type": "application/json" },
      },
      newTaskDataHandler.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};
```

## bind() function

- Sometimes, we need to expands the arguments of a function because its definition could be defined somewhere else, i.e. a hook.
- Therefore, `bind()` becomes really useful to expand the argument
- Ex.

```js

const greet(name) {
    console.log(`Hi ${name}!`);
}

const button = document.querySelector('.button');
button.addEventListener('click', greet.bind(null, 'David'));

```
