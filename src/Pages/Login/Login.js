import React from 'react';
import { Button, Form } from 'react-bootstrap';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    return (
        <div className='container d-flex align-items-center ' style={{ height: '100vh ' }}>
            <div className='w-50 mx-auto p-4 form-section'>
                <h2>login</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" className='w-100 form-button d-block' type="submit">
                        login
                    </Button>
                </Form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;