import React from 'react';
import Footer from '../../Shared-Components/Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Address from '../Address/Address';
import Discount from '../Discount/Discount';
import FAQ from '../FAQ/FAQ';
import Header from '../Header/Header';
import News from '../News/News';
import RefurbishedShop from '../RefurbishedShop/RefurbishedShop';
import Service from '../Service/Service';
import Testimonials from '../Testimonials/Testimonials';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <AboutUs></AboutUs>
            <Testimonials></Testimonials>
            <RefurbishedShop></RefurbishedShop>
            <News></News>
            <FAQ></FAQ>
            <Address></Address>
            <Discount></Discount>
            <Footer></Footer>
        </div>
    );
};

export default Home;