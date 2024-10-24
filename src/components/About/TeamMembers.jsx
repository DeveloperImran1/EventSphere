"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import SectionTitleSimple from '../shared/SectionTitleSimple';
// import Link from 'next/link';


const TeamMembers = () => {

    const TeamMembers = [
        {
            id: 1,
            role: "Lead Organizer",
            name: "Tauhid Hossen",
            profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7yCMBpekD57G4-5FTZcs2CiZUbspx-hA6mQ&s",
        },
        {
            id: 2,
            role: "Lead Organizer",
            name: "Imran Hassan",
            profilePicture: "https://media.licdn.com/dms/image/D4D22AQFdzKgfoBGjmA/feedshare-shrink_2048_1536/0/1722914742765?e=2147483647&v=beta&t=1a_qeffsiGRpPDvFbVSKNBV-QKbXZKRNnVCdaLbMGUo",
        },
        {
            id: 3,
            role: "Lead Organizer",
            name: "Jowel Ahmed",
            profilePicture: "https://img.freepik.com/premium-photo/boss-man-looking-camera-smiling-young-businessman-banker-with-beard-photo-with-close-up-portrait_321831-5908.jpg",
        },
        {
            id: 4,
            role: "Lead Organizer",
            name: "Mehedi Mehad",
            profilePicture: "https://img.freepik.com/free-photo/portrait-outdoors-successful-business-person_23-2148763862.jpg",
        },
        {
            id: 5,
            name: "Imran Hassan",
            role: "Lead Organizer",
            name: "Asadujjaman ",
            profilePicture: "https://static.vecteezy.com/system/resources/thumbnails/036/751/167/small_2x/ai-generated-portrait-of-a-handsome-ceo-smiling-photo.jpg",
        },
        {
            id: 6,
            role: "Lead Organizer",
            name: "Zakia Sultana",
            profilePicture: "https://img.freepik.com/premium-photo/professional-photo-linkedin-profile-picture-beautiful-looking-woman-light-color_1078199-10840.jpg",
        },
        {
            id: 7,
            role: "Lead Organizer",
            name: "Riyad Hasan",
            profilePicture: "https://imgcdn.stablediffusionweb.com/2024/2/23/0d639d43-87e7-4f58-8bba-557b0bfbb076.jpg",
        },
        {
            id: 8,
            role: "Lead Organizer",
            name: "Mostafa Kamal",
            profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGxu1bpsH8F1dpTwMDSlGqJKIs_gabi3T5MQqjLaq-oUevVu7aq9cnd-7o_oj--2zXeAI&usqp=CAU",
        },
    ];


    return (
        <div className="container mx-auto p-4  bg-white">
            <SectionTitleSimple
            title="Our Team Members" subtitle="Our team is dedicated, passionate, and skilled, committed to delivering exceptional results. We believe in collaboration, innovation, and striving for excellence in everything we do." />
            <div className="bg-white shadow-lg rounded-lg p-6">
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={30}
                    navigation
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
                            slidesPerView: 4,
                        },
                    }}
                >
                    {TeamMembers.map((organizer, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center justify-center pb-12">
                                <div className="bg-[url('https://i.ibb.co.com/ScJ4rFW/team-shape.png')] bg-no-repeat flex items-center justify-center">
                                    <Image
                                        className="rounded-md h-72 object-cover"
                                        src={organizer?.profilePicture}
                                        width={270}
                                        height={365}
                                        alt="member"
                                    />
                                </div>
                                <div className="mt-5 text-center">
                                    <h1 className="text-gray-900 font-bold capitalize text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px]">{organizer?.name}</h1>
                                    <p className="text-[#31d7a9] text-[16px]">{organizer?.role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>



    );
};

export default TeamMembers;