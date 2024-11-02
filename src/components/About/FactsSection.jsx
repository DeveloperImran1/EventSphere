import Image from 'next/image';
import React from 'react';

const FactsSection = () => {
    return (
        <div className="p-0 m-0 text-[16px] leading-[28px] overflow-x-hidden pb-[80px]  lg:pb-[120px]  bg-white">
        {/* Container */}
        <div className="w-full px-4 mx-auto max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1170px]">
            {/* Row */}
            <div className="flex flex-wrap -mx-4">
                {/* Col 1 */}
                <div className="relative w-full px-4 lg:w-1/3">
                    <div className="text-left mb-10 sm:mb-16 lg:mb-0">
                        <span className="block text-[#1b85db] uppercase text-lg mb-2 -mt-2 md:text-[24px] tracking-wide sm:mb-6 sm:-mt-1">Quick Facts</span>
                        <h1 className="mb-[16px] md:mb-7 font-bold uppercase text-[50px] -mt-[13px] leading-[60px] text-black tracking-[0.050em]">Fun Facts</h1>
                        <p className="-mt-[11px] text-[18px] text-gray-700">Objectively seize scalable metrics where proactive services seamlessly empower fully researched quick growth strategies.</p>
                    </div>
                </div>
                {/* Logos And Counter */}
                <div className="relative w-full px-4 lg:w-2/3">
                    {/* Container */}
                    <div className="flex flex-wrap justify-between -mb-9 mt-2">
                        {/* Logo and Counter 1 */}
                        <div className="w-[calc(25%-15px)] text-center mb-9">
                            <div className="mb-6 flex justify-center">
                                <Image src="https://i.postimg.cc/t4m1Ph9T/about-counter01.png" height={68} width={68} alt="counter-logo" />
                            </div>
                            {/* Count Number */}
                            <div className="flex flex-wrap justify-center items-center">
                                <h3 className="flex justify-center m-0 ml-3 font-bold text-[24px] md:text-[40px] leading-[1.3] text-black">30M+</h3>
                            </div>
                            <p className="text-[#1b85db] capitalize -mb-4 mt-2 text-[16px] md:text-[18px]">Customers</p>
                        </div>
                        {/* Repeat for other counters */}
                        <div className="w-[calc(25%-15px)] text-center mb-9">
                            <div className="mb-6 flex justify-center">
                                <Image src="https://i.postimg.cc/g0XxKn0K/about-counter02.png" height={68} width={68} alt="counter-logo" />
                            </div>
                            <div className="flex flex-wrap justify-center items-center">
                                <h3 className="flex justify-center m-0 ml-3 font-bold text-[24px] md:text-[40px] leading-[1.3] text-black">11</h3>
                            </div>
                            <p className="text-[#1b85db] capitalize -mb-4 mt-2 text-[16px] md:text-[18px]">Branches</p>
                        </div>
                        <div className="w-[calc(25%-15px)] text-center mb-9">
                            <div className="mb-6 flex justify-center">
                                <Image src="https://i.postimg.cc/3xw4dL5V/about-counter03.png" height={68} width={68} alt="counter-logo" />
                            </div>
                            <div className="flex flex-wrap justify-center items-center">
                                <h3 className="flex justify-center m-0 ml-3 font-bold text-[24px] md:text-[40px] leading-[1.3] text-black">650+</h3>
                            </div>
                            <p className="text-[#1b85db] capitalize -mb-4 mt-2 text-[16px] md:text-[18px]">Projects</p>
                        </div>
                        <div className="w-[calc(25%-15px)] text-center mb-9">
                            <div className="mb-6 flex justify-center">
                                <Image src="https://i.postimg.cc/4NPHfDMp/about-counter04.png" height={68} width={68} alt="counter-logo" />
                            </div>
                            <div className="flex flex-wrap justify-center items-center">
                                <h3 className="flex justify-center m-0 ml-3 font-bold text-[24px] md:text-[40px] leading-[1.3] text-black">5000+</h3>
                            </div>
                            <p className="text-[#1b85db] capitalize -mb-4 mt-2 text-[16px] md:text-[18px]">Reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default FactsSection;