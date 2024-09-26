import React from 'react';
import { RiMessage2Line } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineEqualizer } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";


const DashboardSideBar = () => {
    return (
        <div className="w-full max-h-full md:w-64 bg-gray-200 text-slate-600  md:h-screen flex-shrink-0 shadow-lg">
            <div className="p-6">
                <h1 className="text-2xl md:text-3xl font-bold text-black">Dashboard</h1>
            </div>

            <nav className="mt-6">
                <a href="#" className="flex items-center py-2 md:py-3 px-4 rounded transition duration-200 hover:bg-purple-800 hover:text-white">
                    <MdOutlineEqualizer className="mr-2 text-xl" />
                    <span>Dashboard</span>
                </a>
                <hr className="border-gray-400 mx-4" />
                
                <a href="#" className="flex items-center py-2 md:py-3 px-4 rounded transition duration-200 hover:bg-purple-800 hover:text-white">
                    <MdOutlineProductionQuantityLimits className="mr-2 text-xl" />
                    <span>Order</span>
                </a>
                <hr className="border-gray-400 mx-4" />

                <a href="#" className="flex items-center py-2 md:py-3 px-4 rounded transition duration-200 hover:bg-purple-800 hover:text-white">
                    <RiMessage2Line className="mr-2 text-xl" />
                    <span>Message</span>
                </a>
                <hr className="border-gray-400 mx-4" />

                <a href="#" className="flex items-center py-2 md:py-3 px-4 rounded transition duration-200 hover:bg-purple-800 hover:text-white">
                    <IoBagHandleOutline className="mr-2 text-xl" />
                    <span>Product</span>
                </a>
                <hr className="border-gray-400 mx-4" />

                <a href="#" className="flex items-center py-2 md:py-3 px-4 rounded transition duration-200 hover:bg-purple-800 hover:text-white">
                    <FaSignOutAlt  className="mr-2 text-xl" />
                    <span>Sign Out</span>
                </a>
                <hr className="border-gray-400 mx-4" />
            </nav>
        </div>
    );
};

export default DashboardSideBar;
