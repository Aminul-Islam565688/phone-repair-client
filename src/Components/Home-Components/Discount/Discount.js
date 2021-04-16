import React from 'react';
import './Discount.css';

const Discount = () => {
    return (
        <section>
            <div className='text-center discount-container'>
                <h1>Call now and get 20% discount on repairs</h1>
                <p>The discount is valid until the end of the month</p>
                <button className='phone-btn'>Call Now</button>
            </div>
        </section>
    );
};

export default Discount;