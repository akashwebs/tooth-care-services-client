import React from 'react';
import { FaGoogle,FaFacebookF,FaGithub } from "react-icons/fa";
import './SocialLogin.css'
const SocialLogin = () => {
    return (
        <div className='py-3'>
            <h4 className='text-center'>Another Login</h4>
            <hr />
            <div className='text-center'>
                <button className='login-social-wrap'><FaGoogle className='text-white'></FaGoogle></button>
                <button style={{background:'#3B589E'}}className='login-social-wrap'><FaFacebookF className='text-white'></FaFacebookF></button>
                <button style={{background:'#111'}} className='login-social-wrap'><FaGithub className='text-white'></FaGithub></button>
            </div>
        </div>
    );
};

export default SocialLogin;