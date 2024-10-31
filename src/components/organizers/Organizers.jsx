
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

import { FaFacebook, FaLinkedin } from "react-icons/fa";

import SectionTitleSimple from "../shared/SectionTitleSimple";
import { IoIosMailOpen } from "react-icons/io";

const Organizers = () => {
  const organizers = [
    {
      name: "Imran Hassan",
      profilePicture:
        "https://media.licdn.com/dms/image/D4D22AQFdzKgfoBGjmA/feedshare-shrink_2048_1536/0/1722914742765?e=2147483647&v=beta&t=1a_qeffsiGRpPDvFbVSKNBV-QKbXZKRNnVCdaLbMGUo",
      role: "Lead Organizer",
      followers: "9.5k",
      specialization: ["Real-Time Events", "Revenue Opt."],
      contactInfo: "imran@example.com",
      bio: "Leads real-time ticketing and dynamic pricing to enhance revenue growth..",
    },
    {
      name: "Tauhid Hossen",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7yCMBpekD57G4-5FTZcs2CiZUbspx-hA6mQ&s",
      role: "Technical Organizer",
      followers: "7.9k",
      specialization: ["Live Streaming", "Tech Support"],
      contactInfo: "tauhid@example.com",
      bio: "Oversees live streaming and QR code-based ticketing, ensuring technical.",
    },
    {
      name: "Jowel Ahmed",
      profilePicture:
        "https://img.freepik.com/premium-photo/boss-man-looking-camera-smiling-young-businessman-banker-with-beard-photo-with-close-up-portrait_321831-5908.jpg",
      role: "Logistics Organizer",
      followers: "6.5k",
      specialization: ["Multi-Booking", "User Flexibility"],
      contactInfo: "jowel@example.com",
      bio: "Manages customizable event packages and category bookings for user flexibe.",
    },
    {
      name: "Mehedi Mehad",
      profilePicture:
        "https://img.freepik.com/free-photo/portrait-outdoors-successful-business-person_23-2148763862.jpg",
      role: "Program Organizer",
      followers: "7.7k",
      specialization: ["Seat Selection", "AR Venue Tours"],
      contactInfo: "mehedi@example.com",
      bio: "Focuses on seat selection and AR venue tours, improving the overall.",
    },
    {
      name: "Asadujjaman Atik",
      profilePicture:
        "https://static.vecteezy.com/system/resources/thumbnails/036/751/167/small_2x/ai-generated-portrait-of-a-handsome-ceo-smiling-photo.jpg",
      role: "Coordinator",
      followers: "6.7k",
      specialization: ["Event Recomm.", "User Intuition"],
      contactInfo: "atik@example.com",
      bio: "Optimizes event recommendations using AI, making the platform more.",
    },
    {
      name: "Zakia Sultana",
      profilePicture:
        "https://img.freepik.com/premium-photo/professional-photo-linkedin-profile-picture-beautiful-looking-woman-light-color_1078199-10840.jpg",
      role: "Marketing Organizer",
      followers: "6.8k",
      specialization: ["Eco Events", "Sustainability"],
      contactInfo: "zakia@example.com",
      bio: "Promotes eco-friendly and sustainable events, contributing to green.",
    },
    {
      name: "Riyad Hasan",
      profilePicture:
        "https://imgcdn.stablediffusionweb.com/2024/2/23/0d639d43-87e7-4f58-8bba-557b0bfbb076.jpg",
      role: "Volunteer Organizer",
      followers: "6.9k",
      specialization: ["Music Events", "Wide Audience"],
      contactInfo: "riyad@example.com",
      bio: "Handles promotion for music and arts events, ensuring they a audience.",
    },
    {
      name: "Mostafa Kamal",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGxu1bpsH8F1dpTwMDSlGqJKIs_gabi3T5MQqjLaq-oUevVu7aq9cnd-7o_oj--2zXeAI&usqp=CAU",
      role: "Finance Organizer",
      followers: "6.7k",
      specialization: ["Budgeting", "Financial Success"],
      contactInfo: "mostafa@example.com",
      bio: "Manages budgets and financial planning, financial success for event.",
    },
  ];


  return (
    <div className="container mx-auto p-4 my-20">
      <SectionTitleSimple
        title="Top Organizers"
        subtitle="Discover our top organizers, renowned for their expertise and successful events. Their dedication ensures exceptional experiences, making them leaders in the industry. Trust them to bring your vision to life"
      />
      
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
          1536: { slidesPerView: 4 },
        }}
      >
        {organizers?.map((organizer, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white dark:bg-gray-800 shadow-lg border-2 rounded-lg p-2 flex flex-col items-center text-center group h-[600px] w-[300px]">
      <div className="relative w-32 h-32 mb-4">
        <Image
          src={organizer.profilePicture}
          alt={`${organizer.name}'s profile`}
          className="rounded-full object-cover w-full h-full animate-top-down"
          width={200}
          height={200}
        />
      </div>
      
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
        {organizer.name}
      </h3>
      
      <p className="text-md font-semibold mb-2">{organizer.role}</p>

      <div className="flex flex-wrap gap-2 justify-center mb-2">
        {organizer.specialization.map((spec, index) => (
          <div
            key={index}
            className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs"
          >
            {spec}
          </div>
        ))}
      </div>

      <p className="text-sm text-center mx-auto text-gray-700 dark:text-gray-300 mb-4 flex-grow overflow-y-auto">
        {organizer.bio}
      </p>
      
      <a
        href={`mailto:${organizer.contactInfo}`}
        className="flex items-center bg-blue-200 px-2 rounded-xl text-base mb-2"
      >
        <IoIosMailOpen className="  mr-2 rounded  text-lg" />
     
        {organizer.contactInfo}
      </a>

      <div className="flex justify-evenly items-center w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 flex items-center gap-1">
         Followers:  <span className="text-black">{organizer.followers} </span>
        </p>
        
        <div className="flex items-center  gap-3 text-xl">
          <FaLinkedin className=" cursor-pointer" />
          <FaFacebook className=" cursor-pointer" />
        </div>
      </div>
    </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Organizers;