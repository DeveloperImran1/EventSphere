"use client"; 
import Image from 'next/image';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

const GetTouchSection = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            name: form.current.name.value,
            email: form.current.email.value,
            message: form.current.message.value,
        };

        emailjs.send('service_wr0qxrp', 'template_i3phqje', templateParams, 'mG0AHrO3300phZ9Kb')
            .then(() => {
                toast.success('Message Sent');
                form.current.reset();
            })
            .catch((error) => {
                console.error('Email error:', error);
            });
    };

    return (
        <div className='pt-20 md:pt-[130px] text-[16px] text-[#dbe2fb] leading-[18px] bg-[#001232] overflow-x-hidden font-normal'>
            {/* Content Container */}
            <div className="relative">
                {/* Bg-Thumb */}
                <div className="absolute hidden md:block bg-[url('https://i.postimg.cc/PJ2mY7kR/contact-1.jpg')] bg-center bg-no-repeat bg-cover top-0 right-0 h-full w-[calc(50%-15px)]">
                    <div className="bg-[#001232] h-full w-full opacity-[0.702]"></div>
                </div>
                {/* Container */}
                <div className="w-full px-4 mx-auto lg:max-w-[960px] xl:max-w-[1170px]">
                    <div className="flex flex-col md:flex-row flex-wrap -mx-[15px] !justify-between">
                        <div className="w-full md:w-1/2 px-4 md:max-w-[58.333333%] lg:max-w-1/2 xl:max-w-[41.666667%]">
                            <div className="text-left mb-10 sm:mb-15">
                                <span className="block text-[#31d7a9] uppercase text-[18px] mb-2 -mt-2 sm:text-[26px] sm:mb-6 sm:-mt-1">contact us</span>
                                <h2 className="text-[30px] sm:text-[50px] leading-[1.3] sm:leading-[60px] text-white font-bold uppercase mb-4 sm:mb-6 -mt-2 sm:-mt-3">get in touch</h2>
                                <p className="mt-[-11px] leading-6 last:mb-[-8px] sm:text-[16px] sm:max-w-[700px] sm:mx-auto last:sm:mb-[-7px] text-white">We’d love to talk about how we can work together. Send us a message below and we’ll respond as soon as possible.</p>
                            </div>
                            <form ref={form} onSubmit={sendEmail} className="-mb-[25px]">
                                <div className="mb-[25px]">
                                    <label htmlFor="name" className='cursor-pointer inline-block mb-2 text-[17px]'>Name <span className='text-[#f1481f] text-[20]'>*</span></label>
                                    <input type="text" placeholder='Enter Your Full Name' name='name' required
                                        className='w-full h-[60px] outline-none border border-[#12387e] rounded-[10px] pl-[20px] text-[#dbe2fb] bg-transparent'
                                    />
                                </div>
                                <div className="mb-[25px]">
                                    <label htmlFor="email" className='cursor-pointer inline-block mb-2 text-[17px]'>Email <span className='text-[#f1481f] text-[20]'>*</span></label>
                                    <input type="email" placeholder='Enter Your Email' name='email' required
                                        className='w-full h-[60px] outline-none border border-[#12387e] rounded-[10px] pl-[20px] text-[#dbe2fb] bg-transparent'
                                    />
                                </div>
                                <div className="mb-[25px]">
                                    <label htmlFor="message" className='cursor-pointer inline-block mb-2 text-[17px]'>Message <span className='text-[#f1481f] text-[20]'>*</span></label>
                                    <textarea placeholder='Enter Your Message' spellCheck="false" name='message' required
                                        className='w-full rounded-lg flex bg-transparent p-5 h-44 text-white border border-[#12387e] outline-none resize-none'
                                    />
                                </div>
                                <div className="mb-[25px]">
                                    <input type="submit" value="Send Message"
                                        className='w-full uppercase rounded-[30px] border-none font-semibold h-[60px] pl-5 text-white cursor-pointer p-0 bg-gradient-to-r from-[#ff4343] via-[#aa52a1] to-[#5560ff] transition ease-linear duration-300 '
                                    />
                                </div>
                            </form>
                        </div>
                        {/* Right Side */}
                        <div className="w-full md:w-1/2 z-40 md:mt-[370px]">
                            <div className="flex flex-wrap bg-[#001232] py-20">
                                <div className="w-1/2 flex flex-wrap gap-x-3 pl-5 justify-center items-center">
                                    <div className="max-w-[58px] flex">
                                        <Image src="https://i.postimg.cc/Y9FZg3F1/contact01.png" height={57} width={55} alt='logo'/>
                                    </div>
                                    <div className="mt-2">
                                        <p className='uppercase text-[18px] text-white mb-[5px]'>Phone Number</p>
                                        <p className='uppercase text-[18px] text-[#31D7A8] mt-3'>+1234 56789</p>
                                    </div>
                                </div>
                                <div className="w-1/2 flex flex-wrap gap-x-3 pl-5 justify-center items-center border-l-[1px] border-[#5e5e5e] ">
                                    <div className="max-w-[58px]">
                                        <Image src="https://i.postimg.cc/Y9FZg3F1/contact01.png" height={57} width={55} alt='logo'/>
                                    </div>
                                    <div className="mt-2">
                                        <p className='uppercase text-[18px] text-white mb-[5px]'>Phone Number</p>
                                        <p className='uppercase text-[18px] text-[#31D7A8] mt-3'>+1234 56789</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetTouchSection;
