// Redux is a predictable state management library commonly used with JavaScript applications,
// especially those built with React. It helps manage the state of an application by providing 
// a centralized store where all the data (or state) is stored, making it easier to share state 
// across different components and manage complex interactions.

// Key Concepts of Redux:
// Store: The single source of truth where the application’s entire state is stored. 
// It holds the current state and allows updates to the state.

// Actions: Plain JavaScript objects that describe an event or change that needs to 
// happen in the state (e.g., adding a product to a cart). Actions must have a type 
// property and can include additional data (payload).

// Reducers: Pure functions that take the current state and an action, then return a 
// new state. Reducers define how the state changes in response to actions.

// Dispatch: The method used to send actions to the Redux store. It’s how we trigger a state update.

// Selectors: Functions that allow you to extract specific pieces of data from the Redux store.

// Middleware: Middleware extends Redux with custom functionality, commonly used for 
// handling side effects (like API calls) or logging actions. Popular middleware includes 
// Redux Thunk and Redux Saga.

// Benefits of Using Redux:
// Centralized State: All state is kept in a single store, making it easier to manage and debug.
// Predictable: Redux strictly follows the rules, which makes it easier to understand how data flows.
// Time Travel: Redux DevTools allows you to inspect every state change and even undo or redo actions.


// FILE STRUTURE

// redux-tutorial/
// │
// ├── actions.js       // Contains Redux actions
// ├── store.js         // Redux store and reducer setup
// ├── Counter.js       // React component connected to Redux
// ├── App.js           // Root component wrapping the app with Provider
// └── index.js         // Entry point of the app
