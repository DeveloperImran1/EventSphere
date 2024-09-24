import FactsSection from '@/components/About/FactsSection';
import MainHeader from '@/components/About/MainHeader';
import OurPhilosophy from '@/components/About/OurPhilosophy';
import TestimonialsAbout from '@/components/About/TestimonialsAbout';
import TopAbout from '@/components/About/TopAbout';
import React from 'react';

const page = () => {
    return (
        <div>
            <MainHeader/>
            <TopAbout/>
            <OurPhilosophy/>
            <FactsSection/>
            <TestimonialsAbout/>
        </div>
    );
};

export default page;