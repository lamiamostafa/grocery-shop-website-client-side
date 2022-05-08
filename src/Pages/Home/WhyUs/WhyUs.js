import React from 'react';
import './WhyUs.css'

const WhyUs = () => {
    return (
        <div id="whyUs" className="bg-primary text-white card-container my-5 ">

            <div className="card-body">
                <h5 className="card-title">Working Time</h5>
                <p className="card-text">Monday-Friday - 11.00 AM - 1.00 PM</p>
                <p className="card-text">Saturday-Sunday - 10.00 AM - 12.00 PM</p>
            </div>
            <div className="card-body">
                <h5 className="card-title">Appointment Time Call</h5>
                <p className="card-text">Monday-Friday - 11.00 PM - 8.00 AM</p>
                <p className="card-text">Saturday-Sunday - 10.00 PM - 7.00 AM</p>
            </div>
            <div className="card-body">
                <h5 className="card-title">For Any Emergeny</h5>
                <p className="card-text">Call +8801811813419</p>
                <p className="card-text">Call +8801993625659</p>
            </div>


        </div>
    );
};

export default WhyUs;