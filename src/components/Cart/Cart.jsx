import React from 'react';
import './Cart.css';

const Cart = ({ cart,handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0){
        message = <p>Please add some product</p>
    }
    else if(cart.length<=2){
        message = <div className='gorib'>
            <h2>Vai Gorib</h2>
        </div>
    }
    else{
        message = <div className='borolok'>
            <h2>Apni borolok vai</h2>
        <p>Thanks for wasting your valuable money.</p>
        </div>
    }
    return (
        <div className='cart'>
            <h2>Order Summary: {cart.length}</h2>
            {cart.length > 2? <span className='fun-1'>Vai Kinte thako</span> : <span className='fun-2'>Ei koyda ken vai?</span>}
            

            {
            cart.map(tshirt => <p 
                key={tshirt._id}
                >{tshirt.name} <button 
                onClick={() => handleRemoveFromCart(tshirt._id)}>x
                </button></p> )
            }
            {message}
        </div>
    );


};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1. use if else to set a variable that will contain an element, components.
 * 2. ternary: condition ? 'for true' : 'false'
 * **/