import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import './Root.css';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const Root = () => {
    const navigation = useNavigation();
    console.log(navigation);
    console.log(navigation.state);
    return (
        <div className='bg-white max-h-full inter'>
            <Navbar></Navbar>
            {navigation.state === "loading" && <LoadingScreen></LoadingScreen>}
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;