import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import './CustomerServiceList.css';

const CustomerServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [customerServiceList, setCustomerServiceList] = useState([])
    useEffect(() => {
        fetch(`https://immense-brook-80254.herokuapp.com/customerServiceList?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setCustomerServiceList(data))
    }, [])

    console.log(customerServiceList);

    return (
        <div>
            {customerServiceList.length === 0 && <p>Loading</p>}
            <div className='customer-service-container'>
                {customerServiceList.map(service => (
                    <div className='customer-service-cart'>
                        <div className='service-card-top'>
                            <img src={service.photo} alt="" />
                            <p>{service.status}</p>
                        </div>
                        <h4>{service.service}</h4>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerServiceList;