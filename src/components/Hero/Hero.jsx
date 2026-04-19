import React from 'react';
import '../Hero/Hero.css'
import playStoreImg from '../../assets/playstore.png'
import appStoreImg from '../../assets/appstore.png'
import heroImg from '../../assets/hero.png'

const Hero = () => {
    return (
        <div className='inter mt-20 px-10 md:px-16 lg:px-20'>
            <h1 className='text-[#001931] text-6xl text-center'>We Build<br />
                <span className='bg-clip-text text-transparent font-bold 
                   bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>Productive</span> Apps
            </h1>
            <p className='text-center mt-4 text-[#627382]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br></br>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className='flex gap-4 items-center justify-center my-10'>
                <button className='flex items-center gap-2.5 btn-ghost border border-[#D2D2D2] rounded-xl px-5 py-4'>
                    <img src={playStoreImg} alt="playStoreImg" />
                    <p>Google Play</p>
                </button>
                <button className='flex items-center gap-2.5 btn-ghost border border-[#D2D2D2] rounded-xl px-5 py-4'>
                    <img src={appStoreImg} alt="appStoreImg" />
                    <p>App Store</p>
                </button>
            </div>
            <div className='flex items-center justify-center'>
                <img src={heroImg} alt="Hero Image" />
            </div>

        </div>
    );
};

export default Hero;