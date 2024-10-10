'use client'

import React, { useState, useEffect } from "react"
import {DollarSign, Ticket, TrendingUp, TrendingDown, BarChart2,} from "lucide-react"
import {AreaChart,Area, XAxis, YAxis, Tooltip,ResponsiveContainer,} from "recharts"
import { useSpring, animated } from "react-spring"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Badge from "@/components/ui/Badge"

// Assuming these components exist in your project
import ProfitRow from "./ProfitRow"


const events = [
  {
    id: 1,
    name: "Summer Music Festival",
    photo: "/placeholder.svg?height=100&width=100",
    totalSell: 15000,
    totalRevenue: 45000,
    trend: "up",
    percentage: 12,
    monthlyData: [
      { month: "jun", sales: 1000 },
      { month: "july", sales: 1200 },
      { month: "Aug", sales: 1500 },
      { month: "Sep", sales: 1800 },
      { month: "Oct", sales: 2000 },
    ],
  },
  {
    id: 2,
    name: "Tech Conference 2024",
    photo: "/placeholder.svg?height=100&width=100",
    totalSell: 5000,
    totalRevenue: 25000,
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
    totalRevenue: 32000,
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
    totalRevenue: 15000,
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
//SUMMARY CARD //
const SummaryCard = ({ title, value, icon: Icon,  isCurrency = false }) => (
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
      <Icon className="w-8 h-10  text-fuchsia-500 " />
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
  <div className="bg-white/10 backdrop-blur-lg text-white rounded-lg p-2 md:p-6 shadow-lg">
  <div className="mb-2">
    <h2 className="text-3xl text-center my-4 text-white font-serif " >{title}</h2>
  </div>
  <div>
    <div className="w-full h-52">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>

          <Area
            type="monotone"
            dataKey="sales"
            stroke="#A855F7" // Tailwind purple-500 color
  fill="rgba(168, 85, 247, 0.6)" // Purple color with 30% opacity
          />
          <XAxis dataKey="month" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip contentStyle={{ backgroundColor: 'white', border: 'none' }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
</div>

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

 {/*Monthly seels trend and event perfomance  */}
      <div className="grid gap-8 max-w-7xl mx-auto md:grid-cols-2">
        <ChartCard 
          title="Monthly Sales Trend" 
          data={selectedEvent.monthlyData} 
          dataKey="sales" 
          color="#4ade80" 
        />
        <Card className="bg-white/10 P-2 md:p-4  backdrop-blur-lg border-none text-white">
          {/* <CardHeader>
            <CardTitle className="text-3xl text-center  text-white font-serif">Event Performance</CardTitle>
          </CardHeader> */}
    <h2 className="text-3xl text-center my-4 text-white font-serif " >Event Performance</h2>

          <CardContent>
            <div className="space-y-4">
              {events.map((event) => (
                <Button
                  key={event.id}
                  className={`w-full hover:bg-purple-400 justify-between ${selectedEvent.id === event.id ? 'bg-purple-400' : 'bg-gray-800'}`}
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