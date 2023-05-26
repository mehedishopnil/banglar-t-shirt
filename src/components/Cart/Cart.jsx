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


    let borolokMessage;
  if (cart.length < 3) {
    borolokMessage = <p></p>
  } 

  else if (cart.length < 4){
    borolokMessage = <h3 className='fokira-borolok'>Fokira Borolok</h3>;
  }
  else {
    borolokMessage = <h3 className='borolox'>Ore Boroloxxxx</h3>;
  }

    return (
        <div className='cart'>
            <h2 className={cart.length < 3 ? 'red' : 'green'}>Order Summary: {cart.length}</h2>
            {cart.length > 2 ? (<span className='fun-1'>Vai Kinte thako</span>) : (cart.length > 0 && <span className='fun-2'>Ei koyda ken vai?</span>)}
            

            {
            cart.map(tshirt => <p 
                key={tshirt._id}
                >{tshirt.name} <button 
                onClick={() => handleRemoveFromCart(tshirt._id)}>x
                </button></p> )
            }
            {message}

            {borolokMessage}
        </div>
    );


};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1. use if else to set a variable that will contain an element, components.
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. Logical &&: (if the condition is  true then the next thing will be displayed)
 * 4. Logical ||: (if the condition is false then the next thing will be displayed)
 * **/

/**
 * CONDITIONAL CSS CLASS
 * 1. 
 * 
 * **/