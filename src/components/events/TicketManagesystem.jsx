// components/HomepageSection.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Import the icon you want to use

const HomepageSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-20">
        
        {/* First Section */}
        <div className="flex flex-col justify-center h-[400px]">
          <h2 className="text-5xl text-black font-bold mb-4 text-center font-sans">
            Kickstart Your Event Success With Our Event Ticketing System
          </h2>
          <p className="text-gray-600 text-lg mb-4 text-center">
            Our online ticketing solution is completely free for event organizers. 
            The intuitive box office dashboard makes it easy to launch any type of 
            event with a ticket-purchasing experience designed around marketing to 
            increase your sales and revenue.
          </p>
          <ul className="list-disc text-lg text-gray-600 list-inside mb-4 text-center mx-auto">
            <li className="flex items-center justify-center"><FaCheckCircle className="text-green-500 mr-2" />Assign and distribute event tickets with ease.</li>
            <li className="flex items-center justify-center"><FaCheckCircle className="text-green-500 mr-2" />Provide coupons, ticket expiry, discounts and more.</li>
            <li className="flex items-center justify-center"><FaCheckCircle className="text-green-500 mr-2" />Custom domain and branded white-labeled event ticketing.</li>
          </ul>

        </div>
        <div className="relative w-full h-[400px]">
          <img
            src="https://i.ibb.co.com/BjdY7FC/pexels-ono-kosuki-5999936.jpg" // Replace with your imagebb lin
            alt="Ticketing System"
            className="rounded-lg shadow-lg object-cover w-full h-full"
            width="400" 
            height="400" 
          />
        </div>

        {/* Second Section */}

        <div className="relative w-full h-[400px]">
          <img
            src="https://i.ibb.co.com/q0x9qVJ/6411b7a3fa853599f08d4700-image-4-min.png" // Replace with your imagebb link
            alt="Event Crowd"
            className="rounded-lg shadow-lg object-cover w-full h-full"
            width="400" 
            height="400"
          />
        </div>
        <div className="flex flex-col justify-center h-[400px]">
          <h2 className="text-5xl text-black font-bold mb-4 text-center font-sans">
            Drive Event Ticket Sales With Affordable Pricing
          </h2>
          <p className="text-gray-600 text-lg mb-4 text-center">
            With us, the amount your customer pays at checkout is significantly closer 
            to your original ticket price. Eventify event ticketing platform cuts out 
            all the major fees that other platforms add to lower ticket costs and, by 
            doing so, increase the number of completed sales.
          </p>
          <ul className="list-disc text-lg text-gray-600 list-inside mb-4 text-center mx-auto">
            <li className="flex items-center justify-center"><FaCheckCircle className="text-green-500 mr-2" />Simple, easy and fast 2-step checkout.</li>
            <li className="flex items-center justify-center"><FaCheckCircle className="text-green-500 mr-2" />Customizable responsive widget to embed on any website.</li>
          </ul>
        </div>

        {/* Third Section */}
        <div className="flex flex-col justify-center h-[400px]">
          <h2 className="text-5xl text-black font-bold mb-4 text-center font-sans">
            Online Event Ticketing Expands Your Reach & Promotes Your Event
          </h2>
          <p className="text-gray-600 text-lg mb-4 text-center">
            We offer advanced marketing solutions to help promote and grow your event quickly. 
            You can utilize marketing tools from Google, Facebook, TikTok, and other platforms. 
            Plus, we will post about your event through our various media channels to help you gain more exposure.
          </p>
          <ul className="list-disc list-inside mb-4 text-lg text-gray-600 text-center mx-auto">
            <li className="flex items-center justify-center"><FaCheckCircle className="text-green-500 mr-2" />Promote your event on social networks.</li>
            <li className="flex items-center justify-center"><FaCheckCircle className="text-green-500 mr-2" />Send email and newsletters directly to your attendees.</li>
            <li className="flex items-center justify-center"><FaCheckCircle className="text-green-500 mr-2" />Embed custom widgets on partner websites.</li>
          </ul>
        </div>
        <div className="relative w-full h-[400px]">
          <img
            src="https://i.ibb.co.com/yFXCyff/pexels-shvetsa-3943950.jpg" // Replace with your imagebb link
            alt="Event Promotion"
            className="rounded-lg shadow-lg object-cover w-full h-full"
            width="400" 
            height="400"
          />
        </div>

        {/* Fourth Section */}
        <div className="relative w-full h-[400px]">
          <img
            src="https://i.ibb.co.com/SJftvqn/pexels-tdcat-69866.jpg" // Replace with your imagebb link
            alt="Event Management"
            className="rounded-lg shadow-lg object-cover w-full h-full"
            width="400" 
            height="400"
          />
        </div>
        <div className="flex flex-col justify-center h-[400px]">
          <h2 className="text-5xl text-black font-bold mb-4 text-center font-sans">
            Ticketing For Events Simplifies Your Event Management Process
          </h2>
          <p className="text-gray-600 text-lg mb-4 text-center">
            Effortlessly manage attendees and customer orders from your dashboard. You can assign tickets 
            to specific attendees and send them customized e-tickets. Plus, our ticketing platform enables 
            you to create a custom checkout form to collect all the information you need from your customers. 
            Easily check in attendees with our ticket scanner app when it's time for your event.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomepageSection;
