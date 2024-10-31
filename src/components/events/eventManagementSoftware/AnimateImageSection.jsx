"use client";
import React from "react";
import "./custom.css";
import Image from "next/image";

const AnimatedImageSection = () => {
    return (
        <div className="container mx-auto mb-16 flex flex-col lg:flex-row justify-between items-center w-full">
            {/* Left side text (1/2 width) */}
            <div className="lg:w-1/2 p-5">
                <h2 className="text-3xl font-bold mb-4">Ordinary Tools, Ordinary Events—Summon The Kraken Of Online Event Management Software</h2>
                <p className="text-lg">
                    Here are some signs that show your event management system is too basic or outdated.
                </p>
                <ul className="mt-10">
                    <li>Hefty ticket cut</li>
                    <li>Unprofessional websites and registrations</li>
                    <li>Too many tools for a single event</li>
                    <li>Date Security Issue</li>
                </ul>
            </div>

            {/* Right side with 1/2 split into 2 halves for images */}
            <div className="lg:w-1/2 flex flex-col lg:flex-row gap-5">
                {/* Left-side images (animate from down to top) */}
                <div className="lg:w-1/2 flex flex-col justify-between h-auto lg:h-80 relative overflow-hidden">
                    <div className="absolute inset-0 move-up">
                        <Image
                            src="https://img.freepik.com/premium-vector/online-payment-concept-people-pay-online-shopping-using-debit-credit-card-online-payment-through-mobile-app_115790-235.jpg?ga=GA1.1.245323466.1722741120&semt=ais_hybrid"
                            alt="Image 1"
                            height={200}
                            width={200}
                            layout="responsive"
                            objectFit="cover"
                            className="w-full mb-4" />
                        <Image 
                        src="https://img.freepik.com/free-photo/decorated-banquet-hall-with-served-round-table-with-hydrangea-centerpiece-chiavari-chairs_8353-10059.jpg?size=626&ext=jpg&ga=GA1.1.245323466.1722741120&semt=ais_hybrid" 
                        alt="Image 2" 
                        height={200}
                        width={200}
                        layout="responsive"
                        objectFit="cover"
                        className="w-full mb-4" />
                        <Image 
                        src="https://img.freepik.com/free-vector/smartphone-scanning-qr-code_23-2148623155.jpg?ga=GA1.1.245323466.1722741120&semt=ais_hybrid" 
                        alt="Image 3" 
                        height={200}
                        width={200}
                        layout="responsive"
                        objectFit="cover"
                        className="w-full mb-4" />
                        <Image 
                        src="https://img.freepik.com/free-vector/receipt-flat-design_23-2147907702.jpg?ga=GA1.1.245323466.1722741120&semt=ais_hybrid" 
                        alt="Image 4" 
                        height={200}
                        width={200}
                        layout="responsive"
                        objectFit="cover"
                        className="w-full" />
                    </div>
                </div>

                {/* Right-side images (animate from top to down) */}
                <div className="lg:w-1/2 flex flex-col justify-between h-auto lg:h-80 relative overflow-hidden">
                    <div className="absolute inset-0 move-down">
                        <Image
                            src="https://img.freepik.com/free-photo/tender-hydrangea-centerpiece-round-table-with-candles_8353-10056.jpg?size=626&ext=jpg&ga=GA1.1.245323466.1722741120&semt=ais_hybrid"
                            alt="Image 5"
                            height={200}
                            width={200}
                            layout="responsive"
                            objectFit="cover"
                            className="w-full mb-4" />
                        <Image
                            src="https://img.freepik.com/free-vector/payment-receipt-template-with-flat-design_23-2147895616.jpg?ga=GA1.1.245323466.1722741120&semt=ais_hybrid"
                            alt="Image 6"
                            height={200}
                            width={200}
                            layout="responsive"
                            objectFit="cover"
                            className="w-full mb-4" />
                        <Image
                            src="https://img.freepik.com/free-photo/banquet-manager-setting-table-event_23-2148085306.jpg?size=626&ext=jpg&ga=GA1.1.245323466.1722741120&semt=ais_hybrid"
                            alt="Image 7"
                            height={200}
                            width={200}
                            layout="responsive"
                            objectFit="cover"
                            className="w-full mb-4" />
                        <Image
                            src="https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481464.jpg?size=626&ext=jpg&ga=GA1.1.245323466.1722741120&semt=ais_hybrid"
                            alt="Image 8"
                            height={200}
                            width={200}
                            layout="responsive"
                            objectFit="cover"
                            className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedImageSection;
