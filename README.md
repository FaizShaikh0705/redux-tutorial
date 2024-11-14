# redux-tutorial


#File-Structure
redux-cart-tutorial/
│
├── src/
│   ├── components/
│   │   └── Cart.js          // Cart component
│   │   └── CartItem.js      // Each item in the cart with increment/decrement buttons
│   │   └── Product.js       // Product component to display items with "Add to Cart" button
│   │   └── CartIcon.js      // Cart icon showing the cart count
│   │
│   ├── redux/
│   │   ├── actions.js       // Actions for cart (add, remove, update quantity)
│   │   ├── reducers.js      // Reducer to handle cart state
│   │   └── store.js         // Store setup
│   │
│   ├── App.js               // Root component wrapping Provider
│   └── index.js             // Entry point rendering App
│
└── package.json             // Project dependencies



Explanation of Cart Page and Redux Workflow
Actions (actions.js):

addToCart: Adds a new item to the cart.
removeFromCart: Removes an item from the cart based on itemId.
updateCartItem: Updates the quantity of a specific cart item.
Reducer (reducers.js):

ADD_TO_CART: Adds a new item to the cartItems array.
REMOVE_FROM_CART: Removes an item from cartItems by filtering out the item with the given ID.
UPDATE_CART_ITEM: Finds the item with the matching ID and updates its quantity.
Store (store.js):

Created with the cartReducer to hold all cart-related state in one centralized location.
Components:

Cart.js: Fetches the cart items and total price from the Redux store using useSelector. It maps over each item to render CartItem components and calculates the total price.
CartItem.js: Represents individual items in the cart. Allows the user to change the quantity and remove items by dispatching actions.
App Initialization:

Provider in App.js: The Redux Provider wraps the app, making the store available throughout.