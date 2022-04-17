import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

const Register = () => {
    const navgiate=useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegisterFrom=event=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        createUserWithEmailAndPassword(email,password)
    }

    return (
        <div className='container d-flex align-items-center ' style={{ height: '100vh ' }}>
            <div className='w-50 mx-auto p-4 form-section'>
                <h2 className='mt-5 mb-3'>Create An Cccount</h2>
                <Form onSubmit={handleRegisterFrom}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Full Name" />
                        <Form.Text className="text-muted">
                           
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                           
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <button className='btn mb-2 btn-link text-decoration-none '>Forgot your password?</button>
                    <Button variant="primary" className='w-100 form-button d-block' type="submit">
                        Register
                    </Button>

                </Form>
                <SocialLogin></SocialLogin>
                <p onClick={()=>navgiate('/login')} className='text-center'>Already a member? <span style={{cursor:'pointer'}} className='text-primary'>Login here</span></p>
            </div>
        </div>
    );
};

export default Register;