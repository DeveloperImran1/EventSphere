'use client'
import React, { useState } from 'react';
import EventCard from './EventCard';
import { toast } from 'react-toastify';
import { Range } from 'react-range';

const EventsData = () => {
    const [cartItems, setCartItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [priceRange, setPriceRange] = useState([0, 100]);

    const eventsData = [
        {
            "photo": "https://theinternetofthings.report/Images/EventImages/6d99b196-f9f7-4ba1-9999-a2d80a3bebc7_iot-tech-expo-europe.jpg",
            "title": "IOT Tech Expo 2024",
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
            "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7YxGKZzeOvM21OHoPWHFC9XR7q-NUv5wBQ&s",
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
            "description": "An open-air concert featuring best world-renowned artists.",
            "tags": ["#Music", "#Concert", "#Outdoor"],
            "button": "Buy Tickets"
        },
        {
            "photo": "https://i.ytimg.com/vi/DNmhD8Scbj4/maxresdefault.jpg",
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
            "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mJXJq0z8VF7ys0Wq6JJdVqXYLTHo4gke3w&s",
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


    const categories = [...new Set(eventsData.map(event => event.category))];

    // Filter events based on selected category and price range
    const filteredEvents = eventsData.filter(event => {
        const withinPriceRange = event.price >= priceRange[0] && event.price <= priceRange[1];
        const matchesCategory = selectedCategory ? event.category === selectedCategory : true;
        return withinPriceRange && matchesCategory;
    });

    // Sort events by price (ascending)
    const sortedEvents = filteredEvents.sort((a, b) => a.price - b.price);

    // Function to handle adding to cart
    const addToCart = (event) => {
        setCartItems([...cartItems, event]);
        toast.success(`${event.title} added to cart!`);
    };

    // Function to handle sharing the event
    const shareEvent = (event) => {
        // You can replace this with actual share functionality
        toast.info(`Sharing options for ${event.title}`);
    };


    return (
        <div className='flex gap-10 w-11/12 mx-auto mt-20'>
            <div className='w-1/5'>
                <h5 className=" font-bold mb-4">Filter by Category</h5>
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full rounded-lg text-center mb-2 py-2  ${selectedCategory === category ? 'bg-[--color-logo] text-white' : 'bg-gray-200'}`}
                    >
                        {category}
                    </button>
                ))}
                <h5 className="font-bold mt-4 mb-3">Filter by Price</h5>
                <Range
                    values={priceRange}
                    step={1}
                    min={0}
                    max={100}
                    onChange={values => setPriceRange(values)}
                    renderTrack={({ props, children }) => (
                        <div {...props} style={{ ...props.style,  height: '6px', background: '#ccc' }}>
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div {...props} style={{ ...props.style, height: '24px', width: '24px', backgroundColor: 'var(--color-logo)',  borderRadius:"50%"}}/>
                    )}
                />
                <p className="text-center mt-2">Price: {priceRange[0]} - {priceRange[1]}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
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