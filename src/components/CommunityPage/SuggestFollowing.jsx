import useAxiosPublic from '@/hooks/useAxiosPublic';
import { refresh } from 'aos';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const SuggestFollowing = ({ userData, refetch }) => {
    const [ showFollower , setShowFollower ] = useState(6);
    const { data: session } = useSession();
    const myEmail = session?.user?.email;
    const router = useRouter()
    const axiosPublic=useAxiosPublic()
    // Find the current user's data using their email
    const myData = userData.find(user => user?.email === myEmail);
    
    // If myData exists, extract the followers array
    const followerEmails = myData?.followers || [];
    console.log(followerEmails)
    
    // Filter userData to get the data of users who follow the current user
    const followerData = userData.filter(user => followerEmails.includes(user?.email));
    console.log(followerData)
    const filteredUsersWithoutYou = userData.filter(user => !user.followers.includes(myEmail) && user.email != myEmail);
    console.log(filteredUsersWithoutYou[2]?.email)

    // handleFollow Button
    const handleFollow = async (id, followerEmail) => {
        if (!myEmail) {
            toast.error("Please Login First 👊");
            return router.push('/login');
        }
        console.log(followerEmail)
        try {
            const response = await fetch(`https://event-sphare-server.vercel.app/user/handleAddFollower/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ followerEmail: myEmail }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                toast.success('Followed successfully!');
                refetch();
    
                // Send notification to the followed user
                const notification = {
                    type: "new_follower",
                    message: `${myEmail} has started following you.`,
                    route: `/dashboard/user-profile/${session?.data?.user?.email}`, 
                };
    
               
                    const notificationRes = await axiosPublic.patch(`/notification/${followerEmail}`, notification);
                
                   
                
            } else {
                console.error('Error:', data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    return (
        <div className="mt-7">
            <h2 className="text-lg font-bold">Suggest</h2>
            <div className="mt-1">
                {filteredUsersWithoutYou.length > 0 ? (
                    filteredUsersWithoutYou.slice(0, showFollower).map(follower => (
                        <div key={follower._id} className="p-3 border mb-1 cursor-pointer rounded">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-x-2">
                                    <div className="rounded-full h-11 w-11 border p-[2px]">
                                        <Image src={follower?.image} height={40} width={40} alt={follower?.name} className='rounded-full h-full w-full' />
                                    </div>
                                    <div className="">
                                        <p className="font-semibold">{follower.name}</p>
                                        <p className="text-sm">{(follower.email).slice(0, 15)}...</p>
                                    </div>
                                </div>
                                <button title='Follow User' onClick={() => handleFollow(follower?._id, follower?.email)} className="text-blue-500">Follow</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>You have no followers.</p>
                )}
                {
                    // Show the "See more" or "See less" options only if the length of filteredUsersWithoutYou is more than 3
                    filteredUsersWithoutYou.length > 3 && (
                        showFollower === 3 ? (
                            <p onClick={() => {setShowFollower(showFollower + 3)}} className='text-gray-600 mt-1 hover:text-blue-500 duration-300 cursor-pointer'>See more</p>
                        ) : (
                            <p onClick={() => {setShowFollower(showFollower - 3)}} className='text-gray-600 mt-1 hover:text-blue-500 duration-300 cursor-pointer'>See less</p>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default SuggestFollowing;