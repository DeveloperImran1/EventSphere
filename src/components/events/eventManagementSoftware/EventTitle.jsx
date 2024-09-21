
import React from 'react'

const EventTitle = () => {
    return (
        <div className='mb-20'>
            <div className='text-center mx-5 lg:w-2/3 lg:mx-auto '>
                <button className='bg-orange-400 px-4 py-1 rounded-3xl mb-1'>ATTENTION</button>
                <h5 className='text-xl mb-10'>All event hosts, managers, and organizers!</h5>
                <h1 className='text-3xl lg:text-5xl mb-4'>Reduce Stress By Over 50% <br /> With Eventify's Powerful <br /> ALL-IN-ONE Event <br /> Management Software</h1>
                <p className='mb-5'>Hosting an event is stressful. We make it less stressful, more predictable, and totally groundbreaking with an all-encompassing solution for event management nightmares.</p>
                <button className='text-2xl lg:text-3xl px-6 p-3 bg-blue-600 rounded-full cursor-pointer hover:bg-green-500 mb-10'>Book a Free Demo Now </button>


            </div>
            <hr className='mb-10'/>
            <div className='w-5/6 mx-auto flex justify-between items-center'>
                <div className=''>
                    <h2 className='text-3xl mb-5 text-center'>Upto <span className='text-5xl text-center'>70%</span></h2>
                    <p className='text-2xl '>Increase in event engagement rate</p>
                </div>
                <div className=''>
                    <h2 className='text-3xl mb-5 lg:text-5xl text-center'>3x </h2>
                    <p className='text-2xl '>Increase in event engagement rate</p>
                </div>
                <div className=''>
                    <h2 className='text-3xl mb-5 text-center'>Upto <span className='text-5xl text-center'>200%</span></h2>
                    <p className='text-2xl'>Increase in event engagement rate</p>
                </div>
            </div>
        </div>
    )
}

export default EventTitle