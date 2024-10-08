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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import  Badge  from "@/components/ui/Badge"


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
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-white/70" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">
        <AnimatedNumber n={parseFloat(value.replace(/[^0-9.-]+/g, ""))} />
        {value.includes("$") && " $"}
      </div>
    </CardContent>
  </Card>
)

const EventRow = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const expandAnimation = useSpring({
    height: isExpanded ? 240 : 0,
    opacity: isExpanded ? 1 : 0,
    config: { tension: 300, friction: 20 },
  })

  return (
    <React.Fragment>
      <tr className="hover:bg-muted/50 transition-colors">
        <td className="p-4">
          <div className="flex items-center space-x-4">
            
            <div>
              <p className="text-sm font-medium leading-none">{event.name}</p>
              <p className="text-sm text-muted-foreground">ID: {event.id}</p>
            </div>
          </div>
        </td>
        <td className="p-4">
          <div className="text-sm">{event.totalSell.toLocaleString()}</div>
        </td>
        <td className="p-4">
          <div className="text-sm">${event.totalRevenue.toLocaleString()}</div>
        </td>
        <td className="p-4">
          <ResponsiveContainer width={100} height={40}>
            <BarChart data={[{ value: event.totalSell }]}>
              <Bar
                dataKey="value"
                fill={event.trend === "up" ?"#22c55e" : "#ef4444"}
              />
            </BarChart>
          </ResponsiveContainer>
        </td>
        <td className="p-4">
          <Badge variant={event.trend === "up" ? "success" : "danger"}>
            {event.trend === "up" ? (
              <TrendingUp className="h-4 w-4 mr-1" />
            ) : (
              <TrendingDown className="h-4 w-4 mr-1" />
            )}
            {event.percentage}%
          </Badge>
        </td>
        <td className="p-4">
          <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </td>
      </tr>
      <tr>
        <td colSpan={6} className="p-0">
          <animated.div style={expandAnimation} className="overflow-hidden">
            <div className="p-4 bg-muted/50">
              <h4 className="text-sm font-semibold mb-2">Monthly Sales Trend</h4>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={event.monthlyData}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="sales" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorSales)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </animated.div>
        </td>
      </tr>
    </React.Fragment>
  )
}

export default function Component() {
  return (
    <div className=" px-4 py-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Profit Dashboard</h1>

      <div className="grid gap-6 container mx-auto md:grid-cols-2 lg:grid-cols-2">
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

      <Card className="mt-8 bg-white/10 backdrop-blur-lg border-none text-white">
        <CardHeader>
          <CardTitle className="text-2xl">Event Performance</CardTitle>
          <CardDescription className="text-gray-300">A detailed breakdown of each event`s performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-gray-700 overflow-hidden">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b border-gray-700">
                <tr className="bg-gray-800/50">
                  <th className="h-12 px-4 text-left align-middle font-medium text-yellow-50">Event</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-yellow-50">Total Sell</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-yellow-50">Total Revenue</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-yellow-50">Trend</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-yellow-50">Change</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-yellow-50">Monthly Chart</th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {events.map((event) => (
                  <EventRow key={event.id} event={event} />
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}