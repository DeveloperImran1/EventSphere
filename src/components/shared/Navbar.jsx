"user client"
import { useEffect, useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import Swal from 'sweetalert2';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import { Button, Drawer, DrawerAction, DrawerContent, Skeleton, SkeletonLine } from 'keep-react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FiLogIn } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaClipboardList, FaHeart, FaStar, FaSignOutAlt, FaInfoCircle, FaPhone } from 'react-icons/fa';

const Navbar = () => {
    const [show, setShow] = useState(false)
    const [subject, setSubject] = useState(false)
    const [books, setBooks] = useState(false)
    const [bookWriters, setBookWriters] = useState(false)
    const [bookPublications, setBookPublications] = useState(false)

    const handleLogOut = () => {
        // logOut()
        // Swal ("Logout", "You have Login Out", "success");
        // return navigate("/signIn")
    }
    const user = true;

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
        <div className="">


            <div className="bg-[#ffffff]">
                <nav className="flex items-center justify-between container  text-black font-semibold ">
                    <div className=" cursor-pointer rounded-2xl flex items-center text-xl font-semibold max-w-[50%]">


                        <Link href="/"> <Image height={676} width={1200} src="https://i.ibb.co.com/SfNwSrp/Whats-App-Image-2024-10-10-at-11-12-02-PM-removebg-preview-1.png" className="w-[60px] h-[60px] scale-100 text-white transition-all duration-200 hover:scale-110 " alt="logo" /></Link>
                    </div>
                    <div className="flex items-center justify-between gap-16">
                        <ul className="hidden md:flex items-center justify-between gap-7">
                            <li className="group flex  cursor-pointer flex-col">
                                Home <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-bg-blue transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className="group flex  cursor-pointer flex-col">
                                Pages <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-bg-blue transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className="group flex  cursor-pointer flex-col">
                                Products <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-bg-blue transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className="group flex  cursor-pointer flex-col">
                                Contact  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-bg-blue transition-all duration-300 group-hover:w-full"></span>
                            </li>


                            <li className="bg-bg-color rounded-full p-2 hover:scale-105">
                                <svg width="15.750000" height="13.552734" viewBox="0 0 15.75 13.5527" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <desc>
                                        Created with Pixso.
                                    </desc>
                                    <defs />
                                    <path id="Vector" d="M4.21 0C3.45 0 2.75 0.19 2.1 0.57C1.46 0.95 0.95 1.46 0.57 2.1C0.19 2.75 0 3.45 0 4.21C0 4.86 0.23 5.53 0.7 6.22C0.92 6.56 1.15 6.83 1.38 7.04L7.87 13.55L14.57 6.83C14.74 6.65 14.91 6.45 15.06 6.24C15.26 5.94 15.42 5.64 15.53 5.34C15.67 4.95 15.75 4.58 15.75 4.21C15.75 3.45 15.56 2.75 15.17 2.1C14.79 1.46 14.28 0.95 13.64 0.57C12.99 0.19 12.29 0 11.53 0C10.17 0 8.95 0.55 7.87 1.65C6.79 0.55 5.57 0 4.21 0ZM4.21 1.12C4.6 1.12 5 1.21 5.43 1.38C5.77 1.51 6.11 1.69 6.46 1.93C6.71 2.1 6.95 2.29 7.18 2.49L7.45 2.75L7.87 3.23L8.29 2.75L8.56 2.49C8.79 2.29 9.03 2.1 9.28 1.93C9.63 1.69 9.97 1.51 10.31 1.38C10.74 1.21 11.14 1.12 11.53 1.12C12.09 1.12 12.61 1.26 13.08 1.54C13.56 1.82 13.93 2.2 14.21 2.68C14.48 3.15 14.62 3.66 14.62 4.21C14.62 4.47 14.53 4.78 14.34 5.13C14.21 5.39 14.05 5.65 13.85 5.92L13.57 6.25L7.87 11.95L2.17 6.25L2 6.08C1.87 5.91 1.75 5.75 1.63 5.58C1.48 5.36 1.36 5.14 1.28 4.92C1.17 4.66 1.12 4.42 1.12 4.21C1.12 3.66 1.26 3.15 1.53 2.68C1.81 2.2 2.18 1.82 2.66 1.54C3.13 1.26 3.65 1.12 4.21 1.12Z" fill="#000000" fill-opacity="1.000000" fill-rule="nonzero" />
                                </svg>

                            </li>
                        </ul>
                        <div onClick={() => setShow(!show)} className="flex items-center border-2 rounded-[32px] relative cursor-pointer">
                            <button className="rounded-full transition-all duration-300 hover:scale-90">
                                <Image height={676} width={1200} src={`${'https://static.vecteezy.com/system/resources/previews/013/042/571/original/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg'}`} alt="user" className="h-[50px] w-[50px] rounded-full " />
                            </button>
                            <div className={`${show ? 'right-0 top-[40px] visible' : 'right-0 top-[90px]  invisible'}  absolute z-50  bg-white rounded-2xl py-2 px-4 w-[190px] transition-all my-transition`}>
                                <ul>
                                    {/* import { , FaClipboardList, FaHeart, FaStar, FaSignOutAlt, FaInfoCircle, FaPhone } from 'react-icons/fa'; */}
                                    <Link href={"/my-profile"} className="flex justify-between w-full p-1 pl-3 rounded-md hover:bg-bg-blue hover:text-white ">

                                        <FaUser size={20}></FaUser>
                                        <li className=" ">My Profile</li>
                                    </Link>

                                    <Link href={"/my-order"}><li className="hidden md:block w-full p-1 pl-3 rounded-md hover:bg-bg-blue hover:text-white ">My Order</li></Link>
                                    <Link href={"/wishlist"}><li className="hidden md:block w-full p-1 pl-3 rounded-md hover:bg-bg-blue hover:text-white ">Wishlist</li></Link>
                                    <Link href={"/"}><li className="block md:hidden w-full p-1 pl-3 rounded-md hover:bg-bg-blue hover:text-white">Home</li></Link>
                                    <Link href={"#"}><li className="block md:hidden w-full p-1 pl-3 rounded-md hover:bg-bg-blue hover:text-white">My Reviews</li></Link>
                                    <Link href={"#"}><li className="block md:hidden w-full p-1 pl-3 rounded-md hover:bg-bg-blue hover:text-white">About Us</li></Link>
                                    <Link href={"#"}><li className="block md:hidden w-full p-1 pl-3 rounded-md hover:bg-bg-blue hover:text-white">Contuct Us</li></Link>

                                    {
                                        user ? <>

                                            <div onClick={handleLogOut}><li className="w-full p-1 pl-3 rounded-md hover:bg-bg-blue hover:text-white">Log Out</li></div>


                                        </> : <>
                                            <Link href={"/signIn"}><li className="w-full p-1 pl-3 rounded-md hover:bg-bg-blue hover:text-white">Sign In</li></Link>

                                        </>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>



        </div>
    );
};

export default Navbar;




