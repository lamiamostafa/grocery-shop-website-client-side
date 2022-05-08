import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

import banner1 from '../../../images/banner/slider3.png';
import banner2 from '../../../images/banner/slider2.png';
import banner3 from '../../../images/banner/slider3.png';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (

        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className=" d-block slide-img"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Every Patients id Different</h3>
                    <p>Every Smile is Unique</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block slide-img"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>We are here to serve you</h3>
                    <p>You don't have to worry now.Our 24 hour service is available now</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block  slide-img"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>We have Best Medicare plan option for you</h3>
                    <p>
                        We are Ready to Serve you the best treatment.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;