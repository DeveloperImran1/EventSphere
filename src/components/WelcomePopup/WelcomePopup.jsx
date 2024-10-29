"use client"
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
const WelcomePopup = () => {
  const axiosPublic = useAxiosPublic();
  const router = useRouter()
  const session = useSession();
  const email = session?.data?.user?.email;
  const handleRoleSubmit = async (newRole) => {
    const data = { email, newRole }
    console.log(data)
    const res = await axiosPublic.put(`/userRollUpdateWithEmail`, data)
    console.log("responce is ", res?.data?.data?.modifiedCount)
    if(res?.data?.data?.modifiedCount){
      router.push("/")
      toast.success('Successfylly Your Role is Updated')
    }
    else{
      router.push("/")
      toast.error('Your Role is Updated Error')
    }
  }



  return (
    <div className="relative py-16 bg-[url('https://i.postimg.cc/ZqjxSqHr/pngtree-blue-wave-shapes-with-layered-bottom-png-image-4391667-removebg-preview.png')] bg-no-repeat bg-cover flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-[#1e0a3c] mb-4 px-5 md:px-0">
        Welcome to EventSphare! <span className="wave">👋</span>
      </h1>
      <p className="text-xl md:text-xl leading-[2rem] text-gray-700 mb-12 px-5 md:px-0">
        Were glad youre here! What can we help you with first?
      </p>

      <div className="flex space-x-6 px-5 lg:px-0">
        {/* Option 1 */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 max-w-[400px] border-2 border-gray-200">
          <Image
            src="https://i.postimg.cc/Hnt614MH/4528158.jpg"
            alt="Find an experience"
            className="mb-4"
            width={400}
            height={200}
          />
          <h3 className="md:text-2xl font-bold text-[#1e0a3c] mb-6">
            Find an Experience
          </h3>
          <button onClick={()=> handleRoleSubmit("user")} className="bg-gray-100 hover:bg-gray-300 font-semibold py-2 px-4 rounded border border-[#1e0a3c77]">
            As an User
          </button>
        </div>

        {/* Option 2 */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 max-w-[400px] border-2 border-gray-200">
          <Image
            src="https://i.postimg.cc/DfQjGFMD/4894761.jpg"
            alt="Organize an event"
            className="mb-4"
            width={400}
            height={200}
          />
          <h3 className="md:text-2xl font-bold text-[#1e0a3c] mb-6">
            Organize an Event?
          </h3>
          <button onClick={()=> handleRoleSubmit("organizer")} className="bg-gray-100 hover:bg-gray-300 font-semibold py-2 px-4 rounded border border-[#1e0a3c77]">
            As an Organizer
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
