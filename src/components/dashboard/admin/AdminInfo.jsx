import React from 'react';
import CardSection from './CardSection';
import Chart from './Chart';
import Table from './Table';
import Image from 'next/image';

const AdminInfo = () => {
    return (
        <>
            <div className="w-full mt-4 bg-gradient-to-r from-green-200 via-yellow-200 to-violet-200 flex flex-col md:flex-row items-center justify-center p-4 md:p-8 shadow-lg rounded-lg">
                {/* Left Side: User Image */}
                <div className="flex-shrink-0">
                    <Image
                         height={675}
                         width={1200}
                        src="https://via.placeholder.com/150"
                        alt="User Profile"
                        className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-white shadow-lg"
                    />
                </div>

                {/* Right Side: User Details */}
                <div className="mt-4 md:ml-8 md:mt-0 text-black flex flex-col items-center md:items-start space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-wide">John Doe</h2>
                    <p className="text-lg md:text-xl font-light">Admin</p>
                    <p className="text-sm md:text-base max-w-md text-center md:text-left">
                        Welcome to your personalized dashboard. Manage your orders, track product status, and much more!
                    </p>

                    <div className="mt-4">
                        <button className="px-5 py-2 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition duration-200">
                            View Profile
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <CardSection />
            </div>

            <div className="my-8">
                <Chart />
            </div>
        </>
    );
};

export default AdminInfo;
