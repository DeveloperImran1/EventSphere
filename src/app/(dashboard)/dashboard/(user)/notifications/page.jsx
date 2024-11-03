"use client"
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import { IoTimeOutline } from "react-icons/io5";
import { formatDistanceToNow } from 'date-fns';

const Notifications = () => {
  const axiosPublic = useAxiosPublic()
  const session = useSession()

  const { data: notificationsAll = {}, isLoading, refetch } = useQuery({
    queryKey: ['notifications'],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/user/${session?.data?.user?.email}`);
      return data;
    },
    keepPreviousData: true,
  });
  const sortedNotifications = notificationsAll?.notifications?.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return (
    <div className="h-screen w-[97%] p-5">
      <h2 className="font-bold text-xl md:text-2xl text-black text-start mb-7">
        Notifications
      </h2>
      {/* Notifications Box */}
      <div className="space-y-3">
        {sortedNotifications?.map((notification) => (
          <Link href={notification?.route} key={notification?._id} >
            <div className="shadow-xl p-5 rounded-xl ">
              <h5>{notification?.message}</h5>
              <div className="text-xs text-blue-600 dark:text-blue-500">
                {notification?.createdAt && formatDistanceToNow(new Date(notification?.createdAt))} ago
              </div>
           
          </div>
          </Link>
        ))}
    </div>
    </div >
  );
};

export default Notifications;
