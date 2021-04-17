import React, { useContext, useEffect, useState } from 'react';
import {
    BrowserRouter as Router, Link, Route, Switch
} from "react-router-dom";
import { UserContext } from '../../../App';
import logo from '../../../logo-icon/logo.png';
import AddData from '../AddData/AddData';
import Customer from '../Customer/Customer';
import CustomerReview from '../CustomerReview/CustomerReview';
import CustomerServiceList from '../CustomerServiceList/CustomerServiceList';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageService from '../ManageService/ManageService';
import './Dashboard.css';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('http://localhost:1526/isAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])


    return (
        <section>
            <Router>
                <div className='dashboard-container'>
                    <aside className='dashboard-aside'>
                        <img src={logo} alt="" />
                        <nav>
                            {isAdmin ? <ul>
                                <li>
                                    <Link to='/dashboard/order'>Customer List</Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/addData'>Add Data</Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/makeAdmin'>Make Admin</Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/manageService'>Manage DataBase</Link>
                                </li>
                            </ul>
                                :
                                <ul>
                                    <li>
                                        <Link to='/dashboard/service'>Service</Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard/customerServiceList'>Service List</Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard/review'>Review</Link>
                                    </li>
                                </ul>
                            }
                        </nav>
                    </aside>
                    <div>
                        <Switch>
                            <Route path='/dashboard/order'>
                                <Customer></Customer>
                            </Route>
                            <Route path='/dashboard/addData'>
                                <AddData></AddData>
                            </Route>
                            <Route path='/dashboard/makeAdmin'>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route path='/dashboard/manageService'>
                                <ManageService></ManageService>
                            </Route>
                            <Route path='/dashboard/service'>
                                <ManageService></ManageService>
                            </Route>
                            <Route path='/dashboard/customerServiceList'>
                                <CustomerServiceList></CustomerServiceList>
                            </Route>
                            <Route path='/dashboard/review'>
                                <CustomerReview></CustomerReview>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </section>
    );
};

export default Dashboard;