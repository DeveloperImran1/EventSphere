"use client"
import Logo from '@/components/shared/Logo';
import LogoBlue from '@/components/shared/LogoBlue';
import useAuth from '@/hooks/useAuth';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { FaSearch, FaGlobe, FaUserCircle } from 'react-icons/fa';

const DashboardNavbar = () => {
    const session = useSession();
    const { data } = useAuth();
    console.log(data)
    return (
        <header className="  flex flex-col md:flex-row items-center justify-between   text-slate-600 py-2 px-4 md:px-6 md:shadow-md space-y-4 md:space-y-0 z-50">
            {/* Left side: Website Name and Search Bar */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full md:w-auto">
                {/* Website Name */}
                {/* <LogoBlue></LogoBlue> */}
                <Logo></Logo>

                {/* Search Bar */}
                {/* <div className="relative hidden lg:flex items-center w-full md:w-auto text-gray-600">
                    <FaSearch className="absolute left-3 text-yellow-50" />
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="pl-10 pr-4 py-2 rounded-lg bg-white text-gray-800 w-full md:w-64 focus:outline-none border-2 focus:ring-2 focus:ring-blue-300" 
                    />
                </div> */}
            </div>

            {/* Right side: Language Selector, User Info */}
            <div className="hidden md:flex items-center space-x-6 w-full md:w-auto justify-between md:justify-end">
                {/* Language Selector */}
                {/* <div className="relative flex items-center">
                    <FaGlobe className="mr-2 text-white" />
                    <select className=" text-black bg-white py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300">
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="es">Spanish</option>
                    </select>
                </div> */}

                {/* User Info */}
                <div className="flex items-center space-x-2 md:space-x-4 text-white">
                    <Image height={675} width={1200} src={data?.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s'} alt='Profile Image' className='h-11 w-11 rounded-full border-2 border-white '></Image>
                    <div className="text-left">
                        <h4 className="text-sm md:text-lg font-medium">{data?.name || 'Imran'}</h4>
                        <p className="text-xs md:text-sm font-light text-white">{data?.role || 'Admin'}</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardNavbar;
