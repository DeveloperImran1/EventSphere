import React from 'react';
import { FaSearch, FaGlobe, FaUserCircle } from 'react-icons/fa';

const DashboardNavbar = () => {
    return (
        <header className="  flex flex-col md:flex-row items-center justify-between bg-gradient-to-r bg-gray-200 text-slate-600 py-4 px-4 md:px-6 shadow-lg space-y-4 md:space-y-0">
            {/* Left side: Website Name and Search Bar */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full md:w-auto">
                {/* Website Name */}
                <h2 className="text-xl md:text-2xl font-bold">My Dashboard</h2>

                {/* Search Bar */}
                <div className="relative flex items-center w-full md:w-auto text-gray-600">
                    <FaSearch className="absolute left-3 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="pl-10 pr-4 py-2 rounded-lg bg-white text-gray-800 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-300" 
                    />
                </div>
            </div>

            {/* Right side: Language Selector, User Info */}
            <div className="flex items-center space-x-6 w-full md:w-auto justify-between md:justify-end">
                {/* Language Selector */}
                <div className="relative flex items-center">
                    <FaGlobe className="mr-2" />
                    <select className=" text-black py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300">
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="es">Spanish</option>
                    </select>
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-2 md:space-x-4">
                    <FaUserCircle className="w-8 h-8 md:w-10 md:h-10" />
                    <div className="text-left">
                        <h4 className="text-sm md:text-lg font-medium">John Doe</h4>
                        <p className="text-xs md:text-sm font-light">Admin</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardNavbar;
