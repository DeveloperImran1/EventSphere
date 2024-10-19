"use client";
import Card from "@/components/dashboard/organizer/organizer-container/Card";
import Chart from "@/components/dashboard/organizer/organizer-container/Chart";
import CirculeChart from "@/components/dashboard/organizer/organizer-container/CirculeChart";
import Profile from "@/components/dashboard/organizer/organizer-container/Profile";
import StatsChart from "@/components/dashboard/organizer/organizer-container/StatsChart";
import Subscriber from "@/components/dashboard/organizer/organizer-container/Suscriber";
import Table from "@/components/dashboard/organizer/organizer-container/Table";
import Top from "@/components/dashboard/organizer/organizer-container/Top";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React from "react";

const OrganizerContainer = () => {

  const session = useSession();
  console.log("sessin is ", session)
  const { data } = useQuery({
    queryKey: ["organizer-orders", session?.data?.user?.email],
    queryFn: () =>
      // fetch(`http://localhost:9000/organizer-orders/${session?.data?.user?.email}`).then((res) =>
      fetch(`http://localhost:9000/ordersByGmail/${session?.data?.user?.email}`).then((res) =>
        res.json()
      ),
  });
  console.log(data);
  return (
    <div>
      <div>
        <Profile />
      </div>
      <div>
        <Card data={data} />
      </div>
      <div className="mt-8 flex flex-col-reverse md:flex-row gap-4">
        <div className="flex-1">
          <Chart />
        </div>
        <div className="flex-1">
          <CirculeChart />
        </div>
      </div>
      <div className="mt-8 flex flex-col-reverse md:flex-row gap-4 p-4">
        <div className="flex-1">
          <Top />
        </div>
        <div className="flex-1">
          <StatsChart />
        </div>
        <div className="flex-1">
          <Subscriber />
        </div>
      </div>
      <div className="mt-8">
        <Table data={data} />
      </div>

    </div>
  );
};

export default OrganizerContainer;
