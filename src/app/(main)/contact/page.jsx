import ContactHeader from '@/components/Contact/ContactHeader';
import CounterSection from '@/components/Contact/CounterSection';
import GetTouchSection from '@/components/Contact/GetTouchSection';
import React from 'react';

export const metadata = {
    title: "Contact us",
    description: "Contact us, Smart Event Management and Booking Platform",
    keywords: ["online", "ticket", "selling", "system", "event", "management"]
};

const page = () => {
    return (
        <div>
            <ContactHeader />
            <GetTouchSection />
            <CounterSection />
        </div>
    );
};

export default page;