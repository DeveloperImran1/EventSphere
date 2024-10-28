"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { MdPeople } from "react-icons/md";
import { MdContactMail } from "react-icons/md";

// import Link from 'next/link';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import SectionTitle from "../shared/SectionTitle";
import SectionTitleSimple from "../shared/SectionTitleSimple";

const Organizers = () => {
  const organizers = [
    {
      name: "Imran Hassan",
      profilePicture:
        "https://media.licdn.com/dms/image/D4D22AQFdzKgfoBGjmA/feedshare-shrink_2048_1536/0/1722914742765?e=2147483647&v=beta&t=1a_qeffsiGRpPDvFbVSKNBV-QKbXZKRNnVCdaLbMGUo",
      role: "Lead Organizer",
      followers: "9.5k",
      specialization: ["Real-Time Events", "Revenue Opt."],
      contactInfo: "imran.hassan@example.com",
      bio: "Leads real-time ticketing and dynamic pricing to enhance revenue growth..",
    },
    {
      name: "Tauhid Hossen",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7yCMBpekD57G4-5FTZcs2CiZUbspx-hA6mQ&s",
      role: "Technical Organizer",
      followers: "7.9k",
      specialization: ["Live Streaming", "Tech Support"],
      contactInfo: "tauhid.hossen@example.com",
      bio: "Oversees live streaming and QR code-based ticketing, ensuring technical.",
    },
    {
      name: "Jowel Ahmed",
      profilePicture:
        "https://img.freepik.com/premium-photo/boss-man-looking-camera-smiling-young-businessman-banker-with-beard-photo-with-close-up-portrait_321831-5908.jpg",
      role: "Logistics Organizer",
      followers: "6.5k",
      specialization: ["Multi-Booking", "User Flexibility"],
      contactInfo: "jowel.ahmed@example.com",
      bio: "Manages customizable event packages and multi-category bookings for user flexibility.",
    },
    {
      name: "Mehedi Mehad",
      profilePicture:
        "https://img.freepik.com/free-photo/portrait-outdoors-successful-business-person_23-2148763862.jpg",
      role: "Program Organizer",
      followers: "7.7k",
      specialization: ["Seat Selection", "AR Venue Tours"],
      contactInfo: "mehedi.mehad@example.com",
      bio: "Focuses on seat selection and AR venue tours, improving the overall event experience.",
    },
    {
      name: "Asadujjaman Atik",
      profilePicture:
        "https://static.vecteezy.com/system/resources/thumbnails/036/751/167/small_2x/ai-generated-portrait-of-a-handsome-ceo-smiling-photo.jpg",
      role: "Coordinator",
      followers: "6.7k",
      specialization: ["Event Recomm.", "User Intuition"],
      contactInfo: "asadujjaman@example.com",
      bio: "Optimizes event recommendations using AI, making the platform more intuitive.",
    },
    {
      name: "Zakia Sultana",
      profilePicture:
        "https://img.freepik.com/premium-photo/professional-photo-linkedin-profile-picture-beautiful-looking-woman-light-color_1078199-10840.jpg",
      role: "Marketing Organizer",
      followers: "6.8k",
      specialization: ["Eco Events", "Sustainability"],
      contactInfo: "zakia.sultana@example.com",
      bio: "Promotes eco-friendly and sustainable events, contributing to green initiatives.",
    },
    {
      name: "Riyad Hasan",
      profilePicture:
        "https://imgcdn.stablediffusionweb.com/2024/2/23/0d639d43-87e7-4f58-8bba-557b0bfbb076.jpg",
      role: "Volunteer Organizer",
      followers: "6.9k",
      specialization: ["Music Events", "Wide Audience"],
      contactInfo: "riyad.hasan@example.com",
      bio: "Handles promotion for music and arts events, ensuring they reach a wider audience.",
    },
    {
      name: "Mostafa Kamal",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGxu1bpsH8F1dpTwMDSlGqJKIs_gabi3T5MQqjLaq-oUevVu7aq9cnd-7o_oj--2zXeAI&usqp=CAU",
      role: "Finance Organizer",
      followers: "6.7k",
      specialization: ["Budgeting", "Financial Success"],
      contactInfo: "mostafa.kamal@example.com",
      bio: "Manages budgets and financial planning, ensuring financial success for every event.",
    },
  ];

  return (
    <div className="container  mx-auto p-4 my-20 ">
      <SectionTitleSimple
        title={"Top Organizers"}
        subtitle={
          "Discover our top organizers, renowned for their expertise and successful events. Their dedication ensures exceptional experiences, making them leaders in the industry. Trust them to bring your vision to life"
        }
      ></SectionTitleSimple>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3,
          },
          1536: {
            slidesPerView: 4,
          },
        }}
      >
        {organizers?.map((organizer, index) => (
          <SwiperSlide key={index}>
            {/* Add group class here */}
            <div className="bg-white dark:bg-gray-800 shadow-lg border-2  rounded-lg p-6 flex flex-col items-center text-center group">
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
              <p className="text-md font-semibold   mb-2">{organizer.role}</p>

              <div className="flex flex-wrap gap-2">
                {organizer.specialization.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-[#1b85db] dark:bg-blue-900 text-white text-bold dark:text-blue-300 px-3 py-1 rounded-full text-sm mb-2"
                  >
                    {spec}
                  </div>
                ))}
              </div>

              <p className="text-md text-start mx-auto font-semibold text-gray-700 dark:text-gray-300 my-2">
                {organizer.bio}
              </p>
              <a
                href={`mailto:${organizer.contactInfo}`}
                className="flex items-center text-blue-600 dark:text-blue-400 text-md font-medium mb-1"
              >
                <MdContactMail className="text-black bg-green-400 mr-2" />
                <span className="text-black font-semibold mr-2">Contact:</span>{" "}
                {organizer.contactInfo}
              </a>

              {/* Add group-hover effect */}
              <div className="flex justify-between items-center gap-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 pt-2 flex gap-2 items-center">
                  <MdPeople className="text-xl " />
                  Followers: {organizer.followers}
                </p>
                <div className="flex items-center gap-3 text-xl ">
                  <FaLinkedin className="bg-blue-500"/>
                  <FaFacebook className="bg-blue-500"/>
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
