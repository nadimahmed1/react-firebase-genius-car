
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../Api/AxiosPrivate';
import auth from '../../firebase.init';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([])
    const navigate = useNavigate();

    const getOrders = async () => {
        const email = user.email;
        const url = `http://localhost:5000/order?email=${email}`;
        try {
            const { data } = await axiosPrivate.get(url);
            setOrders(data);
        }
        catch (error) {
            if (error.response.status === 401 || error.response.status === 403) {
                signOut(auth)
                navigate('/login')
            }
        }
    }
    getOrders();
    return (
        <div>
            <h2>Orders history: {orders.length}</h2>
        </div>
    );
};

export default Orders;