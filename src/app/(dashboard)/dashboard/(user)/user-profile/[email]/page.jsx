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
  const { data: events = [], isPending } = useQuery({
    queryKey: ['allEventsForToday'],
    queryFn: async () => {
      const res = await axiosPublic.get('/events')
      return res?.data?.events;
    }
  })

  return (
    <div>
      <UserProfile />
      <div className="flex flex-col-reverse lg:flex-row gap-4">
        <div className="">
          <div>
            <Cards />
          </div>
          {/* <div>
            <FirstCard />
          </div> */}
          <div>
            <ImageSection />
          </div>
          <div className="bg-white w-full mx-start max-w-md lg:max-w-xl mt-4 mx-auto  rounded-lg shadow-lg space-y-6">

            <h2 className="text-2xl font-bold  p-6 pb-0 rounded-t-lg text-[#1b85db]  text-start">Today Highlight</h2>

            {
              events?.slice(0, 5)?.map(event => <LatestNews key={event?._id} event={event} isPending={isPending} />)
            }

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
