"use client"; // Add this at the top


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Users, Smile } from "lucide-react"
import { motion } from "framer-motion"

export default function EventPricing() {
  return (
    <section className="w-full py-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <motion.h2 
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            Event Pricing
          </motion.h2>
          <motion.p 
            className="max-w-[600px] text-gray-200 mt-4 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            Here you can explore various pricing options for our event’s tickets and select the one that suits you best.
          </motion.p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-3xl" style={{ clipPath: 'polygon(0 20%, 100% 0%, 100% 100%, 0% 100%)' }} />
          <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-20 pb-10 px-6">
            <PricingCard
              icon={<Smile className="h-6 w-6 text-indigo-500" />}
              title="Kids"
              price="$35"
              features={["Visiting Santa", "Dining", "Ice Skating", "Christmas Tree"]}
            />
            <PricingCard
              icon={<User className="h-6 w-6 text-indigo-500" />}
              title="Adults"
              price="$47"
              features={["Ice Zone", "Christmas Shopping", "Workshops", "Live Music"]}
            />
            <PricingCard
              icon={<Users className="h-6 w-6 text-indigo-500" />}
              title="Family"
              price="$55"
              features={["Chat with Santa", "Christmas Decorations", "Ice Carvers", "Raffle"]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function PricingCard({ icon, title, price, features }) {
  return (
    <motion.div 
      className="hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white/80 rounded-xl shadow-lg backdrop-blur-md p-6 hover:shadow-xl">
        <CardHeader className="p-6 text-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 mb-4">
            {icon}
          </div>
          <CardTitle className="text-2xl font-bold text-indigo-700">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0 space-y-4">
          <p className="text-3xl font-bold text-indigo-500">{price}</p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 mr-2 text-green-500"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-purple-500 hover:to-pink-500">BOOK NOW</Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
