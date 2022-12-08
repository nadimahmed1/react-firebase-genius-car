import React from 'react';
import sleep from '../../images/banner/priscilla-du-preez-jfe6EIxGPMs-unsplash (1).jpg'

const NotFound = () => {
    return (
        <div>
            <h3 className='text-center text-danger'>Don't Disturb!!!!</h3>
            <img className='w-100 ' src={sleep} alt="" />
        </div>
    );
};

export default NotFound;