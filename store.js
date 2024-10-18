// store.js
// --- This file sets up the Redux store ---

// Import necessary modules from Redux
import { createStore } from 'redux';

// Initial State: The default state of our app
const initialState = {
    count: 0,  // Example state: A counter starting from 0
};

// Reducer function: This defines how state changes in response to actions
// A reducer takes two arguments: the current state and an action
function counterReducer(state = initialState, action) {
    // Check the action type and update state accordingly
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }; // Increase count
        case 'DECREMENT':
            return { ...state, count: state.count - 1 }; // Decrease count
        default:
            return state; // Return unchanged state if action type is unknown
    }
}

// Create the Redux store by passing the reducer
const store = createStore(counterReducer);

// Export the store to use it in the app
export default store;
