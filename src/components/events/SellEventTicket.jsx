// components/TicketingManagementSection.js

import React from 'react';
import { MdList, MdAssignment, MdPersonAdd, MdUpload } from 'react-icons/md'; // Import React Icons
import styles from './TicketingManagementSection.module.css'; // Import the CSS module

const TicketingManagementSection = () => {
  return (
    <section className={styles.ticketingManagement}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Boost Event Success with Our Powerful Ticketing Management Software</h2>
        <p className={styles.description}>
          Our ticketing platform simplifies event management, enhances user experience, and helps increase your ticket sales. Manage your events smoothly with ease.
        </p>
        <div className={styles.features}>
          <h3 className={styles.featuresHeading}>Main Features:</h3>
          <ul className={styles.featuresList}>
            <li className={styles.featureItem}>
              <MdList className={styles.featureIcon} />
              <div className={styles.featureTitle}>Waitlist</div>
              <p className={styles.featureDescription}>Even if the event is full, attendees can be added to a waitlist, and you can easily confirm them.</p>
            </li>
            <li className={styles.featureItem}>
              <MdAssignment className={styles.featureIcon} />
              <div className={styles.featureTitle}>Registration</div>
              <p className={styles.featureDescription}>Attendees can easily sign up through a simple form.</p>
            </li>
            <li className={styles.featureItem}>
              <MdPersonAdd className={styles.featureIcon} />
              <div className={styles.featureTitle}>RSVP</div>
              <p className={styles.featureDescription}>A unique RSVP system for attendees to make joining the event easier.</p>
            </li>
            <li className={styles.featureItem}>
              <MdUpload className={styles.featureIcon} />
              <div className={styles.featureTitle}>Bulk Import</div>
              <p className={styles.featureDescription}>Easily upload attendee lists in Excel/CSV format.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TicketingManagementSection;
