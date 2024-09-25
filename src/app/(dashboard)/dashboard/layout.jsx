import AdminInfo from '@/components/dashboard/admin/AdminInfo';
import DashboardNavbar from '@/components/dashboard/admin/DashboardNavbar';
import DashboardSideBar from '@/components/dashboard/admin/DashboardSideBar';
import React from 'react';

const DashboarLayout = ({ children }) => {
    return (
        <>
            <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <DashboardNavbar />

            <div className="flex flex-col md:flex-row gap-4 p-4">
                {/* Sidebar */}
                <DashboardSideBar />

                {
                    children
                }
            </div>

            {/* Footer or additional content */}
            <div className="text-center p-4">
                <p className="text-gray-700">This is the admin profile page. Another page cannot be added at this time.</p>
                <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition duration-200">
                    Submit
                </button>
            </div>
        </div>

        </>
    );
};

export default DashboarLayout;


