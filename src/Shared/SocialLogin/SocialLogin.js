import React from 'react';
import { FaGoogle,FaFacebookF,FaGithub } from "react-icons/fa";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './SocialLogin.css'
import auth from '../../Firebase/firebase.init';
import { toast, ToastContainer } from 'react-toastify';
const SocialLogin = () => {
    
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);
    const handleGoogle=()=>{
        signInWithGoogle();
        
    }
    const handleGithub=()=>{
        signInWithGithub();
    }
    const handleFacebook=()=>{
        signInWithFacebook();
    }


    
    return (
        <div className='py-3'>
            
            <div className='text-center py-2'>
                <button onClick={handleGoogle} className='login-social-wrap'><FaGoogle className='text-white'></FaGoogle></button>
                <button onClick={handleFacebook} style={{background:'#3B589E'}}className='login-social-wrap'><FaFacebookF className='text-white'></FaFacebookF></button>
                <button onClick={handleGithub} style={{background:'#111'}} className='login-social-wrap'><FaGithub className='text-white'></FaGithub></button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SocialLogin;