// reducers.js
import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_ITEM, DECREMENT_ITEM } from './actions';

const initialState = {
    cartItems: [], // This will hold the cart items
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
                };
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
            };

        case INCREMENT_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };

        case DECREMENT_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
            };

        default:
            return state;
    }
}


// Initial State: This is the initial shape of our Redux store. 
// cartItems will hold an array of products in the cart.
// Reducers:
// ADD_TO_CART: Adds a new item to the cart. If the item is already 
// in the cart, it increases the quantity.
// REMOVE_FROM_CART: Removes a product from the cart.
// INCREMENT_QUANTITY: Increases the quantity of a particular item in the cart.
// DECREMENT_QUANTITY: Decreases the quantity of a particular item in the cart, 
// ensuring it doesn’t go below 1.