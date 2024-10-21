'use client'
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

const { default: Image } = require("next/image");
const { default: Link } = require("next/link");
const { MdPhotoCamera } = require("react-icons/md");

const ProfileInfo = () => {
  const session = useSession();
  const {data} = useAuth();


  console.log(data);


  return (
    <div className="w-full lg:max-w-[20%] mt-0 shadow-2xl pb-10 rounded-xl h-[80%]">
      <div className="flex flex-col items-center pt-10">
        <div className="relative">
          <Image
            src={data?.image}
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
            <input id="fileInput" type="file" className="hidden" accept="image/*" />
          </div>
        </div>
        <h2 className="mt-4 text-lg font-semibold">{data?.name}</h2>
        <p className="text-gray-600">{data?.role}</p>
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
        <Link href="#" className="mt-4 button  ml-10">
          Portfolio
        </Link>
      </div>
    </div>
  );
};
export default ProfileInfo;