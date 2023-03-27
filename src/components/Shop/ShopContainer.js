import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './ShopContainer.css';

const ShopContainer = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/smmunna/json-data/main/products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    // function for add to Cart Button, from Product.js
    const handleAddtoCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container p-5 lg:p-5 lg:mt-5'>
            <div className="shop-card grid grid-cols-1 md:grid-cols-3 gap-3">
                {
                    products.slice(0,6).map(product => <Products
                        key={product.id}
                        product={product}
                        handleAddtoCart={handleAddtoCart}
                    />)
                }
            </div>
            <div className="order-summary lg:px-10 rounded ">
                <Cart cart={cart}/>
            </div>
        </div>
    );
}

export default ShopContainer;
