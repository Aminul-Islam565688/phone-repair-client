import React from 'react';
import './TestimonialsCart.css';

const TestimonialsCart = ({ review }) => {
    return (
        <div className='testimonial-cart'>
            <img src={review.photo} alt="" />
            <div className='testimonial-name'>
                <h3>{review.name}</h3>
                <h6>{review.company}</h6>
            </div>
            <p>{review.description}</p>
        </div>
    );
};

export default TestimonialsCart;