import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const navigate=useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const location=useLocation();
      let from = location.state?.from?.pathname || "/";
      const handleLogin=event=>{
          event.preventDefault();
          const email=event.target.email.value;
          const password=event.target.password.value;
          signInWithEmailAndPassword(email, password);
      }
      if(user){
        navigate(from, { replace: true });
      }
    return (
        <div className='container d-flex align-items-center ' style={{ height: '100vh ' }}>
            <div className='w-50 mx-auto p-4 form-section'>
                <h2 className='mt-5 mb-3'>Sign Into Your Account</h2>
                <Form onSubmit={handleLogin}>
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
                    
                    <button onClick={()=>navigate('/resetpassword')} className='btn mb-2 btn-link text-decoration-none '>Forgot your password?</button>
                    <Button variant="primary" className='w-100 form-button d-block' type="submit">
                        login
                    </Button>

                </Form>
                <SocialLogin></SocialLogin>
                <p className='text-center'>Don't have an account? <span onClick={()=>navigate('/registration')} style={{cursor:'pointer'}} className='text-primary'>Register here</span></p>
            </div>
        </div>
    );
};

export default Login;