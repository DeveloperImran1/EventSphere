import Image from 'next/image';
import React from 'react';
import { FaUserGroup } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import Link from 'next/link';

const OrganizerProfile = () => {
    return (
        <div class="relative h-screen">
            <div class="h-[300px] bg-gradient-to-r from-cyan-500 via-cyan-500 to-emerald-300">
            </div>
            <div className="max-w-[800px] mx-auto shadow-[0_15px_35px_rgba(50,50,93,0.1),_0_5px_15px_rgba(0,0,0,0.07)] rounded-3xl  -mt-28 z-40 p-8 ">
                {/* Top */}
                <div className="flex justify-between ">
                    <div className="flex items-center gap-x-2 justify-between pt-32">
                        <FaUserGroup className='text-blue-500 text-2xl' />
                        <p className='text-blue-500 mt-[4px]'>Contact</p>
                    </div>
                    <div className="">
                        <div className="rounded-full w-full">
                            <Image src="https://i.postimg.cc/WbyZB5LG/friendly-brunette-looking-camera-23-2147774849.jpg" height={192} width={192} alt='user' className='rounded-full h-[192px] w-[192px] object-cover shadow-xl' />
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2 justify-between pt-32">
                        <LuMessagesSquare className='text-green-500 text-2xl' />
                        <p className='text-green-500 mt-[4px]'>Contact</p>
                    </div>
                </div>
                {/* Bottom */}
                <div className="grid place-content-center mt-6 text-gray-600">
                    <h1 className='text-4xl font-bold '>Samantha Jones</h1>
                    <p className='text-center mt-2'>New York, United States</p>
                    <div className="flex justify-around mt-10">
                        <div className="">
                            <p className='text-center font-bold text-2xl text-gray-600'>65</p>
                            <p>Friends</p>
                        </div>
                        <div className="">
                            <p className='text-center font-bold text-2xl text-gray-600'>43</p>
                            <p>Photos</p>
                        </div>
                        <div className="">
                            <p className='text-center font-bold text-2xl text-gray-600'>21</p>
                            <p>Comments</p>
                        </div>
                    </div>
                    {/* Button */}
                    <Link href={'#'} className='bg-gradient-to-r from-cyan-500 via-cyan-500 to-emerald-300 max-w-[138px] mx-auto py-2 px-6 rounded-full text-white font-semibold mt-8'><button className='bg-gradient-to-r from-cyan-500 via-cyan-500 to-emerald-300'>Show more</button></Link>
                </div>
            </div>
        </div>
    );
};

export default OrganizerProfile;