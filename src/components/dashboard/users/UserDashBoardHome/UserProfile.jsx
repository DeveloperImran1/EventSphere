'use client'
import Image from 'next/image';
import React from 'react';
import { useSession } from "next-auth/react";
import { useQuery } from '@tanstack/react-query';
import useAuth from '@/hooks/useAuth';

const UserProfile = () => {
   
    const data = useAuth();
    console.log("ProfileInfo", data);

    return (
        <div className='relative w-full bg-white bg-opacity-80 pt-6 md:pb-32 pb-56 rounded-lg shadow-lg'>
            {/* Background Image */}
            <Image
                height={675}
                width={1200}
                className='w-screen px-4 rounded-lg h-[32vh] object-cover'
                src="https://i.postimg.cc/SsKD0y3T/8-99faf7b2987b5c6cc652.jpg"
                alt="Background"
            />

            {/* User Information */}
            <div className='absolute mt-[48px] md:left-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row gap-4 items-center'>
                {/* User Image */}
                <div>
                    <Image
                        height={675}
                        width={1200}
                        className='w-32 h-32 rounded-full border-4 border-white shadow-md'
                        src={data?.image}
                        alt="User"
                    />
                </div>

                {/* User Info */}
                <div className='flex flex-col'>
                    <div className='flex pl-3  md:flex-row md:gap-4 gap-2'>
                        <div>
                            <h2 className='text-xl font-bold'>{data?.name}</h2>
                            <h3 className='text-lg text-gray-600 text-green-600'>UX / UI Designer</h3>
                        </div>
                        <div  >
                            <h2 className='text-xl'>{data?.email}</h2>
                            <h3 className='text-lg text-gray-600'>Email</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
