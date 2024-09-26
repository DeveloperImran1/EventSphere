'use client'
import React, { useState } from 'react';
import EventCard from './EventCard';
import { toast } from 'react-toastify';
import { Range } from 'react-range';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';
import eventsDataJson from '@/components/allEventsPage/EventDataJson';

const EventsData = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedDay, setSelectedDay] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  // Extract unique countries from eventsDataJson
  const countries = ['All', ...new Set(eventsDataJson.map(event => event.location.country))];

  // Extract unique cities based on selected country
  const cityOptions = {};
  countries.forEach(country => {
    cityOptions[country] = ['All', ...new Set(eventsDataJson.filter(event => event.location.country === country).map(event => event.location.city))];
  });

  const cities = selectedCountry === 'All' ? ['All'] : cityOptions[selectedCountry];

  // Date filter logic based on day filters
  const filterByDay = (eventDate, filter) => {
    const today = new Date();
    const dayInMillis = 24 * 60 * 60 * 1000;

    switch (filter) {
      case "Today":
        return eventDate.toDateString() === today.toDateString();
      case "Tomorrow":
        return eventDate.toDateString() === new Date(today.getTime() + dayInMillis).toDateString();
      case "This Week":
        const endOfWeek = new Date(today.getTime() + 7 * dayInMillis);
        return eventDate <= endOfWeek;
      case "This Month":
        const endOfMonth = new Date(today.getTime() + 30 * dayInMillis);
        return eventDate <= endOfMonth;
      default:
        return true; // No filter
    }
  };

  // Filter events based on selected filters
  const filteredEvents = eventsDataJson.filter(event => {
    const eventDate = new Date(event.dateTime);
    const withinPriceRange = event.price >= priceRange[0] && event.price <= priceRange[1];
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const withinDateRange = (!startDate || eventDate >= startDate) && (!endDate || eventDate <= endDate);
    const matchesCountry = selectedCountry === 'All' || event.location.country === selectedCountry;
    const matchesCity = selectedCity === 'All' || event.location.city === selectedCity;
    const matchesDay = selectedDay === 'All' || filterByDay(eventDate, selectedDay);
    const matchesType = selectedType === 'All' || event.type === selectedType;
    
    return withinPriceRange && matchesCategory && withinDateRange && matchesCountry && matchesCity && matchesDay && matchesType;
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
    toast.info(`Sharing options for ${event.title}`);
  };

  return (
    <div className='flex gap-2 lg:gap-10 w-11/12 mx-auto mt-20'>
      <div className='w-1/5'>
        {/* Category Filter */}
        <h5 className="font-bold mb-4">Filter by Category</h5>
        {['All', ...new Set(eventsDataJson.map(event => event.category))].map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`block w-full rounded-lg text-center mb-2 py-2 ${selectedCategory === category ? 'bg-[--color-logo] text-white' : 'bg-gray-200'}`}
          >
            {category}
          </button>
        ))}

        {/* Price Filter */}
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

        {/* Date Filter */}
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

        {/* Location Filter */}
        <h5 className="font-bold mt-4 mb-3">Filter by Location</h5>
        <select
          className="block w-full p-2 mb-2 rounded border-2"
          value={selectedCountry}
          onChange={(e) => {
            setSelectedCountry(e.target.value);
            setSelectedCity('All'); // Reset city when country changes
          }}
        >
          {countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
        </select>
        <select
          className="block w-full p-2 mb-2 rounded"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          disabled={selectedCountry === 'All'}
        >
          {cities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>

        {/* Day Filter */}
        <h5 className="font-bold mt-4 mb-3">Filter by Day</h5>
        <select
          className="block w-full p-2 mb-2 rounded border-2"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          {["All", "Today", "Tomorrow", "This Week", "This Month"].map((day, index) => (
            <option key={index} value={day}>{day}</option>
          ))}
        </select>

        {/* Type Filter */}
        <h5 className="font-bold mt-4 mb-3">Filter by Type</h5>
        <select
          className="block w-full p-2 mb-2 rounded border-2"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          {["All", ...new Set(eventsDataJson.map(event => event.type))].map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Events Display */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
        {sortedEvents.map((event) => (
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
