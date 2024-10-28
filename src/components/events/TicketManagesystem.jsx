// components/HomepageSection.jsx
import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Import the icon you want to use

const HomepageSection = () => {
  return (
    <section className="my-28 bg-white px-2">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-20   ">
        
        {/* First Section */}
        <div className="flex flex-col justify-center   h-[400px]">
          <h2 className="lg:text-5xl md:text-3xl text-2xl text-black font-bold mb-4 text-center font-sans">
            Kickstart Your Event Ticketing System
          </h2>
          <p className="text-gray-600 text-lg mb-4 text-left">
            Our online ticketing solution is completely free for event organizers. 
            The intuitive box office dashboard makes it easy to launch any type of 
            event with a ticket-purchasing experience designed around marketing to 
            increase your sales and revenue.
          </p>
          <ul className="list-disc text-lg text-gray-600 mb-4 text-left ">
            <li className="flex items-center "><FaCheckCircle className="text-green-500 mr-2" />Assign and distribute event tickets with ease.</li>
            <li className="flex items-center "><FaCheckCircle className="text-green-500 mr-2" />Provide coupons, ticket expiry, discounts and more.</li>
            <li className="flex items-center "><FaCheckCircle className="text-green-500 mr-2" />Custom domain and branded white-labeled event ticketing.</li>
          </ul>

        </div>
        <div className="relative object-cover  w-full h-[450px]">
        <Image height={675} width={1200} src="https://i.ibb.co.com/BjdY7FC/pexels-ono-kosuki-5999936.jpg" // Replace with your imagebb lin
            alt="Ticketing System"
            className="rounded-lg shadow-lg object-cover w-full h-full"
            
          />
        </div>

        {/* Second Section */}

        <div className="relative object-cover w-full h-[450px]">
        <Image height={675} width={1200}
            src="https://i.ibb.co.com/q0x9qVJ/6411b7a3fa853599f08d4700-image-4-min.png" // Replace with your imagebb link
            alt="Event Crowd"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center ">
          <h2 className="lg:text-5xl md:text-3xl text-2xl text-black font-bold mb-4 text-center font-sans">
            Drive Event Ticket Sales With Affordable Pricing
          </h2>
          <p className="text-gray-600 text-lg mb-4 ">
            With us, the amount your customer pays at checkout is significantly closer 
            to your original ticket price. Eventify event ticketing platform cuts out 
            all the major fees that other platforms add to lower ticket costs and, by 
            doing . 
          </p>
          <ul className="list-disc text-lg text-gray-600 list-inside mb-4 ">
            <li className="flex items-center "><FaCheckCircle className="text-green-500 mr-2" />Simple, easy and fast 2-step checkout.</li>
            <li className="flex items-center "><FaCheckCircle className="text-green-500 mr-2" />Customizable responsive widget to embed on.</li>
            <li className="flex items-center "><FaCheckCircle className="text-green-500 mr-2" />increase the number of completed sales.</li>
          </ul>
        </div>

        {/* Third Section */}
        <div className="flex flex-col ">
          <h2 className="lg:text-5xl md:text-3xl text-2xl text-black font-bold mb-4 text-center font-sans">
            Online Event Ticketing Expands Your Reach 
          </h2>
          <p className="text-gray-600 text-lg mb-4 ">
            We offer advanced marketing solutions to help promote and grow your event quickly. 
            You can utilize marketing tools from Google, Facebook, TikTok, and other platforms. 
            Plus, we will post about your event through our various media channels to help you gain more exposure.
          </p>
          <ul className="list-disc list-inside mb-4 text-lg text-gray-600 ">
            <li className="flex items-center "><FaCheckCircle className="text-green-500 mr-2" />Promote your event on social networks.</li>
            <li className="flex items-center "><FaCheckCircle className="text-green-500 mr-2" />Send email and newsletters directly to your attendees.</li>
            <li className="flex items-center "><FaCheckCircle className="text-green-500 mr-2" />Embed custom widgets on partner websites.</li>
          </ul>
        </div>
        <div className="relative object-cover w-full h-[450px]">
        <Image height={675} width={1200}
            src="https://i.ibb.co.com/yFXCyff/pexels-shvetsa-3943950.jpg" // Replace with your imagebb link
            alt="Event Promotion"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>

        {/* Fourth Section */}
        <div className="relative object-cover w-full ">
        <Image height={675} width={1200} src="https://i.ibb.co.com/SJftvqn/pexels-tdcat-69866.jpg" 
            alt="Event Management"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center h-[450px]">
          <h2 className="lg:text-5xl md:text-3xl text-2xl text-black font-bold mb-4 text-center font-sans">
            Ticketing Your Event Management Process
          </h2>
          <p className="text-gray-600 text-lg mb-4 ">
            Effortlessly manage attendees and customer orders from your dashboard. You can assign tickets 
            to specific attendees and send them customized e-tickets. Plus, our ticketing platform enables 
            you to create a custom checkout form to collect all the information you need from your customers. 
            Easily check in attendees with our ticket scanner app when it`s time for your event.
          </p>
          <ul className="list-disc list-inside mb-4 text-lg text-gray-600 ">
            <li className="flex items-center "><FaCheckCircle className="text-green-500 mr-2" />Promote your event on social networks.</li>
            <li className="flex items-center "><FaCheckCircle className="text-green-500 mr-2" />Send email and newsletters directly to your attendees.</li>
            <li className="flex items-center "><FaCheckCircle className="text-green-500 mr-2" />Embed custom widgets on partner websites.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomepageSection;
