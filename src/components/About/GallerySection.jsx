import Image from 'next/image';
import React from 'react';

const GallerySection = () => {
    return (
        <div className="relative">
        <div className="text-lg text-[#dbe2fb] leading-7 bg-[#011440] lg:bg-[#032055] pb-20 lg:pb-[120px] pt-20 lg:pt-[120px]">
            <div className="w-full px-4 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1200px]">
                <div className="text-center mb-10 md:mb-15">
                    <h1 className="text-[#31d7a9] uppercase block leading-10 text-[18px] mb-2 mt-[-8px] sm:text-[24px] sm:mb-[25px] sm:mt-[-6px] text-center md:mb-[40px]">
                        Take a look at our
                    </h1>
                    <h1 className="uppercase text-white font-bold sm:mb-6 sm:text-[50px] sm:leading-[60px] sm:mt-[-13px] text-2xl mb-4">
                        A ticket for every fan.
                    </h1>
                    <p className="text-base text-[#dbe2fb] text-center -mt-[11px] sm:text-lg sm:max-w-[790px] sm:mx-auto sm:last:mb-[-7px]">
                        World is committed to making participation in the event a harassment-free experience for everyone, regardless of level of experience, gender, gender identity, and expression.
                    </p>
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