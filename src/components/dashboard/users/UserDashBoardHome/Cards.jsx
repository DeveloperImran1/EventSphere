import Loading from "@/components/shared/LoadingSpiner/Loading";
import useAuth from "@/hooks/useAuth";
import useMyAllPost from "@/hooks/useMyAllPost";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { RiUserFollowFill } from "react-icons/ri";
import toast, { Toaster } from 'react-hot-toast';
import Link from "next/link";

const Cards = () => {
  const [isFollowed, setIsFollowed] = useState(false)
  const pathname = usePathname();
  const lastPathSegment = pathname?.split('/').filter(Boolean).pop();

  // current User er informaion get korbo
  const user = useAuth();
  const currentUser = user?.data;
  console.log(currentUser)

  // dynaic user profile er email dia dynamic user er profile info get
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["user", lastPathSegment],
    queryFn: () =>
      fetch(`https://event-sphare-server.vercel.app/user/${lastPathSegment}`).then((res) =>
        res.json()
      ),
  });


  // dynaic user profile er email dia dynamic user er all post get
  const { data: myPosts } = useQuery({
    queryKey: ["myPost", lastPathSegment],
    queryFn: () =>
      fetch(`https://event-sphare-server.vercel.app/getUserPosts/${lastPathSegment}`).then((res) =>
        res.json()
      ),
  });

  const dynamicUserFollower = data?.followers;
  const currentUserFollower = currentUser?.followers;
  // console.log(dynamicUserFollower, currentUserFollower)
  // console.log(data, currentUser)
  const handleFollow = async () => {

    if(isFollowed){
      setIsFollowed(false)
      return  toast.success('Unfollowed!');
    }
    const updateFollowArrayDynamicUser = [...dynamicUserFollower, currentUser?.email]
    const updateFollowArrayCurrentuser = [...currentUserFollower, data?.email]
    const addedFollower = {
      dynamicUserEmail: data?.email,
      currentUserEmail: currentUser?.email,
      updateFollowArrayDynamicUser,
      updateFollowArrayCurrentuser
    }
    console.log("Updated info", addedFollower)

    try {
      const result = await axios.put("https://event-sphare-server.vercel.app/userAddedFollower", addedFollower);
      console.log(result);

      if (result?.data?.modifiedCount) {
        toast.success('Successfully Followed!');
        setIsFollowed(true)
        refetch()
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  //isFollowed this value collect
  useEffect(() => {
    const exist = data?.followers?.find(email => email === currentUser?.email)
    if (exist) {
      setIsFollowed(true)
    }
  }, [data])


  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className="max-w-md lg:max-w-xl mt-4 mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-6 space-y-4 lg:space-y-0">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1b85db]">{data?.followers?.length || 0}</h2>
          <h2 className="text-base lg:text-lg font-semibold text-gray-700">Followers</h2>
        </div>
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1b85db]">{myPosts?.length || 0}</h2>
          <h2 className="text-base lg:text-lg font-semibold text-gray-700">Total Posts</h2>
        </div>
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1b85db] ">{data?.review?.length || 0}</h2>
          <h2 className="text-base lg:text-lg font-semibold text-gray-700">Reviews</h2>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 text-white">
        <button onClick={() => handleFollow()} className="w-full sm:w-auto ml-4 flex items-center gap-2 text-xl px-3 py-2 rounded-md bg-[#1b85db] font-bold "><RiUserFollowFill />{isFollowed ? 'Unfollow': 'Follow'}</button>

        <Link href="/messenger" className="w-full sm:w-auto ml-4 flex items-center gap-2 text-xl px-3 py-2 rounded-md bg-[#1b85db] font-bold "><AiFillMessage /> Message</Link>

      </div>
    </div>
  );
};

export default Cards;
