import React from 'react';
// import { Carousel } from 'react-bootstrap';
import './Banner.css';

import banner1 from '../../../images/category/home-img.png';


const Banner = () => {

    return (

        <section class="banner-section">
            <div class="image">
                <img className="img-fluid" src={banner1}></img>

            </div>
            <div className="content">
                <span>Fresh And Organic</span>
                <h3>Your Daily Need Products</h3>
                <button className="btn">GetStarted</button>
            </div>
        </section>
    );
};

export default Banner;