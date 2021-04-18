import { faFacebook, faGooglePlusG, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../../logo-icon/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer-section'>
            <div className='footer-container p-5 text-white'>
                <div>
                    <img className='mt-3 mb-4' src={logo} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi sequi reprehenderit placeat accusamus? Vel eligendi numquam neque, pariatur atque eos, autem placeat dicta explicabo beatae voluptatem quibusdam laudantium perferendis maxime.</p>
                </div>
                <div className='footer-company'>
                    <h4>Company</h4>
                    <ul className='footer-list'>
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
                <div className='footer-address'>
                    <div>
                        <h4>Contact US</h4>
                        <p><FontAwesomeIcon className='footer-icon' icon={faPhoneAlt} />1-777-555-66666</p>
                        <p><FontAwesomeIcon className='footer-icon' icon={faMapMarkerAlt} />131 Lonsdale St, Melbourne VIC 3000, Australia</p>
                        <p><FontAwesomeIcon className='footer-icon' icon={faEnvelope} />phone-repair@example.com</p>
                    </div>
                    <div>
                        <h4>FOLLOW US</h4>
                        <FontAwesomeIcon className='footer-social-icon' icon={faFacebook} />
                        <FontAwesomeIcon className='footer-social-icon' icon={faGooglePlusG} />
                        <FontAwesomeIcon className='footer-social-icon' icon={faTwitter} />
                        <FontAwesomeIcon className='footer-social-icon' icon={faInstagram} />
                    </div>
                </div>
            </div>
            <p className='footer-copyright-text'>© Copyright Agency and contributors 2021. ABN 53 001 228 799</p>
        </footer>
    );
};

export default Footer;