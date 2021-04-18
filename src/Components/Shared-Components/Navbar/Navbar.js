import React, { useState } from 'react';
import {
    Link
} from "react-router-dom";
import logo from '../../../logo-icon/logo.png';
import menu from '../../../logo-icon/menu.png';
import './Navbar.css';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <nav className='navbar-main'>
            <div className='navbar-logo'>
                <Link to='/'><img src={logo} alt="" /></Link>
                <Link
                    onClick={() => setIsActive(!isActive)}
                    className="toggle-button"
                >
                    <img src={menu} alt="" />
                </Link>
            </div>
            <div className={`navbar-links  ${isActive && "active"}`}>
                <ul>
                    <li>
                        <Link to='/home'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/services'>SERVICES</Link>
                    </li>
                    <li>
                        <Link to='/contact'>CONTACT</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/order'>DASHBOARD</Link>
                    </li>
                    <li>
                        <Link to='/login'>LOGIN</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;