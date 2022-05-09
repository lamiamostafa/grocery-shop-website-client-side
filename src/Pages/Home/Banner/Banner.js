import React from 'react';
import './Banner.css';
import banner from '../../../images/category/home-img.png';


const Banner = () => {

    return (

        <section class="banner-section">
            <div class="image">
                <img className="img-fluid" src={banner}></img>

            </div>
            <div className="content">
                <span>Fresh And Organic</span>
                <h3>Your Daily Need Products</h3>
                <button className="btn">Get Started</button>
            </div>
        </section>
    );
};

export default Banner;