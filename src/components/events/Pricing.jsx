import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Pricing = () => {
    return (
        <div>
        {/* Background section */}
        <div className="bg-slate-300 pb-36">
          <div className="container mx-auto p-2 md:p-20">
            <div className="text-center">
              <h1 className="text-xl font-semibold font-serif tracking-[.25em] text-blue-500">PRICING</h1>
              <h1 className="my-2 font-serif font-semibold text-black">Flat Event Ticketing Fee.<br /> Zero Contracts. Zero Bindings.</h1>
              <p className="text-gray-800 font-serif font-medium text-xl">
                Get everyone onboard, optimize your event registration and boost ticket sales.
              </p>
            </div>
          </div>
        </div>
      
        {/* Cards section */}
        <div className="container mx-auto -mt-[192px] flex flex-col md:flex-row justify-center gap-6 p-4">
          {/* First card */}
          <div className="w-full md:w-1/2 p-8 bg-white border border-gray-200 rounded-lg shadow-md">
            <h5 className="mb-4 text-2xl font-serif font-bold tracking-tight text-gray-900">Free</h5>
            <p className="mb-4 font-normal text-gray-700">
              Enjoy flat rates for a lifetime with Eventify event ticketing software! Get everyone onboard, optimize registration & boost ticket sales.
            </p>
            <hr className="my-6" />
            <ul className="space-y-4">
              <li className="text-left">
                <p className="font-semibold flex text-gray-900">
                  <FaCheckCircle className="text-green-500 mr-2" /> $1 per ticket
                </p>
                <p className="text-gray-700">Paid tickets for B2B conferences/events</p>
              </li>
              <li className="text-left">
                <p className="font-semibold flex text-gray-900">
                  <FaCheckCircle className="text-green-500 mr-2" /> $0 per ticket
                </p>
                <p className="text-gray-700">Free tickets for B2B conferences/events</p>
              </li>
              <li className="text-left">
                <p className="font-semibold flex text-gray-900">
                  <FaCheckCircle className="text-green-500 mr-2" /> $0 per ticket
                </p>
                <p className="text-gray-700">For open-source events, free events</p>
              </li>
            </ul>
          </div>
      
          {/* Second card */}
          <div className="w-full md:w-1/2 p-8 bg-white border border-gray-200 rounded-lg shadow-md">
            <h5 className="mb-4 text-2xl font-serif font-bold tracking-tight text-gray-900">Payment Gateway Fees</h5>
            <p className="mb-4 font-normal text-gray-700">
              <span className="text-black font-bold">Note: </span>Please check Stripe fees for your country. There are exciting discount plans for events with a threshold number of tickets sold.
            </p>
            <hr className="my-6" />
            <ul className="space-y-4">
              <li className="text-left">
                <p className="font-semibold flex text-gray-900">
                  <FaCheckCircle className="text-green-500 mr-2" /> $1 per ticket
                </p>
                <p className="text-gray-700">Paid tickets for B2B conferences/events</p>
              </li>
              <li className="text-left">
                <p className="font-semibold flex text-gray-900">
                  <FaCheckCircle className="text-green-500 mr-2" /> $0 per ticket
                </p>
                <p className="text-gray-700">Free tickets for B2B conferences/events</p>
              </li>
              <li className="text-left">
                <p className="font-semibold flex text-gray-900">
                  <FaCheckCircle className="text-green-500 mr-2" /> $0 per ticket
                </p>
                <p className="text-gray-700">For open-source events, free events</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

    );
};

export default Pricing;