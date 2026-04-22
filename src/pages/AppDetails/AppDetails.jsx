import React, { use } from 'react';
import { useParams } from 'react-router';
import downloadImg from '../../assets/icon-downloads.png';
import ratingImg from '../../assets/icon-ratings.png';
// import ratingImg from '../../assets/'
import reviewImg from '../../assets/icon-review.png';
const AppDetails = ({ appDataPromise }) => {
    const params = useParams();
    const appData = use(appDataPromise);
    // const appDetails = useLoaderData();
    // console.log(appDetails);
    // const { image } = appDetails;
    // console.log(params)
    const { appDetails } = params;
    const appDetailsId = parseInt(appDetails);
    console.log(appDetailsId);
    console.log(appData);
    const app = appData.find(app => appDetailsId === app.id);
    console.log(app);
    const { companyName, title, downloads, ratingAvg, image, reviews } = app;
    return (
        <div className='p-20 text-black'>
            <div className='flex gap-10'>
                <img src={image} alt="" className='w-96 h-96' />
                <div>
                    <h2 className='text-3xl font-medium mb-1'>{companyName}: {title}</h2>
                    <p className='text-xl text-[#627382]'>Developed by
                        <span className='bg-clip-text text-transparent font-semibold  bg-linear-to-r from-[#632EE3] to-[#9F62F2]
 '> {companyName}</span> </p>
                    <div className='border-b border-[#3b3b3bb6] mt-7 mb-7'></div>
                    <div className='flex gap-6'>
                        <div className='flex flex-col gap-2 '>
                            <img src={downloadImg} alt="downloadImg" className='w-10' />
                            <p className='text-[#001931]'>Downloads</p>
                            <h3 className='text-[#001931] text-4xl font-black'>{downloads}</h3>
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <img src={ratingImg} alt="downloadImg" className='w-10' />
                            <p className='text-[#001931]'>Average Ratings</p>
                            <h3 className='text-[#001931] text-4xl font-black'>{ratingAvg}</h3>
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <img src={reviewImg} alt="downloadImg" className='w-10' />
                            <p className='text-[#001931]'>Total Reviews</p>
                            <h3 className='text-[#001931] text-4xl font-black'>{reviews}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;