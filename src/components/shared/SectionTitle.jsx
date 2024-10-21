"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion'

export default function SectionTitle({ title = '', description, subTitle }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  const subTitleControls = useAnimation()

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

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, y, scale }}
      className="mx-auto text-center container px-2"
    >
      <motion.div className="">
    
      </motion.div>
      <div className="words word-1 my-4 text-2xl font-bold md:text-5xl ">
        {(title || '').split('').map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </div>
      <motion.p
        className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto relative mb-[40px] "
      >
        {description}
      </motion.p>
 {/* loading  */}
      {/* <motion.div 
        className=" my-6 flex justify-center space-x-2"
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
      </motion.div> */}

     
      <style jsx>{`
        .words {
          color:  rgb(16, 160, 185);
    
         
          font-family: "Archivo Black", sans-serif;
       
        }

        .words span {
         
          display: inline-block;
          animation: move 3s ease-in-out infinite;
        }

        @keyframes move {
          0% {
            transform: translate(-30%, 0);
          }
          50% {
            text-shadow: 0 25px 50px rgba(0, 0, 0, 0.75);
          }
          100% {
            transform: translate(30%, 0);
          }
        }

        .words span:nth-child(2) {
          animation-delay: 0.5s;
        }

        .words span:nth-child(3) {
          animation-delay: 1s;
        }

        .words span:nth-child(4) {
          animation-delay: 1.5s;
        }

        .words span:nth-child(5) {
          animation-delay: 2s;
        }

        .words span:nth-child(6) {
          animation-delay: 2.5s;
        }

        .words span:nth-child(7) {
          animation-delay: 3s;

        .words span:nth-child(8) {
          animation-delay: 3.5s;

        .words span:nth-child(9) {
          animation-delay: 4s;

       .words span:nth-child(10) {
          animation-delay: 4.5s;
        }
      `}</style>
    </motion.div>
  )
}