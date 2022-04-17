import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {name, price, discripton, image}=service;
    const navigate=useNavigate();
    
    const handleBookButton=()=>{
        navigate('/checkout')
    }
    
    return (
        <div>
            
            <Col>
                        <Card>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <h4>${price}</h4>
                                <Card.Text>
                                    {discripton}
                                </Card.Text>

                            <button onClick={handleBookButton} className='banner-button'>Book Appoinment</button>
                            </Card.Body>
                        </Card>
                    </Col>
        
        </div>
    );
};

export default Service;