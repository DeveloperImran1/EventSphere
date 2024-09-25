import Image from 'next/image';
import React from 'react';


const Logo = () => {
    return (
        <div className='flex items-center'>
            <Image src="/asssets/images/logo-white.png" alt='logo' width={70} height={70} className='object-cover rounded-full mr-[-10px]'/>
            <h2 className='text-white font-bold'>vent<span className='text-[#eab308]'>Sphere</span></h2>
        </div>
    );
};

export default Logo;