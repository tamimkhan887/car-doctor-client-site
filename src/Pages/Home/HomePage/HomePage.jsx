import React from 'react';
import Slider from '../Slider/Slider';
import HeroSection from '../HeroSection/HeroSection';
import ServiceArea from '../ServiceArea/ServiceArea';
import Products from '../Products/Products';
import Features from '../Features/Features';
import Footer from '../../Components/Footer/Footer';
import Teams from '../Teams/Teams';

const HomePage = () => {
    return (
        <div className='mx-6'>
            <Slider></Slider>
            <HeroSection></HeroSection>
            <ServiceArea></ServiceArea>
            <Products></Products>
            <Teams></Teams>
            <Features></Features>
        </div>
    );
};

export default HomePage;