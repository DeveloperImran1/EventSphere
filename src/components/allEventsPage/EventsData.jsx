'use client'
import React, { useState } from 'react';
import EventCard from './EventCard';
import { toast } from 'react-toastify';
import { Range } from 'react-range';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';
import eventsDataJson from '@/components/allEventsPage/EventDataJson'

const EventsData = () => {
    const [cartItems, setCartItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    //  console.log(eventsDataJson)

    const categories = ['All', ...new Set(eventsDataJson.map(event => event.category))];

    // Filter events based on selected category, price range, and date range
    const filteredEvents = eventsDataJson.filter(event => {
        const eventDate = new Date(event.dateTime);
        const withinPriceRange = event.price >= priceRange[0] && event.price <= priceRange[1];
        const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
        const withinDateRange = (!startDate || eventDate >= startDate) && (!endDate || eventDate <= endDate);
        return withinPriceRange && matchesCategory && withinDateRange;
    });

    // // Sort events by price (ascending)
    const sortedEvents = filteredEvents.sort((a, b) => a.price - b.price);

    // Function to handle adding to cart
    const addToCart = (event) => {
        setCartItems([...cartItems, event]);
        toast.success(`${event.title} added to cart!`);
    };

    // Function to handle sharing the event
    const shareEvent = (event) => {
        toast.info(`Sharing options for ${event.title}`);
    };

    return (
        <div className='flex gap-10 w-11/12 mx-auto mt-20'>
            <div className='w-1/5'>
                <h5 className="font-bold mb-4">Filter by Category</h5>
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full rounded-lg text-center mb-2 py-2 ${selectedCategory === category ? 'bg-[--color-logo] text-white' : 'bg-gray-200'}`}
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
                        <div {...props} style={{ ...props.style, height: '6px', background: '#ccc' }}>
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div {...props} style={{ ...props.style, height: '24px', width: '24px', backgroundColor: 'var(--color-logo)', borderRadius: "50%" }} />
                    )}
                />
                <p className="text-center mt-2">Price: {priceRange[0]} - {priceRange[1]}</p>

                <h5 className="font-bold mt-4 mb-3">Filter by Date</h5>
                <div className="flex flex-col gap-2">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="Start Date"
                        className="p-2 rounded border"
                    />
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        placeholderText="End Date"
                        className="p-2 rounded border"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
                {eventsDataJson.map((event, index) => (
                    <Link href={`/events/${event.id}`} key={event.id}>
                        <EventCard
                            event={event}
                            addToCart={addToCart}
                            shareEvent={shareEvent}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default EventsData;
