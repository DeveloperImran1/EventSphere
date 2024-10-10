
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

import { Button } from "@/components/ui/button"
import  Badge  from "@/components/ui/Badge"

// EVENT TABLE BODY 


const ProfitRow  = ({ event }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const expandAnimation = useSpring({
      height: isExpanded ? 240 : 0,
      opacity: isExpanded ? 1 : 0,
      config: { tension: 300, friction: 20 },
    })
  
    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="bg-white text-gray-900 p-2 rounded shadow">
            <p className="font-semibold">{`${label}`}</p>
            <p>{`Sales: ${payload[0].value}`}</p>
          </div>
        )
      }
      return null
    }
  
    return (
      <React.Fragment>
        <tr className="hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.04] transition-all duration-300 ease-in-out transform-gpu">
          <td className="md:pl-10 p-2">
            <div className="flex items-center space-x-4">
              <div>
                <p className="text-sm text-white font-medium leading-none">{event.name}</p>
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
                  fill={event.trend === "up" ? "#22c55e" : "#ef4444"}
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
              <div className="p-4 mb-4 bg-muted/50">
                <h4 className="text-base font-semibold mb-2">Monthly Sales Trend</h4>
                <ResponsiveContainer width="100%" height={170}>
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
                    <Tooltip content={<CustomTooltip />} />
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

  export default ProfitRow;

