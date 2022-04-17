import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../Assets/banner/slide-1-img.png'
import banner2 from '../../../Assets/banner/slide-2-img.png'

const Banner = () => {
    return (
        <div>
            <Carousel className='banner-slider pt-5' fade>
                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col xs={12} md={7} className='d-flex align-items-center'>
                                <div className='banner-info'>
                                    <p>Welcome to the Dentalcare</p>
                                    <h2 className='my-3 fs-1'>Your smiles with us</h2>
                                    <p>Explain to you how all this mistaken idea denouncing wasborn in our clinic you a complete.</p>
                                    <button className='btn banner-button'>Book now</button>
                                </div>
                            </Col>
                            <Col xs={6} md={5}>
                                <div className=''>
                                    <img
                                        className="d-block img-fluid"
                                        src={banner1}
                                        alt="First slide"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                   
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col xs={12} md={5}>
                            <div className=''>
                                    <img
                                        className="d-block img-fluid"
                                        src={banner2}
                                        alt="First slide"
                                    />
                                </div>
                                
                            </Col>
                            <Col xs={6} md={7} className='d-flex align-items-center'>
                            <div className='banner-info'>
                                    <p>Welcome to my Tooth care</p>
                                    <h2 className='my-3 fs-1'>Quality & Affortable</h2>
                                    <p>Explain to you how all this mistaken idea denouncing wasborn in our clinic you a complete.</p>
                                    <button className='btn banner-button'>Explore</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                   
                </Carousel.Item>
                


            </Carousel>
        </div>
    );
};

export default Banner;