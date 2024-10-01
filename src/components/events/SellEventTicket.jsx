
import React from 'react';
import { MdList, MdAssignment, MdPersonAdd, MdUpload } from 'react-icons/md'; // Import React Icons
// import styles from './TicketingManagementSection.module.css'; // Import the CSS module

const TicketingManagementSection = () => {
  const features = [
    {
      icon: MdList,
      title: 'Waitlist',
      description: 'Fill form and get confirmation on request approval.',
      color: '#ff22bb',
    },
    {
      icon: MdAssignment,
      title: 'Registration',
      description: 'Attendees can easily sign up through a simple form.',
      color: '#00ccff',
    },
    {
      icon: MdPersonAdd,
      title: 'RSVP',
      description: 'Unique way for attendees to RSVP online for an event.',
      color: '#22e622',
    },
    {
      icon: MdUpload,
      title: 'Bulk Import',
      description: 'Easily upload attendee lists in Excel/CSV format.',
      color: '#ff8c00',
    },
  ]







  return (





    <>
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-[#f1ddd5] to-[#d9eaf6] ">
          <div className=" pt-28 ">
            <p className=" text-[#145aff] text-center font-semibold uppercase">
              Ticketing
            </p>
            <div className="text-black   mx-auto  text-center my-8">
              <h2 className=" lg:text-7xl md:text-4xl text-3xl font-semibold">
                Sell Event Tickets Online
              </h2>
              <h2 className="lg:text-7xl md:text-4xl text-3xl   font-semibold my-5">
                With Eventify Ticketing
              </h2>
              <h2 className="lg:text-7xl md:text-4xl text-3xl  font-semibold">Software</h2>
              <p className=" text-center px-5 md:px-16 lg:px-48 mt-5">
                The ultimate event ticketing platform for organizers of any scale!
                Get ready for a seamless and fully customizable ticketing
                experience that guarantees you a sold-out event and increased
                profits. Join Eventify today and watch your event thrive!
              </p>
            </div>
          </div>
          <div className=" text-center flex justify-center gap-4 md:gap-8 lg:gap-16   font-semibold py-5">
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

      <section className='container mx-auto'>
        <div >
        <div className='text-center    mb-14    '>
        <h2 className="lg:text-5xl md:text-3xl text-2xl text-black font-bold mb-4 text-center font-sans">Boost Event Success with  Our Powerful   <br /> Ticketing Management Software</h2>
          <p      className='text-gray-800 font-serif     font-medium text-lg'   >
            Our ticketing platform simplifies event management, enhances user experience, and  <br />  helps increase your ticket sales.Manage your events smoothly with ease.
          </p>
        </div>
{/* 4 card  */}

       
       <div className=" p-2  bg-white">
      {/* <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Main Features:</h3> */}
      <ul className="grid   md:grid-cols-3  lg:grid-cols-4    gap-4    ">
        {features.map((feature, index) => (
          <li
            key={index}
            className="relative w-72 p-4 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:shadow-[0_0_15px_var(--clr),0_0_30px_var(--clr)] group"
            style={{
              '--clr': feature.color,
              '--i': index,
            }}
          >
            <div
              className="absolute w-10 h-[400%] opacity-20 transition-all duration-1000 animate-[spin_8s_linear_infinite]"
              style={{
                background: `linear-gradient(0deg, transparent 30%, ${feature.color} 70%)`,
                animationDelay: `calc(2s * ${index})`,
              }}
            />
            <div className="absolute inset-1 bg-white transition-all duration-500 z-[1] group-hover:bg-[var(--clr)] group-hover:opacity-5" />
            <div className="relative z-[2] flex flex-col items-center">
              <feature.icon className="text-5xl mb-4 transition-colors duration-300" style={{ color: feature.color }} />
              <div className="text-xl font-bold mb-2 text-gray-800 group-hover:text-gray-900">{feature.title}</div>
              <p className="text-sm text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
        </div>
        </div>
      </section>

    </>
  );
}

  export default TicketingManagementSection;
