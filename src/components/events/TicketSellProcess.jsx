import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Button.css'

const TicketSellProcess = () => {
  return (
    <div className='my-24  container mx-auto px-8' >
      {/* heading */}
      <div className='text-center mt-10 my-16  '  >
        <h1 className='   font-serif text-5xl font-medium text-black'  >Streamline Your Event Ticketing Sales Process</h1>
        <p className='text-lg font-serif  mt-4 text-gray-600  '  >   We understand that every event is unique, and that`s why we offer customized solutions tailored to your
          specific needs. <br />  From personalized ticketing options to marketing tools, we are committed to maximizing your sales and making your event a success.         </p>
      </div>


      {/* 2 card  */}
      <div className='flex justify-center gap-16'   >
        <div className="card  w-[600px] ">
          <figure className="">
            <img
              src="https://i.postimg.cc/bNqgCP1t/64107f7457a29a59b4be58da-Badge-Printing-p-500.png"
              alt="Shoes"
              className="rounded-3xl md:w-[600px] " />
          </figure>
          <div className="mt-10 p-2 md:p-6">
            <h2 className="card-title  font-serif text-3xl text-black "> QR Scan and Badge Printing  </h2>
            <p className='mt-4 text-lg text-gray-600 font-serif'  > Say goodbye to long lines and hassles at the door - Try our badge printing and ticket scanning feature today! Eventify makes it easy to print custom badges for your attendees, allowing for quick and easy check-in at your event.</p>

          </div>
        </div>
        <div className="card  w-[600px] ">
          <figure className="">
            <img
              src="https://i.postimg.cc/yN0SCgHY/64107f7435643631fa7bfb01-Integration.png"
              alt="Shoes"
              className="rounded-xl " />
          </figure>
          <div className="mt-10 p-2 md:p-6">
            <h2 className="card-title  font-serif text-3xl text-black "> API and Integration  </h2>
            <p className='mt-4 text-lg text-gray-600 font-serif'  >Integrate your event management and ticketing app with your favorite tools and apps using our robust API and Zapier integration. Save time and boost your productivity by streamlining your workflow and automating repetitive tasks.</p>

          </div>
        </div>





      </div>

      {/* Additional Source of Sales */}

      <div className="hero my-20  bg-slate-200 rounded-2xl px-16  ">
        <div className="hero-content gap-6 flex-col lg:flex-row">
          <img
            src="https://i.postimg.cc/kgjqLTnb/freepik-br-3a9f85c1-f113-45f7-9db0-387fde6ebda5.png"
            className="w-[650px] h-[350px] " />
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