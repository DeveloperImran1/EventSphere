'use client';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Range } from 'react-range';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Dialog } from '@headlessui/react';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Loading from '../shared/LoadingSpiner/Loading';
import Link from 'next/link';
import EventCard from './EventCard';
import { Slider } from "@nextui-org/react";
import CardForEvents from './CardForEvents';
import { AnimatePresence } from 'framer-motion';
import EventBanner from './EventBanner';

const EventsData = () => {
  const axiosPublic = useAxiosPublic();
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [minimumPrice, setMinimumPrice] = useState(0);
  const [maximumPrice, setMaximumPrice] = useState(3000);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    minimumPrice: 0,
    maximumPrice: 300,
    type: '',
    country: '',
    city: '',
    startDate: '',
    endDate: '',
    day: 'all',
  });


  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handlePriceChange = (min, max) => {
    setFilters({ ...filters, minimumPrice: min, maximumPrice: max });
  };

  const handleDateChange = (startDate, endDate) => {
    setFilters({ ...filters, startDate, endDate });
  };


  const handleDayChange = (date) => {
    setFilters({ ...filters, date: new Date(date).toISOString() });
  };



  const [allCountries, setAllCountries] = useState([]); // Store unique countries
  const [cities, setCities] = useState([]);

  // Handle input changes
  const handleInputChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    setFilters({ search });
  }, [search]);

  const handleSearch = () => {
    setFilters({ search });
  };

  useEffect(() => {
    const newFilters = {};

    if (startDate) {
      newFilters.startDate = startDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    }

    if (endDate) {
      newFilters.endDate = endDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    }

    setFilters(newFilters); // Update the filters state
  }, [startDate, endDate]);



  // Data fetching using react-query
  const { data: events = {}, isLoading, refetch } = useQuery({
    queryKey: ['events', filters, currentPage],
    queryFn: async () => {
      const { data } = await axiosPublic.get('/events', {
        params: {
          ...filters,
          page: currentPage,
          limit: itemsPerPage,
        },
      });
      return data;
    },
    keepPreviousData: true,
  });
  console.log(events)

  const [filteredData, setFilteredData] = useState(events);
  
  // Update filters
  const handleDayFilterChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      day: e.target.value.toLowerCase(), // Lowercase to match backend filtering
    }));
    setCurrentPage(1); // Reset to first page on filter change
  };

  // Update filters when selectedDay changes
  useEffect(() => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      day: selectedDay.toLowerCase(), // Add day filter to the filters object
    }));
  }, [selectedDay]);

  // Update currentPage when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  // Trigger refetch when page changes
  useEffect(() => {
    refetch();
  }, [currentPage, refetch])

  // Handling page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle Country change to dynamically load cities
  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setFilters({
      ...filters,
      country: selectedCountry,
      city: '' // Reset city when country changes
    });

    // Find cities based on the selected country
    const selectedCountryCities = events
      .filter(event => event.location.country === selectedCountry)
      .map(event => event.location.city);

    const uniqueCities = Array.from(new Set(selectedCountryCities));
    setCities(uniqueCities);
  };


  //   const filterByDay = (events, day) => {
  //   const today = new Date();
  //   const tomorrow = new Date(today);
  //   tomorrow.setDate(today.getDate() + 1);
  //   const weekStart = new Date(today);
  //   weekStart.setDate(today.getDate() - today.getDay());
  //   const weekEnd = new Date(weekStart);
  //   weekEnd.setDate(weekStart.getDate() + 6);

  //   const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  //   const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  //   switch (day.toLowerCase()) {
  //     case "today":
  //       return events.filter(event => new Date(event.date).toDateString() === today.toDateString());
  //     case "tomorrow":
  //       return events.filter(event => new Date(event.date).toDateString() === tomorrow.toDateString());
  //     case "this_week":
  //       return events.filter(event => new Date(event.date) >= weekStart && new Date(event.date) <= weekEnd);
  //     case "this_month":
  //       return events.filter(event => new Date(event.date) >= monthStart && new Date(event.date) <= monthEnd);
  //     case "all":
  //       return events; // সমস্ত ইভেন্ট দেখাবে
  //     default:
  //       return events;
  //   }
  // };



  // Pagination handling
  const handleNextPage = () => {
    if (currentPage < events.totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handlePaginationButton = (pageNum) => {
    setCurrentPage(pageNum);
  };


  // Add to cart and share event functionality
  const addToCart = (event) => {
    setCartItems([...cartItems, event]);
    toast.success(`${event.title} added to cart!`);
  };

  const shareEvent = (event) => {
    toast.info(`Sharing options for ${event.title}`);
  };

  return (
    <div>
      {/* banner section  */}
      <EventBanner
        search={search}
        setFilters={setFilters} />

      <div className='w-11/12 mx-auto mt-20'>
        {/* For mobile - Drawer button */}
        <div className="block lg:hidden">
          <button onClick={() => setIsDrawerOpen(true)} className="text-2xl p-2 bg-[--color-logo] text-white rounded-full">
            <FaBars />
          </button>
        </div>
        <Dialog open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} className="fixed inset-0 z-50 overflow-hidden">
          <div className="bg-white p-5 h-full w-[60%] md:w-[40%] overflow-y-scroll">
            <div className="w-full">
              {/* Filters for mobile drawer */}
              {/* Category Filter */}
              <div>
                <select name="category" value={filters.category} onChange={handleFilterChange}>
                  <option value="">All Categories</option>
                  <option value="Business">Business</option>
                  <option value="Technology">Technology</option>
                  <option value="Music">Music</option>
                  {/* More categories dynamically */}
                </select>
              </div>

              {/* Type Filter */}
              <div>
                <select name="type" value={filters.type} onChange={handleFilterChange}>
                  <option value="">All Types</option>
                  <option value="online">Online</option>
                  <option value="onsite">Onsite</option>
                </select>
              </div>

              {/* Location Filters */}
              <div>
                <select name="country" value={filters.country} onChange={handleFilterChange}>
                  <option value="">All Countries</option>
                  {events?.events?.map((event) => event.location.country)
                    .filter((country, index, self) => self.indexOf(country) === index)
                    .map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                </select>

                <select name="city" value={filters.city} onChange={handleFilterChange}>
                  <option value="">All Cities</option>
                  {events?.events?.filter((event) => event.location.country === filters.country)
                    .map((event) => event.location.city)
                    .filter((city, index, self) => self.indexOf(city) === index)
                    .map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                </select>
              </div>

              {/* Date Picker */}
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


            </div>
          </div>
        </Dialog>


        {/* Filter and large device */}
        <div className='flex flex-col lg:flex-row gap-4'>
          {/* Filter Section for larger screens */}
          <div className="hidden lg:block w-full lg:w-1/5">

            <div className="w-full p-3 space-y-5" >
              <h5 className="font-bold mt-4 mb-3">Filter by Category</h5>
              {/* Category Filter */}
              <select name="category" value={filters.category} onChange={handleFilterChange} className='py-2 px-5 shadow-2xl  rounded-lg font-bold bg-[--color-secondary] text-white w-full'>
                <option value="">All Categories</option>
                <option value="Business">Business</option>
                <option value="Technology">Technology</option>
                <option value="Music">Music</option>
                {/* More categories dynamically */}
              </select>



              {/* Location Filters */}
              <div>
                <select name="country" value={filters.country} onChange={handleFilterChange} className='py-2 px-5 shadow-2xl  rounded-lg font-bold bg-[--color-secondary] text-white w-full'>
                  <option value="">All Countries</option>
                  {events?.events?.map((event) => event.location.country)
                    .filter((country, index, self) => self.indexOf(country) === index)
                    .map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <select name="city" value={filters.city} onChange={handleFilterChange} className='py-2 px-5 shadow-2xl  rounded-lg font-bold bg-[--color-secondary] text-white w-full'>
                  <option value="">All Cities</option>
                  {events?.events?.filter((event) => event.location.country === filters.country)
                    .map((event) => event.location.city)
                    .filter((city, index, self) => self.indexOf(city) === index)
                    .map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                </select>
              </div>


              {/* Type Filter */}
              <div>
                <select name="type" value={filters.type} onChange={handleFilterChange} className='py-2 px-5 shadow-2xl  rounded-lg font-bold bg-[--color-secondary] text-white w-full'>
                  <option value="">All Types</option>
                  <option value="online">Online</option>
                  <option value="onsite">Onsite</option>
                </select>
              </div>


              {/* Price Filter */}
              <h5 className="font-bold mt-4 mb-3">Filter by Price</h5>
              <div className="flex gap-4 flex-col">
                <input
                  type="number"
                  name="minimumPrice"
                  placeholder="Min Price"
                  value={filters.minimumPrice}
                  onChange={handleFilterChange}
                  className="input input-bordered"
                />
                <input
                  type="number"
                  name="maximumPrice"
                  placeholder="Max Price"
                  value={filters.maximumPrice}
                  onChange={handleFilterChange}
                  className="input input-bordered"
                />
              </div>

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


              {/* Day Filters for Today, Tomorrow, This Week, This Month */}
              <h5 className="font-bold mt-4 mb-3">Filter by Day</h5>
              <select
                className="block w-full p-2 rounded border-2"
                value={filters.day}
                onChange={(e) => setFilters({ ...filters, day: e.target.value })}
              >
                {['All', 'Today', 'Tomorrow', 'This Week', 'This Month'].map((day, index) => (
                  <option key={index} value={day.toLowerCase()}>{day}</option>
                ))}
              </select>




            </div>
          </div>
          {/* Event Cards */}
          <div className="w-full lg:w-4/5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events?.events?.map(event => (
                <AnimatePresence key={event._id}>
                  <CardForEvents
                    event={event}
                    addToCart={addToCart}
                    shareEvent={shareEvent}
                  />
                </AnimatePresence>
              ))}
            </div>
            {/* Pagination */}
            <div className="flex my-12 gap-4 lg:mx-20  mx-auto justify-center items-center">
              {/* <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="btn"
            >
              Previous
            </button>
            <div>
              {Array.from({ length: events.totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePaginationButton(index + 1)}
                  className={`${currentPage === index + 1
                    ? 'btn mx-1 bg-gradient-to-r from-cyan-500 to-blue-500 px-7 text-2xl text-white'
                    : 'btn px-7 mx-1'
                    }`}
                >
                  {index + 1}
                </button>
              ))}
            </div> */}

              {/* Pagination */}
              <div className="flex my-12 gap-4 lg:mx-20">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="btn"
                >
                  Previous
                </button>
                <div>
                  {Array.from({ length: events.totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => handlePaginationButton(index + 1)}
                      className={`${currentPage === index + 1
                        ? 'btn mx-1 bg-gradient-to-r from-cyan-500 to-blue-500 px-7 text-2xl text-white'
                        : 'btn px-7 mx-1'
                        }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === events.totalPages}
                  className="btn"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default EventsData;
