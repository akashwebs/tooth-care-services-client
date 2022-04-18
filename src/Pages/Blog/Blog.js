import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container py-5 my-5'>
            <Row xs={1} md={2} className='g-4'>
                <Col className=''>
                    <div className=' border p-4'>
                        <h4>Difference between authorization and authentication?</h4>
                        <p><strong>Authentication: </strong> Authentication verifies who the user is.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</p>
                        <p><strong>Authorization: </strong> Authorization determines what resources a user can access.Authorization works through settings that are implemented and maintained by the organization.</p>
                    </div>
                </Col>
                <Col >
                <div className=' border p-4'>
                        <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                        <p className='m-0'>many types of benifits given firebase. this reason we are use firebasse. some reason bellow:</p>
                        <ul >
                            <li>Realtime Database</li>
                            <li>Cloud Firestore</li>
                            <li>Fast & Safe Hosting</li>
                            <li>Provides A Free Start to Newbies</li>
                            <li>Google Analytics</li>
                            <li>Free Multi-Platform Firebase Authentication</li>
                            <li>Firebase Testing Services to Improve App Quality</li>
                        </ul>
                        
                    </div>
                </Col>
                <Col>
                <div className=' border p-4'>
                        <h4>What other services does firebase provide other than authentication?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sequi dolorum. Repellat assumenda quo facere exercitationem optio laborum amet cupiditate, debitis, dignissimos soluta sed animi temporibus deserunt similique impedit inventore?</p>
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default Blog;