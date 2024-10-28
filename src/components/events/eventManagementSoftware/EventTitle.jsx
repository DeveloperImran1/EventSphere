"use client"
import CountUp from 'react-countup';
import React from 'react'

const EventTitle = () => {
    return (
        <div className='lg:mb-20 my-5 lg:mt-10'>
            <div
                className="relative text-center py-20 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://thumbs.dreamstime.com/b/time-management-project-efficiency-strategy-goals-business-technology-internet-concept-time-management-project-efficiency-strategy-108134633.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.9)',
                }}
            >
                {/* Semi-transparent Overlay */}
                <div className="absolute inset-0 bg-black opacity-40"></div>

                {/* Content */}
                <div className="relative z-10 mt-10">
                    {/* <button className="bg-orange-400 px-4 py-1 rounded-3xl mb-3 animate-bounce">
                        ATTENTION
                    </button> */}
                    {/* <h5 className="text-xl text-white mb-6">All event hosts, managers, and organizers!</h5> */}
                    <h1 className="text-2xl lg:text-5xl 2xl:text-7xl font-bold mb-4 leading-tight max-w-3xl mx-auto text-white animate-fadeIn">
                        Reduce Stress By Over 50% With Eventify Powerful ALL-IN-ONE Event Management Software
                    </h1>
                    <p className="mb-8 text-white opacity-90 animate-fadeIn">
                        Hosting an event is stressful. We make it less stressful, more predictable, and totally groundbreaking with an <br /> all-encompassing solution for event management nightmares.
                    </p>
                    <button className="text-2xl lg:text-3xl px-6 py-3 bg-blue-600 rounded-full cursor-pointer hover:bg-green-500 transition-colors duration-900 text-white shadow-lg animate-pulse">
                        Book a Free Demo Now
                    </button>
                </div>
            </div>


            <hr className='mb-10' />

            <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 py-10 '>
                <div className='text-center shadow-md p-4 hover:bg-orange-50 hover:scale-x-105'>
                    <h2  className='text-3xl lg:text-4xl mb-2'>
                        Up to <span className='text-5xl lg:text-6xl text-blue-600'>
                            <CountUp start={0} end={70} duration={2.5} suffix="%" />
                        </span>
                    </h2>
                    <p className='text-xl lg:text-2xl text-gray-700'>Increase in event engagement rate</p>
                </div>
                <div className='text-center shadow-md p-4 hover:bg-orange-50 hover:scale-x-105'>
                    <h2 className='text-3xl lg:text-5xl mb-2 text-blue-600'>
                        <CountUp start={0} end={3} duration={2.5} suffix="x" />
                    </h2>
                    <p className='text-xl lg:text-2xl text-gray-700'>Increase in attendee retention</p>
                </div>
                <div className='text-center shadow-md p-4 hover:bg-orange-50 hover:scale-x-105'>
                    <h2 className='text-3xl lg:text-4xl mb-2'>
                        Up to <span className='text-5xl lg:text-6xl text-blue-600'>
                            <CountUp start={0} end={200} duration={2.5} suffix="%" />
                        </span>
                    </h2>
                    <p className='text-xl lg:text-2xl text-gray-700'>Boost in ticket sales growth</p>
                </div>
            </div>
        </div>
    )
}

export default EventTitle