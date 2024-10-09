"use client";
import Link from "next/link";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { HiOutlineEye } from "react-icons/hi";
import Image from "next/image";
import { useState } from "react";
import Logo from "@/components/shared/Logo";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import SocialSignIn from "@/components/shared/SocialSignIn";
import Swal from 'sweetalert2'
import { TbFidgetSpinner } from "react-icons/tb";


const LoginPage = () => {

    const successfullySignIn = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully SignIn",
            showConfirmButton: false,
            timer: 1500
        });
    }
    const errorSignIn = () => {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "SignIn Error",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const [viewPass, setViewPass] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // navigate kore onno page conditinaly jaoer jonno
    const router = useRouter();
    const searchParams = useSearchParams();
    const path = searchParams.get("redirect");
    console.log("search params is a ", searchParams, "path is a ", path)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setLoading(true)
        // nextJs dia login korar way: 
        const resp = await signIn('credentials', {
            email, password,
            redirect: true,
            callbackUrl: path ? path : "/"
        });
        console.log("responce is", resp)
        setLoading(false)
        // thik vabe login hole home page a pathia dibo.
        if (resp.status === 200) {
            successfullySignIn()
        }
        else{
            errorSignIn()
        }
    };

    return (
        <div className="">
            <div
                style={{ backgroundImage: `url('https://i.postimg.cc/13VKgtYc/top-banner.png')` }}
                className="bg-cover bg-center pb-16"
            >
                <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row text-white">
                    <div className="w-full md:w-1/2 my-5 md:mt-14 p-3">
                        <div className="max-w-[550px] mb-44">
                            <h1 className="pb-[30px] mb-[30px] font-bold text-3xl md:border-b text-center md:text-start md:ml-0">
                                <Logo></Logo>
                            </h1>
                            <div className="hidden md:block">
                                <h1 className="font-semibold text-2xl leading-9 mb-6">
                                    Why choose EventBookings for your <br /> event ticketing?
                                </h1>
                                <ul className="mb-4">
                                    <li>
                                        <p className="text-[1rem] mb-1 font-semibold text-white flex gap-x-2">
                                            <span>
                                                <IoIosCheckmarkCircle className="text-2xl text-green-500" />
                                            </span>
                                            Simple, easy-to-use platform
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-[1rem] mb-1 font-semibold text-white flex gap-x-2">
                                            <span>
                                                <IoIosCheckmarkCircle className="text-2xl text-green-500" />
                                            </span>
                                            Lowest ticketing fees
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-[1rem] mb-1 font-semibold text-white flex gap-x-2">
                                            <span>
                                                <IoIosCheckmarkCircle className="text-2xl text-green-500" />
                                            </span>
                                            Dedicated customer support team
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-[1rem] mb-1 font-semibold text-white flex gap-x-2">
                                            <span>
                                                <IoIosCheckmarkCircle className="text-2xl text-green-500" />
                                            </span>
                                            Powerful features
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="hidden md:block text-white">
                            <h2 className="font-bold text-2xl my-12">
                                10,000+ communities and organisers worldwide sell with
                                EventBookings
                            </h2>
                            <div className="grid grid-cols-4 gap-x-10 gap-10 w-4/5">
                                {/* brand logos */}
                                {/* img1 */}
                                <div>
                                    <Image
                                        src="https://i.postimg.cc/5tvpr0BN/org-1.png"
                                        height={1000}
                                        width={1000}
                                        alt="logo"
                                        className=""
                                    />
                                </div>
                                {/* img2 */}
                                <div>
                                    <Image
                                        src="https://i.postimg.cc/MTm5WF3C/org-2.png"
                                        height={1000}
                                        width={1000}
                                        alt="logo"
                                        className=""
                                    />
                                </div>
                                {/* img3 */}
                                <div>
                                    <Image
                                        src="https://i.postimg.cc/NMcbvcD8/org-3.png"
                                        height={1000}
                                        width={1000}
                                        alt="logo"
                                        className=""
                                    />
                                </div>
                                {/* img4 */}
                                <div>
                                    <Image
                                        src="https://i.postimg.cc/6q60TfDy/org-4.png"
                                        height={1000}
                                        width={1000}
                                        alt="logo"
                                        className=""
                                    />
                                </div>
                                {/* img5 */}
                                <div>
                                    <Image
                                        src="https://i.postimg.cc/br6Rn2hL/org-5.png"
                                        height={1000}
                                        width={1000}
                                        alt="logo"
                                        className="w-10/12 p-1"
                                    />
                                </div>
                                {/* img6 */}
                                <div>
                                    <Image
                                        src="https://i.postimg.cc/9FMbh1dk/org-6.png"
                                        height={1000}
                                        width={1000}
                                        alt="logo"
                                        className="w-10/12"
                                    />
                                </div>
                                {/* img7 */}
                                <div>
                                    <Image
                                        src="https://i.postimg.cc/mZVjJKHM/org-7.png"
                                        height={1000}
                                        width={1000}
                                        alt="logo"
                                        className="w-10/12 p-3"
                                    />
                                </div>
                                {/* img8 */}
                                <div>
                                    <Image
                                        src="https://i.postimg.cc/br6Rn2hL/org-5.png"
                                        height={1000}
                                        width={1000}
                                        alt="logo"
                                        className="w-10/12 p-1"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right side content */}
                    <div className="max-w-[599px] md:w-1/2 md:mr-5 md:mx-auto max-h-[650px] bg-white text-black p-10 shadow-lg flex flex-col justify-center -mt-[220px] mx-5 md:mt-[50px] rounded-xl">
                        <h1 className="text-2xl md:text-[27px] font-bold mb-11 text-center">
                            Log in to your account
                        </h1>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email */}
                            <div>
                                <label className="block text-[15px] font-medium mb-1">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email address"
                                    required
                                    className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-100"
                                />
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <label className="block text-[15px] font-medium mb-1">
                                    Password
                                </label>
                                <input
                                    type={`${!viewPass ? "password" : "text"}`}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    required
                                    className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-100"
                                />
                                <span
                                    onClick={() => {
                                        setViewPass(!viewPass);
                                    }}
                                    className={`${!viewPass
                                        ? "absolute right-4 top-10"
                                        : "absolute right-4 top-10 text-gray-400"
                                        }`}
                                >
                                    <HiOutlineEye className="text-2xl" />
                                </span>
                            </div>

                            {/* Log in Button */}
                            <button
                                type="submit"
                                className="bg-green-500 text-white rounded-md p-3 w-full font-bold hover:bg-green-600"
                            >
                                {
                                    loading ? <p className="flex flex-col justify-center items-center"><TbFidgetSpinner size={22} className="text-white animate-spin "></TbFidgetSpinner></p> : "Login"
                                }

                            </button>
                        </form>


                        {/* Sign up with Google, Facebook, Apple */}
                        <SocialSignIn></SocialSignIn>

                        {/* Sign up Link */}
                        <p className="text-center mt-4">
                            Dont have an account?
                            <Link href="register" className="text-green-500 font-bold hover:underline">
                                Sign Up
                            </Link>
                        </p>

                        {/* Terms & Privacy */}
                        <p className="text-center text-xs text-gray-500 mt-2">
                            By clicking Log In, you agree to EventBookings{" "}
                            <Link href="#" className="text-green-500 underline">
                                Terms & Conditions
                            </Link>{" "}
                            and have read the{" "}
                            <Link href="#" className="text-green-500 underline">
                                Privacy Policy
                            </Link>
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
