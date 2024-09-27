import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TopAbout = () => {
    return (
        <div class="block pt-20 pb-5 lg:py-[120px] overflow-hidden p-0 m-0 text-base text-[#dbe2fb] leading-7 overflow-x-hidden bg-[#001232]">
            {/* Container */}
            <div class="w-full px-4 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px]">
                <div class="flex flex-wrap justify-between -mx-4 relative">
                    {/* Left Side */}
                    <div class="w-full px-4 box-border lg:w-1/2">
                        <div className="">
                            <div class="text-left mb-14 sm:mb-16">
                                <span class="text-[#31d7a9] uppercase block text-lg mb-2 -mt-2 sm:text-xl sm:mb-6 sm:-mt-1 md:text-2xl">we are Boleto</span>
                                <div class="mb-3 md:mb-6">
                                    <h2 class="text-[30px] md:-mt-2 sm:text-[50px] sm:leading-[60px] sm:-mt-3 font-bold uppercase mb-4 sm:mb-6 text-white">
                                        Get to know us
                                    </h2>
                                </div>
                                <p className='text-[16px] mb-3 md:mb-[37px] mt-0 md:-mt-[11px] sm:text-[18px] sm:max-w-[700px] sm:mx-auto text-justify text-[#dbe2fb]'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                </p>
                                <p className='text-[16px] mb-3 md:mb-[37px] mt-0 md:-mt-[11px] sm:text-[18px] sm:max-w-[700px] sm:mx-auto text-justify text-[#dbe2fb]'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </p>
                                <button className="bg-gradient-to-r from-[#5560ff] via-[#aa52a1] to-[#ff4343] py-[11px] px-[24px] font-semibold mt-3 text-white uppercase rounded-[25px] inline-block cursor-pointer text-left">
                                    <Link href={'/#'}>book tickets</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="absolute w-full h-auto ml-0 md:-ml-28 lg:ml-0 lg:-right-[700px] px-[15px] hidden lg:block items-center">
                        <div className="">
                            <Image
                                src="https://i.postimg.cc/sfkGbVk2/about01.png"
                                height={600}
                                width={849}
                                alt='aboutImage'
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