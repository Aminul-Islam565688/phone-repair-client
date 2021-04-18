import React, { useEffect, useState } from 'react';
import deleteImg from '../../../logo-icon/delete.png';
import editImg from '../../../logo-icon/edit.png';

const ManageService = () => {
    const [mngService, setMngService] = useState([])
    const [isDeleted, setDeleted] = useState(false);
    useEffect(() => {
        fetch('https://immense-brook-80254.herokuapp.com/getServices')
            .then(res => res.json())
            .then(data => setMngService(data))
    }, [])
    const handleDeleteItem = (e, id) => {
        console.log(id);
        fetch(`https://immense-brook-80254.herokuapp.com/serviceDelete/${id}`, {
            method: "DELETE",
        })
            .then((res) => {
                e.target.parentElement.parentElement.remove();
            });
    };
    const handleEditItem = (e, id) => {
        alert('this feature is not ready yet')
    }
    return (
        <div>
            <h1>This is Manage Service</h1>
            <div>
                <h3>Manage Service</h3>
                <table className='customers-table'>
                    <tr>
                        <th>Service Name</th>
                        <th>Email ID</th>
                        <th>Service</th>
                        <th>Service Cost</th>
                        <th>Action</th>
                    </tr>
                    {mngService.map(customer => (
                        <tr>
                            <td>{customer.title}</td>
                            <td>{customer.title}</td>
                            <td>{customer.title}</td>
                            <td>${customer.cost}</td>
                            <td>
                                <img
                                    src={editImg}
                                    style={{ width: "40px", marginRight: "7px", cursor: "pointer" }}
                                    alt=""
                                    onClick={(e) => handleEditItem(e, customer._id)}
                                />
                                <img
                                    style={{ width: "40px", cursor: "pointer" }}
                                    src={deleteImg}
                                    onClick={(e) => handleDeleteItem(e, customer._id)}
                                />
                            </td>
                        </tr>
                    ))}
                </table>
            </div>

        </div>
    );
};

export default ManageService;