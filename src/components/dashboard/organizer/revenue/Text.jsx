import React from "react";
import { FaMountainSun } from "react-icons/fa6";
import { FaSellsy } from "react-icons/fa";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const Text = () => {
  return (
    <div className="p-6 flex max-w-6xl flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-10">
      {/* Left Section: Text */}
      <div className="w-full lg:w-1/3 space-y-6 p-4 lg:p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
        <h2 className="text-3xl lg:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 leading-tight">
          Track, Analyze, and Optimize Your Business Income
        </h2>
        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
          Monitor financial performance, visualize income streams, and identify growth opportunities with our comprehensive revenue tracking and analysis dashboard. Maximize your business potential today.
        </p>
        <button className="mt-4 px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-bold shadow-xl transform hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out">
          Learn More
        </button>
      </div>

      {/* Right Section: 3D Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-2/3">
        {/* First Card */}
        <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <div className="absolute -top-8 left-8 bg-gradient-to-r from-green-400 to-teal-400 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
            1
          </div>
          <div className="p-6 h-64 flex flex-col justify-center items-center space-y-4">
            <BsFillCalendarEventFill className="text-6xl text-sky-500 drop-shadow-xl" />
            <h3 className="text-2xl font-semibold text-gray-800">Total Revenue</h3>
            <p className="text-lg text-gray-600 text-center font-medium">Profit. Growth. Insights.</p>
          </div>
          <div className="absolute bottom-4 right-4 text-sky-500">
            <FaArrowRightLong className="text-2xl" />
          </div>
        </div>

        {/* Second Card */}
        <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <div className="absolute -top-8 left-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
            2
          </div>
          <div className="p-6 h-64 flex flex-col justify-center items-center space-y-4">
            <FaSellsy className="text-6xl text-yellow-500 drop-shadow-xl" />
            <h3 className="text-2xl font-semibold text-gray-800">Total Sales</h3>
            <p className="text-lg text-gray-600 text-center font-medium">Track. Manage. Deliver.</p>
          </div>
          <div className="absolute bottom-4 right-4 text-yellow-500">
            <FaArrowRightLong className="text-2xl" />
          </div>
        </div>

        {/* Third Card */}
        <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <div className="absolute -top-8 left-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
            3
          </div>
          <div className="p-6 h-64 flex flex-col justify-center items-center space-y-4">
            <FaMountainSun className="text-6xl text-pink-500 drop-shadow-xl" />
            <h3 className="text-2xl font-semibold text-gray-800">Total Amount</h3>
            <p className="text-lg text-gray-600 text-center font-medium">Growth. Reach. Success.</p>
          </div>
          <div className="absolute bottom-4 right-4 text-pink-500">
            <FaArrowRightLong className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;
