import SectionTitle from '@/components/shared/SectionTitle';
import React from 'react';

const EventLimeLights = () => {
    return (
        <section className=' w-11/12 mx-auto'>
            {/* First Section */}
            <article>
                <SectionTitle
                    subTitle="Stakeholders Make or Break Your Event"
                    title="Give Them The Limelight They Deserve!"
                />
                <div className='flex lg:flex-row-reverse flex-col gap-12'>
                    {/* Left Content */}
                    <div className='flex-1'>
                        <h3 className='font-bold mb-2'>For Exhibitors & Sponsors</h3>
                        <p className='mb-10'>Connect with exhibitors and sponsors to showcase your brand. Discover opportunities to engage and enhance your event experience</p>
                        
                        <h3 className='font-bold mb-2'>Lead Captured</h3>
                        <p className='mb-10'>Effortlessly collect potential customer information with lead capture forms. Drive engagement and grow your audience for future marketing success!</p>
                        
                        <h3 className='font-bold mb-2'>Automotion</h3>
                        <p className='mb-10'>Streamline your processes with automation. Enhance efficiency, reduce manual tasks, and focus on what matters most for your business!</p>
                        
                        <h3 className='font-bold mb-2'>Meetings</h3>
                        <p className='mb-10'>Schedule and manage meetings effortlessly. Coordinate with participants, set agendas, and ensure productive discussions for effective collaboration!</p>
                    </div>
                    {/* Right Image */}
                    <div className='flex-1'>
                        <img src="https://img.freepik.com/free-vector/medical-booking-app_23-2148562337.jpg?t=st=1726928764~exp=1726932364~hmac=0a4d6c4d9d36d700abc7f5e1547b6b11777a9eb029ae3f32144e8da001236c80&w=740" alt="register" className='object-cover rounded-2xl' />
                    </div>
                </div>
            </article>

            {/* Second Section */}
            <article>
                <SectionTitle
                    subTitle="See What Worked And What Didn’t"
                    title="Make Your Next Event Successful With Our Event Planning Software"
                />
                <div className='flex lg:flex-row flex-col gap-12'>
                    {/* Left Content */}
                    <div className='flex-1'>
                        <h3 className='font-bold mb-2'>Engaging Interaction</h3>
                        <p className='mb-10'>Enhance user experience with engaging interactions and intuitive design. Foster connections that keep users coming back</p>
                        
                        <h3 className='font-bold mb-2'>Speaker Showcase</h3>
                        <p className='mb-10'>Highlight speakers to engage attendees and showcase their expertise. Discover insights from industry leaders</p>
                        
                        <h3 className='font-bold mb-2'>Comprehensive Event Insights</h3>
                        <p className='mb-10'>Access event insights for smarter planning and execution. Make informed decisions for success!</p>
                        
                        <h3 className='font-bold mb-2'>Analytics & Implements</h3>
                        <p className='mb-10'>Leverage analytics to inform decisions and implement strategies for improved performance and success.</p>
                    </div>
                    {/* Right Image */}
                    <div className='flex-1'>
                        <img src="https://img.freepik.com/free-photo/appointment-agenda-reminder-personal-organizer-calendar-concept_53876-13792.jpg?t=st=1726938133~exp=1726941733~hmac=5e963d76bb7a9393bed4c7b94dd4998b0326b0ac026912e9c15cfae6d22f8f1b&w=740" alt="register" className='object-cover rounded-2xl' />
                    </div>
                </div>
            </article>

            {/* Third Section */}
            <article className='mb-20'>
                <SectionTitle
                    subTitle="Miscellaneous"
                    title="Because Who Doesn’t Love A Little Extra Help!"
                />
                <div className='flex lg:flex-row-reverse flex-col gap-6 lg:gap-12'>
                    {/* Left Content */}
                    <div className='flex-1 lg:pt-32'>
                        <h3 className='font-bold mb-2'>Engaging Interaction</h3>
                        <p className='mb-10'>Enhance user experience with engaging interactions and intuitive design. Foster connections that keep users coming back</p>
                        
                        <h3 className='font-bold mb-2'>Speaker Showcase</h3>
                        <p className='mb-10'>Highlight speakers to engage attendees and showcase their expertise. Discover insights from industry leaders</p>
                        
                        <h3 className='font-bold mb-2'>Comprehensive Event Insights</h3>
                        <p className='mb-10'>Access event insights for smarter planning and execution. Make informed decisions for success!</p>
                    </div>
                    {/* Right Image */}
                    <div className='flex-1 bg-[#E7E8FF] pt-10 px-6 rounded-t-lg'>
                        <img src="https://cdn.prod.website-files.com/61cee5eb4d566d3471eca114/65c396d2b749951d9e9e513d_User%20Group%20Permissions%20(1).svg" alt="register" className='object-cover rounded-2xl' />
                    </div>
                </div>
            </article>
        </section>
    );
};

export default EventLimeLights;
