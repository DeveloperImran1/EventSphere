import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TrustSection = () => {
    return (
        <div className="block pt-20 pb-5 lg:py-[120px] px-5 md:p-0 m-0 text-base text-[#333] leading-7 overflow-hidden bg-white">
            {/* Container */}
            <div className="w-full px-4 mx-auto max-w-[90%] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px]">
                <div className="flex flex-col lg:flex-row  justify-between -mx-4 relative">
                    {/* Left Side */}
                    <div>
                        <p className="uppercase text-[18px] md:text-[24px] font-medium mb-6 text-[#1b85db]">Take a Look at Our Tour</p>
                        <h1 className="uppercase font-bold mb-4 text-[30px] sm:text-[50px] leading-[1.3] text-[#111]">
                            Guarantees You <br /> Can Trust
                        </h1>
                        <p className="text-[16px] sm:text-[18px] max-w-[700px] px-2 text-[#555] leading-[28px]">
                            Because more peace of mind means more love for the event.
                        </p>
                        {/* Features */}
                        <div className="mt-10">
                            <div className="flex flex-wrap p-0 mb-6">
                                <div className="w-[65px] h-[65px] flex justify-center items-center rounded-full p-3 border border-gray-200">
                                    <Image className="w-full" height={49} width={43} src="https://i.postimg.cc/qR1t6PLC/icon01.png" alt="Get In Guarantee" />
                                </div>
                                <div className="w-[calc(100%-65px)] pl-5">
                                    <h2 className="mb-2 font-bold text-[#111]">Get In Guarantee</h2>
                                    <p className="text-[#555]">Authentic tickets, on-time delivery, and access to your event. Or your money back.</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap p-0 mb-6">
                                <div className="w-[65px] h-[65px] flex justify-center items-center rounded-full p-3 border border-gray-200">
                                    <Image className="w-full" height={45} width={45} src="https://i.postimg.cc/nzFjzFvJ/icon02.png" alt="Price Match Guarantee" />
                                </div>
                                <div className="w-[calc(100%-65px)] pl-5">
                                    <h2 className="mb-2 font-bold text-[#111]">Price Match Guarantee</h2>
                                    <p className="text-[#555]">The best prices are here. If you find a better deal elsewhere, we’ll match the difference.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Side Image */}
                    <div className=" w-full h-auto hidden lg:block items-center justify-center] px-5 lg:px-0">
                        <Image
                            src="https://i.postimg.cc/KzQLc14n/tour.png"
                            height={600}
                            width={849}
                            alt="Tour Image"
                            className="border-none align-middle overflow-hidden"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TrustSection;