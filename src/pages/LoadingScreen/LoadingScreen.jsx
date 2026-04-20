import React from 'react';
import logoImg from '../../assets/logo.png'
import './LoadingScreen.css'
const LoadingScreen = () => {
    return (
        <div className='flex justify-center items-center h-screen inter gap-2'>
            <h1 className='text-8xl text-gray-500'>L</h1>
            <img src={logoImg} alt="logoImg" className='w-40 animate-spin' />
            <h1 className='text-8xl text-gray-500'>D</h1>
            <h1 className='text-8xl text-gray-500'>I</h1>
            <h1 className='text-8xl text-gray-500'>N</h1>
            <h1 className='text-8xl text-gray-500'>G</h1>
        </div>
    );
};

export default LoadingScreen;