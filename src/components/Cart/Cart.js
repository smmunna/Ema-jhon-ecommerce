import React from 'react';
import './Cart.css';
const Cart = (props) => {
    let total=0;
    for (const product of props.cart) {
        total = total+product.price;
    }
    return (
        <div>
            <h3 className='text-2xl font-bold'>Order Summary</h3>
            <hr className='border-2 border-stone-900 my-3' />
            <h3 className='text-1xl font-semibold'>Selected Items: {props.cart.length}</h3>
           
            <h3>Price:  {total} $</h3>
            <h3>Total Shipping: </h3>
            <h3>Tax: </h3>
            <h3>Grand Total: </h3>
        </div>
    );
}

export default Cart;
