// CartIcon.js
import React from 'react';
import { useSelector } from 'react-redux';

const CartIcon = () => {
    // Calculate unique count of items in cart
    const cartItems = useSelector(state => state.cartItems);
    const uniqueItemCount = cartItems.length;

    return (
        <div style={{ position: 'relative', display: 'inline-block', marginRight: '20px' }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
            >
                <path d="M0 1a1 1 0 0 1 1-1h1.6a1 1 0 0 1 .96.72l.04.13.6 1.69H15a1 1 0 0 1 .96 1.27l-1.5 5.5a1 1 0 0 1-.96.73H4.38l-.32 1h9.94a.5.5 0 0 1 0 1H3a1 1 0 0 1-.96-.73L1 2H.5a.5.5 0 0 1 0-1H1l.04-.13L1 1.72A1 1 0 0 1 1 1H0zm3.43 6h9.04l1.35-5H4.1L3.43 7zM5 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm6 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
            </svg>
            {uniqueItemCount > 0 && (
                <span
                    style={{
                        position: 'absolute',
                        top: '-5px',
                        right: '-10px',
                        background: 'red',
                        borderRadius: '50%',
                        color: 'white',
                        padding: '2px 6px',
                        fontSize: '12px',
                    }}
                >
                    {uniqueItemCount}
                </span>
            )}
        </div>
    );
};

export default CartIcon;


// uniqueItemCount: This is the number of unique products in the cart. 
// Instead of counting quantities, we simply count how many different 
// products are in
