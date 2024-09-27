

import React from 'react';
import { QrCode } from "lucide-react";
import './Card.css'; // Import the CSS file for trapezoid shape

const EventTicket = () => {
    return (
        <div className="mx-auto my-32">
            <div className="shadow-lg w-[800px] border-2 border-cyan-400 h-64 overflow-hidden flex">

                {/* Left Section */}
                <div className="bg-white w-1/3 pl-4 py-10 flex flex-col justify-center">
                    <h2 className="text-blue-700 text-xl font-serif font-bold">EVENT NAME</h2>
                    <p className="mt-2 text-gray-700">DJ Harry Cartwright, USA</p>
                    <p className="text-gray-700">DJ Faith Hanson, UK</p>
                    <p className="mt-2 text-gray-900 text-lg font-semibold">11.11.2020</p>
                    <p className="text-gray-500">DOOR OPEN 09:00 PM</p>
                    <p className="mt-2 text-gray-900 text-xl">Ticket Price</p>
                    <p className="text-2xl text-black font-semibold">$50</p>
                </div>

                {/* Middle Image Section with Parallelogram Shape */}
                <div className="relative w-1/3 h-auto flex items-center">
                    <div
                        className="absolute inset-0 transform -skew-x-12 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/GV6BZ39/concertgoers-watching-majestic-concert-many-spotlight-people-see-music-show-crowd-ambience-1235831-9.jpg')",
                        }}
                    ></div>
                </div>

                {/* Right Section with Trapezoid Shape */}
                <div className="relative w-1/3 bg-blue-700 text-white p-4 flex flex-col justify-between overflow-hidden right-section">
                  
                        <h2 className="text-2xl font-bold">EVENT NAME</h2>
                        <p className="mt-2">VIP: $20 ENTRY PASS</p>
                        <p>30 - NIGHT</p>
                        <p>DAY 10 - 2020</p>
                        <p className="mt-4">THIS PARTY IS FOR COUPLE</p>

                        {/* QR Code */}
                        <div className="mt-4 flex justify-center">
                            <div className="border-2 border-dashed border-purple-300 rounded-lg p-4">
                                <QrCode className="w-24 h-24" />
                           
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EventTicket;
