---
title: Udemy React
layout: note_template
---

# Section 22

## Authentication

- Authentication is needed when the content should be protected and should not be accessible to everyone
- Authentication is usually a two-step process
  1. Get access / permission
  2. Send requests for protected content
- There are two ways of authenticatio
  1.  Server-side session
      - Server creates a session with an ID and the server will send the client the ID
      - Then in the future requests, the client will attach the session ID
      - So that the server can authenticate the client with the ID
      - One major disadvantage is that the frontend and the backend will have to be tightly integrated
  2.  Authentication Token
      - Server will encrypt a bunch of data into a token with a _key_ that only the server knows
      - In the future requests, the client will attach the token so that the server can authenticate the client with the ID
      - And when the server receives the token, it can use the key to extract information from the token **without knowing anything about the frontend application**

## Guarded Routes

- A lot of times we want to protect some routes that only authenticated users are able to view. There are quite many different ways to accomplish this.
  1.  we can use auth context in every protected page and redirect users if needed. This
  2.  we can use the auth context in the route providers and render the routes based on the auth context
