import Image from "next/image";
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect, useRef } from "react";

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

const InfoItem = ({ icon, text }) => {
  return (
    <div className="flex items-center   space-x-2">
      {icon}
      <span>{text}</span>
    </div>
  );
};

const CardForEvents = ({ event }) => {

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
    <div className=" ">

      <motion.div
        ref={cardRef}
        className="group rounded-lg overflow-hidden shadow-lg bg-slate-100 transform transition-all duration-300"
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
            src={event.gallery[0]}
            alt={event.title}
            layout="fill"
            data-aos="zoom-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
        </div>

        <motion.div className="p-6  space-y-4 " style={{ transformStyle: "preserve-3d" }} variants={contentVariants}>
          <motion.div style={{ transform: "translateZ(40px)" }}>
            <h2 className="text-2xl font-bold text-blue-500"> {event.title}</h2>
          </motion.div>

          <motion.div className="space-y-2 px-1  text-gray-600 " data-aos="fade-up" data-aos-delay="100" >
            <InfoItem icon={<Clock className="text-blue-400" />} text={formatDateTime(event.dateTime)} />
            <InfoItem icon={<Building2 className=" text-blue-400  " />} text={`Hosted by: ${event.companyName}`} />
            <InfoItem icon={<MapPin className=" text-blue-400  " />} text={`${event.location.country}, ${event.location.city}`} />
            <InfoItem icon={<FileType className=" text-blue-400  " />} text={`Type: ${event.type}`} />
            <InfoItem icon={<Tag className=" text-blue-400  " />} text={`Category: ${event.category}`} />
          </motion.div>

          <motion.div className="flex justify-between items-center" data-aos="fade-up" data-aos-delay="300" >
            <motion.button
              className=" text-white p-2 rounded-xl font-semibold shadow-md bg-blue-400  transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              $ {event.price}
            </motion.button >

            <motion.div 
            whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              >
              <RotateButton >Buy Ticket</RotateButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

    </div>
  );
};

export default CardForEvents;