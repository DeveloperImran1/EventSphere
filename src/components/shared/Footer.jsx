'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Image from "next/image";

import Logo from './Logo';

import GlowingCssText from './GlowingCssText';


import { FaLinkedin } from "react-icons/fa";

const UnderwaterFooter = () => {
  const causticRef = useRef(null);

  useEffect(() => {
    let frame;

    const animateCaustics = () => {
      const causticElement = causticRef.current;
      if (causticElement) {
        const time = Date.now() * 0.002;
        const scale = Math.sin(time) * 0.2 + 1;
        causticElement.style.transform = `scale(${scale})`;
      }
      frame = requestAnimationFrame(animateCaustics);
    };

    animateCaustics();

    
    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);


  const subMenu1 = [
    {
      title: "Sell Event Ticket",
      path: "/sell-event-ticket"
    },
    {
      title: "Event Management Softwer",
      path: "/event-management-software"
    },
  
    {
      title: "Event Ticketing Software",
      path: "/register"
    },
    {
      title: "Ticket Sales Report",
      path: "/login"
    },
    {
      title: "Request to Be Organizer",
      path: "/organizer-request"
    },
  
  ]
  const subMenu2 = [
    {
      title: "Register",
      path: "/register"
    },
    {
      title: "About Us",
      path: "/about-us"
    },
    {
      title: "Contact Us",
      path: "/contact"
    },  {
      title: "Login",
      path: "/login"
    },   {
      title: "Events",
      path: "/events"
    },
  
  ]
  const subMenu3 = [
 
    {
      title: "Gift Card",
      path: "/gift-card"
    },
    {
      title: "Gallery",
      path: "/gallery"
    },
    {
      title: "Subscription",
      path: "/subscriptions"
    },
  
    {
      title: "All Events",
      path: "/events"
    }, 
     {
      title: "Offer Announcement",
      path: "/offer-announcement"
    },
  ]
  const subMenu4 = [
    {
      title: "Dashboard",
      path: "/dashboard"
    },
    {
      title: "Home",
      path: "/"
    },
   
    {
      title: "All Events",
      path: "/events"
    },
    {
      title: "Community",
      path: "/community"
    },
    {
      title: "Bookmark",
      path: "/favorite-list"
    },
  ]
  

  return (
    <div className="relative  overflow-hidden bg-blue-900 text-white  ">
      <div id='surface'></div>
      <div id='caustics'></div>
      <div id='bg'></div>
      <div id='sun'>
        <div id='sun_layer1'></div>
        <div id='sun_layer2'></div>
        <div id='sun_layer3'></div>
      </div>

      <svg className="hidden">
        <filter id="noise1">
          <feTurbulence type="turbulence" baseFrequency=".05" numOctaves="1" seed="3" stitchTiles='stitch' />
          <feDisplacementMap in="SourceGraphic" scale="10" />
        </filter>
      </svg>

      <footer className=" relative  text-[18px] [unicode-bidi:isolate] px-6  max-w-[1280px] mx-auto">
        <div className="flex flex-col items-stretch border-[#40454f]  mx-6 md:mx-auto ">
          {/* Footer Header */}
          <div className="  uppercase mb-6 my-10  ">
            {/* <h1 className='text-transparent bg-clip-text max-w-[600px] text-[48px] font-bold leading-[120%] bg-gradient-to-r from-green-500 to-blue-400'>The future of <span>events</span>
                        <br />is here.</h1> */}
            <motion.div className='' style={{ transform: "translateZ(40px)" }}>

              <GlowingCssText text='Your Events Our Sells Commitments. '></GlowingCssText>


            </motion.div>

          </div>
          {/* Footer Menu */}
          <div className="grid gap-0  justify-between pb-2 
                grid-cols-2 md:grid-cols-[0.3fr_0.25fr_0.25fr_0.25fr]">
            {/* Footer Link 1*/}
            <div className="flex flex-col items-start">
              {/* Footer Menu Tittle */}
              <div className="pb-[30px] text-[#40454f]">
                <h6 className="text-white/50 tracking-[1px] text-[16px] font-semibold">PLATFORMS</h6>
              </div>
              {
                subMenu1?.map((menu, index) => <Link key={index} href={`${menu?.path}`} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">{menu?.title}</Link>)
              }
     
            </div>
            {/* Footer Link 2*/}
            <div className="flex flex-col items-start">
              {/* Footer Menu Tittle */}
              <div className="pb-[30px] text-[#40454f]">
                <h6 className="text-white/50 tracking-[1px] text-[16px] font-semibold">PRODUCTS</h6>
              </div>
              {
                subMenu2?.map((menu, index) => <Link key={index} href={`${menu?.path}`} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">{menu?.title}</Link>)
              }
            </div>
            {/* Footer Link 3*/}
            <div className="flex flex-col items-start">
              {/* Footer Menu Tittle */}
              <div className="pb-[30px] text-[#40454f]">
                <h6 className="text-white/50 tracking-[1px] text-[16px] font-semibold">RESOURCES</h6>
              </div>
              {
                subMenu3?.map((menu, index) => <Link key={index} href={`${menu?.path}`} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">{menu?.title}</Link>)
              }
            </div>
            {/* Footer Link 4*/}
            <div className="flex flex-col items-start">
              {/* Footer Menu Tittle */}
              <div className="pb-[30px] text-[#40454f]">
                <h6 className="text-white/50 tracking-[1px] text-[16px] font-semibold">OTHERS</h6>
              </div>
              <Link href={'/dashboard'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Privacy Policy</Link>


              <div className="">
                <h6 className="text-white mb-4 text-[18px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Subscribe For Allert New Offer</h6>
                <div className="flex flex-col">
                  <Link href={'#'} className='pt-[15px] max-w-[100%]'>
                    <Image src="https://cdn.prod.website-files.com/61cee5eb4d566d3471eca114/6242f3e4e6bff71d1f1eb40b_Eventify%20AppStore.svg" width={180} height={100} alt='palyStor' />
                  </Link>
                  <Link href={'#'} className='pt-[15px] max-w-[100%]'>
                    <Image src="https://cdn.prod.website-files.com/61cee5eb4d566d3471eca114/6242f3f797f08340d7065372_Eventify%20PlayStore.svg" width={180} height={100} alt='palyStor' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Logos */}
        
          {/* Footer Down */}
          <div className="text-[#fffc]  flex flex-col lg:flex-row justify-between items-center  border-t border-[#e1c54b7c] pt-2 pb-6">
            {/* Left Side */}
            <div className="flex flex-col md:flex-row items-center ">
              <Logo />
              <h1 className='md:px-5 text-[18px] font-semibold mx-auto my-5'><span>&copy;</span> EventSphare 2024. All rights reserved.</h1>
            </div>
            {/* Right Side  social link  */}

            <div className="">
              {/* <SocialIcons></SocialIcons> */}

              <div className=" md:pr-[60px] md:mr-5">


                <div className=" ">
                  {/* <SocialIcons></SocialIcons> */}

                  <div className="grid grid-flow-col gap-9 mt-4">
                    <Link href="https://twitter.com/imran9066588" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
                    <Link href="https://www.youtube.com/channel/UCrvi84j-fAMqUTqUEapT48Q" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                    <Link href="https://web.facebook.com/DeveloperImran1" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                    <Link href="https://web.facebook.com/DeveloperImran1" target="_blank"> <FaLinkedin size={23}></FaLinkedin> </Link>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

      </footer>

      <style jsx>{`
     
      
        
   
      
        :root {
          --ratioW: 1;
        }
        * {
      
          box-sizing: border-box;
        }
        *::before,
        *::after {
          box-sizing: border-box;
        }
        #bg {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
            to bottom,
            white,
            gray 25%,
            gray 60%,
            khaki
          );
          opacity: 0.5;
          mix-blend-mode: overlay;
        }
        #surface {
          mix-blend-mode: overlay;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        #surface::before,
        #surface::after {
          content: "";
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("https://images.unsplash.com/photo-1518837695005-2083093ee35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTEyMTIwOTZ8&ixlib=rb-4.0.3&q=80&w=400");
          background-repeat: repeat-x;
          --duration: 8s;
          --lowHeight: 30vh;
          --highHeight: 70vh;
          --layerNum: 2;
          --index: 0;
          --opacity: 0.4;
          animation: surface var(--duration) linear infinite;
          animation-delay: calc(
            (var(--duration) / var(--layerNum)) * var(--index) * -1
          );
          opacity: 0;
          mask-image: linear-gradient(to top, white, transparent var(--lowHeight));
        }
        #surface::before {
          --index: 0;
          transform: scale3d(1, -1, 1);
        }
        #surface::after {
          --index: 1;
          transform: scale3d(-1, -1, 1);
        }
        #caustics {
          position: absolute;
          bottom: 0;
          top: 0;
          width: 100%;
          height: 100%;
          filter: url(#noise1);
        }
        #caustics::before,
        #caustics::after {
          content: "";
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("https://images.unsplash.com/photo-1568145675395-66a2eda0c6d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTEyMTAwNjh8&ixlib=rb-4.0.3&q=80&w=400");
          background-repeat: repeat;
          --duration: 10s;
          --gapY: 0px;
          background-size: calc(100% / var(--ratioW)) 30vh;
          animation: caustics calc(var(--duration) * (var(--ratioW))) linear infinite;
          opacity: 0.3;
          mask-image: linear-gradient(
            to top,
            white,
            transparent,
            transparent,
            transparent
          );
        }
        #caustics::after {
          --duration: 11s;
          --gapY: 10vh;
          animation-delay: -2s;
          transform: scale3d(-1, 1, 1);
        }
        #sun {
          mix-blend-mode: overlay;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        #sun div {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform-origin: 50% 0;
          animation: sun 7s ease infinite alternate;
          mask-image: linear-gradient(
            to bottom,
            transparent 15%,
            white 50%,
            white 55%,
            transparent 80%
          );
        }
        #sun_layer1 {
          background: linear-gradient(
            to right,
            transparent 39%,
            white 40%,
            transparent 41%,
            transparent 48.5%,
            white 50%,
            transparent 51.5%,
            transparent 53%,
            white 54%,
            transparent 55%,
            transparent 70%,
            white 71%,
            transparent 72%
          );
        }
        #sun_layer2 {
          animation-delay: -2s !important;
          animation-duration: 7.8s !important;
          animation-direction: alternate-reverse !important;
          background: linear-gradient(
            to right,
            transparent 32%,
            white 33%,
            transparent 34%,
            transparent 38%,
            white 39%,
            transparent 40%,
            transparent 53%,
            white 54%,
            transparent 55%,
            transparent 63.5%,
            white 65%,
            transparent 66.5%
          );
        }
        #sun_layer3 {
          animation-delay: -5s !important;
          animation-duration: 8.5s !important;
          background: linear-gradient(
            to right,
            transparent 38.5%,
            white 40%,
            transparent 41.5%,
            transparent 47%,
            white 48%,
            transparent 49%,
            transparent 52%,
            white 53%,
            transparent 54%,
            transparent 60%,
            white 61%,
            transparent 62%
          );
        }
        @keyframes surface {
          0% {
            opacity: 0;
            background-position: center bottom;
            background-size: 100% var(--highHeight);
          }
          20% {
            opacity: var(--opacity);
          }
          100% {
            opacity: 0;
            background-position: center bottom calc(-1 * var(--lowHeight));
            background-size: 100% var(--lowHeight);
          }
        }
        @keyframes caustics {
          0% {
            background-position: bottom var(--gapY) left;
          }
          100% {
            background-position: bottom var(--gapY) left -100%;
          }
        }
        @keyframes sun {
          0% {
            opacity: 0.1;
            transform: skew(5deg) scale3d(3, 1.5, 1);
          }
          50% {
            opacity: 0.08;
            transform: skew(0deg) scale3d(1.5, 1, 1);
          }
          100% {
            opacity: 0.1;
            transform: skew(-5deg) scale3d(3, 1, 1);
          }
        }
        @media (orientation: portrait) {
          :root {
            --ratioW: 1;
          }
        }
        @media (min-aspect-ratio: 1/1) {
          :root {
            --ratioW: 1;
          }
        }
        @media (min-aspect-ratio: 2/1) {
          :root {
            --ratioW: 2;
          }
        }
      `}</style>
    </div>
  );
};

export default UnderwaterFooter;

