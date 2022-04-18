import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Experiance = () => {
    return (
        <div className='container my-5'>
            <div className='text-center mb-3'>
                <h2>My Experiance</h2>
                <div className=' w-25 mx-auto'>
                    <div style={{ height: '2px' }} className='w-25 mx-auto bg-primary'></div>
                </div>
            </div>

            <Row xs={1} md={2} className="g-4">
                <Col>
                    <img className='img-fluid' src={'https://i.ibb.co/6mDYV19/1dfg.jpg'} alt="" />
                </Col>
                <Col className=' border '>

                    <div className='mt-4'>
                        <h3>Dr. Raihan Khan</h3>
                        <p className='mb-3'>Dentist</p>
                        <p>I have been working as a dentist in a government hospital for 5 years. I have been able to get dental treatment with 95% success so far.</p>

                        <h3>Knowladge of Tretment</h3>
                        <ul>
                            <li>Dental implant</li>
                            <li>Root Canel</li>
                            <li> Clips and Braces</li>
                            <li>Laserr Treatments</li>
                            <li>General & Cosmetic</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Experiance;