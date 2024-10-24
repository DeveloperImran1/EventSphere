import Link from 'next/link';
import React from 'react';
import { FaChrome, FaRegCircleCheck } from 'react-icons/fa6';
import { MdOutlineCancel } from 'react-icons/md';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const OrganizerRequestButtons = ({ user, dialogType, handleCancel, handleAccept }) => {

    const queryClient = useQueryClient();

    // Mutation for updating user role
    const mutation = useMutation({
        mutationFn: async (id) => {
            const res = await axios.put(`https://event-sphare-server.vercel.app/userRollUpdated/${id}`);
            return res.data;
        },
        onSuccess: (data) => {
            if (data.success) {
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
            queryClient.invalidateQueries('users'); // Refetch users after mutation
        },
        onError: () => {
            toast.error("An error occurred while updating user role!");
        }
    });

    // * RequestCancel
    const mutation2 = useMutation({
        mutationFn: async (id) => {
            const res = await axios.put(`https://event-sphare-server.vercel.app/organizingRequestCancel/${id}`);
            return res.data;
        },
        onSuccess: (data) => {
            if (data.success) {
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
            queryClient.invalidateQueries('users'); // Refetch users after mutation
        },
        onError: () => {
            toast.error("An error occurred while updating user role!");
        }
    });

    const handleUpdateRoll = () => {
        mutation.mutate(user._id);
    };
    const handelRequestCancel = () =>{
        mutation2.mutate(user._id);
    }

    return (
        <div>
            <AlertDialog>
                <div className="flex gap-x-4">
                    <div title='Portfolio' className="flex">
                        <Link target="_blank" href={`/dashboard/user-profile/${user?.email}`}  className=''><FaChrome className='text-4xl rounded-xl text-white bg-[#0000008b] p-2 cursor-pointer' /></Link>
                    </div>
                    {/* Cancel Button */}
                    <div title='Reject' className="flex" onClick={() => handleCancel(user?._id)}>
                        <AlertDialogTrigger><MdOutlineCancel className='text-4xl rounded-xl text-white bg-red-500 p-2 cursor-pointer' /></AlertDialogTrigger>
                    </div>
                    {/* Accept Button */}
                    <div title='Accept' className="flex" onClick={() => handleAccept(user?._id)}>
                        <AlertDialogTrigger><FaRegCircleCheck className='text-4xl rounded-xl text-white bg-green-500 p-2 cursor-pointer' /></AlertDialogTrigger>
                    </div>
                </div>

                <AlertDialogContent>
                    {dialogType === 'Cancel' ? (
                        <>
                            <AlertDialogHeader>
                                <AlertDialogTitle className="mb-5">Are you sure you want to Request Rejected ?</AlertDialogTitle>
                                {/* <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription> */}
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>No</AlertDialogCancel>
                                <AlertDialogAction className="bg-gray-800" onClick={handelRequestCancel}>Yes</AlertDialogAction>
                            </AlertDialogFooter>
                        </>
                    ) : (
                        <>
                            <AlertDialogHeader>
                                <AlertDialogTitle className='mb-5'>Are you sure you want to Request Accept ?</AlertDialogTitle>
                                {/* <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription> */}
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>No</AlertDialogCancel>
                                <AlertDialogAction className="bg-gray-800" onClick={handleUpdateRoll}>Yes</AlertDialogAction>
                            </AlertDialogFooter>
                        </>
                    )}
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default OrganizerRequestButtons;
