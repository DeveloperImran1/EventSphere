import Image from 'next/image';
import React from 'react';

const EventStaticSection = () => {
    return (
        <div className=' w-11/12 flex flex-col lg:flex-row gap-12 mx-auto mb-20'>
            <Image src="https://img.freepik.com/free-photo/young-handsome-business-man-with-laptop-office_1303-21060.jpg"
                alt='organizers picture'
                height={500}
                width={500}
                layout='responsive'
                objectFit='cover'
                className='rounded-2xl' />
            <div>
                <h2 className='font-bold'>Event That Engages, Converts, and Generates Revenue</h2>
                <p className='my-12'>Discover the most laid-back way to host an award-worthy event. From customizable ticketing, agenda management, and networking tools to session feedback — Eventify offers comprehensive tools to transform your event from a logistical nightmare to a flawlessly orchestrated experience. Eventify helps you seamlessly plan and execute:</p>
                <ul class="text-xl font-bold space-y-4">
                    <li> In-Person Events</li>
                    <li>Virtual Events</li>
                    <li>Hybrid Events</li>

                </ul>
            </div>
        </div>
    );
};

export default EventStaticSection;