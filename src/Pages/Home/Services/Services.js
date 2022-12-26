import React, { useEffect, useState } from 'react';

import Service from './Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/server')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id='Services' className='Services'>
            <h1 className='text-primary mt-5 text-center'>Our Services</h1>
            <div className="services-container">
                {
                    services.map(serv => <Service
                        key={serv._id}
                        serv={serv}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;