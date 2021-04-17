import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const CustomerServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [customerServiceList, setCustomerServiceList] = useState([])
    useEffect(() => {
        fetch(`http://localhost:1526/customerServiceList?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setCustomerServiceList(data))
    }, [])

    console.log(customerServiceList);

    return (
        <div>
            {customerServiceList.length === 0 && <p>Loading</p>}
            {customerServiceList.map(service => (
                <div>
                    <img src={service.photo} alt="" />
                    <p>{service.status}</p>
                    <h4>{service.service}</h4>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    );
};

export default CustomerServiceList;