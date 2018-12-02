# Redux Introduction

### What is Redux?
- Redux is an advanced state management mechanism for your application.

### Why should I use Redux?

- For small applications, you won't probably need Redux.
- In general, use Redux when you have reasonable amounts of data changing over time, you need a single source of truth, and you find that approaches like keeping everything in a top-level React Component's state are no longer sufficient.

- Single source of truth for your state;
- State is read-only: can be modified only if an action is passed;

### Redux principles:

- ### Reducer: a function with two arguments (oldState, action) that returns the newState of the application
- ### Action: an object that contains at least the type.
- ### Store: the object that puts everything together.

### Create the application:

- `npx create-react-app redux-basics`;

### Install the dependencies:

- `cd redux-basics`;
- `npm install redux --save`;
- `npm install redux-logger --save`;
- `npm install redux-thunk --save`;
- `npm install redux-promise-middleware --save`;

### Start the app:

- `npm start`;

