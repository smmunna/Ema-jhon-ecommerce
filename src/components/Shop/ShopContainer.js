import React, { useEffect, useState } from 'react';
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
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        handleAddtoCart={handleAddtoCart}
                    />)
                }
            </div>
            <div className="order-summary lg:px-3 text-center">
                <h3 className='text-2xl font-bold'>Order Summary</h3>
                <h3 className='text-1xl font-semibold'>Selected Items:{cart.length}</h3>
            </div>
        </div>
    );
}

export default ShopContainer;
