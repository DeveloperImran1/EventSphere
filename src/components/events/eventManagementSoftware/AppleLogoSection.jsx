import Image from 'next/image';
import React from 'react';

const AppleLogoSection = () => {
    return (
        <section className='container mx-auto my-32  bg-[#145AFF]'>
            <div className='flex flex-col lg:flex-row gap-12 py-20'>
                <div className='flex gap-10 flex-1 justify-center items-center'>
                    <figure>
                        <div className='w-40'>
                            <Image
                                src="https://cdn.prod.website-files.com/61cee5eb4d566d3471eca114/63fc7fb3a7619a4966337c8c_apple-logo.png"
                                alt='Apple logo'
                                layout='responsive'
                                objectFit='cover'
                                width={650}
                                height={650}
                                className='rounded-2xl'
                            />
                        </div>
                        <figcaption className='sr-only'>Apple Logo</figcaption>
                    </figure>
                    <figure>
                        <div className='w-40'>
                            <Image
                                src="https://cdn.prod.website-files.com/61cee5eb4d566d3471eca114/63fc7fe7799f80b5684443a1_android%20logo.png"
                                alt='Android logo'
                                layout='responsive'
                                objectFit='cover'
                                width={250}
                                height={250}
                                className='rounded-2xl'
                            />
                        </div>
                        <figcaption className='sr-only'>Android Logo</figcaption>
                    </figure>
                </div>
                <article className='flex-1'>
                    <h2 className='font-bold text-white'>Event That Engages, Converts, and Generates Revenue</h2>
                    <p className='my-12 text-white'>
                        Discover the most laid-back way to host an award-worthy event. From customizable ticketing,
                        agenda management, and networking tools to session feedback — Eventify offers comprehensive
                        tools to transform your event from a logistical nightmare to a flawlessly orchestrated experience.
                        Eventify helps you seamlessly plan and execute:
                    </p>
                </article>
            </div>
        </section>
    );
};

export default AppleLogoSection;
