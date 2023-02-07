---
title: Udemy React
layout: note_template
---

# Section 20

## React Router

- Typically, when the URL changes, the client will request the new URL and ask for a new HTML. Then all the states and store will be lost.
- However, with the help of React Router, we can control the browser's default behavior when the URL changes, so that we can handle with the javascript code and change the content without fetching again.

### Route

1. install `react-router-dom`
2. import `Route` component from `react-router-dom` in `App.js`
3. Create a `Route` component for a path and pass the path in the `path` attribute of the `Route` component
4. Ex.

```jsx
<Route path="/welcome">
  <Welcome />
</Route>
```

4. import `BrowerRouter` component in `index.js`
5. wrap the `App` component in `render` function with `BrowserRouter`

### Link

- When we want to navigate to another route in our application, instead of using the anchor tag, we should use a component provided by `react-router-dom` called `Link` like this
- Therefore, the browser will not refresh and fetch the new page when the user click on this link
- Ex.

```jsx
<Link to="/welcome">Welcome</Link>
```

### NavLink

- Sometimes, we want to set as link as active, say we want to emphasize the current page we are on in the navbar.
- NavLink can help us use some extra css to style the active link
- Ex.

```jsx
<NavLink activeClassName={styles.active} to="/welcome">
  Welcome
</NavLink>
```

### Dynamic Route

- Sometimes, we want to create a link with dynamic content, say we want to create a template page for each product, but we don't want to manually create a component or a page for each product.
- Dynamic Route is then our tool to create dynamic page or component.
- Follow these steps to create a dynamic route

  1. Create a route and use colon to specify a placeholder
  2. Use a hook from `react-router-dom` called `useParams` to get the key pair object of the parameters passed in the url

- Ex.

```js
// in App.js
<Route path="/products/:productId">
  <Product />
</Route>;

// in components/Product.js
const Product = (props) => {
  const params = useParams();
  console.log(params.productId); // will log p1 if the url is /products/p1
};
```

### Switch

- Sometimes, we will have routes placed under a parent route, for example, `products/:productsId` and `products/`
- However, when the URL is `products/p1`, React Router is going to show both `Products` and `Product` components, because they both match the current URL.
- Therefore, we want to use `Switch` component to only select the first route whose path match the current URL.
- In addition, we can use an attribute called `exact` to only select a route if the path selects the path matches the URL perfectly.
- For example, even if the `products/` comes before `products/:productsId` in your App component, with the exact on the `products/` Route component, react router is going to select the `products/:productsId` Route component
- Ex.

```jsx
const App = (props) => {
  return (
    <Switch>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products" exact>
        <Products />
      </Route>
      <Route path="/products/:productsId">
        <Product />
      </Route>
    </Switch>
  );
};
```

### Redirect

- Sometimes, we want to redirect the user from a url to another url. For example, we might want to redirect the user to welcome page from root page if they are new users. Or, we want to redirect them to a profile page if they are existing users.
- Then, we can use `Redirect` component to redirect the user to a react route.
- Ex.

```jsx
const App = (props) => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/welcome" />
      </Route>
      <Route path="/welcome" exact>
        <Welcome />
      </Route>
    </Switch>
  );
};
```

### Route Wildcard

- Sometimes, we want to use wildcard for route path to select more than one possible path.
- We can use the wildcard character, \*, to do so.
- For example, say we want to show a NotFound page if the path doesn't match with any paths we specify.
- Ex.

```js
const App = (props) => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/welcome" />
      </Route>
      <Route path="/welcome" exact>
        <Welcome />
      </Route>
      <Route path="/new-user" exact>
        <NewUser />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};
```

### useHistory

- Sometimes, we want to redirect the user to another route in our react router.
- In addition to add `Link` or `NavLink` buttons, we can use a hook called `useHistory` to modify the current URL with it.
- By calling its `push` method, we can go to a new page since we push a new URL to the history queue.

```js
const NewQuote = (props) => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
```

#### Advanced useHistory

- When the url becomes more and more complex, the URL string will end up being longer and more complicated.
- It would be better if we could break it into different pieces and modularize the structure.
- In fact, the `push` function of the history object allows us to use with an object specifying different parts of the URL.
- Ex.

```js
const history = useHistory();
const location = useLoaction();

const someHandler = () => {
  history.push({
    pathname: location,
    search: `?key=${value}`,
  });
};
```

### Prompt

- Most of the time after the user clicks submit the form, everything will be lost when we redirect them
- Therefore, it is a good practice to at least show a warning about the entered information is going to be lost
- We can use a component called `Prompt` provided by React Router
- The prompt will show a **message** when the user is trying to leave the page and the **when** is True.
- Ex.

