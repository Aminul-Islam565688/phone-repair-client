import React from 'react';
import logo from '../../../logo-icon/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='footer-container p-5 text-white'>
                <div>
                    <img className='my-3' src={logo} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi sequi reprehenderit placeat accusamus? Vel eligendi numquam neque, pariatur atque eos, autem placeat dicta explicabo beatae voluptatem quibusdam laudantium perferendis maxime.</p>
                </div>
                <div>
                    <h4>Company</h4>
                    <ul>
                        <div>
                            <li>Home</li>
                            <li>About</li>
                            <li>Service</li>
                        </div>
                        <div>
                            <li>Shop</li>
                            <li>Blog</li>
                            <li>Contacts</li>
                        </div>
                    </ul>
                </div>
                <div>
                    <div>
                        <h4>CONTACT US</h4>
                        <p>131 Lonsdale St, Melbourne VIC 3000, Australia</p>
                        <p>1-777-555-66666</p>
                        <p>phone-repair@example.com</p>
                    </div>
                    <div>
                        <h4>FOLLOW US</h4>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;