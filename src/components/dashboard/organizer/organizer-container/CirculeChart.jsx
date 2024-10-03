"use client";

import React, { useEffect, useRef } from "react";
import { Chart, ArcElement } from "chart.js";

// Remove this line, it's not needed
// import { PieController } from "chart.js";

// No need to register PieController
// Chart.register(PieController);

const CirculeChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Store the chart instance

  useEffect(() => {
    // Register the required element
    Chart.register(ArcElement);

    const ctx = chartRef.current.getContext("2d");

    // Destroy the previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance
    chartInstance.current = new Chart(ctx, {
      type: "pie", // Use 'doughnut' for a doughnut chart
      data: {
        labels: ["Marketing", "Sales", "Development"], // Labels for the sections of the chart
        datasets: [
          {
            label: "My Dataset",
            data: [300, 200, 100], // Data for each section
            backgroundColor: [
              "rgba(75, 192, 192, 0.6)", // Teal
              "rgba(153, 102, 255, 0.6)", // Purple
              "rgba(255, 159, 64, 0.6)", // Orange
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)", // Teal
              "rgba(153, 102, 255, 1)", // Purple
              "rgba(255, 159, 64, 1)", // Orange
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true, // Makes the chart responsive
        maintainAspectRatio: false, // Allows manual height and width control
        plugins: {
          legend: {
            position: "top", // Legend position
            labels: {
              boxWidth: 20, // Box width for legend items
              font: {
                size: 14, // Font size for legend labels
              },
            },
          },
        },
      },
    });

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Chart container with fixed size */}
      <div className="relative h-64 w-64 sm:h-80 sm:w-80 mx-auto">
        <canvas ref={chartRef} id="myCirculeChart"></canvas>
      </div>
    </div>
  );
};

export default CirculeChart;
