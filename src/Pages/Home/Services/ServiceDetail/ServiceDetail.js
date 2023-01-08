import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../../../Hooks/useServiceDetails';

const ServiceDetail = () => {

    // #
    const { serviceId } = useParams();
    // #
    const [service] = useServiceDetails(serviceId)

    return (
        <div>
            <h1>More Information of Services: {service.name}</h1>

            <div className='text-center'>
                {/* # */}
                <Link to={`/checkout/${serviceId}`} className=' btn btn-primary'>Proceed CheckOut</Link>
            </div>
        </div>
    );
};

export default ServiceDetail;