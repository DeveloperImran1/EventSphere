import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import { LiaFacebook } from "react-icons/lia";
import { SlSocialTwitter, SlSocialYoutube } from "react-icons/sl";
import { BsInstagram } from "react-icons/bs";
import { TbBrandLinkedin } from "react-icons/tb";
import Logo from './Logo';


const Footer = () => {
    return (
        <footer className="bg-[rgb(15,31,61)] leading-[155%] box-border text-[rgb(64,69,79)] block text-[18px] [unicode-bidi:isolate] md:pl-6 lg:pl-0">
            <div className="flex flex-col pt-36 items-stretch border-[#40454f] max-w-[1280px] mx-6 md:mx-auto">
                {/* Footer Header */}
                <div className="text-white uppercase pb-[100px]">
                    <h1 className='text-transparent bg-clip-text max-w-[600px] text-[48px] font-bold leading-[120%] bg-gradient-to-r from-green-500 to-blue-400'>The future of <span>events</span>
                        <br />is here.</h1>
                </div>
                {/* Footer Menu */}
                <div className="grid gap-0 border-b border-[#2b4475] justify-between pb-20 
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
                        <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Event Registration Platform</Link>
                        <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Trade Show</Link>
                        <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Corporate Event App</Link>
                        <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Enterprise Event App</Link>
                        <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Trade Show App</Link>
                        <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Trade Show Management Software</Link>
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
                        <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Event Gamification App</Link>
                        <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Event Poll & QA</Link>
                        <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Event Matchmaking App</Link>
                        <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Event Concierge Service</Link>
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
                        <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">FAQ</Link>
                        <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Referral Program</Link>
                    </div>
                    {/* Footer Link 4*/}
                    <div className="flex flex-col items-start">
                        {/* Footer Menu Tittle */}
                        <div className="pb-[30px] text-[#40454f]">
                            <h6 className="text-white/50 tracking-[1px] text-[16px] font-semibold">OTHERS</h6>
                        </div>
                        <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Privacy Policy</Link>
                        <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Terms of Use</Link>
                        <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Restricted Businesses</Link>
                        <Link href={'/#'} className="text-white mb-4 text-[16px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Security</Link>
                        {/* <Link href={'/#'} className="text-white mb-4 text-[18px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Download Eventify App</Link> */}
                        <div className="">
                            <h6 className="text-white mb-4 text-[18px] hover:text-white/70 cursor-pointer transition-colors duration-200 ">Download Eventify App</h6>
                            <div className="flex flex-col w-[320px]">
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
                <div className="flex flex-col md:flex-row gap-[20px] border-b border-[#2b4475] justify-between items-center py-5">
                    {/* Left Side */}
                    <div className="flex gap-6">
                        <Link href={'/#'} className='max-w-[100%] w-[153px]'>
                            <Image src="https://cdn.prod.website-files.com/61cee5eb4d566d3471eca114/663390f4e17bd17f094fb35f_Trustpilot.svg" width={1000} height={100}  alt='RatingLogo'/>
                        </Link>
                        <Link href={'/#'} className='max-w-[100%] w-[100px] h-[100px]'>
                            <Image src="https://i.postimg.cc/cC7gjTvc/crozdesk-happiest-users-badge.webp" width={100} height={100}  alt='RatingLogo'/>
                        </Link>
                    </div>
                    {/* Right Side */}
                    <div className="flex flex-col gap-3">
                        <h6 className='text-[#f1f3f6] pb-3 text-[16px] text-left'>Eventify is now ISO 27001:2022 certified</h6>
                        <div className="flex gap-3">
                            <Link href={"/#"} className='max-w-[100%] h-[80px] '>
                                <Image className='w-auto h-20' src="https://i.postimg.cc/MTC3tZBQ/65c0de53a884445bf83987f4-ISO-27001.png" alt='footerLogo' height={80} width={100}/>
                            </Link>
                            <Link href={"/#"} className='max-w-[100%] h-[80px] '>
                                <Image className='w-auto h-20' src="https://i.postimg.cc/j5wkznDT/65c0ddba09609703dbc33655-AICPA-SOC.png" alt='footerLogo' height={80} width={100}/>
                            </Link>
                            <Link href={"/#"} className='max-w-[100%] h-[80px] '>
                                <Image className='w-auto h-20' src="https://i.postimg.cc/bvFBD9NL/65c0e0a7b891b647e8b8dcdf-GDPR-compliant-badge-1.webp" alt='footerLogo' height={80} width={100}/>
                            </Link>
                            <Link href={"/#"} className='max-w-[100%] h-[80px] '>
                                <Image className='w-auto h-20' src="https://i.postimg.cc/DzzNwMF8/65c0e040724c4b40079cb478-SOC-2-Type-2.png" alt='footerLogo' height={80} width={100}/>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Footer Down */}
                <div className="text-[#fffc] flex flex-col md:flex-row justify-between items-center py-[30px] text-[16px]">
                    {/* Left Side */}
                    <div className="flex flex-col md:flex-row items-center ">
                        <Logo/>
                        <h1 className='px-5 text-[16px] mx-auto my-10'><span>&copy;</span> Eventify 2024. All rights reserved.</h1>
                    </div>
                    {/* Right Side */}
                    <div className="flex items-center justify-start h-[20px]">
                        <Link href={'/#'} className='mr-6 items-center transition ease-in-out delay-150 hover:-translate-y-1 duration-300'>
                            <LiaFacebook className='text-[32px]' />
                        </Link>
                        <Link href={'/#'} className='mr-6 items-center transition ease-in-out delay-150 hover:-translate-y-1 duration-300'>
                            <SlSocialTwitter className='text-[26px]'/>
                        </Link>
                        <Link href={'/#'} className='mr-6 items-center transition ease-in-out delay-150 hover:-translate-y-1 duration-300'>
                            <BsInstagram className='text-2xl' />
                        </Link>
                        <Link href={'/#'} className='mr-6 items-center transition ease-in-out delay-150 hover:-translate-y-1 duration-300'>
                            <TbBrandLinkedin className='text-3xl' />
                        </Link>
                        <Link href={'/#'} className='mr-6 items-center transition ease-in-out delay-150 hover:-translate-y-1 duration-300'>
                            <SlSocialYoutube className='text-3xl' />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;