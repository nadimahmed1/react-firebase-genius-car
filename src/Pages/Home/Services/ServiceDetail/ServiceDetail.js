import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/server/${serviceId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div>
            <h1>More Information of Services: {service.name}</h1>

            <div className='text-center'>
                <Link to={'/checkout'} className=' btn btn-primary'>Proceed CheckOut</Link>
            </div>
        </div>
    );
};

export default ServiceDetail;