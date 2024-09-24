import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Logo = () => {
    return (
        <Link href="/" className='flex items-center'>
            <Image src="/asssets/images/logo-white.png" alt='logo' width={60} height={60} className='object-cover rounded-full mr-[-10px]'/>
            <h2 className='text-white font-bold'>vent<span className='text-[#eab308]'>Sphere</span></h2>
        </Link>
    );
};

export default Logo;