
'use client';
import AdminInfo from '@/components/dashboard/admin/AdminInfo';
import DashboardNavbar from '@/components/dashboard/admin/DashboardNavbar';
import DashboardSideBar from '@/components/dashboard/admin/DashboardSideBar';
import React, { useState } from 'react';
import { BsLayoutSidebar } from "react-icons/bs";
import { IoChatbubbleEllipsesOutline, IoSettings } from 'react-icons/io5';

const DashboardLayout = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            {/* Navbar */}
       <div className='h-[90px] '>
       <div className="fixed z-50 w-full bg-[#b3ddff] shadow-lg  ">  {/* Set a height for the navbar */}
                <div className="relative w-full]">
                    <div className="flex justify-start items-start md:block">
                        <DashboardNavbar />
                    </div>
                    <BsLayoutSidebar 
                        onClick={() => setShowSidebar(!showSidebar)} 
                        size={23} 
                        className="absolute right-5 top-[40%] text-black md:hidden cursor-pointer"
                    />
                </div>
            </div>
       </div>

            {/* Add margin-top equal to the height of the navbar */}
            <div className="flex flex-col md:flex-row gap-4  "> 
                {/* Sidebar */}
                <div className="w-full md:w-auto    ">
                    <div className={`${showSidebar ? 'left-0 top-[77px] md:top-[90px]' : '-left-[500px] md:left-0'} absolute md:relative h-full z-50 transition-all duration-300`}>
                        <div className=" ">
                            <DashboardSideBar />
                        </div>
                    </div>
                </div>

                {/* Main content */}
                <div className="md:pl-[270px] w-full">
                    {children}
                </div>
            </div>

           {/* Floating action buttons */}
           <div className='relative z-50'>
                <div className='flex flex-col gap-2 fixed  right-0 bottom-[30%] '>
                    <div className="group relative w-[70px] h-[70px] rounded-md overflow-hidden cursor-pointer bg-gradient-to-r from-[#3b99f1] via-[#4FB5FF] to-[#4FB5FF] p-2 text-white shadow">
                        <span className="absolute left-[-10%] top-[50%] z-10 h-[20px] w-[20px] rounded-full bg-gradient-to-r from-[#0064c2] via-[#49aef7] to-[#c7e0f1] duration-300 group-hover:top-[-10%] group-hover:blur-sm"></span>
                        <span className="absolute right-[-5%] top-[10%] z-10 h-[20px] w-[30px] rounded-full bg-gradient-to-tr from-[#0064c2] via-[#4FB5FF] to-[#4FB5FF] duration-300 group-hover:top-[80%] group-hover:blur-sm"></span>
                        <div className="relative z-20 space-y-6 flex flex-col items-center justify-center ">
                            <IoChatbubbleEllipsesOutline size={23} className='text-white'></IoChatbubbleEllipsesOutline>
                            Chating
                        </div>
                    </div>
                    <div className="group relative w-[70px] h-[70px] rounded-md overflow-hidden cursor-pointer bg-gradient-to-r from-[#3b99f1] via-[#4FB5FF] to-[#4FB5FF] p-2 text-white shadow">
                        <span className="absolute left-[-10%] top-[50%] z-10 h-[20px] w-[20px] rounded-full bg-gradient-to-r from-[#0064c2] via-[#49aef7] to-[#c7e0f1] duration-300 group-hover:top-[-10%] group-hover:blur-sm"></span>
                        <span className="absolute right-[-5%] top-[10%] z-10 h-[20px] w-[30px] rounded-full bg-gradient-to-tr from-[#0064c2] via-[#4FB5FF] to-[#4FB5FF] duration-300 group-hover:top-[80%] group-hover:blur-sm"></span>
                        <div className="relative z-20 space-y-6 flex flex-col items-center justify-center ">
                            <IoSettings size={23} className='text-white animate-spin'></IoSettings>
                            Events
                        </div>
                    </div>
                    <div className='w-[10px] h-[145px] absolute right-0 bg-[#4FB5FF] '>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
