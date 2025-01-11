import SectionTitle from '@/components/shared/SectionTitle';
import SectionTitleSimple from '@/components/shared/SectionTitleSimple';
import Image from 'next/image';
import React from 'react';

const EventRegister = () => {
    return (
        <div className=' container mx-auto '>
            <SectionTitleSimple
                title="Seamless Registration And Ticketing Systems"
                subtitle="The Secret To Sold Out Events"
            >
            </SectionTitleSimple>
            <div className='flex flex-col lg:flex-row gap-12 '>
                <div className='flex-1'>
                    <div>
                        <h3 className='font-bold  mb-2'>Registration</h3>
                        <p className='mb-10'>Create an account to access exclusive features. Fill out the registration form with your details and join us today!</p>
                    </div>
                    <div>
                        <h3 className='font-bold  mb-2'>Check-Out-Form</h3>
                        <p className='mb-10'>Complete your purchase by filling out the checkout form with your shipping and payment details. Secure and fast processing!!</p>
                    </div>
                    <div>
                        <h3 className='font-bold  mb-2'>Ticketing</h3>
                        <p className='mb-10'>Book your tickets easily for events. Select your preferred options, fill in the details, and enjoy hassle-free access!</p>
                    </div>
                    <div>
                        <h3 className='font-bold  mb-2'>Widgets</h3>
                        <p className='mb-10'>Enhance your site with customizable widgets. Display real-time data, interactive elements, and essential features for a better user experience!</p>
                    </div>
                   

                </div>
                <div className='flex-1'>
                    <Image src="https://img.freepik.com/premium-vector/newest-smartphone-with-blue-background-mock-up-email_628973-80.jpg?w=740" 
                    alt="register" 
                    height={500}
                    width={500}
                    layout='responsive'
                    objectFit='cover'
                    className='object-cover rounded-2xl'/>
                </div>
            </div>
        </div>
    );
};

export default EventRegister;