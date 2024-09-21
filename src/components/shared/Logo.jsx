import Image from 'next/image';
import React from 'react';


const Logo = () => {
    return (
        <div className='flex gap-2 items-center'>
            <Image src="/image/logo.jpg" alt='logo' width={60} height={60} className='object-cover rounded-full'/>
            <h2 className='text-yellow-600 font-bold'>Event<span className='text-blue-400'>Sphere</span></h2>
        </div>
    );
};

export default Logo;