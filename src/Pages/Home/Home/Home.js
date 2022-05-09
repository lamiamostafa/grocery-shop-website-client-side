import React from 'react';
import Category from '../../Category/Category';
import Offer from '../../Offer/Offer';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <Category></Category>
            <Products></Products>




        </div>
    );
};

export default Home;