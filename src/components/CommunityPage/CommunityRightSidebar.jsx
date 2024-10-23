"use client";
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MyFollower from './MyFollower';

// Function to fetch user data
const fetchUserData = async () => {
    const response = await axios.get('http://localhost:9000/user');
    return response.data;
};

const CommunityRightSidebar = () => {
    // Use TanStack Query to fetch user data
    const { data: userData = [], isLoading, error } = useQuery({
        queryKey: ['userData'],
        queryFn: fetchUserData,
    });
    console.log("userData", userData);
    

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    return (
        <div className='sticky top-20'>
            {/* My Follower */}
            <MyFollower userData={userData} />
        </div>
    );
};

export default CommunityRightSidebar;