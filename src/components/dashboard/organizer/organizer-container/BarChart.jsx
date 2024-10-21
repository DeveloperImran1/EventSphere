"use client";
import { useQuery } from "@tanstack/react-query";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// Function to fetch statistics data
const fetchStatsData = async (email) => {
    const response = await fetch(
        `http://localhost:9000/organizer-barChart/${email}`
    );
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json(); // Adjust based on your API response structure
};
const BarChart2 = ({email}) => {
    const {
        data: chartData = { dayStats: [] },
        error,
        isLoading,
    } = useQuery({
        queryKey: ["organizer-wave"],
        queryFn: () => fetchStatsData(email),
    });
    console.log(chartData);
    
  return (
    <ResponsiveContainer width="100%" height="100%">
    <BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
 
      <Bar dataKey="Monthly_Sale" fill="#82ca9d" activeBar={<Rectangle fill="green" stroke="blue" />} />
    </BarChart>
  </ResponsiveContainer>
  )
}

export default BarChart2