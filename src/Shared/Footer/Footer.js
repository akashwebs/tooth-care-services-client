import React from 'react';
import './Footer.css'

import { FaTwitterSquare,FaFacebookF,FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-dark py-5 text-white text-center footer'>
            <h2>Tooth Care</h2>
            <p>tooth care is my personal dental chember. </p>
            <p>i have 4 years experiance in this feild.
            </p>
            <p>I get peace of mind to saw those wellness patients.</p>
        <h2 className='mt-4'>join with us</h2>
        <div >
            <FaTwitterSquare className='fs-1 me-3'/>
            <FaFacebookF className='fs-1 me-3'/>
            <FaLinkedin className='fs-1 me-3'/>
        </div>
            
        </footer>
    );
};

export default Footer;