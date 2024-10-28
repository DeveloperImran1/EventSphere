'use client'

import React, { useState } from 'react'
import { ChevronDownIcon } from 'lucide-react'

const Faq= [
  {
    question: "How can I set up event ticketing on Eventify?",
    answer: "To set up event ticketing on Eventify, you must select the Tickets feature, select ticket types, set prices, configure payment options, and publish your tickets."
  },
  {
    question: "Can I offer different ticket types and pricing options on Eventify?",
    answer: "Yes, Eventify event ticketing software website allows you to create tickets with different pricing options, such as free admission, VIP, early bird, or group tickets. To sell tickets for an event, you can set prices, quantities, and availability for each ticket type."
  },
  {
    question: "How can attendees purchase tickets for an event?",
    answer: "Attendees can easily purchase tickets for any event on Eventify event management and ticketing website, by visiting the auto-created event ticket page, selecting the desired ticket type and quantity, and proceeding with the secure online payment process."
  },
  {
    question: "What payment methods are supported on Eventify for ticket purchases?",
    answer: "Eventify event ticket seller supports online payment methods using the Stripe payment platform. Attendees can securely use the preferred payment method during the ticket purchase process."
  },
  {
    question: "Can I track ticket sales and attendee registrations on event Eventify event ticketing system?",
    answer: "Yes, Eventify event tickets and registration feature provides a dashboard where you can track real-time ticket sales, monitor registration details, and access attendee details. You can generate reports and analytics to gain insights into your event's performance."
  },
  {
    question: "Can I customize the appearance of event tickets using Eventify event ticketing platform?",
    answer: "Yes, Eventify allows you to customize the appearance of event tickets by adding your event branding, logos, event details, and additional information. You can create visually appealing and personalized tickets."
  },
  {
    question: "How are event tickets delivered to attendees?",
    answer: "Eventify offers digital ticket delivery options. After a successful ticket purchase, attendees receive their tickets via email. They can also access and download their tickets from their Eventify accounts from the web app."
  },
  {
    question: "Can I offer discounts or promotional codes for event tickets on Eventify online event platform system?",
    answer: "Yes, Eventify allows you to create discount codes for event tickets. You can set discounts as a percentage or fixed amount and apply them to specific ticket types or for a limited time."
  },
  {
    question: "How can I check attendees into my event using the ticketing feature?",
    answer: "Eventify offers a check-in via the admin portal, manually through the app or QR code scanning feature, allowing you to check attendees into your event using their digital or printed tickets. This helps you manage event entry efficiently."
  },
  {
    question: "Can I issue refunds or handle ticket cancellations?",
    answer: "Yes, Eventify provides refunds and ticket cancellations directly through Stripe. You can process refunds according to your refund policy and handle ticket cancellations through the platform."
  },
  {
    question: "Is there any customer support for event ticketing-related questions?",
    answer: "Yes, Eventify offers customer support through various email, live chat, or phone channels. Their dedicated support team can assist you with any ticketing-related inquiries or issues."
  },
  {
    question: "Can I integrate Eventify's ticketing feature with other event management tools?",
    answer: "Eventify offers integrations with other event management tools, such as registration management and session ticketing, thus providing a comprehensive event management solution."
  },
  {
    question: "Can I generate reports and analytics on ticket sales and attendee data on event platforms?",
    answer: "Yes, Eventify provides reporting and analytics features that allow you to generate detailed reports on ticket sales, revenue, attendee demographics, and other vital metrics. These insights help you measure the success of your event."
  },
  {
    question: "Are event platforms' ticketing features secure for online transactions?",
    answer: "Yes, Eventify prioritizes the security of online transactions. The platform implements industry-standard security measures and encryption protocols to protect ticket purchases and payment information."
  }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleQuestion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className="container mx-auto w-full     p-8">
        <h2 className="text-4xl font-bold text-gray-800  font-serif  m-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {Faq.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-semibold text-gray-700">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 mt-2' : 'max-h-0'
                }`}
              >
                <p className="p-4 bg-white text-gray-600 rounded-lg border border-gray-200">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }