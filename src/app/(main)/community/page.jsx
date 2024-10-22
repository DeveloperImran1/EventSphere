import CommunityHeader from '@/components/CommunityPage/CommunityHeader';
import CommunityRightSidebar from '@/components/CommunityPage/CommunityRightSidebar';
import CommunitySidebar from '@/components/CommunityPage/CommunitySidebar';
import FeedContent from '@/components/CommunityPage/FeedContent';
import React from 'react';

const CommunityPage = () => {
    return (
        <div className="">
            <div className="flex w-full container">
                {/* Sidebar */}
                {/* <div className="w-1/6 border-2 hidden md:block">
                    <CommunitySidebar />
                </div> */}
                {/* Main Content */}
                <div className="flex-1 border-2">
                    <CommunityHeader />
                    <div className="flex h-full">
                        {/* Scrollable Feed */}
                        <div className="w-full">
                            {/* Main feed content */}
                            <FeedContent/>
                        </div>
                    </div>
                </div>
                {/* Right Sidebar */}
                <div className="w-[30%] p-5 border-2 hidden md:block">
                    <CommunityRightSidebar />
                </div>
            </div>
        </div>
    );
};

export default CommunityPage;