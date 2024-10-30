"use client"
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import SectionTitleSimple from '@/components/shared/SectionTitleSimple';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is a Smart Event Management Platform?",
      answer: "A Smart Event Management Platform is a technology-driven system that helps manage events in a more efficient way. It offers features like ticket sales, seat selection, event updates, and various other functionalities to simplify event management."
    },
    {
      question: "What are the benefits of an online ticket selling platform?",
      answer: "The benefits include easy access, allowing tickets to be purchased anytime, anywhere. It provides real-time updates on ticket availability, enables smart seat selection where users can choose their preferred seats, and offers a secure payment gateway to ensure safe online transactions."
    },
    {
      question: "How does the interactive seat selection feature work?",
      answer: "The interactive seat selection feature allows users to choose their seats from a visual seat map, displaying seat locations and prices, which helps users make informed decisions."
    },
    {
      question: "What are the key responsibilities of the admin in a smart event management platform?",
      answer: "The admin is responsible for managing events, overseeing ticket sales, and monitoring user activities. They can create, update, or delete events, manage seat availability, and set pricing rules. Additionally, the admin handles user management, including registering organizers, approving events, and monitoring feedback or complaints from attendees."
    },
    {
      question: "How does the admin manage payments and transactions?",
      answer: "The admin oversees all payment-related activities, including processing ticket payments, handling refunds, and ensuring secure payment gateway integration. They can access detailed transaction histories to monitor sales performance and financial reporting. The admin can also set up payment methods, configure payment settings, and integrate third-party payment gateways like PayPal or Stripe."
    },
    {
      question: "What are the benefits of using QR codes for tickets?",
      answer: "QR codes facilitate quick entry by allowing attendees to scan the code at the venue. It supports paperless ticketing, reducing the need for physical tickets and being environmentally friendly. QR codes also help ensure security by validating the ticket's authenticity"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='container mx-auto'>
      <div className='max-w-4xl mx-auto mb-16'>
        <SectionTitleSimple title="Frequently Asked Questions" subtitle="Our Frequently Asked Questions section provides detailed answers to common queries about our platform. Whether you need help with booking, payments, event management, or navigating the site, you will find the information you need here. We aim to make your experience smooth and hassle-free by addressing your concerns."></SectionTitleSimple>
    

      </div>
      <div className="w-full bg-white grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: FAQ Section */}
        <div className="w-full">


          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-all duration-300 ease-in-out"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-medium text-left text-gray-700">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`transform transition-transform duration-300 ease-in-out text-gray-500 ${openIndex === index ? 'rotate-180' : 'rotate-0'
                      }`}
                    size={20}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${openIndex === index
                    ? 'max-h-[500px] opacity-100'
                    : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="p-6 bg-gray-50 text-gray-600 border-t border-gray-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image Section */}
        <div className="w-full bg-white grid gap-5">
          {/* Top Image */}
          <div className="w-full">
            <Image
              src="https://st3.depositphotos.com/1008648/18224/i/450/depositphotos_182247900-stock-photo-businessman-touching-hand-drawn-question.jpg"
              alt="Faq image"
              height={500}
              width={500}
              className="w-full h-full object-cover rounded-lg shadow-md mb-4"
            />
          </div>

          {/* Bottom Two Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full">
              <Image
                src="https://st2.depositphotos.com/1637332/6198/i/450/depositphotos_61989025-stock-photo-business-button-faq.jpg"
                alt="Faq image"
                height={500}
                width={500}
                className="w-full h-full object-cover rounded-lg shadow-md mb-4"
              />
            </div>
            <div className="w-full">
              <Image
                src="https://static.vecteezy.com/system/resources/thumbnails/023/331/025/small_2x/hand-hold-wooden-cube-block-in-question-mark-mean-what-on-cement-table-background-column-of-wooden-blocks-with-question-sign-mark-copy-space-faq-frequently-asked-questions-answer-information-photo.jpg"
                alt="Faq image"
                height={500}
                width={500}
                className="w-full h-full object-cover rounded-lg shadow-md mb-4"
              />
            </div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default FAQSection;