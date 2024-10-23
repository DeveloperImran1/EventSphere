'use client'
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const NewChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://event-sphare-server.vercel.app/monthlyMetrics')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="w-full h-[500px] bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-lg shadow-lg py-6 sm:h-[400px] sm:p-4 md:h-[500px]">
      <h2 className="text-2xl font-bold text-center text-gray-800 sm:text-xl md:text-3xl">Monthly Metrics Overview</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#d3d3d3"/>
          <XAxis dataKey="name" tick={{ fill: '#4B5563', fontSize: '12px' }} />
          <YAxis yAxisId="left" tick={{ fill: '#4B5563', fontSize: '12px' }} />
          <YAxis yAxisId="right" orientation="right" tick={{ fill: '#4B5563', fontSize: '12px' }} />
          <Tooltip cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }} />
          <Legend verticalAlign="top" align="center" wrapperStyle={{ fontSize: '12px', color: '#374151', padding: '0 0 10px 0'}} />
          <Bar yAxisId="left" dataKey="totalEvents" fill="#4f46e5" name="Total Events" radius={[10, 10, 0, 0]} />
          <Bar yAxisId="left" dataKey="ticketSales" fill="#10b981" name="Ticket Sales" radius={[10, 10, 0, 0]} />
          <Bar yAxisId="right" dataKey="totalSales" fill="#fbbf24" name="Total Sales ($)" radius={[10, 10, 0, 0]} />
          <Bar yAxisId="left" dataKey="newOrganizers" fill="#ef4444" name="New Organizers" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NewChart;