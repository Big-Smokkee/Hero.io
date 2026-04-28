import React from 'react';
import { Download, HandPlatter, Star } from 'lucide-react';
import { deleteFromInstalledApps } from '../../utilities/addToInstalledApps';
import { toast } from 'react-toastify';
import './InstalledApps.css';
const InstalledApps = ({ app }) => {
    const { companyName, title, downloads, ratingAvg, image, size, id } = app;
    const handleRemoveFromList = (id) => {
        deleteFromInstalledApps(id);
        toast(`${title} is uninstalled successfully`);
    }
    return (
        <div className='flex items-center justify-between p-4 border border-[#D9D9D9] rounded-2xl my-3 inter'>
            <div className='flex items-center gap-4'>
                <img src={image} alt="image" className='w-60 h-auto rounded-xl' />
                <div>
                    <div className='flex text-[#001931] font-medium text-xl gap-1'>
                        <p>{companyName}: </p>
                        <p>{title}</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-1 font-medium text-[#00D390]'>
                            <span><Download size={16} ></Download></span>
                            <p>{downloads}</p>
                        </div>
                        <div className='flex items-center gap-1 text-[#FF8811]'>
                            <span><Star size={16} /></span>
                            <p>{ratingAvg}</p>
                        </div>
                        <div className='flex items-center text-[#627382]'>
                            <p>{size} MB</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button className='px-4 py-3 bg-[#00D390] text-white rounded font-semibold cursor-pointer' onClick={() => handleRemoveFromList(id)}>Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledApps;