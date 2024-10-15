// 'use client'
// import React, { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'

// export default function FireTextTitle({ title }) {
//   const [embers, setEmbers] = useState([])

//   useEffect(() => {
//     const generateEmbers = () => {
//       const newEmbers = []
//       const emberCount = Math.floor(title.length * 2)  // Adjust this for more/fewer embers
//       for (let i = 0; i < emberCount; i++) {
//         newEmbers.push({
//           id: i,
//           size: Math.random() < 0.5 ? 20 : 30,
//           left: Math.random() * 100,
//           animationDelay: Math.random() * 2
//         })
//       }
//       setEmbers(newEmbers)
//     }
//     generateEmbers()
//   }, [title])

//   return (
//     <motion.h2
//       className="text-xl font-bold relative text-center "
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       style={{
//         color: '#FFD700',
//         WebkitTextStroke: '2px #FF4500',
//         textStroke: '2px #FF4500',
//         textShadow: '0 0 10px #FF4500, 0 0 20px #FF4500, 0 0 30px #FF4500',
//       }}
//     >
//       {title}
//       {embers.map((ember) => (
//         <motion.div
//           key={ember.id}
//           className="absolute rounded-full mix-blend-screen"
//           style={{
//             width: ember.size,
//             height: ember.size,
//             left: `${ember.left}%`,
//             background: 'radial-gradient(circle, rgba(255,215,0,1) 0%, rgba(255,69,0,1) 100%)',
//           }}
//           initial={{ bottom: -10, opacity: 0 }}
//           animate={{
//             bottom: ['0%', '100%'],
//             opacity: [0, 1, 0],
//             scale: [1, 0],
//           }}
//           transition={{
//             duration: 2,
//             ease: 'easeOut',
//             repeat: Infinity,
//             delay: ember.animationDelay,
//           }}
//         />
//       ))}
//     </motion.h2>
//   )
// }

'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function FireTextTitle({ title }) {
  const [embers, setEmbers] = useState([])

  useEffect(() => {
    const generateEmbers = () => {
      const newEmbers = []
      const emberCount = Math.floor(title.length * 3)  // Increased ember count
      for (let i = 0; i < emberCount; i++) {
        newEmbers.push({
          id: i,
          size: Math.random() * 20 + 10, // More variation in size
          left: Math.random() * 100,
          animationDelay: Math.random() * 2,
          duration: Math.random() * 1.5 + 1, // Varied duration
          hue: Math.random() * 60 + 10 // Hue variation for color
        })
      }
      setEmbers(newEmbers)
    }
    generateEmbers()
  }, [title])

  return (
    <motion.h2
      className="text-3xl text-center font-bold relative "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        color: '#FFA500',
        WebkitTextStroke: '2px #FF4500',
        textStroke: '2px #FF4500',
        textShadow: '0 0 10px #FF4500, 0 0 20px #FF4500, 0 0 30px #FF4500',
      }}
    >
      {title}
      {embers.map((ember) => (
        <motion.div
          key={ember.id}
          className="absolute  rounded-full mix-blend-screen"
          style={{
            width: ember.size,
            height: ember.size,
            left: `${ember.left}%`,
            background: 'radial-gradient(circle, rgba(255,215,0,1) 0%, rgba(255,69,0,1) 100%)',
          }}
          initial={{ bottom: -10, opacity: 0 }}
          animate={{
            bottom: ['0%', '120%'],
            opacity: [0, 1, 0],
            scale: [1, 0],
            x: [0, Math.random() * 40 - 20], // Random horizontal movement
          }}
          transition={{
            duration: ember.duration,
            ease: 'easeOut',
            repeat: Infinity,
            delay: ember.animationDelay,
          }}
        />
      ))}
      <motion.div
        className="absolute inset-0 z-[-1]"
       
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.h2>
  )
}