```js
<>
  <Prompt
    when={formIsTouched}
    message={(location) =>
      "Are you sure you want to proceed? Everything you entered will be lost."
    }
  ></Prompt>
  <form>...</form>
</>
```

### useLocation

- Sometimes, we want to get information about the current url like the query parameters.
- Therefore, we can use a hook called `useLocation` to get information about the url.
- Let's say we want to get the query parameters from the current url.
- Ex.

```js
const Component = (props) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); // location.search is the query in the URL.
  const sortingOrder = queryParams.get('sort');
  ...
  return ();
};
```

### useRouteMatch

- Sometimes, when we want to change the URL structure, or even just the name of a route, it would be annoying since we have to change everywhere in the nested route.
- However, we can use a hook provided by react router called `useRouteMatch` to get the current path (the ones that have names of params in them), or the actual URL.
- Ex.

```js
// before
const Quote = (props) => {
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path="/quotes/:quoteId" exact>
        <LoadCommentBtn />
      </Route>
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </>
  );
};
```

```js
// after
const Quote = (props) => {
  const match = useRouteMatch();
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <LoadCommentBtn />
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};
```

## React Router Version 6

- React Router has a lot of changes in version 6 that makes thing a lot easier to work with.

### Switch => Routes

- Instead of `Switch` component, we now have a new component called `Routes`
- And using `Routes` component becomes mandatory even there is only one route.

### Route

- Instead of passing the page as a child element of the `Route` component, we now pass it to a prop called `elements` so that the `Route` componenets can be written in a self closing tag
- Another change is that now React Router will prioritize the paths better instead of the sequence users defined
- For example, if we have a route for `/quotes` and `/quotes/:quoteId`, react router will find the best possible path for us without the `exact` prop.

### NavLink

- In version 5, if we want to pass the CSS classes to a `NavLink` component, we will have to use a prop called `activeClassName`
- In version 6, we will pass a callback that takes an argument with data of the navlink and it should return the active class if the data says the navlink is active.
- For example,

```jsx
<NavLink className={(navData) => navData.isActive ? : styles.active : '' } to="/welcome">
  Welcome
</NavLink>
```

### Redirect => Navigate

- Instead of `Redirect`, a new component called `Navigate` will simply do the same thing as `Redirect` and push the new page to the navigation stack of the browser.
- If we want to replace the current page, i.e. don't want to push the new page to the navigation stack, we can add a prop called `replace` to the `Navigation` component.

### Nested Routes & Outlet

- In version 5, we have to specify the complete URL for the nested routes
- In version 6, we can just pass the relative path to the `path` property (Same thing applies to `Link` component too)
- Furthermore, we can pass the nested route as the children of the `Route` componenet, so that we can have all routes at the same place
- To specify where to output the nested route in your component, just use a component called `Outlet` and React Router will insert for you.
- For example

```js
const App = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Navigation to="/quotes" />} />
      <Route path="/quotes" element={<Quotes />} />
      <Route path="/quotes/:quoteId" element={<Quote />}>
        <Route path="" element={<LoadCommentBtn />} />
        <Route path="comments" element={<Comments />} />
      </Route>
      <Route path="/new-quote" element={<NewQuote />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
```

### useHistory => useNavigate

- In version 5, we need to use `useHistory` hook to redirect to a new page or replace with a new place.
- In version 6, we can do so with the new hook `useNavigate` and we can nagivate to different urls and if we need to replace with a new URL, just pass an object like `{ replace: true}` as the second argument
- Furthermore, we can go back to the last page by passing -1 to the navigate function
- Ex.

```js
const navigate = useNavigate();

const someHandler = () => {
  navigate("some-url"); // redirect the user
  navigate("some-url", { repalce: true }); // replace with a new url
  navigate(-1); // go to last page
};
```

### Prompt => !!

- Prompt is no longer supported in version 6

## React Router Version 6.4

### loader

- When rendering a component, we often need to perform a side effect in the component to load data to render
- In version 6.4, we can pass a loader callback to the `Route` component, and React Router will call the callback whenever the user navigate to the route

  - The loader function can even return a promise and what is resolved will be passed as `loadData`
  - The loader function can also get the params by extracting the params object from the argument using object destruction

- Then, in the component function, we can use a callbacke called `useLoaderData` to get the returned data from the loader function.
- This can help separate the load data function with the component function
- Ex.

```js
// in componenet/Posts.js
const Post = props => {
  const loaderData = useLoaderData();

  return (); // some jsx with rendered posts
};

export const loader = ({params}) => {
  const id = params.id;
  return getPost(id);
};

export default Component;
```

