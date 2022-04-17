import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import './Cheackout.css'


const CheackOut = () => {
    const [user]=useAuthState(auth);
    return (
        <div className='container d-flex align-items-center ' style={{ height: '100vh ' }}>
            <div className=' mx-auto p-4 checkout-container'>
                <div className=''>
                    <h1 className='my-4'>Make an Appointment</h1>
                    <div className=' w-50 '>
                        <div style={{ height: '2px' }} className='w-25 bg-primary'></div>
                    </div>
                </div>
                <p className='text-dark my-4'>We don’t want you to think what is the best for you. We know what it is and will make everything to help.</p>
                <Form className='appointment-container'>
                    <div className='d-flex'>
 
                            <input className='w-50 d-block me-2' type="text" name="yourName" id="" placeholder='Your Name' />
                            <input className='w-50 ms-2' type="tel" name="phone" id="" placeholder='Phone' />
                       
                    </div>
                    <div className='d-flex my-3'>
 
                            <input className='w-50 d-block me-2' type="text" name="address" id="" placeholder='Full Address' />
                            <input readOnly className='w-50 ms-2' type="email" name="Email" id="" placeholder='Your email' value={user?.email} />
                       
                    </div>
                    <div className='d-flex my-3'>
 
                            <input className='w-50 d-block me-2' type="date" name="date" id="" placeholder='Choose Date' />
                            <input className='w-50 ms-2' type="time" name="time" id="" placeholder='Choose time' />
                       
                    </div>

                    <Button variant="primary" className='w-100 form-button py-3 fs-5 d-block my-4' type="submit">
                        Proccess Appointment
                    </Button>

                </Form>
            </div>
        </div>
    );
};

export default CheackOut;