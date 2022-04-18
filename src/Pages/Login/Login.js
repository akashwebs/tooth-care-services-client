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
      
      let errorMessage;
      
      if(error){
        errorMessage=error.message;
        let splitMes=errorMessage.split('/')
        const sliceMes=splitMes.slice(1)
        const aginSplit= sliceMes[0].split(')')
        const aginSplit2=aginSplit[0].split('-')
        const joinMsg=aginSplit2.join(' ')
        errorMessage=<p className='text-danger'>{joinMsg}</p>;
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
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                           
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required/>
                    </Form.Group>
                    
                    <button onClick={()=>navigate('/resetpassword')} className='btn mb-2 btn-link text-decoration-none '>Forgot your password?</button>
                    {errorMessage}
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