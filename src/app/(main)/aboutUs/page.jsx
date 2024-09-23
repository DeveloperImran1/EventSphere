import MainHeader from '@/components/About/MainHeader';
import OurPhilosophy from '@/components/About/OurPhilosophy';
import TopAbout from '@/components/About/TopAbout';
import React from 'react';

const page = () => {
    return (
        <div>
            <MainHeader/>
            <TopAbout/>
            <OurPhilosophy/>
        </div>
    );
};

export default page;