"use client"
import OrganizerRequestButtons from '@/components/dashboard/admin/OrganizerRequestButtons';
import Image from 'next/image';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '@/components/shared/LoadingSpiner/Loading';

const fetchUsers = async () => {
    const response = await axios.get('http://localhost:9000/organizerRequest');
    return response.data;
};

const OrganizerRequest = () => {
    const [dialogType, setDialogType] = useState(null);
    const [updatedUserId, setUpdatedUserId] = useState();

    // Fetching users using react-query
    const { data: users, isLoading, error } = useQuery({
        queryKey: ['usersll'],
        queryFn: fetchUsers
    });
    console.log('users ss', users);
    

    {/* Cancel Button */ }
    const handleCancel = (userId) => {
        setDialogType('Cancel');
        setUpdatedUserId(userId);
    };

    {/* Accept Button */ }
    const handleAccept = (userId) => {
        setUpdatedUserId(userId);
        setDialogType('Accept');
    };

    if (isLoading) return <Loading></Loading>;
    if (error) return <div>Error: {error.message}</div>;

    // If users array is empty or undefined, display the image
    if (!users || users.length === 0) {
        return (
            <div className="flex flex-col justify-center items-center md:-ml-40">
                <Image
                    src="https://cdni.iconscout.com/illustration/premium/thumb/data-not-found-illustration-download-in-svg-png-gif-file-formats--message-empty-communication-emptystate-no-pack-design-development-illustrations-9404367.png" 
                    alt="No data available"
                    width={400}
                    height={400}
                />
                <p className="text-center text-ellipsis font-semibold text-gray-900 mt-4 text-xl">Request no found...</p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto w-[97%]">
            <div className="text-3xl font-bold capitalize mb-3">Organizer Request</div>
            <table className="bg-white border border-gray-200 hidden md:table">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">User Info</th>
                        <th className="py-3 px-6 text-left">Company Name</th>
                        <th className="py-3 px-6 text-left">CEO Email Address</th>
                        <th className="py-3 px-6 text-left">Location</th>
                        <th className="py-3 px-6 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {users.map((user, index) => (
                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 flex items-center">
                                <Image src={user?.image || 'https://plus.unsplash.com/premium_photo-1664015982598-283bcdc9cae8?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} height={60} width={60} alt={user.username} className="w-14 h-14 rounded-full mr-3" />
                                <div>
                                    <p className="font-medium">{user.name}</p>
                                    <p className="text-xs">{user.email}</p>
                                </div>
                            </td>
                            <td className="py-3 px-6">{user.companyName}</td>
                            <td className="py-3 px-6">{user.CEOEmail}</td>
                            <td className="py-3 px-6">{user.location}</td>
                            <td className="">
                                <OrganizerRequestButtons user={user} handleAccept={handleAccept} handleCancel={handleCancel} dialogType={dialogType} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Mobile View */}
            {users.map((user, index) => (
                <div key={index} className="block md:hidden bg-white border border-gray-200 mb-4 p-4 rounded-lg shadow-md">
                    <div className="flex justify-between mb-2">
                        <Image src="https://plus.unsplash.com/premium_photo-1664015982598-283bcdc9cae8?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={80} width={80} alt={user.username} className="w-20 h-20 rounded-full mr-4" />
                        <OrganizerRequestButtons user={user} handleAccept={handleAccept} handleCancel={handleCancel} dialogType={dialogType} />
                    </div>
                    <p className="font-semibold text-gray-900">{user.name}</p>
                    <p className='text-sm'><span className='font-semibold text-gray-700'>Company:</span> {user.companyName}</p>
                    <p className='text-sm'><span className='font-semibold text-gray-700'>CEO Email:</span> {user.CEOEmail}</p>
                    <p className='text-sm'><span className='font-semibold text-gray-700'>Location:</span> {user.location}</p>
                </div>
            ))}
        </div>
    );
};

export default OrganizerRequest;