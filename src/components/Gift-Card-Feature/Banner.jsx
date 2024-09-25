'use client'
// import { useState, useEffect, useRef } from 'react';
// import { Button } from "@/components/ui/button";
// import * as THREE from 'three';
// import YouTube from 'react-youtube';
// import Image from 'next/image';
// import { FaPlayCircle } from 'react-icons/fa';

// export default function ChristmasPromo() {
//   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const canvasRef = useRef(null);

//   const videoId = 'ncjuqj0WN6s';

//   const opts = {
//     width: '100%',
//     height: '400',
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   useEffect(() => {
//     // Countdown timer
//     const timer = setInterval(() => {
//       const now = new Date();
//       const christmas = new Date(now.getFullYear(), 11, 25);
//       if (now > christmas) christmas.setFullYear(christmas.getFullYear() + 1);
//       const difference = christmas.getTime() - now.getTime();
      
//       setTimeLeft({
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60)
//       });
//     }, 1000);

//     // 3D Animation
//     if (canvasRef.current) {
//       const scene = new THREE.Scene();
//       const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//       const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
//       renderer.setSize(window.innerWidth / 2, window.innerHeight);

//       const geometry = new THREE.SphereGeometry(0.2, 32, 32);
//       const materials = [
//         new THREE.MeshBasicMaterial({ color: 0xFFE4E1 }), // Misty Rose
//         new THREE.MeshBasicMaterial({ color: 0xF0FFF0 }), // Honeydew
//         new THREE.MeshBasicMaterial({ color: 0xF0FFFF }), // Azure
//         new THREE.MeshBasicMaterial({ color: 0xFFFAF0 }), // Floral White
//         new THREE.MeshBasicMaterial({ color: 0xF5F5F5 })  // White Smoke
//       ];

//       const spheres = []; // Initialize the array
//       for (let i = 0; i < 50; i++) {
//         const material = materials[Math.floor(Math.random() * materials.length)];
//         const sphere = new THREE.Mesh(geometry, material);
//         sphere.position.set(
//           Math.random() * 10 - 5,
//           Math.random() * 10 - 5,
//           Math.random() * 10 - 5
//         );
//         scene.add(sphere);
//         spheres.push(sphere);
//       }

//       camera.position.z = 5;

//       const animate = () => {
//         requestAnimationFrame(animate);
//         spheres.forEach(sphere => {
//           sphere.position.y += 0.005;
//           if (sphere.position.y > 5) sphere.position.y = -5;
//           sphere.rotation.x += 0.01;
//           sphere.rotation.y += 0.01;
//         });
//         renderer.render(scene, camera);
//       };
//       animate();

//       const handleResize = () => {
//         const width = window.innerWidth / 2;
//         const height = window.innerHeight;
//         camera.aspect = width / height;
//         camera.updateProjectionMatrix();
//         renderer.setSize(width, height);
//       };

//       window.addEventListener('resize', handleResize);

//       return () => {
//         clearInterval(timer);
//         renderer.dispose();
//         window.removeEventListener('resize', handleResize);
//       };
//     }
//   }, []);

//   const handlePlayClick = () => {
//     setShowModal(true);
//     setIsPlaying(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setIsPlaying(false);
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-[700px]">
//       <div className="w-full md:w-1/2 bg-red-500 text-white p-8 relative overflow-hidden flex flex-col justify-center items-center">
//         <canvas ref={canvasRef} className="absolute inset-0 z-0" />
//         <div className="relative z-10 text-center">
//           <h4 className="text-xl mb-2">December 24-26, 2024</h4>
//           <h1 className="text-6xl font-bold mb-6">Christmas Day</h1>
//           <div className="grid grid-cols-4 gap-4 mb-8">
//             {Object.entries(timeLeft).map(([unit, value]) => (
//               <div key={unit} className="text-center">
//                 <span className="text-4xl font-bold block">{value}</span>
//                 <span className="text-sm">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
//               </div>
//             ))}
//           </div>
//           <div className="flex gap-4 justify-center">
//             <Button variant="secondary" className="bg-white text-red-500 hover:bg-red-100">BOOK NOW</Button>
//             <Button variant="outline" className="border-white text-white hover:bg-red-400">EXPLORE</Button>
//           </div>
//         </div>
//       </div>
//       <div className="w-full md:w-1/2 bg-white p-8 flex items-center justify-center relative">
//         <div className="relative w-full"> 
//           <Image
//             src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
//             alt="Concertgoers Watching Majestic Concert"
//             width={1000}
//             height={281}
//             className="cursor-pointer"
//             onClick={handlePlayClick}
//           />
//           <Button 
//             onClick={handlePlayClick} 
//             className="absolute inset-0 w-12 h-12 flex items-center justify-center bg-red-500 text-white rounded-full mx-auto my-auto"
//           >
//             <FaPlayCircle className="text-2xl" />
//           </Button>
//         </div>
//       </div>
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
//           <div className="bg-white p-4 rounded-lg relative">
//             <button onClick={handleCloseModal} className="absolute text-2xl top-4 right-4 text-red-500">✖</button>
//             {isPlaying && (
//               <YouTube
//                 videoId={videoId}
//                 opts={opts}
//                 onEnd={handleCloseModal}
//               />
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import YouTube from 'react-youtube'
import Image from 'next/image'
import { FaPlayCircle } from 'react-icons/fa'
import './Banner.css'
const festiveEmojis = ['🎄', '🎅', '🎁', '❄️', '⛄', '🦌', '🔔', '🕯️', '🎶', '🍪']

export default function ChristmasPromo() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isPlaying, setIsPlaying] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const videoId = 'ncjuqj0WN6s'

  const opts = {
    width: '100%',
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
    <div className="flex flex-col   py-8 border-4  bg-slate-100    md:flex-row h-[700px]">
      <div className="w-full clipPathSection1  md:w-1/2 bg-red-500 text-white  relative overflow-hidden flex flex-col justify-center items-center">
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
        <div className="relative z-10 ">
          <h4 className="text-xl    mb-2">December 24-26, 2024</h4>
          <h1 className="text-6xl font-bold mb-6">Christmas Day</h1>
          <div className="grid grid-cols-4 gap-4 mb-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <span className="text-4xl font-bold block">{value}</span>
                <span className="text-sm">{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 ">
            <Button variant="secondary" className="bg-white text-red-500 hover:bg-red-100">BOOK NOW</Button>
            <Button variant="outline" className="border-white text-white hover:bg-red-400">EXPLORE</Button>
          </div>
        </div>
      </div>
      <div className="w-full clipPathSection2   md:w-1/2   flex items-center justify-center relative">
        <div className="relative   "> 
          <img
            src="https://i.ibb.co.com/kB2XJkB/people-taking-part-high-protocol-event.jpg"
            alt="Concertgoers Watching Majestic Concert"
           
            
            onClick={handlePlayClick}
          />
          <Button 
            onClick={handlePlayClick} 
            className="absolute inset-0 w-12 h-12 flex items-center justify-center bg-red-500 text-white rounded-full mx-auto my-auto"
          >
            <FaPlayCircle className="text-2xl" />
          </Button>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white p-4 rounded-lg relative">
            <button onClick={handleCloseModal} className="absolute text-2xl top-4 right-4 text-red-500">✖</button>
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