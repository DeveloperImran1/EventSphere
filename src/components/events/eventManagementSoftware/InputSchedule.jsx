"use client";
import Image from "next/image";
import React, { useState } from "react";
import swal from "sweetalert";

const InputSchedule = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        country: "",
        eventName: "",
        eventIndustry: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here
        console.log(formData);

        // Display success message using SweetAlert
        swal("Success!", "Your registration has been submitted successfully!", "success");
    };

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center bg-gray-100 p-10 gap-4 lg:gap-10">
            {/* Left side with image and text */}
            <div className="lg:w-1/2 flex flex-col items-center">
                <Image
                    src="https://img.freepik.com/free-photo/well-dressed-businesspeople-office_1098-3175.jpg?ga=GA1.1.245323466.1722741120&semt=ais_hybrid"
                    alt="Event Image"
                    layout="responsive"
                    objectFit="cover"
                    height={500}
                    width={500}
                    className="w-full h-auto mb-5"
                />
                <h2 className="text-2xl font-bold mb-2">Love the Smell Of Events Every Morning Like Us?</h2>
                <h4>We are Totally Obsessed To Make Your Event Succeed!</h4>
                <p className="text-lg">
                    Please Fill Out The Form To Request A Demo & Let us Convince You Why You Must Switch To Eventify!
                    PS Nobody can match our pricing
                </p>
            </div>

            {/* Right side with form */}
            <div className="lg:w-1/2 bg-white p-8 shadow-lg rounded-lg">
                <h3 className="text-xl font-bold mb-6">Event Registration Form</h3>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-4">
                        {/* Input fields */}
                        {/* First Name */}
                        <div>
                            <label className="block text-sm font-medium mb-1">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="Enter your first name"
                                className="w-full p-2 rounded shadow-md focus:outline-none focus:shadow-lg hover:shadow-lg transition-shadow"
                                required
                            />
                        </div>
                        {/* Last Name */}
                        {/* ... Other input fields remain the same */}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full p-3 bg-blue-600 text-white font-bold rounded shadow hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InputSchedule;
