"use client"
import { AlertDialog } from '@radix-ui/react-alert-dialog';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaChrome, FaRegCircleCheck, } from 'react-icons/fa6';
import { MdOutlineCancel } from 'react-icons/md';
const OrganizerRequest = () => {
    const [users, setUsers] = useState([]); // State to hold user data
    console.log(users);

    const [loading, setLoading] = useState(true); // State to manage loading status
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:9000/organizerRequest');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUsers(data); // Set users data
            } catch (error) {
                setError(error.message); // Handle any errors
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

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
                                <Image src="https://plus.unsplash.com/premium_photo-1664015982598-283bcdc9cae8?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={60} width={60} alt={user.username} className="w-14 h-14 rounded-full mr-3" />
                                <div>
                                    <p className="font-medium">{user.name}</p>
                                    <p className="text-xs">{user.email}</p>
                                </div>
                            </td>
                            <td className="py-3 px-6">{user.companyName}</td>
                            <td className="py-3 px-6">{user.CEOEmail}</td>
                            <td className="py-3 px-6">{user.location}</td>
                            <td className="">
                                <div className="flex space-x-4 ">
                                    {/* Actions can be defined here */}
                                    <Link href={user?.socialPlatform} target='_blank'><FaChrome className='text-4xl rounded-xl text-white bg-[#0000008b] p-2 cursor-pointer' /></Link>
                                    <MdOutlineCancel className='text-4xl rounded-xl text-white bg-red-500 p-2 cursor-pointer' />
                                    <FaRegCircleCheck className='text-4xl rounded-xl text-white bg-green-500 p-2 cursor-pointer' />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Mobile View */}
            {users.map((user, index) => (
                <div key={index} className="block md:hidden bg-white border border-gray-200 mb-4 p-4 rounded-lg shadow-md">
                    <div className="flex justify-between mb-2">
                        <Image src="https://plus.unsplash.com/premium_photo-1664015982598-283bcdc9cae8?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={80}  width={80} alt={user.username} className="w-20 h-20 rounded-full mr-4" />
                        <div className="flex space-x-4 mt-2">
                            {/* Actions can be defined here */}
                            <Link href={user?.socialPlatform} target='_blank'><FaChrome className='text-4xl rounded-xl text-white bg-[#0000008b] p-2 cursor-pointer' /></Link>
                            <MdOutlineCancel className='text-4xl rounded-xl text-white bg-red-500 p-2 cursor-pointer' />
                            <FaRegCircleCheck className='text-4xl rounded-xl text-white bg-green-500 p-2 cursor-pointer' />
                        </div>
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