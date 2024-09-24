import React from 'react';
import { FaStar } from 'react-icons/fa';

const CustomerSpeak = () => {
  return (
    <div>
      <div className="bg-slate-100 shadow-2xl py-10  md:py-16 px-8 my-6 lg:my-12 md:my-9">
        <div className="container mx-auto p-2 ">
          <div className="text-center mb-12">

            <h1 className="my-2 font-serif font-semibold text-black">Happy Customers Speak Out</h1>
            <p className="text-gray-800 font-serif font-medium text-lg">
              Hosts describe how Eventify transformed their events into unrivalled successes.
            </p>
          </div>


          {/* Cards section */}
          <div className="flex flex-col md:flex-row justify-center gap-8 p-4">
            {/* First card */}
            <div className="w-full md:w-1/2 p-8 border-2 rounded-lg shadow-md">
              {/* Stars */}
              <div className="flex my-6">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400 text-2xl md:text-2xl mx-2 animate-star" />
                ))}
              </div>
              <p className="mb-4 text-lg px-2  font-mono font-normal text-gray-700">
                ``Ich habe durch die Umstellung auf Eventifys Online-Ticketbuchung viel Geld gespart.``


              </p>

              <div className='flex gap-2 mt-6 md:p-2'>
                <img className='w-14 h-14 rounded-full' src="https://i.postimg.cc/1zTXQjNQ/6437df6dd96a225d4d62bf77-Ellipse-1921-p-500.png" alt="" />
                <div>
                  <h1 className='text-2xl  font-medium text-blue-500' > Fabian Schuster</h1>
                  <p className='text-gray-600'>     Conference Host, Intersolar Europe </p>
                </div>


              </div>



            </div>

            {/* Second card */}
            <div className="w-full md:w-1/2 p-8 border-2 rounded-lg shadow-md">
              {/* Stars */}
              <div className="flex my-6">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400 text-2xl md:text-2xl mx-2 animate-star" />
                ))}
              </div>
              <p className="mb-4 px-2 text-lg font-mono font-normal text-gray-700">
                ``Le système de billetterie en ligne utilise un taux fixe plutôt qu`une commission de pourcentage. Nous avons vraiment apprécié cela.``


              </p>

              <div className='flex gap-2 mt-6 md:p-2'>
                <img className='w-14 h-14 rounded-full' src="https://i.postimg.cc/FHpk2pZr/6437df6d35666621f575e486-Ellipse-1920-p-500.png" alt="" />
                <div>
                  <h1 className='text-2xl  font-medium text-blue-500' > Jacques Dubois</h1>
                  <p className='text-gray-600'>     Program Director, The Global Summit </p>
                </div>


              </div>



            </div>
          </div>


        </div>


      </div>
    </div>
  );
};

export default CustomerSpeak;