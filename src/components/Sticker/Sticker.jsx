import React from 'react';
import './Sticker.css'
const Sticker = () => {
    return (
        <div className="w-full bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white py-12 px-6  flex flex-col items-center justify-center inter">
            <h2 className='text-5xl mb-10 font-semibold'>Trusted by Millions, Built for You</h2>
            <div className='flex items-center justify-between gap-16'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <p className='text-gray-300'>Total Downloads</p>
                    <h3 className='text-6xl font-bold'>29.6M</h3>
                    <p className='text-gray-300'>21% more than last month</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <p className='text-gray-300'>Total Reviews</p>
                    <h3 className='text-6xl font-bold'>906K</h3>
                    <p className='text-gray-300'>46% more than last month</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <p className='text-gray-300'>Active Apps</p>
                    <h3 className='text-6xl font-bold'>132+</h3>
                    <p className='text-gray-300'>31 more will Launch</p>
                </div>

            </div>
        </div>
    );
};

export default Sticker;