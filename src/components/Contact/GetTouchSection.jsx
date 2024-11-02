"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const GetTouchSection = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_wr0qxrp",
        "template_i3phqje",
        templateParams,
        "mG0AHrO3300phZ9Kb"
      )
      .then(() => {
        toast.success("Message Sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Email error:", error);
      });
  };

  return (
    <div className="py-20 bg-[#f9fafb] text-gray-700">
      {/* Content Container */}
      <div className="relative w-full px-4 mx-auto lg:max-w-[960px] xl:max-w-[1170px]">
        <div className="flex flex-col md:flex-row -mx-4">
          {/* Form Section */}
          <div className="w-full md:w-1/2 px-4 md:max-w-[58.333333%]">
            <div className="text-left mb-10">
              <span className="text-[#1b85db] uppercase text-[20px] mb-2">
                Contact Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600">
                We love to talk about how we can work together. Send us a
                message below, and well respond as soon as possible.
              </p>
            </div>
            <form onSubmit={sendEmail} ref={form} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  className="w-full h-40 px-4 py-3 border border-gray-300 rounded-md resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#1b85db] text-white font-semibold rounded-md hover:bg-[#29b592] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right-Side Image */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0 px-4 flex justify-center items-center">
            <Image
              
              src="https://i.postimg.cc/PJFJ2SGs/contact.jpg"
              alt="Contact Us Illustration"
              width={400}
              height={400}
              className="object-cover rounded-lg md:h-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTouchSection;
