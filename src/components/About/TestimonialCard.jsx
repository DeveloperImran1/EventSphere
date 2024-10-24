import Image from 'next/image';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const TestimonialCard = ({ data }) => {
    return (
        <div className='container mx-auto'>
            <div className='container mx-auto   text-center text-[#dbe2fb]'>
                <div className="w-[74px] h-[74px] p-[7px] rounded-full border border-[#032055] mb-[25px] mx-auto sm:mb-[30px]">
                    <div className="">
                        <Image className='w-full rounded-[50%] border-2 border-[#31d7a9]' src={data.img} height={100} width={100} alt='Profile Pic' />
                    </div>
                </div>
                <h1 className='uppercase font-[600px] text-[24px] leading-[1.3] text-white'>{data.name}</h1>
                <div className='text-[14px] mb-[14px] flex justify-center items-center gap-x-1'>
                    <FaCheckCircle className='text-green-500 2xl' />
                    <p className='text-white text-[14px] '>Verified</p>
                </div>
                <p className='text-[24px] leading-[1.4] max-w-sm mx-auto text-white mb-16 -pb-[28px]'>{data.comment}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;