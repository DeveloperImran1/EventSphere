import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { IoMailUnread } from "react-icons/io5";

const CounterSection = () => {
    return (
        <div className="bg-white text-gray-800 py-10">
            {/* Container */}
            <div className="w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1170px] px-8 mx-auto">
                <div className="flex flex-wrap justify-center -mx-[15px] mb-6">
                    {/* Item Card */}
                    {[
                        { Icon: FaFacebookF, label: "Followers", count: "130K" },
                        { Icon: TiGroup, label: "Members", count: "130K" },
                        { Icon: FaTwitter, label: "Followers", count: "130K" },
                        { Icon: IoMailUnread, label: "Subscribers", count: "130K" },
                    ].map(({ Icon, label, count }, index) => (
                        <div key={index} className="w-full px-[15px] sm:flex-[50%] sm:max-w-[50%] md:flex-[25%] md:max-w-[25%]">
                            <div className="text-center py-10 px-4 border-2 border-gray-200 rounded-[30px] mb-6 transition-all ease-in-out duration-300 hover:bg-gray-400">
                                <div className="w-[50px] h-[50px] rounded-full mx-auto mb-7 bg-blue-500 shadow-xl text-white text-center leading-[50px] text-xl flex items-center justify-center">
                                    <Icon className="mx-auto" />
                                </div>
                                <div className="flex flex-wrap justify-center items-center mb-[15px]">
                                    <div className="uppercase text-[24px] mt-[6px] font-semibold leading-[1.3] -m-2">{count}</div>
                                </div>
                                <p className="-m-[11px] mt-5 !-mb-2 font-semibold leading-[1.3] ">{label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CounterSection;
