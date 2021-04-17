import React from 'react';
import './TestimonialsCart.css';

const TestimonialsCart = ({ review }) => {
    return (
        <div className='testimonial-cart'>
            <img src={review.photo} alt="" />
            <h3>{review.name}</h3>
            <h4>{review.company}</h4>
            <p>{review.description}</p>
        </div>
    );
};

export default TestimonialsCart;