"use client"
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';

const EventBanner = () => {
    const [search, setSearch] = useState("");
    const axiosPublic = useAxiosPublic();  
    const [filters, setFilters] = useState({
        search: '',
        category: '',
        minimumPrice: 0,
        maximumPrice: 300,
        type: '',
        country: '',
        city: '',
        startDate: '',
        endDate: '',
      });;

    const { data: events = {}, isLoading } = useQuery({
        queryKey: ['events', filters],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/events', { params: filters });
            return data;
        },
        keepPreviousData: true,
        enabled: !!filters.search, // Only fetch if search is not empty
    });

    // Update filters when search changes
    useEffect(() => {
        setFilters({ search });
    }, [search]);

    const handleSearch = () => {
        setFilters({ search });
    };

    return (
        <div
            className="relative bg-cover bg-center h-80"
            style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/businessman-man-hold-hand-magnifying-glass-icon-business-technology-internet-concept_150455-10173.jpg?w=1060')` }}
        >
            <h2 className='text-2xl lg:text-5xl font-bold text-center pt-20 text-white pr-10'> Enjoy Your Life With Us</h2>

            <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="relative w-1/2 mx-auto">
                    <input
                        type="text"
                        placeholder="🔍 Search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                    <button
                        onClick={handleSearch}
                        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-indigo-500 text-white p-2 rounded-lg"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventBanner;
