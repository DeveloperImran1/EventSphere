import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TrustSection = () => {
    return (
        <div class="block pt-20 pb-5 lg:py-[120px] overflow-hidden px-5 md:p-0 m-0 text-base text-[#dbe2fb] leading-7 overflow-x-hidden bg-[#001232]">
            {/* Container */}
            <div class="w-full px-4 mx-auto max-w-1/2 md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px]">
                <div class="flex flex-col flex-wrap justify-between -mx-4 relative">
                    {/* Left Side */}
                    <p className='uppercase text-[18px] md:text-[24px] font-[400] mb-[25px] -mt-[6px] text-[#31d7a9]'>take a look at our tour</p>
                    <h1 className="uppercase font-bold mb-[16px] text-[30px] sm:text-[50px] leading-[1.3] sm:leading-[60px] text-white mt-[-9px] sm:mt-[-13px]">
                        Guarantees you <br /> can trust.
                    </h1>
                    <p className="text-[16px] sm:text-[18px] max-w-[700px] px-2 text-[#dbe2fb] leading-[28px]">Because more peace of mind means more love for the event.</p>
                    {/* l */}
                    <div className="mt-[60px]">
                        <div className="flex flex-wrap p-0 mb-[45px]">
                            <div className="w-[65px] h-[65px] flex flex-wrap justify-center items-center rounded-full p-[10px] border border-[#032055]">
                                <Image className='w-full ' height={49} width={43} src="https://i.postimg.cc/qR1t6PLC/icon01.png" alt='logo1'/>
                            </div>
                            <div className="w-[calc(100%-65px)] pl-[20px]">
                                <h1 className="mb-[17px] capitalize font-bold leading-[1.3] text-white">Get In Guarantee</h1>
                                <p className='text-[#dbe2fb]'>Authentic tickets, on-time delivery, and access to your event. <br />Or your money back. Period.</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-wrap p-0 mb-[45px]">
                            <div className="w-[65px] h-[65px] flex flex-wrap justify-center items-center rounded-full p-[10px] border border-[#032055]">
                                <Image className='w-full ' height={45} width={45} src="https://i.postimg.cc/nzFjzFvJ/icon02.png" alt='logo1'/>
                            </div>
                            <div className="w-[calc(100%-65px)] pl-[20px]">
                                <h1 className="mb-[17px] capitalize font-bold leading-[1.3] text-white">price match guarantee</h1>
                                <p className='text-[#dbe2fb]'>The best prices are here. If you spot a better deal elsewhere,<br /> we’ll cover the difference.</p>
                            </div>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="absolute w-full h-auto ml-0 md:-ml-28 lg:ml-0 lg:-right-[600px] px-[15px] hidden lg:block items-center justify-center -top-[15%]">
                        <div className="">
                            <Image
                                src="https://i.postimg.cc/KzQLc14n/tour.png"
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

export default TrustSection;