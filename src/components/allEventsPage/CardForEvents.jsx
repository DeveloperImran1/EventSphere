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
// facebook share for
import {
  FacebookIcon,
  FacebookShareButton,
} from "react-share";

const InfoItem = ({ icon, text }) => {
  return (
    <div className="flex items-center   space-x-2">
      {icon}
      <span>{text}</span>
    </div>
  );
};

const CardForEvents = ({ event }) => {
  const [hoverd, setHoverd] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);



  const [favorite, setFavorite] = useState([]);
  const [favoriteUpdate, setFavoriteUpdate] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // New hover state


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
  return (
    <div className="">
      <motion.div
        ref={cardRef}
        className="group rounded-lg h-[480px] sm:h-auto overflow-hidden shadow-lg bg-slate-100 transform transition-all duration-300 relative  "
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1 }}
      >
        <div className=" relative overflow-hidden h-48">
          <Image
            className="w-full h-full object-cover transition-transform duration-300 "
            src={event.gallery[0]}
            alt={event.title}
            layout="fill"
            data-aos="zoom-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
        </div>

        <div className="flex justify-end space-x-2 absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
          <button
            className={`p-1 rounded-full  backdrop-blur-sm transition-colors duration-300 hover:bg-white/20 ${favorite?.includes(event?._id) ? '' : ''} bg-[#1b85db]`}
            onClick={() => handleAddFavorite(event._id)}
          >
            <Heart className={`w-6 h-6 ${favorite?.includes(event?._id) ? 'text-red-500 fill-red-500' : 'text-white fill-white'}`} />
          </button>
          <FacebookShareButton className="flex" url={`https://event-sphere-bice.vercel.app/events/${event?._id}`} quote={event.title} hashtag="#EventSphare #WebAvengers" >
{/* 
            <button type="button" title="Share post" className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                <path d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"></path>
              </svg>
            </button> */}
            <button className="p-1 rounded-full  backdrop-blur-sm transition-colors duration-300 hover:bg-white/20 bg-[#1b85db] ">
            <Share2 className="w-6 h-6 text-white" />
          </button>
          </FacebookShareButton>

        
        </div>

        <motion.div className="p-4 sm:p-2 space-y-4" style={{ transformStyle: "preserve-3d" }} variants={contentVariants}>
          <motion.div style={{ transform: "translateZ(40px)" }}>
            <h2 className="text-lg sm:text-md font-bold text-blue-500">
              {event?.title?.slice(0, 20)}
            </h2>
          </motion.div>

          <motion.div className="space-y-2  text-gray-600 " data-aos="fade-up" data-aos-delay="100" >
            <InfoItem icon={<Clock className=" text-blue-400 " />} text={format(new Date(event.dateTime), 'MMMM do, yyyy')} />
            {/* <InfoItem icon={<Building2 className=" text-blue-400  " />} text={`Hosted by: ${event.companyName}`} /> */}
            <InfoItem icon={<MapPin className=" text-blue-400  " />} text={`${event.location.country}, ${event.location.city}`} />
            {/* <InfoItem icon={<FileType className=" text-blue-400  " />} text={`Type: ${event.type}`} /> */}
            <InfoItem icon={<Tag className=" text-blue-400  " />} text={`Category: ${event.category}`} />
          </motion.div>

          <motion.div className="flex justify-between items-center " data-aos="fade-up" data-aos-delay="300" >
            <InfoItem icon={<FaDollarSign className=" text-blue-400 text-[24px] font-normal" />} text={`Price: ${event.price}`} />

            <Link href={`/events/${event?._id}`} onMouseEnter={() => setHoverd(true)} onMouseLeave={() => setHoverd(false)} className="border-2 icon-container rounded-full p-1 hover:bg-[#1b85db] border-[#1b85db] hover:text-white ease-in duration-300" >
              {
                hoverd ? <IoMdArrowRoundForward size={22} className="icon-hover ease-in duration-300" ></IoMdArrowRoundForward> : <MdArrowOutward size={22} className="icon-default ease-in duration-300" ></MdArrowOutward>

              }
            </Link>

          </motion.div>
        </motion.div>
      </motion.div>



    </div>

  );
};

export default CardForEvents;