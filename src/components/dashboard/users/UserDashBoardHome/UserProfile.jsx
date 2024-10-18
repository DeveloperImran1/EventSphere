'use client'
import Image from 'next/image';
import React from 'react';
import { useSession } from "next-auth/react";
import { useQuery } from '@tanstack/react-query';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const UserProfile = () => {

    const session = useSession();
    const pathname = usePathname();
    const lastPathSegment = pathname?.split('/').filter(Boolean).pop();
    console.log(lastPathSegment)
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["user"],
        queryFn: () =>
            fetch(`process.env.SERVER_SIDE_BASE_URL/user/${lastPathSegment}`).then((res) =>
                res.json()
            ),
    });
    console.log("ProfileInfo", data);

    return (
        <div className='relative w-full bg-white bg-opacity-80 pt-6 md:pb-32 pb-56 rounded-lg shadow-lg'>
            {/* Background Image */}
            <Image
                height={675}
                width={1200}
                className='w-full px-4  h-[32vh] object-cover rounded-2xl'
                src="https://i.postimg.cc/SsKD0y3T/8-99faf7b2987b5c6cc652.jpg"
                alt="Background"
            />

            {/* User Information */}
            <div className='absolute mt-[44px] left-1/2 md:left-[260px] lg:left-80  transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row gap-4 items-center'>
                {/* User Image */}
                <div>
                    <Image
                        height={675}
                        width={1200}
                        className='max-w-32 h-32 rounded-full border-4 border-white shadow-md'
                        src={data?.image}
                        alt="User"
                    />
                </div>

                {/* User Info */}
                <div className='flex flex-col'>
                    <div className='flex pl-3  md:flex-row md:gap-4 gap-2'>
                        <div>
                            <h2 className='text-xl text-left font-bold'>{data?.name}</h2>
                            <h3 className='text-lg  text-green-600'>{data?.specialty || "UX / UI Designer"}</h3>
                        </div>
                        <div className='flex justify-center items-start gap-1' >
                            <h3 className='text-lg text-gray-600'>Email: </h3>
                            <h2 className='text-xl'>{data?.email}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
