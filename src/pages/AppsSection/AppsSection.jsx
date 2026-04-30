import React, { useState } from 'react';
import TrendingApp from '../../components/TrendingApp/TrendingApp';
import './AppsSection.css'
import AppNotFound from '../AppNotFound/AppNotFound';
import { useLoaderData } from 'react-router';

// const AppsSection = ({ appDataPromise }) => {
const AppsSection = () => {
    // const appData = use(appDataPromise);
    const appData = useLoaderData();
    // const [numberOfApps, setNumberOfApps] = useState(appData.length);
    const [searchTerm, setSearchTerm] = useState("");
    const handleForm = (e) => {
        // console.log(e.target.value);
        const input = e.target.value.toLowerCase();
        // console.log(input);
        setSearchTerm(input);
    }


    const filteredApps = appData.filter(app =>
        app.title.toLowerCase().includes(searchTerm)
    );



    return (
        <div className='text-black mt-20 mb-20 px-6 md:px-20 inter' >
            <div className='mb-10 text-center'>
                <h2 className='text-[#001931] text-5xl font-bold mb-4'>Our All Applications</h2>
                <p className='text-[#627382] text-xl'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex items-center justify-between mb-6'>
                <div className='flex gap-1 text-2xl text-[#001931]'>
                    <span>({filteredApps.length})</span>
                    <p>Apps Found</p>
                </div>
                <div>
                    <input type="search" name="SearchApp" id="" placeholder='search apps' value={searchTerm} className='border border-[#D2D2D2]   px-3 py-4 rounded-xl text-[#001931]' onChange={(e) => handleForm(e)} />
                </div>
            </div>

            <div>
                <div className='flex items-center justify-center'>

                    {
                        (filteredApps.length === 0) && <AppNotFound></AppNotFound>
                    }
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        filteredApps.map(app => <TrendingApp app={app} key={app.id}></TrendingApp>)
                    }
                </div >
            </div>
        </div>
    );
};

export default AppsSection;