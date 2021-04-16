import React from 'react';
import earbuds from '../../../images/headphone.jpg';
import headphone from '../../../images/headphone2.jpg';
import lens from '../../../images/lens.jpg';
import mouse from '../../../images/mouse.jpg';
import RefurbishedCart from '../RefurbishedCart/RefurbishedCart';
import './RefurbishedShop.css';

const RefurbishedShop = () => {
    const refurbishedPdData = [
        {
            id: 1,
            pdImg: earbuds,
            pdName: 'earbuds n11',
            pdPrice: 35,
        },
        {
            id: 2,
            pdImg: headphone,
            pdName: 'Headphone bmg300x',
            pdPrice: 35,
        },
        {
            id: 3,
            pdImg: lens,
            pdName: 'Lens ku8500',
            pdPrice: 35,
        },
        {
            id: 4,
            pdImg: mouse,
            pdName: 'mouse fr-01',
            pdPrice: 35,
        },
    ]
    return (
        <section>
            <h3 className='phone-text'>REFURBISHED DEVICE SHOP</h3>
            <div className='refurbished-container'>
                {refurbishedPdData.map(pd => <RefurbishedCart pd={pd} key={pd.id}></RefurbishedCart>)}
            </div>
        </section>
    );
};

export default RefurbishedShop;