"use client";

import React, { useEffect, useState } from 'react';
import { RiMessage2Line } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineEqualizer } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import AnimatedFormModal from '@/components/modal/BeOrganiger/BeOrganiger';
import RequestOrganizer from '@/components/modal/RequestOrganizer';


const DashboardSideBar = () => {
    const session = useSession();
    const [routes, setRoutes] = useState([])
    console.log("Dashboard sidebar theke session ", session);

   
    let role = "user";
    useEffect(() => {
        if (role === 'user') {
            setRoutes(userRoutes)
        }
        else if (role === 'organizer') {
            setRoutes(organizerRoutes)
        }
        else {
            setRoutes(AdminRoutes)
        }
    }, [role])

    return (
        <>
       
            <div className=" min-h-[calc(100vh-96px)] w-64 bg-white text-slate-600  scrool-auto flex-shrink-0 shadow-lg  relative">
                <div className="flex items-center py-2 md:py-3 px-4 rounded transition duration-200 hover:bg-purple-800 hover:text-white">
                    <MdOutlineEqualizer size={30} className="mr-2 text-xl" />
                    <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
                </div>

                <nav className="mt-6">
                    {
                        routes?.map(route => {
                            const Icon = route?.icon;
                            return (
                                <>
                                    <Link href={route?.path} className="flex items-center py-1 md:py-2 px-4 rounded transition duration-200 hover:bg-purple-800 hover:text-white">
                                        <Icon className="mr-2 text-xl" />

                                        <span>{route?.title}</span>
                                    </Link>
                                    <hr className="border-gray-400 mx-4" />
                                </>
                            )
                        })
                    }

                    <hr className="border-gray-400 mx-4" />
                    <button onClick={() => signOut()} className="flex items-center py-1 md:py-2 px-4 rounded transition duration-200 hover:bg-purple-800 hover:text-white">
                        <FaSignOutAlt className="mr-2 text-xl" />

                        <span>Sign Out</span>
                    </button>
                    <hr className="border-gray-400 mx-4" />

                </nav>

                <div className='flex gap-2 absolute bottom-0 left-[20%] '>
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
                </div>
            </div>



        </>

    );
};

export default DashboardSideBar;

const userRoutes = [
    {
        title: "Profile",
        path: "/dashboard/user-profile",
        icon: RiMessage2Line
    },
    {
        title: "Edit Profile",
        path: "/dashboard/edit-profile",
        icon: RiMessage2Line
    },
    {
        title: "Request Organizer",
        path: "/dashboard/be-organizer",
        icon: RiMessage2Line
    },
    {
        title: "Order",
        path: "/dashboard/my-orderlist",
        icon: IoBagHandleOutline
    },
    {
        title: "Comunity",
        path: "/community",
        icon: FaSignOutAlt
    },
    {
        title: "Message",
        path: "/message",
        icon: FaSignOutAlt
    },

]

const organizerRoutes = [
    {
        title: "Profile",
        path: "/dashboard/profile",
        icon: RiMessage2Line
    },
    {
        title: "Edit Profile",
        path: "/dashboard/edit-profile",
        icon: RiMessage2Line
    },
    {
        title: "My Events",
        path: "/dashboard/my-events",
        icon: RiMessage2Line
    },
    {
        title: "Order List",
        path: "/dashboard/orderlist",
        icon: RiMessage2Line
    },
    {
        title: "Payment History",
        path: "/dashboard/payment-history",
        icon: RiMessage2Line
    },
    {
        title: "Community",
        path: "/community",
        icon: RiMessage2Line
    },
    {
        title: "Message",
        path: "/message",
        icon: RiMessage2Line
    },

]
const AdminRoutes = [
    {
        title: "Profile",
        path: "/dashboard/profile",
        icon: RiMessage2Line
    },
    {
        title: "Edit Profile",
        path: "/dashboard/edit-profile"
    },
    {
        title: "All Events",
        path: "/dashboard/all-events",
        icon: RiMessage2Line
    },
    {
        title: "Users",
        path: "/dashboard/users",
        icon: RiMessage2Line
    },
    {
        title: "Organizer Request",
        path: "/dashboard/payment-history",
        icon: RiMessage2Line
    },
    {
        title: "Community",
        path: "/community",
        icon: RiMessage2Line
    },
    {
        title: "Message",
        path: "/message",
        icon: RiMessage2Line
    },

]

