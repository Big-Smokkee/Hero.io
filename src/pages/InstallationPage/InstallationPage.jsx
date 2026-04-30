import React, { useEffect, useState } from 'react';
import { loadInstalledApps } from '../../utilities/addToInstalledApps';
import InstalledApps from '../../components/InstalledApps/InstalledApps';
import { ChevronDown } from 'lucide-react';
import { toast } from 'react-toastify';
import './InstallationPage.css';
import { useLoaderData } from 'react-router';

// const InstallationPage = ({ appDataPromise }) => {
const InstallationPage = () => {
    // const appData = use(appDataPromise);
    const appData = useLoaderData();
    const [myInstalledApps, setMyInstalledApps] = useState([]);
    const [sortedApps, setSortedApps] = useState("Sort By Downloads");

    const parseDownloads = (downloads) => {
        if (downloads.endsWith("M")) {
            return parseFloat(downloads) * 1000000;
        }
        if (downloads.endsWith("K")) {
            return parseFloat(downloads) * 1000;
        }
    }
    const handleSortedApps = (type) => {
        if (type === "highToLow") {
            const sortByDownloadHighToLow = [...myInstalledApps].sort((a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads));
            setSortedApps("High - Low");
            setMyInstalledApps(sortByDownloadHighToLow);
            toast("Installed Apps are now sorted in High to Low");
        }
        if (type === "lowToHigh") {
            const sortByDownloadLowToHigh = [...myInstalledApps].sort((a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads));
            setSortedApps("Low - High");
            setMyInstalledApps(sortByDownloadLowToHigh);
            toast("Installed Apps are now sorted in Low to High");
        }

    }

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
        <div className="p-20 text-black inter">
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
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1 flex items-center gap-1 bg-white text-black border-[#D9D9D9]">
                            <p>{sortedApps}</p>
                            {/* <ChevronDown /> */}
                            <ChevronDown></ChevronDown>
                        </div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm border-[#D9D9D9] border">
                            <li><a onClick={() => handleSortedApps("highToLow")}>High - Low</a></li>
                            <li><a onClick={() => handleSortedApps("lowToHigh")}>Low - High</a></li>
                        </ul>
                    </div>
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
