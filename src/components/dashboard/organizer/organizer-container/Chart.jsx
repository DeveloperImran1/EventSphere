"use client";
import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

// Static data for chart
const staticData = [
  { month: "January", Actual_Sale: 2400, Expected_Sale: 3000 },
  { month: "February", Actual_Sale: 1398, Expected_Sale: 2000 },
  { month: "March", Actual_Sale: 9800, Expected_Sale: 8500 },
  { month: "April", Actual_Sale: 3908, Expected_Sale: 5000 },
  { month: "May", Actual_Sale: 4800, Expected_Sale: 4700 },
  { month: "June", Actual_Sale: 3800, Expected_Sale: 4000 },
  { month: "July", Actual_Sale: 4300, Expected_Sale: 4500 },
  { month: "August", Actual_Sale: 6490, Expected_Sale: 6000 },
  { month: "September", Actual_Sale: 4300, Expected_Sale: 5000 },
  { month: "October", Actual_Sale: 5100, Expected_Sale: 5200 },
  { month: "November", Actual_Sale: 6100, Expected_Sale: 5900 },
  { month: "December", Actual_Sale: 7200, Expected_Sale: 7000 }
];

const Chart = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={staticData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Actual_Sale" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="Expected_Sale" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
      <p className="text-center my-3 text-lg">
        This chart compares your <span className="text-[#82ca9d] font-semibold">Expected Sales </span>
        (anticipated revenue) with <span className="text-[#8884d8] font-semibold">Actual Sales </span>
        (ticket sales revenue) for each month.
      </p>
    </div>
  );
};

export default Chart;


// "use client";
// import React from 'react';
// import {
//   AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
// } from 'recharts';

// const Chart = ({organizerStats}) => {

//   return (
//     <div >
//       <ResponsiveContainer  width="100%"  height={400}>
//       <AreaChart
//         data={organizerStats}
//         margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="month" />
//         <YAxis />
//         <Tooltip />
//         <Area type="monotone" dataKey="Actual_Sale" stroke="#8884d8" fill="#8884d8" />
//         <Area type="monotone" dataKey="Expected_Sale" stroke="#82ca9d" fill="#82ca9d" />
//       </AreaChart>
//     </ResponsiveContainer>
//     <p className=' text-center my-3 text-lg'>This chart compares your <span className=' text-[#82ca9d] font-semibold'>Expected Sales </span>(anticipated revenue) with <span className='text-[#8884d8] font-semibold'>Actual Sales </span>(ticket sales revenue) for each month.</p>
//     </div>
//   );
// };

// export default Chart;
