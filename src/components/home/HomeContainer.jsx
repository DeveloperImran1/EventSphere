import React from 'react';

import PopularEvents from './PopularEvents';

import Organizers from '../organizers/Organizers';
import Testimonials from '../testimonials/Testimonials';
import DestinationSlider from './DestinationSlider';
import Banner from './banner/page';
import EventTimed from './EventTime/page';
import Services from '../events/Services';
import EmailSend from './EmailSend';

import PopularEvent from '../PopularEvent/PopularEvent';
import MembershipCard from './membership/MembershipCard';


const HomeContainer = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <PopularEvents></PopularEvents>
            <EventTimed></EventTimed>
            <DestinationSlider />
            <Organizers></Organizers>
            <Services></Services>
            <EmailSend></EmailSend>
           
            {/* <Testimonials></Testimonials> */}
            <MembershipCard/>
           
            
        </div>
    );
};

export default HomeContainer;