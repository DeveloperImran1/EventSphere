
import React from 'react';
import { MdList, MdAssignment, MdPersonAdd, MdUpload } from 'react-icons/md'; // Import React Icons
import styles from './TicketingManagementSection.module.css'; // Import the CSS module

const TicketingManagementSection = () => {
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

      <section className={styles.ticketingManagement}>
        <div className={styles.container}>
          <h2 className="text-center font-bold  text-black  lg:text-5xl md:text-3xl text-2xl  font-sans">Boost Event Success with  Our Powerful   <br /> Ticketing Management Software</h2>
          <p className={styles.description}>
            Our ticketing platform simplifies event management, enhances user experience, and  <br />  helps increase your ticket sales.Manage your events smoothly with ease.
          </p>
          <div className={styles.features}>
            <h3 className={styles.featuresHeading}>Main Features:</h3>
            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                <MdList className={styles.featureIcon} />
                <div className={styles.featureTitle}>Waitlist</div>
                <p className={`${styles.featureDescription} text-black`}>Even if the event is full, attendees can be added to a waitlist, and you can easily confirm them.</p>
              </li>
              <li className={styles.featureItem}>
                <MdAssignment className={styles.featureIcon} />
                <div className={styles.featureTitle}>Registration</div>
                <p className={`${styles.featureDescription} text-black`}>Attendees can easily sign up through a simple form.</p>
              </li>
              <li className={styles.featureItem}>
                <MdPersonAdd className={styles.featureIcon} />
                <div className={`${styles.featureTitle}`}>RSVP</div>
                <p className={`${styles.featureDescription} text-black`}>A unique RSVP system for attendees to make joining the event easier.</p>
              </li>
              <li className={styles.featureItem}>
                <MdUpload className={styles.featureIcon} />
                <div className={styles.featureTitle}>Bulk Import</div>
                <p className={`${styles.featureDescription} text-black`}>Easily upload attendee lists in Excel/CSV format.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </>
  );
}

  export default TicketingManagementSection;
