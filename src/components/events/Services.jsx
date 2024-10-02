import Image from 'next/image';
import React from 'react';
import { BsFillTicketPerforatedFill } from 'react-icons/bs';
import { FcDataBackup } from 'react-icons/fc';
import { HiTicket } from 'react-icons/hi';

const Services = () => {
    return (
        <div className='container mx-auto mt-10 '>
            <div className="text-center    ">
                <h1 className="text-xl font-semibold uppercase font-serif tracking-[.25em] text-blue-500">sERVICES</h1>
                <h1 className="my-2 font-serif font-semibold text-black">Discover The Best Event <br />Ticketing Service System</h1>
                <p className="text-gray-600 font-serif font-medium text-xl">
                    Make online event ticketing and registrations simpler than ever before with Eventify. <br /> Create & customize fundraiser event tickets online, offer discounts, boost attendee engagement, and do a lot more.
                </p>
                {/*  */}
                <div className='md:flex p-2 mt-20 px-8 ' >
                    {/* 1 */}
                    <div className='space-y-6 mb-10    '  >
                        <div className='text-left   '>
                            <p className='text-3xl text-blue-400' > <FcDataBackup /> </p>
                            <p className='text-xl font-serif my-1 text-black  '  >  Quick, Secure Payments </p>
                            <p className=' text-gray-600 '  > There is no chance of any theft with all the encryption and security in our event registration software.  </p>
                        </div>
                        {/*  */}
                        <div className='text-left  '>
                            <p className='text-3xl text-blue-400' > <FcDataBackup /> </p>
                            <p className='text-xl font-serif my-1 text-black  '  >  Get Attendees Involved </p>
                            <p className=' text-gray-600 '  > Attendee engagement will grow significantly with event ticketing and registration links seamlessly integrated </p>
                        </div>
                        {/*  */}
                        <div className='text-left   '>
                            <p className='text-3xl text-blue-400' > <FcDataBackup /> </p>
                            <p className='text-xl font-serif my-1 text-black  '  >  Next Level Customization                            </p>
                            <p className=' text-gray-600 '  > Adjust ticket availability, coupon code, discount offers, and more with Eventify event ticket management software.  </p>
                        </div>




                    </div>
                    {/* 2 */}
                    <div className='w-full flex justify-center' >

                    <Image height={675} width={1200} src="https://i.postimg.cc/bYL6ppD0/63f3141f0314aa80234ae4a9-schedule-p-500.png" alt="" />

                    </div>
                    {/* 3 */}
                    <div className='space-y-6  ' >
                        <div className='text-left   '>
                            <p className='text-3xl text-blue-400' > <FcDataBackup /> </p>
                            <p className='text-xl font-serif my-1 text-black  '  >  No Contracts </p>
                            <p className=' text-gray-600 '  > Eventify charges a flat $1 per ticker sell. There are no other contracts involved. It always stays at $1 per ticket.  </p>
                        </div>
                        {/*  */}
                        <div className='text-left   '>
                            <p className='text-3xl text-blue-400' > <FcDataBackup /> </p>
                            <p className='text-xl font-serif my-1 text-black  '  >  
                            Ticketing On Your Domain </p>
                            <p className=' text-gray-600 '  > You can use custom domains for ticket sales. Your brand, your tickets, all custom branded, everything white-label. </p>
                        </div>
                        {/*  */}
                        <div className='text-left   '>
                            <p className='text-3xl text-blue-400' > <FcDataBackup /> </p>
                            <p className='text-xl font-serif my-1 text-black  '  > Attendee CRM Made Easier</p>
                            <p className=' text-gray-600 '  > Send emails responsive on mobile devices. A/B test with subject lines & preview.  </p>
                        </div>
                    </div>

                    {/*  */}
                </div>



            </div>
        </div>
    );
};

export default Services;