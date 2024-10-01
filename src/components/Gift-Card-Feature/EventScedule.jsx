"use client"
import Image from "next/image";

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button";

const tabs = [
    {
        date: "Dec 24",
        events: [
            {
                title: "Cookies with Santa",
                description: "Bring the little ones for a personal visit with Santa and a professional photo. Warm up with hot chocolate and cookies, and kick off the holiday season with festive crafts.",
                image: "https://i.postimg.cc/9XP2dZQf/pexels-karolina-grabowska-5718027.jpg",
                location: "New York",
                eventDate: "Dec 24, 2024",
                venue: "NYC Center",
            },
            {
                title: "Visit Santa",
                description: "Join us for a festive Christmas Eve dinner with traditional holiday dishes.",
                image: "https://i.postimg.cc/pTMPYZNs/pexels-elly-fairytale-3811051.jpg",
                location: "New York",
                eventDate: "Dec 24, 2024",
                venue: "NYC Center",
            },
            {
                title: "Christmas Raffle",
                description: "Take part in this year`s Christmas Raffle to win big prizes. There`s a wide range of prizes available for every participant.",
                image: "https://i.postimg.cc/85cXLZwV/pexels-marceloverfe-28575523.jpg",
                location: "New York",
                eventDate: "Dec 24, 2024",
                venue: "NYC Center",
            },

        ],
    },
    {
        date: "Dec 25",
        events: [
            {
                title: "Christmas Day Brunch",
                description: "Celebrate Christmas Day with a delightful brunch and live music.",
                image: "https://i.postimg.cc/zDb8r7NM/pexels-pixabay-433452.jpg",
                location: "New York",
                eventDate: "Dec 25, 2024",
                venue: "NYC Center",
            },
            {
                title: "Christmas Ice Skating",
                description:
                    "Bundle up and skate away! All experience levels are welcome at our ice skating rink so bring the entire family!",
                    image: "https://i.postimg.cc/85cXLZwV/pexels-marceloverfe-28575523.jpg",
              
                 
                location: "New York",
                eventDate: "Dec 26, 2024",
                venue: "NYC Center",
            }, {
                title: "Christmas Ice Skating",
                description:
                    "Bundle up and skate away! All experience levels are welcome at our ice skating rink so bring the entire family!",
                    image: "https://i.postimg.cc/zDb8r7NM/pexels-pixabay-433452.jpg",
                    location: "New York",
                eventDate: "Dec 26, 2024",
                venue: "NYC Center",
            },


        ],
    },
    {
        date: "Dec 26",
        events: [
            {
                title: "Holiday Tasting Event",
                description:
                    "Taste the best holiday dishes from cooks and chefs from all over New York at this one-day-only Holiday Tasting Event.",
                image: "https://i.postimg.cc/85cXLZwV/pexels-marceloverfe-28575523.jpg",
                location: "New York",
                eventDate: "Dec 26, 2024",
                venue: "NYC Center",
            },
            {
                title: "Christmas Ice Skating",
                description:
                    "Bundle up and skate away! All experience levels are welcome at our ice skating rink so bring the entire family!",
                image: "https://i.postimg.cc/j2rQbBpy/pexels-marceloverfe-28575523.jpg",
                location: "New York",
                eventDate: "Dec 26, 2024",
                venue: "NYC Center",
            },
            {
                title: "Winter Holiday Photo Shoot",
                description:
                    "Take part in our annual photo shooting event and get your best holiday photos from professional photographers.",
                image: "https://i.postimg.cc/j2rQbBpy/pexels-marceloverfe-28575523.jpg",
                location: "New York",
                eventDate: "Dec 26, 2024",
                venue: "NYC Center",
            },
        ],
    },
]

export default function EventSchedule() {
    const [activeTab, setActiveTab] = useState(tabs[0].date)

    return (

        <section className="bg-gray-200 p-4 md:py-20 md:px-44 mx-auto  "  >


            <div className="mb-6 px-4 md:flex justify-between items-center ">
                <h1 className=" text-black font-bold font-serif" >Event schedule</h1>
                <Button variant="outline" className="border-black text-xl rounded-3xl   font-medium hover:text-white font-mono text-black hover:bg-red-500">BOOK NOW</Button>

            </div>

            <div className="md:flex  bg-white  rounded-3xl  gap-20  ">
                <div className="md:w-72 rounded-3xl bg-red-500  text-white">
                    <h2 className=" p-6 text-lg text-gray-200 font-serif">
                        Learn more about the detailed schedule & activities of our event.
                    </h2>
                    <div className="space-y-2  flex flex-col ml-10">
                        {tabs.map((tab) => (
                            <button
                                key={tab.date}
                                onClick={() => setActiveTab(tab.date)}
                                className={` rounded-l-3xl py-2 text-2xl font-mono  transition-colors ${activeTab === tab.date
                                    ? "bg-white text-black"
                                    : " bg-red-600 text-white hover:bg-red-400"
                                    }`}
                            >
                                {tab.date}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex-1 p-10">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                    >
                        {tabs.find((tab) => tab.date === activeTab)?.events.map((event, index) => (
                            <div key={index} className="overflow-hidden rounded-lg bg-gray-100 shadow">
                                <div className="md:flex gap-10 items-center p-2 border-2 ">
                                    {/* <div className="w-52 ">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className=" rounded-xl  object-cover"
                                        />
                                    </div> */}
                                    <div className="w-56 ">

                                        <Image
                                            src={event.image}

                                            width={250}
                                            height={200}
                                            alt={event.title}
                                            className=" rounded-xl w-full object-cover"
                                        />

                                    </div>
                                    <div className="w-2/3 ">
                                        <h3 className="mb-2 font-mono text-xl font-semibold text-red-500">{event.title}</h3>
                                        <p className="mb-4 font-serif text-gray-600">{event.description}</p>
                                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <MapPin className="mr-1  text-red-500   h-4 w-4" />
                                                {event.location}
                                            </div>
                                            <div className="flex items-center">
                                                <Calendar className="mr-1 text-red-500  h-4 w-4" />
                                                {event.eventDate}
                                            </div>
                                            <div className="flex items-center">
                                                <MapPin className="mr-1 text-red-500  h-4 w-4" />
                                                {event.venue}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}