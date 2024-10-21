"use client";

import useAuth from "@/hooks/useAuth";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";

import { RiMessage2Line } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineEqualizer } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { usePathname } from "next/navigation";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


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
            number: bookings?.length
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
            path: "/dashboard/edit-profile",
            icon: RiMessage2Line
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

            <div className="fixed pl-2 pt-4 w-64 h-[calc(100vh-90px)] text-slate-600 shadow-2xl overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 flex flex-col justify-between">


                <div>
                    <div className="px-4 py-3 border-b flex flex-col justify-center items-center gap-2 relative">
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
                    <button onClick={() => signOut()} className="flex items-center py-1 md:py-2 px-4 rounded transition duration-200 bg-white hover:bg-[#3b99f1] hover:text-white mb-6 transform ease-in delay-100 ">
                        <FaSignOutAlt className="mr-2 text-xl" />

                        <span>Sign Out</span>
                    </button>
                </div>

            </div>



        </>

    );


};

export default DashboardSideBar;


