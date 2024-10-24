"use client";
import React, { useEffect, useRef, useState } from "react";
import {
    Chart,
    LineController,    // Import the LineController
    LineElement,        // Import LineElement
    PointElement,       // Import PointElement
    LinearScale,        // Import LinearScale for axes
    Title,              // Import Title if you're using chart titles
    Tooltip,            // Import Tooltip if you're using tooltips
    Legend,
    CategoryScale
} from "chart.js";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Loading from "@/components/shared/LoadingSpinner/Loading";

// Function to fetch statistics data
const fetchStatsData = async (email) => {
    const response = await fetch(
        `https://event-sphare-server.vercel.app/organizer-waveChart/${email}`
    );
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json(); // Adjust based on your API response structure
};

const StatsChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [timePeriod, setTimePeriod] = useState("week"); // Default to week
    const session = useSession();
    const email = session?.data?.user?.email;

    // Use TanStack Query to fetch stats data
    const {
        data: chartData = { dayStats: [] },
        error,
        isLoading,
    } = useQuery({
        queryKey: ["organizer-wave", email],
        queryFn: () => fetchStatsData(email),
    });
    useEffect(() => {
        Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

        if (chartRef.current) {
            // Check if chartRef.current is not null
            const ctx = chartRef.current.getContext("2d");

            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            const labels = chartData?.dayStats?.map((stat) => stat.day);
            const data = chartData?.dayStats.map((stat) => stat.eventCount);
            let a = chartData.dayStats.map((stat) => console.log(stat.eventCount))
            console.log(labels);



            const dataForChart = {
                labels,
                datasets: [
                    {
                        label: "Event Sales",
                        data,
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

            chartInstance.current = new Chart(ctx, {
                type: "line",
                data: dataForChart,
                options,
            });
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [chartData]); // This will run when chartData changes

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const changeTimePeriod = (period) => {
        setTimePeriod(period);
        setDropdownOpen(false);
    };

    if (isLoading) return <Loading></Loading>;
    if (error) return <div>Error fetching data: {error.message}</div>;

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
                        {timePeriod.charAt(0).toUpperCase() + timePeriod.slice(1)} ▼
                    </button>
                    {dropdownOpen && (
                        <ul className="absolute bg-white shadow-lg rounded-lg mt-2 w-32 z-10 border border-gray-200">
                            <li
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => changeTimePeriod("week")}
                            >
                                Week
                            </li>
                            <li
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => changeTimePeriod("month")}
                            >
                                Month
                            </li>
                            <li
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => changeTimePeriod("year")}
                            >
                                Year
                            </li>
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
