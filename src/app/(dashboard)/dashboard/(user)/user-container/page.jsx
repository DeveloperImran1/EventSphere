import UserProfile from "@/components/dashboard/users/UserDashBoardHome/UserProfile";
import Cards from "@/components/dashboard/users/UserDashBoardHome/Cards";

import React from "react";
import FirstCard from "@/components/dashboard/users/UserDashBoardHome/FirstCard";
import ImageSection from "@/components/dashboard/users/UserDashBoardHome/ImageSection";
import LatestNews from "@/components/dashboard/users/UserDashBoardHome/LatestNews";
import RightSide from "@/components/dashboard/users/UserDashBoardHome/RightSide";
import Post from "@/components/dashboard/users/UserDashBoardHome/Post";
import AboutMe from "@/components/dashboard/users/UserDashBoardHome/AboutMe";

const UserContainer = () => {
  return (
    <div>
      <UserProfile />
      <div className="flex flex-col-reverse md:flex-row gap-4">
        <div className="min-w-[400px]">
          <div>
            <Cards />
          </div>
          <div>
            <FirstCard />
          </div>
          <div>
            <ImageSection />
          </div>
          <div>
            <LatestNews />
          </div>
        </div>
        <div>
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default UserContainer;
