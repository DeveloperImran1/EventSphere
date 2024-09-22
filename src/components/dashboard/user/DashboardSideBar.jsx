import React from 'react';

const DashboardSideBar = () => {
    return (
        <div className="w-64 bg-gradient-to-b from-purple-600 to-blue-600 text-gray-200 h-screen flex-shrink-0">
            <div className="p-6">
                <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            </div>

            <nav className="mt-6">
                <a href="#" className="block py-3 px-4 rounded transition duration-200 hover:bg-purple-800 hover:text-white">
                    Dashboard
                </a>
                <hr className="border-gray-400 mx-4" />

                <a href="#" className="block py-3 px-4 rounded transition duration-200 hover:bg-purple-800 hover:text-white">
                    Order
                </a>
                <hr className="border-gray-400 mx-4" />

                <a href="#" className="block py-3 px-4 rounded transition duration-200 hover:bg-purple-800 hover:text-white">
                    Product
                </a>
                <hr className="border-gray-400 mx-4" />

                <a href="#" className="block py-3 px-4 rounded transition duration-200 hover:bg-purple-800 hover:text-white">
                    Sign Out
                </a>
                <hr className="border-gray-400 mx-4" />
            </nav>
        </div>
    );
};

export default DashboardSideBar;

