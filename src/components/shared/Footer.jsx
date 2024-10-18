'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Image from "next/image";

import Logo from './Logo';

import GlowingCssText from './GlowingCssText';
import Socialicon from './SocialIcons';
import SocialSignIn from './SocialSignIn';
import SocialIcons from './SocialIcons';

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

  // sOCIAL LINK 
  function SocialIcon({ href, Icon }) {
    return (
      <li>
        <a href={href} className="group">
          <Icon className="w-10 h-10 text-[#262626] group-hover:text-white transition-colors duration-500" />
        </a>
      </li>
    )
  }

  SocialIcon.defaultProps = {
    href: "#"
  }

  return (
    <div className="relative  overflow-hidden bg-blue-900 text-white">
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

      <footer className=" relative  text-[18px] [unicode-bidi:isolate] md:pl-6 lg:pl-10 ">
        <div className="flex flex-col items-stretch border-[#40454f]  mx-6 md:mx-auto">
          {/* Footer Header */}
          <div className="  uppercase mb-6 my-10  ">
            {/* <h1 className='text-transparent bg-clip-text max-w-[600px] text-[48px] font-bold leading-[120%] bg-gradient-to-r from-green-500 to-blue-400'>The future of <span>events</span>
                        <br />is here.</h1> */}
            <motion.div className='' style={{ transform: "translateZ(40px)" }}>

              <GlowingCssText text='The future of events
                                   is here.'></GlowingCssText>


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
              <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Virtual Event Platform</Link>
              <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Hybrid Event Platform</Link>
              <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">In-person Event Platform</Link>
              <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Mobile Event App</Link>
              <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Expo & Exhibition</Link>
              <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Event Management Platform</Link>

            </div>
            {/* Footer Link 2*/}
            <div className="flex flex-col items-start">
              {/* Footer Menu Tittle */}
              <div className="pb-[30px] text-[#40454f]">
                <h6 className="text-white/50 tracking-[1px] text-[16px] font-semibold">PRODUCTS</h6>
              </div>
              <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Event Ticketing Software</Link>
              <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Event Check-in App</Link>
              <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Event Badge Printing</Link>
              <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Ticket Sales Report</Link>
              <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Lead Retrieval App</Link>
              <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Event Networking App</Link>

            </div>
            {/* Footer Link 3*/}
            <div className="flex flex-col items-start">
              {/* Footer Menu Tittle */}
              <div className="pb-[30px] text-[#40454f]">
                <h6 className="text-white/50 tracking-[1px] text-[16px] font-semibold">RESOURCES</h6>
              </div>
              <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Pricing</Link>
              <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Contact</Link>
              <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">About</Link>
              <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">About</Link>
              <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Blog</Link>
              <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Customer Stories</Link>

            </div>
            {/* Footer Link 4*/}
            <div className="flex flex-col items-start">
              {/* Footer Menu Tittle */}
              <div className="pb-[30px] text-[#40454f]">
                <h6 className="text-white/50 tracking-[1px] text-[16px] font-semibold">OTHERS</h6>
              </div>
              <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Privacy Policy</Link>


              <div className="">
                <h6 className="text-white mb-4 text-[18px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Download Eventify App</h6>
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
          <div className="flex flex-col md:flex-row gap-[20px] border-y border-[#e1c54b7c] justify-between items-center pt-2 pb-6">
            {/* Left Side */}
            <div className="flex gap-6">
              <Link href={'/#'} className='max-w-[100%] w-[153px]'>
                <Image src="https://cdn.prod.website-files.com/61cee5eb4d566d3471eca114/663390f4e17bd17f094fb35f_Trustpilot.svg" width={1000} height={100} alt='RatingLogo' />
              </Link>
              <Link href={'/#'} className='max-w-[100%] w-[100px] h-[100px]'>
                <Image src="https://i.postimg.cc/cC7gjTvc/crozdesk-happiest-users-badge.webp" width={100} height={100} alt='RatingLogo' />
              </Link>
            </div>
            {/* Right Side */}
            <div className="flex flex-col gap-3 ">
              <h6 className='text-[#f1f3f6] pb-3 text-[16px] text-left'>Eventify is now ISO 27001:2022 certified</h6>
              <div className="flex gap-3 pr-[60px] md:mr-5">
                <Link href={"/#"} className='max-w-[100%] h-[80px] '>
                  <Image className='w-auto h-20' src="https://i.postimg.cc/MTC3tZBQ/65c0de53a884445bf83987f4-ISO-27001.png" alt='footerLogo' height={80} width={100} />
                </Link>
                <Link href={"/#"} className='max-w-[100%] h-[80px] '>
                  <Image className='w-auto h-20' src="https://i.postimg.cc/j5wkznDT/65c0ddba09609703dbc33655-AICPA-SOC.png" alt='footerLogo' height={80} width={100} />
                </Link>
                <Link href={"/#"} className='max-w-[100%] h-[80px] '>
                  <Image className='w-auto h-20' src="https://i.postimg.cc/bvFBD9NL/65c0e0a7b891b647e8b8dcdf-GDPR-compliant-badge-1.webp" alt='footerLogo' height={80} width={100} />
                </Link>
                <Link href={"/#"} className='max-w-[100%] h-[80px] '>
                  <Image className='w-auto h-20' src="https://i.postimg.cc/DzzNwMF8/65c0e040724c4b40079cb478-SOC-2-Type-2.png" alt='footerLogo' height={80} width={100} />
                </Link>
              </div>
            </div>
          </div>
          {/* Footer Down */}
          <div className="text-[#fffc] flex flex-col md:flex-row justify-around items-center py-12 ">
            {/* Left Side */}
            <div className="flex flex-col md:flex-row items-center ">
              <Logo />
              <h1 className='px-5 text-[18px] font-semibold mx-auto my-5'><span>&copy;</span> Eventify 2024. All rights reserved.</h1>
            </div>
            {/* Right Side  social link  */}
            <div className=" pr-[60px] md:mr-5">
<SocialIcons></SocialIcons>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        ul li a {
          position: relative;
          display: block;
          width: 80px;
          height: 80px;
          background-color: #fff;
          text-align: center;
          transform: perspective(100px) rotate(-30deg) skew(25deg) translate(0, 0);
          transition: 0.5s;
          box-shadow: -20px 20px 10px rgb(0, 0, 0, 0.5);
        }
        ul li a::before {
          content: "";
          position: absolute;
          top: 10px;
          left: -20px;
          height: 100%;
          width: 20px;
          background: #b1b1b1;
          transition: 0.5s;
          transform: rotate(0deg) skewY(-45deg);
        }
        ul li a::after {
          content: "";
          position: absolute;
          top: 80px;
          left: -11px;
          height: 20px;
          width: 100%;
          background: #b1b1b1;
          transition: 0.5s;
          transform: rotate(0deg) skewX(-45deg);
        }
        ul li a:hover {
          transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(20px, -20px);
          box-shadow: -50px 50px 50px rgb(0, 0, 0, 0.5);
        }
        
        /* Facebook hover effects */
        ul li:nth-child(1) a:hover {
          background: #3b5999;
        }
        ul li:nth-child(1) a:hover::before {
          background: #2e4a86;
        }
        ul li:nth-child(1) a:hover::after {
          background: #4a69ad;
        }
        
        /* Twitter hover effects */
        ul li:nth-child(2) a:hover {
          background: #55acee;
        }
        ul li:nth-child(2) a:hover::before {
          background: #4184b7;
        }
        ul li:nth-child(2) a:hover::after {
          background: #4d9fde;
        }
        
        /* Mail hover effects */
        ul li:nth-child(3) a:hover {
          background: #dd4b39;
        }
        ul li:nth-child(3) a:hover::before {
          background: #c13929;
        }
        ul li:nth-child(3) a:hover::after {
          background: #e83322;
        }
        
        /* LinkedIn hover effects */
        ul li:nth-child(4) a:hover {
          background: #0077b5;
        }
        ul li:nth-child(4) a:hover::before {
          background: #036aa0;
        }
        ul li:nth-child(4) a:hover::after {
          background: #0d82bf;
        }
        
        /* Instagram hover effects */
        ul li:nth-child(5) a:hover {
          background: linear-gradient(#400080, transparent),
            linear-gradient(200deg, #d047d1, #ff0000, #ffff00);
        }
        ul li:nth-child(5) a:hover::before {
          background: linear-gradient(#400080, transparent),
            linear-gradient(200deg, #d047d1, #ff0000, #ffff00);
        }
        ul li:nth-child(5) a:hover::after {
          background: linear-gradient(#400080, transparent),
            linear-gradient(200deg, #d047d1, #ff0000, #ffff00);
        }
      
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
