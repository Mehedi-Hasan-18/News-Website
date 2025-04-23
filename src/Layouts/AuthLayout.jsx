import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-[#F3F3F3] text-black font-Poppins">
            <header className="py-3 w-11/12 mx-auto">
                <NavBar></NavBar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;