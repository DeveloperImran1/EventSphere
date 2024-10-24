import Image from 'next/image';
import React from 'react';
import SectionTitleSimple from '../shared/SectionTitleSimple';

const GallerySection = () => {
    return (
        <div className="relative bg-white">
            <div className="text-lg text-[#032055] leading-7  ">
                <div className="w-full px-4 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1200px]">
                    <div className="text-center mb-10 md:mb-15">

                        <SectionTitleSimple 
                        title=" A Ticket for Every Users"
                        subtitle=" World is committed to making participation in the event a harassment-free experience for everyone, regardless of experience level, gender, gender identity, or expression."/>
                       
                    </div>
                    {/* Image Gallery */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-4 md:h-[700px]">
                        <div className="w-full h-auto p-2 col-span-2 row-span-2 md:col-span-1 md:row-span-1">
                            <Image height={266} width={266} src="https://i.postimg.cc/mgH3pRB3/gallery05.jpg" alt="Event 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full h-auto p-2 col-span-2 row-span-2">
                            <Image height={266} width={266} src="https://i.postimg.cc/TYJvLyKF/gallery08.jpg" alt="Event 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full h-auto p-2 col-span-2 row-span-2 md:col-span-1 md:row-span-1">
                            <Image height={266} width={266} src="https://i.postimg.cc/Tw5XpCbJ/gallery11.jpg" alt="Event 3" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full h-auto p-2 col-span-2 row-span-2 md:col-span-1 md:row-span-1">
                            <Image height={266} width={266} src="https://i.postimg.cc/J4gcQtV4/gallery06.jpg" alt="Event 4" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full h-auto p-2 col-span-2 row-span-2 md:col-span-1 md:row-span-1">
                            <Image height={266} width={266} src="https://i.postimg.cc/yxqC9cX4/gallery12.jpg" alt="Event 5" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full h-auto p-2 col-span-2 row-span-2 md:col-span-1 md:row-span-1">
                            <Image height={266} width={266} src="https://i.postimg.cc/Fs1Vc36B/gallery07.jpg" alt="Event 6" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full h-auto p-2 col-span-2 row-span-2 md:col-span-1 md:row-span-1">
                            <Image height={266} width={266} src="https://i.postimg.cc/vTWFvT31/gallery09.jpg" alt="Event 7" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full h-auto p-2 col-span-2 row-span-2 md:col-span-1 md:row-span-1">
                            <Image height={266} width={266} src="https://i.postimg.cc/MKS8p0p1/gallery10.jpg" alt="Event 8" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full h-auto p-2 col-span-2 row-span-2 md:col-span-1 md:row-span-1">
                            <Image height={266} width={266} src="https://i.postimg.cc/66RXKbt9/gallery13.jpg" alt="Event 9" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default GallerySection;