import React from 'react';
import Banner from './Banner';
import FeaturedOrganizer from './FeaturedOrganizer';
import PopularEvents from './PopularEvents';
import EventTime from './EventTime';
import UserReview from './UserReview';

const HomeContainer = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularEvents></PopularEvents>
            <EventTime></EventTime>
            <FeaturedOrganizer></FeaturedOrganizer>
            <UserReview></UserReview>
        </div>
    );
};

export default HomeContainer;