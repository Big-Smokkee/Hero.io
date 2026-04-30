import React from 'react';
import notFoundPng from '../../assets/error-404.png';
import { useLoaderData, useNavigate } from 'react-router';
const PageNotFound = () => {
    const appData = useLoaderData();
    console.log(appData);
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(-1);
    }
    return (
        <div className='p-20 flex justify-center flex-col items-center gap-4 '>
            <img src={notFoundPng} alt="notFoundPng" />
            <div className='flex justify-center flex-col items-center gap-2'>
                <h3 className='font-semibold text-[#001931] text-5xl'>Oops, page not found!</h3>
                <p className='font-semibold text-[#627382] text-xl'>The page you are looking for is not available.</p>
            </div>
            <button onClick={() => handleNavigate()} className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-10 py-3 rounded-xl'>Go Back!</button>
        </div>
    );
};

export default PageNotFound;