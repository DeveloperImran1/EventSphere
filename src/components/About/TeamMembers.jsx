"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
// import Link from 'next/link';


const TeamMembers = () => {

    const TeamMembers = [
        {
            id: 1,
            name: "Imran Hassan",
            role: "Lead Organizer",
            img: "https://i.postimg.cc/m2vBS7br/team-shape02.png"
        },
        {
            id: 1,
            name: "Imran Hassan",
            role: "Lead Organizer",
            img: "https://i.postimg.cc/m2vBS7br/team-shape02.png"
        },
        {
            id: 1,
            name: "Imran Hassan",
            role: "Lead Organizer",
            img: "https://i.postimg.cc/m2vBS7br/team-shape02.png"
        },
        {
            id: 1,
            name: "Imran Hassan",
            role: "Lead Organizer",
            img: "https://i.postimg.cc/m2vBS7br/team-shape02.png"
        },
        {
            id: 1,
            name: "Imran Hassan",
            role: "Lead Organizer",
            img: "https://i.postimg.cc/m2vBS7br/team-shape02.png"
        },
        {
            id: 1,
            name: "Imran Hassan",
            role: "Lead Organizer",
            img: "https://i.postimg.cc/m2vBS7br/team-shape02.png"
        },
        {
            id: 1,
            name: "Imran Hassan",
            role: "Lead Organizer",
            img: "https://i.postimg.cc/m2vBS7br/team-shape02.png"
        },
        {
            id: 1,
            name: "Imran Hassan",
            role: "Lead Organizer",
            img: "https://i.postimg.cc/m2vBS7br/team-shape02.png"
        },
    ];


    return (
        <div className="container mx-auto p-4 mb-20 bg-[#001232]">
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={30}
                navigation
                // pagination={{ clickable: true }}
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
                    <SwiperSlide className='' key={index}>
                        {/* Add group class here */}
                        <div className="flex flex-col items-center justify-center  m-0 py-28">
                            <div className="bg-[url('https://i.ibb.co.com/ScJ4rFW/team-shape.png')] bg-no-repeat items-center">
                                <Image className='' src={organizer.img} width={270} height={365} alt='member'/>
                            </div>
                            <div className="mt-5">
                                <h1 className='text-white font-bold capitalize text-center text-[30px]'>bela bose</h1>
                                <p className='text-[#31d7a9]'>CO-FOUNDER, CEO</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
};

export default TeamMembers;