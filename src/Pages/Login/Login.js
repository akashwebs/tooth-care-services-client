import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const navgiate=useNavigate()
    return (
        <div className='container d-flex align-items-center ' style={{ height: '100vh ' }}>
            <div className='w-50 mx-auto p-4 form-section'>
                <h2 className='mt-5 mb-3'>Sign Into Your Account</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                           
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <button className='btn mb-2 btn-link text-decoration-none '>Forgot your password?</button>
                    <Button variant="primary" className='w-100 form-button d-block' type="submit">
                        login
                    </Button>

                </Form>
                <SocialLogin></SocialLogin>
                <p className='text-center'>Don't have an account? <span onClick={()=>navgiate('/registration')} style={{cursor:'pointer'}} className='text-primary'>Register here</span></p>
            </div>
        </div>
    );
};

export default Login;