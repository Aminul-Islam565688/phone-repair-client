import React, { useEffect, useState } from 'react';
import {
    useParams
} from "react-router-dom";
import onlineShop from '../../images/online-shopping.jpg';
import ServiceDetailsCart from '../ServiceDetailsCart/ServiceDetailsCart';
import Navbar from '../Shared-Components/Navbar/Navbar';
import './ServiceDetails.css';

const ServiceDetails = () => {
    let { serviceId } = useParams();
    const [serviceDetails, setServiceDetails] = useState([])

    useEffect(() => {
        fetch(`https://immense-brook-80254.herokuapp.com/serviceDetails/${serviceId}`)
            .then(data => data.json())
            .then(res => setServiceDetails(res))
    }, [serviceId])


    return (
        <section className='service-details-section'>
            <Navbar></Navbar>
            <div className='service-details-container'>
                <div>
                    {serviceDetails.map(serDetails => <ServiceDetailsCart serDetails={serDetails} key={serDetails.key}></ServiceDetailsCart>)}
                </div>
                <div className='service-details-image'>
                    <img src={onlineShop} alt="" />
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;