import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './ShopContainer.css';

const ShopContainer = () => {
    const[products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/smmunna/json-data/main/products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    return (
        <div className='shop-container lg:p-5 lg:mt-5'>
             <div className="shop-card grid grid-cols-1 md:grid-cols-3 gap-3">
                {
                    products.map(product=><Products
                        key={product.id}
                        product={product}
                    />)
                }
             </div>
             <div className="order-summary">
                <h3>Order Summary</h3>
             </div>
        </div>
    );
}

export default ShopContainer;
