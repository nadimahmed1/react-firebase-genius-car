import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useServiceDetails from '../../../Hooks/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import axios from 'axios';
import { toast } from 'react-toastify';

const CheckOut = () => {

    // # 2 line
    const [user] = useAuthState(auth);

    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId);


    // ai state

    // const [user, setUser] = useState({
    //     name: 'Nadim Ahmed',
    //     email: 'Nadim@Adim.com',
    //     address: 'Habiganj',
    //     phone: '0171122331'
    // })

    // // ai handler
    // const handleFormChange = e => {
    //     const { address, ...rest } = user;
    //     const newAddress = e.target.value;
    //     const newUser = { address: newAddress, ...rest };
    //     setUser(newUser)
    // }

    const handleOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value


        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                console.log(response);
                const { data } = response;
                if (data.insertedId) {
                    toast('Your Order Is Booked')
                    event.target.reset();
                }


            })
    }

    return (
        // puro form
        <div className='w-50 mx-auto'>
            <h2>This is Book for you: {service.name}</h2>

            <form onSubmit={handleOrder}>
                <input className='w-100 mb-2' value={user.displayName} type="text" name='name' placeholder='Name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' value={user?.email} type="email" name='email' placeholder='Email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' value={service.name} type="text" name='service' placeholder='Service' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name='address' placeholder='Address' required />
                <br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='Phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="BookNow" />

            </form>
        </div>
    );
};

export default CheckOut;