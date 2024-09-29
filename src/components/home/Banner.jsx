"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS for the date picker
import Image from "next/image";
import Typewriter from 'typewriter-effect';

// Country sections with grouped countries
const countrySections = [
  { section: "North America", countries: ["United States", "Canada"] },
  {
    section: "Europe",
    countries: ["United Kingdom", "Germany", "France", "Italy"],
  },
  { section: "Asia", countries: ["India", "Japan"] },
  { section: "Oceania", countries: ["Australia"] },
  { section: "South America", countries: ["Brazil"] },
];



const Banner = () => {
  const [fromSearchTerm, setFromSearchTerm] = useState("");
  const [toSearchTerm, setToSearchTerm] = useState("");
  const [dropdownVisibleFrom, setDropdownVisibleFrom] = useState(false);
  const [dropdownVisibleTo, setDropdownVisibleTo] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); // Date and Time state
  const progressCircle = useRef(null);
  const progressContent = useRef(null);


  /** Hook Output */
  // const { isType, isDelete, isDelay, isDone } = helper

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  // Filtered list of countries based on search term
  const filteredCountrySectionsFrom = countrySections
    .map((section) => ({
      ...section,
      countries: section.countries.filter((country) =>
        country.toLowerCase().includes(fromSearchTerm.toLowerCase())
      ),
    }))
    .filter((section) => section.countries.length > 0);

  const filteredCountrySectionsTo = countrySections
    .map((section) => ({
      ...section,
      countries: section.countries.filter((country) =>
        country.toLowerCase().includes(toSearchTerm.toLowerCase())
      ),
    }))
    .filter((section) => section.countries.length > 0);

  return (
    <>
      <div className="w-full h-full  md:rounded-bl-full bg-gradient-to-r from-blue-50 to-blue-100 relative ">



        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper h-[calc(100vh-57px)] "
        >
          <div className="absolute inset-0 bg-black/50  backdrop-blur-[1px]  z-10"></div>
          <SwiperSlide>
            <div className="flex justify-center items-center h-[480px]   rounded-lg shadow-lg">
              <div>
                <Image layout="fill" objectFit="cover"
                  src="https://www.thetrainline.com/content/vul/hero-images/city/amsterdam/1x.jpg"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center h-[480px]   rounded-lg shadow-lg">
              <div>
                <Image layout="fill" objectFit="cover"
                  src="https://www.thetrainline.com/content/vul/hero-images/city/brussels/1x.jpg"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center h-[480px]   rounded-lg shadow-lg">
              <div>
                <Image layout="fill" objectFit="cover"
                  src="https://www.thetrainline.com/cms/media/10375/italy-castelli-romani.jpg?mode=crop&width=860&height=574&quality=70"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>


          <div
            className="absolute top-0 right-0 m-4 autoplay-progress hidden"
            slot="container-end"
          >
            <svg className="w-8 h-8" viewBox="0 0 48 48" ref={progressCircle}>
              <circle
                cx="24"
                cy="24"
                r="20"
                className="text-gray-300"
                strokeWidth="4"
                fill="none"
              ></circle>
              <circle
                cx="24"
                cy="24"
                r="20"
                className="text-blue-600"
                strokeWidth="4"
                fill="none"
                strokeDasharray="126"
                strokeDashoffset="calc(126 * var(--progress))"
              ></circle>
            </svg>
            <span
              ref={progressContent}
              className="text-xs text-gray-700"
            ></span>
          </div>
        </Swiper>

        {/* Left Section: Search Bars */}
        <div className="absolute hidden md:block w-full md:h-auto md:w-1/3  rounded-lg top-[10%] left-[30px] z-10">
          <div className="w-full md:h-auto  bg-white p-6 rounded-lg shadow-lg relative">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Search Flights
            </h2>

            {/* First Search Bar (From) */}
            <div className="relative mb-6">
              <input
                type="text"
                id="from-country-search"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="From"
                value={fromSearchTerm}
                onChange={(e) => setFromSearchTerm(e.target.value)}
                onClick={() => setDropdownVisibleFrom(true)}
                onBlur={() =>
                  setTimeout(() => setDropdownVisibleFrom(false), 100)
                }
              />

              {/* From Dropdown */}
              {dropdownVisibleFrom && filteredCountrySectionsFrom.length > 0 && (
                <div className="absolute z-10 right-0 mt-2 border border-gray-300 rounded-lg max-h-48 overflow-y-auto bg-white shadow-lg w-full">
                  {filteredCountrySectionsFrom.map((section, index) => (
                    <div key={index} className="p-2">
                      <div className="font-semibold text-gray-600 mb-1">
                        {section.section}
                      </div>
                      <ul>
                        {section.countries.map((country, i) => (
                          <li
                            key={i}
                            className="p-2 cursor-pointer hover:bg-blue-100 transition-colors"
                            onMouseDown={() => {
                              setFromSearchTerm(country);
                              setDropdownVisibleFrom(false);
                            }}
                          >
                            {country}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Second Search Bar (To) */}
            <div className="relative mb-6">
              <input
                type="text"
                id="to-country-search"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="To"
                value={toSearchTerm}
                onChange={(e) => setToSearchTerm(e.target.value)}
                onClick={() => setDropdownVisibleTo(true)}
                onBlur={() => setTimeout(() => setDropdownVisibleTo(false), 100)}
              />

              {/* To Dropdown */}
              {dropdownVisibleTo && filteredCountrySectionsTo.length > 0 && (
                <div className="absolute z-10 right-0 mt-2 border border-gray-300 rounded-lg max-h-48 overflow-y-auto bg-white shadow-lg w-full">
                  {filteredCountrySectionsTo.map((section, index) => (
                    <div key={index} className="p-2">
                      <div className="font-semibold text-gray-600 mb-1">
                        {section.section}
                      </div>
                      <ul>
                        {section.countries.map((country, i) => (
                          <li
                            key={i}
                            className="p-2 cursor-pointer hover:bg-blue-100 transition-colors"
                            onMouseDown={() => {
                              setToSearchTerm(country);
                              setDropdownVisibleTo(false);
                            }}
                          >
                            {country}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Date and Time Picker */}
            <div className="relative mb-6">
              <label
                htmlFor="date-picker"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Select Date and Time
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                showTimeSelect
                dateFormat="Pp"
                placeholderText="Select a date and time"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Search Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold shadow-lg transition duration-200">
              Search
            </button>
          </div>

        </div>

        <div className="absolute top-[10%] left-[20%] md:left-[50%] z-10 text-left">
          <p className="text-4xl font-bold text-white ">Welcome To Event<span className="text-[#eab308]">Sphare</span> For</p>
          <Typewriter
            options={{
              strings: ['Plan, Book, and Experience Unforgettable Events', 'Your One-Stop Destination for Concerts, Conferences & Sports', 'Seamlessly Manage and Attend Events with Ease'],
              wrapperClassName: "text-4xl text-white font-bold",
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
              pauseFor: 2000,
              cursor: '|',
              cursorClassName: 'text-yellow-500', // Customize cursor color
            }}
          />

        </div>

      </div>
    </>
  );
};

export default Banner;