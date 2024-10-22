import Image from 'next/image';
import React from 'react';
import { FaCamera, FaLink } from 'react-icons/fa6';
import { MdLocalPostOffice } from 'react-icons/md';
import { TbFidgetSpinner } from 'react-icons/tb';
import FeedPost from './FeedPost';
import FeedPostCard from './FeedPostCard';

const FeedContent = () => {
    return (
        <div className="p-4 mt-16">
            <FeedPost />
            {/* Add more posts here */}
        </div>
    );
};

export default FeedContent;