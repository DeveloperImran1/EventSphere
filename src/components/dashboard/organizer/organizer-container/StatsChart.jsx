"use client"
import React, { useEffect, useRef, useState } from "react";
import { Chart, LineElement, LinearScale, PointElement, CategoryScale } from "chart.js";

const StatsChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        Chart.register(LineElement, LinearScale, PointElement, CategoryScale);
        const ctx = chartRef.current.getContext("2d");

        const labels = Array.from({ length: 100 }, (_, i) => i);
        const sineData = labels.map((x) => Math.sin(x * 0.1) * 20);

        const data = {
            labels,
            datasets: [
                {
                    label: "Sine Wave",
                    data: sineData,
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 3,
                    fill: false,
                    pointRadius: 0,
                },
            ],
        };

        const options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                x: {
                    display: true,
                },
                y: {
                    display: true,
                    beginAtZero: true,
                },
            },
        };

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
            type: "line",
            data,
            options,
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-2">
                <div>
                    <div className="text-xl text-gray-800">Stats</div>
                    <div className="text-5xl font-bold text-gray-800">+35</div>
                </div>
                <div className="relative inline-block">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-blue-600 transition duration-200"
                        onClick={toggleDropdown}
                    >
                        Week ▼
                    </button>
                    {dropdownOpen && (
                        <ul className="absolute bg-white shadow-lg rounded-lg mt-2 w-32 z-10 border border-gray-200">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Week</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Month</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Year</li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="relative w-full h-full flex-1">
                <canvas ref={chartRef} className="w-full h-full"></canvas>
            </div>
        </div>
    );
};

export default StatsChart;
