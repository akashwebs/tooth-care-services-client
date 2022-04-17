import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div style={{ height: '80vh' }} className='  d-flex  align-items-center'>
            <div className='text-center not-found mx-auto'>
                <h1>404</h1>
                <p>Ooops!!</p>
                <p>THAT PAGE DOESN'T EXIST OR IS UNAVAILABLE</p>
                <Link to={'/'} className='banner-button text-decoration-none my-3 d-block'>Go Back To Home</Link>
            </div>
        </div>
    );
};

export default NotFound;