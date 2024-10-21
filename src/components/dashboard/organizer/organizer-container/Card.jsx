"use client";
import React from 'react';
import { MdEventNote } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { TbTicket } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Card = ({ email, data }) => {
   const axiosPublic = useAxiosPublic();


   const { data: events = [], isPending: loading, refetch } = useQuery({
      queryKey: ['events'],
      queryFn: async () => {
         const res = await axiosPublic.get(`/events/getMyEvent/${email}`);
         console.log("Fetch kore data ", res.data)
         console.log("Props theke data ", data)
         return res.data;
      }
   })


   const getUpcomingEventsForNextMonth = (events) => {
      // Step 1: Get the current date
      const currentDate = new Date();

      // Step 2: Calculate the start and end dates for the next month
      const nextMonthStart = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1); // Start of next month
      const nextMonthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 0); // End of next month

      // Step 3: Filter the events based on the eventDate
      const upcomingEvents = events?.filter(order => {
         const eventDate = new Date(order?.dateTime);
         return eventDate >= nextMonthStart && eventDate <= nextMonthEnd;
      });


      return upcomingEvents;
   };
   const upcomingEvents = getUpcomingEventsForNextMonth(events)


   const totalAmount = data?.reduce((total, order) => total + order?.amount, 0);
   return (
      <div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {/* Card 1 */}
            <div className='bg-white shadow-lg rounded-lg p-6  flex flex-col items-start'>
               <div className='flex justify-center items-center  gap-4'>
                  <div className='p-4 bg-slate-600 rounded-md'><MdEventNote size={60} className='text-violet-100  ' /></div>
                  <div>
                     <h2 className='text-3xl font-extrabold text-start text-gray-800'>{events?.length}</h2>
                     <p className='text-gray-500  text-start'>Awesome Events</p>
                  </div>
               </div>
            </div>
            {/* Card 2 */}
            <div className='bg-white shadow-lg rounded-lg p-6 flex flex-col items-start'>
               <div className='flex justify-center items-center  gap-4'>
                  <div className='p-4 bg-green-600 rounded-md'><SiHomeassistantcommunitystore size={60} className='text-violet-100  ' /></div>
                  <div>
                     <h2 className=' text-3xl font-extrabold  text-gray-800 text-start'>{upcomingEvents.length}</h2>
                     <p className='text-gray-500 text-start'>Counter Opened</p>
                  </div>
               </div>
            </div>
            {/* Card 3 */}
            <div className='bg-white shadow-lg rounded-lg p-6 flex flex-col items-start'>
               <div className='flex justify-center items-center  gap-4'>
                  <div className='p-4 bg-violet-500 rounded-md'><TbTicket size={60} className='text-violet-100  ' /></div>
                  <div>
                     <h2 className='text-3xl font-extrabold text-gray-800 text-start'>{data?.length}</h2>
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
      </div>
   );
};

export default Card;
