import React from 'react';

const CommunitySidebar = () => {
    return (
        <div className="sticky top-20">
        <nav className="space-y-4">
            <a href="#" className="block p-3 hover:bg-gray-700 duration-300">Home</a>
            <a href="#" className="block p-3 hover:bg-gray-700 duration-300">Explore</a>
            <a href="#" className="block p-3 hover:bg-gray-700 duration-300">Notifications</a>
            <a href="#" className="block p-3 hover:bg-gray-700 duration-300">Messages</a>
            {/* Add more links here */}
        </nav>
        </div>
    );
};

export default CommunitySidebar;