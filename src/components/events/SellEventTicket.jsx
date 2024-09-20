import React from 'react';

const SellEventTicket = () => {
    return (
        <div className="container pt-28">
        <div className="bg-gradient-to-r from-[#f1ddd5] to-[#d9eaf6] ">
          <div className=" pt-28 ">
            <p className=" text-[#145aff] text-center font-semibold uppercase">
              Ticketing
            </p>
            <div className="text-black   mx-auto  text-center my-8">
              <h2 className=" text-7xl font-semibold">
                Sell Event Tickets Online
              </h2>
              <h2 className="text-7xl  font-semibold my-5">
                With Eventify Ticketing
              </h2>
              <h2 className="text-7xl font-semibold">Software</h2>
              <p className=" text-center px-48 mt-5">
                The ultimate event ticketing platform for organizers of any scale!
                Get ready for a seamless and fully customizable ticketing
                experience that guarantees you a sold-out event and increased
                profits. Join Eventify today and watch your event thrive!
              </p>
            </div>
          </div>
          <div className=" text-center flex justify-center gap-16   font-semibold py-5">
            <p>Completely free</p>
            <p>Start selling instantly</p>
            <p>30% increase in sales</p>
          </div>
          <div className="text-center  pb-5">
          <button className="button ">See All Events</button>
        </div>
        </div>
     
        <div className=" text-center py-10 flex justify-center items-center rounded-xl">
          <video
            controls
            width="800"
            className=" rounded-xl"
            height="100%"
            autoPlay
            loop
            muted
          >
            <source
              src="https://files.eventify.io/Tab_Ticketing.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    );
};

export default SellEventTicket;