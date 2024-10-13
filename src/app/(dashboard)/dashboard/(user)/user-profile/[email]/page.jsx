"use client";
import Cards from "@/components/dashboard/users/UserDashBoardHome/Cards";
import FirstCard from "@/components/dashboard/users/UserDashBoardHome/FirstCard";
import ImageSection from "@/components/dashboard/users/UserDashBoardHome/ImageSection";
import LatestNews from "@/components/dashboard/users/UserDashBoardHome/LatestNews";
import RightSide from "@/components/dashboard/users/UserDashBoardHome/RightSide";
import UserProfile from "@/components/dashboard/users/UserDashBoardHome/UserProfile";
import Loading from "@/components/shared/LoadingSpiner/Loading";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const UserContainer = () => {
  const axiosPublic = useAxiosPublic();

  return (
    <>
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
    </>
  );
};

export default UserContainer;
