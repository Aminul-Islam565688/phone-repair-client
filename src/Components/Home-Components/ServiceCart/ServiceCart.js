import React from 'react';
import { useHistory } from "react-router-dom";
import './ServiceCart.css';


const ServiceCart = ({ service }) => {
    let history = useHistory();

    function handleClick() {
        history.push(`/serviceDetails/${service._id}`);
    }
    return (
        <div className='grid-cart'>
            <img src={`data:image/png;base64,${service.image.img}`} alt="" />
            <h4 className='my-4'>{service.title}</h4>
            <p className='text-secondary'>{service.description}</p>
            <button onClick={handleClick} className='phone-btn'>Read More</button>
        </div>
    );
};

export default ServiceCart;