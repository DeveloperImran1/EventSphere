"use client";
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MyFollower from './MyFollower';
import MyFollowing from './MyFollowing';

// Function to fetch user data
const fetchUserData = async () => {
    const response = await axios.get('https://event-sphare-server.vercel.app/user');
    return response.data;
};

const CommunityRightSidebar = () => {
    // Use TanStack Query to fetch user data
    const { data: userData = [], isLoading, error, refetch } = useQuery({
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
            <MyFollower userData={userData} refetch={refetch} />
            <MyFollowing userData={userData} refetch={refetch} />
        </div>
    );
};

export default CommunityRightSidebar;