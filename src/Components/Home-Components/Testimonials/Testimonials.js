import React, { useEffect, useState } from 'react';
import TestimonialsCart from '../TestimonialsCart/TestimonialsCart';
import './Testimonials.css';


const Testimonials = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://immense-brook-80254.herokuapp.com/getCustomerReview')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    console.log(review);
    return (
        <section className='testimonial-section'>
            <h1 className='phone-text my-5'>TESTIMONIALS</h1>
            <div className='testimonial-cart-container'>
                {review.map(review => <TestimonialsCart review={review} key={review._id}></TestimonialsCart>)}
            </div>
        </section>
    );
};

export default Testimonials;