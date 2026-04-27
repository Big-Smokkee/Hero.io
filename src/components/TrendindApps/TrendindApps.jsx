import React from 'react';
import TrendingApp from '../TrendingApp/TrendingApp';
import { useNavigate } from 'react-router';

const TrendindApps = ({ appsData }) => {
    console.log(appsData)
    const trendingApp = appsData.slice(0, 8);
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/apps');
    }
    return (
        <div className='mt-20 inter'>
            <h2 className='text-[#001931] text-5xl text-center mb-4'>Trending Apps</h2>
            <p className='text-[#627382] text-xl text-center mb-10'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 md:px-20'>
                {
                    trendingApp.map(app => <TrendingApp app={app} key={app.id}></TrendingApp>)
                }
            </div>
            <div className='flex justify-center mt-10 mb-20'>
                <button className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-10 py-4 rounded-xl font-semibold cursor-pointer' onClick={() => handleNavigate()}>
                    Show All
                </button>
            </div>

        </div>
    );
};

export default TrendindApps;