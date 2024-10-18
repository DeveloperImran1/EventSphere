"use client"
export const dynamic = "force-dynamic";  // vercel a deploy korar por cassing kore rakhena

import UserContainer from './(user)/user-profile/[email]/page';
import AdminContainer from './(admin)/admin-container/page';
import OrganizerContainer from './(organizer)/organizer-container/page';
import UserProfile from '@/components/dashboard/users/UserDashBoardHome/UserProfile';
import useAuth from '@/hooks/useAuth';

const DashboardMainPage = () => {
    const auth = useAuth()
    return (
        <div>
            {
                auth?.data?.role === "user" ? <UserProfile /> : auth?.data?.role === "organizer" ? <OrganizerContainer></OrganizerContainer> : <AdminContainer></AdminContainer>
            }
        </div>
    );
};

export default DashboardMainPage;