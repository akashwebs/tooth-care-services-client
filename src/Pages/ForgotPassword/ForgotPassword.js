import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../Firebase/firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

const ForgotPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );
    const navgiate = useNavigate();
    // let errorMessage;

    const handleForgotPassowrd = event => {
        event.preventDefault();

        sendPasswordResetEmail(event.target.email.value)
        toast('sent email')


    }
  


    return (
        <div className='container d-flex align-items-center ' style={{ padding: '70px 0' }}>
            <div className=' mx-auto p-4 form-section'>
                <h2 className='mt-5 mb-3'>Recover Your Password</h2>
                <Form onSubmit={handleForgotPassowrd}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            {error?.message}
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" className='w-100 form-button d-block' type="submit">
                        Send Me Email
                    </Button>

                </Form>
                <SocialLogin></SocialLogin>
                <p onClick={() => navgiate('/login')} className='text-center'>Already a member? <span style={{ cursor: 'pointer' }} className='text-primary'>Login here</span></p>
            </div>
           <ToastContainer></ToastContainer>
        </div>
    );
};

export default ForgotPassword;