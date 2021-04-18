import React from 'react';
import headerBg from '../../../images/header-bg.jpg';

const HeaderMain = () => {
    return (
        <main className='header-main-section'>
            <div className='phone-container header-text-side'>
                <h1 className='header-title phone-text'>Quick Repair From Best Team</h1>
                <p className='header-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ullam eritatis perferendis optio quidem beatae, fugit vitae impedit. Esse, vero aliquam corporis tenetur itaque culpa odit, animi optio placeat rerum magni, omnis qui ducimus alias modi laboriosam obcaecati.</p>
                <button className='phone-btn header-main-btn'>See All Services</button>
            </div>
            <div className='header-aside-img'>
                <img src={headerBg} alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;