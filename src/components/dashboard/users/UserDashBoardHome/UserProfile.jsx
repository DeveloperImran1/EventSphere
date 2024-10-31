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
            fetch(`https://event-sphare-server.vercel.app/user/${lastPathSegment}`).then((res) =>
                res.json()
            ),
    });
    console.log("ProfileInfo", data);

    return (
        <div className='relative w-full bg-white bg-opacity-80 md:pb-32 pb-56  shadow-lg'>
            {/* Background Image */}
            <Image
                height={675}
                width={1200}
                className='w-full h-[150px] object-cover rounded-md '
                src="https://media.istockphoto.com/id/1386705180/photo/abstract-blue-background.jpg?b=1&s=612x612&w=0&k=20&c=wdimBouyd8QHkg5iAeMRCvwq57yuACw0IkjzoF7uXvk="
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
                <div className='flex '>
                    <div className='flex pl-3  flex-col lg:flex-row md:gap-4 gap-2'>
                        <div>
                            <h2 className='text-xl text-left font-bold'>{data?.name}</h2>
                            <h3 className='text-lg  text-[#1b85db]'>{data?.specialty || "UX / UI Designer"}</h3>
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
