"use client"

import React, { useState } from "react"
import {
  DollarSign,
  Ticket,
  TrendingUp,
  TrendingDown,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts"
import { useSpring, animated } from "react-spring"
import { Card, CardContent,CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import  Badge  from "@/components/ui/Badge"
import ProfitRow from "./ProfitRow"


const events = [
  {
    id: 1,
    name: "Summer Music Festival",
    photo: "/placeholder.svg?height=100&width=100",
    totalSell: 15000,
    totalRevenue: 450000,
    trend: "up",
    percentage: 12,
    monthlyData: [
      { month: "Jan", sales: 1000 },
      { month: "Feb", sales: 1200 },
      { month: "Mar", sales: 1500 },
      { month: "Apr", sales: 1800 },
      { month: "May", sales: 2000 },
    ],
  },
  {
    id: 2,
    name: "Tech Conference 2024",
    photo: "/placeholder.svg?height=100&width=100",
    totalSell: 5000,
    totalRevenue: 250000,
    trend: "down",
    percentage: 5,
    monthlyData: [
      { month: "Jan", sales: 500 },
      { month: "Feb", sales: 450 },
      { month: "Mar", sales: 400 },
      { month: "Apr", sales: 350 },
      { month: "May", sales: 300 },
    ],
  },
  {
    id: 3,
    name: "Food & Wine Expo",
    photo: "/placeholder.svg?height=100&width=100",
    totalSell: 8000,
    totalRevenue: 320000,
    trend: "up",
    percentage: 8,
    monthlyData: [
      { month: "Jan", sales: 600 },
      { month: "Feb", sales: 700 },
      { month: "Mar", sales: 800 },
      { month: "Apr", sales: 900 },
      { month: "May", sales: 1000 },
    ],
  },
  {
    id: 4,
    name: "Tech Conference 2024",
    photo: "/placeholder.svg?height=100&width=100",
    totalSell: 5000,
    totalRevenue: 250000,
    trend: "down",
    percentage: 5,
    monthlyData: [
      { month: "Jan", sales: 500 },
      { month: "Feb", sales: 450 },
      { month: "Mar", sales: 400 },
      { month: "Apr", sales: 350 },
      { month: "May", sales: 300 },
    ],
  },
]

const totalSellAmount = events.reduce((sum, event) => sum + event.totalRevenue, 0)
const totalTicketsSold = events.reduce((sum, event) => sum + event.totalSell, 0)

const AnimatedNumber = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  })
  return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>
}

const SummaryCard = ({ title, value, icon: Icon, color }) => (
  <Card className={`bg-gradient-to-br ${color} text-white`}>
    <CardHeader className="flex flex-row items-center gap-3  space-y-0 pb-2">
      <CardTitle className="text-xl  font-medium">{title}</CardTitle>
      <Icon className="h-8 w-8   text-white/70" />
    </CardHeader>
    <CardContent>
      <div className="text-4xl  font-bold">
        <AnimatedNumber n={parseFloat(value.replace(/[^0-9.-]+/g, ""))} />
        {value.includes("$") && "$"}
     
      </div>
    </CardContent>
  </Card>
)

export default function Component() {
  return (
    <div className=" px-4 py-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
      <h1 className="text-4xl font-bold  text-center font-serif text-amber-100 ">Profit Dashboard</h1>
{/*  2 card */}
      <div className="grid my-10 gap-16 max-w-4xl mx-auto md:grid-cols-2 ">
        <SummaryCard
          title="Total Sell Amount"
          value={`${totalSellAmount.toLocaleString()}$`}
          icon={DollarSign}
          color="from-green-400 to-emerald-600"
        />
        <SummaryCard
          title="Overall Ticket Sales"
          value={totalTicketsSold.toLocaleString()}
          icon={Ticket}
          color="from-blue-400 to-indigo-600"
        />
      </div>

      <Card className=" bg-white/10 backdrop-blur-lg border-none text-white">
     
        <CardContent>
          <div className="rounded-md border overflow-x-auto  border-gray-700 ">
            <table className="w-full  mt-4 caption-bottom text-sm">
              <thead className="border-b-2  text-lg border-amber-100">
                <tr className="bg-gray-800/50">
                  <th className="h-12 md:pl-10 px-4 text-left align-middle font-medium text-yellow-50">Event</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-yellow-50">Total Sell</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-yellow-50">Total Revenue</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-yellow-50">Trend</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-yellow-50">Change</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-yellow-50">Monthly Chart</th>
                </tr>
              </thead>
              <tbody className="divide-y  divide-gray-600">
                {events.map((event) => (
                  <ProfitRow key={event.id} event={event} />
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

