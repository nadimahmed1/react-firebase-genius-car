import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';



const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (agree) {
            createUserWithEmailAndPassword(email, password)
        }

    }

    if (user) {
        navigate('/home')
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
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius car terms and condition</label>
                <input disabled={!agree} className='w-50 mx-auto d-block mb-2 btn btn-primary' type="submit" value="Register" />

            </form>
            <p>Already have an Account? <Link onClick={navigateToLogin} className='text-primary' to={'/login'}>Please Login</Link></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;