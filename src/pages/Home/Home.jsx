import React, { use } from 'react';
import Hero from '../../components/Hero/Hero';
import Sticker from '../../components/Sticker/Sticker';
import TrendindApps from '../../components/TrendindApps/TrendindApps';

const Home = ({ appDataPromise }) => {
    const appsData = use(appDataPromise);
    return (
        <div className='text-black'>
            <Hero></Hero>
            <Sticker></Sticker>
            <TrendindApps appsData={appsData} key={appsData.id}></TrendindApps>
        </div>
    );
};

export default Home;