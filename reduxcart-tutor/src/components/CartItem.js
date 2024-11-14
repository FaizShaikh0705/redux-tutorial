// CartItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, incrementItem, decrementItem } from '../redux/actions';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementItem(item.id));
    };

    const handleDecrement = () => {
        dispatch(decrementItem(item.id));
    };

    const handleRemove = () => {
        dispatch(removeFromCart(item.id));
    };

    return (
        <div>
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={handleDecrement} disabled={item.quantity <= 1}>-</button>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default CartItem;



// Increment/Decrement: These buttons dispatch actions to update the quantity of the item in the cart.
// Remove Item: This button dispatches the REMOVE_FROM_CART action to remove the item from the cart.