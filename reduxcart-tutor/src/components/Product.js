// Product.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const Product = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default Product;



// Props: The component receives a product prop, which represents the product 
// to be displayed.

// Dispatch: We use useDispatch() from Redux to dispatch the ADD_TO_CART action
//  with the product details. The payload includes the product’s ID, name, price,
//   and an initial quantity of 1.