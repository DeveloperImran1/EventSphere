"use client";

import React from "react";
import { DollarSign, Rocket, Search, Target, Cog, Clock } from "lucide-react";
import SectionTitleSimple from "../shared/SectionTitleSimple";

const options = [
  {
    title: "Seat Selection",
    icon: DollarSign,
    color: "#1b85dbcf",
    description:
      "Choose your preferred seats on an interactive real-time map with available and premium spots.",
  },
  {
    title: "Dynamic Pricing",
    icon: Rocket,
    color: "#1b85dbcf",
    description:
      "Ticket prices adjust based on demand, offering lower rates for early bookings and higher for late ones.",
  },
  {
    title: "QR Tickets",
    icon: Search,
    color: "#1b85dbcf",
    description:
      "Access events easily with unique QR codes for contactless entry by simply scanning at the venue.",
  },
  {
    title: "Premium Access",
    icon: Target,
    color: "#1b85dbcf",
    description:
      "Get early access, exclusive discounts, and VIP seating with a premium membership plan.",
  },
  {
    title: "Live Support",
    icon: Cog,
    color: "#1b85dbcf",
    description:
      "Get instant help with bookings and event queries through live chat or video call support.",
  },
  {
    title: "Community",
    icon: Clock,
    color: "#1b85dbcf",
    description:
      "Connect with fellow attendees and organizers through our platform for personal and community interaction.",
  },
];

const WhyUse = () => {
  return (
    <div className="container my-10 p-2">
      <SectionTitleSimple
        title="Why Use Our Service"
        subtitle="Choose our service for reliable, high-quality solutions tailored to your needs. Enjoy exceptional customer support, competitive pricing, and innovative features that ensure a seamless and satisfying experience every time."
      />

      <div className="relative  lg:min-h-screen flex items-center justify-center p-4">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-24 h-24 sm:w-32 border-2 sm:h-32 md:w-40 md:h-40 bg-white shadow-xl  flex items-center justify-center rounded-full">
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-gray-100 flex items-center  justify-center rounded-full">
              <h2 className="text-xs md:text-lg text-blue-500 md:font-semibold text-center ">
                EVENTSPHERE
              </h2>
            </div>
          </div>
        </div>
        <div className="relative  w-full max-w-4xl aspect-square">
          {options.map((option, index) => {
            const angle = (index * 60 - 90) * (Math.PI / 180);
            const radius = "min(42%, 350px)";
            return (
              <div
                key={index}
                className="absolute  w-36 sm:w-48 md:w-64 lg:w-72 h-24 sm:h-28 md:h-32 lg:h-36 p-1 flex items-center  rounded-full overflow-hidden transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: `calc(50% + ${Math.sin(angle)} * ${radius})`,
                  left: `calc(50% + ${Math.cos(angle)} * ${radius})`,
                }}
              >
                <div
                  className="w-full  h-full flex items-center"
                  style={{ backgroundColor: option.color }}
                >
                  <div className="w-10 h-10  md:w-14 md:h-14  bg-white rounded-full flex items-center justify-center ml-2">
                    {option.icon &&
                      React.createElement(option.icon, {
                        className: "w-6 h-6  md:w-8 md:h-8 lg:w-9 lg:h-9",
                        style: { color: option.color },
                      })}
                  </div>
                  <div className="flex-1 p-2 text-white">
                    <div
                      data-aos-anchor-placement="center-center"
                    >
                    <h3 className="text-base font-serif md:text-xl ">
                      {option.title}
                    </h3>
                    <p className="text-sm text-gray-800  hidden sm:block">
                      {option.description}
                    </p>
                    </div>
                    
                  </div>
                </div>
              </div>
            );
          })}
          <svg className="  w-full h-full pointer-events-none">
            {options.map((_, index) => {
              const angle = (index * 60 - 90) * (Math.PI / 180);
              const radius = "30%";
              return (
                <line
                  key={index}
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${Math.cos(angle)} * ${radius})`}
                  y2={`calc(50% + ${Math.sin(angle)} * ${radius})`}
                  stroke="#3498db"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WhyUse;
