"use client";

import { Tabs } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { LucideFileType2 } from "lucide-react";
import { FaClock, FaMapMarkerAlt, FaTag, FaBuilding } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";

let tabs = [
  { id: 1, label: "All" },
  { id: 2, label: "Today" },
  { id: 3, label: "Tomorrow" },
  { id: 4, label: "Next Week" },
  { id: 5, label: "Next Month" },
];

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

  return (
    <div className="mx-auto p-4 ">
      <Tabs defaultValue="All" className="my-5 container ">
        <div className="space-x-2 md:space-x-8 grid grid-cols-2 md:grid-cols-6 items-center justify-center mx-auto gap-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`${
                activeTab === tab.label
                  ? " text-white bg-[--color-logo]"
                  : "text-[--color-logo] bg-gray-100"
              } relative rounded-lg px-3 py-1.5 text-sm font-medium   transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab == tab.label && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 -z-20 "
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                />
              )}

              {tab.label}
            </button>
          ))}
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[40px] gap-x-[58px] w-full bg-transparent mt-16">
          <AnimatePresence>
            {events
              ?.filter((n) => {
                if (activeTab == "All") {
                  return n;
                } else if (activeTab == "Today") {
                  return n.when == "Today";
                } else if (activeTab == "Tomorrow") {
                  return n.when == "Tomorrow";
                } else if (activeTab == "Next Week") {
                  return n.when == "Next Week";
                } else if (activeTab == "Next Month") {
                  return n.when == "Next Month";
                }
              })
              .map((event) => (
                <>
                <Link href={`/events/${event._id}`}>
                  <div className=" group rounded-lg overflow-hidden shadow-lg bg-white m-4 ">
                    <Image
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                      src={event?.gallery[0]}
                      alt={event?.title}
                      width={200}
                      height={300}
                    />

                    <div className="p-4">
                      <h2 className="text-xl font-bold">{event?.title}</h2>
                      <div className="flex items-center text-gray-700 my-1">
                        <FaClock className="mr-2" />
                        <p>{event?.dateTime}</p>
                      </div>
                      <div className="flex items-center text-gray-700 my-1">
                        <FaBuilding className="mr-2" />
                        <p>Hosted by: {event?.companyName}</p>
                      </div>
                      <div className="flex items-center text-gray-600 my-1">
                        <FaMapMarkerAlt className="mr-2" />
                        <p>
                          {event?.location?.country},{event?.location?.city}
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center text-gray-600 my-1">
                          <LucideFileType2 className="mr-2" />
                          <p>type: {event?.type} </p>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600 my-1">
                        <FaTag className="mr-2" />
                        <p>category: {event?.category}</p>
                      </div>
                      <p className="flex items-center text-gray-600 text-sm">
                        {event?.when}
                      </p>
                      <div className="my-2">
                        {event?.tags?.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-block bg-blue-500 text-white text-xs font-bold rounded-full px-2 py-1 mr-2"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    
                      <div className="flex justify-between items-center">
                        <button className="bg-[--color-logo] text-white py-2 px-8 rounded-lg hover:bg-green-600 transition">
                          ${event?.price}
                        </button>
                        <button className="bg-[--color-logo] text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
                          Buy Ticket
                        </button>
                      </div>
                    </div>
                  </div>
                  </Link>
                </>
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
