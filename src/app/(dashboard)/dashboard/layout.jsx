import React from 'react';

const DashboarLayout = ({ children }) => {
    return (
        <>
            <div className='bg-red-700'>Dashboard Navbar</div>
            <div className='bg-blue-700 grid grid-cols-12'>
                <div className='bg-yellow-700 col-span-2'>Dashboard Sidebar</div>
                <div className='bg-green-700 col-span-10'>
                    {children}
                </div>
            </div>

        </>
    );
};

export default DashboarLayout;