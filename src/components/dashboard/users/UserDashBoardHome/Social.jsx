import React from 'react';
import { FaLink } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";
const Social = () => {
    return (
        <div className='flex justify-start pl-4 items-center gap-6'>
            <div className='p-2 bg-green-200 rounded-md'><FaLink /></div>
            <div className='p-2 bg-green-200 rounded-md'><FaCamera /></div>
            <div><button className="w-full gap-2 sm:w-auto ml-4 flex items-center  text-xl px-3 py-2 rounded-md bg-green-400 font-bold ">
            <MdLocalPostOffice /> Post</button>
            </div>
        </div>
    );
};

export default Social;