import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../App';
import './ServiceDetailsCart.css';

const ServiceDetailsCart = ({ serDetails }) => {
    let history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const handleClick = () => {
        history.push("/payments");
        const service = { ...loggedInUser };
        service.service = serDetails.title;
        // service.serviceImage = serDetails.image;
        service.description = serDetails.description;
        service.cost = serDetails.cost;
        service.status = 'Pending';
        setLoggedInUser(service);
        sessionStorage.setItem('serviceImage', serDetails.image)
    }
    console.log(loggedInUser);
    return (
        <div className='service-details-cart'>
            <h1>{serDetails.title}</h1>
            <img className='details-img' src={`data:image/png;base64,${serDetails.image.img}`} alt="" />
            <p>{serDetails.description}</p>
            <h3>Service Cost ${serDetails.cost}</h3>
            <button onClick={handleClick} className='phone-btn'>Get This Service</button>
        </div>
    );
};

export default ServiceDetailsCart;