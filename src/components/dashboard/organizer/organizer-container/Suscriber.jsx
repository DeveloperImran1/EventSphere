import useAuth from '@/hooks/useAuth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Subscriber = ({ data }) => {

    const followers = data?.followers
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 transition-all duration-300 hover:shadow-xl  gap-2 flex flex-col">
            <div className="text-xl font-semibold text-gray-800 mb-4">Your Subscribers</div>
            {
                followers?.map(follower => <>   <div className="flex flex-col  flex-1">
                    <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200">
                        <Link href={`/dashboard/user-profile/${data?.email}`} className="w-12 h-12 rounded-full overflow-hidden">
                            <Image height={676} width={1200} src={follower.image} alt="Subscriber" className="w-full h-full object-cover" />
                        </Link>
                        <div>
                            <h2 className="font-bold text-gray-800 text-xl text-start">{follower.name}</h2>
                            <h2 className="text-gray-600 text-xl text-start">{follower.role}</h2>
                        </div>
                    </div>
                </div></>)
            }
        </div>
    );
};

export default Subscriber;
