import React, { use, useEffect, useState } from 'react';
import { loadInstalledApps } from '../../utilities/addToInstalledApps';
import InstalledApps from '../../components/InstalledApps/InstalledApps';

const InstallationPage = ({ appDataPromise }) => {
    const appData = use(appDataPromise);
    const [myInstalledApps, setMyInstalledApps] = useState([]);
    useEffect(() => {
        const stored = loadInstalledApps();
        console.log(stored);
        // setStoredBookData(stored);
        const myStoredAppList = appData.filter(app => stored.includes(app.id));
        // console.log(myStoredAppList);
        setMyInstalledApps(myStoredAppList);
        // console.log(myInstalledApps);
    }, []);



    return (
        <div className="p-20 text-black">
            <div className='text-center'>
                <h2 className="text-5xl font-semibold mb-4 text-[#001931]">Your Installed Apps</h2>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex items-center justify-between mb-6'>
                <div className='flex gap-1 text-2xl text-[#001931]'>
                    <span>{myInstalledApps.length}</span>
                    <p>Apps Found</p>
                </div>
                <div>
                    {/* <input type="search" name="Search App" id="" placeholder='search apps' className='border border-[#D2D2D2]   px-3 py-4 rounded-xl text-[#001931]' /> */}
                    <input type="" name="" id="" placeholder='Sort By Size' />
                </div>
            </div>
            <div>
                {
                    myInstalledApps.map(app => <InstalledApps app={app} key={app.id}></InstalledApps>)
                }
            </div>

        </div>
    );
};

export default InstallationPage;
