---
title: Udemy React
layout: note_template
---

# Section 26

## Testing

- Testing is one of the most important parts in software engineering, and there are differen kinds of tests
  1.  unit test
  2.  integration test
  3.  end-to-end test

## Unit Test in React

- In react, we usually will create a test file for each component, e.g. `App.test.js` for `App.js`
- When writing tests, we should follow the **3 A's** rules
  1.  Arrange
  2.  Act
  3.  Assert
- Ex.

```js
// in Greeting.js
const Greeting = () => {
  return (
    <div>
      <h1>Hello There</h1>
      <p>My name is David</p>
    </div>
  );
};

export default Greeting;
```

```js
// in Greeting.test.js
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders Hello There in the heading", () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const helloThereElement = screen.getByText("Hello There");
    expect(helloThereElement).toBeInTheDocument();
  });
});
```

### Types of Queries

- `getBy...`: Returns the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found (use getAllBy instead if more than one element is expected).
- `queryBy...`: Returns the matching node for a query, and return null if no elements match. This is useful for asserting an element that is not present. Throws an error if more than one match is found (use queryAllBy instead if this is OK).
- `findBy...`: Returns a Promise which resolves when an element is found which matches the given query. The promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms. If you need to find more than one element, use findAllBy.

### Events

- Sometimes, we will have some events like `onClick`, and we can also use the testing library to simulate them
- Ex.

```js
// in Greeting.js
const Greeting = () => {
  const [changedText, setChangedText] = setState(false);

  return (
    <div>
      <h1>Hello There</h1>
      {!changedText && <p>My name is David</p>}
      {changedText && <p>Changed!</p>}
    </div>
  );
};

export default Greeting;
```

```js
// in Greeting.test.js
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders My name is David before the button is clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const intro = screen.getByText("My name is David");
    expect(intro).toBeInTheDocument();
  });

  test("renders Changed! after the button is clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const button = screen.getByRole("button");
    userEvent.click(button);

    // Assert
    const changed = screen.getByText("Changed!");
    expect(changed).toBeInTheDocument();
  });

  test("doesn't render intro after the button is clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const button = screen.getByRole("button");
    userEvent.click(button);

    // Assert
    const intro = screen.queryByText("My name is David");
    expect(intro).not.toBeInTheDocument();
  });
});
```

### Async

- A lot of times, we use `useEffect` to do some asynchronous work, and we will have to handle them before `Assert` stage
- One thing to note that we sometimes don't want to actually perform the side effect like sending HTTP requests, so we could overwrite the built in functions with the mock function of `jest`
- Ex.

```js
// in Async.js
const Async = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
```

```js
// in Async.test.js
import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
```
