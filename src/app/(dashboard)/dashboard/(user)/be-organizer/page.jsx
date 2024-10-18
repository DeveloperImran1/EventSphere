"use client"
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";

const BeOrganizer = () => {
    
    const session = useSession()
    const user = session?.data?.user
    console.log("Courant User", user);


    const [formData, setFormData] = useState({
        companyName: "",
        location: "",
        socialPlatform: "",
        CEOEmail: "",
        phone: "",
        country: "",
        city: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form data", formData);
        try {
            const response = await axios.put(`process.env.SERVER_SIDE_BASE_URL/beOrganizer/${user?.email}`, formData);
            if(response?.data?.modifiedCount){
                toast.success('Please Wait Fo Admin Approval! ✋')
            }
            console.log("Response data", response);
        } catch (error) {
            console.log(error)
        }
    };
const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

console.log("Data", formData);

return (
    <div>
        <h2 className="text-start text-xl font-semibold border-b pb-7 px-10">
            Be Organizer
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 px-4 md:px-10 pt-7 ">
            <div className="mb-5">
                <label className="block mb-1 text-sm font-medium">Company Name</label>
                <input
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Company Name" className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                    required
                />
            </div>
            <div className="mb-5">
                <label className="block mb-1 text-sm font-medium">Location</label>
                <input
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                    placeholder="Company Location"
                    required
                />
            </div>
            <div className="mb-5">
                <label className="block mb-1 text-sm font-medium">CEO Email Address</label>
                <input
                    type="email"
                    name="CEOEmail"
                    value={formData.CEOEmail}
                    onChange={handleInputChange}
                    className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                    placeholder="CEO Email Address"
                    required
                />
            </div>
            <div className="mb-5">
                <label className="block mb-1 text-sm font-medium">Social Platform</label>
                <input
                    type="url"
                    name="socialPlatform"
                    value={formData.socialPlatform}
                    onChange={handleInputChange}
                    className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                    placeholder="Social Platform Links"
                    required
                />
            </div>
            <div className="mb-5">
                <label className="block mb-1 text-sm font-medium">Phone</label>
                <input
                    name="phone"
                    type="number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                    placeholder="Phone"
                    required
                />
            </div>
            <div className="mb-5">
                <label className="block mb-1 text-sm font-medium">Email Address</label>
                <input
                    name="email"
                    value={user?.email}
                    disabled
                    className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                    placeholder="Email Address"
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
                    <option>Singapore</option>
                    <option>Russia</option>
                    <option>USA</option>
                    <option>India</option>
                </select>
            </div>
            <div className="mb-5">
                <label className="block mb-1 text-sm font-medium">City</label>
                <input
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="border py-4 px-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-green-100"
                    required
                />
            </div>
            <div className="col-span-2">
                <button
                    type="submit"
                    className=" -mt-6 mb-6 bg-green-500 text-white py-2 px-4 rounded-lg max-w-52"
                >
                    Request
                </button>
            </div>
        </form>
    </div>
);
};

export default BeOrganizer;