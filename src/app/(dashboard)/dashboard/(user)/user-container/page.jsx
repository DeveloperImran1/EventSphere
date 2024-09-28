import UserProfile from '@/components/dashboard/users/UserDashBoardHome/UserProfile';
import Cards from '@/components/dashboard/users/UserDashBoardHome/Cards';


import React from 'react';
import FirstCard from '@/components/dashboard/users/UserDashBoardHome/FirstCard';
import ImageSection from '@/components/dashboard/users/UserDashBoardHome/ImageSection';
import LatestNews from '@/components/dashboard/users/UserDashBoardHome/LatestNews';

const UserContainer = () => {
    return (
        <div>
            <UserProfile/>
            <div>
            <div>
            <Cards/>
            </div>
            <div>
            <FirstCard/>
            </div>
            <div>
                <ImageSection/>
            </div>
            <div>
                <LatestNews/>
            </div>
            </div>
            
        </div>
    );
};

export default UserContainer;