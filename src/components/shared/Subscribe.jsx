"use client"

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Subscribe = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Show success toast
        toast.success('Successfully subscribed!')

        // Clear the input field
        setEmail('');
    };
    return (
        <div className="w-full px-4 mx-auto text-[#dbe2fb] leading-7 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px] pb-11">
            <div
                className="relative overflow-hidden rounded-[20px] p-[60px] px-[20px] text-center bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'linear-gradient(0deg, rgba(116, 0, 186, 0.8), rgba(15, 90, 224, 0.8)), url(https://i.ibb.co/L0P40RX/newslater-bg01.jpg)',
                }}
            >
                <div className="relative z-10 max-w-[555px] mx-auto text-center uppercase text-white leading-[1.3]">
                    {/* Content */}
                    <h5 className='text-[#31d7a9] mb-4 md:mb-[23px] sm:text-[24px] font-[500]'>Subscribe to Boleto</h5>
                    <h1 className='text-[24px] sm:text-[35px] mb-[50px] -mt-[10px] font-[700]'>Get Exclusive Benefits</h1>
                    <form className="mb-[34px] relative" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-[50px] pr-[160px] w-full text-[#99abe2] border border-white/40 rounded-[25px] pl-[20px] shadow-[0px_3px_10px_rgba(0,_0,_0,_0.1)] bg-transparent outline-none"
                            required
                        />
                        <button
                            type='submit'
                            className='px-10 rounded-[25px] h-[50px] border-0 text-[#dbe2fb] absolute right-0 bg-gradient-to-tr from-[#5560ff] via-[#aa52a1] to-[#ff4343]'
                        >
                            Subscribe
                        </button>
                    </form>
                    <p className="text-[16px] capitalize text-[#dbe2fb] leading-7 mt-6 -mb-5">We respect your privacy, so we never share your info</p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Subscribe;