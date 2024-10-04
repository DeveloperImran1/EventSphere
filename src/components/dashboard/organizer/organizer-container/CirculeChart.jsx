"use client";
import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const CirculeChart = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      <PieChart
        data={[
          { title: 'One', value: 10, color: "#7B1FA2" },
          { title: 'Two', value: 15, color: '#4CAF50' },
          { title: 'Three', value: 20, color: '#FBC02D' },
        ]}
        style={{ 
          width: '100%', 
          maxWidth: '400px',  // Standard width for larger screens
          height: 'auto', 
          maxHeight: '400px'  // Standard height for larger screens
        }}
      />
    </div>
  );
};

export default CirculeChart;
