import React, { useEffect, useState } from 'react';

const useUsers = (url) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/server')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services, setServices]
};

export default useUsers;