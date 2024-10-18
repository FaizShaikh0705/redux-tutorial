// Counter.js
// --- This is the React component that interacts with Redux store ---

import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Hooks to interact with Redux
import { incrementCounter, decrementCounter } from './actions'; // Import actions

const Counter = () => {
    // useSelector is used to get state from the store
    const count = useSelector((state) => state.count);

    // useDispatch is used to dispatch actions to the store
    const dispatch = useDispatch();

    return (
        <div>
            {/* Display the counter value */}
            <h1>Counter: {count}</h1>

            {/* Dispatch increment and decrement actions on button click */}
            <button onClick={() => dispatch(incrementCounter())}>Increment</button>
            <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
        </div>
    );
};

export default Counter;
