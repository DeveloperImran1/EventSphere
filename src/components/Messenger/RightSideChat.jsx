"use client"
import { HiDotsHorizontal, HiGift } from "react-icons/hi"
import { IoSearch } from "react-icons/io5";
import React from 'react';
import Image from "next/image";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import SuggestFollowing from "../CommunityPage/SuggestFollowing";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MyFollower from "../CommunityPage/MyFollower";
import Loading from "../shared/LoadingSpiner/Loading";
import Link from "next/link";
// Function to fetch user data
const fetchUserData = async () => {
  const response = await axios.get('https://event-sphare-server.vercel.app/user');
  return response.data;
};

const RightSideChat = ({ selectedUser }) => {
  const axiosPublic = useAxiosPublic()

  // Use TanStack Query to fetch user data
  const { data: userData = [], isLoading, error, refetch } = useQuery({
    queryKey: ['userData'],
    queryFn: fetchUserData,
  });
  console.log("userData", userData);
  console.log("selectedUser", selectedUser);


  if (isLoading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }



  return (
    <div className="box-border h-[calc(100vh-64px)] pt-8 border p-4">
      <div className=" flex  pb-2  flex-col  justify-center items-center ">
        <Image src={selectedUser?.image || "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"}
          width={50} height={50} alt="avatar"
          className=" rounded-full h-[120px] w-[120px] " />

        <p className=" font-bold text-black">{selectedUser?.name}</p>

      </div>
      <div className=" flex items-center justify-center gap-2  text-sm mx-10 cursor-pointer">
        {
          selectedUser?.email ?  <Link href={`/dashboard/user-profile/${selectedUser?.email}`}>
          <p className="text-white font-medium bg-blue-600 px-5 py-1 rounded-full">Profile</p>
        </Link> :  <Link href="#">
          <p className="text-white font-medium bg-blue-600 px-5 py-1 rounded-full">Profile</p>
        </Link>
        }
       
      </div>
      
      <MyFollower userData={userData} refetch={refetch} />
      {/* <SuggestFollowing userData={userData} refetch={refetch} /> */}
    </div>
  )
}

export default RightSideChat