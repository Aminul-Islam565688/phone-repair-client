import React, { useEffect, useState } from 'react';
import corporate from '../../../images/corporate.jpg';
import customer from '../../../images/customerSERVICE.jpg';
import gameConsole from '../../../images/game-console-2.jpg';
import gurantee from '../../../images/gurantee.jpg';
import pcService from '../../../images/pc-service.jpg';
import phoneImg from '../../../images/phone-img.jpg';
import wifiProblem from '../../../images/wifi-problem.jpg';
import shield from "../../../logo-icon/shield.png";
import CorpoServiceCart from '../CorpoServiceCart/CorpoServiceCart';
import ServiceCart from '../ServiceCart/ServiceCart';
import './Service.css';

const serviceData = [
    {
        id: 1,
        img: pcService,
        title: 'MAC & PC Repair',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus corrupti accusamus nobis, doloribus beatae sit illo nesciunt est iure esse officia repudiandae aliquid inventore laborum molestiae consequatur accusantium eum?',
    },
    {
        id: 2,
        img: gameConsole,
        title: 'Game Console Repair',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus corrupti accusamus nobis, doloribus beatae sit illo nesciunt est iure esse officia repudiandae aliquid inventore laborum molestiae consequatur accusantium eum?',
    },
    {
        id: 3,
        img: wifiProblem,
        title: 'Wifi Problems',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus corrupti accusamus nobis, doloribus beatae sit illo nesciunt est iure esse officia repudiandae aliquid inventore laborum molestiae consequatur accusantium eum?',
    },
    {
        id: 4,
        img: wifiProblem,
        title: 'Wifi Problems',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus corrupti accusamus nobis, doloribus beatae sit illo nesciunt est iure esse officia repudiandae aliquid inventore laborum molestiae consequatur accusantium eum?',
    },
]

const corporateServiceData = [
    {
        id: 1,
        img: corporate,
        title: 'Corporate Service',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus corrupti accusamus nobis, doloribus beatae sit illo nesciunt est iure esse officia repudiandae aliquid inventore laborum molestiae consequatur accusantium eum?',
    },
    {
        id: 2,
        img: customer,
        title: 'Customer Service',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus corrupti accusamus nobis, doloribus beatae sit illo nesciunt est iure esse officia repudiandae aliquid inventore laborum molestiae consequatur accusantium eum?',
    },
    {
        id: 3,
        img: gurantee,
        title: 'Quality Gurantee',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus corrupti accusamus nobis, doloribus beatae sit illo nesciunt est iure esse officia repudiandae aliquid inventore laborum molestiae consequatur accusantium eum?',
    },
]

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:1526/getServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);
    return (
        <section className='my-5'>
            <div className="my-5">
                <h1 className='my-3 phone-text'>Our Service</h1>
                <div className='grid-container phone-container'>
                    {services.map(service => <ServiceCart service={service} key={service._id}></ServiceCart>)}
                </div>
                <div className='service-privacy my-5'>
                    <img src={phoneImg} alt="" />
                    <div className='service-text-side'>
                        <img src={shield} alt="" />
                        <div>
                            <h3>PRIVACY POLICY</h3>
                            <p>Our company pays special attention to privacy of your data. No information from your gadget will be transferred to a third party. We respect our customers.</p>
                        </div>
                    </div>
                </div>
                <div className='grid-container phone-container'>
                    {corporateServiceData.map(corpoService => <CorpoServiceCart corpoService={corpoService} key={corpoService.key}></CorpoServiceCart>)}
                </div>
            </div>
        </section>
    );
};

export default Service;