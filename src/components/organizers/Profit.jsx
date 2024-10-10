'use client'

import React, { useState, useEffect } from "react"
import {
  DollarSign,
  Ticket,
  TrendingUp,
  TrendingDown,
  BarChart2,
} from "lucide-react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { useSpring, animated } from "react-spring"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Badge from "@/components/ui/Badge"

// Assuming these components exist in your project
import ProfitRow from "./ProfitRow"
import SectionTitle from "../shared/SectionTitle"

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
      { month: "jun", sales: 1000 },
      { month: "july", sales: 1200 },
      { month: "Aug", sales: 1500 },
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
      { month: "jun", sales: 500 },
      { month: "july", sales: 450 },
      { month: "Aug", sales: 400 },
      { month: "Sep", sales: 350 },
      { month: "Oct", sales: 300 },
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
      { month: "jun", sales: 600 },
      { month: "july", sales: 700 },
      { month: "Aug", sales: 800 },
      { month: "Sep", sales: 900 },
      { month: "Oct", sales: 1000 },
    ],
  },
  {
    id: 4,
    name: "Art Gallery Opening",
    photo: "/placeholder.svg?height=100&width=100",
    totalSell: 3000,
    totalRevenue: 150000,
    trend: "up",
    percentage: 3,
    monthlyData: [
      { month: "jun", sales: 200 },
      { month: "july", sales: 250 },
      { month: "Aug", sales: 300 },
      { month: "Sep", sales: 350 },
      { month: "Oct", sales: 400 },
    ],
  },
]

const totalSellAmount = events.reduce((sum, event) => sum + event.totalRevenue, 0)
const totalTicketsSold = events.reduce((sum, event) => sum + event.totalSell, 0)

const AnimatedNumber = ({ n }) => {
  const [key, setKey] = useState(0)
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
    reset: true,
    key: key,
  })

  useEffect(() => {
    setKey(prevKey => prevKey + 1)
  }, [n])

  return <animated.span>{number.to(n => n.toFixed(0))}</animated.span>
}

const SummaryCard = ({ title, value, icon: Icon, gradient, isCurrency = false }) => (
  <Card  className='bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg text-white text-center transform transition-transform duration-300 hover:scale-105'>
    <div className="absolute inset-0 opacity-50 mix-blend-overlay">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#smallGrid)" />
      </svg>
    </div>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-xl font-medium">{title}</CardTitle>
      <Icon className="w-8 h-10  text-fuchsia-400 " />
    </CardHeader>
    <CardContent>
      <div className="text-4xl font-bold">
        {isCurrency && "$"}
        <AnimatedNumber n={value} />
      </div>
    </CardContent>
  </Card>
)

const ChartCard = ({ title, data, dataKey, color }) => (
  <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
    <CardHeader>
      <CardTitle className="text-lg font-medium">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id={`color${color}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={color} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey={dataKey} stroke={color} fillOpacity={1} fill={`url(#color${color})`} />
          <XAxis dataKey="month" stroke="#ffffff60" />
          <YAxis stroke="#ffffff60" />
          <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
        </AreaChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
)

export default function ProfitPage() {
  const [selectedEvent, setSelectedEvent] = useState(events[0])

  return (
    <div className="px-4 py-10 text-white min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-sky-900">
      
      <div className="grid my-10 gap-8 max-w-5xl mx-auto md:grid-cols-2 lg:grid-cols-4">
        <SummaryCard
          title="Total Revenue"
          value={totalSellAmount}
          icon={DollarSign}
          gradient="from-green-400 to-emerald-600"
          isCurrency
        />
        <SummaryCard
          title="Tickets Sold"
          value={totalTicketsSold}
          icon={Ticket}
          gradient="from-blue-400 to-indigo-600"
        />
        <SummaryCard
          title="Avg. Ticket Price"
          value={Math.round(totalSellAmount / totalTicketsSold)}
          icon={BarChart2}
          gradient="from-yellow-400 to-orange-600"
          isCurrency
        />
        <SummaryCard
          title="Top Event Revenue"
          value={Math.max(...events.map(e => e.totalRevenue))}
          icon={TrendingUp}
          gradient="from-pink-400 to-rose-600"
          isCurrency
        />
      </div>
      <div className="grid gap-8 max-w-7xl mx-auto md:grid-cols-2">
        <ChartCard 
          title="Monthly Sales Trend" 
          data={selectedEvent.monthlyData} 
          dataKey="sales" 
          color="#4ade80" 
        />
        <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Event Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.map((event) => (
                <Button
                  key={event.id}
                  className={`w-full justify-between ${selectedEvent.id === event.id ? 'bg-violet-700' : 'bg-gray-700'}`}
                  onClick={() => setSelectedEvent(event)}
                >
                  <span>{event.name}</span>
                  <Badge variant={event.trend === 'up' ? 'success' : 'destructive'}>
                    {event.trend === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                    {event.percentage}%
                  </Badge>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8 bg-white/10 backdrop-blur-lg border-none text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Event Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-x-auto border-gray-700">
            <table className="w-full mt-4 caption-bottom text-sm">
              <thead className="border-b-2 text-lg border-amber-100">
                <tr className="bg-gray-800/50">
                  <th className="h-12 md:pl-10 px-4 text-left align-middle font-medium text-yellow-50">Event</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-yellow-50">Total Sell</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-yellow-50">Total Revenue</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-yellow-50">Trend</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-yellow-50">Change</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-yellow-50">Monthly Chart</th>
                </tr>
              </thead>
              <tbody className="">
                {events.map((event ,index) => (
                  <ProfitRow key={event.id} event={event} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}