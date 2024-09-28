'use client'
import AdminInfo from '@/components/dashboard/admin/AdminInfo';
import DashboardNavbar from '@/components/dashboard/admin/DashboardNavbar';
import DashboardSideBar from '@/components/dashboard/admin/DashboardSideBar';
import React, { useState } from 'react';
import { BsLayoutSidebar } from "react-icons/bs";

const DashboarLayout = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false)
    return (
        <>
            <div className="min-h-screen bg-gray-100">
                {/* Navbar */}
                <div className='fixed  h-full w-full z-50'>
                    <div className=' relative  bg-gray-200 z-50'>
                        <div className='flex justify-start items-start md:block z-50'>
                            <DashboardNavbar />
                        </div>
                        <BsLayoutSidebar onClick={() => setShowSidebar(!showSidebar)} size={23} className='absolute right-5 top-[40%] text-black md:hidden cursor-pointer'></BsLayoutSidebar>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 p-4 pt-[90px] ">
                    {/* Sidebar */}
                    <div className={` md:flex  h-full `}>
                        <div className={`${showSidebar ? 'left-0 top-[77px] md:top-[90px]' : '-left-[500px] md:left-0 '}  absolute  h-full z-50 duration-300 `}>
                            <div className='fixed'>
                                <DashboardSideBar />
                            </div>
                        </div>

                        <div className='md:pl-[270px] overflow-auto'>
                            {
                                children
                            }
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default DashboarLayout;


