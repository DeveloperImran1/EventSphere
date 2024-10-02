import React from 'react';
import { FaLink } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
const Social = () => {
    return (
        <div className='flex justify-start pl-4 items-center gap-6'>
            <div className='p-2 bg-green-200 rounded-md'><FaLink /></div>
            <div className='p-2 bg-green-200 rounded-md'><FaCamera /></div>
            <div><button className='px-6 py-3 bg-green-300 rounded-md text-gray-600 font-bold text-xl'>Post</button></div>
        </div>
    );
};

export default Social;