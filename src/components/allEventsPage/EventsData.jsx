'use client'
import React, { useState } from 'react';
import EventCard from './EventCard';

const EventsData = () => {

    const eventsData = [
        {
            "photo": "https://img.freepik.com/photo1.jpg",
            "title": "Tech Expo 2024",
            "dateTime": "March 15, 2024 | 10:00 AM - 5:00 PM",
            "companyName": "XYZ Innovations",
            "price": "$50",
            "location": "Downtown Convention Center, New York",
            "category": "Technology",
            "organizer": {
                "name": "John Doe",
                "followers": "20.3 k"
            },
            "description": "A premier event showcasing the latest in technology and innovation.",
            "tags": ["#Technology", "#Innovation", "#Expo"],
            "button": "Buy Tickets"
        },
        {
            "photo": "https://img.freepik.com/photo2.jpg",
            "title": "Music Fest 2024",
            "dateTime": "April 20, 2024 | 4:00 PM - 11:00 PM",
            "companyName": "Live Events Inc.",
            "price": "$75",
            "location": "Central Park, New York",
            "category": "Music",
            "organizer": {
                "name": "Jane Smith",
                "followers": "15 K"
            },
            "description": "An open-air concert featuring world-renowned artists.",
            "tags": ["#Music", "#Concert", "#Outdoor"],
            "button": "Buy Tickets"
        },
        {
            "photo": "https://img.freepik.com/photo3.jpg",
            "title": "Startup Summit 2024",
            "dateTime": "May 5, 2024 | 9:00 AM - 6:00 PM",
            "companyName": "Entrepreneur Hub",
            "price": "Free",
            "location": "Silicon Valley Conference Center, California",
            "category": "Business",
            "organizer": {
                "name": "Michael Lee",
                "followers": "10.4 k"
            },
            "description": "A gathering of startup founders and investors to explore new opportunities.",
            "tags": ["#Startup", "#Entrepreneurship", "#Networking"],
            "button": "Register Now"
        },
        {
            "photo": "https://img.freepik.com/photo4.jpg",
            "title": "Art & Culture Expo 2024",
            "dateTime": "June 10, 2024 | 11:00 AM - 7:00 PM",
            "companyName": "Creative Minds Co.",
            "price": "$30",
            "location": "Art Gallery, San Francisco",
            "category": "Art & Culture",
            "organizer": {
                "name": "Emily Clark",
                "followers": '5.1 k'
            },
            "description": "An exhibition of contemporary art and cultural performances.",
            "tags": ["#Art", "#Culture", "#Exhibition"],
            "button": "Buy Tickets"
        }
    ]
    const [cartItems, setCartItems] = useState([]);

    // Function to handle adding to cart
    const addToCart = (event) => {
        setCartItems([...cartItems, event]);
        alert(`${event.title} added to cart!`);
    };

    // Function to handle sharing the event
    const shareEvent = (event) => {
        const shareOptions = `
            Share on: 
            1. Facebook: https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}
            2. WhatsApp: https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}
        `;
        alert(shareOptions);
    };

    return (
        <div className='flex gap-10 w-11/12 mx-auto'>
            <div className='w-1/5 '>
                filtering
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {eventsData.map((event, index) => (
                    <EventCard
                        key={index}
                        event={event}
                        addToCart={addToCart}
                        shareEvent={shareEvent}
                    />
                ))}
            </div>
        </div>
    );
};

export default EventsData;