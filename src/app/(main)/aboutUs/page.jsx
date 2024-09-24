import FactsSection from '@/components/About/FactsSection';
import GallerySection from '@/components/About/GallerySection';
import MainHeader from '@/components/About/MainHeader';
import OurPhilosophy from '@/components/About/OurPhilosophy';
import TeamMembers from '@/components/About/TeamMembers';
import TestimonialsAbout from '@/components/About/TestimonialsAbout';
import TopAbout from '@/components/About/TopAbout';
import TrustSection from '@/components/About/TrustSection';
import React from 'react';

const page = () => {
    return (
        <div className='bg-[#001232]'>
            <MainHeader/>
            <TopAbout/>
            <OurPhilosophy/>
            <FactsSection/>
            <TestimonialsAbout/>
            <TeamMembers/>
            <GallerySection/>
            <TrustSection/>
        </div>
    );
};

export default page;