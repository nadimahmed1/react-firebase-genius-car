import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';



const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);

        signInWithEmailAndPassword(email, password)
    }

    const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(auth);

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('sent Email')

    }

    const navigateRegister = (event) => {
        navigate('/register')
    }

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2>Please Login</h2>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='w-50 mx-auto d-block mb-2' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to Genius Car? <Link to={'/register'} onClick={navigateRegister} className='text-decoration-none text-primary'>Please Register</Link></p>
            <p>forget password? <Link onClick={handleResetPassword} className='text-decoration-none text-primary'>Reset Password</Link></p>
            <SocialLogin></SocialLogin>
        </div>

    );
};

export default Login;