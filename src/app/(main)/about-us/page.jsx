
"use client"
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
import React, { useEffect } from 'react';

const AboutUs = () => {
    useEffect(() => {
        document.title = 'EventSphere | About us';
      }, []);
    return (
        <div className=''>
            <Head>
                <title>EventSphere || All Events</title>
            </Head>
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