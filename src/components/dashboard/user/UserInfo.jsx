import React from 'react';

const UserInfo = () => {
    return (
        <div className="w-full mt-4 h-1/3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex items-center justify-center p-10 shadow-lg rounded-lg">
            {/* Left Side: User Image */}
            <div className="flex-shrink-0">
                <img
                    src="https://via.placeholder.com/150"
                    alt="User Profile"
                    className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
                />
            </div>

            {/* Right Side: User Details */}
            <div className="ml-10 text-white flex flex-col items-start space-y-2">
                <h2 className="text-4xl font-bold tracking-wide">John Doe</h2>
                <p className="text-2xl font-light">Admin</p>
                <p className="text-base max-w-md">
                    Welcome to your personalized dashboard. Here you can manage your orders, track product status, and more!
                </p>

                <div className="mt-4">
                    <button className="px-6 py-2 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition duration-200">
                        View Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
