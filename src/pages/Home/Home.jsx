import React from 'react';
import Hero from '../../components/Hero/Hero';
import Sticker from '../../components/Sticker/Sticker';
import { useLoaderData } from 'react-router';
import TrendindApps from '../../components/TrendindApps/TrendindApps';

const Home = () => {
    const appsData = useLoaderData();
    return (
        <div className='text-black'>
            <Hero></Hero>
            <Sticker></Sticker>
            <TrendindApps appsData={appsData} key={appsData.id}></TrendindApps>
        </div>
    );
};

export default Home;