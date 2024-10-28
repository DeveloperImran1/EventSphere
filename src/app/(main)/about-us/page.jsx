
import FactsSection from '@/components/About/FactsSection';
import GallerySection from '@/components/About/GallerySection';
import MainHeader from '@/components/About/MainHeader';
import OurPhilosophy from '@/components/About/OurPhilosophy';
import TeamMembers from '@/components/About/TeamMembers';
import TestimonialsAbout from '@/components/About/TestimonialsAbout';
import TopAbout from '@/components/About/TopAbout';
import TrustSection from '@/components/About/TrustSection';
import Subscribe from '@/components/shared/Subscribe';
import Head from 'next/head';

export const metadata = {
    title: "About us",
    description: "About page, Smart Event Management and Booking Platform",
    keywords: ["online", "ticket", "selling", "system", "event", "management"]
};

const AboutUs = () => {


    return (
        <div className=''>

            <MainHeader />
            <TopAbout />
            {/* <OurPhilosophy/> */}
            <FactsSection />
            <TestimonialsAbout />
            <TeamMembers />
            <GallerySection />
            <TrustSection />
            <Subscribe />
        </div>
    );
};

export default AboutUs;