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

const EventsData = () => {
  const axiosPublic = useAxiosPublic();
  const [cartItems, setCartItems] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6; // Items per page
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);


  const [filters, setFilters] = useState({
    search: '',
    category: '',
    priceMin: 0,
    priceMax: 100,
    type: '',
    country: '',
    city: '',
    startDate: '',
    endDate: '',
  });


  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handlePriceChange = (min, max) => {
    setFilters({ ...filters, priceMin: min, priceMax: max });
  };

  const handleDateChange = (startDate, endDate) => {
    setFilters({ ...filters, startDate, endDate });
  };

  const handleDayChange = (e) => {
    setFilters({ ...filters, day: e.target.value });
  };

  const handleDayFilterChange = (filterType) => {
    setFilters({ ...filters, dayFilter: filterType });
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
    const newFilters = {};

    if (startDate) {
      newFilters.startDate = startDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    }

    if (endDate) {
      newFilters.endDate = endDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    }

    setFilters(newFilters); // Update the filters state
  }, [startDate, endDate]);

  // Filter data based on priceRange

  // Fetch events with useQuery and filters
  const { data: events = [], isLoading, refetch } = useQuery({
    queryKey: ['events', filters],
    queryFn: async () => {
      const { data } = await axiosPublic.get('/events', { params: filters });
      return data;
    },
    keepPreviousData: true,
  });

  const [filteredData, setFilteredData] = useState(events);

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

  // useEffect(() => {
  //   const filtered = events.filter(item => {
  //     return item.price >= priceRange[0] && item.price <= priceRange[1];
  //   });
  //   setFilteredData(filtered);
  // }, [priceRange,events]);



  // const sortedEvents = filteredEvents.sort((a, b) => a.price - b.price);

  // const indexOfLastEvent = currentPage * eventsPerPage;
  // const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  // const currentEvents = sortedEvents.slice(indexOfFirstEvent, indexOfLastEvent);
  // const totalPages = Math.ceil(sortedEvents.length / eventsPerPage);

  // Add to cart and share event functionality
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

            {/* Price Filter */}
            <div>
              <h5 className="font-bold mt-4 mb-3">Filter by Price</h5>
              <Range
                values={priceRange}
                step={1}
                min={0}
                max={100}
                onChange={values => handlePriceChange(values)}
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
                {events
                  .map((event) => event.location.country)
                  .filter((country, index, self) => self.indexOf(country) === index)
                  .map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
              </select>

              <select name="city" value={filters.city} onChange={handleFilterChange}>
                <option value="">All Cities</option>
                {events
                  .filter((event) => event.location.country === filters.country)
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
            <input type="date" name="startDate" onChange={(e) => handleDateChange(e.target.value, filters.endDate)} />
            <input type="date" name="endDate" onChange={(e) => handleDateChange(filters.startDate, e.target.value)} />

            {/* Day Filter using Date Picker */}
            <input type="date" name="day" value={filters.day} onChange={handleDayChange} />

            {/* Day Filters for Today, Tomorrow, This Week, This Month */}
            <div>
              <button onClick={() => handleDayFilterChange('today')}>Today</button>
              <button onClick={() => handleDayFilterChange('tomorrow')}>Tomorrow</button>
              <button onClick={() => handleDayFilterChange('thisWeek')}>This Week</button>
              <button onClick={() => handleDayFilterChange('thisMonth')}>This Month</button>
            </div>

          </div>
        </div>
      </Dialog>

      {/* Filter and large device */}
      <div className='flex flex-col lg:flex-row gap-4'>
        {/* Filter Section for larger screens */}
        <div className="hidden lg:block w-full lg:w-1/5">

          <div className="w-full p-3 space-y-3" >
            <h2 className="text-[17px] text-gray-500" >Filter by Category</h2>
            {/* Category Filter */}
            <select name="category" value={filters.category} onChange={handleFilterChange} className='py-2 px-5 shadow-2xl  rounded-lg font-bold bg-[--color-logo] text-white'>
              <option value="">All Categories</option>
              <option value="Business">Business</option>
              <option value="Technology">Technology</option>
              <option value="Music">Music</option>
              {/* More categories dynamically */}
            </select>



            {/* Location Filters */}
            <div>
              <select name="country" value={filters.country} onChange={handleFilterChange} className='py-2 px-5 shadow-2xl  rounded-lg font-bold bg-[--color-logo] text-white'>
                <option value="">All Countries</option>
                {events
                  .map((event) => event.location.country)
                  .filter((country, index, self) => self.indexOf(country) === index)
                  .map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <select name="city" value={filters.city} onChange={handleFilterChange} className='py-2 px-5 shadow-2xl  rounded-lg font-bold bg-[--color-logo] text-white'>
                <option value="">All Cities</option>
                {events
                  .filter((event) => event.location.country === filters.country)
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
              <select name="type" value={filters.type} onChange={handleFilterChange} className='py-2 px-5 shadow-2xl  rounded-lg font-bold bg-[--color-logo] text-white'>
                <option value="">All Types</option>
                <option value="online">Online</option>
                <option value="onsite">Onsite</option>
              </select>
            </div>

            {/* Price Filter */}
            <div>
              {/* Price Filter */}
              <h5 className="font-bold mt-4 mb-3">Filter by Price</h5>
              <Range
                values={priceRange}
                step={1}
                min={0}
                max={100}
                onChange={(values) => setPriceRange(values)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '6px',
                      background: '#ccc',
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '24px',
                      width: '24px',
                      backgroundColor: 'var(--color-logo)',
                      borderRadius: '50%',
                    }}
                  />
                )}
              />
              <p className="text-center mt-2">
                Price: {priceRange[0]} - {priceRange[1]}
              </p>
              <p className="text-center mt-2">
                Price: {priceRange[0]} - {priceRange[1]}
              </p>
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
            <div>
              <button onClick={() => handleDayFilterChange('today')}>Today</button>
              <button onClick={() => handleDayFilterChange('tomorrow')}>Tomorrow</button>
              <button onClick={() => handleDayFilterChange('thisWeek')}>This Week</button>
              <button onClick={() => handleDayFilterChange('thisMonth')}>This Month</button>
            </div>



            {/* Pagination */}
            {/* <div className="flex justify-center mt-5">
            <nav>
              <ul className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <li key={i}>
                    <button
                      onClick={() => paginate(i + 1)}
                      className={`px-4 py-2 ${currentPage === i + 1 ? 'bg-[--color-logo] text-white' : 'bg-gray-200'}`}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div> */}
          </div>

        </div>
        {/* Event Cards */}
        <div className="w-full lg:w-4/5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map(event => (
              <Link href={`/events/${event._id}`} key={event._id}>
                <EventCard

                  event={event}
                  addToCart={addToCart}
                  shareEvent={shareEvent}
                /></Link>
            ))}
          </div>

        </div>
      </div>
    </div>

  )
};

export default EventsData;
