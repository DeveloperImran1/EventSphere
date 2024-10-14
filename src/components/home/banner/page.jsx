
'use client'
import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import './Slider.css'
const sliderItems = [
  {
    image: "https://i.ibb.co.com/bHqhHrR/pexels-teddy-2263436.jpg",
    title: "\"Lossless Youths\"",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi."
  },
  {
    image: "https://i.ibb.co.com/tmc1PgJ/pexels-furknsaglam-1596977-3131406.jpg",
    title: "\"Estrange Bond\"",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi."
  },
  {
    image: "https://i.ibb.co.com/JKqLxzx/pexels-pixabay-433452.jpg",
    title: "\"The Gate Keeper\"",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi."
  },
  {
    image: "https://i.ibb.co.com/wCx39XM/pexels-elly-fairytale-3811051.jpg",
    title: "\"Last Trace Of Us\"",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi."
  },
  {
    image: "https://i.ibb.co.com/XsBTnSL/pexels-thibault-trillet-44912-167491.jpg",
    title: "\"Urban Decay\"",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi."
  },
  {
    image: "https://i.ibb.co.com/6RJ67ZN/pexels-prismattco-2372945.jpg",
    title: "\"The Migration\"",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi."
  }
];


export default function Banner() {
  const [items, setItems] = useState(sliderItems);
  const [isAnimating, setIsAnimating] = useState(false);
  const [bgTransition, setBgTransition] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        sliderRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activate = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setBgTransition(true);

    setItems(prevItems => {
      const newItems = direction === 'next'
        ? [...prevItems.slice(1), prevItems[0]]
        : [prevItems[prevItems.length - 1], ...prevItems.slice(0, -1)];

      setTimeout(() => {
        setIsAnimating(false);
        setBgTransition(false);
      }, 500); // Match this with the CSS animation duration
      return newItems;
    });
  };

  return (
    <div className="h-screen  grid place-items-center overflow-hidden">
      <main className="relative  w-full h-full shadow-[0_3px_10px_rgba(0,0,0,0.3)]">
        <ul ref={sliderRef} className="slider">
          {items.map((item, index) => (
            <li
              key={index}
              className={`item absolute top-1/2 -translate-y-1/2 z-[1] w-[200px] h-[300px] bg-center bg-cover rounded-[20px] shadow-[0_20px_30px_rgba(255,255,255,0.3)_inset] transition-all duration-1000 ease-in-out ${index === 5 ? 'opacity-0' : 'opacity-100'
                } ${bgTransition && index === 1 ? 'animate-zoomInUp' : ''}`}
              style={{
                backgroundImage: `url(${item.image})`,
                left: index === 0 || index === 1 ? '0' :
                  index === 2 ? '50%' :
                    index === 3 ? 'calc(50% + 220px)' :
                      index === 4 ? 'calc(50% + 440px)' : 'calc(50% + 660px)',
                top: index === 0 || index === 1 ? '0' : '50%',
                width: index === 0 || index === 1 ? '100%' : '200px',
                height: index === 0 || index === 1 ? '100%' : '300px',
                transform: index === 0 || index === 1 ? 'none' : 'translateY(-50%)',
                borderRadius: index === 0 || index === 1 ? '0' : '30px',
                boxShadow: index === 0 || index === 1 ? 'none' : '0 20px 30px rgba(255,255,255,0.3) inset',
              }}
            >
              <div className={` bg-opacity-10 backdrop-blur-2xl   p-4   rounded-lg text-lime-100   transform  hover:scale-105 absolute top-20 md:top-1/2 m-2 lg:left-20  -translate-y-1/2    md:w-60 lg:w-96 text-shadow-[0_3px_8px_rgba(0,0,0,0.5)] transition-opacity duration-500 ${index === 1 ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className=" text-xl md:text-3xl  md:font-['arial-black'] md:uppercase">{item.title}</h2>
                <p className="  text-lime-100 my-2 text-sm font-normal  ">{item.description}</p>
               <div className='flex justify-center'>
               <a href="#" className='btnRotate  w-24 h-6 md:w-32 md:h-8 md:text-lg '>
                 Details
                </a>
               </div>
              </div>
            </li>
          ))}
        </ul>
        <nav className="nav absolute flex  gap-4  bottom-10 md:bottom-24 left-1/2 -translate-x-1/2 z-[5] select-none">
          <ArrowLeftIcon
           className="w-9 h-9 bg-[rgba(255,255,255,0.5)] text-[rgba(0,0,0,0.7)] border-2 border-[rgba(0,0,0,0.6)] rounded-full cursor-pointer transition-all duration-300 hover:bg-[rgba(255,255,255,0.3)]"
            onClick={() => activate('prev')}
          />
          <ArrowRightIcon
            className="w-9 h-9 bg-[rgba(255,255,255,0.5)] text-[rgba(0,0,0,0.7)] border-2 border-[rgba(0,0,0,0.6)] rounded-full cursor-pointer transition-all duration-300 hover:bg-[rgba(255,255,255,0.3)]"
            onClick={() => activate('next')}
          />
        </nav>
      </main>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOut {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-20px); }
        }
        @keyframes zoomInUp {
          from {
            opacity: 0;
            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
          }
          60% {
            opacity: 1;
            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
          }
          to {
            opacity: 1;
            transform: scale3d(1, 1, 1) translate3d(0, 0, 0);
          }
        }
        .content {
          animation: fadeIn 0.5s ease-out;
        }
        .item:not(:nth-child(1)):not(:nth-child(2)) {
          transition: all 1s ease-in-out;
        }
        .item:nth-child(1) {
          animation: fadeOut 0.5s ease-in forwards;
        }
        .item:nth-child(2) .content {
          animation: fadeIn 0.5s ease-out 0.25s forwards;
        }
        .animate-zoomInUp {
          animation: zoomInUp .5s ease-out;
        }
        @media (min-width: 651px) and (max-width: 900px) {
          .content .title { font-size: 1rem; }
          .content .description { font-size: 0.7rem; }
          .content button { font-size: 0.7rem; }
          .item {
            width: 160px;
            height: 270px;
          }
          .item:nth-child(3) { left: 50%; }
          .item:nth-child(4) { left: calc(50% + 170px); }
          .item:nth-child(5) { left: calc(50% + 340px); }
          .item:nth-child(6) { left: calc(50% + 510px); opacity: 0; }
        }
        @media (max-width: 650px) {
          .content .title { font-size: 0.9rem; }
          .content .description { font-size: 0.65rem; }
          .content button { font-size: 0.7rem; }
          .item {
            width: 130px;
            height: 220px;
          }
          .item:nth-child(3) { left: 50%; }
          .item:nth-child(4) { left: calc(50% + 140px); }
          .item:nth-child(5) { left: calc(50% + 280px); }
          .item:nth-child(6) { left: calc(50% + 420px); opacity: 0; }
        }
      

      `}</style>
    </div>
  );
}