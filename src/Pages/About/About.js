import React from 'react';
import { Col, Row } from 'react-bootstrap';
import aboutMe from '../../Assets/about.png'
import './About.css'
import { FaTwitterSquare, FaFacebookF, FaLinkedin } from "react-icons/fa";


const About = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center my-5'>My About</h2>
            <Row xs={1} md={2} className="g-5 align-items-center">
                <Col className='about-img'>
                    <img className='img-fluid' src={aboutMe} alt="" />
                   
                        <FaTwitterSquare className='about-social fs-1 me-3' />
                  
                   
                        <FaFacebookF className='about-social fs-1 me-3' />
                   
                    
                        <FaLinkedin className=' about-social fs-1 me-3' />
                   
                </Col>
                <Col className='about-info'>
                    <p className='fs-4'> My goal is to build myself as a skilled full stack web developer before 2023.I will just keep learning whenever I have time to meet my goals And I will make something every day.In the midst of hundreds of activities, I will set aside a minimum of eight hours per day for learning.No matter how many obstacles come, I will not back down from my goal.</p>
                </Col>
            </Row>

        </div>
    );
};

export default About;