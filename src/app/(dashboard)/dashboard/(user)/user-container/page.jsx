'use client'
import Loading from '@/components/shared/LoadingSpiner/Loading';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const UserContainer = () => {
    const axiosPublic = useAxiosPublic();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['todos'],
        queryFn: async () => {
            const res = await axiosPublic.get("https://jsonplaceholder.typicode.com/posts");
            return res.data;
        }
    });
    console.log(data)
    // Loading and error states
    if (isLoading) return <div className='w-[90vw] md:w-[60vw] '> <Loading></Loading> </div>
    if (isError) return <h1>Error: {error.message}</h1>;


    return (
        <div>
            User  dashboard er Home page akhane thakbe.
        </div>
    );
};

export default UserContainer;