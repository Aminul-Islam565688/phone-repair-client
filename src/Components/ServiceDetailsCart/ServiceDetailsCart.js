import React from 'react';
import { useHistory } from "react-router-dom";
import './ServiceDetailsCart.css';

const ServiceDetailsCart = ({ serDetails }) => {
    let history = useHistory();

    const handleClick = () => {
        history.push("/home");
    }
    return (
        <div className='service-details-cart'>
            <h1>{serDetails.title}</h1>
            <img className='details-img' src={`data:image/png;base64,${serDetails.image.img}`} alt="" />
            <p>{serDetails.description}</p>
            <button onClick={handleClick} className='phone-btn'>Get This Service</button>
        </div>
    );
};

export default ServiceDetailsCart;