import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h2>Order Summary: {cart.length}</h2>
            {
                cart.map(shirt => <p key={shirt._id}>{shirt.name}</p>)
            }
        </div>
    );
};

export default Cart;