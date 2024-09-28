"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdPhotoCamera } from "react-icons/md";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    specialty: "",
    skills: "",
    gender: "",
    birth: "",
    phone: "",
    email: "",
    country: "",
    city: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form data to the console or send it to an API
    console.log("Form Submitted:", formData);
  };
  return (
    <>
      <div className="w-full text-[#727272] text-base overflow-hidden md:px-10 px-3 pt-10 mx-auto box-border pb-28 ">
        {/* Row */}
        <div class="flex flex-col lg:flex-row gap-x-4">
          <div className="w-full lg:max-w-[20%] mt-0 shadow-2xl pb-10 rounded-xl h-[80%]">
            <div className="flex flex-col items-center pt-10">
              <div className="relative">
                <Image
                  src="https://i.ibb.co.com/cDRfsr2/1-0ae182fa-8c71-468e-850b-23fc81cb3bf4-540x.webp"
                  height={130}
                  width={130}
                  alt="Profile"
                  className="rounded-full w-36 h-36 shadow-md p-[2px]"
                />
                <div className="absolute bottom-0 right-0">
                  <label
                    htmlFor="fileInput"
                    className="cursor-pointer flex items-center justify-center w-10 h-10 bg-blue-500 border-2 border-white shadow-md text-white rounded-full"
                  >
                    <MdPhotoCamera size={24} />
                  </label>
                  <input
                    id="fileInput"
                    type="file"
                    className="hidden"
                    accept="image/*"
                  />
                </div>
              </div>
              <h2 className="mt-4 text-lg font-semibold">Nella Vita</h2>
              <p className="text-gray-600">Developer</p>
            </div>
            <div className="mt-6">
              <ul>
                <li className="flex justify-between py-5 px-4 border-y">
                  <span>Models</span>
                  <span>36</span>
                </li>
                <li className="flex justify-between py-5 px-4 border-b">
                  <span>Gallery</span>
                  <span>3</span>
                </li>
                <li className="flex justify-between py-5 px-4 border-b">
                  <span>Lessons</span>
                  <span>1</span>
                </li>
              </ul>
              <Link
                href="#"
                className="mt-8 block text-center border-2 py-2 rounded-lg mx-5"
              >
                Portfolio
              </Link>
              <Link
                href="#"
                className="mt-4 block text-center bg-green-500 text-white py-2 rounded-lg mx-5"
              >
                Portfolio
              </Link>
            </div>
          </div>
          {/* From */}
          <div className="w-full lg:max-w-[80%] shadow-lg h-[90%] rounded-xl mt-8 md:mt-0">
            <h2 className="text-2xl font-semibold border-b py-5 mb-4 px-10">
              Account setup
            </h2>
            <form
              className="grid grid-cols-2 gap-4 px-4 md:px-10 pt-10"
              onSubmit={handleSubmit}
            >
              <div className="mb-5">
                <label className="block mb-1 text-sm font-medium">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                  placeholder="Name"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-1 text-sm font-medium">
                  Surname
                </label>
                <input
                  name="surname"
                  value={formData.surname}
                  onChange={handleInputChange}
                  className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                  placeholder="Surname"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-1 text-sm font-medium">
                  Specialty
                </label>
                <input
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleInputChange}
                  className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                  placeholder="Specialty"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-1 text-sm font-medium">Skills</label>
                <input
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                  placeholder="Skills"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-1 text-sm font-medium">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                >
                  <option>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div className="mb-5">
                <label className="block mb-1 text-sm font-medium">Birth</label>
                <input
                  name="birth"
                  value={formData.birth}
                  onChange={handleInputChange}
                  className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                  placeholder="Birth (dd.mm.yyyy)"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-1 text-sm font-medium">Phone</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                  placeholder="Phone"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-1 text-sm font-medium">
                  Email address
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-1 text-sm font-medium">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                >
                  <option>Country</option>
                  <option>Russia</option>
                  <option>USA</option>
                  <option>India</option>
                </select>
              </div>

              <div className="mb-5">
                <label className="block mb-1 text-sm font-medium">City</label>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                  placeholder="City"
                />
              </div>

              <div className="col-span-2">
                <button
                  type="submit"
                  className=" -mt-6 mb-6 bg-green-500 text-white py-2 px-4 rounded-lg max-w-52"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
