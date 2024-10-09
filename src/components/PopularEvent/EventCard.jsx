'use client'

import React, { useEffect, useState } from 'react';
import { Heart, Share2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";

const EventCard = ({event}) => {
     console.log(event)
   
    const [isLiked, setIsLiked] = useState(false);
    const [isHovered, setIsHovered] = useState(false); // New hover state
    const CountdownUnit = ({ value, label }) => (
        <div className="flex gap-2 items-center justify-center w-16 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <span className="text-xl font-mono font-bold text-white">{value.toString().padStart(2, '0')}</span>
          <span className="text-xs font-serif uppercase text-purple-200">{label}</span>
        </div>
      )
      
      const EnhancedCountdown = ({ date }) => {
        const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
      
        function calculateTimeLeft() {
          const difference = date - Date.now()
          let timeLeft = {}
      
          if (difference > 0) {
            timeLeft = {
              days: Math.floor(difference / (1000 * 60 * 60 * 24)),
              hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
              minutes: Math.floor((difference / 1000 / 60) % 60),
              seconds: Math.floor((difference / 1000) % 60),
            }
          } else {
            // Set to zero if time has passed
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }
          }
      
          return timeLeft
        }
      
        useEffect(() => {
          const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
          }, 1000)
      
          return () => clearTimeout(timer)
        }, [timeLeft]) // Added timeLeft as dependency to update when it changes
      
        const { days = 0, hours = 0, minutes = 0, seconds = 0 } = timeLeft
      
        return (
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-2">
              <CountdownUnit value={days} label="D" />
              <CountdownUnit value={hours} label="H" />
              <CountdownUnit value={minutes} label="M" />
              <CountdownUnit value={seconds} label="S" />
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-1000 ease-linear"
                style={{ width: `${(seconds / 60) * 100}%` }}
              ></div>
            </div>
          </div>
        )
      }
      

    return (
        <div>
              <div className="w-full">
      <div
        className="relative h-[550px] rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 "
        style={{
          backgroundImage: `url(${event.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        onMouseEnter={() => setIsHovered(true)} // Set hover state on mouse enter
        onMouseLeave={() => setIsHovered(false)} // Reset hover state on mouse leave
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 transition-opacity duration-300 hover:opacity-90">
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <div className="flex justify-end space-x-2">
              <button
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm transition-colors duration-300 hover:bg-white/20"
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={`w-6 h-6 ${isLiked ? 'text-red-500 fill-red-500' : 'text-white'}`} />
              </button>
              <button className="p-2 rounded-full bg-white/10 backdrop-blur-sm transition-colors duration-300 hover:bg-white/20">
                <Share2 className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold  font-serif text-white">{event.title}</h2>
              <p className="text-lg flex  items-center gap-2 font-bold font-mono text-white"> <FaMagnifyingGlassLocation className="text-2xl text-emerald-400 " /> {event.location}       </p>
              <div className="pt-2 ">
                <EnhancedCountdown date={Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000} />
              </div>

            </div>
          </div>
        </div>

        <div className="h-full flex  items-center justify-center">
          <motion.div
            initial={{ y: "-100%", rotateX: -90, opacity: 0 }}
            animate={isHovered ? { y: 0, rotateX: 0, opacity: 1 } : { y: "-100%", rotateX: -90, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
          >

            <Button className="button  font-serif font-semibold   hover:text-white transition-colors duration-300">
            Read More
            </Button>
            <Link href="/SeatBookingWidget">
              <Button className="bg-white m-2  font-serif font-semibold  text-purple-600 hover:bg-purple-400 hover:text-white transition-colors duration-300">
                Book Now !
              </Button>

            </Link>


          </motion.div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default EventCard;