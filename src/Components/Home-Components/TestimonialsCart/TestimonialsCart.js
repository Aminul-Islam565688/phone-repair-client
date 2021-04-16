import React from 'react';
import './TestimonialsCart.css';

const TestimonialsCart = ({ review }) => {
    return (
        <div className='testimonial-cart'>
            <img src={review.avatarImg} alt="" />
            <h3>{review.name}</h3>
            <p>{review.review}</p>
        </div>
    );
};

export default TestimonialsCart;