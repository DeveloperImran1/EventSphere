import Link from 'next/link';
import React from 'react';
import { FaAngleRight } from "react-icons/fa";

const MainHeader = () => {
    return (
        <section className="relative bg-[url('https://i.postimg.cc/SNVfkfZ1/banner07.jpg')] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:opacity-80 before:bg-gradient-to-r before:from-[#0f5ae0] before:to-[#7400ba] py-[260px] pb-[117px]">
            <div className="w-full px-4 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px] relative z-[1]">
                <div className="text-center text-white">
                    <h6 className="text-[60px] uppercase leading-[60px] -mt-[13px] font-bold m-0">about us</h6>
                    <ul className="flex flex-wrap p-3 mb-4 bg-transparent justify-center items-center">
                        <li className="inline-flex items-center justify-center">
                            <div className="flex items-center"><Link href={'/'} className=" text-[#d0dbff] text-2xl capitalize">Home</Link> <FaAngleRight className='text-2xl mt-2'/></div>
                        </li>
                        <div className="mt-1 ml-2">
                            <Link href={'/aboutUs'} className=" text-[#d0dbff] text-xl capitalize">About Us</Link> 
                        </div>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default MainHeader;