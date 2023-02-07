---
title: Udemy React
layout: note_template
---

# Section 23

## Next JS

- Next JS is a React framework for production, a fullstack framework for React
- It is a framework because it has rules for us to use its built in features like routing
- To create a Next Project, run `npx create-next-app`
- To run the application as the development server, run `npm run dev`

## Key Features / Benefits

1. Server side rendering:
   - render the page before sending the content to the client, so that the content can be loaded in client faster (this is better for search engine optimization (SEO), too
   - blend client-side and server-side code
2. File based routing:
   - define pages and routes based on file structure
   - less code, less work and more understandable
3. Fullstack capabilities:
   - Easily add backend code to Next/React apps like storing and getting data and authentication

## Routes in Next

### Fixed Routes / Paths

- Files in `pages/` will be served for the corresponding pathname, the path to files in `pages/` will be the path to the component
- For example, `pages/index.js` or `pages/index.js` will be served for `website.com/` and `pages/news/index.js` will be served for `website.com/news`
- Ex.

```
- pages/
	- index.js
	- news/
		index.js
```

### Dynamic Routes / Paths

- We can create dynamic paths by adding brackets around the names of the files and directories
- For example, if we want to show a page for each news post, we can create a file called `pages/news/[newsId].js` and we can use this to serve dynamic news post

```
- pages/
	- index.js
	- news/
	| - [newsId]/
		- index.js
```

## useRouter

- We can access the query like the newsId by using a hook provided by next called `useRouter`
- We can also redirect the user to another page by calling the `push` method of the router object.
- Ex.

```js
import { useRouter } from "next/router";

const SomePage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;

  const redirectHandler = () => {
    router.push(`/news/${newsId}`);
  };
};
```

## Link

- We can navigate to different page in our application by using the `Link` component without sending a new request to the server
- With Link, we can still have the MPA-like SPA
- Ex.

```js
import Link from "next/link";

const SomePage = () => {
  return <Link href="/" />;
};
```

## Benefits & Limitations of NextJS Prerendering Process

- Benefits:
  - The content loaded on the first render cycle will be available on the page source
- Limitations:
  - The any data we need to fetch from the server by using hooks or fetch will not be available on the page source
- Solutions
  - There are mainly two solutions for the problem
    1. Static Generation: generate the static pages at build time and manually rebuild and redeploy the application whenever the data changes
    2. Server Side Rendering:

### Static Generation (getStaticProps)

- To build the static pages at build time with the static data, we need to create a function in the component file called `getStaticProps`
- NextJS will then look for the function and execute it synchronously or asynchronously to compute the static data we need in the component
- Then, we can return an object with a property called `props`, and we can pass the static data to the `prop`
- And in the component, we don't need to use other hooks for fetching data like `useEffect`
- Moreover, we don't need to worry about the code in `getStaticProps` being exposed, because it will never be executed on client's side
- Ex.

```js
// before
const SomePage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch().then(data => setMessages(data));
  }, []);

  return <MessagesList messages={messages}></MessagesList>;
};

export default SomePage;
```

```js
// after
const SomePage = props => {
  return <MessagesList messages={props.messages}></MessagesList>;
};

export const getStaticProps = async () => {
  const data = await fetch();
  return {
    props: {
      messages: data,
    },
  };
};

export default SomePage;
```

#### revalidate

- In static site generation (SSG), we will have to rebuild and then redeploy the application every time the data is updated
- However, we can set a property called revalidate in the returned object of `getStaticProps` to regenerate the `props` on the server every given seconds
- Ex.

```js
const SomePage = props => {
  return <MessagesList messages={props.messages}></MessagesList>;
};

export const getStaticProps = async () => {
  const data = await fetch();
  return {
    props: {
      messages: data,
    },
    revalidate: 10, // will regenerate the props every 10 seconds
  };
};

export default SomePage;
```

#### context

- Since, `getStaticProps` is called before React runs anything, we can't use `useRouter` hook to get values for dynamic routes like `pages/[newsId]`
- However, we can access some information from the `context` parameter inside `getStaticProps`
- Ex.

```js
const SomePage = props => {
  return <Message id={props.id}></Message>;
};

export const getStaticProps = context => {
  const meetupId = context.params.meetupId;

  return {
    props: {
      id: meetupId,
    },
  };
};

export default SomePage;
```

### getStaticPaths

- If we are using `getStaticProps` and dynamic paths, Next will expect us to export another function called `getStaticPaths`
- This is because Next JS needs to generate all possible pages for the dynamic paths value at the build time
- And we will pass an object with a property called `paths` which is an array of objects with a propery called `params` that contains parameters we need for the page
- Ex.

```js
const SomePage = props => {
  return <Message id={props.id}></Message>;
};

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          meetupId: m1,
        },
      },
      {
        params: {
          meetupId: m2,
        },
      },
    ],
  };
};

export const getStaticProps = context => {
  const meetupId = context.params.meetupId;

  return {
    props: {
      id: meetupId,
    },
  };
};

export default SomePage;
```

#### fallback

- If we have all possible paths defined in `getStaticPaths`, then we can simply set `fallback` to `false`, so that Next will show a 404 page when the user enters a path not in `paths`
- However, if we set it to `true`, Next will try to render the path given by the user by itself (this is good when we have too many paths to prerender)
- Ex.

```js
export const getStaticPaths = () => {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: m1,
        },
      },
    ],
  };
};
```

### Server Generation (getServerSideProps)

- Sometimes, the data we want to display might change from one request to another
- In this case, we want to use server-side rendering with a functino called `getServerSideProps`
- The argument it takes is context, which contains information like request and response object
- Ex.

```js
const SomePage = props => {
  return <MessagesList messages={props.messages}></MessagesList>;
};

export const getServerSideProps = context => {
  const req = context.req;
  const res = context.res;

  return {
    props: {
      messages: data,
    },
    revalidate: 10, // will regenerate the props every 10 seconds
  };
};

export default SomePage;
```

## API

- Next allows us to build our backend API for the frontend application to use within the same application
- All we need to do is to create a folder called `api/` under `pages/`
- To create an API route, we need to create a javascript file and export default the handler function used for handling the incoming HTTP requests
- The handler function should have two params, `req` and `res`
- Ex.

```js
// in pages/api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // add data to the db
    ...

    console.log(result);

    // set the status code to a success one with a message
    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
```

```js
// in components/[meetupId].js

// component ...

export async function getStaticPaths() {

  // fetching meetups from the database
  const meetups = ...;

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup.id },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  // fetch the data for the meetup with the given ID from the database
  const meetupData = ...;

  return {
    props: {
      meetupData
    },
  };

```

## Head

- When we are creating a new website, we want to make sure to include information like `title` and `meta` in the head component of the HTML file
- Therefore, we can use the `Head` component provided by Next and put all we need in it to add information to the head of the page
