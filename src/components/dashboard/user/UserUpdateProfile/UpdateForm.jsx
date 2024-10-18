"use client";
import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";

// Client Component (form handling part)
const UpdateFrom = () => {
    const session = useSession();
    const [isLoading, setIsLoading] = useState(false)

    const [formData, setFormData] = useState({
        name: session?.data?.user?.name,
        specialty: session?.data?.user?.specialty,
        skills: session?.data?.user?.skills,
        gender: session?.data?.user?.gender,
        birth: session?.data?.user?.birth,
        phone: session?.data?.user?.phone,
        email: session?.data?.user?.email,
        country: session?.data?.user?.country,
        city: session?.data?.user?.city,
        city: session?.data?.user?.aboutMe,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        try {
            setIsLoading(true)
            const result = await axios.put(
                `process.env.SERVER_SIDE_BASE_URL/user/${session?.data?.user?.email}`,
                formData
            )
            console.log(result)
            if (result?.data?.modifiedCount) {
                console.log(result)
                toast.success('Data Updated Successfully!')
            }
            setIsLoading(false)
            e.target.reset()

        } catch (err) {
            setIsLoading(false)

        }
    };
    const { data: userInfo } = useQuery({
        queryKey: ["users"],
        queryFn: () =>
            fetch(`process.env.SERVER_SIDE_BASE_URL/user/${session?.data?.user?.email}`).then((res) =>
                res.json()
            ),
    });
    console.log(userInfo);

    return (
        <div>
            <h2 className="text-start text-xl font-semibold border-b py-5 mb-4 px-10">
                Account setup
            </h2>
            <form className=" px-4 md:px-10 pt-7" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-5">
                        <label className="block mb-1 text-sm font-medium">Name</label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            defaultValue={userInfo?.name}
                            placeholder={userInfo ? userInfo?.name : "Name"} className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"

                        />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-1 text-sm font-medium">Surname</label>
                        <input
                            name="surname"
                            value={formData.surname}
                            onChange={handleInputChange}
                            className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                            placeholder={userInfo ? userInfo?.surname : "Surname"}

                        />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-1 text-sm font-medium">Specialty</label>
                        <input
                            name="specialty"
                            value={formData.specialty}
                            onChange={handleInputChange}
                            defaultValue={userInfo?.specialty}
                            className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                            placeholder={userInfo ? userInfo?.specialty : "Specialty"}
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-1 text-sm font-medium">Skills</label>
                        <input
                            name="skills"
                            value={formData.skills}
                            onChange={handleInputChange}
                            defaultValue={userInfo?.skills}
                            className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                            placeholder={userInfo ? userInfo?.skills : "Skills"}

                        />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-1 text-sm font-medium">Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                        >
                            <option>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className="mb-5">
                        <label className="block mb-1 text-sm font-medium">Birth</label>
                        <input
                            name="birth"
                            value={formData.birth}
                            defaultValue={userInfo?.birth}
                            onChange={handleInputChange}
                            className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                            placeholder={userInfo?.birth || "Birth (dd.mm.yyyy)"}

                        />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-1 text-sm font-medium">Phone</label>
                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"

                            placeholder={userInfo ? userInfo?.phone : "Phone"}
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-1 text-sm font-medium">Email address</label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            readOnly
                            defaultValue={session?.data?.user?.email}
                            className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                            placeholder={userInfo ? userInfo?.email : "Email address"}
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-1 text-sm font-medium">Country</label>
                        <select
                            name="country"
                            value={formData.country}
                            // value={ userInfo ? userInfo?.country : formData?.country}

                            onChange={handleInputChange}
                            className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                        >
                            <option>Country</option>
                            <option>Bangladesh</option>
                            <option>Russia</option>
                            <option>USA</option>
                            <option>India</option>
                        </select>
                    </div>
                    <div className="mb-5">
                        <label className="block mb-1 text-sm font-medium">City</label>
                        <input
                            name="city"
                            placeholder={userInfo ? userInfo?.city : "City"}
                            value={formData.city}
                            onChange={handleInputChange}
                            defaultValue={userInfo?.city}
                            className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"

                        />
                    </div>
                </div>
                <div className="mb-5">
                    <label className="block mb-1 text-sm font-medium">About Me</label>
                    <textarea
                        name="aboutMe"
                        value={formData.aboutMe}
                        onChange={handleInputChange}
                        className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                        placeholder={userInfo ? userInfo?.aboutMe : "About Me"}

                    />
                </div>
                <div className="col-span-2">
                    <button
                        type="submit"
                        className=" -mt-6 mb-6 bg-green-500 text-white py-2 px-4 rounded-lg max-w-52"
                    > {isLoading ? <p>Loading..</p> : "Update"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateFrom;