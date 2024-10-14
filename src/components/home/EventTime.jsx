"use client";

import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { useState } from "react";
import React, { useEffect } from "react";

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

import axios from "axios";
import Link from "next/link";
import FireTextTitle from "../shared/FireText";
import RotateButton from "../shared/RotateButton";

let tabs = [
  { id: 1, label: "All" },
  { id: 2, label: "Today" },
  { id: 3, label: "Tomorrow" },
  { id: 4, label: "Next Week" },
  { id: 5, label: "Next Month" },
];

// Define InfoItem component
const InfoItem = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      <span>{text}</span>
    </div>
  );
};

const EventTime = () => {
  let [activeTab, setActiveTab] = useState(tabs[0].label);
  const [events, setEvents] = useState([]);
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    axios
      .get("https://event-sphare-server.vercel.app/events")
      .then((res) => {
        if (res.data.length > 6) {
          const arr = res.data.slice(0, 6);
          setEvents(arr);
          setSeeMore(true);
          return;
        }
        setEvents(res.data);
        setSeeMore(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="mx-auto my-20 p-4 ">
      <Tabs defaultValue="All" className="my-5 max-w-[1250px] mx-auto px-2 ">
        {/* Tab List */}
        <TabsList className="w-full flex justify-around h-12 mb-6 bg-white rounded-lg shadow-lg relative overflow-hidden">
          {tabs.map((category) => (
            <TabsTrigger
              onClick={() => setActiveTab(category.label)}
              key={category.id}
              value={category.label}
              className="relative text-sm sm:text-base md:w-28 px-4 rounded-lg text-gray-700 hover:bg-gradient-to-r from-emerald-400 to-teal-500 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
            >
              {category.label}
              <span className="absolute left-0 bottom-0 h-1 bg-emerald-500 transition-transform duration-300 ease-in-out origin-left scale-x-0 data-[state=active]:scale-x-100"></span>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full bg-transparent ">
          <AnimatePresence>
            {events
              ?.filter((n) => {
                if (activeTab === "All") {
                  return n;
                } else if (activeTab === "Today") {
                  return n.when === "Today";
                } else if (activeTab === "Tomorrow") {
                  return n.when === "Tomorrow";
                } else if (activeTab === "Next Week") {
                  return n.when === "Next Week";
                } else if (activeTab === "Next Month") {
                  return n.when === "Next Month";
                }
              })
              .map((event) => (
                <Link href={`/events/${event._id}`} key={event._id}>
                  <motion.div
                    className="group rounded-lg overflow-hidden shadow-lg bg-slate-100 m-4 transform transition-all duration-300 hover:scale-105"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
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

                    <div className="p-6 space-y-4">

                      <FireTextTitle  title={event.title} />


                      <div className="space-y-2" data-aos="fade-up" data-aos-delay="100">
                        <InfoItem icon={<Clock className="w-5 h-5" />} text={event.dateTime} />
                        <InfoItem icon={<Building2 className="w-5 h-5" />} text={`Hosted by: ${event.companyName}`} />
                        <InfoItem icon={<MapPin className="w-5 h-5" />} text={`${event.location.country}, ${event.location.city}`} />
                        <InfoItem icon={<FileType className="w-5 h-5" />} text={`Type: ${event.type}`} />
                        <InfoItem icon={<Tag className="w-5 h-5" />} text={`Category: ${event.category}`} />
                      </div>

                    



                      <div className="flex justify-between items-center " data-aos="fade-up" data-aos-delay="400">
                        <motion.button
                          className="bg-emerald-400 text-white p-2 rounded-xl font-semibold shadow-md hover:bg-green-600 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          $ {event.price}
                        </motion.button>
                        <motion.button
                          
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <RotateButton >
                            Buy Ticket 
                          </RotateButton>
                       
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </AnimatePresence>
        </div>
      </Tabs>
      <div className="text-center mt-16">
        {seeMore ? (
          <Link href="/events" className="mx-auto button ">
            See All
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default EventTime;
