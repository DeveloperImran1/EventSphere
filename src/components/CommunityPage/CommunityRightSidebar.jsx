import React from 'react';

const CommunityRightSidebar = () => {
    return (
        <div className='sticky top-20'>
            <h2 className="text-lg font-bold ">Who to Follow</h2>
            <div className="mt-4">
                <div className="p-3 border mb-4 rounded">
                    <p className="font-semibold">Upasana Konidela</p>
                    <button className="text-blue-500">Follow</button>
                </div>
                {/* Add more follow suggestions here */}
            </div>
        </div>
    );
};

export default CommunityRightSidebar;