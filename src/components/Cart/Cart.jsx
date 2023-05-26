import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <h2>Order Summary: {cart.length}</h2>
            <h4>New Line</h4>
            {
            cart.map(tshirt => <p>{tshirt.name}</p> )
            }
            <h3>new update is here</h3>
            <h3>Subrato dekthe chai</h3>
            <h1>Main brunch updates</h1>
            <h4>this is new update from second laptops</h4>
        </div>
    );


};

export default Cart;