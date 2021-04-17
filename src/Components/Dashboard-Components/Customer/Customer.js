import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import './Customer.css';

const Customer = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [customersList, setCustomersList] = useState([])
    useEffect(() => {
        fetch('http://localhost:1526/getCustomers')
            .then(res => res.json())
            .then(data => setCustomersList(data))
    }, [])
    console.log(customersList);
    return (
        <div>
            <h1>This is Customer component</h1>
            <table className='customers-table'>
                <tr>
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Service</th>
                    <th>Pay With</th>
                    <th>Status</th>
                </tr>
                {customersList.map(customer => (
                    <tr>
                        <td>{customer.name}</td>
                        <td>{customer.email}</td>
                        <td>{customer.service}</td>
                        <td>{customer.card.brand} {customer.type}</td>
                        <td>{customer.status}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default Customer;