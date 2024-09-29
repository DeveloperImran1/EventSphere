"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { MdPeople } from "react-icons/md";
// import Link from 'next/link';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import SectionTitle from '../shared/SectionTitle';


const Organizers = () => {

    const organizers = [
        {
            name: "Imran Hassan",
            profilePicture: "https://media.licdn.com/dms/image/D4D22AQFdzKgfoBGjmA/feedshare-shrink_2048_1536/0/1722914742765?e=2147483647&v=beta&t=1a_qeffsiGRpPDvFbVSKNBV-QKbXZKRNnVCdaLbMGUo",
            role: "Lead Organizer",
            followers: "9.5k",
            specialization: ["Real-Time Events", "Revenue Opt."],
            contactInfo: "imran.hassan@example.com",
            bio: "Imran is leading the implementation of real-time ticket availability and dynamic pricing models to optimize user experience and maximize revenue."
        },
        {
            name: "Tauhid Hossen",
            profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7yCMBpekD57G4-5FTZcs2CiZUbspx-hA6mQ&s",
            role: "Technical Organizer",
            followers: "7.9k",
            specialization: ["Live Streaming", "Tech Support"],
            contactInfo: "tauhid.hossen@example.com",
            bio: "Tauhid ensures seamless technical integration, including live streaming features and secure, QR code-based ticketing for events."
        },
        {
            name: "Jowel Ahmed",
            profilePicture: "https://img.freepik.com/premium-photo/boss-man-looking-camera-smiling-young-businessman-banker-with-beard-photo-with-close-up-portrait_321831-5908.jpg",
            role: "Logistics Organizer",
            followers: "6.5k",
            specialization: ["Multi-Booking", "User Flexibility"],
            contactInfo: "jowel.ahmed@example.com",
            bio: "Jowel coordinates the logistics of customizable event packages and multi-category bookings, making the platform flexible and user-friendly."
        },
        {
            name: "Mehedi Mehad",
            profilePicture: "https://img.freepik.com/free-photo/portrait-outdoors-successful-business-person_23-2148763862.jpg",
            role: "Program Organizer",
            followers: "7.7k",
            specialization: ["Seat Selection", "AR Venue Tours"],
            contactInfo: "mehedi.mehad@example.com",
            bio: "Mehedi focuses on providing interactive seat selection and AR-based venue tours, enhancing the user’s pre-event experience."
        },
        {
            name: "Asadujjaman Atik",
            profilePicture: "https://static.vecteezy.com/system/resources/thumbnails/036/751/167/small_2x/ai-generated-portrait-of-a-handsome-ceo-smiling-photo.jpg",
            role: "Coordinator",
            followers: "6.7k",
            specialization: ["Event Recomm.", "User Intuition"],
            contactInfo: "asadujjaman@example.com",
            bio: "Atik ensures users receive personalized event recommendations through AI-driven algorithms, making the platform more intuitive."
        },
        {
            name: "Zakia Sultana",
            profilePicture: "https://img.freepik.com/premium-photo/professional-photo-linkedin-profile-picture-beautiful-looking-woman-light-color_1078199-10840.jpg",
            role: "Marketing Organizer",
            followers: "6.8k",
            specialization: ["Eco Events", "Sustainability"],
            contactInfo: "zakia.sultana@example.com",
            bio: "Zakia focuses on the platform’s sustainability scores, allowing users to choose eco-friendly event options that support green initiatives."
        },
        {
            name: "Riyad Hasan",
            profilePicture: "https://imgcdn.stablediffusionweb.com/2024/2/23/0d639d43-87e7-4f58-8bba-557b0bfbb076.jpg",
            role: "Volunteer Organizer",
            followers: "6.9k",
            specialization: ["Music Events", "Wide Audience"],
            contactInfo: "riyad.hasan@example.com",
            bio: "Riyad handles the marketing and promotion for entertainment, music, and arts events, helping to reach a wide audience."
        },
        {
            name: "Mostafa Kamal",
            profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGxu1bpsH8F1dpTwMDSlGqJKIs_gabi3T5MQqjLaq-oUevVu7aq9cnd-7o_oj--2zXeAI&usqp=CAU",
            role: "Finance Organizer",
            followers: "6.7k",
            specialization: ["Budgeting", "Financial Success"],
            contactInfo: "mostafa.kamal@example.com",
            bio: "Mostafa manages the budget and financial planning for corporate and business-related events, ensuring financial success for each event."
        }
    ];


    return (
        <div className="w-[calc(100vw-17px)] mx-auto p-4 mb-20">
         <SectionTitle 
         subTitle="Our Team"
         title={"top organizers"}
         description={"Discover our top organizers, renowned for their expertise and successful events. Their dedication ensures exceptional experiences, making them leaders in the industry. Trust them to bring your vision to life"}
         >

         </SectionTitle>
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
                {organizers.map((organizer, index) => (
                    <SwiperSlide key={index}>
                        {/* Add group class here */}
                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center group">
                            <div className="relative w-32 h-32 mb-4">
                                <Image
                                    src={organizer.profilePicture}
                                    alt={`${organizer.name}'s profile`}
                                    className="rounded-full object-cover w-full h-full animate-top-down"
                                    width={200} height={200}
                                />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                                {organizer.name}
                            </h3>
                            <p className="text-sm  mb-2">{organizer.role}</p>

                            <div className="flex flex-wrap gap-2">
                                {organizer.specialization.map((spec, index) => (
                                    <div
                                        key={index}
                                        className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs mb-2"
                                    >
                                        {spec}
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{organizer.bio.slice(0, 105)} ...</p>
                            <a
                                href={`mailto:${organizer.contactInfo}`}
                                className="text-blue-500 dark:text-blue-400 text-sm font-medium mb-1"
                            >
                                Contact: {organizer.contactInfo}
                            </a>

                            {/* Add group-hover effect */}
                            <div className="flex justify-between items-center gap-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 pt-2 flex gap-2 items-center">
                                    <MdPeople className="text-xl" />
                                    Followers: {organizer.followers}
                                </p>
                                <div className="flex items-center gap-3 text-xl ">
                                    <FaLinkedin />
                                    <FaFacebook />
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
