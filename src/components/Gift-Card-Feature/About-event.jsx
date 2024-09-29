'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'animate.css';
import {  MdPersonAdd, MdLocationPin,  MdEventAvailable } from 'react-icons/md'; // Import React Icons
import Image from "next/image";

import 'swiper/swiper-bundle.css';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { IoMdCalendar } from 'react-icons/io';



const AboutSection = () => {

  const features = [
    {
      icon: MdLocationPin,
      title: 'New york, NY',
      description: 'United Sates.',
      color: '#ff22bb',
    },
    {
      icon: MdEventAvailable,
      title: 'Entertainment',
      description: 'Great Activities',
      color: '#00ccff',
    },
    {
      icon: MdPersonAdd,
      title: '1300+ Seats',
      description: 'Single & VIP',
      color: '#22e622',
    },
    {
      icon: IoMdCalendar,
      title: '24 - 26 Dec',
      description: '3 Awesome Days',
      color: '#ff8c00',
    },
  ]







  return (
    <section className="mt-10 p-2">

      <div className="md:flex  justify-end   items-center  ">
        <div className='md:flex space-y-4 gap-10 md:-mr-40 md:h-96 items-center'  >
          {/* Left Content - Event Description */}
          <div className="    lg:w-80  text-center lg:text-left">
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">About Event</h2>
            <p className="text-gray-600 ">Join us to celebrate the biggest event for the whole family this December!</p>
            <p className="text-gray-600 mb-6">We have prepared a variety of entertaining activities for kids and adults to provide an unforgettable experience of celebrating Christmas the way you want it.</p>
            <a
              className="inline-block bg-red-500 font-semibold  rounded-full text-white p-2  uppercase font-serif text-lg hover:bg-blue-700 transition duration-300"
              href="#"
            >
              Book Now
            </a>
          </div>

          {/* Middle Content - Swiper Image Slider */}
          <div className="md:max-w-[450px]  ">
            <Swiper

spaceBetween={30}
navigation
autoplay={{ delay: 1000 }}
loop={true}
modules={[Navigation, Autoplay]}
className="rounded-lg overflow-hidden shadow-lg"
            >

              <SwiperSlide>
              <div className="flex justify-center items-center   h-[300px]  rounded-lg shadow-lg">
            <div>
                <Image layout="fill" objectFit="cover"
                  src="https://www.thetrainline.com/content/vul/hero-images/city/amsterdam/1x.jpg"
                  alt=""
                />
              </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="flex justify-center items-center   h-[300px]  rounded-lg shadow-lg">
            <div>
                <Image layout="fill" objectFit="cover"
                  src="https://www.thetrainline.com/content/vul/hero-images/city/amsterdam/1x.jpg"
                  alt=""
                />
              </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="flex justify-center items-center   h-[300px]  rounded-lg shadow-lg">
            <div>
                <Image layout="fill" objectFit="cover"
                  src="https://i.ibb.co.com/JKqLxzx/pexels-pixabay-433452.jpg"
                  alt=""
                
                />
              </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="flex justify-center items-center   h-[300px]  rounded-lg shadow-lg">
            <div>
                <Image layout="fill" objectFit="cover"
                  src="https://www.thetrainline.com/content/vul/hero-images/city/amsterdam/1x.jpg"
                  alt=""
                />
              </div>
              </div>
              </SwiperSlide>   
                    

            </Swiper>



          </div>

        </div>
        {/* Right Content - Event Details */}
        <div className=" flex justify-center py-6  rounded-tl-full md:w-1/2 md:h-[443px] bg-gray-200 ">


          <ul className=" grid  grid-cols-1  md:grid-cols-2  gap-4  ">
            {features.map((feature, index) => (
              <li
                key={index}
                className="relative  w-44 p-2 flex justify-center flex-col items-center  rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:shadow-[0_0_15px_var(--clr),0_0_30px_var(--clr)] group"
                style={{
                  '--clr': feature.color,
                  '--i': index,
                }}
              >
                <div
                  className="absolute w-10 h-[400%] opacity-20 transition-all duration-1000 animate-[spin_8s_linear_infinite]"
                  style={{
                    background: `linear-gradient(0deg, transparent 30%, ${feature.color} 70%)`,
                    animationDelay: `calc(2s * ${index})`,
                  }}
                />
                <div className="absolute inset-1 bg-gray-100 transition-all duration-500 z-[1] group-hover:bg-[var(--clr)] group-hover:opacity-5" />
                <div className="relative z-[2]  flex flex-col items-center">
                  <feature.icon className="text-4xl mb-2 transition-colors duration-300" style={{ color: feature.color }} />
                  <div className="text-lg font-serif font-bold mb-2 text-gray-800 group-hover:text-gray-900">{feature.title}</div>
                  <p className="text-sm text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>


    </section>



  );
};

export default AboutSection;


