import ContactHeader from '@/components/Contact/ContactHeader';
import CounterSection from '@/components/Contact/CounterSection';
import GetTouchSection from '@/components/Contact/GetTouchSection';
import React from 'react';

const page = () => {
    return (
        <div>
            <ContactHeader/>
            <GetTouchSection/>
            <CounterSection/>
        </div>
    );
};

export default page;