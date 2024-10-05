'use client'

import React, { useState } from 'react';
import { Calendar, MapPin, DollarSign, User, Users, FileText, Briefcase, Camera, Building, Mail, Phone } from 'lucide-react';

export default function EventRequestForm() {
  const [formData, setFormData] = useState({
    title: '',
    dateTime: '',
    photo: '',
    companyName: '',
    price: '',
    category: '',
    type: '',
    location: {
      country: '',
      city: '',
      venue: '',
    },
    sponsor: {
      name: '',
      logo: '',
    },
    contactInfo: {
      email: '',
      phone: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNestedChange = (e, nestedField) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [nestedField]: {
        ...prevState[nestedField],
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('https://i.postimg.cc/MZ7dYZLS/backgrundimg.webp')] bg-center bg-cover">
    <div className="w-full max-w-4xl p-8 backdrop-blur-md bg-white/30 rounded-lg border border-white/50">
      <form onSubmit={handleSubmit} className="space-y-6  text-lg  ">
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-200 " />
            <input
              type="text"
              name="title"
              id="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white py-2 pl-10 pr-3  placeholder-black placeholder-opacity-100 focus:outline-none focus:border-blue-500"
              placeholder="Event Title"
            />
          </div>
  
          <div className="relative">
            <input
              type="datetime-local"
              name="dateTime"
              id="dateTime"
              required
              value={formData.dateTime}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white py-2 px-3  placeholder-black placeholder-opacity-100 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <Camera className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-200 " />
            <input
              type="url"
              name="photo"
              id="photo"
              required
              value={formData.photo}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white py-2 pl-10 pr-3  placeholder-black placeholder-opacity-100 focus:outline-none focus:border-blue-500"
              placeholder="Event Photo URL"
            />
          </div>
  
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-200 " />
            <input
              type="text"
              name="companyName"
              id="companyName"
              required
              value={formData.companyName}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white py-2 pl-10 pr-3  placeholder-black placeholder-opacity-100 focus:outline-none focus:border-blue-500"
              placeholder="Company Name"
            />
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-200 " />
            <input
              type="text"
              name="country"
              id="country"
              required
              value={formData.location.country}
              onChange={(e) => handleNestedChange(e, 'location')}
              className="w-full bg-transparent border-b-2 border-white py-2 pl-10 pr-3  placeholder-black placeholder-opacity-100 focus:outline-none focus:border-blue-500"
              placeholder="Country"
            />
          </div>
  
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-200 " />
            <input
              type="text"
              name="city"
              id="city"
              required
              value={formData.location.city}
              onChange={(e) => handleNestedChange(e, 'location')}
              className="w-full bg-transparent border-b-2 border-white py-2 pl-10 pr-3  placeholder-black placeholder-opacity-100 focus:outline-none focus:border-blue-500"
              placeholder="City"
            />
          </div>
  
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-200 " />
            <input
              type="text"
              name="venue"
              id="venue"
              required
              value={formData.location.venue}
              onChange={(e) => handleNestedChange(e, 'location')}
              className="w-full bg-transparent border-b-2 border-white py-2 pl-10 pr-3  placeholder-black placeholder-opacity-100 focus:outline-none focus:border-blue-500"
              placeholder="Venue"
            />
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-200 " />
            <input
             
              name="price"
              id="price"
              required
              value={formData.price}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white py-2 pl-10 pr-3 text-black placeholder-black placeholder-opacity-100 focus:outline-none focus:border-blue-500"
              placeholder="Event Price"
            />
          </div>
  
          <select
            name="category"
            id="category"
            required
            value={formData.category}
            onChange={handleChange}
            className="w-full bg-transparent border-b-2 border-white py-2 px-3  placeholder-black placeholder-opacity-100 focus:outline-none focus:border-blue-500"
          >
            <option value="" disabled className="text-gray-700">Select Category</option>
            <option value="music" className="text-gray-700">Music</option>
            <option value="sports" className="text-gray-700">Sports</option>
            <option value="theater" className="text-gray-700">Theater</option>
            <option value="comedy" className="text-gray-700">Comedy</option>
          </select>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <select
            name="type"
            id="type"
            required
            value={formData.type}
            onChange={handleChange}
            className="w-full bg-transparent border-b-2 border-white py-2 px-3  placeholder-black placeholder-opacity-100 focus:outline-none focus:border-blue-500"
          >
            <option value="" disabled className="text-black">Select Type</option>
            <option value="onsite" className="text-gray-700">Onsite</option>
            <option value="online" className="text-gray-700">Online</option>
          </select>
        </div>
  
        <h3 className="text-xl font-semibold  mt-8 mb-4">Sponsor Info</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-200 " />
            <input
              type="text"
              name="name"
              id="sponsorName"
              required
              value={formData.sponsor.name}
              onChange={(e) => handleNestedChange(e, 'sponsor')}
              className="w-full bg-transparent border-b-2 border-white py-2 pl-10 pr-3  placeholder-black placeholder-opacity-100 focus:outline-none focus:border-blue-500"
              placeholder="Sponsor Name"
            />
          </div>
  
          <div className="relative">
            <input
              type="url"
              name="logo"
              id="sponsorLogo"
              required
              value={formData.sponsor.logo}
              onChange={(e) => handleNestedChange(e, 'sponsor')}
              className="w-full bg-transparent border-b-2 border-white py-2 pl-10 pr-3  placeholder-black placeholder-opacity-100 focus:outline-none focus:border-blue-500"
              placeholder="Sponsor Logo URL"
            />
          </div>
        </div>
  
        <h3 className="text-xl font-semibold  mt-8 mb-4">Contact Info</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-200 " />
            <input
              type="email"
              name="email"
              id="contactEmail"
              required
              value={formData.contactInfo.email}
              onChange={(e) => handleNestedChange(e, 'contactInfo')}
              className="w-full bg-transparent border-b-2 border-white py-2 pl-10 pr-3  placeholder-black placeholder-opacity-100 focus:outline-none focus:border-blue-500"
              placeholder="Contact Email"
            />
          </div>
  
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-200 " />
            <input
              type="tel"
              name="phone"
              id="contactPhone"
              required
              value={formData.contactInfo.phone}
              onChange={(e) => handleNestedChange(e, 'contactInfo')}
              className="w-full bg-transparent border-b-2 border-white py-2 pl-10 pr-3  placeholder-black placeholder-opacity-100 focus:outline-none focus:border-blue-500"
              placeholder="Contact Phone"
            />
          </div>
        </div>
  
  
        <button
          type="submit"
          className="w-full py-2 bg-blue-600  text-white font-bold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Send Request
        </button>
      </form>
    </div>
  </div>
  

  );
}
