"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Profile = ({data}) => {

      
    return (
        <div className='mb-8'>
            <div 
                className="w-full flex flex-col md:flex-row items-center justify-center p-4 md:p-6 shadow-lg rounded-lg"
                style={{ 
                    backgroundImage: 'url(https://img.freepik.com/free-vector/gradient-dynamic-blue-lines-background_23-2148995756.jpg)', // Replace with your background image URL
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay'
                }}
            >
                {/* Left Side: User Image */}
                <div className="flex-shrink-0">
                    <Image
                        height={675}
                        width={1200}
                        src={data?.image}
                        alt="User Profile"
                        className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-white shadow-lg"
                    />
                </div>

                {/* Right Side: User Details */}
                <div className="mt-4  md:ml-8 md:mt-0 text-black flex flex-col items-center md:items-start space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-violet-200">{data?.name}</h2>
                    <p className="text-lg md:text-xl font-light text-green-400">Event Manager</p>
                    <p className="text-sm md:text-base max-w-md text-center md:text-left text-white">
                        Welcome to your personalized dashboard. Manage your orders, track product status, and much more!
                    </p>

                    <div className="mt-4">
                        <Link href={`/dashboard/organizer-profile/${data?.email}`} className="px-5 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition duration-200 ">
                            View Profile
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
