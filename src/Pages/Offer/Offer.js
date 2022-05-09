import React from 'react';
import offerImage1 from '../../images/banner/banner-1.jpg';
import offerImage2 from '../../images/banner/banner-2.jpg';
import './Offer.css';

const Offer = () => {
    return (
        <div className="offer-container">
            <div className="offer">
                <img src={offerImage1} alt="" />
                <div className="content">
                    <h3>special offer</h3>
                    <p>upto 45% off</p>
                    <a href="#" className='button'>CheckOut</a>
                </div>

            </div>
            <div className="offer">
                <img src={offerImage2} alt="" />
                <div className="content">
                    <h3>limited offer</h3>
                    <p>upto 50% off</p>
                    <a href="#" className='button'>CheckOut</a>
                </div>

            </div>

        </div>
    );
};

export default Offer;