---
title: Udemy React
layout: note_template
---

# Section 14

## Handle HTTP Request

- Sending HTTP request in React is nothing special and it is the same as vanilla Javascript.
- Ex.

```js
const Component = (props) => {
  const fetchMovies = async () => {
    const url = "something_url";
    const res = await fetch(url);
    const data = await res.json();
    // do what you wanna do...
  };

  return <Button onClick={fetchMovies}></Button>;
};
```

## Handling Loading Example

- Sometimes, we want to show something while waiting for the fetch responses.
- Ex.

```js
const Component = (props) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);

    const url = "something_url";
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.movies);

    setIsLoading(false);
  };

  return (
    <div>
      <Button onClick={fetchMovies}></Button>;<div>
        {isLoading && <LoadingGif />}
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length == 0 && <NoMovieFound />}
      </div>
    </div>
  );
};
```

## Handle HTTP Errors

```js
const fetchMovies = async () => {
  setIsLoading(true);
  setError(null);
  const url = "something_url";

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("something went wrong");
    }

    const data = await res.json();
    setMovies(data.movies);
  } catch (httpError) {
    setError(httpError);
  }

  setIsLoading(false);
};
```

## Send POST Request

```js
const addMovieHandler = async (movie) => {
  try {
    const res = await fetch("some_url", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("something went wrong");
    }

    const data = res.json();
    console.log(data);
  } catch (httpError) {}
};
```
