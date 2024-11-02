"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import { signOut, useSession } from "next-auth/react";
import useAuth from "@/hooks/useAuth";
import { FaHeart } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { formatDistanceToNow } from 'date-fns';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State to manage mobile menu
  const [sticky, setSticky] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [isNotification, setNotification] = useState(false)
  const [favorites, setFavorite] = useState([])

  const updateFavorites = () => {
    const storedFavorites = localStorage.getItem('favorites');
    const myFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
    setFavorite(myFavorites);
  };


  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);  // Make navbar sticky once scrolled down
        closeDesktopMenu()
      } else {
        setSticky(false); // Remove sticky when near the top
      }

      if (window.scrollY > lastScrollY) {
        setScrollDirection('down'); // Scrolling down
      } else {
        setScrollDirection('up');   // Scrolling up
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // Notification er kaj akhono hoini... kora somoi comment out korte hobe
  //   const { data: notification = [] } = useQuery({
  //     queryKey: ['notification'],
  //     queryFn: async () => {
  //         const res = await axiosPublic.get('/notification')
  //         return res.data;
  //     }
  // })

  const session = useSession();
  const auth = useAuth();
  console.log(auth)
  // console.log("Navbar theke session is", session)
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false); // NEW: State to manage desktop menu
  const toggleDesktopMenu = () => {
    setDesktopMenuOpen((prev) => !prev); // NEW: Toggle desktop menu
  };

  const closeDesktopMenu = () => {
    setDesktopMenuOpen(false); // NEW: Close desktop menu
  };


  const subMenu1 = [
    // {
    //   title: "Sell Event Ticket",
    //   path: "/sell-event-ticket"
    // },
    {
      title: "Register",
      path: "/register"
    },
    {
      title: "Login",
      path: "/login"
    },
    {
      title: "All Events",
      path: "/events"
    },
  ]
  const subMenu2 = [
    // {
    //   title: "Event Management Softwer",
    //   path: "/event-management-software"
    // },
    {
      title: "About Us",
      path: "/about-us"
    },
    {
      title: "Contact Us",
      path: "/contact"
    },
    {
      title: "Video Call",
      path: "/video-call"
    },

  ]
  const subMenu3 = [
    {
      title: "Events",
      path: "/events"
    },
    {
      title: "Gift Card",
      path: "/gift-card"
    },
    {
      title: "Gallery",
      path: "/gallery"
    },
  

  ]
  const subMenu4 = [

    {
      title: "Offer Announcement",
      path: "/offer-announcement"
    },
    {
      title: "Request to Be Organizer",
      path: "/organizer-request"
    },
    // {
    //   title: "Setting",
    //   path: "/settings"
    // },
  ]

  const subMenu5 = [
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

  const notification = [
    {
      _id: "1",
      url: "/event/12345",
      title: "New comment on your event \"Summer Music Fest\"",
      time: "2024-10-18T14:48:00Z"
    },
    {
      _id: "2",
      url: "/profile/settings",
      title: "Your account settings have been updated",
      time: "2024-10-18T09:30:00Z"
    },
    {
      _id: "3",
      url: "/message/98765",
      title: "You have a new message from John",
      time: "2024-10-17T20:15:00Z"
    },
    {
      _id: "4",
      url: "/event/54321",
      title: "Your event \"Tech Conference 2024\" has been approved",
      time: "2024-10-17T16:00:00Z"
    },
    {
      _id: "5",
      url: "/notification/65432",
      title: "Special offer: 50% off on premium events",
      time: "2024-10-16T08:00:00Z"
    }
  ];


  return (
    <nav className={` 
      transition-transform duration-500 ease-in-out 
      bg-[#1b85db] shadow-lg  fixed top-0 w-full z-50 
    `}>
      <div className=" mx-auto py-2  container ">
        <div className="flex justify-between items-center ">
          {/* Logo + Website Name */}
          <div className="block lg:hidden">
            <Link href="/" className='flex items-center hover:scale-105 duration-300 transform'>
              <Image src="/asssets/images/logo-white.png" alt='logo' width={60} height={60} className='object-cover rounded-full mr-[-10px]' />
            </Link>

          </div>
          <div className="hidden lg:block">
            <Logo></Logo>
          </div>
          <div className="flex justify-between items-center  lg:gap-[40px]">
            {/* Navigation Links for larger devices */}
            <div className="hidden md:flex space-x-8 text-white">

              <Link
                href="/events"
                className="hover:text-yellow-300 transition duration-300 ease-in-out"
              >
                All Events
              </Link>
              <Link
                href="/community"
                className="hover:text-yellow-300 transition duration-300 ease-in-out"
              >
                Community
              </Link>
              <Link
                href="/messenger"
                className="hover:text-yellow-300 transition duration-300 ease-in-out"
              >
                Messenger
              </Link>

              <Link onClick={updateFavorites}
                href="/favorite-list"
                className="hover:text-yellow-300 transition duration-300 ease-in-out relative"
              >
                <FaHeart size={22} className="text-white"></FaHeart>
                <small className="absolute  px-1 bg-red-500  border-white rounded-full -top-2 left-4 dark:border-gray-900">{favorites?.length || 0}</small>

              </Link>

              <button onClick={() => setNotification(!isNotification)} id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" className="relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400" type="button">
                <IoMdNotifications size={25} className="text-white"></IoMdNotifications>

                <div className="absolute block w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-0.5 start-2.5 dark:border-gray-900"></div>
              </button>
              <div id="dropdownNotification" className={` ${isNotification ? 'inline' : 'hidden'} overflow-y-auto z-20  h-[400px]  absolute top-[60px] md:right-[20px] w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700`} aria-labelledby="dropdownNotificationButton">
                <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                  Notifications
                </div>
                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                  {
                    notification?.map(notific => <Link href={notific?.url} key={notific?._id} className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="flex-shrink-0">
                        <Image height={676} width={1200} className="rounded-full w-11 h-11" src="https://i.ibb.co/Kzd0ZzJ/not.png" alt="Jese image" />
                        <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
                          <svg className="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                            <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                            <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z" />
                          </svg>
                        </div>
                      </div>
                      <div className="w-full ps-3">
                        <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">{notific?.title}</div>
                        <div className="text-xs text-blue-600 dark:text-blue-500">{notific?.time &&
                          formatDistanceToNow(new Date(notific?.time))} ago</div>
                      </div>
                    </Link>)
                  }

                </div>
                <a href="#" className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                  <div className="inline-flex items-center ">
                    <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                      <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                    </svg>
                    View all
                  </div>
                </a>
              </div>
            </div>

            {/* Profile Section / Login/Register */}

            <div className=" flex justify-center items-center  ">
              <div>
                {/* NEW: Desktop menu button */}
                <button
                  className="text-white focus:outline-none m-2  "
                  onClick={toggleDesktopMenu} // Toggle desktop menu
                >
                  <svg
                    style={{ '--tw-rotate': 'unset' }}
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                {/* Desktop Menu */}
                <div className={`${desktopMenuOpen ? 'top-[66px] right-0 translate-y-0 ' : 'top-[-850px] translate-y-[-100%]'} fixed w-full  bg-gradient-to-r bg-[#1b85dbce] rotate-0  shadow-lg z-[1000] grid grid-cols-12 overflow-y-auto transform transition-transform duration-700 ease-in-out rounded-br-[100px]  transition-max-height`} style={{ '--tw-rotate': 'unset' }}>

                  {/* Components shown in a grid with responsive columns */}
                  <div className="col-span-12 md:col-span-9">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  w-full p-4">
                      <div className="md:hidden block ">
                        <p className="block px-4 py-2 text-white font-bold transition text-start"
                          onClick={closeDesktopMenu}
                        >
                          Menu
                        </p>
                        {
                          subMenu5?.map((menu, index) => <Link key={index}
                            href={menu?.path}
                            className="block px-4 py-2 text-white hover:text-[#eab308] transition text-start"
                            onClick={closeDesktopMenu}
                          >
                            {menu?.title}
                          </Link>)
                        }

                      </div>
                      <div>
                        <p className="block px-4 py-2 text-white font-bold transition text-start"
                          onClick={closeDesktopMenu}
                        >
                          Category 1
                        </p>
                        {
                          subMenu1?.map((menu, index) => <Link key={index}
                            href={menu?.path}
                            className="block px-4 py-2 text-white hover:text-[#eab308] transition text-start"
                            onClick={closeDesktopMenu}
                          >
                            {menu?.title}
                          </Link>)
                        }

                      </div>

                      <div>
                        <p className="block px-4 py-2  text-white   font-bold transition text-start"
                          onClick={closeDesktopMenu}
                        >
                          Category 2
                        </p>
                        {
                          subMenu2?.map((menu, index) => <Link key={index}
                            href={menu?.path}
                            className="block px-4 py-2 text-white hover:text-[#eab308]   transition text-start"
                            onClick={closeDesktopMenu}
                          >
                            {menu?.title}
                          </Link>)
                        }

                      </div>
                      <div>
                        <p className="block px-4 py-2  text-white  font-bold transition text-start"
                          onClick={closeDesktopMenu}
                        >
                          Category 3
                        </p>
                        {
                          subMenu3?.map((menu, index) => <Link key={index}
                            href={menu?.path}
                            className="block px-4 py-2  text-white hover:text-[#eab308]  transition text-start"
                            onClick={closeDesktopMenu}
                          >
                            {menu?.title}
                          </Link>)
                        }

                      </div>
                      <div>
                        <p className="block px-4 py-2  text-white  font-bold transition text-start"
                          onClick={closeDesktopMenu}
                        >
                          Category 4
                        </p>

                        {
                          auth?.data?.role === "user" ? <Link
                            href={`/dashboard/user-profile/${session?.data?.user?.email}`}
                            className="block px-4 py-2  text-white hover:text-[#eab308] transition text-start"
                            onClick={closeDesktopMenu}
                          >
                            Dashboard
                          </Link> : auth?.data?.role === "organizer" ? <Link
                            href={`/dashboard/organizer-container`}
                            className="block px-4 py-2  text-white hover:text-[#eab308] transition text-start"
                            onClick={closeDesktopMenu}
                          >
                            Dashboard
                          </Link> : <Link
                            href={`/dashboard/admin-container`}
                            className="block px-4 py-2  text-white hover:text-[#eab308] transition text-start"
                            onClick={closeDesktopMenu}
                          >
                            Dashboard
                          </Link>
                        }

                        {
                          subMenu4?.map((menu, index) => <Link key={index}
                            href={menu?.path}
                            className="block px-4 py-2  text-white hover:text-[#eab308] transition text-start"
                            onClick={closeDesktopMenu}
                          >
                            {menu?.title}
                          </Link>)
                        }

                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block md:col-span-3 mt-5 space-y-6">

                    <Logo></Logo>
                    {
                      session?.status === "unauthenticated" ? <Link
                        href="/login"
                        className="button bg-[#10a0b9] "
                        onClick={closeDropdown} > Login
                      </Link> : <Link
                        href="/login"
                        className="button bg-[#10a0b9] "
                        onClick={() => signOut()}>Logout
                      </Link>
                    }
                  </div>
                </div>

              </div>

              <div className="flex items-center space-x-6">


                {/* If logged in */}
                <div className="relative">
                  <div className="flex items-center gap-1  rounded-3xl cursor-pointer ">
                    <Image
                      src={session?.data?.user?.image || "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"}
                      alt="Profile"
                      height="40"
                      width="40"
                      className="rounded-full  border-2 border-white  transition duration-300 ease-in-out h-11 w-11"
                      onClick={toggleDropdown} // Toggle dropdown on image click
                    />
                  </div>

                  {/* Dropdown */}
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-20 font-bold">
                      <div className="px-4 py-3 border-b flex flex-col justify-center items-center gap-2">
                        <Image
                          src={session?.data?.user?.image || 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'}
                          alt="Profile"
                          height="60"
                          width="60"
                          className="rounded-full  border-2 border-white hover:border-yellow-300  transition duration-300 ease-in-out"
                          onClick={toggleDropdown} // Toggle dropdown on image click
                        />

                        <div>
                          <p className="font-semibold text-gray-800">
                            {session?.data?.user?.name || "User Name"}
                          </p>
                        </div>

                        <p className="text-sm text-gray-500">
                          {session?.data?.user?.email || "johndoe@example.com"}
                        </p>
                      </div>
                      {
                        auth?.data?.role === "user" ? <Link
                          href={`/dashboard/user-profile/${session?.data?.user?.email}`}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                          onClick={closeDropdown}
                        >
                          Dashboard
                        </Link> : auth?.data?.role === "organizer" ? <Link
                          href={`/dashboard/organizer-container`}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                          onClick={closeDropdown}
                        >
                          Dashboard
                        </Link> : <Link
                          href={`/dashboard/admin-container`}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                          onClick={closeDropdown}
                        >
                          Dashboard
                        </Link>
                      }

                      <Link
                        href="/gift-card"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                        onClick={closeDropdown}
                      >
                        Offer Announcement
                      </Link>
                      {
                        session?.status === "unauthenticated" ? <Link
                          href="/login"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                          onClick={closeDropdown} > Login
                        </Link> : <Link
                          href="/login"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                          onClick={() => signOut()}>Logout
                        </Link>
                      }


                    </div>
                  )}
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>


    </nav>
  );
};

export default Navbar;


