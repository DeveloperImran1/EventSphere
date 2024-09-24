import FactsSection from '@/components/About/FactsSection';
import GallerySection from '@/components/About/GallerySection';
import MainHeader from '@/components/About/MainHeader';
import OurPhilosophy from '@/components/About/OurPhilosophy';
import TestimonialsAbout from '@/components/About/TestimonialsAbout';
import TopAbout from '@/components/About/TopAbout';
import TrustSection from '@/components/About/TrustSection';
import React from 'react';

const page = () => {
    return (
        <div>
            <MainHeader/>
            <TopAbout/>
            <OurPhilosophy/>
            <FactsSection/>
            <TestimonialsAbout/>
            <GallerySection/>
            <TrustSection/>
        </div>
    );
};

export default page;