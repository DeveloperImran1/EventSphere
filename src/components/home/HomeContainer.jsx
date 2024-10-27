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
import WhyUse from './WhyUse';
import MembershipCard from './membership/MEmbershipCard';
import FAQSection from './faq/FaqSection';



const HomeContainer = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <PopularEvents></PopularEvents>
            <EventTimed></EventTimed>
            <WhyUse></WhyUse>

            <DestinationSlider />
            <Organizers></Organizers>
            <MembershipCard />
            <FAQSection/>
            <EmailSend></EmailSend>


        </div>
    );
};

export default HomeContainer;