import React from 'react';
import './ShopContainer.css';

const ShopContainer = () => {
    return (
        <div className='shop-container'>
             <div className="shop-card">
                <h3>Card List</h3>
             </div>
             <div className="order-summary">
                <h3>Order Summary</h3>
             </div>
        </div>
    );
}

export default ShopContainer;
