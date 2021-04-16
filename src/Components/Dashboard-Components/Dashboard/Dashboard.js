import React from 'react';
import {
    BrowserRouter as Router, Link, Route, Switch
} from "react-router-dom";
import logo from '../../../logo-icon/logo.png';
import AddDevice from '../AddDevice/AddDevice';
import AddServices from '../AddServices/AddServices';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageService from '../ManageService/ManageService';
import Order from '../Order/Order';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <section>
            <Router>
                <div className='dashboard-container'>
                    <aside className='dashboard-aside'>
                        <img src={logo} alt="" />
                        <nav>
                            <ul>
                                <li>
                                    <Link to='/dashboard/order'>Order List</Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/addServices'>Add Services</Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/addDevice'>Add Device</Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/makeAdmin'>Make Admin</Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/manageService'>Manage Services</Link>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <div>
                        <Switch>
                            <Route path='/dashboard/order'>
                                <Order></Order>
                            </Route>
                            <Route path='/dashboard/addServices'>
                                <AddServices></AddServices>
                            </Route>
                            <Route path='/dashboard/addDevice'>
                                <AddDevice></AddDevice>
                            </Route>
                            <Route path='/dashboard/makeAdmin'>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route path='/dashboard/manageService'>
                                <ManageService></ManageService>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </section>
    );
};

export default Dashboard;