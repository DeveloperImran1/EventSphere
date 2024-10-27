"use client"
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';

const EventBanner = ({ search, setFilters }) => {
    const [searchResult, setSearchResult] = useState(search);

    // Update filters and search result when the input changes
    useEffect(() => {
        setSearchResult(search); // Update local state when prop changes
    }, [search]);
    
    const handleSearch = () => {
        setFilters({ search: searchResult });
    };

    // Handle input change and search automatically
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchResult(value);
        setFilters({ search: value }); // Update filters based on input
    };

    return (
        <div
            className="relative bg-cover bg-center h-80 mb-6 md:mb-12 lg:mb-20 object-cover"
            style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/businessman-man-hold-hand-magnifying-glass-icon-business-technology-internet-concept_150455-10173.jpg?w=1060')` }}
        >
            <h2 className=' text-2xl md:text-4xl lg:text-5xl font-bold text-center pt-20 text-white '> Enjoy Your Life With Us</h2>

            <div className="absolute bottom-[10%] left-0 right-0 p-6">
                <div className="relative w-[90%] md:w-1/2 mx-auto">
                    <input
                        type="text"
                        placeholder="🔍 Search"
                        value={searchResult}
                        onChange={handleInputChange}
                        className="w-full p-4 md:pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                    <button
                        onClick={handleSearch}
                        className="absolute top-[9px] right-4  button"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventBanner;
