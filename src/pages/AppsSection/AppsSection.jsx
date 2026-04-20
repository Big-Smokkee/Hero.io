import React, { use, useState } from 'react';
import TrendingApp from '../../components/TrendingApp/TrendingApp';
import './AppsSection.css'

const AppsSection = ({ appDataPromise }) => {
    const appData = use(appDataPromise);
    const [numberOfApps, setNumberOfApps] = useState(appData.length);

    return (
        <div className='text-black mt-20 mb-20 px-6 md:px-20 inter'>
            <div className='mb-10 text-center'>
                <h2 className='text-[#001931] text-5xl font-bold mb-4'>Our All Applications</h2>
                <p className='text-[#627382] text-xl'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='flex items-center justify-between mb-6'>
                <div className='flex gap-1 text-2xl text-[#001931]'>
                    <span>({numberOfApps})</span>
                    <p>Apps Found</p>
                </div>
                <div>
                    <input type="search" name="Search App" id="" placeholder='search apps' className='border border-[#D2D2D2]   px-3 py-4 rounded-xl text-[#001931]' />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                {
                    appData.map(app => <TrendingApp app={app} key={app.id}></TrendingApp>)
                }
            </div>
        </div>
    );
};

export default AppsSection;