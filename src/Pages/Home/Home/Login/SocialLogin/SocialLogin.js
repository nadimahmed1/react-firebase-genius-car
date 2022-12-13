import React from 'react';
import googleIcon from '../../../../../images/google-icon-5d4175d6037a16.4552672815645710940143-removebg-preview.png'
import githubIcon from '../../../../../images/images-removebg-preview.png'
import facebookIcon from '../../../../../images/download-removebg-preview.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../../Share/Loading/Loading';
const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, GithubUser, GithubLoading, GithubError] = useSignInWithGithub(auth);

    if (GithubLoading) {
        return <Loading></Loading>
    }

    let errorElement;

    if (error || GithubError) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }

    if (user || GithubUser) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='bg-primary w-50' style={{ height: '1px' }}></div>
                <p className='mt-2 px-2'>or</p>
                <div className='bg-primary w-50' style={{ height: '1px' }}></div>
            </div>
            {errorElement}
            <div className='mt-2'>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto m-2'>
                    <img className='mx-2' style={{ width: '28px' }} src={googleIcon} alt='' />
                    <span>Google Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-info w-50 d-block mx-auto m-2'>
                    <img className='mx-2' style={{ width: '28px' }} src={githubIcon} alt='' />
                    <span>GitHub Sign In</span>
                </button>
                <button className='btn btn-info w-50 d-block mx-auto m-2'>
                    <img className='mx-2' style={{ width: '28px' }} src={facebookIcon} alt='' />
                    <span>FaceBook Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;