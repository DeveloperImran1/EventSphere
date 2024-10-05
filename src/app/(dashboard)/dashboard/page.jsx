import React from 'react';
// import UserContainer from './(user)/user-container/page';
import AdminContainer from './(admin)/admin-container/page';
import OrganizerContainer from './(organizer)/organizer-container/page';
import UserProfile from '@/components/dashboard/users/UserDashBoardHome/UserProfile';

const page = () => {
    const role = "user"
    return (
        <div>
            {
                role === "user"? <UserProfile/> : role === "event organizer" ? <OrganizerContainer></OrganizerContainer> : <AdminContainer></AdminContainer>
            }
        </div>
    );
};

export default page;