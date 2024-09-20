'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HomepageSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const sectionStyles = [
    "bg-gradient-to-r from-purple-500 to-red-500",
    "bg-gradient-to-r from-teal-400 to-blue-500",
    "bg-gradient-to-r from-blue-500 to-purple-500",
    "bg-gradient-to-r from-pink-400 to-purple-500",
];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        {/* First Section */}
        <motion.div
          className={`flex flex-col justify-center p-8 rounded-lg shadow-lg ${sectionStyles[0]}`}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            Kickstart Your Event Success With Our Event Ticketing System
          </h2>
          <p className="text-gray-200 mb-4">
            Our online ticketing solution is completely free for event organizers. 
            The intuitive box office dashboard makes it easy to launch any type of 
            event with a ticket-purchasing experience designed around marketing to 
            increase your sales and revenue.
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-200">
            <li>Assign and distribute event tickets with ease.</li>
            <li>Provide coupons, ticket expiry, discounts and do more.</li>
            <li>Custom domain and branded white-labeled event ticketing.</li>
          </ul>
        </motion.div>
        <div className="relative">
          <img
            src="https://i.ibb.co.com/q0x9qVJ/6411b7a3fa853599f08d4700-image-4-min.png" // Replace  image URL
            alt="Ticketing System"
            width={400}
            height={300}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Second Section */}
        <div className="relative">
          <Image
            src="" // Replace  image URL
            alt="Event Crowd"
            width={400}
            height={300}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <motion.div
          className={`flex flex-col justify-center p-8 rounded-lg shadow-lg ${sectionStyles[1]}`}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            Drive Event Ticket Sales With Affordable Pricing
          </h2>
          <p className="text-gray-200 mb-4">
            With us, the amount your customer pays at checkout is significantly closer 
            to your original ticket price. Eventify event ticketing platform cuts out 
            all the major fees that other platforms add to lower ticket costs and, by 
            doing so, increase the number of completed sales.
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-200">
            <li>Simple, easy and fast 2 step checkout.</li>
            <li>Customizable responsive widget to embed on any website.</li>
          </ul>
        </motion.div>

        {/* Third Section */}
        <motion.div
          className={`flex flex-col justify-center p-8 rounded-lg shadow-lg ${sectionStyles[2]}`}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            Online Event Ticketing Expands Your Reach & Promotes Your Event
          </h2>
          <p className="text-gray-200 mb-4">
            We offer advanced marketing solutions to help promote and grow your event quickly. 
            You can utilize marketing tools from Google, Facebook, TikTok, and other platforms. 
            Plus, we will post about your event through our various media channels to help you 
            gain more exposure.
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-200">
            <li>Promote your event on social networks.</li>
            <li>Send email and newsletters directly to your attendees.</li>
            <li>Embed custom widgets on partner websites.</li>
          </ul>
        </motion.div>
        <div className="relative">
          <Image
            src="" // Replace  image URL
            alt="Event Marketing"
            width={400}
            height={300}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Fourth Section */}
        <div className="relative">
          <Image
            src="" // Replace  image URL
            alt="Event Management"
            width={400}
            height={300}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <motion.div
          className={`flex flex-col justify-center p-8 rounded-lg shadow-lg ${sectionStyles[3]}`}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ticketing For Events Simplifies Your Event Management Process
          </h2>
          <p className="text-gray-200 mb-4">
            Effortlessly manage attendees and customer orders from your dashboard. 
            You can assign tickets to specific attendees and send them customized e-tickets. 
            Plus, our ticketing platform enables you to create a custom checkout form to collect 
            all the information you need from your customers. Easily check in attendees with 
            our ticket scanner app when it’s time for your event.
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-200">
            <li>Manage attendees and orders from a single dashboard.</li>
            <li>Send customized e-tickets to attendees.</li>
            <li>Create custom checkout forms for specific information.</li>
          </ul>
        </motion.div>
      
      </div>
    </section>
  );
};

export default HomepageSection;
