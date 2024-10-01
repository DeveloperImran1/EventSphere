import Image from 'next/image';
import React from 'react';

const FirstCard = () => {
    return (
        <div className="max-w-md mx-start mt-6 bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="p-4">
                <h2 className="text-2xl font-bold text-green-500  mb-2">Today Highlights</h2>
                <div className="w-full">
                    <Image
                        height={675}
                        width={1200}
                        
                        src="https://i.postimg.cc/zXfXjX4L/1-94052b5dcef62c048766.jpg" 
                        alt="Darwin Creative Agency" 
                        className="w-full h-48 object-cover"
                    />
                </div>
                <h2 className="text-xl font-semibold text-gray-700 mt-4">Darwin Creative Agency Theme</h2>
                <p className="text-gray-600 mt-2">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                </p>
            </div>
        </div>
    );
};

export default FirstCard;
