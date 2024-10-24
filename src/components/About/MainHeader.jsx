import Link from 'next/link';
import React from 'react';
import { FaAngleRight } from "react-icons/fa";

const MainHeader = () => {
    return (
        <section className="relative bg-[url('https://img.freepik.com/premium-photo/mockup-poster-group-business-people-with-banner-outdoor-advertising-portrait-company-announcement-collaboration-employees-empty-billboard-marketing-news-about-us-branding_590464-397142.jpg?semt=ais_hybrid')] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 mt-16 py-[260px] pb-[117px]">
        <div className="w-full px-4 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1170px] relative z-[1]">
            <div className="text-center text-white">
                <div className="flex flex-col items-center justify-center p-3 mb-4 max-w-2xl mx-auto">
                    <h2 className="text-blue-500 text-3xl lg:text-5xl mb-4">
                        EventSphere - Your Ticket <br /> to Experiences
                    </h2>
                    <p className="text-lg max-w-lg mx-auto mb-6">
                        Explore a wide range of events, from concerts and sports to workshops and festivals. Book your tickets easily and enjoy a seamless event experience.
                    </p>
                    <button className="bg-blue-500 py-2 px-6 mt-4 rounded-md hover:bg-blue-600 transition duration-300">
                        Explore More
                    </button>
                </div>
            </div>
        </div>
    </section>
    
    );
};

export default MainHeader;