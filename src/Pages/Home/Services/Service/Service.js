import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ serv }) => {
    const { _id, name, price, img, description } = serv;

    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <p>{description}</p>
            <button onClick={() => navigateToServiceDetail(_id)}>Book: {name}</button>
        </div>
    );
};

export default Service;