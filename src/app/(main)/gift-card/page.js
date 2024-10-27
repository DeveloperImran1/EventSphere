import GiftCard from '@/components/Gift-Card-Feature/GiftCard';
import React from 'react';

export const metadata = {
    title: "Gift-card",
    description: "Gift-card page,Smart Event Management and Booking Platform",
    keywords: ["gift-card","online", "ticket", "selling", "system", "event", "management"]
};

const page = () => {
    return (
        <div>
            <GiftCard></GiftCard>
        </div>
    );
};

export default page;