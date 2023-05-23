import React from 'react';
import './Tshirt.css';

const TShirt = ({tshirt,handleAddToCart}) => {
    const {price, picture, name, gender} = tshirt;
    return (
        <div className='products'>
            <img src={picture} alt="" />
            <h4>{name} {price}</h4>
            <p>$ {price}</p>
            <button onClick={handleAddToCart}>Buy Now</button>
        </div>
    );
};

export default TShirt;