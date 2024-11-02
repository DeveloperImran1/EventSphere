import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TopAbout = () => {
    return (
        <div className="block lg:py-[120px] overflow-hidden p-0 m-0 text-base text-[#333] leading-7 overflow-x-hidden bg-white">
            {/* Container */}
            <div className="w-full px-4 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px]">
                <div className="flex flex-wrap justify-between -mx-4 relative">
                    {/* Left Side */}
                    <div className="w-full px-4 box-border lg:w-1/2">
                        <div>
                            <div className="text-left mb-14 sm:mb-16">
                                <span className="text-[#1b85db] uppercase block text-lg mb-2 -mt-2 sm:text-xl sm:mb-6 sm:-mt-1 md:text-2xl">
                                    We Are EventSphere
                                </span>
                                <div className="mb-3 md:mb-6">
                                    <h2 className="text-[30px] md:-mt-2 sm:text-[50px] sm:leading-[60px] sm:-mt-3 font-bold uppercase mb-4 sm:mb-6 text-[#333]">
                                        Get to Know Us
                                    </h2>
                                </div>
                                <p className="text-[16px] mb-3 md:mb-[37px] mt-0 md:-mt-[11px] sm:text-[18px] sm:max-w-[700px] sm:mx-auto text-justify text-[#666]">
                                    EventSphere is your ultimate destination for discovering and booking tickets to various events, including concerts, sports, workshops, and festivals. We bring experiences to life by making event access easy and convenient.
                                </p>
                                <p className="text-[16px] mb-3 md:mb-[37px] mt-0 md:-mt-[11px] sm:text-[18px] sm:max-w-[700px] sm:mx-auto text-justify text-[#666]">
                                    Our platform ensures a seamless booking experience with real-time availability, personalized recommendations, and secure payment options. Whether youre a music lover, sports enthusiast, or looking for a fun weekend, EventSphere has something for everyone.
                                </p>
                                <button className='bg-blue-500 py-2 px-6 mt-10 rounded-md'>Explore more</button>
                              
                            </div>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="absolute w-full h-auto ml-0 md:-ml-28 lg:ml-0 lg:-right-[700px] px-[15px] hidden lg:block items-center">
                        <div>
                            <Image
                                src="https://i.postimg.cc/sfkGbVk2/about01.png"
                                height={600}
                                width={849}
                                alt="aboutImage"
                                className="border-none align-middle overflow-clip"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TopAbout;