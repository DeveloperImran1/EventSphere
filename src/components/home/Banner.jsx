"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { FaSearch } from "react-icons/fa";


import { useEffect, useState } from "react";
import { IoReorderThree } from "react-icons/io5";

import { MdOutlineArrowForwardIos } from "react-icons/md";
import Link from 'next/link';


const Banner = () => {
    const [selectCategory, setSelectCategory] = useState(null)


    const boiShomogro = [
        "মহাকালের কণ্ঠ",
        "গোয়েন্দা কাহিনী সমগ্র",
        "ভূতের গল্প",
        "নক্ষত্রের রাত",
        "জীবনের জলছবি",
        "বাংলা সাহিত্যের ইতিহাস",
        "ইতিহাসের অজানা অধ্যায়",
        "গণিতের আনন্দ",
        "পাখিদের নিয়ে গল্প",
        "ভূগোলের বিস্ময়",
        "শিশুতোষ গল্পসমগ্র",
        "রহস্যময় পৃথিবী",
        "প্রাণীর কাহিনী",
        "বিজ্ঞানের বিস্ময়",
        "বিশ্বের সেরা উপন্যাস",
        "রবীন্দ্রনাথের কবিতা",
        "প্রাচীন মিসরের ইতিহাস",
        "যুগান্তরের কবিতা",
        "অ্যালিস ইন ওয়ান্ডারল্যান্ড (বাংলা অনুবাদ)",
        "বাংলা প্রবাদ প্রবচন",
        "আধুনিক বাংলার কথা",
        "চর্যাপদ ও প্রাচীন সাহিত্য",
        "বাংলাদেশের মুক্তিযুদ্ধের গল্প",

    ];

    // বিষয়ের নামের অ্যারে
    const subjects = [
        "উপন্যাস",
        "কবিতা",
        "গল্প",
        "ইতিহাস",
        "বিজ্ঞান",
        "দর্শন",
        "ধর্ম",
        "জীবনী",
        "শিশুসাহিত্য",
        "কৃষি",
        "ভ্রমণকাহিনী",
        "রাজনীতি",
        "সমাজবিজ্ঞান",
        "প্রযুক্তি",
        "চিকিৎসাশাস্ত্র",
        "গণিত",
        "আইন",
        "সাহিত্য",
        "শিল্প ও সংস্কৃতি",
        "ভৌগোলিক গবেষণা"
    ];

    // লেখকের নামের অ্যারে
    const writers = [
        "হুমায়ুন আহমেদ",
        "জহির রায়হান",
        "রবীন্দ্রনাথ ঠাকুর",
        "কাজী নজরুল ইসলাম",
        "আবুল বাশার",
        "সৈয়দ মুজতবা আলী",
        "সুনীল গঙ্গোপাধ্যায়",
        "আবুল মনসুর আহমদ",
        "বিভূতিভূষণ বন্দ্যোপাধ্যায়",
        "মুহম্মদ জাফর ইকবাল",
        "শীর্ষেন্দু মুখোপাধ্যায়",
        "আনিসুল হক",
        "আহমদ ছফা",
        "অনীশ দাস অপু",
        "বেগম রোকেয়া",
        "ফয়েজ আহমেদ",
        "মীর মশাররফ হোসেন",
        "তসলিমা নাসরিন",
        "জাকির তালুকদার",
        "প্রেমচাঁদ"
    ];

    // প্রকাশনীর নামের অ্যারে
    const publications = [
        "প্রথমা প্রকাশন",
        "অন্যপ্রকাশ",
        "আনন্দ পাবলিশার্স",
        "বাংলা একাডেমি",
        "বিদ্যাপ্রকাশ",
        "ইত্যাদি গ্রন্থ প্রকাশ",
        "কাকলী প্রকাশনী",
        "পাঠক সমাবেশ",
        "মাওলা ব্রাদার্স",
        "সাহিত্য প্রকাশ",
        "অনন্যা প্রকাশনী",
        "অন্তর্জলী প্রকাশন",
        "বঙ্গপ্রকাশ",
        "সৃজনশীল প্রকাশনী",
        "সম্প্রতি প্রকাশনী",
        "জ্ঞানভবন প্রকাশনী",
        "বিশ্বসাহিত্য কেন্দ্র",
        "শিখা প্রকাশনী",
        "বর্ণমালা প্রকাশনী",
        "সাহিত্য সংসদ"
    ];




    return (

        <>
            <div className="container  mt-3">
                <section className="hidden md:flex py-2  px-2 items-center justify-between bg-[#00bffe]  rounded-md">
                    <span className="relative   ">
                        <input type="text" placeholder="Search Anything" className="  bg-white  md:w-[200px] lg:w-[300px] py-1  px-2 border-none focus:outline-none focus:border-none bg-transparent rounded-full md:rounded-l-full " />
                        <FaSearch size={22} className='text-gray-500 absolute right-3 top-[20%]'></FaSearch>
                    </span>

                    <div className="hidden md:flex items-center  gap-2 bg-[#00bffe] ">
                        <svg width="13.750000" height="18.910156" viewBox="0 0 13.75 18.9102" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Symbol" d="M13.75 2.91L0 2.91L0 0L13.75 0L13.75 2.91ZM13.75 6.91L0 6.91L0 4L13.75 4L13.75 6.91ZM13.75 10.91L0 10.91L0 8L13.75 8L13.75 10.91ZM13.75 14.91L0 14.91L0 12L13.75 12L13.75 14.91ZM13.75 18.91L0 18.91L0 16L13.75 16L13.75 18.91Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                        </svg>

                        <p className="font-semibold text-[18px] text-white">free shipping over $199</p>
                    </div>
                    <div className="hidden md:flex  items-center gap-2 bg-[#00bffe]">
                        <svg width="13.750000" height="18.910156" viewBox="0 0 13.75 18.9102" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Symbol" d="M13.75 2.91L0 2.91L0 0L13.75 0L13.75 2.91ZM13.75 6.91L0 6.91L0 4L13.75 4L13.75 6.91ZM13.75 10.91L0 10.91L0 8L13.75 8L13.75 10.91ZM13.75 14.91L0 14.91L0 12L13.75 12L13.75 14.91ZM13.75 18.91L0 18.91L0 16L13.75 16L13.75 18.91Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                        </svg>

                        <p className="font-semibold text-[18px] text-white">30 days money back</p>
                    </div>
                    <div className="hidden md:flex  items-center gap-2 bg-[#00bffe]">
                        <svg width="13.750000" height="18.910156" viewBox="0 0 13.75 18.9102" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Symbol" d="M13.75 2.91L0 2.91L0 0L13.75 0L13.75 2.91ZM13.75 6.91L0 6.91L0 4L13.75 4L13.75 6.91ZM13.75 10.91L0 10.91L0 8L13.75 8L13.75 10.91ZM13.75 14.91L0 14.91L0 12L13.75 12L13.75 14.91ZM13.75 18.91L0 18.91L0 16L13.75 16L13.75 18.91Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                        </svg>

                        <p className="font-semibold text-[18px] text-white">100% secure payment</p>
                    </div>
                </section>

            </div>


            <div className='flex relative gap-[10px] container'>

                <div className="md:w-[30%] lg:w-[20%] hidden md:flex  bg-white pt-[10px] pb-[50px] rounded-md  justify-between items-start  border-2">
                    <ul onMouseLeave={() => setSelectCategory(null)} className="w-full ">
                        <Link href={"#"} onMouseOver={() => setSelectCategory("books")} className="py-3 px-3 font-semibold w-full hover:bg-[#00bffe] hover:text-white rounded-md flex justify-between items-center">
                            <p>Books</p>
                            <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>
                        </Link>
                        <Link href={"#"} onMouseOver={() => setSelectCategory("subjects")} className="py-3 px-3 font-semibold w-full hover:bg-[#00bffe] hover:text-white rounded-md flex justify-between items-center">
                            <p>Subjects</p>
                            <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>
                        </Link>
                        <Link href={"#"} onMouseOver={() => setSelectCategory("writers")} className="py-3 px-3 font-semibold w-full hover:bg-[#00bffe] hover:text-white rounded-md flex justify-between items-center">
                            <p>Writer</p>
                            <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>
                        </Link>
                        <Link href={"#"} onMouseOver={() => setSelectCategory("publications")} className="py-3 px-3 font-semibold w-full hover:bg-[#00bffe] hover:text-white rounded-md flex justify-between items-center">
                            <p>Publications</p>
                            <MdOutlineArrowForwardIos></MdOutlineArrowForwardIos>
                        </Link>

                        {
                            selectCategory && <div className="bg-white absolute right-0 top-0 z-50 w-full md:w-[70%] lg:w-[80%]">
                                <ul className="w-full px-6 py-4 flex flex-col flex-wrap h-[430px] ">
                                    {
                                        selectCategory === "books" ?
                                            boiShomogro?.map((book, index) => <Link href={"#"} key={index} className="py-3 px-3 font-normal w-[250px] hover:text-[#00bffe] hover:underline">
                                                {book}
                                            </Link>) :
                                            selectCategory === "subjects" ? subjects?.map((book, index) => <Link href={"#"} key={index} className="py-3 px-3 font-normal w-[250px] hover:text-[#00bffe] hover:underline">
                                                {book}
                                            </Link>) :
                                                selectCategory === "writers" ? writers?.map((book, index) => <Link href={"#"} key={index} className="py-3 px-3 font-normal w-[250px] hover:text-[#00bffe] hover:underline">
                                                    {book}
                                                </Link>) :
                                                    selectCategory === "publications" ? publications?.map((book, index) => <Link href={"#"} key={index} className="py-3 px-3 font-normal w-[250px] hover:text-[#00bffe] hover:underline">
                                                        {book}
                                                    </Link>) : ""
                                    }

                                </ul>
                            </div>
                        }



                    </ul>
                </div>


                <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-full md:w-[70%] lg:w-[80%] ">
                    <SwiperSlide className="bg-[url('https://i.ibb.co/GVN2nLN/slider3-png.png')] bg-center bg-cover pl-[80px] pt-[80px] pb-[80px] rounded-md  ">
                        <h1 className="text-white font-extrabold text-[34px] ">Noise Cancelling</h1>
                        <h1 className="text-white font-semibold text-[24px] ">Headphone</h1>

                        <div className='flex items-center gap-3 mt-[20px] '>
                            <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                            </svg>
                            <p className='font-semibold text-[17px] text-white'>Boso Year Head Phone</p>
                        </div>
                        <div className='flex items-center gap-3 '>
                            <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                            </svg>
                            <p className='font-semibold text-[17px] text-white'>Wifi, Voice Assistant,</p>
                        </div>
                        <div className='flex items-center gap-3 '>
                            <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                            </svg>
                            <p className='font-semibold text-[17px] text-white'>Boso Year Head Phone</p>
                        </div>

                        <button className='font-semibold mt-[40px] text-[19px] px-4 py-2 rounded-md bg-white'>Buy Now</button>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[url('https://i.ibb.co/GVN2nLN/slider3-png.png')] bg-cover bg-center pl-[80px] pt-[80px] pb-[80px] rounded-md ">
                        <h1 className="text-white font-extrabold text-[34px] ">Noise Cancelling</h1>
                        <h1 className="text-white font-semibold text-[24px] ">Headphone</h1>

                        <div className='flex items-center gap-3 mt-[20px] '>
                            <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                            </svg>
                            <p className='font-semibold text-[17px] text-white'>Boso Year Head Phone</p>
                        </div>
                        <div className='flex items-center gap-3 '>
                            <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                            </svg>
                            <p className='font-semibold text-[17px] text-white'>Wifi, Voice Assistant,</p>
                        </div>
                        <div className='flex items-center gap-3 '>
                            <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                            </svg>
                            <p className='font-semibold text-[17px] text-white'>Boso Year Head Phone</p>
                        </div>

                        <button className='font-semibold mt-[40px] text-[19px] px-4 py-2 rounded-md bg-white'>Buy Now</button>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[url('https://i.ibb.co/GVN2nLN/slider3-png.png')] bg-center bg-cover pl-[80px] pt-[80px] pb-[80px] rounded-md ">
                        <h1 className="text-white font-extrabold text-[34px] ">Noise Cancelling</h1>
                        <h1 className="text-white font-semibold text-[24px] ">Headphone</h1>

                        <div className='flex items-center gap-3 mt-[20px] '>
                            <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                            </svg>
                            <p className='font-semibold text-[17px] text-white'>Boso Year Head Phone</p>
                        </div>
                        <div className='flex items-center gap-3 '>
                            <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                            </svg>
                            <p className='font-semibold text-[17px] text-white'>Wifi, Voice Assistant,</p>
                        </div>
                        <div className='flex items-center gap-3 '>
                            <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                            </svg>
                            <p className='font-semibold text-[17px] text-white'>Boso Year Head Phone</p>
                        </div>

                        <button className='font-semibold mt-[40px] text-[19px] px-4 py-2 rounded-md bg-white'>Buy Now</button>
                    </SwiperSlide>
                    <SwiperSlide className="bg-[url('https://i.ibb.co/GVN2nLN/slider3-png.png')] bg-cover bg-center pl-[80px] pt-[80px] pb-[80px] rounded-md ">
                        <h1 className="text-white font-extrabold text-[34px] ">Noise Cancelling</h1>
                        <h1 className="text-white font-semibold text-[24px] ">Headphone</h1>

                        <div className='flex items-center gap-3 mt-[20px] '>
                            <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                            </svg>
                            <p className='font-semibold text-[17px] text-white'>Boso Year Head Phone</p>
                        </div>
                        <div className='flex items-center gap-3 '>
                            <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                            </svg>
                            <p className='font-semibold text-[17px] text-white'>Wifi, Voice Assistant,</p>
                        </div>
                        <div className='flex items-center gap-3 '>
                            <svg width="10.312500" height="14.182617" viewBox="0 0 10.3125 14.1826" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Symbol" d="M10.31 2.18L-0.01 2.18L-0.01 0L10.31 0L10.31 2.18ZM10.31 5.18L-0.01 5.18L-0.01 3L10.31 3L10.31 5.18ZM10.31 8.18L-0.01 8.18L-0.01 6L10.31 6L10.31 8.18ZM10.31 11.18L-0.01 11.18L-0.01 9L10.31 9L10.31 11.18ZM10.31 14.18L-0.01 14.18L-0.01 12L10.31 12L10.31 14.18Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
                            </svg>
                            <p className='font-semibold text-[17px] text-white'>Boso Year Head Phone</p>
                        </div>

                        <button className='font-semibold mt-[40px] text-[19px] px-4 py-2 rounded-md bg-white'>Buy Now</button>
                    </SwiperSlide>

                </Swiper>
            </div>






        </>
    );
};

export default Banner;


