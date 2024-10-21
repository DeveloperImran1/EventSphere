"use client";
import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const Chart = ({organizerStats}) => {

  return (
    <div >
      <ResponsiveContainer  width="100%"  height={400}>
      <AreaChart
        data={organizerStats}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Actual_Sale" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="Expected_Sale" stroke="#82ca9d" fill="#82ca9d" />
      </AreaChart>
    </ResponsiveContainer>
    <p className=' text-center my-3 text-lg'>This chart compares your <span className=' text-[#82ca9d] font-semibold'>Expected Sales </span>(anticipated revenue) with <span className='text-[#8884d8] font-semibold'>Actual Sales </span>(ticket sales revenue) for each month.</p>
    </div>
  );
};

export default Chart;
