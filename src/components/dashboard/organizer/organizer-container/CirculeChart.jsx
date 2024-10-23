"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";


const CirculeChart = ({ PieChartData }) => {


  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="12"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    );
  };
  const COLORS = ["#4460ff", "#00C49F"];
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      <div className="">
        <div className="w-full min-h-[70vh] flex flex-col justify-center items-center ">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={PieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                label={renderCustomizedLabel}
              >
                {PieChartData?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="">
            <div className="flex flex-col md:flex-row justify-center items-center pt-5">
              <div className="flex justify-center items-center md:mr-12">
                <p className="text-lg mr-4">Your Total Events</p>
                <div className="w-16 h-3 rounded-sm bg-[#1b85db]"></div>
              </div>

              <div className="flex justify-center items-center">
                <p className="text-lg mr-4">Your Sale Events</p>
                <div className="w-16 h-3 rounded-sm bg-[#00C49F]"></div>
              </div>
            </div>
            <hr  className=" mt-3 mx-5"/>
            <p className=" my-2 mx-8 text-lg">This pie chart shows the proportion of your Total Events compared to Sale Events</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CirculeChart;
