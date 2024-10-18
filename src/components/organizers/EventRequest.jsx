'use client'

import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2'
import './Form.css'
import SectionTitle from '../shared/SectionTitle';
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
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Request successfully ✌️",
      showConfirmButton: false,
      timer: 1500
    });
  };

  // HoverButton component
  const HoverButton = ({ text }) => {
    const buttonRef = useRef(null);

    useEffect(() => {
      const button = buttonRef.current;
      const spanElements = [];

      // Clear button innerHTML and create spans for each character
      button.innerHTML = '';
      for (let char of text) {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        button.appendChild(span);
        spanElements.push(span); // Store spans for reference
      }

      // Event listeners for mouse enter and leave
      const handleMouseEnter = () => {
        spanElements.forEach((span, index) => {
          setTimeout(() => {
            span.classList.add('hover');
          }, index * 50);
        });
      };

      const handleMouseLeave = () => {
        spanElements.forEach((span, index) => {
          setTimeout(() => {
            span.classList.remove('hover');
          }, index * 50);
        });
      };

      // Attach the event listeners
      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup event listeners on component unmount
      return () => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, [text]);

    return (
      <button ref={buttonRef} className="btn my-10  text-xl   " style={{ "--clr": "#7d0bee" }}>
        {text}
      </button>
    );
  };


  return (

    <div>
              <SectionTitle  title="Create and Manage Your Events"
  subTitle="New Event Submission"  > </SectionTitle>

      <div className='all px-10' >

        <div className='box w-full h-[1400px] md:h-[950px] lg:w-4/5  '  >
          <form onSubmit={handleSubmit} action="">
            <h2 className='text-center  border-b-2 my-4 font-serif text-yellow-100'  >Event Information </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4  space-y-5  "> {/* Adjusts the grid to 2 columns with gap */}
              <div className="inputBox">
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                />
                <span>Event Title</span>
                <i></i>
              </div>
              <div className="inputBox">
                <select
                  name="category"
                  id="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select Category</option>
                  <option value="music">Music</option>
                  <option value="sports">Sports</option>
                  <option value="theater">Theater</option>
                  <option value="comedy">Comedy</option>
                </select>

                <i></i>
              </div>



              <div className="inputBox">
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                />
                <span>Company Name</span>
                <i></i>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  name="price"
                  id="price"
                  required
                  value={formData.price}
                  onChange={handleChange}
                />
                <span>  $ Event Price</span>
                <i></i>
              </div>

              <div className="inputBox">

                <input
                  type="file"
                  name="photo"
                  id="photo"
                  required
                  value={formData.photo}
                  onChange={handleChange}
                />

                <i></i>
              </div>
              <div className="inputBox">
                <select
                  name="type"
                  id="type"
                  required
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select Type</option>
                  <option value="onsite">Onsite</option>
                  <option value="online">Online</option>
                </select>

                <i></i>
              </div>

            </div>
            {/* End of the grid */}
            {/* PLACE  */}
            <h3 className="text-xl  text-yellow-100 my-2 font-semibold">Event  Place </h3>

            <div className='grid grid-cols-1  md:grid-cols-3  gap-3 '    >

              <div className="inputBox">
                <input
                  type="text"
                  name="country"
                  id="country"
                  required
                  value={formData.location.country}
                  onChange={(e) => handleNestedChange(e, 'location')}
                />
                <span>Country</span>
                <i></i>
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  name="city"
                  id="city"
                  required
                  value={formData.location.city}
                  onChange={(e) => handleNestedChange(e, 'location')}
                />
                <span>City</span>
                <i></i>
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  name="venue"
                  id="venue"
                  required
                  value={formData.location.venue}
                  onChange={(e) => handleNestedChange(e, 'location')}
                />
                <span>Venue</span>
                <i></i>
              </div>

            </div>

            <h3 className="text-xl  text-yellow-100 my-2 font-semibold">Sponsor Info</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Sponsor Info fields in two columns */}
              <div className="inputBox">
                <input
                  type="text"
                  name="name"
                  id="sponsorName"
                  required
                  value={formData.sponsor.name}
                  onChange={(e) => handleNestedChange(e, 'sponsor')}
                />
                <span>Sponsor Name</span>
                <i></i>
              </div>

              <div className="inputBox">
                <input
                  type="url"
                  name="logo"
                  id="sponsorLogo"
                  required
                  value={formData.sponsor.logo}
                  onChange={(e) => handleNestedChange(e, 'sponsor')}
                />
                <span>Sponsor Logo URL</span>
                <i></i>
              </div>
            </div> {/* End of Sponsor Info grid */}

            <h3 className="text-xl  text-yellow-100 my-2 font-semibold">Contact Info</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Contact Info fields in two columns */}
              <div className="inputBox">
                <input
                  type="email"
                  name="email"
                  id="contactEmail"
                  required
                  value={formData.contactInfo.email}
                  onChange={(e) => handleNestedChange(e, 'contactInfo')}
                />
                <span>Contact Email</span>
                <i></i>
              </div>

              <div className="inputBox">
                <input
                  type="tel"
                  name="phone"
                  id="contactPhone"
                  required
                  value={formData.contactInfo.phone}
                  onChange={(e) => handleNestedChange(e, 'contactInfo')}
                />
                <span>Contact Phone</span>
                <i></i>
              </div>
            </div> {/* End of Contact Info grid */}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4  mt-5 '   >
              <div className="inputBox">
                <input
                  className='placeholder-black'
                  type="datetime-local"
                  name="dateTime"
                  id="dateTime"
                  required
                  value={formData.dateTime}
                  onChange={handleChange}
                />

                <i></i>
              </div>


            </div>


            {/* HoverButton */}

            <HoverButton text="Send Request" />


          </form>



        </div>

      </div>
    </div>
  );
}
