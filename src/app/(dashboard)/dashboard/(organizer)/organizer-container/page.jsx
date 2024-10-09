import Card from "@/components/dashboard/organizer/organizer-container/Card";
import Chart from "@/components/dashboard/organizer/organizer-container/Chart";
import CirculeChart from "@/components/dashboard/organizer/organizer-container/CirculeChart";
import Profile from "@/components/dashboard/organizer/organizer-container/Profile";
import StatsChart from "@/components/dashboard/organizer/organizer-container/StatsChart";
import Subscriber from "@/components/dashboard/organizer/organizer-container/Suscriber";
import Table from "@/components/dashboard/organizer/organizer-container/Table";
import Top from "@/components/dashboard/organizer/organizer-container/Top";
import React from "react";

const OrganizerContainer = () => {
  return (
    <div>
      <div>
        <Profile />
      </div>
      <div>
        <Card />
      </div>
      <div className="mt-8 flex flex-col-reverse md:flex-row gap-4">
        <div className="flex-1">
          <Chart />
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
    <Table/>
</div>

    </div>
  );
};

export default OrganizerContainer;