```js
// in App.js
import Post, { loader as postLoader } from "./components/Post";

const App = () => {
  return (
    <Routes>
      <Route path="/post/:id" element={<Post />} loader={postLoader} />
    </Routes>
  );
};
```

### BrowserRouter => RouterProvider

- In version 6.4, `BrowserRouter` is no longer supported
- Instead, we need to use a provider component called `RoutersProvider`, and we need to pass a router object to the provider component
- And we can `createBrowserRouter` to create a router object and use `createRoutesFromElements` to create routes from `Route` elements

  - use a property called `index` to note the index route

- Ex.

```js
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<WelcomePage />} />
        <Route path="/posts" element={<PostsLayout />}>
          <Route index element={<PostsPage />} loader={postsLoader} />
          <Route
            path="/post/:id"
            element={<PostDetailPage />}
            loader={postDetailLoader}
          />
        </Route>
        <Route path="/post/new" element={<NewPost />} />
      </Route>
    )
  );

  return <RouterProvdier router={router} />;
};
```

### errorElement

- Errors might be thrown when loading the data, therefore, React Router allows us to pass an element to a prop called `errorElement`
- If any error is thrown, React Router will render the `errorElement` instead
- Then, in the component function, we can use a callbacke called `useRouteError` to get the thrown error from the loader function.
- Ex.

```js
// in pages/ErrorPage.js
const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <MainNavigation />
      <main id="error-content">
        <h1>An error occurred!</h1>
        <p>{error.statusText}</p>
      </main>
    </>
  );
};
```

```js
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
        ...
      </Route>
    )
  );

  return <RouterProvdier router={router} />;
};
```

### Form, action, useActionData

- React Router provides a new component called `Form` which helps separate the `submitFormHandler` from the component function
- One requirement is the `action` prop which should be the route that was given an action callback to handle the form submitting event

  - In the `Route` component, pass the action as the prop so the `Form` component can find it and execute it
  - In the action callback, we can get the request object by extracting the it from the parameter using object destruction
  - In the action callback, if everything goes well, we might want to redirect the user to another page, and we can use the `redirect` method

- You can also specify which HTTP method the request should have
- Ex.

```js
// in components/NewPostPage
const NewPostPage = (props) => {
  const validationError = useActionData();

  return (
    <>
      {validationError && <p>{validationError.message}</p>}
      <Form method="post" action="/post/new">
        ...
      </Form>
    </>
  );
};

export const action = async ({ request }) => {
  const data = await request.formData();

  console.log(data.get("title")); // to get the input or the textarea with the name prop matching the argument, title
  console.log(data.get("post-body"));

  const validationError = await savePost(data);
  if (validationError) {
    return validationError;
  }
  return redirect("/blog");
};
```

```js
// in App.js
import NewPostPage, {
  action as submitFormAction,
} from "components/NewPostPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        ...
        <Route
          path="/post/new"
          element={<NewPostPage />}
          action={submitFormAction}
        />
      </Route>
    )
  );

  return <RouterProvdier router={router} />;
};
```

### useNavigation

- This hooks give the information about the navigation of the page.
- Its `state` property gives you the state of the navigation and there are `idle`, `loading`, and `submitting` and they represent as the following:

  - **idle**: nothing pending, no fetching or submitting
  - **loading**: when the loader of the next route is being called (next route could be the same route)
  - **submitting**: when an action is being called because of a form submimssion using POST, PUT, PATCH, or DELETE

## React Router Version 6.4 Advanced Features

### Defer

- When using the navigation, the application will wait until the data is loaded before redering the page for next route
- Therefore, during the waiting process, we can render the rest of the page and wait for loading data by following these steps:
  1. In loader, return a `defer` function call that takes an argument of a object that wraps the loading promise
  2. In returned JSX code of the component function, wrap the part you want to await with a component called `Await` with two props, `resolve` and `errorElement` (`resolve` will be the promise that we are waiting for in the argument of the `defer` function call)
  3. Then the children of the `Await` component will be a callback which takes the loaded data as a parameter and return the JSX with the rendered component
  4. Finally, wrap the `Await` component in a `Suspense` component with one prop call `fallback`, which will be the component that we want to show while waiting for the data being loaded
- Ex.

```js
const DeferredBlogPostsPage = () => {
  const loaderData = useLoaderData();

  return (
    <>
      <h1>Our Blog Posts</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Await
          resolve={loaderData.posts}
          errorElement={<p>Error loading blog posts.</p>}
        >
          {(loadedPosts) => <Posts blogPosts={loadedPosts} />}
        </Await>
      </Suspense>
    </>
  );
};

export const loader = async () => {
  return defer({ posts: getSlowPosts() });
};

export default DeferredBlogPostsPage;
```
