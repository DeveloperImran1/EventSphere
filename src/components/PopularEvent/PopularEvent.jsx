
"use client"
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import React, { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import { Heart, Share2 } from 'lucide-react'
import SectionTitle from '../shared/SectionTitle'

import 'swiper/swiper-bundle.css'
import { Button } from "@/components/ui/button"
import Link from "next/link";
const categories = ['Sports', 'Theater', 'Concerts', 'MusicFestivals']

const eventData = {
  Sports: [
    { id: 1, title: 'NBA Finals', image: 'https://i.ibb.co.com/tmc1PgJ/pexels-furknsaglam-1596977-3131406.jpg', location: 'Los Angeles, CA' },
    { id: 2, title: 'World Cup Soccer', image: 'https://i.ibb.co.com/tmc1PgJ/pexels-furknsaglam-1596977-3131406.jpg', location: 'Doha, Qatar' },
    { id: 3, title: 'Wimbledon', image: 'https://i.ibb.co.com/tmc1PgJ/pexels-furknsaglam-1596977-3131406.jpg', location: 'London, UK' },
    { id: 4, title: 'Super Bowl', image: 'https://i.ibb.co.com/tmc1PgJ/pexels-furknsaglam-1596977-3131406.jpg', location: 'Las Vegas, NV' },
    { id: 5, title: 'Olympics', image: 'https://i.ibb.co.com/tmc1PgJ/pexels-furknsaglam-1596977-3131406.jpg', location: 'Tokyo, Japan' },
    { id: 6, title: 'Tour de France', image: 'https://i.ibb.co.com/tmc1PgJ/pexels-furknsaglam-1596977-3131406.jpg', location: 'France' },
    { id: 7, title: 'Masters Golf', image: 'https://i.ibb.co.com/tmc1PgJ/pexels-furknsaglam-1596977-3131406.jpg', location: 'Augusta, GA' },
    { id: 8, title: 'UFC Championship', image: 'https://i.ibb.co.com/tmc1PgJ/pexels-furknsaglam-1596977-3131406.jpg', location: 'Las Vegas, NV' },
    { id: 9, title: 'Formula 1 Grand Prix', image: 'https://i.ibb.co.com/tmc1PgJ/pexels-furknsaglam-1596977-3131406.jpg', location: 'Monaco' },
    { id: 10, title: 'Cricket World Cup', image: 'https://i.ibb.co.com/tmc1PgJ/pexels-furknsaglam-1596977-3131406.jpg', location: 'London, UK' },
  ],
  Theater: [
    { id: 1, title: 'Hamilton', image: 'https://i.ibb.co.com/6RJ67ZN/pexels-prismattco-2372945.jpg', location: 'New York, NY' },
    { id: 2, title: 'The Lion King', image: 'https://i.ibb.co.com/6RJ67ZN/pexels-prismattco-2372945.jpg', location: 'New York, NY' },
    { id: 3, title: 'Phantom of the Opera', image: 'https://i.ibb.co.com/6RJ67ZN/pexels-prismattco-2372945.jpg', location: 'New York, NY' },
    { id: 4, title: 'Wicked', image: 'https://i.ibb.co.com/6RJ67ZN/pexels-prismattco-2372945.jpg', location: 'New York, NY' },
    { id: 5, title: 'Les Misérables', image: 'https://i.ibb.co.com/6RJ67ZN/pexels-prismattco-2372945.jpg', location: 'London, UK' },
    { id: 6, title: 'To Kill a Mockingbird', image: 'https://i.ibb.co.com/6RJ67ZN/pexels-prismattco-2372945.jpg', location: 'New York, NY' },
    { id: 7, title: 'The Crucible', image: 'https://i.ibb.co.com/6RJ67ZN/pexels-prismattco-2372945.jpg', location: 'New York, NY' },
    { id: 8, title: 'A Streetcar Named Desire', image: 'https://i.ibb.co.com/6RJ67ZN/pexels-prismattco-2372945.jpg', location: 'New York, NY' },
    { id: 9, title: 'Death of a Salesman', image: 'https://i.ibb.co.com/6RJ67ZN/pexels-prismattco-2372945.jpg', location: 'New York, NY' },
    { id: 10, title: 'Macbeth', image: 'https://i.ibb.co.com/6RJ67ZN/pexels-prismattco-2372945.jpg', location: 'London, UK' },
  ],
  Concerts: [
    { id: 1, title: 'Coachella', image: 'https://i.ibb.co.com/80YxNW0/pexels-wendywei-1540406.jpg', location: 'Indio, CA' },
    { id: 2, title: 'Glastonbury Festival', image: 'https://i.ibb.co.com/80YxNW0/pexels-wendywei-1540406.jpg', location: 'Glastonbury, UK' },
    { id: 3, title: 'Tomorrowland', image: 'https://i.ibb.co.com/80YxNW0/pexels-wendywei-1540406.jpg', location: 'Boom, Belgium' },
    { id: 4, title: 'Burning Man', image: 'https://i.ibb.co.com/80YxNW0/pexels-wendywei-1540406.jpg', location: 'Black Rock City, NV' },
    { id: 5, title: 'Ultra Music Festival', image: 'https://i.ibb.co.com/80YxNW0/pexels-wendywei-1540406.jpg', location: 'Miami, FL' },
    { id: 6, title: 'Lollapalooza', image: 'https://i.ibb.co.com/80YxNW0/pexels-wendywei-1540406.jpg', location: 'Chicago, IL' },
    { id: 7, title: 'Rock in Rio', image: 'https://i.ibb.co.com/80YxNW0/pexels-wendywei-1540406.jpg', location: 'Rio de Janeiro, Brazil' },
    { id: 8, title: 'Bonnaroo', image: 'https://i.ibb.co.com/80YxNW0/pexels-wendywei-1540406.jpg', location: 'Manchester, TN' },
    { id: 9, title: 'EDC Las Vegas', image: 'https://i.ibb.co.com/80YxNW0/pexels-wendywei-1540406.jpg', location: 'Las Vegas, NV' },
    { id: 10, title: 'SXSW', image: 'https://i.ibb.co.com/80YxNW0/pexels-wendywei-1540406.jpg', location: 'Austin, TX' },
  ],
  MusicFestivals: [
    { id: 1, title: 'Glastonbury Festival', image: 'https://i.ibb.co.com/v4LBLc2/pexels-wendywei-1190298.jpg', location: 'Glastonbury, UK' },
    { id: 2, title: 'Coachella', image: 'https://i.ibb.co.com/v4LBLc2/pexels-wendywei-1190298.jpg', location: 'Indio, CA' },
    { id: 3, title: 'Tomorrowland', image: 'https://i.ibb.co.com/v4LBLc2/pexels-wendywei-1190298.jpg', location: 'Boom, Belgium' },
    { id: 4, title: 'Ultra Music Festival', image: 'https://i.ibb.co.com/v4LBLc2/pexels-wendywei-1190298.jpg', location: 'Miami, FL' },
    { id: 5, title: 'Lollapalooza', image: 'https://i.ibb.co.com/v4LBLc2/pexels-wendywei-1190298.jpg', location: 'Chicago, IL' },
    { id: 6, title: 'Burning Man', image: 'https://i.ibb.co.com/v4LBLc2/pexels-wendywei-1190298.jpg', location: 'Black Rock City, NV' },
    { id: 7, title: 'Bonnaroo', image: 'https://i.ibb.co.com/v4LBLc2/pexels-wendywei-1190298.jpg', location: 'Manchester, TN' },
    { id: 8, title: 'Electric Daisy Carnival', image: 'https://i.ibb.co.com/v4LBLc2/pexels-wendywei-1190298.jpg', location: 'Las Vegas, NV' },
    { id: 9, title: 'Rock in Rio', image: 'https://i.ibb.co.com/v4LBLc2/pexels-wendywei-1190298.jpg', location: 'Rio de Janeiro, Brazil' },
    { id: 10, title: 'Sziget Festival', image: 'https://i.ibb.co.com/v4LBLc2/pexels-wendywei-1190298.jpg', location: 'Budapest, Hungary' },
  ]
};

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

export default function PopularEvent() {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="w-full  py-12 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="px-4">
        <SectionTitle
          subTitle="Popular Events"
          title="Explore Top Events"
          description="Discover the most popular events happening right now. Whether it's sports, drama, or live shows, find and book tickets for events that suit your taste. Don't miss out on these trending events!"
        />

        <Tabs defaultValue={categories[0]} className="w-full" onValueChange={setActiveCategory}>
          <TabsList className="   w-full flex justify-around h-12 mb-6 bg-white rounded-lg shadow-lg relative overflow-hidden">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="relative text-sm sm:text-base   md:w-28   px-4 rounded-lg text-gray-700 hover:bg-gradient-to-r from-emerald-400 to-teal-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
              >
                {category}
                <span className="absolute left-0 bottom-0 h-1  bg-emerald-500 transition-transform duration-300 ease-in-out origin-left scale-x-0 data-[state=active]:scale-x-100"></span>
              </TabsTrigger>
            ))}
          </TabsList>


          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    breakpoints={{
                      640: { slidesPerView: 2 },
                      768: { slidesPerView: 3 },
                      1024: { slidesPerView: 4 },
                    }}
                    className="mySwiper"
                  >
                    {eventData[category].map((event) => (
                      <SwiperSlide key={event.id} className="pb-12">
                        <EventCard event={event} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}



function EventCard({ event }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // New hover state

  return (
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
  );
}

