"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaUserGroup } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import Link from "next/link";
import useAuthWithEmail from "@/hooks/useAuthWithEmail";
import useMyAllPostWithEmail from "@/hooks/useMyAllPostWithEmail";
import useMyAllEventsWithEmail from "@/hooks/useMyAllEventsWithEmail";
import Cards from "@/components/dashboard/users/UserDashBoardHome/Cards";
import FirstCard from "@/components/dashboard/users/UserDashBoardHome/FirstCard";
import ImageSection from "@/components/dashboard/users/UserDashBoardHome/ImageSection";
import LatestNews from "@/components/dashboard/users/UserDashBoardHome/LatestNews";
import RightSide from "@/components/dashboard/users/UserDashBoardHome/RightSide";
import EventCard from "@/components/allEventsPage/EventCard";
import Loading from "@/components/shared/LoadingSpiner/Loading";
import CardForEvents from "@/components/allEventsPage/CardForEvents";
import { usePathname } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { RiUserFollowFill } from "react-icons/ri";
import { BsFileEarmarkPost } from "react-icons/bs";

const OrganizerProfile = () => {
  const { data: user, isLoading } = useAuthWithEmail();
  const {
    data: myPost,
    isLoading: postLoading,
    refetch,
  } = useMyAllPostWithEmail();
  const { data: myEvents, isLoading: eventLoading } = useMyAllEventsWithEmail();

  const [isFollowed, setIsFollowed] = useState(false);
  const pathname = usePathname();
  const lastPathSegment = pathname?.split("/").filter(Boolean).pop();

  // current User er informaion get korbo
  const newUser = useAuth();
  const currentUser = newUser?.data;
  console.log(currentUser);

  // dynaic user profile er email dia dynamic user er profile info get
  const {
    data,
    isLoading: followLoading,
    refetch: followRefetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      fetch(
        `https://event-sphare-server.vercel.app/user/${lastPathSegment}`
      ).then((res) => res.json()),
  });

  const dynamicUserFollower = data?.followers;
  const currentUserFollower = currentUser?.followers;
  const handleFollow = async () => {
    if (isFollowed) {
      setIsFollowed(false);
      return toast.success("Unfollowed!");
    }
    const updateFollowArrayDynamicUser = [
      ...dynamicUserFollower,
      currentUser?.email,
    ];
    const updateFollowArrayCurrentuser = [...currentUserFollower, data?.email];
    const addedFollower = {
      dynamicUserEmail: data?.email,
      currentUserEmail: currentUser?.email,
      updateFollowArrayDynamicUser,
      updateFollowArrayCurrentuser,
    };
    console.log("Updated info", addedFollower);

    try {
      const result = await axios.put(
        "https://event-sphare-server.vercel.app/userAddedFollower",
        addedFollower
      );
      console.log(result);

      if (result?.data?.modifiedCount) {
        toast.success("Successfully Followed!");
        setIsFollowed(true);
        refetch();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  //isFollowed this value collect
  useEffect(() => {
    const exist = data?.followers?.find(
      (email) => email === currentUser?.email
    );
    if (exist) {
      setIsFollowed(true);
    }
  }, [data]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <div>
        <div class="relative">
          <div class="h-[300px] bg-gradient-to-r from-cyan-500 via-cyan-500 to-[#1b85db] rounded-2xl"></div>
          <div className="max-w-[800px] mx-auto shadow-[0_15px_35px_rgba(50,50,93,0.1),_0_5px_15px_rgba(0,0,0,0.07)] rounded-3xl  -mt-[130px] z-40 p-8 ">
            {/* Top */}
            <div className="flex justify-center md:justify-between ">
              <div
                onClick={() => handleFollow()}
                className="hidden md:flex items-center gap-x-2 justify-between pt-32 cursor-pointer  "
              >
                <FaUserGroup className="text-blue-500 text-2xl" />
                <p className="text-blue-500 mt-[4px]">
                  {isFollowed ? "Unfollow" : "Follow"}
                </p>
              </div>
              <div className="">
                <div className="rounded-full w-full ">
                  <Image
                    src={
                      user?.image ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s"
                    }
                    height={192}
                    width={192}
                    alt="user"
                    className="rounded-full h-[192px] w-[192px] object-cover shadow-xl"
                  />
                </div>
              </div>
              <Link
                href={"/messenger"}
                className="hidden md:flex items-center gap-x-2 justify-between pt-32 cursor-pointer"
              >
                <LuMessagesSquare className="text-blue-500 text-2xl" />
                <p className="text-blue-500 mt-[4px]">Contact</p>
              </Link>
            </div>
            {/* Bottom */}
            <div className="flex flex-col justify-center items-center mt-6 text-gray-600">
              <h1 className="text-4xl font-bold ">{user?.name}</h1>
              <p className="text-center mt-2">
                {user?.location?.city || "Rajshahi"}{" "}
                {user?.location?.country || "Bangladesh"}
              </p>
              <div className="flex justify-around mt-10 gap-6">
                <div className="">
                  <p className="text-center font-bold text-2xl text-gray-600">
                    {user?.followers?.length || "10"}
                  </p>
                  <div className="flex items-center gap-2 text-gray-700 font-semibold text-sm">
                    <p className="text-blue-500 text-lg">
                      <RiUserFollowFill />
                    </p>
                    <p className="hover:text-blue-500 transition-colors duration-200">
                      Followers
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="text-center font-bold text-2xl text-gray-600">
                    {myPost?.length || "10"}
                  </p>
                  <div className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                    <p className="text-green-500 text-lg">
                      <BsFileEarmarkPost />
                    </p>
                    <p className="hover:text-green-500 transition-colors duration-200">
                      Posts
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="text-center font-bold text-2xl text-gray-600">
                    {myEvents?.length || "05"}
                  </p>
                  <p>My Events</p>
                </div>
              </div>
              {/* Button */}
              <Link
                href={"/messenger"}
                className=" mx-auto py-2 px-6 rounded-full text-white font-semibold mt-8"
              >
                <button className="button">Message</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* bottom part of Profile section */}
      <div className="flex flex-col-reverse md:flex-row gap-4 justify-center ">
        <div className="min-w-[400px]">
          <div className="max-w-md mx-start mt-6 bg-white shadow-lg rounded-lg overflow-hidden transform  transition-transform duration-300">
            <div className="p-4">
              <h2 className="text-2xl font-bold text-start text-[--color-secondary]  mb-2">
                My All Events
              </h2>
              <div>
                {eventLoading ? (
                  <Loading></Loading>
                ) : myEvents?.length < 1 ? (
                  <h5 className="font-bold text-center my-8">
                    You Have Not Publish Any Events
                  </h5>
                ) : (
                  myEvents
                    ?.slice(0, 7)
                    ?.map((event) => (
                      <CardForEvents
                        key={event?._id}
                        event={event}
                      ></CardForEvents>
                    ))
                )}
              </div>
            </div>
          </div>
          {/* <div>
                        <LatestNews />
                    </div> */}
        </div>
        <div>
          <RightSide />
        </div>
      </div>
    </>
  );
};

export default OrganizerProfile;
