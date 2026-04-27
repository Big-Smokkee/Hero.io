import { Download, Star } from 'lucide-react';
import React from 'react';

import { Link } from 'react-router';

const TrendingApp = ({ app }) => {
    // console.log(app);
    const { companyName, title, downloads, ratingAvg, image, id } = app;


    return (
        <Link to={`/apps/${id}`}>
            <div className='w-70 h-full flex flex-col rounded-2xl border border-[#D9D9D9] p-4 shadow cursor-pointer'>
                <img src={image} alt="image alter" className='w-full h-79 rounded-xl mb-4' />
                <h4 className='text-xl font-medium mb-4'>{companyName}: {title}</h4>
                <div className='flex justify-between items-center'>
                    <div className='text-[#00D390] font-medium p-1.5 bg-[#F1F5E8] rounded flex gap-2 items-center'>
                        <span><Download size={16} ></Download></span>
                        <p>{downloads}</p>
                    </div>
                    <div className='text-[#FF8811] font-medium p-1.5 bg-[#FFF0E1] rounded flex gap-2 items-center'>
                        <span><Star size={16} /></span>
                        <p>{ratingAvg}</p>
                    </div>
                </div>
            </div>
        </Link >
    );
};

export default TrendingApp;