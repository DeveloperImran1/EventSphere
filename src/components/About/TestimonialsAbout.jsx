"use client"
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaCheckCircle } from "react-icons/fa";



// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import TestimonialCard from './TestimonialCard';

const TestimonialsAbout = () => {
    return (
        <div className="bg-[url('https://i.postimg.cc/N0WjkHpk/client-bg.jpg')]  text-[#dbe2fb] leading-7 overflow-hidden relative block bg-cover bg-center bg-no-repeat pt-20 ">
            {/* Container */}
            <div className="relative z-10 w-full px-4 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px]">
                {/* Header Section */}
                <div className="text-center mb-6 sm:mb-9 md:mb-[50px]">
                    <h1 className="text-[#1b85db] uppercase block text-lg mb-2 -mt-2 sm:text-[24px] sm:mb-6 sm:-mt-1">testimonials</h1>
                    <h1 className="uppercase font-bold mb-4 sm:mb-6 text-2xl sm:text-5xl sm:leading-[60px] -mt-2 sm:-mt-3 text-white m-0">the fans have spoken </h1>
                </div>
                <div className="max-w-[1140px]">
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        pagination={true} modules={[Pagination, Autoplay]} className="mb-20">
                        {reviews.map((data, index) => (
                            <SwiperSlide key={data.id}>
                                <TestimonialCard data={data}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsAbout;
const reviews = [
    {
        id: 1,
        name: "Anisul Islam",
        img: "https://i.postimg.cc/RVqvWk6K/client02.jpg",
        comment: "Excellent interface, very intuitive and clean. Great job overall!"
    },
    {
        id: 2,
        name: "Anisul Islam",
        img: "https://i.postimg.cc/J7PNQkTZ/client03.jpg",
        comment: "Excellent interface, very intuitive and clean. Great job overall!"
    },
    {
        id: 1,
        name: "Anisul Islam",
        img: "https://i.postimg.cc/VvLj8fNJ/client04.jpg",
        comment: "Excellent interface, very intuitive and clean. Great job overall!"
    },
    {
        id: 1,
        name: "Anisul Islam",
        img: "https://i.postimg.cc/J06j7fyP/client01.jpg",
        comment: "Excellent interface, very intuitive and clean. Great job overall!"
    },
]