import React from 'react';
import './Cart.css';
const Cart = (props) => {
    // console.log(props.cart)
    let total = 0;
    let totalShipping = 0;
    for (const product of props.cart) {

        if (product.quantity === 0) {
            product.quantity = 1;
        }

        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    let tax = total * 7 / 100;
    let grandTotal = total + tax + totalShipping;
    return (
        <div className='cart py-10'>
            <h3 className='text-2xl font-bold'>Order Summary</h3>
            <hr className='border-2 border-stone-900 my-3' />
            <h3 className='text-1xl font-semibold'>Selected Items: {props.cart.length}</h3>
            <h3>Price: {total}$</h3>
            <h3>Total Shipping: ${totalShipping} </h3>
            <h3>Tax: ${tax}  </h3>
            <h3>Grand Total: ${grandTotal}</h3>
        </div>
    );
}

export default Cart;
