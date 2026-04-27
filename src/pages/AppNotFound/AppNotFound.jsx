import React from 'react';
import img from '../../assets/error-404.png';
import { useNavigate } from 'react-router';
const AppNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center justify-center gap-4 text-black my-10'>
            <img src={img} alt="error image" />
            <h3 className='text-violet-950 text-5xl'>App Is Not Found</h3>
            <p className='text-lg text-gray-500'>The app you are looking for does not exist or has been removed</p>
            <button className='px-4 py-3 rounded-xl font-semibold bg-violet-950 text-white cursor-pointer' onClick={() => navigate('/')}>Back To Home</button>
        </div>
    );
};

export default AppNotFound;