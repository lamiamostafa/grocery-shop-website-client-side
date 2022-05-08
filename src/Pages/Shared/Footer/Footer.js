import React from 'react';



const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 py-4 bg-black text-white'>
            <div className='container w-50 mx-auto'>
                <p >copyright &copy; {year} Lamia Mostafa  <br /> All Rights Reserved</p>


            </div>


        </footer>
    );
};

export default Footer;