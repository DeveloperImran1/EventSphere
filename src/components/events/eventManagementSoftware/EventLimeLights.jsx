import SectionTitle from '@/components/shared/SectionTitle';
import React from 'react';

const EventLimeLights = () => {
    return (
        <div>
            <div className='container w-11/12 mx-auto mb-20'>
                <SectionTitle
                    subTitle="Stakeholders Make or Break Your Event"
                    title="Give Them The Limelight They Deserve!"
                >
                </SectionTitle>
                <div className='flex lg:flex-row-reverse flex-col  gap-12 '>
                    <div className='flex-1'>
                        <div>
                            <h3 className='font-bold  mb-2'>For Exhibitors & Sponsors</h3>
                            <p className='mb-10'>Connect with exhibitors and sponsors to showcase your brand. Discover opportunities to engage and enhance your event experience</p>
                        </div>
                        <div>
                            <h3 className='font-bold  mb-2'>Lead Captured</h3>
                            <p className='mb-10'>Effortlessly collect potential customer information with lead capture forms. Drive engagement and grow your audience for future marketing success!</p>
                        </div>
                        <div>
                            <h3 className='font-bold  mb-2'>Automotion</h3>
                            <p className='mb-10'>Streamline your processes with automation. Enhance efficiency, reduce manual tasks, and focus on what matters most for your business!</p>
                        </div>
                        <div>
                            <h3 className='font-bold  mb-2'>Meetings</h3>
                            <p className='mb-10'>Schedule and manage meetings effortlessly. Coordinate with participants, set agendas, and ensure productive discussions for effective collaboration!</p>
                        </div>

                    </div>
                    <div className='flex-1'>
                        <img src="https://img.freepik.com/free-vector/medical-booking-app_23-2148562337.jpg?t=st=1726928764~exp=1726932364~hmac=0a4d6c4d9d36d700abc7f5e1547b6b11777a9eb029ae3f32144e8da001236c80&w=740" alt="register" className='object-cover rounded-2xl' />
                    </div>
                </div>
            </div>

    {/* next event section  */}

            <div className='container w-11/12 mx-auto mb-20'>
                <SectionTitle
                    subTitle="See What Worked And What Didn’t"
                    title="Make Your Next Event Successful With Our Event Planning Software"
                >
                </SectionTitle>
                <div className='flex lg:flex-row flex-col  gap-12 '>
                    <div className='flex-1'>
                        <div>
                            <h3 className='font-bold  mb-2'>Engaging Interaction</h3>
                            <p className='mb-10'>Enhance user experience with engaging interactions and intuitive design. Foster connections that keep users coming back</p>
                        </div>
                        <div>
                            <h3 className='font-bold  mb-2'>Speaker Showcase</h3>
                            <p className='mb-10'>Highlight speakers to engage attendees and showcase their expertise. Discover insights from industry leaders</p>
                        </div>
                        <div>
                            <h3 className='font-bold  mb-2'>Comprehensive Event Insights</h3>
                            <p className='mb-10'>Access event insights for smarter planning and execution. Make informed decisions for success!</p>
                        </div>
                        <div>
                            <h3 className='font-bold  mb-2'>Analytics & Implements</h3>
                            <p className='mb-10'>Leverage analytics to inform decisions and implement strategies for improved performance and success.</p>
                        </div>


                    </div>
                    <div className='flex-1'>
                        <img src="https://img.freepik.com/premium-photo/calendar-computer-software-application-modish-schedule-planning_31965-282631.jpg?w=900" alt="register" className='object-cover rounded-2xl' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventLimeLights;