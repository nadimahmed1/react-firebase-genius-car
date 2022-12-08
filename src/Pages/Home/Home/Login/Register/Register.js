import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password, name);
    }
    const navigateToLogin = () => {
        navigate('/login')
    }
    return (
        <div className='register'>
            <h2 className='text-center text-primary'>Please Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Your Name' id="" />
                <input type="email" name="email" placeholder='Your Email' id="" required />
                <input type="password" name="password" placeholder='Your Password' id="" required />
                <input type="submit" value="Submit" />
            </form>
            <p>Already have an Account? <Link onClick={navigateToLogin} className='text-primary' to={'/login'}>Please Login</Link></p>
        </div>
    );
};

export default Register;