import ProfileInfo from '@/components/dashboard/user/UserUpdateProfile/ProfileInfo';
import UpdateFrom from '@/components/dashboard/user/UserUpdateProfile/UpdateForm';
import React from 'react';

const UpdateProfile = () => {
    return (
      <div className="w-full text-[#727272] text-base overflow-hidden px-3 mx-auto box-border pb-28">
      <div className="flex flex-col lg:flex-row gap-x-4">
        <ProfileInfo /> {/* Server-side Profile Information */}
        <div className="w-full lg:max-w-[80%] shadow-lg h-[90%] rounded-xl mt-0">
          <UpdateFrom/> {/* Client-side Form */}
        </div>
      </div>
    </div>
    );
};

export default UpdateProfile;