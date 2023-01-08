import { useEffect, useState } from "react";

const useServiceDetails = serviceId => {
    const [service, setService] = useState({});
    // puro code ti
    useEffect(() => {
        const url = `http://localhost:5000/server/${serviceId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [serviceId])
    return [service]
}
export default useServiceDetails;