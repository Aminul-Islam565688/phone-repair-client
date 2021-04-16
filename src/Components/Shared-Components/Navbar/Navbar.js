import React from 'react';
import {
    Link
} from "react-router-dom";
import logo from '../../../logo-icon/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar-main phone-container'>
            <div className='navbar-logo'>
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div className='navbar-links'>
                <ul>
                    <li>
                        <Link to='/home'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/dashboard'>ABOUT US</Link>
                    </li>
                    <li>
                        <Link to='/services'>SERVICES</Link>
                    </li>
                    <li>
                        <Link to='/login'>LOGIN</Link>
                    </li>
                    <li>
                        <Link to='/contact'>CONTACT</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;