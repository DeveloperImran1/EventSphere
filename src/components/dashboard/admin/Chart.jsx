"use client"; // Mark this as a Client Component for Next.js

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Table from './Table';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = () => {
  const generateSineData = (amplitude = 1, frequency = 1, phase = 0) => {
    const labels = [];
    const data = [];
    for (let i = 0; i <= 360; i += 10) {
      const rad = (i * Math.PI) / 180;
      labels.push(i);
      data.push(amplitude * Math.sin(frequency * rad + phase));
    }
    return { labels, data };
  };

  const sineWave1 = generateSineData(1, 1, 0);
  const sineWave2 = generateSineData(1, 2, Math.PI / 4);
  const sineWave3 = generateSineData(1, 0.5, Math.PI / 2);

  const data = {
    labels: sineWave1.labels,
    datasets: [
      {
        label: 'Sine Wave 1',
        data: sineWave1.data,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: 'Sine Wave 2',
        data: sineWave2.data,
        fill: false,
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: 'Sine Wave 3',
        data: sineWave3.data,
        fill: false,
        borderColor: 'rgba(54,162,235,1)',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Multiline Sine Wave Chart',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Angle (Degrees)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Sine Value',
        },
        min: -2,
        max: 2,
      },
    },
  };

  return (
   <>
    <div className="w-full">
      <Line data={data} options={options} />
    </div>
    <div className=''>
      <Table/>
    </div>
   
   </>
    
  );
};

export default Chart;
