import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <h2>Order Summary: {cart.length}</h2>
            <h4>New Line</h4>
            {
            cart.map(tshirt => console.log(tshirt) )
            }
        </div>
    );
};

export default Cart;