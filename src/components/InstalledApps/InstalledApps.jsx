import React from 'react';
import { Download, Star } from 'lucide-react';
const InstalledApps = ({ app }) => {
    const { companyName, title, downloads, ratingAvg, image, size } = app;
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <img src={image} alt="image" className='w-60 h-auto rounded-xl' />
                <div>
                    <div className='flex'>
                        <p>{companyName}: </p>
                        <p>{title}</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-1'>
                            <span><Download size={16} ></Download></span>
                            <p>{downloads}</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span><Star size={16} /></span>
                            <p>{ratingAvg}</p>
                        </div>
                        <div className='flex items-center'>
                            <p>{size} MB</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button className='px-4 py-3 bg-[#00D390] text-white rounded'>Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledApps;