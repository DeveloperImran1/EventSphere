import React from 'react';
import { FaSearch, FaGlobe, FaUserCircle } from 'react-icons/fa'; // Importing icons for a more modern look

const DashboardNavbar = () => {
    return (
        <header className="mt-12  flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 shadow-lg">
            {/* Left side: Website Name and Search Bar */}
            <div className="flex items-center space-x-6">
                {/* Website Name */}
                <h2 className="text-2xl font-bold">My Dashboard</h2>

                {/* Search Bar */}
                <div className="relative flex items-center text-gray-600">
                    <FaSearch className="absolute left-3 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="pl-10 pr-4 py-2 rounded-lg bg-white text-gray-800 w-64 focus:outline-none focus:ring-2 focus:ring-blue-300" 
                    />
                </div>
            </div>

            {/* Right side: Language Selector, User Info */}
            <div className="flex items-center space-x-6">
                {/* Language Selector */}
                <div className="relative flex items-center">
                    <FaGlobe className="mr-2" />
                    <select className="bg-blue-500 text-white py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300">
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="es">Spanish</option>
                    </select>
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-4">
                    <FaUserCircle className="w-10 h-10" /> {/* User Icon */}
                    <div>
                        <h4 className="text-lg font-medium">John Doe</h4>
                        <p className="text-sm font-light">Admin</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardNavbar;

