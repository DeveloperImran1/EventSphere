import Image from "next/image";
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect, useRef } from "react";
import { FaDollarSign } from "react-icons/fa";

import {
    MapPin,
    Building2,
    Tag,
    Clock,
    FileType,
    ArrowRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import FireTextTitle from "../shared/FireText";
import RotateButton from "../shared/RotateButton";
import { format } from 'date-fns';
import { IoMdArrowRoundForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { Heart, Share2 } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../shared/LoadingSpinner/Loading';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import SectionTitle from "../shared/SectionTitle";



const InfoItem = ({ icon, text }) => {
    return (
        <div className="flex items-center   space-x-2">
            {icon}
            <span>{text}</span>
        </div>
    );
};

const PopularEvents = () => {
    const [hoverd, setHoverd] = useState(false)
    const [favorite, setFavorite] = useState([]);
    const [favoriteUpdate, setFavoriteUpdate] = useState(false);
    const [isHovered, setIsHovered] = useState(false); // New hover state
    const axiosPublic = useAxiosPublic()


    // Data fetching using react-query
    const { data: popularEventsMax = {}, isLoading, refetch } = useQuery({
        queryKey: ['popularEventsMax'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/events/popular-events');
            return data;
        },
        staleTime: 0,
        keepPreviousData: true,
    });
    // console.log(popularEventsMax)
    // console.log(popularEventsMax.title)
    // console.log(popularEventsMax.price)



    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const handleAddFavorite = (id) => {
        const storedFavorites = localStorage.getItem('favorites');
        let favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

        if (favorites.includes(id)) {
            favorites = favorites.filter(favId => favId !== id);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            setFavoriteUpdate(!favoriteUpdate)
            toast.error('Removed Bookmark!')
        } else {
            favorites.push(id);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            setFavoriteUpdate(!favoriteUpdate)
            toast.success('Successfully Bookmarked!')
        }
    };

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        let currentFavorute = storedFavorites ? JSON.parse(storedFavorites) : [];
        setFavorite(currentFavorute)
    }, [favoriteUpdate])



    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);


    // 3d card const Card3D = ({ event }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    const cardVariants = {
        hover: {
            scale: 1.05,
            // scale: 1.05,
            rotateX: 0,
            rotateY: 0,
            transition: { duration: 0.3 }
        }
    };

    const contentVariants = {
        hover: { z: 50, transition: { duration: 0.3 } }
    };

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const updateMousePosition = (ev) => {
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            x.set((ev.clientX - centerX) / 5);
            y.set((ev.clientY - centerY) / 5);
        };

        card.addEventListener('mousemove', updateMousePosition);
        card.addEventListener('mouseleave', () => {
            animate(x, 0, { duration: 0.5 });
            animate(y, 0, { duration: 0.5 });
        });

        return () => {
            card.removeEventListener('mousemove', updateMousePosition);
            card.removeEventListener('mouseleave', () => { });
        };
    }, [x, y]);

    const formatDateTime = (dateTime) => {
        let formattedDateTime = dateTime.slice(0, 10) + " " + dateTime.slice(11);

        return formattedDateTime.slice(0, 16);
    };

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="container">
            <div className="my-16 max-w-2xl mx-auto">
                <h2 className="text-center font-bold 2xl:font-black font-mono text-3xl lg:text-5xl 2xl:text-7xl text-blue-500 mb-4">Popular Events</h2>
                <p className="text-center">Explore the top popular events with the most booked seats, offering exciting experiences across various categories like entertainment, sports, and cultural activities, ensuring unforgettable moments for everyone.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:4 2xl:6 gap-2 lg:gap-4 2xl:gap-6">
                {popularEventsMax.map(popularEvents => <>
                    <div className=" " key={popularEvents._id}>

                        <motion.div
                            ref={cardRef}
                            className="group rounded-lg overflow-hidden shadow-lg bg-slate-100 transform transition-all duration-300 relative"
                            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                            whileHover="hover"
                            variants={cardVariants}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.1 }}
                        >
                            <div className="relative overflow-hidden h-48">
                                <Image
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    src={popularEvents?.gallery[0]}
                                    alt={popularEvents?.title}
                                    layout="fill"
                                    data-aos="zoom-in"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                            </div>

                            <div className="flex justify-end space-x-2 absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                                <button
                                    className={`p-1 rounded-full  backdrop-blur-sm transition-colors duration-300 hover:bg-white/20 ${favorite?.includes(popularEvents?._id) ? 'bg-white' : 'bg-red-500'} `}
                                    onClick={() => handleAddFavorite(popularEvents?._id)}
                                >
                                    <Heart className={`w-6 h-6 ${favorite?.includes(popularEvents?._id) ? 'text-red-500 fill-red-500' : 'text-white fill-white'}`} />
                                </button>
                                <button className="p-1 rounded-full  backdrop-blur-sm transition-colors duration-300 hover:bg-white/20 bg-[#1b85db] ">
                                    <Share2 className="w-6 h-6 text-white" />
                                </button>
                            </div>

                            <motion.div className="p-6  space-y-4 " style={{ transformStyle: "preserve-3d" }} variants={contentVariants}>
                                <motion.div style={{ transform: "translateZ(40px)" }}>
                                    <h2 className="text-2xl font-bold text-blue-500"> {popularEvents?.title}</h2>
                                </motion.div>

                                <motion.div className="space-y-2  text-gray-600 " data-aos="fade-up" data-aos-delay="100" >
                                    <InfoItem icon={<Clock className=" text-blue-400 " />} text={format(new Date(popularEvents?.dateTime), 'MMMM do, yyyy h:mm a')} />
                                    <InfoItem icon={<Building2 className=" text-blue-400  " />} text={`Hosted by: ${popularEvents?.companyName}`} />
                                    <InfoItem icon={<MapPin className=" text-blue-400  " />} text={`${popularEvents?.location.country}, ${popularEvents?.location.city}`} />
                                    <InfoItem icon={<FileType className=" text-blue-400  " />} text={`Type: ${popularEvents?.type}`} />
                                    <InfoItem icon={<Tag className=" text-blue-400  " />} text={`Category: ${popularEvents?.category}`} />
                                </motion.div>

                                <motion.div className="flex justify-between items-center -mt-6" data-aos="fade-up" data-aos-delay="300" >
                                    <InfoItem icon={<FaDollarSign className=" text-blue-400 text-[25px] " />} text={`Price: ${popularEvents?.price}`} />

                                    <Link href={`/events/${popularEvents?._id}`} onMouseEnter={() => setHoverd(true)} onMouseLeave={() => setHoverd(false)} className="border-2 icon-container rounded-full p-1 hover:bg-[#1b85db] border-[#1b85db] hover:text-white ease-in duration-300" >
                                        {
                                            hoverd ? <IoMdArrowRoundForward size={22} className="icon-hover ease-in duration-300" ></IoMdArrowRoundForward> : <MdArrowOutward size={22} className="icon-default ease-in duration-300" ></MdArrowOutward>

                                        }
                                    </Link>

                                </motion.div>
                            </motion.div>
                        </motion.div>

                    </div>
                </>)}

            </div>
        </div>
    );
};

export default PopularEvents;