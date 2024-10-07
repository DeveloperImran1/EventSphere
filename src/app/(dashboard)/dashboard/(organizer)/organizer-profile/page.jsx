"use client"
import Image from 'next/image';
import React from 'react';
import { FaUserGroup } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';
import useMyAllPost from '@/hooks/useMyAllPost';
import useMyAllEvents from '@/hooks/useMyAllEvents';

const OrganizerProfile = () => {
    const { data: user, isLoading, refetch } = useAuth();
    const { data: myPost } = useMyAllPost();
    const { data: myEvents} = useMyAllEvents();

    console.log("ProfileInfo", user);
    console.log("My all posts", myPost);
    console.log("My all events", myEvents);

    return (
        <div class="relative h-screen">
            <div class="h-[300px] bg-gradient-to-r from-cyan-500 via-cyan-500 to-emerald-300 rounded-2xl">
            </div>
            <div className="max-w-[800px] mx-auto shadow-[0_15px_35px_rgba(50,50,93,0.1),_0_5px_15px_rgba(0,0,0,0.07)] rounded-3xl  -mt-28 z-40 p-8 ">
                {/* Top */}
                <div className="flex justify-between ">
                    <div className="flex items-center gap-x-2 justify-between pt-32 cursor-pointer">
                        <FaUserGroup className='text-blue-500 text-2xl' />
                        <p className='text-blue-500 mt-[4px]'>Follow</p>
                    </div>
                    <div className="">
                        <div className="rounded-full w-full">
                            <Image src={user?.image || "https://i.postimg.cc/WbyZB5LG/friendly-brunette-looking-camera-23-2147774849.jpg"} height={192} width={192} alt='user' className='rounded-full h-[192px] w-[192px] object-cover shadow-xl' />
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2 justify-between pt-32 cursor-pointer">
                        <LuMessagesSquare className='text-green-500 text-2xl' />
                        <p className='text-green-500 mt-[4px]'>Contact</p>
                    </div>
                </div>
                {/* Bottom */}
                <div className="flex flex-col justify-center items-center mt-6 text-gray-600">
                    <h1 className='text-4xl font-bold '>{user?.name}</h1>
                    <p className='text-center mt-2'>{user?.location?.city || "Rajshahi"} {user?.location?.country || "Bangladesh"}</p>
                    <div className="flex justify-around mt-10 gap-6">
                        <div className="">
                            <p className='text-center font-bold text-2xl text-gray-600'>{user?.followers?.length || "10"}</p>
                            <p>Followers</p>
                        </div>
                        <div className="">
                            <p className='text-center font-bold text-2xl text-gray-600'>{myPost?.length || "10"}</p>
                            <p>Posts</p>
                        </div>
                        <div className="">
                            <p className='text-center font-bold text-2xl text-gray-600'>{myEvents?.length || "05"}</p>
                            <p>My Events</p>
                        </div>
                    </div>
                    {/* Button */}
                    <Link href={'#'} className='bg-gradient-to-r from-cyan-500 via-cyan-500 to-emerald-300 max-w-[138px] mx-auto py-2 px-6 rounded-full text-white font-semibold mt-8'><button className='bg-gradient-to-r from-cyan-500 via-cyan-500 to-emerald-300'>Message</button></Link>
                </div>
            </div>
        </div>
    );
};

export default OrganizerProfile;