import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { IoMailUnread } from "react-icons/io5";



const CounterSection = () => {
    return (
        <div className='text-xs text-[#dbe2fb] leading-7 bg-[#001232] overflow-hidden py-20 md:py-28'>
            {/* Container */}
            <div className="w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1170px] px-8 mx-auto">
                <div className="flex flex-wrap justify-center -mx-[15px] mb-6 ">
                    {/* Item Card */}
                    <div className="w-full px-[15px] sm:flex-[50%] sm:max-w-[50%] md:flex-[25%] md:max-w-[25%]">
                        {/* FacebookF */}
                        <div className="text-center py-10 px-4 border-2 border-[#ffffff18] rounded-[30px] mb-6 transition-all ease-in-out duration-300 hover:bg-gradient-to-t from-[#3b26db] to-[#7b19cb]">
                            <div className="w-[50px] h-[50px] rounded-[50%] mx-auto mb-7 bg-gradient-to-r from-[#5560ff] via-[#aa52a1] to-[#ff4343] shadow-xl text-white text-center content-center  leading-[50px] text-xl">
                                <FaFacebookF className='mx-auto' />
                            </div>
                            <div className="flex flex-wrap justify-center items-center mb-[15px]">
                                <div className="uppercase text-[24px] mt-[6px] font-semibold text-white leading-[1.3] -m-2">130K</div>
                            </div>
                            <p className="-m-[11px] mt-5 !-mb-2 text-[#31d7a9] text-[16px]">Followers</p>
                        </div>
                    </div>
                    {/* Item Card */}
                    <div className="w-full px-[15px] sm:flex-[50%] sm:max-w-[50%] md:flex-[25%] md:max-w-[25%]">
                        {/* Group */}
                        <div className="text-center py-10 px-4 border-2 border-[#ffffff18] rounded-[30px] mb-6 transition-all ease-in-out duration-300 bg-gradient-to-t from-[#3b26db] to-[#7b19cb]">
                            <div className="w-[50px] h-[50px] rounded-[50%] mx-auto mb-7 bg-gradient-to-r from-[#5560ff] via-[#aa52a1] to-[#ff4343] shadow-xl text-white text-center content-center  leading-[50px] text-xl">
                                <TiGroup className='mx-auto text-2xl:' />
                            </div>
                            <div className="flex flex-wrap justify-center items-center mb-[15px]">
                                <div className="uppercase text-[24px] mt-[6px] font-semibold text-white leading-[1.3] -m-2">130K</div>
                            </div>
                            <p className="-m-[11px] mt-5 !-mb-2 text-[#31d7a9] text-[16px]">Followers</p>
                        </div>
                    </div>
                    {/* Item Card */}
                    <div className="w-full px-[15px] sm:flex-[50%] sm:max-w-[50%] md:flex-[25%] md:max-w-[25%]">
                        {/* Twitter  */}
                        <div className="text-center py-10 px-4 border-2 border-[#ffffff18] rounded-[30px] mb-6 transition-all ease-in-out duration-300 hover:bg-gradient-to-t from-[#3b26db] to-[#7b19cb]">
                            <div className="w-[50px] h-[50px] rounded-[50%] mx-auto mb-7 bg-gradient-to-r from-[#5560ff] via-[#aa52a1] to-[#ff4343] shadow-xl text-white text-center content-center  leading-[50px] text-xl">
                                <FaTwitter className='mx-auto' />
                            </div>
                            <div className="flex flex-wrap justify-center items-center mb-[15px]">
                                <div className="uppercase text-[24px] mt-[6px] font-semibold text-white leading-[1.3] -m-2">130K</div>
                            </div>
                            <p className="-m-[11px] mt-5 !-mb-2 text-[#31d7a9] text-[16px]">Followers</p>
                        </div>
                    </div>
                    {/* Item Card */}
                    <div className="w-full px-[15px] sm:flex-[50%] sm:max-w-[50%] md:flex-[25%] md:max-w-[25%]">
                        {/* Mail */}
                        <div className="text-center py-10 px-4 border-2 border-[#ffffff18] rounded-[30px] mb-6 transition-all ease-in-out duration-300 hover:bg-gradient-to-t from-[#3b26db] to-[#7b19cb]">
                            <div className="w-[50px] h-[50px] rounded-[50%] mx-auto mb-7 bg-gradient-to-r from-[#5560ff] via-[#aa52a1] to-[#ff4343] shadow-xl text-white text-center content-center  leading-[50px] text-xl">
                                <IoMailUnread className='mx-auto' />
                            </div>
                            <div className="flex flex-wrap justify-center items-center mb-[15px]">
                                <div className="uppercase text-[24px] mt-[6px] font-semibold text-white leading-[1.3] -m-2">130K</div>
                            </div>
                            <p className="-m-[11px] mt-5 !-mb-2 text-[#31d7a9] text-[16px]">Followers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterSection;