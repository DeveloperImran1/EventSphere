"use client";
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MyFollower from './MyFollower';
import MyFollowing from './MyFollowing';
import SuggestFollowing from './SuggestFollowing';
import Loading from '../shared/LoadingSpiner/Loading';

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
    // console.log("userData", userData);
    

    if (isLoading) {
        return <Loading/>;
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    return (
        <div className='sticky top-20 h-[90vh] overflow-auto'>
            {/* My Follower */}
            <MyFollowing userData={userData} refetch={refetch} />
            <MyFollower userData={userData} refetch={refetch} />
            <SuggestFollowing userData={userData} refetch={refetch} />
        </div>
    );
};

export default CommunityRightSidebar;