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
        <div className="p-6 md:p-20 text-black inter">
            <div className='text-center mb-6 md:md-0'>
                <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-[#001931]">Your Installed Apps</h2>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
                {/* Apps Found */}
                <div className="flex gap-1 text-xl md:text-2xl text-[#001931] w-full md:w-1/2 justify-center md:justify-start">
                    <span>{myInstalledApps.length}</span>
                    <p>Apps Found</p>
                </div>

                {/* Dropdown */}
                <div className="dropdown dropdown-end w-full md:w-1/2 flex justify-center md:justify-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn m-1 flex flex-row items-center gap-1 bg-white text-black border-[#D9D9D9]"
                    >
                        <p>{sortedApps}</p>
                        <ChevronDown />
                    </div>
                    <ul
                        tabIndex={-1}
                        className="dropdown-content menu bg-white rounded-box z-10 w-52 p-2 shadow-sm border border-[#D9D9D9]"
                    >
                        <li>
                            <a onClick={() => handleSortedApps("highToLow")}>High - Low</a>
                        </li>
                        <li>
                            <a onClick={() => handleSortedApps("lowToHigh")}>Low - High</a>
                        </li>
                    </ul>
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
