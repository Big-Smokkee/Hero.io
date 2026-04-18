import React from 'react';
import { Link, NavLink } from 'react-router';
import githubImg from '../../assets/github.png';
import logoImg from '../../assets/logo.png';
import './Navbar.css'
const Navbar = () => {

    const links = [
        <NavLink to='/' className={({ isActive }) =>
            `font-semibold text-[16px] leading-[152%] tracking-[0] 
       transition duration-300 
       ${isActive
                ? "bg-clip-text text-transparent bg-linear-to-r from-[#632EE3] to-[#9F62F2] underline underline-offset-4"
                : "text-black"}`

        }> Home</NavLink >,
        <NavLink to='/apps' className={({ isActive }) =>
            `font-semibold text-[16px] leading-[152%] tracking-[0] 
       transition duration-300 
       ${isActive
                ? "bg-clip-text text-transparent bg-linear-to-r from-[#632EE3] to-[#9F62F2] underline underline-offset-4"
                : "text-black"}`
        }> Apps</NavLink >,
        <NavLink to='/installation' className={({ isActive }) =>
            `font-semibold text-[16px] leading-[152%] tracking-[0] 
       transition duration-300 
       ${isActive
                ? "bg-clip-text text-transparent bg-linear-to-r from-[#632EE3] to-[#9F62F2] underline underline-offset-4"
                : "text-black"}`
        }> Installation</NavLink >
    ]
    return (
        <div className="navbar text-black shadow-sm px-10 md:px-16 lg:px-20 py-2 inter">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow gap-4">
                        {links}
                    </ul>
                </div>
                <Link
                    to="/"
                    className="bg-clip-text text-transparent font-bold text-xl 
                   bg-linear-to-r from-[#632EE3] to-[#9F62F2] 
                   hover:opacity-80 transition duration-300 flex gap-1 items-center"
                >
                    <img src={logoImg} alt="logoImg" className='w-10' />
                    <h2>HERO.IO</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className='flex gap-2.5 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-3 rounded-xl items-center' to="https://github.com/Big-Smokkee">
                    <img src={githubImg} alt="githubImg" />
                    <p>Contribute</p>
                </Link>
            </div>
        </div >
    );
};

export default Navbar;