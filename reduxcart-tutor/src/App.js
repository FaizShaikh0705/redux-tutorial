// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Cart from './components/Cart';
import Product from './components/Product';
import CartIcon from './components/CartIcon';

const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
];

function App() {
    return (
        <Provider store={store}>
            <div>
                <header style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
                    <h1 style={{ flex: 1 }}>Redux Cart Example</h1>
                    <CartIcon /> {/* Display cart icon in the header */}
                </header>
                <div>
                    <h2>Products</h2>
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
                <Cart />
            </div>
        </Provider>
    );
}

export default App;
