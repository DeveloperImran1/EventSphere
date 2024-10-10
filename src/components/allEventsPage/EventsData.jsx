'use client'
import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import { toast } from 'react-toastify';
import { Range } from 'react-range';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { FaBars, FaTimes } from 'react-icons/fa'; // For drawer icon
import { Dialog } from '@headlessui/react'; // Drawer system
import Link from 'next/link';
import Loading from '../shared/LoadingSpiner/Loading';

const EventsData = () => {
  const [events, setEvents] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedDay, setSelectedDay] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [loading, setLoading] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for drawer

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await axios.get('https://event-sphare-server.vercel.app/events');
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchEventsData();
  }, []);

  if (loading) {
    return <Loading/>;
  }

  const countries = ['All', ...new Set(events.map(event => event.location.country))];
  const cityOptions = {};
  countries.forEach(country => {
    cityOptions[country] = ['All', ...new Set(events.filter(event => event.location.country === country).map(event => event.location.city))];
  });

  const cities = selectedCountry === 'All' ? ['All'] : cityOptions[selectedCountry];

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
        return true;
    }
  };

  const filteredEvents = events.filter(event => {
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

  const sortedEvents = filteredEvents.sort((a, b) => a.price - b.price);

  const addToCart = (event) => {
    setCartItems([...cartItems, event]);
    toast.success(`${event.title} added to cart!`);
  };

  const shareEvent = (event) => {
    toast.info(`Sharing options for ${event.title}`);
  };

  return (
    <div className='w-11/12 mx-auto mt-20'>
      {/* For mobile - Drawer button */}
      <div className="block lg:hidden">
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="text-2xl p-2 bg-[--color-logo] text-white rounded-full"
        >
          <FaBars />
        </button>
      </div>

      {/* Drawer for mobile filter */}
      <Dialog
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        className="fixed inset-0 z-50 overflow-hidden"
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="text-2xl"
          >
            <FaTimes />
          </button>
        </div>
        <div className="bg-white p-5 h-full w-[60%] md:w-[40%] overflow-y-scroll"> {/* Drawer width set to 60% */}
          {/* Filter Options in Drawer */}
          <div className="w-full">
            {/* Category Filter */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="text-2xl"
              >
                <FaTimes />
              </button>
            </div>
            <h5 className="font-bold mb-4">Filter by Category</h5>
            {['All', ...new Set(events.map(event => event.category))].map((category, index) => (
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
                setSelectedCity('All');
              }}
            >
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>

            <select
              className="block w-full p-2 rounded border-2"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>

            {/* Day Filter */}
            <h5 className="font-bold mt-4 mb-3">Filter by Day</h5>
            <select
              className="block w-full p-2 rounded border-2"
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
            >
              {['All', 'Today', 'Tomorrow', 'This Week', 'This Month'].map((day, index) => (
                <option key={index} value={day}>{day}</option>
              ))}
            </select>

            {/* Type Filter */}
            <h5 className="font-bold mt-4 mb-3">Filter by Type</h5>
            <select
              className="block w-full p-2 rounded border-2"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {['All', 'Online', 'Offline'].map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
      </Dialog>

      {/* Filter and Event Cards */}
      <div className='flex flex-col lg:flex-row gap-4'>
        {/* Filter Section for larger screens */}
        <div className="hidden lg:block w-full lg:w-1/5">
          {/* Place all filter options here as it was in the original code */}
          <h5 className="font-bold mb-4">Filter by Category</h5>
          {['All', ...new Set(events.map(event => event.category))].map((category, index) => (
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
              setSelectedCity('All');
            }}
          >
            {countries.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>

          <select
            className="block w-full p-2 rounded border-2"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {cities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>

          {/* Day Filter */}
          <h5 className="font-bold mt-4 mb-3">Filter by Day</h5>
          <select
            className="block w-full p-2 rounded border-2"
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
          >
            {['All', 'Today', 'Tomorrow', 'This Week', 'This Month'].map((day, index) => (
              <option key={index} value={day}>{day}</option>
            ))}
          </select>

          {/* Type Filter */}
          <h5 className="font-bold mt-4 mb-3">Filter by Type</h5>
          <select
            className="block w-full p-2 rounded border-2"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {['All', 'Online', 'Offline'].map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Event Cards Section */}
          <div className='w-full lg:w-4/5'>
            {sortedEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                {sortedEvents.map((event) => (
                 <Link  href={`/events/${event._id}`} key={event.id}> <EventCard
                
                 event={event}
                 addToCart={addToCart}
                 shareEvent={shareEvent}
               /></Link>
                ))}
              </div>
            ) : (
              <div className='text-center text-gray-500 text-xl'>No events found</div>
            )}
          </div>
      </div>
    </div>
  );
};

export default EventsData;
