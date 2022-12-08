import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h1>More Information of Services: {serviceId}</h1>
        </div>
    );
};

export default ServiceDetail;