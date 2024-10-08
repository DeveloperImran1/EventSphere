import React from 'react';

export const dynamic = "force-dynamic";  // vercel a deploy korar por cassing kore rakhena

import UserContainer from './(user)/user-profile/page';
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