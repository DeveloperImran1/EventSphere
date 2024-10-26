import EventManagementSoftware from '@/components/events/eventManagementSoftware/EventManagementSoftware';
import React from 'react';

export const metadata = {
    title: "Event-managements",
    description: "event-management page, Smart Event Management and Booking Platform",
    keywords: ["event management", "online", "ticket", "selling", "system", "event", "management"]
};

const EventManagementSoftwarePage = () => {
    return (
        <>
            <EventManagementSoftware></EventManagementSoftware>
        </>
    );
};

export default EventManagementSoftwarePage;