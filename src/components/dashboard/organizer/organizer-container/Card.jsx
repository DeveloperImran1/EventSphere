
import React from 'react';
import { MdEventNote } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { TbTicket } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";



const Card = ({data}) => {

const totalAmount = data?.reduce((total, order) => total + order?.amount, 0);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {/* Card 1 */}
            <div className='bg-white shadow-lg rounded-lg p-6  flex flex-col items-start'>
               <div className='flex justify-center items-center  gap-4'>
                <div className='p-4 bg-slate-600 rounded-md'><MdEventNote size={60} className='text-violet-100  ' /></div>
                <div>
                <h2 className='text-3xl font-extrabold text-start text-gray-800'>{data?.length}</h2>
                <p className='text-gray-500  text-start'>Awesome Events</p>
                </div>
               </div>
            </div>
            {/* Card 2 */}
            <div className='bg-white shadow-lg rounded-lg p-6 flex flex-col items-start'>
               <div className='flex justify-center items-center  gap-4'>
                <div className='p-4 bg-green-600 rounded-md'><SiHomeassistantcommunitystore size={60} className='text-violet-100  ' /></div>
                <div>
                <h2 className=' text-3xl font-extrabold  text-gray-800 text-start'>50</h2>
                <p className='text-gray-500 text-start'>Counter Opened</p>
                </div>
               </div>
            </div>
            {/* Card 3 */}
            <div className='bg-white shadow-lg rounded-lg p-6 flex flex-col items-start'>
               <div className='flex justify-center items-center  gap-4'>
                <div className='p-4 bg-violet-500 rounded-md'><TbTicket size={60} className='text-violet-100  ' /></div>
                <div>
                <h2 className='text-3xl font-extrabold text-gray-800 text-start'>858</h2>
                <p className='text-gray-500 text-start'>Ticket Sold</p>
                </div>
               </div>
            </div>
            {/* Card 4 */}
             <div className='bg-white shadow-lg rounded-lg p-6 flex flex-col items-start'>
               <div className='flex justify-center items-center  gap-4'>
                <div className='p-4 bg-rose-400 rounded-md'><FaSackDollar size={60} className='text-violet-100  ' /></div>
                <div>
                <h2 className='text-3xl font-extrabold text-gray-800 text-start'>{totalAmount}$</h2>
                <p className='text-gray-500 text-start'>Revenue</p>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Card;
