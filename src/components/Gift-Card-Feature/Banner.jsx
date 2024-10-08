'use client'



import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import YouTube from 'react-youtube'

import { FaPlayCircle } from 'react-icons/fa'
import './Banner.css'
import Image from 'next/image'
const festiveEmojis = ['🎄', '🎅', '🎁', '❄️', '⛄', '🦌', '🔔', '🕯️', '🎶', '🍪', '🎉', '🥂', '🧦', '🕎', '🥳', '🎇'];


export default function ChristmasPromo() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isPlaying, setIsPlaying] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const videoId = 'ncjuqj0WN6s'

  const opts = {
    width: '600',
    height: '400',
    playerVars: {
      autoplay: 1,
    },
  }

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
    <div className="flex flex-col  bg-[rgb(15,31,61)]    md:flex-row ">
      <div className="w-full clipPathSection1 md:w-1/2  bg-red-500 text-white  relative overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0 opacity-70">
          {festiveEmojis.map((emoji, index) => (
            <span
              key={index}
              className="absolute text-4xl animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
        <div className="relative z-10  p-20">
          <h4 className="text-xl  font-poppins  mb-2">December 24-26, 2024</h4>
          <h1 className="md:text-5xl  font-serif   md:font-extrabold mb-6">Christmas Day</h1>
         <div className="flex mb-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div 
            key={unit} 
            className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg shadow-lg text-white text-center transform transition-transform duration-300 hover:scale-105"
          >
            <span className="text-5xl font-bold block">{value}</span>
            <span className="text-sm uppercase">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
          </div>
        ))}
      </div>
    </div>
          <div className=" md:flex  gap-4 ">
            <Button variant="secondary" className="bg-white md:text-lg font-medium text-red-500 hover:bg-red-100">BOOK NOW</Button>
            <Button variant="outline" className="border-black md:text-xl rounded-3xl   font-medium text-white font-mono uppercase bg-red-500">Explore</Button>

          </div>
        </div>
      </div>
      <div className="w-full clipPathSection2   md:w-1/2   flex items-center justify-center relative">
        <div className="relative"> 
        <Image height={675} width={1200}
            src="https://i.ibb.co.com/kB2XJkB/people-taking-part-high-protocol-event.jpg"
            alt="Concertgoers Watching Majestic Concert"
            onClick={handlePlayClick}
          />
          <Button 
            onClick={handlePlayClick} 
            className="absolute inset-0  w-14  flex items-center justify-center bg-red-500 text-white rounded-full mx-auto my-auto"
          >
            <FaPlayCircle className="text-4xl" />
          </Button>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white p-2 relative">
            <button onClick={handleCloseModal} className="absolute text-3xl top-4 right-4 text-red-500">✖</button>
            {isPlaying && (
              <YouTube
                videoId={videoId}
                opts={opts}
                onEnd={handleCloseModal}
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}