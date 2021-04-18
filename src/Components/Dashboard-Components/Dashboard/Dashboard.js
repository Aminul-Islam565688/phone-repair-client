import React, { useContext, useEffect, useState } from 'react';
import {
    BrowserRouter as Router, Link, Route, Switch, useHistory
} from "react-router-dom";
import { UserContext } from '../../../App';
import admin from '../../../logo-icon/admin.png';
import manage from '../../../logo-icon/checklist.png';
import logo from '../../../logo-icon/logo.png';
import logout from '../../../logo-icon/logout.png';
import order from '../../../logo-icon/order.png';
import payment from '../../../logo-icon/payment.png';
import add from '../../../logo-icon/plus.png';
import review from '../../../logo-icon/review.png';
import Payments from '../../Payments/Payments';
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
        fetch('https://immense-brook-80254.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    let history = useHistory();

    function handleLogOut() {
        setLoggedInUser({})
        history.push("/home");
    }
    return (
        <section>
            <Router>
                <div className='dashboard-container'>
                    <aside className='dashboard-aside'>
                        <img className='dashboard-aside-logo' src={logo} alt="" />
                        <nav>
                            {isAdmin ? <ul>
                                <li>
                                    <Link to='/dashboard/order'>
                                        <img className='aside-icon' src={order} alt="" />
                                        Customer List</Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/addData'><img className='aside-icon' src={add} alt="" />Add Data</Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/makeAdmin'><img className='aside-icon' src={admin} alt="" />Make Admin</Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/manageService'><img className='aside-icon' src={manage} alt="" />Manage DataBase</Link>
                                </li>
                                <li>
                                    <Link to='/' onClick={handleLogOut}><img className='aside-icon' src={logout} alt="" />Log Out</Link>
                                </li>
                            </ul>
                                :
                                <ul>
                                    <li>
                                        <Link to='/dashboard/payment'><img className='aside-icon' src={payment} alt="" />Payment</Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard/customerServiceList'><img className='aside-icon' src={manage} alt="" />Service List</Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard/review'><img className='aside-icon' src={review} alt="" />Review</Link>
                                    </li>
                                    <li>
                                        <Link to='/' onClick={handleLogOut}><img className='aside-icon' src={logout} alt="" ></img>Log Out</Link>
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
                            <Route path='/dashboard/payment'>
                                <Payments></Payments>
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