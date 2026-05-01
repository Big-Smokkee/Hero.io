import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import downloadImg from '../../assets/icon-downloads.png';
import ratingImg from '../../assets/icon-ratings.png';
import { addToInstalledApps, loadInstalledApps } from '../../utilities/addToInstalledApps';
import reviewImg from '../../assets/icon-review.png';
import { toast } from 'react-toastify';
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const AppDetails = () => {
    const app = useLoaderData();

    const { companyName, title, downloads, ratingAvg, image, reviews, size, id, description, ratings } = app;

    const [installBtn, setInstallBtn] = useState(false);
    const [btnName, setBtnName] = useState(`Install Now (${size} MB)`);

    useEffect(() => {
        const allInstalledApps = loadInstalledApps();
        const installed = allInstalledApps.find(appId => appId === id);
        if (installed) {
            setInstallBtn(true);
            setBtnName("Installed");
        }
    }, [id]);

    const handleInstalledApps = (id) => {
        addToInstalledApps(id);
        toast(`Yahoo! App: ${title} is now installed into your Local Storage`);
        setInstallBtn(true);
        setBtnName("Installed");
    };

    return (
        <div className='p-6 md:p-20 text-black my-10'>
            <div className='flex flex-col md:flex-row gap-10'>
                <img src={image} alt="" className='w-100 h-100 object-cover rounded-2xl shadow-lg shadow-[#632EE3]' />
                <div>
                    <h2 className='text-3xl font-medium mb-1 text-center md:text-start'>{companyName}: {title}</h2>
                    <p className='text-xl text-[#627382] text-center md:text-start'>Developed by
                        <span className='bg-clip-text text-transparent font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2]'> {companyName}</span>
                    </p>
                    <div className='border-b border-[#3b3b3bb6] mt-7 mb-7'></div>
                    <div className='flex flex-row flex-wrap gap-x-16 md:gap-x-6 gap-y-4 md:gap-y-6'>
                        <div className='flex flex-col gap-2'>
                            <img src={downloadImg} alt="downloadImg" className='w-10' />
                            <p className='text-[#001931]'>Downloads</p>
                            <h3 className='text-[#001931] text-4xl font-black'>{downloads}</h3>
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <img src={ratingImg} alt="ratingImg" className='w-10' />
                            <p className='text-[#001931]'>Average Ratings</p>
                            <h3 className='text-[#001931] text-4xl font-black'>{ratingAvg}</h3>
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <img src={reviewImg} alt="reviewImg" className='w-10' />
                            <p className='text-[#001931]'>Total Reviews</p>
                            <h3 className='text-[#001931] text-4xl font-black'>{reviews}</h3>
                        </div>
                    </div>
                    <div className='mt-7'>
                        <button
                            className='text-white font-semibold bg-linear-to-r from-[#00D390] to-[#00a370] px-5 py-3.5 rounded'
                            onClick={() => handleInstalledApps(id)}
                            disabled={installBtn}
                        >
                            {btnName}
                        </button>
                    </div>
                </div>
            </div>

            <div className='border-b border-[#3b3b3bb6] mt-7 mb-7'></div>
            <div>
                <h2 className='text-[#001931] text-2xl font-semibold'>Ratings</h2>
                <div className="w-full h-75 my-7">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart layout="vertical" data={ratings}>
                            <YAxis type="category" dataKey="name" />
                            <XAxis type="number" />
                            <Bar dataKey="count" fill="#00D390" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>


            <div className='border-b border-[#3b3b3bb6] mt-7 mb-7'></div>
            <div>
                <h2 className='text-[#001931] text-2xl font-semibold text-center'>Description</h2>
                <p className='text-[#627382] mt-6'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;
