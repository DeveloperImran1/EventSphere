import Link from 'next/link';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const ContactHeader = () => {
    return (
        <section className="relative bg-[url('https://i.postimg.cc/SNVfkfZ1/banner07.jpg')] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:opacity-80 before:bg-gradient-to-r before:from-[#0f5ae0] before:to-[#7400ba] py-[260px] pb-[117px]">
            <div className="w-full px-4 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px] relative z-[1]">
                <div className="text-center text-white max-w-xl mx-auto">
                    <h1 className="lg:text-[60px] text-4xl uppercase leading-[60px] -mt-[13px] font-bold mb-4">Contact us</h1>
                   <p className='text-white'>Get in touch with us for any inquiries, support, or feedback. Our team is here to assist you and ensure you have the best experience. We are just a message away!</p>
                </div>

            </div>
        </section>
    );
};

export default ContactHeader;