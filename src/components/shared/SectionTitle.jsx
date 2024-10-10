"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'

export default function SectionTitle({ title, description, subTitle }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  const subTitleControls = useAnimation()
  const titleControls = useAnimation()

  useEffect(() => {
    const sequence = async () => {
      await subTitleControls.start({
        background: [
          "linear-gradient(45deg, #3b82f6, #60a5fa)",
          "linear-gradient(45deg, #60a5fa, #93c5fd)",
          "linear-gradient(45deg, #93c5fd, #3b82f6)"
        ],
        transition: { duration: 2, repeat: Infinity }
      })
    }
    sequence()
  }, [subTitleControls])

  useEffect(() => {
    const titleAnimation = async () => {
      await titleControls.start(i => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1 }
      }))
    }
    titleAnimation()
  }, [titleControls])

  const letters = title.split('')

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, y, scale }}
      className="mx-auto text-center max-w-4xl px-4 py-10"
    >
      <motion.div className="mb-6">
        <motion.span 
          className="inline-block py-2 px-4 text-white text-sm font-semibold rounded-full shadow-lg cursor-pointer"
          animate={subTitleControls}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {subTitle}
        </motion.span>
      </motion.div>
      <motion.h2
        className="text-3xl md:text-4xl font-serif lg:text-5xl font-bold mb-6 relative overflow-hidden"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            animate={titleControls}
            initial={{ opacity: 0, y: 50 }}
            className="inline-block"
            style={{
              background: "linear-gradient(45deg, #3b82f6, #60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
            whileHover={{
              scale: 1.2,
              rotate: [0, 5, -5, 0],
              transition: { duration: 0.6 }
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto relative"
      >
        {description}
      </motion.p>
      <motion.div 
        className="mt-8 flex justify-center space-x-2"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-3 h-3 rounded-full bg-blue-500"
            animate={{ scale: [0, 1, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.5, backgroundColor: "#60a5fa" }}
          />
        ))}
      </motion.div>
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}