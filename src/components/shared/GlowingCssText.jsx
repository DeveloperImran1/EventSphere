'use client'

import { useState, useEffect } from 'react'

export default function GlowingCssText({ text }) {
  const [shadowIntensity, setShadowIntensity] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setShadowIntensity((prev) => (prev + 1) % 5)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  const getTextShadow = () => {
    const shadows = [5, 10, 20].map((size, index) => {
      const intensity = Math.max(0, shadowIntensity - index)
      return `0px 0px ${size}px rgba(0, 0, 255, ${intensity * 0.6})`
    })
    return shadows.join(', ')
  }

  return (
    <h1
    className='text-2xl  md:text-4xl font-serif font-bold text-slate-50'
      style={{
    
        textShadow: getTextShadow(),
        transition: 'text-shadow .2s ease',
       
      }}
    >
      {text}
    </h1>
  )
}