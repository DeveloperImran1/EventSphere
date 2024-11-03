import Image from 'next/image';
import React from 'react';

const OurPhilosophy = () => {
    return (
        <div className="container bg-white bg-cover bg-center shadow-lg">
            <div className="w-full px-4 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px]">
                <div className="flex flex-wrap -mx-4">
                    <div className="bg-white relative w-full px-4 lg:ml-[25%] lg:flex-[0_0_75%] lg:max-w-[75%] pt-16">
                        <div className="px-[15px] md:pb-[30px] md:px-[15px] text-base text-[#032055] leading-[28px]">
                            {/* Content */}
                            <div className="mb-[40px] text-center md:text-left">
                                <p data-aos="fade-right" className="uppercase text-[18px] md:text-[24px] mb-[25px] text-[#1b85db]">Take a Look at</p>
                                <h2 data-aos="fade-right" className="uppercase font-bold text-[30px] sm:text-[40px] lg:text-[50px] leading-[1.2] mb-4 sm:mb-6 text-[#032055]">
                                    Our Philosophy
                                </h2>
                                <p data-aos="fade-right" className="max-w-[700px] text-[16px] sm:text-[18px] text-left text-[#032055] mb-0">
                                    At EventSphere, we believe in building trust through honesty, fostering clarity and transparency in all our processes, and maintaining a strong focus on delivering the best experiences for our customers.
                                </p>
                            </div>
                            <ul className="m-0 p-0">
                                <li className="flex items-center mb-[30px]">
                                    <div className="flex h-[65px] w-[65px] items-center justify-center rounded-full p-[8px] border border-[#032055]">
                                        <Image src="https://i.postimg.cc/9M1gWZgt/icon1.png" height={43} width={43} alt="logo" />
                                    </div>
                                    <h1 className="pl-5 text-[20px] sm:text-[22px] md:text-[24px] font-bold">Honesty & Fairness</h1>
                                </li>
                                <li className="flex items-center mb-[30px]">
                                    <div className="flex h-[65px] w-[65px] items-center justify-center rounded-full p-[8px] border border-[#032055]">
                                        <Image src="https://i.postimg.cc/yd7r4vj8/icon2.png" height={43} width={43} alt="logo" />
                                    </div>
                                    <h1 className="pl-5 text-[20px] sm:text-[22px] md:text-[24px] font-bold">Clarity & Transparency</h1>
                                </li>
                                <li className="flex items-center mb-[30px]">
                                    <div className="flex h-[65px] w-[65px] items-center justify-center rounded-full p-[8px] border border-[#032055]">
                                        <Image src="https://i.postimg.cc/xdvF4WKZ/icon3.png" height={43} width={43} alt="logo" />
                                    </div>
                                    <h1 className="pl-5 text-[20px] sm:text-[22px] md:text-[24px] font-bold">Focus on Customers</h1>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default OurPhilosophy;