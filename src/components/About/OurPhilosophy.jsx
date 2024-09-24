import Image from 'next/image';
import React from 'react';

const OurPhilosophy = () => {
    return (
        <div
            className="bg-[#001232] md:pt-28 md:pb-28 bg-cover bg-center"
            style={{
                backgroundImage: "url('https://i.postimg.cc/gkf5wBxJ/about-bg.jpg')",
                backgroundSize: "calc(50% + 570px) 101%",
                backgroundPosition: "left center",
                backgroundRepeat: "no-repeat",
                boxSizing: "border-box"
            }}
        >
            <div className="w-full px-4 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px]">
                <div className="flex flex-wrap -mx-4">
                    <div className="bg-[#032055] pt-16 md:bg-[#001232] relative w-full px-4 lg:ml-[25%] lg:flex-[0_0_75%] lg:max-w-[75%]">
                        <div className="px-[15px] md:pb-[30px] md:px-[15px] text-base text-[#dbe2fb] leading-[28px]">
                            {/* Content here */}
                            <div className="mb-[40px] md:text-left">
                                <p className='uppercase text-[18px] md:text-[24px] mb-[25px] -mt-[6px] text-[#31d7a9]'>Take look at</p>
                                <h2 className="uppercase font-bold mb-4 sm:mb-6 text-[30px] sm:text-[50px] sm:leading-[60px] sm:-mt-3 text-white">Our philosophy</h2>
                                <p className="max-w-[700px] text-left text-[16px] text-[#dbe2fb] mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmtempor incididunt labore et dolore magna aliqu enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                            </div>
                            <ul className='m-0 p-0'>
                                <li className='flex flex-wrap mb-[30px] p-0 items-center'>
                                    <div className="flex flex-wrap h-[65px] w-[65px] justify-center items-center rounded-[50%] p-[8px] border-[1px] border-[#032055]">
                                        <Image src="https://i.postimg.cc/9M1gWZgt/icon1.png" height={43} width={43} alt='logo' className='mt-[5px]'/>
                                    </div>
                                    <h1 className='pl-5 text-[20px] md:text-[24px] font-bold'>Honesty & Fairness </h1>
                                </li>
                                <li className='flex flex-wrap mb-[30px] p-0 items-center'>
                                    <div className="flex flex-wrap h-[65px] w-[65px] justify-center items-center rounded-[50%] p-[8px] border-[1px] border-[#032055]">
                                        <Image src="https://i.postimg.cc/yd7r4vj8/icon2.png" height={43} width={43} alt='logo' className='mt-[5px]'/>
                                    </div>
                                    <h1 className='pl-5 text-[20px] md:text-[24px] font-bold'>Clarity & Transparency</h1>
                                </li>
                                <li className='flex flex-wrap mb-[30px] p-0 items-center'>
                                    <div className="flex flex-wrap h-[65px] w-[65px] justify-center items-center rounded-[50%] p-[8px] border-[1px] border-[#032055]">
                                        <Image src="https://i.postimg.cc/xdvF4WKZ/icon3.png" height={43} width={43} alt='logo' className='mt-[5px]'/>
                                    </div>
                                    <h1 className='pl-5 text-[20px] md:text-[24px] font-bold'>Focus on Customers </h1>
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