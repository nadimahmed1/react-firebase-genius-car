import React from 'react';

import useUsers from '../../../Hooks/useUsers';
import Service from './Service/Service';
import './Services.css'

const Services = () => {
    const services = useUsers('services.json');

    return (
        <div id='Services' className='Services'>
            <h1 className='text-primary mt-5 text-center'>Our Services</h1>
            <div className="services-container">
                {
                    services.map(serv => <Service
                        key={serv.id}
                        serv={serv}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;