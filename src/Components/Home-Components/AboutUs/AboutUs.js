import React from 'react';
import aboutUs from '../../../images/aboutUs3.jpg';
import like from '../../../logo-icon/like2.png';
import watch from '../../../logo-icon/watch.png';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section className='my-5'>
            <h1 className='phone-text my-5'>ABOUT US</h1>
            <div className='aboutUs-container phone-container'>
                <div className='aboutUs-text-side'>
                    <div className='item-1'>
                        <img className='about-icon' src={like} alt="" />
                        <div>
                            <h5>GREATE EXPERIENCE</h5>
                            <p className='text-secondary'>Lorem ipsum ione. Eaque atque vel, repellendus nobis consectetur perferendis culpa labore rem nostrum.</p>
                        </div>
                    </div>
                    <div className='item-2'>
                        <img className='about-icon' src={watch} alt="" />
                        <div>
                            <h5>QUICK SERVICE</h5>
                            <p className='text-secondary'>Lorem ipsum ione. Eaque atque vel, repellendus nobis consectetur perferendis culpa labore rem nostrum.</p>
                        </div>
                    </div>
                    <div className='item-3'>
                        <h4>QUALITY GUARANTEE</h4>
                        <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veniam illo aliquam, possimus id ratione quas libero doloribus iure sit nostrum nemo error optio voluptatum quaerat minus doloremque! Eum unde officiis beatae dicta odio mollitia porro sed, voluptas quas tempore, adipisci ducimus asperiores nulla repellendus nam reprehenderit quidem, fuga harum minima corporis soluta officia. Incidunt blanditiis earum minus unde explicabo ipsa facere, doloribus iusto saepe illo veritatis maiores nesciunt quas!</p>
                        <button className='phone-btn about-btn'>READ MORE</button>
                    </div>
                </div>
                <div className='aboutUs-image'>
                    <img src={aboutUs} alt="" />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;