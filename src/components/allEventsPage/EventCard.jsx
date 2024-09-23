"use client"
import React, { useState } from 'react';
import { FaHeart, FaShareAlt, FaCartPlus } from 'react-icons/fa';

const EventCard = ({ event, addToCart, shareEvent }) => {
    const [hover, setHover] = useState(false);

    return (
        <div 
            className="relative rounded-lg overflow-hidden shadow-lg bg-white m-4 hover:scale-105 transition-transform duration-300"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img className="w-full h-48 object-cover" src={event.photo} alt={event.title} />
            
            {/* Love and Share Icons - visible on hover */}
            {hover && (
                <div className="absolute top-2 right-2 flex space-x-2">
                    <button
                        className="p-2 bg-red-500 text-white rounded-full hover:bg-red-700"
                        onClick={() => addToCart(event)}
                    >
                        <FaHeart />
                    </button>
                    <button
                        className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-700"
                        onClick={() => shareEvent(event)}
                    >
                        <FaShareAlt />
                    </button>
                </div>
            )}

            <div className="p-4">
                <h2 className="text-xl font-bold">{event.title}</h2>
                <p className="text-gray-700">{event.dateTime}</p>
                <p className="text-gray-700">Hosted by: {event.companyName}</p>
                <p className="text-gray-600">Location: {event.location}</p>
                <p className="text-gray-600">Category: {event.category}</p>
                <div className="my-2">
                    {event.tags.map((tag, index) => (
                        <span key={index} className="inline-block bg-blue-500 text-white text-xs font-bold rounded-full px-2 py-1 mr-2">
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-gray-600">Organizer: {event.organizer.name} ({event.organizer.followers} Followers)</p>
                <p className="text-gray-500 my-2 ">{event.description}</p>
                <div className='flex justify-between items-center '>
                    <p className="text-lg font-semibold">{event.price}</p>
                    <button className="  bg-blue-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
                        {event.button}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
