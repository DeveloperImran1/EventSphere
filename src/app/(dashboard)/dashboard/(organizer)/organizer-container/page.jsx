import Card from '@/components/dashboard/organizer/organizer-container/Card';
import Profile from '@/components/dashboard/organizer/organizer-container/Profile';
import React from 'react';

const OrganizerContainer = () => {
    return (
        <div>
            <div><Profile/></div>
            <div><Card/></div>
        </div>
    );
};

export default OrganizerContainer;