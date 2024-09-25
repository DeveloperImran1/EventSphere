"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State to manage mobile menu

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

  return (
    <nav className="bg-gradient-to-r  from-blue-600 to-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo + Website Name */}
          <div className="flex items-center space-x-2">
            <Image
              src="https://i.postimg.cc/tgBF08hc/stock-vector-illustration-of-transport-for-travel-car-train-bus-and-airplane-505816168.jpg"
              alt="Logo"
              width={42}
              height={40}
              className="rounded-tl-2xl"
            />
            <span className="font-bold text-3xl text-white">
              <span className="text-yellow-400">T</span>
              icket
              <span className="text-pink-400">l</span>y
            </span>
          </div>

          {/* Navigation Links for larger devices */}
          <div className="hidden md:flex space-x-8 text-white">
            <Link
              href="/"
              className="hover:text-yellow-300 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              href="/events"
              className="hover:text-yellow-300 transition duration-300 ease-in-out"
            >
              Find Events
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
            <Link
              href="/about"
              className="hover:text-yellow-300 transition duration-300 ease-in-out"
            >
              About Us
            </Link>
          </div>

          {/* Profile Section / Login/Register */}

          <div className=" flex justify-center items-center gap-4">
            <div>
              {/* NEW: Desktop menu button */}
              <button
                className="text-white focus:outline-none"
                onClick={toggleDesktopMenu} // Toggle desktop menu
              >
                <svg
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
              {desktopMenuOpen && (
              <div className="fixed top-30 left-0 w-full h-1/2 bg-white shadow-lg z-50 flex flex-col items-center overflow-y-auto">
              {/* Components shown in a grid with responsive columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full p-4">
                <div>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition text-start"
                    onClick={closeDesktopMenu}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/offer-announcement"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition text-start"
                    onClick={closeDesktopMenu}
                  >
                    Offer Announcement
                  </Link>
                  <Link
                    href="/organizer-request"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition text-start"
                    onClick={closeDesktopMenu}
                  >
                    Request to be an Organizer
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition text-start"
                    onClick={closeDesktopMenu}
                  >
                    Settings
                  </Link>
                </div>
            
                <div>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition text-start"
                    onClick={closeDesktopMenu}
                  >
                    Profile
                  </Link>
                  <Link
                    href="/notifications"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition text-start"
                    onClick={closeDesktopMenu}
                  >
                    Notifications
                  </Link>
                  <Link
                    href="/messages"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition text-start"
                    onClick={closeDesktopMenu}
                  >
                    Messages
                  </Link>
                  <Link
                    href="/help"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition text-start"
                    onClick={closeDesktopMenu}
                  >
                    Help
                  </Link>
                </div>
            
                <div>
                  <Link
                    href="/analytics"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition text-start"
                    onClick={closeDesktopMenu}
                  >
                    Analytics
                  </Link>
                  <Link
                    href="/reports"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition text-start"
                    onClick={closeDesktopMenu}
                  >
                    Reports
                  </Link>
                  <Link
                    href="/feedback"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition text-start"
                    onClick={closeDesktopMenu}
                  >
                    Feedback
                  </Link>
                  <Link
                    href="/tasks"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition text-start"
                    onClick={closeDesktopMenu}
                  >
                    Tasks
                  </Link>
                </div>
            
                <div>
                  <Link
                    href="/events"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition text-start"
                    onClick={closeDesktopMenu}
                  >
                    Events
                  </Link>
                  <Link
                    href="/gallery"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition text-start"
                    onClick={closeDesktopMenu}
                  >
                    Gallery
                  </Link>
                  <Link
                    href="/subscriptions"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition text-start"
                    onClick={closeDesktopMenu}
                  >
                    Subscriptions
                  </Link>
                  <Link
                    href="/logout"
                    className="block px-4 py-2 text-red-600 hover:bg-red-100 transition text-start"
                    onClick={closeDesktopMenu}
                  >
                    Logout
                  </Link>
                </div>
              </div>
            </div>
            
             
              )}
            </div>

            <div className="flex items-center space-x-6">
              {/* If logged out */}
              <div className="hidden md:block">
                <Link
                  href="/login"
                  className="text-white bg-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300 ease-in-out"
                >
                  Login/Register
                </Link>
              </div>

              {/* If logged in */}
              <div className="relative">
                <Image
                  src="/profile-pic.jpg"
                  alt="Profile"
                  height="40"
                  width="40"
                  className="rounded-full cursor-pointer border-2 border-white hover:border-yellow-300 transition duration-300 ease-in-out"
                  onClick={toggleDropdown} // Toggle dropdown on image click
                />

                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-20">
                    <div className="px-4 py-3 border-b">
                      <div className="flex justify-start items-center gap-2">
                        <div>
                          <Image
                            src="/profile-pic.jpg"
                            alt="Profile"
                            height="6"
                            width="6"
                            className="rounded-full cursor-pointer border-2 border-white hover:border-yellow-300 transition duration-300 ease-in-out"
                            onClick={toggleDropdown} // Toggle dropdown on image click
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            John Doe
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">
                        johndoe@example.com
                      </p>
                    </div>
                    <Link
                      href="/dashboard"
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
                    <Link
                      href="/organizer-request"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                      onClick={closeDropdown}
                    >
                      Request to be an Organizer
                    </Link>
                    <div className="border-t"></div>
                    <a
                      href="#"
                      className="block px-4 py-2 text-red-600 hover:bg-red-100 transition"
                      onClick={closeDropdown}
                    >
                      Logout
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  className="text-white focus:outline-none"
                  onClick={toggleMobileMenu}
                >
                  <svg
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link
            href="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            href="/find-events"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition"
            onClick={closeMobileMenu}
          >
            Find Events
          </Link>
          <Link
            href="/community"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition"
            onClick={closeMobileMenu}
          >
            Community
          </Link>
          <Link
            href="/blogs"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition"
            onClick={closeMobileMenu}
          >
            Blogs
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition"
            onClick={closeMobileMenu}
          >
            About Us
          </Link>
          <Link
            href="/login"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200 transition"
            onClick={closeMobileMenu}
          >
            Login/Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
