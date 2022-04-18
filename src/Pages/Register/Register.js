import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../Firebase/firebase.init';
import Loading from '../../Shared/Loading/Loading';

import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

const Register = () => {
    const navgiate=useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      
      const [loginUser]=useAuthState(auth);
      if(loginUser){
          navgiate('/')
      }
    //   const [sendEmailVerification, sending, VerifyError] = useSendEmailVerification(auth);

    const handleRegisterFrom=async event=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        await createUserWithEmailAndPassword(email,password);
       
          toast('send a verify email')
    }
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='container d-flex align-items-center ' style={{ padding: '70px 0' }}>
            <div className='mx-auto p-4 form-section'>
                <h2 className='mt-5 mb-3'>Create An Cccount</h2>
                <Form onSubmit={handleRegisterFrom}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Full Name" required />
                        <Form.Text className="text-muted">
                           
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required/>
                        <Form.Text className="text-muted">
                           
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    
                    <Button variant="primary" className='w-100 form-button d-block' type="submit">
                        Register
                    </Button>

                </Form>
                <SocialLogin></SocialLogin>
                <p onClick={()=>navgiate('/login')} className='text-center'>Already a member? <span style={{cursor:'pointer'}} className='text-primary'>Login here</span></p>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Register;