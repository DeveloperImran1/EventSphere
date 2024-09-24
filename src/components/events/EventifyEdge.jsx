import React from 'react';
import { FcDataBackup } from 'react-icons/fc';
import { HiTicket } from 'react-icons/hi';
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { MdPayments, MdSupportAgent } from 'react-icons/md';
import { FaCcAmazonPay } from 'react-icons/fa';
import { VscTable } from "react-icons/vsc";
import { PiSignInBold } from "react-icons/pi";


const EventifyEdge = () => {
    return (
    

            <div className="container    mx-auto">
                <div className="text-center">
                    <h1 className="text-xl font-semibold font-serif tracking-[.25em] text-blue-500">Eventify Edge</h1>
                    <h1 className="my-2 font-serif font-semibold text-black">Your Tickets, Your Way</h1>
                    <p className="text-gray-600 font-serif font-medium text-xl">
                        Our event software platform is designed to deliver fully optimised event ticketing experience  to you. <br />The key features of our event management software deliver significant competitive advantages.
                    </p>
                </div>
                {/*  card */}
                <div className='grid grid-cols-1  mt-14 md:grid-cols-3 lg:grid-cols-4 gap-8  ' >
                    {/*  */}
                    <div className='space-y-2' >
                        <p className='text-5xl text-blue-400' > <FcDataBackup /> </p>
                        <p className='text-2xl font-serif font-medium text-black  '  >   Data Security </p>
                        <p className='text-base text-gray-600 '  > With our encrypted secured cloud storage, say goodbye to the risks of losing any attendee data.  </p>
                    </div>
                    {/*  */}
                    <div className='space-y-2' >
                        <p className='text-5xl text-blue-300' > <HiTicket /> </p>
                        <p className='text-2xl font-serif font-medium text-black  '  >  
                        Fast Ticketing </p>
                        <p className='text-base text-gray-600 '  > With our encrypted secured cloud storage, say goodbye to the risks of losing any attendee data.  </p>
                        {/*  */}



                    </div>
                    {/*  */}
             
                    <div className='space-y-2' >
                        <p className='text-5xl  text-blue-400' > <BsFillTicketPerforatedFill /> </p>
                        <p className='text-2xl font-serif font-medium text-black  '  >  Customised Tickets </p>
                        <p className='text-base text-gray-600 '  > 
                        List, manage and sell different types of tickets for your event - like early bird, free, standard, and more. </p>
                    </div>
                    {/*  */}
                    <div className='space-y-2' >
                        <p className='text-5xl text-blue-300' > <MdSupportAgent /> </p>
                        <p className='text-2xl font-serif font-medium text-black  '  >  24x7 Support
                        </p>
                        <p className='text-base text-gray-600 '  >
                        Get in touch with us anytime and from anywhere, and one of our executives will be with you.
                             </p>
                        {/*  */}



                    </div>
                    {/*  */}
               
                    <div className='space-y-2' >
                        <p className='text-5xl  text-blue-400' ><FaCcAmazonPay /></p>
                        <p className='text-2xl font-serif font-medium text-black  '  >   Ticketing Fee </p>
                        <p className='text-base text-gray-600 '  >
                        Stop paying percentage! Eventify charges a flat $1 for every ticket sold. No contracts, no legal bindings. </p>
                    </div>
                    {/*  */}
                    <div className='space-y-2' >
                        <p className='text-5xl  text-blue-400' > <MdPayments /> </p>
                        <p className='text-2xl font-serif font-medium text-black  '  >   International Payments
                        </p>
                        <p className='text-base text-gray-600 '  >
                        Invite attendees from all over the world. Eventify supports payments with 20+ different currencies.
                        
                         </p>
                        {/*  */}



                    </div>
                   {/*  */}
               
                   <div className='space-y-2' >
                        <p className='text-4xl text-blue-400' > <VscTable /></p>
                        <p className='text-2xl font-serif font-medium text-black  '  >  Optimised UX </p>
                        <p className='text-base text-gray-600 '  > 
                        From registration to event ticketing and checkout, deliver the most seamless experience to your audience.  </p>
                    </div>
                    {/*  */}
                    <div className='space-y-2' >
                        <p className='text-4xl  text-blue-300' ><PiSignInBold/> </p>
                        <p className='text-2xl font-serif font-medium text-black  '  >   Integrated Registrations </p>
                        <p className='text-base text-gray-600 '  > 
                        Get your event registrations and ticket sales process fully interlinked, for a uniformly smooth experience.</p>
                        {/*  */}



                    </div>


                </div>


            </div>

       
    );
};

export default EventifyEdge;