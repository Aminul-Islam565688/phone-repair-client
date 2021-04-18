import React from 'react';
import './CorpoServiceCart.css';

const CorpoServiceCart = ({ corpoService }) => {
    return (
        <div className='grid-cart'>
            <img src={corpoService.img} alt="" />
            <h4 className='my-2'>{corpoService.title}</h4>
            <p className='text-secondary'>{corpoService.description}</p>
            <button className='phone-btn mt-3'>Read More</button>
        </div>
    );
};

export default CorpoServiceCart;