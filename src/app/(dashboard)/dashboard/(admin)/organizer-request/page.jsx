"use client"
import { AlertDialog } from '@radix-ui/react-alert-dialog';
import Image from 'next/image';
import Link from 'next/link';
import { FaChrome, FaRegCircleCheck, } from 'react-icons/fa6';
import { MdOutlineCancel } from 'react-icons/md';
const OrganizerRequest = () => {

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
        </div>
    );
};

export default OrganizerRequest;