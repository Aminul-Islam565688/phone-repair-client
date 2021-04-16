import React from 'react';
import map from '../../../logo-icon/map.png';
import email from '../../../logo-icon/message.png';
import phone from '../../../logo-icon/smartphone.png';
import './Address.css';

const Address = () => {
    return (
        <section>
            <div className="address mt-5">
                <div className='address-item'>
                    <img src={map} alt="" />
                    <p className='mb-1'>131 Lonsdale St, Melbourne VIC 3000, Australia</p>
                </div>
                <div className='address-item'>
                    <img src={phone} alt="" />
                    <p className='mb-1'>1-777-555-66666</p>
                </div>
                <div className='address-item'>
                    <img src={email} alt="" />
                    <p>phone-repair@example.com</p>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.886545015692!2d90.42299549846248!3d23.75142490354478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9e60f49c22b%3A0xd6b155e702718ba4!2sTaltola%20Market!5e0!3m2!1sen!2sbd!4v1618557451695!5m2!1sen!2sbd" width="1263" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy"></iframe>
        </section>
    );
};

export default Address;