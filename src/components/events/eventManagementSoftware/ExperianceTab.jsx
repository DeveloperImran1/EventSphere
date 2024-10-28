"use client";
import { Image } from 'lucide-react';
import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const ExperianceTab = () => {
    return (
        <div className='container mx-auto bg-[#0F1F3D] py-20'>
            <div className='w-2/3 mx-auto text-center'>
                <h5 className='text-xl text-white'>Build A Custom Event Mobile App</h5>
                <h1 className='text-3xl lg:text-5xl leading-tight font-bold text-white my-8'>Give Your Attendees An Experience They Will Remember For Life</h1>
                <p className='mb-5 text-white'>Eventifys mobile app isnt just a tool, its the game-changer your events need, elevating engagement to new heights and ensuring your attendees are immersed in an experience that goes beyond their expectations.</p>
            </div>

            {/* tab */}
            <div className='text-white'>
                <Tabs>
                    <TabList className="flex gap-5 px-10 py-2 w-2/3 mx-auto mb-10">
                        {["Tag-Base Matching", "Chat & Meeting", "Gamification"].map((tabName, index) => (
                            <Tab key={index} className={({ selected }) => `
                                px-4 lg:px-10 py-2 lg:py-4 font-bold text-2xl lg:text-4xl 
                                ${selected ? 'bg-blue-800' : 'bg-blue-600'} text-white rounded-full
                            `}>
                                {tabName}
                            </Tab>
                        ))}
                    </TabList>

                    {/* Tab Panels */}
                    <TabPanel>
                        <div className="flex items-center justify-center h-full">
                            <div className="w-1/2 p-5 bg-white space-y-5 h-full">
                                <h3 className="text-3xl font-bold text-blue-500">Attendee Engagement</h3>
                                <h2 className='font-bold text-black'>Tag-Based Matchmaking</h2>
                                <p className="mt-4">Never bore an attendee. Connect like-minded people to promote socialization with a unique tag-based matchmaking algorithm.</p>
                                <button className='text-2xl lg:text-3xl px-6 p-3 bg-blue-600 rounded-full cursor-pointer hover:bg-green-500 mb-10 text-white'>Learn More</button>
                            </div>
                            <div className="w-1/2 p-5 bg-blue-600 lg:p-10">
                                <div className='w-full'>
                                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOp62K2fJxT5QNceG5IMZYCxSIWaFJmLaRMw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAJpnyGD_3WoCEplVFnBi5F_9lw286iS6Jwg&s"
                                        alt="Content 1"
                                        height={500}
                                        width={500}
                                        layout='responsive'
                                        objectFit='cover'
                                        className="w-full h-auto rounded-lg shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="flex items-center justify-center h-full">
                            <div className="w-1/2 p-5">
                                <h3 className="text-3xl font-bold text-blue-500">Attendee Engagement</h3>
                                <h2 className="text-3xl font-bold">Chat & Meetings</h2>
                                <p className="mt-4">Get people talking about your event by providing an event-exclusive chat room.</p>
                                <button className='text-2xl lg:text-3xl px-6 p-3 bg-blue-600 rounded-full cursor-pointer hover:bg-green-500 mb-10 text-white'>Learn More</button>
                            </div>
                            <div className="w-1/2 p-5">
                                <Image
                                    src="https://cdn.prod.website-files.com/61cee5eb4d566d3471eca114/65cddebfd5648946423d1e54_meetings.png"
                                    alt="Content 2"
                                    height={700}
                                    width={400}
                                    layout='responsive'
                                    objectFit='cover'
                                    className="rounded-lg shadow-lg" />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="flex items-center justify-center h-full">
                            <div className="w-1/2 p-5">
                                <h3 className="text-3xl font-bold text-blue-500">Attendee Engagement</h3>
                                <h2 className="text-3xl font-bold">Gamification</h2>
                                <p className="mt-4">Get people talking about your event by providing an event-exclusive chat room.</p>
                                <button className='text-2xl lg:text-3xl px-6 p-3 bg-blue-600 rounded-full cursor-pointer hover:bg-green-500 mb-10 text-white'>Learn More</button>
                            </div>
                            <div className="w-1/2 p-5">
                                <Image
                                    src="https://cdn.prod.website-files.com/61cee5eb4d566d3471eca114/65cde42839dc5b5eebffe9a4_gamification%20tab.png"
                                    alt="Content 3"
                                    layout='responsive'
                                    objectFit='cover'
                                    height={700}
                                    width={500}
                                    className="w-full h-auto rounded-lg shadow-lg" />
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ExperianceTab;
