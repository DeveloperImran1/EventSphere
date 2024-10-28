import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Button.css'
import Image  from 'next/image';
const TicketSellProcess = () => {
  return (
    <div className='mt-16  container mx-auto px-8' >
      {/* heading */}
      <div className='text-center   '  >
        <h1 className='   font-serif text-5xl font-medium text-black'  >Streamline Your Event Ticketing Sales Process</h1>
        <p className='text-lg font-serif  mt-4 text-gray-600  mb-8'  >   We understand that every event is unique, and that`s why we offer customized solutions tailored to your
          specific needs. <br />  From personalized ticketing options to marketing tools, we are committed to maximizing your sales and making your event a success.         </p>
      </div>


      {/* 2 card  */}
      <div className='flex flex-col lg:flex-row justify-center gap-4 lg:gap-8'   >
        <div className="card  lg:w-[600px] lg:h-[800px] ">
          <figure className="">
            <Image
              src="https://i.postimg.cc/j2rQbBpy/pexels-marceloverfe-28575523.jpg"
              alt="Shoes"
              width={600}
              height={800}
              className="rounded-3xl h-full " />
          </figure>
          <div className="mt-10">
            <h2 className="card-title  font-serif text-3xl text-black "> QR Scan and Badge Printing  </h2>
            <p className='mt-4 text-lg text-gray-600 font-serif'  > Say goodbye to long lines and hassles at the door - Try our badge printing and ticket scanning feature today! Eventify makes it easy to print custom badges for your attendees, allowing for quick and easy check-in at your event.</p>

          </div>
        </div>
        <div className="card  lg:w-[600px] lg:h-[800px]  ">
          <figure className="">
            <Image
              src="https://i.postimg.cc/j2rQbBpy/pexels-marceloverfe-28575523.jpg"
              alt="Shoes"
              width={600}
              height={800}
              className="rounded-xl " />

          </figure>
          <div className="mt-10 ">
            <h2 className="card-title  font-serif text-3xl text-black "> API and Integration  </h2>
            <p className='mt-4 text-lg text-gray-600 font-serif'  >Integrate your event management and ticketing app with your favorite tools and apps using our robust API and Zapier integration. Save time and boost your productivity by streamlining your workflow and automating repetitive tasks.</p>

          </div>
        </div>





      </div>

      {/* Additional Source of Sales */}

      <div className="hero bg-slate-200 rounded-2xl lg:px-4  ">
        <div className="hero-content gap-6 flex-col lg:flex-row">
          <Image
            src="https://i.postimg.cc/kgjqLTnb/freepik-br-3a9f85c1-f113-45f7-9db0-387fde6ebda5.png"
            width={400}
            height={400}   alt="Shoes"  className="w-[650px] h-[350px]        " />
          <div className='p-2 md:p-8'>
            <h1 className="text-5xl text-black font-serif font-medium">Already selling tickets online? Use us as an Additional Source of Sales.</h1>
            <p className="py-4 text-lg font-serif text-slate-600 ">
              If you are already selling tickets online, you can still create an event page at TicketsCandy as an additional source of ticket sales.
              We will happily promote your event page to help you gain more exposure and customers.
            </p>

            <div >
              <a href="#" style={{ "--clr": "#00ccff" }}>
                <button className="flex  items-center border-b-2 border-b-slate-500 gap-2 text-black"><span className='text-lg font-serif  '>Book a Demo </span>
                  <FaArrowRight className='text-base' />
                </button>
              </a>

            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default TicketSellProcess;