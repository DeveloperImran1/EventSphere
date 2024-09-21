import React from 'react';

const TicketSellProcess = () => {
    return (
      <div className='flex justify-center gap-20'   >
         <div className="card  w-[600px] ">
  <figure className="">
    <img
      src="https://i.postimg.cc/bNqgCP1t/64107f7457a29a59b4be58da-Badge-Printing-p-500.png"
      alt="Shoes"
      className="rounded-3xl md:w-[600px] " />
  </figure>
  <div className="mt-10 p-2 md:p-6">
    <h2 className="card-title  font-serif text-3xl text-black "> QR Scan and Badge Printing  </h2>
    <p  className='mt-4 text-lg font-serif'  > Say goodbye to long lines and hassles at the door - Try our badge printing and ticket scanning feature today! Eventify makes it easy to print custom badges for your attendees, allowing for quick and easy check-in at your event.</p>
   
  </div>
         </div>
          <div className="card  w-[600px] ">
  <figure className="">
    <img
      src="https://i.postimg.cc/yN0SCgHY/64107f7435643631fa7bfb01-Integration.png"
      alt="Shoes"
      className="rounded-xl "/>
  </figure>
  <div className="mt-10 p-2 md:p-6">
    <h2 className="card-title  font-serif text-3xl text-black "> API and Integration  </h2>
    <p  className='mt-4 text-lg font-serif'  >Integrate your event management and ticketing app with your favorite tools and apps using our robust API and Zapier integration. Save time and boost your productivity by streamlining your workflow and automating repetitive tasks.</p>
   
  </div>
          </div>


      </div>
    );
};

export default TicketSellProcess;