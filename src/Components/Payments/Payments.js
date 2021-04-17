import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import SimplePaymentForm from './SimplePaymentForm/SimplePaymentForm';

const ELEMENTS_OPTIONS = {
    fonts: [
        {
            cssSrc: "https://fonts.googleapis.com/css?family=Roboto"
        }
    ]
};


const stripePromise = loadStripe('pk_test_51Ie0TRGGLbTJ9OfJJxubofEbIJbgzJFyVPUa2Vm5ludlE7aGEiEXmZ77Yy9ZmGqTnovSp7QtvmBnR4g6LadB57os00iblprH1n');
const Payments = () => {
    return (
        <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
            <SimplePaymentForm></SimplePaymentForm>
        </Elements>
    );
};
export default Payments;