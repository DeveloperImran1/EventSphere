'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'animate.css';
import { MdList, MdAssignment, MdPersonAdd, MdUpload } from 'react-icons/md'; // Import React Icons

import 'swiper/swiper-bundle.css';

const AboutSection = () => {

  const features = [
    {
      icon: MdList,
      title: 'New york, NY',
      description: 'United Sates.',
      color: '#ff22bb',
    },
    {
      icon: MdAssignment,
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
      icon: MdUpload,
      title: '24 - 26 Dec',
      description: '3 Awesome Days',
      color: '#ff8c00',
    },
  ]







  return (
    <section className="">

      <div className="md:flex  justify-end   items-center  ">
        <div className='md:flex gap-10 -mr-40 h-96 items-center   '  >
          {/* Left Content - Event Description */}
          <div className="    w-80  text-center lg:text-left">
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
          <div className="w-[350px]   ">
            <Swiper

              spaceBetween={30}
              navigation // Enable navigation
              autoplay={{ delay: 3000 }}
              loop={true}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/pdKXjSQ/concertgoers-watching-majestic-concert-many-spotlight-people-see-music-show-crowd-ambience-1235831-9.jpg"
                  alt="Christmas Event 1"

                  className="object-cover w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/pdKXjSQ/concertgoers-watching-majestic-concert-many-spotlight-people-see-music-show-crowd-ambience-1235831-9.jpg"
                  alt="Christmas Event 2"

                  className="object-cover w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/pdKXjSQ/concertgoers-watching-majestic-concert-many-spotlight-people-see-music-show-crowd-ambience-1235831-9.jpg"
                  alt="Christmas Event 3"

                  className="object-cover w-full h-full"
                />
              </SwiperSlide>
            </Swiper>
          </div>

        </div>
        {/* Right Content - Event Details */}
        <div className=" flex justify-center py-6  rounded-tl-full w-1/2 h-[443px] bg-gray-200 ">


          <ul className=" grid grid-cols-2  gap-4  ">
            {features.map((feature, index) => (
              <li
                key={index}
                className="relative     w-40 p-2 flex justify-center flex-col items-center  rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:shadow-[0_0_15px_var(--clr),0_0_30px_var(--clr)] group"
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
                <div className="relative z-[2] flex flex-col items-center">
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
