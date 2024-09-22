import Image from 'next/image';
import React from 'react';

const WelcomePopup = () => {
  return (
    <div className="relative h-screen bg-[url('https://i.postimg.cc/KYXmLkry/bcc3716da3dabc9f944d1c30cea66036-background-Desktop.jpg')] bg-no-repeat bg-cover flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-[#1e0a3c] mb-4 px-5 md:px-0">
        Welcome to Eventbrite! <span className="wave">👋</span>
      </h1>
      <p className="text-xl md:text-xl leading-[2rem] text-gray-700 mb-12 px-5 md:px-0">
        We're glad you're here! What can we help you with first?
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
            Find an experience
          </h3>
          <button className="bg-gray-100 hover:bg-gray-300 font-semibold py-2 px-4 rounded border border-[#1e0a3c77]">
            Tell us what you love
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
            Organize an event
          </h3>
          <button className="bg-gray-100 hover:bg-gray-300 font-semibold py-2 px-4 rounded border border-[#1e0a3c77]">
            Plan your best event <span className=''>ever</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
