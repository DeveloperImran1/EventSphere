import React from 'react';
import { faTicketAlt, faTags, faCalendarCheck, faCogs } from 'react-icons/fa';

const features = [
  {
    title: 'Easy Ticket Assignment',
    description: 'Assign and distribute event tickets with ease.',
    icon: faTicketAlt,
  },
  {
    title: 'Coupons & Discounts',
    description: 'Provide coupons, ticket expiry, discounts and more.',
    icon: faTags,
  },
  {
    title: 'Custom Domain',
    description: 'Custom domain and branded white-labeled event ticketing.',
    icon: faCalendarCheck,
  },
  {
    title: 'Advanced Features',
    description: 'Advanced features for a comprehensive event management experience.',
    icon: faCogs,
  },
];

const TicketManagesystem = () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 border-b-4 w-1/3 border-teal-300 pb-2">
        Kickstart Your Event Success With Our Event Ticketing System
      </h2>
      <p className="text-lg text-white mb-8">
        Our online ticketing solution is completely free for event organizers. The intuitive box office dashboard makes it easy to launch any type of event with a ticket-purchasing experience designed around marketing to increase your sales and revenue.
      </p>
      <div className="relative pl-6 md:pl-12">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-emerald-500"></div>
        <div className="flex flex-wrap gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
              style={{
                background: `linear-gradient(135deg, ${index % 2 === 0 ? '#42A6E3' : '#FF56F6'} 0%, ${index % 2 === 0 ? '#FF56F6' : '#42A6E3'} 100%)`,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-500 mb-4"
                style={{ fontSize: '2rem' }}
              >
                <feature.icon className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-md text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketManagesystem;
