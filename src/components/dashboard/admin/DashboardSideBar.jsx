"use client";

import useAuth from "@/hooks/useAuth";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";

import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineEqualizer } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { usePathname } from "next/navigation";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import {
    RiDashboardLine,
    RiUserLine,
    RiEdit2Line,
    RiCalendarEventLine,
    RiTeamLine,
    RiUserAddLine,
    RiCommunityLine,
    RiMessage2Line,
    RiNotificationLine,

    RiUploadLine,
    RiCalendarCheckLine,
    RiMoneyDollarCircleLine,
    RiShoppingBagLine,
} from "react-icons/ri";
import { FaBell } from "react-icons/fa";

const DashboardSideBar = () => {
    const session = useSession();
    const [routes, setRoutes] = useState([])
    const auth = useAuth();
    const sessionData = session?.data;
    const authInfo = auth?.data?.role;
    const pathname = usePathname();
    const lastPathSegment = pathname?.split('/').filter(Boolean).pop();
    console.log("Dashboard sidebar theke session ", session?.data?.user?.email);

    const currentUserEmail = session?.data?.user?.email

    // Get Booking Data 
    const fetchOrders = async () => {
      const { data } = await axios.get(`http://localhost:9000/ordersByGmail/${currentUserEmail}`);
  
      return data;
    };
    const { data: bookings, error, isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: fetchOrders,
      });
    


    const userRoutes = [
        {
            title: "Profile",
            path: `/dashboard/user-profile/${session?.data?.user?.email}`,
            icon: RiUserLine, // User icon for the profile page
        },
        {
            title: "Edit Profile",
            path: "/dashboard/edit-profile",
            icon: RiEdit2Line, // Edit icon for profile editing
        },
        {
            title: "My Order",
            path: "/dashboard/my-orderlist",
            icon: RiShoppingBagLine, // Shopping bag icon for orders
        },
        {
            title: "Request Organizer",
            path: "/dashboard/be-organizer",
            icon: RiUserAddLine, // Add user icon for requesting organizer role
        },
        {
            title: "Community",
            path: "/community",
            icon: RiCommunityLine, // Community icon for community section
        },
        {
            title: "Message",
            path: "/message",
            icon: RiMessage2Line, // Message/chat icon for the message section
        },
        {
            title: "Notification",
            path: "/dashboard/notifications",
            icon: FaBell, // Bell icon for notifications
        },
    ];

    const organizerRoutes = [
        {
            title: "Overview",
            path: `/dashboard/organizer-container`,
            icon: RiDashboardLine, // Dashboard icon for overview
        },
        {
            title: "Profile",
            path: `/dashboard/organizer-profile/${session?.data?.user?.email}`,
            icon: RiUserLine, // User icon for profile
        },
        {
            title: "Edit Profile",
            path: "/dashboard/edit-profile",
            icon: RiEdit2Line, // Edit icon for profile editing
        },
        {
            title: "Publish Events",
            path: "/dashboard/eventPost",
            icon: RiUploadLine, // Upload icon for event posting
        },
        {
            title: "Booked Events",
            path: "/dashboard/booked-event",
            icon: RiCalendarCheckLine, // Calendar with checkmark for booked events
            number: bookings?.length, // Shows the number of bookings
        },
        {
            title: "My Profit",
            path: "/dashboard/organizer-profit",
            icon: RiMoneyDollarCircleLine, // Dollar circle for profit section
        },
        {
            title: "Community",
            path: "/community",
            icon: RiCommunityLine, // Community icon for community section
        },
        {
            title: "Notification",
            path: "/dashboard/notifications",
            icon: FaBell, // Bell icon for notifications
            number: 5, // Example notification count
        },
    ];

    const AdminRoutes = [
        {
            title: "Overview",
            path: `/dashboard/admin-container`,
            icon: RiDashboardLine, // Best for "Overview" or dashboard-like section
        },
        {
            title: "Profile",
            path: `/dashboard/organizer-profile/${session?.data?.user?.email}`,
            icon: RiUserLine, // Best for personal profiles
        },
        {
            title: "Edit Profile",
            path: "/dashboard/edit-profile",
            icon: RiEdit2Line, // Represents editing actions
        },
        {
            title: "All Events",
            path: "/dashboard/all-events",
            icon: RiCalendarEventLine, // Calendar icon for events
        },
        {
            title: "Users",
            path: "/dashboard/user-manage",
            icon: RiTeamLine, // Best for managing users or teams
        },
        {
            title: "Organizer Request",
            path: "/dashboard/organizer-request",
            icon: RiUserAddLine, // Represents user or organizer requests
        },
        {
            title: "Community",
            path: "/community",
            icon: RiCommunityLine, // Suitable for community or group-based sections
        },
        {
            title: "Message",
            path: "/messenger",
            icon: RiMessage2Line, // Message/chat section
        },
        {
            title: "Notification",
            path: "/dashboard/notifications",
            icon: FaBell, // Bell icon for notifications
        },
    ];

    useEffect(() => {
        if (auth?.data?.role === "user") {
            setRoutes(userRoutes)
        }
        else if (auth?.data?.role === 'organizer') {
            setRoutes(organizerRoutes)
        }
        else {
            setRoutes(AdminRoutes)
        }
    }, [sessionData, authInfo])




    return (
        <>

            <div className="fixed pl-2 pt-4 w-64 h-[calc(100vh-90px)] text-slate-600 shadow-2xl overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 flex flex-col justify-between bg-white">


                <div>
                    <div className="px-4 py-3 border-b flex flex-col justify-center items-center gap-2 relative">
                        <div className='p-2 rounded-full border-4 border-gray-200'>
                            <Image
                                src={auth?.data?.image || 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'}
                                alt="Profile"
                                height="60"
                                width="60"
                                className="   transition duration-300 ease-in-out rounded-full"
                            />
                        </div>

                        <div>
                            <p className="font-semibold text-gray-800">
                                {auth?.data?.name || "User Name"}
                            </p>
                        </div>

                        <p className="text-sm text-gray-500">
                            {auth?.data?.email || "johndoe@example.com"}
                        </p>
                    </div>


                    <nav className="mt-6  ">
                        {
                            routes?.map((route, index) => {
                                const Icon = route?.icon;
                                return (
                                    <Link key={index} href={route?.path} className={`${route?.path?.includes(lastPathSegment) ? 'bg-[#3b99f1] text-white' : 'bg-white'} flex items-center justify-between my-1 md:py-2 px-4 rounded transition duration-200  hover:bg-[#3b99f1] hover:text-white transform ease-in delay-100 group`}>
                                        <div className='flex items-center'>
                                            <Icon className="mr-2 text-xl" />

                                            <span>{route?.title}</span>
                                        </div>
                                        {
                                            route?.number && <span className='bg-[#3b99f1] group-hover:bg-green-500 text-white text-sm rounded-md px-1'>
                                                <span>{route?.number}+</span>
                                            </span>
                                        }

                                    </Link>
                                )
                            })
                        }



                    </nav>
                </div>

                <div className="">
                    <hr className="border-gray-200 my-6" />
                    <button onClick={() => signOut()} className="flex items-center py-1 md:py-2 px-4 rounded transition duration-200 bg-white hover:bg-[#3b99f1] hover:text-white mb-6 transform ease-in delay-100 w-full ">
                        <FaSignOutAlt className="mr-2 text-xl" />

                        <span>Sign Out</span>
                    </button>
                </div>

            </div>



        </>

    );


};

export default DashboardSideBar;


