'use client'



import { useState, useEffect } from 'react'


import './Banner.css'

import CercleButton from '../shared/CercleBuuton/Button'
import GiftCardDesign from './GiftCard/GiftCardDesign'
import Link from 'next/link'
const festiveEmojis = ['🎄', '🎅', '🎁', '❄️', '⛄', '🦌', '🔔', '🕯️', '🎶', '🍪', '🎉', '🥂', '🧦', '🕎', '🥳', '🎇'];

export default function ChristmasPromo() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })



  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const christmas = new Date(now.getFullYear(), 11, 25)
      if (now > christmas) christmas.setFullYear(christmas.getFullYear() + 1)
      const difference = christmas.getTime() - now.getTime()

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])


  const handlePlayClick = () => {
    setShowModal(true)
    setIsPlaying(true)
  }


  const handleCloseModal = () => {
    setShowModal(false)
    setIsPlaying(false)
  }

  return (
    <div className=" clipPathSection1 h-full md:min-h-[600px]  relative">
      <div className="absolute inset-0 backdrop-blur-sm bg-opacity-50 z-0"></div> {/* Add blur effect background */}
      <div className='container  mx-auto grid grid-cols-1 md:grid-cols-2'>

        <div className=" mt-3  text-white flex items-center  relative ">
          <div className="relative  z-10   pt-10 md:pt-20 pl-2">
            <h4 className="text-[18px] lg:text-xl  font-poppins mb-2">December 24-26, 2024</h4>
            <h1 className="md:text-4xl lg:5xl font-serif  md:font-extrabold mb-6">Christmas Day</h1>
            <div className="flex mb-6">
              <div className="grid  grid-cols-4  gap-2 md:gap-6">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div
                    key={unit}
                    className="bg-white bg-opacity-10 backdrop-blur-md p-2 rounded-lg shadow-lg text-white text-center transform transition-transform duration-300 hover:scale-105"
                  >
                    <span className="md:text-5xl text-3xl font-bold block">{value}</span>
                    <span className="text-sm uppercase">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className=" flex gap-1 md:gap-4 ">
              <Link className='button' href="/events">All Events</Link>
              <Link className='button' href="/events">Explore More</Link>


            </div>
          </div>
        </div>
        <div className=" relative py-10 ">


          <div className="text-center relative mt-12">
            <h2 className="text-4xl font-bold text-white font-serif">Exclusive Event Gift Cards</h2>
            <p className="text-slate-200 mt-2">Choose the perfect card to unlock amazing benefits and enjoy premium experiences at our events.</p>
          </div>


          {/*   Gift card       */}
         <GiftCardDesign></GiftCardDesign>
        </div> 


      </div>
    </div>
  )
}