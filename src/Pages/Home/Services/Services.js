import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className='my-5'>
            {/* -----------------section header-------------- */}
            <div className='text-center'>
                <h2>My Services</h2>
                <div className=' w-25 mx-auto '>
                    <div style={{ height: '2px' }} className='w-25 mx-auto bg-primary'></div>
                </div>
            </div>
            <div  id='services'>
                <Row xs={1} md={3} className="g-4 container mx-auto mt-3">
                    {
                        services.map(service => <Service 
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;