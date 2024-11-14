// store.js
// The store holds the state of the app. Here we configure Redux and create a store.
// --- Setting up the Redux store ---

import { createStore } from 'redux';
import cartReducer from './reducers';  // Import the cart reducer

// Create the Redux store with the cartReducer
const store = createStore(cartReducer);

export default store;





// createStore(rootReducer): This is how we create a Redux store. 
// It uses the rootReducer, which combines all the reducers 
// (in our case, cart-related ones).


// export default store: We export the store so it can be accessed in 
// the rest of the app.



