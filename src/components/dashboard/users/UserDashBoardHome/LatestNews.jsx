import Loading from '@/components/shared/LoadingSpiner/Loading';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LatestNews = ({ event, isPending }) => {
    console.log(event)

    if (isPending) {
        return <Loading></Loading>
    }
    return (
  
            <Link href={`/events/${event?._id}`} className=" md:flex  shadow-md  overflow-hidden p-6">
                <Image
                    height={675}
                    width={1200}
                    src={event?.gallery[0] || "https://i.postimg.cc/hvmfLY04/dag3.jpg"} 
                    alt="News"
                    className="w-1/3 md:w-1/3 h-20 md:h-auto object-cover rounded-md mb-4 md:mb-0"
                />
                <div className="md:flex-1 md:ml-6">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">{event?.title}</h3>
                    <p className="text-gray-600">{event?.description?.slice(0, 50)}....</p>
                </div>
            </Link>

    
    );
};

export default LatestNews;
