import React from 'react';
import avatar from '../../../images/avatar.png';
import TestimonialsCart from '../TestimonialsCart/TestimonialsCart';
import './Testimonials.css';

const testimonialData = [
    {
        id: 1,
        avatarImg: avatar,
        name: 'Islam Abir Titu',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quos quibusdam dolore optio exercitationem ex ad quasi ullam ducimus aspernatur, repellat autem dolor error? Quasi unde aspernatur consequatur ducimus est suscipit iure magnam reprehenderit ipsa, repellat fugit quas sunt optio consequuntur nobis eos accusantium explicabo deleniti assumenda corrupti sequi officia?'
    },
    {
        id: 2,
        avatarImg: avatar,
        name: 'Islam Abir Titu',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quos quibusdam dolore optio exercitationem ex ad quasi ullam ducimus aspernatur, repellat autem dolor error? Quasi unde aspernatur consequatur ducimus est suscipit iure magnam reprehenderit ipsa, repellat fugit quas sunt optio consequuntur nobis eos accusantium explicabo deleniti assumenda corrupti sequi officia?'
    },
    {
        id: 3,
        avatarImg: avatar,
        name: 'Islam Abir Titu',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quos quibusdam dolore optio exercitationem ex ad quasi ullam ducimus aspernatur, repellat autem dolor error? Quasi unde aspernatur consequatur ducimus est suscipit iure magnam reprehenderit ipsa, repellat fugit quas sunt optio consequuntur nobis eos accusantium explicabo deleniti assumenda corrupti sequi officia?'
    },
]

const Testimonials = () => {
    return (
        <section className='testimonial-section'>
            <h1>This is Testimonials</h1>
            <div className='testimonial-cart-container'>
                {testimonialData.map(review => <TestimonialsCart review={review} key={review.key}></TestimonialsCart>)}
            </div>
        </section>
    );
};

export default Testimonials;