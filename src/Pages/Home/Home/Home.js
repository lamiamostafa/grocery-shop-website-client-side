import React from 'react';
import Banner from '../Banner/Banner';
import Feedback from '../Feedback/Feedback';
import Services from '../Services/Services';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <WhyUs></WhyUs>
            <Feedback></Feedback>


        </div>
    );
};

export default Home;