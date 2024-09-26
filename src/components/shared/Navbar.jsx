"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State to manage mobile menu
  const [sticky, setSticky] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);

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



  const session = useSession();
  console.log("Navbar theke session is", session)
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
    {
      title: "Dashboard",
      path: "/dashboard"
    },
    {
      title: "Offer Announcement",
      path: "/offer-announcement"
    },
    {
      title: "Request to Be Organizer",
      path: "/organizer-request"
    },
    {
      title: "Setting",
      path: "/settings"
    },
  ]
  const subMenu2 = [
    {
      title: "Profile",
      path: "/profile"
    },
    {
      title: "Notification",
      path: "/notifications"
    },
    {
      title: "Message",
      path: "/messages"
    },
    {
      title: "Help",
      path: "/help"
    },
  ]
  const subMenu3 = [
    {
      title: "Analitics",
      path: "/analytics"
    },
    {
      title: "Reports",
      path: "/report"
    },
    {
      title: "Feedback",
      path: "/feedback"
    },
    {
      title: "Tasks",
      path: "/tasks"
    },
  ]
  const subMenu4 = [
    {
      title: "Events",
      path: "/events"
    },
    {
      title: "Gallery",
      path: "/gallery"
    },
    {
      title: "Subscription",
      path: "/subscriptions"
    },

  ]
  const subMenu5 = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Find Events",
      path: "/find-events"
    },
    {
      title: "Community",
      path: "/community"
    },
    {
      title: "Blogs",
      path: "/blogs"
    },
    {
      title: "About Us",
      path: "/about"
    },
    {
      title: "Contact Us",
      path: "/contact"
    },

  ]

  return (
    <nav className={`
      transition-transform duration-500 ease-in-out 
      bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg
    `}>
      <div className=" mx-auto px-4">
        <div className="flex justify-between items-center ">
          {/* Logo + Website Name */}
          <Logo></Logo>

          <div className="flex justify-between items-center gap-[100px]">
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
                href="/blogs"
                className="hover:text-yellow-300 transition duration-300 ease-in-out"
              >
                Blogs
              </Link>

            </div>

            {/* Profile Section / Login/Register */}

            <div className=" flex justify-center items-center  ">
              <div>
                {/* NEW: Desktop menu button */}
                <button
                  className="text-white focus:outline-none"
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
                <div className={`${desktopMenuOpen ? 'top-[50px] right-0 translate-y-0 ' : 'top-[-850px] translate-y-[-100%]'} fixed w-full  bg-gradient-to-r from-blue-600 to-blue-800 rotate-0  shadow-lg z-[1000] grid grid-cols-12 overflow-y-auto transform transition-transform duration-700 ease-in-out rounded-br-[100px]  transition-max-height`} style={{ '--tw-rotate': 'unset' }}>

                  {/* Components shown in a grid with responsive columns */}
                  <div className="col-span-9">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  w-full p-4">
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
                            className="block px-4 py-2 text-white hover:text-[#eab308]  hover:bg-gray-200 transition text-start"
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

                  <div className="col-span-3 mt-5 space-y-6">

                    <Logo></Logo>
                    {
                      session?.status === "unauthenticated" ? <Link
                        href="/login"
                        className="button"
                        onClick={closeDropdown} > Login
                      </Link> : <Link
                        href="/login"
                        className="button"
                        onClick={() => signOut()}>Logout
                      </Link>
                    }
                  </div>
                </div>

              </div>

              <div className="flex items-center space-x-6">


                {/* If logged in */}
                <div className="relative">
                  <div className="flex items-center gap-1 bg-[#00a88f] rounded-3xl cursor-pointer">
                    <p className="text-white text-xl ml-1">Imran</p>
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzW-urHcT-YYyuY1KznWC9AqrEoBsRWBgiuMJcfBXS9X8vV3zXr73raRYN7yHlTQwLOXE&usqp=CAU"
                      alt="Profile"
                      height="40"
                      width="40"
                      className="rounded-full  border-2 border-white hover:border-yellow-300  transition duration-300 ease-in-out"
                      onClick={toggleDropdown} // Toggle dropdown on image click
                    />
                  </div>

                  {/* Dropdown */}
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-20 font-bold">
                      <div className="px-4 py-3 border-b flex flex-col justify-center items-center gap-2">
                        <Image
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzW-urHcT-YYyuY1KznWC9AqrEoBsRWBgiuMJcfBXS9X8vV3zXr73raRYN7yHlTQwLOXE&usqp=CAU"
                          alt="Profile"
                          height="60"
                          width="60"
                          className="rounded-full  border-2 border-white hover:border-yellow-300  transition duration-300 ease-in-out"
                          onClick={toggleDropdown} // Toggle dropdown on image click
                        />

                        <div>
                          <p className="font-semibold text-gray-800">
                            John Doe
                          </p>
                        </div>

                        <p className="text-sm text-gray-500">
                          johndoe@example.com
                        </p>
                      </div>
                      <Link
                        href="/dashboard/user-container"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                        onClick={closeDropdown}
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/offer-announcement"
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


