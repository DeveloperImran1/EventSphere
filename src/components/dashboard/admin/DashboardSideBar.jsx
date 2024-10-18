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
import Image from 'next/image';
import useAuth from '@/hooks/useAuth';


const DashboardSideBar = () => {
    const session = useSession();
    const [routes, setRoutes] = useState([])
    console.log("Dashboard sidebar theke session ", session?.data?.user?.email);

    const userRoutes = [
        {
            title: "Profile",
            path: `/dashboard/user-profile/${session?.data?.user?.email}`,
            icon: RiMessage2Line
        },
        {
            title: "Edit Profile",
            path: "/dashboard/edit-profile",
            icon: RiMessage2Line
        },
        {
            title: "My Order",
            path: "/dashboard/my-orderlist",
            icon: IoBagHandleOutline
        },
        {
            title: "Request Organizer",
            path: "/dashboard/be-organizer",
            icon: RiMessage2Line
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
        {
            title: "Message",
            path: "/notifications",
            icon: FaSignOutAlt
        },

    ]

    const organizerRoutes = [
        {
            title: "Overview",
            path: `/dashboard/organizer-container`,
            icon: RiMessage2Line
        },
        {
            title: "Profile",
            path: `/dashboard/organizer-profile/${session?.data?.user?.email}`,
            icon: RiMessage2Line
        },
        {
            title: "Edit Profile",
            path: "/dashboard/edit-profile",
            icon: RiMessage2Line
        },
        {
            title: "Publish Events",
            path: "/dashboard/eventPost",
            icon: RiMessage2Line
        },
        {
            title: "Booked Events",
            path: "/dashboard/booked-event",
            icon: RiMessage2Line,
            number: 2
        },
        {
            title: "My Profit",
            path: "/dashboard/organizer-profit",
            icon: RiMessage2Line
        },
        {
            title: "Comunity",
            path: "/community",
            icon: FaSignOutAlt
        },
        {
            title: "Notification",
            path: "/notifications",
            icon: FaSignOutAlt,
            number: 5
        },

    ]
    const AdminRoutes = [
        {
            title: "Overview",
            path: `/dashboard/admin-container`,
            icon: RiMessage2Line
        },
        {
            title: "Profile",
            path: `/dashboard/organizer-profile/${session?.data?.user?.email}`,
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
    let auth = useAuth();
    useEffect(() => {
        if ( auth?.data?.role === "user") {
            setRoutes(userRoutes)
        }
        else if (auth?.data?.role === 'organizer') {
            setRoutes(organizerRoutes)
        }
        else {
            setRoutes(AdminRoutes)
        }
    }, [role, session])




    return (
        <>

            <div className="fixed pl-2 pt-4 w-64  text-slate-600   min-h-screen flex-shrink-0 shadow-2xl overflow-y-auto ">
                {/* <div className="flex items-center py-2 md:py-3 px-4 rounded transition duration-200 bg-[#3b99f1] text-white">
                    <MdOutlineEqualizer size={30} className="mr-2 text-xl" />
                    <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
                </div> */}

                <div className="px-4 py-3 border-b flex flex-col justify-center items-center gap-2">
                    <div className='p-2 rounded-full border-4 border-gray-200'>
                        <Image
                            src={session?.data?.user?.image || 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'}
                            alt="Profile"
                            height="60"
                            width="60"
                            className="   transition duration-300 ease-in-out"
                        />
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800">
                            {session?.data?.user?.name || "User Name"}
                        </p>
                    </div>

                    <p className="text-sm text-gray-500">
                        {session?.data?.user?.email || "johndoe@example.com"}
                    </p>
                </div>


                <nav className="mt-6  ">
                    {
                        routes?.map(route => {
                            const Icon = route?.icon;
                            return (
                                <>
                                    <Link href={route?.path} className="flex items-center justify-between my-1 md:py-2 px-4 rounded transition duration-200 bg-white hover:bg-[#3b99f1]  hover:text-white  transform ease-in delay-100 group">
                                        <div className='flex items-center'>
                                            <Icon className="mr-2 text-xl" />

                                            <span>{route?.title}</span>
                                        </div>
                                        {
                                            route?.number &&  <span className='bg-[#3b99f1] group-hover:bg-green-500 text-white text-sm rounded-md px-1'>
                                            <span>{route?.number}+</span>
                                        </span>
                                        }
                                       
                                    </Link>
                                </>
                            )
                        })
                    }

                    <hr className="border-gray-200 my-6" />
                    <button onClick={() => signOut()} className="flex items-center py-1 md:py-2 px-4 rounded transition duration-200 bg-white hover:bg-[#3b99f1] hover:text-white mb-6 transform ease-in delay-100 ">
                        <FaSignOutAlt className="mr-2 text-xl" />

                        <span>Sign Out</span>
                    </button>

                </nav>


            </div>



        </>

    );


};

export default DashboardSideBar;


