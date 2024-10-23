import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';

const MyFollower = ({ userData }) => {
    const [ showFollower , setShowFollower ] = useState(3);
    const { data: session } = useSession();
    const myEmail = session?.user?.email;
    
    // Find the current user's data using their email
    const myData = userData.find(user => user?.email === myEmail);
    
    // If myData exists, extract the followers array
    const followerEmails = myData?.followers || [];
    
    // Filter userData to get the data of users who follow the current user
    const followerData = userData.filter(user => followerEmails.includes(user.email));
    
    return (
        <div className="">
            <h2 className="text-lg font-bold">My Followers</h2>
            <div className="mt-4">
                {followerData.length > 0 ? (
                    followerData.slice(0, showFollower).map(follower => (
                        <div key={follower._id} className="p-3 border mb-1 rounded">
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
                                <button className="text-blue-500">Follow</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>You have no followers.</p>
                )}
                {
                    showFollower === 3 && showFollower < 4 ?  <p onClick={() => {setShowFollower(showFollower + 3)}} className='text-gay-600 mt-1 hover:text-blue-500 duration-300 cursor-pointer'>See more</p> 
                    : <p onClick={() => {setShowFollower(showFollower - 3)}} className='text-gay-600 mt-1 hover:text-blue-500 duration-300 cursor-pointer'>See less</p>
                }
            </div>
        </div>
    );
};

export default MyFollower;