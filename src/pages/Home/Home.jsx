import React from 'react';
import Hero from '../../components/Hero/Hero';
import Sticker from '../../components/Sticker/Sticker';
import TrendindApps from '../../components/TrendindApps/TrendindApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    // const Home = ({ appDataPromise }) => {
    // const appsData = use(appDataPromise);
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