import React from 'react';
import './RefurbishedCart.css';

const RefurbishedCart = ({ pd }) => {
    return (
        <div className='refurbished-cart'>
            <img src={pd.pdImg} alt="" />
            <h4 className='text-center'>{pd.pdName}</h4>
            <h5 className='text-center'>${pd.pdPrice}</h5>
            <button className='refurbished-btn'>Add to Cart</button>
        </div>
    );
};

export default RefurbishedCart;