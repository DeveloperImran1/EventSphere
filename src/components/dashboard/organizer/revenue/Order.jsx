"use client";
import React from "react";
import { GiCancel } from "react-icons/gi";
import { MdElectricMoped } from "react-icons/md";
import { BsFillSendExclamationFill } from "react-icons/bs";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "On Delivery", value: 40 },
  { name: "Delivered", value: 60 },
  { name: "Canceled", value: 25 },
];

const Order = () => {
  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-6xl my-12 mx-auto transition-transform transform hover:scale-105 duration-500 hover:shadow-3xl">
      {/* Orders Summary Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 leading-tight text-start bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
            Orders Summary
          </h2>
          <p className="text-gray-500 mt-2">
            Total items, payment received, shipping confirmed.
          </p>
        </div>
        <div className="flex space-x-4 mt-4 lg:mt-0">
          <button className="relative inline-block px-6 py-3 font-semibold text-white group bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full hover:from-indigo-600 hover:to-purple-500 shadow-lg transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10">Monthly</span>
            <span className="absolute inset-0 w-full h-full bg-purple-500 rounded-full opacity-0 transition duration-300 group-hover:opacity-20"></span>
          </button>

          <button className="relative inline-block px-6 py-3 font-semibold text-white group bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full hover:from-indigo-600 hover:to-purple-500 shadow-lg transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10">Weekly</span>
            <span className="absolute inset-0 w-full h-full bg-purple-500 rounded-full opacity-0 transition duration-300 group-hover:opacity-20"></span>
          </button>

          <button className="relative inline-block px-6 py-3 font-semibold text-white group bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full hover:from-indigo-600 hover:to-purple-500 shadow-lg transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10">Today</span>
            <span className="absolute inset-0 w-full h-full bg-purple-500 rounded-full opacity-0 transition duration-300 group-hover:opacity-20"></span>
          </button>
        </div>
      </div>

      {/* New Order Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
        <div className="flex items-center space-x-6">
          <div className="bg-blue-100 rounded-full h-16 w-16 flex justify-center items-center text-3xl font-bold text-blue-600 shadow-lg hover:scale-110 transition-transform duration-300">
            25
          </div>
          <div className="text-lg font-semibold text-gray-800">New Orders</div>
          <div className="h-4 w-4 bg-green-600 rounded-full"></div>
        </div>
        <div className="text-lg text-blue-600 font-semibold hover:underline cursor-pointer transition duration-200 mt-2 lg:mt-0">
          Manage order
        </div>
      </div>
      {/* Orders Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* On Delivery Card */}
        <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 shadow-lg hover:bg-blue-200 hover:scale-105 transition-transform duration-300 relative">
          <div className="text-6xl text-blue-600 mb-4">
            <BsFillSendExclamationFill />
          </div>
          <h2 className="text-5xl font-bold text-blue-600">25</h2>
          <p className="text-gray-500 mt-2">On Delivery</p>
          <div className="absolute top-1 right-1 text-gray-400 opacity-50 text-xs">
            Info
          </div>
        </div>

        {/* Delivered Card */}
        <div className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 shadow-lg hover:bg-green-200 hover:scale-105 transition-transform duration-300 relative">
          <div className="text-6xl text-green-600 mb-4">
            <MdElectricMoped />
          </div>
          <h2 className="text-5xl font-bold text-green-600">60</h2>
          <p className="text-gray-500 mt-2">Delivered</p>
          <div className="absolute top-1 right-1 text-gray-400 opacity-50 text-xs">
            Info
          </div>
        </div>

        {/* Canceled Card */}
        <div className="text-center bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 shadow-lg hover:bg-red-200 hover:scale-105 transition-transform duration-300 relative">
          <div className="text-6xl text-red-600 mb-4">
            <GiCancel />
          </div>
          <h2 className="text-5xl font-bold text-red-600">7</h2>
          <p className="text-gray-500 mt-2">Canceled</p>
          <div className="absolute top-1 right-1 text-gray-400 opacity-50 text-xs">
            Info
          </div>
        </div>
      </div>

      {/* Mini Graph Section */}
      <div className="bg-white shadow-xl rounded-lg p-6 mb-10 relative overflow-hidden">
        {/* Background gradient for 3D effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-100 transform scale-105 -translate-x-4 -translate-y-4 opacity-60 rounded-lg"></div>

        {/* Top Left Value */}
        <div className="absolute top-4 left-4 text-xl font-bold text-gray-800 z-10">
          Total Revenue: <span className="text-blue-600">$2374</span>
        </div>

        {/* Top Right Info */}
        <div className="absolute top-4 right-4 text-sm text-gray-500 text-right z-10">
          <p>Last Updated: 10/10/2024</p>
          <p>Orders Today: 20</p>
          <p>
            Average Order Value: <span className="text-blue-600">$118.70</span>
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-700 mb-6 text-center z-10">
          Order Status Overview
        </h3>

        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#d9d9d9" />
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#6a5acd"
              fill="url(#colorUv)"
              strokeWidth={2}
              dot={{ fill: "#6a5acd", stroke: "#fff", strokeWidth: 2 }}
            />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6a5acd" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#87cefa" stopOpacity={0.5} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Responsive Design Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .absolute {
            position: static;
            margin: 0 auto;
            text-align: center;
          }
          .top-4 {
            top: 1rem; /* Adjusted for smaller screens */
          }
          .left-4,
          .right-4 {
            left: 0;
            right: 0;
          }
        }
      `}</style>

      {/* Progress Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600 font-semibold">On Delivery (40%)</p>
          <progress
            className="progress progress-primary w-full lg:w-64"
            value="40"
            max="100"
          ></progress>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 font-semibold">Delivered (60%)</p>
          <progress
            className="progress progress-success w-full lg:w-64"
            value="60"
            max="100"
          ></progress>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 font-semibold">Canceled (25%)</p>
          <progress
            className="progress progress-error w-full lg:w-64"
            value="25"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default Order;
