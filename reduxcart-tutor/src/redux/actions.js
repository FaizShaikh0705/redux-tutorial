// actions.js
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT_ITEM = 'INCREMENT_ITEM';
export const DECREMENT_ITEM = 'DECREMENT_ITEM';

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item,
});

export const removeFromCart = (itemId) => ({
    type: REMOVE_FROM_CART,
    payload: itemId,
});

export const incrementItem = (itemId) => ({
    type: INCREMENT_ITEM,
    payload: itemId,
});

export const decrementItem = (itemId) => ({
    type: DECREMENT_ITEM,
    payload: itemId,
});
