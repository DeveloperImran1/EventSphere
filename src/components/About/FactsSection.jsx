import Image from 'next/image';
import React from 'react';

const FactsSection = () => {
    return (
        <div className="p-0 m-0 text-[16px] text-[#dbe2fb] leading-[28px] overflow-x-hidden bg-[#001232] pb-[80px] pt-[80px] lg:pb-[120px] lg:pt-[120px]">
            {/* Container */}
            <div className="w-full px-4 mx-auto max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1170px]">
                {/* Row */}
                <div className="flex flex-wrap -mx-4">
                    {/* Col 1 */}
                    <div className="relative w-full px-4 lg:w-1/3">
                        <div className="text-left mb-10 sm:mb-16 lg:mb-0">
                            <span className="block text-[#31d7a9] uppercase text-lg mb-2 -mt-2 md:text-[24px] tracking-wide sm:mb-6 sm:-mt-1">quick facts</span>
                            <h1 className='mb-[16px] md:mb-7 font-bold uppercase text-[50px] -mt-[13px] leading-[60px] text-white tracking-[0.050em]'>fun facts</h1>
                            <p className='-mt-[11px] text-[18px] text-[#dbe2fb]'>Objectively seize scalable metrics where proactive services seamlessly empower fully researched quick growth strategies</p>
                        </div>
                    </div>
                    {/* Logos And Counter */}
                    <div className="relative w-full px-4 lg:w-2/3">
                        {/* Container */}
                        <div className="flex flex-wrap justify-between -mb-9 mt-2">
                            {/* Logo and Counter 1 */}
                            <div className="w-[calc(25%-15px)] text-center mb-9">
                                <div className="mb-6 flex justify-center">
                                    <Image src="https://i.postimg.cc/t4m1Ph9T/about-counter01.png" height={68} width={68} alt='counter-logo' />
                                </div>
                                {/* Count Number */}
                                <div className="flex flex-wrap justify-center items-center">
                                    <h3 className="flex justify-center m-0 ml-3 font-bold text-[24px] md:text-[40px] leading-[1.3] text-white">
                                        30M+
                                    </h3>
                                </div>
                                <p className='text-[#31d7a9] capitalize -mb-4 mt-2 text-[16px] md:text-[18px]'>Customers</p>
                            </div>
                            {/* Logo and Counter 2 */}
                            <div className="w-[calc(25%-15px)] text-center mb-9">
                                <div className="mb-6 flex justify-center">
                                    <Image src="https://i.postimg.cc/g0XxKn0K/about-counter02.png" height={68} width={68} alt='counter-logo' />
                                </div>
                                {/* Count Number */}
                                <div className="flex flex-wrap justify-center items-center">
                                    <h3 className="flex justify-center m-0 font-bold text-[24px] md:text-[40px]leading-[1.3] text-white">
                                        11
                                    </h3>
                                </div>
                                    <p className='text-[#31d7a9] capitalize -mb-4 mt-2 text-[16px] md:text-[18px]'>Contries</p>
                            </div>
                            {/* Logo and Counter 3 */}
                            <div className="w-[calc(25%-15px)] text-center mb-9">
                                <div className="mb-6 flex justify-center">
                                    <Image src="https://i.postimg.cc/3xw4dL5V/about-counter03.png" height={68} width={68} alt='counter-logo' />
                                </div>
                                {/* Count Number */}
                                <div className="flex flex-wrap justify-center items-center">
                                    <h3 className="flex justify-center m-0 ml-3 font-bold text-[24px] md:text-[40px] leading-[1.3] text-white">
                                        650+
                                    </h3>
                                </div>
                                    <p className='text-[#31d7a9] capitalize -mb-4 mt-2 text-[16px] md:text-[18px]'>Towns & Cities</p>
                            </div>
                            {/* Logo and Counter 1 */}
                            <div className="w-[calc(25%-15px)] text-center mb-9">
                                <div className="mb-6 flex justify-center">
                                    <Image src="https://i.postimg.cc/4NPHfDMp/about-counter04.png" height={68} width={68} alt='counter-logo' />
                                </div>
                                {/* Count Number */}
                                <div className="flex flex-wrap justify-center items-center">
                                    <h3 className="flex justify-center m-0 ml-3 font-bold text-[24px] md:text-[40px] leading-[1.3] text-white">
                                        5,000+
                                    </h3>
                                    <p className='text-[#31d7a9] capitalize -mb-4 mt-2 text-[16px] md:text-[18px]'>Screens</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FactsSection;