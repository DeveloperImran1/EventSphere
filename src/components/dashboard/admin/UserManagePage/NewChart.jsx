'use client'
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', totalEvents: 120, ticketSales: 1500, totalSales: 15000, newOrganizers: 5 },
  { name: 'Feb', totalEvents: 150, ticketSales: 1800, totalSales: 18000, newOrganizers: 50 },
  { name: 'Mar', totalEvents: 180, ticketSales: 2200, totalSales: 22000, newOrganizers: 100 },
  { name: 'Apr', totalEvents: 200, ticketSales: 2500, totalSales: 25000, newOrganizers: 80 },
  { name: 'May', totalEvents: 220, ticketSales: 2800, totalSales: 28000, newOrganizers: 120 },
  { name: 'Jun', totalEvents: 250, ticketSales: 3000, totalSales: 30000, newOrganizers: 15 },
  { name: 'Apr', totalEvents: 250, ticketSales: 3000, totalSales: 3000, newOrganizers: 156 },
  { name: 'Jun', totalEvents: 250, ticketSales: 3000, totalSales: 30000, newOrganizers: 400 },
  { name: 'Jun', totalEvents: 250, ticketSales: 3000, totalSales: 30000, newOrganizers: 15 },
  { name: 'Jun', totalEvents: 250, ticketSales: 3000, totalSales: 40000, newOrganizers: 15 },
  { name: 'Jun', totalEvents: 250, ticketSales: 3000, totalSales: 30000, newOrganizers: 15 },
];

const NewChart = () => {
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
