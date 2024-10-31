'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'animate.css';
import { MdPersonAdd, MdLocationPin, MdEventAvailable } from 'react-icons/md'; // Import React Icons
import Image from "next/image";

import 'swiper/swiper-bundle.css';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { IoMdCalendar } from 'react-icons/io';
import { Button } from '../ui/button';



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
    <section className=" container h-full">

      <div className="md:flex mx-auto py-7 lg:py-14 justify-evenly  items-center h-full ">
        <div className='md:flex space-y-4 gap-10  items-center'  >
          {/* Left Content - Event Description */}
          <div className=" ml-6   lg:w-[50%]  text-center lg:text-left">
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">About Event</h2>
            <p className="text-gray-600 ">Join us to celebrate the biggest event for the whole family this December!</p>
            <p className="text-gray-600 mb-6">We have prepared a variety of entertaining activities for kids and adults to provide an unforgettable experience of celebrating Christmas the way you want it.</p>
           <Button className='button'>Book Now</Button>
          </div>

          

        </div>
        {/* Right Content - Event Details */}
        <div className="hidden lg:flex justify-center py-10   md:w-1/2 md:h-[443px]  ">


          <ul className=" grid  grid-cols-1  md:grid-cols-2  gap-4  ">
            {features.map((feature, index) => (
              <li
                key={index}
                className="relative w-44 p-2 flex justify-center flex-col items-center  rounded-lg shadow-md overflow-hidden transition-all duration-500 "
              >
                <div
                  className="absolute w-10 h-[400%] opacity-20 transition-all duration-1100 animate-[spin_3s_linear_infinite]"
                 
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


