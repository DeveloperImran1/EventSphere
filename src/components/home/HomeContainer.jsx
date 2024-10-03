import React from 'react';
import Banner from './Banner';
import PopularEvents from './PopularEvents';
import EventTime from './EventTime';
import Organizers from '../organizers/Organizers';
import Testimonials from '../testimonials/Testimonials';
import DestinationSlider from './DestinationSlider';
import EventOrderList from '../events/EventOrderList';

const HomeContainer = () => {
    return (
        <div className='space-y-20'>
            <Banner></Banner>
            <PopularEvents></PopularEvents>
    <EventTime/>
            <Organizers></Organizers>
            <Testimonials></Testimonials>
            <div className=''>
                <DestinationSlider />
            </div>
        </div>
    );
};

export default HomeContainer;