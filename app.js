// App.js
// --- This is the root component of the React app ---

import React from 'react';
import { Provider } from 'react-redux'; // Provider connects Redux with React
import store from './store'; // Import the Redux store
import Counter from './Counter'; // Import the Counter component

function App() {
    return (
        // Provider makes the Redux store available to the app
        <Provider store={store}>
            <div>
                <h1>Redux Tutorial Example</h1>
                {/* Counter component will interact with the Redux store */}
                <Counter />
            </div>
        </Provider>
    );
}

export default App;
