import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h1>More Information of Services: {serviceId}</h1>
            <div className='text-center'>
                <Link to={'/checkout'} className=' btn btn-primary'>Proceed CheckOut</Link>
            </div>
        </div>
    );
};

export default ServiceDetail;