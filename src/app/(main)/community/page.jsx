"use client";
import CommunityHeader from '@/components/CommunityPage/CommunityHeader';
import CommunityRightSidebar from '@/components/CommunityPage/CommunityRightSidebar';
import CommunitySidebar from '@/components/CommunityPage/CommunitySidebar';
import FeedPostCard from '@/components/CommunityPage/FeedPostCard';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';

const CommunityPage = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className=" container max-w-[1280px] mx-auto mt-16 ">
            <div className="flex   mx-auto justify-between gap-10">
              

                {/* Main Content */}
                <div className="w-full md:w-[60%]">
                    <div className="">
                        {/* Scrollable Feed */}
                        <div className="">
                            <FeedPostCard />
                        </div>
                    </div>
                </div>

                {/* Right Sidebar (Icon and Sidebar Content) */}
                <div
                    className={`${showSidebar ? 'translate-x-0' : 'translate-x-full'
                        } fixed md:sticky   rounded-lg lg:top-24 lg:w-[30%] top-24 right-0 h-full transition-transform transform w-[80%] sm:w-[30%] p-5 bg-white border-2 z-40  lg:translate-x-0`}
                >
                    {/* Close Icon for Small Devices */}
                    <button
                        className="lg:hidden absolute top-0 right-4 text-xl"
                        onClick={() => setShowSidebar(false)}
                    >
                        <FaTimes className="text-4xl font-bold text-blue-500" />
                    </button>
                    <CommunityRightSidebar />
                </div>

                {!showSidebar && (
                    <button
                        className="lg:hidden absolute top-24 right-4 text-xl z-50"
                        onClick={() => setShowSidebar(true)}
                    >
                        <FaBars className="text-4xl font-bold text-blue-500" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default CommunityPage;
