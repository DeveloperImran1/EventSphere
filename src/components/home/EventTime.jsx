"use client";

import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";

import Image from "next/image";
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import { useState } from "react";
import React, { useEffect, useRef } from "react";

import { MapPin, Building2, Tag, Clock, FileType, ArrowRight, } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import axios from "axios";
import Link from "next/link";

import SectionTitle from "../shared/SectionTitle";
import Button from "../shared/CercleBuuton/Button";
import CardForEvents from "../allEventsPage/CardForEvents";

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
    <div className="flex items-center   space-x-2">
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
      .get("http://localhost:9000/events")
      .then((res) => {
        if (res?.data?.events?.length > 6) {
          const arr = res.data.slice(0, 6);
          setEvents(arr);
          setSeeMore(true);
          return;
        }
        setEvents(res.data);
        console.log(res.data)
      })
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  console.log("Event timing page theke events ", events)


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
  // 
  if (!events?.events?.length) {
    return;
  }

  return (
    <div >
      <Tabs defaultValue="All" className="">
        {/* Tab List */}
        <SectionTitle
          subTitle="Pick a Time"
          title="Event_Timing_Options"
          description="Browse events by time: today, tomorrow, this weekend, or this month."
        >
        </SectionTitle>

        <TabsList className="w-full flex justify-around h-12 mb-6 bg-white rounded-lg shadow-lg relative overflow-hidden">
          {tabs.map((category) => (
            <TabsTrigger
              onClick={() => setActiveTab(category.label)}
              key={category.id}
              value={category.label}
              className="relative text-sm sm:text-base md:w-28 px-4 rounded-lg text-gray-700 hover:bg-[#10a0b9] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 data-[state=active]:bg-[#1b85db] data-[state=active]:text-white"
            >
              {category.label}
              <span className="absolute left-0 bottom-0 h-1 bg-[#10a0b9] transition-transform duration-300 ease-in-out origin-left scale-x-0 data-[state=active]:scale-x-100"></span>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full bg-transparent ">
          <AnimatePresence>
            {events?.events?.filter((n) => {
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
            }).map((event) => (
                <AnimatePresence>
                  <CardForEvents
               
                    event={event}
                  />
                </AnimatePresence>
            ))}



          </AnimatePresence>
        </div>
      </Tabs>
      <div className="text-center mt-10">
          <Link href="/events" className="flex justify-center">
            <Button>See All</Button>
          </Link>
      </div>

    </div>
  );
};

export default EventTime;