---
title: Udemy React
layout: note_template
---

# Section 21

## Deployment Steps

1. Test
2. Optimize
3. Build for Production
4. Upload Production Code to A Server
5. Configure The Server

## Lazy Loading

- Lazy loading means to only pages when they are needed, instead of all pages at the beginning
- In React project, instead of the traditional way of importing components, we can use a function called `lazy` to lazy load some components by passing a callback as an argument that returns a dynamic import function call
- We would also need to wrap any lazy loaded components into another component called `Suspense` and provide a fallback component that is rendered when we are waiting for the lazy loaded components to be loaded
- Ex.

```js
const PostsPage = React.lazy(() => import('./pages/PostsPage'));
const PostDetailPage = React.lazy(() => import('./pages/PostDetailPage/'));

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElement(
      <Route path="/" element={<RootLayout />}>
				<Suspense fallback={<div className="centered"><Loading /></div>}>
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
				</Suspense>
      </Route>
    )
  );

  return <RouterProvdier router={router} />;
};
```

## Build React Project into Production

- Run `npm run build` to build the project into static files

## Configure Server

- A lot of hosting services will handle different routes and send different `html` files
- However, we only want to serve a static application that will handle different routes
- Therefore, it is important to configure the hosting service to always serve the `index.html` file for our react project
