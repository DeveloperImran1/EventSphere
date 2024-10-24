import FactsSection from '@/components/About/FactsSection';
import GallerySection from '@/components/About/GallerySection';
import MainHeader from '@/components/About/MainHeader';
import OurPhilosophy from '@/components/About/OurPhilosophy';
import TeamMembers from '@/components/About/TeamMembers';
import TestimonialsAbout from '@/components/About/TestimonialsAbout';
import TopAbout from '@/components/About/TopAbout';
import TrustSection from '@/components/About/TrustSection';
import Subscribe from '@/components/shared/Subscribe';
import React from 'react';

const page = () => {
    return (
        <div className=''>
            <MainHeader/>
            <TopAbout/>
            {/* <OurPhilosophy/> */}
            <FactsSection/>
            <TestimonialsAbout/>
            <TeamMembers/>
            <GallerySection/>
            <TrustSection/>
            <Subscribe/>
        </div>
    );
};

export default page;