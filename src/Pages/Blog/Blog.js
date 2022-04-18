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
                        <p>
                            Ans: Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Github, Apple, Microsoft, Yahoo, Facebook and Twitter, and more.
                            <br></br>
                            <br></br>
                            Other options i have to implement cards, retina scans, voice recognition, and fingerprints for authentication
                        </p>





                    </div>
                </Col>
                <Col>
                    <div className=' border p-4'>
                        <h4>What other services does firebase provide other than authentication?</h4>

                        <p>
                            There are many services which Firebase provides, Most useful of them are:
                        </p>

                        <ul>
                            <li>Cloud Functions.</li>
                            <li>Authentication.</li>
                            <li>Hosting</li>
                            <li>Cloud Storage.</li>
                            <li>Google Analytics.</li>
                            <li>Predictions.</li>
                            <li>Cloud Messaging.</li>
                        </ul>



                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default Blog;